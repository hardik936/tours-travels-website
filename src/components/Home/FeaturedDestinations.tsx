// src/components/home/FeaturedDestinations.tsx
'use client';
import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Card } from '@/components/ui/Card';

// Mock Data
const destinations = [
  { name: 'Paris, France', trips: 15, image: '/images/dest-paris.jpg' },
  { name: 'Kyoto, Japan', trips: 22, image: '/images/dest-kyoto.jpg' },
  { name: 'Rome, Italy', trips: 18, image: '/images/dest-rome.jpg' },
  { name: 'Bali, Indonesia', trips: 25, image: '/images/dest-bali.jpg' },
  { name: 'Cairo, Egypt', trips: 12, image: '/images/dest-cairo.jpg' },
  { name: 'New York, USA', trips: 30, image: '/images/dest-ny.jpg' },
];

const FeaturedDestinations = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Featured Destinations</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Explore our most popular destinations, loved by travelers worldwide for their unique charm and beauty.
        </p>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 no-scrollbar"
          >
            {destinations.map((dest, index) => (
              <div key={index} className="snap-center shrink-0 w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <Card className="overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="relative">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-semibold">{dest.name}</h3>
                      <p className="text-sm">{dest.trips} Trips</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors hidden lg:block"
          >
            <FiChevronLeft className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors hidden lg:block"
          >
            <FiChevronRight className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;