# Task 32: Implement TanStack Query Integration

## Overview

Implement a reactive, type-safe data layer using TanStack Query that builds directly on the oRPC contracts from `@typyst/api`. This approach ensures perfect type safety and creates a seamless migration path from local-first to API-based architecture.

## Prerequisites

**⚠️ IMPORTANT:** This task requires the `@typyst/api` package to be completed first with full oRPC router definitions, Zod schemas, and middleware patterns. The TanStack Query implementation will directly implement these oRPC contracts locally.

## Context

TanStack Query will serve as the reactive data layer that:
- Implements oRPC contracts locally using Supabase
- Provides context-based database access via Svelte
- Enables aggressive optimistic updates for instant UX
- Creates perfect type safety from oRPC → Query → UI
- Allows seamless migration: just swap implementation when API is ready

## Goals

1. Create `@typyst/queries` package that implements oRPC contracts locally
2. Set up context-based database access (no prop drilling)
3. Implement query hooks that follow oRPC interface exactly
4. Create aggressive optimistic updates for all mutations
5. Set up QueryClient factory with local-first optimizations
6. Build migration patterns for future API integration
7. Ensure perfect type safety throughout the stack

## Package Structure

```
packages/queries/
├── src/
│   ├── lib/
│   │   ├── query-keys.ts       # Query key factory using oRPC patterns
│   │   ├── query-client.ts     # QueryClient factory with local-first defaults
│   │   ├── context.ts          # Svelte context helpers for DB access
│   │   └── utils.ts            # Optimistic update utilities
│   ├── implementations/
│   │   ├── collections.ts      # Local implementation of collections oRPC contract
│   │   ├── entries.ts          # Local implementation of entries oRPC contract
│   │   └── auth.ts             # Local implementation of auth oRPC contract
│   ├── hooks/
│   │   ├── collections.ts      # TanStack Query hooks for collections
│   │   ├── entries.ts          # TanStack Query hooks for entries
│   │   └── auth.ts             # TanStack Query hooks for auth
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
    "./implementations": "./src/implementations/index.ts",
    "./lib": "./src/lib/index.ts"
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

### Context-Based Database Access

**packages/queries/src/lib/context.ts:**
```typescript
import { getContext, setContext } from 'svelte';
import type { SupabaseDatabase } from '@typyst/db/supabase';

const DB_CONTEXT_KEY = Symbol('typyst-db');

export function setDatabaseContext(db: SupabaseDatabase) {
  setContext(DB_CONTEXT_KEY, db);
}

export function getDatabaseContext(): SupabaseDatabase {
  const db = getContext<SupabaseDatabase>(DB_CONTEXT_KEY);
  if (!db) {
    throw new Error(
      'Database context not found. Did you call setDatabaseContext() in a parent component?'
    );
  }
  return db;
}

// Helper for components to check if context is available
export function hasDatabaseContext(): boolean {
  try {
    getDatabaseContext();
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
  ListCollectionsInput, 
  GetCollectionInput,
  ListEntriesInput,
  GetEntryInput,
  SearchEntriesInput 
} from '@typyst/api';

export const queryKeys = {
  all: ['typyst'] as const,
  
  auth: {
    all: ['typyst', 'auth'] as const,
    session: () => [...queryKeys.auth.all, 'session'] as const,
    user: () => [...queryKeys.auth.all, 'user'] as const,
  },
  
  collections: {
    all: ['typyst', 'collections'] as const,
    list: (input?: ListCollectionsInput) => 
      [...queryKeys.collections.all, 'list', input] as const,
    detail: (input: GetCollectionInput) => 
      [...queryKeys.collections.all, 'detail', input] as const,
    entries: (collectionId: string) => 
      [...queryKeys.collections.all, 'entries', collectionId] as const,
  },
  
  entries: {
    all: ['typyst', 'entries'] as const,
    list: (input?: ListEntriesInput) =>
      [...queryKeys.entries.all, 'list', input] as const,
    detail: (input: GetEntryInput) => 
      [...queryKeys.entries.all, 'detail', input] as const,
    search: (input: SearchEntriesInput) => 
      [...queryKeys.entries.all, 'search', input] as const,
  }
} as const;

export type QueryKeys = typeof queryKeys;
```

### QueryClient Factory

**packages/queries/src/lib/query-client.ts:**
```typescript
import { QueryClient } from '@tanstack/svelte-query';

export function createTypystQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 30, // 30 seconds (short for local-first)
        refetchOnWindowFocus: false, // Local data doesn't need window focus refetch
        refetchOnMount: false, // Local data is already fresh
        retry: 1, // Local operations shouldn't need many retries
        refetchOnReconnect: false, // Local-first doesn't need reconnect logic
      },
      mutations: {
        retry: 0, // Local mutations shouldn't retry automatically
      }
    }
  });
}
```

### Local oRPC Contract Implementation

**packages/queries/src/implementations/collections.ts:**
```typescript
import { eq, desc, like, and } from 'drizzle-orm';
import type { 
  ListCollectionsInput, 
  CollectionsResponse,
  GetCollectionInput,
  Collection,
  CreateCollectionInput,
  UpdateCollectionInput,
  DeleteCollectionInput,
  SuccessResponse
} from '@typyst/api';
import type { SupabaseDatabase } from '@typyst/db/supabase';

