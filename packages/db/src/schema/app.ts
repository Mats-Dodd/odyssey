import { pgTable, text, timestamp, boolean, bigint, jsonb } from 'drizzle-orm/pg-core';
import { user } from './auth.js';

export const collection = pgTable('collection', {
  path: text('path').primaryKey(),
  name: text('name').notNull(),
  lastOpened: timestamp('last_opened', { withTimezone: true }).notNull(),
  userId: text('user_id').references(() => user.id, { onDelete: 'cascade' })
});

export const collectionSettings = pgTable('collection_settings', {
  collectionPath: text('collection_path')
    .primaryKey()
    .references(() => collection.path),
  editor: jsonb('editor').notNull(),
  notes: jsonb('notes').notNull(),
  userId: text('user_id').references(() => user.id, { onDelete: 'cascade' })
});

export const entry = pgTable('entry', {
  path: text('path').primaryKey(),
  name: text('name'),
  parentPath: text('parent_path').notNull(),
  collectionPath: text('collection_path').references(() => collection.path),
  content: text('content'),
  isFolder: boolean('is_folder').default(false),
  size: bigint('size', { mode: 'number' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  userId: text('user_id').references(() => user.id, { onDelete: 'cascade' })
});

// Export types
export type Collection = typeof collection.$inferSelect;
export type NewCollection = typeof collection.$inferInsert;
export type CollectionSettings = typeof collectionSettings.$inferSelect;
export type NewCollectionSettings = typeof collectionSettings.$inferInsert;
export type Entry = typeof entry.$inferSelect;
export type NewEntry = typeof entry.$inferInsert;

// App schema export
export const appSchema = {
  collection,
  collectionSettings,
  entry
};
