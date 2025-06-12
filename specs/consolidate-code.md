# Code Consolidation Plan for Haptic Monorepo

## Overview

This document outlines a strategy to consolidate duplicated code between the web and desktop apps, ensuring feature parity while simplifying development workflows.

## Current State Analysis

### Identified Duplications

1. **Constants** (`apps/*/src/lib/constants.ts`)
   - `SHORTCUTS` - Identical keyboard shortcuts configuration
   - `BASE_APP_SETTINGS` - Default app settings
   - `BASE_COLLECTION_SETTINGS` - Editor and notes configuration

2. **Types** (`apps/*/src/lib/types.ts`)
   - `ShortcutParams` - Keyboard shortcut interface
   - `AppSettingsParams` - App settings interface
   - `CollectionSettingsParams` - Collection configuration
   - `SettingsStateParams` - Settings UI state

3. **Components** (Nearly identical implementations)
   - `shared/shortcut.svelte` - Keyboard shortcut handler
   - `shared/command-menu/commands.ts` - Command definitions
   - `shared/editor/extensions/searchAndReplace.ts` - Editor extension

4. **Actions** (`apps/*/src/lib/actions/`)
   - `shortcut.ts` - Svelte action for keyboard shortcuts

## Consolidation Strategy

### Phase 1: Create Shared Core Package

Create `packages/core/` to house shared business logic:

```
packages/core/
├── package.json
├── src/
│   ├── constants/
│   │   ├── shortcuts.ts      # SHORTCUTS configuration
│   │   ├── settings.ts       # BASE_APP_SETTINGS, BASE_COLLECTION_SETTINGS
│   │   └── index.ts          # Re-exports
│   ├── types/
│   │   ├── shortcuts.ts      # ShortcutParams
│   │   ├── settings.ts       # Settings-related types
│   │   ├── common.ts         # Shared interfaces
│   │   └── index.ts          # Re-exports
│   ├── actions/
│   │   ├── shortcut.ts       # Shared shortcut action
│   │   └── index.ts          # Re-exports
│   ├── utils/
│   │   ├── shortcuts.ts      # Shortcut utilities
│   │   ├── common.ts         # Shared utility functions
│   │   └── index.ts          # Re-exports
│   └── index.ts              # Main exports
```

### Phase 2: Create Shared Components Package

Create `packages/shared-components/` for complex shared components:

```
packages/shared-components/
├── package.json
├── src/
│   ├── command-menu/
│   │   ├── commands.ts       # Command definitions
│   │   ├── command.svelte    # Command menu component
│   │   ├── helpers.ts        # Command menu utilities
│   │   └── index.ts          # Re-exports
│   ├── editor/
│   │   ├── extensions/
│   │   │   ├── searchAndReplace.ts
│   │   │   └── index.ts
│   │   ├── components/
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── shortcuts/
│   │   ├── shortcut.svelte   # Shortcut component
│   │   └── index.ts
│   └── index.ts
```

### Phase 3: Platform Abstraction Layer

Create platform-specific adapters to handle differences:

```
packages/core/src/adapters/
├── filesystem.ts             # FileSystem interface
├── platform.ts              # Platform detection
└── index.ts
```

```typescript
// Platform abstraction example
export interface FileSystemAdapter {
  readFile(path: string): Promise<string>;
  writeFile(path: string, content: string): Promise<void>;
  exists(path: string): Promise<boolean>;
  // ... other methods
}

export interface PlatformAdapter {
  filesystem: FileSystemAdapter;
  showInFolder?: (path: string) => Promise<void>;
  openExternal?: (url: string) => Promise<void>;
}
```

### Phase 4: Feature Flag System

```typescript
// packages/core/src/features/index.ts
export interface FeatureFlags {
  nativeFileSystem: boolean;
  autoUpdater: boolean;
  showInFolder: boolean;
  systemIntegration: boolean;
}

export const PLATFORM_FEATURES: Record<string, FeatureFlags> = {
  desktop: {
    nativeFileSystem: true,
    autoUpdater: true,
    showInFolder: true,
    systemIntegration: true,
  },
  web: {
    nativeFileSystem: false,
    autoUpdater: false,
    showInFolder: false,
    systemIntegration: false,
  }
};
```

## Implementation Plan

### Step 1: Setup Core Package

1. Create `packages/core/package.json`:
```json
{
  "name": "@haptic/core",
  "version": "0.1.0",
  "type": "module",
  "exports": {
    ".": "./src/index.ts",
    "./constants": "./src/constants/index.ts",
    "./types": "./src/types/index.ts",
    "./actions": "./src/actions/index.ts",
    "./utils": "./src/utils/index.ts"
  },
  "dependencies": {
    "svelte": "^4.0.0"
  },
  "devDependencies": {
    "@haptic/eslint-config": "workspace:*"
  }
}
```

