import { os } from '@orpc/server';
import type { Context, AuthenticatedContext } from '../types/context.js';

// Authentication errors
export class AuthenticationError extends Error {
  constructor(message = 'Authentication required') {
    super(message);
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends Error {
  constructor(message = 'Insufficient permissions') {
    super(message);
    this.name = 'AuthorizationError';
  }
}

/**
 * Middleware that requires authentication
 * Throws AuthenticationError if user is not authenticated
 */
export const requireAuth = os.middleware(({ context, next }) => {
  const ctx = context as Context;

  // Check if user and session exist in context
  if (!('user' in ctx) || !('session' in ctx) || !ctx.user || !ctx.session) {
    throw new AuthenticationError('Authentication required');
  }

  // Check if session is expired
  const now = new Date();
  const sessionExpiry = new Date(ctx.session.expiresAt);

  if (now > sessionExpiry) {
    throw new AuthenticationError('Session expired');
  }

  // Return authenticated context
  const authContext: AuthenticatedContext = {
    ...ctx,
    isAuthenticated: true as const,
    user: ctx.user,
    session: ctx.session
  };

  return next({ context: authContext });
});

/**
 * Middleware that allows optional authentication
 * Context may or may not have user/session
 */
export const optionalAuth = os.middleware(({ context, next }) => {
  // Pass through the context as-is
  return next({ context: context as Context });
});

/**
 * Middleware that requires the user to own a resource
 * Use after requireAuth to ensure the authenticated user owns the resource
 * Note: Ownership validation must be done in handlers since middleware can't access input
 */
export const requireOwnership = (_getUserId: (input: unknown) => string) =>
  os.middleware(({ context, next }) => {
    const ctx = context as AuthenticatedContext;

    if (!ctx.user) {
      throw new AuthorizationError('Authentication required for ownership check');
    }

    // Note: We can't access input here in middleware
    // This will need to be checked in the handler instead
    return next({ context: ctx });
  });

/**
 * Middleware for admin-only routes
 * Checks if user has admin role (if implemented in the future)
 */
export const requireAdmin = os.middleware(({ context }) => {
  const _ctx = context as AuthenticatedContext;

  // For now, we don't have roles implemented
  // This is a placeholder for future role-based access control
  throw new AuthorizationError('Admin access required');
});

/**
 * Rate limiting middleware (placeholder)
 * In a real implementation, this would check against a rate limit store
 */
export const rateLimit = (_maxRequests: number, _windowMs: number) =>
  os.middleware(({ context, next }) => {
    // Placeholder for rate limiting logic
    // In a real implementation, you'd check against Redis or similar
    return next({ context: context as Context });
  });

/**
 * Request validation middleware
 * Validates that required fields are present in the request
 */
export const validateRequest = os.middleware(({ context, next }) => {
  const ctx = context as Context;

  // Basic request validation
  if (!ctx.req) {
    throw new Error('Request object is required');
  }

  return next({ context: ctx });
});
