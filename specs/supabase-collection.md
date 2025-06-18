# Supabase Collections Integration Plan

## Overview

This document outlines the plan to fully integrate Supabase collections with the existing Typyst web app. We're completely replacing PGLite with Supabase and connecting the full stack: UI → `@typyst/queries` → oRPC API → `@typyst/api` → Supabase.

## Current State Analysis

### ✅ What's Already Built
- **Authentication**: Better Auth with Supabase backend ✅
- **Database Schema**: Complete collections schema in `@typyst/db` ✅  
- **API Layer**: Full oRPC collections API in `@typyst/api` ✅
- **Query Layer**: TanStack Query setup in `@typyst/queries` ✅
- **Query Provider**: Already integrated in main layout ✅

### 🔧 What Needs Connection
- **API Endpoints**: Expose oRPC server in the app
- **Database**: Connect API to Supabase (remove PGLite)
- **UI**: Connect components to query hooks
- **Auth Flow**: Ensure user context flows through API

## Architecture Flow

```
UI Components → @typyst/queries hooks → oRPC API → @typyst/api router → Supabase DB
```

## Implementation Steps

### Step 1: Create oRPC API Endpoint
**File**: `apps/app/src/routes/api/rpc/+server.ts`

```typescript
import { createORPCHandler } from '@orpc/server/sveltekit';
import { createAppContext } from '@typyst/api';
import { createSupabaseDatabase } from '@typyst/db';
import { appRouter } from '@typyst/api';
import type { RequestHandler } from './$types';

// Create database connection
const db = createSupabaseDatabase({
  connectionString: process.env.DATABASE_URL || process.env.SUPABASE_DATABASE_URL
});

// Create oRPC handler with context
const orpcHandler = createORPCHandler({
  router: appRouter,
  createContext: (event) => createAppContext(event, db)
});

export const GET: RequestHandler = orpcHandler;
export const POST: RequestHandler = orpcHandler;
```

### Step 2: Update Database Configuration
**File**: `apps/app/src/lib/database.ts`

```typescript
import { createSupabaseDatabase } from '@typyst/db';

// Use Supabase for everything
const connectionString = process.env.DATABASE_URL || process.env.SUPABASE_DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is required');
}

// Single Supabase connection for both auth and app data
export const db = createSupabaseDatabase({
  connectionString,
  maxConnections: 10
});

export const authDb = db;
export const appDb = db;
```

### Step 3: Update App Layout (Remove PGLite)
**File**: `apps/app/src/routes/+layout.svelte`

```typescript
// Remove all PGLite imports and references
// Remove pgClient and db exports
// Remove migration code
// Keep QueryProvider setup as-is
```

### Step 4: Connect UI Components to Query Hooks

#### Update Notes Page
**File**: `apps/app/src/routes/(protected)/notes/+page.svelte`

```svelte
<script lang="ts">
  import { useRecentCollections } from '@typyst/queries/hooks';
  import { writable } from 'svelte/store';
  
  const recentCollections = useRecentCollections(writable(5));
  // Replace direct database usage with query hooks
</script>
```

#### Update Sidebar with Collections
**File**: `apps/app/src/lib/components/layout/sidebar.svelte`

Add collections list using `useCollections()` and `useCreateCollection()` hooks.

### Step 5: Update Store (Remove PGLite)
**File**: `apps/app/src/lib/store.ts`

Remove PGLite references and update collection loading to use query hooks.

### Step 6: Create Collection Management Components
- `apps/app/src/lib/components/collections/collection-list.svelte`
- `apps/app/src/lib/components/collections/create-collection-dialog.svelte`


## What Success Looks Like

- [ ] Collections load from Supabase database
- [ ] Create/update/delete operations work with optimistic updates  
- [ ] Authentication properly protects collection data
- [ ] Full CRUD operations working in UI

## Let's Get Started 🚀

1. **Create the oRPC server endpoint** - Connect your API to the app
2. **Update database configuration** - Point everything to Supabase
3. **Remove PGLite dependencies** - Clean up the code
4. **Connect UI to query hooks** - Wire up the components
5. **Test the full flow** - Create/read/update/delete collections

The beautiful thing about your architecture is that the `@typyst/queries` package abstracts everything - most UI code won't need to change, just the data source configuration! 

All .env variables already set up. 