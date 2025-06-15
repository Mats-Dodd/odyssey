// Types
export type {
  AuthUser,
  AuthSession,
  AuthState,
  SignUpData,
  SignInData,
  AuthCallbacks,
  AuthConfig
} from './types.js';

// Server-side exports
export { createAuthServer, type AuthServer, type AuthServerConfig } from './server.js';

// Client-side exports
export {
  createAuthClientInstance,
  authState,
  user,
  session,
  isAuthenticated,
  isLoading,
  authError,
  type AuthClient
} from './client.js';

// Svelte-specific exports
export { createSvelteAuthStores, requireAuth, createSessionGuard } from './svelte.js';
