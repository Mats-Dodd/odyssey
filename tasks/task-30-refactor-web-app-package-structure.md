# Task 30: Refactor Web Application for New Package Structure

## Overview

Update the web application (`apps/app`) to use the new `@typyst/db` and enhanced `@typyst/auth` packages, ensuring all database operations go through the centralized packages.

## Context

With the creation of `@typyst/db` and enhancement of `@typyst/auth`, the web application needs to be refactored to:
- Use centralized database clients and schemas
- Update all imports to use the new packages
- Remove redundant local database files
- Maintain the dual-database architecture (Supabase + PGLite)

## Goals

1. Update all imports to use centralized packages
2. Remove local database schema and client files
3. Configure separate database connections for auth and app data
4. Ensure all existing functionality continues to work
5. Improve type safety across the application

## Current File Structure to Refactor

**Files to Remove:**
- `apps/app/src/lib/database/schema.ts` (moved to packages)
- `apps/app/src/lib/database/client.ts` (replaced by package clients)
- `apps/app/src/lib/database/migrations/` (moved to packages)
- `apps/app/drizzle.config.ts` (moved to packages)

**Files to Update:**
- `apps/app/src/lib/auth.ts` (use @typyst/auth with @typyst/db)
- `apps/app/src/lib/auth-client.ts` (update imports)
- All API routes in `apps/app/src/routes/api/`
- Any components using database types

## Implementation Details

### Database Client Setup

**Create `apps/app/src/lib/database.ts`:**
```typescript
import { createAppDatabase } from '@typyst/db/app';
import { createAuthDatabase } from '@typyst/db/auth';

// PGLite client for app data
export const appDb = createAppDatabase({
  dataDir: 'idb://typyst',
  debug: import.meta.env.DEV
});

// Supabase client for auth (server-side only)
export const authDb = createAuthDatabase({
  connectionString: import.meta.env.VITE_DATABASE_URL
});

// Export the database clients
export const { db: appDatabase } = appDb;
export const { db: authDatabase } = authDb;
```

### Auth Configuration Update

**Update `apps/app/src/lib/auth.ts`:**
```typescript
import { createAuthServer } from '@typyst/auth/server';
import { authDb } from './database.js';

export const authServer = createAuthServer({
  dbAdapter: authDb.adapter,
  secret: import.meta.env.VITE_BETTER_AUTH_SECRET,
  baseURL: import.meta.env.VITE_BETTER_AUTH_URL,
  trustedOrigins: [import.meta.env.VITE_BETTER_AUTH_URL]
});

export const { GET, POST } = authServer.handler;
```

### Client Auth Update

**Update `apps/app/src/lib/auth-client.ts`:**
```typescript
import { createAuthClient } from '@typyst/auth/client';

export const authClient = createAuthClient({
  baseURL: '/api/auth',
  callbacks: {
    onSignIn: (user) => {
      console.log('User signed in:', user);
    },
    onSignOut: () => {
      console.log('User signed out');
    },
    onError: (error) => {
      console.error('Auth error:', error);
    }
  }
});

// Export reactive stores
export const {
  user,
  session,
  isAuthenticated,
  isLoading,
  authError
} = authClient;

// Export auth methods
export const {
  signUp,
  signIn,
  signOut,
  getSession,
  refreshSession
} = authClient;
```

### API Routes Update

**Update all API routes to use new schemas:**

Example for `apps/app/src/routes/api/collections/+server.ts`:
```typescript
// Before
import { db } from '$lib/database/client';
import { collections } from '$lib/database/schema';

// After
import { appDatabase } from '$lib/database';
import { collections } from '@typyst/db/schema/app';

export async function GET() {
  try {
    const allCollections = await appDatabase
      .select()
      .from(collections)
      .orderBy(desc(collections.updatedAt));
      
    return json(allCollections);
  } catch (error) {
    return json({ error: 'Failed to fetch collections' }, { status: 500 });
  }
}
```

### Environment Variables Update

**Update environment variable references:**
```typescript
// Before
DATABASE_URL=postgresql://...

// After - Ensure proper naming for different databases
VITE_DATABASE_URL=postgresql://... (for Supabase auth)
VITE_PGLITE_DATABASE=idb://typyst (for PGLite app data)
```

### Component Updates

**Update components to use new types:**
```svelte
<!-- Before -->
<script lang="ts">
  import type { Collection } from '$lib/database/schema';
</script>

<!-- After -->
<script lang="ts">
  import type { Collection } from '@typyst/db/schema/app';
</script>
```

## Migration Steps

1. **Add package dependencies to apps/app:**
   ```bash
   cd apps/app
   pnpm add @typyst/db@workspace:* @typyst/auth@workspace:*
   ```

2. **Create new database configuration file**
3. **Update auth configuration to use new packages**
4. **Update all API routes with new imports**
5. **Update components with new type imports**
6. **Remove old database files**
7. **Update environment variables**
8. **Test all functionality**

## Testing Strategy

1. **Import Testing:**
   - Verify all new imports resolve correctly
   - Check TypeScript compilation
   - Ensure no circular dependencies

2. **Database Testing:**
   - Test PGLite connection and operations
   - Verify Supabase auth connection
   - Test data persistence across page reloads

3. **Auth Flow Testing:**
   - Test sign up functionality
   - Test sign in functionality
   - Test sign out and session cleanup
   - Verify protected routes work

4. **API Testing:**
   - Test all CRUD operations
   - Verify error handling
   - Test response types

5. **E2E Testing:**
   - Complete user journey testing
   - Cross-browser compatibility
   - Performance verification

## Acceptance Criteria

- [ ] All imports updated to use centralized packages
- [ ] Local database files removed
- [ ] Auth flow works with new package structure
- [ ] All API routes function correctly
- [ ] Database operations work for both auth and app data
- [ ] TypeScript compilation succeeds
- [ ] All existing functionality preserved
- [ ] No performance regressions
- [ ] Environment variables properly configured

## Dependencies

- Completion of Task 28 (@typyst/db package)
- Completion of Task 29 (@typyst/auth enhancement)

## Potential Issues & Solutions

1. **Import Path Updates:**
   - Use find/replace for bulk import updates
   - Use TypeScript compiler to identify missing imports

2. **Environment Variable Conflicts:**
   - Ensure proper naming conventions
   - Document all required environment variables

3. **Type Conflicts:**
   - Resolve any type conflicts between old and new schemas
   - Ensure proper type exports from packages

4. **Database Connection Issues:**
   - Test both PGLite and Supabase connections
   - Verify connection strings and configurations

## Notes

- This refactoring maintains the dual-database architecture
- No changes to the user experience should be visible
- All existing functionality must continue to work
- Focus on improving maintainability and type safety 