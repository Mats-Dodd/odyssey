import { betterAuth } from 'better-auth';
import type { AuthUser, AuthSession } from './types.js';

export interface AuthServerConfig {
  database: {
    provider: 'sqlite' | 'postgres' | 'mysql';
    url: string;
  };
  secret: string;
  baseURL: string;
  trustedOrigins?: string[];
  session?: {
    expiresIn: number;
    updateAge: number;
  };
}

export function createAuthServer(config: AuthServerConfig) {
  const auth = betterAuth({
    database: config.database,
    secret: config.secret,
    baseURL: config.baseURL,
    trustedOrigins: config.trustedOrigins,
    session: {
      expiresIn: config.session?.expiresIn ?? 60 * 60 * 24 * 7, // 7 days
      updateAge: config.session?.updateAge ?? 60 * 60 * 24 // 1 day
    },
    emailAndPassword: {
      enabled: true,
      autoSignIn: true,
      minPasswordLength: 8,
      maxPasswordLength: 128
    },
    user: {
      additionalFields: {
        emailVerified: {
          type: 'boolean',
          defaultValue: false
        }
      }
    }
  });

  return {
    auth,
    // Server-side authentication methods
    signUp: async (data: { email: string; password: string; name: string; image?: string }) => {
      try {
        const result = await auth.api.signUpEmail({
          body: data,
          asResponse: true
        });
        return { data: result, error: null };
      } catch (error) {
        return {
          data: null,
          error: error instanceof Error ? error.message : 'Sign up failed'
        };
      }
    },

    signIn: async (data: { email: string; password: string; rememberMe?: boolean }) => {
      try {
        const result = await auth.api.signInEmail({
          body: data,
          asResponse: true
        });
        return { data: result, error: null };
      } catch (error) {
        return {
          data: null,
          error: error instanceof Error ? error.message : 'Sign in failed'
        };
      }
    },

    signOut: async (headers: Headers) => {
      try {
        const result = await auth.api.signOut({
          headers,
          asResponse: true
        });
        return { data: result, error: null };
      } catch (error) {
        return {
          data: null,
          error: error instanceof Error ? error.message : 'Sign out failed'
        };
      }
    },

    getSession: async (headers: Headers) => {
      try {
        const session = await auth.api.getSession({
          headers
        });
        return {
          data: session as { user: AuthUser; session: AuthSession } | null,
          error: null
        };
      } catch (error) {
        return {
          data: null,
          error: error instanceof Error ? error.message : 'Failed to get session'
        };
      }
    },

    // Utility methods
    verifySession: async (headers: Headers) => {
      const session = await auth.api.getSession({ headers });
      return session !== null;
    },

    requireAuth: async (headers: Headers) => {
      const session = await auth.api.getSession({ headers });
      if (!session) {
        throw new Error('Authentication required');
      }
      return session as { user: AuthUser; session: AuthSession };
    }
  };
}

export type AuthServer = ReturnType<typeof createAuthServer>;
