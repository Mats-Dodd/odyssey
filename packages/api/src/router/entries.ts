import { os } from '@orpc/server';
import { z } from 'zod';
import { eq, desc, like, and, count, inArray } from 'drizzle-orm';
import {
  EntrySchema,
  CreateEntrySchema,
  EntryTreeNodeSchema,
  GetEntryInputSchema,
  UpdateEntryInputSchema,
  ListEntriesInputSchema,
  BulkDeleteEntriesInputSchema,
  BulkMoveEntriesInputSchema,
  SearchEntriesInputSchema
} from '../schemas/entries.js';
import { SuccessResponseSchema, createPaginatedResponseSchema } from '../schemas/common.js';
import { handleDatabaseOperation, NotFoundError } from '../middleware/database.js';
import { requireAuth } from '../middleware/auth.js';
import { entry, type Entry } from '@typyst/db';

// Transform database entry to API schema
const transformEntry = (dbEntry: Entry) => ({
  path: dbEntry.path,
  name: dbEntry.name || '',
  parentPath: dbEntry.parentPath,
  collectionPath: dbEntry.collectionPath || '',
  content: dbEntry.content || '',
  isFolder: dbEntry.isFolder || false,
  size: dbEntry.size || 0,
  createdAt: dbEntry.createdAt.toISOString(),
  updatedAt: dbEntry.updatedAt.toISOString(),
  userId: dbEntry.userId || ''
});

/**
 * Entries router for managing collection entries
 */
