# Task: Finalize oRPC API Layer for TanStack Query Integration

## Overview

Finalize the `@typyst/api` package to ensure complete type safety, consistency, and readiness for TanStack Query integration. The current package has a solid foundation but needs refinements in schema alignment, operation consistency, and export completeness.

## Prerequisites

- Current `@typyst/api` package structure exists
- `@typyst/db` package is complete with database schemas
- `@typyst/auth` package exists for auth integration

## Current State Analysis

**✅ What's Already Complete:**
- Package structure with proper exports (`/router`, `/types`, `/schemas`, `/middleware`)
- Comprehensive Zod schemas for auth, collections, and entries
- Middleware patterns for authentication and database access
- Error handling with custom error classes (AuthenticationError, DatabaseError, etc.)
- Router structure with oRPC setup using `@orpc/server`
- Better Auth integration patterns

**❌ What Needs Completion:**
- **Path-based operations alignment**: Database uses `path` as primary key for collections/entries, but some API operations are inconsistent
- **Missing bulk operations**: Entries router lacks bulk delete, bulk move, and advanced search
- **Schema misalignment**: API schemas don't perfectly match actual database structure (missing fields, wrong references)
- **Response type inconsistency**: Paginated responses don't follow consistent pattern across all routers
- **Export gaps**: Missing some input/output types that TanStack Query will need
- **Database field mismatches**: API uses `collectionId` but DB uses `collectionPath`, missing fields like `size`, etc.

## Goals

1. **Achieve Perfect Schema Consistency** - All schemas align with database structure and use path-based patterns consistently
2. **Standardize Operations** - All CRUD operations follow the same path-based pattern (matching database design)
3. **Complete Missing Operations** - Add bulk operations and advanced querying capabilities
4. **Ensure Type Safety** - Perfect end-to-end type inference from schemas to router to exports
5. **Optimize for TanStack Query** - Response patterns that work seamlessly with TanStack Query patterns
6. **Maintain Future Compatibility** - Architecture supports both local-first and future API server modes

## Implementation Phases

### Phase 1: Schema Alignment & Consistency (30 minutes)

#### 1.1 Fix Collection Schema Alignment with Database

**Current Issues:**
- API schemas don't match actual database structure exactly
- Missing proper input/output schemas for consistent operations
- Collection list response doesn't match expected TanStack Query pattern

**Database Reality:**
- Collections use `path` as primary key (text)
- Fields: `path`, `name`, `lastOpened`, `userId`
- Separate `collectionSettings` table with `collectionPath` reference

**Required Changes:**

```typescript
// packages/api/src/schemas/collections.ts
// Update schemas to match actual database structure
export const CollectionSchema = z.object({
  path: z.string().min(1, 'Collection path is required'),
  name: z.string().min(1, 'Collection name is required').max(255),
  lastOpened: TimestampSchema,
  userId: IdSchema
});

// Input schemas for operations
export const GetCollectionInputSchema = z.object({
  path: z.string().min(1, 'Collection path is required')
});

export const UpdateCollectionInputSchema = z.object({
  path: z.string().min(1, 'Collection path is required'),
  data: UpdateCollectionSchema
});

export const DeleteCollectionInputSchema = z.object({
  path: z.string().min(1, 'Collection path is required')
});

// List input schema with proper filtering
export const ListCollectionsInputSchema = z.object({
  pagination: PaginationSchema.optional(),
  search: z.string().optional(),
  userId: z.string().optional(),
  sort: SortSchema.optional()
});

// Standardized response schemas
export const CollectionsResponseSchema = z.object({
  collections: z.array(CollectionSchema),
  pagination: z.object({
    page: z.number(),
    limit: z.number(),
    total: z.number(),
    hasMore: z.boolean()
  })
});
```

#### 1.2 Enhance Entry Schemas to Match Database

**Current Issues:**
- API uses `collectionId` but database uses `collectionPath`
- Missing fields from database schema (`size`, proper timestamps)
- Missing bulk operation schemas
- No advanced search/filter schemas

**Database Reality:**
- Entries use `path` as primary key (text)
- Fields: `path`, `name`, `parentPath`, `collectionPath`, `content`, `isFolder`, `size`, `createdAt`, `updatedAt`, `userId`
- References collections via `collectionPath`, not `collectionId`

**Required Changes:**

