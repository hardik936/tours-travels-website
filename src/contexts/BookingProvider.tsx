// ### 2. BookingContext & Provider

// This context is designed specifically to manage the *steps* of the checkout flow, while the `useBooking` hook manages the *data*.

// **File:** `src/contexts/BookingProvider.tsx`

'use client';
import React, { createContext, useState, useContext, useCallback, useMemo, ReactNode } from 'react';

interface BookingContextType {
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children, totalSteps = 4 }: { children: ReactNode, totalSteps?: number }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = useCallback(() => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  }, [totalSteps]);

  const prevStep = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  }, []);

  const goToStep = useCallback((step: number) => {
    setCurrentStep(Math.max(1, Math.min(step, totalSteps)));
  }, [totalSteps]);

  const value = useMemo(() => ({
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    goToStep
  }), [currentStep, totalSteps, nextStep, prevStep, goToStep]);

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
};

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
};