<script lang="ts">
	import { signUp, isLoading, authError } from '$lib/auth-client';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '@typyst/ui/components/button';
	import { onMount } from 'svelte';

	let email = '';
	let password = '';
	let confirmPassword = '';
	let localError = '';

	// Get redirect URL from query params
	$: redirectTo = $page.url.searchParams.get('redirectTo') || '/';

	async function handleSignUp() {
		localError = '';

		if (!email || !password || !confirmPassword) {
			localError = 'Please fill in all fields';
			return;
		}

		if (password !== confirmPassword) {
			localError = 'Passwords do not match';
			return;
		}

		if (password.length < 8) {
			localError = 'Password must be at least 8 characters long';
			return;
		}

		try {
			const result = await signUp({
				email,
				password,
				name: email.split('@')[0] // Use email prefix as default name
			});

			if (result.data) {
				// Successful sign up, redirect to intended page
				goto(redirectTo);
			} else if (result.error) {
				localError = result.error.message || 'Sign up failed';
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
	<title>Sign Up - Typyst</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center">
	<div class="w-full max-w-md space-y-6 p-6">
		<div class="text-center">
			<h1 class="text-2xl font-bold">Sign Up</h1>
			<p class="text-muted-foreground mt-2">Create your Typyst account</p>
		</div>

		<form on:submit|preventDefault={handleSignUp} class="space-y-4">
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
				<p class="text-xs text-muted-foreground">Must be at least 8 characters long</p>
			</div>

			<div class="space-y-2">
				<label for="confirmPassword" class="text-sm font-medium">Confirm Password</label>
				<input
					id="confirmPassword"
					type="password"
					bind:value={confirmPassword}
					placeholder="Confirm your password"
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
				{$isLoading ? 'Creating account...' : 'Sign Up'}
			</Button>
		</form>

		<div class="text-center">
			<p class="text-sm text-muted-foreground">
				Already have an account?
				<a href="/auth/sign-in" class="text-primary hover:underline">Sign in</a>
			</p>
		</div>
	</div>
</div>
