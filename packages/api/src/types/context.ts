import type { User, Session } from '@typyst/db';
import type { createSupabaseDatabase } from '@typyst/db';

export interface BaseContext {
  req: Request;
  res?: Response;
  db: ReturnType<typeof createSupabaseDatabase>;
}

export interface AuthenticatedContext extends BaseContext {
  user: User;
  session: Session;
  isAuthenticated: true;
}

export interface UnauthenticatedContext extends BaseContext {
  user: null;
  session: null;
  isAuthenticated: false;
}

export type Context = AuthenticatedContext | UnauthenticatedContext;

// Helper type guards
export function isAuthenticated(ctx: Context): ctx is AuthenticatedContext {
  return ctx.isAuthenticated === true;
}

export function requireAuth(ctx: Context): asserts ctx is AuthenticatedContext {
  if (!isAuthenticated(ctx)) {
    throw new Error('Authentication required');
  }
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
    nextCursor?: string;
  };
}
