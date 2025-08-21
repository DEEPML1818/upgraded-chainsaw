import { useEffect, useRef, useState } from 'react';
import { useLenis } from '@/hooks/use-lenis';
import { getHeroContent, type HeroContent } from '@/lib/sanity';
import { RivePlaceholder } from './rive-animation';

export function LiquidHero() {
  const { scrollTo } = useLenis();
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);

  useEffect(() => {
    // Load hero content from Sanity
    getHeroContent().then(setHeroContent);
    
    // Animate counters when visible
    const animateCounters = () => {
      if (typeof window !== 'undefined' && window.gsap && statsRef.current) {
        const counters = statsRef.current.querySelectorAll('[data-count]');
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-count') || '0');
          window.gsap.fromTo(counter, 
            { innerText: 0 },
            {
              duration: 2,
              innerText: target,
              snap: { innerText: target === 99.9 ? 0.1 : 1 },
              scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
              },
              onUpdate: function() {
                const element = this.targets()[0] as HTMLElement;
                if (target === 99.9) {
                  element.innerText = parseFloat(element.innerText).toFixed(1);
                } else {
                  element.innerText = Math.ceil(parseFloat(element.innerText)).toString();
                }
              }
            }
          );
        });
      }
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(target);
    if (targetElement) {
      scrollTo(targetElement, { offset: -80 });
    }
  };

  return (
    <section ref={heroRef} className="liquid-section min-h-screen flex items-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-indigo-900/30 to-cyan-900/50 backdrop-blur-sm"></div>
      
      <div className="container max-w-6xl mx-auto px-8 relative z-10">
        <div className="hero-content text-center max-w-4xl mx-auto">
          <h1 className="hero-title flow-text text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent leading-tight">
            {heroContent?.title || 'Digital Innovation Flows Through Everything'}
          </h1>
          <p className="hero-subtitle flow-text text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
            {heroContent?.subtitle || 'Experience the future of fintech with liquid-smooth interactions and revolutionary digital solutions'}
          </p>
          
          <div className="hero-actions flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="#contact" 
              onClick={(e) => handleCTAClick(e, 'contact')}
              className="hero-cta flow-card px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-indigo-500/25 transform hover:scale-105 transition-all duration-500"
              data-testid="hero-get-started"
            >
              {heroContent?.ctaText || 'Experience the Flow'}
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleCTAClick(e, 'services')}
              className="liquid-card px-8 py-4 bg-transparent border-2 border-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white font-semibold text-lg backdrop-blur-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-500"
              data-testid="hero-explore-services"
            >
              Discover Solutions
            </a>
          </div>
          
          <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8" ref={statsRef}>
            <div className="liquid-card stat-item text-center p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-indigo-400/50 transition-all duration-500" data-testid="stat-uptime">
              <span className="stat-number text-5xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent block" data-count="99.9">0</span>%
              <div className="stat-label text-white/70 text-lg mt-3 font-medium">Uptime Excellence</div>
            </div>
            <div className="liquid-card stat-item text-center p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500" data-testid="stat-transactions">
              <span className="stat-number text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent block" data-count="50">0</span>M+
              <div className="stat-label text-white/70 text-lg mt-3 font-medium">Transactions Processed</div>
            </div>
            <div className="liquid-card stat-item text-center p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-indigo-400/50 transition-all duration-500" data-testid="stat-support">
              <span className="stat-number text-5xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent block" data-count="24">0</span>/7
              <div className="stat-label text-white/70 text-lg mt-3 font-medium">Global Support</div>
            </div>
          </div>
          
          {/* Rive Animation Element */}
          <div className="mt-16 flex justify-center">
            <RivePlaceholder className="w-64 h-32" />
          </div>
        </div>
      </div>
    </section>
  );
}