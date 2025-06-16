import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
import { derived, type Readable } from 'svelte/store';
import type {
  ListCollectionsInput,
  CreateCollection,
  UpdateCollectionInput,
  DeleteCollectionInput,
  CollectionsResponse,
  Collection
} from '@typyst/api';
import { queryKeys } from '../lib/query-keys.js';
import { getApiClientContext } from '../lib/context.js';

export function useCollections(input?: Readable<ListCollectionsInput | undefined>) {
  const apiClient = getApiClientContext();

  return createQuery(
    derived(
      input || {
        subscribe: (fn) => {
          fn(undefined);
          return () => {};
        }
      },
      ($input) => ({
        queryKey: queryKeys.collections.list($input),
        queryFn: async (): Promise<CollectionsResponse> => {
          // Direct oRPC call - fully type-safe!
          return (await apiClient.collections.list($input)) as CollectionsResponse;
        }
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
        return (await apiClient.collections.get({ path: $path })) as Collection;
      },
      enabled: !!$path
    }))
  );
}

export function useRecentCollections(limit?: Readable<number>) {
  const apiClient = getApiClientContext();

  return createQuery(
    derived(
      limit || {
        subscribe: (fn) => {
          fn(10);
          return () => {};
        }
      },
      ($limit) => ({
        queryKey: queryKeys.collections.recent($limit),
        queryFn: async (): Promise<Collection[]> => {
          return (await apiClient.collections.getRecent({ limit: $limit })) as Collection[];
        }
      })
    )
  );
}

export function useCreateCollection() {
  const queryClient = useQueryClient();
  const apiClient = getApiClientContext();

  return createMutation({
    mutationFn: async (input: CreateCollection): Promise<Collection> => {
      // Real API call with full type safety!
      return (await apiClient.collections.create(input)) as Collection;
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
          if (!old)
            return {
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
              items: old.items.filter((c) => c.path !== context.optimisticCollection.path),
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
              items: old.items.map((c) =>
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
      return (await apiClient.collections.update(input)) as Collection;
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
        (old: Collection | undefined) => (old ? { ...old, ...optimisticUpdate } : old)
      );

      // Update all list caches
      queryClient.setQueriesData(
        { queryKey: queryKeys.collections.lists() },
        (old: CollectionsResponse | undefined) => {
          if (!old) return old;
          return {
            ...old,
            items: old.items.map((c) => (c.path === input.path ? { ...c, ...optimisticUpdate } : c))
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
              items: old.items.map((c) => (c.path === input.path ? context.previousCollection : c))
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
            items: old.items.filter((c) => c.path !== input.path),
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
        queryKey: queryKeys.entries.list({ collectionPath: input.path, includeContent: false })
      });

      // Invalidate recent collections
      queryClient.invalidateQueries({ queryKey: queryKeys.collections.recent() });
    }
  });
}
