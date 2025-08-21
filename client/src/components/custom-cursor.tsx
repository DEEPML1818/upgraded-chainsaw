import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const trailPositions = useRef<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (isMobile) return;

    const updateCursor = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      // Update trail
      trailPositions.current.push({ x: e.clientX, y: e.clientY });
      if (trailPositions.current.length > 20) {
        trailPositions.current.shift();
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .flow-card, .liquid-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Trail animation
    const animateTrail = () => {
      if (trailRef.current && trailPositions.current.length > 0) {
        const trail = trailRef.current;
        const positions = trailPositions.current;
        
        // Create trail elements
        trail.innerHTML = '';
        positions.forEach((pos, index) => {
          const dot = document.createElement('div');
          const opacity = (index + 1) / positions.length;
          const size = 2 + (opacity * 6);
          
          dot.style.cssText = `
            position: fixed;
            left: ${pos.x - size/2}px;
            top: ${pos.y - size/2}px;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(99, 102, 241, ${opacity}) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
          `;
          
          trail.appendChild(dot);
        });
      }
      
      requestAnimationFrame(animateTrail);
    };

    animateTrail();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  // Hide default cursor
  useEffect(() => {
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (!isMobile) {
      document.body.style.cursor = 'none';
    }
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[10000] transition-all duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-150' : 'scale-100'}`}
        style={{
          width: '20px',
          height: '20px',
          transform: 'translate(-50%, -50%)',
          background: isHovering 
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(99, 102, 241, 0.4) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, transparent 70%)',
          borderRadius: '50%',
          mixBlendMode: 'screen',
          filter: 'blur(0.5px)',
        }}
      />
      
      {/* Trail container */}
      <div ref={trailRef} className="fixed inset-0 pointer-events-none z-[9999]" />
      
      {/* Outer ring */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-200' : 'scale-100'}`}
        style={{
          left: `${positionRef.current.x}px`,
          top: `${positionRef.current.y}px`,
          width: '40px',
          height: '40px',
          transform: 'translate(-50%, -50%)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '50%',
          animation: 'pulse 2s infinite',
        }}
      />
    </>
  );
}