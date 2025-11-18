// src/services/bookingService.ts
import type { IBooking, BookingStatus } from '@/types/booking';

const API_BASE_URL = '/api';

async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
}

/**
 * Creates a new booking.
 * @param bookingData The booking data to submit.
 * @returns A promise that resolves to the created booking object.
 */
export async function createBooking(bookingData: Partial<IBooking>): Promise<IBooking> {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });
    return await handleResponse<IBooking>(response);
  } catch (error) {
    console.error('Failed to create booking:', error);
    throw error;
  }
}

/**
 * Fetches the status of a specific booking.
 * @param bookingId The ID of the booking to check.
 * @returns A promise that resolves to the booking status.
 */
export async function getBookingStatus(bookingId: string): Promise<BookingStatus> {
  try {
    const booking = await getUserBookingById(bookingId);
    return booking.status;
  } catch (error) {
    console.error(`Failed to get status for booking ${bookingId}:`, error);
    throw error;
  }
}

/**
 * Fetches all bookings for a given user.
 * @param userId The ID of the user.
 * @returns A promise that resolves to an array of the user's bookings.
 */
export async function getUserBookings(userId: string): Promise<IBooking[]> {
  try {
    // In a real app, the API would support fetching by userId: /api/bookings?userId=${userId}
    const response = await fetch(`${API_BASE_URL}/bookings`);
    const allBookings = await handleResponse<IBooking[]>(response);
    return allBookings.filter(b => b.userId === userId);
  } catch (error) {
    console.error(`Failed to get bookings for user ${userId}:`, error);
    throw error;
  }
}

/**
 * Fetches a single booking by its ID.
 * @param bookingId The ID of the booking to fetch.
 * @returns A promise that resolves to a booking object.
 */
export async function getUserBookingById(bookingId: string): Promise<IBooking> {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`);
        return await handleResponse<IBooking>(response);
    } catch (error) {
        console.error(`Failed to get booking with ID ${bookingId}:`, error);
        throw error;
    }
}