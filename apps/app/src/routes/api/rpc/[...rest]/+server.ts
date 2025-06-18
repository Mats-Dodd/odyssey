import { json, type RequestHandler } from '@sveltejs/kit';
import { appRouter } from '@typyst/api';
import { createSupabaseDatabase } from '@typyst/db/supabase';
import { user } from '@typyst/db/schema/auth';

// Type for oRPC decorated procedures
interface DecoratedProcedure {
	'~orpc'?: {
		handler: (params: { input: unknown; context: unknown }) => Promise<unknown>;
	};
}

// Since this is a catch-all route [...rest], we need to extract the procedure path
const extractProcedurePath = (url: URL, prefix: string): string[] => {
	const pathname = url.pathname.replace(prefix, '');
	// Handle both slash notation and dot notation
	// e.g., /api/rpc/collections.list -> ['collections', 'list']
	let path: string[];
	if (pathname.includes('.')) {
		// Dot notation (what the API client uses)
		path = pathname.split('.').filter(Boolean);
	} else {
		// Slash notation (fallback)
		path = pathname.split('/').filter(Boolean);
	}
	console.log('[RPC] Extracted path:', path, 'from URL:', url.pathname);
	return path;
};

// Handle all HTTP methods
const handle: RequestHandler = async ({ request, locals, url }) => {
	console.log('[RPC] Request received:', {
		method: request.method,
		url: url.pathname,
		headers: Object.fromEntries(request.headers.entries())
	});

	try {
		// Create Supabase database connection
		const db = createSupabaseDatabase({
			connectionString: process.env.DATABASE_URL!
		});
		console.log('[RPC] Database connection created');

		// Get user from session (use 'test-user' if no session)
		const userId = locals.session?.user?.id || 'test-user';
		console.log('[RPC] User ID:', userId, 'Session:', locals.session);

		// Ensure test user exists if using test-user
		if (userId === 'test-user') {
			console.log('[RPC] Creating test user...');
			try {
				await db.db
					.insert(user)
					.values({
						id: 'test-user-new',
						name: 'Test User',
						email: 'test@example.com',
						emailVerified: false,
						createdAt: new Date(),
						updatedAt: new Date()
					})
					.onConflictDoNothing();
				console.log('[RPC] Test user created or already exists');
			} catch (error) {
				console.log('[RPC] Test user creation error (likely already exists):', error);
			}
		}

		// Extract the procedure path from the URL
		const path = extractProcedurePath(url, '/api/rpc/');

		// Parse request body if it's a POST request
		let input = {};
		if (request.method === 'POST') {
			try {
				const text = await request.text();
				input = text ? JSON.parse(text) : {};
				console.log('[RPC] Parsed request body:', input);
			} catch (error) {
				console.log('[RPC] Failed to parse request body:', error);
			}
		}

		// Create context for the procedure
		const context = {
			user: locals.session?.user || { id: userId },
			session: locals.session,
			db
		};
		console.log('[RPC] Context created with user:', context.user);

		// Navigate to the correct procedure in the router
		let procedure = appRouter as Record<string, unknown>;
		for (const segment of path) {
			console.log('[RPC] Navigating to segment:', segment);
			procedure = procedure[segment] as Record<string, unknown>;
			if (!procedure) {
				console.error('[RPC] Procedure not found at segment:', segment);
				return new Response('Procedure not found', { status: 404 });
			}
		}
		console.log('[RPC] Found procedure:', procedure);

		// Cast to DecoratedProcedure to check for handler
		const decoratedProcedure = procedure as DecoratedProcedure;

		// Check if this is actually a procedure (has a handler)
		if (!decoratedProcedure['~orpc'] || typeof decoratedProcedure['~orpc'].handler !== 'function') {
			console.error('[RPC] Invalid procedure - no handler function found');
			console.error('[RPC] Procedure structure:', JSON.stringify(Object.keys(procedure)));
			return new Response('Invalid procedure', { status: 404 });
		}

		// Call the procedure handler directly
		try {
			console.log('[RPC] Calling procedure handler with input:', input);
			const result = await decoratedProcedure['~orpc'].handler({ input, context });
			console.log('[RPC] Procedure result:', result);
			return json(result);
		} catch (error) {
			console.error('[RPC] Procedure execution error:', error);
			console.error('[RPC] Error stack:', (error as Error).stack);

			const errorObj = error as { code?: string; message?: string; status?: number };

			// Handle specific error types
			if (errorObj.code === 'NOT_FOUND') {
				return json({ error: errorObj.message }, { status: 404 });
			}
			if (errorObj.code === 'UNAUTHORIZED') {
				return json({ error: errorObj.message }, { status: 401 });
			}

			return json(
				{ error: errorObj.message || 'Internal server error' },
				{ status: errorObj.status || 500 }
			);
		}
	} catch (error) {
		console.error('[RPC] Handler error:', error);
		console.error('[RPC] Error stack:', (error as Error).stack);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};

// Export handlers for all HTTP methods
export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
