import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Using adapter-vercel for Vercel deployment with zero-config mode
		adapter: adapter(),
		alias: {
			'@/*': './src/lib'
		}
	}
};

export default config;
