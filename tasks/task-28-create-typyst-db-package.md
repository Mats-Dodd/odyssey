# Task 28: Create @typyst/db Package with Supabase-Centered Architecture

## Overview

Create a centralized database package that provides a single source of truth for database schemas and typed database clients using Supabase as the primary database. PGLite configuration is included for future bootstrap functionality but not actively used in the initial implementation.

## Context

Currently, the web application has mixed database logic scattered across different files, and we need to centralize this into a shared package that can be used across the monorepo. For now, all data will be stored in Supabase (PostgreSQL) including both authentication and application data.

**Future Considerations:** PGLite will eventually be used with a bootstrap functionality that syncs data from Supabase to the browser's local database, but this is not part of the current implementation.

## Goals

1. Centralize all database schemas and types in Supabase
2. Provide typed database client for Supabase
3. Include auth tables (Better Auth) and app tables in unified schema
4. Set up proper migrations structure for Supabase
5. Enable TypeScript sub-path exports for clean imports
6. Keep PGLite configuration ready for future bootstrap implementation

## Implementation Details

### Package Structure

```
packages/db/
├── src/
│   ├── schema/
│   │   ├── auth.ts         # Better Auth tables (user, session, account, verification)
│   │   ├── app.ts          # App tables (collection, entry, collectionSettings)
│   │   └── index.ts        # Re-export all schemas
│   ├── config/
│   │   ├── supabase.ts     # Supabase connection config
│   │   └── pglite.ts       # PGLite config (for future use)
│   ├── client/
│   │   ├── supabase-db.ts  # Drizzle client for Supabase (all tables)
│   │   └── pglite-db.ts    # PGLite client (for future bootstrap use)
│   └── index.ts            # Main exports
├── migrations/
│   ├── supabase/           # Supabase migrations
│   └── pglite/             # PGLite migrations (for future use)
├── drizzle.config.ts       # Drizzle configuration
└── package.json
```

### Schema Implementation

**Auth Schema (packages/db/src/schema/auth.ts):**
```typescript
import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' })
});

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at', { withTimezone: true }),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at', { withTimezone: true }),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow()
});

// Export types
export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;
export type Session = typeof session.$inferSelect;
export type NewSession = typeof session.$inferInsert;
export type Account = typeof account.$inferSelect;
export type NewAccount = typeof account.$inferInsert;
export type Verification = typeof verification.$inferSelect;
export type NewVerification = typeof verification.$inferInsert;

// Auth schema export
export const authSchema = {
  user,
  session,
  account,
  verification
};
```

**App Schema (packages/db/src/schema/app.ts):**
```typescript
import { pgTable, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';
import { user } from './auth.js';

export const collection = pgTable('collection', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  color: text('color'),
  icon: text('icon'),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

export const collectionSettings = pgTable('collection_settings', {
  id: text('id').primaryKey(),
  collectionId: text('collection_id').notNull().references(() => collection.id, { onDelete: 'cascade' }),
  sortBy: text('sort_by'),
  sortOrder: text('sort_order'),
  viewMode: text('view_mode'),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

export const entry = pgTable('entry', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content'),
  collectionId: text('collection_id').notNull().references(() => collection.id, { onDelete: 'cascade' }),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

// Export types
export type Collection = typeof collection.$inferSelect;
export type NewCollection = typeof collection.$inferInsert;
export type CollectionSettings = typeof collectionSettings.$inferSelect;
export type NewCollectionSettings = typeof collectionSettings.$inferInsert;
export type Entry = typeof entry.$inferSelect;
export type NewEntry = typeof entry.$inferInsert;

// App schema export
export const appSchema = {
  collection,
  collectionSettings,
  entry
};
```

### Database Clients

**Supabase Database Client (packages/db/src/client/supabase-db.ts):**
```typescript
import { drizzle } from 'drizzle-orm/postgres-js';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import postgres from 'postgres';
import * as authSchema from '../schema/auth.js';
import * as appSchema from '../schema/app.js';

// Combine all schemas
const schema = {
  ...authSchema,
  ...appSchema
};

export interface SupabaseDatabaseConfig {
  connectionString: string;
  maxConnections?: number;
}

export function createSupabaseDatabase(config: SupabaseDatabaseConfig) {
  const sql = postgres(config.connectionString, {
    max: config.maxConnections || 10
  });
  
  const db = drizzle(sql, { schema });
  
  return {
    db,
    sql,
    adapter: drizzleAdapter(db, {
      provider: 'pg',
      schema: authSchema // Better Auth only needs auth schema
    }),
    schema,
    authSchema,
    appSchema
  };
}

export type SupabaseDatabase = ReturnType<typeof createSupabaseDatabase>;
```

**PGLite Database Client (packages/db/src/client/pglite-db.ts) - For Future Use:**
```typescript
import { drizzle } from 'drizzle-orm/pglite';
import { PGlite } from '@electric-sql/pglite';
import * as authSchema from '../schema/auth.js';
import * as appSchema from '../schema/app.js';

// Combine all schemas for PGLite (future bootstrap functionality)
const schema = {
  ...authSchema,
  ...appSchema
};

export interface PGLiteDatabaseConfig {
  dataDir?: string;
  debug?: boolean;
}

/**
 * PGLite database client - for future bootstrap functionality
 * This will be used to create a local browser database that syncs with Supabase
 */
export function createPGLiteDatabase(config: PGLiteDatabaseConfig = {}) {
  const pgClient = new PGlite(config.dataDir || 'idb://typyst', {
    debug: config.debug
  });
  
  const db = drizzle(pgClient, { schema });
  
  return {
    db,
    pgClient,
    schema,
    authSchema,
    appSchema
  };
}

export type PGLiteDatabase = ReturnType<typeof createPGLiteDatabase>;
```

