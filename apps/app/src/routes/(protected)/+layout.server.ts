import { requireAuth } from '$lib/server/auth';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	// This runs for all routes in (protected) group
	const session = await requireAuth(event);

	return {
		user: session.user,
		session: session,
		isAuthenticated: true
	};
};
