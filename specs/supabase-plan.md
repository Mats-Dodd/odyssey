# Supabase Migration Plan: From PGLite to Full Supabase State Management

## Overview
This plan migrates the `apps/app` from using PGLite (client-side database) to Supabase for all state management, leveraging the existing `@typyst/db`, `@typyst/api`, and `@typyst/queries` packages.

## Current Architecture Analysis

### ✅ Already Built (No Changes Needed)
- **`@typyst/db`**: Schema and Supabase client are ready
- **`@typyst/api`**: oRPC routers with proper validation 
- **`@typyst/queries`**: TanStack Query hooks with optimistic updates
- **Database Schema**: Auth + App tables with proper RLS setup

### 🔄 Needs Migration
- **`apps/app/src/lib/client.ts`**: Currently uses PGLite
- **`apps/app/src/lib/api/notes.ts`**: Direct DB queries need to use API layer
- **`apps/app/src/lib/store.ts`**: Local Svelte stores to be replaced with server state
- **Authentication flow**: Switch to server-side API calls

## Incremental Migration Steps

### Phase 1: Setup Supabase Client & API Context
**Goal**: Establish Supabase connection and API client without breaking existing functionality

#### Step 1.1: Update App Database Client
```typescript
// apps/app/src/lib/client.ts - Replace PGLite with Supabase
import { createSupabaseDatabase } from '@typyst/db/supabase';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'your-supabase-url';
const supabaseKey = 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
export const db = createSupabaseDatabase({
  connectionString: 'your-supabase-connection-string'
});
```

#### Step 1.2: Setup API Client Context
```typescript
// apps/app/src/lib/api-client.ts - New file
import { createClient } from '@typyst/queries';

export const apiClient = createClient({
  baseUrl: '/api', // Your API endpoints
  // Add auth headers from session
});
```

#### Step 1.3: Add Query Provider to App
```svelte
<!-- apps/app/src/routes/+layout.svelte -->
<script>
  import { QueryProvider } from '@typyst/queries';
  import { apiClient } from '$lib/api-client';
</script>

<QueryProvider client={apiClient}>
  <slot />
</QueryProvider>
```

### Phase 2: Migrate API Endpoints
**Goal**: Create SvelteKit API routes that proxy to your oRPC routers

#### Step 2.1: Create API Route Handlers
```typescript
// apps/app/src/routes/api/collections/+server.ts
import { json } from '@sveltejs/kit';
import { appRouter } from '@typyst/api';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request, locals }) => {
  // Proxy to oRPC collections.list
  const result = await appRouter.collections.list({
    // Pass auth context from locals.session
    context: { user: locals.session.user, db: supabaseDb },
    input: {} // Parse from request
  });
  return json(result);
};
```

#### Step 2.2: Create All Necessary Endpoints
- `/api/collections/*` - Collection CRUD
- `/api/entries/*` - Notes/entries CRUD  
- `/api/auth/*` - Already exists, verify it works

### Phase 3: Migrate Notes API (Critical Path)
**Goal**: Replace direct DB queries with API calls through the query layer

#### Step 3.1: Create New Notes Service
```typescript
// apps/app/src/lib/services/notes.ts - New approach using queries
import { useEntries, useCreateEntry, useUpdateEntry, useDeleteEntry } from '@typyst/queries';

export class NotesService {
  // Replace direct DB calls with query hooks
  async createNote(dirPath: string, name?: string) {
    const createEntry = useCreateEntry();
    // Implementation using mutation
  }
  
  async openNote(path: string) {
    const entry = useEntry({ path });
    // Implementation using query
  }
  
  // ... other methods
}
```

#### Step 3.2: Update Components Gradually
Start with one component at a time:
1. Notes list component
2. Note editor component  
3. Folder/collection components

### Phase 4: Replace Local State Management
**Goal**: Remove Svelte stores that duplicate server state

#### Step 4.1: Identify Stores to Replace
From `apps/app/src/lib/store.ts`:
- ✅ Keep: `editor`, `editorMode`, `editorSearchValue` (UI state)
- 🔄 Replace: `collection`, `collectionEntries` (server state)
- ✅ Keep: `tooltipsOpen`, `isPageSidebarOpen` (UI state)
- 🔄 Replace: `appSettings`, `collectionSettings` (server state)

#### Step 4.2: Replace Server State Stores
```typescript
// Before: Local store
import { collection } from '$lib/store';

// After: Server state via queries
import { useCollections } from '@typyst/queries';
const collections = useCollections();
```

### Phase 5: Update Auth Flow
**Goal**: Ensure auth works properly with server-side API

#### Step 5.1: Update Auth Context
```typescript
// apps/app/src/routes/(protected)/+layout.server.ts
export const load: LayoutServerLoad = async (event) => {
  const session = await requireAuth(event);
  
  // Pass to API client context
  return {
    user: session.user,
    session: session,
    apiContext: {
      user: session.user,
      db: supabaseDb // Use Supabase instance
    }
  };
};
```

### Phase 6: Testing & Cleanup
**Goal**: Ensure everything works and remove dead code

#### Step 6.1: Test Each Component
- Create new notes
- Edit existing notes
- Delete notes
- Move notes between collections
- Collection management

#### Step 6.2: Remove Unused Code
- Remove PGLite dependencies
- Remove unused Svelte stores
- Remove old `apps/app/src/lib/api/notes.ts`
- Clean up imports

## Migration Strategy: Component-by-Component

### Priority Order:
1. **Collections List** (least complex, good test case)
2. **Note Creation** (medium complexity)
3. **Note Editing** (most complex, has real-time requirements)
4. **Note Management** (delete, move, rename)
5. **Settings Management**

### For Each Component:
1. **Backup**: Create a copy of the working component
2. **Migrate**: Update to use query hooks instead of direct DB
3. **Test**: Verify functionality matches original
4. **Ship**: Deploy the change
5. **Monitor**: Watch for issues

## Environment Variables Needed

```env
# apps/app/.env
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
DATABASE_URL=your-supabase-connection-string
```
These are set up
## Benefits After Migration

1. **Real-time Updates**: Supabase real-time subscriptions
2. **Offline Support**: Better caching with TanStack Query
3. **Type Safety**: End-to-end types from DB → API → UI
4. **Optimistic Updates**: Already built into query hooks
5. **Better Error Handling**: Centralized error management
6. **Scalability**: Server-side state management

## Risk Mitigation

2. **Gradual Rollout**: Migrate one component at a time
3. **Backup Strategy**: Keep PGLite code until migration is complete
4. **Testing**: Test each phase thoroughly before proceeding
5. **Rollback Plan**: Ability to revert to PGLite if needed

## Estimated Timeline

- **Phase 1**: 1-2 days (Setup)
- **Phase 2**: 2-3 days (API routes)  
- **Phase 3**: 3-4 days (Notes migration)
- **Phase 4**: 2-3 days (State management)
- **Phase 5**: 1-2 days (Auth updates)
- **Phase 6**: 2-3 days (Testing/cleanup)

**Total**: ~2 weeks for complete migration

This approach ensures you maintain a working application throughout the migration process while systematically moving to a more scalable, server-first architecture.
