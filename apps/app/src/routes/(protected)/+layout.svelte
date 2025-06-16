<script lang="ts">
	import type { LayoutData } from './$types';

	// eslint-disable-next-line svelte/valid-compile
	export let data: LayoutData;

	// This layout ensures all child routes have authenticated user data
	// The server load function handles the authentication check
</script>

<slot />
