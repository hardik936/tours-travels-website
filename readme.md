# Tours & Travels Website (Next.js 15 + TypeScript)

A production-ready **tours and travels** website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and a clean modular architecture. It supports tours, destinations, activities, bookings, payments, and more.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **State Management:** Zustand + React Context where needed
- **HTTP Client:** Axios (wrapper in `@/lib/api-client`)
- **Icons:** react-icons
- **Dates:** date-fns
- **Payments:** Stripe (with Razorpay option)
- **Tooling:** ESLint, Prettier

---

## 📂 Project Structure

```bash
tours-travels-website/
├── src/
│   ├── app/                  # App Router (Next.js)
│   │   ├── layout.tsx        # Root layout (navbar, footer, providers)
│   │   ├── page.tsx          # Homepage
│   │   ├── globals.css       # Global styles import
│   │   └── (routes)/         # All route groups (tours, destinations, etc.)
│   │       ├── tours/
│   │       ├── destinations/
│   │       ├── packages/
│   │       ├── booking/
│   │       ├── itinerary/
│   │       ├── activities/
│   │       ├── blog/
│   │       ├── contact/
│   │       ├── about/
│   │       └── dashboard/
│   │
│   ├── components/           # Reusable UI + feature components
│   │   ├── ui/               # Buttons, cards, modals, inputs, etc.
│   │   ├── shared/           # Navbar, Footer, Headers, etc.
│   │   ├── home/             # Homepage sections
│   │   ├── tours/            # Tour-specific components
│   │   ├── destinations/     # Destination-specific components
│   │   ├── activities/       # Activity-specific components
│   │   ├── booking/          # Booking forms, steps, summary
│   │   ├── itinerary/        # Itinerary builder components
│   │   ├── search/           # Search UI
│   │   └── common/           # ErrorBoundary, Loading, Toast, etc.
│   │
│   ├── lib/                  # Helpers & utilities
│   │   ├── api-client.ts     # Axios instance / API wrapper
│   │   ├── utils.ts
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   ├── constants.ts
│   │   ├── mockData.ts
│   │   ├── filters.ts
│   │   ├── search.ts
│   │   └── payment.ts
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useTours.ts
│   │   ├── useDestinations.ts
│   │   ├── useBooking.ts
│   │   ├── useFilters.ts
│   │   ├── useSearch.ts
│   │   ├── usePagination.ts
│   │   ├── useFetch.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── context/              # React Context providers
│   │   ├── AuthContext.tsx
│   │   ├── BookingContext.tsx
│   │   ├── CartContext.tsx
│   │   ├── FilterContext.tsx
│   │   └── UserContext.tsx
│   │
│   ├── types/                # TypeScript types
│   │   ├── tour.ts
│   │   ├── destination.ts
│   │   ├── booking.ts
│   │   ├── activity.ts
│   │   ├── user.ts
│   │   ├── itinerary.ts
│   │   ├── payment.ts
│   │   └── api.ts
│   │
│   ├── services/             # Business logic services
│   │   ├── tourService.ts
│   │   ├── destinationService.ts
│   │   ├── bookingService.ts
│   │   ├── activityService.ts
│   │   ├── authService.ts
│   │   ├── paymentService.ts
│   │   ├── searchService.ts
│   │   └── userService.ts
│   │
│   ├── styles/               # CSS files (Tailwind base, utilities)
│   │   ├── globals.css
│   │   ├── variables.css
│   │   ├── animations.css
│   │   └── responsive.css
│   │
│   └── config/               # Config files
│       ├── env.ts
│       ├── site.config.ts
│       └── theme.config.ts
│
├── public/                   # Static assets (images, videos, icons)
├── .env.example              # Environment variable template
├── .eslintrc.json            # ESLint config
├── .prettierrc.json          # Prettier config
├── tsconfig.json             # TypeScript config
├── next.config.js            # Next.js config
├── package.json
├── package-lock.json
└── README.md
