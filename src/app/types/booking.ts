/**
 * Status values for a booking in the system.
 */
export enum BookingStatus {
  /** Booking has been created but not yet confirmed */
  Pending = "pending",
  /** Booking has been confirmed */
  Confirmed = "confirmed",
  /** Booking has been cancelled */
  Cancelled = "cancelled",
  /** Booking is completed (tour finished) */
  Completed = "completed"
}

/**
 * Represents a booking made by a user for a specific tour.
 */
export interface IBooking {
  /** Unique identifier for the booking */
  id: string;
  /** ID of the tour being booked */
  tourId: string;
  /** ID of the user who created the booking */
  userId: string;
  /** Start date of the tour (ISO string or Date) */
  startDate: string | Date;
  /** End date of the tour (ISO string or Date) */
  endDate: string | Date;
  /** Number of guests included in the booking */
  guests: number;
  /** Total price for the booking in the smallest currency unit */
  totalPrice: number;
  /** Current status of the booking */
  status: BookingStatus;
}
