// src/hooks/useBooking.ts
import { useLocalStorage } from './useLocalStorage';
// FIX: Import both IBooking and BookingStatus
import { IBooking, BookingStatus } from '@/types/booking';
import { useCallback, useState } from 'react';

// FIX: Explicitly type the initial state's status property
const initialBookingState: Partial<IBooking> = {
  status: 'pending' as BookingStatus,
};

/**
 * Manages the state and asynchronous operations for a booking process.
 * Persists booking draft in local storage and handles API interactions.
 */
export const useBooking = (tourId: string) => {
  const storageKey = `booking_draft_${tourId}`;
  const [booking, setBooking] = useLocalStorage<Partial<IBooking>>(storageKey, initialBookingState);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<Error | null>(null);

  /**
   * Updates a part of the booking draft.
   * @param {Partial<IBooking>} updates The fields to update.
   */
  const updateBooking = useCallback((updates: Partial<IBooking>) => {
    setBooking(prev => ({ ...prev, tourId, ...prev, ...updates }));
  }, [setBooking, tourId]);

  /**
   * Resets the booking draft to its initial state.
   */
  const clearBooking = useCallback(() => {
    setBooking(initialBookingState);
  }, [setBooking]);

  /**
   * Submits the booking draft to the server to create a new booking.
   * @returns {Promise<IBooking | null>} The created booking object or null on failure.
   */
  const createBooking = useCallback(async (): Promise<IBooking | null> => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });

      if (!response.ok) {
        throw new Error('Failed to create booking.');
      }
      
      const createdBooking: IBooking = await response.json();
      clearBooking();
      return createdBooking;
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error);
      }
      return null;
    } finally {
      setIsSubmitting(false);
    }
  }, [booking, clearBooking]);

  const getBookingStatus = useCallback(async (bookingId: string) => {
     return 'confirmed' as BookingStatus; // Mocked response
  }, []);

  return { 
    booking, 
    updateBooking, 
    clearBooking, 
    createBooking, 
    getBookingStatus,
    isSubmitting,
    submitError 
  };
};