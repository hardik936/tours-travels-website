// src/components/booking/GuestDetails.tsx
import React from 'react';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

interface GuestDetailsProps {
  guestCount: number;
}

const GuestDetails: React.FC<GuestDetailsProps> = ({ guestCount }) => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Guest Details</h2>
      <form className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Primary Guest</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input type="text" placeholder="Full Name" required aria-label="Primary Guest Full Name" />
            <Input type="email" placeholder="Email Address" required aria-label="Primary Guest Email Address" />
            <Input type="tel" placeholder="Phone Number" required aria-label="Primary Guest Phone Number" />
          </div>
        </div>

        {guestCount > 1 && Array.from({ length: guestCount - 1 }).map((_, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2">Guest {index + 2}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="text" placeholder="Full Name" required aria-label={`Guest ${index + 2} Full Name`} />
            </div>
          </div>
        ))}
      </form>
    </Card>
  );
};

export default GuestDetails;