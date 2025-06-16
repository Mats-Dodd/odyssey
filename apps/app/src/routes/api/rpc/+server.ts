import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { authDatabase } from '$lib/database';
import { collection, entry, collectionSettings } from '@typyst/db/schema/app';
import { eq, desc, like, and, count, inArray } from 'drizzle-orm';

// Helper function to get user ID from session (placeholder for now)
async function getUserId(request: Request): Promise<string> {
	// TODO: Implement actual user authentication
	// For now, return a test user ID
	return 'user-123';
}

// Helper function to transform database entries to API format
function transformEntry(dbEntry: any) {
	return {
		path: dbEntry.path,
		name: dbEntry.name || '',
		parentPath: dbEntry.parentPath,
		collectionPath: dbEntry.collectionPath || '',
		content: dbEntry.content || '',
		isFolder: dbEntry.isFolder || false,
		size: dbEntry.size || 0,
		createdAt: dbEntry.createdAt.toISOString(),
		updatedAt: dbEntry.updatedAt.toISOString(),
		userId: dbEntry.userId || ''
	};
}

function transformCollection(dbCollection: any) {
	return {
		path: dbCollection.path,
		name: dbCollection.name,
		lastOpened: dbCollection.lastOpened.toISOString(),
		userId: dbCollection.userId || ''
	};
}

export async function POST({ request }) {
	try {
		const body = await request.json();
		const { method, params } = body;
		
		// For now, return mock data to test the connection
		switch (method) {
			case 'collections.list':
				return new Response(JSON.stringify({
					items: [
						{
							path: '/test',
							name: 'Test Collection',
							lastOpened: new Date().toISOString(),
							userId: 'user-123'
						}
					],
					pagination: {
						page: 1,
						limit: 20,
						total: 1,
						hasMore: false
					}
				}), {
					headers: { 'Content-Type': 'application/json' }
				});
				
			case 'collections.get':
				return new Response(JSON.stringify({
					path: params.path,
					name: 'Test Collection',
					lastOpened: new Date().toISOString(),
					userId: 'user-123'
				}), {
					headers: { 'Content-Type': 'application/json' }
				});
				
			case 'collections.create':
				return new Response(JSON.stringify({
					path: params.path,
					name: params.name,
					lastOpened: new Date().toISOString(),
					userId: 'user-123'
				}), {
					headers: { 'Content-Type': 'application/json' }
				});
				
			case 'entries.list':
				return new Response(JSON.stringify({
					items: [
						{
							path: '/test/note.md',
							name: 'note.md',
							parentPath: '/test',
							collectionPath: '/test',
							content: '# Test Note\n\nThis is a test note.',
							isFolder: false,
							size: 50,
							createdAt: new Date().toISOString(),
							updatedAt: new Date().toISOString(),
							userId: 'user-123'
						}
					],
					pagination: {
						page: 1,
						limit: 20,
						total: 1,
						hasMore: false
					}
				}), {
					headers: { 'Content-Type': 'application/json' }
				});
				
			case 'entries.get':
				return new Response(JSON.stringify({
					path: params.path,
					name: 'note.md',
					parentPath: '/test',
					collectionPath: '/test',
					content: '# Test Note\n\nThis is a test note.',
					isFolder: false,
					size: 50,
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
					userId: 'user-123'
				}), {
					headers: { 'Content-Type': 'application/json' }
				});
				
			default:
				return new Response(JSON.stringify({ 
					error: `Method ${method} not implemented yet` 
				}), {
					status: 404,
					headers: { 'Content-Type': 'application/json' }
				});
		}
	} catch (err) {
		console.error('RPC API Error:', err);
		return new Response(JSON.stringify({ 
			error: 'Internal server error' 
		}), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}