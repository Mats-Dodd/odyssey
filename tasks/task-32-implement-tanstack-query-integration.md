# Task 32: Implement TanStack Query Integration

## Overview

Implement a reactive, type-safe data layer using TanStack Query that works seamlessly with the local-first architecture and provides foundation for future API integration.

## Context

TanStack Query will serve as the data fetching and caching layer that:
- Works with the current local-first architecture (PGLite/filesystem)
- Provides reactive data management with Svelte
- Enables optimistic updates for better UX
- Creates foundation for future API integration
- Maintains type safety from database to UI

## Goals

1. Create a new `@typyst/queries` package
2. Set up QueryClient providers for both web and desktop apps
3. Implement query hooks for collections and entries
4. Create reactive query parameters using Svelte stores
5. Implement optimistic updates for CRUD operations
6. Set up SSR-compatible prefetching for SvelteKit
7. Create migration patterns for future API integration

## Package Structure

```
packages/queries/
├── src/
│   ├── web/                    # Web-specific queries (PGLite)
│   │   ├── collections.ts      # Collection queries/mutations
│   │   ├── entries.ts          # Entry queries/mutations
│   │   └── auth.ts             # Auth-related queries
│   ├── desktop/                # Desktop-specific queries (Tauri)
│   │   ├── files.ts            # File system queries
│   │   └── settings.ts         # Settings queries
│   ├── shared/                 # Shared query keys and types
│   │   ├── keys.ts             # Query key factory
│   │   ├── utils.ts            # Shared utilities
│   │   └── types.ts            # Shared types
│   └── index.ts                # Main exports
├── package.json
└── README.md
```

## Implementation Details

### Package Configuration

**packages/queries/package.json:**
```json
{
  "name": "@typyst/queries",
  "version": "1.0.0",
  "type": "module",
  "exports": {
    ".": "./src/index.ts",
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
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

### Query Key Factory

**packages/queries/src/shared/keys.ts:**
```typescript
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

export type QueryKeys = typeof queryKeys;
```

### Shared Utilities

**packages/queries/src/shared/utils.ts:**
```typescript
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

// Optimistic update helper
export function optimisticUpdate<T>(
  queryClient: QueryClient,
  queryKey: unknown[],
  updater: (old: T) => T
) {
  const previousData = queryClient.getQueryData<T>(queryKey);
  
  if (previousData) {
    queryClient.setQueryData(queryKey, updater(previousData));
  }
  
  return { previousData };
}
```

### Web Collections Queries

**packages/queries/src/web/collections.ts:**
```typescript
import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
import { derived } from 'svelte/store';
import { eq, desc, like, or } from 'drizzle-orm';
import type { Collection, NewCollection } from '@typyst/db/schema/app';
import type { AppDatabase } from '@typyst/db/app';
import { queryKeys } from '../shared/keys.js';
import { optimisticUpdate } from '../shared/utils.js';

export function useCollections(db: AppDatabase) {
  return createQuery({
    queryKey: queryKeys.collections.list(),
    queryFn: async () => {
      const result = await db.db
        .select()
        .from(db.schema.collection)
        .orderBy(desc(db.schema.collection.updatedAt));
      return result;
    }
  });
}

export function useCollection(db: AppDatabase, id: string) {
  return createQuery({
    queryKey: queryKeys.collections.detail(id),
    queryFn: async () => {
      const result = await db.db
        .select()
        .from(db.schema.collection)
        .where(eq(db.schema.collection.id, id))
        .limit(1);
      return result[0] || null;
    },
    enabled: !!id
  });
}

export function useCreateCollection(db: AppDatabase) {
  const queryClient = useQueryClient();
  
  return createMutation({
    mutationFn: async (data: Omit<NewCollection, 'id' | 'createdAt' | 'updatedAt'>) => {
      const newCollection: NewCollection = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const [collection] = await db.db
        .insert(db.schema.collection)
        .values(newCollection)
        .returning();
      
      return collection;
    },
    onSuccess: (newCollection) => {
      // Add to collections list cache
      queryClient.setQueryData(
        queryKeys.collections.list(),
        (old: Collection[] = []) => [newCollection, ...old]
      );
      
      // Set individual collection cache
      queryClient.setQueryData(
        queryKeys.collections.detail(newCollection.id),
        newCollection
      );
    },
    onError: (error) => {
      console.error('Failed to create collection:', error);
    }
  });
}

