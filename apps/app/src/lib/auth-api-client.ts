import { createApiClient } from '@typyst/queries';
import { session } from './auth.svelte.js';
import { get } from 'svelte/store';

/**
 * Get current auth headers
 */
function getAuthHeaders(): Record<string, string> {
	const currentSession = get(session);
	const headers: Record<string, string> = {};

	if (currentSession?.token) {
		headers['Authorization'] = `Bearer ${currentSession.token}`;
	}

	return headers;
}

/**
 * Create an auth-aware API client
 */
export function createAuthApiClient() {
	return createApiClient({
		baseUrl: '/api/rpc',
		headers: getAuthHeaders()
	});
}

// Create a reactive API client that updates when auth changes
let authApiClient = createAuthApiClient();

// Update the client when session changes
session.subscribe(() => {
	authApiClient = createAuthApiClient();
});

export { authApiClient };
