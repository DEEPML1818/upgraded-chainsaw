# Overview

FlowTech is now a premium cybersecurity and programming-focused platform featuring live coding backgrounds and real-time security monitoring dashboards. The platform combines sophisticated GSAP animations with authentic cybersecurity themes, showcasing animated terminal windows running threat detection scripts, network monitoring panels, and matrix-style visual effects. Built with glass-morphism design and cutting-edge animation technology, it provides an immersive experience that appeals to cybersecurity professionals and developers with its authentic programming environment aesthetics.

# User Preferences

Preferred communication style: Simple, everyday language.
Website Theme: Cybersecurity and programming-focused with live coding backgrounds.
Visual Requirements: Terminal windows, threat detection dashboards, matrix-style effects.
Target Audience: Cybersecurity professionals, developers, IT security teams.
Brand Identity: Professional cybersecurity platform with authentic programming visuals.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern component-based architecture using React 18 with TypeScript for type safety
- **Vite Build System**: Fast development server and optimized production builds with hot module replacement
- **Wouter Routing**: Lightweight client-side routing solution for single-page application navigation
- **Styling Framework**: Tailwind CSS with custom design system variables and shadcn/ui component library
- **Animation Stack**: GSAP with ScrollSmoother for liquid animations, Lenis for smooth scrolling, ScrollTrigger for scroll-based interactions, Matter.js for physics, and Rive for complex animations
- **State Management**: TanStack Query for server state management and caching

## Component Design System
- **shadcn/ui Integration**: Comprehensive UI component library with Radix UI primitives
- **Design Tokens**: CSS custom properties for consistent theming (colors, spacing, typography)
- **Glass-morphism UI**: Backdrop blur effects and translucent surfaces with gradient overlays
- **Responsive Design**: Mobile-first approach with adaptive layouts across all screen sizes

## Backend Architecture
- **Express.js Server**: RESTful API server with middleware for request logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL support and type-safe schema definitions
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Development Integration**: Vite middleware integration for seamless full-stack development

## Performance Optimizations
- **Animation Performance**: Hardware acceleration, 60fps monitoring, and reduced motion fallbacks
- **Code Splitting**: Component-level code splitting with dynamic imports
- **Asset Optimization**: Font preloading, image optimization, and critical CSS inlining
- **Error Boundaries**: Graceful degradation when external animation libraries fail

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection for Neon Database
- **drizzle-orm & drizzle-kit**: Type-safe SQL ORM with migration management and PostgreSQL dialect support
- **@tanstack/react-query**: Server state management, caching, and synchronization

## Animation and Interaction Libraries
- **@studio-freight/lenis**: Smooth scroll library for enhanced user experience
- **gsap & ScrollTrigger**: Professional animation library with scroll-based triggers
- **ScrollSmoother**: GSAP plugin for liquid-smooth scrolling with scroll-back animations
- **@rive-app/react-canvas**: Interactive Rive animations for complex motion graphics
- **matter-js**: 2D physics engine for interactive ball physics playground

## Content Management
- **@sanity/client**: Headless CMS client for dynamic content management
- **@sanity/image-url**: Image URL generation for Sanity assets

## UI and Design Libraries
- **@radix-ui/react-**: Complete suite of accessible UI primitives (dialogs, dropdowns, forms, etc.)
- **lucide-react**: Modern icon library with consistent design language

## Development and Build Tools
- **vite**: Fast build tool with ES modules support and development server
- **@vitejs/plugin-react**: React integration for Vite with fast refresh
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **tailwindcss & autoprefixer**: Utility-first CSS framework with vendor prefixing

## Form and Validation
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Form validation resolvers for various schema libraries
- **zod & drizzle-zod**: TypeScript-first schema validation with ORM integration

## Development Database
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- Note: The application uses Drizzle ORM configured for PostgreSQL, though actual database connection may be added later

# Replit Environment Setup

## Development Configuration (Completed: October 1, 2025)
- **Dev Server Workflow**: Configured to run `npm run dev` on port 5000 with webview output
- **Host Configuration**: Vite configured with `host: 0.0.0.0` and `allowedHosts: true` for Replit proxy compatibility
- **HMR Setup**: Hot Module Replacement configured on port 5000 for seamless development
- **Build Scripts**: 
  - `npm run dev`: Development server with tsx
  - `npm run build`: Production build (Vite + esbuild)
  - `npm run start`: Production server
- **Storage**: Currently using MemStorage (in-memory) for development; PostgreSQL can be added via DATABASE_URL environment variable

## Port Configuration
- **Frontend & Backend**: Unified server on port 5000 (0.0.0.0)
- Vite development server integrated via middleware in Express
- All API routes prefixed with `/api`

## Deployment Configuration
- **Target**: Autoscale deployment (stateless)
- **Build**: `npm run build` (Vite + esbuild bundling)
- **Run**: `npm run start` (production Node.js server)