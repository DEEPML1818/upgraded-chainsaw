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


import { InteractiveTopology } from '@/components/topology/InteractiveTopology';

// Define ExpandableTopologyDiagram component
const ExpandableTopologyDiagram = ({ solutionId }: { solutionId: string }) => {

  const renderTopology = useMemo(() => {
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
              <linearGradient id="routerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
              </linearGradient>
              <linearGradient id="firewallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
              </linearGradient>
              <linearGradient id="serverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
              </linearGradient>
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

            {/* Network Segments */}

            {/* Internet/External Zone */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#F59E0B" font-size="16" font-weight="bold" class="jump-icon">🌐</text>
            <text x="90" y="45" fill="#FBBF24" font-size="14" font-weight="bold">INTERNET</text>
            <text x="400" y="60" text-anchor="middle" fill="#FCD34D" font-size="12" font-weight="600">External Access Layer - Secure Internet Gateway</text>

            {/* Network performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">STATUS: ACTIVE</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#3B82F6" font-size="8" font-weight="600">LOAD: 68%</text>
            </g>

            {/* Enhanced Gateway Subnet with detailed components */}
            <g class="network-component">
              <rect x="650" y="100" width="130" height="90" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="660" y="120" fill="#34D399" font-size="13" font-weight="bold">GATEWAY SUBNET</text>

              {/* Enhanced Internet Gateway */}
              <g transform="translate(665, 130)" class="animated-network-glow">
                <rect width="45" height="35" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
                <circle cx="22.5" cy="12" r="8" fill="none" stroke="#6EE7B7" stroke-width="1.5" class="animated-router"/>
                <circle cx="22.5" cy="12" r="4" fill="#10B981" opacity="0.8"/>
                <rect x="18" y="20" width="9" height="3" rx="1" fill="#6EE7B7" opacity="0.9"/>
                <rect x="16" y="25" width="13" height="2" rx="1" fill="#34D399" opacity="0.7"/>
                <text x="22.5" y="32" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">IGW</text>
              </g>

              {/* Enhanced WAF */}
              <g transform="translate(720, 130)" class="animated-security-shield">
                <rect width="45" height="35" rx="6" fill="url(#firewallGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
                <path d="M22.5 8 L28 12 L22.5 20 L17 12 Z" fill="none" stroke="#FCA5A5" stroke-width="2" class="animated-security-shield"/>
                <circle cx="22.5" cy="14" r="3" fill="#EF4444" opacity="0.8"/>
                <text x="22.5" y="32" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">WAF</text>
              </g>
            </g>

            {/* Enhanced Private DMZ IN with detailed network security components */}
            <g class="network-component">
              <rect x="20" y="220" width="200" height="120" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="30" y="240" fill="#60A5FA" font-size="13" font-weight="bold">PRIVATE DMZ IN</text>

              {/* Enhanced Network Security Group */}
              <g transform="translate(35, 260)" class="animated-server">
                <rect width="60" height="40" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                <rect x="8" y="8" width="44" height="6" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="8" y="16" width="44" height="4" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="8" y="22" width="44" height="4" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <circle cx="15" cy="32" r="2" fill="#3B82F6" class="animated-status"/>
                <circle cx="25" cy="32" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="35" cy="32" r="2" fill="#F59E0B" class="animated-status"/>
                <text x="30" y="52" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">NSG</text>
              </g>

              {/* Enhanced Network Virtual Appliance */}
              <g transform="translate(105, 260)" class="animated-server">
                <rect width="60" height="40" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
                <rect x="8" y="8" width="20" height="24" rx="3" fill="#34D399" opacity="0.8"/>
                <rect x="32" y="8" width="20" height="24" rx="3" fill="#6EE7B7" opacity="0.6"/>
                <circle cx="18" cy="14" r="1.5" fill="#10B981"/>
                <circle cx="42" cy="14" r="1.5" fill="#10B981"/>
                <path d="M20 20 L40 20" stroke="#10B981" stroke-width="2" marker-end="url(#secureFlow)" class="animated-connection"/>
                <text x="30" y="52" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">NVA</text>
              </g>

              {/* Enhanced Availability Set indicator */}
              <g transform="translate(65, 310)">
                <rect width="60" height="20" rx="6" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4,2"/>
                <circle cx="20" cy="10" r="2" fill="#F59E0B" class="animated-icon-pulse"/>
                <circle cx="30" cy="10" r="2" fill="#F59E0B" class="animated-icon-pulse" style="animation-delay: 0.5s"/>
                <circle cx="40" cy="10" r="2" fill="#F59E0B" class="animated-icon-pulse" style="animation-delay: 1s"/>
                <text x="30" y="28" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="500">Availability Set</text>
              </g>
            </g>

            {/* Public DMZ OUT */}
            <rect x="580" y="220" width="200" height="120" rx="8" fill="rgba(236, 72, 153, 0.1)" stroke="#EC4899" stroke-width="2"/>
            <text x="590" y="240" fill="#F472B6" font-size="12" font-weight="bold">PUBLIC DMZ OUT</text>
            <rect x="595" y="260" width="60" height="40" rx="4" fill="rgba(30, 41, 59, 0.8)" stroke="#EC4899" stroke-width="1" filter="url(#networkShadow)"/>
            <text x="625" y="275" text-anchor="middle" fill="#EC4899" font-size="12" class="jump-icon">🛡️</text>
            <text x="625" y="290" text-anchor="middle" fill="#F9A8D4" font-size="9" font-weight="500">NSG</text>
            <rect x="665" y="260" width="60" height="40" rx="4" fill="rgba(30, 41, 59, 0.8)" stroke="#10B981" stroke-width="1" filter="url(#networkShadow)"/>
            <text x="695" y="275" text-anchor="middle" fill="#10B981" font-size="12" class="jump-icon">🔒</text>
            <text x="695" y="290" text-anchor="middle" fill="#6EE7B7" font-size="9" font-weight="500">NVA</text>
            <rect x="625" y="310" width="60" height="20" rx="4" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="1"/>
            <text x="655" y="323" text-anchor="middle" fill="#FBBF24" font-size="9" font-weight="500">Availability Set</text>

            {/* Enhanced Service Mesh Layer with microservices visualization */}
            <g class="network-component">
              <rect x="240" y="220" width="320" height="120" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="250" y="240" fill="#A78BFA" font-size="13" font-weight="bold">SERVICE MESH LAYER</text>

              {/* Enhanced Microservice Node 1 */}
              <g transform="translate(275, 262)" class="animated-server">
                <ellipse cx="0" cy="0" rx="28" ry="20" fill="url(#serverGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="-12" y="-8" width="24" height="4" rx="2" fill="#A78BFA" opacity="0.9"/>
                <rect x="-12" y="-2" width="24" height="3" rx="1" fill="#C4B5FD" opacity="0.7"/>
                <rect x="-12" y="3" width="24" height="3" rx="1" fill="#DDD6FE" opacity="0.5"/>
                <circle cx="0" cy="10" r="3" fill="#8B5CF6" class="animated-icon-pulse"/>
                <text x="0" y="32" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="600">API-1</text>
              </g>

              {/* Enhanced Auth Service */}
              <g transform="translate(340, 260)" class="animated-server">
                <rect width="80" height="28" rx="14" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="6" width="16" height="16" rx="3" fill="#F59E0B" opacity="0.8"/>
                <circle cx="16" cy="14" r="3" fill="#FBBF24"/>
                <path d="M30 8 L70 8 M30 14 L70 14 M30 20 L70 20" stroke="#F59E0B" stroke-width="1.5" opacity="0.8"/>
                <text x="40" y="40" text-anchor="middle" fill="#FBBF24" font-size="9" font-weight="600">Auth Service</text>
              </g>

              {/* Enhanced Microservice Node 2 */}
              <g transform="translate(475, 262)" class="animated-server">
                <ellipse cx="0" cy="0" rx="28" ry="20" fill="url(#serverGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="-12" y="-8" width="24" height="4" rx="2" fill="#A78BFA" opacity="0.9"/>
                <rect x="-12" y="-2" width="24" height="3" rx="1" fill="#C4B5FD" opacity="0.7"/>
                <rect x="-12" y="3" width="24" height="3" rx="1" fill="#DDD6FE" opacity="0.5"/>
                <circle cx="0" cy="10" r="3" fill="#8B5CF6" class="animated-icon-pulse"/>
                <text x="0" y="32" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="600">API-2</text>
              </g>

              {/* Service Mesh connections */}
              <path d="M303 262 L340 268" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-connection" marker-end="url(#networkFlow)"/>
              <path d="M420 268 L447 262" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-connection" marker-end="url(#networkFlow)"/>

              <text x="400" y="325" text-anchor="middle" fill="#C4B5FD" font-size="11" font-weight="600">Service Mesh Infrastructure</text>
            </g>

            {/* Enhanced Tenant Applications with detailed application containers */}
            <g class="network-component">
              <rect x="580" y="360" width="200" height="80" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="590" y="380" fill="#34D399" font-size="13" font-weight="bold">TENANT APPLICATIONS</text>

              {/* Enhanced Tenant C Application */}
              <g transform="translate(595, 390)" class="animated-server">
                <rect width="50" height="35" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="6" width="34" height="6" rx="3" fill="#10B981" opacity="0.9"/>
                <rect x="8" y="14" width="34" height="4" rx="2" fill="#34D399" opacity="0.7"/>
                <rect x="8" y="20" width="34" height="4" rx="2" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="15" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                <circle cx="25" cy="28" r="1.5" fill="#34D399" class="animated-status"/>
                <circle cx="35" cy="28" r="1.5" fill="#6EE7B7" class="animated-status"/>
                <text x="25" y="48" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Tenant C</text>
              </g>

              {/* Enhanced Tenant A Application */}
              <g transform="translate(655, 390)" class="animated-server">
                <rect width="50" height="35" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="6" width="34" height="6" rx="3" fill="#10B981" opacity="0.9"/>
                <rect x="8" y="14" width="34" height="4" rx="2" fill="#34D399" opacity="0.7"/>
                <rect x="8" y="20" width="34" height="4" rx="2" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="15" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                <circle cx="25" cy="28" r="1.5" fill="#34D399" class="animated-status"/>
                <circle cx="35" cy="28" r="1.5" fill="#6EE7B7" class="animated-status"/>
                <text x="25" y="48" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Tenant A</text>
              </g>

              {/* Enhanced Tenant B Application */}
              <g transform="translate(715, 390)" class="animated-server">
                <rect width="50" height="35" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="6" width="34" height="6" rx="3" fill="#10B981" opacity="0.9"/>
                <rect x="8" y="14" width="34" height="4" rx="2" fill="#34D399" opacity="0.7"/>
                <rect x="8" y="20" width="34" height="4" rx="2" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="15" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                <circle cx="25" cy="28" r="1.5" fill="#34D399" class="animated-status"/>
                <circle cx="35" cy="28" r="1.5" fill="#6EE7B7" class="animated-status"/>
                <text x="25" y="48" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Tenant B</text>
              </g>
            </g>

            {/* Enhanced Data & Storage Layer with detailed database components */}
            <g class="network-component">
              <rect x="20" y="360" width="320" height="80" rx="12" fill="rgba(220, 38, 38, 0.08)" stroke="#DC2626" stroke-width="3" stroke-dasharray="6,3" class="animated-connection"/>
              <text x="30" y="380" fill="#F87171" font-size="13" font-weight="bold">DATA & STORAGE LAYER</text>

              {/* Enhanced PostgreSQL Database */}
              <g transform="translate(35, 390)" class="animated-server">
                <rect width="60" height="35" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="6" width="44" height="8" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="10" y="8" width="40" height="1" fill="#60A5FA"/>
                <rect x="10" y="10" width="40" height="1" fill="#93C5FD" opacity="0.8"/>
                <rect x="10" y="12" width="40" height="1" fill="#BFDBFE" opacity="0.6"/>
                <rect x="8" y="18" width="44" height="6" rx="1" fill="#1E293B" stroke="#3B82F6" stroke-width="0.5"/>
                <circle cx="15" cy="21" r="1" fill="#3B82F6" class="animated-icon-pulse"/>
                <circle cx="25" cy="21" r="1" fill="#10B981" class="animated-icon-pulse"/>
                <circle cx="35" cy="21" r="1" fill="#F59E0B" class="animated-icon-pulse"/>
                <circle cx="45" cy="21" r="1" fill="#EF4444" class="animated-icon-pulse"/>
                <text x="30" y="48" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">PostgreSQL</text>
              </g>

              {/* Enhanced Redis Cache */}
              <g transform="translate(105, 390)" class="animated-server">
                <rect width="60" height="35" rx="6" fill="url(#firewallGradient)" stroke="#DC2626" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="16" height="16" rx="2" fill="#DC2626" opacity="0.8"/>
                <rect x="28" y="8" width="16" height="16" rx="2" fill="#EF4444" opacity="0.6"/>
                <circle cx="16" cy="16" r="2" fill="#FCA5A5" class="animated-status"/>
                <circle cx="36" cy="16" r="2" fill="#F87171" class="animated-status"/>
                <path d="M10 26 L50 26" stroke="#DC2626" stroke-width="1" opacity="0.8"/>
                <text x="30" y="48" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Redis Cache</text>
              </g>

              {/* Enhanced File Storage */}
              <g transform="translate(175, 390)" class="animated-server">
                <rect width="60" height="35" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="12" height="18" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="22" y="8" width="12" height="18" rx="2" fill="#34D399" opacity="0.7"/>
                <rect x="36" y="8" width="12" height="18" rx="2" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="14" cy="12" r="1" fill="#ECFDF5"/>
                <circle cx="28" cy="12" r="1" fill="#ECFDF5"/>
                <circle cx="42" cy="12" r="1" fill="#ECFDF5"/>
                <text x="30" y="48" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">File Storage</text>
              </g>

              {/* Enhanced Message Queues */}
              <g transform="translate(245, 390)" class="animated-server">
                <rect width="80" height="35" rx="6" fill="url(#serverGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="64" height="6" rx="2" fill="#8B5CF6" opacity="0.9"/>
                <rect x="8" y="14" width="64" height="3" rx="1" fill="#A78BFA" opacity="0.7"/>
                <rect x="8" y="19" width="64" height="3" rx="1" fill="#C4B5FD" opacity="0.5"/>
                <rect x="8" y="24" width="64" height="3" rx="1" fill="#DDD6FE" opacity="0.3"/>
                <circle cx="20" cy="29" r="1.5" fill="#8B5CF6" class="animated-data-packet"/>
                <circle cx="40" cy="29" r="1.5" fill="#A78BFA" class="animated-data-packet" style="animation-delay: 0.5s"/>
                <circle cx="60" cy="29" r="1.5" fill="#C4B5FD" class="animated-data-packet" style="animation-delay: 1s"/>
                <text x="40" y="48" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Message Queues</text>
              </g>
            </g>

            {/* Enhanced Network Connections with data flow visualization */}
            <g class="network-connections">
              {/* Internet to Gateway flow */}
              <path d="M715 80 L715 100" stroke="#60A5FA" stroke-width="4" fill="none" marker-end="url(#networkFlow)" class="animated-high-traffic"/>
              <circle cx="715" cy="90" r="3" fill="#60A5FA" class="animated-data-packet"/>

              {/* Gateway to DMZ flows */}
              <path d="M650 145 Q400 180 220 220" stroke="#60A5FA" stroke-width="3" fill="none" stroke-dasharray="12,6" class="animated-secure-connection" marker-end="url(#secureFlow)"/>
              <path d="M720 145 Q680 180 650 220" stroke="#F472B6" stroke-width="3" fill="none" stroke-dasharray="10,5" class="animated-encrypted-connection" marker-end="url(#networkFlow)"/>

              {/* Service mesh connections */}
              <path d="M240 280 L580 280" stroke="#A78BFA" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#networkFlow)"/>
              <circle cx="300" cy="280" r="2" fill="#A78BFA" class="animated-data-packet"/>
              <circle cx="400" cy="280" r="2" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="500" cy="280" r="2" fill="#A78BFA" class="animated-data-packet" style="animation-delay: 2s"/>

              {/* Data layer connections */}
              <path d="M180 360 L400 340" stroke="#F87171" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-connection" marker-end="url(#secureFlow)"/>
              <path d="M400 340 L680 360" stroke="#34D399" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#networkFlow)"/>

              {/* Cross-layer security connections */}
              <path d="M120 300 Q200 320 300 340" stroke="#EF4444" stroke-width="2" fill="none" stroke-dasharray="6,3" class="animated-security-shield" opacity="0.7"/>
              <path d="M680 300 Q600 320 500 340" stroke="#EF4444" stroke-width="2" fill="none" stroke-dasharray="6,3" class="animated-security-shield" opacity="0.7"/>
            </g>

            {/* Enhanced Connection Labels with Professional Styling */}
            <g class="connection-labels">
              <rect x="370" y="190" width="60" height="20" rx="10" fill="rgba(96, 165, 250, 0.2)" stroke="#60A5FA" stroke-width="1"/>
              <text x="400" y="202" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="700">SERVICE</text>
              <rect x="520" y="190" width="60" height="20" rx="10" fill="rgba(244, 114, 182, 0.2)" stroke="#F472B6" stroke-width="1"/>
              <text x="550" y="202" text-anchor="middle" fill="#F472B6" font-size="10" font-weight="700">API</text>
              <rect x="270" y="340" width="60" height="20" rx="10" fill="rgba(248, 113, 113, 0.2)" stroke="#F87171" stroke-width="1"/>
              <text x="300" y="352" text-anchor="middle" fill="#F87171" font-size="10" font-weight="700">DATA</text>
              <rect x="510" y="340" width="60" height="20" rx="10" fill="rgba(52, 211, 153, 0.2)" stroke="#34D399" stroke-width="1"/>
              <text x="540" y="352" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">APPS</text>
            </g>
          </svg>
        `;
        title = 'Multi-Tenant VPC + Service Mesh Network Topology';
        description = 'Isolated tenant environments with microservices orchestration';
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
                <text x="30" y="55" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">4G/5G Router</text>
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
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="networkShadow3" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="serverGlow3" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <marker id="complianceFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#3B82F6" filter="url(#serverGlow3)"/>
              </marker>
              <marker id="auditFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#serverGlow3)"/>
              </marker>
              <marker id="archiveFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#serverGlow3)"/>
              </marker>
              <pattern id="meshPattern3" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#3B82F6" opacity="0.2"/>
              </pattern>
              <linearGradient id="dmzGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(239, 68, 68, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.1)"/>
              </linearGradient>
              <linearGradient id="complianceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(147, 51, 234, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(147, 51, 234, 0.1)"/>
              </linearGradient>
              <radialGradient id="dataLakeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.4)"/>
                <stop offset="70%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.2)"/>
              </radialGradient>
            </defs>

            {/* Enhanced Background with depth */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern3)" opacity="0.4"/>

            {/* Floating data particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#9333EA" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Internet Gateway Zone */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#F59E0B" font-size="16" font-weight="bold" class="jump-icon">🌐</text>
            <text x="90" y="45" fill="#FBBF24" font-size="14" font-weight="bold">EXTERNAL DATA SOURCES</text>
            <text x="400" y="60" text-anchor="middle" fill="#FCD34D" font-size="12" font-weight="600">Regulatory Data Feeds & Compliance Reports</text>

            {/* Network performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">STATUS: ACTIVE</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#3B82F6" font-size="8" font-weight="600">INGESTION: 95%</text>
            </g>

            {/* Enhanced DMZ Security Layer */}
            <g class="network-component">
              <rect x="50" y="100" width="700" height="80" rx="12" fill="url(#dmzGradient3)" stroke="#EF4444" stroke-width="4" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="70" y="125" fill="#F87171" font-size="14" font-weight="bold">DMZ DATA INGESTION LAYER</text>

              {/* Enhanced WAF & Data Validation */}
              <g transform="translate(80, 130)" class="animated-security-shield">
                <rect width="80" height="40" rx="8" fill="url(#dmzGradient3)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow3)"/>
                <path d="M40 8 L45 12 L40 20 L35 12 Z" fill="none" stroke="#FCA5A5" stroke-width="2" class="animated-security-shield"/>
                <circle cx="40" cy="14" r="3" fill="#EF4444" opacity="0.8"/>
                <rect x="8" y="22" width="64" height="3" rx="1" fill="#FCA5A5" opacity="0.9"/>
                <rect x="8" y="27" width="64" height="2" rx="1" fill="#F87171" opacity="0.7"/>
                <text x="40" y="54" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Data Validation</text>
              </g>

              {/* Enhanced Data Transformation Engine */}
              <g transform="translate(180, 130)" class="animated-server">
                <rect width="80" height="40" rx="8" fill="url(#complianceGradient)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow3)"/>
                <rect x="8" y="8" width="64" height="6" rx="3" fill="#9333EA" opacity="0.8"/>
                <rect x="8" y="16" width="64" height="4" rx="2" fill="#A855F7" opacity="0.6"/>
                <rect x="8" y="22" width="64" height="4" rx="2" fill="#C084FC" opacity="0.4"/>
                <circle cx="15" cy="32" r="2" fill="#9333EA" class="animated-status"/>
                <circle cx="30" cy="32" r="2" fill="#A855F7" class="animated-status"/>
                <circle cx="45" cy="32" r="2" fill="#C084FC" class="animated-status"/>
                <circle cx="60" cy="32" r="2" fill="#DDD6FE" class="animated-status"/>
                <text x="40" y="54" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">ETL Engine</text>
              </g>

              {/* Enhanced Load Balancer */}
              <g transform="translate(280, 130)" class="animated-network-glow">
                <rect width="80" height="40" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow3)"/>
                <circle cx="40" cy="15" r="10" fill="none" stroke="#FBBF24" stroke-width="1.5" class="animated-router"/>
                <circle cx="40" cy="15" r="5" fill="#F59E0B" opacity="0.8"/>
                <rect x="35" y="25" width="10" height="3" rx="1" fill="#FBBF24" opacity="0.9"/>
                <rect x="33" y="30" width="14" height="2" rx="1" fill="#FCD34D" opacity="0.7"/>
                <text x="40" y="54" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Load Balancer</text>
              </g>

              {/* Enhanced Data Quality Gateway */}
              <g transform="translate(380, 130)" class="animated-server">
                <rect width="80" height="40" rx="8" fill="url(#dataLakeGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow3)"/>
                <rect x="8" y="8" width="25" height="24" rx="4" fill="#3B82F6" opacity="0.8"/>
                <rect x="37" y="8" width="25" height="24" rx="4" fill="#60A5FA" opacity="0.6"/>
                <circle cx="20" cy="14" r="2" fill="#BFDBFE"/>
                <circle cx="50" cy="14" r="2" fill="#BFDBFE"/>
                <path d="M23 20 L47 20" stroke="#60A5FA" stroke-width="2" marker-end="url(#complianceFlow)" class="animated-connection"/>
                <text x="40" y="54" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Quality Gate</text>
              </g>
            </g>

            {/* Enhanced Compliance VLANs Layer */}
            <g class="network-component">
              <rect x="50" y="200" width="210" height="120" rx="12" fill="rgba(147, 51, 234, 0.08)" stroke="#9333EA" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="60" y="220" fill="#A855F7" font-size="13" font-weight="bold">COMPLIANCE VLANs</text>

              {/* Enhanced PCI Compliance VLAN */}
              <g transform="translate(70, 240)" class="animated-server">
                <rect width="60" height="50" rx="8" fill="url(#complianceGradient)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow3)"/>
                <rect x="8" y="8" width="44" height="8" rx="2" fill="#9333EA" opacity="0.9"/>
                <rect x="8" y="18" width="44" height="6" rx="1" fill="#A855F7" opacity="0.7"/>
                <rect x="8" y="26" width="44" height="6" rx="1" fill="#C084FC" opacity="0.5"/>
                <circle cx="15" cy="38" r="2" fill="#9333EA" class="animated-status"/>
                <circle cx="30" cy="38" r="2" fill="#A855F7" class="animated-status"/>
                <circle cx="45" cy="38" r="2" fill="#C084FC" class="animated-status"/>
                <text x="30" y="64" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">PCI Compliance</text>
              </g>

              {/* Enhanced SOX Audit VLAN */}
              <g transform="translate(140, 240)" class="animated-server">
                <rect width="60" height="50" rx="8" fill="url(#complianceGradient)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow3)"/>
                <rect x="8" y="8" width="44" height="8" rx="2" fill="#9333EA" opacity="0.9"/>
                <rect x="8" y="18" width="44" height="6" rx="1" fill="#A855F7" opacity="0.7"/>
                <rect x="8" y="26" width="44" height="6" rx="1" fill="#C084FC" opacity="0.5"/>
                <circle cx="15" cy="38" r="2" fill="#9333EA" class="animated-status"/>
                <circle cx="30" cy="38" r="2" fill="#A855F7" class="animated-status"/>
                <circle cx="45" cy="38" r="2" fill="#C084FC" class="animated-status"/>
                <text x="30" y="64" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">SOX Audit</text>
              </g>
            </g>

            {/* Enhanced WORM Storage Layer */}
            <g class="network-component">
              <rect x="280" y="200" width="210" height="120" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="290" y="220" fill="#34D399" font-size="13" font-weight="bold">IMMUTABLE STORAGE</text>

              {/* Enhanced WORM Database Cylinder */}
              <g transform="translate(300, 240)" class="animated-server">
                <ellipse cx="30" cy="20" rx="30" ry="12" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <rect x="0" y="20" width="60" height="35" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2"/>
                <ellipse cx="30" cy="55" rx="30" ry="12" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <text x="30" y="40" text-anchor="middle" fill="#10B981" font-size="16" class="animated-icon-pulse">🔒</text>
                <text x="30" y="75" text-anchor="middle" fill="#34D399" font-size="8" font-weight="600">WORM Storage</text>
                <text x="30" y="85" text-anchor="middle" fill="#6EE7B7" font-size="7">Immutable Records</text>
              </g>

              {/* Enhanced Blockchain Verification */}
              <g transform="translate(380, 240)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow3)"/>
                <rect x="8" y="8" width="20" height="20" rx="3" fill="#10B981" opacity="0.8"/>
                <rect x="32" y="8" width="20" height="20" rx="3" fill="#34D399" opacity="0.6"/>
                <rect x="56" y="8" width="16" height="20" rx="3" fill="#6EE7B7" opacity="0.4"/>
                <circle cx="18" cy="14" r="1.5" fill="#ECFDF5"/>
                <circle cx="42" cy="14" r="1.5" fill="#ECFDF5"/>
                <circle cx="64" cy="14" r="1.5" fill="#ECFDF5"/>
                <path d="M20 20 L40 20" stroke="#10B981" stroke-width="1.5" marker-end="url(#auditFlow)" class="animated-connection"/>
                <path d="M44 20 L62 20" stroke="#34D399" stroke-width="1.5" marker-end="url(#auditFlow)" class="animated-connection"/>
                <text x="40" y="64" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Blockchain Audit</text>
              </g>
            </g>

            {/* Enhanced Data Lake Analytics Layer */}
            <g class="network-component">
              <rect x="510" y="200" width="240" height="120" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="520" y="220" fill="#60A5FA" font-size="13" font-weight="bold">ANALYTICS DATA LAKE</text>

              {/* Enhanced Data Lake Cluster */}
              <g transform="translate(530, 240)" class="animated-server">
                <ellipse cx="50" cy="35" rx="45" ry="30" fill="url(#dataLakeGradient)" stroke="#3B82F6" stroke-width="3" filter="url(#serverGlow3)" class="animated-node"/>
                <text x="50" y="25" text-anchor="middle" fill="#3B82F6" font-size="20" class="animated-icon-pulse">☁️</text>
                <text x="50" y="45" text-anchor="middle" fill="#60A5FA" font-size="12" font-weight="600">Big Data</text>
                <text x="50" y="55" text-anchor="middle" fill="#93C5FD" font-size="10">Processing</text>
                <text x="50" y="85" text-anchor="middle" fill="#BFDBFE" font-size="8" font-weight="600">Analytics Engine</text>
              </g>

              {/* Enhanced ML Processing */}
              <g transform="translate(630, 240)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#dataLakeGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow3)"/>
                <rect x="8" y="8" width="64" height="8" rx="4" fill="#3B82F6" opacity="0.9"/>
                <rect x="8" y="16" width="64" height="6" rx="3" fill="#60A5FA" opacity="0.7"/>
                <rect x="8" y="22" width="64" height="6" rx="3" fill="#93C5FD" opacity="0.5"/>
                <circle cx="15" cy="38" r="2" fill="#3B82F6" class="animated-icon-pulse"/>
                <circle cx="30" cy="38" r="2" fill="#60A5FA" class="animated-icon-pulse" style="animation-delay: 0.5s"/>
                <circle cx="45" cy="38" r="2" fill="#93C5FD" class="animated-icon-pulse" style="animation-delay: 1s"/>
                <circle cx="65" cy="38" r="2" fill="#BFDBFE" class="animated-icon-pulse" style="animation-delay: 1.5s"/>
                <text x="40" y="64" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">ML Analytics</text>
              </g>
            </g>

            {/* Enhanced Audit Engine Layer */}
            <g class="network-component">
              <rect x="280" y="340" width="240" height="80" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6,3" class="animated-connection"/>
              <text x="290" y="360" fill="#FBBF24" font-size="13" font-weight="bold">AUDIT & REPORTING ENGINE</text>

              {/* Enhanced Compliance Monitor */}
              <g transform="translate(300, 370)" class="animated-server">
                <rect width="80" height="40" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow3)"/>
                <rect x="8" y="8" width="25" height="20" rx="3" fill="#F59E0B" opacity="0.8"/>
                <rect x="37" y="8" width="35" height="20" rx="3" fill="#FBBF24" opacity="0.6"/>
                <circle cx="20" cy="18" r="2" fill="#FCD34D" class="animated-status"/>
                <path d="M35 18 L65 18" stroke="#F59E0B" stroke-width="2" marker-end="url(#archiveFlow)" class="animated-connection"/>
                <text x="40" y="55" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Compliance Monitor</text>
              </g>

              {/* Enhanced Report Generator */}
              <g transform="translate(400, 370)" class="animated-server">
                <rect width="80" height="40" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow3)"/>
                <rect x="8" y="8" width="64" height="6" rx="3" fill="#F59E0B" opacity="0.9"/>
                <rect x="8" y="16" width="64" height="4" rx="2" fill="#FBBF24" opacity="0.7"/>
                <rect x="8" y="22" width="64" height="4" rx="2" fill="#FCD34D" opacity="0.5"/>
                <circle cx="15" cy="32" r="1.5" fill="#F59E0B" class="animated-data-packet"/>
                <circle cx="30" cy="32" r="1.5" fill="#FBBF24" class="animated-data-packet" style="animation-delay: 0.5s"/>
                <circle cx="45" cy="32" r="1.5" fill="#FCD34D" class="animated-data-packet" style="animation-delay: 1s"/>
                <circle cx="60" cy="32" r="1.5" fill="#FEF3C7" class="animated-data-packet" style="animation-delay: 1.5s"/>
                <text x="40" y="55" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Report Generator</text>
              </g>
            </g>

            {/* Enhanced Network Connections with data flow visualization */}
            <g class="network-connections">
              {/* External to DMZ flow */}
              <path d="M400 80 L400 100" stroke="#F59E0B" stroke-width="4" fill="none" marker-end="url(#complianceFlow)" class="animated-high-traffic"/>
              <circle cx="400" cy="90" r="3" fill="#F59E0B" class="animated-data-packet"/>

              {/* DMZ to VLANs flows */}
              <path d="M120 180 L120 200" stroke="#9333EA" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-secure-connection" marker-end="url(#complianceFlow)"/>
              <path d="M220 180 L220 200" stroke="#9333EA" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-secure-connection" marker-end="url(#complianceFlow)"/>

              {/* DMZ to WORM storage */}
              <path d="M320 180 Q350 190 385 200" stroke="#10B981" stroke-width="3" fill="none" stroke-dasharray="10,5" class="animated-encrypted-connection" marker-end="url(#auditFlow)"/>

              {/* DMZ to Data Lake */}
              <path d="M420 180 Q550 190 630 200" stroke="#3B82F6" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#complianceFlow)"/>

              {/* WORM to Audit Engine */}
              <path d="M385 320 L385 340" stroke="#F59E0B" stroke-width="3" fill="none" marker-end="url(#archiveFlow)" class="animated-connection"/>

              {/* Data Lake to Audit Engine */}
              <path d="M630 320 Q550 330 440 340" stroke="#3B82F6" stroke-width="3" fill="none" stroke-dasharray="6,3" class="animated-connection" marker-end="url(#complianceFlow)"/>

              {/* Data flow particles */}
              <circle cx="385" cy="190" r="2" fill="#10B981" class="animated-data-packet"/>
              <circle cx="550" cy="190" r="2" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="385" cy="330" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0.5s"/>
              <circle cx="490" cy="330" r="2" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 1.5s"/>
            </g>

            {/* Enhanced Connection Labels with professional styling */}
            <g class="connection-labels">
              <rect x="350" y="90" width="100" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="400" y="102" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">EXTERNAL DATA</text>
              <rect x="280" y="190" width="80" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="320" y="202" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">COMPLIANCE</text>
              <rect x="520" y="190" width="80" height="20" rx="10" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="560" y="202" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="700">ANALYTICS</text>
              <rect x="320" y="330" width="80" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="360" y="342" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">AUDIT TRAIL</text>
            </g>
          </svg>
        `;
        title = 'Segmented DMZ + Data Lake Overlay';
        description = 'Compliance-focused data segregation with immutable audit trail';
        break;

      case 'itil-itsm':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="networkShadow4" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="serverGlow4" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <marker id="zeroTrustFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#EF4444" filter="url(#serverGlow4)"/>
              </marker>
              <marker id="bastionFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#serverGlow4)"/>
              </marker>
              <marker id="itilFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#3B82F6" filter="url(#serverGlow4)"/>
              </marker>
              <pattern id="meshPattern4" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#EF4444" opacity="0.2"/>
              </pattern>
              <linearGradient id="ztnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(239, 68, 68, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.1)"/>
              </linearGradient>
              <linearGradient id="serviceDeskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
              </linearGradient>
              <radialGradient id="bastionGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.4)"/>
                <stop offset="70%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(245, 158, 11, 0.2)"/>
              </radialGradient>
              <linearGradient id="microsegmentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(139, 92, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(139, 92, 246, 0.1)"/>
              </linearGradient>
            </defs>

            {/* Enhanced Background with depth */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern4)" opacity="0.4"/>

            {/* Floating data particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#9333EA" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Identity Provider Zone */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(139, 92, 246, 0.1)" stroke="#9333EA" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#9333EA" font-size="16" font-weight="bold" class="jump-icon">🔐</text>
            <text x="90" y="45" fill="#A855F7" font-size="14" font-weight="bold">IDENTITY PROVIDER</text>
            <text x="400" y="60" text-anchor="middle" fill="#C084FC" font-size="12" font-weight="600">Enterprise Active Directory & Identity Management</text>

            {/* Identity performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">STATUS: ACTIVE</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#3B82F6" font-size="8" font-weight="600">SESSIONS: 342</text>
            </g>

            {/* Enhanced Zero Trust Network Access Layer */}
            <g class="network-component">
              <rect x="250" y="100" width="300" height="80" rx="12" fill="url(#ztnaGradient)" stroke="#EF4444" stroke-width="4" stroke-dasharray="12,6" class="animated-security-shield"/>
              <text x="260" y="125" fill="#F87171" font-size="14" font-weight="bold">ZERO TRUST NETWORK ACCESS</text>

              {/* Enhanced Identity Verification */}
              <g transform="translate(270, 130)" class="animated-security-shield">
                <rect width="70" height="40" rx="8" fill="url(#ztnaGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow4)"/>
                <path d="M35 8 L40 12 L35 20 L30 12 Z" fill="none" stroke="#FCA5A5" stroke-width="2" class="animated-security-shield"/>
                <circle cx="35" cy="14" r="3" fill="#EF4444" opacity="0.8"/>
                <rect x="8" y="22" width="54" height="3" rx="1" fill="#FCA5A5" opacity="0.9"/>
                <rect x="8" y="27" width="54" height="2" rx="1" fill="#F87171" opacity="0.7"/>
                <text x="35" y="54" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Identity Check</text>
              </g>

              {/* Enhanced Policy Engine */}
              <g transform="translate(350, 130)" class="animated-server">
                <rect width="70" height="40" rx="8" fill="url(#ztnaGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow4)"/>
                <rect x="8" y="8" width="54" height="6" rx="3" fill="#EF4444" opacity="0.8"/>
                <rect x="8" y="16" width="54" height="4" rx="2" fill="#F87171" opacity="0.6"/>
                <rect x="8" y="22" width="54" height="4" rx="2" fill="#FCA5A5" opacity="0.4"/>
                <circle cx="15" cy="32" r="2" fill="#EF4444" class="animated-status"/>
                <circle cx="25" cy="32" r="2" fill="#F87171" class="animated-status"/>
                <circle cx="35" cy="32" r="2" fill="#FCA5A5" class="animated-status"/>
                <circle cx="45" cy="32" r="2" fill="#FECACA" class="animated-status"/>
                <text x="35" y="54" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Policy Engine</text>
              </g>

              {/* Enhanced Microsegmentation Controller */}
              <g transform="translate(430, 130)" class="animated-server">
                <rect width="70" height="40" rx="8" fill="url(#ztnaGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow4)"/>
                <circle cx="35" cy="18" r="12" fill="none" stroke="#FCA5A5" stroke-width="1.5" class="animated-router"/>
                <circle cx="35" cy="18" r="6" fill="#EF4444" opacity="0.8"/>
                <rect x="30" y="28" width="10" height="3" rx="1" fill="#FCA5A5" opacity="0.9"/>
                <rect x="28" y="33" width="14" height="2" rx="1" fill="#F87171" opacity="0.7"/>
                <text x="35" y="54" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Microseg Ctrl</text>
              </g>
            </g>

            {/* Enhanced ITIL Service Desk Cluster */}
            <g class="network-component">
              <rect x="200" y="200" width="400" height="100" rx="12" fill="url(#serviceDeskGradient)" stroke="#3B82F6" stroke-width="4" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="210" y="225" fill="#60A5FA" font-size="14" font-weight="bold">ITIL SERVICE DESK CLUSTER</text>

              {/* Enhanced Incident Management */}
              <g transform="translate(220, 240)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#serviceDeskGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow4)"/>
                <rect x="8" y="8" width="64" height="8" rx="4" fill="#3B82F6" opacity="0.9"/>
                <rect x="8" y="18" width="64" height="6" rx="3" fill="#60A5FA" opacity="0.7"/>
                <rect x="8" y="26" width="64" height="6" rx="3" fill="#93C5FD" opacity="0.5"/>
                <circle cx="15" cy="38" r="2" fill="#3B82F6" class="animated-status"/>
                <circle cx="30" cy="38" r="2" fill="#60A5FA" class="animated-status"/>
                <circle cx="45" cy="38" r="2" fill="#93C5FD" class="animated-status"/>
                <circle cx="60" cy="38" r="2" fill="#BFDBFE" class="animated-status"/>
                <text x="40" y="64" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Incident Mgmt</text>
              </g>

              {/* Enhanced Change Management */}
              <g transform="translate(320, 240)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#serviceDeskGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow4)"/>
                <rect x="8" y="8" width="25" height="30" rx="4" fill="#3B82F6" opacity="0.8"/>
                <rect x="37" y="8" width="25" height="30" rx="4" fill="#60A5FA" opacity="0.6"/>
                <circle cx="20" cy="18" r="2" fill="#BFDBFE"/>
                <circle cx="50" cy="18" r="2" fill="#BFDBFE"/>
                <path d="M23 25 L47 25" stroke="#60A5FA" stroke-width="2" marker-end="url(#itilFlow)" class="animated-connection"/>
                <text x="40" y="64" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Change Mgmt</text>
              </g>

              {/* Enhanced Asset Management */}
              <g transform="translate(420, 240)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#serviceDeskGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow4)"/>
                <rect x="8" y="8" width="20" height="25" rx="3" fill="#3B82F6" opacity="0.8"/>
                <rect x="32" y="8" width="20" height="25" rx="3" fill="#60A5FA" opacity="0.6"/>
                <rect x="56" y="8" width="16" height="25" rx="3" fill="#93C5FD" opacity="0.4"/>
                <circle cx="18" cy="38" r="1.5" fill="#BFDBFE"/>
                <circle cx="42" cy="38" r="1.5" fill="#BFDBFE"/>
                <circle cx="64" cy="38" r="1.5" fill="#BFDBFE"/>
                <text x="40" y="64" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Asset Mgmt</text>
              </g>

              {/* Enhanced Knowledge Base */}
              <g transform="translate(520, 240)" class="animated-server">
                <rect width="60" height="50" rx="8" fill="url(#serviceDeskGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow4)"/>
                <rect x="8" y="8" width="44" height="8" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="8" y="18" width="44" height="6" rx="1" fill="#60A5FA" opacity="0.7"/>
                <rect x="8" y="26" width="44" height="6" rx="1" fill="#93C5FD" opacity="0.5"/>
                <circle cx="15" cy="38" r="1.5" fill="#3B82F6" class="animated-icon-pulse"/>
                <circle cx="30" cy="38" r="1.5" fill="#60A5FA" class="animated-icon-pulse" style="animation-delay: 0.5s"/>
                <circle cx="45" cy="38" r="1.5" fill="#93C5FD" class="animated-icon-pulse" style="animation-delay: 1s"/>
                <text x="30" y="64" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Knowledge</text>
              </g>
            </g>

            {/* Enhanced Bastion Host Layer */}
            <g class="network-component">
              <rect x="50" y="320" width="180" height="80" rx="12" fill="url(#bastionGradient)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="60" y="340" fill="#FBBF24" font-size="13" font-weight="bold">BASTION HOSTS</text>

              {/* Enhanced Primary Bastion */}
              <g transform="translate(70, 350)" class="animated-network-glow">
                <rect width="60" height="40" rx="8" fill="url(#bastionGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow4)"/>
                <circle cx="30" cy="15" r="8" fill="none" stroke="#FBBF24" stroke-width="1.5" class="animated-router"/>
                <circle cx="30" cy="15" r="4" fill="#F59E0B" opacity="0.8"/>
                <rect x="25" y="25" width="10" height="3" rx="1" fill="#FBBF24" opacity="0.9"/>
                <rect x="23" y="30" width="14" height="2" rx="1" fill="#FCD34D" opacity="0.7"/>
                <text x="30" y="55" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Primary</text>
              </g>

              {/* Enhanced Backup Bastion */}
              <g transform="translate(140, 350)" class="animated-server">
                <rect width="60" height="40" rx="8" fill="url(#bastionGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow4)"/>
                <circle cx="30" cy="15" r="8" fill="none" stroke="#FBBF24" stroke-width="1.5" class="animated-router"/>
                <circle cx="30" cy="15" r="4" fill="#F59E0B" opacity="0.6"/>
                <rect x="25" y="25" width="10" height="3" rx="1" fill="#FBBF24" opacity="0.7"/>
                <rect x="23" y="30" width="14" height="2" rx="1" fill="#FCD34D" opacity="0.5"/>
                <text x="30" y="55" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Backup</text>
              </g>
            </g>

            {/* Enhanced Microsegmented Network Zones */}
            <g class="network-component">
              <rect x="250" y="320" width="500" height="110" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#9333EA" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="260" y="340" fill="#A855F7" font-size="13" font-weight="bold">MICROSEGMENTED NETWORKS</text>

              {/* Enhanced Production Systems */}
              <g transform="translate(270, 350)" class="animated-server">
                <rect width="100" height="60" rx="8" fill="url(#microsegmentGradient)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow4)"/>
                <rect x="8" y="8" width="84" height="10" rx="5" fill="#9333EA" opacity="0.9"/>
                <rect x="8" y="20" width="84" height="8" rx="4" fill="#A855F7" opacity="0.7"/>
                <rect x="8" y="30" width="84" height="8" rx="4" fill="#C084FC" opacity="0.5"/>
                <circle cx="20" cy="45" r="2" fill="#9333EA" class="animated-status"/>
                <circle cx="35" cy="45" r="2" fill="#A855F7" class="animated-status"/>
                <circle cx="50" cy="45" r="2" fill="#C084FC" class="animated-status"/>
                <circle cx="65" cy="45" r="2" fill="#DDD6FE" class="animated-status"/>
                <circle cx="80" cy="45" r="2" fill="#F3F4F6" class="animated-status"/>
                <text x="50" y="75" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">Production Systems</text>
              </g>

              {/* Enhanced Management Network */}
              <g transform="translate(390, 350)" class="animated-server">
                <rect width="100" height="60" rx="8" fill="url(#microsegmentGradient)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow4)"/>
                <rect x="8" y="8" width="35" height="40" rx="5" fill="#9333EA" opacity="0.8"/>
                <rect x="47" y="8" width="35" height="40" rx="5" fill="#A855F7" opacity="0.6"/>
                <circle cx="25" cy="20" r="3" fill="#C084FC"/>
                <circle cx="65" cy="20" r="3" fill="#C084FC"/>
                <path d="M28 35 L62 35" stroke="#A855F7" stroke-width="2" marker-end="url(#itilFlow)" class="animated-connection"/>
                <text x="50" y="75" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">Management Net</text>
              </g>

              {/* Enhanced OOB Management */}
              <g transform="translate(510, 350)" class="animated-server">
                <rect width="100" height="60" rx="8" fill="url(#microsegmentGradient)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow4)"/>
                <rect x="8" y="8" width="25" height="35" rx="4" fill="#9333EA" opacity="0.8"/>
                <rect x="37" y="8" width="25" height="35" rx="4" fill="#A855F7" opacity="0.6"/>
                <rect x="66" y="8" width="25" height="35" rx="4" fill="#C084FC" opacity="0.4"/>
                <circle cx="18" cy="48" r="1.5" fill="#DDD6FE"/>
                <circle cx="42" cy="48" r="1.5" fill="#DDD6FE"/>
                <circle cx="64" cy="48" r="1.5" fill="#DDD6FE"/>
                <text x="50" y="75" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">Out-of-Band Mgmt</text>
              </g>
            </g>

            {/* Enhanced Network Connections with data flow visualization */}
            <g class="network-connections">
              {/* Identity to ZTNA flow */}
              <path d="M400 80 L400 100" stroke="#9333EA" stroke-width="4" fill="none" marker-end="url(#zeroTrustFlow)" class="animated-high-traffic"/>
              <circle cx="400" cy="90" r="3" fill="#9333EA" class="animated-data-packet"/>

              {/* ZTNA to Service Desk flow */}
              <path d="M400 180 L400 200" stroke="#3B82F6" stroke-width="4" fill="none" marker-end="url(#itilFlow)" class="animated-high-traffic"/>
              <circle cx="400" cy="190" r="3" fill="#3B82F6" class="animated-data-packet"/>

              {/* Service Desk to Bastion flows */}
              <path d="M250 250 Q200 285 140 320" stroke="#F59E0B" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-secure-connection" marker-end="url(#bastionFlow)"/>

              {/* Bastion to Microsegments */}
              <path d="M200 360 Q225 360 250 360" stroke="#9333EA" stroke-width="3" fill="none" stroke-dasharray="10,5" class="animated-encrypted-connection" marker-end="url(#zeroTrustFlow)"/>

              {/* Service Desk direct to Management */}
              <path d="M450 300 L450 320" stroke="#3B82F6" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#itilFlow)"/>

              {/* Data flow particles */}
              <circle cx="325" cy="270" r="2" fill="#F59E0B" class="animated-data-packet"/>
              <circle cx="450" cy="310" r="2" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="225" cy="340" r="2" fill="#9333EA" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Enhanced Connection Labels with professional styling */}
            <g class="connection-labels">
              <rect x="350" y="90" width="100" height="20" rx="10" fill="rgba(139, 92, 246, 0.2)" stroke="#9333EA" stroke-width="1"/>
              <text x="400" y="102" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700">IDENTITY VERIFY</text>
              <rect x="350" y="190" width="100" height="20" rx="10" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="400" y="202" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="700">ITIL SERVICE</text>
              <rect x="240" y="280" width="80" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="280" y="292" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">BASTION</text>
              <rect x="370" y="310" width="80" height="20" rx="10" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="410" y="322" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="700">DIRECT ACCESS</text>
            </g>
          </svg>
        `;
        title = 'Zero-Trust Access Fabric';
        description = 'Identity-based microsegmentation with ITIL service management';
        break;

      case 'operational-playbooks':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="networkShadow5" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="serverGlow5" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <marker id="workflowFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#9333EA" filter="url(#serverGlow5)"/>
              </marker>
              <marker id="cicdFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#serverGlow5)"/>
              </marker>
              <marker id="bastionFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#EF4444" filter="url(#serverGlow5)"/>
              </marker>
              <pattern id="meshPattern5" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#9333EA" opacity="0.2"/>
              </pattern>
              <linearGradient id="managementGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(245, 158, 11, 0.1)"/>
              </linearGradient>
              <linearGradient id="orchestrationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(147, 51, 234, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(147, 51, 234, 0.1)"/>
              </linearGradient>
              <radialGradient id="bastionGradient5" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
                <stop offset="70%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
              </radialGradient>
              <linearGradient id="productionGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(16, 185, 129, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(16, 185, 129, 0.1)"/>
              </linearGradient>
            </defs>

            {/* Enhanced Background with depth */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern5)" opacity="0.4"/>

            {/* Floating data particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#9333EA" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#10B981" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* DevOps Gateway Zone */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(139, 92, 246, 0.1)" stroke="#9333EA" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#9333EA" font-size="16" font-weight="bold" class="jump-icon">🔧</text>
            <text x="90" y="45" fill="#A855F7" font-size="14" font-weight="bold">DEVOPS GATEWAY</text>
            <text x="400" y="60" text-anchor="middle" fill="#C084FC" font-size="12" font-weight="600">Secure Development Operations Interface</text>

            {/* DevOps performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">STATUS: ACTIVE</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#F59E0B" font-size="8" font-weight="600">PIPELINES: 24</text>
            </g>

            {/* Enhanced Management VPC Zone */}
            <g class="network-component">
              <rect x="50" y="100" width="300" height="120" rx="12" fill="url(#managementGradient5)" stroke="#F59E0B" stroke-width="4" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="60" y="125" fill="#FBBF24" font-size="14" font-weight="bold">MANAGEMENT VPC</text>

              {/* Enhanced CI/CD Pipeline Engine */}
              <g transform="translate(70, 140)" class="animated-server">
                <rect width="80" height="60" rx="8" fill="url(#managementGradient5)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow5)"/>
                <rect x="8" y="8" width="64" height="10" rx="5" fill="#F59E0B" opacity="0.9"/>
                <rect x="8" y="20" width="64" height="8" rx="4" fill="#FBBF24" opacity="0.7"/>
                <rect x="8" y="30" width="64" height="8" rx="4" fill="#FCD34D" opacity="0.5"/>
                <circle cx="15" cy="45" r="2" fill="#F59E0B" class="animated-status"/>
                <circle cx="30" cy="45" r="2" fill="#FBBF24" class="animated-status"/>
                <circle cx="45" cy="45" r="2" fill="#FCD34D" class="animated-status"/>
                <circle cx="60" cy="45" r="2" fill="#FEF3C7" class="animated-status"/>
                <text x="40" y="75" text-anchor="middle" fill="#FCD34D" font-size="8" font-weight="600">CI/CD Engine</text>
              </g>

              {/* Enhanced Automation Controllers */}
              <g transform="translate(160, 140)" class="animated-server">
                <rect width="80" height="60" rx="8" fill="url(#managementGradient5)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow5)"/>
                <rect x="8" y="8" width="25" height="40" rx="4" fill="#F59E0B" opacity="0.8"/>
                <rect x="37" y="8" width="25" height="40" rx="4" fill="#FBBF24" opacity="0.6"/>
                <circle cx="20" cy="20" r="3" fill="#FEF3C7"/>
                <circle cx="50" cy="20" r="3" fill="#FEF3C7"/>
                <path d="M23 35 L47 35" stroke="#F59E0B" stroke-width="2" marker-end="url(#cicdFlow)" class="animated-connection"/>
                <text x="40" y="75" text-anchor="middle" fill="#FCD34D" font-size="8" font-weight="600">Automation Ctrl</text>
              </g>

              {/* Enhanced Repository Manager */}
              <g transform="translate(250, 140)" class="animated-server">
                <rect width="80" height="60" rx="8" fill="url(#managementGradient5)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow5)"/>
                <rect x="8" y="8" width="20" height="35" rx="3" fill="#F59E0B" opacity="0.8"/>
                <rect x="32" y="8" width="20" height="35" rx="3" fill="#FBBF24" opacity="0.6"/>
                <rect x="56" y="8" width="16" height="35" rx="3" fill="#FCD34D" opacity="0.4"/>
                <circle cx="18" cy="48" r="1.5" fill="#FEF3C7"/>
                <circle cx="42" cy="48" r="1.5" fill="#FEF3C7"/>
                <circle cx="64" cy="48" r="1.5" fill="#FEF3C7"/>
                <text x="40" y="75" text-anchor="middle" fill="#FCD34D" font-size="8" font-weight="600">Git Repository</text>
              </g>
            </g>

            {/* Enhanced Bastion Security Layer */}
            <g class="network-component">
              <rect x="370" y="100" width="220" height="120" rx="12" fill="url(#bastionGradient5)" stroke="#EF4444" stroke-width="4" stroke-dasharray="10,5" class="animated-security-shield"/>
              <text x="380" y="125" fill="#F87171" font-size="14" font-weight="bold">BASTION SECURITY LAYER</text>

              {/* Enhanced Role-Based Access Gateway */}
              <g transform="translate(390, 140)" class="animated-security-shield">
                <rect width="80" height="60" rx="8" fill="url(#bastionGradient5)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow4)"/>
                <path d="M40 15 L45 20 L40 35 L35 20 Z" fill="none" stroke="#FCA5A5" stroke-width="2" class="animated-security-shield"/>
                <circle cx="40" cy="25" r="4" fill="#EF4444" opacity="0.8"/>
                <rect x="8" y="40" width="64" height="4" rx="2" fill="#FCA5A5" opacity="0.9"/>
                <rect x="8" y="46" width="64" height="3" rx="1" fill="#F87171" opacity="0.7"/>
                <text x="40" y="75" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">RBAC Gateway</text>
              </g>

              {/* Enhanced Network Policy Engine */}
              <g transform="translate(480, 140)" class="animated-server">
                <rect width="80" height="60" rx="8" fill="url(#bastionGradient5)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow4)"/>
                <rect x="8" y="8" width="64" height="8" rx="4" fill="#EF4444" opacity="0.8"/>
                <rect x="8" y="16" width="64" height="6" rx="3" fill="#F87171" opacity="0.6"/>
                <rect x="8" y="22" width="64" height="6" rx="3" fill="#FCA5A5" opacity="0.4"/>
                <circle cx="15" cy="32" r="2" fill="#EF4444" class="animated-status"/>
                <circle cx="25" cy="32" r="2" fill="#F87171" class="animated-status"/>
                <circle cx="35" cy="32" r="2" fill="#FCA5A5" class="animated-status"/>
                <circle cx="45" cy="32" r="2" fill="#FECACA" class="animated-status"/>
                <text x="35" y="54" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Policy Engine</text>
              </g>
            </g>

            {/* Enhanced Orchestration Cluster */}
            <g class="network-component">
              <rect x="220" y="240" width="360" height="100" rx="12" fill="url(#orchestrationGradient)" stroke="#9333EA" stroke-width="4" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="230" y="265" fill="#A855F7" font-size="14" font-weight="bold">ORCHESTRATION CLUSTER</text>

              {/* Enhanced Workflow Engine */}
              <g transform="translate(240, 280)" class="animated-server">
                <rect width="100" height="50" rx="8" fill="url(#orchestrationGradient)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow5)"/>
                <rect x="8" y="8" width="84" height="8" rx="4" fill="#9333EA" opacity="0.9"/>
                <rect x="8" y="18" width="84" height="6" rx="3" fill="#A855F7" opacity="0.7"/>
                <rect x="8" y="26" width="84" height="6" rx="3" fill="#C084FC" opacity="0.5"/>
                <circle cx="20" cy="38" r="2" fill="#9333EA" class="animated-status"/>
                <circle cx="40" cy="38" r="2" fill="#A855F7" class="animated-status"/>
                <circle cx="60" cy="38" r="2" fill="#C084FC" class="animated-status"/>
                <circle cx="80" cy="38" r="2" fill="#DDD6FE" class="animated-status"/>
                <text x="50" y="65" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">Workflow Engine</text>
              </g>

              {/* Enhanced SOP Generator */}
              <g transform="translate(360, 280)" class="animated-server">
                <rect width="100" height="50" rx="8" fill="url(#orchestrationGradient)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow5)"/>
                <rect x="8" y="8" width="35" height="30" rx="4" fill="#9333EA" opacity="0.8"/>
                <rect x="47" y="8" width="35" height="30" rx="4" fill="#A855F7" opacity="0.6"/>
                <circle cx="25" cy="18" r="2" fill="#DDD6FE"/>
                <circle cx="65" cy="18" r="2" fill="#DDD6FE"/>
                <path d="M28 35 L62 35" stroke="#A855F7" stroke-width="2" marker-end="url(#workflowFlow)" class="animated-connection"/>
                <text x="50" y="65" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">SOP Generator</text>
              </g>

              {/* Enhanced Playbook Library */}
              <g transform="translate(480, 280)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#orchestrationGradient)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow5)"/>
                <rect x="8" y="8" width="20" height="30" rx="3" fill="#9333EA" opacity="0.8"/>
                <rect x="32" y="8" width="20" height="30" rx="3" fill="#A855F7" opacity="0.6"/>
                <rect x="56" y="8" width="16" height="30" rx="3" fill="#C084FC" opacity="0.4"/>
                <circle cx="18" cy="42" r="1.5" fill="#DDD6FE"/>
                <circle cx="42" cy="42" r="1.5" fill="#DDD6FE"/>
                <circle cx="64" cy="42" r="1.5" fill="#DDD6FE"/>
                <text x="40" y="65" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">Playbook Lib</text>
              </g>
            </g>

            {/* Enhanced Production Network */}
            <g class="network-component">
              <rect x="620" y="240" width="160" height="160" rx="12" fill="url(#productionGradient5)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="630" y="265" fill="#34D399" font-size="13" font-weight="bold">PRODUCTION NET</text>

              {/* Enhanced Production Workloads */}
              <g transform="translate(640, 280)" class="animated-server">
                <rect width="60" height="80" rx="8" fill="url(#productionGradient5)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow5)"/>
                <rect x="8" y="8" width="44" height="12" rx="6" fill="#10B981" opacity="0.9"/>
                <rect x="8" y="22" width="44" height="10" rx="5" fill="#34D399" opacity="0.7"/>
                <rect x="8" y="34" width="44" height="10" rx="5" fill="#6EE7B7" opacity="0.5"/>
                <rect x="8" y="46" width="44" height="10" rx="5" fill="#A7F3D0" opacity="0.3"/>
                <circle cx="15" cy="62" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="30" cy="62" r="2" fill="#34D399" class="animated-status"/>
                <circle cx="45" cy="62" r="2" fill="#6EE7B7" class="animated-status"/>
                <circle cx="60" cy="62" r="2" fill="#A7F3D0" class="animated-status"/>
                <text x="30" y="85" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Live Workloads</text>
              </g>

              {/* Enhanced Monitoring Stack */}
              <g transform="translate(710, 280)" class="animated-server">
                <rect width="60" height="80" rx="8" fill="url(#productionGradient5)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow5)"/>
                <circle cx="30" cy="25" r="12" fill="none" stroke="#34D399" stroke-width="1.5" class="animated-router"/>
                <circle cx="30" cy="25" r="6" fill="#10B981" opacity="0.8"/>
                <rect x="25" y="40" width="10" height="3" rx="2" fill="#34D399" opacity="0.9"/>
                <rect x="23" y="46" width="14" height="3" rx="1" fill="#6EE7B7" opacity="0.7"/>
                <rect x="21" y="51" width="18" height="3" rx="1" fill="#A7F3D0" opacity="0.5"/>
                <text x="30" y="85" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Monitoring</text>
              </g>
            </g>

            {/* Enhanced Network Connections with data flow visualization */}
            <g class="network-connections">
              {/* DevOps Gateway to Management VPC */}
              <path d="M200 80 L200 100" stroke="#F59E0B" stroke-width="4" fill="none" marker-end="url(#cicdFlow)" class="animated-high-traffic"/>
              <circle cx="200" cy="90" r="3" fill="#F59E0B" class="animated-data-packet"/>

              {/* Management VPC to Bastion */}
              <path d="M350 160 L370 160" stroke="#EF4444" stroke-width="4" fill="none" marker-end="url(#bastionFlow)" class="animated-high-traffic"/>

              {/* Bastion to Production */}
              <path d="M590 160 Q640 160 620 240" stroke="#10B981" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-secure-connection" marker-end="url(#workflowFlow)"/>

              {/* Management to Orchestration */}
              <path d="M200 220 L400 240" stroke="#9333EA" stroke-width="4" fill="none" class="animated-connection" marker-end="url(#workflowFlow)"/>

              {/* Orchestration to Production */}
              <path d="M580 290 Q620 290 640 320" stroke="#10B981" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#workflowFlow)"/>

              {/* Data flow particles */}
              <circle cx="400" cy="230" r="2" fill="#9333EA" class="animated-data-packet"/>
              <circle cx="610" cy="280" r="2" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="605" cy="200" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Enhanced Connection Labels with professional styling */}
            <g class="connection-labels">
              <rect x="150" y="90" width="100" height="20" rx="10" fill="rgba(139, 92, 246, 0.2)" stroke="#9333EA" stroke-width="1"/>
              <text x="200" y="102" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700">CI/CD ACCESS</text>
              <rect x="300" y="190" width="80" height="20" rx="10" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="340" y="202" text-anchor="middle" fill="#F87171" font-size="10" font-weight="700">RBAC</text>
              <rect x="350" y="230" width="100" height="20" rx="10" fill="rgba(147, 51, 234, 0.2)" stroke="#9333EA" stroke-width="1"/>
              <text x="400" y="242" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700">ORCHESTRATE</text>
              <rect x="580" y="300" width="80" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="620" y="312" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">DEPLOY</text>
            </g>
          </svg>
        `;
        title = 'Bastioned Workflow Cluster';
        description = 'Secure CI/CD with role-based network access control';
        break;

      case 'enterprise-recovery':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="networkShadow6" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="serverGlow6" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <marker id="replicationFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#9333EA" filter="url(#serverGlow6)"/>
              </marker>
              <marker id="failoverFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#serverGlow6)"/>
              </marker>
              <marker id="sdwanFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#serverGlow6)"/>
              </marker>
              <pattern id="meshPattern6" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#10B981" opacity="0.2"/>
              </pattern>
              <linearGradient id="activeSiteGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(16, 185, 129, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(16, 185, 129, 0.1)"/>
              </linearGradient>
              <linearGradient id="drSiteGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(239, 68, 68, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
              </linearGradient>
              <radialGradient id="sdwanGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.4)"/>
                <stop offset="70%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(245, 158, 11, 0.2)"/>
              </radialGradient>
              <linearGradient id="orchestratorGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(147, 51, 234, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(147, 51, 234, 0.1)"/>
              </linearGradient>
            </defs>

            {/* Enhanced Background with depth */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern6)" opacity="0.4"/>

            {/* Floating data particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#10B981" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#EF4444" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400"cy="300" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#9333EA" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Global Connectivity Zone */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#3B82F6" font-size="16" font-weight="bold" class="jump-icon">🌐</text>
            <text x="90" y="45" fill="#60A5FA" font-size="14" font-weight="bold">GLOBAL CONNECTIVITY</text>
            <text x="400" y="60" text-anchor="middle" fill="#93C5FD" font-size="12" font-weight="600">Multi-Site Disaster Recovery Infrastructure</text>

            {/* Global performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">STATUS: ACTIVE</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#F59E0B" font-size="8" font-weight="600">RTO: 15min</text>
            </g>

            {/* Enhanced Primary Active Site */}
            <g class="network-component">
              <rect x="50" y="100" width="280" height="140" rx="12" fill="url(#activeSiteGradient6)" stroke="#10B981" stroke-width="4" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="60" y="125" fill="#34D399" font-size="14" font-weight="bold">PRIMARY ACTIVE SITE</text>

              {/* Enhanced Production Cluster */}
              <g transform="translate(70, 140)" class="animated-server">
                <rect width="80" height="60" rx="8" fill="url(#activeSiteGradient6)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow6)"/>
                <rect x="8" y="8" width="64" height="10" rx="5" fill="#10B981" opacity="0.9"/>
                <rect x="8" y="20" width="64" height="8" rx="4" fill="#34D399" opacity="0.7"/>
                <rect x="8" y="30" width="64" height="8" rx="4" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="15" cy="45" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="30" cy="cy="45" r="2" fill="#34D399" class="animated-status"/>
                <circle cx="45" cy="45" r="2" fill="#6EE7B7" class="animated-status"/>
                <circle cx="60" cy="45" r="2" fill="#A7F3D0" class="animated-status"/>
                <text x="40" y="75" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Production Apps</text>
              </g>

              {/* Enhanced Database Primary */}
              <g transform="translate(160, 140)" class="animated-server">
                <ellipse cx="30" cy="20" rx="30" ry="12" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <rect x="0" y="20" width="60" height="25" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2"/>
                <ellipse cx="30" cy="45" rx="30" ry="12" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <text x="30" y="35" text-anchor="middle" fill="#10B981" font-size="16" class="animated-icon">💾</text>
                <text x="30" y="75" text-anchor="middle" fill="#34D399" font-size="8" font-weight="600">Primary DB</text>
              </g>

              {/* Enhanced Storage Primary */}
              <g transform="translate(240, 140)" class="animated-server">
                <rect width="60" height="60" rx="8" fill="url(#activeSiteGradient6)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow6)"/>
                <rect x="8" y="8" width="16" height="40" rx="3" fill="#10B981" opacity="0.9"/>
                <rect x="28" y="8" width="16" height="40" rx="3" fill="#34D399" opacity="0.6"/>
                <rect x="48" y="8" width="8" height="40" rx="2" fill="#6EE7B7" opacity="0.4"/>
                <circle cx="16" cy="52" r="1.5" fill="#ECFDF5"/>
                <circle cx="36" cy="52" r="1.5" fill="#ECFDF5"/>
                <circle cx="52" cy="52" r="1.5" fill="#ECFDF5"/>
                <text x="30" y="75" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Storage Array</text>
              </g>
            </g>

            {/* Enhanced SD-WAN Encrypted Tunnel */}
            <g class="network-component">
              <ellipse cx="400" cy="170" rx="120" ry="40" fill="url(#sdwanGradient)" stroke="#F59E0B" stroke-width="4" stroke-dasharray="12,6" class="animated-high-traffic"/>
              <text x="400" y="145" text-anchor="middle" fill="#FBBF24" font-size="14" font-weight="bold">ENCRYPTED SD-WAN</text>

              {/* Enhanced Primary Router */}
              <g transform="translate(340, 150)" class="animated-network-glow">
                <rect width="50" height="35" rx="6" fill="url(#sdwanGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow6)"/>
                <circle cx="25" cy="12" r="8" fill="none" stroke="#FBBF24" stroke-width="1.5" class="animated-router"/>
                <circle cx="25" cy="12" r="4" fill="#F59E0B" opacity="0.8"/>
                <rect x="20" y="20" width="10" height="3" rx="1" fill="#FBBF24" opacity="0.9"/>
                <rect x="18" y="25" width="14" height="2" rx="1" fill="#FCD34D" opacity="0.7"/>
                <text x="25" y="50" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Router A</text>
              </g>

              {/* Enhanced Secondary Router */}
              <g transform="translate(410, 150)" class="animated-network-glow">
                <rect width="50" height="35" rx="6" fill="url(#sdwanGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow6)"/>
                <circle cx="25" cy="12" r="8" fill="none" stroke="#FBBF24" stroke-width="1.5" class="animated-router"/>
                <circle cx="25" cy="12" r="4" fill="#F59E0B" opacity="0.8"/>
                <rect x="20" y="20" width="10" height="3" rx="1" fill="#FBBF24" opacity="0.9"/>
                <rect x="18" y="25" width="14" height="2" rx="1" fill="#FCD34D" opacity="0.7"/>
                <text x="25" y="50" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Router B</text>
              </g>

              {/* Enhanced Traffic encryption indicator */}
              <g transform="translate(375, 190)">
                <rect width="50" height="15" rx="7" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
                <text x="25" y="10" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">AES-256</text>
              </g>
            </g>

            {/* Enhanced Disaster Recovery Site */}
            <g class="network-component">
              <rect x="470" y="100" width="280" height="140" rx="12" fill="url(#drSiteGradient6)" stroke="#EF4444" stroke-width="4" stroke-dasharray="10,5" class="animated-status"/>
              <text x="480" y="125" fill="#F87171" font-size="14" font-weight="bold">DISASTER RECOVERY SITE</text>

              {/* Enhanced Standby Cluster */}
              <g transform="translate(490, 140)" class="animated-server">
                <rect width="80" height="60" rx="8" fill="url(#drSiteGradient6)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow6)" />
                <rect x="8" y="8" width="64" height="10" rx="5" fill="rgba(239, 68, 68, 0.4)" opacity="0.6"/>
                <rect x="8" y="20" width="64" height="8" rx="4" fill="rgba(248, 113, 113, 0.4)" opacity="0.5"/>
                <rect x="8" y="30" width="64" height="8" rx="4" fill="rgba(252, 165, 165, 0.4)" opacity="0.4"/>
                <circle cx="15" cy="45" r="2" fill="rgba(239, 68, 68, 0.7)" class="animated-status"/>
                <circle cx="30" cy="45" r="2" fill="rgba(248, 113, 113, 0.7)" class="animated-status"/>
                <circle cx="45" cy="45" r="2" fill="rgba(252, 165, 165, 0.7)" class="animated-status"/>
                <text x="40" y="75" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Standby Apps</text>
              </g>

              {/* Enhanced Database Replica */}
              <g transform="translate(580, 140)" class="animated-server">
                <ellipse cx="30" cy="20" rx="30" ry="12" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="2" stroke-dasharray="4,2"/>
                <rect x="0" y="20" width="60" height="25" fill="rgba(239, 68, 68, 0.1)" stroke="#EF4444" stroke-width="2" stroke-dasharray="4,2"/>
                <ellipse cx="30" cy="45" rx="30" ry="12" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="2" stroke-dasharray="4,2"/>
                <text x="30" y="35" text-anchor="middle" fill="rgba(239, 68, 68, 0.8)" font-size="16" class="animated-icon">💾</text>
                <text x="30" y="75" text-anchor="middle" fill="#F87171" font-size="8" font-weight="600">Replica DB</text>
              </g>

              {/* Enhanced Storage Replica */}
              <g transform="translate(660, 140)" class="animated-server">
                <rect width="60" height="60" rx="8" fill="url(#drSiteGradient6)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow6)" stroke-dasharray="6,3"/>
                <rect x="8" y="8" width="16" height="40" rx="3" fill="rgba(239, 68, 68, 0.4)" opacity="0.6"/>
                <rect x="28" y="8" width="16" height="40" rx="3" fill="rgba(248, 113, 113, 0.4)" opacity="0.5"/>
                <rect x="48" y="8" width="8" height="40" rx="2" fill="rgba(252, 165, 165, 0.4)" opacity="0.4"/>
                <circle cx="16" cy="52" r="1.5" fill="rgba(254, 202, 202, 0.8)"/>
                <circle cx="36" cy="52" r="1.5" fill="rgba(254, 202, 202, 0.8)"/>
                <circle cx="52" cy="52" r="1.5" fill="rgba(254, 202, 202, 0.8)"/>
                <text x="30" y="75" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Storage Mirror</text>
              </g>
            </g>

            {/* Enhanced Asynchronous Replication VLAN */}
            <g class="network-component">
              <rect x="160" y="260" width="480" height="80" rx="12" fill="url(#orchestratorGradient6)" stroke="#9333EA" stroke-width="3" stroke-dasharray="8,4" class="animated-connection"/>
              <text x="170" y="285" fill="#A855F7" font-size="14" font-weight="bold">ASYNC REPLICATION VLAN</text>

              {/* Enhanced Data Sync Engine */}
              <g transform="translate(180, 300)" class="animated-server">
                <rect width="100" height="30" rx="6" fill="url(#orchestratorGradient6)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow6)"/>
                <rect x="8" y="6" width="84" height="6" rx="3" fill="#9333EA" opacity="0.9"/>
                <rect x="8" y="14" width="84" height="4" rx="2" fill="#A855F7" opacity="0.7"/>
                <rect x="8" y="20" width="84" height="4" rx="2" fill="#C084FC" opacity="0.5"/>
                <text x="50" y="45" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">Data Sync Engine</text>
              </g>

              {/* Enhanced Queue Manager */}
              <g transform="translate(300, 300)" class="animated-server">
                <rect width="100" height="30" rx="6" fill="url(#orchestratorGradient6)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow6)"/>
                <rect x="8" y="6" width="25" height="18" rx="3" fill="#9333EA" opacity="0.8"/>
                <rect x="37" y="6" width="25" height="18" rx="3" fill="#A855F7" opacity="0.6"/>
                <rect x="66" y="6" width="25" height="18" rx="3" fill="#C084FC" opacity="0.4"/>
                <text x="50" y="45" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">Queue Manager</text>
              </g>

              {/* Enhanced Log Shipping */}
              <g transform="translate(420, 300)" class="animated-server">
                <rect width="100" height="30" rx="6" fill="url(#orchestratorGradient6)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow6)"/>
                <circle cx="25" cy="15" r="8" fill="none" stroke="#A855F7" stroke-width="1.5" class="animated-router"/>
                <circle cx="75" cy="15" r="8" fill="none" stroke="#A855F7" stroke-width="1.5" class="animated-router"/>
                <path d="M33 15 L67 15" stroke="#9333EA" stroke-width="2" marker-end="url(#replicationFlow)" class="animated-connection"/>
                <text x="50" y="45" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">Log Shipping</text>
              </g>

              {/* Enhanced Compression Engine */}
              <g transform="translate(540, 300)" class="animated-server">
                <rect width="80" height="30" rx="6" fill="url(#orchestratorGradient6)" stroke="#9333EA" stroke-width="2" filter="url(#networkShadow6)"/>
                <rect x="8" y="6" width="64" height="6" rx="3" fill="#9333EA" opacity="0.9"/>
                <rect x="8" y="14" width="64" height="4" rx="2" fill="#A855F7" opacity="0.7"/>
                <rect x="8" y="20" width="64" height="4" rx="2" fill="#C084FC" opacity="0.5"/>
                <text x="40" y="45" text-anchor="middle" fill="#C084FC" font-size="8" font-weight="600">Compression</text>
              </g>
            </g>

            {/* Enhanced Failover Orchestrator */}
            <g class="network-component">
              <ellipse cx="400" cy="380" rx="120" ry="40" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6,3" class="animated-connection"/>
              <text x="400" y="365" text-anchor="middle" fill="#FBBF24" font-size="14" font-weight="bold">AUTOMATED FAILOVER ORCHESTRATOR</text>

              {/* Enhanced Health Monitor */}
              <g transform="translate(320, 370)" class="animated-server">
                <rect width="60" height="20" rx="6" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" stroke-width="2"/>
                <circle cx="15" cy="10" r="3" fill="#10B981" class="animated-status"/>
                <circle cx="30" cy="10" r="3" fill="#F59E0B" class="animated-status"/>
                <circle cx="45" cy="10" r="3" fill="#EF4444" class="animated-status"/>
                <text x="30" y="35" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Health Monitor</text>
              </g>

              {/* Enhanced Decision Engine */}
              <g transform="translate(390, 370)" class="animated-server">
                <rect width="60" height="20" rx="6" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" stroke-width="2"/>
                <rect x="8" y="4" width="44" height="4" rx="2" fill="#F59E0B" opacity="0.9"/>
                <rect x="8" y="10" width="44" height="3" rx="1" fill="#FBBF24" opacity="0.7"/>
                <rect x="8" y="15" width="44" height="3" rx="1" fill="#FCD34D" opacity="0.5"/>
                <text x="30" y="35" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Decision Engine</text>
              </g>

              {/* Enhanced Switch Controller */}
              <g transform="translate(460, 370)" class="animated-server">
                <rect width="60" height="20" rx="6" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" stroke-width="2"/>
                <circle cx="30" cy="10" r="8" fill="none" stroke="#FBBF24" stroke-width="1.5" class="animated-router"/>
                <text x="30" y="35" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Switch Control</text>
              </g>
            </g>

            {/* Enhanced Network Connections with data flow visualization */}
            <g class="network-connections">
              {/* Global to Primary */}
              <path d="M190 80 L190 100" stroke="#10B981" stroke-width="4" fill="none" marker-end="url(#sdwanFlow)" class="animated-high-traffic"/>
              <circle cx="190" cy="90" r="3" fill="#10B981" class="animated-data-packet"/>

              {/* Primary to SD-WAN */}
              <path d="M330 170 L340 170" stroke="#F59E0B" stroke-width="4" fill="none" marker-end="url(#failoverFlow)" class="animated-high-traffic"/>

              {/* SD-WAN to DR */}
              <path d="M460 170 L470 170" stroke="#F59E0B" stroke-width="4" fill="none" marker-end="url(#failoverFlow)" class="animated-high-traffic"/>

              {/* Primary to Replication */}
              <path d="M190 240 L220 260" stroke="#9333EA" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-secure-connection" marker-end="url(#replicationFlow)"/>

              {/* DR to Replication */}
              <path d="M610 240 L580 260" stroke="#9333EA" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-secure-connection" marker-end="url(#replicationFlow)"/>

              {/* Replication to Orchestrator */}
              <path d="M400 340 L400 360" stroke="#F59E0B" stroke-width="3" fill="none" marker-end="url(#failoverFlow)" class="animated-connection"/>

              {/* Data flow particles */}
              <circle cx="365" cy="170" r="2" fill="#F59E0B" class="animated-data-packet"/>
              <circle cx="450" cy="170" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="225" cy="325" r="2" fill="#9333EA" class="animated-data-packet" style="animation-delay: 0.5s"/>
              <circle cx="555" cy="325" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 1.5s"/>
            </g>

            {/* Enhanced Connection Labels with professional styling */}
            <g class="connection-labels">
              <rect x="140" y="90" width="100" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="190" y="102" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">PRIMARY LINK</text>
              <rect x="315" y="180" width="130" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="380" y="192" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">ENCRYPTED TUNNEL</text>
              <rect x="240" y="250" width="100" height="20" rx="10" fill="rgba(147, 51, 234, 0.2)" stroke="#9333EA" stroke-width="1"/>
              <text x="290" y="262" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700">DATA SYNC</text>
              <rect x="460" y="250" width="100" height="20" rx="10" fill="rgba(147, 51, 234, 0.2)" stroke="#9333EA" stroke-width="1"/>
              <text x="510" y="262" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700">DATA SYNC</text>
              <rect x="350" y="370" width="100" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="400" y="382" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">ORCHESTRATION</text>
            </g>
          </svg>
        `;
        title = 'Multi-Site Active/Passive DR with SD-WAN';
        description = 'Automated failover orchestration with encrypted replication';
        break;

      case 'defi-launch':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="defiShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="defiGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <marker id="defiFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#EC4899" filter="url(#defiGlow)"/>
              </marker>
              <marker id="blockchainFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#9333EA" filter="url(#defiGlow)"/>
              </marker>
              <marker id="secureFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#EF4444" filter="url(#defiGlow)"/>
              </marker>
              <pattern id="defiMeshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EC4899" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#EC4899" opacity="0.2"/>
              </pattern>
              <linearGradient id="defiAwsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(236, 72, 153, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(236, 72, 153, 0.1)"/>
              </linearGradient>
              <linearGradient id="defiAzureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
              </linearGradient>
              <linearGradient id="hsmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
              </linearGradient>
              <radialGradient id="blockchainGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(147, 51, 234, 0.4)"/>
                <stop offset="70%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(147, 51, 234, 0.2)"/>
              </radialGradient>
            </defs>

            {/* Enhanced Background */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#defiMeshPattern)" opacity="0.4"/>

            {/* Floating NFT particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#EC4899" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#9333EA" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#10B981" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Global CDN Edge Layer */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#10B981" font-size="16" font-weight="bold" class="jump-icon">🎫</text>
            <text x="90" y="45" fill="#34D399" font-size="14" font-weight="bold">GLOBAL CDN EDGE ACCELERATION</text>
            <text x="30" y="60" fill="#6EE7B7" font-size="12">Edge Cache Nodes + Content Optimization</text>

            {/* Edge Cache Nodes */}
            <g class="animated-server">
              <rect x="40" y="70" width="60" height="20" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" stroke-width="1"/>
              <text x="70" y="83" text-anchor="middle" fill="#C4B5FD" font-size="9">US-EAST</text>

              <rect x="120" y="70" width="60" height="20" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" stroke-width="1"/>
              <text x="150" y="83" text-anchor="middle" fill="#C4B5FD" font-size="9">EU-WEST</text>

              <rect x="200" y="70" width="60" height="20" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" stroke-width="1"/>
              <text x="230" y="83" text-anchor="middle" fill="#C4B5FD" font-size="9">APAC</text>

              <rect x="680" y="70" width="80" height="20" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="83" text-anchor="middle" fill="#34D399" font-size="9">IPFS GATEWAY</text>
            </g>

            {/* Enhanced API Gateway Layer */}
            <g class="network-component">
              <rect x="250" y="120" width="300" height="90" rx="12" fill="url(#apiGradient)" stroke="#3B82F6" stroke-width="4" stroke-dasharray="10,5" class="animated-server"/>
              <text x="260" y="145" fill="#60A5FA" font-size="14" font-weight="bold">CENTRAL API GATEWAY LAYER</text>

              {/* Enhanced Rate Limiter */}
              <g transform="translate(270, 155)" class="animated-server">
                <rect width="60" height="40" rx="8" fill="url(#apiGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#nftShadow)"/>
                <rect x="8" y="8" width="44" height="6" rx="3" fill="#3B82F6" opacity="0.8"/>
                <rect x="8" y="16" width="44" height="4" rx="2" fill="#60A5FA" opacity="0.6"/>
                <rect x="8" y="22" width="44" height="4" rx="2" fill="#93C5FD" opacity="0.4"/>
                <circle cx="15" cy="32" r="2" fill="#3B82F6" class="animated-status"/>
                <circle cx="30" cy="32" r="2" fill="#60A5FA" class="animated-status"/>
                <circle cx="45" cy="32" r="2" fill="#93C5FD" class="animated-status"/>
                <text x="30" y="55" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Rate Limiter</text>
              </g>

              {/* Enhanced Load Balancer */}
              <g transform="translate(340, 155)" class="animated-network-glow">
                <rect width="60" height="40" rx="6" fill="url(#apiGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#nftShadow)"/>
                <circle cx="30" cy="15" r="8" fill="none" stroke="#60A5FA" stroke-width="1.5" class="animated-router"/>
                <circle cx="30" cy="15" r="4" fill="#3B82F6" opacity="0.8"/>
                <rect x="25" y="25" width="10" height="3" rx="1" fill="#60A5FA" opacity="0.9"/>
                <rect x="23" y="30" width="14" height="2" rx="1" fill="#93C5FD" opacity="0.7"/>
                <text x="30" y="55" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Load Balancer</text>
              </g>

              {/* Enhanced Auth Gateway */}
              <g transform="translate(410, 155)" class="animated-security-shield">
                <rect width="60" height="40" rx="6" fill="url(#apiGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#nftShadow)"/>
                <path d="M30 8 L35 12 L30 20 L25 12 Z" fill="none" stroke="#60A5FA" stroke-width="2" class="animated-security-shield"/>
                <circle cx="30" cy="14" r="3" fill="#3B82F6" opacity="0.8"/>
                <rect x="8" y="25" width="44" height="3" rx="1" fill="#60A5FA" opacity="0.9"/>
                <rect x="8" y="30" width="44" height="2" rx="1" fill="#93C5FD" opacity="0.7"/>
                <text x="30" y="55" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Auth Gateway</text>
              </g>
            </g>

            {/* Enhanced Microservices Layer */}
            <g class="network-component">
              <rect x="50" y="230" width="700" height="100" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="8,4" class="animated-connection"/>
              <text x="60" y="255" fill="#A78BFA" font-size="14" font-weight="bold">MICROSERVICES LAYER</text>

              {/* Enhanced NFT Service */}
              <g transform="translate(70, 270)" class="animated-server">
                <rect width="120" height="50" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2" filter="url(#nftShadow)"/>
                <rect x="8" y="8" width="104" height="8" rx="4" fill="#10B981" opacity="0.9"/>
                <rect x="8" y="18" width="104" height="6" rx="3" fill="#34D399" opacity="0.7"/>
                <rect x="8" y="26" width="104" height="6" rx="3" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="20" cy="38" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="35" cy="38" r="2" fill="#34D399" class="animated-status"/>
                <circle cx="50" cy="38" r="2" fill="#6EE7B7" class="animated-status"/>
                <circle cx="65" cy="38" r="2" fill="#A7F3D0" class="animated-status"/>
                <text x="60" y="65" text-anchor="middle" fill="#6EE7B7" font-size="10" font-weight="600">🎨 NFT Minting</text>
              </g>

              {/* Enhanced Payment Service */}
              <g transform="translate(210, 270)" class="animated-server">
                <rect width="120" height="50" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#nftShadow)"/>
                <rect x="8" y="8" width="35" height="30" rx="4" fill="#F59E0B" opacity="0.8"/>
                <rect x="47" y="8" width="35" height="30" rx="4" fill="#FBBF24" opacity="0.6"/>
                <circle cx="25" cy="18" r="2" fill="#FEF3C7"/>
                <circle cx="65" cy="18" r="2" fill="#FEF3C7"/>
                <path d="M28 25 L62 25" stroke="#F59E0B" stroke-width="2" marker-end="url(#nftFlow)" class="animated-connection"/>
                <text x="60" y="65" text-anchor="middle" fill="#FCD34D" font-size="10" font-weight="600">🪙 Crypto Payments</text>
              </g>

              {/* Enhanced Auction Service */}
              <g transform="translate(350, 270)" class="animated-server">
                <rect width="120" height="50" rx="8" fill="rgba(236, 72, 153, 0.15)" stroke="#EC4899" stroke-width="2" filter="url(#nftShadow)"/>
                <ellipse cx="35" cy="20" rx="20" ry="12" fill="rgba(236, 72, 153, 0.3)" stroke="#EC4899" stroke-width="1"/>
                <rect x="15" y="20" width="40" height="15" fill="rgba(236, 72, 153, 0.15)" stroke="#EC4899" stroke-width="1"/>
                <ellipse cx="35" cy="35" rx="20" ry="12" fill="rgba(236, 72, 153, 0.3)" stroke="#EC4899" stroke-width="1"/>
                <text x="35" y="28" text-anchor="middle" fill="#EC4899" font-size="12" class="animated-icon-pulse">🎫</text>
                <text x="60" y="65" text-anchor="middle" fill="#F9A8D4" font-size="10" font-weight="600">Auction Engine</text>
              </g>

              {/* Enhanced User Service */}
              <g transform="translate(490, 270)" class="animated-server">
                <rect width="120" height="50" rx="8" fill="rgba(139, 92, 246, 0.15)" stroke="#8B5CF6" stroke-width="2" filter="url(#nftShadow)"/>
                <circle cx="35" cy="20" r="12" fill="none" stroke="#A78BFA" stroke-width="1.5" class="animated-router"/>
                <circle cx="35" cy="20" r="6" fill="#8B5CF6" opacity="0.8"/>
                <rect x="50" y="8" width="50" height="24" rx="4" fill="rgba(139, 92, 246, 0.2)" stroke="#A78BFA" stroke-width="1"/>
                <text x="75" y="22" text-anchor="middle" fill="#A78BFA" font-size="9">Profile DB</text>
                <text x="60" y="65" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="600">👤 User Profiles</text>
              </g>

              {/* Enhanced Metadata Service */}
              <g transform="translate(630, 270)" class="animated-server">
                <rect width="100" height="50" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="2" filter="url(#nftShadow)"/>
                <rect x="8" y="8" width="25" height="30" rx="3" fill="#3B82F6" opacity="0.8"/>
                <rect x="37" y="8" width="25" height="30" rx="3" fill="#60A5FA" opacity="0.6"/>
                <rect x="66" y="8" width="25" height="30" rx="3" fill="#93C5FD" opacity="0.4"/>
                <circle cx="20" cy="42" r="1.5" fill="#BFDBFE"/>
                <circle cx="50" cy="42" r="1.5" fill="#BFDBFE"/>
                <circle cx="78" cy="42" r="1.5" fill="#BFDBFE"/>
                <text x="50" y="65" text-anchor="middle" fill="#93C5FD" font-size="10" font-weight="600">📄 Metadata</text>
              </g>
            </g>

            {/* Enhanced Secure Wallet Node Cluster */}
            <g class="network-component">
              <rect x="250" y="350" width="300" height="80" rx="12" fill="url(#walletGradient)" stroke="#EF4444" stroke-width="4" stroke-dasharray="6,3" class="animated-security-shield"/>
              <text x="260" y="375" fill="#F87171" font-size="14" font-weight="bold">SECURE WALLET NODE CLUSTER</text>
              <text x="260" y="390" fill="#FCA5A5" font-size="10">Hardware Security Modules & Private Key Management</text>

              {/* Enhanced HSM Components */}
              <g class="animated-server">
                <rect x="270" y="395" width="30" height="20" rx="4" fill="#EF4444" opacity="0.8"/>
                <rect x="310" y="395" width="30" height="20" rx="4" fill="#F87171" opacity="0.8"/>
                <rect x="350" y="395" width="30" height="20" rx="4" fill="#FCA5A5" opacity="0.8"/>
                <rect x="390" y="395" width="30" height="20" rx="4" fill="#EF4444" opacity="0.8"/>
                <rect x="430" y="395" width="30" height="20" rx="4" fill="#F87171" opacity="0.8"/>
                <rect x="470" y="395" width="30" height="20" rx="4" fill="#FCA5A5" opacity="0.8"/>
                <rect x="510" y="395" width="30" height="20" rx="4" fill="#EF4444" opacity="0.8"/>
              </g>
            </g>

            {/* Enhanced Network Connections */}
            <g class="network-connections">
              {/* CDN to API Gateway */}
              <path d="M400 100 L400 120" stroke="#A855F7" stroke-width="4" fill="none" marker-end="url(#nftFlow)" class="animated-high-traffic"/>
              <circle cx="400" cy="110" r="3" fill="#A855F7" class="animated-data-packet"/>

              {/* API Gateway to Microservices */}
              <path d="M320 210 L130 270" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#edgeFlow)" class="animated-connection"/>
              <path d="M370 210 L270 270" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#edgeFlow)" class="animated-connection"/>
              <path d="M420 210 L410 270" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#edgeFlow)" class="animated-connection"/>
              <path d="M470 210 L550 270" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#edgeFlow)" class="animated-connection"/>

              {/* Microservices to Wallet Cluster */}
              <path d="M400 330 L400 350" stroke="#EF4444" stroke-width="4" fill="none" marker-end="url(#walletFlow)" class="animated-security-shield"/>

              {/* Data flow particles */}
              <circle cx="250" cy="240" r="2" fill="#3B82F6" class="animated-data-packet"/>
              <circle cx="450" cy="240" r="2" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="340" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Enhanced Connection Labels */}
            <g class="connection-labels">
              <rect x="100" y="90" width="100" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="150" y="102" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">ACTIVE SYNC</text>
              <rect x="550" y="90" width="100" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="600" y="102" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">ACTIVE SYNC</text>
              <rect x="320" y="165" width="130" height="20" rx="10" fill="rgba(236, 72, 153, 0.2)" stroke="#EC4899" stroke-width="1"/>
              <text x="385" y="177" text-anchor="middle" fill="#F472B6" font-size="10" font-weight="700">CROSS-REGION</text>
              <rect x="240" y="270" width="80" height="20" rx="10" fill="rgba(147, 51, 234, 0.2)" stroke="#9333EA" stroke-width="1"/>
              <text x="280" y="282" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700">BRIDGE</text>
              <rect x="470" y="270" width="80" height="20" rx="10" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="510" y="282" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="700">BRIDGE</text>
              <rect x="350" y="370" width="100" height="20" rx="10" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="400" y="382" text-anchor="middle" fill="#F87171" font-size="10" font-weight="700">SECURE WALLET</text>
            </g>
          </svg>
        `;
        title = 'Multi-Cloud Active/Active + Blockchain Overlay';
        description = 'Distributed DeFi infrastructure with HSM security and P2P blockchain networking';
        break;

      case 'nft-marketplace':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="nftShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="nftGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <marker id="nftFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#A855F7" filter="url(#nftGlow)"/>
              </marker>
              <marker id="edgeFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#nftGlow)"/>
              </marker>
              <marker id="walletFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#EF4444" filter="url(#nftGlow)"/>
              </marker>
              <pattern id="nftMeshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#A855F7" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#A855F7" opacity="0.2"/>
              </pattern>
              <linearGradient id="cdnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(168, 85, 247, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(168, 85, 247, 0.1)"/>
              </linearGradient>
              <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
              </linearGradient>
              <radialGradient id="walletGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
                <stop offset="70%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
              </radialGradient>
            </defs>

            {/* Enhanced Background */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#nftMeshPattern)" opacity="0.4"/>

            {/* Floating NFT particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#A855F7" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Global CDN Edge Layer */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#10B981" font-size="16" font-weight="bold" class="jump-icon">🎫</text>
            <text x="90" y="45" fill="#34D399" font-size="14" font-weight="bold">GLOBAL CDN EDGE ACCELERATION</text>
            <text x="30" y="60" fill="#6EE7B7" font-size="12">Edge Cache Nodes + Content Optimization</text>

            {/* Edge Cache Nodes */}
            <g class="animated-server">
              <rect x="40" y="70" width="60" height="20" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" stroke-width="1"/>
              <text x="70" y="83" text-anchor="middle" fill="#C4B5FD" font-size="9">US-EAST</text>

              <rect x="120" y="70" width="60" height="20" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" stroke-width="1"/>
              <text x="150" y="83" text-anchor="middle" fill="#C4B5FD" font-size="9">EU-WEST</text>

              <rect x="200" y="70" width="60" height="20" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" stroke-width="1"/>
              <text x="230" y="83" text-anchor="middle" fill="#C4B5FD" font-size="9">APAC</text>

              <rect x="680" y="70" width="80" height="20" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="83" text-anchor="middle" fill="#34D399" font-size="9">IPFS GATEWAY</text>
            </g>

            {/* Enhanced API Gateway Layer */}
            <g class="network-component">
              <rect x="250" y="120" width="300" height="90" rx="12" fill="url(#apiGradient)" stroke="#3B82F6" stroke-width="4" stroke-dasharray="10,5" class="animated-server"/>
              <text x="260" y="145" fill="#60A5FA" font-size="14" font-weight="bold">CENTRAL API GATEWAY LAYER</text>

              {/* Enhanced Rate Limiter */}
              <g transform="translate(270, 155)" class="animated-server">
                <rect width="60" height="40" rx="8" fill="url(#apiGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#nftShadow)"/>
                <rect x="8" y="8" width="44" height="6" rx="3" fill="#3B82F6" opacity="0.8"/>
                <rect x="8" y="16" width="44" height="4" rx="2" fill="#60A5FA" opacity="0.6"/>
                <rect x="8" y="22" width="44" height="4" rx="2" fill="#93C5FD" opacity="0.4"/>
                <circle cx="15" cy="32" r="2" fill="#3B82F6" class="animated-status"/>
                <circle cx="30" cy="32" r="2" fill="#60A5FA" class="animated-status"/>
                <circle cx="45" cy="32" r="2" fill="#93C5FD" class="animated-status"/>
                <text x="30" y="55" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Rate Limiter</text>
              </g>

              {/* Enhanced Load Balancer */}
              <g transform="translate(340, 155)" class="animated-network-glow">
                <rect width="60" height="40" rx="6" fill="url(#apiGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#nftShadow)"/>
                <circle cx="30" cy="15" r="8" fill="none" stroke="#60A5FA" stroke-width="1.5" class="animated-router"/>
                <circle cx="30" cy="15" r="4" fill="#3B82F6" opacity="0.8"/>
                <rect x="25" y="25" width="10" height="3" rx="1" fill="#60A5FA" opacity="0.9"/>
                <rect x="23" y="30" width="14" height="2" rx="1" fill="#93C5FD" opacity="0.7"/>
                <text x="30" y="55" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Load Balancer</text>
              </g>

              {/* Enhanced Auth Gateway */}
              <g transform="translate(410, 155)" class="animated-security-shield">
                <rect width="60" height="40" rx="6" fill="url(#apiGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#nftShadow)"/>
                <path d="M30 8 L35 12 L30 20 L25 12 Z" fill="none" stroke="#60A5FA" stroke-width="2" class="animated-security-shield"/>
                <circle cx="30" cy="14" r="3" fill="#3B82F6" opacity="0.8"/>
                <rect x="8" y="25" width="44" height="3" rx="1" fill="#60A5FA" opacity="0.9"/>
                <rect x="8" y="30" width="44" height="2" rx="1" fill="#93C5FD" opacity="0.7"/>
                <text x="30" y="55" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Auth Gateway</text>
              </g>
            </g>

            {/* Enhanced Microservices Layer */}
            <g class="network-component">
              <rect x="50" y="230" width="700" height="100" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="8,4" class="animated-connection"/>
              <text x="60" y="255" fill="#A78BFA" font-size="14" font-weight="bold">MICROSERVICES LAYER</text>

              {/* Enhanced NFT Service */}
              <g transform="translate(70, 270)" class="animated-server">
                <rect width="120" height="50" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2" filter="url(#nftShadow)"/>
                <rect x="8" y="8" width="104" height="8" rx="4" fill="#10B981" opacity="0.9"/>
                <rect x="8" y="18" width="104" height="6" rx="3" fill="#34D399" opacity="0.7"/>
                <rect x="8" y="26" width="104" height="6" rx="3" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="20" cy="38" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="35" cy="38" r="2" fill="#34D399" class="animated-status"/>
                <circle cx="50" cy="38" r="2" fill="#6EE7B7" class="animated-status"/>
                <circle cx="65" cy="38" r="2" fill="#A7F3D0" class="animated-status"/>
                <text x="60" y="65" text-anchor="middle" fill="#6EE7B7" font-size="10" font-weight="600">🎨 NFT Minting</text>
              </g>

              {/* Enhanced Payment Service */}
              <g transform="translate(210, 270)" class="animated-server">
                <rect width="120" height="50" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#nftShadow)"/>
                <rect x="8" y="8" width="35" height="30" rx="4" fill="#F59E0B" opacity="0.8"/>
                <rect x="47" y="8" width="35" height="30" rx="4" fill="#FBBF24" opacity="0.6"/>
                <circle cx="25" cy="18" r="2" fill="#FEF3C7"/>
                <circle cx="65" cy="18" r="2" fill="#FEF3C7"/>
                <path d="M28 25 L62 25" stroke="#F59E0B" stroke-width="2" marker-end="url(#nftFlow)" class="animated-connection"/>
                <text x="60" y="65" text-anchor="middle" fill="#FCD34D" font-size="10" font-weight="600">🪙 Crypto Payments</text>
              </g>

              {/* Enhanced Auction Service */}
              <g transform="translate(350, 270)" class="animated-server">
                <rect width="120" height="50" rx="8" fill="rgba(236, 72, 153, 0.15)" stroke="#EC4899" stroke-width="2" filter="url(#nftShadow)"/>
                <ellipse cx="35" cy="20" rx="20" ry="12" fill="rgba(236, 72, 153, 0.3)" stroke="#EC4899" stroke-width="1"/>
                <rect x="15" y="20" width="40" height="15" fill="rgba(236, 72, 153, 0.15)" stroke="#EC4899" stroke-width="1"/>
                <ellipse cx="35" cy="35" rx="20" ry="12" fill="rgba(236, 72, 153, 0.3)" stroke="#EC4899" stroke-width="1"/>
                <text x="35" y="28" text-anchor="middle" fill="#EC4899" font-size="12" class="animated-icon-pulse">🎫</text>
                <text x="60" y="65" text-anchor="middle" fill="#F9A8D4" font-size="10" font-weight="600">Auction Engine</text>
              </g>

              {/* Enhanced User Service */}
              <g transform="translate(490, 270)" class="animated-server">
                <rect width="120" height="50" rx="8" fill="rgba(139, 92, 246, 0.15)" stroke="#8B5CF6" stroke-width="2" filter="url(#nftShadow)"/>
                <circle cx="35" cy="20" r="12" fill="none" stroke="#A78BFA" stroke-width="1.5" class="animated-router"/>
                <circle cx="35" cy="20" r="6" fill="#8B5CF6" opacity="0.8"/>
                <rect x="50" y="8" width="50" height="24" rx="4" fill="rgba(139, 92, 246, 0.2)" stroke="#A78BFA" stroke-width="1"/>
                <text x="75" y="22" text-anchor="middle" fill="#A78BFA" font-size="9">Profile DB</text>
                <text x="60" y="65" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="600">👤 User Profiles</text>
              </g>

              {/* Enhanced Metadata Service */}
              <g transform="translate(630, 270)" class="animated-server">
                <rect width="100" height="50" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="2" filter="url(#nftShadow)"/>
                <rect x="8" y="8" width="25" height="30" rx="3" fill="#3B82F6" opacity="0.8"/>
                <rect x="37" y="8" width="25" height="30" rx="3" fill="#60A5FA" opacity="0.6"/>
                <rect x="66" y="8" width="25" height="30" rx="3" fill="#93C5FD" opacity="0.4"/>
                <circle cx="20" cy="42" r="1.5" fill="#BFDBFE"/>
                <circle cx="50" cy="42" r="1.5" fill="#BFDBFE"/>
                <circle cx="78" cy="42" r="1.5" fill="#BFDBFE"/>
                <text x="50" y="65" text-anchor="middle" fill="#93C5FD" font-size="10" font-weight="600">📄 Metadata</text>
              </g>
            </g>

            {/* Enhanced Secure Wallet Node Cluster */}
            <g class="network-component">
              <rect x="250" y="350" width="300" height="80" rx="12" fill="url(#walletGradient)" stroke="#EF4444" stroke-width="4" stroke-dasharray="6,3" class="animated-security-shield"/>
              <text x="260" y="375" fill="#F87171" font-size="14" font-weight="bold">SECURE WALLET NODE CLUSTER</text>
              <text x="260" y="390" fill="#FCA5A5" font-size="10">Hardware Security Modules & Private Key Management</text>

              {/* Enhanced HSM Components */}
              <g class="animated-server">
                <rect x="270" y="395" width="30" height="20" rx="4" fill="#EF4444" opacity="0.8"/>
                <rect x="310" y="395" width="30" height="20" rx="4" fill="#F87171" opacity="0.8"/>
                <rect x="350" y="395" width="30" height="20" rx="4" fill="#FCA5A5" opacity="0.8"/>
                <rect x="390" y="395" width="30" height="20" rx="4" fill="#EF4444" opacity="0.8"/>
                <rect x="430" y="395" width="30" height="20" rx="4" fill="#F87171" opacity="0.8"/>
                <rect x="470" y="395" width="30" height="20" rx="4" fill="#FCA5A5" opacity="0.8"/>
                <rect x="510" y="395" width="30" height="20" rx="4" fill="#EF4444" opacity="0.8"/>
              </g>
            </g>

            {/* Enhanced Network Connections */}
            <g class="network-connections">
              {/* CDN to API Gateway */}
              <path d="M400 100 L400 120" stroke="#A855F7" stroke-width="4" fill="none" marker-end="url(#nftFlow)" class="animated-high-traffic"/>
              <circle cx="400" cy="110" r="3" fill="#A855F7" class="animated-data-packet"/>

              {/* API Gateway to Microservices */}
              <path d="M320 210 L130 270" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#edgeFlow)" class="animated-connection"/>
              <path d="M370 210 L270 270" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#edgeFlow)" class="animated-connection"/>
              <path d="M420 210 L410 270" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#edgeFlow)" class="animated-connection"/>
              <path d="M470 210 L550 270" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#edgeFlow)" class="animated-connection"/>

              {/* Microservices to Wallet Cluster */}
              <path d="M400 330 L400 350" stroke="#EF4444" stroke-width="4" fill="none" marker-end="url(#walletFlow)" class="animated-security-shield"/>

              {/* Data flow particles */}
              <circle cx="250" cy="240" r="2" fill="#3B82F6" class="animated-data-packet"/>
              <circle cx="450" cy="240" r="2" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="340" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Enhanced Connection Labels */}
            <g class="connection-labels">
              <rect x="100" y="90" width="100" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="150" y="102" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">ACTIVE SYNC</text>
              <rect x="550" y="90" width="100" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="600" y="102" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">ACTIVE SYNC</text>
              <rect x="320" y="165" width="130" height="20" rx="10" fill="rgba(236, 72, 153, 0.2)" stroke="#EC4899" stroke-width="1"/>
              <text x="385" y="177" text-anchor="middle" fill="#F472B6" font-size="10" font-weight="700">CROSS-REGION</text>
              <rect x="240" y="270" width="80" height="20" rx="10" fill="rgba(147, 51, 234, 0.2)" stroke="#9333EA" stroke-width="1"/>
              <text x="280" y="282" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700">BRIDGE</text>
              <rect x="470" y="270" width="80" height="20" rx="10" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="510" y="282" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="700">BRIDGE</text>
              <rect x="350" y="370" width="100" height="20" rx="10" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="400" y="382" text-anchor="middle" fill="#F87171" font-size="10" font-weight="700">SECURE WALLET</text>
            </g>
          </svg>
        `;
        title = 'Multi-Cloud Active/Active + Blockchain Overlay';
        description = 'Distributed DeFi infrastructure with HSM security and P2P blockchain networking';
        break;

      case 'quant-trading':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="quantShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="quantGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <marker id="quantFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#22C55E" filter="url(#quantGlow)"/>
              </marker>
              <marker id="marketDataFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#quantGlow)"/>
              </marker>
              <marker id="dmaFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#3B82F6" filter="url(#quantGlow)"/>
              </marker>
              <pattern id="quantMeshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#22C55E" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#22C55E" opacity="0.2"/>
              </pattern>
              <linearGradient id="leafSpineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(34, 197, 94, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(34, 197, 94, 0.1)"/>
              </linearGradient>
              <linearGradient id="marketDataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(245, 158, 11, 0.1)"/>
              </linearGradient>
              <radialGradient id="dmaGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.4)"/>
                <stop offset="70%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.2)"/>
              </radialGradient>
              <linearGradient id="algoTradingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(139, 92, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(139, 92, 246, 0.1)"/>
              </linearGradient>
            </defs>

            {/* Enhanced Background with depth */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#quantMeshPattern)" opacity="0.4"/>

            {/* Floating trading particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#22C55E" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Exchange Colocation Zone */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(22, 163, 74, 0.1)" stroke="#16A34A" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#16A34A" font-size="16" font-weight="bold" class="jump-icon">📈</text>
            <text x="90" y="45" fill="#4ADE80" font-size="14" font-weight="bold">EXCHANGE COLOCATION</text>
            <text x="400" y="60" text-anchor="middle" fill="#86EFAC" font-size="12" font-weight="600">Ultra-Low Latency Trading Infrastructure</text>

            {/* Exchange performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(34, 197, 94, 0.2)" stroke="#22C55E" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#22C55E" font-size="8" font-weight="600">LATENCY: 50μs</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#F59E0B" font-size="8" font-weight="600">JITTER: 2μs</text>
            </g>

            {/* Enhanced Colocated Leaf-Spine Network */}
            <g class="network-component">
              <rect x="50" y="100" width="320" height="130" rx="12" fill="url(#leafSpineGradient)" stroke="#22C55E" stroke-width="4" stroke-dasharray="8,4" class="animated-network-glow"/>
              <text x="60" y="125" fill="#4ADE80" font-size="14" font-weight="bold">COLOCATED LEAF-SPINE FABRIC</text>
              <text x="60" y="140" fill="#86EFAC" font-size="10">Deterministic Switching • Non-blocking Architecture</text>

              {/* Enhanced Spine Layer */}
              <g class="animated-node">
                <circle cx="120" cy="170" r="18" fill="url(#leafSpineGradient)" stroke="#22C55E" stroke-width="3" filter="url(#quantShadow)" class="animated-router"/>
                <circle cx="120" cy="170" r="8" fill="#22C55E" opacity="0.8"/>
                <text x="120" y="175" text-anchor="middle" fill="white" font-size="8" font-weight="bold">S1</text>

                <circle cx="210" cy="170" r="18" fill="url(#leafSpineGradient)" stroke="#22C55E" stroke-width="3" filter="url(#quantShadow)" class="animated-router"/>
                <circle cx="210" cy="170" r="8" fill="#22C55E" opacity="0.8"/>
                <text x="210" y="175" text-anchor="middle" fill="white" font-size="8" font-weight="bold">S2</text>

                <circle cx="300" cy="170" r="18" fill="url(#leafSpineGradient)" stroke="#22C55E" stroke-width="3" filter="url(#quantShadow)" class="animated-router"/>
                <circle cx="300" cy="170" r="8" fill="#22C55E" opacity="0.8"/>
                <text x="300" y="175" text-anchor="middle" fill="white" font-size="8" font-weight="bold">S3</text>
              </g>
              <text x="210" y="150" text-anchor="middle" fill="#86EFAC" font-size="11" font-weight="600">SPINE SWITCHES</text>

              {/* Enhanced Leaf Layer */}
              <g class="animated-server">
                <rect x="90" y="200" width="40" height="20" rx="4" fill="#4ADE80" stroke="#22C55E" stroke-width="2" filter="url(#quantShadow)"/>
                <text x="110" y="212" text-anchor="middle" fill="white" font-size="8" font-weight="bold">L1</text>

                <rect x="170" y="200" width="40" height="20" rx="4" fill="#4ADE80" stroke="#22C55E" stroke-width="2" filter="url(#quantShadow)"/>
                <text x="190" y="212" text-anchor="middle" fill="white" font-size="8" font-weight="bold">L2</text>

                <rect x="250" y="200" width="40" height="20" rx="4" fill="#4ADE80" stroke="#22C55E" stroke-width="2" filter="url(#quantShadow)"/>
                <text x="270" y="212" text-anchor="middle" fill="white" font-size="8" font-weight="bold">L3</text>

                <rect x="330" y="200" width="40" height="20" rx="4" fill="#4ADE80" stroke="#22C55E" stroke-width="2" filter="url(#quantShadow)"/>
                <text x="350" y="212" text-anchor="middle" fill="white" font-size="8" font-weight="bold">L4</text>
              </g>

              {/* Spine-Leaf connections */}
              <g class="animated-connection">
                <path d="M120 188 L110 200" stroke="#22C55E" stroke-width="2" marker-end="url(#quantFlow)"/>
                <path d="M120 188 L190 200" stroke="#22C55E" stroke-width="2" marker-end="url(#quantFlow)"/>
                <path d="M210 188 L110 200" stroke="#22C55E" stroke-width="2" marker-end="url(#quantFlow)"/>
                <path d="M210 188 L190 200" stroke="#22C55E" stroke-width="2" marker-end="url(#quantFlow)"/>
                <path d="M210 188 L270 200" stroke="#22C55E" stroke-width="2" marker-end="url(#quantFlow)"/>
                <path d="M210 188 L350 200" stroke="#22C55E" stroke-width="2" marker-end="url(#quantFlow)"/>
                <path d="M300 188 L270 200" stroke="#22C55E" stroke-width="2" marker-end="url(#quantFlow)"/>
                <path d="M300 188 L350 200" stroke="#22C55E" stroke-width="2" marker-end="url(#quantFlow)"/>
              </g>
            </g>

            {/* Enhanced Market Data Multicast Network */}
            <g class="network-component">
              <rect x="420" y="100" width="330" height="80" rx="12" fill="url(#marketDataGradient)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="10,5" class="animated-high-traffic"/>
              <text x="430" y="125" fill="#FBBF24" font-size="14" font-weight="bold">MARKET DATA MULTICAST NETWORK</text>
              <text x="430" y="140" fill="#FCD34D" font-size="10">Dedicated High-Speed Market Feed Distribution</text>

              {/* Enhanced Multicast Groups */}
              <g class="animated-server">
                <ellipse cx="470" cy="160" rx="25" ry="15" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" stroke-width="2"/>
                <text x="470" y="165" text-anchor="middle" fill="#F59E0B" font-size="8" font-weight="bold">NYSE</text>

                <ellipse cx="530" cy="160" rx="25" ry="15" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" stroke-width="2"/>
                <text x="530" y="165" text-anchor="middle" fill="#F59E0B" font-size="8" font-weight="bold">NASDAQ</text>

                <ellipse cx="590" cy="160" rx="25" ry="15" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" stroke-width="2"/>
                <text x="590" y="165" text-anchor="middle" fill="#F59E0B" font-size="8" font-weight="bold">ARCA</text>

                <ellipse cx="650" cy="160" rx="25" ry="15" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" stroke-width="2"/>
                <text x="650" y="165" text-anchor="middle" fill="#F59E0B" font-size="8" font-weight="bold">BATS</text>

                <ellipse cx="710" cy="160" rx="25" ry="15" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" stroke-width="2"/>
                <text x="710" y="165" text-anchor="middle" fill="#F59E0B" font-size="8" font-weight="bold">CME</text>
              </g>
            </g>

            {/* Enhanced DMA Fabric */}
            <g class="network-component">
              <rect x="100" y="250" width="600" height="80" rx="12" fill="url(#dmaGradient)" stroke="#3B82F6" stroke-width="4" stroke-dasharray="12,6" class="animated-connection"/>
              <text x="110" y="275" fill="#60A5FA" font-size="14" font-weight="bold">DIRECT MARKET ACCESS (DMA) FABRIC</text>
              <text x="110" y="290" fill="#93C5FD" font-size="10">Hardware Timestamping • Ultra-Low Latency Execution</text>

              {/* Enhanced Hardware Timestamping Nodes */}
              <g class="animated-server">
                <rect x="140" y="305" width="80" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#quantShadow)"/>
                <rect x="145" y="307" width="70" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="145" y="313" width="70" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="145" y="318" width="70" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="180" y="340" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">HW-TS-1</text>

                <rect x="240" y="305" width="80" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#quantShadow)"/>
                <rect x="245" y="307" width="70" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="245" y="313" width="70" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="245" y="318" width="70" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="280" y="340" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">HW-TS-2</text>

                <rect x="340" y="305" width="80" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#quantShadow)"/>
                <rect x="345" y="307" width="70" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="345" y="313" width="70" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="345" y="318" width="70" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="380" y="340" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">HW-TS-3</text>

                <rect x="440" y="305" width="80" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#quantShadow)"/>
                <rect x="445" y="307" width="70" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="445" y="313" width="70" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="445" y="318" width="70" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="480" y="340" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">HW-TS-4</text>

                <rect x="540" y="305" width="80" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#quantShadow)"/>
                <rect x="545" y="307" width="70" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="545" y="313" width="70" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="545" y="318" width="70" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="580" y="340" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">HW-TS-5</text>
              </g>
            </g>

            {/* Enhanced Trading Algorithm Engines */}
            <g class="network-component">
              <rect x="50" y="360" width="220" height="70" rx="12" fill="url(#algoTradingGradient)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="8,4" class="animated-server"/>
              <text x="60" y="385" fill="#A78BFA" font-size="14" font-weight="bold">TRADING ALGORITHM ENGINES</text>
              <text x="60" y="400" fill="#C4B5FD" font-size="10">Ultra-Low Latency Strategy Execution</text>

              {/* Enhanced Algorithm Instances */}
              <g class="animated-server">
                <rect x="70" y="405" width="40" height="15" rx="4" fill="#8B5CF6" opacity="0.8"/>
                <text x="90" y="415" text-anchor="middle" fill="white" font-size="8">ALGO-1</text>

                <rect x="120" y="405" width="40" height="15" rx="4" fill="#A855F7" opacity="0.8"/>
                <text x="140" y="415" text-anchor="middle" fill="white" font-size="8">ALGO-2</text>

                <rect x="170" y="405" width="40" height="15" rx="4" fill="#C084FC" opacity="0.8"/>
                <text x="190" y="415" text-anchor="middle" fill="white" font-size="8">ALGO-3</text>

                <rect x="220" y="405" width="40" height="15" rx="4" fill="#DDD6FE" opacity="0.8"/>
                <text x="240" y="415" text-anchor="middle" fill="white" font-size="8">ALGO-4</text>
              </g>
            </g>

            {/* Enhanced Risk Management System */}
            <g class="network-component">
              <rect x="530" y="360" width="220" height="70" rx="12" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" stroke-width="3" stroke-dasharray="6,3" class="animated-security-shield"/>
              <text x="540" y="385" fill="#F87171" font-size="14" font-weight="bold">RISK MANAGEMENT SYSTEM</text>
              <text x="540" y="400" fill="#FCA5A5" font-size="10">Real-time Position & Risk Monitoring</text>

              {/* Enhanced Risk Components */}
              <g class="animated-server">
                <rect x="550" y="405" width="45" height="15" rx="4" fill="#EF4444" opacity="0.8"/>
                <text x="572" y="415" text-anchor="middle" fill="white" font-size="7">PRE-TRADE</text>

                <rect x="605" y="405" width="45" height="15" rx="4" fill="#F87171" opacity="0.8"/>
                <text x="627" y="415" text-anchor="middle" fill="white" font-size="7">POST-TRADE</text>

                <rect x="660" y="405" width="45" height="15" rx="4" fill="#FCA5A5" opacity="0.8"/>
                <text x="682" y="415" text-anchor="middle" fill="white" font-size="7">REAL-TIME</text>
              </g>
            </g>

            {/* Enhanced Network Connections */}
            <g class="network-connections">
              {/* Leaf-Spine to Market Data */}
              <path d="M370 140 L420 140" stroke="#22C55E" stroke-width="4" fill="none" marker-end="url(#marketDataFlow)" class="animated-high-traffic"/>
              <circle cx="395" cy="140" r="3" fill="#22C55E" class="animated-data-packet"/>

              {/* Leaf-Spine to DMA */}
              <path d="M210 230 L210 250" stroke="#22C55E" stroke-width="4" fill="none" marker-end="url(#dmaFlow)" class="animated-high-traffic"/>

              {/* Market Data to DMA */}
              <path d="M600 180 L580 250" stroke="#F59E0B" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-connection" marker-end="url(#dmaFlow)"/>

              {/* DMA to Trading Algorithms */}
              <path d="M180 330 L160 360" stroke="#3B82F6" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#quantFlow)"/>
              <path d="M280 330 L200 360" stroke="#3B82F6" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#quantFlow)"/>

              {/* DMA to Risk Management */}
              <path d="M580 330 L640 360" stroke="#3B82F6" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#quantFlow)"/>
              <path d="M480 330 L600 360" stroke="#3B82F6" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#quantFlow)"/>

              {/* Trading to Risk bidirectional */}
              <path d="M270 395 Q400 350 530 395" stroke="#8B5CF6" stroke-width="2" fill="none" stroke-dasharray="4,2" class="animated-connection"/>

              {/* Data flow particles */}
              <circle cx="500" cy="140" r="2" fill="#F59E0B" class="animated-data-packet"/>
              <circle cx="590" cy="215" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="230" cy="345" r="2" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 0.5s"/>
              <circle cx="610" cy="345" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 1.5s"/>
            </g>

            {/* Enhanced Connection Labels with professional styling */}
            <g class="connection-labels">
              <rect x="150" y="90" width="100" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="200" y="102" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">PRIMARY LINK</text>
              <rect x="315" y="180" width="130" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="380" y="192" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">ENCRYPTED TUNNEL</text>
              <rect x="240" y="250" width="100" height="20" rx="10" fill="rgba(147, 51, 234, 0.2)" stroke="#9333EA" stroke-width="1"/>
              <text x="290" y="262" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700">DATA SYNC</text>
              <rect x="460" y="250" width="100" height="20" rx="10" fill="rgba(147, 51, 234, 0.2)" stroke="#9333EA" stroke-width="1"/>
              <text x="510" y="262" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700">DATA SYNC</text>
              <rect x="350" y="370" width="100" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="400" y="382" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">ORCHESTRATION</text>
            </g>
          </svg>
        `;
        title = 'Leaf-Spine Low-Latency Fabric (Colo + DMA)';
        description = 'Colocated leaf-spine network with deterministic switching, separate market data multicast network and direct market access (DMA) fabric with hardware timestamping.';
        break;

      case 'fraud-detection':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="fraudShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="fraudGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <marker id="fraudFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#EF4444" filter="url(#fraudGlow)"/>
              </marker>
              <marker id="streamFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#9333EA" filter="url(#fraudGlow)"/>
              </marker>
              <marker id="analyticsFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#22C55E" filter="url(#fraudGlow)"/>
              </marker>
              <pattern id="fraudMeshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EF4444" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#EF4444" opacity="0.2"/>
              </pattern>
              <linearGradient id="collectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(239, 68, 68, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.1)"/>
              </linearGradient>
              <radialGradient id="streamGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(147, 51, 234, 0.4)"/>
                <stop offset="70%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(147, 51, 234, 0.2)"/>
              </radialGradient>
              <linearGradient id="siemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(185, 28, 28, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(185, 28, 28, 0.2)"/>
              </linearGradient>
            </defs>

            {/* Enhanced Background with depth */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#fraudMeshPattern)" opacity="0.4"/>

            {/* Floating fraud detection particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#9333EA" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#22C55E" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* TAP/SPAN Data Ingestion Zone */}
            <rect x="20" y="20" width="760" height="80" rx="12" fill="url(#collectorGradient)" stroke="#EF4444" stroke-width="4" stroke-dasharray="8,4" class="animated-server"/>
            <text x="30" y="45" fill="#F87171" font-size="16" font-weight="bold">🕵️ HIGH-THROUGHPUT DATA COLLECTORS</text>
            <text x="30" y="60" fill="#FCA5A5" font-size="12">TAP/SPAN Network Feeds • Transaction Monitoring • Pattern Recognition</text>

            {/* Enhanced Data Collection Points */}
            <g class="animated-server">
              <rect x="40" y="70" width="80" height="20" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="80" y="83" text-anchor="middle" fill="#F87171" font-size="9">NETWORK TAP</text>

              <rect x="140" y="70" width="80" height="20" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="180" y="83" text-anchor="middle" fill="#F87171" font-size="9">ATM FEEDS</text>

              <rect x="240" y="70" width="80" height="20" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="280" y="83" text-anchor="middle" fill="#F87171" font-size="9">CARD SYSTEMS</text>

              <rect x="340" y="70" width="80" height="20" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="380" y="83" text-anchor="middle" fill="#F87171" font-size="9">WIRE XFERS</text>

              <rect x="440" y="70" width="80" height="20" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="480" y="83" text-anchor="middle" fill="#F87171" font-size="9">MOBILE APPS</text>

              <rect x="540" y="70" width="80" height="20" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="580" y="83" text-anchor="middle" fill="#F87171" font-size="9">WEB PORTALS</text>

              <rect x="640" y="70" width="100" height="20" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="690" y="83" text-anchor="middle" fill="#F87171" font-size="9">PARTNER APIs</text>
            </g>

            {/* Enhanced Kafka/MQ Pub/Sub Overlay */}
            <g class="network-component">
              <ellipse cx="400" cy="170" rx="220" ry="60" fill="url(#streamGradient)" stroke="#9333EA" stroke-width="4" stroke-dasharray="12,6" class="animated-connection"/>
              <text x="400" y="155" text-anchor="middle" fill="#A855F7" font-size="16" font-weight="bold">KAFKA/MQ PUB/SUB OVERLAY</text>
              <text x="400" y="175" text-anchor="middle" fill="#C4B5FD" font-size="12">Event-Driven Stream Processing Mesh</text>
              <text x="400" y="190" text-anchor="middle" fill="#DDD6FE" font-size="10">High-Velocity Transaction Processing • Real-time Event Correlation</text>

              {/* Enhanced Topic Partitions */}
              <g class="animated-node">
                <ellipse cx="320" cy="150" rx="25" ry="12" fill="rgba(147, 51, 234, 0.3)" stroke="#9333EA" stroke-width="2"/>
                <text x="320" y="155" text-anchor="middle" fill="#A855F7" font-size="8" font-weight="bold">TOPIC-1</text>

                <ellipse cx="400" cy="140" rx="25" ry="12" fill="rgba(168, 85, 247, 0.3)" stroke="#A855F7" stroke-width="2"/>
                <text x="400" y="145" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="bold">TOPIC-2</text>

                <ellipse cx="480" cy="150" rx="25" ry="12" fill="rgba(196, 181, 253, 0.3)" stroke="#C4B5FD" stroke-width="2"/>
                <text x="480" y="155" text-anchor="middle" fill="#DDD6FE" font-size="8" font-weight="bold">TOPIC-3</text>
              </g>
            </g>

            {/* Enhanced Stream Processing Engines */}
            <g class="network-component">
              <rect x="50" y="250" width="700" height="90" rx="12" fill="rgba(30, 58, 138, 0.08)" stroke="#1E3A8A" stroke-width="3" stroke-dasharray="10,5" class="animated-server"/>
              <text x="60" y="275" fill="#3B82F6" font-size="14" font-weight="bold">STREAM PROCESSING ENGINES</text>

              {/* Enhanced Pattern Analysis Engine */}
              <g transform="translate(80, 285)" class="animated-server">
                <rect width="120" height="45" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="2" filter="url(#fraudShadow)"/>
                <rect x="8" y="8" width="104" height="6" rx="3" fill="#3B82F6" opacity="0.8"/>
                <rect x="8" y="16" width="104" height="4" rx="2" fill="#60A5FA" opacity="0.6"/>
                <rect x="8" y="22" width="104" height="4" rx="2" fill="#93C5FD" opacity="0.4"/>
                <circle cx="20" cy="32" r="2" fill="#3B82F6" class="animated-status"/>
                <circle cx="35" cy="32" r="2" fill="#60A5FA" class="animated-status"/>
                <circle cx="50" cy="32" r="2" fill="#93C5FD" class="animated-status"/>
                <circle cx="65" cy="32" r="2" fill="#BFDBFE" class="animated-status"/>
                <text x="60" y="55" text-anchor="middle" fill="#93C5FD" font-size="10" font-weight="600">Pattern Analysis</text>
                <text x="60" y="65" text-anchor="middle" fill="#BFDBFE" font-size="8">Real-time Detection</text>
              </g>

              {/* Enhanced Anomaly Scoring Engine */}
              <g transform="translate(220, 285)" class="animated-server">
                <rect width="120" height="45" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2" filter="url(#fraudShadow)"/>
                <rect x="8" y="8" width="104" height="6" rx="3" fill="#10B981" opacity="0.8"/>
                <rect x="8" y="16" width="104" height="4" rx="2" fill="#34D399" opacity="0.6"/>
                <rect x="8" y="22" width="104" height="4" rx="2" fill="#6EE7B7" opacity="0.4"/>
                <circle cx="20" cy="32" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="35" cy="32" r="2" fill="#34D399" class="animated-status"/>
                <circle cx="50" cy="32" r="2" fill="#6EE7B7" class="animated-status"/>
                <circle cx="65" cy="32" r="2" fill="#A7F3D0" class="animated-status"/>
                <text x="60" y="55" text-anchor="middle" fill="#6EE7B7" font-size="10" font-weight="600">Anomaly Scoring</text>
                <text x="60" y="65" text-anchor="middle" fill="#A7F3D0" font-size="8">ML Risk Assessment</text>
              </g>

              {/* Enhanced Fraud Correlation Engine */}
              <g transform="translate(360, 285)" class="animated-server">
                <rect width="120" height="45" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#fraudShadow)"/>
                <rect x="8" y="8" width="104" height="6" rx="3" fill="#F59E0B" opacity="0.8"/>
                <rect x="8" y="16" width="104" height="4" rx="2" fill="#FBBF24" opacity="0.6"/>
                <rect x="8" y="22" width="104" height="4" rx="2" fill="#FCD34D" opacity="0.4"/>
                <circle cx="20" cy="32" r="2" fill="#F59E0B" class="animated-status"/>
                <circle cx="35" cy="32" r="2" fill="#FBBF24" class="animated-status"/>
                <circle cx="50" cy="32" r="2" fill="#FCD34D" class="animated-status"/>
                <circle cx="65" cy="32" r="2" fill="#FEF3C7" class="animated-status"/>
                <text x="60" y="55" text-anchor="middle" fill="#FCD34D" font-size="10" font-weight="600">Fraud Correlation</text>
                <text x="60" y="65" text-anchor="middle" fill="#FEF3C7" font-size="8">Cross-Channel Analytics</text>
              </g>

              {/* Enhanced Behavioral AI Engine */}
              <g transform="translate(500, 285)" class="animated-server">
                <rect width="120" height="45" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="#A855F7" stroke-width="2" filter="url(#fraudShadow)"/>
                <rect x="8" y="8" width="104" height="6" rx="3" fill="#A855F7" opacity="0.8"/>
                <rect x="8" y="16" width="104" height="4" rx="2" fill="#C4B5FD" opacity="0.6"/>
                <rect x="8" y="22" width="104" height="4" rx="2" fill="#DDD6FE" opacity="0.4"/>
                <circle cx="20" cy="32" r="2" fill="#A855F7" class="animated-status"/>
                <circle cx="35" cy="32" r="2" fill="#C4B5FD" class="animated-status"/>
                <circle cx="50" cy="32" r="2" fill="#DDD6FE" class="animated-status"/>
                <circle cx="65" cy="32" r="2" fill="#F3F4F6" class="animated-status"/>
                <text x="60" y="55" text-anchor="middle" fill="#DDD6FE" font-size="10" font-weight="600">Behavioral AI</text>
                <text x="60" y="65" text-anchor="middle" fill="#F3F4F6" font-size="8">User Profiling</text>
              </g>
            </g>

            {/* Enhanced Analytics Dashboard Cluster */}
            <g class="network-component">
              <rect x="200" y="360" width="400" height="70" rx="12" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" stroke-width="3" stroke-dasharray="8,4" class="animated-network-glow"/>
              <text x="210" y="385" fill="#4ADE80" font-size="14" font-weight="bold">ANALYTICS DASHBOARD CLUSTER</text>
              <text x="210" y="400" fill="#86EFAC" font-size="10">Real-time Visualization • Alert Generation • Executive Reporting</text>

              {/* Enhanced Dashboard Components */}
              <g class="animated-server">
                <rect x="220" y="405" width="80" height="20" rx="6" fill="#22C55E" opacity="0.8"/>
                <text x="260" y="418" text-anchor="middle" fill="white" font-size="8">REAL-TIME</text>

                <rect x="310" y="405" width="80" height="20" rx="6" fill="#34D399" opacity="0.8"/>
                <text x="350" y="418" text-anchor="middle" fill="white" font-size="8">FORENSICS</text>

                <rect x="400" y="405" width="80" height="20" rx="6" fill="#6EE7B7" opacity="0.8"/>
                <text x="440" y="418" text-anchor="middle" fill="white" font-size="8">REPORTING</text>

                <rect x="490" y="405" width="80" height="20" rx="6" fill="#A7F3D0" opacity="0.8"/>
                <text x="530" y="418" text-anchor="middle" fill="white" font-size="8">ALERTING</text>
              </g>
            </g>

            {/* Enhanced SIEM Ingestion System */}
            <g class="network-component">
              <rect x="620" y="280" width="150" height="120" rx="12" fill="url(#siemGradient)" stroke="#B91C1C" stroke-width="3" stroke-dasharray="6,3" class="animated-security-shield"/>
              <text x="630" y="305" fill="#DC2626" font-size="14" font-weight="bold">SIEM INGESTION</text>
              <text x="630" y="320" fill="#EF4444" font-size="10">Security Event Management</text>

              {/* Enhanced SIEM Components */}
              <g class="animated-server">
                <rect x="635" y="330" width="120" height="15" rx="4" fill="#B91C1C" opacity="0.8"/>
                <text x="695" y="340" text-anchor="middle" fill="white" font-size="7">Log Aggregation</text>

                <rect x="635" y="350" width="120" height="15" rx="4" fill="#DC2626" opacity="0.8"/>
                <text x="695" y="360" text-anchor="middle" fill="white" font-size="7">Event Correlation</text>

                <rect x="635" y="370" width="120" height="15" rx="4" fill="#EF4444" opacity="0.8"/>
                <text x="695" y="380" text-anchor="middle" fill="white" font-size="7">Threat Intelligence</text>
              </g>
            </g>

            {/* Enhanced Network Connections */}
            <g class="network-connections">
              {/* Data collectors to Kafka */}
              <path d="M400 100 L400 120" stroke="#EF4444" stroke-width="4" fill="none" marker-end="url(#streamFlow)" class="animated-high-traffic"/>
              <circle cx="400" cy="105" r="3" fill="#EF4444" class="animated-data-packet"/>

              {/* Kafka to Stream Processors */}
              <path d="M350 230 L140 285" stroke="#9333EA" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-connection" marker-end="url(#streamFlow)"/>
              <path d="M380 230 L280 285" stroke="#9333EA" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-connection" marker-end="url(#streamFlow)"/>
              <path d="M420 230 L420 285" stroke="#9333EA" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-connection" marker-end="url(#streamFlow)"/>
              <path d="M450 230 L560 285" stroke="#9333EA" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-connection" marker-end="url(#streamFlow)"/>

              {/* Stream processors to Analytics */}
              <path d="M280 340 L300 360" stroke="#3B82F6" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#analyticsFlow)"/>
              <path d="M420 340 L400 360" stroke="#10B981" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#analyticsFlow)"/>
              <path d="M560 340 L500 360" stroke="#F59E0B" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#analyticsFlow)"/>

              {/* Analytics to SIEM */}
              <path d="M600 395 L620 350" stroke="#22C55E" stroke-width="3" fill="none" stroke-dasharray="6,3" class="animated-secure-connection" marker-end="url(#fraudFlow)"/>

              {/* Cross-processor correlation */}
              <path d="M200 307 L360 307" stroke="#8B5CF6" stroke-width="2" fill="none" stroke-dasharray="4,2" class="animated-connection"/>
              <path d="M480 307 L620 307" stroke="#A855F7" stroke-width="2" fill="none" stroke-dasharray="4,2" class="animated-connection"/>

              {/* Data flow particles */}
              <circle cx="375" cy="260" r="2" fill="#9333EA" class="animated-data-packet"/>
              <circle cx="300" cy="307" r="2" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="450" cy="350" r="2" fill="#22C55E" class="animated-data-packet" style="animation-delay: 0.5s"/>
              <circle cx="610" cy="372" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 1.5s"/>
            </g>

            {/* Enhanced Connection Labels with professional styling */}
            <g class="connection-labels">
              <rect x="350" y="90" width="100" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="400" y="102" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">STREAM FEED</text>
              <rect x="280" y="190" width="80" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="320" y="202" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">EVENT BUS</text>
              <rect x="520" y="190" width="80" height="20" rx="10" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="560" y="202" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="700">ANALYTICS</text>
              <rect x="320" y="330" width="80" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="360" y="342" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">SIEM</text>
            </g>
          </svg>
        `;
        title = 'Event-Driven Stream Processing Mesh';
        description = 'High-throughput pub/sub overlay (Kafka/MQ) connecting collectors → stream processors → analytics cluster, with TAP/SPAN feeds and SIEM ingestion lanes';
        break;

      case 'rug-pull-detection':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="rugShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="rugGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <marker id="rugFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#rugGlow)"/>
              </marker>
              <marker id="mlFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#3B82F6" filter="url(#rugGlow)"/>
              </marker>
              <marker id="alertFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#22C55E" filter="url(#rugGlow)"/>
              </marker>
              <pattern id="rugMeshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F59E0B" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#F59E0B" opacity="0.2"/>
              </pattern>
              <linearGradient id="dexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(245, 158, 11, 0.1)"/>
              </linearGradient>
              <linearGradient id="collectorGridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(16, 185, 129, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(16, 185, 129, 0.1)"/>
              </linearGradient>
              <radialGradient id="secureOverlayGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(147, 51, 234, 0.4)"/>
                <stop offset="70%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(147, 51, 234, 0.2)"/>
              </radialGradient>
              <linearGradient id="gpuClusterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
              </linearGradient>
            </defs>

            {/* Enhanced Background with depth */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#rugMeshPattern)" opacity="0.4"/>

            {/* Floating fraud detection particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#9333EA" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#22C55E" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* DEX Exchange Endpoints */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#F59E0B" font-size="16" font-weight="bold" class="jump-icon">⚠️</text>
            <text x="90" y="45" fill="#FBBF24" font-size="14" font-weight="bold">DECENTRALIZED EXCHANGE ENDPOINTS</text>
            <text x="30" y="60" fill="#FCA5A5" font-size="12">Real-time Contract Monitoring • Liquidity Pool Analysis • Transaction Pattern Detection</text>

            {/* Enhanced DEX Endpoint Monitors */}
            <g class="animated-server">
              <ellipse cx="120" cy="85" rx="60" ry="20" fill="url(#dexGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#rugShadow)"/>
              <text x="120" y="82" text-anchor="middle" fill="#F59E0B" font-size="12" font-weight="bold" class="jump-icon">🦄</text>
              <text x="120" y="92" text-anchor="middle" fill="#FBBF24" font-size="9">Uniswap V3</text>

              <ellipse cx="250" cy="85" rx="60" ry="20" fill="url(#dexGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#rugShadow)"/>
              <text x="250" y="82" text-anchor="middle" fill="#F59E0B" font-size="12" font-weight="bold" class="jump-icon">🥞</text>
              <text x="250" y="92" text-anchor="middle" fill="#FBBF24" font-size="9">PancakeSwap</text>

              <ellipse cx="380" cy="85" rx="60" ry="20" fill="url(#dexGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#rugShadow)"/>
              <text x="380" y="82" text-anchor="middle" fill="#F59E0B" font-size="12" font-weight="bold" class="jump-icon">🍣</text>
              <text x="380" y="92" text-anchor="middle" fill="#FBBF24" font-size="9">SushiSwap</text>

              <ellipse cx="510" cy="85" rx="60" ry="20" fill="url(#dexGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#rugShadow)"/>
              <text x="510" y="82" text-anchor="middle" fill="#F59E0B" font-size="12" font-weight="bold" class="jump-icon">📈</text>
              <text x="510" y="92" text-anchor="middle" fill="#FBBF24" font-size="9">1inch</text>

              <ellipse cx="640" cy="85" rx="60" ry="20" fill="url(#dexGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#rugShadow)"/>
              <text x="640" y="82" text-anchor="middle" fill="#F59E0B" font-size="12" font-weight="bold" class="jump-icon">⚖️</text>
              <text x="640" y="92" text-anchor="middle" fill="#FBBF24" font-size="9">Balancer</text>
            </g>

            {/* Enhanced Distributed Lightweight Collectors */}
            <g class="network-component">
              <rect x="80" y="120" width="640" height="60" rx="12" fill="url(#collectorGridGradient)" stroke="#10B981" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="90" y="145" fill="#34D399" font-size="14" font-weight="bold">DISTRIBUTED LIGHTWEIGHT COLLECTORS</text>
              <text x="90" y="160" fill="#6EE7B7" font-size="10">Smart Contract Monitoring • Transaction Analysis • Behavioral Tracking</text>

              {/* Enhanced Collector Grid */}
              <g class="animated-server">
                <rect x="100" y="155" width="80" height="15" rx="4" fill="#10B981" opacity="0.8"/>
                <text x="140" y="165" text-anchor="middle" fill="white" font-size="8">CONTRACT-MON</text>

                <rect x="190" y="155" width="80" height="15" rx="4" fill="#34D399" opacity="0.8"/>
                <text x="230" y="165" text-anchor="middle" fill="white" font-size="8">LIQ-TRACKER</text>

                <rect x="280" y="155" width="80" height="15" rx="4" fill="#6EE7B7" opacity="0.8"/>
                <text x="320" y="165" text-anchor="middle" fill="white" font-size="8">TX-ANALYZER</text>

                <rect x="370" y="155" width="80" height="15" rx="4" fill="#A7F3D0" opacity="0.8"/>
                <text x="410" y="165" text-anchor="middle" fill="white" font-size="8">GAS-MONITOR</text>

                <rect x="460" y="155" width="80" height="15" rx="4" fill="#ECFDF5" opacity="0.8"/>
                <text x="500" y="165" text-anchor="middle" fill="black" font-size="8">WHALE-DETECT</text>

                <rect x="550" y="155" width="80" height="15" rx="4" fill="#10B981" opacity="0.8"/>
                <text x="590" y="165" text-anchor="middle" fill="white" font-size="8">RUG-SIGNAL</text>

                <rect x="640" y="155" width="70" height="15" rx="4" fill="#34D399" opacity="0.8"/>
                <text x="675" y="165" text-anchor="middle" fill="white" font-size="8">API-RELAY</text>
              </g>
            </g>

            {/* Enhanced Secure Overlay Network */}
            <g class="network-component">
              <ellipse cx="400" cy="220" rx="200" ry="50" fill="url(#secureOverlayGradient)" stroke="#9333EA" stroke-width="4" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="400" y="210" text-anchor="middle" fill="#A855F7" font-size="16" font-weight="bold">SECURE OVERLAY NETWORK</text>
              <text x="400" y="225" text-anchor="middle" fill="#C4B5FD" font-size="12">Encrypted Data Distribution • ML Model Sync</text>
              <text x="400" y="240" text-anchor="middle" fill="#DDD6FE" font-size="10">End-to-End Encryption • Zero-Trust Architecture</text>

              {/* Enhanced Overlay Nodes */}
              <g class="animated-node">
                <circle cx="320" cy="200" r="12" fill="rgba(147, 51, 234, 0.4)" stroke="#9333EA" stroke-width="2"/>
                <text x="320" y="205" text-anchor="middle" fill="#A855F7" font-size="8">E1</text>

                <circle cx="400" cy="185" r="12" fill="rgba(168, 85, 247, 0.4)" stroke="#A855F7" stroke-width="2"/>
                <text x="400" y="190" text-anchor="middle" fill="#C4B5FD" font-size="8">E2</text>

                <circle cx="480" cy="200" r="12" fill="rgba(196, 181, 253, 0.4)" stroke="#C4B5FD" stroke-width="2"/>
                <text x="480" y="205" text-anchor="middle" fill="#DDD6FE" font-size="8">E3</text>

                {/* Encrypted connections */}
                <path d="M332 200 L388 185" stroke="#9333EA" stroke-width="2" stroke-dasharray="4,2" class="animated-secure-connection"/>
                <path d="M412 185 L468 200" stroke="#A855F7" stroke-width="2" stroke-dasharray="4,2" class="animated-secure-connection"/>
              </g>
            </g>

            {/* Enhanced Central GPU Training Cluster */}
            <g class="network-component">
              <rect x="150" y="280" width="500" height="90" rx="12" fill="url(#gpuClusterGradient)" stroke="#3B82F6" stroke-width="4" stroke-dasharray="12,6" class="animated-server"/>
              <text x="160" y="305" fill="#60A5FA" font-size="16" font-weight="bold">🤖 CENTRAL GPU TRAINING CLUSTER</text>
              <text x="160" y="320" fill="#93C5FD" font-size="12">Advanced ML Models • Pattern Recognition • Behavioral Analysis</text>
              <text x="160" y="335" fill="#BFDBFE" font-size="10">PyTorch • TensorFlow • CUDA Acceleration • Real-time Inference</text>

              {/* Enhanced GPU Node Array */}
              <g class="animated-node">
                <rect x="170" y="345" width="60" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#rugShadow)"/>
                <rect x="175" y="347" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="175" y="353" width="50" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="175" y="358" width="50" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="200" y="380" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">GPU-1</text>

                <rect x="240" y="345" width="60" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#rugShadow)"/>
                <rect x="245" y="347" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="245" y="353" width="50" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="245" y="358" width="50" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="270" y="380" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">GPU-2</text>

                <rect x="310" y="345" width="60" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#rugShadow)"/>
                <rect x="315" y="347" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="315" y="353" width="50" height="3" rx="1" fill="#93CFD" opacity="0.6"/>
                <rect x="315" y="358" width="50" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="340" y="380" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">GPU-3</text>

                <rect x="380" y="345" width="60" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#rugShadow)"/>
                <rect x="385" y="347" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="385" y="353" width="50" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="385" y="358" width="50" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="410" y="380" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">GPU-4</text>

                <rect x="450" y="345" width="60" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#rugShadow)"/>
                <rect x="455" y="347" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="455" y="353" width="50" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="455" y="358" width="50" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="480" y="380" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">GPU-5</text>

                <rect x="520" y="345" width="60" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#rugShadow)"/>
                <rect x="525" y="347" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="525" y="353" width="50" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="525" y="358" width="50" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="550" y="380" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">GPU-6</text>

                <rect x="590" y="345" width="60" height="20" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" filter="url(#rugShadow)"/>
                <rect x="595" y="347" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
                <rect x="595" y="353" width="50" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="595" y="358" width="50" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="620" y="380" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">GPU-7</text>
              </g>
            </g>

            {/* Enhanced Edge Inference Infrastructure */}
            <g class="network-component">
              <rect x="40" y="390" width="720" height="50" rx="12" fill="rgba(34, 197, 94, 0.08)" stroke="#22C55E" stroke-width="3" stroke-dasharray="8,4" class="animated-network-glow"/>
              <text x="50" y="410" fill="#4ADE80" font-size="14" font-weight="bold">EDGE INFERENCE INFRASTRUCTURE</text>
              <text x="50" y="425" fill="#86EFAC" font-size="10">Low-Latency Detection • Real-time Alerts • Mobile Notifications</text>

              {/* Enhanced Edge Inference Nodes */}
              <g class="animated-server">
                <rect x="60" y="410" width="120" height="25" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="#22C55E" stroke-width="2" filter="url(#rugShadow)"/>
                <circle cx="80" cy="422" r="3" fill="#22C55E" class="animated-status"/>
                <text x="100" y="418" fill="#4ADE80" font-size="9" font-weight="bold">EDGE-DETECT-1</text>
                <text x="100" y="428" fill="#86EFAC" font-size="7">Instant Detection</text>

                <rect x="200" y="410" width="120" height="25" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="#22C55E" stroke-width="2" filter="url(#rugShadow)"/>
                <circle cx="220" cy="422" r="3" fill="#34D399" class="animated-status"/>
                <text x="240" y="418" fill="#4ADE80" font-size="9" font-weight="bold">EDGE-SCORE-2</text>
                <text x="240" y="428" fill="#86EFAC" font-size="7">Risk Scoring</text>

                <rect x="340" y="410" width="120" height="25" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="#22C55E" stroke-width="2" filter="url(#rugShadow)"/>
                <circle cx="360" cy="422" r="3" fill="#6EE7B7" class="animated-status"/>
                <text x="380" y="418" fill="#4ADE80" font-size="9" font-weight="bold">EDGE-ALERT-3</text>
                <text x="380" y="428" fill="#86EFAC" font-size="7">Alert Generation</text>

                <rect x="480" y="410" width="120" height="25" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="#22C55E" stroke-width="2" filter="url(#rugShadow)"/>
                <circle cx="500" cy="422" r="3" fill="#A7F3D0" class="animated-status"/>
                <text x="520" y="418" fill="#4ADE80" font-size="9" font-weight="bold">EDGE-MOBILE-4</text>
                <text x="520" y="428" fill="#86EFAC" font-size="7">Mobile Push</text>

                <rect x="620" y="410" width="120" height="25" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="#22C55E" stroke-width="2" filter="url(#rugShadow)"/>
                <circle cx="640" cy="422" r="3" fill="#ECFDF5" class="animated-status"/>
                <text x="660" y="418" fill="#4ADE80" font-size="9" font-weight="bold">EDGE-API-5</text>
                <text x="660" y="428" fill="#86EFAC" font-size="7">API Gateway</text>
              </g>
            </g>

            {/* Enhanced Network Connections */}
            <g class="network-connections">
              {/* DEX to Collectors */}
              <path d="M120 105 L120 120" stroke="#F59E0B" stroke-width="3" fill="none" marker-end="url(#rugFlow)" class="animated-connection"/>
              <path d="M250 105 L250 120" stroke="#F59E0B" stroke-width="3" fill="none" marker-end="url(#rugFlow)" class="animated-connection"/>
              <path d="M380 105 L380 120" stroke="#F59E0B" stroke-width="3" fill="none" marker-end="url(#rugFlow)" class="animated-connection"/>
              <path d="M510 105 L510 120" stroke="#F59E0B" stroke-width="3" fill="none" marker-end="url(#rugFlow)" class="animated-connection"/>
              <path d="M640 105 L640 120" stroke="#F59E0B" stroke-width="3" fill="none" marker-end="url(#rugFlow)" class="animated-connection"/>

              {/* Collectors to Overlay */}
              <path d="M400 180 L400 195" stroke="#10B981" stroke-width="4" fill="none" marker-end="url(#streamFlow)" class="animated-high-traffic"/>
              <circle cx="400" cy="190" r="3" fill="#10B981" class="animated-data-packet"/>

              {/* Stream processors to Analytics */}
              <path d="M280 340 L300 360" stroke="#3B82F6" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#analyticsFlow)"/>
              <path d="M420 340 L400 360" stroke="#10B981" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#analyticsFlow)"/>
              <path d="M560 340 L500 360" stroke="#F59E0B" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#analyticsFlow)"/>

              {/* Analytics to SIEM */}
              <path d="M600 395 L620 350" stroke="#22C55E" stroke-width="3" fill="none" stroke-dasharray="6,3" class="animated-secure-connection" marker-end="url(#fraudFlow)"/>

              {/* Cross-processor correlation */}
              <path d="M200 307 L360 307" stroke="#8B5CF6" stroke-width="2" fill="none" stroke-dasharray="4,2" class="animated-connection"/>
              <path d="M480 307 L620 307" stroke="#A855F7" stroke-width="2" fill="none" stroke-dasharray="4,2" class="animated-connection"/>

              {/* Data flow particles */}
              <circle cx="375" cy="260" r="2" fill="#9333EA" class="animated-data-packet"/>
              <circle cx="300" cy="307" r="2" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="450" cy="350" r="2" fill="#22C55E" class="animated-data-packet" style="animation-delay: 0.5s"/>
              <circle cx="610" cy="372" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 1.5s"/>
            </g>

            {/* Enhanced Connection Labels with professional styling */}
            <g class="connection-labels">
              <rect x="100" y="90" width="100" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="150" y="102" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">ACTIVE SYNC</text>
              <rect x="550" y="90" width="100" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="600" y="102" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">ACTIVE SYNC</text>
              <rect x="320" y="165" width="130" height="20" rx="10" fill="rgba(236, 72, 153, 0.2)" stroke="#EC4899" stroke-width="1"/>
              <text x="385" y="177" text-anchor="middle" fill="#F472B6" font-size="10" font-weight="700">CROSS-REGION</text>
              <rect x="240" y="270" width="80" height="20" rx="10" fill="rgba(147, 51, 234, 0.2)" stroke="#9333EA" stroke-width="1"/>
              <text x="280" y="282" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700">BRIDGE</text>
              <rect x="470" y="270" width="80" height="20" rx="10" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="510" y="282" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="700">BRIDGE</text>
              <rect x="350" y="370" width="100" height="20" rx="10" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="400" y="382" text-anchor="middle" fill="#F87171" font-size="10" font-weight="700">SECURE WALLET</text>
            </g>
          </svg>
        `;
        title = 'Edge Telemetry + Central ML Training Cluster';
        description = 'Distributed lightweight collectors at exchange endpoints feeding a central GPU training cluster over secure overlays; inference nodes at edge for low latency';
        break;


      case 'dao-governance':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="daoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                <stop offset="100%" stop-color="rgba(147, 51, 234, 0.1)"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="#0F172A"/>

            {/* P2P Blockchain Overlay Network */}
            <ellipse cx="400" cy="120" rx="300" ry="60" fill="url(#daoGradient)" stroke="#3B82F6" stroke-width="4" stroke-dasharray="12,6" class="animated-connection"/>
            <text x="400" y="110" text-anchor="middle" fill="#60A5FA" font-size="16" font-weight="bold">🏛️ P2P BLOCKCHAIN OVERLAY NETWORK</text>
            <text x="400" y="125" text-anchor="middle" fill="#93C5FD" font-size="11">Fully Decentralized On-Chain Voting Infrastructure</text>
            <text x="400" y="140" text-anchor="middle" fill="#BFDBFE" font-size="9">Ethereum • Polygon • Arbitrum • Base</text>

            {/* Blockchain Nodes */}
            <g class="animated-node">
              <circle cx="200" cy="80" r="20" fill="#3B82F6" class="animated-status"/>
              <text x="200" y="85" text-anchor="middle" fill="white" font-size="10" font-weight="bold">ETH</text>

              <circle cx="350" cy="60" r="20" fill="#8B5CF6" class="animated-status"/>
              <text x="350" y="65" text-anchor="middle" fill="white" font-size="10" font-weight="bold">POL</text>

              <circle cx="450" cy="60" r="20" fill="#06B6D4" class="animated-status"/>
              <text x="450" y="65" text-anchor="middle" fill="white" font-size="10" font-weight="bold">ARB</text>

              <circle cx="600" cy="80" r="20" fill="#0EA5E9" class="animated-status"/>
              <text x="600" y="85" text-anchor="middle" fill="white" font-size="10" font-weight="bold">BASE</text>
            </g>

            {/* API Gateway & Relay Nodes */}
            <rect x="250" y="200" width="300" height="70" rx="12" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="3" class="animated-server"/>
            <text x="260" y="225" fill="#34D399" font-size="14" font-weight="bold">API GATEWAY & RELAY NODES</text>
            <text x="260" y="240" fill="#6EE7B7" font-size="10">Web3 Interface & Transaction Broadcasting</text>
            <text x="260" y="255" fill="#A7F3D0" font-size="9">IPFS Integration • MetaMask • WalletConnect</text>

            {/* UI & Indexing Services */}
            <g class="animated-server">
              <rect x="100" y="300" width="180" height="80" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2"/>
              <text x="110" y="325" fill="#FBBF24" font-size="12" font-weight="bold">GOVERNANCE UI</text>
              <text x="110" y="340" fill="#FCD34D" font-size="10">Web Interface</text>
              <text x="110" y="355" fill="#FEF3C7" font-size="9">• Proposal Creation</text>
              <text x="110" y="368" fill="#FEF3C7" font-size="9">• Voting Interface</text>

              <rect x="320" y="300" width="160" height="80" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="#A855F7" stroke-width="2"/>
              <text x="330" y="325" fill="#C4B5FD" font-size="12" font-weight="bold">INDEXING SERVICE</text>
              <text x="330" y="340" fill="#DDD6FE" font-size="10">Data Aggregation</text>
              <text x="330" y="355" fill="#F3F4F6" font-size="9">• Vote Tracking</text>
              <text x="330" y="368" fill="#F3F4F6" font-size="9">• Analytics</text>

              <rect x="520" y="300" width="180" height="80" rx="8" fill="rgba(236, 72, 153, 0.15)" stroke="#EC4899" stroke-width="2"/>
              <text x="530" y="325" fill="#F472B6" font-size="12" font-weight="bold">NOTIFICATION SYS</text>
              <text x="530" y="340" fill="#FBBF24" font-size="10">Alert Distribution</text>
              <text x="530" y="355" fill="#FEF3C7" font-size="9">• Discord Bots</text>
              <text x="530" y="368" fill="#FEF3C7" font-size="9">• Email Alerts</text>
            </g>

            {/* Segregated Network Subnets */}
            <rect x="50" y="410" width="200" height="30" rx="6" fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" stroke-width="2" class="animated-security-shield"/>
            <text x="60" y="428" fill="#F87171" font-size="10" font-weight="bold">Security Subnet</text>

            <rect x="300" y="410" width="200" height="30" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="#22C55E" stroke-width="2"/>
            <text x="310" y="428" fill="#4ADE80" font-size="10" font-weight="bold">Application Subnet</text>

            <rect x="550" y="410" width="200" height="30" rx="6" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="2"/>
            <text x="560" y="428" fill="#60A5FA" font-size="10" font-weight="bold">Data Subnet</text>

            {/* Network Connections */}
            <path d="M200 100 L300 180" stroke="#3B82F6" stroke-width="3" class="animated-connection"/>
            <path d="M350 80 L400 180" stroke="#8B5CF6" stroke-width="3" class="animated-connection"/>
            <path d="M450 80 L610 180" stroke="#0EA5E9" stroke-width="3" class="animated-connection"/>

            <path d="M300 270 L190 300" stroke="#10B981" stroke-width="3" class="animated-connection"/>
            <path d="M400 270 L400 300" stroke="#10B981" stroke-width="3" class="animated-connection"/>
            <path d="M500 270 L610 300" stroke="#10B981" stroke-width="3" class="animated-connection"/>

            <path d="M150 380 L150 410" stroke="#EF4444" stroke-width="2" class="animated-secure-connection"/>
            <path d="M400 380 L400 410" stroke="#22C55E" stroke-width="2" class="animated-connection"/>
            <path d="M610 380 L650 410" stroke="#3B82F6" stroke-width="2" class="animated-connection"/>
          </svg>
        `;
        title = 'P2P Overlay + API Gateway';
        description = 'Fully decentralized P2P blockchain overlay for on-chain votes, with an API gateway and relay nodes for UIs and indexing services in separate subnets';
        break;

      case 'custom-security-appliances':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="applianceShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
              </filter>
              <marker id="trafficFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#3B82F6"/>
              </marker>
            </defs>
            
            <rect width="100%" height="100%" fill="#0F172A"/>
            
            {/* Internet Traffic */}
            <rect x="50" y="50" width="700" height="80" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="2"/>
            <text x="70" y="75" fill="#FBBF24" font-size="14" font-weight="bold">INTERNET TRAFFIC</text>
            
            {/* Security Appliances */}
            <g transform="translate(200, 180)" class="animated-server">
              <rect width="80" height="50" rx="6" fill="rgba(30, 41, 59, 0.8)" stroke="#EF4444" stroke-width="2" filter="url(#applianceShadow)"/>
              <text x="40" y="25" text-anchor="middle" fill="#EF4444" font-size="12">🛡️</text>
              <text x="40" y="40" text-anchor="middle" fill="#FCA5A5" font-size="9">Firewall</text>
            </g>
          </svg>
        `;
        title = 'Custom Security Appliances - Inline Traffic Inspection';
        description = 'Security appliances deployed in inline DMZ with traffic inspection capabilities and dedicated management VLAN for secure administration';
        break;

      case 'ha-storage-solutions':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <rect width="100%" height="100%" fill="#0F172A"/>
            
            {/* Site A */}
            <rect x="50" y="50" width="300" height="350" rx="12" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" stroke-width="3"/>
            <text x="70" y="80" fill="#60A5FA" font-size="16" font-weight="bold">SITE A - PRIMARY</text>
            
            {/* Site B */}
            <rect x="450" y="50" width="300" height="350" rx="12" fill="rgba(168, 85, 247, 0.1)" stroke="#A855F7" stroke-width="3"/>
            <text x="470" y="80" fill="#C4B5FD" font-size="16" font-weight="bold">SITE B - SECONDARY</text>
          </svg>
        `;
        title = 'High Availability Storage Solutions - Dual-Site Replication';
        description = 'Active/active storage clusters across geographic sites with synchronous and asynchronous replication';
        break;

      case 'treasury-risk-dashboards':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <rect width="100%" height="100%" fill="#0F172A"/>
            
            {/* Financial VLAN */}
            <rect x="50" y="50" width="700" height="200" rx="12" fill="rgba(239, 68, 68, 0.1)" stroke="#EF4444" stroke-width="3"/>
            <text x="70" y="80" fill="#F87171" font-size="16" font-weight="bold">SECURE FINANCIAL VLAN</text>
          </svg>
        `;
        title = 'Treasury & Risk Dashboards - Secure Financial Infrastructure';
        description = 'Financial engines and vaults in segregated subnets with read-only market data feeds';
        break;

      case 'defi-yield-arbitrage':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <rect width="100%" height="100%" fill="#0F172A"/>
            
            {/* Liquidity Pool Mesh */}
            <rect x="50" y="50" width="700" height="150" rx="12" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" stroke-width="3"/>
            <text x="70" y="80" fill="#34D399" font-size="16" font-weight="bold">MULTI-POOL LIQUIDITY MESH</text>
          </svg>
        `;
        title = 'DeFi Yield & Arbitrage Systems - Multi-Pool Liquidity Mesh';
        description = 'Low-latency connectivity between liquidity nodes and exchange relays with secure wallet nodes';
        break;

      case 'training-knowledge-platforms':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <rect width="100%" height="100%" fill="#0F172A"/>
            
            {/* DMZ - Web Tier */}
            <rect x="50" y="50" width="700" height="100" rx="12" fill="rgba(34, 197, 94, 0.1)" stroke="#22C55E" stroke-width="3"/>
            <text x="70" y="80" fill="#4ADE80" font-size="16" font-weight="bold">DMZ - PRESENTATION / WEB TIER</text>
          </svg>
        `;
        title = 'Training & Knowledge Platforms - Multi-Tier LMS Topology';
        description = 'Presentation/web tier in DMZ, application tier in private subnets, content storage with CDN';
        break;

    }

    // Use InteractiveTopology component for full functionality
    return (
      <InteractiveTopology
        svgContent={svgContent}
        title={title}
        description={description}
        className="w-full h-full min-h-[400px]"
        enablePerformanceMode={true}
        animationQuality="medium"
        minScale={0.2}
        maxScale={6}
        initialFit={true}
      />
    );
  }, [solutionId]);

  return renderTopology;
};

const SolutionCard = ({ solution, isActive, onHover }: {
  solution: BusinessSolution,
  isActive: boolean,
  onHover: (id: string | null) => void
}) => {
  const IconComponent = solution.icon;

  return (
    <div
      className="solution-card bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 group cursor-pointer relative"
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

      <div className="relative">
        {/* Render ExpandableTopologyDiagram for niche solutions */}
        {solution.category === 'niche' && (
          <div className="relative">
            <ExpandableTopologyDiagram solutionId={solution.id} />
          </div>
        )}
        {/* Render ExpandableTopologyDiagram for specialized solutions */}
        {solution.category === 'specialized' && (
          <div className="relative">
            <ExpandableTopologyDiagram solutionId={solution.id} />
          </div>
        )}
        {/* Render original TopologyDiagram for general solutions */}
        {solution.category === 'general' && (
          <div className="relative">
            <ExpandableTopologyDiagram solutionId={solution.id} />
          </div>
        )}
      </div>
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
      description: 'Multi-Cloud Active/Active + Blockchain Overlay with dedicated blockchain P2P overlay networks, HSMs in isolated subnets and load-balanced API gateways.',
      workflow: [
        { id: '1', icon: Cloud, label: 'Multi-Cloud Setup', description: 'Deploy across multiple cloud providers' },
        { id: '2', icon: Shield, label: 'Security Layer', description: 'Implement HSM and security protocols' },
        { id: '3', icon: Network, label: 'Blockchain Network', description: 'Configure P2P overlay networks' }
      ],
      category: 'niche'
    },
    {
      id: 'nft-marketplace',
      name: 'NFT Marketplaces & Ticketing',
      icon: Ticket,
      description: 'Edge-Accelerated CDN + API Gateway Topology with CDN + edge cache for content, central API gateway to microservices, and secure wallet node cluster.',
      workflow: [
        { id: '1', icon: Globe, label: 'CDN Setup', description: 'Deploy global content delivery network' },
        { id: '2', icon: Settings, label: 'API Gateway', description: 'Configure microservices routing' },
        { id: '3', icon: Lock, label: 'Wallet Security', description: 'Implement secure wallet infrastructure' }
      ],
      category: 'niche'
    },
    {
      id: 'quant-trading',
      name: 'Quantitative Trading Platforms',
      icon: TrendingUp,
      description: 'Leaf-Spine Low-Latency Fabric (Colo + DMA) with colocated leaf-spine network, deterministic switching, and direct market access fabric.',
      workflow: [
        { id: '1', icon: Network, label: 'Leaf-Spine Network', description: 'Deploy low-latency switching fabric' },
        { id: '2', icon: BarChart3, label: 'Market Data', description: 'Configure multicast market feeds' },
        { id: '3', icon: Target, label: 'DMA Access', description: 'Implement direct market access' }
      ],
      category: 'niche'
    },
    {
      id: 'fraud-detection',
      name: 'Fraud & Scam Detection',
      icon: AlertTriangle,
      description: 'Event-Driven Stream Processing Mesh with high-throughput pub/sub overlay connecting collectors to stream processors and analytics clusters.',
      workflow: [
        { id: '1', icon: Eye, label: 'Data Collection', description: 'Deploy fraud detection sensors' },
        { id: '2', icon: Network, label: 'Stream Processing', description: 'Configure real-time analytics' },
        { id: '3', icon: Bell, label: 'Alert System', description: 'Implement automated response' }
      ],
      category: 'niche'
    },
    {
      id: 'ai-rug-detection',
      name: 'AI-Powered Rug Pull Detection',
      icon: Bot,
      description: 'Edge Telemetry + Central ML Training Cluster with distributed lightweight collectors and central GPU training cluster over secure overlays.',
      workflow: [
        { id: '1', icon: Antenna, label: 'Edge Collectors', description: 'Deploy telemetry collection points' },
        { id: '2', icon: Cpu, label: 'ML Training', description: 'Configure GPU training cluster' },
        { id: '3', icon: Shield, label: 'AI Detection', description: 'Deploy AI-powered detection' }
      ],
      category: 'niche'
    },
    {
      id: 'dao-governance',
      name: 'DAO Governance Platforms',
      icon: Users,
      description: 'P2P Overlay + API Gateway with fully decentralized P2P blockchain overlay for on-chain votes and API gateway for UIs and indexing services.',
      workflow: [
        { id: '1', icon: Network, label: 'P2P Network', description: 'Deploy decentralized overlay' },
        { id: '2', icon: CheckCircle, label: 'Voting System', description: 'Configure on-chain governance' },
        { id: '3', icon: Globe, label: 'UI Gateway', description: 'Implement user interfaces' }
      ],
      category: 'niche'
    }
  ];

  const specializedSolutions: BusinessSolution[] = [
    {
      id: 'pen-test',
      name: 'Pen-Test Toolkits & Scripts',
      icon: Shield,
      description: 'Isolated Test Lab VLAN with air-gapped or VLAN-segmented test lab and controlled gateway for safe pentesting.',
      workflow: [
        { id: '1', icon: Lock, label: 'Isolation', description: 'Set up isolated test environment' },
        { id: '2', icon: Eye, label: 'Assessment', description: 'Conduct security testing' },
        { id: '3', icon: FileText, label: 'Reporting', description: 'Generate security reports' }
      ],
      category: 'specialized'
    },
    {
      id: 'soc-automation',
      name: 'SOC Automation Starter',
      icon: Settings,
      description: 'SIEM Ingest Fabric + Monitoring Backbone with dedicated monitoring backbone and orchestration subnetwork for playbook automation.',
      workflow: [
        { id: '1', icon: Eye, label: 'Monitoring', description: 'Deploy SIEM infrastructure' },
        { id: '2', icon: Bot, label: 'Automation', description: 'Configure automated responses' },
        { id: '3', icon: Bell, label: 'Alerting', description: 'Implement alert systems' }
      ],
      category: 'specialized'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI-Powered Cybersecurity',
      icon: Bot,
      description: 'Hybrid Cloud GPU Cluster + Ingest Overlay with GPU-accelerated model training cluster and encrypted data ingestion overlay.',
      workflow: [
        { id: '1', icon: Cpu, label: 'GPU Cluster', description: 'Deploy AI training infrastructure' },
        { id: '2', icon: Shield, label: 'Threat Detection', description: 'Implement AI threat analysis' },
        { id: '3', icon: Network, label: 'Response', description: 'Automated threat response' }
      ],
      category: 'specialized'
    },
    {
      id: 'dsoc',
      name: 'Decentralized SOC (dSOC)',
      icon: Network,
      description: 'Secure Multi-Party Mesh + Blockchain Audit Trail with federated mesh connecting participating SOC nodes.',
      workflow: [
        { id: '1', icon: Users, label: 'Federation', description: 'Connect multiple SOC nodes' },
        { id: '2', icon: Lock, label: 'Blockchain Audit', description: 'Immutable audit trails' },
        { id: '3', icon: Shield, label: 'Collaborative Defense', description: 'Shared threat intelligence' }
      ],
      category: 'specialized'
    },
    {
      id: 'ai-threat-hunting',
      name: 'AI Threat Hunting System',
      icon: Search,
      description: 'Data Lake Ingest + Analytics Fabric with high-volume telemetry ingest pipeline and analytics cluster.',
      workflow: [
        { id: '1', icon: Database, label: 'Data Lake', description: 'Ingest security telemetry' },
        { id: '2', icon: Bot, label: 'AI Analysis', description: 'Machine learning threat detection' },
        { id: '3', icon: Target, label: 'Threat Hunting', description: 'Proactive threat discovery' }
      ],
      category: 'specialized'
    },
    {
      id: 'tokenomics-simulator',
      name: 'Tokenomics Simulator',
      icon: Calculator,
      description: 'Compute Cluster with Sandbox Overlay for isolated compute sandbox with ephemeral networks for simulation runs.',
      workflow: [
        { id: '1', icon: Cpu, label: 'Compute Cluster', description: 'Deploy simulation infrastructure' },
        { id: '2', icon: Settings, label: 'Sandbox Setup', description: 'Create isolated test environments' },
        { id: '3', icon: BarChart3, label: 'Economic Modeling', description: 'Run tokenomics simulations' }
      ],
      category: 'specialized'
    },
    {
      id: 'web3-ecommerce',
      name: 'Web3 E-Commerce Platform',
      icon: ShoppingCart,
      description: 'Hybrid Edge + Cloud Backend with edge CDN for storefronts and cloud API backend in private subnets.',
      workflow: [
        { id: '1', icon: Globe, label: 'Edge Distribution', description: 'Deploy global CDN' },
        { id: '2', icon: Cloud, label: 'Cloud Backend', description: 'Secure API infrastructure' },
        { id: '3', icon: Lock, label: 'Crypto Payments', description: 'Blockchain payment integration' }
      ],
      category: 'specialized'
    },
    {
      id: 'compliance-reporting',
      name: 'Compliance & Reporting Generators',
      icon: FileText,
      description: 'Secure Document Generation Zone with document generation cluster in isolated subnet and signed artifact storage.',
      workflow: [
        { id: '1', icon: Lock, label: 'Isolation', description: 'Set up isolated test environment' },
        { id: '2', icon: FileText, label: 'Report Generation', description: 'Automated compliance reports' },
        { id: '3', icon: CheckCircle, label: 'Regulatory Submission', description: 'Secure regulator delivery' }
      ],
      category: 'specialized'
    },
    {
      id: 'cloud-dr',
      name: 'Cloud DR & Hardening',
      icon: CloudSnow,
      description: 'Immutable Backup Network + Orchestration Plane with dedicated backup overlay and hardened control plane.',
      workflow: [
        { id: '1', icon: HardDrive, label: 'Backup Systems', description: 'Immutable backup infrastructure' },
        { id: '2', icon: ArrowLeftRight, label: 'Replication', description: 'Encrypted data replication' },
        { id: '3', icon: Repeat, label: 'Disaster Recovery', description: 'Automated failover systems' }
      ],
      category: 'specialized'
    },
    {
      id: 'iot-telemetry',
      name: 'IoT Telemetry Stack',
      icon: Antenna,
      description: 'Converged Edge-Gateway Topology with field IoT devices and local gateway clusters connected via secure TLS tunnels.',
      workflow: [
        { id: '1', icon: Antenna, label: 'IoT Devices', description: 'Deploy field sensor networks' },
        { id: '2', icon: Database, label: 'Data Collection', description: 'Sensor data gathering' },
        { id: '3', icon: Cpu, label: 'Edge Processing', description: 'Local data analysis' },
        { id: '4', icon: Cloud, label: 'Central Analytics', description: 'Centralized insights' }
      ],
      category: 'specialized'
    },
    {
      id: 'edge-ai',
      name: 'Edge AI Deployments',
      icon: Cpu,
      description: 'Distributed Edge Nodes with Central Orchestration using edge nodes in local networks with cloud orchestration plane.',
      workflow: [
        { id: '1', icon: Network, label: 'Edge Distribution', description: 'Deploy edge AI nodes' },
        { id: '2', icon: Bot, label: 'AI Processing', description: 'Local machine learning' },
        { id: '3', icon: Settings, label: 'Central Control', description: 'Cloud orchestration' }
      ],
      category: 'specialized'
    },
    {
      id: 'custom-security-appliances',
      name: 'Custom Security Appliances',
      icon: Lock,
      description: 'Isolated Appliance Subnet with Inline TAPs - appliances deployed in inline DMZ or inspection path with dedicated management VLAN.',
      workflow: [
        { id: '1', icon: Network, label: 'Inline Deployment', description: 'Deploy appliances in traffic path' },
        { id: '2', icon: Eye, label: 'Traffic Inspection', description: 'Monitor and analyze traffic' },
        { id: '3', icon: Settings, label: 'Management VLAN', description: 'Secure appliance management' }
      ],
      category: 'specialized'
    },
    {
      id: 'ha-storage-solutions',
      name: 'High Availability Storage Solutions',
      icon: HardDrive,
      description: 'Dual-Site Replicated SAN/NAS Fabric - active/active storage clusters across sites with synchronous/asynchronous replication.',
      workflow: [
        { id: '1', icon: HardDrive, label: 'Storage Cluster', description: 'Deploy distributed storage' },
        { id: '2', icon: ArrowLeftRight, label: 'Site Replication', description: 'Cross-site data sync' },
        { id: '3', icon: CheckCircle, label: 'High Availability', description: 'Active/active failover' }
      ],
      category: 'specialized'
    },
    {
      id: 'treasury-risk-dashboards',
      name: 'Treasury & Risk Dashboards',
      icon: BarChart3,
      description: 'Secure Financial VLAN + Read-Only Feeds - financial engines and vaults in segregated subnets with read-only market feeds.',
      workflow: [
        { id: '1', icon: Lock, label: 'Financial Vault', description: 'Secure financial data storage' },
        { id: '2', icon: BarChart3, label: 'Risk Analytics', description: 'Real-time risk assessment' },
        { id: '3', icon: Share, label: 'Market Data', description: 'External market feed integration' }
      ],
      category: 'specialized'
    },
    {
      id: 'defi-yield-arbitrage',
      name: 'DeFi Yield & Arbitrage Systems',
      icon: TrendingUp,
      description: 'Multi-Pool Liquidity Mesh - low-latency connectivity between liquidity nodes and exchange relays with secure wallet nodes.',
      workflow: [
        { id: '1', icon: Network, label: 'Liquidity Mesh', description: 'Connect multiple liquidity pools' },
        { id: '2', icon: TrendingUp, label: 'Arbitrage Engine', description: 'Automated opportunity detection' },
        { id: '3', icon: Lock, label: 'Secure Wallets', description: 'HSM-protected wallet nodes' }
      ],
      category: 'specialized'
    },
    {
      id: 'training-knowledge-platforms',
      name: 'Training & Knowledge Platforms',
      icon: GraduationCap,
      description: 'Multi-Tier LMS Topology - presentation/web tier in DMZ, application tier in private subnets, content storage with CDN.',
      workflow: [
        { id: '1', icon: Globe, label: 'Web Tier', description: 'Public-facing presentation layer' },
        { id: '2', icon: Database, label: 'Content Storage', description: 'Secure content repository' },
        { id: '3', icon: GraduationCap, label: 'Learning Management', description: 'Training delivery platform' }
      ],
      category: 'specialized'
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