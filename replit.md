# Birthday Surprise Experience

## Overview

A cinematic birthday surprise web application that creates an interactive, animated celebration experience. The application features a multi-phase journey starting with a mysterious gift box, revealing animated surprises including luxury car animations, personalized messages, and culminating in a spectacular fireworks finale with confetti effects. Built as a single-page application with rich animations and sound integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for complex animations, transitions, and gesture handling
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: React hooks for local component state, TanStack Query for server state
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Development**: Hot module replacement via Vite integration in development mode
- **Static Serving**: Express serves the built React application in production
- **Storage Interface**: Abstracted storage layer with in-memory implementation (expandable to database)

### Data Storage
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless driver for PostgreSQL connectivity
- **Models**: User authentication schema with username/password fields

### Component Architecture
- **Modular Design**: Separate components for each animation phase (GiftBox, SurpriseReveal, FinalCelebration)
- **Effect Components**: Dedicated components for visual effects (ConfettiEffect, FireworksEffect, StarryBackground)
- **Modal System**: Reusable modal components for interactive elements
- **Animation States**: Phase-based state management for smooth transitions between celebration stages

### Styling and Theming
- **Design System**: Consistent color palette with CSS custom properties
- **Typography**: Multiple font families (Great Vibes, Caveat, Inter) for varied visual hierarchy
- **Responsive Design**: Mobile-first approach with breakpoint-specific adaptations
- **Dark Mode**: Built-in dark mode support through CSS variables
- **Custom Animations**: Tailwind-extended animations for specialized effects

### Development Experience
- **TypeScript**: Full type safety across frontend and backend
- **Hot Reload**: Vite-powered development with instant updates
- **Path Mapping**: Absolute imports with @ aliases for clean import statements
- **Error Handling**: Runtime error overlay in development environment
- **Build Optimization**: Separate client and server builds with ESBuild for server bundling

## External Dependencies

### UI and Animation Libraries
- **Radix UI**: Headless UI primitives for accessibility-compliant components
- **Framer Motion**: Advanced animation library for smooth transitions and gestures
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for managing component variants
- **TanStack Query**: Server state management and caching

### Database and ORM
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **Neon Database**: Serverless PostgreSQL for cloud deployment
- **Drizzle Zod**: Schema validation integration

### Development Tools
- **ESBuild**: Fast JavaScript bundler for server-side code
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **TSX**: TypeScript execution for development server
- **Wouter**: Minimalist routing library

### Fonts and Assets
- **Google Fonts**: Great Vibes, Caveat, and Inter font families
- **Font Awesome**: Icon library for enhanced visual elements
- **Web Fonts**: Preloaded for optimal performance

### Audio Integration
- **Web Audio API**: Built-in browser audio support for sound effects
- **Audio Assets**: Placeholder structure for birthday music and sound effects