import { useEffect, useRef } from 'react';
import { GitBranch, Activity, Cpu, Zap } from 'lucide-react';
import { EnhancedPhysicsPlayground } from '@/components/enhanced-physics-playground';

export function LiquidTechnology() {
  const progressBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate progress bars when visible
    const animateProgressBars = () => {
      if (typeof window !== 'undefined' && window.gsap && progressBarsRef.current) {
        const progressBars = progressBarsRef.current.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          window.gsap.to(bar, {
            width: width + '%',
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 80%',
            }
          });
        });
      }
    };

    const timer = setTimeout(animateProgressBars, 1000);
    return () => clearTimeout(timer);
  }, []);

  const technologies = [
    { name: "Quantum Processing", progress: 95, icon: <Cpu className="w-6 h-6" /> },
    { name: "Neural Networks", progress: 88, icon: <GitBranch className="w-6 h-6" /> },
    { name: "Real-time Analytics", progress: 92, icon: <Activity className="w-6 h-6" /> },
    { name: "Lightning Speed", progress: 99, icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <section id="technology" className="liquid-section py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
      
      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <div className="section-header text-center mb-20">
          <h2 className="liquid-text text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Liquid Technology
          </h2>
          <p className="liquid-text text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Advanced systems that flow seamlessly through complex operations with unmatched precision
          </p>
        </div>
        
        <div className="tech-content grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="liquid-card p-10 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10">
            <h3 className="text-3xl font-bold mb-8 text-white">Performance Metrics</h3>
            <div className="space-y-8" ref={progressBarsRef}>
              {technologies.map((tech, index) => (
                <div key={index} className="technology-item">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3 text-white">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg">
                        {tech.icon}
                      </div>
                      <span className="font-semibold text-lg">{tech.name}</span>
                    </div>
                    <span className="text-cyan-400 font-bold text-lg">{tech.progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="progress-fill h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                      data-width={tech.progress}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="liquid-card relative h-96 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 animate-ping"></div>
                <div className="absolute inset-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-60 animate-spin"></div>
                <GitBranch className="absolute inset-0 w-32 h-32 text-white/40 m-auto" />
              </div>
            </div>
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/20 rounded-2xl"></div>
            <div className="absolute top-8 left-8 right-8 bottom-8 border border-white/10 rounded-xl"></div>
          </div>
        </div>

        {/* Interactive Physics Playground */}
        <div className="container max-w-4xl mx-auto px-8 mt-20">
          <EnhancedPhysicsPlayground />
        </div>
      </div>
    </section>
  );
}