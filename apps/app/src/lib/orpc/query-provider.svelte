<script lang="ts">
	import { QueryProvider, setApiClientContext } from '@typyst/queries';
	import { getORPCClient } from './client.js';
	import { setAuthContext } from './auth.js';
	import { session, user, isAuthenticated } from '$lib/auth.svelte.js';

	// Set up auth context reactively
	$: {
		setAuthContext({
			session: $session,
			user: $user,
			isAuthenticated: $isAuthenticated
		});
	}

	// Set up oRPC client in context
	$: {
		const orpcClient = getORPCClient();
		setApiClientContext(orpcClient);
	}
</script>

<QueryProvider>
	<slot />
</QueryProvider>
