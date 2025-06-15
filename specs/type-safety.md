# Refactoring for End-to-End Type Safety and Code Reusability

## 1. Overview

This document outlines a strategic plan to refactor the Odyssey codebase. The primary goals are to establish a single source of truth for the API, centralize database and authentication logic into shared packages, and leverage end-to-end type safety from the database to the UI.

For all refactoring here lets disregard making any chnages to the desktop app, lets just change the web app which is in apps/app. 

- **Core Technologies:** oRPC, TanStack Query, Drizzle, Better Auth, SvelteKit, Tauri.
- **Key Outcomes:**
    - A new `@typyst/db` package for all database schema and query logic.
    - Enhanced `@typyst/auth` package (already exists) to work with the new db package.
    - A new `@typyst/api` package defining the oRPC router contract, serving as the single source of truth for the API.
    - A reactive, robust, and type-safe data layer in the frontend applications (`app` and `desktop`) using TanStack Query.
    - Dramatically improved code organization, reusability, and developer experience across the monorepo.

---

## 2. Current State Analysis

### 2.1. Existing Architecture

**Apps Structure:**
- `apps/app` - Web app using PGLite (browser PostgreSQL) for local-first data storage
- `apps/desktop` - Desktop app using filesystem storage via Tauri APIs
- `apps/web` - Marketing site with download/update endpoints

**Current Data Architecture:**
- **Web App (`apps/app`)**: 
  - Uses Supabase for authentication (source of truth)
  - Uses PGLite for local-first data storage in the browser
  - Already integrated with `@typyst/auth` package
- **Desktop App (`apps/desktop`)**: 
  - Fully offline with local filesystem storage
  - No authentication system
  - Direct file operations via Tauri

**Existing Packages:**
- `@typyst/auth` - Already exists with Better Auth integration
- `@typyst/ui` - Shared component library (working well)
- `@typyst/config-*` - Shared configurations

### 2.2. Key Architectural Considerations

1. **Dual Database Design**: The web app intentionally uses two separate databases:
   - Supabase (server-side PostgreSQL) for authentication only
   - PGLite (client-side PostgreSQL) for application data

2. **Offline-First Philosophy**: Both apps are designed to work offline:
   - Desktop: Uses local filesystem
   - Web: Uses browser-based database

3. **No Existing API Server**: There's no application API server - only auth endpoints

---

## 3. Revised Refactoring Plan

### 3.1. Phase 1: Create `@typyst/db` Package

**Purpose:** Centralize all database schemas and provide typed database clients while respecting the dual-database architecture.

**Structure:**
```
packages/db/
├── src/
│   ├── schema/
│   │   ├── auth.ts         # Better Auth tables (user, session, account, verification)
│   │   ├── app.ts          # App tables (collection, entry, collectionSettings)
│   │   └── index.ts        # Re-export all schemas
│   ├── config/
│   │   ├── supabase.ts     # Supabase connection config
│   │   └── pglite.ts       # PGLite config
│   ├── client/
│   │   ├── auth-db.ts      # Drizzle client for Supabase (auth tables only)
│   │   └── app-db.ts       # Drizzle client for PGLite (app tables only)
│   └── index.ts            # Main exports
├── migrations/
│   ├── auth/               # Supabase migrations
│   └── app/                # PGLite migrations
├── drizzle.config.ts       # Drizzle configuration
└── package.json
```

**Key Implementation Details:**

```typescript
// packages/db/src/schema/auth.ts
import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

// ... other auth tables
```

```typescript
// packages/db/src/client/auth-db.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import postgres from 'postgres';
import * as authSchema from '../schema/auth.js';

export function createAuthDatabase(config: { connectionString: string }) {
  const sql = postgres(config.connectionString);
  const db = drizzle(sql, { schema: authSchema });
  
  return {
    db,
    adapter: drizzleAdapter(db, {
      provider: 'pg',
      schema: authSchema
    }),
    schema: authSchema
  };
}
```

### 3.2. Phase 2: Enhance `@typyst/auth` Package

