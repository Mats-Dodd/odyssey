// Export API client utilities
export { createApiClient, getApiClient } from './api-client.js';
export type { ApiClientOptions } from './api-client.js';

// Export context utilities
export {
  setApiClientContext,
  getApiClientContext,
  setUserContext,
  getUserContext,
  hasApiClientContext,
  hasUserContext
} from './context.js';
export type { User } from './context.js';

// Export query client utilities
export { createTypystQueryClient, getQueryClient } from './query-client.js';

// Export query keys
export { queryKeys } from './query-keys.js';
export type { QueryKeys } from './query-keys.js';

// Export optimistic utilities
export {
  optimisticallyAddCollection,
  optimisticallyRemoveCollection,
  optimisticallyUpdateCollection,
  createOptimisticId,
  isOptimistic,
  markAsOptimistic,
  removeOptimisticMarker
} from './optimistic-utils.js';
export type { OptimisticCollection, OptimisticEntry } from './optimistic-utils.js';
