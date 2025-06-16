<script>
	import { onMount } from 'svelte';
	import { useCollections, useEntries } from '@typyst/queries';
	import { getApiClient } from '@typyst/queries';
	import { setApiClientContext } from '@typyst/queries/lib/context';
	import { writable } from 'svelte/store';
	
	// Set up API client context
	onMount(() => {
		const apiClient = getApiClient();
		setApiClientContext(apiClient);
	});
	
	// Test collections query
	const collectionsInput = writable(undefined);
	const collectionsQuery = useCollections(collectionsInput);
	
	// Test entries query
	const entriesInput = writable({ collectionPath: '/test', includeContent: true });
	const entriesQuery = useEntries(entriesInput);
	
	$: console.log('Collections:', $collectionsQuery);
	$: console.log('Entries:', $entriesQuery);
</script>

<div class="p-8">
	<h1 class="text-2xl font-bold mb-6">Supabase Integration Test</h1>
	
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<!-- Collections Test -->
		<div class="border rounded-lg p-4">
			<h2 class="text-lg font-semibold mb-4">Collections</h2>
			
			{#if $collectionsQuery.isLoading}
				<p>Loading collections...</p>
			{:else if $collectionsQuery.error}
				<p class="text-red-500">Error: {$collectionsQuery.error.message}</p>
			{:else if $collectionsQuery.data}
				<div class="space-y-2">
					<p class="text-sm text-gray-600">Found {$collectionsQuery.data.items.length} collections</p>
					{#each $collectionsQuery.data.items as collection}
						<div class="border p-2 rounded">
							<p class="font-medium">{collection.name}</p>
							<p class="text-sm text-gray-500">{collection.path}</p>
							<p class="text-xs text-gray-400">Last opened: {new Date(collection.lastOpened).toLocaleString()}</p>
						</div>
					{/each}
				</div>
			{:else}
				<p>No data available</p>
			{/if}
		</div>
		
		<!-- Entries Test -->
		<div class="border rounded-lg p-4">
			<h2 class="text-lg font-semibold mb-4">Entries</h2>
			
			{#if $entriesQuery.isLoading}
				<p>Loading entries...</p>
			{:else if $entriesQuery.error}
				<p class="text-red-500">Error: {$entriesQuery.error.message}</p>
			{:else if $entriesQuery.data}
				<div class="space-y-2">
					<p class="text-sm text-gray-600">Found {$entriesQuery.data.items.length} entries</p>
					{#each $entriesQuery.data.items as entry}
						<div class="border p-2 rounded">
							<p class="font-medium">{entry.name}</p>
							<p class="text-sm text-gray-500">{entry.path}</p>
							{#if entry.content}
								<p class="text-xs text-gray-400 mt-1">Preview: {entry.content.substring(0, 100)}...</p>
							{/if}
						</div>
					{/each}
				</div>
			{:else}
				<p>No data available</p>
			{/if}
		</div>
	</div>
	
	<!-- Test API directly -->
	<div class="mt-8 border rounded-lg p-4">
		<h2 class="text-lg font-semibold mb-4">Direct API Test</h2>
		<button 
			class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
			on:click={async () => {
				try {
					const response = await fetch('/api/rpc', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ method: 'collections.list', params: {} })
					});
					const data = await response.json();
					console.log('Direct API response:', data);
					alert('Check console for API response');
				} catch (err) {
					console.error('API error:', err);
					alert('API error - check console');
				}
			}}
		>
			Test Direct API Call
		</button>
	</div>
</div>

<style>
	/* Add any custom styles here */
</style>