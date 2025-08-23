import { useEffect, useRef } from 'react';

const codeCharacters = [
  '0', '1', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/',
  'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'
];

const securityTerms = [
  'SECURE', 'ENCRYPT', 'FIREWALL', 'MALWARE', 'THREAT', 'PROTECT', 'MONITOR', 'DETECT', 'ANALYZE', 'BLOCK',
  'HASH', 'TOKEN', 'AUTH', 'SSL', 'VPN', 'SCAN', 'PATCH', 'BACKUP', 'AUDIT', 'COMPLIANCE'
];

interface RainingCodeBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'matrix' | 'cyberpunk' | 'terminal';
}

export function RainingCodeBackground({ 
  intensity = 'medium',
  theme = 'matrix' 
}: RainingCodeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Column configuration based on intensity
    const columnCount = {
      low: Math.floor(canvas.width / 20),
      medium: Math.floor(canvas.width / 15),
      high: Math.floor(canvas.width / 10)
    }[intensity];

    const fontSize = 14;
    const columns = Array.from({ length: columnCount }, () => ({
      y: Math.random() * canvas.height,
      speed: Math.random() * 3 + 1,
      chars: [] as Array<{ char: string; opacity: number; age: number; isSpecial: boolean }>,
      lastDrop: 0
    }));

    // Theme colors
    const themes = {
      matrix: {
        primary: '#00ff41',
        secondary: '#008f11',
        highlight: '#ffffff',
        background: 'rgba(0, 0, 0, 0.05)'
      },
      cyberpunk: {
        primary: '#00d4ff',
        secondary: '#0080ff',
        highlight: '#ff6b00',
        background: 'rgba(10, 10, 40, 0.05)'
      },
      terminal: {
        primary: '#00ff88',
        secondary: '#00cc66',
        highlight: '#ffff00',
        background: 'rgba(0, 20, 0, 0.05)'
      }
    };

    const currentTheme = themes[theme];

    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = currentTheme.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      columns.forEach((column, columnIndex) => {
        const x = columnIndex * (canvas.width / columnCount);
        
        // Add new characters occasionally
        if (Math.random() < 0.02 && Date.now() - column.lastDrop > 100) {
          const isSpecial = Math.random() < 0.1; // 10% chance for special terms
          const char = isSpecial 
            ? securityTerms[Math.floor(Math.random() * securityTerms.length)]
            : codeCharacters[Math.floor(Math.random() * codeCharacters.length)];
          
          column.chars.unshift({
            char,
            opacity: 1,
            age: 0,
            isSpecial
          });
          column.lastDrop = Date.now();
        }

        // Update and draw characters
        column.chars.forEach((charObj, charIndex) => {
          const y = column.y + (charIndex * fontSize);
          
          // Age the character
          charObj.age += 1;
          charObj.opacity = Math.max(0, 1 - (charObj.age / 50));

          if (charObj.isSpecial) {
            // Special security terms styling
            ctx.fillStyle = currentTheme.highlight;
            ctx.font = `bold ${fontSize}px 'Fira Code', monospace`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = currentTheme.highlight;
          } else {
            // Regular characters
            const alpha = charIndex === 0 ? 1 : charObj.opacity;
            ctx.fillStyle = charIndex === 0 
              ? currentTheme.primary 
              : `${currentTheme.secondary}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
            ctx.font = `${fontSize}px 'Fira Code', monospace`;
            ctx.shadowBlur = charIndex === 0 ? 5 : 0;
            ctx.shadowColor = currentTheme.primary;
          }

          ctx.fillText(charObj.char, x, y);
          ctx.shadowBlur = 0; // Reset shadow
        });

        // Remove old characters
        column.chars = column.chars.filter(char => char.opacity > 0.01);

        // Move column down
        column.y += column.speed;
        if (column.y > canvas.height && column.chars.length === 0) {
          column.y = -fontSize * 10;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, theme]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20" />
      
      {/* Scanning line effect */}
      <div 
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50 animate-pulse"
        style={{
          top: '30%',
          animation: 'scanline 8s linear infinite',
        }}
      />
      
      {/* Scanning line with inline styles */}
      <style>
        {`
        @keyframes scanline {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        `}
      </style>
    </div>
  );
}