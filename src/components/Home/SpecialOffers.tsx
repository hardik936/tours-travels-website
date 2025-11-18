// src/components/home/SpecialOffers.tsx
import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const offers = [
  {
    title: 'Himalayan Trekking Adventure',
    image: '/images/offer-himalayas.jpg',
    discount: '30% OFF',
    description: 'Limited time offer on our best-selling trek. Book before Nov 30, 2025!',
    link: '/tours/himalayan-trek',
  },
  {
    title: 'European Summer Getaway',
    image: '/images/offer-europe.jpg',
    discount: 'Save $500',
    description: 'Early bird special for summer 2026. Experience the best of Europe.',
    link: '/tours/europe-summer',
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-blue-50 dark:bg-blue-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Special Offers</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Don't miss out on our exclusive deals and seasonal promotions for your dream vacation.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <Card key={index} className="overflow-hidden group relative text-white shadow-xl">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <Badge variant="destructive" className="text-lg">{offer.discount}</Badge>
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="mb-4 max-w-md">{offer.description}</p>
                <Link href={offer.link} passHref>
                   <Button>Book Now</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;