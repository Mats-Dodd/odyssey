// Re-export all schemas and types
export * from './auth';
export * from './app';

import { authSchema } from './auth';
import { appSchema } from './app';

// Combined schema for use in database clients
export const schema = {
  ...authSchema,
  ...appSchema
};

// Re-export individual schemas
export { authSchema, appSchema };
