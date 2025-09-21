// Corporate Topology Canvas - Enterprise-grade SVG Renderer
// Professional topology visualization with pan/zoom and interactive features

import React, { useState, useRef, useCallback } from 'react';
import { TopologyDiagram, TopologyNode, TopologyEdge, TopologyGroup } from '../../types/topology';
import { SVGDefinitions } from './SVGDefinitions';
import { renderTopologyNode } from './TopologyComponents';

interface TopologyCanvasProps {
  diagram: TopologyDiagram;
  className?: string;
  onNodeClick?: (node: TopologyNode) => void;
  onNodeHover?: (node: TopologyNode | null) => void;
  onEdgeClick?: (edge: TopologyEdge) => void;
  showLabels?: boolean;
  showTooltips?: boolean;
  interactive?: boolean;
  scale?: number;
  panX?: number;
  panY?: number;
}

export const TopologyCanvas: React.FC<TopologyCanvasProps> = ({
  diagram,
  className = '',
  onNodeClick,
  onNodeHover,
  onEdgeClick,
  showLabels = true,
  showTooltips = true,
  interactive = true,
  scale = 1,
  panX = 0,
  panY = 0
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<TopologyNode | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    content: string;
    visible: boolean;
  }>({ x: 0, y: 0, content: '', visible: false });

  // Handle node interactions
  const handleNodeHover = useCallback((node: TopologyNode | null, event?: React.MouseEvent) => {
    setHoveredNode(node);
    onNodeHover?.(node);
    
    if (showTooltips && node && event) {
      const rect = svgRef.current?.getBoundingClientRect();
      if (rect) {
        setTooltip({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          content: node.tooltip || `${node.name} (${node.kind})`,
          visible: true
        });
      }
    } else {
      setTooltip(prev => ({ ...prev, visible: false }));
    }
  }, [showTooltips, onNodeHover]);

  const handleNodeClick = useCallback((node: TopologyNode) => {
    onNodeClick?.(node);
  }, [onNodeClick]);

  // Render topology groups (zones)
  const renderGroups = () => {
    return diagram.groups.map((group) => (
      <g key={group.id} data-testid={`topology-group-${group.id}`}>
        {/* Group background */}
        <rect
          x={`${group.position.x}%`}
          y={`${group.position.y}%`}
          width={`${group.size.width}%`}
          height={`${group.size.height}%`}
          className="topology-zone"
          fill={group.colorTheme.background}
          stroke={group.colorTheme.border}
          strokeWidth="1.5"
          rx="20"
          ry="20"
          opacity="0.8"
        />
        
        {/* Group label */}
        {showLabels && (
          <text
            x={`${group.position.x + 2}%`}
            y={`${group.position.y + 3}%`}
            className="topology-zone-label"
            fill={group.colorTheme.text}
            fontSize="12"
            fontWeight="600"
            textAnchor="start"
          >
            {group.name}
          </text>
        )}
      </g>
    ));
  };

  // Render topology edges (connections)
  const renderEdges = () => {
    return diagram.edges.map((edge) => {
      const sourceNode = diagram.nodes.find(n => n.id === edge.sourceId);
      const targetNode = diagram.nodes.find(n => n.id === edge.targetId);
      
      if (!sourceNode || !targetNode) return null;

      // Calculate connection points
      const x1 = sourceNode.position.x + sourceNode.size.width / 2;
      const y1 = sourceNode.position.y + sourceNode.size.height / 2;
      const x2 = targetNode.position.x + targetNode.size.width / 2;
      const y2 = targetNode.position.y + targetNode.size.height / 2;

      // Create curved path for better visual appeal
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;
      const controlOffset = 20;
      const pathData = edge.pathData || `M ${x1}% ${y1}% Q ${midX}% ${midY - controlOffset}% ${x2}% ${y2}%`;

      return (
        <g key={edge.id} data-testid={`topology-edge-${edge.id}`}>
          <path
            d={pathData}
            className={`topology-connection connection-${edge.kind}`}
            stroke={edge.color}
            strokeWidth={edge.strokeWidth}
            strokeDasharray={edge.strokeDashArray || 'none'}
            fill="none"
            markerEnd={`url(#${getMarkerType(edge.kind)})`}
            opacity={hoveredNode ? (
              hoveredNode.id === edge.sourceId || hoveredNode.id === edge.targetId ? 1 : 0.3
            ) : 0.8}
            style={{ 
              cursor: interactive ? 'pointer' : 'default',
              transition: 'opacity var(--timing-fast) ease'
            }}
            onClick={() => interactive && onEdgeClick?.(edge)}
          />
          
          {/* Edge label */}
          {showLabels && edge.label && (
            <text
              x={`${midX}%`}
              y={`${midY}%`}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="10"
              fontWeight="500"
              fill={edge.color}
              className="topology-connection-label"
            >
              {edge.label}
            </text>
          )}
        </g>
      );
    });
  };

  // Render topology nodes
  const renderNodes = () => {
    return diagram.nodes.map((node) => {
      // Convert percentage positions to actual coordinates
      const x = (node.position.x / 100) * (diagram.canvasSize?.width || 800);
      const y = (node.position.y / 100) * (diagram.canvasSize?.height || 600);
      const width = (node.size.width / 100) * (diagram.canvasSize?.width || 800);
      const height = (node.size.height / 100) * (diagram.canvasSize?.height || 600);

      return (
        <g 
          key={node.id}
          opacity={hoveredNode ? (hoveredNode.id === node.id ? 1 : 0.7) : 1}
          style={{ transition: 'opacity var(--timing-fast) ease' }}
          onMouseEnter={(e) => interactive && handleNodeHover(node, e)}
          onMouseLeave={() => interactive && handleNodeHover(null)}
          onClick={() => interactive && handleNodeClick(node)}
        >
          {renderTopologyNode(node, x, y, width, height)}
        </g>
      );
    });
  };

  // Get appropriate marker type for edge kind
  const getMarkerType = (edgeKind: string): string => {
    switch (edgeKind) {
      case 'secure_tunnel':
      case 'encrypted':
        return 'secureFlow';
      case 'mesh_internal':
      case 'sidecar':
        return 'meshFlow';
      case 'data_sync':
      case 'file_transfer':
        return 'dataTransfer';
      default:
        return 'dataFlow';
    }
  };

  return (
    <div className={`topology-canvas-container ${className}`} style={{ position: 'relative' }}>
      <svg
        ref={svgRef}
        className="topology-canvas"
        viewBox={diagram.viewBox || `0 0 ${diagram.canvasSize?.width || 800} ${diagram.canvasSize?.height || 600}`}
        style={{
          width: '100%',
          height: '100%',
          background: diagram.backgroundColor || 'transparent',
          overflow: 'visible'
        }}
        data-testid="topology-canvas"
      >
        {/* SVG Definitions - Must be included once at the root */}
        <SVGDefinitions />
        
        {/* Main viewport with pan/zoom transform */}
        <g 
          id="viewport" 
          transform={`translate(${panX}, ${panY}) scale(${scale})`}
          className="topology-viewport"
        >
          {/* Render in correct layering order */}
          
          {/* 1. Background groups/zones (lowest layer) */}
          <g className="topology-groups-layer">
            {renderGroups()}
          </g>
          
          {/* 2. Connections (middle layer) */}
          <g className="topology-edges-layer">
            {renderEdges()}
          </g>
          
          {/* 3. Nodes (top layer) */}
          <g className="topology-nodes-layer">
            {renderNodes()}
          </g>
        </g>
      </svg>
      
      {/* Tooltip overlay */}
      {showTooltips && tooltip.visible && (
        <div
          className="topology-tooltip"
          style={{
            position: 'absolute',
            left: tooltip.x + 10,
            top: tooltip.y - 30,
            background: 'hsla(215, 27.9%, 16.9%, 0.95)',
            border: '1px solid hsla(239, 84%, 67%, 0.3)',
            borderRadius: '8px',
            padding: '8px 12px',
            fontSize: '12px',
            fontWeight: '500',
            color: 'hsl(0, 0%, 100%)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 16px hsla(0, 0%, 0%, 0.15)',
            pointerEvents: 'none',
            zIndex: 1000,
            whiteSpace: 'nowrap'
          }}
          data-testid="topology-tooltip"
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

// Export types for external use
export type { TopologyCanvasProps };