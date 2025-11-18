// src/services/tourService.ts
import type { ITour, TourFilters } from '@/types/tour';
import { addOns } from '@/data/mock'; // Placeholder for add-on data

const API_BASE_URL = '/api'; // Use environment variable in a real app

/**
 * A helper function to handle API responses.
 * @param response The fetch response object.
 * @returns The JSON data from the response.
 * @throws An error if the response is not ok.
 */
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

/**
 * Fetches a list of all tours, with optional filtering.
 * @param filters Optional filters for the tours.
 * @returns A promise that resolves to an array of tours.
 */
export async function fetchAllTours(filters?: TourFilters): Promise<ITour[]> {
  const params = new URLSearchParams();
  if (filters?.priceRange) {
    params.append('minPrice', String(filters.priceRange[0]));
    params.append('maxPrice', String(filters.priceRange[1]));
  }
  // Add other filters as needed...

  try {
    const response = await fetch(`${API_BASE_URL}/tours?${params.toString()}`);
    const result = await handleResponse<{ data: ITour[] }>(response);
    return result.data;
  } catch (error) {
    console.error('Failed to fetch all tours:', error);
    throw error;
  }
}

/**
 * Fetches a single tour by its ID.
 * @param id The ID of the tour to fetch.
 * @returns A promise that resolves to the tour object.
 */
export async function fetchTourById(id: string): Promise<ITour> {
  try {
    const response = await fetch(`${API_BASE_URL}/tours/${id}`);
    return await handleResponse<ITour>(response);
  } catch (error) {
    console.error(`Failed to fetch tour with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Searches for tours based on a query string.
 * @param query The search term.
 * @returns A promise that resolves to an array of matching tours.
 */
export async function searchTours(query: string): Promise<ITour[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
    return await handleResponse<ITour[]>(response);
  } catch (error) {
    console.error(`Failed to search tours with query "${query}":`, error);
    throw error;
  }
}

/**
 * Calculates the total price of a tour including selected add-ons.
 * This is a client-side utility.
 * @param tour The base tour object.
 * @param selectedAddOnIds An array of IDs for the selected add-ons.
 * @returns The total calculated price.
 */
export function calculateTourPrice(tour: ITour, selectedAddOnIds: string[]): number {
  const addOnsPrice = selectedAddOnIds.reduce((total, id) => {
    const addOn = addOns.find(a => a.id === id);
    return total + (addOn ? addOn.price : 0);
  }, 0);
  return tour.price + addOnsPrice;
}