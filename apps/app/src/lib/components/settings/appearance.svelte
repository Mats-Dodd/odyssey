<script lang="ts">
	import { Button } from '@typyst/ui/components/button';
	import Label from '@typyst/ui/components/label/label.svelte';
	import * as Select from '@typyst/ui/components/select';
	import { cn } from '@typyst/ui/lib/utils';
	import { setMode, userPrefersMode } from 'mode-watcher';
	import Icon from '../shared/icon.svelte';
	import Tooltip from '../shared/tooltip.svelte';

	let selectedTheme = { value: 'typyst', label: 'Typyst' };
	let selectedFont = { value: 'inter', label: 'Inter' };
</script>

<div class="space-y-5">
	<div class="space-y-1">
		<Label class="text-sm">Color scheme</Label>
		<p class="text-muted-foreground text-xs">Change the color scheme of the app.</p>
		<div class="flex items-center gap-2 pt-2">
			<Tooltip text="System" side="bottom">
				<Button
					size="icon"
					variant="ghost"
					class={cn(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground',
						$userPrefersMode === 'system' && 'bg-accent fill-foreground'
					)}
					scale="md"
					on:click={() => setMode('system')}
				>
					<Icon name="monitor" class="w-4 h-4" />
				</Button>
			</Tooltip>
			<Tooltip text="Light" side="bottom">
				<Button
					size="icon"
					variant="ghost"
					class={cn(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground',
						$userPrefersMode === 'light' && 'bg-accent fill-foreground'
					)}
					scale="md"
					on:click={() => setMode('light')}
				>
					<Icon name="sun" class="w-4 h-4" />
				</Button>
			</Tooltip>
			<Tooltip text="Dark" side="bottom">
				<Button
					size="icon"
					variant="ghost"
					class={cn(
						'h-7 w-7 fill-muted-foreground hover:fill-foreground',
						$userPrefersMode === 'dark' && 'bg-accent fill-foreground'
					)}
					scale="md"
					on:click={() => setMode('dark')}
				>
					<Icon name="moon" class="w-4 h-4" />
				</Button>
			</Tooltip>
		</div>
	</div>

	<div class="space-y-1">
		<Label class="text-sm">Theme</Label>
		<p class="text-muted-foreground text-xs">Change the theme of the app.</p>
		<div class="flex items-center gap-2 pt-2">
			<Select.Root bind:selected={selectedTheme}>
				<Select.Trigger>
					<Select.Value class="text-sm text-foreground/85">{selectedTheme.label}</Select.Value>
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="typyst">Typyst</Select.Item>
				</Select.Content>
			</Select.Root>
			<Button
				variant="default"
				size="sm"
				class="h-7 text-primary-foreground/85 hover:text-primary-foreground text-sm font-normal"
				scale="sm"
				disabled
			>
				Browse
			</Button>
		</div>
	</div>

	<div class="space-y-1">
		<Label class="text-sm">Fonts</Label>
		<p class="text-muted-foreground text-xs">Change the interface font.</p>
		<div class="flex items-center gap-2 pt-2">
			<Select.Root bind:selected={selectedFont} disabled>
				<Select.Trigger>
					<Select.Value class="text-sm text-foreground/85">{selectedFont.label}</Select.Value>
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="inter">Inter</Select.Item>
					<Select.Item value="roboto">Roboto</Select.Item>
					<Select.Item value="lato">Lato</Select.Item>
					<Select.Item value="poppins">Poppins</Select.Item>
					<Select.Item value="nunito">Nunito</Select.Item>
					<Select.Item value="openSans">Open Sans</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
	</div>
</div>
