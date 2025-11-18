// src/types/user.ts

/**
 * Roles that a user can have in the system.
 */
export enum UserRole {
  /** Regular end user / customer */
  User = "user",
  /** Administrator with elevated permissions */
  Admin = "admin",
  /** A tour guide with specific permissions */
  Guide = "guide",
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
   */
  bookingHistory: string[];
  /** List of tour IDs that the user has wishlisted */
  wishlist: string[];
  /** Optional URL or path to the user's profile picture */
  profilePicture?: string;
  /** Role of the user, which determines their permissions */
  role: UserRole;
}

/**
 * Represents a user's public profile information, which was missing.
 * Exporting this interface fixes the import error in other files.
 */
export interface IUserProfile {
  /** The ID of the user this profile belongs to */
  userId: string;
  /** A short biography of the user */
  bio?: string;
  /** The user's general location (e.g., "City, Country") */
  location?: string;
}