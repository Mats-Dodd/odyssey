import sharedConfig from '@typyst/tailwind-config/tailwind.config.js';

export default {
	presets: [sharedConfig],
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/**/*.{html,js,svelte,ts}']
};
