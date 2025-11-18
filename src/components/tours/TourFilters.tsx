// src/components/tours/TourFilters.tsx
'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { FiFilter, FiX } from 'react-icons/fi';

const TourFilters = () => {
  const [isOpen, setIsOpen] = useState(false);

  // In a real app, this state would be lifted to the parent page
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });

  return (
    <aside>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiFilter />
          <span>{isOpen ? 'Close Filters' : 'Show Filters'}</span>
        </Button>
      </div>

      {/* Filter Panel */}
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden lg:max-h-full`}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Filters</h3>
            <Button variant="ghost" size="sm">
              Clear All
            </Button>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-2">Price Range</h4>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Min"
                aria-label="Minimum price"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: +e.target.value })}
              />
              <span>-</span>
              <Input
                type="number"
                placeholder="Max"
                aria-label="Maximum price"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: +e.target.value })}
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <h4 className="font-medium mb-2">Duration (days)</h4>
            <div className="space-y-2">
              {['1-3', '4-6', '7-9', '10+'].map((d) => (
                <label key={d} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                  <span>{d}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <h4 className="font-medium mb-2">Difficulty</h4>
            <div className="space-y-2">
              {['Easy', 'Moderate', 'Hard'].map((level) => (
                <label key={level} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <input type="radio" name="difficulty" className="text-primary focus:ring-primary" />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TourFilters;