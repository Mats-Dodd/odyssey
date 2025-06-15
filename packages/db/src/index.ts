// Export schemas and types
export * from './schema/index.js';

// Export database clients
export * from './client/supabase-db.js';
export * from './client/pglite-db.js';

// Export individual schemas for convenience
export { authSchema, appSchema, schema } from './schema/index.js';

// Export database client factories
export { createSupabaseDatabase, type SupabaseDatabase } from './client/supabase-db.js';
export { createPGLiteDatabase, type PGLiteDatabase } from './client/pglite-db.js';
