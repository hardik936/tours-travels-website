import { NextRequest, NextResponse } from 'next/server';
import { tours as mockTours } from '@/data/mock'; // We'll create this file in Prompt 13
import type { ITour } from '@/types/tour';

// In a real app, you would have a database connection here
let tours: ITour[] = [...mockTours];

/**
 * @swagger
 * /api/tours:
 *   get:
 *     description: Returns a list of tours with filtering and pagination
 *     parameters:
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *       - name: minPrice
 *         in: query
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: A list of tours.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  let filteredTours = tours;

  if (minPrice) {
    filteredTours = filteredTours.filter(tour => tour.price >= parseFloat(minPrice) * 100);
  }
  if (maxPrice) {
    filteredTours = filteredTours.filter(tour => tour.price <= parseFloat(maxPrice) * 100);
  }
  
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedTours = filteredTours.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedTours,
    total: filteredTours.length,
    page,
    totalPages: Math.ceil(filteredTours.length / limit),
  }, { status: 200 });
}

/**
 * @swagger
 * /api/tours:
 *   post:
 *     description: Creates a new tour (admin only)
 *     responses:
 *       201:
 *         description: The created tour.
 */
export async function POST(request: NextRequest) {
  // Placeholder for admin authentication check
  // const user = await getCurrentUser(request);
  // if (user?.role !== 'admin') {
  //   return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  // }

  try {
    const body = await request.json();
    const newTour: ITour = {
      id: `tour-${Date.now()}`,
      reviews: [], // Initialize with empty reviews
      ...body,
    };

    // Basic validation
    if (!newTour.title || !newTour.price || !newTour.duration) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    tours.push(newTour);
    return NextResponse.json(newTour, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }
}