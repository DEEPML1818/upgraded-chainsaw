import { useEffect, useRef } from 'react';
import { GitBranch } from 'lucide-react';

export function TechnologySection() {
  const progressBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate progress bars when visible
    const animateProgressBars = () => {
      if (typeof window !== 'undefined' && window.gsap && progressBarsRef.current) {
        const progressBars = progressBarsRef.current.querySelectorAll('.progress-fill-flowtech');
        progressBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          window.gsap.to(bar, {
            width: width + '%',
            duration: 1.5,
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

  return (
    <section id="technology" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-8">
        <div className="section-header text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">DevOps & Automation</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Advanced development operations and automation tools that accelerate deployment and ensure reliability.
          </p>
        </div>
        
        <div className="tech-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="progress-bars space-y-8 slide-in-left" ref={progressBarsRef}>
            <div className="progress-item" data-testid="progress-deployment">
              <div className="progress-label flex justify-between mb-2 text-sm">
                <span className="text-white">Deployment Speed</span>
                <span className="text-white">95%</span>
              </div>
              <div className="progress-bar-flowtech">
                <div className="progress-fill-flowtech" data-width="95"></div>
              </div>
            </div>
            
            <div className="progress-item" data-testid="progress-reliability">
              <div className="progress-label flex justify-between mb-2 text-sm">
                <span className="text-white">System Reliability</span>
                <span className="text-white">99%</span>
              </div>
              <div className="progress-bar-flowtech">
                <div className="progress-fill-flowtech" data-width="99"></div>
              </div>
            </div>
            
            <div className="progress-item" data-testid="progress-automation">
              <div className="progress-label flex justify-between mb-2 text-sm">
                <span className="text-white">Automation Coverage</span>
                <span className="text-white">88%</span>
              </div>
              <div className="progress-bar-flowtech">
                <div className="progress-fill-flowtech" data-width="88"></div>
              </div>
            </div>
            
            <div className="progress-item" data-testid="progress-optimization">
              <div className="progress-label flex justify-between mb-2 text-sm">
                <span className="text-white">Performance Optimization</span>
                <span className="text-white">92%</span>
              </div>
              <div className="progress-bar-flowtech">
                <div className="progress-fill-flowtech" data-width="92"></div>
              </div>
            </div>
          </div>
          
          <div className="network-visualization relative h-96 bg-slate-800/40 backdrop-blur-lg rounded-3xl border border-indigo-500/10 overflow-hidden slide-in-right" data-testid="network-visualization">
            <div className="flex items-center justify-center h-full text-6xl text-cyan-400/30">
              <GitBranch className="w-24 h-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
