import { z } from 'zod';
import { IdSchema, TimestampSchema, SearchFiltersSchema } from './common.js';

// Collection schemas based on the database schema
export const CollectionSchema = z.object({
  path: z.string().min(1, 'Collection path is required'),
  name: z.string().min(1, 'Collection name is required').max(255),
  lastOpened: TimestampSchema,
  userId: IdSchema
});

export const CollectionSettingsSchema = z.object({
  collectionPath: z.string().min(1, 'Collection path is required'),
  editor: z.record(z.any()), // JSON object for editor settings
  notes: z.record(z.any()), // JSON object for notes settings
  userId: IdSchema
});

// Request schemas
export const CreateCollectionSchema = z.object({
  path: z.string().min(1, 'Collection path is required'),
  name: z.string().min(1, 'Collection name is required').max(255),
  settings: z
    .object({
      editor: z.record(z.any()).optional().default({}),
      notes: z.record(z.any()).optional().default({})
    })
    .optional()
});

export const UpdateCollectionSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  lastOpened: TimestampSchema.optional()
});

export const UpdateCollectionSettingsSchema = z.object({
  editor: z.record(z.any()).optional(),
  notes: z.record(z.any()).optional()
});

export const CollectionFiltersSchema = SearchFiltersSchema.extend({
  path: z.string().optional(),
  recentlyOpened: z.boolean().optional()
});

// Collection with settings combined
export const CollectionWithSettingsSchema = CollectionSchema.extend({
  settings: CollectionSettingsSchema.omit({
    collectionPath: true,
    userId: true
  }).optional()
});

// Response schemas
export const CollectionListItemSchema = CollectionSchema.pick({
  path: true,
  name: true,
  lastOpened: true
}).extend({
  entryCount: z.number().optional()
});

// Export inferred types
export type Collection = z.infer<typeof CollectionSchema>;
export type CollectionSettings = z.infer<typeof CollectionSettingsSchema>;
export type CreateCollection = z.infer<typeof CreateCollectionSchema>;
export type UpdateCollection = z.infer<typeof UpdateCollectionSchema>;
export type UpdateCollectionSettings = z.infer<typeof UpdateCollectionSettingsSchema>;
export type CollectionFilters = z.infer<typeof CollectionFiltersSchema>;
export type CollectionWithSettings = z.infer<typeof CollectionWithSettingsSchema>;
export type CollectionListItem = z.infer<typeof CollectionListItemSchema>;
