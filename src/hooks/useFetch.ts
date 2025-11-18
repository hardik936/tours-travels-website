// src/hooks/useFetch.ts
import { useState, useEffect, useCallback } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * A generic hook for fetching data from an API.
 * Handles loading, error, and data states.
 *
 * @template T The expected type of the data to be fetched.
 * @param {string} url The URL to fetch data from.
 * @param {RequestInit} [options] Optional fetch options (method, headers, body, etc.).
 * @returns {{ data: T | null; loading: boolean; error: Error | null; refetch: () => void; }}
 */
export const useFetch = <T,>(url: string, options?: RequestInit) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async (signal: AbortSignal) => {
    setState(prevState => ({ ...prevState, loading: true, error: null }));
    try {
      const response = await fetch(url, { ...options, signal });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: T = await response.json();
      setState({ data, loading: false, error: null });

    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        setState({ data: null, loading: false, error });
      }
    }
  }, [url, options]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, [fetchData]);

  const refetch = useCallback(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
  }, [fetchData]);

  return { ...state, refetch };
};