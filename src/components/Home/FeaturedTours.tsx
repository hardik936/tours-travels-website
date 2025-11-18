// src/components/home/FeaturedTours.tsx
import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Rating } from '@/components/ui/Rating';
import type { ITour } from '@/types/tour';
import { FiClock, FiArrowRight } from 'react-icons/fi';

// This component needs extra properties for display (like images and review count)
// that are not on the core ITour type. We extend the base type to create a
// specific type for this component's data needs.
type FeaturedTour = ITour & {
  images: string[];
  reviewCount: number;
};

// Mock Data - Now correctly typed and structured
const featuredTours: FeaturedTour[] = [
  {
    id: '1',
    title: 'Mystical Bali: Temples & Rice Paddies',
    description: 'Discover the spiritual heart of Bali, from ancient temples to lush, terraced rice paddies.',
    price: 120000, // Price in cents ($1200.00)
    duration: 7,
    destination: 'Bali, Indonesia',
    maxGuests: 12,
    rating: 4.8,
    reviews: [], // The full review objects would be here on a real fetch
    images: ['/images/tour-bali.jpg'],
    reviewCount: 120,
  },
  {
    id: '2',
    title: 'Italian Riviera & Cinque Terre',
    description: 'Hike through the five picturesque villages of Cinque Terre and soak in the Italian sun.',
    price: 250000, // $2500.00
    duration: 10,
    destination: 'Rome, Italy',
    maxGuests: 10,
    rating: 4.9,
    reviews: [],
    images: ['/images/tour-italy.jpg'],
    reviewCount: 95,
  },
  {
    id: '3',
    title: 'Ancient Wonders of Egypt',
    description: 'Journey down the Nile and uncover the timeless secrets of the Pharaohs and their pyramids.',
    price: 180000, // $1800.00
    duration: 8,
    destination: 'Cairo, Egypt',
    maxGuests: 15,
    rating: 4.7,
    reviews: [],
    images: ['/images/tour-egypt.jpg'],
    reviewCount: 210,
  },
  {
    id: '4',
    title: 'Japanese Alps & Cherry Blossoms',
    description: 'Witness the stunning beauty of Japan in spring, from bustling Tokyo to the serene Alps.',
    price: 320000, // $3200.00
    duration: 12,
    destination: 'Kyoto, Japan',
    maxGuests: 8,
    rating: 5.0,
    reviews: [],
    images: ['/images/tour-japan.jpg'],
    reviewCount: 150,
  },
];

const FeaturedTours = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Featured Tours</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Handpicked tours that promise an unforgettable journey, packed with adventure and discovery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTours.map((tour) => (
            <Card key={tour.id} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={tour.images[0]}
                  alt={tour.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-primary text-white text-lg font-bold px-3 py-1 rounded-md">
                  {/* Assuming price is in cents, format it to dollars */}
                  ${(tour.price / 100).toLocaleString()}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 h-14">{tour.title}</h3>
                <div className="flex items-center justify-between mb-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Rating rating={tour.rating} />
                    {/* Use reviewCount for display */}
                    <span className="text-sm">({tour.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <FiClock />
                    <span>{tour.duration} Days</span>
                  </div>
                </div>
                <Link href={`/tours/${tour.id}`} passHref>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/tours" passHref>
            <Button size="lg" variant="secondary">
              <span>View All Tours</span>
              <FiArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;