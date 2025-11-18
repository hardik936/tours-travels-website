/**
 * Represents a single activity that can be booked or added to an itinerary.
 */
export interface IActivity {
  /** Unique identifier for the activity */
  id: string;
  /** Name of the activity (e.g. "Scuba Diving", "City Tour") */
  name: string;
  /** Destination name or ID where the activity takes place */
  destination: string;
  /** Price per person for this activity */
  price: number;
  /** Duration of the activity in hours */
  duration: number;
  /** List of items/services included in this activity (e.g. "guide", "equipment") */
  included: string[];
  /** Category tag (e.g. "adventure", "sightseeing", "cultural") */
  category: string;
}
