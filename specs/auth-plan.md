# Authentication Implementation Plan for Typyst
## Better Auth + Supabase Bootstrap (Phase 1)

## Executive Summary

This document outlines Phase 1 implementation for adding cloud-authenticated, locally-bootstrapped authentication to Typyst. Users authenticate against Better Auth + Supabase, then the local PGLite database is bootstrapped with all their data for snappy local-first operations.

**Key Technologies:**
- **Better Auth v1.0+**: Server-side authentication with email/password support
- **Supabase**: Managed PostgreSQL database for user data and auth storage
- **PGLite Bootstrap**: Local database populated with user data after authentication
- **Drizzle ORM**: Shared schema management between Supabase and PGLite
- **SvelteKit Integration**: Orchestrates auth and local DB bootstrap

**Architecture Goals:**
- **Cloud-authenticated**: Secure server-side validation and session management
- **Locally-bootstrapped**: All user data synced to PGLite after successful auth
- **Snappy performance**: Local-first operations after initial bootstrap
- **Simple security model**: Server controls access, local DB acts as performance cache
- **Shared schemas**: Single source of truth for database structure

## Table of Contents

1. [Current State Analysis](#current-state-analysis)
2. [Authentication Architecture](#authentication-architecture)
3. [Database Schema Strategy](#database-schema-strategy)
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
  isBootstrapping: boolean;
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
    I --> J[Fetch User Data via API]
    J --> K[Populate Local Collections & Entries]
    K --> L[Initialize App with Local Data]
    C --> L
    H --> D
    
    style I fill:#e1f5fe
    style J fill:#e1f5fe
    style K fill:#e1f5fe
```

## Database Schema Strategy

### Supabase Setup with Drizzle Schema Filtering

```typescript
// drizzle.config.ts
export default defineConfig({
  schema: './src/drizzle/schema',
  out: './src/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  schemaFilter: ['public'], // Only manage public schema, not auth
  verbose: true,
  strict: true,
});
```

### Shared Schema with Auth References

```typescript
// src/drizzle/schema/auth.ts
import { pgSchema } from 'drizzle-orm/pg-core';

// Reference auth schema without managing it
const authSchema = pgSchema('auth');
export const authUsers = authSchema.table('users', {
  id: uuid('id').primaryKey(),
});
```

```typescript
// src/drizzle/schema/collections.ts
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { authUsers } from './auth.js';

export const collections = pgTable('collections', {
  path: text('path').primaryKey(),
  userId: uuid('user_id')
    .notNull()
    .references(() => authUsers.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  lastOpened: timestamp('last_opened', { withTimezone: true }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const entries = pgTable('entries', {
  path: text('path').primaryKey(),
  userId: uuid('user_id')
    .notNull()
    .references(() => authUsers.id, { onDelete: 'cascade' }),
  name: text('name'),
  parentPath: text('parent_path').notNull(),
  collectionPath: text('collection_path').references(() => collections.path),
  content: text('content'),
  isFolder: boolean('is_folder').default(false),
  size: bigint('size', { mode: 'number' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});
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
    │   ├── bootstrap.ts          # Bootstrap service
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
    "./stores": "./src/stores.ts",
    "./bootstrap": "./src/bootstrap.ts"
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
});

export type Auth = typeof auth;
```

### Client Configuration

```typescript
// packages/auth/src/client.ts
import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: typeof window !== 'undefined' 
    ? window.location.origin 
    : process.env.BETTER_AUTH_URL || "http://localhost:5173",
});

export type AuthClient = typeof authClient;
```

### Bootstrap Service

```typescript
// packages/auth/src/bootstrap.ts
import type { PGliteDatabase } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';
import * as schema from '@/drizzle/schema';

export class BootstrapService {
  private db: ReturnType<typeof drizzle>;

  constructor(pgliteDb: PGliteDatabase) {
    this.db = drizzle(pgliteDb, { schema });
  }

  async bootstrapUserData(userId: string, authToken: string): Promise<void> {
    try {
      // 1. Clear existing local data
      await this.clearLocalDB();
      
      // 2. Fetch user's data from server
      const userData = await this.fetchUserData(authToken);
      
      // 3. Populate local database
      await this.populateLocalDB(userData);
      
    } catch (error) {
      console.error('Bootstrap failed:', error);
      throw new Error('Failed to bootstrap user data');
    }
  }

  private async clearLocalDB(): Promise<void> {
    await this.db.transaction(async (tx) => {
      await tx.delete(schema.entries);
      await tx.delete(schema.collections);
    });
  }

  private async fetchUserData(authToken: string) {
    const response = await fetch('/api/user/bootstrap', {
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Bootstrap API failed: ${response.status}`);
    }

    return response.json();
  }

  private async populateLocalDB(userData: any): Promise<void> {
    await this.db.transaction(async (tx) => {
      // Insert collections
      if (userData.collections?.length) {
        await tx.insert(schema.collections).values(userData.collections);
      }
      
      // Insert entries
      if (userData.entries?.length) {
        await tx.insert(schema.entries).values(userData.entries);
      }
    });
  }
}
```

### Svelte Stores with Bootstrap

```typescript
// packages/auth/src/stores.ts
import { writable, derived, type Readable } from 'svelte/store';
import { authClient } from './client.js';
import { BootstrapService } from './bootstrap.js';
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

  let bootstrapService: BootstrapService | null = null;

  return {
    subscribe,
    
    // Initialize bootstrap service
    initializeBootstrap(pgliteDb: any) {
      bootstrapService = new BootstrapService(pgliteDb);
    },
    
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
        if (bootstrapService) {
          update(state => ({ ...state, isBootstrapping: true }));
          await bootstrapService.bootstrapUserData(data.user.id, data.session.token);
        }

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
        
        if (bootstrapService) {
          update(state => ({ ...state, isBootstrapping: true }));
          await bootstrapService.bootstrapUserData(data.user.id, data.session.token);
        }

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
        
        if (bootstrapService) {
          await bootstrapService.clearLocalDB();
        }
        
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

    // Helper methods
    async getLocalSession(): Promise<Session | null> {
      // Implementation depends on storage choice (localStorage, PGLite, etc.)
      const stored = localStorage.getItem('typyst_session');
      return stored ? JSON.parse(stored) : null;
    },

    isSessionExpired(session: Session): boolean {
      return new Date() > new Date(session.expiresAt);
    },

    async storeSessionLocally(session: Session): Promise<void> {
      localStorage.setItem('typyst_session', JSON.stringify(session));
    },

    async clearLocalSession(): Promise<void> {
      localStorage.removeItem('typyst_session');
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
import { auth } from '@typyst/auth/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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
    const [collectionsResult, entriesResult] = await Promise.all([
      supabase
        .from('collections')
        .select('*')
        .eq('user_id', session.user.id),
      supabase
        .from('entries')
        .select('*')
        .eq('user_id', session.user.id)
    ]);

    return json({
      collections: collectionsResult.data || [],
      entries: entriesResult.data || []
    });
  } catch (error) {
    console.error('Bootstrap error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
```

### Authentication Middleware

```typescript
// apps/app/src/hooks.server.ts
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
    {#if $authStore.isBootstrapping}
      Setting up your workspace...
    {:else if isLoading}
      Signing in...
    {:else}
      Sign In
    {/if}
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
  import { db } from '$lib/database'; // PGLite instance
  
  onMount(() => {
    // Initialize bootstrap service with PGLite instance
    authStore.initializeBootstrap(db);
    
    // Initialize auth state
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
        <p class="text-sm text-gray-500 mt-2">This may take a moment for first-time setup</p>
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
import { bigint, boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { pgSchema } from 'drizzle-orm/pg-core';

// Reference auth schema without managing it
const authSchema = pgSchema('auth');
export const authUsers = authSchema.table('users', {
  id: uuid('id').primaryKey(),
});

// Add users table for local session storage (optional)
export const localSessions = pgTable('local_sessions', {
  id: text('id').primaryKey(),
  userId: uuid('user_id').references(() => authUsers.id),
  token: text('token').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

// Update existing tables to be user-scoped
export const collections = pgTable('collections', {
  path: text('path').primaryKey(),
  userId: uuid('user_id').references(() => authUsers.id).notNull(),
  name: text('name').notNull(),
  lastOpened: timestamp('last_opened', { withTimezone: true }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const entries = pgTable('entries', {
  path: text('path').primaryKey(),
  userId: uuid('user_id').references(() => authUsers.id).notNull(),
  name: text('name'),
  parentPath: text('parent_path').notNull(),
  collectionPath: text('collection_path').references(() => collections.path),
  content: text('content'),
  isFolder: boolean('is_folder').default(false),
  size: bigint('size', { mode: 'number' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});
```

## Implementation Phases

### Phase 1: Foundation Setup (1 week)

#### Day 1-2: Package Setup & Database
- [ ] Create `@typyst/auth` package
- [ ] Install Better Auth dependencies
- [ ] Set up Supabase project and database
- [ ] Configure environment variables
- [ ] Set up Drizzle schema filtering

#### Day 3-4: Server Configuration & Bootstrap API
- [ ] Implement Better Auth server configuration
- [ ] Create BootstrapService for data fetching
- [ ] Implement `/api/user/bootstrap` endpoint
- [ ] Test basic auth endpoints and data fetching

#### Day 5-7: Client Implementation & Integration
- [ ] Update PGLite schema with user-scoped tables
- [ ] Create auth client configuration
- [ ] Implement Svelte stores with bootstrap logic
- [ ] Test complete sign up/sign in + bootstrap flow

### Phase 2: UI Implementation (3-4 days)

#### Day 8-9: Authentication UI
- [ ] Create sign in/sign up forms
- [ ] Implement auth layout components
- [ ] Add loading states and error handling
- [ ] Style components with existing design system

#### Day 10-11: App Integration
- [ ] Integrate auth into app layouts with bootstrap UI
- [ ] Implement protected routes
- [ ] Add user profile components
- [ ] Test complete user flows with data persistence

### Phase 3: Polish & Testing (2-3 days)

#### Day 12-13: Security & Validation
- [ ] Implement proper input validation
- [ ] Add CSRF protection
- [ ] Secure session handling
- [ ] Test security scenarios

#### Day 14: Testing & Documentation
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

  it('should handle successful sign in with bootstrap', async () => {
    // Mock authClient.signIn.email and bootstrap service
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
  it('should show bootstrap progress', async () => {
    const { getByText } = render(SignInPage);
    
    // Simulate sign in
    await fireEvent.click(getByRole('button', { name: 'Sign In' }));
    
    await waitFor(() => {
      expect(getByText('Setting up your workspace...')).toBeInTheDocument();
    });
  });
});
```

### E2E Tests
```typescript
// tests/auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should complete sign up with bootstrap', async ({ page }) => {
    await page.goto('/auth/signup');
    await page.fill('[data-testid="email"]', 'test@example.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.fill('[data-testid="name"]', 'Test User');
    await page.click('[data-testid="signup-button"]');
    
    // Should show bootstrap progress
    await expect(page.locator('text=Setting up your workspace')).toBeVisible();
    
    // Should redirect to dashboard after bootstrap
    await expect(page).toHaveURL('/dashboard');
    
    // Should have local data available
    await expect(page.locator('[data-testid="collections-list"]')).toBeVisible();
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

### Bootstrap Security
- Server-side validation of user access
- Secure API endpoints with proper auth checks
- Data scoping by user ID
- No sensitive data in bootstrap payload

### Input Validation
- Email format validation
- Password strength requirements
- Sanitize all user inputs
- Prevent injection attacks

### Environment Security
- Secure environment variable storage
- Rotate secrets regularly
- Use different secrets for different environments
- Never commit secrets to version control

## Future Enhancements (Phase 2+)

### Periodic Sync
- Background sync of changes
- Conflict detection and resolution
- Incremental updates

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

### Real-time Sync (Phase 3)
- Consider Electric SQL for real-time collaboration
- WebSocket-based updates
- Operational transforms for conflict resolution

## Summary

This Phase 1 implementation provides a solid foundation for cloud-authenticated, locally-bootstrapped authentication:

### Benefits
- ✅ **Server-side security**: Proper auth validation and session management
- ✅ **Local performance**: All data operations against PGLite after bootstrap
- ✅ **Snappy UX**: No network latency for reads/writes after initial sync
- ✅ **Simple architecture**: Server controls access, local DB is performance cache
- ✅ **Shared schemas**: Single source of truth with Drizzle
- ✅ **Scalable**: Easy to add real-time sync later

### Data Flow
```
User Sign In → Server Auth → Bootstrap Local DB → Local-First Operations
     ↓              ↓              ↓                    ↓
Better Auth → Supabase Validation → Fetch User Data → PGLite Operations
```

### Next Steps
After implementing this Phase 1 foundation:
- **Phase 2**: Add periodic sync for data changes
- **Phase 3**: Consider Electric SQL for real-time collaboration
- **Phase 4**: Advanced features like offline queue and conflict resolution

This implementation provides excellent performance and user experience while maintaining security and preparing for future enhancements. 