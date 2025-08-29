import { useEffect, useRef } from 'react';
import { Shield, Lock, Eye, Zap, Activity, Code2 } from 'lucide-react';


export function CybersecurityHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate security stats
    const animateCounters = () => {
      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll('[data-count]');
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-count') || '0');
          let current = 0;
          const increment = target / 100;
          
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              const displayValue = target === 99.9 ? current.toFixed(1) : Math.ceil(current);
              counter.textContent = displayValue.toString();
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target === 99.9 ? target.toFixed(1) : target.toString();
            }
          };
          
          updateCounter();
        });
      }
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-5">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Main Hero Content */}
        <div className="text-center mb-12" ref={heroRef}>
          <div className="mb-8 relative">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-hero block">Secure</span>
              <span className="text-white block">Digital</span>
              <span className="text-gradient-hero block">Infrastructure</span>
            </h1>
            
            {/* Animated security badge */}
            <div className="absolute -top-4 -right-4 md:right-20 animate-float">
              <div className="bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-full p-3">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Protecting your digital assets with enterprise-grade cybersecurity solutions. 
            Advanced threat detection, real-time monitoring, and AI-powered defense systems 
            that evolve with the threat landscape.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Start Security Audit
                <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </span>
            </button>
            
            <button className="group border-2 border-cyan-500/50 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold text-cyan-400 hover:text-white hover:bg-cyan-500/10 transition-all duration-300">
              <span className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Watch Demo
                <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>
          
          {/* Security Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={statsRef}>
            <div className="glass-card text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                <span data-count="99.9">0</span>%
              </div>
              <div className="text-gray-400 text-sm">Threat Detection</div>
              <div className="w-full bg-gray-700 rounded-full h-1 mt-3">
                <div className="bg-green-400 h-1 rounded-full animate-pulse" style={{ width: '99%' }}></div>
              </div>
            </div>
            
            <div className="glass-card text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                <span data-count="2847">0</span>
              </div>
              <div className="text-gray-400 text-sm">Active Shields</div>
              <div className="w-full bg-gray-700 rounded-full h-1 mt-3">
                <div className="bg-cyan-400 h-1 rounded-full animate-pulse" style={{ width: '85%', animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            <div className="glass-card text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                <span data-count="1254">0</span>
              </div>
              <div className="text-gray-400 text-sm">Threats Blocked</div>
              <div className="w-full bg-gray-700 rounded-full h-1 mt-3">
                <div className="bg-yellow-400 h-1 rounded-full animate-pulse" style={{ width: '92%', animationDelay: '1s' }}></div>
              </div>
            </div>
            
            <div className="glass-card text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">
                <span data-count="24">0</span>/7
              </div>
              <div className="text-gray-400 text-sm">Monitoring</div>
              <div className="w-full bg-gray-700 rounded-full h-1 mt-3">
                <div className="bg-indigo-400 h-1 rounded-full animate-pulse" style={{ width: '100%', animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Background security elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated shield patterns */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-spin"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animationDuration: `${20 + i * 5}s`,
              transform: `scale(${0.5 + i * 0.3})`
            }}
          >
            <Shield className="w-32 h-32 text-indigo-400" />
          </div>
        ))}
      </div>
    </section>
  );
}