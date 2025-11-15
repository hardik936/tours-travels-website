/**
 * Represents a single review left by a customer for a tour.
 */
export interface IReview {
  /** Unique identifier for the review */
  id: string;
  /** ID of the user who wrote the review */
  userId: string;
  /** Rating value (e.g. 0–5) */
  rating: number;
  /** Optional text feedback from the user */
  comment?: string;
  /** When the review was created (ISO string or Date) */
  createdAt: string | Date;
}

/**
 * Core tour entity used across the application.
 */
export interface ITour {
  /** Unique identifier for the tour */
  id: string;
  /** Public title of the tour */
  title: string;
  /** Detailed description of the tour */
  description: string;
  /** Base price per person in the smallest currency unit (e.g. cents/paise) */
  price: number;
  /** Duration of the tour in days */
  duration: number;
  /** Name of the primary destination for this tour */
  destination: string;
  /** Maximum number of guests allowed */
  maxGuests: number;
  /** Average rating (0–5) calculated from reviews */
  rating: number;
  /** List of user reviews for this tour */
  reviews: IReview[];
}

/**
 * Shape of filters that can be applied to tour listings.
 */
export interface TourFilters {
  /**
   * Price range filter as [min, max]. If undefined, no price filter is applied.
   */
  priceRange?: [number, number];
  /**
   * Duration filter in days (e.g. 3 means 3-day tours only).
   * Can be extended to a range if needed.
   */
  duration?: number;
  /**
   * Preferred season for travel (e.g. "summer", "winter", "monsoon").
   */
  season?: string;
  /**
   * Difficulty level of the tour (e.g. for treks / adventure trips).
   */
  difficulty?: "easy" | "moderate" | "hard";
}
