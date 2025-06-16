import { os } from '@orpc/server';
import { z } from 'zod';
import { eq, desc, like, and, count } from 'drizzle-orm';
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
import { handleDatabaseOperation, NotFoundError } from '../middleware/database.js';
import { requireAuth } from '../middleware/auth.js';
import {
  collection,
  collectionSettings,
  type Collection,
  type CollectionSettings
} from '@typyst/db';

// Transform database collection to API schema
const transformCollection = (dbCollection: Collection) => ({
  path: dbCollection.path,
  name: dbCollection.name,
  lastOpened: dbCollection.lastOpened.toISOString(),
  userId: dbCollection.userId || ''
});

// Transform database collection settings to API schema
const transformCollectionSettings = (dbSettings: CollectionSettings) => ({
  collectionPath: dbSettings.collectionPath,
  editor: dbSettings.editor as Record<string, unknown>,
  notes: dbSettings.notes as Record<string, unknown>,
  userId: dbSettings.userId || ''
});

/**
 * Collections router for managing user collections
 */
export const collectionsRouter = {
  /**
   * List user's collections with pagination and filtering
   */
  list: os
    .use(requireAuth)
    .input(ListCollectionsInputSchema)
    .output(CollectionsResponseSchema)
    .handler(async ({ input, context }) => {
      const { pagination = { page: 1, limit: 20 }, search, userId } = input;
      const targetUserId = userId || context.user.id;

      return handleDatabaseOperation(async () => {
        // Build where conditions
        const whereConditions = [eq(collection.userId, targetUserId)];
        if (search) {
          whereConditions.push(like(collection.name, `%${search}%`));
        }

        // Get count for pagination
        const [countResult] = await context.db.db
          .select({ count: count() })
          .from(collection)
          .where(and(...whereConditions));

        const totalCount = countResult?.count || 0;
        const offset = (pagination.page - 1) * pagination.limit;

        // Get data
        const results = await context.db.db
          .select()
          .from(collection)
          .where(and(...whereConditions))
          .orderBy(desc(collection.lastOpened))
          .offset(offset)
          .limit(pagination.limit);

        return {
          items: results.map(transformCollection),
          pagination: {
            page: pagination.page,
            limit: pagination.limit,
            total: totalCount,
            hasMore: results.length === pagination.limit
          }
        };
      }, 'Failed to list collections');
    }),

  /**
   * Get a specific collection by path
   */
  get: os
    .use(requireAuth)
    .input(GetCollectionInputSchema)
    .output(CollectionSchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const [result] = await context.db.db
          .select()
          .from(collection)
          .where(and(eq(collection.path, input.path), eq(collection.userId, context.user.id)));

        if (!result) {
          throw new NotFoundError('Collection', input.path);
        }

        return transformCollection(result);
      }, 'Failed to get collection');
    }),

  /**
   * Create a new collection
   */
  create: os
    .use(requireAuth)
    .input(CreateCollectionSchema)
    .output(CollectionSchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const newCollection = {
          path: input.path,
          name: input.name,
          lastOpened: new Date(),
          userId: context.user.id
        };

        const [created] = await context.db.db.insert(collection).values(newCollection).returning();

        // Create default settings if provided
        if (input.settings) {
          await context.db.db.insert(collectionSettings).values({
            collectionPath: created.path,
            editor: input.settings.editor || {},
            notes: input.settings.notes || {},
            userId: context.user.id
          });
        }

        return transformCollection(created);
      }, 'Failed to create collection');
    }),

  /**
   * Update an existing collection
   */
  update: os
    .use(requireAuth)
    .input(UpdateCollectionInputSchema)
    .output(CollectionSchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const updateData: Partial<Pick<Collection, 'name' | 'lastOpened'>> = {};
        if (input.data.name) updateData.name = input.data.name;
        if (input.data.lastOpened) updateData.lastOpened = new Date(input.data.lastOpened);

        const [updated] = await context.db.db
          .update(collection)
          .set(updateData)
          .where(and(eq(collection.path, input.path), eq(collection.userId, context.user.id)))
          .returning();

        if (!updated) {
          throw new NotFoundError('Collection', input.path);
        }

        return transformCollection(updated);
      }, 'Failed to update collection');
    }),

  /**
   * Delete a collection
   */
  delete: os
    .use(requireAuth)
    .input(DeleteCollectionInputSchema)
    .output(SuccessResponseSchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const [deleted] = await context.db.db
          .delete(collection)
          .where(and(eq(collection.path, input.path), eq(collection.userId, context.user.id)))
          .returning();

        if (!deleted) {
          throw new NotFoundError('Collection', input.path);
        }

        return { success: true, message: 'Collection deleted successfully' };
      }, 'Failed to delete collection');
    }),

  /**
   * Get collection settings
   */
  getSettings: os
    .use(requireAuth)
    .input(z.object({ collectionPath: z.string().min(1) }))
    .output(CollectionSettingsSchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const [settings] = await context.db.db
          .select()
          .from(collectionSettings)
          .where(
            and(
              eq(collectionSettings.collectionPath, input.collectionPath),
              eq(collectionSettings.userId, context.user.id)
            )
          );

        if (!settings) {
          throw new NotFoundError('Collection settings', input.collectionPath);
        }

        return transformCollectionSettings(settings);
      }, 'Failed to get collection settings');
    }),

  /**
   * Update collection settings
   */
  updateSettings: os
    .use(requireAuth)
    .input(
      z.object({
        collectionPath: z.string().min(1),
        settings: UpdateCollectionSettingsSchema
      })
    )
    .output(CollectionSettingsSchema)
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const updateData: Partial<Pick<CollectionSettings, 'editor' | 'notes'>> = {};
        if (input.settings.editor !== undefined) updateData.editor = input.settings.editor;
        if (input.settings.notes !== undefined) updateData.notes = input.settings.notes;

        const [updated] = await context.db.db
          .update(collectionSettings)
          .set(updateData)
          .where(
            and(
              eq(collectionSettings.collectionPath, input.collectionPath),
              eq(collectionSettings.userId, context.user.id)
            )
          )
          .returning();

        if (!updated) {
          throw new NotFoundError('Collection settings', input.collectionPath);
        }

        return transformCollectionSettings(updated);
      }, 'Failed to update collection settings');
    }),

  /**
   * Get recently opened collections
   */
  getRecent: os
    .use(requireAuth)
    .input(
      z.object({
        limit: z.number().min(1).max(50).default(10)
      })
    )
    .output(z.array(CollectionSchema))
    .handler(async ({ input, context }) => {
      return handleDatabaseOperation(async () => {
        const recent = await context.db.db
          .select()
          .from(collection)
          .where(eq(collection.userId, context.user.id))
          .orderBy(desc(collection.lastOpened))
          .limit(input.limit);

        return recent.map(transformCollection);
      }, 'Failed to get recent collections');
    })
};
