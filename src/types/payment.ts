/**
 * Represents a payment record associated with a booking.
 */
export interface IPayment {
  /** Unique identifier for the payment */
  id: string;
  /** ID of the booking this payment belongs to */
  bookingId: string;
  /** Amount paid in the smallest currency unit (e.g. cents/paise) */
  amount: number;
  /** Payment method used (e.g. "stripe", "razorpay", "cash") */
  method: string;
  /** Current status of the payment (e.g. "pending", "succeeded", "failed") */
  status: string;
  /** Gateway transaction ID or reference ID */
  transactionId: string;
}
