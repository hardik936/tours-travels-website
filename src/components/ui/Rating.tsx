// src/components/ui/Rating.tsx
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface RatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({ rating, maxRating = 5, className = '' }) => {
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} />);
    } else if (i - 0.5 <= rating) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <div className={`flex items-center text-yellow-400 gap-0.5 ${className}`}>{stars}</div>;
};

export { Rating };