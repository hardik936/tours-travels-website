// src/components/tours/TourReviews.tsx
import React from 'react';
import type { IReview } from '@/types/tour';
import { Rating } from '@/components/ui/Rating';
import { Card } from '@/components/ui/Card';

interface TourReviewsProps {
  reviews: IReview[];
  averageRating: number;
}

const TourReviews: React.FC<TourReviewsProps> = ({ reviews, averageRating }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reviews ({reviews.length})</h2>
      {/* Summary */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl font-bold">{averageRating.toFixed(1)}</span>
        <Rating rating={averageRating} />
        <span className="text-gray-600 dark:text-gray-400">based on {reviews.length} reviews</span>
      </div>
      {/* Review List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id} className="p-4">
            <div className="flex items-center mb-2">
              <div className="flex-grow">
                {/* We'll use a placeholder for user name until we have user data */}
                <p className="font-semibold">Traveler</p>
                <p className="text-sm text-gray-500">
                  {new Date(review.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <Rating rating={review.rating} />
            </div>
            <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TourReviews;