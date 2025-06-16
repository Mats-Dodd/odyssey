// Export the main router and types
export { appRouter } from './router/index.js';
export type { AppRouter } from './router/index.js';

// Export all types for client usage
export type {
  Context,
  AuthenticatedContext,
  UnauthenticatedContext,
  ApiResponse,
  PaginatedResponse,
  RouterInputs,
  RouterOutputs,
  OperationInput,
  OperationOutput
} from './types/index.js';

// Export schemas for validation
export * from './schemas/index.js';

// Export specific input/output types for TanStack Query
export type {
  // Collection types
  GetCollectionInput,
  UpdateCollectionInput,
  DeleteCollectionInput,
  ListCollectionsInput,
  CollectionsResponse,
  Collection,
  CollectionSettings,
  CreateCollection,
  UpdateCollection,
  UpdateCollectionSettings,

  // Entry types
  GetEntryInput,
  UpdateEntryInput,
  ListEntriesInput,
  BulkDeleteEntriesInput,
  BulkMoveEntriesInput,
  SearchEntriesInput,
  Entry,
  CreateEntry,
  UpdateEntry,
  EntryTreeNode,

  // Common types
  SuccessResponse,
  Pagination,
  Sort
} from './schemas/index.js';

// Export middleware for server implementation
export * from './middleware/index.js';

// Export error classes
export { AuthenticationError, AuthorizationError } from './middleware/auth.js';
export { DatabaseError, NotFoundError, ConflictError } from './middleware/database.js';
