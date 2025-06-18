<script lang="ts">
	import { QueryProvider, setApiClientContext } from '@typyst/queries';
	import { authApiClient } from './auth-api-client.js';

	// Set up the auth-aware API client in context
	setApiClientContext(authApiClient);
</script>

<QueryProvider>
	<slot />
</QueryProvider>
