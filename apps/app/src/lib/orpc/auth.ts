import { getContext, setContext } from 'svelte';
import type { AuthSession, AuthUser } from '@typyst/auth';

// Context keys
const AUTH_CONTEXT_KEY = 'orpc:auth';

export interface AuthContext {
	session: AuthSession | null;
	user: AuthUser | null;
	isAuthenticated: boolean;
}

/**
 * Set auth context in Svelte context
 */
export function setAuthContext(auth: AuthContext) {
	setContext(AUTH_CONTEXT_KEY, auth);
}

/**
 * Get auth context from Svelte context
 */
export function getAuthContext(): AuthContext {
	const auth = getContext<AuthContext>(AUTH_CONTEXT_KEY);

	// Fallback for when context is not available (e.g., during SSR)
	if (!auth) {
		return {
			session: null,
			user: null,
			isAuthenticated: false
		};
	}

	return auth;
}

/**
 * Create auth headers for oRPC requests
 */
export function createAuthHeaders(auth: AuthContext): Record<string, string> {
	const headers: Record<string, string> = {};

	if (auth.session?.token) {
		headers['Authorization'] = `Bearer ${auth.session.token}`;
	}

	if (auth.user?.id) {
		headers['X-User-ID'] = auth.user.id;
	}

	return headers;
}
