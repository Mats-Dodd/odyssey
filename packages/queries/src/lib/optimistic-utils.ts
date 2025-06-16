import type { QueryClient } from '@tanstack/svelte-query';
import type { Collection, Entry, CollectionsResponse } from '@typyst/api';

export interface OptimisticCollection extends Collection {
  _optimistic?: boolean;
}

export interface OptimisticEntry extends Entry {
  _optimistic?: boolean;
}

/**
 * Optimistically add a collection to list queries
 */
export function optimisticallyAddCollection(
  queryClient: QueryClient,
  collection: OptimisticCollection,
  queryKeyPattern: readonly unknown[]
) {
  queryClient.setQueriesData(
    { queryKey: queryKeyPattern },
    (old: CollectionsResponse | undefined) => {
      if (!old) {
        return {
          items: [collection],
          pagination: { page: 1, limit: 20, total: 1, hasMore: false }
        };
      }
      return {
        ...old,
        items: [collection, ...old.items],
        pagination: { ...old.pagination, total: old.pagination.total + 1 }
      };
    }
  );
}

/**
 * Optimistically remove a collection from list queries
 */
export function optimisticallyRemoveCollection(
  queryClient: QueryClient,
  collectionPath: string,
  queryKeyPattern: readonly unknown[]
) {
  queryClient.setQueriesData(
    { queryKey: queryKeyPattern },
    (old: CollectionsResponse | undefined) => {
      if (!old) return old;
      return {
        ...old,
        items: old.items.filter((c) => c.path !== collectionPath),
        pagination: { ...old.pagination, total: Math.max(0, old.pagination.total - 1) }
      };
    }
  );
}

/**
 * Optimistically update a collection in list queries
 */
export function optimisticallyUpdateCollection(
  queryClient: QueryClient,
  collectionPath: string,
  updates: Partial<Collection>,
  queryKeyPattern: readonly unknown[]
) {
  queryClient.setQueriesData(
    { queryKey: queryKeyPattern },
    (old: CollectionsResponse | undefined) => {
      if (!old) return old;
      return {
        ...old,
        items: old.items.map((c) => (c.path === collectionPath ? { ...c, ...updates } : c))
      };
    }
  );
}

/**
 * Create a temporary optimistic ID for new items
 */
export function createOptimisticId(): string {
  return `temp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if an item is optimistic (not yet persisted)
 */
export function isOptimistic(item: { _optimistic?: boolean }): boolean {
  return item._optimistic === true;
}

/**
 * Mark an item as optimistic
 */
export function markAsOptimistic<T extends Record<string, unknown>>(
  item: T
): T & { _optimistic: true } {
  return { ...item, _optimistic: true };
}

/**
 * Remove optimistic marker from an item
 */
export function removeOptimisticMarker<T extends { _optimistic?: boolean }>(
  item: T
): Omit<T, '_optimistic'> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _optimistic, ...rest } = item;
  return rest;
}
