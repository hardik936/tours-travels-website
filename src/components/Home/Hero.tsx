// src/components/home/Hero.tsx
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { FiSearch, FiMapPin, FiCalendar, FiUsers } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[500px] w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="/images/hero-kerala.jpg" // Replace with your image
          alt="Breathtaking view of Kerala backwaters"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Explore breathtaking destinations and create unforgettable memories with our curated tours.
        </p>

        {/* Search Box */}
        <div className="bg-white/20 backdrop-blur-md p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div className="relative">
              <FiMapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-800" />
              <Input
                type="text"
                placeholder="Where to?"
                className="pl-10 w-full text-gray-900 placeholder:text-gray-600"
                aria-label="Destination"
              />
            </div>
            <div className="relative">
              <FiCalendar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-800" />
              <Input
                type="date"
                placeholder="Select date"
                className="pl-10 w-full text-gray-900 placeholder:text-gray-600"
                aria-label="Date"
              />
            </div>
            <div className="relative">
              <FiUsers className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-800" />
              <Input
                type="number"
                placeholder="Guests"
                min="1"
                className="pl-10 w-full text-gray-900 placeholder:text-gray-600"
                aria-label="Number of guests"
              />
            </div>
            <Button type="submit" size="lg" className="w-full md:w-auto flex items-center justify-center gap-2">
              <FiSearch />
              <span>Search</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;