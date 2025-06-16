# Wire-Up Plan: Integrating Shared Packages for Auth

## Overview

This document outlines the plan to refactor the desktop app (`/apps/app`) to properly utilize the newly created shared packages for authentication functionality. We'll focus specifically on sign up/sign in flows while setting up the foundation for future data integration.

## Current State Analysis

### ✅ Already Working
- Basic auth setup using `@typyst/auth` package
- Server-side auth configuration in `src/lib/auth.ts`
- Client-side auth setup in `src/lib/auth-client.ts`
- Basic auth routes (`/auth/sign-in`, `/auth/sign-up`, `/auth/sign-out`)
- Using `@typyst/ui` Button component

### 🔄 Needs Refactoring
- Auth forms using native HTML inputs instead of UI package components
- Manual error handling instead of using the reactive stores from auth package
- Missing integration with queries package for reactive auth state
- No consistent error handling patterns
- Auth pages not using latest auth package patterns

### 📦 New Packages to Integrate
- `@typyst/ui` - Full component integration for forms
- `@typyst/auth` - Latest patterns and better Svelte integration  
- `@typyst/queries` - Reactive auth state management
- `@typyst/api` - Type-safe auth endpoints (future)

## Phase 1: Update Package Dependencies

### 1.1 Update package.json Dependencies

**File:** `apps/app/package.json`

**Actions:**
- Ensure latest versions of all workspace packages
- Add `@typyst/queries` as dependency
- Verify `@typyst/ui` and `@typyst/auth` are properly referenced

```json
{
  "dependencies": {
    "@typyst/auth": "workspace:^",
    "@typyst/ui": "workspace:^", 
    "@typyst/queries": "workspace:^",
    "@typyst/api": "workspace:^"
  }
}
```

## Phase 2: Refactor Auth Configuration

### 2.1 Update Server Auth Configuration

**File:** `apps/app/src/lib/auth.ts`

**Current Issues:**
- Basic setup is good but could use latest patterns from auth package

**Actions:**
- Review and update to use any new patterns from `@typyst/auth/server`
- Ensure proper TypeScript types are exported
- Add any missing configuration options

### 2.2 Update Client Auth Configuration  

**File:** `apps/app/src/lib/auth-client.ts`

**Current Issues:**
- Basic setup but missing some reactive store patterns

**Actions:**
- Update to use latest client patterns from auth package README
- Ensure all stores are properly exported
- Add any missing reactive stores for better UX

### 2.3 Create Svelte Auth Integration

**New File:** `apps/app/src/lib/auth.svelte.ts`

**Purpose:** 
- Create centralized Svelte-specific auth integration
- Implement patterns from auth package README
- Provide reactive stores for components

```typescript
// Pattern from @typyst/auth README
import { createSvelteAuthStores } from '@typyst/auth/client';
import { authClient } from './auth-client.js';

export const auth = createSvelteAuthStores(authClient);
```

## Phase 3: Integrate UI Package Components

### 3.1 Create Reusable Form Components

**New File:** `apps/app/src/lib/components/auth/AuthForm.svelte`

**Purpose:**
- Shared form layout for auth pages
- Consistent styling using UI package
- Proper error handling display

**Components to Use:**
- `@typyst/ui/components/input` - Replace native inputs
- `@typyst/ui/components/button` - Already using but ensure consistency
- `@typyst/ui/components/label` - Proper form labels
- Consider `@typyst/ui/components/dialog` for modals (future)

### 3.2 Create Input Component Wrappers

**New File:** `apps/app/src/lib/components/auth/AuthInput.svelte`

**Purpose:**
- Wrap UI package Input with auth-specific styling
- Built-in validation state display
- Consistent spacing and behavior

### 3.3 Create Error Display Component

**New File:** `apps/app/src/lib/components/auth/AuthError.svelte`

**Purpose:**
- Consistent error message display
- Uses UI package styling
- Handles both local and auth store errors

## Phase 4: Refactor Auth Pages

### 4.1 Update Sign In Page

**File:** `apps/app/src/routes/auth/sign-in/+page.svelte`

**Current Issues:**
- Using native HTML inputs
- Manual error handling
- Not using latest auth patterns

**Actions:**
- Replace native inputs with UI package components
- Use new auth Svelte integration
- Implement proper reactive error handling
- Add loading states using auth stores
- Use new AuthForm and AuthInput components

**Key Changes:**
```svelte
<!-- Before -->
<input type="email" bind:value={email} />

<!-- After -->  
<AuthInput 
  type="email" 
  bind:value={email}
  label="Email"
  error={$auth.error?.field === 'email' ? $auth.error.message : ''}
/>
```

### 4.2 Update Sign Up Page

**File:** `apps/app/src/routes/auth/sign-up/+page.svelte`

**Actions:** (Same pattern as sign-in)
- Replace native inputs with UI components
- Add name field using UI package Input
- Implement reactive error handling
- Use shared AuthForm component
- Add password confirmation field

### 4.3 Update Sign Out Page

