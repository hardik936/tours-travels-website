// src/services/destinationService.ts
import { destinations as mockDestinations } from '@/data/mock';
import type { IDestination } from '@/types/destination';
import { fetchAllTours } from './tourService';
import type { ITour } from '@/types/tour';

/**
 * Fetches all available destinations.
 * @returns A promise that resolves to an array of destinations.
 */
export async function fetchAllDestinations(): Promise<IDestination[]> {
  try {
    // In a real app: const response = await fetch('/api/destinations');
    // For now, return mock data
    return Promise.resolve(mockDestinations);
  } catch (error) {
    console.error('Failed to fetch destinations:', error);
    throw error;
  }
}

/**
 * Fetches all tours for a specific destination.
 * @param destinationName The name of the destination.
 * @returns A promise that resolves to an array of tours.
 */
export async function getToursByDestination(destinationName: string): Promise<ITour[]> {
    try {
        const allTours = await fetchAllTours();
        return allTours.filter(tour => tour.destination.toLowerCase() === destinationName.toLowerCase());
    } catch (error) {
        console.error(`Failed to get tours for destination ${destinationName}:`, error);
        throw error;
    }
}