# @typyst/api

Type-safe API contracts and router definitions for the Typyst note-taking ecosystem using oRPC.

## Overview

This package provides:
- **Type-safe API contracts** using oRPC and Zod schemas
- **Modular router organization** for auth, collections, and entries
- **Middleware patterns** for authentication and database access
- **Shared type definitions** for client-server communication
- **Future-ready architecture** for API server implementation

## Key Features

- 🔒 **Full Type Safety** - End-to-end type safety from client to server
- 🏗️ **Modular Design** - Clean separation of concerns with feature-based routers
- 🛡️ **Built-in Security** - Authentication and authorization middleware
- 📝 **Schema Validation** - Comprehensive Zod schemas for all endpoints
- 🔄 **Better Auth Integration** - Seamless integration with Better Auth
- 📊 **Supabase Ready** - Designed for Supabase database integration

## Installation

```bash
pnpm add @typyst/api
```

## Basic Usage

### Import the Router Type

```typescript
import type { AppRouter } from '@typyst/api';
```

### Using with oRPC Client (Future)

```typescript
import { createORPCClient } from '@orpc/client';
import type { AppRouter } from '@typyst/api';

const client = createORPCClient<AppRouter>({
  url: '/api/rpc'
});

// Fully type-safe API calls
const collections = await client.collections.list({
  pagination: { page: 1, limit: 10 }
});
```

### Server Implementation Pattern (Future)

```typescript
import { appRouter } from '@typyst/api';
import { createORPCHandler } from '@orpc/server';
import { createSupabaseDatabase } from '@typyst/db';

const handler = createORPCHandler({
  router: appRouter,
  context: ({ req }) => ({
    req,
    db: createSupabaseDatabase(),
    user: null, // From auth middleware
    session: null // From auth middleware
  })
});
```

## API Structure

### Auth Router (`/auth`)

- `signUp` - User registration (Better Auth)
- `signIn` - User authentication (Better Auth)
- `signOut` - Session termination (Better Auth)
- `getSession` - Current session info
- `updateProfile` - Update user profile
- `changePassword` - Change user password
- `forgotPassword` - Password reset request
- `resetPassword` - Password reset with token

### Collections Router (`/collections`)

- `list` - List user collections with pagination
- `get` - Get specific collection by path
- `create` - Create new collection
- `update` - Update collection metadata
- `updateSettings` - Update collection settings
- `delete` - Delete collection
- `getRecent` - Get recently opened collections

### Entries Router (`/entries`)

- `list` - List entries with pagination and filtering
- `get` - Get specific entry by path
- `create` - Create new entry
- `update` - Update entry content/metadata
- `delete` - Delete entry
- `bulkDelete` - Delete multiple entries
- `bulkMove` - Move multiple entries

## Schemas

### Common Schemas

```typescript
import { PaginationSchema, IdSchema } from '@typyst/api';

// Pagination for list endpoints
const pagination = PaginationSchema.parse({
  page: 1,
  limit: 20,
  cursor: 'optional-cursor'
});

// ID validation
const id = IdSchema.parse('user-123');
```

### Collection Schemas

```typescript
import { CreateCollectionSchema } from '@typyst/api/schemas';

const newCollection = CreateCollectionSchema.parse({
  path: '/my-notes',
  name: 'My Notes',
  settings: {
    editor: { theme: 'dark' },
    notes: { defaultTemplate: 'daily' }
  }
});
```

### Entry Schemas

```typescript
import { CreateEntrySchema } from '@typyst/api/schemas';

const newEntry = CreateEntrySchema.parse({
  path: '/my-notes/daily-note.md',
  name: 'Daily Note',
  parentPath: '/my-notes',
  content: '# Daily Note\n\nContent here...',
  isFolder: false
});
```

## Middleware

### Authentication

```typescript
import { requireAuth, optionalAuth } from '@typyst/api/middleware';

// Require authentication for protected routes
const protectedProcedure = os
  .use(requireAuth)
  .handler(async ({ ctx }) => {
    // ctx.user and ctx.session are guaranteed to exist
    return { message: `Hello ${ctx.user.name}` };
  });

// Optional authentication
const publicProcedure = os
  .use(optionalAuth)
  .handler(async ({ ctx }) => {
    // ctx.user and ctx.session may be null
    return { authenticated: !!ctx.user };
  });
```

### Database

```typescript
import { withDatabase, handleDatabaseOperation } from '@typyst/api/middleware';

const databaseProcedure = os
  .use(withDatabase)
  .handler(async ({ ctx }) => {
    // ctx.db is guaranteed to be available
    return await handleDatabaseOperation(
      () => ctx.db.query.user.findFirst(),
      'User lookup'
    );
  });
```

## Error Handling

The package provides custom error classes for different scenarios:

```typescript
import {
  AuthenticationError,
  AuthorizationError,
  DatabaseError,
  NotFoundError,
  ConflictError
} from '@typyst/api';

// These errors are thrown automatically by middleware
// and can be caught and handled appropriately
```

## Type Exports

```typescript
// Context types
import type {
  Context,
  AuthenticatedContext,
  UnauthenticatedContext
} from '@typyst/api';

// Response types
import type {
  ApiResponse,
  PaginatedResponse
} from '@typyst/api';

// Schema types
import type {
  User,
  Session,
  Collection,
  Entry,
  CreateCollection,
  UpdateEntry
} from '@typyst/api';
```

## Development Status

This package currently provides:
- ✅ Complete type definitions and schemas
- ✅ Router structure and contracts
- ✅ Middleware patterns
- ✅ Integration patterns

**Note**: Handler implementations are placeholders that throw "Not implemented" errors. Real implementations will be added when the API server is built.

## Better Auth Integration

Auth endpoints are handled by Better Auth directly:

```typescript
// Use Better Auth client instead of API routes
import { authClient } from '@typyst/auth';

// Sign up
const { user, session } = await authClient.signUp({
  email: 'user@example.com',
  password: 'password123',
  name: 'John Doe'
});

// Sign in
const { user, session } = await authClient.signIn({
  email: 'user@example.com',
  password: 'password123'
});
```

## Future Roadmap

1. **API Server Implementation** - Real handler implementations
2. **Client Library** - Type-safe client generation
3. **Real-time Updates** - WebSocket integration
4. **Caching Strategy** - Response caching patterns
5. **Rate Limiting** - Production-ready rate limiting
6. **Documentation Generation** - Auto-generated API docs

## Contributing

This package is part of the Typyst monorepo. See the main README for contribution guidelines.

## License

MIT 