```typescript
// packages/api/src/schemas/entries.ts
// Update entry schema to match database exactly
export const EntrySchema = z.object({
  path: z.string().min(1, 'Entry path is required'),
  name: z.string().optional(),
  parentPath: z.string().min(1, 'Parent path is required'),
  collectionPath: z.string().min(1, 'Collection path is required'),
  content: z.string().optional(),
  isFolder: z.boolean().default(false),
  size: z.number().optional(),
  createdAt: TimestampSchema,
  updatedAt: TimestampSchema,
  userId: IdSchema
});

// Add missing bulk operation schemas
export const BulkDeleteEntriesInputSchema = z.object({
  paths: z.array(z.string().min(1)).min(1, 'At least one entry path required')
});

export const BulkMoveEntriesInputSchema = z.object({
  paths: z.array(z.string().min(1)).min(1, 'At least one entry path required'),
  targetCollectionPath: z.string().min(1, 'Target collection path required'),
  targetParentPath: z.string().optional()
});

export const SearchEntriesInputSchema = z.object({
  query: z.string().min(1, 'Search query required'),
  collectionPath: z.string().optional(),
  type: z.enum(['file', 'folder', 'all']).default('all'),
  pagination: PaginationSchema.optional()
});

// Input schemas for operations
export const GetEntryInputSchema = z.object({
  path: z.string().min(1, 'Entry path is required')
});

export const UpdateEntryInputSchema = z.object({
  path: z.string().min(1, 'Entry path is required'),
  data: UpdateEntrySchema
});

export const ListEntriesInputSchema = z.object({
  collectionPath: z.string().min(1, 'Collection path is required'),
  parentPath: z.string().optional(),
  includeContent: z.boolean().optional().default(false),
  pagination: PaginationSchema.optional()
});
```

#### 1.3 Standardize Response Schemas

**Current Issues:**
- Different routers return different response formats
- Pagination not standardized across all list operations

**Required Changes:**

```typescript
// packages/api/src/schemas/common.ts
// Create generic paginated response pattern
export const createPaginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    items: z.array(itemSchema),
    pagination: z.object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
      hasMore: z.boolean()
    })
  });

// Success response with message
export const SuccessResponseSchema = z.object({
  success: z.boolean().default(true),
  message: z.string().optional()
});
```

### Phase 2: Router Enhancements (45 minutes)

#### 2.1 Collections Router Improvements

**Required Changes:**

```typescript
// packages/api/src/router/collections.ts
// Update to use consistent path-based operations (matching database)
export const collectionsRouter = {
  list: os
    .input(ListCollectionsInputSchema)
    .output(CollectionsResponseSchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  get: os
    .input(GetCollectionInputSchema)  // Uses path as identifier
    .output(CollectionSchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  create: os
    .input(CreateCollectionSchema)
    .output(CollectionSchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  update: os
    .input(UpdateCollectionInputSchema)  // path + data structure
    .output(CollectionSchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  delete: os
    .input(DeleteCollectionInputSchema)  // Uses path as identifier
    .output(SuccessResponseSchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  // Collection settings operations
  getSettings: os
    .input(z.object({ collectionPath: z.string().min(1) }))
    .output(CollectionSettingsSchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  updateSettings: os
    .input(z.object({ 
      collectionPath: z.string().min(1),
      settings: UpdateCollectionSettingsSchema 
    }))
    .output(CollectionSettingsSchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    })
};
```

#### 2.2 Entries Router Enhancements

**Required Changes:**

```typescript
// packages/api/src/router/entries.ts
// Update all operations to use path-based approach and add missing operations
export const entriesRouter = {
  list: os
    .input(ListEntriesInputSchema)
    .output(createPaginatedResponseSchema(EntrySchema))
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  get: os
    .input(GetEntryInputSchema)  // Uses path as identifier
    .output(EntrySchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  create: os
    .input(CreateEntrySchema)
    .output(EntrySchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  update: os
    .input(UpdateEntryInputSchema)  // path + data structure
    .output(EntrySchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  delete: os
    .input(z.object({ path: z.string().min(1) }))
    .output(SuccessResponseSchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  // Add missing bulk operations
  bulkDelete: os
    .input(BulkDeleteEntriesInputSchema)
    .output(SuccessResponseSchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  bulkMove: os
    .input(BulkMoveEntriesInputSchema)
    .output(SuccessResponseSchema)
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  search: os
    .input(SearchEntriesInputSchema)
    .output(createPaginatedResponseSchema(EntrySchema))
    .handler(async ({ input, context }) => {
      throw new Error('Not implemented - local-first mode');
    })
};
```

