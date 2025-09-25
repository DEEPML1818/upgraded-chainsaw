import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';
import { useGSAPScrollSmoother } from '@/hooks/use-gsap-scroll-smoother';
import {
  Cloud,
  Key,
  FileText,
  Headphones,
  BookOpen,
  Wrench,
  Rocket,
  Ticket,
  TrendingUp,
  Search,
  AlertTriangle,
  Building,
  Shield,
  Eye,
  Bot,
  Globe,
  Target,
  Calculator,
  ShoppingCart,
  Folder,
  CloudSnow,
  Antenna,
  Cpu,
  Lock,
  HardDrive,
  BarChart3,
  GraduationCap,
  Users,
  Grid,
  Monitor,
  Database,
  CheckCircle,
  Settings,
  Repeat,
  Bell,
  Share,
  ArrowLeftRight,
  ArrowRight,
  Network,
  X // Import X icon for closing the modal
} from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import InteractiveTopology from '../components/topology/InteractiveTopology';
import ExpandableTopology from '../components/topology/ExpandableTopology'; // Import ExpandableTopology for correction

// CSS animations for enhanced topology visualization
const topologyAnimations = `
  @keyframes jump {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  @keyframes iconBounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-6px); }
    60% { transform: translateY(-3px); }
  }

  @keyframes iconPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.1); }
  }

  @keyframes dataFlow {
    0% { stroke-dashoffset: 20; opacity: 0.6; }
    50% { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 0.6; }
  }

  @keyframes secureFlow {
    0% { stroke-dashoffset: 24; }
    100% { stroke-dashoffset: 0; }
  }

  @keyframes encryptedFlow {
    0% { stroke-dashoffset: 12; }
    100% { stroke-dashoffset: 0; }
  }

  @keyframes highTrafficFlow {
    0%, 100% { stroke-width: 3; opacity: 0.8; }
    50% { stroke-width: 6; opacity: 1; }
  }

  @keyframes nodePulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }

  @keyframes statusPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.15); }
  }

  @keyframes serverPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
  }

  @keyframes networkGlow {
    0%, 100% { filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.4)); }
    50% { filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.8)); }
  }

  @keyframes routerSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes dataPacket {
    0% { transform: translateX(-10px); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(10px); opacity: 0; }
  }

  @keyframes cloudFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes securityShield {
    0%, 100% { stroke-width: 2; stroke-dasharray: 0; }
    50% { stroke-width: 3; stroke-dasharray: 5 5; }
  }

  .jump-icon {
    animation: jump 2s infinite ease-in-out;
    transform-origin: center bottom;
    display: inline-block;
  }

  .topology-diagram:hover .jump-icon {
    animation: jump 1s infinite ease-in-out;
  }

  .animated-icon {
    animation: iconBounce 2.5s ease-in-out infinite;
    display: inline-block;
  }

  .animated-icon-pulse {
    animation: iconPulse 3s ease-in-out infinite;
    display: inline-block;
  }

  .animated-connection {
    stroke-dasharray: 10 5;
    animation: dataFlow 3s ease-in-out infinite;
  }

  .animated-secure-connection {
    stroke-dasharray: 12 6;
    animation: secureFlow 2s linear infinite;
  }

  .animated-encrypted-connection {
    stroke-dasharray: 8 4;
    animation: encryptedFlow 2s linear infinite;
  }

  .animated-high-traffic {
    animation: highTrafficFlow 1.5s ease-in-out infinite;
  }

  .animated-node {
    animation: nodePulse 4s ease-in-out infinite;
  }

  .animated-status {
    animation: statusPulse 2.5s ease-in-out infinite;
  }

  .animated-server {
    animation: serverPulse 3s ease-in-out infinite;
  }

  .animated-network-glow {
    animation: networkGlow 2s ease-in-out infinite;
  }

  .animated-router {
    animation: routerSpin 10s linear infinite;
    transform-origin: center;
  }

  .animated-data-packet {
    animation: dataPacket 2s ease-in-out infinite;
  }

  .animated-cloud-float {
    animation: cloudFloat 4s ease-in-out infinite;
  }

  .animated-security-shield {
    animation: securityShield 3s ease-in-out infinite;
  }

  .network-component {
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .network-component:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }

  /* Enhanced hover effects for topology diagrams */
  .topology-diagram:hover .jump-icon {
    animation-duration: 1s;
  }

  .topology-diagram:hover .animated-icon-pulse {
    animation-duration: 1.5s;
  }

  .topology-diagram:hover .animated-status {
    animation-duration: 1s;
  }

  .topology-diagram:hover .animated-server {
    animation-duration: 1.5s;
  }

  .topology-diagram:hover .animated-network-glow {
    animation-duration: 1s;
  }

  .topology-diagram:hover .animated-router {
    animation-duration: 5s;
  }
`;

interface WorkflowStep {
  id: string;
  icon: any;
  label: string;
  description: string;
}

interface BusinessSolution {
  id: string;
  name: string;
  icon: any;
  description: string;
  workflow: WorkflowStep[];
  category: 'general' | 'niche' | 'specialized';
}

// Performance optimization: Inject CSS animations once
const useTopologyAnimations = () => {
  useEffect(() => {
    const existingStyle = document.getElementById('topology-animations');
    if (!existingStyle) {
      const styleElement = document.createElement('style');
      styleElement.id = 'topology-animations';
      styleElement.innerHTML = topologyAnimations;
      document.head.appendChild(styleElement);
    }
  }, []);
};


