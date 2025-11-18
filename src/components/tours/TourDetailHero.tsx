// src/components/tours/TourDetailHero.tsx
'use client';
import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { FiClock, FiUsers, FiBarChart2 } from 'react-icons/fi';

interface TourDetailHeroProps {
  title: string;
  images: string[];
  duration: number;
  maxGuests: number;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
}

const TourDetailHero: React.FC<TourDetailHeroProps> = ({ title, images, duration, maxGuests, difficulty }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Image */}
        <div className="md:col-span-2">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-[450px] object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Thumbnails & Info */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 md:grid-cols-2 gap-2">
            {images.slice(0, 4).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} thumbnail ${index + 1}`}
                onClick={() => setMainImage(img)}
                className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition-all ${
                  mainImage === img ? 'border-primary' : 'border-transparent'
                }`}
              />
            ))}
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-3">
            <div className="flex items-center gap-3">
              <FiClock className="h-6 w-6 text-primary" />
              <div>
                <span className="font-semibold">Duration</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">{duration} Days</p>
              </div>
            </div>
             <div className="flex items-center gap-3">
              <FiUsers className="h-6 w-6 text-primary" />
              <div>
                <span className="font-semibold">Group Size</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">Up to {maxGuests} people</p>
              </div>
            </div>
             <div className="flex items-center gap-3">
              <FiBarChart2 className="h-6 w-6 text-primary" />
              <div>
                <span className="font-semibold">Difficulty</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">{difficulty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetailHero;