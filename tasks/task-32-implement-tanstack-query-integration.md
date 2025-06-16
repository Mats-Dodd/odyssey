# Task 32: Implement TanStack Query Integration

## Overview

Implement a reactive, type-safe data layer using TanStack Query that connects directly to the completed oRPC API server from `@typyst/api`. This approach ensures perfect type safety and creates a production-ready architecture from day one.

## Prerequisites

**✅ COMPLETED:** The `@typyst/api` package is fully implemented with:
- Complete oRPC router definitions with full CRUD operations
- Full Zod schemas for all inputs/outputs
- Middleware patterns for auth and database access
- Working API endpoints ready for client consumption

## Context

TanStack Query will serve as the reactive data layer that:
- Connects directly to the oRPC API server using `@orpc/client`
- Provides context-based API access via Svelte
- Enables aggressive optimistic updates for instant UX
- Creates perfect type safety from oRPC → Query → UI
- Delivers production-ready architecture without migration needed

## Goals

1. Create `@typyst/queries` package that uses oRPC client for real API calls
2. Set up context-based API access (no prop drilling)
3. Implement query hooks that call real oRPC endpoints with full type safety
4. Create aggressive optimistic updates for all mutations
5. Set up QueryClient factory with production optimizations
6. Build proper error handling for real API failures
7. Ensure perfect type safety throughout the stack

## Package Structure

```
packages/queries/
├── src/
│   ├── lib/
│   │   ├── query-keys.ts       # Query key factory using oRPC patterns
│   │   ├── query-client.ts     # QueryClient factory with production defaults
│   │   ├── api-client.ts       # oRPC client factory and configuration
│   │   ├── context.ts          # Svelte context helpers for API access
│   │   └── optimistic-utils.ts # Optimistic update utilities
│   ├── hooks/
│   │   ├── collections.ts      # TanStack Query hooks for collections API
│   │   ├── entries.ts          # TanStack Query hooks for entries API
│   │   └── auth.ts             # TanStack Query hooks for auth API
│   ├── components/
│   │   ├── QueryProvider.svelte # QueryClientProvider with API client setup
│   │   └── index.ts            # Component exports
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
    "./hooks": "./src/hooks/index.ts",
    "./components": "./src/components/index.ts",
    "./lib": "./src/lib/index.ts"
  },
  "dependencies": {
    "@tanstack/svelte-query": "^5.59.16",
    "@orpc/client": "latest",
    "svelte": "^4.x"
  },
  "peerDependencies": {
    "@typyst/api": "workspace:*"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

### oRPC Client Setup

**packages/queries/src/lib/api-client.ts:**
```typescript
import { createORPCClient } from '@orpc/client';
import type { AppRouter } from '@typyst/api';

export interface ApiClientOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
  timeout?: number;
}

export function createApiClient(options: ApiClientOptions = {}) {
  const { baseUrl = '/api/rpc', headers = {}, timeout = 30000 } = options;
  
  return createORPCClient<AppRouter>({
    url: baseUrl,
    fetch: (input, init) => {
      return fetch(input, {
        ...init,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
          ...init?.headers,
        },
        signal: AbortSignal.timeout(timeout),
      });
    },
  });
}

// Singleton instance for consistent usage
let apiClient: ReturnType<typeof createApiClient> | undefined;

export function getApiClient(): ReturnType<typeof createApiClient> {
  if (!apiClient) {
    apiClient = createApiClient();
  }
  return apiClient;
}
```

### Context-Based API Access

**packages/queries/src/lib/context.ts:**
```typescript
import { getContext, setContext } from 'svelte';
import type { AppRouter } from '@typyst/api';
import type { createORPCClient } from '@orpc/client';

const API_CLIENT_KEY = Symbol('typyst-api-client');
const USER_CONTEXT_KEY = Symbol('typyst-user');

type ApiClient = ReturnType<typeof createORPCClient<AppRouter>>;

export interface User {
  id: string;
  name?: string;
  email?: string;
}

export function setApiClientContext(client: ApiClient): void {
  setContext(API_CLIENT_KEY, client);
}

export function getApiClientContext(): ApiClient {
  const client = getContext<ApiClient>(API_CLIENT_KEY);
  if (!client) {
    throw new Error(
      'API client context not found. Did you call setApiClientContext() in a parent component?'
    );
  }
  return client;
}

export function setUserContext(user: User | null): void {
  setContext(USER_CONTEXT_KEY, user);
}

export function getUserContext(): User {
  const user = getContext<User | null>(USER_CONTEXT_KEY);
  if (!user) {
    throw new Error(
      'User context not found. User must be authenticated to access this feature.'
    );
  }
  return user;
}

// Helper for components to check if context is available
export function hasApiClientContext(): boolean {
  try {
    getApiClientContext();
    return true;
  } catch {
    return false;
  }
}

export function hasUserContext(): boolean {
  try {
    getUserContext();
    return true;
  } catch {
    return false;
  }
}
```

### Query Key Factory

**packages/queries/src/lib/query-keys.ts:**
```typescript
// Import input types from oRPC contracts
import type { 
  ListCollectionsInputSchema,
  GetCollectionInputSchema,
  ListEntriesInputSchema,
  GetEntryInputSchema,
  SearchEntriesInputSchema 
} from '@typyst/api';
import type { z } from 'zod';

// Infer types from oRPC schemas
type ListCollectionsInput = z.infer<typeof ListCollectionsInputSchema>;
type GetCollectionInput = z.infer<typeof GetCollectionInputSchema>;
type ListEntriesInput = z.infer<typeof ListEntriesInputSchema>;
type GetEntryInput = z.infer<typeof GetEntryInputSchema>;
type SearchEntriesInput = z.infer<typeof SearchEntriesInputSchema>;

export const queryKeys = {
  all: ['typyst'] as const,
  
  auth: {
    all: () => [...queryKeys.all, 'auth'] as const,
    session: () => [...queryKeys.auth.all(), 'session'] as const,
    user: () => [...queryKeys.auth.all(), 'user'] as const,
  },
  
  collections: {
    all: () => [...queryKeys.all, 'collections'] as const,
    lists: () => [...queryKeys.collections.all(), 'list'] as const,
    list: (input?: ListCollectionsInput) => 
      [...queryKeys.collections.lists(), input] as const,
    details: () => [...queryKeys.collections.all(), 'detail'] as const,
    detail: (input: GetCollectionInput) => 
      [...queryKeys.collections.details(), input] as const,
    settings: (collectionPath: string) => 
      [...queryKeys.collections.all(), 'settings', collectionPath] as const,
    recent: (limit?: number) => 
      [...queryKeys.collections.all(), 'recent', limit] as const,
  },
  
  entries: {
    all: () => [...queryKeys.all, 'entries'] as const,
    lists: () => [...queryKeys.entries.all(), 'list'] as const,
    list: (input?: ListEntriesInput) =>
      [...queryKeys.entries.lists(), input] as const,
    details: () => [...queryKeys.entries.all(), 'detail'] as const,
    detail: (input: GetEntryInput) => 
      [...queryKeys.entries.details(), input] as const,
    searches: () => [...queryKeys.entries.all(), 'search'] as const,
    search: (input: SearchEntriesInput) => 
      [...queryKeys.entries.searches(), input] as const,
    tree: (collectionPath: string, rootPath?: string) =>
      [...queryKeys.entries.all(), 'tree', collectionPath, rootPath] as const,
  }
} as const;

export type QueryKeys = typeof queryKeys;
```

### QueryClient Factory

**packages/queries/src/lib/query-client.ts:**
```typescript
import { QueryClient } from '@tanstack/svelte-query';
import { browser } from '$app/environment';

export function createTypystQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 30, // 30 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true, // Refetch on mount for real API data
        refetchOnReconnect: true, // Refetch on reconnect for API
        retry: (failureCount, error) => {
          // Don't retry on client errors (4xx)
          if (error?.message?.includes('4')) return false;
          // Retry server errors (5xx) up to 3 times
          return failureCount < 3;
        },
        // Enable queries only in browser for SSR compatibility
        enabled: browser,
      },
      mutations: {
        retry: (failureCount, error) => {
          // Don't retry client errors, but retry network issues
          if (error?.message?.includes('4')) return false;
          return failureCount < 2;
        },
      }
    }
  });
}

