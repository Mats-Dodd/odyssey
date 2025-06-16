<script lang="ts">
	export let error: string | null = null;
	export let localError: string = '';

	$: displayError = localError || error;
</script>

{#if displayError}
	<div
		class="text-sm text-red-600 bg-red-50 dark:bg-red-950/20 dark:text-red-400 p-3 rounded-md border border-red-200 dark:border-red-800"
	>
		{displayError}
	</div>
{/if}
