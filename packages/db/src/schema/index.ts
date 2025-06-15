// Re-export all schemas and types
export * from './auth.js';
export * from './app.js';

import { authSchema } from './auth.js';
import { appSchema } from './app.js';

// Combined schema for use in database clients
export const schema = {
  ...authSchema,
  ...appSchema
};

// Re-export individual schemas
export { authSchema, appSchema };
