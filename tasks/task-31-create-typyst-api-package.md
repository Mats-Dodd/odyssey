# Task 31: Create @typyst/api Package with oRPC Router Definitions

## Overview

Create the foundation for an oRPC-based API package that will serve as the single source of truth for API contracts and enable end-to-end type safety across the application.

## Context

This package will define the API contract using oRPC (OpenAPI-compatible RPC) that can be used to:
- Provide type-safe API definitions
- Enable future API server implementation
- Support gradual migration from local-first to API-based architecture
- Ensure type safety between client and server

## Goals

1. Set up the package structure for @typyst/api
2. Define core router structure using oRPC
3. Implement modular router organization
4. Create shared type definitions and schemas
5. Implement middleware patterns for auth and database access
6. Export types for client-side usage
7. Document integration patterns for future API server

## Package Structure

```
packages/api/
├── src/
│   ├── router/
│   │   ├── auth.ts         # Auth procedures (login, signup, session)
│   │   ├── notes.ts        # Note CRUD operations
│   │   ├── collections.ts  # Collection management
│   │   └── index.ts        # Root router combining all routers
│   ├── middleware/
│   │   ├── auth.ts         # Authentication middleware
│   │   ├── database.ts     # Database access middleware
│   │   └── error.ts        # Error handling middleware
│   ├── schemas/
│   │   ├── auth.ts         # Auth-related Zod schemas
│   │   ├── collections.ts  # Collection schemas
│   │   ├── entries.ts      # Entry schemas
│   │   └── common.ts       # Shared schemas (pagination, etc.)
│   ├── types/
│   │   ├── context.ts      # Request context types
│   │   ├── errors.ts       # Error types
│   │   └── responses.ts    # Response types
│   └── index.ts            # Main exports
├── package.json
└── README.md
```

## Implementation Details

### Package Configuration

**packages/api/package.json:**
```json
{
  "name": "@typyst/api",
  "version": "1.0.0",
  "type": "module",
  "exports": {
    ".": "./src/index.ts",
    "./router": "./src/router/index.ts",
    "./types": "./src/types/index.ts",
    "./schemas": "./src/schemas/index.ts"
  },
  "dependencies": {
    "@orpc/server": "^0.0.1",
    "zod": "^3.22.0"
  },
  "peerDependencies": {
    "@typyst/db": "workspace:*"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

### Context Types

**packages/api/src/types/context.ts:**
```typescript
import type { User, Session } from '@typyst/db/schema/auth';
import type { AuthDatabase, AppDatabase } from '@typyst/db';

export interface BaseContext {
  req: Request;
  res?: Response;
}

export interface AuthenticatedContext extends BaseContext {
  user: User;
  session: Session;
  authDb: AuthDatabase;
  appDb: AppDatabase;
}

export interface UnauthenticatedContext extends BaseContext {
  authDb: AuthDatabase;
  appDb: AppDatabase;
}

export type Context = AuthenticatedContext | UnauthenticatedContext;
```

### Shared Schemas

**packages/api/src/schemas/common.ts:**
```typescript
import { z } from 'zod';

export const PaginationSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
  cursor: z.string().optional()
});

export const SortSchema = z.object({
  field: z.string(),
  direction: z.enum(['asc', 'desc']).default('desc')
});

export const IdSchema = z.string().min(1);

export const TimestampSchema = z.string().datetime();

export const ErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  details: z.record(z.any()).optional()
});

export const SuccessResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional()
});
```

**packages/api/src/schemas/collections.ts:**
```typescript
import { z } from 'zod';
import { IdSchema, TimestampSchema } from './common.js';

export const CollectionSchema = z.object({
  id: IdSchema,
  name: z.string().min(1).max(255),
  description: z.string().optional(),
  color: z.string().optional(),
  icon: z.string().optional(),
  userId: IdSchema,
  createdAt: TimestampSchema,
  updatedAt: TimestampSchema
});

