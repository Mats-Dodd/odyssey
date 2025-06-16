<script lang="ts">
	import { Input } from '@typyst/ui/components/input';
	import { Label } from '@typyst/ui/components/label';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = HTMLInputAttributes & {
		label: string;
		error?: string;
		required?: boolean;
	};

	export let value: $$Props['value'] = '';
	export let label: string;
	export let error: string = '';
	export let required: boolean = false;
	export let id: string = '';
	export let type: string = 'text';
	export let placeholder: string = '';

	// Generate ID if not provided
	$: inputId = id || `auth-input-${Math.random().toString(36).substring(2, 9)}`;
</script>

<div class="space-y-2">
	<Label for={inputId} class="text-sm font-medium">
		{label}
		{#if required}
			<span class="text-red-500">*</span>
		{/if}
	</Label>

	<Input
		{id}
		{type}
		{placeholder}
		{required}
		bind:value
		class="w-full {error ? 'border-red-500 focus-visible:ring-red-500' : ''}"
		on:blur
		on:change
		on:input
		on:focus
		on:keydown
		{...$$restProps}
	/>

	{#if error}
		<p class="text-sm text-red-600">{error}</p>
	{/if}
</div>
