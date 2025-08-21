import { useEffect, useRef } from 'react';

export function RiveAnimation({ src, className }: { src: string; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const riveInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadRive = async () => {
      try {
        // Check if Rive is available
        if (typeof window !== 'undefined' && (window as any).rive) {
          const rive = (window as any).rive;
          
          if (canvasRef.current) {
            riveInstanceRef.current = new rive.Rive({
              src: src,
              canvas: canvasRef.current,
              autoplay: true,
              stateMachines: 'State Machine 1',
              fit: rive.Fit.Cover,
              alignment: rive.Alignment.Center,
            });
          }
        }
      } catch (error) {
        console.warn('Rive animation failed to load:', error);
      }
    };

    loadRive();

    return () => {
      if (riveInstanceRef.current) {
        riveInstanceRef.current.cleanup();
      }
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={`rive-canvas ${className || ''}`}
      data-testid="rive-animation"
    />
  );
}

// Placeholder component for when Rive files aren't available
export function RivePlaceholder({ className }: { className?: string }) {
  return (
    <div className={`rive-placeholder bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center ${className || ''}`}>
      <div className="text-center text-white/60">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mx-auto mb-4 animate-pulse"></div>
        <p className="text-sm">Interactive Animation</p>
      </div>
    </div>
  );
}