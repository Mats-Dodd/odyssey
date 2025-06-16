# Task 33: Complete Auth Wire-Up Integration

## Overview

Complete the final integration steps for the auth wire-up implementation to transform the basic auth system into a production-ready, fully-featured authentication solution with reactive data fetching, server-side protection, and comprehensive testing.

## Prerequisites

**✅ COMPLETED:** Basic auth wire-up implementation with:
- Package dependencies updated (`@typyst/api`, `@typyst/queries`)
- Svelte auth integration (`auth.svelte.ts`) 
- UI package component integration (AuthInput, AuthError, AuthForm)
- Auth pages refactored (sign-in, sign-up, sign-out)
- Developer utilities created (`utils/auth.ts`, `hooks/auth.ts`)

## Context

The current implementation provides a solid foundation but requires these final steps to become production-ready:

1. **Environment Compatibility**: Node.js v20+ required for full package compatibility
2. **Reactive Data Layer**: QueryProvider integration for efficient data fetching
3. **Security**: Server-side route protection to prevent unauthorized access
4. **Reliability**: Comprehensive testing to ensure auth flows work correctly
5. **Enhancement**: Advanced auth features for better user experience

## Goals

1. Resolve Node.js version compatibility for full package ecosystem
2. Integrate QueryProvider for reactive auth state and data management
3. Implement server-side route protection for secure access control
4. Create comprehensive test coverage for all auth flows
5. Add advanced auth features for production readiness

## Phase 1: Environment Update & Compatibility

### Node.js Version Update

**Current Issue:**
```bash
Error: Your Node version is incompatible with "/@simplewebauthn/server/13.1.1".
Expected version: >=20.0.0
Got: v18.20.5
```

**Resolution Steps:**

1. **Update Node.js Environment:**
   ```bash
   # Option 1: Using nvm (recommended)
   nvm install 20
   nvm use 20
   nvm alias default 20
   
   # Option 2: Using official installer
   # Download from nodejs.org and install v20.x LTS
   
   # Verify installation
   node --version  # Should show v20.x.x
   npm --version   # Should show compatible npm version
   ```

2. **Reinstall Dependencies:**
   ```bash
   # Clean install with new Node version
   rm -rf node_modules package-lock.json
   pnpm install
   
   # Verify auth package builds correctly
   cd packages/auth && pnpm build
   cd packages/queries && pnpm build
   ```

3. **Verify Package Compatibility:**
   ```bash
   # Test dev server starts without errors
   cd apps/app && pnpm dev
   
   # Should see:
   # ✓ VITE ready in XXXms
   # ➜ Local: http://localhost:5173/
   ```

**Success Criteria:**
- [ ] Node.js v20+ installed and active
- [ ] All packages install without compatibility errors
- [ ] Development server starts without dependency scan failures
- [ ] All workspace packages build successfully

## Phase 2: QueryProvider Integration

### Enable QueryProvider in Layout

**File: `apps/app/src/routes/+layout.svelte`**

**Current State (commented out):**
```typescript
// TODO: Add QueryProvider when Node.js version is updated
// import { QueryProvider } from '@typyst/queries';
```

**Updated Implementation:**
```typescript
import { QueryProvider } from '@typyst/queries';
import { authState, user } from '$lib/auth.svelte';

// API options for query provider
$: apiOptions = { 
  baseUrl: '/api/rpc',
  headers: $user ? { 'Authorization': `Bearer ${$user.sessionToken}` } : {}
};

// Wrap main content with QueryProvider
{#if $device.isDesktop}
  <QueryProvider {apiOptions} user={$user}>
    <Command />
    <ModeWatcher />
    <Header />
    <Sidebar />
    <main class="flex min-h-screen w-full items-center justify-center">
      <slot />
    </main>
    <Footer />
  </QueryProvider>
{:else}
  <!-- Mobile message remains unchanged -->
{/if}
```

### Update Auth Hooks for Real API Integration

**File: `apps/app/src/lib/hooks/auth.ts`**

