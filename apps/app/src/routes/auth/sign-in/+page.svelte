<script lang="ts">
	import { signIn, isLoading, authError } from '$lib/auth-client';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '@typyst/ui/components/button';
	import { onMount } from 'svelte';

	let email = '';
	let password = '';
	let localError = '';

	// Get redirect URL from query params
	$: redirectTo = $page.url.searchParams.get('redirectTo') || '/';

	async function handleSignIn() {
		localError = '';

		if (!email || !password) {
			localError = 'Please fill in all fields';
			return;
		}

		try {
			const result = await signIn({
				email,
				password
			});

			if (result.data) {
				// Successful sign in, redirect to intended page
				goto(redirectTo);
			} else if (result.error) {
				localError = result.error.message || 'Sign in failed';
			}
		} catch (error) {
			localError = error instanceof Error ? error.message : 'An unexpected error occurred';
		}
	}

	onMount(() => {
		// Clear any previous auth errors
		// Note: authError is a computed store, errors are cleared via authState
	});
</script>

<svelte:head>
	<title>Sign In - Typyst</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center">
	<div class="w-full max-w-md space-y-6 p-6">
		<div class="text-center">
			<h1 class="text-2xl font-bold">Sign In</h1>
			<p class="text-muted-foreground mt-2">Welcome back to Typyst</p>
		</div>

		<form on:submit|preventDefault={handleSignIn} class="space-y-4">
			<div class="space-y-2">
				<label for="email" class="text-sm font-medium">Email</label>
				<input
					id="email"
					type="email"
					bind:value={email}
					placeholder="Enter your email"
					class="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
					required
				/>
			</div>

			<div class="space-y-2">
				<label for="password" class="text-sm font-medium">Password</label>
				<input
					id="password"
					type="password"
					bind:value={password}
					placeholder="Enter your password"
					class="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
					required
				/>
			</div>

			{#if localError || $authError}
				<div class="text-sm text-red-600 bg-red-50 p-3 rounded-md">
					{localError || $authError}
				</div>
			{/if}

			<Button type="submit" class="w-full" disabled={$isLoading}>
				{$isLoading ? 'Signing in...' : 'Sign In'}
			</Button>
		</form>

		<div class="text-center">
			<p class="text-sm text-muted-foreground">
				Don't have an account?
				<a href="/auth/sign-up" class="text-primary hover:underline">Sign up</a>
			</p>
		</div>
	</div>
</div>
