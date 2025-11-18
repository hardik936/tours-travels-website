// src/components/tours/TourItinerary.tsx
'use client';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface ItineraryItem {
  day: number;
  title: string;
  description: string;
}

interface TourItineraryProps {
  itinerary: ItineraryItem[];
}

const TourItinerary: React.FC<TourItineraryProps> = ({ itinerary }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
      {itinerary.map((item, index) => (
        <div key={item.day} className="border rounded-lg overflow-hidden dark:border-gray-700">
          <button
            onClick={() => handleClick(index)}
            className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="font-semibold">Day {item.day}: {item.title}</span>
            {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
               <p className="p-4 text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourItinerary;