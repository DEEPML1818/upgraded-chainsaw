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
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { GSAPScrollSmootherWrapper } from '@/components/gsap-scroll-smoother-wrapper';
import { useGSAPInit } from '@/hooks/use-gsap-init';

export default function Home() {
  const { burst, triggerBurst } = useParticleBurst();
  
  // Initialize GSAP plugins
  useGSAPInit();

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
      <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Enhanced Programming Background System */}
        <EnhancedSectionBackgrounds />

        {/* Custom cursor for desktop */}
        <CustomCursor />

        {/* Particle burst effects */}
        <ParticleBurst 
          trigger={burst.trigger} 
          x={burst.x} 
          y={burst.y} 
          color="#00ff88"
          particleCount={15}
        />

        {/* GSAP ScrollSmoother Wrapper */}
        <GSAPScrollSmootherWrapper>
          <div className="relative z-10" onClick={handleClick}>
            {/* Navigation */}
            <Navigation />

            {/* Hero Section - Live Coding & Matrix Rain */}
            <section id="hero" className="min-h-screen liquid-section hero-section flex items-center">
              <div className="relative z-50 w-full">
                <div className="container max-w-6xl mx-auto px-8">
                  <div className="text-center bg-black/90 backdrop-blur-lg rounded-3xl border-2 border-cyan-400/80 p-12 shadow-2xl">
                    <h1 className="text-5xl md:text-7xl font-black mb-8 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                      <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                        Secure Digital Infrastructure
                      </span>
                    </h1>
                    <p className="text-2xl text-white font-bold mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                      Protecting your digital assets with enterprise-grade cybersecurity solutions. Advanced threat detection, real-time monitoring, and AI-powered defense systems.
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
                    
                    {/* Live Security Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-green-400 p-6 shadow-2xl">
                        <div className="text-4xl font-black text-green-300 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">99.9%</div>
                        <div className="text-white font-bold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Threat Detection</div>
                      </div>
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-cyan-400 p-6 shadow-2xl">
                        <div className="text-4xl font-black text-cyan-300 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">2,847</div>
                        <div className="text-white font-bold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Active Shields</div>
                      </div>
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-red-400 p-6 shadow-2xl">
                        <div className="text-4xl font-black text-red-300 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">1,254</div>
                        <div className="text-white font-bold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Threats Blocked</div>
                      </div>
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-yellow-400 p-6 shadow-2xl">
                        <div className="text-4xl font-black text-yellow-300 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">24/7</div>
                        <div className="text-white font-bold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section - CLI Terminal Background */}
            <section id="services" className="min-h-screen py-20 liquid-section services-section flex items-center">
              <div className="relative z-50 w-full">
                <div className="container max-w-7xl mx-auto px-8">
                  <div className="bg-black/95 backdrop-blur-lg rounded-3xl border-2 border-green-400 p-12 shadow-2xl">
                    <div className="text-center mb-16">
                      <h2 className="text-5xl font-black mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                        <span className="bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                          Cybersecurity Solutions
                        </span>
                      </h2>
                      <p className="text-xl text-white font-bold max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                        Complete protection for your digital infrastructure with AI-powered threat detection and automated response.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-red-400 p-6 hover:scale-105 transition-all duration-300">
                        <div className="text-red-300 text-4xl mb-4">🔍</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Threat Detection & Response</h3>
                        <p className="text-white font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">24/7 monitoring with AI-powered threat detection and automated incident response protocols.</p>
                        <div className="space-y-2 text-sm text-white font-semibold">
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Real-time monitoring</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• AI threat analysis</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Automated response</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Incident reporting</div>
                        </div>
                      </div>
                      
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-green-400 p-6 hover:scale-105 transition-all duration-300">
                        <div className="text-green-300 text-4xl mb-4">🔒</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Data Protection & Encryption</h3>
                        <p className="text-white font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Military-grade encryption and data loss prevention systems to secure your sensitive information.</p>
                        <div className="space-y-2 text-sm text-white font-semibold">
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• AES-256 encryption</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Data masking</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Access controls</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Backup security</div>
                        </div>
                      </div>
                      
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-blue-400 p-6 hover:scale-105 transition-all duration-300">
                        <div className="text-blue-300 text-4xl mb-4">🛡️</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Security Assessment</h3>
                        <p className="text-white font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Comprehensive security audits and penetration testing to identify vulnerabilities.</p>
                        <div className="space-y-2 text-sm text-white font-semibold">
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Vulnerability scanning</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Penetration testing</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Risk assessment</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Compliance audit</div>
                        </div>
                      </div>
                      
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-purple-400 p-6 hover:scale-105 transition-all duration-300">
                        <div className="text-purple-300 text-4xl mb-4">🌐</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Network Security</h3>
                        <p className="text-white font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Advanced firewall management, intrusion detection, and network traffic analysis.</p>
                        <div className="space-y-2 text-sm text-white font-semibold">
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Firewall management</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• IDS/IPS systems</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• VPN solutions</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Traffic analysis</div>
                        </div>
                      </div>
                      
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-yellow-400 p-6 hover:scale-105 transition-all duration-300">
                        <div className="text-yellow-300 text-4xl mb-4">👥</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Identity & Access Management</h3>
                        <p className="text-white font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Secure authentication systems, single sign-on, and privileged access management.</p>
                        <div className="space-y-2 text-sm text-white font-semibold">
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Multi-factor auth</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• SSO integration</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Access controls</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• User monitoring</div>
                        </div>
                      </div>
                      
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-pink-400 p-6 hover:scale-105 transition-all duration-300">
                        <div className="text-pink-300 text-4xl mb-4">☁️</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Cloud Security</h3>
                        <p className="text-white font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Secure cloud migration, configuration management, and continuous compliance monitoring.</p>
                        <div className="space-y-2 text-sm text-white font-semibold">
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Cloud migration</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Config management</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Compliance</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">• Monitoring</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Solutions Section - Network Visualization */}
            <section id="solutions" className="min-h-screen py-20 liquid-section solutions-section flex items-center">
              <div className="relative z-50 w-full">
                <div className="container max-w-6xl mx-auto px-8">
                  <div className="bg-black/95 backdrop-blur-lg rounded-3xl border-2 border-cyan-400 p-12 shadow-2xl">
                    <div className="text-center mb-12">
                      <h2 className="text-5xl font-black mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                        <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                          Security Solutions Platform
                        </span>
                      </h2>
                      <p className="text-xl text-white font-bold max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                        Comprehensive cybersecurity platform with enterprise-grade protection and AI-powered analytics.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-green-400 p-6">
                          <h3 className="text-xl font-black text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">🏢 Enterprise Security Platform</h3>
                          <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Complete security orchestration with automated threat response and compliance management.</p>
                        </div>
                        
                        <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-blue-400 p-6">
                          <h3 className="text-xl font-black text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">☁️ Cloud Security Solutions</h3>
                          <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Secure cloud infrastructure with real-time monitoring and automated scaling protection.</p>
                        </div>
                        
                        <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-purple-400 p-6">
                          <h3 className="text-xl font-black text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">🔒 Endpoint Protection</h3>
                          <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Advanced endpoint security with zero-trust architecture and behavioral analysis.</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-yellow-400 p-6">
                          <h3 className="text-xl font-black text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">🛡️ Security Operations Center</h3>
                          <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">24/7 SOC services with expert analysts and automated incident response capabilities.</p>
                        </div>
                        
                        <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-red-400 p-6">
                          <h3 className="text-xl font-black text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">⚡ Incident Response Platform</h3>
                          <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Rapid incident containment and forensic analysis with automated recovery procedures.</p>
                        </div>
                        
                        <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-cyan-400 p-6">
                          <h3 className="text-xl font-black text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">🤖 AI-Powered Analytics</h3>
                          <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Machine learning threat detection with predictive security intelligence and automation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Section - Server Room */}
            <section id="technology" className="min-h-screen py-20 liquid-section technology-section flex items-center">
              <div className="relative z-50 w-full">
                <div className="container max-w-6xl mx-auto px-8">
                  <div className="bg-black/95 backdrop-blur-lg rounded-3xl border-2 border-indigo-400 p-12 shadow-2xl">
                    <div className="text-center mb-12">
                      <h2 className="text-5xl font-black mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                        <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                          Security Technology Stack
                        </span>
                      </h2>
                      <p className="text-xl text-white font-bold max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                        Cutting-edge technology powering next-generation cybersecurity defense systems.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center bg-black/95 backdrop-blur-lg rounded-xl border-2 border-green-400 p-8 hover:scale-105 transition-all duration-300">
                        <div className="text-5xl mb-4">🧠</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">AI/ML Threat Detection</h3>
                        <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">TensorFlow and PyTorch-powered behavioral analysis with real-time threat intelligence.</p>
                      </div>
                      
                      <div className="text-center bg-black/95 backdrop-blur-lg rounded-xl border-2 border-blue-400 p-8 hover:scale-105 transition-all duration-300">
                        <div className="text-5xl mb-4">🌐</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Network Security</h3>
                        <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Next-generation firewalls with advanced IDS/IPS and network traffic analysis.</p>
                      </div>
                      
                      <div className="text-center bg-black/95 backdrop-blur-lg rounded-xl border-2 border-purple-400 p-8 hover:scale-105 transition-all duration-300">
                        <div className="text-5xl mb-4">🔐</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Advanced Encryption</h3>
                        <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">AES-256, RSA-4096, and quantum-resistant cryptographic algorithms.</p>
                      </div>
                      
                      <div className="text-center bg-black/95 backdrop-blur-lg rounded-xl border-2 border-yellow-400 p-8 hover:scale-105 transition-all duration-300">
                        <div className="text-5xl mb-4">📊</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">SIEM & Monitoring</h3>
                        <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Security information and event management with SOAR automation.</p>
                      </div>
                      
                      <div className="text-center bg-black/95 backdrop-blur-lg rounded-xl border-2 border-red-400 p-8 hover:scale-105 transition-all duration-300">
                        <div className="text-5xl mb-4">☁️</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Cloud Security</h3>
                        <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">AWS Security Hub, Azure Sentinel, and GCP Security Center integration.</p>
                      </div>
                      
                      <div className="text-center bg-black/95 backdrop-blur-lg rounded-xl border-2 border-cyan-400 p-8 hover:scale-105 transition-all duration-300">
                        <div className="text-5xl mb-4">⚙️</div>
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">DevSecOps</h3>
                        <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Integrated security in development lifecycle with automated code analysis.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact/CTA Section - Security Dashboard */}
            <section id="contact" className="min-h-screen py-20 liquid-section contact-section flex items-center">
              <div className="relative z-50 w-full">
                <div className="container max-w-4xl mx-auto px-8">
                  <div className="bg-black/95 backdrop-blur-lg rounded-3xl border-2 border-red-400 p-12 shadow-2xl text-center">
                    <h2 className="text-5xl font-black mb-8 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                      <span className="bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                        Secure Your Business Today
                      </span>
                    </h2>
                    <p className="text-2xl text-white font-bold mb-12 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                      Get a free security assessment and see how we can protect your digital infrastructure from evolving cyber threats.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-green-400 p-8">
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">🔍 Free Security Assessment</h3>
                        <p className="text-white font-bold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Comprehensive vulnerability scan and personalized security recommendations for your organization.</p>
                        <button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 w-full">
                          Start Free Assessment
                        </button>
                      </div>
                      
                      <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-red-400 p-8">
                        <h3 className="text-xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">🚨 Emergency Response</h3>
                        <p className="text-white font-bold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">24/7 incident response hotline for immediate cybersecurity emergencies and breach containment.</p>
                        <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 w-full">
                          Emergency Hotline
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-black/95 backdrop-blur-lg rounded-xl border-2 border-cyan-400 p-8">
                      <h3 className="text-2xl font-black text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Contact Our Security Experts</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white font-bold">
                        <div>
                          <div className="text-lg font-black mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">📞 Phone</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">+1 (555) SECURE-1</div>
                        </div>
                        <div>
                          <div className="text-lg font-black mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">✉️ Email</div>
                          <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">security@flowtech.com</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold mb-2">🆘 Emergency</div>
                          <div>incidents@flowtech.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </GSAPScrollSmootherWrapper>
      </div>
    </PageTransition>
  );
}