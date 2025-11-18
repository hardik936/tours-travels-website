// src/hooks/useTours.ts
import { useFetch } from './useFetch';
import type { ITour, TourFilters } from '@/types/tour';
import { useMemo, useCallback, useState } from 'react';

/**
 * Hook for fetching and managing tour data.
 * Provides functionality for fetching a list of tours with filters
 * and fetching a single tour by its ID.
 *
 * @param {TourFilters} [filters] Optional filters to apply to the main tour list query.
 * @returns {{
 *  tours: ITour[] | null;
 *  loading: boolean;
 *  error: Error | null;
 *  getTourById: (id: string) => Promise<ITour | null>;
 * }}
 */
export const useTours = (filters?: TourFilters) => {
  const queryString = useMemo(() => {
    if (!filters) return '';
    const params = new URLSearchParams();
    if (filters.priceRange) {
      params.append('minPrice', filters.priceRange[0].toString());
      // *** FIX: Corrected typo from `riange` to `priceRange` ***
      params.append('maxPrice', filters.priceRange[1].toString());
    }
    if (filters.duration) params.append('duration', filters.duration.toString());
    if (filters.difficulty) params.append('difficulty', filters.difficulty);
    return `?${params.toString()}`;
  }, [filters]);

  // Fetch the list of tours
  const { data: tours, loading, error } = useFetch<ITour[]>(`/api/tours${queryString}`);

  /**
   * Fetches a single tour by its unique ID.
   * @param {string} id The ID of the tour to fetch.
   * @returns {Promise<ITour | null>} A promise that resolves to the tour object or null if not found.
   */
  const getTourById = useCallback(async (id: string): Promise<ITour | null> => {
    try {
      const response = await fetch(`/api/tours/${id}`);
      if (!response.ok) {
        // This will be caught by the catch block
        throw new Error(`Tour with id ${id} not found`);
      }
      const tourData: ITour = await response.json();
      return tourData;
    } catch (err) {
      console.error('Failed to fetch tour by ID:', err);
      return null;
    }
  }, []);

  return { tours, loading, error, getTourById };
};