export const CreateCollectionSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().optional(),
  color: z.string().optional(),
  icon: z.string().optional()
});

export const UpdateCollectionSchema = CreateCollectionSchema.partial();

export const CollectionFiltersSchema = z.object({
  search: z.string().optional(),
  userId: IdSchema.optional()
});

export type Collection = z.infer<typeof CollectionSchema>;
export type CreateCollection = z.infer<typeof CreateCollectionSchema>;
export type UpdateCollection = z.infer<typeof UpdateCollectionSchema>;
export type CollectionFilters = z.infer<typeof CollectionFiltersSchema>;
```

### Authentication Middleware

**packages/api/src/middleware/auth.ts:**
```typescript
import { os } from '@orpc/server';
import type { Context, AuthenticatedContext } from '../types/context.js';

export const requireAuth = os
  .use<Context, AuthenticatedContext>(async (input, context, meta) => {
    // In a real implementation, this would validate the session
    // For now, this is just the type structure
    
    if (!('user' in context) || !('session' in context)) {
      throw new Error('Authentication required');
    }
    
    return {
      ...context,
      user: context.user,
      session: context.session
    };
  });

export const optionalAuth = os
  .use<Context, Context>(async (input, context, meta) => {
    // Context remains the same, but auth info might be available
    return context;
  });
```

### Collections Router

**packages/api/src/router/collections.ts:**
```typescript
import { os } from '@orpc/server';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth.js';
import {
  CollectionSchema,
  CreateCollectionSchema,
  UpdateCollectionSchema,
  CollectionFiltersSchema
} from '../schemas/collections.js';
import { PaginationSchema, IdSchema } from '../schemas/common.js';

export const collectionsRouter = {
  list: os
    .use(requireAuth)
    .input(z.object({
      pagination: PaginationSchema.optional(),
      filters: CollectionFiltersSchema.optional()
    }))
    .output(z.object({
      collections: z.array(CollectionSchema),
      pagination: z.object({
        page: z.number(),
        limit: z.number(),
        total: z.number(),
        hasMore: z.boolean()
      })
    }))
    .handler(async ({ input, ctx }) => {
      // Implementation would go here when API server is built
      // For now, this is just the contract definition
      throw new Error('Not implemented - local-first mode');
    }),

  get: os
    .use(requireAuth)
    .input(z.object({ id: IdSchema }))
    .output(CollectionSchema)
    .handler(async ({ input, ctx }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  create: os
    .use(requireAuth)
    .input(CreateCollectionSchema)
    .output(CollectionSchema)
    .handler(async ({ input, ctx }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  update: os
    .use(requireAuth)
    .input(z.object({
      id: IdSchema,
      data: UpdateCollectionSchema
    }))
    .output(CollectionSchema)
    .handler(async ({ input, ctx }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  delete: os
    .use(requireAuth)
    .input(z.object({ id: IdSchema }))
    .output(z.object({ success: z.boolean() }))
    .handler(async ({ input, ctx }) => {
      throw new Error('Not implemented - local-first mode');
    })
};
```

### Auth Router

**packages/api/src/router/auth.ts:**
```typescript
import { os } from '@orpc/server';
import { z } from 'zod';
import { optionalAuth, requireAuth } from '../middleware/auth.js';

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional()
});

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  rememberMe: z.boolean().optional()
});

const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullable(),
  emailVerified: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string()
});

const SessionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  expiresAt: z.string(),
  createdAt: z.string()
});

