import { useEffect, useRef } from 'react';
import { Shield, Lock, Eye, Zap, Activity, Code2 } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "AI-powered threat detection and real-time security monitoring"
  },
  {
    icon: Lock,
    title: "End-to-End Encryption", 
    description: "Military-grade AES-256 encryption for all data transactions"
  },
  {
    icon: Eye,
    title: "Behavioral Analysis",
    description: "Machine learning algorithms detect anomalies and suspicious patterns"
  },
  {
    icon: Zap,
    title: "Real-time Response",
    description: "Instant threat mitigation and automated security protocols"
  },
  {
    icon: Activity,
    title: "Network Monitoring",
    description: "24/7 network surveillance with advanced intrusion detection"
  },
  {
    icon: Code2,
    title: "Secure Development",
    description: "DevSecOps integration with continuous security validation"
  }
];

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Main Hero Content */}
        <div className="text-center mb-16" ref={heroRef}>
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
        
        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="glass-card group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 p-3 rounded-lg border border-indigo-500/30 group-hover:border-cyan-400/50 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-indigo-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                {/* Animated border effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm mb-6">Trusted by leading organizations worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-50">
            {/* Placeholder for trust logos */}
            <div className="text-2xl font-mono text-gray-600">ISO 27001</div>
            <div className="text-2xl font-mono text-gray-600">SOC 2</div>
            <div className="text-2xl font-mono text-gray-600">GDPR</div>
            <div className="text-2xl font-mono text-gray-600">PCI DSS</div>
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