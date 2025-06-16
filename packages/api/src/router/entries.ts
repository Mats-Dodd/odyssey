import { os } from '@orpc/server';
import { z } from 'zod';
import {
  EntrySchema,
  CreateEntrySchema,
  UpdateEntrySchema,
  EntryTreeNodeSchema
} from '../schemas/entries.js';

/**
 * Entries router for managing collection entries
 */
export const entriesRouter = {
  /**
   * List entries in a collection
   */
  list: os
    .input(
      z.object({
        collectionPath: z.string(),
        parentPath: z.string().optional(),
        includeContent: z.boolean().optional().default(false)
      })
    )
    .output(z.array(EntrySchema))
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Get a specific entry
   */
  get: os
    .input(
      z.object({
        path: z.string()
      })
    )
    .output(EntrySchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Create a new entry
   */
  create: os
    .input(CreateEntrySchema)
    .output(EntrySchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Update an existing entry
   */
  update: os
    .input(
      z.object({
        path: z.string(),
        data: UpdateEntrySchema
      })
    )
    .output(EntrySchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Delete an entry
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
    })
};
