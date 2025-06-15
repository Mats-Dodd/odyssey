import { drizzle } from 'drizzle-orm/pglite';
import { PGlite } from '@electric-sql/pglite';
import { live } from '@electric-sql/pglite/live';
import { schema, authSchema, appSchema } from '../schema/index';

export interface PGLiteDatabaseConfig {
  dataDir?: string;
}

/**
 * PGLite database client - for future bootstrap functionality
 * This will be used to create a local browser database that syncs with Supabase
 */
export function createPGLiteDatabase(config: PGLiteDatabaseConfig = {}) {
  const pgClient = new PGlite(config.dataDir || 'idb://typyst', {
    extensions: {
      live
    }
  });

  const db = drizzle(pgClient, { schema });

  return {
    db,
    pgClient,
    schema,
    authSchema,
    appSchema
  };
}

export type PGLiteDatabase = ReturnType<typeof createPGLiteDatabase>;