2. Move shared constants:
   - Extract `SHORTCUTS` from both apps
   - Extract `BASE_APP_SETTINGS` and `BASE_COLLECTION_SETTINGS`
   - Create unified constants with platform-specific overrides

3. Move shared types:
   - Extract common interfaces
   - Handle platform-specific type differences
   - Create type utilities for better DX

### Step 2: Update App Dependencies

Update both app `package.json` files:
```json
{
  "dependencies": {
    "@haptic/core": "workspace:*",
    "@haptic/shared-components": "workspace:*"
  }
}
```

### Step 3: Refactor Apps

1. **Replace imports**:
```typescript
// Before
import { SHORTCUTS } from '@/constants';
import type { ShortcutParams } from '@/types';

// After  
import { SHORTCUTS } from '@haptic/core/constants';
import type { ShortcutParams } from '@haptic/core/types';
```

2. **Remove duplicated files**:
   - Delete duplicated constants, types, and actions
   - Update import paths throughout codebase

3. **Platform-specific implementations**:
```typescript
// apps/desktop/src/lib/platform.ts
import type { PlatformAdapter } from '@haptic/core/adapters';
import { TauriFileSystemAdapter } from './adapters/filesystem';

export const platformAdapter: PlatformAdapter = {
  filesystem: new TauriFileSystemAdapter(),
  showInFolder: (path) => showInFolder(path),
  openExternal: (url) => open(url)
};

// apps/web/src/lib/platform.ts  
import type { PlatformAdapter } from '@haptic/core/adapters';
import { WebFileSystemAdapter } from './adapters/filesystem';

export const platformAdapter: PlatformAdapter = {
  filesystem: new WebFileSystemAdapter()
};
```

### Step 4: Development Workflow Improvements

1. **Add development scripts**:
```json
{
  "scripts": {
    "dev:all": "concurrently \"pnpm dev:desktop\" \"pnpm dev:web\"",
    "build:packages": "turbo build --filter='@haptic/*'",
    "test:shared": "turbo test --filter='@haptic/*'",
    "lint:shared": "turbo lint --filter='@haptic/*'"
  }
}
```

2. **Create feature sync script**:
```javascript
// scripts/sync-features.js
// Script to ensure both apps implement the same features
```

## Benefits

### Immediate Benefits
- **Reduced Duplication**: ~40% reduction in duplicated code
- **Consistent Behavior**: Shared constants ensure identical shortcuts/settings
- **Easier Maintenance**: Single source of truth for core logic
- **Type Safety**: Shared types prevent interface drift

### Long-term Benefits
- **Feature Parity**: New features automatically available to both apps
- **Faster Development**: Write once, use everywhere
- **Better Testing**: Shared test utilities and fixtures
- **Easier Onboarding**: Clear separation of concerns

## Migration Checklist

### Phase 1: Core Package
- [ ] Create `packages/core` structure
- [ ] Move constants from both apps
- [ ] Move shared types
- [ ] Move shortcut action
- [ ] Update app dependencies
- [ ] Test both apps still work

### Phase 2: Shared Components  
- [ ] Create `packages/shared-components`
- [ ] Move command menu logic
- [ ] Move editor extensions
- [ ] Move shortcut component
- [ ] Update component imports
- [ ] Test component functionality

### Phase 3: Platform Abstraction
- [ ] Create adapter interfaces
- [ ] Implement desktop adapters
- [ ] Implement web adapters
- [ ] Add feature flag system
- [ ] Update apps to use adapters

### Phase 4: Workflow Improvements
- [ ] Add parallel development scripts
- [ ] Create feature sync tooling
- [ ] Add shared testing utilities
- [ ] Update documentation

## Risk Mitigation

1. **Gradual Migration**: Implement in phases to minimize disruption
2. **Comprehensive Testing**: Test both apps after each phase
3. **Rollback Plan**: Keep git history clean for easy rollbacks
4. **Documentation**: Update all relevant documentation
5. **Team Communication**: Ensure all developers understand new structure

## Success Metrics

- [ ] Zero duplicated constants/types between apps
- [ ] Both apps pass all existing tests
- [ ] New features can be added to both apps simultaneously
- [ ] Development setup time reduced by 50%
- [ ] Code review time reduced due to less duplication

---

*This consolidation plan should be implemented incrementally, with thorough testing at each phase to ensure both applications maintain their functionality while gaining the benefits of shared code.*

## Additional Improvement Opportunities

Beyond code consolidation, here are additional areas to improve simplification, maintainability, and developer experience:

### 1. Testing Infrastructure 🚨

**Problem**: Zero test coverage across the entire monorepo