export function useUpdateCollection(db: AppDatabase) {
  const queryClient = useQueryClient();
  
  return createMutation({
    mutationFn: async ({ 
      id, 
      data 
    }: { 
      id: string; 
      data: Partial<Omit<Collection, 'id' | 'createdAt' | 'updatedAt'>>
    }) => {
      const updateData = {
        ...data,
        updatedAt: new Date()
      };
      
      const [updated] = await db.db
        .update(db.schema.collection)
        .set(updateData)
        .where(eq(db.schema.collection.id, id))
        .returning();
      
      return updated;
    },
    onMutate: async ({ id, data }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ 
        queryKey: queryKeys.collections.detail(id) 
      });
      
      // Optimistically update individual collection
      const { previousData: previousCollection } = optimisticUpdate(
        queryClient,
        queryKeys.collections.detail(id),
        (old: Collection) => ({ ...old, ...data, updatedAt: new Date() })
      );
      
      // Optimistically update collections list
      const { previousData: previousList } = optimisticUpdate(
        queryClient,
        queryKeys.collections.list(),
        (old: Collection[] = []) => 
          old.map(col => col.id === id ? { ...col, ...data, updatedAt: new Date() } : col)
      );
      
      return { previousCollection, previousList };
    },
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previousCollection) {
        queryClient.setQueryData(
          queryKeys.collections.detail(variables.id),
          context.previousCollection
        );
      }
      if (context?.previousList) {
        queryClient.setQueryData(
          queryKeys.collections.list(),
          context.previousList
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

export function useDeleteCollection(db: AppDatabase) {
  const queryClient = useQueryClient();
  
  return createMutation({
    mutationFn: async (id: string) => {
      await db.db
        .delete(db.schema.collection)
        .where(eq(db.schema.collection.id, id));
      
      return { id };
    },
    onSuccess: ({ id }) => {
      // Remove from collections list
      queryClient.setQueryData(
        queryKeys.collections.list(),
        (old: Collection[] = []) => old.filter(col => col.id !== id)
      );
      
      // Remove individual collection cache
      queryClient.removeQueries({
        queryKey: queryKeys.collections.detail(id)
      });
      
      // Remove related entries cache
      queryClient.removeQueries({
        queryKey: queryKeys.collections.entries(id)
      });
    }
  });
}
```

### Web Entry Search with Reactive Parameters

**packages/queries/src/web/entries.ts:**
```typescript
import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
import { writable, derived } from 'svelte/store';
import { eq, desc, like, or, and } from 'drizzle-orm';
import type { Entry, NewEntry } from '@typyst/db/schema/app';
import type { AppDatabase } from '@typyst/db/app';
import { queryKeys } from '../shared/keys.js';

export function useEntries(db: AppDatabase, collectionId: string) {
  return createQuery({
    queryKey: queryKeys.collections.entries(collectionId),
    queryFn: async () => {
      const result = await db.db
        .select()
        .from(db.schema.entry)
        .where(eq(db.schema.entry.collectionId, collectionId))
        .orderBy(desc(db.schema.entry.updatedAt));
      
      return result;
    },
    enabled: !!collectionId
  });
}

export function useEntry(db: AppDatabase, id: string) {
  return createQuery({
    queryKey: queryKeys.entries.detail(id),
    queryFn: async () => {
      const result = await db.db
        .select()
        .from(db.schema.entry)
        .where(eq(db.schema.entry.id, id))
        .limit(1);
      
      return result[0] || null;
    },
    enabled: !!id
  });
}

export function useEntrySearch(db: AppDatabase) {
  const searchTerm = writable('');
  const collectionId = writable<string | null>(null);
  
  // Create reactive query options
  const queryOptions = derived(
    [searchTerm, collectionId],
    ([$searchTerm, $collectionId]) => ({
      queryKey: queryKeys.entries.search($searchTerm),
      queryFn: async () => {
        let query = db.db.select().from(db.schema.entry);
        
        const conditions = [];
        
        if ($searchTerm) {
          conditions.push(
            or(
              like(db.schema.entry.title, `%${$searchTerm}%`),
              like(db.schema.entry.content, `%${$searchTerm}%`)
            )
          );
        }
        
        if ($collectionId) {
          conditions.push(eq(db.schema.entry.collectionId, $collectionId));
        }
        
        if (conditions.length > 0) {
          query = query.where(and(...conditions));
        }
        
        return query.orderBy(desc(db.schema.entry.updatedAt));
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

export function useCreateEntry(db: AppDatabase) {
  const queryClient = useQueryClient();
  
  return createMutation({
    mutationFn: async (data: Omit<NewEntry, 'id' | 'createdAt' | 'updatedAt'>) => {
      const newEntry: NewEntry = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const [entry] = await db.db
        .insert(db.schema.entry)
        .values(newEntry)
        .returning();
      
      return entry;
    },
    onSuccess: (newEntry) => {
      // Add to collection entries cache
      queryClient.setQueryData(
        queryKeys.collections.entries(newEntry.collectionId),
        (old: Entry[] = []) => [newEntry, ...old]
      );
      
      // Set individual entry cache
      queryClient.setQueryData(
        queryKeys.entries.detail(newEntry.id),
        newEntry
      );
      
      // Invalidate search results
      queryClient.invalidateQueries({
        queryKey: queryKeys.entries.all
      });
    }
  });
}
```

### Desktop File System Queries

**packages/queries/src/desktop/files.ts:**
```typescript
import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
import { invoke } from '@tauri-apps/api/tauri';

interface FileNode {
  name: string;
  path: string;
  isDirectory: boolean;
  children?: FileNode[];
}

export function useFileTree(path: string) {
  return createQuery({
    queryKey: ['files', 'tree', path],
    queryFn: () => invoke<FileNode[]>('get_file_tree', { path }),
    staleTime: 1000 * 60, // 1 minute
    enabled: !!path
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
      
      // Update parent directory tree
      const parentDir = path.substring(0, path.lastIndexOf('/'));
      queryClient.invalidateQueries({
        queryKey: ['files', 'tree', parentDir]
      });
    }
  });
}

export function useCreateFile() {
  const queryClient = useQueryClient();
  
  return createMutation({
    mutationFn: ({ path, content = '' }: { path: string; content?: string }) =>
      invoke('create_file', { path, content }),
    onSuccess: (_, { path }) => {
      // Invalidate parent directory
      const parentDir = path.substring(0, path.lastIndexOf('/'));
      queryClient.invalidateQueries({
        queryKey: ['files', 'tree', parentDir]
      });
    }
  });
}
```

### QueryClient Setup for Web App

**apps/app/src/lib/query-client.ts:**
```typescript
import { QueryClient } from '@tanstack/svelte-query';
import { browser } from '$app/environment';

export function createAppQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser, // Disable SSR queries by default
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false, // Local-first, no need to refetch
        refetchOnMount: false,
        retry: 1
      },
      mutations: {
        retry: 0, // Local operations shouldn't need retries
      }
    }
  });
}
```

**apps/app/src/routes/+layout.ts:**
```typescript
import { createAppQueryClient } from '$lib/query-client.js';
import { appDb } from '$lib/database.js';

export const load = async () => {
  const queryClient = createAppQueryClient();
  
  return {
    queryClient,
    db: appDb
  };
};
```

**apps/app/src/routes/+layout.svelte:**
```svelte
<script lang="ts">
  import { QueryClientProvider } from '@tanstack/svelte-query';
  import { setContext } from 'svelte';
  
  export let data;
  
  // Set database context for child components
  setContext('db', data.db);
</script>

<QueryClientProvider client={data.queryClient}>
  <slot />
</QueryClientProvider>
```

### SSR Prefetching Example

**apps/app/src/routes/collections/[id]/+page.ts:**
```typescript
import type { PageLoad } from './$types';
import { queryKeys } from '@typyst/queries/shared';

export const load: PageLoad = async ({ params, parent }) => {
  const { queryClient, db } = await parent();
  
  // Prefetch collection data
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: queryKeys.collections.detail(params.id),
      queryFn: async () => {
        const result = await db.db
          .select()
          .from(db.schema.collection)
          .where(eq(db.schema.collection.id, params.id))
          .limit(1);
        return result[0] || null;
      },
    }),
    
    // Prefetch entries for this collection
    queryClient.prefetchQuery({
      queryKey: queryKeys.collections.entries(params.id),
      queryFn: async () => {
        return db.db
          .select()
          .from(db.schema.entry)
          .where(eq(db.schema.entry.collectionId, params.id))
          .orderBy(desc(db.schema.entry.createdAt));
      },
    })
  ]);
  
  return {
    collectionId: params.id,
  };
};
```

### Component Usage Example

**apps/app/src/routes/collections/[id]/+page.svelte:**
```svelte
<script lang="ts">
  import { page } from '$app/stores';
  import { getContext } from 'svelte';
  import { useCollection, useEntries, useCreateEntry } from '@typyst/queries/web';
  
  const db = getContext('db');
  
  $: collectionId = $page.params.id;
  $: collection = useCollection(db, collectionId);
  $: entries = useEntries(db, collectionId);
  $: createEntry = useCreateEntry(db);
  
  async function handleCreateEntry(data: { title: string; content: string }) {
    $createEntry.mutate({
      ...data,
      collectionId,
      userId: 'current-user-id' // Would come from auth context
    });
  }
