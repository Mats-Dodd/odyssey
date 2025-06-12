import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // Using adapter-vercel for optimal Vercel deployment with Edge Config support
    adapter: adapter({
      // Configure regions if needed (defaults to all regions)
      // regions: ['iad1', 'sfo1']
    })
  }
};

export default config;