// Singleton instance for consistent usage
let queryClient: QueryClient | undefined;

export function getQueryClient(): QueryClient {
  if (!queryClient) {
    queryClient = createTypystQueryClient();
  }
  return queryClient;
}
```

### Real API Query Hooks with Optimistic Updates

**packages/queries/src/hooks/collections.ts:**
```typescript
import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
import { derived, type Readable } from 'svelte/store';
import type { 
  ListCollectionsInputSchema,
  CreateCollectionSchema,
  UpdateCollectionInputSchema,
  DeleteCollectionInputSchema,
  CollectionsResponseSchema,
  CollectionSchema
} from '@typyst/api';
import type { z } from 'zod';
import { queryKeys } from '../lib/query-keys.js';
import { getApiClientContext } from '../lib/context.js';

// Type inference from oRPC schemas
type ListCollectionsInput = z.infer<typeof ListCollectionsInputSchema>;
type CreateCollectionInput = z.infer<typeof CreateCollectionSchema>;
type UpdateCollectionInput = z.infer<typeof UpdateCollectionInputSchema>;
type DeleteCollectionInput = z.infer<typeof DeleteCollectionInputSchema>;
type CollectionsResponse = z.infer<typeof CollectionsResponseSchema>;
type Collection = z.infer<typeof CollectionSchema>;

export function useCollections(input?: Readable<ListCollectionsInput | undefined>) {
  const apiClient = getApiClientContext();
  
  return createQuery(
    derived(
      input || { subscribe: (fn) => fn(undefined) },
      ($input) => ({
        queryKey: queryKeys.collections.list($input),
        queryFn: async (): Promise<CollectionsResponse> => {
          // Direct oRPC call - fully type-safe!
          return await apiClient.collections.list($input);
        },
      })
    )
  );
}

export function useCollection(path: Readable<string>) {
  const apiClient = getApiClientContext();
  
  return createQuery(
    derived(path, ($path) => ({
      queryKey: queryKeys.collections.detail({ path: $path }),
      queryFn: async (): Promise<Collection> => {
        return await apiClient.collections.get({ path: $path });
      },
      enabled: !!$path,
    }))
  );
}

export function useRecentCollections(limit?: Readable<number>) {
  const apiClient = getApiClientContext();
  
  return createQuery(
    derived(
      limit || { subscribe: (fn) => fn(10) },
      ($limit) => ({
        queryKey: queryKeys.collections.recent($limit),
        queryFn: async (): Promise<Collection[]> => {
          return await apiClient.collections.getRecent({ limit: $limit });
        },
      })
    )
  );
}

