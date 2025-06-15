/* eslint-disable */
// @ts-nocheck

import { PGlite, type QueryOptions, type Results } from '@electric-sql/pglite';
import { live } from '@electric-sql/pglite/live';
import { drizzle } from 'drizzle-orm/pglite';
import * as schema from './schema';

// Application schema - excludes Better Auth tables
const appSchema = {
	collection: schema.collection,
	collectionSettings: schema.collectionSettings,
	entry: schema.entry
	// Explicitly exclude Better Auth tables from application schema
	// user, session, account, verification are managed by Better Auth
};

let pgClientPromise: Promise<PGlite>;
let dbInstance: ReturnType<typeof drizzle> | null = null;

interface LiveQueryReturn<T> {
	initialResults: Results<T>;
	unsubscribe: () => Promise<void>;
	refresh: () => Promise<void>;
}

function initializeDB() {
	if (!pgClientPromise) {
		pgClientPromise = PGlite.create({
			dataDir: 'idb://typyst',
			extensions: {
				live
			}
		});

		pgClientPromise.then((pgClient) => {
			// Use filtered schema for application database
			dbInstance = drizzle(pgClient, { schema: appSchema });
		});
	}
}

export const pgClient = {
	get: () => {
		initializeDB();
		return pgClientPromise;
	},
	exec: async (sql: string) => {
		const client = await pgClient.get();
		return client.exec(sql);
	},
	query: async <T>(query: string, params?: any[], options?: QueryOptions): Promise<Results<T>> => {
		const client = await pgClient.get();
		return client.query<T>(query, params, options);
	},
	live: {
		query: async <T>(
			query: string,
			params?: any[],
			callback?: (res: Results<T>) => void
		): Promise<LiveQueryReturn<T>> => {
			const client = await pgClient.get();
			return client.live.query<T>(query, params, callback);
		}
	}
};

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
	get: (target, prop) => {
		initializeDB();
		if (!dbInstance) {
			return new Promise((resolve) => {
				pgClientPromise.then(() => {
					resolve(dbInstance![prop as keyof typeof dbInstance]);
				});
			});
		}
		return dbInstance[prop as keyof typeof dbInstance];
	}
});

// Export application schema types
export type Collection = typeof appSchema.collection.$inferSelect;
export type CollectionSettings = typeof appSchema.collectionSettings.$inferSelect;
export type Entry = typeof appSchema.entry.$inferSelect;
