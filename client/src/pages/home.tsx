import { useEffect } from 'react';
import { HeroSection } from '@/components/hero-section';
import { ServicesCybersec } from '@/components/services-cybersec';
import { Navigation } from '@/components/navigation';
import { SolutionsSection } from '@/components/solutions-section';
import { TechnologySection } from '@/components/technology-section';
import { CTASection } from '@/components/cta-section';
import { DynamicCharts } from '@/components/dynamic-charts';
import { PageTransition } from '@/components/page-transitions';
import { ParticleBurst, useParticleBurst } from '@/components/particle-burst';
import { CustomCursor } from '@/components/custom-cursor';
import { useLenis } from '@/hooks/use-lenis';
import { JetonInspiredBackgrounds, JetonSmoothWrapper } from '@/components/jeton-inspired-backgrounds';

export default function Home() {
  const { burst, triggerBurst } = useParticleBurst();

  useLenis();

  // Add click handler for particle bursts
  const handleClick = (e: React.MouseEvent) => {
    triggerBurst(e.clientX, e.clientY);
  };

  useEffect(() => {
    // Performance monitoring for animations
    let lastTime = performance.now();
    let frameCount = 0;

    const monitorPerformance = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round(frameCount * 1000 / (currentTime - lastTime));
        if (fps < 30) {
          // Reduce animation quality if performance is poor
          document.body.classList.add('reduced-motion');
        }
        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(monitorPerformance);
    };

    monitorPerformance();

    // Error handling for external libraries
    const handleError = (e: ErrorEvent) => {
      if (e.filename && (e.filename.includes('lenis') || e.filename.includes('gsap'))) {
        // Fallback to CSS animations if libraries fail
        document.body.classList.add('fallback-animations');
        console.warn('Animation libraries failed to load, using CSS fallbacks');
      }
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Jeton-Inspired Background System */}
        <JetonInspiredBackgrounds />

        {/* Custom cursor for desktop */}
        <CustomCursor />

        {/* Particle burst effects */}
        <ParticleBurst 
          trigger={burst.trigger} 
          x={burst.x} 
          y={burst.y} 
          color="#00ff88"
          particleCount={12}
        />

        {/* Navigation */}
        <Navigation />

        {/* Main content sections */}
        <JetonSmoothWrapper>
          <div className="relative z-10" onClick={handleClick}>
            {/* Hero Section */}
            <section id="hero" className="min-h-screen hero-section">
              <HeroSection />
            </section>

            {/* Services Section */}
            <section id="services" className="min-h-screen py-20 services-section">
              <ServicesCybersec />
            </section>

            {/* Charts Section */}
            <section id="charts" className="min-h-screen py-20">
              <DynamicCharts />
            </section>

            {/* Solutions Section */}
            <section id="solutions" className="min-h-screen py-20 solutions-section">
              <SolutionsSection />
            </section>

            {/* Technology Section */}
            <section id="technology" className="min-h-screen py-20 technology-section">
              <TechnologySection />
            </section>

            {/* Contact/CTA Section */}
            <section id="contact" className="min-h-screen py-20 contact-section">
              <CTASection />
            </section>
          </div>
        </JetonSmoothWrapper>
      </div>
    </PageTransition>
  );
}