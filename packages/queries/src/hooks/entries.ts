import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
import { derived, type Readable } from 'svelte/store';
import type {
  ListEntriesInput,
  GetEntryInput,
  SearchEntriesInput,
  CreateEntry,
  UpdateEntryInput,
  BulkDeleteEntriesInput,
  BulkMoveEntriesInput,
  Entry,
  EntryTreeNode
} from '@typyst/api';
import { queryKeys } from '../lib/query-keys.js';
import { getApiClientContext } from '../lib/context.js';

interface EntriesListResponse {
  items: Entry[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
  };
}

export function useEntries(input: Readable<ListEntriesInput>) {
  const apiClient = getApiClientContext();

  return createQuery(
    derived(input, ($input) => ({
      queryKey: queryKeys.entries.list($input),
      queryFn: async () => {
        return (await apiClient.entries.list($input)) as EntriesListResponse;
      }
    }))
  );
}

export function useEntry(input: Readable<GetEntryInput>) {
  const apiClient = getApiClientContext();

  return createQuery(
    derived(input, ($input) => ({
      queryKey: queryKeys.entries.detail($input),
      queryFn: async (): Promise<Entry> => {
        return (await apiClient.entries.get($input)) as Entry;
      },
      enabled: !!$input.path
    }))
  );
}

export function useSearchEntries(input: Readable<SearchEntriesInput>) {
  const apiClient = getApiClientContext();

  return createQuery(
    derived(input, ($input) => ({
      queryKey: queryKeys.entries.search($input),
      queryFn: async () => {
        return await apiClient.entries.search($input);
      }
    }))
  );
}

export function useEntriesTree(
  collectionPath: Readable<string>,
  rootPath?: Readable<string | undefined>
) {
  const apiClient = getApiClientContext();

  return createQuery(
    derived(
      [
        collectionPath,
        rootPath || {
          subscribe: (fn) => {
            fn(undefined);
            return () => {};
          }
        }
      ],
      ([$collectionPath, $rootPath]) => ({
        queryKey: queryKeys.entries.tree($collectionPath, $rootPath),
        queryFn: async (): Promise<EntryTreeNode[]> => {
          return (await apiClient.entries.getTree({
            collectionPath: $collectionPath,
            rootPath: $rootPath
          })) as EntryTreeNode[];
        },
        enabled: !!$collectionPath
      })
    )
  );
}

export function useCreateEntry() {
  const queryClient = useQueryClient();
  const apiClient = getApiClientContext();

  return createMutation({
    mutationFn: async (input: CreateEntry): Promise<Entry> => {
      return (await apiClient.entries.create(input)) as Entry;
    },

    onMutate: async (input) => {
      // Cancel outgoing queries
      await queryClient.cancelQueries({
        queryKey: queryKeys.entries.list({
          collectionPath: input.collectionPath,
          includeContent: false
        })
      });

      // Create optimistic entry
      const optimisticEntry: Entry = {
        path: input.path,
        name: input.name,
        parentPath: input.parentPath,
        collectionPath: input.collectionPath,
        content: input.content || '',
        isFolder: input.isFolder || false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: 'temp-optimistic'
      };

      // Optimistically update list cache
      queryClient.setQueriesData({ queryKey: queryKeys.entries.lists() }, (old: unknown) => {
        const oldData = old as EntriesListResponse | undefined;
        if (!oldData)
          return {
            items: [optimisticEntry],
            pagination: { page: 1, limit: 20, total: 1, hasMore: false }
          };
        return {
          ...oldData,
          items: [optimisticEntry, ...oldData.items],
          pagination: { ...oldData.pagination, total: oldData.pagination.total + 1 }
        };
      });

      // Set individual entry cache
      queryClient.setQueryData(queryKeys.entries.detail({ path: input.path }), optimisticEntry);

      return { optimisticEntry };
    },

    onError: (error, variables, context) => {
      // Rollback optimistic updates on error
      if (context?.optimisticEntry) {
        queryClient.setQueriesData({ queryKey: queryKeys.entries.lists() }, (old: unknown) => {
          const oldData = old as EntriesListResponse | undefined;
          if (!oldData) return oldData;
          return {
            ...oldData,
            items: oldData.items.filter((e: Entry) => e.path !== context.optimisticEntry.path),
            pagination: { ...oldData.pagination, total: Math.max(0, oldData.pagination.total - 1) }
          };
        });

        queryClient.removeQueries({
          queryKey: queryKeys.entries.detail({ path: context.optimisticEntry.path })
        });
      }
    },

    onSuccess: (newEntry, variables, context) => {
      // Replace optimistic update with real server data
      if (context?.optimisticEntry) {
        queryClient.setQueriesData({ queryKey: queryKeys.entries.lists() }, (old: unknown) => {
          const oldData = old as EntriesListResponse | undefined;
          if (!oldData) return oldData;
          return {
            ...oldData,
            items: oldData.items.map((e: Entry) =>
              e.path === context.optimisticEntry.path ? newEntry : e
            )
          };
        });
      }

      // Update individual entry cache
      queryClient.setQueryData(queryKeys.entries.detail({ path: newEntry.path }), newEntry);

      // Invalidate tree cache
      queryClient.invalidateQueries({
        queryKey: queryKeys.entries.tree(newEntry.collectionPath)
      });
    }
  });
}

