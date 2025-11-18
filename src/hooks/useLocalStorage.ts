// src/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

type SetValue<T> = (value: T | ((val: T) => T)) => void;

/**
 * A hook that syncs state with the browser's local storage.
 * It's a drop-in replacement for useState.
 *
 * @template T The type of the value to be stored.
 * @param {string} key The key to use in local storage.
 * @param {T} initialValue The initial value if no value is found in local storage.
 * @returns {[T, SetValue<T>]} A stateful value and a function to update it.
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  // Check for server-side rendering
  const isServer = typeof window === 'undefined';

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (isServer) {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (!isServer) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // Optional: Listen for storage changes from other tabs
  useEffect(() => {
    if(isServer) return;
    
    const handleStorageChange = (event: StorageEvent) => {
        if(event.key === key && event.newValue) {
            setStoredValue(JSON.parse(event.newValue));
        }
    }
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, isServer]);

  return [storedValue, setValue];
}