import { createAuthServer } from '@typyst/auth/server';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './database/schema';

// Get environment variables
const connectionString = process.env.DATABASE_URL || process.env.SUPABASE_DATABASE_URL;
const authSecret = process.env.BETTER_AUTH_SECRET;
const baseURL = process.env.BETTER_AUTH_URL || 'http://localhost:5173';

if (!connectionString) {
	throw new Error('DATABASE_URL or SUPABASE_DATABASE_URL environment variable is required');
}

if (!authSecret) {
	throw new Error('BETTER_AUTH_SECRET environment variable is required');
}

// Create a separate connection for Better Auth (server-side only)
const sql = postgres(connectionString);
const authDb = drizzle(sql, {
	schema: {
		// Only include Better Auth tables in the auth database instance
		user: schema.user,
		session: schema.session,
		account: schema.account,
		verification: schema.verification
	}
});

// Create auth server instance using @typyst/auth with Drizzle adapter
const authServer = createAuthServer({
	database: {
		adapter: drizzleAdapter(authDb, {
			provider: 'pg',
			schema: {
				// Map Better Auth tables explicitly
				user: schema.user,
				session: schema.session,
				account: schema.account,
				verification: schema.verification
			}
		})
	},
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
