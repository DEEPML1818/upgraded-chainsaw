import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function GSAPScrollBackgrounds() {
  const containerRef = useRef<HTMLDivElement>(null);
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !smoothWrapperRef.current || !contentRef.current) return;

    // Initialize ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: contentRef.current,
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });

    // Background transitions timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Section 1: Programming/Coding (0-25%)
    tl.to(".bg-programming", {
      opacity: 1,
      duration: 1,
    })
    .to(".bg-programming", {
      opacity: 0,
      duration: 1,
    }, 0.25)

    // Section 2: Framer Motion (25-50%) 
    .to(".bg-framer", {
      opacity: 1,
      duration: 1,
    }, 0.25)
    .to(".bg-framer", {
      opacity: 0,
      duration: 1,
    }, 0.5)

    // Section 3: Network/Tech (50-75%)
    .to(".bg-network", {
      opacity: 1,
      duration: 1,
    }, 0.5)
    .to(".bg-network", {
      opacity: 0,
      duration: 1,
    }, 0.75)

    // Section 4: Server Room (75-100%)
    .to(".bg-server", {
      opacity: 1,
      duration: 1,
    }, 0.75);

    // Parallax effects for different layers
    gsap.set(".parallax-slow", { y: 0 });
    gsap.set(".parallax-fast", { y: 0 });

    gsap.to(".parallax-slow", {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".parallax-fast", {
      y: -400,
      ease: "none", 
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none">
      {/* Programming/Coding Background */}
      <div className="bg-programming absolute inset-0 opacity-100">
        <ProgrammingBackground />
      </div>

      {/* Framer Motion Background */}
      <div className="bg-framer absolute inset-0 opacity-0">
        <FramerMotionBackground />
      </div>

      {/* Network/Tech Background */}
      <div className="bg-network absolute inset-0 opacity-0">
        <NetworkTechBackground />
      </div>

      {/* Server Room Background */}
      <div className="bg-server absolute inset-0 opacity-0">
        <ServerRoomBackground />
      </div>
    </div>
  );
}

// Programming/Coding Background Component
function ProgrammingBackground() {
  const codeSnippets = [
    '// IT Infrastructure Management',
    'class ServerManager {',
    '  constructor() {',
    '    this.servers = [];',
    '    this.monitoring = true;',
    '  }',
    '',
    '  deployApplication(app) {',
    '    console.log(`Deploying ${app}...`);',
    '    return this.executeDeployment(app);',
    '  }',
    '}'
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
      
      {/* Large terminal window */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[900px] h-[500px] bg-black/95 backdrop-blur-lg rounded-xl border border-green-500/40 overflow-hidden shadow-2xl parallax-slow">
        {/* Terminal header */}
        <div className="bg-gradient-to-r from-green-500/30 to-green-400/20 px-4 py-3 border-b border-green-500/30 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <span className="ml-2 text-green-300 text-sm font-mono">it-services-manager.js</span>
        </div>

        {/* Terminal content */}
        <div className="p-6 h-full overflow-hidden">
          <div className="text-green-400 font-mono text-sm leading-relaxed">
            <div className="text-green-300 mb-4">$ node it-services-manager.js --deploy</div>
            {codeSnippets.map((line, index) => (
              <div key={index} className="mb-1 typing-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                {line}
              </div>
            ))}
            <div className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1" />
          </div>
        </div>
      </div>

      {/* Floating code elements */}
      <div className="parallax-fast">
        {['{ }', '[ ]', '( )', '//', '#', '*', '=>', '++'].map((symbol, i) => (
          <div
            key={i}
            className="absolute font-mono text-lg text-indigo-400/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>
    </div>
  );
}

// Framer Motion Background Component
function FramerMotionBackground() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-900 to-blue-950" />
      
      {/* Animated particles with Framer Motion style */}
      <motion.div className="absolute inset-0 parallax-slow">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Motion graphics elements */}
      <div className="absolute inset-0 parallax-fast">
        {['motion.div', 'animate={}', 'transition={}', 'variants={}'].map((text, i) => (
          <div
            key={i}
            className="absolute font-mono text-sm text-purple-400/40 animate-bounce"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

// Network/Tech Background Component
function NetworkTechBackground() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-teal-900 to-green-950" />
      
      {/* Network nodes */}
      <div className="parallax-slow">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-cyan-400/50 rounded-full border border-cyan-300/70 animate-pulse"
            style={{
              left: `${15 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      {/* Connecting lines */}
      <div className="parallax-fast">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse"
            style={{
              left: `${10 + (i % 3) * 25}%`,
              top: `${30 + Math.floor(i / 3) * 20}%`,
              width: '25%',
              transform: `rotate(${i * 45}deg)`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>

      {/* Data packets */}
      <div className="parallax-slow">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping"
            style={{
              left: `${20 + i * 15}%`,
              top: `${40 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Server Room Background Component
function ServerRoomBackground() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800" />
      
      {/* Server rack lights */}
      <div className="parallax-slow">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-12 rounded-full bg-gradient-to-b from-green-400 to-green-600 animate-pulse"
            style={{
              left: `${15 + i * 10}%`,
              top: '25%',
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s',
              boxShadow: '0 0 10px #22c55e'
            }}
          />
        ))}
      </div>

      {/* Blinking status indicators */}
      <div className="parallax-fast">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-ping"
            style={{
              left: `${10 + (i % 8) * 10}%`,
              top: `${50 + Math.floor(i / 8) * 25}%`,
              backgroundColor: i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#3b82f6' : '#f59e0b',
              animationDelay: `${i * 0.3}s`,
              animationDuration: '1.5s'
            }}
          />
        ))}
      </div>

      {/* Data flow lines */}
      <div className="parallax-slow">
        {[20, 40, 60, 80].map((position, index) => (
          <div
            key={index}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"
            style={{ 
              left: `${position}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Smooth wrapper components for GSAP ScrollSmoother
export function SmoothWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div id="smooth-wrapper" className="overflow-hidden">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}