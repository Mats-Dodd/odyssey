import { json, type RequestHandler } from '@sveltejs/kit';
import { createSupabaseDatabase } from '@typyst/db/supabase';
import { collection } from '@typyst/db';
import { user } from '@typyst/db/schema/auth';

export const POST: RequestHandler = async ({ request, locals }) => {
	try {
		// Parse the request body
		const input = await request.json();
		console.log('Create collection API called with input:', input);

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

		// Create new collection data
		const newCollection = {
			path: input.path,
			name: input.name,
			lastOpened: new Date(),
			userId: userId
		};

		console.log('Creating collection:', newCollection);

		// Insert collection into Supabase
		const [created] = await db.db.insert(collection).values(newCollection).returning();

		console.log('Created collection:', created);

		// Transform to expected API format
		const result = {
			path: created.path,
			name: created.name,
			lastOpened: created.lastOpened.toISOString(),
			userId: created.userId || ''
		};

		console.log('Create collection API returning:', result);
		return json(result);
	} catch (error) {
		console.error('Create collection API error:', error);
		return json(
			{
				error: 'Failed to create collection',
				details: error instanceof Error ? error.message : error
			},
			{ status: 500 }
		);
	}
};
