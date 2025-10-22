/**
 * BusinessSolutionsPage - Do not modify any SVG files — reference them exactly as in the repo.
 * 
 * This page displays business solutions with interactive topology diagrams.
 * All SVG content is inline (preserving original implementation) and should not be modified.
 * SVG files in the repo should be imported using exact paths and filenames.
 */

import React, { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';
import { useGSAPScrollSmoother } from '@/hooks/use-gsap-scroll-smoother';
import { SolutionCard } from './components/SolutionCard';
import { generalSolutions, nicheSolutions, specializedSolutions } from './data';

/**
 * BusinessSolutionsPage component
 * Main page component that renders all business solutions with interactive topology diagrams
 */
const BusinessSolutionsPage: React.FC = () => {
  useGSAPInit();
  useGSAPAnimations();
  useGSAPScrollSmoother();

  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div id="smooth-wrapper" className="min-h-screen bg-slate-950 flex flex-col relative">
      <Navigation />

      <div id="smooth-content" className="flex-1">
        <main className="pt-20">
          {/* Hero Section */}
          <section className="liquid-section min-h-screen flex items-center relative overflow-hidden pt-20 hero">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-purple-950/40"></div>

            <div className="max-w-7xl mx-auto text-center relative z-10 hero-content">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white slide-in-up">
                Business <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in">
                Interactive workflow diagrams showing how our business solutions transform your operations
              </p>
            </div>
          </section>

          {/* General Business Solutions */}
          <section className="liquid-section px-4 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">General Business Solutions</h2>
                <p className="text-gray-300 text-lg">Enterprise-grade solutions for modern business operations</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {generalSolutions.map((solution) => (
                  <SolutionCard
                    key={solution.id}
                    solution={solution}
                    isActive={activeCard === solution.id}
                    onHover={setActiveCard}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Niche Business Solutions */}
          <section className="liquid-section px-4 py-20 bg-slate-900/20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Niche Business Solutions</h2>
                <p className="text-gray-300 text-lg">Specialized solutions for cutting-edge business needs</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {nicheSolutions.map((solution) => (
                  <SolutionCard
                    key={solution.id}
                    solution={solution}
                    isActive={activeCard === solution.id}
                    onHover={setActiveCard}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Specialized Solutions */}
          <section className="liquid-section px-4 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Specialized Solutions</h2>
                <p className="text-gray-300 text-lg">Advanced solutions for specific industry requirements</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {specializedSolutions.map((solution) => (
                  <SolutionCard
                    key={solution.id}
                    solution={solution}
                    isActive={activeCard === solution.id}
                    onHover={setActiveCard}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessSolutionsPage;
