import type { AppRouter } from '../router/index.js';

/**
 * Type helpers for router input/output inference
 * These types enable perfect type safety for TanStack Query implementations
 */

/**
 * Infer input types for all router operations
 * Usage: RouterInputs['collections']['list']
 */
export type RouterInputs = {
  [K in keyof AppRouter]: {
    [P in keyof AppRouter[K]]: AppRouter[K][P] extends { input: infer I } ? I : never;
  };
};

/**
 * Infer output types for all router operations
 * Usage: RouterOutputs['collections']['list']
 */
export type RouterOutputs = {
  [K in keyof AppRouter]: {
    [P in keyof AppRouter[K]]: AppRouter[K][P] extends { output: infer O } ? O : never;
  };
};

/**
 * Helper type to extract input type for a specific operation
 * Usage: OperationInput<'collections', 'list'>
 */
export type OperationInput<
  TRouter extends keyof AppRouter,
  TOperation extends keyof AppRouter[TRouter]
> = RouterInputs[TRouter][TOperation];

/**
 * Helper type to extract output type for a specific operation
 * Usage: OperationOutput<'collections', 'list'>
 */
export type OperationOutput<
  TRouter extends keyof AppRouter,
  TOperation extends keyof AppRouter[TRouter]
> = RouterOutputs[TRouter][TOperation];
