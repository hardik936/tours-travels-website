/**
 * Roles that a user can have in the system.
 */
export enum UserRole {
  /** Regular end user / customer */
  User = "user",
  /** Administrator with elevated permissions */
  Admin = "admin"
}

/**
 * Core user entity for authentication and profile management.
 */
export interface IUser {
  /** Unique identifier for the user */
  id: string;
  /** Email used for login and notifications */
  email: string;
  /** Display name of the user */
  name: string;
  /** Phone number including country code if applicable */
  phone: string;
  /**
   * IDs of bookings associated with this user.
   * Can be populated with full IBooking objects at usage site if needed.
   */
  bookingHistory: string[];
  /** List of tour IDs that the user has wishlisted */
  wishlist: string[];
  /** Optional URL or path to the user's profile picture */
  profilePicture?: string;
  /** Role of the user (user/admin) */
  role?: UserRole;
}
