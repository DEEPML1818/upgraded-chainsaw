import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'demo-project',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
  token: import.meta.env.VITE_SANITY_TOKEN,
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// Types for Sanity content
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface HeroContent {
  _id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage?: SanityImage;
}

export interface ServiceContent {
  _id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

// Sanity queries
export const heroQuery = `*[_type == "hero"][0]{
  _id,
  title,
  subtitle,
  ctaText,
  backgroundImage
}`;

export const servicesQuery = `*[_type == "service"] | order(_createdAt asc){
  _id,
  title,
  description,
  icon,
  gradient
}`;

// Fetch functions with fallback data (disabled API calls to prevent CORS errors)
export async function getHeroContent(): Promise<HeroContent> {
  // Return fallback content directly to avoid CORS issues
  return {
    _id: 'fallback',
    title: 'Digital Innovation Flows Through Everything',
    subtitle: 'Experience the future of fintech with liquid-smooth interactions and revolutionary digital solutions',
    ctaText: 'Experience the Flow',
  };
}

export async function getServicesContent(): Promise<ServiceContent[]> {
  // Return fallback content directly to avoid CORS issues  
  return [
    {
      _id: '1',
      title: 'Quantum Payments',
      description: 'Lightning-fast payment processing with quantum-encrypted security and real-time global settlement.',
      icon: 'CreditCard',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      _id: '2',
      title: 'Neural Security',
      description: 'AI-powered threat detection with blockchain immutability and quantum-resistant encryption.',
      icon: 'Shield',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      _id: '3',
      title: 'Liquid Analytics',
      description: 'Real-time insights that flow seamlessly through predictive AI and interactive visualizations.',
      icon: 'TrendingUp',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];
}