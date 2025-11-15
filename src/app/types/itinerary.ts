/**
 * Represents the detailed plan for a single day of an itinerary.
 */
export interface IDayItinerary {
  /** Date for this day in the itinerary (ISO string or Date) */
  date: string | Date;
  /** Activity or description planned for the morning */
  morning?: string;
  /** Activity or description planned for the afternoon */
  afternoon?: string;
  /** Activity or description planned for the evening */
  evening?: string;
  /** Name or description of the accommodation for the night */
  accommodation?: string;
}

/**
 * Represents a multi-day itinerary for a tour or a custom trip.
 */
export interface IItinerary {
  /** Unique identifier for the itinerary */
  id: string;
  /** Ordered list of day-wise itinerary details */
  days: IDayItinerary[];
  /**
   * High-level list of activities included in the itinerary.
   * Can be IDs referencing IActivity or plain text labels.
   */
  activities: string[];
  /**
   * Accommodations included across the itinerary
   * (e.g. hotel names, homestays).
   */
  accommodations: string[];
  /**
   * Transportation details (e.g. "Private cab", "AC sleeper bus").
   */
  transport: string;
}