**Replace placeholder implementations:**
```typescript
// Remove placeholder implementations and enable real hooks
export { 
  useSession, 
  useUser, 
  useLogin, 
  useLogout, 
  useRegister 
} from '@typyst/queries/hooks';

// Add app-specific auth utilities
export function useAuthState() {
  const session = useSession();
  const user = useUser();
  
  return {
    isLoading: session.isLoading || user.isLoading,
    isAuthenticated: !!user.data,
    user: user.data,
    session: session.data,
    error: session.error || user.error
  };
}

export function useRequireAuth() {
  const { isAuthenticated, isLoading } = useAuthState();
  const { redirectToSignIn } = useAuthUtils();
  
  if (!isLoading && !isAuthenticated) {
    redirectToSignIn();
  }
  
  return { isAuthenticated, isLoading };
}
```

**Success Criteria:**
- [ ] QueryProvider wraps entire app without errors
- [ ] Auth state is reactive across all components
- [ ] API calls use proper authentication headers
- [ ] Query hooks work with real auth data

## Phase 3: Server-Side Route Protection

### Implement Auth Server Utilities

**File: `apps/app/src/lib/server/auth.ts`**
```typescript
import type { RequestEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { verifySession } from '$lib/auth';

export async function requireAuth(event: RequestEvent) {
  const sessionCookie = event.cookies.get('better-auth.session_token');
  
  if (!sessionCookie) {
    throw redirect(302, `/auth/sign-in?redirectTo=${event.url.pathname}`);
  }
  
  try {
    const session = await verifySession(sessionCookie);
    if (!session.user) {
      throw redirect(302, `/auth/sign-in?redirectTo=${event.url.pathname}`);
    }
    
    return session;
  } catch (error) {
    // Clear invalid session cookie
    event.cookies.delete('better-auth.session_token', { path: '/' });
    throw redirect(302, `/auth/sign-in?redirectTo=${event.url.pathname}`);
  }
}

export async function requireRole(event: RequestEvent, requiredRole: string) {
  const session = await requireAuth(event);
  
  // Extend this based on your role system
  if (session.user.role !== requiredRole) {
    throw redirect(403, '/unauthorized');
  }
  
  return session;
}

export function createAuthGuard() {
  return {
    requireAuth,
    requireRole,
    optionalAuth: async (event: RequestEvent) => {
      const sessionCookie = event.cookies.get('better-auth.session_token');
      if (!sessionCookie) return null;
      
      try {
        return await verifySession(sessionCookie);
      } catch {
        return null;
      }
    }
  };
}
```

### Protect Routes with Server-Side Guards

**Example: `apps/app/src/routes/notes/+layout.server.ts`**
```typescript
import { requireAuth } from '$lib/server/auth';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
  const session = await requireAuth(event);
  
  return {
    user: session.user,
    session: session.session
  };
};
```

**Example: `apps/app/src/routes/admin/+page.server.ts`**
```typescript
import { requireRole } from '$lib/server/auth';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const session = await requireRole(event, 'admin');
  
  return {
    user: session.user
  };
};
```

### Create Protected Route Layout

**File: `apps/app/src/routes/(protected)/+layout.server.ts`**
```typescript
import { requireAuth } from '$lib/server/auth';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
  // This runs for all routes in (protected) group
  const session = await requireAuth(event);
  
  return {
    user: session.user,
    session: session.session,
    isAuthenticated: true
  };
};
```

**Reorganize Protected Routes:**
```
src/routes/
├── (protected)/
│   ├── +layout.server.ts      # Auth guard for all protected routes
│   ├── +layout.svelte         # Protected route layout
│   ├── notes/                 # Move existing notes routes here
│   ├── tasks/                 # Move existing tasks routes here
│   └── daily/                 # Move existing daily routes here
├── auth/                      # Public auth routes
│   ├── sign-in/
│   ├── sign-up/
│   └── sign-out/
└── +page.svelte              # Public landing page
```

**Success Criteria:**
- [ ] Protected routes require authentication on server-side
- [ ] Unauthorized access redirects to sign-in with return URL
- [ ] Invalid sessions are cleared and redirected
- [ ] Role-based protection works correctly
- [ ] No flash of protected content for unauthenticated users

## Phase 4: Comprehensive Testing

### Manual Testing Checklist

**Auth Flow Testing:**
```markdown
Authentication Flows:
□ Sign up with valid email/password
  - Form validation works
  - Success redirects to intended page
  - User session is created
  - Database record is created

□ Sign up with invalid data
  - Invalid email format shows error
  - Weak password shows error
  - Missing fields show error
  - Duplicate email shows error

□ Sign in with valid credentials
  - Success redirects to intended page
  - User session is restored
  - Auth state updates across app

□ Sign in with invalid credentials
  - Wrong password shows error
  - Non-existent email shows error
  - Empty fields show validation error

□ Sign out functionality
  - Clears session on server
  - Redirects to public page
  - Auth state updates across app
  - Protected routes become inaccessible

□ Session persistence
  - Refresh page maintains auth state
  - Close/reopen browser maintains session
  - Session expires correctly after timeout
```

**Route Protection Testing:**
```markdown
Server-Side Protection:
□ Protected routes require authentication
  - Direct URL access redirects to sign-in
  - Sign-in redirects back to intended page
  - No protected content visible before auth

□ Authentication state changes
  - Sign in enables access to protected routes
  - Sign out disables access to protected routes
  - Invalid session clears and redirects

□ Role-based protection (if implemented)
  - Admin routes require admin role
  - User routes accessible to all authenticated users
  - Unauthorized role access shows 403 page
```

**UI Component Testing:**
```markdown
Component Functionality:
□ AuthInput component
  - Shows validation errors correctly
  - Required field indicators work
  - Error styling applies properly
  - Focus states work correctly

□ AuthError component
  - Displays different error types
  - Local and server errors both show
  - Dark mode styling works
  - Error clears when resolved

□ AuthForm component
  - Layout is responsive
  - Alternative links work correctly
  - Form submission prevents default
  - Loading states disable interactions

□ Loading states
  - Button shows loading during auth operations
  - Form fields are disabled during submission
  - Loading indicators are visible
  - Success states clear loading
```

**Integration Testing:**
```markdown
QueryProvider Integration:
□ Auth state updates trigger query refetch
  - Sign in enables authenticated queries
  - Sign out disables authenticated queries
  - Query cache invalidates on auth change

□ API authentication
  - Requests include auth headers when authenticated
  - Requests work without headers when unauthenticated
  - Token refresh works automatically
  - Failed auth requests redirect to sign-in
```

### Automated Testing Setup

**File: `apps/app/src/lib/test-utils/auth.ts`**
```typescript
import { render } from '@testing-library/svelte';
import AuthTestProvider from './AuthTestProvider.svelte';
import type { AuthUser } from '@typyst/auth';

export function renderWithAuth(
  component: any, 
  props: any = {}, 
  authState: { user: AuthUser | null; isLoading: boolean } = { user: null, isLoading: false }
) {
  return render(AuthTestProvider, {
    component,
    props,
    authState
  });
}

export const mockUser: AuthUser = {
  id: 'test-user-id',
  email: 'test@example.com',
  name: 'Test User',
  emailVerified: true,
  createdAt: new Date(),
  updatedAt: new Date()
};

export const mockSession = {
  id: 'test-session-id',
  userId: 'test-user-id',
  expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours
  token: 'test-session-token'
};
```

**Success Criteria:**
- [ ] All manual tests pass consistently
- [ ] Edge cases are handled gracefully
- [ ] Error messages are user-friendly
- [ ] Loading states provide good UX
- [ ] Component tests cover all auth scenarios

## Phase 5: Advanced Auth Features

### Email Verification

**File: `apps/app/src/routes/auth/verify-email/+page.svelte`**
```typescript
<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { verifyEmail } from '$lib/auth.svelte';
  import AuthForm from '$lib/components/auth/AuthForm.svelte';
  import AuthError from '$lib/components/auth/AuthError.svelte';
  import { Button } from '@typyst/ui/components/button';

  let isVerifying = true;
  let verificationSuccess = false;
  let error = '';

  $: token = $page.url.searchParams.get('token');

  onMount(async () => {
    if (!token) {
      error = 'Invalid verification link';
      isVerifying = false;
      return;
    }

    try {
      await verifyEmail({ token });
      verificationSuccess = true;
    } catch (err) {
      error = err instanceof Error ? err.message : 'Verification failed';
    } finally {
      isVerifying = false;
    }
  });
</script>

<AuthForm title="Email Verification">
  {#if isVerifying}
    <div class="text-center">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
      <p>Verifying your email...</p>
    </div>
  {:else if verificationSuccess}
    <div class="text-center space-y-4">
      <div class="text-green-600 text-4xl mb-4">✓</div>
      <h2 class="text-xl font-semibold">Email Verified!</h2>
      <p class="text-muted-foreground">Your email has been successfully verified.</p>
      <Button href="/auth/sign-in" class="w-full">
        Continue to Sign In
      </Button>
    </div>
  {:else}
    <div class="space-y-4">
      <AuthError {error} />
      <Button href="/auth/sign-up" class="w-full">
        Back to Sign Up
      </Button>
    </div>
  {/if}
</AuthForm>
```

