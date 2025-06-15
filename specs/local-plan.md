# Local-First Sync Architecture Plan for Typyst
## Simplified Single-User Cross-Platform Sync

## Executive Summary

This document outlines a streamlined plan to transform Typyst into a local-first text editor using Loro CRDTs for conflict-free data synchronization between web and desktop platforms. The architecture enables seamless synchronization between the web app (using PGLite) and desktop app (using filesystem storage), with automatic merge conflict resolution when documents are edited offline on different platforms.

**Key Technologies:**
- **Loro CRDT v1.5.0+**: Conflict-free replicated data types for automatic merge resolution and state management
- **Electric SQL v1.0.18+**: PostgreSQL sync engine for data transport and cross-platform synchronization
- **Supabase**: Managed PostgreSQL hosting with logical replication enabled
- **Better Auth**: Modern authentication system for user management
- **TipTap + loro-prosemirror**: Rich text editing with CRDT integration
- **PGLite**: Browser-based PostgreSQL for web app
- **Tauri**: Cross-platform desktop application framework
- **SvelteKit**: Unified UI framework across all platforms

**Architecture Clarifications:**
- **Electric SQL** handles the transport layer and data synchronization between clients and PostgreSQL
- **Loro CRDT** manages document state, conflict resolution, and merge operations
- **Supabase** provides the central PostgreSQL instance with logical replication
- **Better Auth** handles user authentication and session management
- This is a **greenfield implementation** - no existing data migration required

## Table of Contents

