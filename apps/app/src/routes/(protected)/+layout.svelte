<script lang="ts">
	import type { LayoutData } from './$types';
	import AuthQueryProvider from '$lib/auth-query-provider.svelte';

	// eslint-disable-next-line svelte/valid-compile
	export let data: LayoutData;

	// This layout ensures all child routes have authenticated user data
	// The server load function handles the authentication check
</script>

<AuthQueryProvider>
	<slot />
</AuthQueryProvider>