export function useCreateCollection() {
  const queryClient = useQueryClient();
  const apiClient = getApiClientContext();
  
  return createMutation({
    mutationFn: async (input: CreateCollectionInput): Promise<Collection> => {
      // Real API call with full type safety!
      return await apiClient.collections.create(input);
    },
    
    onMutate: async (input) => {
      // Cancel outgoing queries
      await queryClient.cancelQueries({ queryKey: queryKeys.collections.all() });
      
      // Create optimistic collection
      const optimisticCollection: Collection = {
        path: input.path,
        name: input.name,
        lastOpened: new Date().toISOString(),
        userId: 'temp-optimistic' // Will be set by server response
      };
      
      // Optimistically update all relevant list queries
      queryClient.setQueriesData(
        { queryKey: queryKeys.collections.lists() },
        (old: CollectionsResponse | undefined) => {
          if (!old) return { 
            items: [optimisticCollection], 
            pagination: { page: 1, limit: 20, total: 1, hasMore: false } 
          };
          return {
            ...old,
            items: [optimisticCollection, ...old.items],
            pagination: { ...old.pagination, total: old.pagination.total + 1 }
          };
        }
      );
      
      // Set individual collection cache
      queryClient.setQueryData(
        queryKeys.collections.detail({ path: input.path }),
        optimisticCollection
      );
      
      return { optimisticCollection };
    },
    
    onError: (error, variables, context) => {
      // Rollback optimistic updates on API error
      if (context?.optimisticCollection) {
        queryClient.setQueriesData(
          { queryKey: queryKeys.collections.lists() },
          (old: CollectionsResponse | undefined) => {
            if (!old) return old;
            return {
              ...old,
              items: old.items.filter(c => c.path !== context.optimisticCollection.path),
              pagination: { ...old.pagination, total: Math.max(0, old.pagination.total - 1) }
            };
          }
        );
        
        queryClient.removeQueries({ 
          queryKey: queryKeys.collections.detail({ path: context.optimisticCollection.path }) 
        });
      }
    },
    
    onSuccess: (newCollection, variables, context) => {
      // Replace optimistic update with real server data
      if (context?.optimisticCollection) {
        queryClient.setQueriesData(
          { queryKey: queryKeys.collections.lists() },
          (old: CollectionsResponse | undefined) => {
            if (!old) return old;
            return {
              ...old,
              items: old.items.map(c => 
                c.path === context.optimisticCollection.path ? newCollection : c
              )
            };
          }
        );
      }
      
      // Update individual collection cache with server data
      queryClient.setQueryData(
        queryKeys.collections.detail({ path: newCollection.path }),
        newCollection
      );
      
      // Invalidate recent collections to refresh order
      queryClient.invalidateQueries({ queryKey: queryKeys.collections.recent() });
    }
  });
}

export function useUpdateCollection() {
  const queryClient = useQueryClient();
  const apiClient = getApiClientContext();
  
  return createMutation({
    mutationFn: async (input: UpdateCollectionInput): Promise<Collection> => {
      return await apiClient.collections.update(input);
    },
    
    onMutate: async (input) => {
      await queryClient.cancelQueries({ 
        queryKey: queryKeys.collections.detail({ path: input.path }) 
      });
      
      const previousCollection = queryClient.getQueryData(
        queryKeys.collections.detail({ path: input.path })
      );
      
      // Optimistically update
      const optimisticUpdate = { 
        ...input.data, 
        lastOpened: input.data.lastOpened || new Date().toISOString() 
      };
      
      queryClient.setQueryData(
        queryKeys.collections.detail({ path: input.path }),
        (old: Collection | undefined) => old ? { ...old, ...optimisticUpdate } : old
      );
      
      // Update all list caches
      queryClient.setQueriesData(
        { queryKey: queryKeys.collections.lists() },
        (old: CollectionsResponse | undefined) => {
          if (!old) return old;
          return {
            ...old,
            items: old.items.map(c => 
              c.path === input.path ? { ...c, ...optimisticUpdate } : c
            )
          };
        }
      );
      
      return { previousCollection };
    },
    
    onError: (error, input, context) => {
      // Rollback on error
      if (context?.previousCollection) {
        queryClient.setQueryData(
          queryKeys.collections.detail({ path: input.path }),
          context.previousCollection
        );
        
        queryClient.setQueriesData(
          { queryKey: queryKeys.collections.lists() },
          (old: CollectionsResponse | undefined) => {
            if (!old) return old;
            return {
              ...old,
              items: old.items.map(c => 
                c.path === input.path ? context.previousCollection : c
              )
            };
          }
        );
      }
    },
    
    onSuccess: () => {
      // Invalidate recent collections to refresh order
      queryClient.invalidateQueries({ queryKey: queryKeys.collections.recent() });
    }
  });
}

