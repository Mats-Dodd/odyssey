import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

export default defineConfig({
	plugins: [sveltekit()]
});
