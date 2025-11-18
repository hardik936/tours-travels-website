// src/components/ui/Pagination.tsx
import React from 'react';
import { Button } from './Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  // Logic to show limited page numbers (e.g., 1 ... 4 5 6 ... 10)
  // For simplicity, we'll show all for now. A more complex implementation can add ellipses.
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        <FiChevronLeft />
      </Button>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          variant={currentPage === number ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => onPageChange(number)}
          aria-current={currentPage === number ? 'page' : undefined}
        >
          {number}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        <FiChevronRight />
      </Button>
    </nav>
  );
};

export { Pagination };