# Task 29: Enhance @typyst/auth Package with @typyst/db Integration

## Overview

Refactor the existing `@typyst/auth` package to use the new `@typyst/db` package while maintaining backward compatibility and the existing API surface for seamless integration.

## Context

The `@typyst/auth` package currently exists and provides Better Auth integration. With the creation of the `@typyst/db` package, we need to update the auth package to use centralized database schema and clients while maintaining compatibility.

## Goals

1. Integrate `@typyst/db` as a dependency
2. Update authentication configuration to use database adapter from `@typyst/db`
3. Maintain backward compatibility with existing API
4. Improve type safety using shared schema types
5. Update all database operations to use typed clients

## Implementation Steps

1. Add @typyst/db as workspace dependency
2. Update server configuration to accept database adapter
3. Re-export types from @typyst/db/schema/auth
4. Maintain backward compatibility layer
5. Update client and Svelte integration
6. Create migration documentation

## Testing Strategy

- Unit tests for configuration changes
- Integration tests with @typyst/db
- Backward compatibility tests
- Type safety verification

## Acceptance Criteria

- [ ] Package integrates with @typyst/db successfully
- [ ] Backward compatibility maintained
- [ ] All auth operations work with new type system
- [ ] Documentation updated with migration guide
- [ ] Tests pass for all scenarios 