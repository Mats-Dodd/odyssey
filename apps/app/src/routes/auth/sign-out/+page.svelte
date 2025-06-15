<script lang="ts">
	import { signOut } from '$lib/auth-client';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let isSigningOut = true;

	onMount(async () => {
		try {
			await signOut();
			// Redirect to home page after sign out
			goto('/');
		} catch (error) {
			console.error('Sign out error:', error);
			// Still redirect even if there's an error
			goto('/');
		}
	});
</script>

<svelte:head>
	<title>Signing Out - Typyst</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center">
	<div class="text-center">
		<h1 class="text-2xl font-bold mb-4">Signing out...</h1>
		<p class="text-muted-foreground">Please wait while we sign you out.</p>
	</div>
</div>