export async function listCollections(
  db: SupabaseDatabase, 
  input?: ListCollectionsInput
): Promise<CollectionsResponse> {
  let query = db.db.select().from(db.schema.collection);
  
  // Apply filters from oRPC input
  const conditions = [];
  
  if (input?.userId) {
    conditions.push(eq(db.schema.collection.userId, input.userId));
  }
  
  if (input?.search) {
    conditions.push(
      like(db.schema.collection.name, `%${input.search}%`)
    );
  }
  
  if (conditions.length > 0) {
    query = query.where(and(...conditions));
  }
  
  // Apply sorting
  const sortField = input?.sort?.field || 'updatedAt';
  const sortDirection = input?.sort?.direction || 'desc';
  
  if (sortDirection === 'desc') {
    query = query.orderBy(desc(db.schema.collection[sortField]));
  } else {
    query = query.orderBy(db.schema.collection[sortField]);
  }
  
  // Apply pagination
  const page = input?.pagination?.page || 1;
  const limit = input?.pagination?.limit || 20;
  const offset = (page - 1) * limit;
  
  const collections = await query.limit(limit).offset(offset);
  
  // Get total count for pagination
  const totalResult = await db.db
    .select({ count: sql<number>`count(*)` })
    .from(db.schema.collection)
    .where(conditions.length > 0 ? and(...conditions) : undefined);
  
  const total = totalResult[0]?.count || 0;
  
  return {
    collections,
    pagination: {
      page,
      limit,
      total,
      hasMore: offset + collections.length < total
    }
  };
}

export async function getCollection(
  db: SupabaseDatabase,
  input: GetCollectionInput
): Promise<Collection | null> {
  const result = await db.db
    .select()
    .from(db.schema.collection)
    .where(eq(db.schema.collection.id, input.id))
    .limit(1);
  
  return result[0] || null;
}

export async function createCollection(
  db: SupabaseDatabase,
  input: CreateCollectionInput
): Promise<Collection> {
  const newCollection = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  const [collection] = await db.db
    .insert(db.schema.collection)
    .values(newCollection)
    .returning();
  
  return collection;
}

export async function updateCollection(
  db: SupabaseDatabase,
  input: UpdateCollectionInput & { id: string }
): Promise<Collection> {
  const { id, ...updateData } = input;
  
  const [updated] = await db.db
    .update(db.schema.collection)
    .set({ ...updateData, updatedAt: new Date() })
    .where(eq(db.schema.collection.id, id))
    .returning();
  
  if (!updated) {
    throw new Error(`Collection with id ${id} not found`);
  }
  
  return updated;
}

export async function deleteCollection(
  db: SupabaseDatabase,
  input: DeleteCollectionInput
): Promise<SuccessResponse> {
  await db.db
    .delete(db.schema.collection)
    .where(eq(db.schema.collection.id, input.id));
  
  return { success: true };
}
```

### Query Hooks with Aggressive Optimistic Updates

**packages/queries/src/hooks/collections.ts:**
```typescript
import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
import type { 
  ListCollectionsInput,
  CreateCollectionInput,
  UpdateCollectionInput,
  Collection
} from '@typyst/api';
import { queryKeys } from '../lib/query-keys.js';
import { getDatabaseContext } from '../lib/context.js';
import {
  listCollections,
  getCollection,
  createCollection,
  updateCollection,
  deleteCollection
} from '../implementations/collections.js';

