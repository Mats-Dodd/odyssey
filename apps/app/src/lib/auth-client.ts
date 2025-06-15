import { createAuthClientInstance } from '@typyst/auth/client';

export const authClient = createAuthClientInstance({
	baseURL: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173',
	basePath: '/api/auth'
});

export const { signIn, signUp, signOut, getSession, stores } = authClient;

// Export individual stores for easier access
export const { authState, user, session, isAuthenticated, isLoading, authError } = stores;
