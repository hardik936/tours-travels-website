// src/app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { tours as mockToursData } from '@/data/mock';
// Import the ITour type
import type { ITour } from '@/types/tour';

// Explicitly type the imported data to ensure type safety
const mockTours: ITour[] = mockToursData;

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get('q')?.toLowerCase();

  if (!query) {
    return NextResponse.json({ message: 'Query parameter "q" is required' }, { status: 400 });
  }

  // FIX: Explicitly type the 'tour' parameter in the filter callback
  const searchResults = mockTours.filter((tour: ITour) => 
    tour.title.toLowerCase().includes(query) || 
    tour.description.toLowerCase().includes(query) ||
    tour.destination.toLowerCase().includes(query)
  );

  return NextResponse.json(searchResults, { status: 200 });
}