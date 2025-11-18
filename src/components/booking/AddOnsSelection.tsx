// src/components/booking/AddOnsSelection.tsx
'use client';
import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';

const availableAddOns = [
  { id: 'insurance', name: 'Travel Insurance', price: 5000, description: 'Comprehensive coverage for your trip.' },
  { id: 'pickup', name: 'Airport Pickup', price: 2500, description: 'Private transfer from the airport to your hotel.' },
  { id: 'sim', name: 'Local SIM Card', price: 1500, description: 'Stay connected with a local data plan.' },
];

const AddOnsSelection = () => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setSelectedAddOns(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const totalAddOnCost = availableAddOns
    .filter(addon => selectedAddOns.includes(addon.id))
    .reduce((total, addon) => total + addon.price, 0);

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Optional Add-ons</h2>
      <div className="space-y-4">
        {availableAddOns.map(addon => (
          <div
            key={addon.id}
            onClick={() => handleToggle(addon.id)}
            className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
              selectedAddOns.includes(addon.id) ? 'border-primary bg-primary/10 ring-2 ring-primary/50' : 'dark:border-gray-700'
            }`}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={selectedAddOns.includes(addon.id)}
                readOnly
                className="rounded text-primary focus:ring-primary h-5 w-5"
              />
              <div>
                <h4 className="font-semibold">{addon.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{addon.description}</p>
              </div>
            </div>
            <p className="font-semibold">${(addon.price / 100).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t dark:border-gray-700 text-right">
        <p className="text-lg">
          Add-ons Total: <span className="font-bold text-primary">${(totalAddOnCost / 100).toFixed(2)}</span>
        </p>
      </div>
    </Card>
  );
};

export default AddOnsSelection;