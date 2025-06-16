<script lang="ts">
	import { signOut, isLoading } from '$lib/auth.svelte';
	import { Button } from '@typyst/ui/components/button';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import AuthForm from '$lib/components/auth/AuthForm.svelte';

	let isSigningOut = false;

	async function handleSignOut() {
		isSigningOut = true;
		try {
			await signOut();
			// Redirect to home page after sign out
			goto('/');
		} catch (error) {
			console.error('Sign out error:', error);
			// Still redirect even if there's an error
			goto('/');
		} finally {
			isSigningOut = false;
		}
	}

	onMount(() => {
		// Auto sign out when page loads
		handleSignOut();
	});
</script>

<svelte:head>
	<title>Signing Out - Typyst</title>
</svelte:head>

<AuthForm title="Signing Out" subtitle="Please wait while we sign you out.">
	{#if isSigningOut || $isLoading}
		<div class="text-center">
			<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
			<p class="text-muted-foreground">Signing out...</p>
		</div>
	{:else}
		<div class="text-center space-y-4">
			<p class="text-muted-foreground">If you weren't automatically redirected:</p>
			<Button on:click={() => goto('/')} class="w-full">Go to Home</Button>
		</div>
	{/if}
</AuthForm>