export function useCollections(input?: ListCollectionsInput) {
  const db = getDatabaseContext();
  
  return createQuery({
    queryKey: queryKeys.collections.list(input),
    queryFn: () => listCollections(db, input),
  });
}

export function useCollection(id: string) {
  const db = getDatabaseContext();
  
  return createQuery({
    queryKey: queryKeys.collections.detail({ id }),
    queryFn: () => getCollection(db, { id }),
    enabled: !!id,
  });
}

export function useCreateCollection() {
  const queryClient = useQueryClient();
  const db = getDatabaseContext();
  
  return createMutation({
    mutationFn: (input: CreateCollectionInput) => createCollection(db, input),
    
    onMutate: async (input) => {
      // Cancel outgoing queries
      await queryClient.cancelQueries({ queryKey: queryKeys.collections.all });
      
      // Create optimistic collection
      const optimisticCollection: Collection = {
        ...input,
        id: `temp-${Date.now()}`, // Temporary ID for optimistic update
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      // Optimistically update collections list
      queryClient.setQueryData(
        queryKeys.collections.list(),
        (old: CollectionsResponse | undefined) => {
          if (!old) return { collections: [optimisticCollection], pagination: { page: 1, limit: 20, total: 1, hasMore: false } };
          return {
            ...old,
            collections: [optimisticCollection, ...old.collections],
            pagination: { ...old.pagination, total: old.pagination.total + 1 }
          };
        }
      );
      
      return { optimisticCollection };
    },
    
    onError: (error, variables, context) => {
      // Rollback optimistic update
      if (context?.optimisticCollection) {
        queryClient.setQueryData(
          queryKeys.collections.list(),
          (old: CollectionsResponse | undefined) => {
            if (!old) return old;
            return {
              ...old,
              collections: old.collections.filter(c => c.id !== context.optimisticCollection.id),
              pagination: { ...old.pagination, total: Math.max(0, old.pagination.total - 1) }
            };
          }
        );
      }
    },
    
    onSuccess: (newCollection, variables, context) => {
      // Replace optimistic update with real data
      if (context?.optimisticCollection) {
        queryClient.setQueryData(
          queryKeys.collections.list(),
          (old: CollectionsResponse | undefined) => {
            if (!old) return old;
            return {
              ...old,
              collections: old.collections.map(c => 
                c.id === context.optimisticCollection.id ? newCollection : c
              )
            };
          }
        );
      }
      
      // Set individual collection cache
      queryClient.setQueryData(
        queryKeys.collections.detail({ id: newCollection.id }),
        newCollection
      );
    }
  });
}

export function useUpdateCollection() {
  const queryClient = useQueryClient();
  const db = getDatabaseContext();
  
  return createMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateCollectionInput }) => 
      updateCollection(db, { id, ...data }),
    
    onMutate: async ({ id, data }) => {
      // Cancel outgoing queries
      await queryClient.cancelQueries({ queryKey: queryKeys.collections.detail({ id }) });
      
      // Get previous data for rollback
      const previousCollection = queryClient.getQueryData(queryKeys.collections.detail({ id }));
      
      // Optimistically update individual collection
      queryClient.setQueryData(
        queryKeys.collections.detail({ id }),
        (old: Collection | undefined) => old ? { ...old, ...data, updatedAt: new Date().toISOString() } : old
      );
      
      // Optimistically update collections list
      queryClient.setQueryData(
        queryKeys.collections.list(),
        (old: CollectionsResponse | undefined) => {
          if (!old) return old;
          return {
            ...old,
            collections: old.collections.map(c => 
              c.id === id ? { ...c, ...data, updatedAt: new Date().toISOString() } : c
            )
          };
        }
      );
      
      return { previousCollection };
    },
    
    onError: (error, { id }, context) => {
      // Rollback on error
      if (context?.previousCollection) {
        queryClient.setQueryData(
          queryKeys.collections.detail({ id }),
          context.previousCollection
        );
        
        queryClient.setQueryData(
          queryKeys.collections.list(),
          (old: CollectionsResponse | undefined) => {
            if (!old) return old;
            return {
              ...old,
              collections: old.collections.map(c => 
                c.id === id ? context.previousCollection : c
              )
            };
          }
        );
      }
    }
  });
}

