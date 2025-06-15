import { drizzle } from 'drizzle-orm/postgres-js';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import postgres from 'postgres';
import { schema, authSchema, appSchema } from '../schema/index';

export interface SupabaseDatabaseConfig {
  connectionString: string;
  maxConnections?: number;
}

export function createSupabaseDatabase(config: SupabaseDatabaseConfig) {
  const sql = postgres(config.connectionString, {
    max: config.maxConnections || 10
  });

  const db = drizzle(sql, { schema });

  return {
    db,
    sql,
    adapter: drizzleAdapter(db, {
      provider: 'pg',
      schema: authSchema // Better Auth only needs auth schema
    }),
    schema,
    authSchema,
    appSchema
  };
}

export type SupabaseDatabase = ReturnType<typeof createSupabaseDatabase>;