**Changes Required:**
1. Add dependency on `@typyst/db`
2. Update to use schema types from `@typyst/db`
3. Maintain existing API surface

**Updated Configuration:**
```typescript
// packages/auth/src/server.ts
import { betterAuth, type Adapter } from 'better-auth';
import type { AuthUser, AuthSession } from './types.js';

export interface AuthServerConfig {
  database: Adapter;  // Now accepts a pre-configured adapter
  secret: string;
  baseURL: string;
  trustedOrigins?: string[];
  session?: {
    expiresIn: number;
    updateAge: number;
  };
}
```

### 3.3. Phase 3: Refactor `apps/app`

**Migration Steps:**

1. **Update imports to use `@typyst/db`:**
```typescript
// Before (apps/app/src/lib/auth.ts)
import * as schema from './database/schema';

// After
import { createAuthDatabase } from '@typyst/db/auth';
import { createAuthServer } from '@typyst/auth/server';

const authDb = createAuthDatabase({
  connectionString: process.env.SUPABASE_DATABASE_URL!
});

const authServer = createAuthServer({
  database: authDb.adapter,
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL!
});
```

2. **Separate PGLite client configuration:**
```typescript
// apps/app/src/lib/database/client.ts
import { createAppDatabase } from '@typyst/db/app';

export const { db, pgClient } = createAppDatabase({
  dataDir: 'idb://typyst'
});
```

### 3.4. Phase 4: Create `@typyst/api` Package (Future)

**Purpose:** Define the oRPC router contract for future API development.

**Structure:**
```
packages/api/
├── src/
│   ├── router/
│   │   ├── auth.ts         # Auth procedures
│   │   ├── notes.ts        # Note procedures  
│   │   ├── collections.ts  # Collection procedures
│   │   └── index.ts        # Combine routers
│   ├── context.ts          # Request context (auth, db)
│   ├── types.ts            # Shared types
│   └── index.ts            # Export AppRouter type
└── package.json
```

**Example Implementation:**
```typescript
// packages/api/src/router.ts
import { os } from '@orpc/server';
import { z } from 'zod';
import type { AuthSchema, AppSchema } from '@typyst/db/schema';

export const appRouter = {
  notes: {
    list: os
      .use(requireAuth)  // Middleware for auth
      .output(z.array(noteSchema))
      .handler(async ({ ctx }) => {
        // Implementation will be in the server app
        return ctx.db.select().from(notes).where(eq(notes.userId, ctx.user.id));
      }),
    
    create: os
      .use(requireAuth)
      .input(z.object({
        title: z.string(),
        content: z.string()
      }))
      .handler(async ({ ctx, input }) => {
        // Create note logic
      })
  },
  // ... other routers
};

export type AppRouter = typeof appRouter;
```

### 3.5. Phase 5: TanStack Query Integration

**Purpose:** Implement a reactive, type-safe data layer using TanStack Query that works seamlessly with our local-first architecture and future API.

#### 3.5.1. Query Client Setup

**Web App (`apps/app`):**
```typescript
// apps/app/src/app.html or root +layout.svelte
<script lang="ts">
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser, // Disable SSR queries
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false, // Local-first, no need to refetch
      },
      mutations: {
        retry: 0, // Local operations shouldn't retry
      }
    }
  });
</script>

<QueryClientProvider client={queryClient}>
  <slot />
</QueryClientProvider>
```

**Desktop App (`apps/desktop`):**
```typescript
// apps/desktop/src/routes/+layout.svelte
<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity, // Desktop data is always fresh
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      }
    }
  });
</script>
```

#### 3.5.2. Query Hooks Architecture

**Create a new `@typyst/queries` package:**
```
packages/queries/
├── src/
│   ├── web/                    # Web-specific queries
│   │   ├── collections.ts      # Collection queries/mutations
│   │   ├── entries.ts          # Entry queries/mutations
│   │   └── auth.ts             # Auth-related queries
│   ├── desktop/                # Desktop-specific queries
│   │   ├── files.ts            # File system queries
│   │   └── settings.ts         # Settings queries
│   ├── shared/                 # Shared query keys and types
│   │   ├── keys.ts             # Query key factory
│   │   └── types.ts            # Shared types
│   └── index.ts
└── package.json
```

