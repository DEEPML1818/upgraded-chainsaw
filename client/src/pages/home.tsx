import { Navigation } from '@/components/navigation';
import { useParticleBurst } from '@/components/particle-burst';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { GSAPScrollSmootherWrapper } from '@/components/gsap-scroll-smoother-wrapper';
import { useGSAPInit } from '@/hooks/use-gsap-init';

export default function Home() {
  const { burst, triggerBurst } = useParticleBurst();
  
  // Initialize GSAP plugins
  useGSAPInit();

  const handleClick = (e: React.MouseEvent) => {
    triggerBurst(e.clientX, e.clientY);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <EnhancedSectionBackgrounds />
      <Navigation />
      
      <main className="container mx-auto px-4" onClick={handleClick}>
        {/* Hero Section - Live Coding & Matrix Rain */}
        <section id="hero" className="min-h-screen flex items-center">
          <div className="w-full">
            <div className="max-w-6xl mx-auto px-8">
              <div className="text-center p-12 rounded-3xl border-2 border-cyan-400/80">
                <h1 className="text-5xl md:text-7xl font-black mb-8 text-white">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
                    Secure Digital Infrastructure
                  </span>
                </h1>
                <p className="text-2xl text-white font-bold mb-12 leading-relaxed max-w-4xl mx-auto">
                  Protecting your digital assets with enterprise-grade cybersecurity solutions.
                  Advanced threat detection, real-time monitoring, and AI-powered defense systems.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <a 
                    href="#services"
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 px-10 py-5 rounded-xl font-bold text-xl text-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    🛡️ Start Security Audit
                  </a>
                  <a 
                    href="#contact"
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-10 py-5 rounded-xl font-bold text-xl text-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    📺 Watch Demo
                  </a>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="rounded-xl border-2 border-green-400 p-6">
                    <div className="text-4xl font-black text-green-300 mb-2">99.9%</div>
                    <div className="text-white font-bold text-sm">Threat Detection</div>
                  </div>
                  <div className="rounded-xl border-2 border-cyan-400 p-6">
                    <div className="text-4xl font-black text-cyan-300 mb-2">2,847</div>
                    <div className="text-white font-bold text-sm">Active Shields</div>
                  </div>
                  <div className="rounded-xl border-2 border-red-400 p-6">
                    <div className="text-4xl font-black text-red-300 mb-2">1,254</div>
                    <div className="text-white font-bold text-sm">Threats Blocked</div>
                  </div>
                  <div className="rounded-xl border-2 border-yellow-400 p-6">
                    <div className="text-4xl font-black text-yellow-300 mb-2">24/7</div>
                    <div className="text-white font-bold text-sm">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}