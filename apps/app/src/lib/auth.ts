import { createAuthServer } from '@typyst/auth/server';
import { createSupabaseDatabase } from '@typyst/db/supabase';

// Get environment variables with fallbacks for development
const connectionString = process.env.DATABASE_URL || process.env.SUPABASE_DATABASE_URL;
const authSecret = process.env.BETTER_AUTH_SECRET;
const baseURL = process.env.BETTER_AUTH_URL || 'http://localhost:5173';

// Validate required environment variables
if (!connectionString) {
	throw new Error('DATABASE_URL or SUPABASE_DATABASE_URL environment variable is required');
}

if (!authSecret) {
	throw new Error('BETTER_AUTH_SECRET environment variable is required');
}

// Create Supabase database connection for Better Auth
const supabaseDb = createSupabaseDatabase({
	connectionString,
	maxConnections: 10
});

// Create auth server instance using @typyst/auth with the pre-configured adapter
const authServer = createAuthServer({
	database: {
		adapter: supabaseDb.adapter({} as Record<string, unknown>)
	} as Parameters<typeof createAuthServer>[0]['database'],
	secret: authSecret,
	baseURL,
	session: {
		expiresIn: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24 // 1 day
	}
});

// Export the auth instance for use in API routes
export const auth = authServer.auth;

// Export the server methods for use in server-side code
export const { signUp, signIn, signOut, getSession, verifySession, requireAuth } = authServer;

// Export types
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
