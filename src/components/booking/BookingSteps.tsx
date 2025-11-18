// src/components/booking/BookingSteps.tsx
import React from 'react';
import { FiCheck } from 'react-icons/fi';

interface BookingStepsProps {
  currentStep: number;
  steps: string[];
}

const BookingSteps: React.FC<BookingStepsProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300
                    ${isCompleted ? 'bg-green-500 text-white' : ''}
                    ${isActive ? 'bg-primary text-white ring-4 ring-primary/30' : ''}
                    ${!isCompleted && !isActive ? 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400' : ''}
                  `}
                >
                  {isCompleted ? <FiCheck /> : stepNumber}
                </div>
                <p className={`mt-2 text-xs md:text-sm text-center ${isActive ? 'font-semibold text-primary' : 'text-gray-500'}`}>
                  {step}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 transition-all duration-300
                    ${isCompleted ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}
                  `}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default BookingSteps;