# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Typyst** is a local-first, privacy-focused markdown note-taking ecosystem built as a TypeScript monorepo using pnpm workspaces. The project delivers consistent experiences across three main applications: desktop (Tauri), web app (SvelteKit + PGLite), and marketing site.

## Common Development Commands

### Root Level Commands
```bash
# Development
pnpm dev                # Start all apps via Turbo
pnpm dev:desktop        # Desktop app with Tauri
pnpm build              # Build all apps
pnpm build:web          # Build web/marketing app only
pnpm build:app          # Build web app only
pnpm lint               # Lint all apps
pnpm format             # Format code with Prettier

# Deployment
pnpm deploy:web         # Deploy web/marketing to Vercel
pnpm deploy:app         # Deploy web app to Vercel
pnpm deploy:preview:web # Deploy preview of web/marketing
pnpm deploy:preview:app # Deploy preview of web app
```

### Individual App Commands
```bash
# Desktop App (apps/desktop/)
cd apps/desktop
pnpm dev:tauri          # Start Tauri development
pnpm tauri              # Access Tauri CLI
pnpm check              # TypeScript checking
pnpm lint               # Lint desktop app

# Web App (apps/app/)
cd apps/app
pnpm dev                # Start development server
drizzle-kit generate    # Generate DB migrations
drizzle-kit push        # Apply migrations to PGLite
pnpm check              # TypeScript checking

# Marketing Site (apps/web/)
cd apps/web
pnpm dev                # Start development server
pnpm build              # Build static site
pnpm check              # TypeScript checking
```

## Architecture Overview

### Three-App Ecosystem
- **Desktop App** (`apps/desktop/`): Tauri-based native app with filesystem access
- **Web App** (`apps/app/`): SvelteKit app with PGLite (PostgreSQL in browser)  
- **Marketing Site** (`apps/web/`): Static SvelteKit site with update/download APIs

### Shared Packages (`packages/`)
- **@typyst/ui**: Shared Svelte component library (buttons, dialogs, inputs, etc.)
- **@typyst/eslint-config**: Consistent linting rules across all apps
- **@typyst/tailwind-config**: Shared design system and styling tokens

### Technology Stack
- **Framework**: SvelteKit across all apps for consistency
- **Desktop**: Tauri (Rust) + TipTap editor + filesystem plugins
- **Web App Database**: PGLite + Drizzle ORM with TypeScript schema
- **Styling**: Tailwind CSS + bits-ui primitives
- **Build System**: Turbo + pnpm workspaces
- **Package Manager**: pnpm (required - uses workspace:* protocol)

## Database Schema (Web App Only)

The web app uses PGLite with these core entities:

```typescript
collection              # Note collections/folders
├── path (PK)          # File system path  
├── name               # Display name
└── lastOpened         # Timestamp

collectionSettings     # Per-collection preferences
├── collectionPath     # FK to collection
├── editor (JSON)      # Editor settings
└── notes (JSON)       # Notes settings

entry                  # Individual notes/files
├── path (PK)          # Unique file path
├── parentPath         # Folder structure
├── collectionPath     # FK to collection
├── content            # Note content
├── isFolder           # Directory flag
└── timestamps         # Created/updated
```

## Key Architectural Patterns

### Local-First Design
- **Desktop**: Direct filesystem access via Tauri plugins (tauri-plugin-fs-extra, tauri-plugin-fs-watch)
- **Web App**: Client-side PostgreSQL database (PGLite) with offline capability
- **Marketing**: Static generation with API routes for updates/downloads

### Component Sharing
- All apps import from `@typyst/ui` package for consistency
- Shared route structures: `/daily`, `/notes`, `/tasks` across desktop and web app
- Common TipTap editor configuration with markdown support

### Update Management
- Desktop app auto-updater checks `apps/web/src/routes/api/check-updates/`
- Download links managed through `apps/web/src/routes/api/download/`
- Version management centralized in marketing site

## Development Workflow

### Starting Development
1. **Desktop App**: `cd apps/desktop && pnpm dev:tauri` 
2. **Web App**: `cd apps/app && pnpm dev`
3. **Marketing**: `cd apps/web && pnpm dev`

### Making Changes
- **UI Components**: Edit in `packages/ui/components/` and they affect all apps
- **App-Specific Logic**: Work within respective `apps/*/src/lib/` directories
- **Database Changes**: Modify `apps/app/src/lib/database/schema.ts` and run drizzle-kit

### Key File Locations
- **Desktop Main Layout**: `apps/desktop/src/routes/+layout.svelte`
- **Web App Main Layout**: `apps/app/src/routes/+layout.svelte`
- **Desktop Config**: `apps/desktop/src-tauri/tauri.conf.json`
- **Database Client**: `apps/app/src/lib/database/client.ts`
- **Shared Components**: `packages/ui/components/*/index.ts`

### Testing and Quality
- Run `pnpm lint` from root to check all apps
- Each app has individual `check` scripts for TypeScript validation
- Prettier formatting is enforced via lint-staged on commits
- Use Turbo caching for faster builds across the monorepo

## Important Notes

- **Package Manager**: Must use pnpm (specified in package.json engines)
- **Workspace Dependencies**: Internal packages use `workspace:*` protocol
- **TypeScript**: Full type safety enforced across entire monorepo
- **Tauri Plugins**: Desktop app uses fs-extra and fs-watch plugins for enhanced file operations
- **Database Migrations**: Web app uses Drizzle Kit for schema management
- **Auto-updater**: Desktop app integrates with web API for seamless updates