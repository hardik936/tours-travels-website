// src/components/tours/TourCard.tsx
import React from 'react';
import Link from 'next/link';
import type { ITour } from '@/types/tour';
import { Card } from '@/components/ui/Card';
import { Rating } from '@/components/ui/Rating';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FiClock, FiMapPin, FiHeart } from 'react-icons/fi';

// The tour card needs an image and review count, which we'll add to the base ITour type.
type TourCardProps = {
  tour: ITour & { images: string[]; reviewCount: number };
};

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="relative">
        <Link href={{ pathname: `/tours/${tour.id}` }} className="block">
          <img
            src={tour.images[0]}
            alt={tour.title}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
        <button
          className="absolute top-3 right-3 bg-white/80 p-2 rounded-full text-gray-700 hover:bg-white hover:text-red-500 transition-colors"
          aria-label="Add to wishlist"
        >
          <FiHeart />
        </button>
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="flex items-center gap-1">
            <FiMapPin className="h-3 w-3" />
            {tour.destination}
          </Badge>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 h-14">
          <Link href={{ pathname: `/tours/${tour.id}` }} className="hover:text-primary transition-colors">
            {tour.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {tour.description.substring(0, 100)}...
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Rating rating={tour.rating} />
            <span className="text-sm text-gray-500">({tour.reviewCount})</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <FiClock />
            <span>{tour.duration} Days</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t pt-4 dark:border-gray-700">
          <p className="text-xl font-bold text-primary">
            ${(tour.price / 100).toLocaleString()}
            <span className="text-sm font-normal text-gray-500">/person</span>
          </p>
          <Link href={{ pathname: `/tours/${tour.id}` }}>
            <Button variant="outline">View Details</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;