### Password Reset Flow

**File: `apps/app/src/routes/auth/reset-password/+page.svelte`**
```typescript
<script lang="ts">
  import { page } from '$app/stores';
  import { resetPassword, confirmPasswordReset } from '$lib/auth.svelte';
  import AuthForm from '$lib/components/auth/AuthForm.svelte';
  import AuthInput from '$lib/components/auth/AuthInput.svelte';
  import AuthError from '$lib/components/auth/AuthError.svelte';
  import { Button } from '@typyst/ui/components/button';

  let email = '';
  let newPassword = '';
  let confirmPassword = '';
  let isLoading = false;
  let error = '';
  let success = false;

  $: token = $page.url.searchParams.get('token');
  $: isResetMode = !!token; // true if we have a token (reset), false if requesting reset

  async function handleSubmit() {
    error = '';
    isLoading = true;

    try {
      if (isResetMode) {
        if (newPassword !== confirmPassword) {
          error = 'Passwords do not match';
          return;
        }
        
        await confirmPasswordReset({ token, newPassword });
        success = true;
      } else {
        if (!email) {
          error = 'Email is required';
          return;
        }
        
        await resetPassword({ email });
        success = true;
      }
    } catch (err) {
      error = err instanceof Error ? err.message : 'Something went wrong';
    } finally {
      isLoading = false;
    }
  }
</script>

<AuthForm 
  title={isResetMode ? 'Reset Password' : 'Forgot Password'}
  subtitle={isResetMode ? 'Enter your new password' : 'Enter your email to reset password'}
>
  {#if success}
    <div class="text-center space-y-4">
      <div class="text-green-600 text-4xl mb-4">✓</div>
      <h2 class="text-xl font-semibold">
        {isResetMode ? 'Password Updated!' : 'Reset Link Sent!'}
      </h2>
      <p class="text-muted-foreground">
        {isResetMode 
          ? 'Your password has been successfully updated.' 
          : 'Check your email for the reset link.'}
      </p>
      <Button href="/auth/sign-in" class="w-full">
        Continue to Sign In
      </Button>
    </div>
  {:else}
    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
      {#if isResetMode}
        <AuthInput
          type="password"
          bind:value={newPassword}
          label="New Password"
          placeholder="Enter new password"
          required
        />
        
        <AuthInput
          type="password"
          bind:value={confirmPassword}
          label="Confirm Password"
          placeholder="Confirm new password"
          required
        />
      {:else}
        <AuthInput
          type="email"
          bind:value={email}
          label="Email"
          placeholder="Enter your email"
          required
        />
      {/if}

      <AuthError {error} />

      <Button type="submit" class="w-full" disabled={isLoading}>
        {isLoading 
          ? (isResetMode ? 'Updating...' : 'Sending...') 
          : (isResetMode ? 'Update Password' : 'Send Reset Link')}
      </Button>
    </form>
  {/if}
</AuthForm>
```

### Session Management

