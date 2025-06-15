# Local-First Sync Architecture Plan for Typyst
## Simplified Real-Time Cross-Platform Sync

## Executive Summary

This document outlines a streamlined plan to add real-time cross-platform sync to Typyst using Loro CRDTs for conflict-free data synchronization between web and desktop platforms. The architecture enables seamless synchronization of entire collections with automatic merge conflict resolution when documents are edited simultaneously across platforms.

**Key Technologies:**
- **Loro CRDT v1.5.0+**: Conflict-free replicated data types with tree structures for collections
- **Supabase**: Managed PostgreSQL with REST API and real-time subscriptions
- **Better Auth**: Modern authentication system for user management
- **TipTap + loro-prosemirror**: Rich text editing with CRDT integration
- **Unified Data Model**: Collections as Loro trees, documents as Loro text
- **Hybrid Storage**: Desktop filesystem + database sync, Web PGLite + API sync

**Architecture Approach:**
- **Supabase REST API** for data transport and user authentication
- **Loro CRDT** manages collection trees and document state with automatic conflict resolution
- **Better Auth** handles email/password authentication and session management
- **Real-time sync** via API polling and Loro state merging
- **Unified data model** across platforms with filesystem persistence on desktop

## Table of Contents

1. [Current State Analysis](#current-state-analysis)
2. [Unified Data Model](#unified-data-model)
3. [Authentication Architecture](#authentication-architecture)
4. [Sync Architecture](#sync-architecture)
5. [CRDT Integration Strategy](#crdt-integration-strategy)
6. [Storage Strategy](#storage-strategy)
7. [API Design](#api-design)
8. [Implementation Phases](#implementation-phases)
9. [Testing Strategy](#testing-strategy)

## Current State Analysis

### Web App Architecture
- **Database**: PGLite (browser-based PostgreSQL)
- **ORM**: Drizzle
- **Editor**: TipTap (ProseMirror-based)
- **Storage**: IndexedDB via PGLite
- **Data Model**: Collections and entries in separate tables

### Desktop App Architecture
- **Storage**: Local filesystem with JSON metadata
- **Editor**: TipTap
- **Platform**: Tauri
- **Data Storage**: Direct file operations with AppData metadata
- **File Operations**: Native filesystem access

### Sync Requirements
1. **Real-time sync** of entire collections across platforms
2. **Unified data model** using Loro CRDT trees
3. **Hybrid document IDs** combining filesystem paths and UUIDs
4. **Desktop filesystem persistence** maintained alongside sync
5. **Automatic conflict resolution** via Loro CRDT

## Unified Data Model

### Core CRDT Structure

```typescript
// Collection as Loro Tree with documents as children
interface TypystCollection {
  // Collection metadata
  metadata: LoroMap<{
    id: string;           // UUID for sync
    name: string;         // Display name
    path: string;         // Filesystem path (desktop) or virtual path (web)
    createdAt: number;
    updatedAt: number;
    settings: CollectionSettings;
  }>;
  
  // Document tree structure
  documents: LoroTree<DocumentNode>;
}

interface DocumentNode {
  // Hybrid ID system
  id: string;             // UUID for sync
  path: string;           // Relative path within collection
  name: string;           // Filename
  isFolder: boolean;      // Directory flag
  
  // Document content (only for files)
  content?: LoroText;     // Rich text content
  metadata?: LoroMap<{
    wordCount: number;
    lastModified: number;
    tags: string[];
  }>;
}

// Root sync document containing all user collections
interface UserSyncDocument {
  collections: LoroMap<TypystCollection>;
  metadata: LoroMap<{
    userId: string;
    lastSync: number;
    deviceId: string;
  }>;
}
```

### Database Schema (Supabase)

```sql
-- Better Auth tables (auto-created)
-- users, sessions, accounts handled by Better Auth

-- User sync documents (one per user)
CREATE TABLE user_sync_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL UNIQUE, -- Better Auth user ID
  loro_data BYTEA NOT NULL,      -- Serialized Loro document
  version_vector JSONB NOT NULL, -- For conflict detection
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Sync history for debugging and recovery
CREATE TABLE sync_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  device_id TEXT NOT NULL,
  loro_update BYTEA NOT NULL,    -- Loro update data
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Simple indexes for performance
CREATE INDEX idx_user_sync_documents_user_id ON user_sync_documents(user_id);
CREATE INDEX idx_sync_history_user_id ON sync_history(user_id);
CREATE INDEX idx_sync_history_timestamp ON sync_history(timestamp);
```

## Authentication Architecture

### Better Auth Setup

```typescript
// Server-side auth configuration
import { betterAuth } from "better-auth";
import { drizzle } from "drizzle-orm/postgres-js";

export const auth = betterAuth({
  database: drizzle(process.env.SUPABASE_DATABASE_URL!),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false // Simplify for MVP
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24       // Update daily
  },
  // Additional configuration as needed
});

// Client-side auth
import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: process.env.SUPABASE_FUNCTIONS_URL || "http://localhost:3000"
});

// Unified auth state management
class AuthManager {
  private session: Session | null = null;
  
  async signIn(email: string, password: string): Promise<void> {
    const result = await authClient.signIn.email({ email, password });
    if (result.data) {
      this.session = result.data;
      await this.initializeUserSync();
    }
  }
  
  async signUp(email: string, password: string): Promise<void> {
    const result = await authClient.signUp.email({ email, password });
    if (result.data) {
      this.session = result.data;
      await this.createUserSyncDocument();
    }
  }
  
  private async initializeUserSync(): Promise<void> {
    // Initialize sync for existing user
    await SyncManager.getInstance().initialize(this.session!.user.id);
  }
  
  private async createUserSyncDocument(): Promise<void> {
    // Create initial sync document for new user
    await SyncManager.getInstance().createUserDocument(this.session!.user.id);
  }
}
```

## Sync Architecture

### Real-Time Sync Manager

```typescript
class SyncManager {
  private loroDoc: LoroDoc;
  private userId: string;
  private deviceId: string;
  private syncInterval: NodeJS.Timeout | null = null;
  private pendingUpdates: Uint8Array[] = [];
  
  constructor(userId: string) {
    this.userId = userId;
    this.deviceId = this.generateDeviceId();
    this.loroDoc = new LoroDoc();
    this.loroDoc.setPeerId(this.deviceId);
    
    this.setupLocalUpdateHandling();
  }
  
  // Initialize sync for user
  async initialize(): Promise<void> {
    // Load user's sync document from Supabase
    const syncDoc = await this.fetchUserSyncDocument();
    if (syncDoc) {
      this.loroDoc.import(syncDoc.loro_data);
    }
    
    // Start real-time sync
    this.startRealTimeSync();
  }
  
  // Real-time sync via polling (can upgrade to WebSockets later)
  private startRealTimeSync(): void {
    this.syncInterval = setInterval(async () => {
      await this.performSync();
    }, 2000); // 2-second polling for real-time feel
  }
  
  private async performSync(): Promise<void> {
    try {
      // Send local updates to server
      if (this.pendingUpdates.length > 0) {
        await this.pushUpdates();
      }
      
      // Pull remote updates from server
      await this.pullUpdates();
      
    } catch (error) {
      console.error('Sync failed:', error);
      // Implement exponential backoff here
    }
  }
  
  private async pushUpdates(): Promise<void> {
    const updates = [...this.pendingUpdates];
    this.pendingUpdates = [];
    
    for (const update of updates) {
      await fetch('/api/sync/push', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',
          'Authorization': `Bearer ${await this.getAuthToken()}`
        },
        body: update
      });
    }
  }
  
  private async pullUpdates(): Promise<void> {
    const response = await fetch('/api/sync/pull', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${await this.getAuthToken()}`
      }
    });
    
    if (response.ok) {
      const updates = await response.arrayBuffer();
      if (updates.byteLength > 0) {
        this.loroDoc.import(new Uint8Array(updates));
        await this.persistToLocal();
      }
    }
  }
  
  private setupLocalUpdateHandling(): void {
    this.loroDoc.subscribeLocalUpdates((update: Uint8Array) => {
      this.pendingUpdates.push(update);
    });
  }
  
  // Platform-specific local persistence
  private async persistToLocal(): Promise<void> {
    if (this.isDesktop()) {
      await this.persistToFilesystem();
    } else {
      await this.persistToPGLite();
    }
  }
  
  private async persistToFilesystem(): Promise<void> {
    // Desktop: Export collections to filesystem
    const collections = this.loroDoc.getMap('collections');
    
    for (const [collectionId, collection] of collections.entries()) {
      const collectionData = collection as TypystCollection;
      const collectionPath = collectionData.metadata.get('path') as string;
      
      // Ensure collection directory exists
      await this.ensureDirectory(collectionPath);
      
      // Write documents to filesystem
      const documents = collectionData.documents;
      await this.writeDocumentsToFilesystem(documents, collectionPath);
      
      // Update collection metadata
      await this.writeCollectionMetadata(collectionPath, collectionData.metadata);
    }
  }
  
  private async persistToPGLite(): Promise<void> {
    // Web: Update PGLite database
    const collections = this.loroDoc.getMap('collections');
    
    for (const [collectionId, collection] of collections.entries()) {
      const collectionData = collection as TypystCollection;
      
      // Update collection in PGLite
      await this.updatePGLiteCollection(collectionData);
      
      // Update documents in PGLite
      const documents = collectionData.documents;
      await this.updatePGLiteDocuments(documents, collectionId);
    }
  }
}
```

## CRDT Integration Strategy

### Collection Tree Management

```typescript
class CollectionManager {
  private loroDoc: LoroDoc;
  private collectionsMap: LoroMap;
  
  constructor(loroDoc: LoroDoc) {
    this.loroDoc = loroDoc;
    this.collectionsMap = loroDoc.getMap('collections');
  }
  
  // Create new collection
  createCollection(name: string, path: string): string {
    const collectionId = crypto.randomUUID();
    const collection = this.loroDoc.getMap(`collection_${collectionId}`);
    
    // Set collection metadata
    const metadata = collection.getMap('metadata');
    metadata.set('id', collectionId);
    metadata.set('name', name);
    metadata.set('path', path);
    metadata.set('createdAt', Date.now());
    metadata.set('updatedAt', Date.now());
    
    // Initialize document tree
    const documents = collection.getTree('documents');
    documents.enableFractionalIndex(0.1); // Enable automatic ordering
    
    // Add to collections map
    this.collectionsMap.set(collectionId, collection);
    
    return collectionId;
  }
  
  // Add document to collection
  addDocument(collectionId: string, parentPath: string | null, name: string, content: string): string {
    const collection = this.collectionsMap.get(collectionId) as LoroMap;
    const documents = collection.getTree('documents');
    
    // Create document node
    const documentId = crypto.randomUUID();
    const relativePath = parentPath ? `${parentPath}/${name}` : name;
    
    const nodeId = documents.create(parentPath);
    const nodeData = documents.getMap(nodeId);
    
    nodeData.set('id', documentId);
    nodeData.set('path', relativePath);
    nodeData.set('name', name);
    nodeData.set('isFolder', false);
    
    // Add content if it's a document
    if (!name.endsWith('/')) {
      const contentText = documents.createText();
      contentText.insert(0, content);
      nodeData.set('content', contentText);
      
      const metadata = documents.createMap();
      metadata.set('wordCount', content.split(/\s+/).length);
      metadata.set('lastModified', Date.now());
      metadata.set('tags', []);
      nodeData.set('metadata', metadata);
    }
    
    // Update collection timestamp
    const collectionMetadata = collection.getMap('metadata');
    collectionMetadata.set('updatedAt', Date.now());
    
    return documentId;
  }
  
  // Move document within collection
  moveDocument(collectionId: string, documentId: string, newParentPath: string | null, newIndex?: number): void {
    const collection = this.collectionsMap.get(collectionId) as LoroMap;
    const documents = collection.getTree('documents');
    
    // Find document node
    const nodeId = this.findDocumentNode(documents, documentId);
    if (nodeId) {
      documents.move(nodeId, newParentPath, newIndex);
      
      // Update paths recursively
      this.updateDocumentPaths(documents, nodeId);
    }
  }
  
  // Get collection structure for UI
  getCollectionStructure(collectionId: string): any {
    const collection = this.collectionsMap.get(collectionId) as LoroMap;
    if (!collection) return null;
    
    const metadata = collection.getMap('metadata').toJSON();
    const documents = collection.getTree('documents').toJSON();
    
    return {
      metadata,
      documents: this.buildDocumentTree(documents)
    };
  }
  
  private buildDocumentTree(documents: any): any[] {
    // Convert Loro tree structure to hierarchical array for UI
    // Implementation depends on Loro tree JSON format
    return documents; // Simplified for now
  }
}
```

## Storage Strategy

### Desktop Filesystem Integration

```typescript
class DesktopStorageAdapter {
  private basePath: string;
  private collectionManager: CollectionManager;
  
  constructor(basePath: string, collectionManager: CollectionManager) {
    this.basePath = basePath;
    this.collectionManager = collectionManager;
  }
  
  // Sync Loro state to filesystem
  async syncToFilesystem(collectionId: string): Promise<void> {
    const structure = this.collectionManager.getCollectionStructure(collectionId);
    if (!structure) return;
    
    const collectionPath = structure.metadata.path;
    
    // Ensure collection directory exists
    await this.ensureDirectory(collectionPath);
    
    // Write all documents
    await this.writeDocuments(structure.documents, collectionPath);
    
    // Write collection metadata
    await this.writeCollectionMetadata(collectionPath, structure.metadata);
  }
  
  // Load filesystem changes into Loro
  async loadFromFilesystem(collectionPath: string): Promise<string> {
    // Scan filesystem and create/update Loro collection
    const collectionId = await this.findOrCreateCollection(collectionPath);
    
    // Recursively scan and add documents
    await this.scanAndAddDocuments(collectionPath, collectionId);
    
    return collectionId;
  }
  
  private async writeDocuments(documents: any[], basePath: string): Promise<void> {
    for (const doc of documents) {
      const fullPath = path.join(basePath, doc.path);
      
      if (doc.isFolder) {
        await this.ensureDirectory(fullPath);
        if (doc.children) {
          await this.writeDocuments(doc.children, basePath);
        }
      } else {
        // Write document content
        const content = doc.content || '';
        await writeTextFile(fullPath, content);
      }
    }
  }
}
```

### Web PGLite Integration

```typescript
class WebStorageAdapter {
  private db: PGliteDatabase;
  private collectionManager: CollectionManager;
  
  constructor(db: PGliteDatabase, collectionManager: CollectionManager) {
    this.db = db;
    this.collectionManager = collectionManager;
  }
  
  // Sync Loro state to PGLite
  async syncToPGLite(collectionId: string): Promise<void> {
    const structure = this.collectionManager.getCollectionStructure(collectionId);
    if (!structure) return;
    
    // Update collection record
    await this.db.update(collection)
      .set({
        name: structure.metadata.name,
        lastOpened: new Date(structure.metadata.updatedAt)
      })
      .where(eq(collection.path, structure.metadata.path));
    
    // Update all documents
    await this.updateDocuments(structure.documents, structure.metadata.path);
  }
  
  private async updateDocuments(documents: any[], collectionPath: string): Promise<void> {
    for (const doc of documents) {
      const entryPath = `${collectionPath}/${doc.path}`;
      
      // Upsert document
      await this.db.insert(entry)
        .values({
          path: entryPath,
          parentPath: doc.parentPath || collectionPath,
          collectionPath: collectionPath,
          content: doc.content || '',
          isFolder: doc.isFolder,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .onConflictDoUpdate({
          target: entry.path,
          set: {
            content: doc.content || '',
            updatedAt: new Date()
          }
        });
      
      // Recursively handle children
      if (doc.children) {
        await this.updateDocuments(doc.children, collectionPath);
      }
    }
  }
}
```

## API Design

### Supabase REST API Endpoints

```typescript
// API Routes for sync
export const syncRoutes = {
  // Get user's sync document
  GET: '/api/sync/document',
  
  // Push updates to user's sync document
  POST: '/api/sync/push',
  
  // Pull latest updates
  GET: '/api/sync/pull',
  
  // Initialize new user sync document
  POST: '/api/sync/initialize'
};

// API Implementation
class SyncAPI {
  private supabase: SupabaseClient;
  
  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    );
  }
  
  async getUserSyncDocument(userId: string): Promise<UserSyncDocument | null> {
    const { data, error } = await this.supabase
      .from('user_sync_documents')
      .select('loro_data, version_vector')
      .eq('user_id', userId)
      .single();
    
    if (error || !data) return null;
    
    return {
      loroData: data.loro_data,
      versionVector: data.version_vector
    };
  }
  
  async pushUpdate(userId: string, update: Uint8Array): Promise<void> {
    // Store update in sync history
    await this.supabase
      .from('sync_history')
      .insert({
        user_id: userId,
        device_id: this.getDeviceId(),
        loro_update: update,
        timestamp: new Date().toISOString()
      });
    
    // Apply update to user's sync document
    await this.applyUpdateToUserDocument(userId, update);
  }
  
  async pullUpdates(userId: string, since: Date): Promise<Uint8Array[]> {
    const { data, error } = await this.supabase
      .from('sync_history')
      .select('loro_update')
      .eq('user_id', userId)
      .gt('timestamp', since.toISOString())
      .order('timestamp', { ascending: true });
    
    if (error || !data) return [];
    
    return data.map(row => row.loro_update);
  }
}
```

## Implementation Phases

### Phase 1: Foundation (1-2 weeks)
1. **Supabase Setup**
   - Create Supabase project
   - Set up database schema
   - Configure Better Auth

2. **Basic Loro Integration**
   - Add Loro CRDT to both apps
   - Create unified collection data structure
   - Basic document operations

3. **Authentication**
   - Implement Better Auth in both apps
   - Email/password sign up/in
   - Session management

### Phase 2: Core Sync (2-3 weeks)
1. **API Implementation**
   - Supabase REST API endpoints
   - Push/pull sync operations
   - Error handling and retries

2. **Storage Adapters**
   - Desktop filesystem persistence
   - Web PGLite integration
   - Bidirectional sync

3. **Real-time Sync**
   - Polling-based sync (2-second intervals)
   - Conflict resolution via Loro
   - Local update handling

### Phase 3: Polish & Testing (1-2 weeks)
1. **UI Integration**
   - Sync status indicators
   - Conflict resolution UI
   - Error handling UX

2. **Performance Optimization**
   - Debounced updates
   - Efficient polling
   - Memory management

3. **Testing**
   - Cross-platform sync scenarios
   - Conflict resolution testing
   - Network failure handling

## Testing Strategy

### Key Test Scenarios
1. **Authentication Flow**
   - Sign up/in on both platforms
   - Session persistence
   - Token refresh

2. **Collection Sync**
   - Create collection on desktop, verify on web
   - Add documents simultaneously on both platforms
   - Rename/move operations

3. **Conflict Resolution**
   - Edit same document on both platforms offline
   - Verify Loro automatic merge
   - Complex tree operations (move/rename conflicts)

4. **Network Scenarios**
   - Offline editing and sync when online
   - Network interruption during sync
   - Partial sync failures

This simplified approach focuses on the core sync functionality using proven technologies while maintaining the flexibility to enhance with more advanced features later. 