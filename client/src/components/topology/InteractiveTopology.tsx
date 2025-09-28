
// Enhanced Interactive Topology Component
// Combines sophisticated SVG topologies with pan/zoom controls and node inspection

import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ZoomOut, ZoomIn, Target, Info, Monitor, Maximize2, Minimize2 } from 'lucide-react';

interface InteractiveTopologyProps {
  svgContent: string;
  title: string;
  description: string;
  className?: string;
  enablePerformanceMode?: boolean;
  animationQuality?: 'high' | 'medium' | 'low';
  minScale?: number;
  maxScale?: number;
  initialFit?: boolean;
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
  animationQuality = 'medium',
  minScale = 0.2,
  maxScale = 6,
  initialFit = true
}) => {
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const containerBounds = useRef({ width: 0, height: 0 });
  
  // Pan/Zoom state
  const [scale, setScale] = useState(initialFit ? 0.8 : 1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  // Process SVG content with minimal overhead
  const processedSVGContent = useMemo(() => {
    if (!svgContent) return '';
    
    // Add CSS animations based on quality setting
    const animationCSS = animationQuality === 'high' ? `
      <style>
        .animated-data-packet { animation: dataPacketFlow 3s ease-in-out infinite; }
        .animated-connection { animation: connectionPulse 2s linear infinite; }
        .animated-router { animation: routerSpin 4s linear infinite; }
        .animated-status { animation: statusBlink 2s ease-in-out infinite; }
        .animated-server { animation: serverHum 3s ease-in-out infinite; }
        .animated-security-shield { animation: shieldPulse 2.5s ease-in-out infinite; }
        .animated-network-glow { animation: networkGlow 3s ease-in-out infinite; }
        .animated-high-traffic { animation: trafficFlow 1.5s linear infinite; }
        .animated-secure-connection { animation: secureFlow 3s ease-in-out infinite; }
        .animated-encrypted-connection { animation: encryptedFlow 2s linear infinite; }
        .animated-icon-pulse { animation: iconPulse 2s ease-in-out infinite; }
        .animated-node { animation: nodeFloat 4s ease-in-out infinite; }
        
        @keyframes dataPacketFlow {
          0%, 100% { opacity: 0.6; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
        @keyframes connectionPulse {
          0% { stroke-dashoffset: 12; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes routerSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes statusBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes serverHum {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes shieldPulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }
        @keyframes networkGlow {
          0%, 100% { filter: drop-shadow(0 0 5px currentColor); }
          50% { filter: drop-shadow(0 0 15px currentColor); }
        }
        @keyframes trafficFlow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes secureFlow {
          0% { stroke-dashoffset: 15; opacity: 0.7; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes encryptedFlow {
          0% { stroke-dashoffset: 10; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes nodeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
      </style>
    ` : '';
    
    // Insert animations into SVG
    return svgContent.replace('<svg', `${animationCSS}<svg`);
  }, [svgContent, animationQuality]);

  // Smooth animation helper
  const animateToTransform = useCallback((targetScale: number, targetX: number, targetY: number, duration: number = 300) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    const startScale = scale;
    const startX = panX;
    const startY = panY;
    const startTime = Date.now();
    setIsAnimating(true);
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentScale = startScale + (targetScale - startScale) * easeOut;
      const currentX = startX + (targetX - startX) * easeOut;
      const currentY = startY + (targetY - startY) * easeOut;
      
      setScale(currentScale);
      setPanX(currentX);
      setPanY(currentY);
      
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        animationFrameRef.current = null;
      }
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [scale, panX, panY]);

  // Calculate pan boundaries based on scale and container size
  const calculatePanBounds = useCallback((currentScale: number) => {
    if (!svgContainerRef.current) return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
    
    const containerRect = svgContainerRef.current.getBoundingClientRect();
    const scaledWidth = containerRect.width * currentScale;
    const scaledHeight = containerRect.height * currentScale;
    
    const maxX = Math.max(0, (scaledWidth - containerRect.width) / 2);
    const maxY = Math.max(0, (scaledHeight - containerRect.height) / 2);
    
    return {
      minX: -maxX,
      maxX: maxX,
      minY: -maxY,
      maxY: maxY
    };
  }, []);

  // Clamp pan position to boundaries
  const clampPan = useCallback((x: number, y: number, currentScale: number) => {
    const bounds = calculatePanBounds(currentScale);
    return {
      x: Math.max(bounds.minX, Math.min(bounds.maxX, x)),
      y: Math.max(bounds.minY, Math.min(bounds.maxY, y))
    };
  }, [calculatePanBounds]);

  // Enhanced zoom controls with smooth transitions
  const handleZoomIn = useCallback(() => {
    const newScale = Math.min(scale * 1.3, maxScale);
    const clampedPan = clampPan(panX, panY, newScale);
    animateToTransform(newScale, clampedPan.x, clampedPan.y);
  }, [scale, panX, panY, maxScale, clampPan, animateToTransform]);

  const handleZoomOut = useCallback(() => {
    const newScale = Math.max(scale / 1.3, minScale);
    const clampedPan = clampPan(panX, panY, newScale);
    animateToTransform(newScale, clampedPan.x, clampedPan.y);
  }, [scale, panX, panY, minScale, clampPan, animateToTransform]);

  const handleZoomReset = useCallback(() => {
    animateToTransform(1, 0, 0);
  }, [animateToTransform]);

  const handleFitToView = useCallback(() => {
    animateToTransform(0.8, 0, 0);
  }, [animateToTransform]);

  // Full-screen functionality
  const handleFullScreen = useCallback(async () => {
    if (!svgContainerRef.current) return;
    
    try {
      if (!document.fullscreenElement) {
        await svgContainerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.warn('Fullscreen not supported:', error);
    }
  }, []);

  // Mouse wheel zoom with cursor-centered behavior
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!svgContainerRef.current || isAnimating) return;
    
    e.preventDefault();
    
    const containerRect = svgContainerRef.current.getBoundingClientRect();
    const cursorX = e.clientX - containerRect.left;
    const cursorY = e.clientY - containerRect.top;
    
    // Calculate zoom factor
    const zoomFactor = Math.exp(-e.deltaY * 0.0015);
    const newScale = Math.max(minScale, Math.min(maxScale, scale * zoomFactor));
    
    if (newScale === scale) return;
    
    // Cursor-centered zoom calculation
    const scaleRatio = newScale / scale;
    const newPanX = cursorX - (cursorX - panX) * scaleRatio;
    const newPanY = cursorY - (cursorY - panY) * scaleRatio;
    
    // Apply bounds clamping
    const clampedPan = clampPan(newPanX, newPanY, newScale);
    
    setScale(newScale);
    setPanX(clampedPan.x);
    setPanY(clampedPan.y);
  }, [scale, panX, panY, minScale, maxScale, clampPan, isAnimating]);

  // Container bounds observation
  useEffect(() => {
    if (!svgContainerRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        containerBounds.current = {
          width: entry.contentRect.width,
          height: entry.contentRect.height
        };
      }
    });
    
    resizeObserver.observe(svgContainerRef.current);
    
    return () => resizeObserver.disconnect();
  }, []);

  // Full-screen state tracking
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, []);

  // Cleanup timeouts and animations on unmount
  useEffect(() => {
    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Enhanced pan controls with boundary checking
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0 && scale > 1) { // Left mouse button only and only when zoomed
      setIsDragging(true);
      setDragStart({ x: e.clientX - panX, y: e.clientY - panY });
      e.preventDefault();
    }
  }, [panX, panY, scale]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      const newPanX = e.clientX - dragStart.x;
      const newPanY = e.clientY - dragStart.y;
      const clampedPan = clampPan(newPanX, newPanY, scale);
      setPanX(clampedPan.x);
      setPanY(clampedPan.y);
    }
  }, [isDragging, dragStart, scale, clampPan]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch gesture support for mobile devices
  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) + 
      Math.pow(touch2.clientY - touch1.clientY, 2)
    );
  };

  const getTouchCenter = (touches: React.TouchList) => {
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
  }, [isTouching, isPinching, touchStart, worldFocal]);

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
      if (e.target === document.body || svgContainerRef.current?.contains(e.target as Node)) {
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
          case 'f':
          case 'F':
            if (e.ctrlKey || e.metaKey) return; // Don't interfere with browser fullscreen
            e.preventDefault();
            handleFullScreen();
            break;
          case 'ArrowLeft':
            if (scale > 1) {
              e.preventDefault();
              const newX = panX + 20;
              const clampedPan = clampPan(newX, panY, scale);
              setPanX(clampedPan.x);
            }
            break;
          case 'ArrowRight':
            if (scale > 1) {
              e.preventDefault();
              const newX = panX - 20;
              const clampedPan = clampPan(newX, panY, scale);
              setPanX(clampedPan.x);
            }
            break;
          case 'ArrowUp':
            if (scale > 1) {
              e.preventDefault();
              const newY = panY + 20;
              const clampedPan = clampPan(panX, newY, scale);
              setPanY(clampedPan.y);
            }
            break;
          case 'ArrowDown':
            if (scale > 1) {
              e.preventDefault();
              const newY = panY - 20;
              const clampedPan = clampPan(panX, newY, scale);
              setPanY(clampedPan.y);
            }
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleZoomIn, handleZoomOut, handleZoomReset, handleFullScreen, scale, panX, panY, clampPan]);

  // Enhanced node inspection
  const handleSVGClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as SVGElement;
    const rect = target.closest('rect, circle, ellipse, path');
    const text = target.closest('text');
    
    if (rect || text) {
      const containerRect = svgContainerRef.current?.getBoundingClientRect();
      if (containerRect) {
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
          x: e.clientX - containerRect.left,
          y: e.clientY - containerRect.top,
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
      ref={svgContainerRef}
      className={`relative w-full ${isFullScreen ? 'h-screen' : 'h-80'} bg-slate-900/30 rounded-xl border border-gray-700/50 overflow-hidden group ${className} ${isFullScreen ? 'fixed inset-0 z-50 rounded-none border-none' : ''}`}
      tabIndex={0}
    >
      {/* Enhanced Control Panel - Mobile optimized */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex gap-1 bg-slate-800/95 backdrop-blur-sm rounded-lg p-1 border border-gray-600/50 shadow-lg">
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
          <button
            onClick={handleFitToView}
            className="p-3 md:p-2 hover:bg-slate-700/70 active:bg-slate-600/80 rounded-md transition-colors touch-manipulation"
            title="Fit to View"
            data-testid="interactive-topology-fit-view"
          >
            <Monitor className="w-5 h-5 md:w-4 md:h-4 text-purple-400" />
          </button>
          <button
            onClick={handleFullScreen}
            className="p-3 md:p-2 hover:bg-slate-700/70 active:bg-slate-600/80 rounded-md transition-colors touch-manipulation"
            title={isFullScreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
            data-testid="interactive-topology-fullscreen"
          >
            {isFullScreen ? (
              <Minimize2 className="w-5 h-5 md:w-4 md:h-4 text-orange-400" />
            ) : (
              <Maximize2 className="w-5 h-5 md:w-4 md:h-4 text-orange-400" />
            )}
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

      {/* Enhanced Info Panel */}
      <div className="absolute top-4 right-4 z-20 opacity-80 hover:opacity-100 transition-opacity">
        <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg p-3 border border-gray-600/50 max-w-sm shadow-lg" data-testid="interactive-topology-info-panel">
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">{title}</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mb-3">{description}</p>
          <div className="space-y-1 text-xs text-gray-500">
            <div>🖱️ <strong>Mouse:</strong> Drag to pan, scroll to zoom</div>
            <div>📱 <strong>Touch:</strong> Drag to pan, pinch to zoom</div>
            <div>⌨️ <strong>Keys:</strong> +/- zoom, arrows pan, 0 reset, F fullscreen</div>
            <div>🎯 <strong>Click:</strong> Inspect network components</div>
            <div className="text-xs text-blue-400 mt-1">Scale: {Math.round(scale * 100)}% | {isFullScreen ? 'Fullscreen' : 'Windowed'}</div>
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

      {/* Interactive SVG Container - Direct Integration */}
      <div 
        className={`absolute inset-0 ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'} ${isAnimating ? 'pointer-events-none' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'none' }}
      >
        <div
          className={`w-full h-full origin-center ${isAnimating ? '' : 'transition-transform duration-200 ease-out'}`}
          style={{
            transform: `translate(${panX}px, ${panY}px) scale(${scale})`,
            willChange: isDragging || isPinching || isAnimating ? 'transform' : 'auto'
          }}
          onClick={handleSVGClick}
        >
          {/* Direct SVG Content Rendering */}
          <div
            className="w-full h-full"
            style={{
              display: 'block',
              visibility: 'visible',
              opacity: 1
            }}
            dangerouslySetInnerHTML={{ __html: processedSVGContent }}
          />
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
        Interactive network topology diagram. Use arrow keys to pan, +/- to zoom, 0 to reset view, F for fullscreen. On mobile: single finger to pan, pinch to zoom, tap components for details. Current zoom: {Math.round(scale * 100)}%. {isFullScreen ? 'Fullscreen mode active.' : 'Windowed mode.'}
      </div>
    </div>
  );
};

export default InteractiveTopology;