### Phase 3: Type Safety & Exports (15 minutes)

#### 3.1 Export Refinements

**Required Changes:**

```typescript
// packages/api/src/index.ts
// Add all input/output types that TanStack Query will need
export type {
  // Collection types
  ListCollectionsInput,
  CollectionsResponse,
  GetCollectionInput,
  CreateCollectionInput,
  UpdateCollectionInput,
  DeleteCollectionInput,
  CollectionSettings,
  UpdateCollectionSettingsInput,
  
  // Entry types
  ListEntriesInput,
  GetEntryInput,
  CreateEntryInput,
  UpdateEntryInput,
  DeleteEntryInput,
  BulkDeleteEntriesInput,
  BulkMoveEntriesInput,
  SearchEntriesInput,
  
  // Base entity types
  Collection,
  Entry,
  User,
  Session,
  
  // Response types
  SuccessResponse,
  PaginatedResponse
} from './schemas/index.js';

// Ensure router types are properly exported
export type { AppRouter } from './router/index.js';
```

#### 3.2 Type Inference Helpers

**Required Changes:**

```typescript
// packages/api/src/types/helpers.ts
// Create type helpers for TanStack Query
export type RouterInputs = {
  [K in keyof AppRouter]: {
    [P in keyof AppRouter[K]]: AppRouter[K][P] extends { input: infer I } ? I : never;
  };
};

export type RouterOutputs = {
  [K in keyof AppRouter]: {
    [P in keyof AppRouter[K]]: AppRouter[K][P] extends { output: infer O } ? O : never;
  };
};
```

### Phase 4: Validation & Testing (30 minutes)

#### 4.1 Schema Validation Tests

Create basic validation tests to ensure schemas work correctly:

```typescript
// Test file (conceptual - will be implemented)
describe('Schema Validation', () => {
  test('Collection schemas validate correctly', () => {
    // Test all collection schemas with valid/invalid data
  });
  
  test('Entry schemas validate correctly', () => {
    // Test all entry schemas with valid/invalid data
  });
  
  test('Pagination schemas work correctly', () => {
    // Test pagination validation
  });
});
```

#### 4.2 Type Checking Verification

Verify TypeScript compilation and type inference:

```bash
# Run type checking
pnpm typecheck

# Verify no type errors
pnpm build
```

## Specific Changes Needed

### 1. Path-Based Consistency  
- Ensure all operations consistently use `path` as primary identifier (matching database design)
- Update any remaining `id`-based operations to use `path`
- Align router operations with database schema exactly

### 2. Field Alignment with Database
- Fix `collectionId` → `collectionPath` in entry schemas and operations
- Add missing fields: `size` in entries, proper timestamp handling
- Ensure collection settings operations work with `collectionPath` references
- Add all database fields to schemas (including optional ones)

### 3. Missing Operations
- Add `bulkDelete` to entries router (using `paths` array)
- Add `bulkMove` to entries router (using `paths` array and `targetCollectionPath`)
- Add `search` to entries router with proper filtering
- Add collection settings operations (`getSettings`, `updateSettings`)

### 4. Response Standardization
- All list operations return `{ items: T[], pagination: {...} }` (using generic helper)
- All mutation operations return consistent success responses
- Error responses follow the same pattern across all routers

### 5. Type Export Completeness
- Export all input/output types needed by TanStack Query
- Include base entity types (Collection, Entry, User, Session)
- Add type helpers for router input/output inference

## Implementation Steps

1. **Update Collection Schemas** (10 minutes)
   - Fix identifier inconsistencies
   - Add missing input schemas
   - Standardize response schemas

2. **Update Entry Schemas** (10 minutes)
   - Add bulk operation schemas
   - Add search schemas
   - Fix identifier inconsistencies

3. **Update Common Schemas** (10 minutes)
   - Create generic paginated response helper
   - Standardize success response schema
   - Ensure all common patterns are reusable

4. **Update Collections Router** (15 minutes)
   - Change operations to use ID instead of path
   - Update input/output schemas
   - Ensure consistent error handling

5. **Update Entries Router** (15 minutes)
   - Add missing bulk operations
   - Add search operation
   - Update existing operations for consistency

6. **Update Auth Router** (5 minutes)
   - Verify it works with current patterns
   - Ensure Better Auth integration is correct