1. [Current State Analysis](#current-state-analysis)
2. [Architecture Overview](#architecture-overview)
3. [Data Model Design](#data-model-design)
4. [Sync Engine Architecture](#sync-engine-architecture)
5. [CRDT Integration Strategy](#crdt-integration-strategy)
6. [Version Control System](#version-control-system)
7. [Storage Architecture](#storage-architecture)
8. [Performance & Optimization](#performance--optimization)
9. [Implementation Phases](#implementation-phases)
10. [Testing Strategy](#testing-strategy)
11. [Migration Strategy](#migration-strategy)
12. [Future Enhancements](#future-enhancements)

## Current State Analysis

### Web App Architecture
- **Database**: PGLite (browser-based PostgreSQL)
- **ORM**: Drizzle
- **Editor**: TipTap (ProseMirror-based)
- **Storage**: IndexedDB via PGLite
- **Data Model**:
  - Collections (directories)
  - Entries (files/folders)
  - Collection settings

### Desktop App Architecture
- **Storage**: Local filesystem
- **Editor**: TipTap
- **Platform**: Tauri
- **Data Storage**: JSON files in AppData for metadata
- **File Operations**: Direct filesystem access

### Key Differences
1. Web app uses database-driven storage
2. Desktop app uses filesystem storage
3. No current synchronization mechanism
4. Different data persistence strategies

## Architecture Overview

### High-Level Architecture

```
┌─────────────────┐         ┌─────────────────┐
│   Desktop App   │         │    Web App      │
│  (Filesystem)   │         │   (PGLite)      │
│   + Loro CRDT   │         │  + Loro CRDT    │
└────────┬────────┘         └────────┬────────┘
         │                           │
         │    ┌─────────────────┐    │
         └────┤ Electric SQL    ├────┘
              │ (Transport)     │
              └────────┬────────┘
                       │
              ┌────────┴────────┐
              │   Supabase      │
              │  (PostgreSQL)   │
              │ + Better Auth   │
              └─────────────────┘
```

### Core Components

1. **Loro CRDT Layer**: Manages document state and handles conflict-free merging when documents are edited offline on different platforms
2. **Electric SQL**: Handles transport layer and data synchronization between PostgreSQL and clients when online
3. **Supabase**: Provides managed PostgreSQL with logical replication and Better Auth integration
4. **Storage Adapters**: Bridge between different storage backends (filesystem vs PGLite) and Loro CRDT
5. **Sync Service**: Coordinates between Electric SQL transport and Loro CRDT state management

## Data Model Design

### Unified Data Schema

```typescript
// Core entities with CRDT support
interface Collection {
  id: string;           // UUID
  name: string;
  createdAt: Date;
  updatedAt: Date;
  settings: LoroMap;    // CRDT map for settings
}

interface Document {
  id: string;           // UUID
  collectionId: string;
  path: string;         // Relative path within collection
  name: string;
  content: LoroText;    // CRDT text for content
  metadata: LoroMap;    // CRDT map for metadata
  createdAt: Date;
  updatedAt: Date;
}

interface DocumentVersion {
  documentId: string;
  version: VersionVector;
  frontiers: Frontiers;
  timestamp: Date;
  message?: string;
}
```

### PostgreSQL Schema (Supabase)

```sql
-- Better Auth tables (automatically created by Better Auth)
-- Users, sessions, accounts, etc. are handled by Better Auth

-- Collections table
CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL, -- Better Auth user ID
  name TEXT NOT NULL,
  settings_loro BYTEA,        -- Loro encoded settings
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Documents table
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_id UUID REFERENCES collections(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL, -- Better Auth user ID for access control
  path TEXT NOT NULL,
  name TEXT NOT NULL,
  content_loro BYTEA,         -- Loro encoded content
  metadata_loro BYTEA,        -- Loro encoded metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(collection_id, path),
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Version history table
CREATE TABLE document_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID REFERENCES documents(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL, -- Better Auth user ID
  version_vector JSONB NOT NULL,
  frontiers JSONB NOT NULL,
  shallow_snapshot BYTEA,     -- Loro shallow snapshot
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  message TEXT,
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Sync metadata for Electric SQL
CREATE TABLE sync_metadata (
  peer_id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL, -- Better Auth user ID
  last_sync TIMESTAMPTZ,
  version_vector JSONB,
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Enable Row Level Security
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE sync_metadata ENABLE ROW LEVEL SECURITY;

-- RLS Policies (users can only access their own data)
CREATE POLICY "Users can access own collections" ON collections
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own documents" ON documents
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own document versions" ON document_versions
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own sync metadata" ON sync_metadata
  FOR ALL USING (auth.uid() = user_id);
```

## Sync Engine Architecture

### Electric SQL Configuration

```typescript
// Electric sync configuration with Better Auth integration
const electricConfig = {
  // Development setup using Docker Compose
  development: {
    databaseUrl: 'postgresql://postgres:password@localhost:54321/electric',
    electricUrl: 'http://localhost:3000',
    insecure: true // Only for development
  },
  
  // Production setup with Supabase
  production: {
    databaseUrl: process.env.SUPABASE_DATABASE_URL,
    electricUrl: process.env.ELECTRIC_URL,
    secret: process.env.ELECTRIC_SECRET
  }
};

// Shape definitions for authenticated user sync
const createUserShapes = (userId: string) => ({
  // Sync all collections for the authenticated user
  collections: {
    url: `${electricConfig.electricUrl}/v1/shape`,
    params: {
      table: 'collections',
      where: `user_id = '${userId}'`
    }
  },
  
  // Sync documents with CRDT content for user's collections
  documents: {
    url: `${electricConfig.electricUrl}/v1/shape`,
    params: {
      table: 'documents',
      where: `user_id = '${userId}'`,
      columns: 'id,collection_id,path,name,content_loro,metadata_loro,created_at,updated_at'
    }
  },
  
  // Sync document versions for history (limited to recent versions)
  versions: {
    url: `${electricConfig.electricUrl}/v1/shape`,
    params: {
      table: 'document_versions',
      where: `user_id = '${userId}'`,
      // Only sync recent versions to avoid excessive data
      orderBy: 'timestamp DESC'
    }
  }
});
```

### Sync Flow with Authentication

1. **Authenticated Initial Sync**:
   ```typescript
   import { authClient } from './auth-client';
   import { Shape } from '@electric-sql/client';
   
   // Get authenticated user session
   const session = await authClient.getSession();
   if (!session.data?.user) {
     throw new Error('User not authenticated');
   }
   
   const userId = session.data.user.id;
   const shapes = createUserShapes(userId);
   
   // Subscribe to user's collections
   const collectionsShape = new Shape(shapes.collections);
   collectionsShape.subscribe(({ rows }) => {
     // Update local collections state
     updateLocalCollections(rows);
   });
   ```

2. **Document Sync with Debounced Updates**:
   ```typescript
   // Initialize Loro document with Electric sync
   class SyncedDocument {
     private loroDoc: LoroDoc;
     private documentShape: Shape;
     private updateQueue: Uint8Array[] = [];
     private debounceTimer: NodeJS.Timeout | null = null;
     
     constructor(documentId: string, userId: string) {
       this.loroDoc = new LoroDoc();
       this.loroDoc.setPeerId(generatePeerId());
       
       // Set up Electric shape for this document
       this.documentShape = new Shape({
         url: `${electricConfig.electricUrl}/v1/shape`,
         params: {
           table: 'documents',
           where: `id = '${documentId}' AND user_id = '${userId}'`
         }
       });
       
       this.setupSync();
     }
     
     private setupSync() {
       // Handle incoming updates from Electric
       this.documentShape.subscribe(({ rows }) => {
         const doc = rows[0];
         if (doc?.content_loro) {
           this.loroDoc.import(doc.content_loro);
         }
       });
       
       // Handle local updates with debouncing
       this.loroDoc.subscribeLocalUpdates((update: Uint8Array) => {
         this.queueUpdate(update);
       });
     }
     
     private queueUpdate(update: Uint8Array) {
       this.updateQueue.push(update);
       
       // Debounce updates (500ms delay)
       if (this.debounceTimer) {
         clearTimeout(this.debounceTimer);
       }
       
       this.debounceTimer = setTimeout(() => {
         this.flushUpdates();
       }, 500);
     }
     
     private async flushUpdates() {
       if (this.updateQueue.length === 0) return;
       
       try {
         // Export current state and send to Electric
         const currentState = this.loroDoc.export({ mode: 'update' });
         await this.syncToElectric(currentState);
         this.updateQueue = [];
       } catch (error) {
         console.error('Sync failed:', error);
         // Implement retry logic here
       }
     }
   }
   ```

3. **Graceful Error Handling**:
   ```typescript
   class SyncService {
     private retryAttempts = 3;
     private retryDelay = 1000; // Start with 1 second
     
     async syncToElectric(data: Uint8Array, attempt = 1): Promise<void> {
       try {
         // Update document in PostgreSQL via Electric
         await fetch(`${electricConfig.electricUrl}/api/documents`, {
           method: 'PUT',
           headers: {
             'Content-Type': 'application/octet-stream',
             'Authorization': `Bearer ${await this.getAuthToken()}`
           },
           body: data
         });
       } catch (error) {
         if (attempt < this.retryAttempts) {
           // Exponential backoff
           const delay = this.retryDelay * Math.pow(2, attempt - 1);
           setTimeout(() => {
             this.syncToElectric(data, attempt + 1);
           }, delay);
         } else {
           // Store for later sync when connection is restored
           this.storeForLaterSync(data);
           throw new Error(`Sync failed after ${this.retryAttempts} attempts`);
         }
       }
     }
     
     private async storeForLaterSync(data: Uint8Array) {
       // Store in IndexedDB or local storage for later sync
       const pendingSync = {
         data,
         timestamp: Date.now(),
         attempts: 0
       };
       
       await this.storageAdapter.storePendingSync(pendingSync);
     }
   }
   ```

## CRDT Integration Strategy

### Loro CRDT Architecture

Loro v1.5.0+ provides CRDT capabilities focused on single-user cross-platform sync:
- **Rich Text CRDT**: Handles merge conflicts when documents are edited offline on different platforms
- **Deep Reactivity**: Automatic UI updates on state changes
- **Shallow Snapshots**: Efficient storage for large documents
- **Version Control**: Built-in document history and snapshots
- **Conflict Resolution**: Automatic merging of concurrent edits from different platforms

### Core CRDT Data Structures

```typescript
// Document structure using Loro containers
interface TypystDocument {
  // Main content as rich text CRDT
  content: LoroText;
  
  // Metadata as reactive map
  metadata: LoroMap<{
    title: string;
    wordCount: number;
    lastModified: number;
    tags: string[];
    author: string;
    language: string;
  }>;
  
  // Document settings
  settings: LoroMap<{
    theme: string;
    fontSize: number;
    lineHeight: number;
    spellCheck: boolean;
  }>;
  
  // Hierarchical structure for nested documents
  structure: LoroTree<DocumentNode>;
}
```

### Text Editor Integration

```typescript
// TipTap + Loro integration with Electric SQL sync (no custom extensions)
import { LoroDoc } from 'loro-crdt';
import { createBinding } from 'loro-prosemirror';
import { Editor } from '@tiptap/core';
import { StarterKit } from '@tiptap/starter-kit';

class TypystEditor {
  private loroDoc: LoroDoc;
  private editor: Editor;
  private binding: any;
  private syncService: SyncService;
  private documentId: string;
  private userId: string;
  
  constructor(documentId: string, userId: string, initialContent?: Uint8Array) {
    this.documentId = documentId;
    this.userId = userId;
    this.loroDoc = new LoroDoc();
    this.loroDoc.setPeerId(this.generatePeerId());
    this.syncService = new SyncService(userId);
    
    if (initialContent) {
      this.loroDoc.import(initialContent);
    }
    
    this.setupEditor();
    this.setupSync();
  }
  
  private setupEditor() {
    const text = this.loroDoc.getText('content');
    
    // Using standard TipTap extensions (no custom extensions for now)
    this.editor = new Editor({
      extensions: [
        StarterKit,
        // loro-prosemirror handles the collaboration
      ],
    });
    
    // Create binding between Loro and ProseMirror
    this.binding = createBinding(text, this.editor);
  }
  
  private setupSync() {
    // Subscribe to local updates with debouncing (handled by SyncService)
    this.loroDoc.subscribeLocalUpdates((update: Uint8Array) => {
      this.syncService.queueUpdate(this.documentId, update);
    });
    
    // Handle incoming updates from Electric SQL
    this.syncService.onRemoteUpdate(this.documentId, (update: Uint8Array) => {
      // Loro handles merge conflicts automatically
      this.loroDoc.import(update);
    });
  }
  
  private generatePeerId(): string {
    // Generate unique peer ID for this device/session
    const deviceId = localStorage.getItem('typyst-device-id') || 
                    crypto.randomUUID();
    localStorage.setItem('typyst-device-id', deviceId);
    
    return `${this.userId}-${deviceId}-${Date.now()}`;
  }
  
  // Version control methods using Loro's built-in capabilities
  async createSnapshot(message?: string) {
    if (message) {
      this.loroDoc.setNextCommitMessage(message);
    }
    this.loroDoc.commit();
    
    const version = {
      frontiers: this.loroDoc.frontiers(),
      timestamp: Date.now(),
      message: message || 'Auto-save',
    };
    
    // Store shallow snapshot for efficiency
    const snapshot = this.loroDoc.export({
      mode: 'shallow-snapshot',
      frontiers: this.loroDoc.frontiers(),
    });
    
    await this.syncService.saveVersion(this.documentId, version, snapshot);
  }
  
  async timeTravel(frontiers: Frontiers) {
    const forkedDoc = this.loroDoc.forkAt(frontiers);
    // Create new editor instance with historical state
    return new TypystEditor(
      this.documentId, 
      this.userId, 
      forkedDoc.export()
    );
  }
  
  // Graceful cleanup
  destroy() {
    this.binding?.destroy();
    this.editor?.destroy();
    this.syncService?.cleanup();
  }
}
```

### Advanced CRDT Features

```typescript
// Hierarchical document structure using LoroTree
class DocumentStructure {
  private tree: LoroTree;
  
  constructor(loroDoc: LoroDoc) {
    this.tree = loroDoc.getTree('structure');
    this.tree.enableFractionalIndex(0.1); // Enable automatic ordering
  }
  
  // Create nested document sections
  createSection(parentId?: string, title: string = 'Untitled') {
    const sectionId = this.tree.create(parentId);
    const sectionData = this.tree.getMap(sectionId);
    
    sectionData.set('type', 'section');
    sectionData.set('title', title);
    sectionData.set('content', this.tree.createText());
    sectionData.set('collapsed', false);
    sectionData.set('createdAt', Date.now());
    
    return sectionId;
  }
  
  // Move sections with automatic conflict resolution
  moveSection(sectionId: string, newParentId?: string, index?: number) {
    this.tree.move(sectionId, newParentId, index);
  }
  
  // Get hierarchical structure
  getStructure() {
    return this.tree.toJSON();
  }
}

// Metadata management with reactive updates
class DocumentMetadata {
  private metadata: LoroMap;
  private subscribers: Set<(metadata: any) => void> = new Set();
  
  constructor(loroDoc: LoroDoc) {
    this.metadata = loroDoc.getMap('metadata');
    
    // Subscribe to metadata changes
    this.metadata.subscribe((event) => {
      const currentMetadata = this.metadata.toJSON();
      this.subscribers.forEach(callback => callback(currentMetadata));
    });
  }
  
  // Auto-update word count
  updateWordCount(content: string) {
    const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;
    this.metadata.set('wordCount', wordCount);
    this.metadata.set('lastModified', Date.now());
  }
  
  // Tag management
  addTag(tag: string) {
    const tags = this.metadata.get('tags') || [];
    if (!tags.includes(tag)) {
      tags.push(tag);
      this.metadata.set('tags', tags);
    }
  }
  
  removeTag(tag: string) {
    const tags = this.metadata.get('tags') || [];
    const filtered = tags.filter(t => t !== tag);
    this.metadata.set('tags', filtered);
  }
  
  // Subscribe to metadata changes
  subscribe(callback: (metadata: any) => void) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }
}
```

### Conflict Resolution Strategy

Loro's automatic conflict resolution handles:

1. **Text Conflicts**: 
   - Concurrent insertions are merged using position-based CRDTs
   - Deletions are handled with tombstone markers
   - Formatting conflicts preserve both styles when possible

2. **Structural Conflicts**:
   - Tree operations use fractional indexing for ordering
   - Move operations are resolved using timestamp ordering
   - Parent-child relationships maintain consistency

3. **Metadata Conflicts**:
   - Last-write-wins for simple values
   - List operations use CRDT semantics
   - Map operations merge non-conflicting keys

```typescript
// Custom conflict resolution for specific cases
class ConflictResolver {
  static resolveMetadataConflict(local: any, remote: any, key: string) {
    switch (key) {
      case 'tags':
        // Merge unique tags from both versions
        return [...new Set([...local, ...remote])];
      
      case 'lastModified':
        // Use the latest timestamp
        return Math.max(local, remote);
      
      case 'title':
        // Show conflict UI for manual resolution
        return { conflict: true, local, remote };
      
      default:
        // Default to last-write-wins
        return remote;
    }
  }
}



### Storage Adapter Pattern

```typescript
// Abstract storage interface
interface StorageAdapter {
  loadDocument(id: string): Promise<Uint8Array | null>;
  saveDocument(id: string, data: Uint8Array): Promise<void>;
  watchDocument(id: string, callback: (data: Uint8Array) => void): () => void;
  saveVersion(documentId: string, version: Version, snapshot: Uint8Array): Promise<void>;
  loadVersion(documentId: string, versionId: string): Promise<{ version: Version; snapshot: Uint8Array }>;
}

// Web implementation (PGLite)
class PGLiteAdapter implements StorageAdapter {
  private db: PGliteDatabase;
  
  constructor(db: PGliteDatabase) {
    this.db = db;
  }
  
  async loadDocument(id: string): Promise<Uint8Array | null> {
    const result = await this.db.select()
      .from(documents)
      .where(eq(documents.id, id));
    return result[0]?.content_loro || null;
  }
  
  async saveDocument(id: string, data: Uint8Array): Promise<void> {
    await this.db.update(documents)
      .set({ 
        content_loro: data,
        updated_at: new Date()
      })
      .where(eq(documents.id, id));
  }
  
  watchDocument(id: string, callback: (data: Uint8Array) => void): () => void {
    // Use PGLite's live query capabilities
    const subscription = this.db.live.query(
      `SELECT content_loro FROM documents WHERE id = $1`,
      [id],
      (result) => {
        if (result.rows[0]?.content_loro) {
          callback(result.rows[0].content_loro);
        }
      }
    );
    
    return () => subscription.unsubscribe();
  }
  
  async saveVersion(documentId: string, version: Version, snapshot: Uint8Array): Promise<void> {
    await this.db.insert(document_versions).values({
      id: generateId(),
      document_id: documentId,
      version_vector: version.frontiers,
      shallow_snapshot: snapshot,
      timestamp: new Date(version.timestamp),
      message: version.message,
    });
  }
}

// Desktop implementation (Filesystem + SQLite)
class FilesystemAdapter implements StorageAdapter {
  private basePath: string;
  private metadataDb: Database; // SQLite for metadata
  
  constructor(basePath: string) {
    this.basePath = basePath;
    this.metadataDb = new Database(path.join(basePath, 'metadata.db'));
    this.initializeDatabase();
  }
  
  private initializeDatabase() {
    this.metadataDb.exec(`
      CREATE TABLE IF NOT EXISTS document_versions (
        id TEXT PRIMARY KEY,
        document_id TEXT NOT NULL,
        version_vector TEXT NOT NULL,
        snapshot_path TEXT NOT NULL,
        timestamp INTEGER NOT NULL,
        message TEXT
      );
      
      CREATE INDEX IF NOT EXISTS idx_document_versions_doc_id 
      ON document_versions(document_id);
    `);
  }
  
  async loadDocument(id: string): Promise<Uint8Array | null> {
    const filePath = this.getDocumentPath(id);
    try {
      return await readBinaryFile(filePath);
    } catch {
      return null;
    }
  }
  
  async saveDocument(id: string, data: Uint8Array): Promise<void> {
    const filePath = this.getDocumentPath(id);
    await ensureDir(path.dirname(filePath));
    await writeBinaryFile(filePath, data);
  }
  
  watchDocument(id: string, callback: (data: Uint8Array) => void): () => void {
    const filePath = this.getDocumentPath(id);
    const watcher = chokidar.watch(filePath);
    
    watcher.on('change', async () => {
      const data = await this.loadDocument(id);
      if (data) callback(data);
    });
    
    return () => watcher.close();
  }
  
  private getDocumentPath(id: string): string {
    return path.join(this.basePath, 'documents', `${id}.loro`);
  }
  
  private getVersionPath(documentId: string, versionId: string): string {
    return path.join(this.basePath, 'versions', documentId, `${versionId}.loro`);
  }
}
```

## Version Control System

### Simplified Version Management with Loro

Loro v1.5.0 provides version control capabilities for document history and snapshots:

```typescript
// Advanced version control system
class VersionControlSystem {
  private loroDoc: LoroDoc;
  private storageAdapter: StorageAdapter;
  private documentId: string;
  private versionCache: Map<string, VersionInfo> = new Map();
  
  constructor(loroDoc: LoroDoc, storageAdapter: StorageAdapter, documentId: string) {
    this.loroDoc = loroDoc;
    this.storageAdapter = storageAdapter;
    this.documentId = documentId;
    
    this.setupVersionHooks();
  }
  
  private setupVersionHooks() {
    // Use Loro's pre-commit hook for automatic versioning
    this.loroDoc.subscribePreCommit((event) => {
      const changes = this.loroDoc.exportJsonInIdSpan(event.changeMeta);
      const changeHash = this.generateChangeHash(changes);
      
      event.modifier
        .setMessage(this.generateCommitMessage(changes))
        .setTimestamp(Date.now())
        .setOrigin('typyst-editor');
    });
    
    // Track first commits from new peers
    this.loroDoc.subscribeFirstCommitFromPeer((event) => {
      this.loroDoc.getMap('collaborators').set(event.peer, {
        firstCommit: Date.now(),
        peerId: event.peer,
      });
    });
  }
  
  // Create version snapshot with metadata
  async createVersion(message?: string): Promise<string> {
    
    // Set commit message before committing
    if (message) {
      this.loroDoc.setNextCommitMessage(message);
    }
    
    this.loroDoc.commit();
    
    const versionInfo: VersionInfo = {
      id: generateId(),
      frontiers: this.loroDoc.frontiers(),
      timestamp: Date.now(),
      message: message || 'Auto-save',
      changeCount: this.loroDoc.changeCount(),
      opCount: this.loroDoc.opCount(),
    };
    
    // Create shallow snapshot for efficient storage
    const snapshot = this.loroDoc.export({
      mode: 'shallow-snapshot',
      frontiers: versionInfo.frontiers,
    });
    
    await this.storageAdapter.saveVersion(this.documentId, versionInfo, snapshot);
    this.versionCache.set(versionInfo.id, versionInfo);
    
    return versionInfo.id;
  }
  
  // Time travel to specific version
  async timeTravel(versionId: string): Promise<TypystEditor> {
    const versionData = await this.storageAdapter.loadVersion(this.documentId, versionId);
    
    if (!versionData) {
      throw new Error(`Version ${versionId} not found`);
    }
    
    // Fork document at specific frontiers
    const historicalDoc = this.loroDoc.forkAt(versionData.version.frontiers);
    
    // Create new editor instance with historical state
    return new TypystEditor(historicalDoc.export());
  }
  
  // Compare two versions
  async compareVersions(fromVersionId: string, toVersionId: string): Promise<VersionDiff> {
    const fromVersion = await this.storageAdapter.loadVersion(this.documentId, fromVersionId);
    const toVersion = await this.storageAdapter.loadVersion(this.documentId, toVersionId);
    
    if (!fromVersion || !toVersion) {
      throw new Error('One or both versions not found');
    }
    
    // Find ID spans between versions
    const idSpans = this.loroDoc.findIdSpansBetween(
      fromVersion.version.frontiers,
      toVersion.version.frontiers
    );
    
    // Export changes in the span
    const changes = this.loroDoc.exportJsonInIdSpan(idSpans);
    
    return {
      fromVersion: fromVersion.version,
      toVersion: toVersion.version,
      changes,
      summary: this.generateDiffSummary(changes),
    };
  }
}

interface VersionInfo {
  id: string;
  frontiers: Frontiers;
  timestamp: number;
  message?: string;
  changeCount: number;
  opCount: number;
}

interface VersionDiff {
  fromVersion: VersionInfo;
  toVersion: VersionInfo;
  changes: any[];
  summary: DiffSummary;
}

interface DiffSummary {
  insertions: number;
  deletions: number;
  modifications: number;
  affectedSections: string[];
}
```

## Storage Architecture

### Multi-Platform Storage Strategy

The storage architecture supports both web (PGLite) and desktop (filesystem) platforms with a unified interface:

```typescript
// Unified storage manager
class StorageManager {
  private adapters: Map<string, StorageAdapter> = new Map();
  private syncQueue: SyncQueue;
  private compressionService: CompressionService;
  
  constructor() {
    this.syncQueue = new SyncQueue();
    this.compressionService = new CompressionService();
  }
  
  // Register storage adapters for different platforms
  registerAdapter(platform: 'web' | 'desktop', adapter: StorageAdapter) {
    this.adapters.set(platform, adapter);
  }
  
  // Intelligent storage with compression and deduplication
  async storeDocument(documentId: string, data: Uint8Array, platform: string): Promise<void> {
    const adapter = this.adapters.get(platform);
    if (!adapter) throw new Error(`No adapter for platform: ${platform}`);
    
    // Compress large documents
    const compressedData = await this.compressionService.compress(data);
    
    // Store with deduplication
    const hash = await this.generateHash(compressedData);
    const existingDoc = await adapter.findByHash(hash);
    
    if (!existingDoc) {
      await adapter.saveDocument(documentId, compressedData);
      await adapter.saveHash(documentId, hash);
    } else {
      // Create reference to existing document
      await adapter.createReference(documentId, existingDoc.id);
    }
  }
  
  // Efficient document loading with caching
  async loadDocument(documentId: string, platform: string): Promise<Uint8Array | null> {
    const adapter = this.adapters.get(platform);
    if (!adapter) throw new Error(`No adapter for platform: ${platform}`);
    
    // Check cache first
    const cached = await this.getCachedDocument(documentId);
    if (cached) return cached;
    
    // Load from storage
    const compressed = await adapter.loadDocument(documentId);
    if (!compressed) return null;
    
    // Decompress and cache
    const decompressed = await this.compressionService.decompress(compressed);
    await this.cacheDocument(documentId, decompressed);
    
    return decompressed;
  }
}

// Advanced compression service
class CompressionService {
  private compressionLevel = 6; // Balanced compression
  
  async compress(data: Uint8Array): Promise<Uint8Array> {
    // Use different compression strategies based on data size
    if (data.length < 1024) {
      return data; // Don't compress small documents
    }
    
    if (data.length > 1024 * 1024) {
      // Use streaming compression for large documents
      return await this.streamCompress(data);
    }
    
    // Standard compression for medium documents
    return await this.standardCompress(data);
  }
  
  private async streamCompress(data: Uint8Array): Promise<Uint8Array> {
    const stream = new CompressionStream('gzip');
    const writer = stream.writable.getWriter();
    const reader = stream.readable.getReader();
    
    writer.write(data);
    writer.close();
    
    const chunks: Uint8Array[] = [];
    let done = false;
    
    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      if (value) chunks.push(value);
    }
    
    return this.concatenateArrays(chunks);
  }
}
```

## Performance & Optimization

### Memory Management and Caching

```typescript
// Intelligent caching system
class DocumentCache {
  private cache: Map<string, CacheEntry> = new Map();
  private maxSize: number = 100 * 1024 * 1024; // 100MB
  private currentSize: number = 0;
  private accessOrder: string[] = [];
  
  interface CacheEntry {
    data: Uint8Array;
    size: number;
    lastAccessed: number;
    accessCount: number;
  }
  
  async get(key: string): Promise<Uint8Array | null> {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    // Update access statistics
    entry.lastAccessed = Date.now();
    entry.accessCount++;
    
    // Move to end of access order (most recently used)
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
    this.accessOrder.push(key);
    
    return entry.data;
  }
  
  async set(key: string, data: Uint8Array): Promise<void> {
    const size = data.length;
    
    // Evict if necessary
    while (this.currentSize + size > this.maxSize && this.cache.size > 0) {
      await this.evictLeastRecentlyUsed();
    }
    
    // Add new entry
    this.cache.set(key, {
      data,
      size,
      lastAccessed: Date.now(),
      accessCount: 1,
    });
    
    this.currentSize += size;
    this.accessOrder.push(key);
  }
  
  private async evictLeastRecentlyUsed(): Promise<void> {
    if (this.accessOrder.length === 0) return;
    
    const keyToEvict = this.accessOrder.shift()!;
    const entry = this.cache.get(keyToEvict);
    
    if (entry) {
      this.cache.delete(keyToEvict);
      this.currentSize -= entry.size;
    }
  }
}

// Performance monitoring
class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetric> = new Map();
  
  interface PerformanceMetric {
    name: string;
    count: number;
    totalTime: number;
    averageTime: number;
    minTime: number;
    maxTime: number;
  }
  
  async measure<T>(name: string, operation: () => Promise<T>): Promise<T> {
    const startTime = performance.now();
    
    try {
      const result = await operation();
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      this.recordMetric(name, duration);
      
      return result;
    } catch (error) {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      this.recordMetric(`${name}_error`, duration);
      throw error;
    }
  }
  
  private recordMetric(name: string, duration: number): void {
    const existing = this.metrics.get(name);
    
    if (existing) {
      existing.count++;
      existing.totalTime += duration;
      existing.averageTime = existing.totalTime / existing.count;
      existing.minTime = Math.min(existing.minTime, duration);
      existing.maxTime = Math.max(existing.maxTime, duration);
    } else {
      this.metrics.set(name, {
        name,
        count: 1,
        totalTime: duration,
        averageTime: duration,
        minTime: duration,
        maxTime: duration,
      });
    }
  }
  
  getMetrics(): PerformanceMetric[] {
    return Array.from(this.metrics.values());
  }
}
```

## Security Architecture

### End-to-End Encryption (Future Enhancement)

```typescript
// Encryption service for sensitive documents
class EncryptionService {
  private keyManager: KeyManager;
  
  constructor() {
    this.keyManager = new KeyManager();
  }
  
  async encryptDocument(data: Uint8Array, userId: string): Promise<EncryptedDocument> {
    const userKey = await this.keyManager.getUserKey(userId);
    const documentKey = await this.generateDocumentKey();
    
    // Encrypt document with document key
    const encryptedContent = await this.encrypt(data, documentKey);
    
    // Encrypt document key with user key
    const encryptedKey = await this.encrypt(documentKey, userKey);
    
    return {
      content: encryptedContent,
      encryptedKey,
      algorithm: 'AES-GCM',
      keyId: userKey.id,
    };
  }
  
  async decryptDocument(encrypted: EncryptedDocument, userId: string): Promise<Uint8Array> {
    const userKey = await this.keyManager.getUserKey(userId);
    
    // Decrypt document key
    const documentKey = await this.decrypt(encrypted.encryptedKey, userKey);
    
    // Decrypt content
    return await this.decrypt(encrypted.content, documentKey);
  }
  
  private async encrypt(data: Uint8Array, key: CryptoKey): Promise<Uint8Array> {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      data
    );
    
    // Prepend IV to encrypted data
    const result = new Uint8Array(iv.length + encrypted.byteLength);
    result.set(iv);
    result.set(new Uint8Array(encrypted), iv.length);
    
    return result;
  }
}

// Access control system
class AccessControlSystem {
  private permissions: Map<string, DocumentPermissions> = new Map();
  
  interface DocumentPermissions {
    documentId: string;
    owner: string;
    readers: Set<string>;
    writers: Set<string>;
    commenters: Set<string>;
    publicRead: boolean;
    publicWrite: boolean;
  }
  
  async checkPermission(documentId: string, userId: string, action: 'read' | 'write' | 'comment'): Promise<boolean> {
    const permissions = this.permissions.get(documentId);
    if (!permissions) return false;
    
    // Owner has all permissions
    if (permissions.owner === userId) return true;
    
    // Check specific permissions
    switch (action) {
      case 'read':
        return permissions.publicRead || permissions.readers.has(userId);
      case 'write':
        return permissions.publicWrite || permissions.writers.has(userId);
      case 'comment':
        return permissions.commenters.has(userId) || 
               permissions.writers.has(userId) || 
               permissions.readers.has(userId);
      default:
        return false;
    }
  }
  
  async grantPermission(documentId: string, userId: string, permission: 'read' | 'write' | 'comment', grantedBy: string): Promise<void> {
    const permissions = this.permissions.get(documentId);
    if (!permissions) throw new Error('Document not found');
    
    // Only owner can grant permissions
    if (permissions.owner !== grantedBy) {
      throw new Error('Insufficient permissions');
    }
    
    switch (permission) {
      case 'read':
        permissions.readers.add(userId);
        break;
      case 'write':
        permissions.writers.add(userId);
        break;
      case 'comment':
        permissions.commenters.add(userId);
        break;
    }
    
    await this.savePermissions(documentId, permissions);
  }
}
```

## Implementation Phases

### Phase 1: Foundation Setup (2-3 weeks)
1. **Development Environment**
   - Set up Docker Compose with PostgreSQL and Electric SQL
   - Configure Supabase for production PostgreSQL
   - Install and configure Better Auth for authentication

2. **Core Dependencies**
   - Install Loro CRDT v1.5.0+
   - Set up Electric SQL client v1.0.4+
   - Configure loro-prosemirror for TipTap integration

3. **Basic Authentication**
   - Implement Better Auth server and client setup
   - Create user registration and login flows
   - Set up Row Level Security policies in PostgreSQL

### Phase 2: CRDT Document System (3-4 weeks)
1. **Loro Integration**
   - Create basic document structure with LoroText and LoroMap
   - Implement TipTap + loro-prosemirror binding (no custom extensions)
   - Set up peer ID generation and device identification

2. **Storage Adapters**
   - Create filesystem adapter for desktop app with Loro CRDT
   - Create PGLite adapter for web app with Loro CRDT
   - Implement unified storage interface

3. **Basic Document Operations**
   - Create, read, update document operations
   - Implement debounced sync (500ms delay)
   - Handle graceful error scenarios with retry logic

### Phase 3: Electric SQL Sync (3-4 weeks)
1. **Electric Setup**
   - Configure Electric SQL shapes for authenticated users
   - Set up bidirectional sync between platforms
   - Implement user-scoped data synchronization

2. **Conflict Resolution**
   - Test Loro's automatic merge conflict resolution
   - Handle offline editing and sync scenarios
   - Implement exponential backoff for failed syncs

3. **Version Control**
   - Implement version snapshots using Loro's built-in capabilities
   - Create time travel functionality with forkAt
   - Add basic version history tracking

## Testing Strategy

### Key Test Scenarios

1. **Authentication & Authorization Testing**
   - User registration and login flows
   - Row Level Security policy enforcement
   - Session management across platforms

2. **Cross-Platform Sync Testing**
   - Edit document offline on desktop, sync when online
   - Edit same document offline on web, test Loro's automatic merge resolution
   - Verify conflict-free synchronization between platforms

3. **Performance Testing**
   - Large document handling (10k+ lines)
   - Debounced sync performance (500ms delay)
   - Memory usage with Loro CRDT operations

4. **Error Handling & Resilience**
   - Network interruption during sync with exponential backoff
   - Electric SQL server unavailability
   - Graceful degradation when offline

5. **Electric SQL Integration Testing**
   - Shape subscription and updates
   - User-scoped data synchronization
   - PostgreSQL logical replication performance



## Development Setup

### Electric SQL Development Environment

Following Electric SQL best practices for development:

```yaml
# docker-compose.yaml for development
version: "3.3"
name: "typyst_development"
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: typyst
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - 54321:5432
    volumes:
      - postgres_data:/var/lib/postgresql/data
    command:
      - -c
      - listen_addresses=*
      - -c
      - wal_level=logical
      
  electric:
    image: electricsql/electric:1.0.18
    environment:
      DATABASE_URL: postgresql://postgres:password@postgres:5432/typyst?sslmode=disable
      ELECTRIC_INSECURE: true # Only for development
    ports:
      - "3000:3000"
    depends_on:
      - postgres

volumes:
  postgres_data:
```

### Better Auth Setup

```typescript
// auth.ts - Server configuration
import { betterAuth } from "better-auth";
import { database } from "./database"; // Your database connection

export const auth = betterAuth({
  database,
  emailAndPassword: {
    enabled: true,
    autoSignIn: true
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }
  },
  // Additional Better Auth configuration
});

// auth-client.ts - Client configuration
import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000"
});
```

### No Migration Required

Since this is a **greenfield implementation**, there is no existing data to migrate. The development approach is:

1. **Start Fresh**: Build new applications with Loro CRDT from the beginning
2. **Unified Architecture**: Both web and desktop apps use the same data structures
3. **Clean Implementation**: No legacy code or data format compatibility concerns
4. **Modern Stack**: Use latest versions of all technologies from day one

## Future Enhancements

### Potential Additions
1. **Multi-user collaboration** - Add live cursors and presence when needed
2. **Mobile apps** - Extend sync to iOS/Android platforms
3. **Advanced version control** - Add branching and semantic versioning
4. **End-to-end encryption** - For sensitive documents
5. **AI integration** - Smart editing assistance and content generation

## Conclusion

This updated technical plan provides a clear roadmap for building Typyst as a local-first editor with cross-platform sync from the ground up. The architecture leverages modern, proven technologies:

### Key Technical Achievements

1. **Modern Authentication**: Better Auth for secure user management and session handling
2. **CRDT State Management**: Loro v1.5.0 for automatic conflict resolution and document state
3. **Efficient Transport**: Electric SQL for data synchronization between PostgreSQL and clients
4. **Managed Infrastructure**: Supabase for PostgreSQL hosting with logical replication
5. **Cross-Platform Sync**: Seamless synchronization between web (PGLite) and desktop (filesystem)
6. **Graceful Error Handling**: Debounced updates, exponential backoff, and offline resilience

### Implementation Benefits

- **Greenfield Advantage**: Clean implementation without legacy migration concerns
- **Automatic Conflict Resolution**: Loro CRDT handles merge conflicts transparently
- **Scalable Architecture**: Electric SQL + Supabase can handle growth
- **Developer Experience**: Modern tooling with TypeScript, SvelteKit, and Docker
- **Security First**: Row Level Security and authenticated user scoping
- **Offline-First**: Full functionality without internet connection

### Technology Clarifications

- **Electric SQL**: Handles transport layer and data synchronization
- **Loro CRDT**: Manages document state and conflict resolution
- **Better Auth**: Provides authentication and user management
- **Supabase**: Managed PostgreSQL with logical replication enabled
- **No Custom Extensions**: Using standard TipTap extensions initially

The phased implementation approach (9-11 weeks total) ensures steady progress while building a robust, modern sync solution. The architecture is designed for single-user cross-platform sync but can be extended for collaboration features in the future. 