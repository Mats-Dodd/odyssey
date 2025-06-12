import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Using adapter-static for client-side app with PGLite database
		adapter: adapter({
			// Enable SPA mode for client-side routing
			fallback: 'index.html',
			precompress: true,
			strict: true
		}),
		alias: {
			'@/*': './src/lib'
		}
	}
};

export default config;
