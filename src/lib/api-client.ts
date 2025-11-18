// src/lib/api-client.ts
import { getFromLocalStorage } from './storage';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

interface ApiOptions extends RequestInit {
  data?: any;
}

/**
 * A generic client for making API requests.
 * Handles JSON parsing, error handling, and auth token attachment.
 * @param {string} endpoint The API endpoint to call (e.g., '/tours').
 * @param {ApiOptions} [options] Fetch options and request body data.
 */
async function apiClient<T>(endpoint: string, { data, headers: customHeaders, ...customOptions }: ApiOptions = {}): Promise<T> {
  const token = getFromLocalStorage<string>('authToken');

  // FIX: Define headers as a mutable, indexable object first.
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(customHeaders as Record<string, string>),
  };

  if (token) {
    // This is now type-safe because `headers` is a Record<string, string>.
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    method: data ? 'POST' : 'GET',
    headers, // Assign the prepared headers object here.
    ...customOptions,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    const error = new Error(errorData.message || `API Error: ${response.status}`);
    return Promise.reject(error);
  }

  if (response.status === 204) {
    return Promise.resolve(undefined as T);
  }

  return response.json();
}

// Export methods for each HTTP verb
export const api = {
  get: <T>(endpoint: string, options?: ApiOptions) => apiClient<T>(endpoint, { ...options, method: 'GET' }),
  post: <T>(endpoint:string, data: any, options?: ApiOptions) => apiClient<T>(endpoint, { ...options, method: 'POST', data }),
  put: <T>(endpoint: string, data: any, options?: ApiOptions) => apiClient<T>(endpoint, { ...options, method: 'PUT', data }),
  delete: <T>(endpoint: string, options?: ApiOptions) => apiClient<T>(endpoint, { ...options, method: 'DELETE' }),
};