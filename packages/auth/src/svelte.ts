import { readable, derived, type Readable } from 'svelte/store';
import type { AuthClient } from './client.js';
import type { AuthUser, AuthSession, AuthState } from './types.js';

/**
 * Creates Svelte-compatible stores from the auth client
 */
export function createSvelteAuthStores(authClient: AuthClient) {
  // Convert nanostores to Svelte stores
  const authState: Readable<AuthState> = readable(authClient.stores.authState.get(), (set) => {
    const unsubscribe = authClient.stores.authState.subscribe(set);
    return unsubscribe;
  });

  const user: Readable<AuthUser | null> = derived(authState, ($authState) => $authState.user);

  const session: Readable<AuthSession | null> = derived(
    authState,
    ($authState) => $authState.session
  );

  const isAuthenticated: Readable<boolean> = derived(authState, ($authState) => !!$authState.user);

  const isLoading: Readable<boolean> = derived(authState, ($authState) => $authState.isLoading);

  const error: Readable<string | null> = derived(authState, ($authState) => $authState.error);

  return {
    authState,
    user,
    session,
    isAuthenticated,
    isLoading,
    error,
    // Auth methods
    signUp: authClient.signUp,
    signIn: authClient.signIn,
    signOut: authClient.signOut,
    getSession: authClient.getSession,
    refreshSession: authClient.refreshSession
  };
}

/**
 * Svelte action for protecting routes
 */
export function requireAuth(node: HTMLElement, authClient: AuthClient) {
  const unsubscribe = authClient.stores.isAuthenticated.subscribe((isAuth) => {
    if (!isAuth && !authClient.stores.isLoading.get()) {
      // Dispatch custom event that can be handled by the component
      node.dispatchEvent(
        new CustomEvent('auth-required', {
          detail: { redirectTo: '/login' }
        })
      );
    }
  });

  return {
    destroy: unsubscribe
  };
}

/**
 * Utility function to create a session guard for SvelteKit load functions
 */
export function createSessionGuard(authClient: AuthClient) {
  return async () => {
    const { data: session } = await authClient.getSession();
    return {
      user: session?.user || null,
      session: session?.session || null,
      isAuthenticated: !!session?.user
    };
  };
}
