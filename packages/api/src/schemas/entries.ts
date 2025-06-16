import { z } from 'zod';
import { IdSchema, TimestampSchema, SearchFiltersSchema } from './common.js';

// Entry schemas based on the database schema
export const EntrySchema = z.object({
  path: z.string().min(1, 'Entry path is required'),
  name: z.string().max(255).optional(),
  parentPath: z.string().min(1, 'Parent path is required'),
  collectionPath: z.string().optional(),
  content: z.string().optional(),
  isFolder: z.boolean().default(false),
  size: z.number().optional(),
  createdAt: TimestampSchema,
  updatedAt: TimestampSchema,
  userId: IdSchema
});

// Request schemas
export const CreateEntrySchema = z.object({
  path: z.string().min(1, 'Entry path is required'),
  name: z.string().max(255).optional(),
  parentPath: z.string().min(1, 'Parent path is required'),
  collectionPath: z.string().optional(),
  content: z.string().optional(),
  isFolder: z.boolean().default(false)
});

export const UpdateEntrySchema = z.object({
  name: z.string().max(255).optional(),
  content: z.string().optional(),
  parentPath: z.string().optional(),
  collectionPath: z.string().optional()
});

export const MoveEntrySchema = z.object({
  newPath: z.string().min(1, 'New path is required'),
  newParentPath: z.string().min(1, 'New parent path is required')
});

export const EntryFiltersSchema = SearchFiltersSchema.extend({
  collectionPath: z.string().optional(),
  parentPath: z.string().optional(),
  isFolder: z.boolean().optional(),
  hasContent: z.boolean().optional()
});

// Define the interface first
export interface EntryTreeNode {
  path: string;
  name?: string;
  parentPath: string;
  collectionPath?: string;
  content?: string;
  isFolder: boolean;
  size?: number;
  createdAt: string;
  updatedAt: string;
  userId: string;
  children?: EntryTreeNode[];
}

// Tree structure schemas for hierarchical display
export const EntryTreeNodeSchema: z.ZodType<EntryTreeNode> = z.lazy(() =>
  z.object({
    path: z.string().min(1, 'Entry path is required'),
    name: z.string().max(255).optional(),
    parentPath: z.string().min(1, 'Parent path is required'),
    collectionPath: z.string().optional(),
    content: z.string().optional(),
    isFolder: z.boolean(),
    size: z.number().optional(),
    createdAt: TimestampSchema,
    updatedAt: TimestampSchema,
    userId: IdSchema,
    children: z.array(EntryTreeNodeSchema).optional()
  })
);

// Response schemas
export const EntryListItemSchema = EntrySchema.pick({
  path: true,
  name: true,
  isFolder: true,
  size: true,
  updatedAt: true
});

export const EntryWithContentSchema = EntrySchema;

// Bulk operations
export const BulkDeleteEntriesSchema = z.object({
  paths: z.array(z.string().min(1)).min(1, 'At least one path is required')
});

export const BulkMoveEntriesSchema = z.object({
  entries: z
    .array(
      z.object({
        path: z.string().min(1),
        newPath: z.string().min(1),
        newParentPath: z.string().min(1)
      })
    )
    .min(1, 'At least one entry is required')
});

// Export inferred types
export type Entry = z.infer<typeof EntrySchema>;
export type CreateEntry = z.infer<typeof CreateEntrySchema>;
export type UpdateEntry = z.infer<typeof UpdateEntrySchema>;
export type MoveEntry = z.infer<typeof MoveEntrySchema>;
export type EntryFilters = z.infer<typeof EntryFiltersSchema>;
export type EntryListItem = z.infer<typeof EntryListItemSchema>;
export type EntryWithContent = z.infer<typeof EntryWithContentSchema>;
export type BulkDeleteEntries = z.infer<typeof BulkDeleteEntriesSchema>;
export type BulkMoveEntries = z.infer<typeof BulkMoveEntriesSchema>;
