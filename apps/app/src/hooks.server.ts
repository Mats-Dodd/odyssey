import { redirect, type Handle } from '@sveltejs/kit';
import { getSession } from '$lib/auth';

// Define auth routes that should redirect authenticated users
const authRoutes = ['/auth/sign-in', '/auth/sign-up'];

export const handle: Handle = async ({ event, resolve }) => {
	const { url, request } = event;

	// Skip auth processing for static assets only
	if (url.pathname.startsWith('/_app')) {
		return resolve(event);
	}

	// Get session from request headers for ALL routes (including API)
	let session = null;
	try {
		console.log('[Auth] Checking session for URL:', url.pathname);
		const sessionResult = await getSession(request.headers);
		session = sessionResult.data;
		console.log('[Auth] Session result:', session ? 'Found valid session' : 'No session found');
	} catch (error) {
		console.error('[Auth] Session check error:', error);
		console.error('[Auth] Error details:', error instanceof Error ? error.message : error);
	}

	// Set session in locals for use in load functions AND API routes
	event.locals.session = session as typeof event.locals.session; // eslint-disable-line @typescript-eslint/no-explicit-any -- Type assertion needed for Better Auth session compatibility
	event.locals.user = session?.user || null;

	// Skip redirect logic for API routes
	if (url.pathname.startsWith('/api')) {
		return resolve(event);
	}

	// Check if current route is an auth route
	const isAuthRoute = authRoutes.some((route) => url.pathname === route);

	// Redirect authenticated users from auth routes
	if (isAuthRoute && session) {
		const redirectTo = url.searchParams.get('redirectTo') || '/';
		throw redirect(302, redirectTo);
	}

	// Note: Protected routes are now handled by (protected)/+layout.server.ts
	// which uses the requireAuth function for server-side protection

	return resolve(event);
};
