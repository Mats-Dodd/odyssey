<script lang="ts">
	import { useCollections, useCreateCollection } from '@typyst/queries';
	import { writable } from 'svelte/store';

	// Create a reactive input for the collections query
	const listInput = writable(undefined);

	// Use the TanStack Query hooks
	const collections = useCollections(listInput);
	const createCollection = useCreateCollection();

	// Log the query state for debugging
	$: console.log('Collections query state:', {
		isLoading: $collections.isLoading,
		error: $collections.error,
		data: $collections.data
	});

	$: console.log('Create mutation state:', {
		isPending: $createCollection.isPending,
		error: $createCollection.error,
		data: $createCollection.data
	});

	// Handle create collection
	let collectionName = '';
	let collectionPath = '';

	async function handleCreateCollection() {
		if (!collectionName || !collectionPath) {
			alert('Please fill in both name and path');
			return;
		}

		try {
			await $createCollection.mutateAsync({
				name: collectionName,
				path: collectionPath
				// Optional settings can be added here if needed
			});

			// Clear form
			collectionName = '';
			collectionPath = '';

			console.log('Collection created successfully!');
		} catch (error) {
			console.error('Failed to create collection:', error);
		}
	}

	// Generate random test data
	function generateTestData() {
		const randomId = Math.random().toString(36).substring(2, 8);
		collectionName = `Test Collection ${randomId}`;
		collectionPath = `/test-${randomId}`;
	}
</script>

<div class="p-8 max-w-4xl mx-auto">
	<h1 class="text-2xl font-bold mb-6">Collections Pipeline Test</h1>

	<div class="space-y-6">
		<!-- Create Collection Section -->
		<div class="p-4 border rounded-lg bg-blue-50">
			<h2 class="text-lg font-semibold mb-4">Create Test Collection</h2>
			<div class="space-y-4">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label for="name" class="block text-sm font-medium mb-1">Collection Name</label>
						<input
							id="name"
							type="text"
							bind:value={collectionName}
							placeholder="e.g. My Test Collection"
							class="w-full px-3 py-2 border rounded-lg"
						/>
					</div>
					<div>
						<label for="path" class="block text-sm font-medium mb-1">Collection Path</label>
						<input
							id="path"
							type="text"
							bind:value={collectionPath}
							placeholder="e.g. /my-test-collection"
							class="w-full px-3 py-2 border rounded-lg"
						/>
					</div>
				</div>
				<div class="flex gap-2">
					<button
						on:click={handleCreateCollection}
						disabled={$createCollection.isPending || !collectionName || !collectionPath}
						class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
					>
						{$createCollection.isPending ? 'Creating...' : 'Create Collection'}
					</button>
					<button
						on:click={generateTestData}
						class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
					>
						Generate Test Data
					</button>
				</div>

				{#if $createCollection.error}
					<div class="p-3 bg-red-50 border border-red-200 rounded-lg">
						<p class="text-red-800 text-sm">❌ Create Error: {$createCollection.error.message}</p>
					</div>
				{/if}

				{#if $createCollection.data}
					<div class="p-3 bg-green-50 border border-green-200 rounded-lg">
						<p class="text-green-800 text-sm">✅ Created: {$createCollection.data.name}</p>
					</div>
				{/if}
			</div>
		</div>

		<!-- Query Status Section -->
		<div class="p-4 border rounded-lg">
			<h2 class="text-lg font-semibold mb-2">Query Status</h2>
			<div class="space-y-2">
				<p><strong>Loading:</strong> {$collections.isLoading}</p>
				<p><strong>Error:</strong> {$collections.error?.message || 'None'}</p>
				<p><strong>Has Data:</strong> {!!$collections.data}</p>
				<p><strong>Total Collections:</strong> {$collections.data?.items?.length || 0}</p>
			</div>
		</div>

		<!-- Results Section -->
		{#if $collections.isLoading}
			<div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
				<p class="text-blue-800">🔄 Loading collections...</p>
			</div>
		{:else if $collections.error}
			<div class="p-4 bg-red-50 border border-red-200 rounded-lg">
				<p class="text-red-800">❌ Error: {$collections.error.message}</p>
				<pre class="mt-2 text-sm text-red-600 overflow-auto">{JSON.stringify(
						$collections.error,
						null,
						2
					)}</pre>
			</div>
		{:else if $collections.data}
			<div class="p-4 bg-green-50 border border-green-200 rounded-lg">
				<p class="text-green-800">✅ Success! Pipeline is working!</p>

				{#if $collections.data.items && $collections.data.items.length > 0}
					<div class="mt-4">
						<h3 class="font-semibold mb-2">
							Collections Found ({$collections.data.items.length}):
						</h3>
						<div class="space-y-2">
							{#each $collections.data.items as collection}
								<div class="p-3 border rounded bg-white">
									<p><strong>Name:</strong> {collection.name}</p>
									<p><strong>Path:</strong> {collection.path}</p>
									<p>
										<strong>Last Opened:</strong>
										{new Date(collection.lastOpened).toLocaleString()}
									</p>
									<p><strong>User ID:</strong> {collection.userId}</p>
								</div>
							{/each}
						</div>
					</div>
				{:else}
					<div class="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
						<p class="text-yellow-800">
							📝 No collections found. Create one above to test the pipeline!
						</p>
					</div>
				{/if}

				<div class="mt-4">
					<h3 class="font-semibold mb-2">Raw API Response:</h3>
					<pre
						class="text-sm text-green-700 overflow-auto bg-white p-3 rounded border">{JSON.stringify(
							$collections.data,
							null,
							2
						)}</pre>
				</div>
			</div>
		{:else}
			<div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
				<p class="text-gray-800">⏳ No data yet...</p>
			</div>
		{/if}
	</div>

	<!-- Pipeline Status -->
	<div class="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
		<h3 class="font-semibold text-yellow-800 mb-2">Pipeline Test Status</h3>
		<p class="text-yellow-700 mb-2">
			This page tests the complete Supabase migration pipeline:<br />
			<strong>Supabase DB ↔ API Routes ↔ TanStack Query ↔ Svelte Component</strong>
		</p>
		<div class="text-sm space-y-1">
			<p>
				✅ <strong>Read Pipeline:</strong> Fetch collections from Supabase → TanStack Query → UI
			</p>
			<p>
				✅ <strong>Write Pipeline:</strong> Create collection → TanStack Query → Supabase → Auto-refetch
			</p>
			<p>✅ <strong>Optimistic Updates:</strong> TanStack Query handles caching & invalidation</p>
		</div>

		{#if $collections.data && $collections.data.items.length > 0}
			<p class="mt-3 text-green-700 font-semibold">
				🎉 Full pipeline working! Ready for real oRPC integration.
			</p>
		{:else if $collections.error}
			<p class="mt-3 text-red-700 font-semibold">⚠️ Pipeline needs debugging.</p>
		{:else}
			<p class="mt-3 text-blue-700 font-semibold">
				🔄 Testing in progress... Create a collection to test write operations.
			</p>
		{/if}
	</div>
</div>
