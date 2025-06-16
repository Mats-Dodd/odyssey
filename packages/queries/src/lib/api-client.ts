import type {
  ListCollectionsInput,
  GetCollectionInput,
  CreateCollection,
  UpdateCollectionInput,
  ListEntriesInput,
  GetEntryInput,
  SearchEntriesInput,
  CreateEntry,
  UpdateEntryInput,
  BulkDeleteEntriesInput,
  BulkMoveEntriesInput
} from '@typyst/api';

export interface ApiClientOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
  timeout?: number;
}

// Define proper API client types based on the router structure
interface AuthClient {
  getSession: () => Promise<{ user: unknown; session: unknown }>;
  getUser: () => Promise<unknown>;
  signIn: (data: { email: string; password: string }) => Promise<unknown>;
  signOut: () => Promise<{ success: boolean }>;
  signUp: (data: { email: string; password: string; name?: string }) => Promise<unknown>;
  updateProfile: (data: { name?: string; email?: string }) => Promise<unknown>;
  changePassword: (data: {
    currentPassword: string;
    newPassword: string;
  }) => Promise<{ success: boolean }>;
  forgotPassword: (data: { email: string }) => Promise<{ success: boolean; message: string }>;
  resetPassword: (data: { token: string; password: string }) => Promise<unknown>;
}

interface CollectionsClient {
  list: (data?: ListCollectionsInput) => Promise<unknown>;
  get: (data: GetCollectionInput) => Promise<unknown>;
  create: (data: CreateCollection) => Promise<unknown>;
  update: (data: UpdateCollectionInput) => Promise<unknown>;
  delete: (data: { path: string }) => Promise<{ success: boolean }>;
  getRecent: (data?: { limit?: number }) => Promise<unknown>;
}

interface EntriesClient {
  list: (data: ListEntriesInput) => Promise<unknown>;
  get: (data: GetEntryInput) => Promise<unknown>;
  create: (data: CreateEntry) => Promise<unknown>;
  update: (data: UpdateEntryInput) => Promise<unknown>;
  delete: (data: { path: string }) => Promise<{ success: boolean }>;
  search: (data: SearchEntriesInput) => Promise<unknown>;
  getTree: (data: { collectionPath: string; rootPath?: string }) => Promise<unknown>;
  bulkDelete: (data: BulkDeleteEntriesInput) => Promise<{ success: boolean }>;
  bulkMove: (data: BulkMoveEntriesInput) => Promise<{ success: boolean }>;
}

export interface ApiClient {
  auth: AuthClient;
  collections: CollectionsClient;
  entries: EntriesClient;
}

// Simple API client structure using unified RPC endpoint
export function createApiClient(options: ApiClientOptions = {}): ApiClient {
  const { baseUrl = '/api', headers = {}, timeout = 30000 } = options;

  const makeRequest = async (method: string, data?: unknown) => {
    const response = await fetch(`${baseUrl}/rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify({ method, params: data }),
      signal: AbortSignal.timeout(timeout)
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  };

  // Create the client object with proper typing
  return {
    auth: {
      getSession: () =>
        makeRequest('auth.getSession') as Promise<{ user: unknown; session: unknown }>,
      getUser: () => makeRequest('auth.getUser'),
      signIn: (data: { email: string; password: string }) => makeRequest('auth.signIn', data),
      signOut: () => makeRequest('auth.signOut') as Promise<{ success: boolean }>,
      signUp: (data: { email: string; password: string; name?: string }) =>
        makeRequest('auth.signUp', data),
      updateProfile: (data: { name?: string; email?: string }) =>
        makeRequest('auth.updateProfile', data),
      changePassword: (data: { currentPassword: string; newPassword: string }) =>
        makeRequest('auth.changePassword', data) as Promise<{ success: boolean }>,
      forgotPassword: (data: { email: string }) =>
        makeRequest('auth.forgotPassword', data) as Promise<{ success: boolean; message: string }>,
      resetPassword: (data: { token: string; password: string }) =>
        makeRequest('auth.resetPassword', data)
    },
    collections: {
      list: (data?: ListCollectionsInput) => makeRequest('collections.list', data),
      get: (data: GetCollectionInput) => makeRequest('collections.get', data),
      create: (data: CreateCollection) => makeRequest('collections.create', data),
      update: (data: UpdateCollectionInput) => makeRequest('collections.update', data),
      delete: (data: { path: string }) =>
        makeRequest('collections.delete', data) as Promise<{ success: boolean }>,
      getRecent: (data?: { limit?: number }) => makeRequest('collections.getRecent', data)
    },
    entries: {
      list: (data: ListEntriesInput) => makeRequest('entries.list', data),
      get: (data: GetEntryInput) => makeRequest('entries.get', data),
      create: (data: CreateEntry) => makeRequest('entries.create', data),
      update: (data: UpdateEntryInput) => makeRequest('entries.update', data),
      delete: (data: { path: string }) =>
        makeRequest('entries.delete', data) as Promise<{ success: boolean }>,
      search: (data: SearchEntriesInput) => makeRequest('entries.search', data),
      getTree: (data: { collectionPath: string; rootPath?: string }) =>
        makeRequest('entries.getTree', data),
      bulkDelete: (data: BulkDeleteEntriesInput) =>
        makeRequest('entries.bulkDelete', data) as Promise<{ success: boolean }>,
      bulkMove: (data: BulkMoveEntriesInput) =>
        makeRequest('entries.bulkMove', data) as Promise<{ success: boolean }>
    }
  };
}

// Singleton instance for consistent usage
let apiClient: ApiClient | undefined;

export function getApiClient(): ApiClient {
  if (!apiClient) {
    apiClient = createApiClient();
  }
  return apiClient;
}
