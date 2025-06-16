# @typyst/queries

A reactive, type-safe data layer using TanStack Query that connects directly to the `@typyst/api` oRPC server. This package provides perfect type safety from API to UI with aggressive optimistic updates for instant user experience.

## Features

- ✅ **Type-safe API calls** using oRPC client
- ✅ **Reactive queries** with TanStack Query
- ✅ **Aggressive optimistic updates** for instant UX
- ✅ **Context-based API access** (no prop drilling)
- ✅ **Production-ready error handling** with rollback
- ✅ **Perfect type safety** from oRPC → Query → UI

## Installation

```bash
pnpm add @typyst/queries
```

## Quick Start

### 1. Setup QueryProvider

```svelte
<!-- App.svelte -->
<script>
  import { QueryProvider } from '@typyst/queries/components';
  
  const user = { id: '1', name: 'John', email: 'john@example.com' };
  const apiOptions = { baseUrl: '/api/rpc' };
</script>

<QueryProvider {apiOptions} {user}>
  <YourApp />
</QueryProvider>
```

### 2. Use Query Hooks

```svelte
<!-- Collections.svelte -->
<script>
  import { useCollections, useCreateCollection } from '@typyst/queries/hooks';
  import { writable } from 'svelte/store';
  
  const listInput = writable({ limit: 20 });
  const collections = useCollections(listInput);
  const createCollection = useCreateCollection();
  
  async function handleCreate() {
    await $createCollection.mutateAsync({
      path: '/new-collection',
      name: 'New Collection'
    });
  }
</script>

{#if $collections.isLoading}
  <p>Loading...</p>
{:else if $collections.error}
  <p>Error: {$collections.error.message}</p>
{:else}
  {#each $collections.data?.items || [] as collection}
    <div>{collection.name}</div>
  {/each}
  
  <button on:click={handleCreate} disabled={$createCollection.isPending}>
    Create Collection
  </button>
{/if}
```

## API Reference

### Hooks

#### Collections
- `useCollections(input?)` - List collections with pagination
- `useCollection(path)` - Get single collection by path
- `useRecentCollections(limit?)` - Get recently accessed collections
- `useCreateCollection()` - Create new collection with optimistic updates
- `useUpdateCollection()` - Update collection with optimistic updates
- `useDeleteCollection()` - Delete collection with cache cleanup

#### Entries
- `useEntries(input?)` - List entries with filtering/pagination
- `useEntry(input)` - Get single entry
- `useSearchEntries(input)` - Search entries with debouncing
- `useEntryTree(collectionPath, rootPath?)` - Get hierarchical entry tree
- `useCreateEntry()` - Create new entry with optimistic updates
- `useUpdateEntry()` - Update entry with optimistic updates
- `useBulkDeleteEntries()` - Delete multiple entries
- `useBulkMoveEntries()` - Move multiple entries

#### Auth
- `useSession()` - Get current session
- `useUser()` - Get current user
- `useLogin()` - Login with credentials
- `useLogout()` - Logout and clear cache
- `useRegister()` - Register new user
- `useRefreshToken()` - Refresh authentication token

### Components

#### QueryProvider
Provider component that sets up TanStack Query client and API context.

**Props:**
- `apiOptions?: ApiClientOptions` - API client configuration
- `user?: User | null` - Current user context

### Utilities

#### API Client
- `createApiClient(options?)` - Create configured oRPC client
- `getApiClient()` - Get singleton API client instance

#### Context
- `setApiClientContext(client)` - Set API client in Svelte context
- `getApiClientContext()` - Get API client from context
- `setUserContext(user)` - Set user in Svelte context
- `getUserContext()` - Get user from context
- `hasApiClientContext()` - Check if API client context exists
- `hasUserContext()` - Check if user context exists

#### Query Client
- `createTypystQueryClient()` - Create configured QueryClient
- `getQueryClient()` - Get singleton QueryClient instance

#### Query Keys
- `queryKeys` - Factory for consistent query key generation

## Architecture

### Type Safety Flow

```
oRPC API Server → @typyst/api types → @typyst/queries hooks → Svelte components
```

Perfect type safety is maintained throughout the entire stack with no type casting needed.

### Optimistic Updates

All mutation hooks include aggressive optimistic updates:

1. **onMutate**: Apply optimistic changes immediately
2. **onError**: Rollback changes if API call fails  
3. **onSuccess**: Replace optimistic data with server response

This provides instant UI feedback while maintaining data consistency.

### Error Handling

- **Network errors**: Automatic retry with exponential backoff
- **4xx client errors**: No retry, immediate failure
- **5xx server errors**: Retry up to 3 times
- **Auth failures**: Clear auth state and redirect to login

### Cache Management

- **Stale time**: 5 minutes for most queries
- **GC time**: 30 minutes to keep data available
- **Invalidation**: Smart cache invalidation on mutations
- **Prefetching**: Automatic prefetching of related data

## Examples

### Creating a Collection with Optimistic Updates

```svelte
<script>
  import { useCreateCollection } from '@typyst/queries/hooks';
  
  const createCollection = useCreateCollection();
  
  async function handleSubmit(formData) {
    try {
      // This will:
      // 1. Show the new collection immediately (optimistic)
      // 2. Call the API in the background
      // 3. Replace optimistic data with server response
      // 4. Or rollback if API fails
      await $createCollection.mutateAsync({
        path: formData.path,
        name: formData.name
      });
      
      // Collection is now created and UI is updated
      goto(`/collections/${formData.path}`);
    } catch (error) {
      // Error handling - optimistic update was already rolled back
      console.error('Failed to create collection:', error);
    }
  }
</script>
```

### Real-time Search with Debouncing

```svelte
<script>
  import { useSearchEntries } from '@typyst/queries/hooks';
  import { writable, derived } from 'svelte/store';
  import { debounce } from 'lodash-es';
  
  const searchQuery = writable('');
  const debouncedQuery = derived(searchQuery, ($query, set) => {
    const debounced = debounce(set, 300);
    debounced($query);
    return () => debounced.cancel();
  });
  
  const searchInput = derived(debouncedQuery, ($query) => ({
    query: $query,
    collectionPath: '/my-notes'
  }));
  
  const searchResults = useSearchEntries(searchInput);
</script>

<input bind:value={$searchQuery} placeholder="Search entries..." />

{#if $searchResults.isLoading}
  <p>Searching...</p>
{:else if $searchResults.data}
  {#each $searchResults.data.items as entry}
    <div>{entry.title}</div>
  {/each}
{/if}
```

## Production Considerations

### Performance
- Aggressive caching reduces API calls
- Optimistic updates provide instant feedback
- Smart invalidation prevents unnecessary refetches
- Background refetching keeps data fresh

### Reliability  
- Automatic retry with exponential backoff
- Graceful error handling with user feedback
- Offline-ready with cached data
- Rollback mechanism for failed operations

### Type Safety
- End-to-end type safety from API to UI
- No manual type casting required
- Compile-time error detection
- IntelliSense support throughout

## Contributing

This package is part of the Typyst monorepo. See the root README for development setup.

## License

MIT 