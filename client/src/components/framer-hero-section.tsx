import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Shield, Lock, Eye, Zap, Activity, Code2, Terminal, Server } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "AI-powered threat detection with real-time security monitoring",
    color: "#00FF88"
  },
  {
    icon: Lock,
    title: "Military-Grade Encryption", 
    description: "AES-256 encryption for all data transactions and communications",
    color: "#6366F1"
  },
  {
    icon: Eye,
    title: "Behavioral Analysis",
    description: "Machine learning algorithms detect anomalies and suspicious patterns",
    color: "#06B6D4"
  },
  {
    icon: Terminal,
    title: "Live Code Analysis",
    description: "Real-time code vulnerability scanning and secure development",
    color: "#10B981"
  },
  {
    icon: Activity,
    title: "Network Monitoring",
    description: "24/7 network surveillance with advanced intrusion detection",
    color: "#F59E0B"
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Complete server hardening and infrastructure protection",
    color: "#EF4444"
  }
];

export function FramerHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });
  const [statsAnimated, setStatsAnimated] = useState(false);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Counter animation function
  const useCounter = (end: number, duration: number = 2000, decimals: number = 0) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsInView || statsAnimated) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(end * easeOutQuart);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setStatsAnimated(true);
        }
      };

      requestAnimationFrame(animate);
    }, [statsInView, end, duration, statsAnimated]);

    return decimals > 0 ? count.toFixed(decimals) : Math.round(count);
  };

  const threatDetection = useCounter(99.9, 2500, 1);
  const activeShields = useCounter(2847, 2000);
  const threatsBlocked = useCounter(1254, 1800);
  const monitoring = useCounter(24, 1500);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      <motion.div 
        className="container max-w-7xl mx-auto px-6 relative z-10"
        ref={heroRef}
        style={{ y, opacity }}
      >
        
        {/* Main Hero Content */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="mb-8 relative"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 leading-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ 
                duration: 1.2,
                type: 'spring',
                stiffness: 50,
                damping: 8
              }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-green-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Secure
              </motion.span>
              <motion.span 
                className="block text-white"
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Digital
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Infrastructure
              </motion.span>
            </motion.h1>
            
            {/* Animated security badge */}
            <motion.div 
              className="absolute -top-8 -right-8 md:right-20"
              variants={floatingVariants}
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 1, duration: 1, type: 'spring' }}
            >
              <motion.div 
                className="bg-green-500/20 backdrop-blur-md border border-green-500/40 rounded-full p-4"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(34, 197, 94, 0.3)',
                  boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-10 h-10 text-green-400" />
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Protecting your digital assets with enterprise-grade cybersecurity solutions. 
            <motion.span
              className="text-cyan-400"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {" Advanced threat detection"}
            </motion.span>, real-time monitoring, and AI-powered defense systems 
            that evolve with the threat landscape.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.button 
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-4 rounded-xl font-semibold text-white"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-indigo-600 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-3">
                <Shield className="w-5 h-5" />
                Start Security Audit
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </span>
            </motion.button>
            
            <motion.button 
              className="group border-2 border-cyan-500/50 hover:border-cyan-400 px-8 py-4 rounded-xl font-semibold text-cyan-400 hover:text-white hover:bg-cyan-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <span className="flex items-center gap-3">
                <Eye className="w-5 h-5" />
                Watch Demo
                <motion.div
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Code2 className="w-4 h-4" />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
          
          {/* Security Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8" 
            ref={statsRef}
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {[
              { value: `${threatDetection}%`, label: 'Threat Detection', color: '#00FF88' },
              { value: activeShields, label: 'Active Shields', color: '#06B6D4' },
              { value: threatsBlocked, label: 'Threats Blocked', color: '#F59E0B' },
              { value: `${monitoring}/7`, label: 'Monitoring', color: '#6366F1' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 group"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  borderColor: stat.color + '50',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: stat.color }}
                  animate={{ 
                    textShadow: [
                      `0 0 10px ${stat.color}40`,
                      `0 0 20px ${stat.color}60`,
                      `0 0 10px ${stat.color}40`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                
                {/* Progress bar */}
                <motion.div 
                  className="w-full bg-gray-700 rounded-full h-1 mt-3 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 + index * 0.2 }}
                >
                  <motion.div 
                    className="h-1 rounded-full"
                    style={{ backgroundColor: stat.color }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ 
                      delay: 2.2 + index * 0.2, 
                      duration: 1.5,
                      ease: 'easeOut'
                    }}
                  />
                </motion.div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(45deg, ${stat.color}10, transparent)`
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Security Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -15, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full relative overflow-hidden"
                  whileHover={{ 
                    borderColor: feature.color + '50',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div 
                      className="p-3 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-300"
                      style={{ backgroundColor: feature.color + '20' }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        backgroundColor: feature.color + '30'
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent 
                        className="w-6 h-6"
                        style={{ color: feature.color }}
                      />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-lg font-semibold text-white mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                      >
                        {feature.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-400 text-sm leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7 + index * 0.1 }}
                      >
                        {feature.description}
                      </motion.p>
                    </div>
                  </div>
                  
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${feature.color}15, transparent 70%)`
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Animated border effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100"
                    style={{ 
                      background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)`
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Trust Indicators */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p className="text-gray-400 text-sm mb-6">Trusted by leading organizations worldwide</p>
          <motion.div 
            className="flex justify-center items-center gap-8 opacity-50"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {['ISO 27001', 'SOC 2', 'GDPR', 'PCI DSS'].map((cert, index) => (
              <motion.div 
                key={cert}
                className="text-xl font-mono text-gray-600 hover:text-gray-400 transition-colors cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  color: '#9CA3AF'
                }}
              >
                {cert}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Background security elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5 + i * 0.3, 0.8 + i * 0.3, 0.5 + i * 0.3]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <Shield className="w-32 h-32 text-indigo-400" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}