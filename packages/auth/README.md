# @typyst/auth

A TypeScript-first authentication package for the Typyst ecosystem, built on top of Better Auth with Svelte integration.

## Features

- 🔐 Email/password authentication
- 🔄 Session management with automatic refresh
- 📱 Reactive Svelte stores
- 🛡️ TypeScript-first with full type safety
- 🌐 Server-side and client-side support
- 🎯 SvelteKit integration helpers

## Installation

```bash
pnpm add @typyst/auth
```

## Usage

### Server-side Setup

```typescript
// src/lib/auth.server.ts
import { createAuthServer } from '@typyst/auth/server';

export const authServer = createAuthServer({
  database: {
    provider: 'sqlite',
    url: 'sqlite://./auth.db'
  },
  secret: process.env.AUTH_SECRET!,
  baseURL: process.env.AUTH_BASE_URL || 'http://localhost:5173',
  trustedOrigins: ['http://localhost:5173'],
});

export const { auth } = authServer;
```

### Client-side Setup

```typescript
// src/lib/auth.client.ts
import { createAuthClientInstance } from '@typyst/auth/client';

export const authClient = createAuthClientInstance({
  baseURL: 'http://localhost:5173',
  basePath: '/api/auth'
});
```

### Svelte Integration

```typescript
// src/lib/auth.svelte.ts
import { createSvelteAuthStores } from '@typyst/auth/client';
import { authClient } from './auth.client.js';

export const auth = createSvelteAuthStores(authClient);
```

### Using in Svelte Components

```svelte
<!-- src/routes/login/+page.svelte -->
<script lang="ts">
  import { auth } from '$lib/auth.svelte.js';
  
  let email = '';
  let password = '';
  
  async function handleSignIn() {
    await auth.signIn({ email, password }, {
      onSuccess: () => {
        // Redirect to dashboard
        window.location.href = '/dashboard';
      },
      onError: (error) => {
        console.error('Sign in failed:', error.message);
      }
    });
  }
</script>

<form on:submit|preventDefault={handleSignIn}>
  <input bind:value={email} type="email" placeholder="Email" required />
  <input bind:value={password} type="password" placeholder="Password" required />
  <button type="submit" disabled={$auth.isLoading}>
    {$auth.isLoading ? 'Signing in...' : 'Sign In'}
  </button>
</form>

{#if $auth.error}
  <p class="error">{$auth.error}</p>
{/if}
```

### Protected Routes

```svelte
<!-- src/routes/dashboard/+page.svelte -->
<script lang="ts">
  import { auth } from '$lib/auth.svelte.js';
  import { goto } from '$app/navigation';
  
  // Redirect if not authenticated
  $: if (!$auth.isLoading && !$auth.isAuthenticated) {
    goto('/login');
  }
</script>

{#if $auth.isAuthenticated}
  <h1>Welcome, {$auth.user?.name}!</h1>
  <button on:click={() => auth.signOut()}>Sign Out</button>
{:else if $auth.isLoading}
  <p>Loading...</p>
{:else}
  <p>Redirecting to login...</p>
{/if}
```

### SvelteKit Load Function

```typescript
// src/routes/dashboard/+page.server.ts
import { authServer } from '$lib/auth.server.js';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
  const session = await authServer.getSession(request.headers);
  
  if (!session.data) {
    throw redirect(302, '/login');
  }
  
  return {
    user: session.data.user
  };
};
```

## API Reference

### Server API

#### `createAuthServer(config)`

Creates a server-side auth instance.

**Config:**
- `database`: Database configuration
- `secret`: Auth secret key
- `baseURL`: Base URL for the application
- `trustedOrigins`: Array of trusted origins
- `session`: Session configuration (optional)

**Methods:**
- `signUp(data)`: Create a new user account
- `signIn(data)`: Sign in a user
- `signOut(headers)`: Sign out a user
- `getSession(headers)`: Get current session
- `verifySession(headers)`: Verify if session is valid
- `requireAuth(headers)`: Require authentication (throws if not authenticated)

### Client API

#### `createAuthClientInstance(config)`

Creates a client-side auth instance.

**Config:**
- `baseURL`: Base URL for API calls
- `basePath`: Base path for auth endpoints

**Methods:**
- `signUp(data, callbacks)`: Sign up a new user
- `signIn(data, callbacks)`: Sign in a user
- `signOut(callbacks)`: Sign out current user
- `getSession()`: Get current session
- `refreshSession()`: Refresh the current session

**Stores:**
- `authState`: Complete auth state
- `user`: Current user
- `session`: Current session
- `isAuthenticated`: Authentication status
- `isLoading`: Loading state
- `authError`: Current error

### Svelte Integration

#### `createSvelteAuthStores(authClient)`

Creates Svelte-compatible stores from an auth client.

#### `requireAuth(node, authClient)`

Svelte action for protecting routes.

#### `createSessionGuard(authClient)`

Utility for SvelteKit load functions.

## Types

All TypeScript types are exported from the main package:

```typescript
import type { 
  AuthUser, 
  AuthSession, 
  AuthState, 
  SignUpData, 
  SignInData 
} from '@typyst/auth';
```

## License

MIT 