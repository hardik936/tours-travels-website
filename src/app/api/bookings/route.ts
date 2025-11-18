import { NextRequest, NextResponse } from 'next/server';
import { bookings as mockBookings } from '@/data/mock';
import type { IBooking } from '@/types/booking';

let bookings = [...mockBookings];

export async function GET(request: NextRequest) {
  // Placeholder for user authentication
  // const user = await getCurrentUser(request);
  // if (!user) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  // const userBookings = bookings.filter(b => b.userId === user.id);
  
  // For now, return all bookings
  return NextResponse.json(bookings, { status: 200 });
}

export async function POST(request: NextRequest) {
  // Placeholder for user authentication
  
  try {
    const body = await request.json();
    const newBooking: IBooking = {
      id: `booking-${Date.now()}`,
      createdAt: new Date(),
      status: 'pending',
      ...body,
    };

    if (!newBooking.tourId || !newBooking.userId || !newBooking.bookingDate) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    bookings.push(newBooking);
    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }
}