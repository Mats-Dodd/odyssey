import { createPGLiteDatabase, type PGLiteDatabase } from '@typyst/db/pglite';
import type { QueryOptions, Results } from '@electric-sql/pglite';

let pgliteDb: PGLiteDatabase | null = null;

interface LiveQueryReturn<T> {
	initialResults: Results<T>;
	unsubscribe: () => Promise<void>;
	refresh: () => Promise<void>;
}

function initializeDB() {
	if (!pgliteDb) {
		pgliteDb = createPGLiteDatabase({
			dataDir: 'idb://typyst'
		});
	}
}

export const pgClient = {
	get: async () => {
		initializeDB();
		return pgliteDb!.pgClient;
	},
	exec: async (sql: string) => {
		const client = await pgClient.get();
		return client.exec(sql);
	},
	query: async <T>(
		query: string,
		params?: unknown[],
		options?: QueryOptions
	): Promise<Results<T>> => {
		const client = await pgClient.get();
		return client.query<T>(query, params, options);
	},
	live: {
		query: async <T>(
			query: string,
			params?: unknown[],
			callback?: (res: Results<T>) => void
		): Promise<LiveQueryReturn<T>> => {
			const client = await pgClient.get();
			return (
				client as unknown as {
					live: {
						query: (
							query: string,
							params?: unknown[],
							callback?: (res: Results<T>) => void
						) => Promise<LiveQueryReturn<T>>;
					};
				}
			).live.query(query, params, callback);
		}
	}
};

// Export the Drizzle database instance
export const db = new Proxy({} as PGLiteDatabase['db'], {
	get: (target, prop) => {
		initializeDB();
		if (!pgliteDb) {
			throw new Error('Database not initialized');
		}
		return pgliteDb.db[prop as keyof typeof pgliteDb.db];
	}
});

// Export types from the shared schema
export type { Collection, CollectionSettings, Entry } from '@typyst/db/schema/app';
