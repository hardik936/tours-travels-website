// src/components/booking/BookingTimeline.tsx
import React from 'react';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';

type Status = 'Confirmed' | 'Payment' | 'Itinerary' | 'Departure';

const timelineSteps: Status[] = ['Confirmed', 'Payment', 'Itinerary', 'Departure'];

interface BookingTimelineProps {
  currentStatus: Status;
}

const BookingTimeline: React.FC<BookingTimelineProps> = ({ currentStatus }) => {
  const currentIndex = timelineSteps.indexOf(currentStatus);

  return (
    <div className="p-4">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {timelineSteps.map((step, index) => {
          const isCompleted = index <= currentIndex;
          return (
            <li key={step} className="mb-10 ml-6">
              <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 
                ${isCompleted ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}>
                {isCompleted ? <FiCheckCircle className="w-3 h-3 text-white" /> : <FiCircle className="w-3 h-3 text-gray-500" />}
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-white">{step}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {isCompleted ? 'Completed' : 'Pending'}
              </time>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default BookingTimeline;