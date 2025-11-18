// src/components/tours/RelatedTours.tsx
import React from 'react';
import type { ITour } from '@/types/tour';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

type RelatedTour = ITour & {
    images: string[];
};

interface RelatedToursProps {
  tours: RelatedTour[];
}

const RelatedTours: React.FC<RelatedToursProps> = ({ tours }) => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="group overflow-hidden">
               <img
                  src={tour.images[0]}
                  alt={tour.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-4">
                    <h3 className="font-semibold mb-2 h-12">{tour.title}</h3>
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-primary">${(tour.price / 100).toLocaleString()}</p>
                        <Link href={{ pathname: `/tours/${tour.id}` }}>
                           <Button size="sm" variant="outline">Details</Button>
                        </Link>
                    </div>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedTours;