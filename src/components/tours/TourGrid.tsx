// src/components/tours/TourGrid.tsx
import React from 'react';
import type { ITour } from '@/types/tour';
import TourCard from './TourCard';
import { Pagination } from '@/components/ui/Pagination';
import { Button } from '@/components/ui/Button';
import { FiGrid, FiList } from 'react-icons/fi';

// This is a placeholder for the extended tour type needed for the card
type TourWithExtras = ITour & { images: string[]; reviewCount: number };

interface TourGridProps {
  tours: TourWithExtras[];
}

const TourGrid: React.FC<TourGridProps> = ({ tours }) => {
  // States for view, sort, and pagination would be managed here in a real app
  const isGridView = true; // Placeholder

  return (
    <div>
      {/* Header with Sort and View Toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{tours.length}</span> results
        </p>
        <div className="flex items-center gap-4">
          <select className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md p-2 text-sm focus:ring-primary focus:border-primary">
            <option>Sort by: Popularity</option>
            <option>Sort by: Price (Low to High)</option>
            <option>Sort by: Price (High to Low)</option>
            <option>Sort by: Rating</option>
          </select>
          <div className="hidden md:flex items-center gap-2">
            <Button variant={isGridView ? 'primary' : 'ghost'} size="sm" aria-label="Grid view">
              <FiGrid />
            </Button>
            <Button variant={!isGridView ? 'primary' : 'ghost'} size="sm" aria-label="List view">
              <FiList />
            </Button>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
    </div>
  );
};

export default TourGrid;