7. **Update Exports** (10 minutes)
   - Export all input/output types
   - Add type inference helpers
   - Verify everything TanStack Query needs is available

8. **Validation & Testing** (15 minutes)
   - Test schema validation with sample data
   - Verify TypeScript compilation
   - Check for any missing exports

## Database Schema Dependencies

Ensure API schemas exactly match these database fields:

**Collections (`collection` table):**
- `path` (text, primary key)
- `name` (text, not null)
- `lastOpened` (timestamp with timezone, not null)
- `userId` (text, foreign key to user.id)

**Collection Settings (`collection_settings` table):**
- `collectionPath` (text, primary key, foreign key to collection.path)
- `editor` (jsonb, not null)
- `notes` (jsonb, not null)
- `userId` (text, foreign key to user.id)

**Entries (`entry` table):**
- `path` (text, primary key)
- `name` (text, optional)
- `parentPath` (text, not null)
- `collectionPath` (text, foreign key to collection.path)
- `content` (text, optional)
- `isFolder` (boolean, default false)
- `size` (bigint/number, optional)
- `createdAt` (timestamp with timezone, default now)
- `updatedAt` (timestamp with timezone, default now)
- `userId` (text, foreign key to user.id)

**Users (`user` table):**
- `id` (text, primary key)
- `name` (text, not null)
- `email` (text, not null, unique)
- `emailVerified` (boolean, default false)
- `image` (text, optional)
- `createdAt` (timestamp with timezone, default now)
- `updatedAt` (timestamp with timezone, default now)

**Sessions (`session` table):**
- `id` (text, primary key)
- `expiresAt` (timestamp with timezone, not null)
- `token` (text, not null, unique)
- `createdAt` (timestamp with timezone, default now)
- `updatedAt` (timestamp with timezone, default now)
- `ipAddress` (text, optional)
- `userAgent` (text, optional)
- `userId` (text, not null, foreign key to user.id)

## TanStack Query Integration Requirements

The finalized API must support:

1. **Query Keys** - Consistent input types for building query keys
2. **Optimistic Updates** - Response types that work with TanStack Query's optimistic update patterns
3. **Cache Invalidation** - Proper entity relationships for cache invalidation
4. **Type Safety** - End-to-end type safety from input to output
5. **Pagination** - Consistent pagination patterns across all list operations

## Acceptance Criteria

- [ ] All router operations use `path` as primary identifier consistently (matching database design)
- [ ] Collection schemas exactly match database structure (`path`, `name`, `lastOpened`, `userId`)
- [ ] Entry schemas exactly match database structure (including `collectionPath`, `size`, proper timestamps)
- [ ] Collections router includes settings operations (`getSettings`, `updateSettings`)
- [ ] Entries router includes bulk operations (`bulkDelete`, `bulkMove`) and search capability
- [ ] All bulk operations use `paths` arrays instead of `ids` arrays
- [ ] Entry operations reference collections via `collectionPath` not `collectionId`
- [ ] All list operations return consistent paginated response format using generic helper
- [ ] Perfect TypeScript compilation with no type errors
- [ ] All necessary input/output types are exported for TanStack Query consumption
- [ ] Base entity types (Collection, Entry, User, Session) are exported
- [ ] Response patterns support optimistic updates and cache invalidation
- [ ] Middleware patterns work correctly with updated router operations
- [ ] Better Auth integration remains intact and functional

## Future Compatibility

This finalized API layer will:
- Work seamlessly with local-first TanStack Query implementations
- Support future migration to actual API server with zero breaking changes
- Enable hybrid modes (local + API) for gradual migration
- Maintain perfect type safety throughout any architecture changes

## Dependencies

- `@orpc/server` ^1.5.1 (existing)
- `zod` ^3.22.0 (existing)
- `@typyst/db` workspace package (peer dependency)
- `@typyst/auth` workspace package (peer dependency)

## Estimated Time

**Total: 2 hours**
- Phase 1 (Schema Alignment): 30 minutes
- Phase 2 (Router Enhancements): 45 minutes  
- Phase 3 (Type Safety & Exports): 15 minutes
- Phase 4 (Validation & Testing): 30 minutes

## Next Steps

After completion of this task:
1. Begin TanStack Query integration using the finalized API contracts
2. Implement local-first query hooks that follow oRPC patterns exactly
3. Create aggressive optimistic updates for instant UX
4. Set up context-based database access for Svelte components 