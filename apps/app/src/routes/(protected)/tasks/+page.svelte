<script lang="ts">
	import EditorInlineTitle from '$lib/components/shared/editor/inline-title.svelte';
	import EditorSearch from '$lib/components/shared/editor/search.svelte';
	import EditorToolbar from '$lib/components/shared/editor/toolbar.svelte';
	import Editor from '@/components/shared/editor/editor.svelte';
	import { SHORTCUTS } from '@/constants';
	import { activeFile, collectionSettings } from '@/store';
	import { shortcutToString } from '@/utils';
	import { cn } from '@typyst/ui/lib/utils';
</script>

<div
	class="relative flex flex-col w-full h-full min-h-[calc(100vh-4.5rem)] items-start bg-secondary-background overflow-y-auto"
>
	{#if $collectionSettings.editor.show_toolbar}
		<EditorToolbar hideHistory hideParentDirectories />
	{/if}

	<div
		class={cn(
			'flex flex-col items-center justify-center w-full h-full -mt-10',
			$activeFile !== null && 'hidden'
		)}
	>
		<div class="flex flex-col items-center justify-center w-full h-full -mt-10">
			<div class="flex flex-col items-center gap-2">
				<p class="text-secondary-foreground/85">Select a task to get started</p>
				<div class="flex gap-5">
					<button
						class="text-sm gap-1.5 flex text-muted-foreground hover:text-secondary-foreground transition-colors items-center justify-center"
						on:click={() => {
							document.dispatchEvent(new KeyboardEvent('keydown', { key: 'o', metaKey: true }));
						}}
					>
						<span
							class="pointer-events-none inline-flex h-[18px] pl-1.5 tracking-widest select-none items-center gap-1 rounded bg-secondary px-1 font-mono text-muted-foreground opacity-100"
						>
							{shortcutToString(SHORTCUTS['app:open-collection'])}
						</span>
						Open Collection</button
					>
				</div>
			</div>
		</div>
	</div>
	<div class={cn('w-full h-full', $activeFile === null && 'hidden')}>
		<EditorSearch />
		<EditorInlineTitle />
		<Editor />
	</div>
</div>
