// Corporate Topology Components - Sophisticated SVG Shapes
// Enterprise-grade network topology visualization components

import React from 'react';
import { TopologyNode, NodeKind, ComponentStatus, SecurityLevel } from '../../types/topology';

// Base component props interface
interface BaseTopologyComponentProps {
  node: TopologyNode;
  x: number;
  y: number;
  width: number;
  height: number;
  className?: string;
  onHover?: (node: TopologyNode) => void;
  onClick?: (node: TopologyNode) => void;
}

// Professional Cylinder Database Component
export const CylinderDatabase: React.FC<BaseTopologyComponentProps> = ({ 
  node, x, y, width, height, className = '', onHover, onClick 
}) => {
  const cylinderHeight = height * 0.15; // Top ellipse height
  const bodyHeight = height - cylinderHeight * 2;
  
  return (
    <g 
      className={`topology-node node-database ${className}`}
      transform={`translate(${x}, ${y})`}
      data-testid={`topology-node-${node.id}`}
      onMouseEnter={() => onHover?.(node)}
      onClick={() => onClick?.(node)}
      style={{ cursor: 'pointer' }}
    >
      {/* Database cylinder body */}
      <rect
        x={0}
        y={cylinderHeight}
        width={width}
        height={bodyHeight}
        fill={node.colorTheme.background}
        stroke={node.colorTheme.border}
        strokeWidth="2"
        rx="4"
      />
      
      {/* Top ellipse */}
      <ellipse
        cx={width / 2}
        cy={cylinderHeight}
        rx={width / 2}
        ry={cylinderHeight}
        fill={node.colorTheme.primary}
        stroke={node.colorTheme.border}
        strokeWidth="2"
      />
      
      {/* Bottom ellipse */}
      <ellipse
        cx={width / 2}
        cy={height - cylinderHeight}
        rx={width / 2}
        ry={cylinderHeight}
        fill={node.colorTheme.secondary}
        stroke={node.colorTheme.border}
        strokeWidth="2"
      />
      
      {/* Icon and label */}
      <text
        x={width / 2}
        y={height / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="18"
        className="topology-icon animate-jump"
      >
        {node.icon}
      </text>
      
      <text
        x={width / 2}
        y={height - 8}
        textAnchor="middle"
        fill={node.colorTheme.text}
        fontSize="11"
        fontWeight="600"
      >
        {node.name}
      </text>
      
      {/* Status indicator */}
      <circle
        cx={width - 8}
        cy={8}
        r="4"
        fill={getStatusColor(node.status)}
        stroke="white"
        strokeWidth="1"
      />
    </g>
  );
};

// Sophisticated Hexagon Service Mesh Node
export const HexagonServiceMesh: React.FC<BaseTopologyComponentProps> = ({ 
  node, x, y, width, height, className = '', onHover, onClick 
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2.5;
  
  // Calculate hexagon points
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * Math.PI) / 3;
    const px = centerX + radius * Math.cos(angle);
    const py = centerY + radius * Math.sin(angle);
    return `${px},${py}`;
  }).join(' ');

  return (
    <g 
      className={`topology-node node-service-mesh ${className}`}
      transform={`translate(${x}, ${y})`}
      data-testid={`topology-node-${node.id}`}
      onMouseEnter={() => onHover?.(node)}
      onClick={() => onClick?.(node)}
      style={{ cursor: 'pointer' }}
    >
      {/* Hexagon background */}
      <polygon
        points={points}
        fill={node.colorTheme.background}
        stroke={node.colorTheme.border}
        strokeWidth="2.5"
        filter="url(#shadowFilter)"
      />
      
      {/* Inner hexagon for depth */}
      <polygon
        points={Array.from({ length: 6 }, (_, i) => {
          const angle = (i * Math.PI) / 3;
          const px = centerX + (radius * 0.7) * Math.cos(angle);
          const py = centerY + (radius * 0.7) * Math.sin(angle);
          return `${px},${py}`;
        }).join(' ')}
        fill={node.colorTheme.primary}
        opacity="0.3"
      />
      
      {/* Mesh pattern overlay */}
      <g opacity="0.4">
        {Array.from({ length: 3 }, (_, i) => (
          <line
            key={i}
            x1={centerX}
            y1={centerY}
            x2={centerX + radius * Math.cos((i * 2 * Math.PI) / 3)}
            y2={centerY + radius * Math.sin((i * 2 * Math.PI) / 3)}
            stroke={node.colorTheme.accent}
            strokeWidth="1.5"
            opacity="0.6"
          />
        ))}
      </g>
      
      {/* Icon and label */}
      <text
        x={centerX}
        y={centerY - 5}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="20"
        className="topology-icon animate-jump"
      >
        {node.icon}
      </text>
      
      <text
        x={centerX}
        y={height - 12}
        textAnchor="middle"
        fill={node.colorTheme.text}
        fontSize="10"
        fontWeight="600"
      >
        {node.name}
      </text>
      
      {/* Status indicator */}
      <circle
        cx={width - 10}
        cy={10}
        r="5"
        fill={getStatusColor(node.status)}
        stroke="white"
        strokeWidth="2"
      />
    </g>
  );
};

