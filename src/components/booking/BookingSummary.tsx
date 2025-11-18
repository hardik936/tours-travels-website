// src/components/booking/BookingSummary.tsx
import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Mock data, to be passed as props
const summaryData = {
  tourTitle: 'Mystical Bali: Temples & Rice Paddies',
  basePrice: 120000,
  taxes: 12000,
  addOns: [{ name: 'Travel Insurance', price: 5000 }],
  guests: 2
};

const BookingSummary = () => {
  const baseTotal = summaryData.basePrice * summaryData.guests;
  const addOnsTotal = summaryData.addOns.reduce((sum, addon) => sum + addon.price, 0);
  const grandTotal = baseTotal + summaryData.taxes + addOnsTotal;

  return (
    <Card className="p-6 sticky top-24">
      <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>
      <div className="space-y-3">
        <p className="font-semibold">{summaryData.tourTitle}</p>
        <div className="border-t dark:border-gray-700 pt-3 space-y-2">
          <div className="flex justify-between">
            <span>Base Price ({summaryData.guests} guests)</span>
            <span>${(baseTotal / 100).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes & Fees</span>
            <span>${(summaryData.taxes / 100).toLocaleString()}</span>
          </div>
          {summaryData.addOns.map(addon => (
            <div key={addon.name} className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>{addon.name}</span>
              <span>+ ${(addon.price / 100).toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="border-t dark:border-gray-700 pt-3">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${(grandTotal / 100).toLocaleString()}</span>
          </div>
        </div>
      </div>
      <Button size="lg" className="w-full mt-6">
        Proceed to Payment
      </Button>
    </Card>
  );
};

export default BookingSummary;