**Query Key Factory Pattern:**
```typescript
// packages/queries/src/shared/keys.ts
export const queryKeys = {
  all: ['typyst'] as const,
  auth: {
    all: ['typyst', 'auth'] as const,
    user: () => [...queryKeys.auth.all, 'user'] as const,
    session: () => [...queryKeys.auth.all, 'session'] as const,
  },
  collections: {
    all: ['typyst', 'collections'] as const,
    list: (filters?: CollectionFilters) => 
      [...queryKeys.collections.all, 'list', filters] as const,
    detail: (id: string) => 
      [...queryKeys.collections.all, 'detail', id] as const,
    entries: (collectionId: string) => 
      [...queryKeys.collections.all, 'entries', collectionId] as const,
  },
  entries: {
    all: ['typyst', 'entries'] as const,
    detail: (id: string) => 
      [...queryKeys.entries.all, 'detail', id] as const,
    search: (query: string) => 
      [...queryKeys.entries.all, 'search', query] as const,
  }
} as const;
```

#### 3.5.3. Web App Query Implementation

**Collections Query Hook:**
```typescript
// packages/queries/src/web/collections.ts
import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
import { derived } from 'svelte/store';
import type { Collection } from '@typyst/db/schema';
import { queryKeys } from '../shared/keys';

// For PGLite direct access
export function useCollections(db: AppDatabase) {
  return createQuery({
    queryKey: queryKeys.collections.list(),
    queryFn: async () => {
      const result = await db
        .select()
        .from(collections)
        .orderBy(desc(collections.updatedAt));
      return result;
    }
  });
}

// For future oRPC integration
export function useCollectionsRPC(client: AppClient) {
  return createQuery({
    queryKey: queryKeys.collections.list(),
    queryFn: () => client.collections.list(),
  });
}

// Mutation for creating collections
export function useCreateCollection(db: AppDatabase) {
  const queryClient = useQueryClient();
  
  return createMutation({
    mutationFn: async (data: NewCollection) => {
      const [collection] = await db
        .insert(collections)
        .values(data)
        .returning();
      return collection;
    },
    onSuccess: () => {
      // Invalidate and refetch collections
      queryClient.invalidateQueries({ 
        queryKey: queryKeys.collections.all 
      });
    },
    onError: (error) => {
      console.error('Failed to create collection:', error);
    }
  });
}

// Optimistic update example
export function useUpdateCollection(db: AppDatabase) {
  const queryClient = useQueryClient();
  
  return createMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateCollection }) => {
      const [updated] = await db
        .update(collections)
        .set(data)
        .where(eq(collections.id, id))
        .returning();
      return updated;
    },
    onMutate: async ({ id, data }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ 
        queryKey: queryKeys.collections.detail(id) 
      });
      
      // Snapshot previous value
      const previous = queryClient.getQueryData(
        queryKeys.collections.detail(id)
      );
      
      // Optimistically update
      queryClient.setQueryData(
        queryKeys.collections.detail(id),
        (old: Collection) => ({ ...old, ...data })
      );
      
      return { previous };
    },
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previous) {
        queryClient.setQueryData(
          queryKeys.collections.detail(variables.id),
          context.previous
        );
      }
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ 
        queryKey: queryKeys.collections.all 
      });
    }
  });
}
```

**Entry Search with Reactive Params:**
```typescript
// packages/queries/src/web/entries.ts
import { writable, derived } from 'svelte/store';

export function useEntrySearch(db: AppDatabase) {
  const searchTerm = writable('');
  const collectionId = writable<string | null>(null);
  
  // Create reactive query options
  const queryOptions = derived(
    [searchTerm, collectionId],
    ([$searchTerm, $collectionId]) => ({
      queryKey: queryKeys.entries.search($searchTerm),
      queryFn: async () => {
        let query = db.select().from(entries);
        
        if ($searchTerm) {
          query = query.where(
            or(
              like(entries.title, `%${$searchTerm}%`),
              like(entries.content, `%${$searchTerm}%`)
            )
          );
        }
        
        if ($collectionId) {
          query = query.where(eq(entries.collectionId, $collectionId));
        }
        
        return query.orderBy(desc(entries.updatedAt));
      },
      enabled: $searchTerm.length > 2, // Only search with 3+ characters
    })
  );
  
  const query = createQuery(queryOptions);
  
  return {
    query,
    searchTerm,
    collectionId,
  };
}
```

