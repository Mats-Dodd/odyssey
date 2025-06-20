<script lang="ts">
	import { fetchCollectionEntries } from '@/api/collection';
	import { createNote, openNote } from '@/api/notes';
	import { pgClient } from '@/client';
	import {
		activeFile,
		collection,
		collectionEntries,
		editor,
		isPageSidebarOpen,
		pageSidebarWidth,
		resizingPageSidebar
	} from '@/store';
	import type { FileEntry } from '@/types';
	import { Calendar } from '@typyst/ui/components/calendar';
	import Label from '@typyst/ui/components/label/label.svelte';
	import { cn } from '@typyst/ui/lib/utils';
	import { CalendarDate, getLocalTimeZone, today, type DateValue } from '@internationalized/date';
	import { onDestroy } from 'svelte';
	import Entries from './entries.svelte';

	let calValue = today(getLocalTimeZone());
	let entries: FileEntry[] = [];
	let stopWatching: () => void;

	// Watch for changes in the collection
	async function watchCollection() {
		const dbWatcher = await pgClient.live.query('SELECT * FROM entry', [], async () => {
			await fetchCollectionEntries($collection + '/.typyst/daily');
		});

		return dbWatcher.unsubscribe;
	}

	const stopWatchingStore = collectionEntries.subscribe((value) => {
		entries = value;
	});

	const stopWatchingCollectionStore = collection.subscribe(async (value) => {
		entries = await fetchCollectionEntries(value + '/.typyst/daily');

		// Validate if there is a note for today
		const today = new Date().toISOString().split('T')[0];
		const dailyExists = entries.some((entry) => entry.path.includes(today));

		if (!dailyExists) {
			await createNote(value + '/.typyst/daily', today + '.md');
		}

		// Open today's note
		openNote(value + '/.typyst/daily/' + today + '.md', true);

		if (value) {
			if (stopWatching) stopWatching();
			stopWatching = await watchCollection();
		}
	});

	const handleMouseMove = (e: MouseEvent) => {
		resizingPageSidebar.set(true);

		const x = e.x;

		// Set collapsing bounds
		if (x < 100) {
			resizingPageSidebar.set(false);
			isPageSidebarOpen.set(false);
			return;
		} else if (x > 100 && !$isPageSidebarOpen) {
			resizingPageSidebar.set(false);
			isPageSidebarOpen.set(true);
			return;
		}

		// Set width bounds
		if ($pageSidebarWidth + e.movementX < 210 || $pageSidebarWidth + e.movementX > 500) {
			return;
		}

		// Set cursor resize bounds to prevent resizing when cursor is outside of the width bounds
		if (x < 245 || x > 550) {
			return;
		}

		pageSidebarWidth.update((value) => value + e.movementX);
	};

	// Resize sidebar handler
	const resizeHandler = () => {
		// Set resizing state
		resizingPageSidebar.set(true);

		// Blur the editor
		$editor.commands.blur();

		// Set cusor-col-resize class to body
		document.body.classList.toggle('cursor-col-resize');

		// Mouse up event listener
		const handleMouseUp = () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);

			// Remove cursor-col-resize class from body
			document.body.classList.remove('cursor-col-resize');

			resizingPageSidebar.set(false);
		};

		// Add event listeners
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	};

	// handle open calendar day
	const handleOpenCalendarDay = async (e: DateValue | undefined) => {
		if (!e) return;

		// Pad the month and day with a leading zero if they're single digits
		const paddedMonth = e.month.toString().padStart(2, '0');
		const paddedDay = e.day.toString().padStart(2, '0');

		// Create the note name with padded month and day
		const noteName = `${e.year}-${paddedMonth}-${paddedDay}.md`;

		// Check if note exists, if not create it - else open it
		if (!entries.some((entry) => entry.path.includes(noteName))) {
			createNote($collection + '/.typyst/daily', noteName);
		} else {
			openNote($collection + '/.typyst/daily/' + noteName, true);
		}

		// Get note element by data-path
		let noteElement = document.querySelector(
			`[data-path="${$collection}/.typyst/daily/${noteName}"]`
		);

		// If note element is not found, wait for it to be rendered
		if (!noteElement) {
			await new Promise((resolve) => setTimeout(resolve, 150));
		}

		// Get note element again - this is because if the note is newly created, it might not be rendered yet
		noteElement = document.querySelector(`[data-path="${$collection}/.typyst/daily/${noteName}"]`);

		// Scroll to note element
		if (noteElement) {
			const rect = noteElement.getBoundingClientRect();
			const isAboveView = rect.top < 0;
			const isBelowView = rect.bottom > window.innerHeight;
			if (isAboveView || isBelowView) {
				// Smooth scroll doesn't seem to work well from bottom to top
				const behavior = isAboveView ? 'auto' : 'smooth';
				noteElement.scrollIntoView({ behavior, block: 'center' });
			}
		}
	};

	// Listen to activeFile change and update calendar value
	activeFile.subscribe((value) => {
		// Extract date string from active file path
		const dateString = value?.split('/').pop()?.split('.')[0];
		if (!dateString) return;

		// Parse date string
		const [year, month, day] = dateString.split('-').map(Number);
		if (!year || !month || !day) return;

		// Update calendar value
		calValue = new CalendarDate(year, month, day);
	});

	onDestroy(() => {
		if (stopWatching) stopWatching();
		stopWatchingStore();
		stopWatchingCollectionStore();
	});
</script>

<div
	class={cn(
		'fixed left-12 h-[calc(100vh-4.5rem)] flex flex-col justify-start items-center bg-background overflow-y-auto transform transition-transform duration-300',
		!$isPageSidebarOpen && '-translate-x-52'
	)}
	style={`width: ${$pageSidebarWidth}px`}
>
	<!-- Drag border -->
	<div
		class="h-full w-1 border-r cursor-col-resize absolute top-0 right-0 z-10 hover:bg-foreground/10 hover:delay-75 transition-all duration-200 active:bg-foreground/20 active:!cursor-col-resize"
		on:mousedown={resizeHandler}
		role="presentation"
	/>

	<!-- Note Entries -->
	<div
		class="flex flex-col items-start gap-2 w-full h-full overflow-auto pt-2.5 px-2 pb-2"
		data-collection-root
		data-path={$collection + '/.typyst/daily'}
	>
		{#if entries.length === 0}
			<div class="w-full h-full flex flex-col gap-1 items-center justify-center">
				<Label class="text-muted-foreground text-xs text-center">No daily notes found</Label>
			</div>
		{:else}
			<Entries {entries} />
		{/if}
	</div>

	<Calendar
		bind:value={calValue}
		class="border-t w-full"
		onValueChange={(e) => handleOpenCalendarDay(e)}
	/>
</div>

<style>
	:global(body.cursor-col-resize) {
		/* cursor: col-resize !important;
		user-select: none !important; */
		pointer-events: none;
	}
</style>
