// src/app/page.tsx
import React from 'react';
import { Metadata } from 'next';

// Import all the homepage components
import Hero from '@/components/home/Hero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import FeaturedTours from '@/components/home/FeaturedTours';
import SpecialOffers from '@/components/home/SpecialOffers';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import Faq from '@/components/home/Faq';
import Newsletter from '@/components/home/Newsletter';

// Import mock data for this server component
import { tours, destinations, reviews } from '@/data/mock';

// SEO Metadata for the Homepage
export const metadata: Metadata = {
  title: 'GoWild Travels | Your Adventure Awaits',
  description: 'Discover and book amazing tours and travel packages worldwide. From Himalayan treks to Roman holidays, find your perfect adventure with GoWild Travels.',
  keywords: ['travel', 'tours', 'adventure', 'booking', 'vacation', 'holiday packages'],
  openGraph: {
    title: 'GoWild Travels | Your Adventure Awaits',
    description: 'Explore breathtaking destinations and create unforgettable memories.',
    images: [
      {
        url: '/images/og-image.jpg', // Make sure to add an OG image in your public/images folder
        width: 1200,
        height: 630,
        alt: 'GoWild Travels Homepage',
      },
    ],
  },
};

// The Homepage is an async Server Component
export default async function HomePage() {
  
  // In a real application, you would fetch data using your services:
  // const featuredTours = await tourService.fetchAllTours({ limit: 4, featured: true });
  // const featuredDestinations = await destinationService.fetchAllDestinations({ limit: 6 });
  
  // For now, we'll use a slice of our mock data.
  const featuredToursData = tours.slice(0, 4);
  const featuredDestinationsData = destinations.slice(0, 6);

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <FeaturedDestinations destinations={featuredDestinationsData} />
      <FeaturedTours tours={featuredToursData} />
      <WhyChooseUs />
      <SpecialOffers />
      <Testimonials /> {/* Testimonials component can use its internal mock data for now */}
      <Faq />
      <Newsletter />
    </main>
  );
}