export function useUpdateEntry() {
  const queryClient = useQueryClient();
  const apiClient = getApiClientContext();

  return createMutation({
    mutationFn: async (input: UpdateEntryInput): Promise<Entry> => {
      return (await apiClient.entries.update(input)) as Entry;
    },

    onMutate: async (input) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.entries.detail({ path: input.path })
      });

      const previousEntry = queryClient.getQueryData(
        queryKeys.entries.detail({ path: input.path })
      );

      // Optimistically update
      queryClient.setQueryData(
        queryKeys.entries.detail({ path: input.path }),
        (old: Entry | undefined) =>
          old ? { ...old, ...input.data, updatedAt: new Date().toISOString() } : old
      );

      // Update list caches
      queryClient.setQueriesData({ queryKey: queryKeys.entries.lists() }, (old: unknown) => {
        const oldData = old as EntriesListResponse | undefined;
        if (!oldData) return oldData;
        return {
          ...oldData,
          items: oldData.items.map((e: Entry) =>
            e.path === input.path ? { ...e, ...input.data, updatedAt: new Date().toISOString() } : e
          )
        };
      });

      return { previousEntry };
    },

    onError: (error, input, context) => {
      // Rollback on error
      if (context?.previousEntry) {
        queryClient.setQueryData(
          queryKeys.entries.detail({ path: input.path }),
          context.previousEntry
        );

        queryClient.setQueriesData({ queryKey: queryKeys.entries.lists() }, (old: unknown) => {
          const oldData = old as EntriesListResponse | undefined;
          if (!oldData) return oldData;
          return {
            ...oldData,
            items: oldData.items.map((e: Entry) =>
              e.path === input.path ? context.previousEntry : e
            )
          };
        });
      }
    }
  });
}

export function useBulkDeleteEntries() {
  const queryClient = useQueryClient();
  const apiClient = getApiClientContext();

  return createMutation({
    mutationFn: async (input: BulkDeleteEntriesInput) => {
      return await apiClient.entries.bulkDelete(input);
    },

    onSuccess: (_, input) => {
      // Remove from list caches
      queryClient.setQueriesData({ queryKey: queryKeys.entries.lists() }, (old: unknown) => {
        const oldData = old as EntriesListResponse | undefined;
        if (!oldData) return oldData;
        return {
          ...oldData,
          items: oldData.items.filter((e: Entry) => !input.paths.includes(e.path)),
          pagination: {
            ...oldData.pagination,
            total: Math.max(0, oldData.pagination.total - input.paths.length)
          }
        };
      });

      // Remove individual entry caches
      input.paths.forEach((path) => {
        queryClient.removeQueries({
          queryKey: queryKeys.entries.detail({ path })
        });
      });

      // Invalidate tree cache - use more specific query key
      queryClient.invalidateQueries({
        queryKey: queryKeys.entries.all()
      });
    }
  });
}

export function useBulkMoveEntries() {
  const queryClient = useQueryClient();
  const apiClient = getApiClientContext();

  return createMutation({
    mutationFn: async (input: BulkMoveEntriesInput) => {
      return await apiClient.entries.bulkMove(input);
    },

    onSuccess: () => {
      // Invalidate all entries-related caches since paths may have changed
      queryClient.invalidateQueries({ queryKey: queryKeys.entries.all() });
    }
  });
}
