import { drizzle } from 'drizzle-orm/postgres-js';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import postgres from 'postgres';
import { schema, authSchema, appSchema } from '../schema/index.js';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export interface SupabaseDatabaseConfig {
  connectionString: string;
  maxConnections?: number;
}

export interface SupabaseDatabase {
  db: PostgresJsDatabase<typeof schema>;
  sql: postgres.Sql;
  adapter: ReturnType<typeof drizzleAdapter>;
  schema: typeof schema;
  authSchema: typeof authSchema;
  appSchema: typeof appSchema;
}

export function createSupabaseDatabase(config: SupabaseDatabaseConfig): SupabaseDatabase {
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
