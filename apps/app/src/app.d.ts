// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Session, User } from '$lib/auth';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: { user: User; session: Session } | null;
			user: User | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// Extend HTMLInputElement to include webkitdirectory
	namespace svelteHTML {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
		interface HTMLAttributes<T = any> {
			webkitdirectory?: boolean;
		}
	}
}

export {};