</script>

{#if $collection.isLoading}
  <div>Loading collection...</div>
{:else if $collection.error}
  <div>Error: {$collection.error.message}</div>
{:else if $collection.data}
  <h1>{$collection.data.name}</h1>
  
  {#if $entries.isLoading}
    <div>Loading entries...</div>
  {:else if $entries.error}
    <div>Error loading entries: {$entries.error.message}</div>
  {:else}
    <div class="entries">
      {#each $entries.data || [] as entry (entry.id)}
        <div class="entry">
          <h3>{entry.title}</h3>
          <p>{entry.content}</p>
        </div>
      {/each}
    </div>
  {/if}
  
  <button 
    on:click={() => handleCreateEntry({ title: 'New Entry', content: '' })}
    disabled={$createEntry.isPending}
  >
    {$createEntry.isPending ? 'Creating...' : 'Create Entry'}
  </button>
{/if}
```

## Implementation Steps

1. **Create package structure and configuration**
2. **Implement query key factory pattern**
3. **Create shared utilities for reactive queries**
4. **Implement web-specific query hooks for collections**
5. **Implement web-specific query hooks for entries**
6. **Create desktop file system query hooks**
7. **Set up QueryClient providers in both apps**
8. **Implement SSR prefetching for SvelteKit**
9. **Create component usage examples**
10. **Add comprehensive documentation**

## Testing Strategy

1. **Unit Tests:**
   - Test query key generation
   - Test utility functions
   - Test optimistic update logic

2. **Integration Tests:**
   - Test query hooks with mock databases
   - Test cache invalidation patterns
   - Test optimistic updates with error scenarios

3. **E2E Tests:**
   - Test complete user flows with TanStack Query
   - Test offline functionality
   - Test cache persistence across page navigation

## Acceptance Criteria

- [ ] Package structure is properly organized
- [ ] Query hooks work for collections and entries
- [ ] Optimistic updates provide instant UI feedback
- [ ] Cache invalidation works correctly
- [ ] SSR prefetching works in SvelteKit
- [ ] Desktop file system queries function properly
- [ ] Type safety is maintained throughout
- [ ] Documentation is comprehensive
- [ ] Tests pass for all functionality

## Dependencies

- @tanstack/svelte-query
- @typyst/db package
- Svelte stores for reactive parameters

## Future Migration Pattern

When API is ready, queries can be easily migrated:

```typescript
// Current local query
const collections = useCollections(db);

// Future API query
const collections = useCollections(apiClient);
```

The query keys and cache management remain the same, only the data source changes.

## Notes

- Focus on local-first architecture initially
- All queries work with PGLite/filesystem
- Migration path to API is prepared but not implemented
- Optimistic updates provide excellent UX
- Cache management is centralized and consistent 