export function useDeleteCollection() {
  const queryClient = useQueryClient();
  const apiClient = getApiClientContext();
  
  return createMutation({
    mutationFn: async (input: DeleteCollectionInput) => {
      return await apiClient.collections.delete(input);
    },
    
    onSuccess: (_, input) => {
      // Remove from all list caches
      queryClient.setQueriesData(
        { queryKey: queryKeys.collections.lists() },
        (old: CollectionsResponse | undefined) => {
          if (!old) return old;
          return {
            ...old,
            items: old.items.filter(c => c.path !== input.path),
            pagination: { ...old.pagination, total: Math.max(0, old.pagination.total - 1) }
          };
        }
      );
      
      // Remove individual collection cache
      queryClient.removeQueries({ 
        queryKey: queryKeys.collections.detail({ path: input.path }) 
      });
      
      // Remove settings cache
      queryClient.removeQueries({ 
        queryKey: queryKeys.collections.settings(input.path) 
      });
      
      // Remove related entries cache
      queryClient.removeQueries({ 
        queryKey: queryKeys.entries.list({ collectionPath: input.path }) 
      });
      
      // Invalidate recent collections
      queryClient.invalidateQueries({ queryKey: queryKeys.collections.recent() });
    }
  });
}
```

### Provider Component with API Client

**packages/queries/src/components/QueryProvider.svelte:**
```svelte
<script lang="ts">
  import { QueryClientProvider } from '@tanstack/svelte-query';
  import { getQueryClient } from '../lib/query-client.js';
  import { setApiClientContext, setUserContext } from '../lib/context.js';
  import { createApiClient } from '../lib/api-client.js';
  import type { User } from '../lib/context.js';
  import type { ApiClientOptions } from '../lib/api-client.js';

  export let apiOptions: ApiClientOptions = {};
  export let user: User | null = null;

  const queryClient = getQueryClient();
  const apiClient = createApiClient(apiOptions);

  // Set contexts for all child components
  setApiClientContext(apiClient);
  setUserContext(user);
</script>

<QueryClientProvider client={queryClient}>
  <slot />
</QueryClientProvider>
```

## Implementation Steps

1. **Create @typyst/queries package structure** 
   - Package configuration with oRPC client dependencies
   - TypeScript configuration

2. **Implement oRPC client setup**
   - API client factory with proper error handling
   - Context system for API access
   - Query key factory using oRPC patterns

3. **Build production-ready query hooks**
   - Collections CRUD operations calling real API
   - Entries CRUD operations calling real API
   - Auth operations calling real API

4. **Create TanStack Query hooks with real API**
   - Query hooks that use oRPC client directly
   - Mutation hooks with aggressive optimistic updates
   - Error handling and rollback logic for API failures

5. **Add comprehensive testing**
   - Unit tests for query hooks
   - Integration tests with real API
   - Optimistic update testing

6. **Create documentation and examples**
   - Usage patterns with real API
   - Error handling patterns
   - Best practices

## Testing Strategy

1. **Query Hook Testing:**
   - Test real API calls with proper mocking
   - Test optimistic updates work correctly
   - Test rollback on API errors
   - Test cache invalidation patterns

2. **Integration Testing:**
   - Test context-based API access
   - Test with real oRPC endpoints
   - Test concurrent operations
   - Test error scenarios (network failures, server errors)

3. **Type Safety Testing:**
   - Verify end-to-end type safety
   - Test schema validation
   - Test TypeScript compilation

## Acceptance Criteria

- [ ] Package structure follows oRPC-first architecture
- [ ] Context-based API access works seamlessly
- [ ] All query hooks call real oRPC endpoints with perfect type safety
- [ ] Aggressive optimistic updates provide instant UI feedback
- [ ] Error handling includes proper rollback mechanisms for API failures
- [ ] Type safety is maintained from oRPC → Query → UI
- [ ] Real API integration is fully functional
- [ ] Comprehensive tests cover all functionality
- [ ] Documentation includes usage examples with real API

## Dependencies

- @tanstack/svelte-query (for reactive queries)
- @orpc/client (for type-safe API calls)
- @typyst/api (for oRPC contracts and types)
- Svelte (for context system)

## Production Benefits

With this architecture:
- **Production-ready from day one** - no migration needed
- **Perfect type safety** maintained throughout the entire stack
- **Real error handling** for network and server failures
- **Optimistic updates** for instant user experience
- **Scalable architecture** that works with real API server

## Notes

- **API Server Ready:** Uses the completed oRPC API implementation
- **Type Safety:** Perfect end-to-end type safety is the primary goal
- **Production Architecture:** This IS the final production architecture
- **Performance:** Aggressive optimistic updates for instant user experience
- **Error Handling:** Real API error handling with proper rollback mechanisms 