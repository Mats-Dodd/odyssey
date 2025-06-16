<script lang="ts">
  import { QueryClientProvider } from '@tanstack/svelte-query';
  import { getQueryClient } from '../lib/query-client.js';
  import { setApiClientContext, setUserContext } from '../lib/context.js';
  import { createApiClient } from '../lib/api-client.js';
  import type { User } from '../lib/context.js';
  import type { ApiClientOptions } from '../lib/api-client.js';

  export let apiOptions: ApiClientOptions = {};
  export let user: User | null = null;

  const queryClient = getQueryClient();
  const apiClient = createApiClient(apiOptions);

  // Set contexts for all child components
  setApiClientContext(apiClient);
  setUserContext(user);
</script>

<QueryClientProvider client={queryClient}>
  <slot />
</QueryClientProvider>
