import { json } from '@sveltejs/kit';
import { authDatabase } from '$lib/database';
import { collection } from '@typyst/db/schema/app';
import { eq, desc, like, and, count } from 'drizzle-orm';

const getUserId = () => 'user-123'; // TODO: Get from auth context

export async function POST({ request }) {
	try {
		const { method, params } = await request.json();
		const userId = getUserId();

		switch (method) {
			case 'list': {
				const input = params || {};
				const pagination = input.pagination || { page: 1, limit: 20 };
				const offset = (pagination.page - 1) * pagination.limit;

				const whereConditions = [eq(collection.userId, userId)];
				
				if (input.search) {
					whereConditions.push(like(collection.name, `%${input.search}%`));
				}

				const [countResult] = await authDatabase
					.select({ count: count() })
					.from(collection)
					.where(and(...whereConditions));

				const totalCount = countResult?.count || 0;

				const collections = await authDatabase
					.select()
					.from(collection)
					.where(and(...whereConditions))
					.orderBy(desc(collection.lastOpened))
					.offset(offset)
					.limit(pagination.limit);

				return json({
					items: collections.map(col => ({
						path: col.path,
						name: col.name,
						lastOpened: col.lastOpened.toISOString(),
						userId: col.userId || ''
					})),
					pagination: {
						page: pagination.page,
						limit: pagination.limit,
						total: totalCount,
						hasMore: collections.length === pagination.limit
					}
				});
			}

			case 'get': {
				const { path } = params;
				const collections = await authDatabase
					.select()
					.from(collection)
					.where(and(eq(collection.path, path), eq(collection.userId, userId)));

				if (collections.length === 0) {
					return json({ error: 'Collection not found' }, { status: 404 });
				}

				return json({
					path: collections[0].path,
					name: collections[0].name,
					lastOpened: collections[0].lastOpened.toISOString(),
					userId: collections[0].userId || ''
				});
			}

			case 'create': {
				const { path, name } = params;
				const newCollection = {
					path,
					name,
					lastOpened: new Date(),
					userId
				};

				const [created] = await authDatabase
					.insert(collection)
					.values(newCollection)
					.returning();

				return json({
					path: created.path,
					name: created.name,
					lastOpened: created.lastOpened.toISOString(),
					userId: created.userId || ''
				});
			}

			case 'update': {
				const { path, data } = params;
				const [updated] = await authDatabase
					.update(collection)
					.set({ 
						...data,
						lastOpened: data.lastOpened ? new Date(data.lastOpened) : new Date()
					})
					.where(and(eq(collection.path, path), eq(collection.userId, userId)))
					.returning();

				if (!updated) {
					return json({ error: 'Collection not found' }, { status: 404 });
				}

				return json({
					path: updated.path,
					name: updated.name,
					lastOpened: updated.lastOpened.toISOString(),
					userId: updated.userId || ''
				});
			}

			case 'delete': {
				const { path } = params;
				await authDatabase
					.delete(collection)
					.where(and(eq(collection.path, path), eq(collection.userId, userId)));

				return json({ success: true });
			}

			case 'getRecent': {
				const limit = params?.limit || 10;
				const collections = await authDatabase
					.select()
					.from(collection)
					.where(eq(collection.userId, userId))
					.orderBy(desc(collection.lastOpened))
					.limit(limit);

				return json(collections.map(col => ({
					path: col.path,
					name: col.name,
					lastOpened: col.lastOpened.toISOString(),
					userId: col.userId || ''
				})));
			}

			default:
				return json({ error: `Method ${method} not found` }, { status: 404 });
		}
	} catch (err) {
		console.error('Collections API Error:', err);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
}