<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export const submitText: string = 'Submit';
	export const isLoading: boolean = false;
	export let alternativeText: string = '';
	export let alternativeLink: string = '';
	export let alternativeLinkText: string = '';
</script>

<div class="flex min-h-screen items-center justify-center p-4">
	<div class="w-full max-w-md space-y-6">
		<div class="text-center">
			<h1 class="text-2xl font-bold">{title}</h1>
			{#if subtitle}
				<p class="text-muted-foreground mt-2">{subtitle}</p>
			{/if}
		</div>

		<div class="space-y-4">
			<slot />
		</div>

		{#if alternativeText && alternativeLink && alternativeLinkText}
			<div class="text-center">
				<p class="text-sm text-muted-foreground">
					{alternativeText}
					<a href={alternativeLink} class="text-primary hover:underline">{alternativeLinkText}</a>
				</p>
			</div>
		{/if}
	</div>
</div>