export const authRouter = {
  signUp: os
    .use(optionalAuth)
    .input(SignUpSchema)
    .output(z.object({
      user: UserSchema,
      session: SessionSchema
    }))
    .handler(async ({ input, ctx }) => {
      throw new Error('Not implemented - using Better Auth directly');
    }),

  signIn: os
    .use(optionalAuth)
    .input(SignInSchema)
    .output(z.object({
      user: UserSchema,
      session: SessionSchema
    }))
    .handler(async ({ input, ctx }) => {
      throw new Error('Not implemented - using Better Auth directly');
    }),

  signOut: os
    .use(requireAuth)
    .input(z.object({}))
    .output(z.object({ success: z.boolean() }))
    .handler(async ({ input, ctx }) => {
      throw new Error('Not implemented - using Better Auth directly');
    }),

  getSession: os
    .use(optionalAuth)
    .input(z.object({}))
    .output(z.object({
      user: UserSchema.nullable(),
      session: SessionSchema.nullable()
    }))
    .handler(async ({ input, ctx }) => {
      throw new Error('Not implemented - using Better Auth directly');
    })
};
```

### Root Router

**packages/api/src/router/index.ts:**
```typescript
import { authRouter } from './auth.js';
import { collectionsRouter } from './collections.js';
// Import other routers as they're created

export const appRouter = {
  auth: authRouter,
  collections: collectionsRouter,
  // Add other routers here
};

export type AppRouter = typeof appRouter;
```

### Main Package Export

**packages/api/src/index.ts:**
```typescript
export { appRouter } from './router/index.js';
export type { AppRouter } from './router/index.js';

// Export types for client usage
export type {
  Context,
  AuthenticatedContext,
  UnauthenticatedContext
} from './types/context.js';

// Export schemas for validation
export * from './schemas/common.js';
export * from './schemas/collections.js';

// Export middleware for server implementation
export * from './middleware/auth.js';
```

## Implementation Steps

1. **Create package structure:**
   ```bash
   mkdir -p packages/api/src/{router,middleware,schemas,types}
   ```

2. **Set up package.json with dependencies**

3. **Define core types and context interfaces**

4. **Create shared Zod schemas for validation**

5. **Implement authentication middleware patterns**

6. **Define router procedures for each domain**

7. **Set up proper TypeScript exports**

8. **Create comprehensive documentation**

## Integration Patterns

### Future Client Usage

Once the API server is implemented, clients can use the router type:

```typescript
import type { AppRouter } from '@typyst/api';
import { createORPCClient } from '@orpc/client';

const client = createORPCClient<AppRouter>({
  url: '/api/rpc'
});

// Fully type-safe API calls
const collections = await client.collections.list({
  pagination: { page: 1, limit: 10 }
});
```

### Server Implementation Pattern

```typescript
import { appRouter } from '@typyst/api';
import { createORPCHandler } from '@orpc/server';

const handler = createORPCHandler({
  router: appRouter,
  context: ({ req }) => ({
    req,
    authDb: getAuthDatabase(),
    appDb: getAppDatabase()
  })
});
```

## Testing Strategy

1. **Type Testing:**
   - Verify all router types are correctly inferred
   - Test schema validation with sample data
   - Ensure context types are properly constrained

2. **Schema Validation:**
   - Test Zod schemas with valid and invalid data
   - Verify error messages are helpful
   - Test schema composition and inheritance

3. **Middleware Testing:**
   - Test authentication middleware with mock contexts
   - Verify error handling in middleware
   - Test middleware composition

4. **Integration Testing:**
   - Test router definition structure
   - Verify TypeScript exports work correctly
   - Test import paths from consuming packages

## Acceptance Criteria

- [ ] Package structure is properly organized
- [ ] oRPC router definitions are complete
- [ ] Zod schemas validate correctly
- [ ] Middleware patterns are implemented
- [ ] TypeScript types are exported correctly
- [ ] Documentation is comprehensive
- [ ] Integration patterns are documented
- [ ] Tests pass for all functionality

## Dependencies

- oRPC server/client packages
- Zod for schema validation
- TypeScript for type definitions

## Future Considerations

- This package provides the contract for future API development
- Handlers currently throw "Not implemented" errors
- Real implementations will be added when API server is built
- Migration helpers will be needed for local-first to API transition

## Notes

- This is primarily a type definition and contract package
- No actual API implementation is included
- Focus is on providing type safety and future migration path
- All handlers are placeholder implementations 