**File: `apps/app/src/routes/(protected)/settings/sessions/+page.svelte`**
```typescript
<script lang="ts">
  import { getUserSessions, revokeSession } from '$lib/auth.svelte';
  import { Button } from '@typyst/ui/components/button';

  const sessions = getUserSessions();

  async function handleRevokeSession(sessionId: string) {
    if (confirm('Are you sure you want to revoke this session?')) {
      await revokeSession({ sessionId });
      // Refresh sessions list
      sessions.refetch();
    }
  }
</script>

<div class="space-y-6">
  <h1 class="text-2xl font-bold">Active Sessions</h1>
  
  {#if $sessions.isLoading}
    <div>Loading sessions...</div>
  {:else if $sessions.error}
    <div class="text-red-600">Error loading sessions: {$sessions.error.message}</div>
  {:else if $sessions.data}
    <div class="space-y-4">
      {#each $sessions.data as session}
        <div class="border rounded-lg p-4 space-y-2">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-semibold">
                {session.userAgent ? session.userAgent.split(' ')[0] : 'Unknown Device'}
              </h3>
              <p class="text-sm text-muted-foreground">
                IP: {session.ipAddress || 'Unknown'}
              </p>
              <p class="text-sm text-muted-foreground">
                Last active: {new Date(session.updatedAt).toLocaleString()}
              </p>
            </div>
            
            {#if session.isCurrent}
              <span class="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                Current Session
              </span>
            {:else}
              <Button 
                variant="destructive" 
                size="sm"
                on:click={() => handleRevokeSession(session.id)}
              >
                Revoke
              </Button>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
```

**Success Criteria:**
- [ ] Email verification flow works end-to-end
- [ ] Password reset emails are sent and processed
- [ ] Session management allows viewing and revoking sessions
- [ ] Two-factor authentication setup (if implemented)
- [ ] Social sign-in integration (if implemented)

## Phase 6: Performance & Production Optimization

### Auth Performance Monitoring

**File: `apps/app/src/lib/utils/auth-analytics.ts`**
```typescript
export function trackAuthEvent(event: string, data?: Record<string, any>) {
  // Analytics integration for auth events
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.track(`Auth: ${event}`, {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      ...data
    });
  }
}

export function trackAuthPerformance(operation: string, duration: number) {
  // Performance monitoring for auth operations
  if (typeof window !== 'undefined' && window.performance) {
    window.performance.mark(`auth-${operation}-end`);
    console.log(`Auth ${operation} took ${duration}ms`);
  }
}
```

### Security Headers & CSP

**File: `apps/app/src/hooks.server.ts`**
```typescript
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  
  // Security headers for auth
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  );
  
  return response;
};
```

## Success Criteria

### Overall Implementation Success
- [ ] Node.js v20+ environment setup and working
- [ ] QueryProvider integrated and functional
- [ ] Server-side route protection implemented
- [ ] All manual tests pass consistently
- [ ] Advanced auth features working
- [ ] Performance optimizations in place

### User Experience Success
- [ ] Smooth sign-up/sign-in flows with clear feedback
- [ ] Protected routes redirect gracefully
- [ ] Loading states provide good UX
- [ ] Error messages are helpful and actionable
- [ ] Email verification and password reset work reliably

### Developer Experience Success
- [ ] Auth utilities are easy to use and well-documented
- [ ] TypeScript integration provides full type safety
- [ ] Component library integration is seamless
- [ ] Testing utilities support easy test creation
- [ ] Code is maintainable and follows patterns

### Production Readiness
- [ ] Security best practices implemented
- [ ] Performance monitoring in place
- [ ] Error tracking and logging configured
- [ ] Session management is secure and scalable
- [ ] Email delivery is reliable

## Timeline Estimate

- **Phase 1 (Environment)**: 1-2 hours
- **Phase 2 (QueryProvider)**: 2-3 hours  
- **Phase 3 (Route Protection)**: 4-6 hours
- **Phase 4 (Testing)**: 6-8 hours
- **Phase 5 (Advanced Features)**: 8-12 hours
- **Phase 6 (Production Optimization)**: 2-4 hours

**Total Estimated Time**: 23-35 hours

## Notes

This task completes the auth wire-up by addressing all production readiness concerns. The implementation will provide:

1. **Secure Authentication**: Server-side protection prevents unauthorized access
2. **Great User Experience**: Smooth flows with proper feedback and error handling  
3. **Developer Productivity**: Easy-to-use utilities and full TypeScript integration
4. **Production Ready**: Performance monitoring, security headers, and comprehensive testing
5. **Scalable Architecture**: Foundation for advanced features and future growth

The completed implementation will serve as a robust authentication foundation that can scale with the application's growth and provide a great experience for both users and developers. 