#### 3.5.4. Desktop App Query Implementation

**File System Queries:**
```typescript
// packages/queries/src/desktop/files.ts
import { createQuery, createMutation } from '@tanstack/svelte-query';
import { invoke } from '@tauri-apps/api/tauri';
import { queryKeys } from '../shared/keys';

export function useFileTree(path: string) {
  return createQuery({
    queryKey: ['files', 'tree', path],
    queryFn: () => invoke<FileNode[]>('get_file_tree', { path }),
    staleTime: 1000 * 60, // 1 minute
  });
}

export function useFileContent(path: string) {
  return createQuery({
    queryKey: ['files', 'content', path],
    queryFn: () => invoke<string>('read_file', { path }),
    enabled: !!path,
  });
}

export function useSaveFile() {
  const queryClient = useQueryClient();
  
  return createMutation({
    mutationFn: ({ path, content }: { path: string; content: string }) =>
      invoke('write_file', { path, content }),
    onSuccess: (_, { path }) => {
      // Invalidate file content cache
      queryClient.invalidateQueries({
        queryKey: ['files', 'content', path]
      });
    }
  });
}
```

#### 3.5.5. Future oRPC Integration Pattern

**When the API is ready:**
```typescript
// apps/app/src/lib/queries/setup.ts
import { createORPCClient } from '@orpc/client';
import { createORPCFetchLink } from '@orpc/client/fetch';
import type { AppRouter } from '@typyst/api';

// Create typed oRPC client
export const apiClient = createORPCClient<AppRouter>({
  links: [
    createORPCFetchLink({
      url: '/api/rpc',
      headers: () => ({
        // Auth headers from Better Auth
        Authorization: `Bearer ${getAuthToken()}`,
      }),
    }),
  ],
});

// Use in queries
export function useCollections() {
  return createQuery({
    queryKey: queryKeys.collections.list(),
    queryFn: () => apiClient.collections.list(),
  });
}
```

#### 3.5.6. SSR and Prefetching Strategy

**For SvelteKit routes that need data:**
```typescript
// apps/app/src/routes/collections/[id]/+page.ts
import type { PageLoad } from './$types';
import { queryKeys } from '@typyst/queries';

export const load: PageLoad = async ({ params, parent }) => {
  const { queryClient, db } = await parent();
  
  // Prefetch collection data
  await queryClient.prefetchQuery({
    queryKey: queryKeys.collections.detail(params.id),
    queryFn: async () => {
      const collection = await db
        .select()
        .from(collections)
        .where(eq(collections.id, params.id))
        .limit(1);
      return collection[0];
    },
  });
  
  // Prefetch entries for this collection
  await queryClient.prefetchQuery({
    queryKey: queryKeys.collections.entries(params.id),
    queryFn: async () => {
      return db
        .select()
        .from(entries)
        .where(eq(entries.collectionId, params.id))
        .orderBy(desc(entries.createdAt));
    },
  });
  
  return {
    collectionId: params.id,
  };
};
```

**In the component:**
```svelte
<!-- apps/app/src/routes/collections/[id]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { useCollection, useCollectionEntries } from '@typyst/queries/web';
  
  $: collectionId = $page.params.id;
  $: collection = useCollection(db, collectionId);
  $: entries = useCollectionEntries(db, collectionId);
</script>

{#if $collection.isLoading}
  <LoadingSpinner />
{:else if $collection.error}
  <ErrorMessage error={$collection.error} />
{:else if $collection.data}
  <CollectionView 
    collection={$collection.data} 
    entries={$entries.data ?? []}
  />
{/if}
```