**Solution**: Implement comprehensive testing strategy
```bash
packages/test-utils/
├── setup.ts              # Test environment setup
├── mocks/               # Platform mocks
│   ├── tauri.ts        # Mock Tauri APIs
│   ├── pglite.ts       # Mock PGLite
│   └── filesystem.ts   # Mock FS operations
└── fixtures/            # Test data
    ├── notes.ts        # Sample notes
    └── settings.ts     # Test configurations
```

**Implementation**:
- Add Vitest for unit/integration testing
- Playwright for E2E testing
- Coverage reporting with c8
- Pre-commit hooks to ensure tests pass

### 2. Type Safety Improvements

**Problem**: Loose TypeScript configuration, no shared tsconfig

**Solution**: Create strict shared TypeScript configuration
```json
// packages/tsconfig/base.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### 3. State Management Architecture

**Problem**: All stores in single file, no clear patterns

**Solution**: Implement store factories and patterns
```typescript
// packages/state/
├── stores/
│   ├── createPersistentStore.ts   // LocalStorage/DB sync
│   ├── createDerivedStore.ts      // Computed values
│   ├── createContextStore.ts      // Scoped state
│   └── createHistoryStore.ts      // Undo/redo support
├── hooks/
│   ├── useStore.ts                 // Type-safe store hooks
│   └── useStoreSubscription.ts    // Optimized subscriptions
└── middleware/
    ├── logger.ts                   // State change logging
    └── devtools.ts                 // Redux DevTools integration
```

### 4. API Layer Abstraction

**Problem**: Duplicated API logic with platform-specific implementations

**Solution**: Create unified API client with adapters
```typescript
// packages/api/
├── client/
│   ├── base.ts                    // Abstract base client
│   ├── types.ts                   // API interfaces
│   └── errors.ts                  // Custom error classes
├── endpoints/
│   ├── notes.ts                   // Notes API logic
│   ├── folders.ts                 // Folders API logic
│   └── settings.ts                // Settings API logic
└── adapters/
    ├── tauri.ts                   // Desktop implementation
    └── web.ts                     // Web implementation
