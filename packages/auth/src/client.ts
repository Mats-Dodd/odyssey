import { createAuthClient } from 'better-auth/client';
import { atom, computed, type WritableAtom, type ReadableAtom } from 'nanostores';
import type {
  AuthUser,
  AuthSession,
  AuthState,
  AuthConfig,
  SignUpData,
  SignInData,
  AuthCallbacks
} from './types.js';

// Create auth stores using nanostores
export const authState: WritableAtom<AuthState> = atom<AuthState>({
  user: null,
  session: null,
  isLoading: true,
  error: null
});

// Computed stores for easier access
export const user: ReadableAtom<AuthUser | null> = computed(
  authState,
  (state: AuthState) => state.user
);
export const session: ReadableAtom<AuthSession | null> = computed(
  authState,
  (state: AuthState) => state.session
);
export const isAuthenticated: ReadableAtom<boolean> = computed(
  authState,
  (state: AuthState) => !!state.user
);
export const isLoading: ReadableAtom<boolean> = computed(
  authState,
  (state: AuthState) => state.isLoading
);
export const authError: ReadableAtom<string | null> = computed(
  authState,
  (state: AuthState) => state.error
);

export function createAuthClientInstance(config: AuthConfig = {}) {
  const client = createAuthClient({
    baseURL: config.baseURL || (typeof window !== 'undefined' ? window.location.origin : ''),
    basePath: config.basePath || '/api/auth'
  });

  // Initialize session on client creation
  let initialized = false;

  const initializeSession = async () => {
    if (initialized) return;
    initialized = true;

    try {
      authState.set({ ...authState.get(), isLoading: true, error: null });
      const { data: sessionData, error } = await client.getSession();

      if (error) {
        authState.set({
          user: null,
          session: null,
          isLoading: false,
          error: error.message || 'Failed to get session'
        });
      } else {
        authState.set({
          user: (sessionData?.user as AuthUser) || null,
          session: (sessionData?.session as AuthSession) || null,
          isLoading: false,
          error: null
        });
      }
    } catch (err) {
      authState.set({
        user: null,
        session: null,
        isLoading: false,
        error: err instanceof Error ? err.message : 'Failed to initialize session'
      });
    }
  };

  // Auto-initialize on client side
  if (typeof window !== 'undefined') {
    initializeSession();
  }

  return {
    // Core client methods
    signUp: async (data: SignUpData, callbacks?: AuthCallbacks) => {
      try {
        callbacks?.onRequest?.();
        authState.set({ ...authState.get(), isLoading: true, error: null });

        const result = await client.signUp.email(
          {
            email: data.email,
            password: data.password,
            name: data.name,
            image: data.image,
            callbackURL: data.callbackURL
          },
          {
            onRequest: callbacks?.onRequest,
            onSuccess: (ctx) => {
              authState.set({
                user: (ctx.data?.user as AuthUser) || null,
                session: (ctx.data?.session as AuthSession) || null,
                isLoading: false,
                error: null
              });
              callbacks?.onSuccess?.(ctx.data);
            },
            onError: (ctx) => {
              authState.set({
                ...authState.get(),
                isLoading: false,
                error: ctx.error.message
              });
              callbacks?.onError?.(ctx.error);
            }
          }
        );

        return result;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Sign up failed';
        authState.set({
          ...authState.get(),
          isLoading: false,
          error: errorMessage
        });
        callbacks?.onError?.({ error: { message: errorMessage } });
        return { data: null, error: { message: errorMessage } };
      }
    },

    signIn: async (data: SignInData, callbacks?: AuthCallbacks) => {
      try {
        callbacks?.onRequest?.();
        authState.set({ ...authState.get(), isLoading: true, error: null });

        const result = await client.signIn.email(
          {
            email: data.email,
            password: data.password,
            callbackURL: data.callbackURL,
            rememberMe: data.rememberMe
          },
          {
            onRequest: callbacks?.onRequest,
            onSuccess: (ctx) => {
              authState.set({
                user: (ctx.data?.user as AuthUser) || null,
                session: (ctx.data?.session as AuthSession) || null,
                isLoading: false,
                error: null
              });
              callbacks?.onSuccess?.(ctx.data);
            },
            onError: (ctx) => {
              authState.set({
                ...authState.get(),
                isLoading: false,
                error: ctx.error.message
              });
              callbacks?.onError?.(ctx.error);
            }
          }
        );

        return result;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Sign in failed';
        authState.set({
          ...authState.get(),
          isLoading: false,
          error: errorMessage
        });
        callbacks?.onError?.({ error: { message: errorMessage } });
        return { data: null, error: { message: errorMessage } };
      }
    },

    signOut: async (callbacks?: AuthCallbacks) => {
      try {
        callbacks?.onRequest?.();
        authState.set({ ...authState.get(), isLoading: true, error: null });

        const result = await client.signOut({
          fetchOptions: {
            onSuccess: () => {
              authState.set({
                user: null,
                session: null,
                isLoading: false,
                error: null
              });
              // Note: signOut doesn't return user/session data, so we'll make onSuccess optional for this case
            }
          }
        });

        return result;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Sign out failed';
        authState.set({
          ...authState.get(),
          isLoading: false,
          error: errorMessage
        });
        callbacks?.onError?.({ error: { message: errorMessage } });
        return { data: null, error: { message: errorMessage } };
      }
    },

    getSession: async () => {
      try {
        const { data, error } = await client.getSession();
        if (error) {
          return { data: null, error };
        }
        return {
          data: {
            user: (data?.user as AuthUser) || null,
            session: (data?.session as AuthSession) || null
          },
          error: null
        };
      } catch (error) {
        return {
          data: null,
          error: { message: error instanceof Error ? error.message : 'Failed to get session' }
        };
      }
    },

    refreshSession: async () => {
      await initializeSession();
    },

    // Store access
    stores: {
      authState,
      user,
      session,
      isAuthenticated,
      isLoading,
      authError
    },

    // Raw client access for advanced usage
    client
  };
}

export type AuthClient = ReturnType<typeof createAuthClientInstance>;
