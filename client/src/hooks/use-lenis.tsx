import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Lenis: any;
  }
}

export function useLenis() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Lenis) {
      lenisRef.current = new window.Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      return () => {
        lenisRef.current?.destroy();
      };
    }
  }, []);

  const scrollTo = (target: string | HTMLElement, options?: { offset?: number }) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  return { scrollTo };
}
