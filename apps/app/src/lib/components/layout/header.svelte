<script lang="ts">
	import { collection } from '$lib/store';
	import Button from '@typyst/ui/components/button/button.svelte';
	import { isAuthenticated, user } from '$lib/auth-client';
</script>

<header
	class="absolute top-0 w-full flex justify-between items-center h-9 border-b pl-20 bg-background z-40 px-1.5"
>
	<div />
	<p
		class="pointer-events-none text-sm text-foreground/85 hover:text-foreground/100 transition-all cursor-default outline-none -mr-[159px]"
	>
		{$collection?.split('/').pop() || ''}
	</p>
	<div class="flex gap-1 items-center">
		{#if $isAuthenticated}
			<span class="text-sm text-muted-foreground mr-2">
				Welcome, {$user?.name || $user?.email}
			</span>
			<a href="/auth/sign-out">
				<Button variant="secondary" size="sm" scale="sm" class="rounded-full h-[27px] px-2.5">
					Sign Out
				</Button>
			</a>
		{:else}
			<a href="/auth/sign-in">
				<Button variant="secondary" size="sm" scale="sm" class="rounded-full h-[27px] px-2.5">
					Sign In
				</Button>
			</a>
			<a href="/auth/sign-up">
				<Button size="sm" scale="sm" class="rounded-full h-[27px] px-2.5">Sign Up</Button>
			</a>
		{/if}
		<a href="https://go.typyst.md/github" target="_blank" rel="noopener noreferrer">
			<Button variant="secondary" size="sm" scale="sm" class="rounded-full h-[27px] px-2.5"
				>Star on Github</Button
			>
		</a>
		<a href="https://go.typyst.md/download" target="_blank" rel="noopener noreferrer">
			<Button size="sm" scale="sm" class="rounded-full h-[27px] px-2.5">Download</Button>
		</a>
	</div>
</header>
