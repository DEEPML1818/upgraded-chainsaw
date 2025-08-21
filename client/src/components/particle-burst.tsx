import { useEffect, useRef, useState } from 'react';

interface ParticleBurstProps {
  trigger?: boolean;
  x?: number;
  y?: number;
  color?: string;
  particleCount?: number;
}

export function ParticleBurst({ 
  trigger = false, 
  x = 0, 
  y = 0, 
  color = '#6366f1',
  particleCount = 15 
}: ParticleBurstProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    color: string;
  }>>([]);

  useEffect(() => {
    if (!trigger || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear previous particles
    particles.current = [];

    // Create new particles
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
      const speed = 2 + Math.random() * 4;
      
      particles.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 60 + Math.random() * 30,
        maxLife: 60 + Math.random() * 30,
        size: 2 + Math.random() * 4,
        color
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter(particle => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // Gravity
        particle.vx *= 0.99; // Air resistance
        particle.life--;

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return particle.life > 0;
      });

      if (particles.current.length > 0) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [trigger, x, y, color, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

export function useParticleBurst() {
  const [burst, setBurst] = useState({ trigger: false, x: 0, y: 0 });

  const triggerBurst = (x: number, y: number) => {
    setBurst({ trigger: true, x, y });
    setTimeout(() => setBurst(prev => ({ ...prev, trigger: false })), 100);
  };

  return { burst, triggerBurst };
}