// Professional Security Shield Component
export const SecurityShield: React.FC<BaseTopologyComponentProps> = ({ 
  node, x, y, width, height, className = '', onHover, onClick 
}) => {
  const centerX = width / 2;
  const shieldPath = `
    M ${centerX} 5
    C ${width - 5} 5 ${width - 5} ${height / 3} ${width - 5} ${height / 3}
    C ${width - 5} ${height * 0.7} ${centerX} ${height - 5} ${centerX} ${height - 5}
    C ${centerX} ${height - 5} 5 ${height * 0.7} 5 ${height / 3}
    C 5 ${height / 3} 5 5 ${centerX} 5 Z
  `;

  return (
    <g 
      className={`topology-node node-security ${className}`}
      transform={`translate(${x}, ${y})`}
      data-testid={`topology-node-${node.id}`}
      onMouseEnter={() => onHover?.(node)}
      onClick={() => onClick?.(node)}
      style={{ cursor: 'pointer' }}
    >
      {/* Shield background */}
      <path
        d={shieldPath}
        fill={node.colorTheme.background}
        stroke={node.colorTheme.border}
        strokeWidth="2.5"
        filter="url(#shadowFilter)"
      />
      
      {/* Inner shield gradient */}
      <path
        d={shieldPath}
        fill="url(#securityGradient)"
        opacity="0.6"
      />
      
      {/* Security pattern lines */}
      <g opacity="0.4">
        {Array.from({ length: 4 }, (_, i) => (
          <line
            key={i}
            x1={centerX}
            y1={15 + i * 10}
            x2={centerX}
            y2={15 + i * 10 + 6}
            stroke={node.colorTheme.primary}
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </g>
      
      {/* Icon and label */}
      <text
        x={centerX}
        y={height / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="18"
        className="topology-icon animate-jump"
      >
        {node.icon}
      </text>
      
      <text
        x={centerX}
        y={height - 8}
        textAnchor="middle"
        fill={node.colorTheme.text}
        fontSize="10"
        fontWeight="600"
      >
        {node.name}
      </text>
      
      {/* Security level indicator */}
      <rect
        x={width - 15}
        y={5}
        width="12"
        height="12"
        fill={getSecurityLevelColor(node.securityLevel)}
        stroke="white"
        strokeWidth="1"
        rx="2"
      />
    </g>
  );
};

// Isometric Load Balancer Component
export const IsometricLoadBalancer: React.FC<BaseTopologyComponentProps> = ({ 
  node, x, y, width, height, className = '', onHover, onClick 
}) => {
  const depth = width * 0.2;
  
  return (
    <g 
      className={`topology-node node-load-balancer ${className}`}
      transform={`translate(${x}, ${y})`}
      data-testid={`topology-node-${node.id}`}
      onMouseEnter={() => onHover?.(node)}
      onClick={() => onClick?.(node)}
      style={{ cursor: 'pointer' }}
    >
      {/* Isometric box - back face */}
      <polygon
        points={`${depth},0 ${width},0 ${width},${height-depth} ${depth},${height-depth}`}
        fill={node.colorTheme.secondary}
        stroke={node.colorTheme.border}
        strokeWidth="1.5"
        opacity="0.8"
      />
      
      {/* Isometric box - right face */}
      <polygon
        points={`${width},0 ${width+depth},${depth} ${width+depth},${height} ${width},${height-depth}`}
        fill={node.colorTheme.primary}
        stroke={node.colorTheme.border}
        strokeWidth="1.5"
        opacity="0.9"
      />
      
      {/* Isometric box - front face */}
      <polygon
        points={`0,${depth} ${width},${depth} ${width},${height} 0,${height}`}
        fill={node.colorTheme.background}
        stroke={node.colorTheme.border}
        strokeWidth="2"
      />
      
      {/* Load balancer indicators */}
      <g opacity="0.7">
        {Array.from({ length: 3 }, (_, i) => (
          <rect
            key={i}
            x={width * 0.15}
            y={depth + height * 0.2 + i * height * 0.2}
            width={width * 0.7}
            height="3"
            fill={node.colorTheme.accent}
            rx="1.5"
          />
        ))}
      </g>
      
      {/* Icon and label */}
      <text
        x={width / 2}
        y={depth + height / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="16"
        className="topology-icon animate-jump"
      >
        {node.icon}
      </text>
      
      <text
        x={width / 2}
        y={height + 15}
        textAnchor="middle"
        fill={node.colorTheme.text}
        fontSize="10"
        fontWeight="600"
      >
        {node.name}
      </text>
      
      {/* Status indicator */}
      <circle
        cx={width + depth - 8}
        cy={depth + 8}
        r="4"
        fill={getStatusColor(node.status)}
        stroke="white"
        strokeWidth="1"
      />
    </g>
  );
};

// Professional Pill Badge for Tenants
export const TenantPillBadge: React.FC<BaseTopologyComponentProps> = ({ 
  node, x, y, width, height, className = '', onHover, onClick 
}) => {
  const borderRadius = height / 2;
  
  return (
    <g 
      className={`topology-node node-tenant ${className}`}
      transform={`translate(${x}, ${y})`}
      data-testid={`topology-node-${node.id}`}
      onMouseEnter={() => onHover?.(node)}
      onClick={() => onClick?.(node)}
      style={{ cursor: 'pointer' }}
    >
      {/* Pill background */}
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        rx={borderRadius}
        ry={borderRadius}
        fill={node.colorTheme.background}
        stroke={node.colorTheme.border}
        strokeWidth="2"
        filter="url(#shadowFilter)"
      />
      
      {/* Gradient overlay */}
      <rect
        x={1}
        y={1}
        width={width - 2}
        height={height - 2}
        rx={borderRadius - 1}
        ry={borderRadius - 1}
        fill="url(#tenantGradient)"
        opacity="0.4"
      />
      
      {/* Icon */}
      <text
        x={height / 2}
        y={height / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="14"
        className="topology-icon animate-jump"
      >
        {node.icon}
      </text>
      
      {/* Label */}
      <text
        x={height + 8}
        y={height / 2}
        dominantBaseline="central"
        fill={node.colorTheme.text}
        fontSize="11"
        fontWeight="600"
      >
        {node.name}
      </text>
      
      {/* Connection point */}
      <circle
        cx={width - 6}
        cy={height / 2}
        r="3"
        fill={node.colorTheme.accent}
        stroke="white"
        strokeWidth="1"
      />
      
      {/* Status indicator */}
      <circle
        cx={width - 6}
        cy={6}
        r="3"
        fill={getStatusColor(node.status)}
        stroke="white"
        strokeWidth="1"
      />
    </g>
  );
};

// Cloud Infrastructure Component
export const CloudInfrastructure: React.FC<BaseTopologyComponentProps> = ({ 
  node, x, y, width, height, className = '', onHover, onClick 
}) => {
  return (
    <g 
      className={`topology-node node-cloud ${className}`}
      transform={`translate(${x}, ${y})`}
      data-testid={`topology-node-${node.id}`}
      onMouseEnter={() => onHover?.(node)}
      onClick={() => onClick?.(node)}
      style={{ cursor: 'pointer' }}
    >
      {/* Cloud shape */}
      <path
        d={`
          M ${width * 0.2} ${height * 0.6}
          C ${width * 0.1} ${height * 0.4} ${width * 0.15} ${height * 0.2} ${width * 0.35} ${height * 0.3}
          C ${width * 0.4} ${height * 0.1} ${width * 0.6} ${height * 0.1} ${width * 0.65} ${height * 0.3}
          C ${width * 0.8} ${height * 0.15} ${width * 0.95} ${height * 0.35} ${width * 0.85} ${height * 0.55}
          C ${width * 0.9} ${height * 0.7} ${width * 0.7} ${height * 0.8} ${width * 0.2} ${height * 0.6} Z
        `}
        fill={node.colorTheme.background}
        stroke={node.colorTheme.border}
        strokeWidth="2.5"
        filter="url(#shadowFilter)"
      />
      
      {/* Cloud gradient overlay */}
      <path
        d={`
          M ${width * 0.2} ${height * 0.6}
          C ${width * 0.1} ${height * 0.4} ${width * 0.15} ${height * 0.2} ${width * 0.35} ${height * 0.3}
          C ${width * 0.4} ${height * 0.1} ${width * 0.6} ${height * 0.1} ${width * 0.65} ${height * 0.3}
          C ${width * 0.8} ${height * 0.15} ${width * 0.95} ${height * 0.35} ${width * 0.85} ${height * 0.55}
          C ${width * 0.9} ${height * 0.7} ${width * 0.7} ${height * 0.8} ${width * 0.2} ${height * 0.6} Z
        `}
        fill="url(#cloudGradient)"
        opacity="0.5"
      />
      
      {/* Icon and label */}
      <text
        x={width / 2}
        y={height / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="20"
        className="topology-icon animate-jump"
      >
        {node.icon}
      </text>
      
      <text
        x={width / 2}
        y={height - 8}
        textAnchor="middle"
        fill={node.colorTheme.text}
        fontSize="12"
        fontWeight="600"
      >
        {node.name}
      </text>
    </g>
  );
};

// Utility functions for component styling
const getStatusColor = (status: ComponentStatus): string => {
  switch (status) {
    case ComponentStatus.ACTIVE:
      return '#10B981'; // Green
    case ComponentStatus.WARNING:
      return '#F59E0B'; // Orange
    case ComponentStatus.CRITICAL:
      return '#EF4444'; // Red
    case ComponentStatus.MAINTENANCE:
      return '#6B7280'; // Gray
    case ComponentStatus.OFFLINE:
      return '#374151'; // Dark Gray
    case ComponentStatus.DEGRADED:
      return '#FBBF24'; // Yellow
    default:
      return '#6B7280';
  }
};

const getSecurityLevelColor = (level: SecurityLevel): string => {
  switch (level) {
    case SecurityLevel.PUBLIC:
      return '#10B981'; // Green
    case SecurityLevel.INTERNAL:
      return '#3B82F6'; // Blue  
    case SecurityLevel.RESTRICTED:
      return '#F59E0B'; // Orange
    case SecurityLevel.CONFIDENTIAL:
      return '#EF4444'; // Red
    case SecurityLevel.TOP_SECRET:
      return '#7C2D12'; // Dark Red
    default:
      return '#6B7280';
  }
};

// Component factory for rendering different node types
export const renderTopologyNode = (node: TopologyNode, x: number, y: number, width: number, height: number) => {
  const props = { node, x, y, width, height };
  
  switch (node.kind) {
    case NodeKind.DATABASE:
      return <CylinderDatabase key={node.id} {...props} />;
    case NodeKind.SERVICE_MESH:
    case NodeKind.ORCHESTRATOR:
      return <HexagonServiceMesh key={node.id} {...props} />;
    case NodeKind.FIREWALL:
    case NodeKind.SECURITY_GATEWAY:
    case NodeKind.WAF:
    case NodeKind.BASTION:
      return <SecurityShield key={node.id} {...props} />;
    case NodeKind.LOAD_BALANCER:
      return <IsometricLoadBalancer key={node.id} {...props} />;
    case NodeKind.TENANT:
      return <TenantPillBadge key={node.id} {...props} />;
    case NodeKind.CLOUD:
    case NodeKind.INTERNET:
      return <CloudInfrastructure key={node.id} {...props} />;
    default:
      return <CloudInfrastructure key={node.id} {...props} />;
  }
};