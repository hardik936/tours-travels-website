/**
 * Represents a travel destination that tours or activities can be linked to.
 */
export interface IDestination {
  /** Unique identifier for the destination */
  id: string;
  /** Display name of the destination (e.g. "Manali", "Bali") */
  name: string;
  /** Detailed description or overview of the destination */
  description: string;
  /** Country where the destination is located */
  country: string;
  /** Best season to visit (e.g. "October–March", "Summer") */
  bestSeason: string;
  /** Key attractions or points of interest at this destination */
  attractions: string[];
  /** URL or path to the primary image for this destination */
  image: string;
}