#### 3.5.7. Benefits of This Approach

1. **Type Safety**: Full type inference from database schema to UI components
2. **Local-First**: Queries work directly with local databases (PGLite/filesystem)
3. **Future-Proof**: Easy migration path to API-based queries when ready
4. **Optimistic Updates**: Instant UI feedback for better UX
5. **Cache Management**: Centralized cache invalidation logic
6. **SSR Compatible**: Proper server-side rendering support for web app
7. **Reactive**: Leverages Svelte stores for reactive query parameters

### 3.6. `@typyst/queries` Package Implementation Details

**Package Structure and Dependencies:**
```json
// packages/queries/package.json
{
  "name": "@typyst/queries",
  "version": "1.0.0",
  "type": "module",
  "exports": {
    "./web": "./src/web/index.ts",
    "./desktop": "./src/desktop/index.ts",
    "./shared": "./src/shared/index.ts"
  },
  "dependencies": {
    "@tanstack/svelte-query": "^5.x",
    "svelte": "^4.x"
  },
  "peerDependencies": {
    "@typyst/db": "workspace:*",
    "@typyst/api": "workspace:*"
  }
}
```

**Shared Query Utilities:**
```typescript
// packages/queries/src/shared/utils.ts
import { writable } from 'svelte/store';
import type { CreateQueryOptions } from '@tanstack/svelte-query';

// Helper for creating reactive query options
export function createReactiveQuery<TData, TError = Error>(
  optionsFn: () => CreateQueryOptions<TData, TError>
) {
  const options = writable(optionsFn());
  
  return {
    options,
    update: () => options.set(optionsFn()),
  };
}

// Debounced search helper
export function createDebouncedSearch(delay = 300) {
  const searchTerm = writable('');
  let timeout: NodeJS.Timeout;
  
  const setSearch = (value: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => searchTerm.set(value), delay);
  };
  
  return { searchTerm, setSearch };
}
```

**Migration Helper for Future API:**
```typescript
// packages/queries/src/shared/migration.ts
type QueryMode = 'local' | 'api' | 'hybrid';

export function createAdaptiveQuery<TLocal, TApi = TLocal>(config: {
  mode: QueryMode;
  localFn: () => Promise<TLocal>;
  apiFn?: () => Promise<TApi>;
  transform?: (data: TApi) => TLocal;
}) {
  return createQuery({
    queryKey: [...config.queryKey, config.mode],
    queryFn: async () => {
      if (config.mode === 'local' || !config.apiFn) {
        return config.localFn();
      }
      
      if (config.mode === 'api') {
        const apiData = await config.apiFn();
        return config.transform ? config.transform(apiData) : apiData as TLocal;
      }
      
      // Hybrid mode: try API first, fallback to local
      try {
        const apiData = await config.apiFn();
        return config.transform ? config.transform(apiData) : apiData as TLocal;
      } catch {
        return config.localFn();
      }
    },
  });
}
```

**Web App Integration Example:**
```typescript
// apps/app/src/lib/stores/database.ts
import { getContext, setContext } from 'svelte';
import type { AppDatabase } from '@typyst/db/app';

const DB_CONTEXT_KEY = Symbol('db');

export function setDatabaseContext(db: AppDatabase) {
  setContext(DB_CONTEXT_KEY, db);
}

export function getDatabase(): AppDatabase {
  const db = getContext<AppDatabase>(DB_CONTEXT_KEY);
  if (!db) {
    throw new Error('Database not found in context');
  }
  return db;
}

// In root layout
// <script>
//   import { db } from '$lib/database/client';
//   setDatabaseContext(db);
// </script>
```

