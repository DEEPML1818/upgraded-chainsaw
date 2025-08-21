import { useEffect } from 'react';
import { LiquidCanvas } from '@/components/liquid-canvas';
import { LiquidNavigation } from '@/components/liquid-navigation';
import { LiquidHero } from '@/components/liquid-hero';
import { LiquidServices } from '@/components/liquid-services';
import { LiquidSolutions } from '@/components/liquid-solutions';
import { LiquidTechnology } from '@/components/liquid-technology';
import { LiquidCTA } from '@/components/liquid-cta';
import { WebGLParticleSystem } from '@/components/webgl-particle-system';
import { CustomCursor } from '@/components/custom-cursor';
import { ThreeAnimations } from '@/components/three-animations';
import { DynamicCharts } from '@/components/dynamic-charts';
import { PageTransition } from '@/components/page-transitions';
import { ParticleBurst, useParticleBurst } from '@/components/particle-burst';
import { AmbientAudio } from '@/components/ambient-audio';
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
        className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden"
        onClick={handleClick}
      >
        {/* Advanced background layers */}
        <WebGLParticleSystem />
        <ThreeAnimations />
        <LiquidCanvas />
        
        {/* Custom cursor for desktop */}
        <CustomCursor />
        
        {/* Particle burst effects */}
        <ParticleBurst 
          trigger={burst.trigger} 
          x={burst.x} 
          y={burst.y} 
          color="#6366f1"
          particleCount={20}
        />
        
        {/* Navigation */}
        <LiquidNavigation />
        
        {/* Floating particles for mobile/fallback */}
        <div className="fixed inset-0 pointer-events-none z-5 md:hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="floating-particle absolute w-1 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Main content */}
        <div id="smooth-content" className="relative z-10">
          <div className="flow-section">
            <LiquidHero />
          </div>
          <div className="flow-section">
            <LiquidServices />
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
        
        {/* Ambient audio controls */}
        <AmbientAudio />
      </div>
    </PageTransition>
  );
}
