import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

// TODO: Implement proper oRPC handler
// For now, return a placeholder response
async function handleORPCRequest(request: Request): Promise<Response> {
	const url = new URL(request.url);
	const pathSegments = url.pathname.split('/');
	const procedurePath = pathSegments[pathSegments.length - 1];

	// Log the request for debugging
	console.log('oRPC Request:', {
		method: request.method,
		path: procedurePath,
		url: request.url
	});

	// Return a placeholder response
	return json(
		{
			error: 'oRPC endpoint not implemented yet',
			path: procedurePath,
			message: 'This endpoint will be implemented after PGLite removal'
		},
		{ status: 501 }
	);
}

// Handle all HTTP methods
export const GET: RequestHandler = async ({ request }) => handleORPCRequest(request);
export const POST: RequestHandler = async ({ request }) => handleORPCRequest(request);
export const PUT: RequestHandler = async ({ request }) => handleORPCRequest(request);
export const PATCH: RequestHandler = async ({ request }) => handleORPCRequest(request);
export const DELETE: RequestHandler = async ({ request }) => handleORPCRequest(request);
