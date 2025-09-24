// Optimized SVG Renderer for High-Performance Topology Diagrams
// Implements viewport-based rendering, animation batching, and memory optimization

import React, { useMemo, useCallback, useRef, useEffect } from 'react';

interface OptimizedSVGRendererProps {
  svgContent: string;
  className?: string;
  enableGPUAcceleration?: boolean;
  enableViewportCulling?: boolean;
  animationQuality?: 'high' | 'medium' | 'low';
}

interface ViewportBounds {
  x: number;
  y: number;
  width: number;
  height: number;
  scale: number;
}

export const OptimizedSVGRenderer: React.FC<OptimizedSVGRendererProps> = ({
  svgContent,
  className = '',
  enableGPUAcceleration = true,
  enableViewportCulling = true,
  animationQuality = 'high'
}) => {
  const svgRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  // SSR-safe, non-destructive SVG content processing
  const optimizedSVGContent = useMemo(() => {
    if (!svgContent) return '';

    // SSR compatibility check - must check BEFORE instantiating DOM APIs
    if (typeof window === 'undefined' || typeof DOMParser === 'undefined' || typeof XMLSerializer === 'undefined') {
      return svgContent; // Pass-through for SSR - no DOM manipulation
    }

    try {
      // Use DOM parser for safe, non-destructive modifications (browser only)
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgContent, 'image/svg+xml');
      const svgElement = doc.documentElement;

      // GPU acceleration optimization - preserve existing styles
      if (enableGPUAcceleration && svgElement.tagName.toLowerCase() === 'svg') {
        const existingStyle = svgElement.getAttribute('style') || '';
        const gpuStyles = 'will-change: transform; transform: translateZ(0);';
        const newStyle = existingStyle ? `${existingStyle}; ${gpuStyles}` : gpuStyles;
        svgElement.setAttribute('style', newStyle);
      }

      // Animation quality optimization - preserve non-animation classes
      if (animationQuality === 'low') {
        const animatedElements = doc.querySelectorAll('[class*="animated-"]');
        animatedElements.forEach((element) => {
          const currentClasses = element.getAttribute('class') || '';
          const newClasses = currentClasses
            .split(' ')
            .filter(cls => !cls.startsWith('animated-'))
            .concat(['static-element'])
            .join(' ');
          element.setAttribute('class', newClasses);
        });
      } else if (animationQuality === 'medium') {
        // Reduce animation complexity in style attributes
        const elementsWithStyle = doc.querySelectorAll('[style*="animation-duration"]');
        elementsWithStyle.forEach((element) => {
          const currentStyle = element.getAttribute('style') || '';
          const newStyle = currentStyle.replace(/animation-duration:\s*[\d.]+s/g, 'animation-duration: 2s');
          element.setAttribute('style', newStyle);
        });
      }

      // Viewport culling optimization - add class without replacing
      if (enableViewportCulling) {
        const groupElements = doc.querySelectorAll('g[class]');
        groupElements.forEach((element) => {
          const currentClasses = element.getAttribute('class') || '';
          if (!currentClasses.includes('viewport-optimized')) {
            element.setAttribute('class', `${currentClasses} viewport-optimized`);
          }
        });
      }

      // Browser-only serialization (already checked for XMLSerializer above)
      return new XMLSerializer().serializeToString(doc);
    } catch (error) {
      // Fallback to original content if DOM manipulation fails
      console.warn('SVG optimization failed, using original content:', error);
      return svgContent;
    }
  }, [svgContent, enableGPUAcceleration, enableViewportCulling, animationQuality]);

  // Intersection Observer for viewport culling
  useEffect(() => {
    if (!enableViewportCulling || !svgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.style.visibility = 'visible';
            element.style.willChange = 'transform';
          } else {
            element.style.visibility = 'hidden';
            element.style.willChange = 'auto';
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    // Observe all topology elements
    const elements = svgRef.current.querySelectorAll('.viewport-optimized');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [enableViewportCulling, optimizedSVGContent]);

  // Animation frame batching for smooth performance
  const batchAnimationUpdates = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (!svgRef.current) return;

      // Batch DOM updates for animated elements
      const animatedElements = svgRef.current.querySelectorAll('[class*="animated-"]');
      animatedElements.forEach((element) => {
        if (element instanceof HTMLElement || element instanceof SVGElement) {
          // Force reflow optimization
          element.style.transform = element.style.transform;
        }
      });
    });
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Performance monitoring (development only)
  useEffect(() => {
    if (import.meta.env.MODE !== 'development') return;

    const startTime = performance.now();
    const rafId = requestAnimationFrame(() => {
      const renderTime = performance.now() - startTime;
      if (renderTime > 16.67) { // More than 60fps threshold
        console.warn(`SVG render time: ${renderTime.toFixed(2)}ms (target: <16.67ms)`);
      }
    });

    return () => cancelAnimationFrame(rafId);
  }, [optimizedSVGContent]);

  return (
    <div
      ref={svgRef}
      className={`optimized-svg-renderer ${className}`}
      style={{
        // Performance optimizations
        contain: 'layout style paint',
        willChange: enableGPUAcceleration ? 'transform' : 'auto',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        transform: 'translateZ(0)', // Force GPU layer
      }}
      data-testid="optimized-svg-renderer"
      onAnimationStart={batchAnimationUpdates}
    >
      <div
        dangerouslySetInnerHTML={{ __html: optimizedSVGContent }}
        style={{
          width: '100%',
          height: '100%',
          // Additional optimizations
          imageRendering: animationQuality === 'low' ? 'pixelated' : 'auto',
          shapeRendering: animationQuality === 'low' ? 'crispEdges' : 'geometricPrecision',
        }}
      />
      
      {/* Performance CSS injection */}
      <style>{`
        .optimized-svg-renderer {
          /* Hardware acceleration */
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          
          /* Smooth animations */
          -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .optimized-svg-renderer svg {
          /* SVG-specific optimizations */
          vector-effect: non-scaling-stroke;
          shape-rendering: ${animationQuality === 'low' ? 'crispEdges' : 'geometricPrecision'};
          text-rendering: optimizeLegibility;
        }

        .optimized-svg-renderer .viewport-optimized {
          /* Viewport culling support */
          contain: strict;
          content-visibility: auto;
          contain-intrinsic-size: 100px 50px;
        }

        .optimized-svg-renderer .static-element {
          /* Disabled animations for performance */
          animation: none !important;
          transition: none !important;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .optimized-svg-renderer * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Performance CSS for high-frequency animations */
        .optimized-svg-renderer .animated-data-packet {
          /* Use transform instead of position changes */
          will-change: transform;
          transform: translateZ(0);
        }

        .optimized-svg-renderer .animated-connection {
          /* Optimize stroke animations */
          will-change: stroke-dashoffset;
          transform: translateZ(0);
        }

        .optimized-svg-renderer .animated-router {
          /* Optimize rotation animations */
          will-change: transform;
          transform-origin: center;
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

export default OptimizedSVGRenderer;