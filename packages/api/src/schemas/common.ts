import { z } from 'zod';

// Pagination schema
export const PaginationSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
  cursor: z.string().optional()
});

export const SortSchema = z.object({
  field: z.string(),
  direction: z.enum(['asc', 'desc']).default('desc')
});

// Common field schemas
export const IdSchema = z.string().min(1, 'ID is required');
export const TimestampSchema = z.string().datetime();

// Response schemas
export const ErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  details: z.record(z.any()).optional()
});

// Standardized success response schema
export const SuccessResponseSchema = z.object({
  success: z.boolean().default(true),
  message: z.string().optional()
});

// Generic paginated response pattern for consistent list operations
export const createPaginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    items: z.array(itemSchema),
    pagination: z.object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
      hasMore: z.boolean()
    })
  });

export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.optional(),
    error: ErrorSchema.optional()
  });

export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    success: z.boolean(),
    data: z.array(itemSchema).optional(),
    error: ErrorSchema.optional(),
    pagination: z
      .object({
        page: z.number(),
        limit: z.number(),
        total: z.number(),
        hasMore: z.boolean(),
        nextCursor: z.string().optional()
      })
      .optional()
  });

// Filter schemas
export const SearchFiltersSchema = z.object({
  search: z.string().optional(),
  userId: IdSchema.optional()
});

// Export inferred types
export type Pagination = z.infer<typeof PaginationSchema>;
export type Sort = z.infer<typeof SortSchema>;
export type ApiError = z.infer<typeof ErrorSchema>;
export type SuccessResponse = z.infer<typeof SuccessResponseSchema>;
export type SearchFilters = z.infer<typeof SearchFiltersSchema>;
export type PaginatedResponse<T> = {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
  };
};
