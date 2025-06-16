import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import type { AuthUser } from '@typyst/auth';

/**
 * Redirect to sign-in page with optional redirect URL
 */
export function redirectToSignIn(redirectTo?: string) {
	if (!browser) return;

	const url = new URL('/auth/sign-in', window.location.origin);
	if (redirectTo) {
		url.searchParams.set('redirectTo', redirectTo);
	}
	goto(url.toString());
}

/**
 * Redirect to the intended destination after successful auth
 */
export function redirectAfterAuth(fallback = '/') {
	if (!browser) return;

	const urlParams = new URLSearchParams(window.location.search);
	const redirectTo = urlParams.get('redirectTo') || fallback;
	goto(redirectTo);
}

/**
 * Check if user has required role/permission
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function hasPermission(user: AuthUser | null, _permission?: string): boolean {
	if (!user) return false;

	// For now, just check if user exists
	// This can be extended with actual role/permission checking
	// TODO: Implement actual permission checking using _permission parameter
	return !!user.id;
}

/**
 * Get user display name
 */
export function getUserDisplayName(user: AuthUser | null): string {
	if (!user) return 'Guest';

	return user.name || user.email || 'User';
}

/**
 * Check if the current route is an auth route
 */
export function isAuthRoute(pathname: string): boolean {
	return pathname.startsWith('/auth/');
}

/**
 * Get the appropriate redirect URL for after auth
 */
export function getPostAuthRedirect(currentPath: string): string {
	// Don't redirect back to auth pages
	if (isAuthRoute(currentPath)) {
		return '/';
	}

	return currentPath;
}
