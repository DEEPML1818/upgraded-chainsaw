// SVG Definitions for Corporate Topology Components
// Professional gradients, filters, and markers for enterprise visualization

import React from 'react';

export const SVGDefinitions: React.FC = () => {
  return (
    <defs>
      {/* Professional Gradient Definitions */}
      
      {/* Cloud Infrastructure Gradients */}
      <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(210, 100%, 75%)" stopOpacity="0.8"/>
        <stop offset="50%" stopColor="hsl(210, 80%, 65%)" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="hsl(220, 70%, 55%)" stopOpacity="0.4"/>
      </linearGradient>
      
      {/* Security Shield Gradients */}
      <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(0, 75%, 70%)" stopOpacity="0.8"/>
        <stop offset="50%" stopColor="hsl(0, 65%, 60%)" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="hsl(0, 55%, 50%)" stopOpacity="0.4"/>
      </linearGradient>
      
      {/* Service Mesh Gradients */}
      <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(280, 65%, 70%)" stopOpacity="0.8"/>
        <stop offset="50%" stopColor="hsl(280, 55%, 60%)" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="hsl(260, 50%, 55%)" stopOpacity="0.4"/>
      </linearGradient>
      
      {/* Database Gradients */}
      <linearGradient id="databaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(190, 85%, 55%)" stopOpacity="0.8"/>
        <stop offset="50%" stopColor="hsl(190, 75%, 45%)" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="hsl(190, 65%, 35%)" stopOpacity="0.4"/>
      </linearGradient>
      
      {/* Tenant Badge Gradients */}
      <linearGradient id="tenantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(150, 60%, 60%)" stopOpacity="0.8"/>
        <stop offset="50%" stopColor="hsl(150, 50%, 50%)" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="hsl(150, 40%, 40%)" stopOpacity="0.4"/>
      </linearGradient>
      
      {/* Load Balancer Gradients */}
      <linearGradient id="loadBalancerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(30, 95%, 65%)" stopOpacity="0.8"/>
        <stop offset="50%" stopColor="hsl(30, 85%, 55%)" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="hsl(30, 75%, 45%)" stopOpacity="0.4"/>
      </linearGradient>

      {/* Radial Gradients for Special Effects */}
      <radialGradient id="glowEffect" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(210, 100%, 80%)" stopOpacity="0.6"/>
        <stop offset="70%" stopColor="hsl(210, 80%, 60%)" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="hsl(210, 60%, 40%)" stopOpacity="0"/>
      </radialGradient>
      
      <radialGradient id="activeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(280, 65%, 70%)" stopOpacity="0.8"/>
        <stop offset="70%" stopColor="hsl(280, 55%, 60%)" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="hsl(280, 45%, 50%)" stopOpacity="0"/>
      </radialGradient>

      {/* Professional Shadow and Filter Effects */}
      
      {/* Soft Drop Shadow */}
      <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow 
          dx="2" 
          dy="4" 
          stdDeviation="3" 
          floodColor="black" 
          floodOpacity="0.12"
        />
      </filter>
      
      {/* Strong Shadow for Active Elements */}
      <filter id="activeShadowFilter" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow 
          dx="3" 
          dy="6" 
          stdDeviation="5" 
          floodColor="hsl(280, 65%, 60%)" 
          floodOpacity="0.25"
        />
      </filter>
      
      {/* Glow Effect for Hover States */}
      <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      {/* Professional Glass Morphism Effect */}
      <filter id="glassMorphism" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
        <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0"/>
      </filter>

      {/* Connection Arrow Markers */}
      
      {/* Standard Data Flow Arrow */}
      <marker 
        id="dataFlow" 
        viewBox="0 0 10 10" 
        refX="9" 
        refY="3" 
        markerWidth="6" 
        markerHeight="6" 
        orient="auto" 
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,6 L9,3 z" fill="hsl(220, 70%, 50%)" opacity="0.8"/>
      </marker>
      
      {/* Secure Connection Arrow */}
      <marker 
        id="secureFlow" 
        viewBox="0 0 10 10" 
        refX="9" 
        refY="3" 
        markerWidth="6" 
        markerHeight="6" 
        orient="auto" 
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,6 L9,3 z" fill="hsl(0, 75%, 60%)" opacity="0.9"/>
      </marker>
      
      {/* Service Mesh Connection Arrow */}
      <marker 
        id="meshFlow" 
        viewBox="0 0 10 10" 
        refX="9" 
        refY="3" 
        markerWidth="6" 
        markerHeight="6" 
        orient="auto" 
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,6 L9,3 z" fill="hsl(280, 65%, 60%)" opacity="0.9"/>
      </marker>
      
      {/* Data Transfer Diamond Marker */}
      <marker 
        id="dataTransfer" 
        viewBox="0 0 8 8" 
        refX="4" 
        refY="4" 
        markerWidth="5" 
        markerHeight="5" 
        orient="auto"
      >
        <polygon points="4,0 8,4 4,8 0,4" fill="hsl(190, 85%, 45%)" opacity="0.8"/>
      </marker>

      {/* Professional Patterns for Zone Backgrounds */}
      
      {/* Subtle Grid Pattern for Security Zones */}
      <pattern id="securityGrid" patternUnits="userSpaceOnUse" width="20" height="20">
        <path 
          d="M 20 0 L 0 0 0 20" 
          fill="none" 
          stroke="hsl(0, 75%, 60%)" 
          strokeWidth="0.5" 
          opacity="0.3"
        />
      </pattern>
      
      {/* Mesh Pattern for Service Mesh Zones */}
      <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="16" height="16">
        <circle cx="8" cy="8" r="1" fill="hsl(280, 65%, 60%)" opacity="0.2"/>
        <path 
          d="M0,8 L16,8 M8,0 L8,16" 
          stroke="hsl(280, 65%, 60%)" 
          strokeWidth="0.3" 
          opacity="0.15"
        />
      </pattern>
      
      {/* Cloud Pattern for Infrastructure Zones */}
      <pattern id="cloudPattern" patternUnits="userSpaceOnUse" width="24" height="24">
        <circle cx="6" cy="6" r="2" fill="hsl(210, 100%, 65%)" opacity="0.1"/>
        <circle cx="18" cy="18" r="2" fill="hsl(210, 100%, 65%)" opacity="0.1"/>
        <circle cx="18" cy="6" r="1.5" fill="hsl(210, 80%, 70%)" opacity="0.08"/>
        <circle cx="6" cy="18" r="1.5" fill="hsl(210, 80%, 70%)" opacity="0.08"/>
      </pattern>

      {/* Connection Line Patterns */}
      
      {/* Encrypted Connection Pattern */}
      <pattern id="encryptedPattern" patternUnits="userSpaceOnUse" width="8" height="4">
        <rect width="4" height="4" fill="hsl(0, 75%, 60%)"/>
        <rect x="4" width="4" height="4" fill="transparent"/>
      </pattern>
      
      {/* High Traffic Flow Pattern */}
      <pattern id="trafficPattern" patternUnits="userSpaceOnUse" width="6" height="6">
        <circle cx="3" cy="3" r="1" fill="hsl(280, 65%, 60%)" opacity="0.6"/>
      </pattern>

      {/* Status Indicator Gradients */}
      <linearGradient id="statusActive" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981"/>
        <stop offset="100%" stopColor="#059669"/>
      </linearGradient>
      
      <linearGradient id="statusWarning" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B"/>
        <stop offset="100%" stopColor="#D97706"/>
      </linearGradient>
      
      <linearGradient id="statusCritical" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444"/>
        <stop offset="100%" stopColor="#DC2626"/>
      </linearGradient>

      {/* Masking Definitions for Complex Shapes */}
      <mask id="nodeMask">
        <rect width="100%" height="100%" fill="white"/>
        <circle cx="50%" cy="50%" r="40%" fill="black"/>
      </mask>
      
      <clipPath id="roundedClip">
        <rect width="100%" height="100%" rx="8" ry="8"/>
      </clipPath>
      
      <clipPath id="hexagonClip">
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30"/>
      </clipPath>
    </defs>
  );
};