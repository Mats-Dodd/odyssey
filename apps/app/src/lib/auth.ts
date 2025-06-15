import { createAuthServer } from '@typyst/auth/server';
import { authDb } from './database.js';

// Get environment variables with fallbacks for development
const authSecret = process.env.BETTER_AUTH_SECRET;
const baseURL = process.env.BETTER_AUTH_URL || 'http://localhost:5173';

// Validate required environment variables
if (!authSecret) {
	throw new Error('BETTER_AUTH_SECRET environment variable is required');
}

// Create auth server instance using @typyst/auth with the database instance
const authServer = createAuthServer({
	database: authDb,
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
