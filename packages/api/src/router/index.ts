import { authRouter } from './auth.js';
import { collectionsRouter } from './collections.js';
import { entriesRouter } from './entries.js';

/**
 * Main application router that combines all feature routers
 */
export const appRouter = {
  auth: authRouter,
  collections: collectionsRouter,
  entries: entriesRouter
};

/**
 * Export the router type for client-side usage
 */
export type AppRouter = typeof appRouter;
