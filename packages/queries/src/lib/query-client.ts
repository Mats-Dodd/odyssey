import { QueryClient } from '@tanstack/svelte-query';

// Simple browser detection that works without SvelteKit
const browser =
  typeof globalThis !== 'undefined' &&
  'window' in globalThis &&
  typeof (globalThis as { window?: unknown }).window !== 'undefined';

export function createTypystQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 30, // 30 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true, // Refetch on mount for real API data
        refetchOnReconnect: true, // Refetch on reconnect for API
        retry: (failureCount, error) => {
          // Don't retry on client errors (4xx)
          if (error?.message?.includes('4')) return false;
          // Retry server errors (5xx) up to 3 times
          return failureCount < 3;
        },
        // Enable queries only in browser for SSR compatibility
        enabled: browser
      },
      mutations: {
        retry: (failureCount, error) => {
          // Don't retry client errors, but retry network issues
          if (error?.message?.includes('4')) return false;
          return failureCount < 2;
        }
      }
    }
  });
}

// Singleton instance for consistent usage
let queryClient: QueryClient | undefined;

export function getQueryClient(): QueryClient {
  if (!queryClient) {
    queryClient = createTypystQueryClient();
  }
  return queryClient;
}
