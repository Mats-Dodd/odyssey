import { getContext, setContext } from 'svelte';
import type { ApiClient } from './api-client.js';

const API_CLIENT_KEY = Symbol('typyst-api-client');
const USER_CONTEXT_KEY = Symbol('typyst-user');

export interface User {
  id: string;
  name?: string;
  email?: string;
}

export function setApiClientContext(client: ApiClient): void {
  setContext(API_CLIENT_KEY, client);
}

export function getApiClientContext(): ApiClient {
  const client = getContext<ApiClient>(API_CLIENT_KEY);
  if (!client) {
    throw new Error(
      'API client context not found. Did you call setApiClientContext() in a parent component?'
    );
  }
  return client;
}

export function setUserContext(user: User | null): void {
  setContext(USER_CONTEXT_KEY, user);
}

export function getUserContext(): User {
  const user = getContext<User | null>(USER_CONTEXT_KEY);
  if (!user) {
    throw new Error('User context not found. User must be authenticated to access this feature.');
  }
  return user;
}

// Helper for components to check if context is available
export function hasApiClientContext(): boolean {
  try {
    getApiClientContext();
    return true;
  } catch {
    return false;
  }
}

export function hasUserContext(): boolean {
  try {
    getUserContext();
    return true;
  } catch {
    return false;
  }
}