const TopologyDiagram = ({ solutionId }: { solutionId: string }) => {
  const renderTopology = () => {
    let svgContent = '';
    let title = '';
    let description = '';

    switch (solutionId) {
      case 'custom-saas':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="networkShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="serverGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <marker id="networkFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#60A5FA" filter="url(#serverGlow)"/>
              </marker>
              <marker id="secureFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#serverGlow)"/>
              </marker>
              <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#60A5FA" opacity="0.2"/>
              </pattern>
              <linearGradient id="gatewayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(16, 185, 129, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(16, 185, 129, 0.1)"/>
              </linearGradient>
              <linearGradient id="dmzGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
              </linearGradient>
              <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(139, 92, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(139, 92, 246, 0.1)"/>
              </linearGradient>
              <linearGradient id="dmzOutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(236, 72, 153, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(236, 72, 153, 0.1)"/>
              </linearGradient>
              <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(220, 38, 38, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(220, 38, 38, 0.1)"/>
              </linearGradient>
            </defs>

            {/* Background */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

            {/* Floating data particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#60A5FA" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Internet Zone */}
            <rect x="20" y="20" width="760" height="50" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#F59E0B" font-size="16" font-weight="bold" class="jump-icon">🌐</text>
            <text x="90" y="45" fill="#FBBF24" font-size="14" font-weight="bold">INTERNET</text>
            <text x="400" y="60" text-anchor="middle" fill="#FCD34D" font-size="12" font-weight="600">External Access Layer - Secure Internet Gateway</text>

            {/* Gateway Subnet */}
            <g class="network-component">
              <rect x="650" y="90" width="130" height="80" rx="12" fill="url(#gatewayGradient)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="660" y="110" fill="#34D399" font-size="13" font-weight="bold">GATEWAY SUBNET</text>
              
              {/* IGW */}
              <g transform="translate(665, 120)" class="animated-network-glow">
                <rect width="40" height="30" rx="6" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <circle cx="20" cy="15" r="6" fill="none" stroke="#6EE7B7" stroke-width="1.5" class="animated-router"/>
                <text x="20" y="20" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">IGW</text>
              </g>
              
              {/* WAF */}
              <g transform="translate(715, 120)" class="animated-security-shield">
                <rect width="40" height="30" rx="6" fill="rgba(239, 68, 68, 0.3)" stroke="#EF4444" stroke-width="2"/>
                <path d="M20 8 L24 12 L20 18 L16 12 Z" fill="none" stroke="#FCA5A5" stroke-width="2"/>
                <text x="20" y="25" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">WAF</text>
              </g>
            </g>

            {/* Private DMZ IN */}
            <g class="network-component">
              <rect x="20" y="190" width="180" height="100" rx="12" fill="url(#dmzGradient)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="30" y="210" fill="#60A5FA" font-size="13" font-weight="bold">PRIVATE DMZ IN</text>
              
              {/* NSG */}
              <g transform="translate(35, 230)" class="animated-server">
                <rect width="50" height="35" rx="6" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="2"/>
                <rect x="8" y="8" width="34" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="8" y="14" width="34" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="8" y="19" width="34" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <circle cx="15" cy="27" r="2" fill="#3B82F6" class="animated-status"/>
                <circle cx="25" cy="27" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="35" cy="27" r="2" fill="#F59E0B" class="animated-status"/>
                <text x="25" y="50" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">NSG</text>
              </g>

              {/* NVA */}
              <g transform="translate(95, 230)" class="animated-server">
                <rect width="50" height="35" rx="6" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <rect x="8" y="8" width="16" height="20" rx="3" fill="#34D399" opacity="0.8"/>
                <rect x="26" y="8" width="16" height="20" rx="3" fill="#6EE7B7" opacity="0.6"/>
                <circle cx="16" cy="12" r="1.5" fill="#10B981"/>
                <circle cx="34" cy="12" r="1.5" fill="#10B981"/>
                <text x="25" y="50" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">NVA</text>
              </g>
            </g>

            {/* Service Mesh Layer */}
            <g class="network-component">
              <rect x="220" y="190" width="320" height="100" rx="12" fill="url(#meshGradient)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="230" y="210" fill="#A78BFA" font-size="13" font-weight="bold">SERVICE MESH LAYER</text>

              {/* API-1 */}
              <g transform="translate(250, 230)" class="animated-server">
                <ellipse cx="0" cy="0" rx="25" ry="18" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" stroke-width="2"/>
                <rect x="-10" y="-6" width="20" height="3" rx="1" fill="#A78BFA" opacity="0.9"/>
                <rect x="-10" y="-2" width="20" height="2" rx="1" fill="#C4B5FD" opacity="0.7"/>
                <rect x="-10" y="2" width="20" height="2" rx="1" fill="#DDD6FE" opacity="0.5"/>
                <circle cx="0" cy="8" r="2" fill="#8B5CF6" class="animated-icon-pulse"/>
                <text x="0" y="25" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="600">API-1</text>
              </g>

              {/* Auth Service */}
              <g transform="translate(320, 225)" class="animated-server">
                <rect width="70" height="25" rx="12" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2"/>
                <rect x="6" y="5" width="14" height="14" rx="3" fill="#F59E0B" opacity="0.8"/>
                <circle cx="13" cy="12" r="2" fill="#FBBF24"/>
                <path d="M25 7 L60 7 M25 12 L60 12 M25 17 L60 17" stroke="#F59E0B" stroke-width="1" opacity="0.8"/>
                <text x="35" y="35" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Auth Service</text>
              </g>

              {/* API-2 */}
              <g transform="translate(420, 230)" class="animated-server">
                <ellipse cx="0" cy="0" rx="25" ry="18" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" stroke-width="2"/>
                <rect x="-10" y="-6" width="20" height="3" rx="1" fill="#A78BFA" opacity="0.9"/>
                <rect x="-10" y="-2" width="20" height="2" rx="1" fill="#C4B5FD" opacity="0.7"/>
                <rect x="-10" y="2" width="20" height="2" rx="1" fill="#DDD6FE" opacity="0.5"/>
                <circle cx="0" cy="8" r="2" fill="#8B5CF6" class="animated-icon-pulse"/>
                <text x="0" y="25" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="600">API-2</text>
              </g>

              {/* Service mesh connections */}
              <path d="M275 230 L320 237" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-connection" marker-end="url(#networkFlow)"/>
              <path d="M390 237 L395 230" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-connection" marker-end="url(#networkFlow)"/>
            </g>

            {/* Public DMZ OUT */}
            <g class="network-component">
              <rect x="560" y="190" width="180" height="100" rx="12" fill="url(#dmzOutGradient)" stroke="#EC4899" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="570" y="210" fill="#F472B6" font-size="13" font-weight="bold">PUBLIC DMZ OUT</text>
              
              {/* NSG */}
              <g transform="translate(575, 230)" class="animated-server">
                <rect width="50" height="35" rx="6" fill="rgba(236, 72, 153, 0.3)" stroke="#EC4899" stroke-width="2"/>
                <text x="25" y="20" text-anchor="middle" fill="#EC4899" font-size="12" class="jump-icon">🛡️</text>
                <text x="25" y="50" text-anchor="middle" fill="#F9A8D4" font-size="8" font-weight="600">NSG</text>
              </g>

              {/* NVA */}
              <g transform="translate(635, 230)" class="animated-server">
                <rect width="50" height="35" rx="6" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <text x="25" y="20" text-anchor="middle" fill="#10B981" font-size="12" class="jump-icon">🔒</text>
                <text x="25" y="50" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">NVA</text>
              </g>
            </g>

            {/* Data & Storage Layer */}
            <g class="network-component">
              <rect x="20" y="310" width="280" height="80" rx="12" fill="url(#dataGradient)" stroke="#DC2626" stroke-width="3" stroke-dasharray="6,3" class="animated-connection"/>
              <text x="30" y="330" fill="#F87171" font-size="13" font-weight="bold">DATA & STORAGE LAYER</text>

              {/* PostgreSQL */}
              <g transform="translate(35, 340)" class="animated-server">
                <rect width="50" height="30" rx="6" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="2"/>
                <rect x="8" y="6" width="34" height="6" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="8" y="14" width="34" height="4" rx="1" fill="#60A5FA" opacity="0.7"/>
                <circle cx="15" cy="22" r="1" fill="#3B82F6" class="animated-icon-pulse"/>
                <circle cx="25" cy="22" r="1" fill="#10B981" class="animated-icon-pulse"/>
                <circle cx="35" cy="22" r="1" fill="#F59E0B" class="animated-icon-pulse"/>
                <text x="25" y="44" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">PostgreSQL</text>
              </g>

              {/* Redis Cache */}
              <g transform="translate(95, 340)" class="animated-server">
                <rect width="50" height="30" rx="6" fill="rgba(220, 38, 38, 0.3)" stroke="#DC2626" stroke-width="2"/>
                <rect x="8" y="6" width="14" height="14" rx="2" fill="#DC2626" opacity="0.8"/>
                <rect x="24" y="6" width="14" height="14" rx="2" fill="#EF4444" opacity="0.6"/>
                <circle cx="15" cy="13" r="1.5" fill="#FCA5A5" class="animated-status"/>
                <circle cx="31" cy="13" r="1.5" fill="#F87171" class="animated-status"/>
                <text x="25" y="44" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Redis Cache</text>
              </g>

              {/* File Storage */}
              <g transform="translate(155, 340)" class="animated-server">
                <rect width="50" height="30" rx="6" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <rect x="8" y="6" width="10" height="15" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="20" y="6" width="10" height="15" rx="2" fill="#34D399" opacity="0.7"/>
                <rect x="32" y="6" width="10" height="15" rx="2" fill="#6EE7B7" opacity="0.5"/>
                <text x="25" y="44" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">File Storage</text>
              </g>

              {/* Message Queues */}
              <g transform="translate(215, 340)" class="animated-server">
                <rect width="70" height="30" rx="6" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" stroke-width="2"/>
                <rect x="8" y="6" width="54" height="3" rx="1" fill="#8B5CF6" opacity="0.9"/>
                <rect x="8" y="11" width="54" height="2" rx="1" fill="#A78BFA" opacity="0.7"/>
                <rect x="8" y="15" width="54" height="2" rx="1" fill="#C4B5FD" opacity="0.5"/>
                <rect x="8" y="19" width="54" height="2" rx="1" fill="#DDD6FE" opacity="0.3"/>
                <circle cx="18" cy="24" r="1" fill="#8B5CF6" class="animated-data-packet"/>
                <circle cx="35" cy="24" r="1" fill="#A78BFA" class="animated-data-packet" style="animation-delay: 0.5s"/>
                <circle cx="52" cy="24" r="1" fill="#C4B5FD" class="animated-data-packet" style="animation-delay: 1s"/>
                <text x="35" y="44" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Message Queues</text>
              </g>
            </g>

            {/* Tenant Applications */}
            <g class="network-component">
              <rect x="560" y="310" width="180" height="80" rx="12" fill="url(#gatewayGradient)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="570" y="330" fill="#34D399" font-size="13" font-weight="bold">TENANT APPLICATIONS</text>

              {/* Tenant A */}
              <g transform="translate(575, 340)" class="animated-server">
                <rect width="40" height="30" rx="6" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <rect x="6" y="5" width="28" height="4" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="6" y="11" width="28" height="3" rx="1" fill="#34D399" opacity="0.7"/>
                <rect x="6" y="16" width="28" height="3" rx="1" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="12" cy="23" r="1" fill="#10B981" class="animated-status"/>
                <circle cx="20" cy="23" r="1" fill="#34D399" class="animated-status"/>
                <circle cx="28" cy="23" r="1" fill="#6EE7B7" class="animated-status"/>
                <text x="20" y="44" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Tenant A</text>
              </g>

              {/* Tenant B */}
              <g transform="translate(625, 340)" class="animated-server">
                <rect width="40" height="30" rx="6" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <rect x="6" y="5" width="28" height="4" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="6" y="11" width="28" height="3" rx="1" fill="#34D399" opacity="0.7"/>
                <rect x="6" y="16" width="28" height="3" rx="1" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="12" cy="23" r="1" fill="#10B981" class="animated-status"/>
                <circle cx="20" cy="23" r="1" fill="#34D399" class="animated-status"/>
                <circle cx="28" cy="23" r="1" fill="#6EE7B7" class="animated-status"/>
                <text x="20" y="44" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Tenant B</text>
              </g>

              {/* Tenant C */}
              <g transform="translate(675, 340)" class="animated-server">
                <rect width="40" height="30" rx="6" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <rect x="6" y="5" width="28" height="4" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="6" y="11" width="28" height="3" rx="1" fill="#34D399" opacity="0.7"/>
                <rect x="6" y="16" width="28" height="3" rx="1" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="12" cy="23" r="1" fill="#10B981" class="animated-status"/>
                <circle cx="20" cy="23" r="1" fill="#34D399" class="animated-status"/>
                <circle cx="28" cy="23" r="1" fill="#6EE7B7" class="animated-status"/>
                <text x="20" y="44" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Tenant C</text>
              </g>
            </g>

            {/* Network Connections */}
            <g class="network-connections">
              {/* Internet to Gateway */}
              <path d="M715 70 L715 90" stroke="#60A5FA" stroke-width="4" fill="none" marker-end="url(#networkFlow)" class="animated-high-traffic"/>
              
              {/* Gateway to DMZ */}
              <path d="M650 130 Q400 150 200 190" stroke="#60A5FA" stroke-width="3" fill="none" stroke-dasharray="12,6" class="animated-secure-connection" marker-end="url(#secureFlow)"/>
              <path d="M720 130 Q680 160 650 190" stroke="#F472B6" stroke-width="3" fill="none" stroke-dasharray="10,5" class="animated-encrypted-connection" marker-end="url(#networkFlow)"/>

              {/* Service mesh connections */}
              <path d="M200 240 L560 240" stroke="#A78BFA" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#networkFlow)"/>
              
              {/* Data connections */}
              <path d="M160 310 L380 290" stroke="#F87171" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-connection" marker-end="url(#secureFlow)"/>
              <path d="M380 290 L650 310" stroke="#34D399" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#networkFlow)"/>
            </g>
          </svg>
        `;
        title = 'Multi-Tenant SaaS Architecture';
        description = 'Complete enterprise SaaS platform with DMZ isolation, service mesh, and tenant segregation';
        break;

      case 'enterprise-portals':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="networkShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="serverGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <marker id="networkFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#60A5FA" filter="url(#serverGlow)"/>
              </marker>
              <marker id="secureFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#serverGlow)"/>
              </marker>
              <marker id="vpnFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#serverGlow)"/>
              </marker>
              <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#60A5FA" opacity="0.2"/>
              </pattern>
              <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
              </linearGradient>
              <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(139, 92, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(139, 92, 246, 0.1)"/>
              </linearGradient>
              <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
              </linearGradient>
              <radialGradient id="cloudServiceGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(16, 185, 129, 0.4)"/>
                <stop offset="70%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(16, 185, 129, 0.2)"/>
              </radialGradient>
            </defs>

            {/* Enhanced Background with depth */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

            {/* Floating data particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#60A5FA" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Internet Gateway Zone */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#F59E0B" font-size="16" font-weight="bold" class="jump-icon">🌐</text>
            <text x="90" y="45" fill="#FBBF24" font-size="14" font-weight="bold">INTERNET GATEWAY</text>
            <text x="400" y="60" text-anchor="middle" fill="#FCD34D" font-size="12" font-weight="600">Global Access Point - Multi-Regional Connectivity</text>

            {/* Network performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">STATUS: ACTIVE</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#3B82F6" font-size="8" font-weight="600">LATENCY: 12ms</text>
            </g>

            {/* Central Identity Hub - Enhanced Cloud Infrastructure */}
            <g class="network-component">
              <ellipse cx="400" cy="225" rx="160" ry="90" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="4" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="300" y="150" fill="#60A5FA" font-size="14" font-weight="bold">CENTRAL IDENTITY HUB</text>

              {/* Enhanced SSO Gateway */}
              <g transform="translate(320, 180)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#hubGradient)" stroke="#3B82F6" stroke-width="3" filter="url(#networkShadow)"/>
                <rect x="10" y="8" width="60" height="8" rx="4" fill="#60A5FA" opacity="0.9"/>
                <rect x="10" y="18" width="60" height="6" rx="3" fill="#93C5FD" opacity="0.7"/>
                <rect x="10" y="26" width="60" height="6" rx="3" fill="#BFDBFE" opacity="0.5"/>
                <circle cx="20" cy="38" r="3" fill="#3B82F6" class="animated-status"/>
                <circle cx="35" cy="38" r="3" fill="#10B981" class="animated-status"/>
                <circle cx="50" cy="38" r="3" fill="#F59E0B" class="animated-status"/>
                <circle cx="65" cy="38" r="3" fill="#EF4444" class="animated-status"/>
                <text x="40" y="64" text-anchor="middle" fill="#93C5FD" font-size="10" font-weight="600">SSO Gateway</text>
              </g>

              {/* Enhanced API Gateway */}
              <g transform="translate(420, 180)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#cloudServiceGradient)" stroke="#10B981" stroke-width="3" filter="url(#networkShadow)"/>
                <rect x="10" y="8" width="25" height="30" rx="4" fill="#34D399" opacity="0.8"/>
                <rect x="40" y="8" width="25" height="30" rx="4" fill="#6EE7B7" opacity="0.6"/>
                <circle cx="22.5" cy="18" r="2" fill="#10B981" class="animated-icon-pulse"/>
                <circle cx="52.5" cy="18" r="2" fill="#10B981" class="animated-icon-pulse"/>
                <path d="M25 25 L50 25" stroke="#10B981" stroke-width="2" marker-end="url(#secureFlow)" class="animated-connection"/>
                <text x="40" y="64" text-anchor="middle" fill="#6EE7B7" font-size="10" font-weight="600">API Gateway</text>
              </g>

              {/* Enhanced Identity Directory */}
              <g transform="translate(370, 250)" class="animated-server">
                <ellipse cx="30" cy="20" rx="30" ry="15" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="2"/>
                <rect x="0" y="20" width="60" height="30" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="2"/>
                <ellipse cx="30" cy="50" rx="30" ry="15" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="2"/>
                <text x="30" y="38" text-anchor="middle" fill="#3B82F6" font-size="16" class="animated-icon-pulse">👤</text>
                <text x="30" y="68" text-anchor="middle" fill="#93C5FD" font-size="10" font-weight="600">Identity Store</text>
              </g>
            </g>

            {/* Branch Office Network - Northeast */}
            <g class="network-component">
              <rect x="580" y="100" width="180" height="100" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="590" y="120" fill="#A78BFA" font-size="13" font-weight="bold">NORTHEAST BRANCH</text>

              {/* Enhanced Branch Router */}
              <g transform="translate(600, 140)" class="animated-network-glow">
                <rect width="50" height="35" rx="6" fill="url(#branchGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)"/>
                <circle cx="25" cy="12" r="8" fill="none" stroke="#A78BFA" stroke-width="1.5" class="animated-router"/>
                <circle cx="25" cy="12" r="4" fill="#8B5CF6" opacity="0.8"/>
                <rect x="20" y="20" width="10" height="3" rx="1" fill="#A78BFA" opacity="0.9"/>
                <rect x="18" y="25" width="14" height="2" rx="1" fill="#C4B5FD" opacity="0.7"/>
                <text x="25" y="50" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="600">SD-WAN</text>
              </g>

              {/* Enhanced Branch Firewall */}
              <g transform="translate(670, 140)" class="animated-security-shield">
                <rect width="50" height="35" rx="6" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
                <path d="M25 8 L30 12 L25 20 L20 12 Z" fill="none" stroke="#FCA5A5" stroke-width="2" class="animated-security-shield"/>
                <circle cx="25" cy="14" r="3" fill="#EF4444" opacity="0.8"/>
                <text x="25" y="50" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Firewall</text>
              </g>

              {/* Branch Applications */}
              <g transform="translate(620, 180)" class="animated-server">
                <rect width="80" height="15" rx="6" fill="rgba(139, 92, 246, 0.12)" stroke="#8B5CF6" stroke-width="2"/>
                <circle cx="15" cy="7.5" r="2" fill="#8B5CF6" class="animated-icon-pulse"/>
                <circle cx="30" cy="7.5" r="2" fill="#A78BFA" class="animated-icon-pulse" style="animation-delay: 0.5s"/>
                <circle cx="45" cy="7.5" r="2" fill="#C4B5FD" class="animated-icon-pulse" style="animation-delay: 1s"/>
                <circle cx="60" cy="7.5" r="2" fill="#DDD6FE" class="animated-icon-pulse" style="animation-delay: 1.5s"/>
                <text x="40" y="28" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="500">Local Applications</text>
              </g>
            </g>

            {/* Branch Office Network - Northwest */}
            <g class="network-component">
              <rect x="40" y="100" width="180" height="100" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="50" y="120" fill="#A78BFA" font-size="13" font-weight="bold">NORTHWEST BRANCH</text>

              {/* Enhanced Branch Router */}
              <g transform="translate(60, 140)" class="animated-network-glow">
                <rect width="50" height="35" rx="6" fill="url(#branchGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)"/>
                <circle cx="25" cy="12" r="8" fill="none" stroke="#A78BFA" stroke-width="1.5" class="animated-router"/>
                <circle cx="25" cy="12" r="4" fill="#8B5CF6" opacity="0.8"/>
                <rect x="20" y="20" width="10" height="3" rx="1" fill="#A78BFA" opacity="0.9"/>
                <rect x="18" y="25" width="14" height="2" rx="1" fill="#C4B5FD" opacity="0.7"/>
                <text x="25" y="50" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="600">SD-WAN</text>
              </g>

              {/* Enhanced Branch Firewall */}
              <g transform="translate(130, 140)" class="animated-security-shield">
                <rect width="50" height="35" rx="6" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
                <path d="M25 8 L30 12 L25 20 L20 12 Z" fill="none" stroke="#FCA5A5" stroke-width="2" class="animated-security-shield"/>
                <circle cx="25" cy="14" r="3" fill="#EF4444" opacity="0.8"/>
                <text x="25" y="50" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Firewall</text>
              </g>

              {/* Branch Applications */}
              <g transform="translate(80, 180)" class="animated-server">
                <rect width="80" height="15" rx="6" fill="rgba(139, 92, 246, 0.12)" stroke="#8B5CF6" stroke-width="2"/>
                <circle cx="15" cy="7.5" r="2" fill="#8B5CF6" class="animated-icon-pulse"/>
                <circle cx="30" cy="7.5" r="2" fill="#A78BFA" class="animated-icon-pulse" style="animation-delay: 0.5s"/>
                <circle cx="45" cy="7.5" r="2" fill="#C4B5FD" class="animated-icon-pulse" style="animation-delay: 1s"/>
                <circle cx="60" cy="7.5" r="2" fill="#DDD6FE" class="animated-icon-pulse" style="animation-delay: 1.5s"/>
                <text x="40" y="28" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="500">Local Applications</text>
              </g>
            </g>

            {/* On-Premise Data Center - Southwest */}
            <g class="network-component">
              <rect x="40" y="340" width="180" height="100" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="50" y="360" fill="#34D399" font-size="13" font-weight="bold">ON-PREMISE DC</text>

              {/* Enhanced Data Center Router */}
              <g transform="translate(60, 380)" class="animated-server">
                <rect width="60" height="40" rx="6" fill="url(#cloudServiceGradient)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
                <rect x="8" y="8" width="44" height="6" rx="2" fill="#10B981" opacity="0.8"/>
                <rect x="8" y="16" width="44" height="4" rx="1" fill="#34D399" opacity="0.6"/>
                <rect x="8" y="22" width="44" height="4" rx="1" fill="#6EE7B7" opacity="0.4"/>
                <circle cx="15" cy="32" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="30" cy="32" r="2" fill="#34D399" class="animated-status"/>
                <circle cx="45" cy="32" r="2" fill="#6EE7B7" class="animated-status"/>
                <text x="30" y="55" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Core Router</text>
              </g>

              {/* Enhanced Legacy Systems */}
              <g transform="translate(130, 380)" class="animated-server">
                <rect width="60" height="40" rx="6" fill="url(#hubGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                <rect x="8" y="8" width="20" height="24" rx="3" fill="#3B82F6" opacity="0.8"/>
                <rect x="32" y="8" width="20" height="24" rx="3" fill="#60A5FA" opacity="0.6"/>
                <circle cx="18" cy="14" r="1.5" fill="#BFDBFE"/>
                <circle cx="42" cy="14" r="1.5" fill="#BFDBFE"/>
                <path d="M20 20 L40 20" stroke="#60A5FA" stroke-width="2" marker-end="url(#networkFlow)" class="animated-connection"/>
                <text x="30" y="55" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Legacy ERP</text>
              </g>
            </g>

            {/* Remote Field Office - Southeast */}
            <g class="network-component">
              <rect x="580" y="340" width="180" height="100" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6,3" class="animated-connection"/>
              <text x="590" y="360" fill="#FBBF24" font-size="13" font-weight="bold">REMOTE FIELD OFFICE</text>

              {/* Enhanced Field Router */}
              <g transform="translate(600, 380)" class="animated-network-glow">
                <rect width="60" height="40" rx="6" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
                <circle cx="30" cy="15" r="10" fill="none" stroke="#FBBF24" stroke-width="1.5" class="animated-router"/>
                <circle cx="30" cy="15" r="5" fill="#F59E0B" opacity="0.8"/>
                <rect x="25" y="25" width="10" height="3" rx="1" fill="#FBBF24" opacity="0.9"/>
                <rect x="23" y="30" width="14" height="2" rx="1" fill="#FCD34D" opacity="0.7"/>
                <text x="30" y="55" text-anchor="middle" fill="#FCD34D" font-size="8" font-weight="600">4G/5G Router</text>
              </g>

              {/* Enhanced Mobile Devices */}
              <g transform="translate(680, 380)" class="animated-server">
                <rect width="60" height="40" rx="6" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
                <rect x="10" y="8" width="12" height="20" rx="2" fill="#F59E0B" opacity="0.9"/>
                <rect x="26" y="8" width="12" height="20" rx="2" fill="#FBBF24" opacity="0.7"/>
                <rect x="42" y="8" width="12" height="20" rx="2" fill="#FCD34D" opacity="0.5"/>
                <circle cx="16" cy="32" r="1.5" fill="#F59E0B" class="animated-status"/>
                <circle cx="32" cy="32" r="1.5" fill="#FBBF24" class="animated-status"/>
                <circle cx="48" cy="32" r="1.5" fill="#FCD34D" class="animated-status"/>
                <text x="30" y="55" text-anchor="middle" fill="#FCD34D" font-size="8" font-weight="600">Mobile Devices</text>
              </g>
            </g>

            {/* Enhanced Network Connections with data flow visualization */}
            <g class="network-connections">
              {/* Internet to Hub flow */}
              <path d="M400 80 L400 135" stroke="#60A5FA" stroke-width="4" fill="none" marker-end="url(#networkFlow)" class="animated-high-traffic"/>
              <circle cx="400" cy="108" r="3" fill="#60A5FA" class="animated-data-packet"/>

              {/* Hub to Branch flows - Enhanced curves */}
              <path d="M320 180 Q180 140 130 140" stroke="#8B5CF6" stroke-width="3" fill="none" stroke-dasharray="12,6" class="animated-secure-connection" marker-end="url(#secureFlow)"/>
              <path d="M480 180 Q620 140 670 140" stroke="#8B5CF6" stroke-width="3" fill="none" stroke-dasharray="12,6" class="animated-secure-connection" marker-end="url(#secureFlow)"/>

              {/* Hub to Data Center VPN */}
              <path d="M320 270 Q180 340 130 380" stroke="#10B981" stroke-width="4" fill="none" stroke-dasharray="10,5" class="animated-encrypted-connection" marker-end="url(#vpnFlow)"/>

              {/* Hub to Field Office 4G/5G */}
              <path d="M480 270 Q620 340 630 380" stroke="#F59E0B" stroke-width="4" fill="none" stroke-dasharray="8,4" class="animated-high-traffic" marker-end="url(#vpnFlow)"/>

              {/* Data flow particles */}
              <circle cx="250" cy="160" r="2" fill="#8B5CF6" class="animated-data-packet"/>
              <circle cx="550" cy="160" r="2" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="225" cy="325" r="2" fill="#10B981" class="animated-data-packet" style="animation-delay: 0.5s"/>
              <circle cx="555" cy="325" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 1.5s"/>
            </g>

            {/* Enhanced Connection Labels with professional styling */}
            <g class="connection-labels">
              <rect x="200" y="150" width="80" height="20" rx="10" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
              <text x="240" y="162" text-anchor="middle" fill="#A78BFA" font-size="10" font-weight="700">SD-WAN</text>
              <rect x="520" y="150" width="80" height="20" rx="10" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
              <text x="560" y="162" text-anchor="middle" fill="#A78BFA" font-size="10" font-weight="700">SD-WAN</text>
              <rect x="200" y="330" width="80" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="240" y="342" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">VPN TUNNEL</text>
              <rect x="520" y="330" width="80" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="560" y="342" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">4G/5G LINK</text>
            </g>
          </svg>
        `;
        title = 'Hub-and-Spoke Hybrid Cloud';
        description = 'Centralized identity with distributed branch connectivity';
        break;

      case 'compliance-reporting':
        svgContent = `
          <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="nodeShadow3" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2"/>
              </filter>
              <marker id="complianceFlow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                <path d="M0,0 L0,8 L10,4 z" fill="#3B82F6"/>
              </marker>
              <linearGradient id="dmzGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0.15)"/>
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0.05)"/>
              </linearGradient>
            </defs>

            {/* DMZ Security Layer */}
            <g filter="url(#nodeShadow3)">
              <rect x="40" y="40" width="520" height="80" rx="20" fill="url(#dmzGradient)" stroke="#EF4444" stroke-width="3" class="animated-status"/>
              <text x="300" y="70" text-anchor="middle" fill="#EF4444" font-size="24" class="animated-icon-pulse">🛡️</text>
              <text x="300" y="95" text-anchor="middle" fill="#F87171" font-size="14" font-weight="600">DMZ Data Ingestion Layer</text>
              <text x="300" y="110" text-anchor="middle" fill="#FCA5A5" font-size="11">Secure External Entry Point</text>
            </g>

            {/* Compliance Processing VLAN */}
            <g filter="url(#nodeShadow3)">
              <rect x="80" y="150" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" stroke-width="2"/>
              <text x="150" y="175" text-anchor="middle" fill="#9333EA" font-size="24">📑</text>
              <text x="150" y="195" text-anchor="middle" fill="#A855F7" font-size="13" font-weight="600">Compliance VLAN</text>
              <text x="150" y="208" text-anchor="middle" fill="#C084FC" font-size="10">Policy Enforcement</text>
            </g>

            {/* Audit Processing VLAN */}
            <g filter="url(#nodeShadow3)">
              <rect x="250" y="150" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" stroke-width="2"/>
              <text x="320" y="175" text-anchor="middle" fill="#9333EA" font-size="24">🔄</text>
              <text x="320" y="195" text-anchor="middle" fill="#A855F7" font-size="13" font-weight="600">Audit VLAN</text>
              <text x="320" y="208" text-anchor="middle" fill="#C084FC" font-size="10">Log Processing</text>
            </g>

            {/* Archive VLAN */}
            <g filter="url(#nodeShadow3)">
              <rect x="420" y="150" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" stroke-width="2"/>
              <text x="490" y="175" text-anchor="middle" fill="#9333EA" font-size="24">🗂️</text>
              <text x="490" y="195" text-anchor="middle" fill="#A855F7" font-size="13" font-weight="600">Archive VLAN</text>
              <text x="490" y="208" text-anchor="middle" fill="#C084FC" font-size="10">Long-term Storage</text>
            </g>

            {/* WORM Storage Database (Cylinder) */}
            <g filter="url(#nodeShadow3)">
              <ellipse cx="150" cy="250" rx="50" ry="18" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
              <rect x="100" y="250" width="100" height="40" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2"/>
              <ellipse cx="150" cy="290" rx="50" ry="18" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
              <text x="150" y="275" text-anchor="middle" fill="#10B981" font-size="20">🔒</text>
              <text x="150" y="315" text-anchor="middle" fill="#34D399" font-size="12" font-weight="600">WORM Storage</text>
              <text x="150" y="330" text-anchor="middle" fill="#6EE7B7" font-size="10">Immutable Records</text>
            </g>

            {/* Data Lake Cloud */}
            <g filter="url(#nodeShadow3)">
              <ellipse cx="450" cy="270" rx="90" ry="55" fill="rgba(59, 130, 246, 0.12)" stroke="#3B82F6" stroke-width="3" class="animated-node"/>
              <text x="450" y="255" text-anchor="middle" fill="#3B82F6" font-size="28" class="animated-icon-pulse">☁️</text>
              <text x="450" y="285" text-anchor="middle" fill="#60A5FA" font-size="14" font-weight="600">Analytics Data Lake</text>
              <text x="450" y="300" text-anchor="middle" fill="#93C5FD" font-size="11">Big Data Processing</text>
            </g>

            {/* Audit Engine */}
            <g filter="url(#nodeShadow3)">
              <rect x="250" y="320" width="140" height="40" rx="20" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" stroke-width="2"/>
              <text x="320" y="345" text-anchor="middle" fill="#F59E0B" font-size="20">🔄</text>
              <text x="380" y="345" text-anchor="middle" fill="#FBBF24" font-size="12" font-weight="600">Audit Engine</text>
            </g>

            {/* Data Flow Connections */}
            <path d="M300 120 Q200 135 150 150" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#complianceFlow)" opacity="0.8" class="animated-connection"/>
            <path d="M300 120 L320 150" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#complianceFlow)" opacity="0.8" class="animated-connection"/>
            <path d="M300 120 Q400 135 490 150" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#complianceFlow)" opacity="0.8" class="animated-connection"/>

            <path d="M150 210 L150 232" stroke="#10B981" stroke-width="3" fill="none" marker-end="url(#complianceFlow)" opacity="0.8"/>
            <path d="M490 210 Q470 230 450 240" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#complianceFlow)" opacity="0.8"/>
            <path d="M320 210 L320 320" stroke="#F59E0B" stroke-width="3" fill="none" marker-end="url(#complianceFlow)" opacity="0.8"/>

            {/* Connection Labels */}
            <text x="225" y="135" fill="#60A5FA" font-size="10" font-weight="500">Compliance Data</text>
            <text x="325" y="135" fill="#60A5FA" font-size="10" font-weight="500">Audit Logs</text>
            <text x="395" y="135" fill="#60A5FA" font-size="10" font-weight="500">Archive Data</text>
          </svg>
        `;
        title = 'Segmented DMZ + Data Lake Overlay';
        description = 'Compliance-focused data segregation with audit trail';
        break;

      case 'itil-itsm':
        svgContent = `
          <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="nodeShadow4" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2"/>
              </filter>
              <marker id="zeroTrustFlow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                <path d="M0,0 L0,8 L10,4 z" fill="#EF4444"/>
              </marker>
              <marker id="bastionFlow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                <path d="M0,0 L0,8 L10,4 z" fill="#F59E0B"/>
              </marker>
              <radialGradient id="serviceDeskGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)"/>
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)"/>
              </radialGradient>
            </defs>

            {/* Zero Trust Network Access Gateway */}
            <g filter="url(#nodeShadow4)">
              <rect x="220" y="30" width="160" height="45" rx="20" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" stroke-width="3" class="animated-status"/>
              <text x="300" y="55" text-anchor="middle" fill="#EF4444" font-size="24" class="animated-icon-pulse">🛡️</text>
              <text x="300" y="75" text-anchor="middle" fill="#F87171" font-size="14" font-weight="600">ZTNA Gateway</text>
            </g>

            {/* ITIL Service Desk Cluster - Primary */}
            <g filter="url(#nodeShadow4)">
              <rect x="180" y="100" width="240" height="80" rx="20" fill="url(#serviceDeskGradient)" stroke="#3B82F6" stroke-width="3" class="animated-node"/>
              <text x="300" y="125" text-anchor="middle" fill="#3B82F6" font-size="24" class="animated-icon">👤</text>
              <text x="300" y="150" text-anchor="middle" fill="#3B82F6" font-size="24" class="animated-icon-pulse">🔄</text>
              <text x="300" y="175" text-anchor="middle" fill="#60A5FA" font-size="14" font-weight="600">ITIL Service Desk</text>
            </g>

            {/* Bastion Jump Hosts */}
            <g filter="url(#nodeShadow4)">
              <rect x="80" y="210" width="120" height="40" rx="20" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" stroke-width="2"/>
              <text x="140" y="235" text-anchor="middle" fill="#F59E0B" font-size="20">🔑</text>
              <text x="170" y="235" text-anchor="middle" fill="#FBBF24" font-size="12" font-weight="600">Bastion</text>
              <text x="140" y="250" text-anchor="middle" fill="#FCD34D" font-size="10">Jump Host</text>
            </g>

            <g filter="url(#nodeShadow4)">
              <rect x="400" y="210" width="120" height="40" rx="20" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" stroke-width="2"/>
              <text x="460" y="235" text-anchor="middle" fill="#F59E0B" font-size="20">🔑</text>
              <text x="490" y="235" text-anchor="middle" fill="#FBBF24" font-size="12" font-weight="600">Bastion</text>
              <text x="460" y="250" text-anchor="middle" fill="#FCD34D" font-size="10">Jump Host</text>
            </g>

            {/* Microsegmented Networks */}
            <g filter="url(#nodeShadow4)">
              <rect x="60" y="280" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" stroke-width="2"/>
              <text x="130" y="305" text-anchor="middle" fill="#9333EA" font-size="22">👥</text>
              <text x="130" y="325" text-anchor="middle" fill="#A855F7" font-size="13" font-weight="600">Production LAN</text>
              <text x="130" y="338" text-anchor="middle" fill="#C084FC" font-size="10">Critical Systems</text>
            </g>

            <g filter="url(#nodeShadow4)">
              <rect x="230" y="280" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" stroke-width="2"/>
              <text x="300" y="305" text-anchor="middle" fill="#9333EA" font-size="22">🔄</text>
              <text x="300" y="325" text-anchor="middle" fill="#A855F7" font-size="13" font-weight="600">Management</text>
              <text x="300" y="338" text-anchor="middle" fill="#C084FC" font-size="10">Admin Network</text>
            </g>

            <g filter="url(#nodeShadow4)">
              <rect x="400" y="280" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" stroke-width="2"/>
              <text x="470" y="305" text-anchor="middle" fill="#9333EA" font-size="22">👤</text>
              <text x="470" y="325" text-anchor="middle" fill="#A855F7" font-size="13" font-weight="600">Out-of-Band</text>
              <text x="470" y="338" text-anchor="middle" fill="#C084FC" font-size="10">Emergency Access</text>
            </g>

            {/* Zero Trust Control Flow */}
            <path d="M300 75 L300 100" stroke="#EF4444" stroke-width="4" fill="none" marker-end="url(#zeroTrustFlow)" opacity="0.9"/>

            {/* Bastion Access Control */}
            <path d="M140 250 L130 280" stroke="#F59E0B" stroke-width="3" fill="none" marker-end="url(#bastionFlow)" opacity="0.8"/>
            <path d="M460 250 L470 280" stroke="#F59E0B" stroke-width="3" fill="none" marker-end="url(#bastionFlow)" opacity="0.8"/>

            {/* Service Desk to Bastions */}
            <path d="M220 160 Q150 185 140 210" stroke="#3B82F6" stroke-width="2" fill="none" stroke-dasharray="8,4" opacity="0.7"/>
            <path d="M380 160 Q450 185 460 210" stroke="#3B82F6" stroke-width="2" fill="none" stroke-dasharray="8,4" opacity="0.7"/>

            {/* Connection Labels */}
            <text x="320" y="90" fill="#EF4444" font-size="11" font-weight="500">Zero Trust Policy</text>
            <text x="120" y="270" fill="#F59E0B" font-size="10" font-weight="500">Controlled Access</text>
            <text x="440" y="270" fill="#F59E0B" font-size="10" font-weight="500">Controlled Access</text>

            {/* Legend */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="160" height="70" rx="8" fill="rgba(0, 0, 0, 0.7)" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1"/>
              <text x="10" y="15" fill="#FFFFFF" font-size="11" font-weight="600">Access Control</text>
              <line x1="10" y1="25" x2="30" y2="25" stroke="#EF4444" stroke-width="3"/>
              <text x="35" y="28" fill="#F87171" font-size="9">Zero Trust</text>
              <line x1="10" y1="40" x2="30" y2="40" stroke="#F59E0B" stroke-width="2"/>
              <text x="35" y="43" fill="#FBBF24" font-size="9">Bastion Control</text>
              <line x1="10" y1="55" x2="30" y2="55" stroke="#3B82F6" stroke-width="2" stroke-dasharray="4,2"/>
              <text x="35" y="58" fill="#60A5FA" font-size="9">Service Mgmt</text>
            </g>
          </svg>
        `;
        title = 'ITIL Service Management Framework';
        description = 'Comprehensive IT service management with ITIL best practices';
        break;

      case 'operational-playbooks':
        svgContent = `
          <svg viewBox="0 0 500 340" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="nodeShadow5" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2"/>
              </filter>
              <marker id="workflowFlow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                <path d="M0,0 L0,8 L10,4 z" fill="#9333EA"/>
              </marker>
              <marker id="secureAccess" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                <path d="M0,0 L0,8 L10,4 z" fill="#F59E0B"/>
              </marker>
              <radialGradient id="managementGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(245, 158, 11, 0.2)"/>
                <stop offset="100%" stopColor="rgba(245, 158, 11, 0.05)"/>
              </radialGradient>
              <radialGradient id="productionGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.2)"/>
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)"/>
              </radialGradient>
            </defs>

            {/* Management VPC - CI/CD Platform */}
            <g filter="url(#nodeShadow5)">
              <ellipse cx="130" cy="100" rx="80" ry="60" fill="url(#managementGradient)" stroke="#F59E0B" stroke-width="3" class="animated-node"/>
              <text x="130" y="80" text-anchor="middle" fill="#F59E0B" font-size="24" class="animated-icon-pulse">☁️</text>
              <text x="130" y="105" text-anchor="middle" fill="#F59E0B" font-size="20" class="animated-icon">📘</text>
              <text x="130" y="130" text-anchor="middle" fill="#FBBF24" font-size="13" font-weight="600">CI/CD Management</text>
              <text x="130" y="145" text-anchor="middle" fill="#FCD34D" font-size="10">DevOps Orchestration</text>
            </g>

            {/* Bastion Security Gateway */}
            <g filter="url(#nodeShadow5)">
              <rect x="240" y="110" width="60" height="40" rx="20" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" stroke-width="3"/>
              <text x="270" y="135" text-anchor="middle" fill="#EF4444" font-size="20">🔑</text>
              <text x="270" y="155" text-anchor="middle" fill="#F87171" font-size="11" font-weight="600">Gateway</text>
            </g>

            {/* Production VPC */}
            <g filter="url(#nodeShadow5)">
              <ellipse cx="370" cy="100" rx="80" ry="60" fill="url(#productionGradient)" stroke="#10B981" stroke-width="3" class="animated-node"/>
              <text x="370" y="80" text-anchor="middle" fill="#10B981" font-size="24" class="animated-icon-pulse">☁️</text>
              <text x="370" y="105" text-anchor="middle" fill="#10B981" font-size="20" class="animated-icon">🔄</text>
              <text x="370" y="130" text-anchor="middle" fill="#34D399" font-size="13" font-weight="600">Production Cluster</text>
              <text x="370" y="145" text-anchor="middle" fill="#6EE7B7" font-size="10">Live Workloads</text>
            </g>

            {/* Automated Workflow Controllers */}
            <g filter="url(#nodeShadow5)">
              <rect x="150" y="210" width="200" height="60" rx="20" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" stroke-width="2"/>
              <text x="200" y="235" text-anchor="middle" fill="#9333EA" font-size="20">🔄</text>
              <text x="250" y="235" text-anchor="middle" fill="#9333EA" font-size="20">📖</text>
              <text x="300" y="235" text-anchor="middle" fill="#9333EA" font-size="20">🔄</text>
              <text x="250" y="255" text-anchor="middle" fill="#A855F7" font-size="13" font-weight="600">Workflow Orchestration</text>
              <text x="250" y="270" text-anchor="middle" fill="#C084FC" font-size="10">Automated Playbooks</text>
            </g>

            {/* Role-based Access Control */}
            <path d="M210 100 Q225 105 240 125" stroke="#F59E0B" stroke-width="3" stroke-dasharray="8,4" fill="none" marker-end="url(#secureAccess)" opacity="0.9" class="animated-high-traffic"/>
            <path d="M300 125 Q335 115 340 100" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" fill="none" marker-end="url(#secureAccess)" opacity="0.9" class="animated-high-traffic"/>
            <path d="M270 150 L250 210" stroke="#9333EA" stroke-width="3" fill="none" marker-end="url(#workflowFlow)" opacity="0.8" class="animated-connection"/>

            {/* Policy Management */}
            <g filter="url(#nodeShadow5)">
              <rect x="40" y="290" width="120" height="30" rx="15" fill="rgba(148, 163, 184, 0.12)" stroke="#64748B" stroke-width="2"/>
              <text x="70" y="310" text-anchor="middle" fill="#64748B" font-size="16">🛡️</text>
              <text x="130" y="310" text-anchor="middle" fill="#94A3B8" font-size="11" font-weight="600">Policy Engine</text>
            </g>

            {/* Monitoring & Logging */}
            <g filter="url(#nodeShadow5)">
              <rect x="340" y="290" width="120" height="30" rx="15" fill="rgba(148, 163, 184, 0.12)" stroke="#64748B" stroke-width="2"/>
              <text x="370" y="310" text-anchor="middle" fill="#64748B" font-size="16">📖</text>
              <text x="430" y="310" text-anchor="middle" fill="#94A3B8" font-size="11" font-weight="600">Audit Logs</text>
            </g>

            {/* Connection Labels */}
            <text x="210" y="95" fill="#F59E0B" font-size="10" font-weight="500">Secure CI/CD</text>
            <text x="320" y="95" fill="#10B981" font-size="10" font-weight="500">Deploy</text>
            <text x="275" y="185" fill="#9333EA" font-size="10" font-weight="500">Orchestrate</text>

            {/* Legend */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="150" height="55" rx="8" fill="rgba(0, 0, 0, 0.7)" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1"/>
              <text x="10" y="15" fill="#FFFFFF" font-size="11" font-weight="600">Access Control</text>
              <line x1="10" y1="25" x2="30" y2="25" stroke="#F59E0B" stroke-width="3" stroke-dasharray="4,2"/>
              <text x="35" y="28" fill="#FBBF24" font-size="9">Secure</text>
              <line x1="10" y1="40" x2="30" y2="40" stroke="#9333EA" stroke-width="2"/>
              <text x="35" y="43" fill="#A855F7" font-size="9">Workflow</text>
            </g>
          </svg>
        `;
        title = 'Bastioned Workflow Cluster';
        description = 'Secure CI/CD with role-based network access control';
        break;

      case 'enterprise-recovery':
        svgContent = `
          <svg viewBox="0 0 500 340" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="nodeShadow6" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2"/>
              </filter>
              <marker id="replicationFlow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                <path d="M0,0 L0,8 L10,4 z" fill="#9333EA"/>
              </marker>
              <marker id="failoverFlow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                <path d="M0,0 L0,8 L10,4 z" fill="#F59E0B"/>
              </marker>
              <linearGradient id="activeSiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.2)"/>
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)"/>
              </linearGradient>
              <linearGradient id="drSiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0.15)"/>
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0.03)"/>
              </linearGradient>
            </defs>

            {/* Active Primary Site */}
            <g filter="url(#nodeShadow6)">
              <rect x="50" y="60" width="140" height="120" rx="20" fill="url(#activeSiteGradient)" stroke="#10B981" stroke-width="3" class="animated-node"/>
              <text x="120" y="90" text-anchor="middle" fill="#10B981" font-size="24" class="animated-icon-pulse">🔄</text>
              <text x="120" y="120" text-anchor="middle" fill="#10B981" font-size="20" class="animated-icon">👥</text>
              <text x="120" y="145" text-anchor="middle" fill="#34D399" font-size="14" font-weight="600">Primary Site</text>
              <text x="120" y="165" text-anchor="middle" fill="#6EE7B7" font-size="11">Active Production</text>
            </g>

            {/* Disaster Recovery Site */}
            <g filter="url(#nodeShadow6)">
              <rect x="310" y="60" width="140" height="120" rx="20" fill="url(#drSiteGradient)" stroke="#EF4444" stroke-width="3" stroke-dasharray="12,6" class="animated-status"/>
              <text x="380" y="90" text-anchor="middle" fill="rgba(239, 68, 68, 0.8)" font-size="24" class="animated-icon">🔄</text>
              <text x="380" y="120" text-anchor="middle" fill="rgba(239, 68, 68, 0.8)" font-size="20" class="animated-icon">👥</text>
              <text x="380" y="145" text-anchor="middle" fill="rgba(248, 113, 113, 0.9)" font-size="14" font-weight="600">DR Site</text>
              <text x="380" y="165" text-anchor="middle" fill="rgba(252, 165, 165, 0.8)" font-size="11">Passive Standby</text>
            </g>

            {/* Encrypted SD-WAN Tunnel */}
            <g filter="url(#nodeShadow6)">
              <path d="M190 120 Q250 80 310 120" stroke="#F59E0B" stroke-width="5" stroke-dasharray="12,6" fill="none" opacity="0.9" class="animated-high-traffic"/>
              <ellipse cx="250" cy="95" rx="25" ry="15" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="2" class="animated-status"/>
              <text x="250" y="100" text-anchor="middle" fill="#F59E0B" font-size="16" class="animated-icon-pulse">🔒</text>
              <text x="250" y="50" text-anchor="middle" fill="#FBBF24" font-size="12" font-weight="600">Encrypted SD-WAN</text>
              <text x="250" y="65" text-anchor="middle" fill="#FCD34D" font-size="10">Multi-Protocol Link</text>
            </g>

            {/* Asynchronous Replication Layer */}
            <g filter="url(#nodeShadow6)">
              <rect x="150" y="210" width="200" height="50" rx="25" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" stroke-width="2"/>
              <text x="190" y="235" text-anchor="middle" fill="#9333EA" font-size="20">🔄</text>
              <text x="250" y="235" text-anchor="middle" fill="#9333EA" font-size="20">📑</text>
              <text x="310" y="235" text-anchor="middle" fill="#9333EA" font-size="20">🔄</text>
              <text x="250" y="255" text-anchor="middle" fill="#A855F7" font-size="13" font-weight="600">Async Replication VLAN</text>
            </g>

            {/* Automated Failover Orchestrator */}
            <g filter="url(#nodeShadow6)">
              <ellipse cx="250" cy="300" rx="50" ry="30" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" stroke-width="3"/>
              <text x="250" y="290" text-anchor="middle" fill="#F59E0B" font-size="20">🛠️</text>
              <text x="250" y="310" text-anchor="middle" fill="#F59E0B" font-size="20">🔄</text>
              <text x="250" y="330" text-anchor="middle" fill="#FBBF24" font-size="12" font-weight="600">Failover Orchestrator</text>
            </g>

            {/* Health Monitoring */}
            <g filter="url(#nodeShadow6)">
              <rect x="20" y="250" width="80" height="30" rx="15" fill="rgba(34, 197, 94, 0.12)" stroke="#10B981" stroke-width="2"/>
              <text x="60" y="270" text-anchor="middle" fill="#10B981" font-size="16">🔄</text>
              <text x="85" y="270" text-anchor="middle" fill="#34D399" font-size="10" font-weight="600">Monitor</text>
            </g>

            <g filter="url(#nodeShadow6)">
              <rect x="400" y="250" width="80" height="30" rx="15" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" stroke-width="2"/>
              <text x="440" y="270" text-anchor="middle" fill="#EF4444" font-size="16">🔄</text>
              <text x="465" y="270" text-anchor="middle" fill="#F87171" font-size="10" font-weight="600">Standby</text>
            </g>

            {/* Data Replication Flows */}
            <path d="M120 180 Q150 195 170 210" stroke="#9333EA" stroke-width="3" fill="none" marker-end="url(#replicationFlow)" opacity="0.8" class="animated-connection"/>
            <path d="M380 180 Q350 195 330 210" stroke="#9333EA" stroke-width="3" fill="none" marker-end="url(#replicationFlow)" opacity="0.8" class="animated-connection"/>

            {/* Orchestrator Control */}
            <path d="M250 260 L250 270" stroke="#F59E0B" stroke-width="3" fill="none" marker-end="url(#failoverFlow)" opacity="0.8"/>

            {/* Health Check Connections */}
            <path d="M100 250 Q175 235 200 210" stroke="#10B981" stroke-width="2" fill="none" stroke-dasharray="6,3" opacity="0.6"/>
            <path d="M400 250 Q325 235 300 210" stroke="#EF4444" stroke-width="2" fill="none" stroke-dasharray="6,3" opacity="0.6"/>

            {/* Connection Labels */}
            <text x="200" y="25" fill="#F59E0B" font-size="11" font-weight="500">Primary Connection</text>
            <text x="135" y="195" fill="#9333EA" font-size="10" font-weight="500">Data Sync</text>
            <text x="345" y="195" fill="#9333EA" font-size="10" font-weight="500">Data Sync</text>

            {/* Legend */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="160" height="70" rx="8" fill="rgba(0, 0, 0, 0.7)" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1"/>
              <text x="10" y="15" fill="#FFFFFF" font-size="11" font-weight="600">Recovery Types</text>
              <line x1="10" y1="25" x2="30" y2="25" stroke="#F59E0B" stroke-width="3" stroke-dasharray="4,2"/>
              <text x="35" y="28" fill="#FBBF24" font-size="9">Encrypted</text>
              <line x1="10" y1="40" x2="30" y2="40" stroke="#9333EA" stroke-width="2"/>
              <text x="35" y="43" fill="#A855F7" font-size="9">Replication</text>
              <line x1="10" y1="55" x2="30" y2="55" stroke="#10B981" stroke-width="2" stroke-dasharray="3,2"/>
              <text x="35" y="58" fill="#34D399" font-size="9">Health Check</text>
            </g>
          </svg>
        `;
        title = 'Multi-Site Active/Passive DR with SD-WAN';
        description = 'Automated failover orchestration with encrypted replication';
        break;

      default:
        return <div className="h-80 bg-slate-900/30 rounded-xl border border-gray-700/50 p-6 flex items-center justify-center">
          <span className="text-gray-400">Topology diagram not available</span>
        </div>;
    }
    return <InteractiveTopology svgContent={svgContent} title={title} description={description} />;
  };

  return renderTopology();
};

const SolutionCard = ({ solution, isActive, onHover }: {
  solution: BusinessSolution,
  isActive: boolean,
  onHover: (id: string | null) => void
}) => {
  const IconComponent = solution.icon;

  return (
    <div
      className="solution-card bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
      onMouseEnter={() => onHover(solution.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
          <IconComponent className="w-8 h-8 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
            {solution.name}
          </h3>
        </div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {solution.description}
      </p>

      <TopologyDiagram solutionId={solution.id} />
    </div>
  );
};

export default function BusinessSolutions() {
  useGSAPInit();
  useGSAPAnimations();
  useGSAPScrollSmoother();

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const generalSolutions: BusinessSolution[] = [
    {
      id: 'custom-saas',
      name: 'Custom SaaS Platforms',
      icon: Cloud,
      description: 'Isolated VPCs per tenant (or namespaces) inside a cloud region, Kubernetes microservices fronted by ingress, service mesh for secure east-west traffic and autoscaling.',
      category: 'general',
      workflow: [
        { id: 'cloud-hub', icon: Cloud, label: 'Cloud Hub', description: 'Central cloud infrastructure setup' },
        { id: 'hr-module', icon: Users, label: 'HR Module', description: 'Human resources management system' },
        { id: 'erp-module', icon: BarChart3, label: 'ERP Module', description: 'Enterprise resource planning' },
        { id: 'crm-module', icon: Users, label: 'CRM Module', description: 'Customer relationship management' }
      ]
    },
    {
      id: 'enterprise-portals',
      name: 'Enterprise Portals',
      icon: Key,
      description: 'Central hub (identity, SSO, API gateway) in a secure cloud region with spokes for branch offices / on-prem apps over VPN/SD-WAN for low-latency access.',
      category: 'general',
      workflow: [
        { id: 'user-login', icon: Users, label: 'User Login', description: 'Employee authentication' },
        { id: 'sso-gateway', icon: Key, label: 'SSO Gateway', description: 'Single sign-on verification' },
        { id: 'app-access', icon: Grid, label: 'App Access', description: 'Access to internal applications' },
        { id: 'dashboard', icon: Monitor, label: 'Dashboard', description: 'Unified workspace view' }
      ]
    },
    {
      id: 'compliance-reporting',
      name: 'Compliance & Reporting Automation',
      icon: FileText,
      description: 'DMZ for ingestion and transformation, separate compliance VLANs with immutable storage (WORM) and an isolated data-lake network overlay for auditing and egress control.',
      category: 'general',
      workflow: [
        { id: 'data-source', icon: Database, label: 'Data Sources', description: 'Multiple data inputs collected' },
        { id: 'automation-engine', icon: Bot, label: 'Automation Engine', description: 'Processing and analysis' },
        { id: 'audit-report', icon: FileText, label: 'Audit Report', description: 'Compliance-ready documentation' },
        { id: 'verification', icon: Shield, label: 'Verification', description: 'Blockchain verification' }
      ]
    },
    {
      id: 'itil-itsm',
      name: 'ITIL-Based ITSM Kits',
      icon: Headphones,
      description: 'Internal service desk systems on a segmented LAN with ZTNA (identity-based microsegmentation), bastion hosts for admin access and out-of-band management network.',
      category: 'general',
      workflow: [
        { id: 'ticket-creation', icon: Ticket, label: 'Ticket Creation', description: 'Support request submitted' },
        { id: 'auto-routing', icon: Bot, label: 'Auto Routing', description: 'Intelligent ticket assignment' },
        { id: 'resolution', icon: CheckCircle, label: 'Resolution', description: 'Issue resolution process' },
        { id: 'dashboard', icon: Monitor, label: 'Dashboard', description: 'Performance monitoring' }
      ]
    },
    {
      id: 'operational-playbooks',
      name: 'Operational Playbooks & SOP Generators',
      icon: BookOpen,
      description: 'Hardened orchestration cluster (CI/CD + automation controllers) in a management VPC, separated from production networks via bastions and role-based network policies.',
      category: 'general',
      workflow: [
        { id: 'sop-templates', icon: BookOpen, label: 'SOP Templates', description: 'Standard procedure templates' },
        { id: 'workflow-design', icon: Settings, label: 'Workflow Design', description: 'Custom workflow creation' },
        { id: 'automation', icon: Bot, label: 'Automation', description: 'Automated execution' },
        { id: 'ops-cycle', icon: Repeat, label: 'Operations Cycle', description: 'Consistent operations loop' }
      ]
    },
    {
      id: 'enterprise-recovery',
      name: 'Enterprise Recovery Kits',
      icon: Wrench,
      description: 'Primary and DR sites connected by encrypted SD-WAN, asynchronous replication over dedicated replication VLANs and automated failover orchestration.',
      category: 'general',
      workflow: [
        { id: 'outage-event', icon: AlertTriangle, label: 'Outage Event', description: 'System failure detected' },
        { id: 'recovery-steps', icon: Wrench, label: 'Recovery Steps', description: 'Automated recovery process' },
        { id: 'restoration', icon: CheckCircle, label: 'Restoration', description: 'System restored to normal' },
        { id: 'monitoring', icon: Eye, label: 'Monitoring', description: 'Continuous health monitoring' }
      ]
    }
  ];

  const nicheSolutions: BusinessSolution[] = [
    {
      id: 'defi-launch',
      name: 'Secure DeFi Launch Pack',
      icon: Rocket,
      description: 'Complete decentralized finance platform with staking pools, liquidity management, and security audits.',
      category: 'niche',
      workflow: [
        { id: 'token-creation', icon: Rocket, label: 'Token Creation', description: 'Smart contract deployment' },
        { id: 'staking-pool', icon: Database, label: 'Staking Pool', description: 'Liquidity pool setup' },
        { id: 'security-audit', icon: Shield, label: 'Security Audit', description: 'Smart contract verification' },
        { id: 'live-launch', icon: TrendingUp, label: 'Live Launch', description: 'Platform goes live' }
      ]
    },
    {
      id: 'nft-marketplace',
      name: 'NFT Marketplaces & Ticketing Systems',
      icon: Ticket,
      description: 'Blockchain-based NFT trading platform with integrated event ticketing and verification systems.',
      category: 'niche',
      workflow: [
        { id: 'minting', icon: Cpu, label: 'Minting', description: 'NFT creation process' },
        { id: 'trading', icon: TrendingUp, label: 'Trading', description: 'Marketplace transactions' },
        { id: 'verification', icon: Shield, label: 'Verification', description: 'Authenticity confirmation' },
        { id: 'redemption', icon: Ticket, label: 'Redemption', description: 'Ticket/asset redemption' }
      ]
    },
    {
      id: 'quant-trading',
      name: 'Quantitative Trading Platforms',
      icon: TrendingUp,
      description: 'AI-powered algorithmic trading system with real-time market analysis and automated execution.',
      category: 'niche',
      workflow: [
        { id: 'market-data', icon: BarChart3, label: 'Market Data', description: 'Real-time market feeds' },
        { id: 'ai-analysis', icon: Bot, label: 'AI Analysis', description: 'Algorithm processing' },
        { id: 'strategy-execution', icon: Target, label: 'Strategy Execution', description: 'Trade execution' },
        { id: 'performance', icon: TrendingUp, label: 'Performance', description: 'Results monitoring' }
      ]
    },
    {
      id: 'fraud-detection',
      name: 'Fraud & Scam Detection Dashboards',
      icon: Search,
      description: 'Advanced transaction monitoring with real-time anomaly detection and automated alert systems.',
      category: 'niche',
      workflow: [
        { id: 'transactions', icon: Database, label: 'Transactions', description: 'Transaction monitoring' },
        { id: 'anomaly-detection', icon: Search, label: 'Anomaly Detection', description: 'Pattern analysis' },
        { id: 'risk-scoring', icon: AlertTriangle, label: 'Risk Scoring', description: 'Threat assessment' },
        { id: 'alerts', icon: Bell, label: 'Alerts', description: 'Automated notifications' }
      ]
    },
    {
      id: 'rug-pull-detection',
      name: 'AI-Powered Rug Pull Detection',
      icon: AlertTriangle,
      description: 'Smart contract monitoring system that predicts and alerts investors about potential rug pull scams.',
      category: 'niche',
      workflow: [
        { id: 'contract-monitoring', icon: Eye, label: 'Contract Monitoring', description: 'Smart contract analysis' },
        { id: 'rug-predictor', icon: Bot, label: 'Rug Predictor', description: 'AI risk assessment' },
        { id: 'risk-analysis', icon: AlertTriangle, label: 'Risk Analysis', description: 'Threat evaluation' },
        { id: 'investor-alert', icon: Bell, label: 'Investor Alert', description: 'Warning notifications' }
      ]
    },
    {
      id: 'dao-governance',
      name: 'DAO Governance Platforms',
      icon: Building,
      description: 'Decentralized governance system with token-based voting and transparent decision-making processes.',
      category: 'niche',
      workflow: [
        { id: 'token-holders', icon: Users, label: 'Token Holders', description: 'Community members' },
        { id: 'proposal-creation', icon: FileText, label: 'Proposal Creation', description: 'Governance proposals' },
        { id: 'on-chain-voting', icon: CheckCircle, label: 'On-Chain Voting', description: 'Blockchain voting' },
        { id: 'governance-decision', icon: Building, label: 'Governance Decision', description: 'Final implementation' }
      ]
    }
  ];

  const specializedSolutions: BusinessSolution[] = [
    {
      id: 'pentest-toolkits',
      name: 'Pen-Test Toolkits & Scripts',
      icon: Shield,
      description: 'Comprehensive penetration testing suite with automated vulnerability scanning and reporting.',
      category: 'specialized',
      workflow: [
        { id: 'target-scan', icon: Target, label: 'Target Scan', description: 'System reconnaissance' },
        { id: 'vulnerability-test', icon: Search, label: 'Vulnerability Test', description: 'Security testing' },
        { id: 'exploit-analysis', icon: AlertTriangle, label: 'Exploit Analysis', description: 'Risk assessment' },
        { id: 'security-report', icon: FileText, label: 'Security Report', description: 'Detailed findings' }
      ]
    },
    {
      id: 'soc-automation',
      name: 'SOC Automation Starter',
      icon: Eye,
      description: 'Security Operations Center automation with AI-driven threat detection and incident response.',
      category: 'specialized',
      workflow: [
        { id: 'monitoring', icon: Eye, label: 'Monitoring', description: '24/7 security monitoring' },
        { id: 'threat-detection', icon: Search, label: 'Threat Detection', description: 'AI threat analysis' },
        { id: 'incident-response', icon: AlertTriangle, label: 'Incident Response', description: 'Automated response' },
        { id: 'security-dashboard', icon: Monitor, label: 'Security Dashboard', description: 'Centralized view' }
      ]
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI-Powered Cybersecurity Platforms',
      icon: Bot,
      description: 'Machine learning-based security platform with predictive threat analysis and automated defense.',
      category: 'specialized',
      workflow: [
        { id: 'data-collection', icon: Database, label: 'Data Collection', description: 'Security data ingestion' },
        { id: 'ai-analysis', icon: Bot, label: 'AI Analysis', description: 'Machine learning processing' },
        { id: 'threat-prediction', icon: Target, label: 'Threat Prediction', description: 'Predictive modeling' },
        { id: 'auto-defense', icon: Shield, label: 'Auto Defense', description: 'Automated protection' }
      ]
    },
    {
      id: 'decentralized-soc',
      name: 'Decentralized SOC (dSOC)',
      icon: Globe,
      description: 'Blockchain-based distributed security operations with community-driven threat intelligence.',
      category: 'specialized',
      workflow: [
        { id: 'distributed-nodes', icon: Globe, label: 'Distributed Nodes', description: 'Network of security nodes' },
        {id: 'threat-sharing', icon: Share, label: 'Threat Sharing', description: 'Intelligence sharing' },
        { id: 'consensus-analysis', icon: CheckCircle, label: 'Consensus Analysis', description: 'Community verification' },
        { id: 'blockchain-security', icon: Shield, label: 'Blockchain Security', description: 'Decentralized protection' }
      ]
    },
    {
      id: 'ai-threat-hunting',
      name: 'AI Threat Hunting System',
      icon: Target,
      description: 'Proactive threat hunting platform using AI to identify advanced persistent threats and zero-day attacks.',
      category: 'specialized',
      workflow: [
        { id: 'data-ingestion', icon: Database, label: 'Data Ingestion', description: 'Multi-source data collection' },
        { id: 'pattern-analysis', icon: Search, label: 'Pattern Analysis', description: 'Behavioral analysis' },
        { id: 'threat-hunting', icon: Target, label: 'Threat Hunting', description: 'Proactive hunting' },
        { id: 'threat-neutralization', icon: Shield, label: 'Threat Neutralization', description: 'Threat elimination' }
      ]
    },
    {
      id: 'tokenomics-simulator',
      name: 'Tokenomics Simulator',
      icon: Calculator,
      description: 'Economic modeling platform for cryptocurrency projects with supply/demand analysis and price prediction.',
      category: 'specialized',
      workflow: [
        { id: 'economic-model', icon: Calculator, label: 'Economic Model', description: 'Token economics design' },
        { id: 'simulation-engine', icon: Bot, label: 'Simulation Engine', description: 'Market simulation' },
        { id: 'scenario-testing', icon: TrendingUp, label: 'Scenario Testing', description: 'Various market conditions' },
        { id: 'optimization', icon: Target, label: 'Optimization', description: 'Parameter optimization' }
      ]
    },
    {
      id: 'web3-ecommerce',
      name: 'Web3 E-Commerce Platform',
      icon: ShoppingCart,
      description: 'Decentralized e-commerce platform with cryptocurrency payments and blockchain-based inventory management.',
      category: 'specialized',
      workflow: [
        { id: 'product-listing', icon: ShoppingCart, label: 'Product Listing', description: 'Blockchain-based catalog' },
        { id: 'crypto-payment', icon: Cpu, label: 'Crypto Payment', description: 'Cryptocurrency transactions' },
        { id: 'smart-contract', icon: Shield, label: 'Smart Contract', description: 'Automated fulfillment' },
        { id: 'delivery-tracking', icon: Target, label: 'Delivery Tracking', description: 'Decentralized tracking' }
      ]
    },
    {
      id: 'compliance-generators',
      name: 'Compliance & Reporting Generators',
      icon: Folder,
      description: 'Automated compliance document generation with PDF/DOC export and regulatory reporting capabilities.',
      category: 'specialized',
      workflow: [
        { id: 'data-collection', icon: Database, label: 'Data Collection', description: 'Compliance data gathering' },
        { id: 'processing-engine', icon: Settings, label: 'Processing Engine', description: 'Document generation' },
        { id: 'report-creation', icon: FileText, label: 'Report Creation', description: 'PDF/DOC generation' },
        { id: 'regulatory-submission', icon: CheckCircle, label: 'Regulatory Submission', description: 'Automated filing' }
      ]
    },
    {
      id: 'cloud-dr-hardening',
      name: 'Cloud DR & Hardening',
      icon: CloudSnow,
      description: 'Cloud disaster recovery with automated hardening protocols and backup management systems.',
      category: 'specialized',
      workflow: [
        { id: 'backup-automation', icon: HardDrive, label: 'Backup Automation', description: 'Automated cloud backups' },
        { id: 'hardening-protocols', icon: Shield, label: 'Hardening Protocols', description: 'Security hardening' },
        { id: 'disaster-detection', icon: AlertTriangle, label: 'Disaster Detection', description: 'Failure monitoring' },
        { id: 'recovery-execution', icon: ArrowRight, label: 'Recovery Execution', description: 'Automated restoration' }
      ]
    },
    {
      id: 'iot-telemetry',
      name: 'IoT Telemetry Stack',
      icon: Antenna,
      description: 'Complete IoT data collection and analysis platform with real-time telemetry and edge processing.',
      category: 'specialized',
      workflow: [
        { id: 'sensor-data', icon: Antenna, label: 'Sensor Data', description: 'IoT device collection' },
        { id: 'edge-processing', icon: Cpu, label: 'Edge Processing', description: 'Local data processing' },
        { id: 'telemetry-analysis', icon: BarChart3, label: 'Telemetry Analysis', description: 'Data analysis' },
        { id: 'action-triggers', icon: Bell, label: 'Action Triggers', description: 'Automated responses' }
      ]
    },
    {
      id: 'edge-ai-deployments',
      name: 'Edge AI Deployments',
      icon: Network,
      description: 'Edge computing AI deployment platform with distributed processing and real-time inference.',
      category: 'specialized',
      workflow: [
        { id: 'ai-model', icon: Bot, label: 'AI Model', description: 'Machine learning model' },
        { id: 'edge-deployment', icon: Network, label: 'Edge Deployment', description: 'Distributed deployment' },
        { id: 'local-inference', icon: Cpu, label: 'Local Inference', description: 'Edge processing' },
        { id: 'result-aggregation', icon: Database, label: 'Result Aggregation', description: 'Centralized results' }
      ]
    },
    {
      id: 'security-appliances',
      name: 'Custom Security Appliances',
      icon: Lock,
      description: 'Hardware-based security appliances with custom firewall configurations and intrusion detection.',
      category: 'specialized',
      workflow: [
        { id: 'hardware-setup', icon: Lock, label: 'Hardware Setup', description: 'Security appliance config' },
        { id: 'firewall-rules', icon: Shield, label: 'Firewall Rules', description: 'Custom rule engine' },
        { id: 'intrusion-detection', icon: Search, label: 'Intrusion Detection', description: 'Threat monitoring' },
        { id: 'response-automation', icon: Bot, label: 'Response Automation', description: 'Automated defense' }
      ]
    },
    {
      id: 'ha-storage',
      name: 'High Availability Storage Solutions',
      icon: HardDrive,
      description: 'Enterprise high-availability storage with automatic replication and failover capabilities.',
      category: 'specialized',
      workflow: [
        { id: 'data-ingestion', icon: HardDrive, label: 'Data Ingestion', description: 'Primary storage' },
        { id: 'replication', icon: ArrowLeftRight, label: 'Replication', description: 'Multi-site sync' },
        { id: 'health-monitoring', icon: Eye, label: 'Health Monitoring', description: 'System monitoring' },
        { id: 'failover', icon: CheckCircle, label: 'Failover', description: 'Automatic switching' }
      ]
    },
    {
      id: 'treasury-dashboards',
      name: 'Treasury & Risk Dashboards',
      icon: BarChart3,
      description: 'Financial treasury management with real-time risk assessment and automated portfolio monitoring.',
      category: 'specialized',
      workflow: [
        { id: 'portfolio-data', icon: BarChart3, label: 'Portfolio Data', description: 'Asset data collection' },
        { id: 'risk-analysis', icon: AlertTriangle, label: 'Risk Analysis', description: 'Risk assessment' },
        { id: 'treasury-management', icon: Database, label: 'Treasury Management', description: 'Asset management' },
        { id: 'reporting', icon: FileText, label: 'Reporting', description: 'Financial reports' }
      ]
    },
    {
      id: 'defi-arbitrage',
      name: 'DeFi Yield & Arbitrage Systems',
      icon: TrendingUp,
      description: 'Automated DeFi yield farming and arbitrage platform with cross-chain liquidity optimization.',
      category: 'specialized',
      workflow: [
        { id: 'market-scanning', icon: Search, label: 'Market Scanning', description: 'Opportunity detection' },
        { id: 'arbitrage-execution', icon: ArrowLeftRight, label: 'Arbitrage Execution', description: 'Cross-exchange trading' },
        { id: 'yield-optimization', icon: TrendingUp, label: 'Yield Optimization', description: 'Profit maximization' },
        { id: 'liquidity-management', icon: Database, label: 'Liquidity Management', description: 'Capital allocation' }
      ]
    },
    {
      id: 'training-platforms',
      name: 'Training & Knowledge Platforms',
      icon: GraduationCap,
      description: 'AI-powered learning management system with personalized training paths and skill assessment.',
      category: 'specialized',
      workflow: [
        { id: 'content-creation', icon: GraduationCap, label: 'Content Creation', description: 'Learning material design' },
        { id: 'personalization', icon: Bot, label: 'Personalization', description: 'AI-driven customization' },
        { id: 'skill-assessment', icon: Target, label: 'Skill Assessment', description: 'Progress evaluation' },
        { id: 'certification', icon: CheckCircle, label: 'Certification', description: 'Achievement verification' }
      ]
    }
  ];

  const allSolutions = [...generalSolutions, ...nicheSolutions, ...specializedSolutions];

  return (
    <div id="smooth-wrapper" className="min-h-screen bg-slate-950 flex flex-col relative">
      <Navigation />

      <div id="smooth-content" className="flex-1">
        <main className="pt-20">
          {/* Hero Section */}
          <section className="liquid-section min-h-screen flex items-center relative overflow-hidden pt-20 hero">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-purple-950/40"></div>

            <div className="max-w-7xl mx-auto text-center relative z-10 hero-content">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white slide-in-up">
                Business <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in">
                Interactive workflow diagrams showing how our business solutions transform your operations
              </p>
            </div>
          </section>

          {/* General Business Solutions */}
          <section className="liquid-section px-4 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">General Business Solutions</h2>
                <p className="text-gray-300 text-lg">Enterprise-grade solutions for modern business operations</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {generalSolutions.map((solution) => (
                  <SolutionCard
                    key={solution.id}
                    solution={solution}
                    isActive={activeCard === solution.id}
                    onHover={setActiveCard}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Niche Business Solutions */}
          <section className="liquid-section px-4 py-20 bg-slate-900/20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Niche Business Solutions</h2>
                <p className="text-gray-300 text-lg">Cutting-edge fintech and blockchain solutions</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {nicheSolutions.map((solution) => (
                  <SolutionCard
                    key={solution.id}
                    solution={solution}
                    isActive={activeCard === solution.id}
                    onHover={setActiveCard}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Specialized Solutions */}
          <section className="liquid-section px-4 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Specialized Solutions</h2>
                <p className="text-gray-300 text-lg">Advanced cybersecurity, AI-powered platforms, and enterprise tools</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {specializedSolutions.map((solution) => (
                  <SolutionCard
                    key={solution.id}
                    solution={solution}
                    isActive={activeCard === solution.id}
                    onHover={setActiveCard}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}