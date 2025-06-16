import { os } from '@orpc/server';
import { z } from 'zod';
import {
  CollectionSchema,
  CreateCollectionSchema,
  UpdateCollectionSchema,
  CollectionSettingsSchema,
  UpdateCollectionSettingsSchema
} from '../schemas/collections.js';
import { PaginationSchema } from '../schemas/common.js';

/**
 * Collections router for managing user collections
 */
export const collectionsRouter = {
  /**
   * List user's collections with pagination
   */
  list: os
    .input(
      z.object({
        pagination: PaginationSchema.optional(),
        search: z.string().optional()
      })
    )
    .output(
      z.object({
        collections: z.array(CollectionSchema),
        pagination: z.object({
          page: z.number(),
          limit: z.number(),
          total: z.number(),
          hasMore: z.boolean(),
          nextCursor: z.string().optional()
        })
      })
    )
    .handler(async ({ input: _input, context: _context }) => {
      // Implementation would go here when API server is built
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Get a specific collection by path
   */
  get: os
    .input(
      z.object({
        path: z.string()
      })
    )
    .output(CollectionSchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Create a new collection
   */
  create: os
    .input(CreateCollectionSchema)
    .output(CollectionSchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Update an existing collection
   */
  update: os
    .input(
      z.object({
        path: z.string(),
        data: UpdateCollectionSchema
      })
    )
    .output(CollectionSchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Delete a collection
   */
  delete: os
    .input(
      z.object({
        path: z.string()
      })
    )
    .output(z.object({ success: z.boolean() }))
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Get collection settings
   */
  getSettings: os
    .input(
      z.object({
        collectionPath: z.string()
      })
    )
    .output(CollectionSettingsSchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Update collection settings
   */
  updateSettings: os
    .input(
      z.object({
        collectionPath: z.string(),
        settings: UpdateCollectionSettingsSchema
      })
    )
    .output(CollectionSettingsSchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Get recently opened collections
   */
  getRecent: os
    .input(
      z.object({
        limit: z.number().min(1).max(50).default(10)
      })
    )
    .output(z.array(CollectionSchema))
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    })
};
