// src/lib/storage.ts

/**
 * A utility to check if the code is running in a browser environment.
 */
const isBrowser = typeof window !== 'undefined';

/**
 * Safely retrieves an item from localStorage.
 * @param {string} key The key of the item to retrieve.
 * @returns {T | null} The parsed item, or null if it doesn't exist or an error occurs.
 */
export function getFromLocalStorage<T>(key: string): T | null {
  if (!isBrowser) return null;

  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error(`Error reading from localStorage key "${key}":`, error);
    return null;
  }
}

/**
 * Safely sets an item in localStorage.
 * @param {string} key The key of the item to set.
 * @param {T} value The value to store. It will be stringified.
 */
export function setToLocalStorage<T>(key: string, value: T): void {
  if (!isBrowser) return;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage key "${key}":`, error);
  }
}

/**
 * Safely removes an item from localStorage.
 * @param {string} key The key of the item to remove.
 */
export function removeFromLocalStorage(key: string): void {
  if (!isBrowser) return;

  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage key "${key}":`, error);
  }
}

/**
 * Safely clears all items from localStorage.
 */
export function clearLocalStorage(): void {
  if (!isBrowser) return;
  
  try {
    window.localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
}