# Refactoring for End-to-End Type Safety and Code Reusability

## 1. Overview

This document outlines a strategic plan to refactor the Odyssey codebase. The primary goals are to establish a single source of truth for the API, centralize database and authentication logic into shared packages, and leverage end-to-end type safety from the database to the UI.

- **Core Technologies:** oRPC, TanStack Query, Drizzle, Better Auth, SvelteKit, Tauri.
- **Key Outcomes:**
    - A new `@typyst/db` package for all database schema and query logic.
    - A new `@typyst/auth` package to centralize authentication for all apps.
    - A new `@typyst/api` package defining the oRPC router contract, serving as the single source of truth for the API.
    - A reactive, robust, and type-safe data layer in the frontend applications (`app` and `desktop`) using TanStack Query.
    - Dramatically improved code organization, reusability, and developer experience across the monorepo.

---

## 2. The New Shared Packages

To achieve our goals, we will create three distinct, reusable packages in the `packages/` directory.

### 2.1. `@typyst/db`: The Database Layer

**Rationale:** We will centralize all database schema, migrations, and the Drizzle client to ensure consistency and reusability. This eliminates code duplication and creates a single, authoritative source for data structure and access.

- **Location:** `packages/db`
- **Contents:**
    - **Drizzle Schema:** The definitive source for the database structure.
        - **Action:** Move `apps/app/src/lib/database/schema.ts` to `packages/db/src/schema.ts`.
    - **Drizzle Client:** A shared, configured Drizzle client instance.
        - **Action:** Create `packages/db/src/index.ts` to export a configured Drizzle client, abstracting the logic from `apps/app/src/lib/database/client.ts`.
    - **Migrations:** All Drizzle migration files.
        - **Action:** Move the `apps/app/src/lib/database/migrations/` directory to `packages/db/migrations/`.
- **Configuration:**
    - The `packages/db/package.json` will be configured to export these modules.
    - The root `drizzle.config.ts` will be updated to point to the new schema location in `packages/db/src/schema.ts`.

### 2.2. `@typyst/auth`: The Authentication Layer

**Rationale:** We will consolidate all authentication logic into a dedicated package. This provides a clear boundary for security-related code and offers a simplified, consistent API for both server and client environments.

- **Location:** `packages/auth`
- **Implementation:** This package will offer two main entry points:
    - **`@typyst/auth/server`**: Exports a `createAuthServer` function. This factory will take a database adapter (like `drizzleAdapter` for Better Auth) and server configuration to produce a fully configured, server-side authentication instance with methods like `signUp`, `signIn`, `getSession`, etc.
    - **`@typyst/auth/client`**: Exports a `createAuthClientInstance` function. This factory will configure the client-side library for making auth requests and provide reactive Svelte stores (`user`, `session`, `isAuthenticated`) for use in the UI.
- **Dependencies:** This package will depend on `@typyst/db` to receive a Drizzle instance and access the necessary user/session table schemas for its adapter.

### 2.3. `@typyst/api`: A Single Source of Truth

**Rationale:** We will create a dedicated package for our API contract. This ensures the API definition is decoupled from any specific implementation, making it a true single source of truth for all clients and servers.

- **Location:** `packages/api`
- **Implementation:**
    - **Define Router:** An `appRouter` will be created in `packages/api/src/router.ts` using oRPC's procedure builder. This router defines all available procedures, their inputs, and their outputs.
    - **Shared Types:** The router's inferred type, `AppRouter`, becomes the client's source of truth, enabling full auto-completion and type-checking.
    - **Dependencies:** This package will depend on `@typyst/db` for its schema types and `@typyst/auth` for user/session types.

- **Example Procedure Definition:**
  ```typescript
  // In: packages/api/src/router.ts
  import { os } from '@orpc/server';
  import { z } from 'zod';
  import { notes } from '@typyst/db/schema'; // Consuming schema from the db package

  export const appRouter = {
    notes: {
      list: os
        .output(z.array(notes)) // Using schema from '@typyst/db/schema'
        .handler(async ({ ctx }) => {
          // The implementation logic will live in the server, not here.
          // The handler here is a placeholder for type inference. The context (`ctx`)
          // would be typed to include the authenticated user from @typyst/auth.
          // The actual implementation will be provided in apps/web.
          return []; 
        }),
      
      // ... other procedure definitions
    },
  };

  export type AppRouter = typeof appRouter;
  ```
- **API Server Implementation:** The `apps/web` application will *implement* this contract. It will import the `appRouter` from `@typyst/api` and provide the actual logic for each handler. The final API endpoint will be exposed via a SvelteKit server route, e.g., `apps/web/src/routes/api/rpc/[[...rest]]/+server.ts`.

---

## 4. Frontend Integration with TanStack Query & Svelte

**Rationale:** We will replace all manual `fetch` calls and bespoke state management with TanStack Query. This provides robust caching, request deduplication, and background synchronization, all made fully type-safe by the oRPC client which consumes types from `@typyst/api`.

