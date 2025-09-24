// Enhanced Interactive Topology Component
// Combines sophisticated SVG topologies with pan/zoom controls and node inspection

import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ZoomOut, ZoomIn, Target, Info } from 'lucide-react';
import OptimizedSVGRenderer from './OptimizedSVGRenderer';

interface InteractiveTopologyProps {
  svgContent: string;
  title: string;
  description: string;
  className?: string;
  enablePerformanceMode?: boolean;
  animationQuality?: 'high' | 'medium' | 'low';
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  content: string;
  nodeType?: string;
}

export const InteractiveTopology: React.FC<InteractiveTopologyProps> = ({
  svgContent,
  title,
  description,
  className = '',
  enablePerformanceMode = true,
  animationQuality
}) => {
  const svgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Safe performance optimization without SSR issues
  const effectiveAnimationQuality = animationQuality || 'high';
  const effectivePerformanceMode = enablePerformanceMode;
  
  // Pan/Zoom state
  const [scale, setScale] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Mobile touch gesture state
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0, distance: 0, scale: 1 });
  const [isTouching, setIsTouching] = useState(false);
  const [isPinching, setIsPinching] = useState(false);
  const [worldFocal, setWorldFocal] = useState({ x: 0, y: 0 });

  // Interaction state
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    content: '',
    nodeType: ''
  });

  // Enhanced zoom controls
  const handleZoomIn = useCallback(() => {
    setScale(prev => Math.min(prev * 1.2, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale(prev => Math.max(prev / 1.2, 0.3));
  }, []);

  const handleZoomReset = useCallback(() => {
    setScale(1);
    setPanX(0);
    setPanY(0);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  // Pan controls
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0) { // Left mouse button only
      setIsDragging(true);
      setDragStart({ x: e.clientX - panX, y: e.clientY - panY });
      e.preventDefault();
    }
  }, [panX, panY]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      setPanX(e.clientX - dragStart.x);
      setPanY(e.clientY - dragStart.y);
    }
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch gesture support for mobile devices
  const getTouchDistance = (touches: TouchList) => {
    if (touches.length < 2) return 0;
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) + 
      Math.pow(touch2.clientY - touch1.clientY, 2)
    );
  };

  const getTouchCenter = (touches: TouchList) => {
    if (touches.length === 1) {
      return { x: touches[0].clientX, y: touches[0].clientY };
    } else if (touches.length === 2) {
      return {
        x: (touches[0].clientX + touches[1].clientX) / 2,
        y: (touches[0].clientY + touches[1].clientY) / 2
      };
    }
    return { x: 0, y: 0 };
  };

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    const touches = e.touches;
    
    if (touches.length === 1) {
      // Single touch - start panning
      setIsTouching(true);
      setIsPinching(false);
      const touch = touches[0];
      setTouchStart({ 
        x: touch.clientX - panX, 
        y: touch.clientY - panY, 
        distance: 0,
        scale 
      });
    } else if (touches.length === 2) {
      // Two finger touch - start pinching
      setIsTouching(false);
      setIsPinching(true);
      const distance = getTouchDistance(touches);
      const center = getTouchCenter(touches);
      // Store world-space focal coordinates separately for stable anchoring
      const worldX = (center.x - panX) / scale;
      const worldY = (center.y - panY) / scale;
      setWorldFocal({ x: worldX, y: worldY });
      setTouchStart({ 
        x: center.x, 
        y: center.y, 
        distance,
        scale // Store the scale at pinch start for stable baseline
      });
    }
  }, [panX, panY, scale]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    const touches = e.touches;

    if (touches.length === 1 && isTouching) {
      // Single touch pan
      const touch = touches[0];
      setPanX(touch.clientX - touchStart.x);
      setPanY(touch.clientY - touchStart.y);
    } else if (touches.length === 2 && isPinching) {
      // Two finger pinch-to-zoom with proper baseline scaling
      const currentDistance = getTouchDistance(touches);
      const center = getTouchCenter(touches);
      
      if (touchStart.distance > 0) {
        // Use initial scale as baseline to prevent exponential compounding
        const scaleRatio = currentDistance / touchStart.distance;
        const newScale = Math.min(Math.max(touchStart.scale * scaleRatio, 0.3), 3);
        
        // Update scale and use separate world-space focal coordinates for stable anchoring
        setScale(newScale);
        setPanX(center.x - worldFocal.x * newScale);
        setPanY(center.y - worldFocal.y * newScale);
      }
    }
  }, [isTouching, isPinching, touchStart, worldFocal, scale]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 0) {
      setIsTouching(false);
      setIsPinching(false);
    } else if (e.touches.length === 1 && isPinching) {
      // Transition from pinch to pan
      setIsPinching(false);
      setIsTouching(true);
      const touch = e.touches[0];
      setTouchStart({ 
        x: touch.clientX - panX, 
        y: touch.clientY - panY, 
        distance: 0,
        scale 
      });
    }
  }, [isPinching, panX, panY, scale]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target === document.body || containerRef.current?.contains(e.target as Node)) {
        switch (e.key) {
          case '+':
          case '=':
            e.preventDefault();
            handleZoomIn();
            break;
          case '-':
            e.preventDefault();
            handleZoomOut();
            break;
          case '0':
            e.preventDefault();
            handleZoomReset();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            setPanX(prev => prev + 20);
            break;
          case 'ArrowRight':
            e.preventDefault();
            setPanX(prev => prev - 20);
            break;
          case 'ArrowUp':
            e.preventDefault();
            setPanY(prev => prev + 20);
            break;
          case 'ArrowDown':
            e.preventDefault();
            setPanY(prev => prev - 20);
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleZoomIn, handleZoomOut, handleZoomReset]);

  // Enhanced node inspection
  const handleSVGClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as SVGElement;
    const rect = target.closest('rect, circle, ellipse, path');
    const text = target.closest('text');
    
    if (rect || text) {
      const svgRect = svgRef.current?.getBoundingClientRect();
      if (svgRect) {
        let nodeInfo = '';
        let nodeType = '';

        // Extract information from the clicked element
        if (text) {
          const textContent = text.textContent || '';
          if (textContent.includes('LOAD BALANCER')) {
            nodeInfo = 'Global Load Balancer - Distributes traffic across regions with health checks and automatic failover';
            nodeType = 'Load Balancer';
          } else if (textContent.includes('CDN')) {
            nodeInfo = 'Content Delivery Network - Edge caching for low-latency content delivery';
            nodeType = 'CDN Edge';
          } else if (textContent.includes('BLOCKCHAIN')) {
            nodeInfo = 'Blockchain Network - Decentralized P2P overlay with cross-chain bridges';
            nodeType = 'Blockchain';
          } else if (textContent.includes('GPU')) {
            nodeInfo = 'GPU Training Cluster - High-performance computing for ML model training';
            nodeType = 'ML Infrastructure';
          } else if (textContent.includes('API GATEWAY')) {
            nodeInfo = 'API Gateway - Centralized request routing and microservices orchestration';
            nodeType = 'API Gateway';
          } else if (textContent.includes('HSM')) {
            nodeInfo = 'Hardware Security Module - Cryptographic key management and secure operations';
            nodeType = 'Security';
          } else {
            nodeInfo = `Network Component: ${textContent}`;
            nodeType = 'Network Component';
          }
        } else if (rect) {
          const parentText = rect.parentElement?.querySelector('text')?.textContent;
          if (parentText) {
            nodeInfo = `Network Infrastructure: ${parentText}`;
            nodeType = 'Infrastructure';
          } else {
            nodeInfo = 'Network Infrastructure Component';
            nodeType = 'Infrastructure';
          }
        }

        setTooltip({
          visible: true,
          x: e.clientX - svgRect.left,
          y: e.clientY - svgRect.top,
          content: nodeInfo,
          nodeType
        });

        // Auto-hide tooltip after 5 seconds with cleanup
        if (tooltipTimeoutRef.current) {
          clearTimeout(tooltipTimeoutRef.current);
        }
        tooltipTimeoutRef.current = setTimeout(() => {
          setTooltip(prev => ({ ...prev, visible: false }));
        }, 5000);
      }
    } else {
      setTooltip(prev => ({ ...prev, visible: false }));
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-80 bg-slate-900/30 rounded-xl border border-gray-700/50 overflow-hidden group ${className}`}
      tabIndex={0}
    >
      {/* Control Panel - Mobile optimized */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex gap-1 bg-slate-800/90 backdrop-blur-sm rounded-lg p-1 border border-gray-600/50">
          <button
            onClick={handleZoomIn}
            className="p-3 md:p-2 hover:bg-slate-700/70 active:bg-slate-600/80 rounded-md transition-colors touch-manipulation"
            title="Zoom In (+)"
            data-testid="interactive-topology-zoom-in"
          >
            <ZoomIn className="w-5 h-5 md:w-4 md:h-4 text-green-400" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-3 md:p-2 hover:bg-slate-700/70 active:bg-slate-600/80 rounded-md transition-colors touch-manipulation"
            title="Zoom Out (-)"
            data-testid="interactive-topology-zoom-out"
          >
            <ZoomOut className="w-5 h-5 md:w-4 md:h-4 text-red-400" />
          </button>
          <button
            onClick={handleZoomReset}
            className="p-3 md:p-2 hover:bg-slate-700/70 active:bg-slate-600/80 rounded-md transition-colors touch-manipulation"
            title="Reset View (0)"
            data-testid="interactive-topology-zoom-reset"
          >
            <Target className="w-5 h-5 md:w-4 md:h-4 text-blue-400" />
          </button>
        </div>
        
        <div className="flex gap-1 bg-slate-800/90 backdrop-blur-sm rounded-lg p-1 border border-gray-600/50 md:flex hidden">
          <button
            onClick={() => setPanX(prev => prev + 20)}
            className="p-3 md:p-2 hover:bg-slate-700/70 active:bg-slate-600/80 rounded-md transition-colors touch-manipulation"
            title="Pan Left (←)"
            data-testid="interactive-topology-pan-left"
          >
            <ChevronLeft className="w-5 h-5 md:w-4 md:h-4 text-gray-300" />
          </button>
          <button
            onClick={() => setPanX(prev => prev - 20)}
            className="p-3 md:p-2 hover:bg-slate-700/70 active:bg-slate-600/80 rounded-md transition-colors touch-manipulation"
            title="Pan Right (→)"
            data-testid="interactive-topology-pan-right"
          >
            <ChevronRight className="w-5 h-5 md:w-4 md:h-4 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Info Panel */}
      <div className="absolute top-4 right-4 z-20 opacity-70 hover:opacity-100 transition-opacity">
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-gray-600/50 max-w-xs" data-testid="interactive-topology-info-panel">
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">{title}</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
          <div className="mt-2 text-xs text-gray-500">
            Touch/click components for details • Pan with finger/mouse • Pinch to zoom
          </div>
        </div>
      </div>

      {/* Scale Indicator */}
      <div className="absolute bottom-4 left-4 z-20 opacity-60 hover:opacity-100 transition-opacity">
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-md px-3 py-1 border border-gray-600/50" data-testid="interactive-topology-scale-indicator">
          <span className="text-xs font-mono text-gray-300">
            {Math.round(scale * 100)}%
          </span>
        </div>
      </div>

      {/* Interactive SVG Container */}
      <div 
        className="w-full h-full cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'none' // Prevent default touch behaviors
        }}
      >
        <div
          className="w-full h-full transition-transform duration-150 ease-out"
          style={{
            transform: `translate(${panX}px, ${panY}px) scale(${scale})`,
            transformOrigin: 'center center',
            willChange: isDragging ? 'transform' : 'auto'
          }}
          onClick={handleSVGClick}
        >
          <div ref={svgRef} className="w-full h-full">
            <OptimizedSVGRenderer
              svgContent={svgContent}
              enableGPUAcceleration={effectivePerformanceMode}
              enableViewportCulling={effectivePerformanceMode}
              animationQuality={effectiveAnimationQuality}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Enhanced Tooltip */}
      {tooltip.visible && (
        <div
          className="absolute z-30 pointer-events-none"
          style={{
            left: tooltip.x + 15,
            top: tooltip.y - 10,
            transform: 'translateY(-100%)'
          }}
        >
          <div className="bg-slate-900/95 backdrop-blur-md border border-blue-500/30 rounded-lg p-3 shadow-xl max-w-sm" data-testid="interactive-topology-tooltip">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-semibold text-blue-300">{tooltip.nodeType}</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">{tooltip.content}</p>
            <div className="absolute bottom-0 left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/95 transform translate-y-full"></div>
          </div>
        </div>
      )}

      {/* Accessibility Instructions */}
      <div className="sr-only">
        Interactive network topology diagram. Use arrow keys to pan, +/- to zoom, 0 to reset view. On mobile: single finger to pan, pinch to zoom, tap components for details.
      </div>
    </div>
  );
};

export default InteractiveTopology;