import { NextRequest, NextResponse } from 'next/server';
import { tours as mockTours } from '@/data/mock';

let tours = [...mockTours];

interface Params {
  params: { tourId: string };
}

export async function GET(request: NextRequest, { params }: Params) {
  const tour = tours.find(t => t.id === params.tourId);

  if (!tour) {
    return NextResponse.json({ message: 'Tour not found' }, { status: 404 });
  }

  return NextResponse.json(tour, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: Params) {
  // Placeholder for admin authentication check
  
  const tourIndex = tours.findIndex(t => t.id === params.tourId);
  if (tourIndex === -1) {
    return NextResponse.json({ message: 'Tour not found' }, { status: 404 });
  }

  try {
    const body = await request.json();
    tours[tourIndex] = { ...tours[tourIndex], ...body };
    return NextResponse.json(tours[tourIndex], { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  // Placeholder for admin authentication check

  const tourIndex = tours.findIndex(t => t.id === params.tourId);
  if (tourIndex === -1) {
    return NextResponse.json({ message: 'Tour not found' }, { status: 404 });
  }
  
  tours.splice(tourIndex, 1);

  return NextResponse.json({ message: 'Tour deleted successfully' }, { status: 200 });
}