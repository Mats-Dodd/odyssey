import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './database/schema';

// Create Supabase connection for Better Auth
const connectionString = process.env.DATABASE_URL || process.env.SUPABASE_DATABASE_URL;

if (!connectionString) {
	throw new Error('DATABASE_URL or SUPABASE_DATABASE_URL environment variable is required');
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

export const auth = betterAuth({
	database: drizzleAdapter(authDb, {
		provider: 'pg',
		schema: {
			// Map Better Auth tables explicitly
			user: schema.user,
			session: schema.session,
			account: schema.account,
			verification: schema.verification
		}
	}),
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true
	},
	session: {
		expiresIn: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24 // 1 day
	},
	advanced: {
		generateId: () => crypto.randomUUID()
	},
	// Configure base URL for production
	baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:5173',
	// Secret for signing tokens
	secret: process.env.BETTER_AUTH_SECRET || 'your-secret-key-change-in-production'
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
