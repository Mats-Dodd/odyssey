import type { Session, User } from 'better-auth/types';

export interface AuthUser extends User {
  id: string;
  email: string;
  name: string;
  image?: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthSession extends Session {
  id: string;
  userId: string;
  expiresAt: Date;
  token: string;
  ipAddress?: string;
  userAgent?: string;
}

// Re-export database types for convenience
export type { User as DatabaseUser, Session as DatabaseSession } from '@typyst/db';

export interface SignUpData {
  email: string;
  password: string;
  name: string;
  image?: string;
  callbackURL?: string;
}

export interface SignInData {
  email: string;
  password: string;
  callbackURL?: string;
  rememberMe?: boolean;
}

export interface AuthState {
  user: AuthUser | null;
  session: AuthSession | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthResponse {
  user: AuthUser;
  session: AuthSession;
}

export interface AuthCallbacks {
  onRequest?: () => void;
  onSuccess?: (ctx?: { data: AuthResponse }) => void;
  onError?: (ctx: { error: { message: string } }) => void;
}

export interface AuthConfig {
  baseURL?: string;
  basePath?: string;
}