**Desktop App Integration Pattern:**
```typescript
// packages/queries/src/desktop/base.ts
import { createQuery, createMutation } from '@tanstack/svelte-query';
import { invoke } from '@tauri-apps/api/tauri';

// Base query creator for Tauri commands
export function createTauriQuery<TData, TArgs = void>(
  command: string,
  getArgs: () => TArgs,
  options?: Partial<CreateQueryOptions<TData>>
) {
  return createQuery({
    queryKey: [command, getArgs()],
    queryFn: () => invoke<TData>(command, getArgs()),
    ...options,
  });
}

// Base mutation creator
export function createTauriMutation<TData, TVariables>(
  command: string,
  options?: Partial<CreateMutationOptions<TData, Error, TVariables>>
) {
  return createMutation({
    mutationFn: (variables: TVariables) => 
      invoke<TData>(command, variables),
    ...options,
  });
}
```

---

## 4. Implementation Strategy

### 4.1. Migration Order

1. **Week 1: Database Package**
   - Create `@typyst/db` package structure
   - Move and split schemas (auth vs app)
   - Create database client factories
   - Set up migrations structure

2. **Week 2: Auth Package Updates**
   - Update `@typyst/auth` to use `@typyst/db`
   - Maintain existing API surface

3. **Week 3: Web App Migration**
   - Update all imports in `apps/app`
   - Test auth flow thoroughly
   - Ensure PGLite continues working

4. **Week 4: API Package Foundation**
   - Create `@typyst/api` structure
   - Define initial router types
   - Plan server implementation

5. **Week 5: TanStack Query Integration**
   - Create `@typyst/queries` package
   - Set up QueryClient providers in both apps
   - Implement query key factory pattern
   - Create initial query/mutation hooks
   - Set up optimistic updates for collections/entries
   - Test SSR compatibility in web app

### 4.2. Testing Strategy

1. **Unit Tests:** Test each package in isolation
2. **Integration Tests:** Test package interactions
3. **E2E Tests:** Ensure auth flow works end-to-end
4. **Migration Tests:** Ensure existing data migrations work
5. **Query Tests:** Test cache invalidation and optimistic updates

### 4.3. Engineering Notes

- Resolve potential circular dependency between `@typyst/auth` and `@typyst/db` by importing only the database adapter into the auth package
- Cross-DB Foreign Keys: once the schema is split, any FK from `app` tables (`collection`, `entry`, …) to `user.id` can no longer be enforced in PGLite.  Either (a) drop those FK constraints in the `app` schema or (b) duplicate a minimal `user` table in PGLite purely for referential integrity.
- Package Export Maps: add sub-path exports (e.g. `"./auth"`, `"./app"`) and matching `typesVersions` entries in `packages/db/package.json` so `import { user } from '@typyst/db/auth'` is type-safe.
- Env Vars in Browser: replace `process.env.*` in browser-side code with SvelteKit `$env/static/public` (e.g. `PUBLIC_SUPABASE_URL`) to avoid undefined variables at runtime.
- TanStack Query Version: lock an exact `@tanstack/svelte-query` version across all packages to prevent peer-dependency drift.
- Build/Tooling Path Aliases: update every `tsconfig.json`, Vite alias, and ESLint config to recognise `@typyst/db`, `@typyst/queries`, etc.
- Turbo / pnpm Pipelines: declare `packages/db` and `packages/queries` as build dependencies of `apps/app` so incremental builds work.
- Shared Test Setup: add a root `vitest.config.ts` (or `@typyst/config-vitest`) consumed by each new package for unit tests.

---

## 5. Benefits of This Approach

### 5.1. Immediate Benefits
- **Type Safety:** Shared schema types across all packages, with full type inference in TanStack Query hooks
- **Code Reuse:** Centralized database logic and query patterns
- **Maintainability:** Clear separation of concerns between data fetching and UI
- **Incremental Migration:** Can be done gradually without breaking changes
- **Reactive Data Layer:** TanStack Query provides automatic caching, background refetching, and optimistic updates
- **Offline Support:** Queries work seamlessly with local databases

### 5.2. Future Benefits
- **API Ready:** Foundation for future API development with easy migration from local queries to oRPC
- **Desktop Integration:** Clear path for desktop app to adopt shared packages
- **Scalability:** Easy to add new features with consistent patterns
- **Real-time Ready:** TanStack Query supports websocket subscriptions for future real-time features
- **Performance:** Built-in request deduplication and intelligent caching

---

