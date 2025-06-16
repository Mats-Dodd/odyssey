<script lang="ts">
	import { signIn, isLoading, error } from '$lib/auth.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '@typyst/ui/components/button';
	import AuthForm from '$lib/components/auth/AuthForm.svelte';
	import AuthInput from '$lib/components/auth/AuthInput.svelte';
	import AuthError from '$lib/components/auth/AuthError.svelte';

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
</script>

<svelte:head>
	<title>Sign In - Typyst</title>
</svelte:head>

<AuthForm
	title="Sign In"
	subtitle="Welcome back to Typyst"
	alternativeText="Don't have an account?"
	alternativeLink="/auth/sign-up"
	alternativeLinkText="Sign up"
>
	<form on:submit|preventDefault={handleSignIn} class="space-y-4">
		<AuthInput
			type="email"
			bind:value={email}
			label="Email"
			placeholder="Enter your email"
			required
		/>

		<AuthInput
			type="password"
			bind:value={password}
			label="Password"
			placeholder="Enter your password"
			required
		/>

		<AuthError error={$error} {localError} />

		<Button type="submit" class="w-full" disabled={$isLoading}>
			{$isLoading ? 'Signing in...' : 'Sign In'}
		</Button>
	</form>
</AuthForm>
