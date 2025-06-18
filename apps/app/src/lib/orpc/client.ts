import type { RouterClient } from '@orpc/server';
import type { AppRouter } from '@typyst/api';
import { createORPCClient } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import { browser } from '$app/environment';
import { getAuthContext, createAuthHeaders } from './auth.js';

// Global declaration for SSR optimization
declare global {
	// eslint-disable-next-line no-var
	var $orpcClient: RouterClient<AppRouter> | undefined;
}

/**
 * Create the oRPC link with proper headers and context
 */
function createORPCLink() {
	return new RPCLink({
		url: () => {
			if (!browser) {
				// Server-side: use absolute URL
				return 'http://localhost:5173/api/rpc';
			}
			// Client-side: use relative URL
			return '/api/rpc';
		},
		headers: async () => {
			// Get auth context if available (will return fallback if not in component context)
			try {
				const auth = getAuthContext();
				return createAuthHeaders(auth);
			} catch {
				// Not in component context, return empty headers
				return {};
			}
		}
	});
}

/**
 * Create the oRPC client
 * This handles both SSR and client-side usage
 */
function createClient(): RouterClient<AppRouter> {
	const link = createORPCLink();
	return createORPCClient(link);
}

/**
 * Get or create the oRPC client
 * Uses singleton pattern for performance
 */
export function getORPCClient(): RouterClient<AppRouter> {
	// On server, create fresh client for each request
	if (!browser) {
		return createClient();
	}

	// On client, use singleton
	if (!globalThis.$orpcClient) {
		globalThis.$orpcClient = createClient();
	}

	return globalThis.$orpcClient;
}

// Export the client for direct usage
export const orpcClient = getORPCClient();
