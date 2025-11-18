// src/hooks/usePagination.ts
import { useState, useMemo } from 'react';

/**
 * Hook to manage client-side pagination state.
 *
 * @template T The type of items being paginated.
 * @param {T[]} items The full list of items to paginate.
 * @param {number} [itemsPerPage=10] The number of items to show per page.
 * @returns {{
 *  currentPage: number;
 *  totalPages: number;
 *  paginatedItems: T[];
 *  nextPage: () => void;
 *  prevPage: () => void;
 *  goToPage: (page: number) => void;
 * }}
 */
export const usePagination = <T,>(items: T[], itemsPerPage: number = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToPage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  };

  return { currentPage, totalPages, paginatedItems, nextPage, prevPage, goToPage };
};