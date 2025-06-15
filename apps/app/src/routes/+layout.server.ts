import type { LayoutServerLoad } from './$types';

export const prerender = false; // Disable prerendering for auth
export const ssr = false;

export const load: LayoutServerLoad = async ({ locals }) => {
	return {
		session: locals.session,
		user: locals.user
	};
};
