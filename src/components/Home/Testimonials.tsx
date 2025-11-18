// src/components/home/Testimonials.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Rating } from '@/components/ui/Rating';
import { Card } from '@/components/ui/Card';

const testimonials = [
  {
    quote: "An absolutely unforgettable trip to Japan! Every detail was perfectly planned. The guides were knowledgeable and friendly. Highly recommended!",
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    avatar: '/images/avatar-1.jpg',
  },
  {
    quote: "The tour of Italy exceeded all our expectations. From the ancient ruins of Rome to the beautiful Amalfi coast, it was a dream come true.",
    name: 'John Doe',
    location: 'New York, USA',
    rating: 5,
    avatar: '/images/avatar-2.jpg',
  },
  {
    quote: "Our family had a fantastic time on the Egyptian tour. Seeing the pyramids was a lifelong dream, and this company made it happen flawlessly.",
    name: 'Fatima Al-Sayed',
    location: 'Cairo, Egypt',
    rating: 4.5,
    avatar: '/images/avatar-3.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Auto-rotate every 5 seconds
    return () => clearInterval(slideInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">What Our Travelers Say</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Real stories from our adventurous travelers.
        </p>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="w-full flex-shrink-0">
                  <Card className="p-8 text-center bg-white dark:bg-gray-900">
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">"{testimonial.quote}"</p>
                    <div className="flex flex-col items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary"
                      />
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">{testimonial.location}</p>
                      <Rating rating={testimonial.rating} />
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          {/* Controls */}
          <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition">
             <FiChevronLeft className="h-6 w-6" />
          </button>
           <button onClick={nextSlide} className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition">
             <FiChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;