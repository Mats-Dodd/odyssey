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
    all: () => [...queryKeys.all, 'auth'] as const,
    session: () => [...queryKeys.auth.all(), 'session'] as const,
    user: () => [...queryKeys.auth.all(), 'user'] as const
  },

  collections: {
    all: () => [...queryKeys.all, 'collections'] as const,
    lists: () => [...queryKeys.collections.all(), 'list'] as const,
    list: (input?: ListCollectionsInput) => [...queryKeys.collections.lists(), input] as const,
    details: () => [...queryKeys.collections.all(), 'detail'] as const,
    detail: (input: GetCollectionInput) => [...queryKeys.collections.details(), input] as const,
    settings: (collectionPath: string) =>
      [...queryKeys.collections.all(), 'settings', collectionPath] as const,
    recent: (limit?: number) => [...queryKeys.collections.all(), 'recent', limit] as const
  },

  entries: {
    all: () => [...queryKeys.all, 'entries'] as const,
    lists: () => [...queryKeys.entries.all(), 'list'] as const,
    list: (input?: ListEntriesInput) => [...queryKeys.entries.lists(), input] as const,
    details: () => [...queryKeys.entries.all(), 'detail'] as const,
    detail: (input: GetEntryInput) => [...queryKeys.entries.details(), input] as const,
    searches: () => [...queryKeys.entries.all(), 'search'] as const,
    search: (input: SearchEntriesInput) => [...queryKeys.entries.searches(), input] as const,
    tree: (collectionPath: string, rootPath?: string) =>
      [...queryKeys.entries.all(), 'tree', collectionPath, rootPath] as const
  }
} as const;

export type QueryKeys = typeof queryKeys;