### Package Configuration

**package.json:**
```json
{
  "name": "@typyst/db",
  "version": "1.0.0",
  "type": "module",
  "exports": {
    ".": "./src/index.ts",
    "./supabase": "./src/client/supabase-db.ts",
    "./pglite": "./src/client/pglite-db.ts",
    "./schema": "./src/schema/index.ts",
    "./schema/auth": "./src/schema/auth.ts",
    "./schema/app": "./src/schema/app.ts"
  },
  "typesVersions": {
    "*": {
      "supabase": ["./src/client/supabase-db.ts"],
      "pglite": ["./src/client/pglite-db.ts"],
      "schema": ["./src/schema/index.ts"],
      "schema/auth": ["./src/schema/auth.ts"],
      "schema/app": ["./src/schema/app.ts"]
    }
  },
  "dependencies": {
    "drizzle-orm": "^0.26.1",
    "@electric-sql/pglite": "^0.4.0",
    "postgres": "^3.4.0",
    "better-auth": "^1.2.9"
  },
  "devDependencies": {
    "drizzle-kit": "^0.19.2",
    "typescript": "^5.0.0"
  },
  "scripts": {
    "db:generate": "drizzle-kit generate:pg",
    "db:migrate": "drizzle-kit migrate", 
    "db:push": "drizzle-kit push:pg",
    "db:studio": "drizzle-kit studio"
  }
}
```

## Migration Strategy

### Files to Move

1. **From `apps/app/src/lib/database/schema.ts`** → Split into:
   - `packages/db/src/schema/auth.ts` (Better Auth tables)
   - `packages/db/src/schema/app.ts` (Application tables with proper FK references)

2. **From `apps/app/src/lib/database/client.ts`** → Refactor into:
   - `packages/db/src/client/supabase-db.ts` (Primary Supabase client)
   - `packages/db/src/client/pglite-db.ts` (Future PGLite client)

3. **From `apps/app/src/lib/database/migrations/`** → Move to:
   - `packages/db/migrations/supabase/` (Primary migrations)
   - `packages/db/migrations/pglite/` (Future bootstrap migrations)

4. **From `apps/app/drizzle.config.ts`** → Move to:
   - `packages/db/drizzle.config.ts`

### Drizzle Configuration

**packages/db/drizzle.config.ts:**
```typescript
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/schema/*.ts',
  out: './migrations/supabase',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

## Implementation Steps

1. **Create package structure:**
   ```bash
   mkdir -p packages/db/src/{schema,client,config}
   mkdir -p packages/db/migrations/{supabase,pglite}
   ```

2. **Set up package.json with proper dependencies and exports**

3. **Move and refactor existing schema files:**
   - Keep Better Auth tables in `auth.ts`
   - Move application tables to `app.ts` with proper FK references to user table
   - Ensure all tables are in the same Supabase database

4. **Create database client factory:**
   - Implement `createSupabaseDatabase()` as primary client
   - Include `createPGLiteDatabase()` for future bootstrap functionality
   - Ensure proper typing and Better Auth adapter integration

5. **Set up migrations structure:**
   - Move existing migrations to `supabase/` directory
   - Keep `pglite/` directory ready for future bootstrap migrations
   - Update migration scripts in package.json

6. **Configure TypeScript exports:**
   - Set up sub-path exports in package.json
   - Add typesVersions for TypeScript compatibility
   - Test imports from consuming packages

7. **Update build configuration:**
   - Add to turbo.json pipeline
   - Update pnpm workspace dependencies
   - Configure build scripts

## Testing Strategy

1. **Schema Validation:**
   - Verify all table definitions are correct
   - Test that types are properly inferred
   - Validate foreign key relationships work within Supabase

2. **Client Factory Testing:**
   - Test Supabase connection with unified client
   - Verify Better Auth adapter integration
   - Test all CRUD operations on auth and app tables

3. **Migration Testing:**
   - Run migrations in test environments
   - Verify schema generation works correctly
   - Test rollback functionality

4. **Import Testing:**
   - Test all sub-path exports work correctly
   - Verify TypeScript types are available
   - Test from consuming packages

5. **Integration Testing:**
   - Test with existing auth implementation
   - Verify all app operations work with unified schema
   - Ensure no breaking changes

## Acceptance Criteria

- [ ] Package structure is created with proper organization
- [ ] All schemas (auth + app) work together in Supabase
- [ ] Database client factory works for Supabase with unified schema
- [ ] PGLite configuration is ready for future bootstrap implementation
- [ ] Migrations are organized for both current and future use
- [ ] TypeScript sub-path exports work correctly
- [ ] All existing functionality continues to work
- [ ] Foreign key relationships work properly within Supabase
- [ ] Package builds successfully
- [ ] Tests pass for all functionality
- [ ] Documentation reflects current Supabase-centered approach

## Dependencies

- Drizzle ORM v0.26.1
- PGLite v0.4.0 (for future bootstrap functionality)
- Better Auth v1.2.9 (for adapter integration)
- PostgreSQL client (postgres package)

## Notes

- **Unified Database:** All tables (auth + app) are now in Supabase with proper foreign key constraints
- **Future Bootstrap:** PGLite configuration is included but not actively used. Future implementation will include sync/bootstrap functionality
- [ ] Backward Compatibility: Ensure all existing imports continue to work during transition
- **Build Order:** This package must build before other packages that depend on it
- **Migration Path:** Clear path for future PGLite bootstrap implementation without breaking changes 