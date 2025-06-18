import { json, type RequestHandler } from '@sveltejs/kit';
import { createSupabaseDatabase } from '@typyst/db/supabase';
import { collection } from '@typyst/db';
import { user } from '@typyst/db/schema/auth';
import { eq, desc } from 'drizzle-orm';

export const POST: RequestHandler = async ({ request, locals }) => {
	try {
		// Parse the request body - handle empty body gracefully
		let input;
		try {
			const text = await request.text();
			input = text ? JSON.parse(text) : {};
		} catch (parseError) {
			console.log('Failed to parse request body, using empty object:', parseError);
			input = {};
		}

		console.log('Collections API called with input:', input);

		// Create Supabase database connection
		const db = createSupabaseDatabase({
			connectionString: process.env.DATABASE_URL!
		});

		// Get user ID (use 'test-user' if no session)
		const userId = locals.session?.user?.id || 'test-user';

		// Ensure test user exists if using test-user
		if (userId === 'test-user') {
			try {
				await db.db
					.insert(user)
					.values({
						id: 'test-user',
						name: 'Test User',
						email: 'test@example.com',
						emailVerified: false,
						image: null,
						createdAt: new Date(),
						updatedAt: new Date()
					})
					.onConflictDoNothing();
			} catch (userError) {
				console.log('Test user might already exist:', userError);
			}
		}

		// Query collections directly from Supabase
		const collections = await db.db
			.select()
			.from(collection)
			.where(eq(collection.userId, userId))
			.orderBy(desc(collection.lastOpened))
			.limit(20);

		console.log('Found collections:', collections);

		// Transform to expected API format
		const result = {
			items: collections.map((col) => ({
				path: col.path,
				name: col.name,
				lastOpened: col.lastOpened.toISOString(),
				userId: col.userId || ''
			})),
			pagination: {
				page: 1,
				limit: 20,
				total: collections.length,
				hasMore: false
			}
		};

		console.log('Collections API returning:', result);
		return json(result);
	} catch (error) {
		console.error('Collections list API error:', error);
		return json(
			{
				error: 'Failed to fetch collections',
				details: error instanceof Error ? error.message : error
			},
			{ status: 500 }
		);
	}
};
