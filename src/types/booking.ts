// src/types/booking.ts
import { IUser } from "./user";

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface IGuestDetails {
  name: string;
  email: string;
  phone: string;
}

export interface IPaymentDetails {
  paymentId: string;
  status: 'succeeded' | 'pending' | 'failed';
  amount: number;
}

/**
 * Represents a customer's booking for a specific tour.
 */
export interface IBooking {
  /** Unique identifier for the booking */
  id: string;
  /** ID of the user who made the booking */
  userId: string;
  /** ID of the tour that was booked */
  tourId: string;
  /** The date the tour is scheduled to start */
  bookingDate: Date | string; // <-- FIX: Add this required property
  /** Number of guests included in the booking */
  guests: number;
  /** The total price paid for the booking */
  totalPrice: number;
  /** The current status of the booking */
  status: BookingStatus;
  /** Timestamp of when the booking was created */
  createdAt: Date | string;
  /** Details of the guests on the booking */
  guestDetails?: IGuestDetails[];
  /** Payment information for the booking */
  paymentDetails?: IPaymentDetails;
}