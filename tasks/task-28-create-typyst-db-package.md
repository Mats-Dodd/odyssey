# Task 28: Create @typyst/db Package with Dual-Database Architecture

## Overview

Create a centralized database package that provides a single source of truth for database schemas and typed database clients while respecting the dual-database architecture (Supabase for auth + PGLite for app data).

## Context

Currently, the web application has mixed database logic scattered across different files, and we need to centralize this into a shared package that can be used across the monorepo. The dual-database architecture must be preserved:

- **Supabase (PostgreSQL)**: Used for authentication tables managed by Better Auth
- **PGLite (Browser PostgreSQL)**: Used for application data (collections, entries) in the web app

## Goals

1. Centralize all database schemas and types
2. Provide typed database clients for both Supabase and PGLite
3. Separate auth tables from app tables
4. Set up proper migrations structure
5. Enable TypeScript sub-path exports for clean imports

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
│   │   └── pglite.ts       # PGLite config
│   ├── client/
│   │   ├── auth-db.ts      # Drizzle client for Supabase (auth tables only)
│   │   └── app-db.ts       # Drizzle client for PGLite (app tables only)
│   └── index.ts            # Main exports
├── migrations/
│   ├── auth/               # Supabase migrations
│   └── app/                # PGLite migrations
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

export const collection = pgTable('collection', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  color: text('color'),
  icon: text('icon'),
  userId: text('user_id'), // Note: No FK constraint since user table is in different DB
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

export const collectionSettings = pgTable('collection_settings', {
  id: text('id').primaryKey(),
  collectionId: text('collection_id').notNull().references(() => collection.id, { onDelete: 'cascade' }),
  sortBy: text('sort_by'),
  sortOrder: text('sort_order'),
  viewMode: text('view_mode'),
  userId: text('user_id'), // Note: No FK constraint since user table is in different DB
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

export const entry = pgTable('entry', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content'),
  collectionId: text('collection_id').notNull().references(() => collection.id, { onDelete: 'cascade' }),
  userId: text('user_id'), // Note: No FK constraint since user table is in different DB
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

**Auth Database Client (packages/db/src/client/auth-db.ts):**
```typescript
import { drizzle } from 'drizzle-orm/postgres-js';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import postgres from 'postgres';
import * as authSchema from '../schema/auth.js';

export interface AuthDatabaseConfig {
  connectionString: string;
}

export function createAuthDatabase(config: AuthDatabaseConfig) {
  const sql = postgres(config.connectionString);
  const db = drizzle(sql, { schema: authSchema });
  
  return {
    db,
    sql,
    adapter: drizzleAdapter(db, {
      provider: 'pg',
      schema: authSchema
    }),
    schema: authSchema
  };
}

export type AuthDatabase = ReturnType<typeof createAuthDatabase>;
```

**App Database Client (packages/db/src/client/app-db.ts):**
```typescript
import { drizzle } from 'drizzle-orm/pglite';
import { PGlite } from '@electric-sql/pglite';
import * as appSchema from '../schema/app.js';

export interface AppDatabaseConfig {
  dataDir?: string;
  debug?: boolean;
}

export function createAppDatabase(config: AppDatabaseConfig = {}) {
  const pgClient = new PGlite(config.dataDir || 'idb://typyst', {
    debug: config.debug
  });
  
  const db = drizzle(pgClient, { schema: appSchema });
  
  return {
    db,
    pgClient,
    schema: appSchema
  };
}

export type AppDatabase = ReturnType<typeof createAppDatabase>;
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
    "./auth": "./src/client/auth-db.ts",
    "./app": "./src/client/app-db.ts",
    "./schema": "./src/schema/index.ts",
    "./schema/auth": "./src/schema/auth.ts",
    "./schema/app": "./src/schema/app.ts"
  },
  "typesVersions": {
    "*": {
      "auth": ["./src/client/auth-db.ts"],
      "app": ["./src/client/app-db.ts"],
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
   - `packages/db/src/schema/app.ts` (Application tables)

2. **From `apps/app/src/lib/database/client.ts`** → Split into:
   - `packages/db/src/client/auth-db.ts` (Supabase client)
   - `packages/db/src/client/app-db.ts` (PGLite client)

3. **From `apps/app/src/lib/database/migrations/`** → Move to:
   - `packages/db/migrations/app/` (PGLite migrations)
   - `packages/db/migrations/auth/` (Supabase migrations)

4. **From `apps/app/drizzle.config.ts`** → Move to:
   - `packages/db/drizzle.config.ts`

### Drizzle Configuration

**packages/db/drizzle.config.ts:**
```typescript
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/schema/*.ts',
  out: './migrations',
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
   mkdir -p packages/db/migrations/{auth,app}
   ```

2. **Set up package.json with proper dependencies and exports**

3. **Move and split existing schema files:**
   - Extract Better Auth tables to `auth.ts`
   - Move application tables to `app.ts`
   - Update all table definitions and relationships

4. **Create database client factories:**
   - Implement `createAuthDatabase()` for Supabase
   - Implement `createAppDatabase()` for PGLite
   - Ensure proper typing and adapter integration

5. **Set up migrations structure:**
   - Move existing migrations to appropriate directories
   - Update migration scripts in package.json
   - Test migration generation and application

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
   - Validate foreign key relationships

2. **Client Factory Testing:**
   - Test Supabase connection with auth client
   - Test PGLite initialization with app client
   - Verify adapter integration with Better Auth

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
   - Verify PGLite operations still work
   - Ensure no breaking changes

## Acceptance Criteria

- [ ] Package structure is created with proper organization
- [ ] Schema is split correctly between auth and app tables
- [ ] Database client factories work for both Supabase and PGLite
- [ ] Migrations are properly organized and functional
- [ ] TypeScript sub-path exports work correctly
- [ ] All existing functionality continues to work
- [ ] Package builds successfully
- [ ] Tests pass for all functionality
- [ ] Documentation is complete and accurate

## Dependencies

- Drizzle ORM v0.26.1
- PGLite v0.4.0
- Better Auth v1.2.9 (for adapter integration)
- PostgreSQL client (postgres package)

## Notes

- **Foreign Key Constraints:** Since auth and app tables are in separate databases, foreign key constraints from app tables to user.id cannot be enforced. The userId fields in app tables will be text fields without FK constraints.
- **Backward Compatibility:** Ensure all existing imports continue to work during transition
- **Build Order:** This package must build before other packages that depend on it 