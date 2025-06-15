// Client-only exports
export type {
  AuthUser,
  AuthSession,
  AuthState,
  SignUpData,
  SignInData,
  AuthCallbacks,
  AuthConfig
} from './types.js';

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

export { createSvelteAuthStores, requireAuth, createSessionGuard } from './svelte.js';
