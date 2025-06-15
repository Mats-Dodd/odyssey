import { createSupabaseDatabase, createPGLiteDatabase } from '@typyst/db';
import { browser } from '$app/environment';

// Get environment variables
const connectionString = process.env.DATABASE_URL || process.env.SUPABASE_DATABASE_URL;

// Validate auth database connection string
if (!connectionString) {
	throw new Error(
		'DATABASE_URL or SUPABASE_DATABASE_URL environment variable is required for auth'
	);
}

// Supabase client for auth (server-side only)
const authDb = createSupabaseDatabase({
	connectionString,
	maxConnections: 10
});

// PGLite client for app data (client-side only)
// Only initialize in the browser
let appDb: ReturnType<typeof createPGLiteDatabase> | null = null;

if (browser) {
	appDb = createPGLiteDatabase({
		dataDir: 'idb://typyst'
	});
}

// Export the database clients for convenience
export const { db: authDatabase } = authDb;
export const appDatabase = appDb?.db || null;

// Export database instances for auth package integration
export { authDb };
export { appDb };