export const entriesRouter = {
  /**
   * List entries in a collection with pagination
   */
  list: os
    .use(requireAuth)
    .input(ListEntriesInputSchema)
    .output(createPaginatedResponseSchema(EntrySchema))
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        // Build where conditions
        const whereConditions = [
          eq(entry.collectionPath, input.collectionPath),
          eq(entry.userId, context.user.id)
        ];

        if (input.parentPath) {
          whereConditions.push(eq(entry.parentPath, input.parentPath));
        }

        // Get count for pagination
        const [countResult] = await context.db.db
          .select({ count: count() })
          .from(entry)
          .where(and(...whereConditions));

        const totalCount = countResult?.count || 0;
        const pagination = input.pagination || { page: 1, limit: 20 };
        const offset = (pagination.page - 1) * pagination.limit;

        // Get data - conditionally exclude content for performance
        const query = context.db.db
          .select()
          .from(entry)
          .where(and(...whereConditions))
          .orderBy(desc(entry.updatedAt))
          .offset(offset)
          .limit(pagination.limit);

        const results = await query;

        // Transform results to match schema
        const transformedResults = results.map((result) => ({
          ...transformEntry(result),
          // Optionally exclude content if not requested
          content: input.includeContent ? result.content || '' : ''
        }));

        return {
          items: transformedResults,
          pagination: {
            page: pagination.page,
            limit: pagination.limit,
            total: totalCount,
            hasMore: results.length === pagination.limit
          }
        };
      }, 'Failed to list entries');
    }),

  /**
   * Get a specific entry by path
   */
  get: os
    .use(requireAuth)
    .input(GetEntryInputSchema)
    .output(EntrySchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const [result] = await context.db.db
          .select()
          .from(entry)
          .where(and(eq(entry.path, input.path), eq(entry.userId, context.user.id)));

        if (!result) {
          throw new NotFoundError('Entry', input.path);
        }

        return transformEntry(result);
      }, 'Failed to get entry');
    }),

  /**
   * Create a new entry
   */
  create: os
    .use(requireAuth)
    .input(CreateEntrySchema)
    .output(EntrySchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const newEntry = {
          path: input.path,
          name: input.name,
          parentPath: input.parentPath,
          collectionPath: input.collectionPath,
          content: input.content,
          isFolder: input.isFolder || false,
          userId: context.user.id
        };

        const [created] = await context.db.db.insert(entry).values(newEntry).returning();

        return transformEntry(created);
      }, 'Failed to create entry');
    }),

  /**
   * Update an existing entry
   */
  update: os
    .use(requireAuth)
    .input(UpdateEntryInputSchema)
    .output(EntrySchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const updateData: Partial<
          Pick<Entry, 'name' | 'content' | 'parentPath' | 'collectionPath' | 'updatedAt'>
        > = { updatedAt: new Date() };
        if (input.data.name !== undefined) updateData.name = input.data.name;
        if (input.data.content !== undefined) updateData.content = input.data.content;
        if (input.data.parentPath !== undefined) updateData.parentPath = input.data.parentPath;
        if (input.data.collectionPath !== undefined)
          updateData.collectionPath = input.data.collectionPath;

        const [updated] = await context.db.db
          .update(entry)
          .set(updateData)
          .where(and(eq(entry.path, input.path), eq(entry.userId, context.user.id)))
          .returning();

        if (!updated) {
          throw new NotFoundError('Entry', input.path);
        }

        return transformEntry(updated);
      }, 'Failed to update entry');
    }),

  /**
   * Delete an entry
   */
  delete: os
    .use(requireAuth)
    .input(z.object({ path: z.string().min(1) }))
    .output(SuccessResponseSchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const [deleted] = await context.db.db
          .delete(entry)
          .where(and(eq(entry.path, input.path), eq(entry.userId, context.user.id)))
          .returning();

        if (!deleted) {
          throw new NotFoundError('Entry', input.path);
        }

        return { success: true, message: 'Entry deleted successfully' };
      }, 'Failed to delete entry');
    }),

  /**
   * Bulk delete multiple entries
   */
  bulkDelete: os
    .use(requireAuth)
    .input(BulkDeleteEntriesInputSchema)
    .output(SuccessResponseSchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const deleted = await context.db.db
          .delete(entry)
          .where(and(inArray(entry.path, input.paths), eq(entry.userId, context.user.id)))
          .returning();

        return {
          success: true,
          message: `Successfully deleted ${deleted.length} entries`
        };
      }, 'Failed to bulk delete entries');
    }),

  /**
   * Bulk move multiple entries to a new collection/parent
   */
  bulkMove: os
    .use(requireAuth)
    .input(BulkMoveEntriesInputSchema)
    .output(SuccessResponseSchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const updateData: Partial<Pick<Entry, 'collectionPath' | 'parentPath' | 'updatedAt'>> = {
          collectionPath: input.targetCollectionPath,
          updatedAt: new Date()
        };

        if (input.targetParentPath) {
          updateData.parentPath = input.targetParentPath;
        }

        const updated = await context.db.db
          .update(entry)
          .set(updateData)
          .where(and(inArray(entry.path, input.paths), eq(entry.userId, context.user.id)))
          .returning();

        return {
          success: true,
          message: `Successfully moved ${updated.length} entries`
        };
      }, 'Failed to bulk move entries');
    }),

  /**
   * Search entries with advanced filtering
   */
  search: os
    .use(requireAuth)
    .input(SearchEntriesInputSchema)
    .output(createPaginatedResponseSchema(EntrySchema))
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        // Build where conditions
        const whereConditions = [eq(entry.userId, context.user.id)];

        if (input.collectionPath) {
          whereConditions.push(eq(entry.collectionPath, input.collectionPath));
        }

        if (input.type !== 'all') {
          whereConditions.push(eq(entry.isFolder, input.type === 'folder'));
        }

        // Search in name and content (handling nullable content)
        const nameCondition = like(entry.name, `%${input.query}%`);
        const contentCondition = like(entry.content, `%${input.query}%`);

        // Use separate conditions since content might be nullable
        whereConditions.push(nameCondition);
        if (contentCondition) {
          whereConditions.push(contentCondition);
        }

        // Get count for pagination
        const [countResult] = await context.db.db
          .select({ count: count() })
          .from(entry)
          .where(and(...whereConditions));

        const totalCount = countResult?.count || 0;
        const pagination = input.pagination || { page: 1, limit: 20 };
        const offset = (pagination.page - 1) * pagination.limit;

        // Get data
        const results = await context.db.db
          .select()
          .from(entry)
          .where(and(...whereConditions))
          .orderBy(desc(entry.updatedAt))
          .offset(offset)
          .limit(pagination.limit);

        return {
          items: results.map(transformEntry),
          pagination: {
            page: pagination.page,
            limit: pagination.limit,
            total: totalCount,
            hasMore: results.length === pagination.limit
          }
        };
      }, 'Failed to search entries');
    }),

  /**
   * Get entry tree structure (hierarchical view)
   */
  getTree: os
    .use(requireAuth)
    .input(
      z.object({
        collectionPath: z.string().min(1, 'Collection path is required'),
        rootPath: z.string().optional()
      })
    )
    .output(z.array(EntryTreeNodeSchema))
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        // For now, return a flat list - tree building would be done client-side
        // or in a more complex query
        const rootPath = input.rootPath || input.collectionPath;

        const results = await context.db.db
          .select()
          .from(entry)
          .where(
            and(
              eq(entry.collectionPath, input.collectionPath),
              eq(entry.parentPath, rootPath),
              eq(entry.userId, context.user.id)
            )
          )
          .orderBy(entry.name);

        // Transform results to match schema
        return results.map((result) => ({
          ...transformEntry(result),
          children: [] // Could be populated with recursive query
        }));
      }, 'Failed to get entry tree');
    })
};
