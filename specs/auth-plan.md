# Authentication Implementation Plan for Typyst
## Better Auth + Supabase Integration

## Executive Summary

This document outlines the implementation plan for adding cloud-authenticated, locally-bootstrapped authentication to Typyst. Users authenticate against Better Auth + Supabase, then the local PGLite database is bootstrapped with all their data for snappy local-first operations.

**Key Technologies:**
- **Better Auth v1.0+**: Server-side authentication with email/password support
- **Supabase**: Managed PostgreSQL database for user data and auth storage
- **PGLite Bootstrap**: Local database populated with user data after authentication
- **SvelteKit Integration**: Orchestrates auth and local DB bootstrap

**Architecture Goals:**
- **Cloud-authenticated**: Secure server-side validation and session management
- **Locally-bootstrapped**: All user data synced to PGLite after successful auth
- **Snappy performance**: Local-first operations after initial bootstrap
- **Simple security model**: Server controls access, local DB acts as performance cache

## Table of Contents

1. [Current State Analysis](#current-state-analysis)
2. [Authentication Architecture](#authentication-architecture)
3. [Database Schema](#database-schema)
4. [Implementation Structure](#implementation-structure)
5. [API Design](#api-design)
6. [Client Integration](#client-integration)
7. [Implementation Phases](#implementation-phases)
8. [Testing Strategy](#testing-strategy)
9. [Security Considerations](#security-considerations)

## Current State Analysis

### Web App (apps/app)
- **Framework**: SvelteKit with Vite
- **Database**: PGLite (browser-based PostgreSQL)
- **Current Auth**: None implemented
- **Storage**: IndexedDB via PGLite
- **Dependencies**: Drizzle ORM already available

### Desktop App (apps/desktop)
- **Framework**: SvelteKit + Tauri
- **Storage**: Local filesystem
- **Current Auth**: None implemented
- **Platform**: Cross-platform native app
- **Dependencies**: Tauri plugins for native functionality

### Shared Infrastructure
- **UI Library**: @typyst/ui (shared components)
- **Monorepo**: pnpm workspaces
- **TypeScript**: Full type safety across apps

## Authentication Architecture

### Core Components

```typescript
// Shared authentication types
interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Session {
  id: string;
  userId: string;
  expiresAt: Date;
  token: string;
  user: User;
}

interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  error: string | null;
}
```

### Authentication & Bootstrap Flow

```mermaid
graph TD
    A[User Opens App] --> B{Has Valid Local Session?}
    B -->|Yes| C[Load from PGLite]
    B -->|No| D[Show Auth UI]
    D --> E[User Signs In/Up]
    E --> F[Better Auth Validates]
    F -->|Success| G[Store Session Locally]
    F -->|Error| H[Show Error]
    G --> I[Bootstrap PGLite DB]
    I --> J[Fetch User Data from Server]
    J --> K[Populate Local Collections & Entries]
    K --> L[Initialize App with Local Data]
    C --> L
    H --> D
    
    style I fill:#e1f5fe
    style J fill:#e1f5fe
    style K fill:#e1f5fe
```

## Database Schema

### Supabase Setup

```sql
-- Better Auth will automatically create these tables
-- We just need to ensure proper configuration

-- Users table (created by Better Auth)
-- Contains: id, email, name, image, createdAt, updatedAt, emailVerified

-- Sessions table (created by Better Auth)  
-- Contains: id, userId, expiresAt, token, ipAddress, userAgent

-- Accounts table (created by Better Auth)
-- For future social provider support

-- User collections and entries (server-side storage)
CREATE TABLE collections (
  path TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  last_opened TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT fk_collections_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE entries (
  path TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT,
  parent_path TEXT NOT NULL,
  collection_path TEXT,
  content TEXT,
  is_folder BOOLEAN DEFAULT FALSE,
  size BIGINT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT fk_entries_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_entries_collection FOREIGN KEY (collection_path) REFERENCES collections(path) ON DELETE CASCADE
);

-- Indexes for performance
CREATE INDEX idx_collections_user_id ON collections(user_id);
CREATE INDEX idx_entries_user_id ON entries(user_id);
CREATE INDEX idx_entries_collection_path ON entries(collection_path);
CREATE INDEX idx_entries_parent_path ON entries(parent_path);
```

### Environment Variables

```bash
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Better Auth Configuration
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:5173 # or production URL

# Database URL for Better Auth
DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres
```

## Implementation Structure

### Shared Authentication Package

```
packages/
└── auth/
    ├── package.json
    ├── src/
    │   ├── index.ts              # Main exports
    │   ├── server.ts             # Better Auth server instance
    │   ├── client.ts             # Better Auth client
    │   ├── types.ts              # Shared types
    │   ├── stores.ts             # Svelte stores for auth state
    │   └── utils.ts              # Helper functions
    └── tsconfig.json
```

### Package Structure

```json
// packages/auth/package.json
{
  "name": "@typyst/auth",
  "version": "0.0.1",
  "type": "module",
  "exports": {
    ".": "./src/index.ts",
    "./server": "./src/server.ts",
    "./client": "./src/client.ts",
    "./stores": "./src/stores.ts"
  },
  "dependencies": {
    "better-auth": "^1.0.0",
    "svelte": "^4.2.7",
    "@supabase/supabase-js": "^2.45.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

### Server Configuration

```typescript
// packages/auth/src/server.ts
import { betterAuth } from "better-auth";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const auth = betterAuth({
  database: {
    provider: "postgresql",
    url: process.env.DATABASE_URL!,
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false, // Simplify for MVP
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24,      // Update daily
  },
  advanced: {
    generateId: () => crypto.randomUUID(), // Use standard UUIDs
  },
  // Future: Add social providers here
  // socialProviders: {
  //   github: {
  //     clientId: process.env.GITHUB_CLIENT_ID!,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  //   }
  // }
});

export type Auth = typeof auth;

// Bootstrap service for populating local DB
export class BootstrapService {
  constructor(private supabase: typeof supabase) {}
  
  async getUserData(userId: string) {
    const [collectionsResult, entriesResult] = await Promise.all([
      this.supabase
        .from('collections')
        .select('*')
        .eq('user_id', userId),
      this.supabase
        .from('entries')
        .select('*')
        .eq('user_id', userId)
    ]);
    
    return {
      collections: collectionsResult.data || [],
      entries: entriesResult.data || []
    };
  }
}
```

### Client Configuration

```typescript
// packages/auth/src/client.ts
import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: typeof window !== 'undefined' 
    ? window.location.origin 
    : process.env.BETTER_AUTH_URL || "http://localhost:5173",
  
  // Future plugin support
  // plugins: []
});

export type AuthClient = typeof authClient;
```

### Svelte Stores with Bootstrap

```typescript
// packages/auth/src/stores.ts
import { writable, derived, type Readable } from 'svelte/store';
import { authClient } from './client.js';
import type { User, Session } from './types.js';

// Auth state store
interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isBootstrapping: boolean;
  error: string | null;
}

const createAuthStore = () => {
  const { subscribe, set, update } = writable<AuthState>({
    user: null,
    session: null,
    isLoading: true,
    isBootstrapping: false,
    error: null
  });

  return {
    subscribe,
    
    // Initialize auth state - check for existing local session
    async initialize() {
      update(state => ({ ...state, isLoading: true, error: null }));
      
      try {
        // Check for valid local session first
        const localSession = await this.getLocalSession();
        
        if (localSession && !this.isSessionExpired(localSession)) {
          update(state => ({
            ...state,
            isLoading: false,
            user: localSession.user,
            session: localSession
          }));
          return;
        }
        
        // No valid local session, user needs to sign in
        update(state => ({
          ...state,
          isLoading: false,
          user: null,
          session: null
        }));
      } catch (err) {
        update(state => ({
          ...state,
          isLoading: false,
          error: err instanceof Error ? err.message : 'Unknown error',
          user: null,
          session: null
        }));
      }
    },

    // Sign in with email/password + bootstrap
    async signIn(email: string, password: string) {
      update(state => ({ ...state, isLoading: true, error: null }));
      
      try {
        // 1. Authenticate with Better Auth
        const { data, error } = await authClient.signIn.email({
          email,
          password,
          callbackURL: "/dashboard"
        });

        if (error) {
          update(state => ({ 
            ...state, 
            isLoading: false, 
            error: error.message 
          }));
          return { success: false, error: error.message };
        }

        // 2. Store session locally
        await this.storeSessionLocally(data.session);
        
        // 3. Bootstrap local database
        update(state => ({ ...state, isBootstrapping: true }));
        await this.bootstrapLocalDB(data.user.id, data.session.token);

        update(state => ({
          ...state,
          isLoading: false,
          isBootstrapping: false,
          error: null,
          user: data?.user || null,
          session: data?.session || null
        }));

        return { success: true, data };
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Sign in failed';
        update(state => ({ 
          ...state, 
          isLoading: false,
          isBootstrapping: false,
          error: errorMessage 
        }));
        return { success: false, error: errorMessage };
      }
    },

    // Sign up with email/password + bootstrap
    async signUp(email: string, password: string, name: string) {
      update(state => ({ ...state, isLoading: true, error: null }));
      
      try {
        const { data, error } = await authClient.signUp.email({
          email,
          password,
          name,
          callbackURL: "/dashboard"
        });

        if (error) {
          update(state => ({ 
            ...state, 
            isLoading: false, 
            error: error.message 
          }));
          return { success: false, error: error.message };
        }

        // Store session and bootstrap (new user will have empty data)
        await this.storeSessionLocally(data.session);
        
        update(state => ({ ...state, isBootstrapping: true }));
        await this.bootstrapLocalDB(data.user.id, data.session.token);

        update(state => ({
          ...state,
          isLoading: false,
          isBootstrapping: false,
          error: null,
          user: data?.user || null,
          session: data?.session || null
        }));

        return { success: true, data };
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Sign up failed';
        update(state => ({ 
          ...state, 
          isLoading: false,
          isBootstrapping: false,
          error: errorMessage 
        }));
        return { success: false, error: errorMessage };
      }
    },

    // Sign out and clear local data
    async signOut() {
      update(state => ({ ...state, isLoading: true, error: null }));
      
      try {
        await authClient.signOut();
        await this.clearLocalSession();
        await this.clearLocalDB();
        
        update(state => ({
          ...state,
          isLoading: false,
          error: null,
          user: null,
          session: null
        }));

        return { success: true };
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Sign out failed';
        update(state => ({ 
          ...state, 
          isLoading: false, 
          error: errorMessage 
        }));
        return { success: false, error: errorMessage };
      }
    },

    // Bootstrap local PGLite database
    async bootstrapLocalDB(userId: string, token: string) {
      // Clear existing local data
      await this.clearLocalDB();
      
      // Fetch user's data from server
      const response = await fetch('/api/user/bootstrap', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      
      const userData = await response.json();
      
      // Populate PGLite with user's collections and entries
      await this.populateLocalDB(userData);
    },

    // Helper methods
    async getLocalSession() {
      // Implementation depends on where you store local session
      // Could be localStorage, IndexedDB, or PGLite
      return null; // Placeholder
    },

    isSessionExpired(session: Session) {
      return new Date() > new Date(session.expiresAt);
    },

    async storeSessionLocally(session: Session) {
      // Store in localStorage or PGLite
    },

    async clearLocalSession() {
      // Clear stored session
    },

    async clearLocalDB() {
      // Clear all user data from PGLite
    },

    async populateLocalDB(userData: any) {
      // Populate PGLite with collections and entries
    },

    // Clear error
    clearError() {
      update(state => ({ ...state, error: null }));
    }
  };
};

export const authStore = createAuthStore();

// Derived stores for convenience
export const user: Readable<User | null> = derived(
  authStore, 
  $auth => $auth.user
);

export const isAuthenticated: Readable<boolean> = derived(
  authStore, 
  $auth => !!$auth.user && !!$auth.session
);

export const isLoading: Readable<boolean> = derived(
  authStore, 
  $auth => $auth.isLoading || $auth.isBootstrapping
);
```

## API Design

### SvelteKit API Routes

```typescript
// apps/app/src/routes/api/auth/[...auth]/+server.ts
import { auth } from '@typyst/auth/server';

export const { GET, POST } = auth.handler;
```

### Bootstrap API Endpoint

```typescript
// apps/app/src/routes/api/user/bootstrap/+server.ts
import { json } from '@sveltejs/kit';
import { auth, BootstrapService } from '@typyst/auth/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const bootstrapService = new BootstrapService(supabase);

export async function GET({ request }) {
  try {
    // Verify auth session
    const session = await auth.api.getSession({
      headers: request.headers
    });

    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 });
    }

    // Fetch user's data for bootstrap
    const userData = await bootstrapService.getUserData(session.user.id);

    return json(userData);
  } catch (error) {
    console.error('Bootstrap error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
```

### Sync API Endpoints

```typescript
// apps/app/src/routes/api/user/sync/+server.ts
export async function POST({ request }) {
  // Handle local changes pushed to server
  const session = await auth.api.getSession({
    headers: request.headers
  });

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const localChanges = await request.json();
  
  // Apply changes to Supabase
  await applyChangesToServer(session.user.id, localChanges);
  
  return json({ success: true });
}

// apps/app/src/routes/api/user/changes/+server.ts
export async function GET({ url, request }) {
  // Fetch changes since last sync
  const since = url.searchParams.get('since');
  const session = await auth.api.getSession({
    headers: request.headers
  });

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const changes = await getChangesSince(session.user.id, since);
  
  return json(changes);
}
```

### Authentication Middleware

```typescript
// apps/app/src/hooks.server.ts
// apps/desktop/src/hooks.server.ts
import { auth } from '@typyst/auth/server';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // Add auth session to locals
  const session = await auth.api.getSession({
    headers: event.request.headers
  });

  event.locals.session = session?.session || null;
  event.locals.user = session?.user || null;

  return resolve(event);
};
```

### Protected Route Helper

```typescript
// packages/auth/src/utils.ts
import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

export function requireAuth(event: RequestEvent) {
  if (!event.locals.user) {
    throw redirect(302, '/auth/signin');
  }
  return event.locals.user;
}

export function requireNoAuth(event: RequestEvent) {
  if (event.locals.user) {
    throw redirect(302, '/dashboard');
  }
}
```

## Client Integration

### Authentication UI Components

```typescript
// packages/ui/src/components/auth/SignInForm.svelte
<script lang="ts">
  import { authStore } from '@typyst/auth/stores';
  import { Button } from '../ui/button';
  import { Input } from '../ui/input';
  import { Label } from '../ui/label';
  
  let email = '';
  let password = '';
  
  $: ({ isLoading, error } = $authStore);
  
  async function handleSignIn() {
    const result = await authStore.signIn(email, password);
    if (result.success) {
      // Handle successful sign in (redirect handled by store)
    }
  }
</script>

<form on:submit|preventDefault={handleSignIn} class="space-y-4">
  <div>
    <Label for="email">Email</Label>
    <Input 
      id="email" 
      type="email" 
      bind:value={email} 
      required 
      disabled={isLoading}
    />
  </div>
  
  <div>
    <Label for="password">Password</Label>
    <Input 
      id="password" 
      type="password" 
      bind:value={password} 
      required 
      disabled={isLoading}
    />
  </div>
  
  {#if error}
    <div class="text-red-500 text-sm">{error}</div>
  {/if}
  
  <Button type="submit" disabled={isLoading} class="w-full">
    {isLoading ? 'Signing in...' : 'Sign In'}
  </Button>
</form>
```

### App Layout Integration

```typescript
// apps/app/src/routes/+layout.svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { authStore, isAuthenticated, isLoading } from '@typyst/auth/stores';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  
  onMount(() => {
    authStore.initialize();
  });
  
  // Redirect logic
  $: if (!$isLoading) {
    const isAuthPage = $page.url.pathname.startsWith('/auth');
    
    if (!$isAuthenticated && !isAuthPage) {
      goto('/auth/signin');
    } else if ($isAuthenticated && isAuthPage) {
      goto('/dashboard');
    }
  }
</script>

{#if $isLoading}
  <div class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      {#if $authStore.isBootstrapping}
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p>Setting up your workspace...</p>
      {:else}
        <div class="animate-pulse">Loading...</div>
      {/if}
    </div>
  </div>
{:else}
  <slot />
{/if}
```

### Local Database Schema Updates

```typescript
// apps/app/src/lib/database/schema.ts - Updated for user-scoped data
import { bigint, boolean, jsonb, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

// Add users table for local session storage
export const users = pgTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  lastSyncAt: timestamp('last_sync_at')
});

export const sessions = pgTable('sessions', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => users.id),
  token: text('token').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

// Update existing tables to be user-scoped
export const collection = pgTable('collection', {
  path: text('path').primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(), // Add user scoping
  name: text('name').notNull(),
  lastOpened: timestamp('last_opened', { withTimezone: true }).notNull()
});

export const collectionSettings = pgTable('collection_settings', {
  collectionPath: text('collection_path')
    .primaryKey()
    .references(() => collection.path),
  userId: text('user_id').references(() => users.id).notNull(), // Add user scoping
  editor: jsonb('editor').notNull(),
  notes: jsonb('notes').notNull()
});

export const entry = pgTable('entry', {
  path: text('path').primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(), // Add user scoping
  name: text('name'),
  parentPath: text('parent_path').notNull(),
  collectionPath: text('collection_path').references(() => collection.path),
  content: text('content'),
  isFolder: boolean('is_folder').default(false),
  size: bigint('size', { mode: 'number' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});
```

## Implementation Phases

### Phase 1: Foundation Setup (3-4 days)

#### Day 1: Package Setup & Database
- [ ] Create `@typyst/auth` package
- [ ] Install Better Auth dependencies
- [ ] Set up Supabase project and database
- [ ] Configure environment variables
- [ ] Create server-side collections/entries tables

#### Day 2: Server Configuration & Bootstrap API
- [ ] Implement Better Auth server configuration
- [ ] Create BootstrapService for data fetching
- [ ] Implement `/api/user/bootstrap` endpoint
- [ ] Test basic auth endpoints and data fetching

#### Day 3: Client Implementation & Local Schema
- [ ] Update PGLite schema with user-scoped tables
- [ ] Create auth client configuration
- [ ] Implement Svelte stores with bootstrap logic
- [ ] Create database population utilities

#### Day 4: Integration & Bootstrap Flow
- [ ] Test complete sign up/sign in + bootstrap flow
- [ ] Verify local database population
- [ ] Test session management and persistence
- [ ] Handle bootstrap errors and edge cases

### Phase 2: UI Implementation (2-3 days)

#### Day 5-6: Authentication UI
- [ ] Create sign in/sign up forms
- [ ] Implement auth layout components
- [ ] Add loading states and error handling
- [ ] Style components with existing design system

#### Day 7: App Integration & Sync
- [ ] Integrate auth into app layouts with bootstrap UI
- [ ] Implement protected routes
- [ ] Add user profile components
- [ ] Implement basic sync endpoints for local changes
- [ ] Test complete user flows with data persistence

### Phase 3: Polish & Security (2-3 days)

#### Day 8-9: Security & Validation
- [ ] Implement proper input validation
- [ ] Add CSRF protection
- [ ] Secure session handling
- [ ] Test security scenarios

#### Day 10: Testing & Documentation
- [ ] Comprehensive testing across platforms
- [ ] Performance optimization
- [ ] Documentation updates
- [ ] Deployment preparation

## Testing Strategy

### Unit Tests
```typescript
// packages/auth/src/__tests__/stores.test.ts
import { describe, it, expect, vi } from 'vitest';
import { get } from 'svelte/store';
import { authStore } from '../stores.js';

describe('Auth Store', () => {
  it('should initialize with loading state', () => {
    const state = get(authStore);
    expect(state.isLoading).toBe(true);
    expect(state.user).toBe(null);
    expect(state.session).toBe(null);
  });

  it('should handle successful sign in', async () => {
    // Mock authClient.signIn.email
    vi.mock('../client.js', () => ({
      authClient: {
        signIn: {
          email: vi.fn().mockResolvedValue({
            data: { user: { id: '1', email: 'test@example.com' } },
            error: null
          })
        }
      }
    }));

    const result = await authStore.signIn('test@example.com', 'password');
    expect(result.success).toBe(true);
  });
});
```

### Integration Tests
```typescript
// apps/app/src/routes/auth/__tests__/signin.test.ts
import { describe, it, expect } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/svelte';
import SignInPage from '../signin/+page.svelte';

describe('Sign In Page', () => {
  it('should render sign in form', () => {
    const { getByLabelText, getByRole } = render(SignInPage);
    
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
  });

  it('should handle form submission', async () => {
    const { getByLabelText, getByRole } = render(SignInPage);
    
    await fireEvent.input(getByLabelText('Email'), { target: { value: 'test@example.com' } });
    await fireEvent.input(getByLabelText('Password'), { target: { value: 'password123' } });
    await fireEvent.click(getByRole('button', { name: 'Sign In' }));
    
    await waitFor(() => {
      // Assert expected behavior
    });
  });
});
```

### E2E Tests
```typescript
// tests/auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should allow user to sign up and sign in', async ({ page }) => {
    // Sign up
    await page.goto('/auth/signup');
    await page.fill('[data-testid="email"]', 'test@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.fill('[data-testid="name"]', 'Test User');
    await page.click('[data-testid="signup-button"]');
    
    // Should redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
    
    // Sign out
    await page.click('[data-testid="user-menu"]');
    await page.click('[data-testid="signout-button"]');
    
    // Should redirect to sign in
    await expect(page).toHaveURL('/auth/signin');
    
    // Sign in
    await page.fill('[data-testid="email"]', 'test@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('[data-testid="signin-button"]');
    
    // Should redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
  });
});
```

## Security Considerations

### Password Security
- Minimum 8 characters (configurable)
- Better Auth handles hashing with bcrypt
- Rate limiting on auth endpoints
- Account lockout after failed attempts

### Session Security
- HTTP-only cookies for session tokens
- Secure flag in production
- SameSite cookie attribute
- Automatic session refresh
- Session invalidation on sign out

### CSRF Protection
- Better Auth includes CSRF protection
- Verify origin headers
- Use proper HTTP methods (POST for mutations)

### Input Validation
- Email format validation
- Password strength requirements
- Sanitize all user inputs
- Prevent SQL injection (handled by Better Auth)

### Environment Security
- Secure environment variable storage
- Rotate secrets regularly
- Use different secrets for different environments
- Never commit secrets to version control

## Future Enhancements

### Social Authentication
```typescript
// Future: Add to server configuration
socialProviders: {
  github: {
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  }
}
```

### Two-Factor Authentication
```typescript
// Future: Add 2FA plugin
import { twoFactor } from "better-auth/plugins";

plugins: [
  twoFactor({
    issuer: "Typyst",
    // Additional 2FA configuration
  })
]
```

### Email Verification
```typescript
// Future: Enable email verification
emailAndPassword: {
  enabled: true,
  autoSignIn: false,
  requireEmailVerification: true,
  sendEmailVerificationOnSignUp: true
}
```

## Summary

This cloud-authenticated, locally-bootstrapped approach provides the best of both worlds:

### Benefits
- ✅ **Server-side security**: Proper auth validation and session management
- ✅ **Local performance**: All data operations against PGLite after bootstrap
- ✅ **Snappy UX**: No network latency for reads/writes after initial sync
- ✅ **Simple architecture**: Server controls access, local DB is performance cache
- ✅ **Scalable**: Easy to add real-time sync and conflict resolution later

### Data Flow
```
User Sign In → Server Auth → Bootstrap Local DB → Local-First Operations
     ↓              ↓              ↓                    ↓
Better Auth → Supabase Validation → Fetch User Data → PGLite Operations
```

### Next Steps
After implementing this auth foundation, we can easily add:
- Real-time sync with WebSockets or polling
- Conflict resolution for concurrent edits
- Offline queue for local changes
- CRDT integration for advanced sync scenarios

This implementation provides a solid foundation for the Typyst project and prepares the groundwork for advanced sync capabilities while maintaining excellent performance and user experience. 