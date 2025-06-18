import { createSupabaseDatabase } from '@typyst/db';
import { browser } from '$app/environment';

// Get environment variables
const connectionString = process.env.DATABASE_URL || process.env.SUPABASE_DATABASE_URL;

// Validate database connection string
if (!connectionString) {
	throw new Error(
		'DATABASE_URL or SUPABASE_DATABASE_URL environment variable is required'
	);
}

// Supabase client for both auth and app data
const supabaseDb = createSupabaseDatabase({
	connectionString,
	maxConnections: 10
});

// Export the database client for convenience
export const { db: database } = supabaseDb;

// Export database instance
export { supabaseDb };

// Keep these for backward compatibility
export const authDatabase = database;
export const appDatabase = database;
export const authDb = supabaseDb;
export const appDb = supabaseDb;
