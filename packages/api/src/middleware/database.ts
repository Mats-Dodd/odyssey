import { os } from '@orpc/server';
import type { Context } from '../types/context.js';

// Database errors
export class DatabaseError extends Error {
  constructor(message = 'Database operation failed') {
    super(message);
    this.name = 'DatabaseError';
  }
}

export class NotFoundError extends Error {
  constructor(resource = 'Resource', id?: string) {
    super(id ? `${resource} with id ${id} not found` : `${resource} not found`);
    this.name = 'NotFoundError';
  }
}

export class ConflictError extends Error {
  constructor(message = 'Resource already exists') {
    super(message);
    this.name = 'ConflictError';
  }
}

/**
 * Middleware that ensures database connection is available
 */
export const withDatabase = os.middleware(({ context, next }) => {
  const ctx = context as Context;

  // Ensure database connection exists
  if (!ctx.db) {
    throw new DatabaseError('Database connection not available');
  }

  return next({ context: ctx });
});

/**
 * Middleware that wraps operations in a database transaction
 * Use this for operations that need to be atomic
 */
export const withTransaction = os.middleware(({ context, next }) => {
  const ctx = context as Context;

  if (!ctx.db) {
    throw new DatabaseError('Database connection not available');
  }

  // For now, we'll pass through the context
  // In a real implementation, you might start a transaction here
  // and add transaction methods to the context
  const enhancedContext = {
    ...ctx
    // transaction: db.transaction(...)
  };

  return next({ context: enhancedContext });
});

/**
 * Helper function to handle database operations with error mapping
 */
export const handleDatabaseOperation = async <T>(
  operation: () => Promise<T>,
  errorContext?: string
): Promise<T> => {
  try {
    return await operation();
  } catch (error) {
    if (error instanceof Error) {
      // Map specific database errors to our custom errors
      if (error.message.includes('not found') || error.message.includes('no rows')) {
        throw new NotFoundError(errorContext);
      }

      if (error.message.includes('duplicate') || error.message.includes('unique constraint')) {
        throw new ConflictError(`${errorContext} already exists`);
      }

      // Re-throw as DatabaseError with context
      throw new DatabaseError(`${errorContext ? errorContext + ': ' : ''}${error.message}`);
    }

    throw new DatabaseError(errorContext || 'Unknown database error');
  }
};

/**
 * Pagination helper for database queries
 */
export interface PaginationOptions {
  page: number;
  limit: number;
  cursor?: string;
}

export interface PaginationResult<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
    nextCursor?: string;
  };
}

export const paginate = async <T>(
  queryFn: (offset: number, limit: number) => Promise<T[]>,
  countFn: () => Promise<number>,
  options: PaginationOptions
): Promise<PaginationResult<T>> => {
  const { page, limit } = options;
  const offset = (page - 1) * limit;

  const [data, total] = await Promise.all([
    queryFn(offset, limit + 1), // Get one extra to check if there are more
    countFn()
  ]);

  const hasMore = data.length > limit;
  const actualData = hasMore ? data.slice(0, limit) : data;

  return {
    data: actualData,
    pagination: {
      page,
      limit,
      total,
      hasMore,
      nextCursor: hasMore ? String(page + 1) : undefined
    }
  };
};
