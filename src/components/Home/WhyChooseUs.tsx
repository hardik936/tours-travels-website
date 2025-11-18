// src/components/home/WhyChooseUs.tsx
import React from 'react';
import { FiThumbsUp, FiMap, FiShield, FiPhoneCall } from 'react-icons/fi';
import { Card } from '@/components/ui/Card';

const features = [
  {
    icon: <FiMap className="h-10 w-10 text-primary" />,
    title: 'Expert Local Guides',
    description: 'Our guides are passionate locals who provide deep insights into the culture and history of each destination.',
  },
  {
    icon: <FiThumbsUp className="h-10 w-10 text-primary" />,
    title: 'Best Price Guarantee',
    description: 'We offer competitive prices and ensure you get the best value for your money without any hidden fees.',
  },
  {
    icon: <FiShield className="h-10 w-10 text-primary" />,
    title: 'Safe & Secure Travel',
    description: 'Your safety is our top priority. We follow strict safety protocols and partner with trusted providers.',
  },
  {
    icon: <FiPhoneCall className="h-10 w-10 text-primary" />,
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is available around the clock to assist you with any queries or concerns.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Why Choose Us?</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          We are committed to providing you with an exceptional travel experience from start to finish.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-8 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;