```

### 5. Error Handling & Monitoring

**Problem**: No error boundaries, no logging strategy

**Solution**: Implement comprehensive error handling
```typescript
// packages/monitoring/
├── error-boundary.svelte          // Global error handling
├── logger.ts                      // Structured logging
├── sentry.ts                      // Error tracking integration
├── analytics.ts                   // Usage analytics
└── performance.ts                 // Performance monitoring
```

### 6. Performance Optimizations

**Problem**: No performance optimization strategy

**Solution**: Implement performance patterns
- Lazy loading routes with dynamic imports
- Virtual scrolling for large note lists
- Debounced autosave with diff tracking
- Service worker for web app offline mode
- Image optimization pipeline
- Bundle size analysis and optimization

### 7. Enhanced Developer Tooling

```json
// package.json - Enhanced scripts
{
  "scripts": {
    "dev:all": "concurrently -n desktop,web,ui \"pnpm dev:desktop\" \"pnpm dev:web\" \"pnpm -C packages/ui dev\"",
    "typecheck": "turbo typecheck",
    "test": "turbo test",
    "test:unit": "vitest",
    "test:e2e": "playwright test",
    "test:coverage": "vitest run --coverage",
    "analyze": "turbo analyze",
    "analyze:bundle": "vite-bundle-visualizer",
    "changeset": "changeset",
    "version": "changeset version",
    "release": "turbo build && changeset publish",
    "clean": "turbo clean && rm -rf node_modules",
    "deps:check": "syncpack list-mismatches",
    "deps:fix": "syncpack fix-mismatches",
    "generate:component": "plop component",
    "generate:route": "plop route"
  }
}
```

### 8. Documentation Generation

**Problem**: No automated documentation

**Solution**: Auto-generate docs from code
- TypeDoc for API documentation
- Storybook for UI components
- Architecture Decision Records (ADRs)
- Interactive component playground
- API endpoint documentation
- Deployment guides

### 9. Build Pipeline Optimization

```json
// turbo.json improvements
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "typecheck": { 
      "dependsOn": ["^typecheck"],
      "outputs": []
    },
    "test": { 
      "dependsOn": ["typecheck"],
      "outputs": ["coverage/**"]
    },
    "build": { 
      "dependsOn": ["^build", "typecheck", "test"],
      "outputs": ["dist/**", ".svelte-kit/**"],
      "env": ["NODE_ENV", "PUBLIC_*"]
    },
    "analyze": {
      "dependsOn": ["build"],
      "outputs": ["stats/**"]
    },
    "lint": {
      "outputs": []
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

### 10. Accessibility Framework

**Problem**: Limited accessibility support

**Solution**: Comprehensive a11y framework
```typescript
// packages/a11y/
├── components/
│   ├── SkipLink.svelte            // Skip navigation
│   ├── Announcer.svelte           // Screen reader announcements
│   ├── FocusTrap.svelte           // Modal focus management
│   └── VisuallyHidden.svelte      // SR-only content
├── actions/
│   ├── trapFocus.ts               // Focus management action
│   ├── announceRoute.ts           // Route change announcements
│   └── keyboardNav.ts             // Keyboard navigation helpers
└── utils/
    ├── aria.ts                    // ARIA helpers
    └── contrast.ts                // Color contrast utilities
```

### 11. Environment Configuration

**Problem**: No centralized configuration management

**Solution**: Type-safe environment configuration
```typescript
// packages/config/
├── env.ts                         // Type-safe env vars
├── feature-flags.ts               // Runtime feature toggles
├── schemas/
│   ├── env.schema.ts              // Zod validation for env
│   └── settings.schema.ts         // Settings validation
└── loaders/
    ├── env.loader.ts              // Environment loader
    └── remote.loader.ts           // Remote config loader
```

### 12. Code Generation

**Problem**: Manual boilerplate creation

**Solution**: Automate repetitive tasks
```bash
# scripts/generators/
├── component.generator.ts         # pnpm generate:component Button
├── route.generator.ts            # pnpm generate:route settings
├── api.generator.ts              # pnpm generate:api tags
├── store.generator.ts            # pnpm generate:store user
└── templates/                    # Generator templates
    ├── component.hbs
    ├── route.hbs
    └── store.hbs
```

### 13. Monorepo Tooling

**Problem**: Basic monorepo setup

**Solution**: Enhanced monorepo management
- **Changesets**: Version management and changelogs
- **Manypkg**: Workspace dependency validation
- **Syncpack**: Keep dependency versions in sync
- **Sherif**: Lint monorepo structure
- **Dependency cruiser**: Visualize and validate dependencies

### 14. CSS Architecture

**Problem**: No design token system

**Solution**: Implement design tokens
```scss
// packages/styles/
├── tokens/
│   ├── colors.css                // Color palette
│   ├── spacing.css               // Spacing scale
│   ├── typography.css            // Type system
│   ├── shadows.css               // Elevation system
│   └── motion.css                // Animation tokens
├── utilities/
│   ├── animations.css            // Keyframe animations
│   └── utilities.css             // Utility classes
└── themes/
    ├── light.css                 // Light theme
    ├── dark.css                  // Dark theme
    └── contrast.css              // High contrast theme
```

### 15. Real-time Collaboration Prep

**Problem**: No foundation for future collaboration features

**Solution**: Build collaboration infrastructure
```typescript
// packages/sync/
├── crdt/                         // Conflict-free replicated data types
│   ├── yjs.ts                   // Yjs integration
│   └── loro.ts                  // Loro CRDT option
├── presence/                     // User presence
│   ├── cursor.ts                // Cursor positions
│   └── selection.ts             // Selection state
└── transport/                    // Sync transports
    ├── websocket.ts             // WebSocket transport
    └── webrtc.ts                // P2P transport
```

## Quick Wins Priority List

1. **Add Testing** (1 week)
   - Biggest impact on quality
   - Start with critical paths
   - Add to CI/CD pipeline

2. **Create @haptic/api** (3 days)
   - Reduce API duplication
   - Improve maintainability
   - Enable easier testing

3. **Add Error Boundaries** (1 day)
   - Improve user experience
   - Better error tracking
   - Graceful degradation

4. **Setup Changesets** (2 hours)
   - Better version management
   - Automated changelogs
   - Safer releases

5. **Add TypeDoc** (4 hours)
   - Auto-generate API docs
   - Better onboarding
   - Reduce knowledge silos

6. **Implement Logging** (1 day)
   - Debug production issues
   - Performance monitoring
   - User behavior insights

7. **Add Bundle Analysis** (2 hours)
   - Identify size issues
   - Optimize imports
   - Improve load times

## Implementation Roadmap

### Month 1: Foundation
- Week 1: Testing infrastructure
- Week 2: Core package creation
- Week 3: API abstraction layer
- Week 4: Error handling & logging

### Month 2: Developer Experience
- Week 1: Enhanced tooling & scripts
- Week 2: Documentation generation
- Week 3: Type safety improvements
- Week 4: Code generation tools

### Month 3: Performance & Polish
- Week 1: Performance optimizations
- Week 2: Accessibility framework
- Week 3: CSS architecture
- Week 4: Final integration & testing

## Success Metrics

- [ ] 80%+ test coverage achieved
- [ ] Build times reduced by 50%
- [ ] Zero runtime errors in production
- [ ] Documentation coverage >90%
- [ ] Bundle size reduced by 30%
- [ ] Accessibility score >95
- [ ] Developer onboarding time <1 day
- [ ] Feature development velocity increased 2x

---

*These improvements will transform the Haptic codebase into a maintainable, scalable, and developer-friendly monorepo that can support rapid feature development while maintaining high quality standards.*
