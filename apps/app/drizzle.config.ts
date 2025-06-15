import { defineConfig } from 'drizzle-kit';
import type { Config } from 'drizzle-kit';

export default defineConfig({
	schema: './src/lib/database/schema.ts',
	out: './src/lib/database/migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: '' // Will be set via environment variable when running migrations
	},
	verbose: true,
	strict: true
} satisfies Config);