## 6. Considerations and Trade-offs

### 6.1. What We're NOT Changing
- Dual database architecture (Supabase + PGLite)
- Offline-first approach
- Desktop app's filesystem-based storage (for now)

### 6.2. Potential Challenges
- Managing two different database connections
- Keeping schemas in sync between environments
- Ensuring type safety across package boundaries

### 6.3. Future Considerations
- Desktop app migration to shared packages
- Potential sync features between local and cloud
- Real-time collaboration features

---

## 7. Success Metrics

- Zero runtime errors due to type mismatches
- Reduced code duplication by 60%
- Faster feature development (measured by sprint velocity)
- Improved developer experience (measured by team feedback)

---

## 8. Appendix: Current File Mappings

**Files to Move:**
- `apps/app/src/lib/database/schema.ts` → `packages/db/src/schema/` (split into auth.ts and app.ts)
- `apps/app/src/lib/database/client.ts` → `packages/db/src/client/app-db.ts`
- `apps/app/src/lib/database/migrations/` → `packages/db/migrations/app/`
- `apps/app/drizzle.config.ts` → `packages/db/drizzle.config.ts`

**Files to Update:**
- `apps/app/src/lib/auth.ts` - Use `@typyst/db` for database setup
- `apps/app/src/lib/auth-client.ts` - No changes needed
- `apps/app/src/lib/api/*.ts` - Update schema imports
- `apps/app/src/hooks.server.ts` - No changes needed

## 9. Migration Examples: Before and After

### 9.1. Web App Collection Management

**Before (Direct Database Access):**
```svelte
<!-- apps/app/src/routes/collections/+page.svelte -->
<script lang="ts">
  import { db } from '$lib/database/client';
  import { collections } from '$lib/database/schema';
  import { onMount } from 'svelte';
  
  let collectionList = [];
  let loading = true;
  let error = null;
  
  onMount(async () => {
    try {
      collectionList = await db
        .select()
        .from(collections)
        .orderBy(desc(collections.updatedAt));
      loading = false;
    } catch (e) {
      error = e;
      loading = false;
    }
  });
  
  async function createCollection(data) {
    try {
      const [newCollection] = await db
        .insert(collections)
        .values(data)
        .returning();
      
      // Manually update the list
      collectionList = [...collectionList, newCollection];
    } catch (e) {
      console.error('Failed to create collection:', e);
    }
  }
</script>
```

**After (With TanStack Query):**
```svelte
<!-- apps/app/src/routes/collections/+page.svelte -->
<script lang="ts">
  import { useCollections, useCreateCollection } from '@typyst/queries/web';
  import { getDatabase } from '$lib/stores/database';
  
  const db = getDatabase();
  const collections = useCollections(db);
  const createMutation = useCreateCollection(db);
  
  async function handleCreate(data) {
    $createMutation.mutate(data, {
      onSuccess: (collection) => {
        // Optional: Navigate to the new collection
        goto(`/collections/${collection.id}`);
      }
    });
  }
</script>

{#if $collections.isLoading}
  <LoadingSpinner />
{:else if $collections.error}
  <ErrorAlert error={$collections.error} />
{:else}
  <CollectionGrid collections={$collections.data} />
{/if}

<CreateCollectionDialog 
  onSubmit={handleCreate}
  isLoading={$createMutation.isPending}
/>
```

### 9.2. Desktop App File Operations

**Before (Direct Tauri Invoke):**
```svelte
<!-- apps/desktop/src/routes/editor/+page.svelte -->
<script lang="ts">
  import { invoke } from '@tauri-apps/api/tauri';
  import { onMount } from 'svelte';
  
  export let filePath: string;
  
  let content = '';
  let saving = false;
  
  onMount(async () => {
    try {
      content = await invoke('read_file', { path: filePath });
    } catch (e) {
      console.error('Failed to read file:', e);
    }
  });
  
  async function save() {
    saving = true;
    try {
      await invoke('write_file', { path: filePath, content });
      // Show success message
    } catch (e) {
      console.error('Failed to save:', e);
    } finally {
      saving = false;
    }
  }
</script>
```

