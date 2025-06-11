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
