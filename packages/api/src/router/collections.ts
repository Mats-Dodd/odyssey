import { os } from '@orpc/server';
import { z } from 'zod';
import {
  CollectionSchema,
  CreateCollectionSchema,
  UpdateCollectionSchema,
  CollectionSettingsSchema,
  UpdateCollectionSettingsSchema,
  GetCollectionInputSchema,
  UpdateCollectionInputSchema,
  DeleteCollectionInputSchema,
  ListCollectionsInputSchema,
  CollectionsResponseSchema
} from '../schemas/collections.js';
import { SuccessResponseSchema } from '../schemas/common.js';

/**
 * Collections router for managing user collections
 */
export const collectionsRouter = {
  /**
   * List user's collections with pagination and filtering
   */
  list: os
    .input(ListCollectionsInputSchema)
    .output(CollectionsResponseSchema)
    .handler(async ({ input: _input, context: _context }) => {
      // Implementation would go here when API server is built
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Get a specific collection by path
   */
  get: os
    .input(GetCollectionInputSchema)
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
    .input(UpdateCollectionInputSchema)
    .output(CollectionSchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Delete a collection
   */
  delete: os
    .input(DeleteCollectionInputSchema)
    .output(SuccessResponseSchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Get collection settings
   */
  getSettings: os
    .input(z.object({ collectionPath: z.string().min(1) }))
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
        collectionPath: z.string().min(1),
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
