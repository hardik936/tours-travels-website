import { NextRequest, NextResponse } from 'next/server';
import { bookings as mockBookings } from '@/data/mock';

let bookings = [...mockBookings];

interface Params {
  params: { bookingId: string };
}

export async function GET(request: NextRequest, { params }: Params) {
    const booking = bookings.find(b => b.id === params.bookingId);
    
    // Auth check: ensure the user owns this booking
    // const user = await getCurrentUser(request);
    // if (!booking || booking.userId !== user.id) {
    //   return NextResponse.json({ message: 'Booking not found' }, { status: 404 });
    // }

    if (!booking) {
        return NextResponse.json({ message: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json(booking, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: Params) {
    const bookingIndex = bookings.findIndex(b => b.id === params.bookingId);
    if (bookingIndex === -1) {
        return NextResponse.json({ message: 'Booking not found' }, { status: 404 });
    }

    try {
        const { status } = await request.json();
        if (!status || !['pending', 'confirmed', 'cancelled', 'completed'].includes(status)) {
            return NextResponse.json({ message: 'Invalid status provided' }, { status: 400 });
        }
        bookings[bookingIndex].status = status;
        return NextResponse.json(bookings[bookingIndex], { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
    }
}