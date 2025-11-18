// src/components/home/FeaturedTours.tsx
import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Rating } from '@/components/ui/Rating';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import { MockTour } from '@/data/mock'; // Use the extended mock type

interface FeaturedToursProps {
  tours: MockTour[];
}

const FeaturedTours: React.FC<FeaturedToursProps> = ({ tours }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Featured Tours</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Handpicked tours that promise an unforgettable journey, packed with adventure and discovery.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={tour.images[0]}
                  alt={tour.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-primary text-white text-lg font-bold px-3 py-1 rounded-md">
                  ${(tour.price / 100).toLocaleString()}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 h-14">{tour.title}</h3>
                <div className="flex items-center justify-between mb-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Rating rating={tour.rating} />
                    <span className="text-sm">({tour.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <FiClock />
                    <span>{tour.duration} Days</span>
                  </div>
                </div>
                <Link href={{ pathname: `/tours/${tour.id}` }}>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href={{ pathname: '/tours' }}>
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