// src/components/booking/PaymentForm.tsx
import React from 'react';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { FiLock } from 'react-icons/fi';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const PaymentForm = () => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Secure Payment</h2>
      <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
        <FiLock />
        <span>Your payment is secure and encrypted.</span>
      </div>
      <form className="space-y-4">
        <div className="relative">
          <Input type="text" placeholder="Card Number" required />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
            <FaCcVisa className="h-6 w-6 text-gray-400" />
            <FaCcMastercard className="h-6 w-6 text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input type="text" placeholder="MM / YY" required />
          <Input type="text" placeholder="CVC" required />
        </div>
        <Input type="text" placeholder="Name on Card" required />
      </form>
    </Card>
  );
};

export default PaymentForm;