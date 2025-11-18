// src/components/booking/BookingConfirmation.tsx
import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { FiCheckCircle, FiMail, FiDownload, FiHome } from 'react-icons/fi';

const BookingConfirmation = ({ bookingId, email }: { bookingId: string, email: string }) => {
  return (
    <Card className="p-8 text-center flex flex-col items-center">
      <FiCheckCircle className="h-16 w-16 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Thank you! Your tour is booked. A confirmation has been sent to {email}.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mb-6">
        <p>Booking Reference: <span className="font-mono font-semibold">{bookingId}</span></p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="outline"><FiMail className="mr-2" /> Resend Email</Button>
        <Button variant="outline"><FiDownload className="mr-2" /> Download Itinerary</Button>
        <Link href={{ pathname: '/' }}>
          <Button variant="secondary"><FiHome className="mr-2" /> Back to Home</Button>
        </Link>
      </div>
    </Card>
  );
};

export default BookingConfirmation;