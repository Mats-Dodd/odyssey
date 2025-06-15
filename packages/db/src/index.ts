// Export schemas and types
export * from './schema/index';

// Export database clients
export * from './client/supabase-db';
export * from './client/pglite-db';

// Export individual schemas for convenience
export { authSchema, appSchema, schema } from './schema/index';

// Export database client factories
export { createSupabaseDatabase, type SupabaseDatabase } from './client/supabase-db';
export { createPGLiteDatabase, type PGLiteDatabase } from './client/pglite-db';
