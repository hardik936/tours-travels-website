/**
 * Generic API response wrapper for non-paginated endpoints.
 *
 * @template T Type of the data payload returned by the API.
 */
export interface APIResponse<T> {
  /** Indicates whether the request was successful */
  success: boolean;
  /** Human-readable message for debugging or UI display */
  message: string;
  /** Data returned from the API */
  data: T;
  /** Optional list of error messages when the request fails */
  errors?: string[];
}

/**
 * Metadata describing pagination details for list endpoints.
 */
export interface PaginationMeta {
  /** Current page number (1-based) */
  page: number;
  /** Number of items per page */
  pageSize: number;
  /** Total number of items available */
  totalItems: number;
  /** Total number of pages available */
  totalPages: number;
}

/**
 * Generic API response wrapper for paginated list endpoints.
 *
 * @template T Type of each item in the data array.
 */
export interface PaginatedResponse<T> extends APIResponse<T[]> {
  /** Pagination information for the current list response */
  meta: PaginationMeta;
}