**File:** `apps/app/src/routes/auth/sign-out/+page.svelte`

**Actions:**
- Simplify using new auth integration
- Use UI package Button for consistency
- Handle loading states properly

## Phase 5: Integrate Queries Package (Foundation)

### 5.1 Set Up Query Provider

**File:** `apps/app/src/routes/+layout.svelte`

**Purpose:**
- Set up TanStack Query for reactive auth state
- Foundation for future data queries
- Proper error handling and caching

**Actions:**
- Add QueryProvider from `@typyst/queries/components`
- Configure for auth context
- Set up proper user context

```svelte
<script>
  import { QueryProvider } from '@typyst/queries/components';
  import { authState, user } from '$lib/auth-client';
  
  // Use reactive auth state for query provider
  $: apiOptions = { baseUrl: '/api/rpc' };
  $: currentUser = $user;
</script>

<QueryProvider {apiOptions} user={currentUser}>
  <slot />
</QueryProvider>
```

### 5.2 Create Auth Query Hooks (Future-Ready)

**New File:** `apps/app/src/lib/hooks/auth.ts`

**Purpose:**
- Wrapper around queries package auth hooks
- App-specific auth query logic
- Ready for when API package is implemented

```typescript
// Re-export auth queries for consistency
export { 
  useSession, 
  useUser, 
  useLogin, 
  useLogout, 
  useRegister 
} from '@typyst/queries/hooks';
```

## Phase 6: Improve Developer Experience

### 6.1 Update TypeScript Configuration

**Actions:**
- Ensure all package types are properly recognized
- Add path aliases for easier imports
- Update tsconfig to handle new packages

### 6.2 Create Auth Utilities

**New File:** `apps/app/src/lib/utils/auth.ts`

**Purpose:**
- Route protection utilities
- Auth state helpers
- Redirect logic

### 6.3 Add Route Protection

**Files:** Auth page `+page.server.ts` files

**Purpose:**
- Server-side auth verification
- Proper redirects for protected routes
- Type-safe session handling

## Phase 7: Testing & Validation

### 7.1 Test Auth Flows

**Manual Testing Checklist:**
- [ ] Sign up with valid credentials
- [ ] Sign up with invalid/duplicate email
- [ ] Sign in with valid credentials  
- [ ] Sign in with invalid credentials
- [ ] Sign out functionality
- [ ] Loading states during auth operations
- [ ] Error message display
- [ ] Redirect after successful auth
- [ ] Protected route access

### 7.2 Validate Package Integration

**Integration Checklist:**
- [ ] UI components render correctly
- [ ] Auth stores update properly
- [ ] Queries package setup works
- [ ] TypeScript types are correct
- [ ] No runtime errors
- [ ] Consistent styling across auth pages

## Implementation Order

### Priority 1 (Core Auth)
1. Update package dependencies
2. Refactor auth configuration  
3. Create reusable auth components
4. Update sign-in page
5. Update sign-up page

### Priority 2 (Enhancement)
6. Integrate queries package foundation
7. Add proper error handling
8. Implement route protection
9. Add loading states

### Priority 3 (Polish)
10. Add TypeScript improvements
11. Create auth utilities
12. Comprehensive testing
13. Documentation updates

## File Structure After Refactoring

```
apps/app/src/
├── lib/
│   ├── auth.ts (updated)
│   ├── auth-client.ts (updated)
│   ├── auth.svelte.ts (new)
│   ├── components/
│   │   └── auth/
│   │       ├── AuthForm.svelte (new)
│   │       ├── AuthInput.svelte (new)
│   │       └── AuthError.svelte (new)
│   ├── hooks/
│   │   └── auth.ts (new)
│   └── utils/
│       └── auth.ts (new)
├── routes/
│   ├── +layout.svelte (updated with QueryProvider)
│   └── auth/
│       ├── sign-in/+page.svelte (refactored)
│       ├── sign-up/+page.svelte (refactored)
│       └── sign-out/+page.svelte (refactored)
```

## Expected Benefits

### Immediate
- Consistent UI components across auth pages
- Better error handling and user feedback
- Proper TypeScript integration
- Reactive auth state management

### Future-Ready
- Foundation for TanStack Query integration
- Ready for API package integration
- Scalable component architecture
- Consistent patterns for other features

## Risk Mitigation

### Compatibility
- Test thoroughly before deploying
- Keep backup of current auth implementation
- Gradual rollout of changes

### Dependencies
- Ensure all workspace packages are published properly
- Test package resolution in monorepo
- Verify build process works with new dependencies

## Success Metrics

- [ ] All auth flows work without errors
- [ ] UI is consistent with design system
- [ ] TypeScript compilation succeeds
- [ ] No runtime errors in browser console
- [ ] Loading states provide good UX
- [ ] Error messages are user-friendly
- [ ] Code is maintainable and follows patterns

---

This plan sets up the authentication system to use the shared packages effectively while creating a foundation for future integration of data-related functionality using the queries and API packages. 