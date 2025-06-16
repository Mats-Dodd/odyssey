import { createSvelteAuthStores } from '@typyst/auth/svelte';
import { authClient } from './auth-client.js';

// Create Svelte-compatible stores from the auth client
export const auth = createSvelteAuthStores(authClient);

// Re-export for convenience
export const {
	authState,
	user,
	session,
	isAuthenticated,
	isLoading,
	error,
	signUp,
	signIn,
	signOut,
	getSession,
	refreshSession
} = auth;
