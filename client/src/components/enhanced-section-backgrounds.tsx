import { RainingCodeBackground } from './raining-code-background';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function EnhancedSectionBackgrounds() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0" style={{ zIndex: -1, pointerEvents: 'none' }}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(0,128,255,0.1) 0%, rgba(0,0,0,0) 50%)',
            'radial-gradient(circle at 100% 100%, rgba(0,128,255,0.1) 0%, rgba(0,0,0,0) 50%)',
            'radial-gradient(circle at 0% 100%, rgba(0,128,255,0.1) 0%, rgba(0,0,0,0) 50%)',
            'radial-gradient(circle at 100% 0%, rgba(0,128,255,0.1) 0%, rgba(0,0,0,0) 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Mouse follow effect */}
      <motion.div
        className="absolute opacity-20"
        style={{
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, rgba(0,0,0,0) 70%)',
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Matrix rain effect with reduced opacity */}
      <div className="opacity-5">
        <RainingCodeBackground intensity="low" theme="matrix" />
      </div>

      {/* Ambient particles */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0,128,255,0.05) 0%, rgba(0,0,0,0) 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  );
}

export { EnhancedSectionBackgrounds };
