// src/lib/formatters.ts

/**
 * Formats a number (in the smallest currency unit, e.g., cents) into a currency string.
 * @param {number} priceInCents The price in the smallest currency unit.
 * @param {string} [currency='USD'] The ISO currency code.
 * @returns {string} The formatted price string (e.g., "$1,200.00").
 */
export function formatPrice(priceInCents: number, currency: string = 'USD'): string {
  const price = priceInCents / 100;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price);
}

/**
 * Formats a Date object into a string.
 * @param {Date | string} date The date to format.
 * @param {Intl.DateTimeFormatOptions} [options] Formatting options.
 * @returns {string} The formatted date string.
 */
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return dateObj.toLocaleDateString('en-US', options || defaultOptions);
}

/**
 * Calculates the duration between two dates in days and nights.
 * @param {Date} startDate The start date.
 * @param {Date} endDate The end date.
 * @returns {string} A human-readable duration string (e.g., "8 Days, 7 Nights").
 */
export function calculateDuration(startDate: Date, endDate: Date): string {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = endDate.getTime() - startDate.getTime();
  const days = Math.round(diffInTime / oneDay) + 1; // Inclusive of the start day
  const nights = days - 1;
  return `${days} Days, ${nights} Nights`;
}

/**
 * Truncates a string to a specified length and adds an ellipsis.
 * @param {string} text The text to truncate.
 * @param {number} length The maximum length of the text.
 * @returns {string} The truncated text.
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) {
    return text;
  }
  return text.substring(0, length) + '...';
}