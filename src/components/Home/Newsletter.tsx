// src/components/home/Newsletter.tsx
import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const Newsletter = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Stay Updated</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter for the latest travel deals, tips, and destination inspiration.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow text-gray-900 placeholder:text-gray-600"
            aria-label="Email for newsletter"
          />
          <Button type="submit" variant="secondary" size="lg" className="shrink-0">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;