- **Setup:**
    1. **Dependencies:** Add `@tanstack/svelte-query` and the oRPC client adapter to `apps/app` and `apps/desktop`.
    2. **Auth Client:** Instantiate the auth client from `@typyst/auth/client` in `apps/app/src/lib/auth.ts` (or a similar central spot) to manage session state and provide reactive stores.
    3. **oRPC Client Utility:** Create a typed utility module in `apps/app/src/lib/orpc.ts`. This utility will instantiate a client pointing to the `apps/web` API endpoint and will be typed with `AppRouter` from `@typyst/api`. It will also be configured to use the auth token from the `@typyst/auth` client stores.
    4. **QueryClientProvider:** Wrap the root layout (`src/routes/+layout.svelte`) with `<QueryClientProvider>`.

- **Usage in Components:**
  - **Fetching Data (`createQuery`):**
    ```svelte
    <script lang="ts">
      import { orpc } from '$lib/orpc'; // The new typed utility
      import { createQuery } from '@tanstack/svelte-query';

      // Fully type-safe based on the definition in @typyst/api
      const notesQuery = createQuery(orpc.notes.list.queryOptions());
    </script>

    {#if $notesQuery.isLoading}
      <p>Loading notes...</p>
    {:else if $notesQuery.data}
      <ul>
        {#each $notesQuery.data as note}
          <li>{note.title}</li>
        {/each}
      </ul>
    {/if}
    ```
  - **Performing Mutations (`createMutation`):**
    ```svelte
    <script lang="ts">
      import { useQueryClient, createMutation } from '@tanstack/svelte-query';
      import { orpc } from '$lib/orpc';

      const qc = useQueryClient();
      const addNote = createMutation(orpc.notes.add.mutationOptions({
        onSuccess: () => {
          // Type-safe cache invalidation!
          qc.invalidateQueries({ queryKey: orpc.notes.list.key() });
        }
      }));

      function handleAddNote() {
        $addNote.mutate({ title: 'New Note from TanStack!', content: '...' });
      }
    </script>
    ```

---

## 5. Refactoring Action Plan

This is the step-by-step implementation guide.

1.  **Create `@typyst/db` Package:**
    -   Create the directory `packages/db`.
    -   Initialize it with a `package.json` file.
    -   Move the `database` files (`schema.ts`, `client.ts` logic, `migrations/`) from `apps/app/src/lib` into `packages/db/src`.
    -   Update the root `drizzle.config.ts` to point to the new schema location.

2.  **Create `@typyst/auth` Package:**
    -   Create the directory `packages/auth`.
    -   Initialize it with a `package.json` and a `tsconfig.json`.
    -   Add dependencies on `@typyst/db` and `better-auth`.
    -   Implement the `createAuthServer` and `createAuthClientInstance` factory functions in `src/server.ts` and `src/client.ts` respectively.

3.  **Create `@typyst/api` Package:**
    -   Create the directory `packages/api`.
    -   Initialize with a `package.json` and a `tsconfig.json`.
    -   Add dependencies on `@typyst/db`, `@typyst/auth`, `@orpc/server`, and `zod`.
    -   Define the `appRouter` and export its type from `packages/api/src/router.ts`.

4.  **Update App Dependencies:**
    -   Add `"@typyst/db": "workspace:*"`, `"@typyst/auth": "workspace:*"`, and `"@typyst/api": "workspace:*"` to the `package.json` of `apps/app`, `apps/desktop`, and `apps/web`.
    -   Run `pnpm install` to link the new workspace packages.

5.  **Implement the oRPC API and Auth in `apps/web`:**
    -   In `apps/web`, create the server-side logic that imports the `appRouter` from `@typyst/api` and provides the real implementations for its procedures.
    -   Use `@typyst/auth/server` to configure and handle all authentication endpoints (e.g., `/api/auth/[...rest]`).
    -   Expose the oRPC handler at `apps/web/src/routes/api/rpc/[[...rest]]/+server.ts`.

6.  **Integrate Client in `apps/app`:**
    -   Remove old data-fetching and auth logic.
    -   Install TanStack Query dependencies.
    -   Set up the `@typyst/auth/client` instance and the typed `orpc` utility.
    -   Set up the `QueryClientProvider` in the root layout.
    -   Systematically refactor each feature and component to use the new auth stores and `orpc` query hooks.

7.  **Repeat for `apps/desktop`:**
    -   Apply the same frontend integration steps to the Tauri application, ensuring it also communicates via the type-safe oRPC API for any server-related data and uses the shared auth client.

8.  **Cleanup:**
    -   Once the refactor is functionally complete and verified, remove the now-redundant files from `apps/app/src/lib` (i.e., the old `database` and `auth` code).

This structured approach will lead to a more maintainable, scalable, and type-safe codebase for the entire Odyssey platform.
