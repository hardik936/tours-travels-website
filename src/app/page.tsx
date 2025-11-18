// src/app/page.tsx
import React from 'react';

// Import all the homepage components
import Hero from '@/components/home/Hero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import FeaturedTours from '@/components/home/FeaturedTours';
import SpecialOffers from '@/components/home/SpecialOffers';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import Faq from '@/components/home/Faq';
import Newsletter from '@/components/home/Newsletter';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedDestinations />
      <FeaturedTours />
      <SpecialOffers />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <Newsletter />
    </main>
  );
};

export default HomePage;