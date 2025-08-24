import { useEffect } from 'react';
import { FramerCodingBackground } from '@/components/framer-coding-background';
import { FramerHeroSection } from '@/components/framer-hero-section';
import { ServicesCybersec } from '@/components/services-cybersec';
import { LiquidNavigation } from '@/components/liquid-navigation';
import { LiquidSolutions } from '@/components/liquid-solutions';
import { LiquidTechnology } from '@/components/liquid-technology';
import { LiquidCTA } from '@/components/liquid-cta';
import { WebGLParticleSystem } from '@/components/webgl-particle-system';
import { CustomCursor } from '@/components/custom-cursor';
import { DynamicCharts } from '@/components/dynamic-charts';
import { PageTransition } from '@/components/page-transitions';
import { ParticleBurst, useParticleBurst } from '@/components/particle-burst';
import { useLenis } from '@/hooks/use-lenis';
import { useLiquidAnimations } from '@/hooks/use-liquid-animations';
import { useJetonAnimations } from '@/hooks/use-jeton-animations';

export default function Home() {
  const { burst, triggerBurst } = useParticleBurst();
  
  useLenis();
  useLiquidAnimations();
  useJetonAnimations();

  // Add click handler for particle bursts
  const handleClick = (e: React.MouseEvent) => {
    triggerBurst(e.clientX, e.clientY);
  };

  useEffect(() => {
    // Performance monitoring for liquid animations
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
      <div 
        className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative overflow-hidden"
        onClick={handleClick}
      >
        {/* Framer Motion coding background */}
        <FramerCodingBackground />
        
        {/* Custom cursor for desktop */}
        <CustomCursor />
        
        {/* Particle burst effects with Framer Motion */}
        <ParticleBurst 
          trigger={burst.trigger} 
          x={burst.x} 
          y={burst.y} 
          color="#00ff88"
          particleCount={12}
        />
        
        {/* Navigation */}
        <LiquidNavigation />
        
        {/* Main content */}
        <div id="smooth-content" className="relative z-20">
          <div className="flow-section">
            <FramerHeroSection />
          </div>
          <div className="flow-section">
            <ServicesCybersec />
          </div>
          <div className="flow-section">
            <DynamicCharts />
          </div>
          <div className="flow-section">
            <LiquidSolutions />
          </div>
          <div className="flow-section">
            <LiquidTechnology />
          </div>
          <div className="flow-section">
            <LiquidCTA />
          </div>
        </div>
        

      </div>
    </PageTransition>
  );
}
