// src/lib/constants.ts

export const TOUR_CATEGORIES = ['Adventure', 'Cultural', 'Nature', 'Historical', 'Relaxation'];
export const DIFFICULTY_LEVELS = ['Easy', 'Moderate', 'Hard'];

interface PriceRange {
  label: string;
  value: [number, number];
}
export const PRICE_RANGES: PriceRange[] = [
  { label: 'Under $500', value: [0, 500] },
  { label: '$500 - $1500', value: [500, 1500] },
  { label: '$1500 - $3000', value: [1500, 3000] },
  { label: 'Over $3000', value: [3000, 10000] },
];

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';
export const PAGINATION_LIMIT = 9;

interface Currency {
  code: string;
  symbol: string;
  name: string;
}
export const CURRENCIES: Currency[] = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
];