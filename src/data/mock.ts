// src/data/mock.ts

import type { ITour, IReview } from '@/types/tour';
import type { IDestination } from '@/types/destination';
// This import will now work correctly
import type { IUser, UserRole, IUserProfile } from '@/types/user';
import { IBooking, BookingStatus } from '@/types/booking';

// --- USER & REVIEWS DATA ---

export const reviews: IReview[] = [
  { id: 'rev-1', userId: 'user-1', rating: 5, comment: 'Absolutely breathtaking! The views were surreal and the guide was incredibly knowledgeable. A must-do.', createdAt: new Date('2025-10-20') },
  { id: 'rev-2', userId: 'user-2', rating: 4, comment: 'A fantastic cultural experience. We learned so much. The accommodations were good, but could be better.', createdAt: new Date('2025-09-15') },
  { id: 'rev-3', userId: 'user-3', rating: 5, comment: 'Worth every penny. The entire trip was seamless, from airport pickup to the daily excursions. Highly recommend!', createdAt: new Date('2025-11-01') },
  { id: 'rev-4', userId: 'user-4', rating: 4.5, comment: 'An amazing adventure. The trek was challenging but rewarding. Be prepared for basic facilities on the mountain.', createdAt: new Date('2025-08-05') },
  { id: 'rev-5', userId: 'user-5', rating: 3, comment: 'The destination was beautiful, but the group was too large, which made it feel a bit rushed.', createdAt: new Date('2025-10-25') },
];

export const sampleUser: IUser = {
  id: 'user-1',
  name: 'Alex Johnson',
  email: 'alex.j@example.com',
  phone: '+1-555-123-4567',
  bookingHistory: ['booking-1'],
  wishlist: ['tour-3', 'tour-5'],
  profilePicture: '/images/avatar-1.jpg',
  role: 'user' as UserRole,
};

export const sampleUserProfile: IUserProfile = {
    userId: 'user-1',
    bio: 'Travel enthusiast and photographer. Always looking for the next adventure.',
    location: 'San Francisco, USA',
};

// --- TOURS DATA ---
export type MockTour = ITour & {
    images: string[];
    reviewCount: number;
    difficulty: 'Easy' | 'Moderate' | 'Hard';
    category: string;
    itinerary: { day: number; title: string; description: string }[];
    inclusions: string[];
    exclusions: string[];
};

export const tours: MockTour[] = [
    {
        id: 'tour-1',
        title: 'Himalayan Sunrise Trek',
        destination: 'Himalayas, Nepal',
        price: 180000,
        duration: 12,
        maxGuests: 10,
        rating: 4.8,
        reviews: [reviews[0], reviews[3]],
        description: 'Witness the majestic sunrise over the Annapurna range on this challenging but rewarding 12-day trek through stunning mountain landscapes.',
        images: ['/images/tour-himalayas.jpg', '/images/offer-himalayas.jpg', '/images/dest-himalayas-thumb1.jpg', '/images/dest-himalayas-thumb2.jpg'],
        reviewCount: 78,
        difficulty: 'Hard',
        category: 'Adventure',
        itinerary: [
            { day: 1, title: 'Arrival in Kathmandu', description: 'Transfer to your hotel, briefing with the guide, and welcome dinner.' },
            { day: 2, title: 'Trek to Pokhara', description: 'A scenic drive to Pokhara, the beautiful city of lakes and the gateway to our trek.' },
            { day: 3, title: 'Poon Hill Ascent', description: 'Early morning hike to Poon Hill for a panoramic sunrise view of the Himalayas.' }
        ],
        inclusions: ['Airport transfers', 'Accommodation in tea houses', 'Licensed English-speaking guide', 'All necessary permits and fees', 'First aid kit'],
        exclusions: ['International flights', 'Nepal visa fee', 'Travel insurance', 'Personal trekking gear', 'Tips for guide and porters'],
    },
    {
        id: 'tour-2',
        title: 'Ancient Wonders of Rome',
        destination: 'Rome, Italy',
        price: 125000,
        duration: 5,
        maxGuests: 15,
        rating: 4.6,
        reviews: [reviews[1]],
        description: 'Step back in time as you explore the iconic Colosseum, the ruins of the Roman Forum, and the holy Vatican City with an expert historian guide.',
        images: ['/images/dest-rome.jpg', '/images/dest-rome-thumb1.jpg', '/images/dest-rome-thumb2.jpg'],
        reviewCount: 152,
        difficulty: 'Easy',
        category: 'Historical',
        itinerary: [
            { day: 1, title: 'Arrival & Welcome Dinner', description: 'Meet your guide and fellow travelers for an authentic Italian pasta dinner.' },
            { day: 2, title: 'Imperial Rome', description: 'A guided tour of the Colosseum, Roman Forum, and Palatine Hill.' }
        ],
        inclusions: ['4-star hotel accommodation', 'Daily breakfast', 'Guided tours of all major sites', 'Skip-the-line entrance tickets'],
        exclusions: ['Lunches and dinners (except welcome dinner)', 'Hotel city tax', 'Flights', 'Personal souvenirs'],
    },
    // ... add more tours if needed
];

// --- DESTINATIONS DATA ---

export const destinations: IDestination[] = [
  // FIX: Added the 'country' property to each object
  { id: 'dest-1', name: 'Kyoto', country: 'Japan', description: 'Japan\'s former imperial capital, famous for its classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wood houses.', image: '/images/dest-kyoto.jpg', bestSeason: 'Spring (March-May)', attractions: ['Kinkaku-ji Temple', 'Fushimi Inari Shrine', 'Arashiyama Bamboo Grove', 'Gion District'] },
  { id: 'dest-2', name: 'Rome', country: 'Italy', description: 'A sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display.', image: '/images/dest-rome.jpg', bestSeason: 'Fall (September-November)', attractions: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Roman Forum'] },
  { id: 'dest-3', name: 'Bali', country: 'Indonesia', description: 'An Indonesian island known for its forested volcanic mountains, iconic rice paddies, pristine beaches and vibrant coral reefs.', image: '/images/dest-bali.jpg', bestSeason: 'Dry Season (April-October)', attractions: ['Ubud Monkey Forest', 'Tanah Lot Temple', 'Mount Batur Volcano', 'Uluwatu Temple'] },
  { id: 'dest-4', name: 'Himalayas', country: 'Nepal', description: 'Home to Mount Everest, this mountain range offers unparalleled trekking, mountaineering adventures, and spiritual retreats.', image: '/images/tour-himalayas.jpg', bestSeason: 'Autumn (September-November)', attractions: ['Everest Base Camp Trek', 'Annapurna Circuit', 'Chitwan National Park'] },
];

// --- BOOKINGS DATA ---

export const bookings: IBooking[] = [
    {
        id: 'booking-1',
        userId: 'user-1',
        tourId: 'tour-2',
        bookingDate: new Date('2025-12-10'),
        guests: 2,
        totalPrice: 254000,
        status: 'confirmed' as BookingStatus,
        createdAt: new Date('2025-10-15'),
        paymentDetails: {
            paymentId: 'pi_123456789',
            status: 'succeeded',
            amount: 254000,
        },
        guestDetails: [
            { name: 'Alex Johnson', email: 'alex.j@example.com', phone: '+1-555-123-4567' },
            { name: 'Sam Smith', email: '', phone: '' }
        ]
    }
];

// --- MISC DATA ---

export const addOns = [
  { id: 'addon-1', name: 'Travel Insurance', price: 5000 },
  { id: 'addon-2', name: 'Airport Pickup', price: 2500 },
  { id: 'addon-3', name: 'Local SIM Card', price: 1500 },
];