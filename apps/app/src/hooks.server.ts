import { redirect, type Handle } from '@sveltejs/kit';
import { getSession } from '$lib/auth';

// Define auth routes that should redirect authenticated users
const authRoutes = ['/auth/sign-in', '/auth/sign-up'];

export const handle: Handle = async ({ event, resolve }) => {
	const { url, request } = event;

	// Skip auth checks for API routes and static assets
	if (url.pathname.startsWith('/api') || url.pathname.startsWith('/_app')) {
		return resolve(event);
	}

	// Get session from request headers
	let session = null;
	try {
		const sessionResult = await getSession(request.headers);
		session = sessionResult.data;
	} catch (error) {
		console.error('Session check error:', error);
	}

	// Set session in locals for use in load functions
	event.locals.session = session as typeof event.locals.session; // eslint-disable-line @typescript-eslint/no-explicit-any -- Type assertion needed for Better Auth session compatibility
	event.locals.user = session?.user || null;

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
