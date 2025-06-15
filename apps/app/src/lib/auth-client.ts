import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient({
	baseURL: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173'
});

export const { signIn, signUp, signOut, useSession, getSession } = authClient;
