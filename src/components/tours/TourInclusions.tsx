// src/components/tours/TourInclusions.tsx
import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

interface TourInclusionsProps {
  inclusions: string[];
  exclusions: string[];
}

const TourInclusions: React.FC<TourInclusionsProps> = ({ inclusions, exclusions }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">What's Included</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inclusions */}
        <div>
          <ul className="space-y-2">
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FiCheck className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Exclusions */}
        <div>
          <ul className="space-y-2">
            {exclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FiX className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourInclusions;