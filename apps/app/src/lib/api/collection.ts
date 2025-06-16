import { authDatabase as db } from '../database';
import { collection as collectionTable, entry as entryTable } from '@typyst/db/schema/app';
import { activeFile, collection, collectionEntries, noteHistory } from '@/store';
import type { FileEntry } from '@/types';
import { buildFileTree, sortFileEntry } from '@/utils';
import { and, eq } from 'drizzle-orm';
import { get } from 'svelte/store';

// Fetch the collection entries
export const fetchCollectionEntries = async (
	dirPath?: string,
	sort: 'name' | 'date' = 'name',
	showDotfiles = false,
	userId = 'user-123' // TODO: Get from auth context
): Promise<FileEntry[]> => {
	dirPath = dirPath || get(collection);
	if (!dirPath) throw new Error('No directory path provided');

	// Get collection by path
	const collectionObj = await db
		.select()
		.from(collectionTable)
		.where(and(
			eq(collectionTable.path, get(collection)),
			eq(collectionTable.userId, userId)
		));

	if (collectionObj.length === 0) throw new Error('Collection not found');

	// Read all entries linked to the collection
	const entries = await db
		.select()
		.from(entryTable)
		.where(
			and(
				eq(entryTable.collectionPath, get(collection)),
				eq(entryTable.userId, userId),
				dirPath !== get(collection) ? eq(entryTable.parentPath, dirPath) : undefined
			)
		);

	// Convert entries to FileEntry[] format with recursive children
	const fileEntries = buildFileTree(entries, dirPath);

	// Sort entries recursively
	const sortEntries = (entries: FileEntry[]) => {
		entries.sort((a, b) => {
			if (sort === 'name' && a.name && b.name) {
				return sortFileEntry(a, b);
			} else if (sort === 'date') {
				console.warn('Sorting by date is not implemented yet');
			}
			return 0;
		});

		entries.forEach((entry) => {
			if (entry.children) {
				sortEntries(entry.children);
			}
		});
	};

	sortEntries(fileEntries);

	// Hide dotfiles recursively
	const filterDotfiles = (entries: FileEntry[]): FileEntry[] => {
		return entries.filter((entry) => {
			if (!showDotfiles && entry.name?.startsWith('.')) {
				return false;
			}
			if (entry.children) {
				entry.children = filterDotfiles(entry.children);
			}
			return true;
		});
	};

	// Set collectionEntries if length is different
	collectionEntries.set(showDotfiles ? fileEntries : filterDotfiles(fileEntries));

	return showDotfiles ? fileEntries : filterDotfiles(fileEntries);
};

export const loadCollection = async (path?: string | undefined, userId = 'user-123') => {
	// Return if no path is provided
	if (!path) return;

	// Set collection path
	collection.set(path);

	// Reset all collection states
	noteHistory.set([]);
	activeFile.set(null);

	// Add collection to collections data
	const collectionObj = {
		path: path,
		name: path.split('/').pop()!,
		lastOpened: new Date(),
		userId
	};

	// Check if collection already exists
	const collections = await db
		.select()
		.from(collectionTable)
		.where(and(
			eq(collectionTable.path, path),
			eq(collectionTable.userId, userId)
		));

	if (collections && collections.length > 0) {
		// Update collection
		await db
			.update(collectionTable)
			.set({ lastOpened: new Date() })
			.where(and(
				eq(collectionTable.path, path),
				eq(collectionTable.userId, userId)
			));
	} else {
		// Insert collection
		await db.insert(collectionTable).values(collectionObj);
	}
};

// Get all collections
export const getCollections = async (userId = 'user-123'): Promise<(typeof collectionTable.$inferSelect)[]> => {
	const collections = await db
		.select()
		.from(collectionTable)
		.where(eq(collectionTable.userId, userId));

	return collections;
};
