import { redirect, type Handle } from '@sveltejs/kit';
import { getSession } from '$lib/auth';

// Define protected routes that require authentication
const protectedRoutes = ['/notes', '/tasks', '/daily'];

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
	event.locals.session = session;
	event.locals.user = session?.user || null;

	// Check if current route is protected
	const isProtectedRoute = protectedRoutes.some((route) => url.pathname.startsWith(route));
	const isAuthRoute = authRoutes.some((route) => url.pathname === route);

	// Redirect unauthenticated users from protected routes
	if (isProtectedRoute && !session) {
		const redirectTo = encodeURIComponent(url.pathname + url.search);
		throw redirect(302, `/auth/sign-in?redirectTo=${redirectTo}`);
	}

	// Redirect authenticated users from auth routes
	if (isAuthRoute && session) {
		const redirectTo = url.searchParams.get('redirectTo') || '/';
		throw redirect(302, redirectTo);
	}

	return resolve(event);
};