export function useDeleteCollection() {
  const queryClient = useQueryClient();
  const db = getDatabaseContext();
  
  return createMutation({
    mutationFn: (id: string) => deleteCollection(db, { id }),
    
    onSuccess: (_, id) => {
      // Remove from collections list
      queryClient.setQueryData(
        queryKeys.collections.list(),
        (old: CollectionsResponse | undefined) => {
          if (!old) return old;
          return {
            ...old,
            collections: old.collections.filter(c => c.id !== id),
            pagination: { ...old.pagination, total: Math.max(0, old.pagination.total - 1) }
          };
        }
      );
      
      // Remove individual collection cache
      queryClient.removeQueries({ queryKey: queryKeys.collections.detail({ id }) });
      
      // Remove related entries cache
      queryClient.removeQueries({ queryKey: queryKeys.collections.entries(id) });
    }
  });
}
```

### Future Migration Pattern

**When API server is ready, only the implementations change:**

```typescript
// packages/queries/src/implementations/collections.ts
import { createORPCClient } from '@orpc/client';
import type { AppRouter } from '@typyst/api';

// FUTURE: Remote implementation
const apiClient = createORPCClient<AppRouter>({ url: '/api/rpc' });

export async function listCollections(
  _db: any, // No longer needed
  input?: ListCollectionsInput
): Promise<CollectionsResponse> {
  // Same interface, different implementation!
  return await apiClient.collections.list(input);
}
```

**Query hooks stay EXACTLY the same - zero changes needed!**

## Implementation Steps

1. **Complete @typyst/api package first** (prerequisite)
   - All router definitions with full CRUD operations
   - Complete Zod schemas for all inputs/outputs
   - Middleware patterns for auth and database access
   - Error handling schemas

2. **Create @typyst/queries package structure**
   - Package configuration with proper exports
   - TypeScript configuration

3. **Implement context and utilities**
   - Database context helpers
   - QueryClient factory with local-first optimizations
   - Query key factory using oRPC patterns

4. **Build local oRPC implementations**
   - Collections CRUD operations following oRPC contracts exactly
   - Entries CRUD operations following oRPC contracts exactly
   - Auth operations following oRPC contracts exactly

5. **Create TanStack Query hooks**
   - Query hooks that use local implementations
   - Mutation hooks with aggressive optimistic updates
   - Error handling and rollback logic

6. **Add comprehensive testing**
   - Unit tests for implementations
   - Integration tests for query hooks
   - Optimistic update testing

7. **Create documentation and examples**
   - Usage patterns
   - Migration guides
   - Best practices

## Testing Strategy

1. **Implementation Testing:**
   - Test local oRPC implementations match schemas exactly
   - Test error cases and edge conditions
   - Test pagination and filtering logic

2. **Query Hook Testing:**
   - Test optimistic updates work correctly
   - Test rollback on errors
   - Test cache invalidation patterns

3. **Integration Testing:**
   - Test context-based database access
   - Test with real Supabase database
   - Test concurrent operations

4. **Type Safety Testing:**
   - Verify end-to-end type safety
   - Test schema validation
   - Test TypeScript compilation

## Acceptance Criteria

- [ ] @typyst/api package is completed with full oRPC contracts
- [ ] Package structure follows oRPC-first architecture
- [ ] Context-based database access works seamlessly
- [ ] All query hooks implement oRPC contracts exactly
- [ ] Aggressive optimistic updates provide instant UI feedback
- [ ] Error handling includes proper rollback mechanisms
- [ ] Type safety is maintained from oRPC → Query → UI
- [ ] Migration path to API is clearly documented
- [ ] Comprehensive tests cover all functionality
- [ ] Documentation includes usage examples

## Dependencies

- @tanstack/svelte-query (for reactive queries)
- @typyst/db (for database access)
- @typyst/api (for oRPC contracts and types)
- Svelte (for context system)

## Future Migration Benefits

With this architecture:
- **Zero breaking changes** when migrating to API
- **Perfect type safety** maintained throughout migration
- **Gradual migration** possible (feature by feature)
- **Hybrid modes** supported (local + API simultaneously)
- **Rollback capability** if API migration needs to be reverted

## Notes

- **Prerequisites:** This task cannot begin until @typyst/api has complete oRPC router definitions
- **Type Safety:** Perfect end-to-end type safety is the primary goal
- **Local-First:** All implementations work with local Supabase initially
- **Migration Ready:** Architecture enables seamless future API integration
- **Performance:** Aggressive optimistic updates for instant user experience 