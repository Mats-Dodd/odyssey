import { os } from '@orpc/server';
import { z } from 'zod';
import {
  EntrySchema,
  CreateEntrySchema,
  UpdateEntrySchema,
  EntryTreeNodeSchema,
  GetEntryInputSchema,
  UpdateEntryInputSchema,
  ListEntriesInputSchema,
  BulkDeleteEntriesInputSchema,
  BulkMoveEntriesInputSchema,
  SearchEntriesInputSchema
} from '../schemas/entries.js';
import { SuccessResponseSchema, createPaginatedResponseSchema } from '../schemas/common.js';

/**
 * Entries router for managing collection entries
 */
export const entriesRouter = {
  /**
   * List entries in a collection with pagination
   */
  list: os
    .input(ListEntriesInputSchema)
    .output(createPaginatedResponseSchema(EntrySchema))
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Get a specific entry by path
   */
  get: os
    .input(GetEntryInputSchema)
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
    .input(UpdateEntryInputSchema)
    .output(EntrySchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Delete an entry
   */
  delete: os
    .input(z.object({ path: z.string().min(1) }))
    .output(SuccessResponseSchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Bulk delete multiple entries
   */
  bulkDelete: os
    .input(BulkDeleteEntriesInputSchema)
    .output(SuccessResponseSchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Bulk move multiple entries to a new collection/parent
   */
  bulkMove: os
    .input(BulkMoveEntriesInputSchema)
    .output(SuccessResponseSchema)
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Search entries with advanced filtering
   */
  search: os
    .input(SearchEntriesInputSchema)
    .output(createPaginatedResponseSchema(EntrySchema))
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    }),

  /**
   * Get entry tree structure (hierarchical view)
   */
  getTree: os
    .input(
      z.object({
        collectionPath: z.string().min(1, 'Collection path is required'),
        rootPath: z.string().optional()
      })
    )
    .output(z.array(EntryTreeNodeSchema))
    .handler(async ({ input: _input, context: _context }) => {
      throw new Error('Not implemented - local-first mode');
    })
};
