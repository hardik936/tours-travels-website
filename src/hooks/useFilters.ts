// src/hooks/useFilters.ts
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { TourFilters } from '@/types/tour';

/**
 * Manages filter state and syncs it with URL query parameters.
 */
export const useFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // This creates a new URLSearchParams object that is mutable
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );
  
  const updateFilter = (name: keyof TourFilters, value: string | number | [number, number]) => {
     const valueStr = Array.isArray(value) ? `${value[0]}-${value[1]}` : String(value);
     router.push(pathname + '?' + createQueryString(name, valueStr));
  };
  
  const clearFilters = () => {
    router.push(pathname);
  };
  
  // You can also add a function here to parse searchParams into a filters object
  const getActiveFilters = (): TourFilters => {
    // Logic to parse searchParams into a TourFilters object
    return {};
  };

  return { updateFilter, clearFilters, getActiveFilters, searchParams };
};