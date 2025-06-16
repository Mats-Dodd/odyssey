import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
import { queryKeys } from '../lib/query-keys.js';
import { getApiClientContext, setUserContext } from '../lib/context.js';
import type { User } from '../lib/context.js';

export function useSession() {
  const apiClient = getApiClientContext();

  return createQuery({
    queryKey: queryKeys.auth.session(),
    queryFn: async () => {
      // Direct oRPC call - fully type-safe!
      return await apiClient.auth.getSession();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: () => {
      // Don't retry auth failures
      return false;
    }
  });
}

export function useUser() {
  const apiClient = getApiClientContext();

  return createQuery({
    queryKey: queryKeys.auth.user(),
    queryFn: async () => {
      return (await apiClient.auth.getUser()) as User;
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: () => {
      // Don't retry auth failures
      return false;
    }
  });
}

export function useLogin() {
  const queryClient = useQueryClient();
  const apiClient = getApiClientContext();

  return createMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      return await apiClient.auth.signIn(credentials);
    },

    onSuccess: (response: unknown) => {
      const authResponse = response as { session?: unknown; user?: User };

      // Update session cache
      queryClient.setQueryData(queryKeys.auth.session(), authResponse.session);

      // Update user cache if user data is included
      if (authResponse.user) {
        queryClient.setQueryData(queryKeys.auth.user(), authResponse.user);
        setUserContext(authResponse.user);
      }

      // Invalidate all queries to refetch with authenticated context
      queryClient.invalidateQueries();
    },

    onError: () => {
      // Clear any stale auth data on login failure
      queryClient.removeQueries({ queryKey: queryKeys.auth.all() });
      setUserContext(null);
    }
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  const apiClient = getApiClientContext();

  return createMutation({
    mutationFn: async () => {
      return await apiClient.auth.signOut();
    },

    onSuccess: () => {
      // Clear all cached data on logout
      queryClient.clear();
      setUserContext(null);
    },

    onError: () => {
      // Even if logout fails on server, clear local state
      queryClient.clear();
      setUserContext(null);
    }
  });
}

export function useRegister() {
  const queryClient = useQueryClient();
  const apiClient = getApiClientContext();

  return createMutation({
    mutationFn: async (userData: { email: string; password: string; name?: string }) => {
      return await apiClient.auth.signUp(userData);
    },

    onSuccess: (response: unknown) => {
      const authResponse = response as { session?: unknown; user?: User };

      // Update session cache
      queryClient.setQueryData(queryKeys.auth.session(), authResponse.session);

      // Update user cache
      if (authResponse.user) {
        queryClient.setQueryData(queryKeys.auth.user(), authResponse.user);
        setUserContext(authResponse.user);
      }

      // Invalidate all queries to refetch with authenticated context
      queryClient.invalidateQueries();
    },

    onError: () => {
      // Clear any stale auth data on registration failure
      queryClient.removeQueries({ queryKey: queryKeys.auth.all() });
      setUserContext(null);
    }
  });
}
