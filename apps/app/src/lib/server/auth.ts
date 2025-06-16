import type { RequestEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { getSession } from '$lib/auth';

export async function requireAuth(event: RequestEvent) {
	try {
		const sessionResult = await getSession(event.request.headers);
		const session = sessionResult.data;

		if (!session || !session.user) {
			throw redirect(302, `/auth/sign-in?redirectTo=${event.url.pathname}`);
		}

		return session;
	} catch (error) {
		// Clear invalid session cookie if it exists
		event.cookies.delete('better-auth.session_token', { path: '/' });
		throw redirect(302, `/auth/sign-in?redirectTo=${event.url.pathname}`);
	}
}

export async function requireRole(event: RequestEvent, requiredRole: string) {
	const session = await requireAuth(event);

	// Extend this based on your role system
	// Note: This assumes a role field exists on the user object
	// TODO: Implement proper role system when user schema includes role field
	const user = session.user as unknown as { role?: string };
	if (user.role !== requiredRole) {
		throw redirect(403, '/unauthorized');
	}

	return session;
}

export function createAuthGuard() {
	return {
		requireAuth,
		requireRole,
		optionalAuth: async (event: RequestEvent) => {
			try {
				const sessionResult = await getSession(event.request.headers);
				return sessionResult.data;
			} catch {
				return null;
			}
		}
	};
}