**After (With TanStack Query):**
```svelte
<!-- apps/desktop/src/routes/editor/+page.svelte -->
<script lang="ts">
  import { useFileContent, useSaveFile } from '@typyst/queries/desktop';
  
  export let filePath: string;
  
  const fileQuery = useFileContent(filePath);
  const saveMutation = useSaveFile();
  
  $: content = $fileQuery.data || '';
  
  function handleSave() {
    $saveMutation.mutate({ 
      path: filePath, 
      content 
    });
  }
</script>

{#if $fileQuery.isLoading}
  <LoadingEditor />
{:else if $fileQuery.error}
  <ErrorMessage error={$fileQuery.error} />
{:else}
  <Editor 
    bind:value={content}
    on:save={handleSave}
    isSaving={$saveMutation.isPending}
  />
{/if}
```

### 9.3. Search Implementation

**Before (Manual State Management):**
```svelte
<!-- apps/app/src/components/SearchBar.svelte -->
<script lang="ts">
  import { db } from '$lib/database/client';
  import { entries } from '$lib/database/schema';
  import { debounce } from '$lib/utils';
  
  let searchTerm = '';
  let results = [];
  let searching = false;
  
  const performSearch = debounce(async (term: string) => {
    if (term.length < 3) {
      results = [];
      return;
    }
    
    searching = true;
    try {
      results = await db
        .select()
        .from(entries)
        .where(
          or(
            like(entries.title, `%${term}%`),
            like(entries.content, `%${term}%`)
          )
        );
    } catch (e) {
      console.error('Search failed:', e);
    } finally {
      searching = false;
    }
  }, 300);
  
  $: performSearch(searchTerm);
</script>

<input bind:value={searchTerm} placeholder="Search..." />
```

**After (With TanStack Query):**
```svelte
<!-- apps/app/src/components/SearchBar.svelte -->
<script lang="ts">
  import { useEntrySearch } from '@typyst/queries/web';
  import { getDatabase } from '$lib/stores/database';
  
  const db = getDatabase();
  const { query, searchTerm, collectionId } = useEntrySearch(db);
</script>

<input 
  bind:value={$searchTerm} 
  placeholder="Search entries..."
/>

<select bind:value={$collectionId}>
  <option value={null}>All collections</option>
  <!-- ... collection options ... -->
</select>

{#if $query.isFetching}
  <SearchingIndicator />
{/if}

{#if $query.data}
  <SearchResults results={$query.data} />
{/if}
```

### 9.4. Data Prefetching for Routes

**Before (No Prefetching):**
```typescript
// apps/app/src/routes/collections/[id]/+page.svelte
<script lang="ts">
  import { page } from '$app/stores';
  import { db } from '$lib/database/client';
  import { onMount } from 'svelte';
  
  let collection = null;
  let entries = [];
  
  onMount(async () => {
    const id = $page.params.id;
    
    // Sequential loading
    collection = await db
      .select()
      .from(collections)
      .where(eq(collections.id, id))
      .get();
      
    entries = await db
      .select()
      .from(entries)
      .where(eq(entries.collectionId, id));
  });
</script>
```

**After (With Route Prefetching):**
```typescript
// apps/app/src/routes/collections/[id]/+page.ts
export const load: PageLoad = async ({ params, parent }) => {
  const { queryClient, db } = await parent();
  
  // Parallel prefetching
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: queryKeys.collections.detail(params.id),
      queryFn: () => getCollectionById(db, params.id),
    }),
    queryClient.prefetchQuery({
      queryKey: queryKeys.collections.entries(params.id),
      queryFn: () => getEntriesByCollection(db, params.id),
    })
  ]);
  
  return { collectionId: params.id };
};
```

These migration examples demonstrate:
- Simplified component code with automatic loading/error states
- Built-in cache management and invalidation
- Optimistic updates for better UX
- Parallel data fetching capabilities
- Type-safe query keys and data
- Reactive parameters using Svelte stores

This refactoring plan respects the current architecture while providing a clear path toward better code organization and type safety.
