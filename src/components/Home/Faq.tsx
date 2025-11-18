// src/components/home/Faq.tsx
'use client';
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: 'What is the best time to book a tour?',
    answer: 'We recommend booking your tour at least 3-6 months in advance, especially for popular destinations and during peak seasons, to ensure availability and get the best prices.',
  },
  {
    question: 'What is included in the tour price?',
    answer: 'Typically, our tour prices include accommodation, transportation between cities, guided tours, and some meals as specified in the itinerary. Please check the "Inclusions" section of each tour for detailed information.',
  },
  {
    question: 'Do I need travel insurance?',
    answer: 'Yes, we highly recommend that all travelers have comprehensive travel insurance. It should cover trip cancellation, medical emergencies, lost luggage, and other unforeseen events.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Our cancellation policy varies depending on the tour. Generally, you can get a full refund if you cancel more than 60 days before departure. Please refer to our Terms & Conditions for the specific policy of your tour.',
  },
  {
    question: 'Can you accommodate dietary restrictions?',
    answer: 'Yes, in most cases, we can accommodate dietary restrictions such as vegetarian, vegan, gluten-free, etc. Please inform us of your requirements at the time of booking, and we will do our best to arrange it.',
  },
];

interface FaqItemProps {
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium">{item.question}</h3>
        {isOpen ? <FiMinus className="h-6 w-6 text-primary" /> : <FiPlus className="h-6 w-6" />}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-2 text-gray-600 dark:text-gray-400">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our tours and services.
        </p>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;