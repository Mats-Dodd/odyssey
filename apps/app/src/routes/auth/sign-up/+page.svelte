<script lang="ts">
	import { signUp, isLoading, error } from '$lib/auth.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '@typyst/ui/components/button';
	import AuthForm from '$lib/components/auth/AuthForm.svelte';
	import AuthInput from '$lib/components/auth/AuthInput.svelte';
	import AuthError from '$lib/components/auth/AuthError.svelte';

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
</script>

<svelte:head>
	<title>Sign Up - Typyst</title>
</svelte:head>

<AuthForm
	title="Sign Up"
	subtitle="Create your Typyst account"
	alternativeText="Already have an account?"
	alternativeLink="/auth/sign-in"
	alternativeLinkText="Sign in"
>
	<form on:submit|preventDefault={handleSignUp} class="space-y-4">
		<AuthInput
			type="email"
			bind:value={email}
			label="Email"
			placeholder="Enter your email"
			required
		/>

		<div class="space-y-2">
			<AuthInput
				type="password"
				bind:value={password}
				label="Password"
				placeholder="Enter your password"
				required
			/>
			<p class="text-xs text-muted-foreground">Must be at least 8 characters long</p>
		</div>

		<AuthInput
			type="password"
			bind:value={confirmPassword}
			label="Confirm Password"
			placeholder="Confirm your password"
			required
		/>

		<AuthError error={$error} {localError} />

		<Button type="submit" class="w-full" disabled={$isLoading}>
			{$isLoading ? 'Creating account...' : 'Sign Up'}
		</Button>
	</form>
</AuthForm>
