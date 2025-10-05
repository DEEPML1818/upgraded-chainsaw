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
        title = 'Secure Document Generation Zone';
        description = 'Document gen cluster in an isolated subnet with signed artifact storage and a locked egress policy for regulator submission.';
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


      // Updated switch-case snippets for the ExpandableTopologyDiagram
      // Replace the corresponding cases in your existing ExpandableTopologyDiagram's switch(solutionId) block.

      /* --------------------------- PEN-TEST TOPOLOGY --------------------------- */
      /* Replace or add this inside your ExpandableTopologyDiagram switch(solutionId) */
      case 'pen-test':
        svgContent = `
      <svg viewBox="0 0 1400 820" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pen-test lab topology">
        <defs>
          <linearGradient id="bg" x1="0" x2="1"><stop offset="0%" stop-color="#071426"/><stop offset="100%" stop-color="#021021"/></linearGradient>
          <filter id="soft"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.12"/></filter>
          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#60A5FA"/></marker>
          <style>
            .t { font-family: Inter, system-ui, -apple-system; fill:#E6F0FF; font-size:13px }
            .s { fill:#94A3B8; font-size:11px }
            .zone { fill: rgba(2,6,23,0.66); stroke-width:2 }
            .ephemeral { stroke-dasharray:7 6 }
            .box { fill:#061122; stroke-width:1.5 }
            .small { font-size:10px; fill:#94a3b8 }
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>

        <text x="36" y="44" class="t" font-weight="700" font-size="18">Pen-Test Lab — Air-gapped, Segmented & Audited Environment</text>
        <text x="36" y="64" class="small">Design: Bastioned access → Mirrored (one-way) sanitized snapshots → Ephemeral sandbox VLANs → Controlled egress + immutable telemetry</text>

        <!-- Air-gapped envelope -->
        <g filter="url(#soft)">
          <rect x="28" y="92" width="1344" height="620" rx="16" class="zone" stroke="#EF4444"/>
          <text x="48" y="118" class="small" fill="#FCA5A5">Air-gapped Test Envelope (VLAN 600) — strict ingress/egress, audited)</text>
        </g>

        <!-- Bastion / Jump (Management) -->
        <g>
          <rect x="56" y="156" width="260" height="140" rx="12" class="box" stroke="#60A5FA"/>
          <text x="186" y="186" text-anchor="middle" class="t">Jump Bastion / Admin Gateway</text>
          <text x="186" y="204" text-anchor="middle" class="s">MFA, session recording, IP allowlist</text>
          <text x="186" y="222" text-anchor="middle" class="small">Mgmt VLAN: VLAN 602 — 10.62.0.0/24</text>
        </g>

        <!-- Mirror/TAP / Snapshot scrubber -->
        <g>
          <rect x="344" y="156" width="320" height="140" rx="12" class="box" stroke="#FCA5A5"/>
          <text x="504" y="186" text-anchor="middle" class="t">Mirrored Snapshot Zone</text>
          <text x="504" y="204" text-anchor="middle" class="s">Sanitizer (PII redaction) • One-way replication</text>
          <text x="504" y="222" text-anchor="middle" class="small">Test VLAN: VLAN 600 — 10.60.0.0/24 (read-only snapshots)</text>

          <!-- internal clones -->
          <rect x="384" y="216" width="120" height="64" rx="8" class="box" stroke="#EF4444"/>
          <text x="444" y="249" text-anchor="middle" class="small">App Clone</text>

          <rect x="516" y="216" width="120" height="64" rx="8" class="box" stroke="#EF4444"/>
          <text x="576" y="249" text-anchor="middle" class="small">DB Snapshot</text>
        </g>

        <!-- Ephemeral Labs -->
        <g>
          <rect x="704" y="156" width="616" height="320" rx="12" class="box" stroke="#F97316" class="ephemeral"/>
          <text x="1012" y="186" text-anchor="middle" class="t">Ephemeral Labs VLAN (VLAN 601)</text>
          <text x="1012" y="204" text-anchor="middle" class="s">Disposable VMs/containers • Network NS/iptables isolation</text>

          <!-- key components inside ephemeral -->
          <rect x="740" y="220" width="160" height="96" rx="10" class="box" stroke="#A855F7"/>
          <text x="820" y="256" text-anchor="middle" class="small">Exploit Runner (Isolated)</text>

          <rect x="920" y="220" width="160" height="96" rx="10" class="box" stroke="#3B82F6"/>
          <text x="1000" y="256" text-anchor="middle" class="small">Payload Sandbox (Containerized)</text>

          <rect x="1100" y="220" width="160" height="96" rx="10" class="box" stroke="#10B981"/>
          <text x="1180" y="256" text-anchor="middle" class="small">Telemetry Collector (Immutable)</text>

          <!-- Quarantine VLAN for discovered artifacts -->
          <rect x="840" y="336" width="360" height="86" rx="8" class="box" stroke="#EF4444"/>
          <text x="1020" y="362" text-anchor="middle" class="small">Quarantine / Forensics VLAN (VLAN 603)</text>
        </g>

        <!-- Scanner Farm -->
        <g>
          <rect x="56" y="336" width="260" height="140" rx="12" class="box" stroke="#F59E0B"/>
          <text x="186" y="368" text-anchor="middle" class="t">Scanner Farm</text>
          <text x="186" y="386" text-anchor="middle" class="s">Nmap, Nessus, ZAP (in isolated nodes)</text>
        </g>

        <!-- Telemetry & SIEM -->
        <g>
          <rect x="56" y="512" width="420" height="120" rx="12" class="box" stroke="#A3E635"/>
          <text x="266" y="548" text-anchor="middle" class="t">Immutable Telemetry & Evidence Store</text>
          <text x="266" y="566" text-anchor="middle" class="s">WORM store for pcaps, logs, signed artifacts. Forward to SIEM (read-only)</text>
        </g>

        <!-- Controlled Egress appliance -->
        <g>
          <rect x="520" y="512" width="800" height="120" rx="12" class="box" stroke="#10B981"/>
          <text x="920" y="548" text-anchor="middle" class="t">Controlled Egress Gateway — DLP + Content Scrubbing</text>
          <text x="920" y="566" text-anchor="middle" class="s">Only allow approved exfil endpoints; signed export bundles only; full audit</text>
        </g>

        <!-- Flow arrows -->
        <path d="M316 216 L344 216" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M664 216 L704 216" stroke="#F97316" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M920 320 L920 512" stroke="#A3E635" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- small legend -->
        <g>
          <rect x="36" y="748" width="420" height="56" rx="8" fill="#021024" stroke="#94A3B8"/>
          <text x="56" y="768" class="small">Legend: VLAN IDs shown; dashed = ephemeral; WORM = immutable store; Jump = bastioned access only</text>
        </g>
      </svg>
        `;
        title = 'Pen-Test Lab — Air-gapped / Segmented';
        description = 'Bastioned admin access → one-way sanitized snapshots → ephemeral sandbox VLANs with quarantine and controlled egress; immutable telemetry & SIEM forwarding.';
        break;


      /* ------------------------- SOC AUTOMATION TOPOLOGY ----------------------- */
      /* ------------------------- SOC AUTOMATION TOPOLOGY (robust) ------------------------- */
      case 'soc-automation':
        svgContent = `
      <svg viewBox="0 0 1400 820" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SOC automation topology">
        <defs>
          <linearGradient id="bg" x1="0" x2="1">
            <stop offset="0%" stop-color="#04121a"/>
            <stop offset="100%" stop-color="#00121a"/>
          </linearGradient>

          <filter id="soft"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.12"/></filter>

          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M0 0 L12 6 L0 12 z" fill="#F59E0B"/>
          </marker>

          <style>
            .title { font-family: Inter, system-ui, -apple-system; fill:#DFF6FF; font-size:18px; font-weight:700; }
            .note  { font-family: Inter, system-ui; fill:#94A3B8; font-size:11px; }
            .zone  { fill: rgba(2,6,23,0.64); stroke-width:2 }
            .box   { fill:#061428; stroke-width:1.5 }
            .small { font-family: Inter; fill:#BFDFFF; font-size:11px }
            .muted { fill:#94A3B8; font-size:10.5px }
            .dashed { stroke-dasharray:6 6 }
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>

        <text x="36" y="44" class="title">SOC Automation — TAP/SPAN Ingest Fabric + Hardened Orchestration (SOAR)</text>
        <text x="36" y="68" class="note">Design objectives: high-fidelity telemetry, fast enrichment & indexing, automated playbooks, strict management plane isolation</text>

        <!-- TAP / SPAN collectors -->
        <g filter="url(#soft)">
          <rect x="40" y="96" width="280" height="180" rx="12" class="zone" stroke="#F59E0B"/>
          <text x="180" y="128" text-anchor="middle" class="small">TAP / SPAN Collection Layer</text>
          <text x="180" y="146" text-anchor="middle" class="muted">Passive mirroring & inline collectors</text>

          <!-- TAP modules (icons) -->
          <rect x="64" y="146" width="120" height="104" rx="8" class="box" stroke="#F59E0B"/>
          <text x="124" y="186" text-anchor="middle" class="small">Packet TAPs</text>
          <rect x="196" y="146" width="120" height="104" rx="8" class="box" stroke="#60A5FA"/>
          <text x="256" y="186" text-anchor="middle" class="small">L7 Brokers / Inline IDS</text>
        </g>

        <!-- Host agents -->
        <g>
          <rect x="360" y="96" width="240" height="120" rx="12" class="box" stroke="#60A5FA"/>
          <text x="480" y="126" text-anchor="middle" class="small">Host Telemetry Agents</text>
          <text x="480" y="144" text-anchor="middle" class="muted">osquery, Wazuh, EDR, sysmon</text>

          <rect x="360" y="220" width="240" height="56" rx="8" class="box" stroke="#94A3B8"/>
          <text x="480" y="256" text-anchor="middle" class="small">Agent Gateways / Relay (TLS + mTLS)</text>
        </g>

        <!-- Ingest Fabric (Kafka / message bus) -->
        <g>
          <rect x="640" y="96" width="420" height="320" rx="14" class="zone" stroke="#10B981" filter="url(#soft)"/>
          <text x="860" y="126" text-anchor="middle" class="small">SIEM Ingest Fabric — Kafka / NATS / Pulsar</text>
          <text x="860" y="144" text-anchor="middle" class="muted">Normalization • Enrichment • Deduplication • Short-term hotstore</text>

          <!-- Enrichment boxes -->
          <rect x="680" y="160" width="120" height="84" rx="8" class="box" stroke="#A855F7"/>
          <text x="740" y="200" text-anchor="middle" class="small">Threat Intel Enricher</text>

          <rect x="820" y="160" width="120" height="84" rx="8" class="box" stroke="#3B82F6"/>
          <text x="880" y="200" text-anchor="middle" class="small">User/Asset Enricher</text>

          <rect x="960" y="160" width="120" height="84" rx="8" class="box" stroke="#F97316"/>
          <text x="1020" y="200" text-anchor="middle" class="small">Parsing / IOC extraction</text>

          <!-- Hotstore cache -->
          <rect x="740" y="260" width="240" height="112" rx="10" class="box" stroke="#60A5FA"/>
          <text x="860" y="302" text-anchor="middle" class="small">Hotstore (ClickHouse / Elasticsearch)</text>
          <text x="860" y="320" text-anchor="middle" class="muted">Fast query for triage, TTL-based indices</text>
        </g>

        <!-- SOAR / Orchestration Plane -->
        <g>
          <rect x="1100" y="96" width="260" height="240" rx="12" class="zone" stroke="#8B5CF6" filter="url(#soft)"/>
          <text x="1230" y="126" text-anchor="middle" class="small">Orchestration & Playbooks (SOAR)</text>
          <text x="1230" y="144" text-anchor="middle" class="muted">Centrally runbooks, RBAC, audit logs</text>

          <rect x="1120" y="160" width="220" height="96" rx="8" class="box" stroke="#A78BFA"/>
          <text x="1230" y="192" text-anchor="middle" class="small">Playbook Engine</text>

          <rect x="1120" y="264" width="220" height="60" rx="8" class="box" stroke="#C4B5FD"/>
          <text x="1230" y="296" text-anchor="middle" class="small">Connector Store (Tickets, Firewalls, MDM)</text>
        </g>

        <!-- Alert / Dashboard -->
        <g>
          <rect x="640" y="440" width="720" height="180" rx="12" class="box" stroke="#3B82F6"/>
          <text x="1000" y="468" text-anchor="middle" class="small">Alert Manager & Dashboards</text>
          <text x="1000" y="486" text-anchor="middle" class="muted">Role-based dashboards • Ticketing integration • SOC NOC views</text>
        </g>

        <!-- Long-term cold store -->
        <g>
          <rect x="40" y="440" width="520" height="180" rx="12" class="box" stroke="#A3E635"/>
          <text x="300" y="468" text-anchor="middle" class="small">Long-term Evidence Archive</text>
          <text x="300" y="486" text-anchor="middle" class="muted">S3 WORM, Glacier/Cold, Retention & legal hold</text>
        </g>

        <!-- Management / Bastion -->
        <g>
          <rect x="40" y="660" width="520" height="120" rx="12" class="box" stroke="#60A5FA"/>
          <text x="300" y="700" text-anchor="middle" class="small">Management Plane (Bastions, Admins)</text>
          <text x="300" y="718" text-anchor="middle" class="muted">Isolated network, strict MFA and session recording</text>
        </g>

        <!-- Flows -->
        <path d="M320 186 L360 156" stroke="#F59E0B" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M480 196 L640 196" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M880 320 L1100 200" stroke="#A78BFA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M860 372 L860 440" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- legend -->
        <g>
          <rect x="580" y="660" width="780" height="120" rx="8" fill="#021024" stroke="#94A3B8"/>
          <text x="600" y="686" class="muted">Legend: TAP = passive capture; Agents = host telemetry; Ingest = message bus + enrichment; SOAR = automation & connectors; Hotstore = fast triage store; Coldstore = WORM archive</text>
          <text x="600" y="704" class="muted">Tip: keep orchestration plane in a separate management VPC/subnet and restrict egress to only allowed connector endpoints</text>
        </g>
      </svg>
        `;
        title = 'SIEM Ingest Fabric + Monitoring Backbone';
        description = 'TAP/SPAN collectors and host agents feed a centralized, normalized ingest fabric with enrichment layers, a hotstore for triage, long-term evidence archive, and a hardened SOAR orchestration plane.';
        break;


      /* ---------------------- AI-POWERED CYBERSECURITY TOPOLOGY ----------------- */
      /* ---------------------- AI-POWERED CYBERSECURITY (robust) ---------------------- */
      case 'ai-cybersecurity':
        svgContent = `
      <svg viewBox="0 0 1400 820" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI cybersecurity topology">
        <defs>
          <linearGradient id="bg" x1="0" x2="1"><stop offset="0%" stop-color="#071426"/><stop offset="100%" stop-color="#021021"/></linearGradient>
          <filter id="soft"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.12" /></filter>
          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#A855F7" /></marker>
          <style>
            .title { font-family: Inter, system-ui, -apple-system; fill:#EDE9FE; font-size:18px; font-weight:700; }
            .note  { font-family: Inter; fill:#94A3B8; font-size:11px; }
            .zone  { fill: rgba(2,6,23,0.66); stroke-width:2; }
            .box   { fill:#071022; stroke-width:1.5; }
            .muted { fill:#9CA3AF; font-size:11px; }
            .small { fill:#C7D2FE; font-size:11px; }
            .ephemeral { stroke-dasharray:7 6; }
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)" />
        <text x="36" y="44" class="title">AI-Powered Cybersecurity — Encrypted Ingest, Hybrid GPU Training & Isolated Model Serving</text>
        <text x="36" y="64" class="note">Goal: confidential training, auditable data lineage, isolated model serving, and safe model updates (canary/blue-green).</text>

        <!-- Encrypted Ingest Overlay -->
        <g filter="url(#soft)">
          <rect x="36" y="96" width="1328" height="96" rx="12" class="zone" stroke="#94A3B8" />
          <text x="700" y="140" text-anchor="middle" class="small">Encrypted Ingest Overlay — TLS + mTLS + Client KMS-wrapped envelopes</text>
          <text x="700" y="158" text-anchor="middle" class="muted">Ingress: logs, telemetry, pcaps → pre-processor (scrubbing/PII masking) → secure queue</text>
        </g>

        <!-- Data Lake (secure) -->
        <g>
          <rect x="48" y="220" width="360" height="260" rx="12" class="box" stroke="#10B981" />
          <text x="228" y="248" text-anchor="middle" class="small">Secure Encrypted Data Lake</text>
          <text x="228" y="266" text-anchor="middle" class="muted">KMS-backed buckets, immutability option, dataset versioning</text>
          <text x="228" y="286" text-anchor="middle" class="muted">Data access via ephemeral, auditable query workers</text>
        </g>

        <!-- Feature Store -->
        <g>
          <rect x="440" y="220" width="320" height="150" rx="12" class="box" stroke="#F97316" />
          <text x="600" y="248" class="small" text-anchor="middle">Feature Store / Data Prep</text>
          <text x="600" y="266" class="muted" text-anchor="middle">Feature pipelines, drift checks, anonymization</text>
        </g>

        <!-- GPU Training Cluster (hybrid cloud) -->
        <g filter="url(#soft)">
          <rect x="800" y="220" width="520" height="260" rx="12" class="zone" stroke="#A855F7" />
          <text x="1060" y="248" class="small" text-anchor="middle">GPU Training Cluster (Hybrid) — Isolated Subnets</text>
          <text x="1060" y="266" class="muted" text-anchor="middle">Ephemeral GPU nodes, confidential compute options, encrypted scratch</text>

          <!-- trainer pods -->
          <rect x="840" y="300" width="160" height="96" rx="10" class="box" stroke="#A855F7" />
          <text x="920" y="336" text-anchor="middle" class="small">Model Trainer</text>

          <rect x="1012" y="300" width="160" height="96" rx="10" class="box" stroke="#60A5FA" />
          <text x="1092" y="336" text-anchor="middle" class="small">Distributed Trainer Controller</text>

          <rect x="1184" y="300" width="112" height="96" rx="10" class="box" stroke="#34D399" />
          <text x="1258" y="336" text-anchor="middle" class="small">Checkpoint Store (Encrypted)</text>
        </g>

        <!-- Model Registry & Governance -->
        <g>
          <rect x="440" y="392" width="320" height="150" rx="12" class="box" stroke="#C4B5FD" />
          <text x="600" y="420" class="small" text-anchor="middle">Model Registry & Governance</text>
          <text x="600" y="438" class="muted" text-anchor="middle">Signed model artifacts, provenance metadata, approval workflows</text>
          <text x="600" y="456" class="muted" text-anchor="middle">Drift detectors, explainability metadata attached</text>
        </g>

        <!-- Model Serving / Inference (isolated) -->
        <g>
          <rect x="48" y="500" width="500" height="240" rx="12" class="box" stroke="#3B82F6" />
          <text x="298" y="532" class="small" text-anchor="middle">Isolated Model Serving VLAN</text>
          <text x="298" y="550" class="muted" text-anchor="middle">Authenticated API endpoints, rate-limited, per-tenant isolation</text>

          <!-- edge inference nodes -->
          <rect x="84" y="580" width="160" height="96" rx="10" class="box" stroke="#3B82F6" />
          <text x="164" y="616" text-anchor="middle" class="small">Model Serving Pod (Canary)</text>

          <rect x="264" y="580" width="160" height="96" rx="10" class="box" stroke="#60A5FA" />
          <text x="344" y="616" text-anchor="middle" class="small">Model Serving Pod (Prod)</text>
        </g>

        <!-- Cert/KMS/HSM -->
        <g>
          <rect x="560" y="500" width="320" height="160" rx="12" class="box" stroke="#10B981" />
          <text x="720" y="532" class="small" text-anchor="middle">KMS / HSM (Key Management & Signing)</text>
          <text x="720" y="548" class="muted" text-anchor="middle">Sign model artifacts & evidence; key rotation; HSM-backed signing for production keys</text>
        </g>

        <!-- Monitoring / Explainability / Audit -->
        <g>
          <rect x="900" y="500" width="420" height="240" rx="12" class="box" stroke="#F59E0B" />
          <text x="1110" y="532" class="small" text-anchor="middle">Observability & Explainability</text>
          <text x="1110" y="550" class="muted" text-anchor="middle">Model metrics, drift detectors, SHAP/LIME stores, audit logs</text>
          <text x="1110" y="568" class="muted" text-anchor="middle">Alerting → SOAR for automated rollback / isolation</text>
        </g>

        <!-- Management / Bastion -->
        <g>
          <rect x="560" y="680" width="760" height="96" rx="12" class="box" stroke="#60A5FA" />
          <text x="940" y="712" class="small" text-anchor="middle">Management Plane (Bastion, CI/CD pipelines for models & infra)</text>
          <text x="940" y="730" class="muted" text-anchor="middle">Role-based approvals, audit trails, signed CI artifacts</text>
        </g>

        <!-- flows -->
        <path d="M196 192 L440 240" stroke="#C4B5FD" stroke-width="2" marker-end="url(#arrow)" />
        <path d="M560 280 L800 280" stroke="#F97316" stroke-width="2" marker-end="url(#arrow)" />
        <path d="M940 320 L980 360" stroke="#A855F7" stroke-width="2" marker-end="url(#arrow)" />
        <path d="M640 500 L640 560" stroke="#10B981" stroke-width="2" marker-end="url(#arrow)" />

        <!-- legend -->
        <g>
          <rect x="36" y="764" width="1328" height="40" rx="8" fill="#021024" stroke="#94A3B8" />
          <text x="64" y="788" class="muted">Legend: Encrypted ingest → secure data lake → feature store → training cluster → model registry → isolated serving → KMS/HSM + observability & management plane. Canary/blue-green supported.</text>
        </g>
      </svg>
        `;
        title = 'Hybrid Cloud GPU Cluster + Encrypted Ingest Overlay';
        description = 'GPU-accelerated training in isolated subnets with an encrypted ingest overlay, secure data lake, model registry, signed artifacts, and isolated model-serving endpoints with canary rollouts.';
        break;


      /* ---------------------------- D-SOC TOPOLOGY ---------------------------- */
      /* ---------------------------- dSOC (robust) ---------------------------- */
      case 'dsoc':
        svgContent = `
      <svg viewBox="0 0 1400 820" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decentralized SOC topology">
        <defs>
          <linearGradient id="bg" x1="0" x2="1"><stop offset="0%" stop-color="#061021"/><stop offset="100%" stop-color="#021122"/></linearGradient>
          <filter id="soft"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.12"/></filter>
          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M0 0 L12 6 L0 12 z" fill="#60A5FA"/>
          </marker>
          <style>
            .title { font-family: Inter, system-ui, -apple-system; fill:#FCE7F3; font-size:18px; font-weight:700 }
            .note  { font-family: Inter; fill:#94A3B8; font-size:11px }
            .zone  { fill: rgba(2,6,23,0.66); stroke-width:2 }
            .box   { fill:#071022; stroke-width:1.5 }
            .muted { fill:#9CA3AF; font-size:11px }
            .small { fill:#D6EFFF; font-size:11px }
            .dashed{ stroke-dasharray:6 6 }
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>
        <text x="36" y="44" class="title">Decentralized SOC (dSOC) — Federated Mesh + Blockchain-anchored Immutable Audit Trail</text>
        <text x="36" y="64" class="note">Goal: cross-organization telemetry sharing, verifiable audit trail, selective disclosure & privacy-preserving collaboration</text>

        <!-- SOC Node A -->
        <g filter="url(#soft)">
          <rect x="48" y="112" width="320" height="220" rx="12" class="zone" stroke="#EC4899"/>
          <text x="208" y="142" text-anchor="middle" class="small">SOC Node A (Regional)</text>
          <text x="208" y="160" text-anchor="middle" class="muted">Local SIEM • Enrichment • Analysts</text>

          <rect x="88" y="180" width="120" height="88" rx="8" class="box" stroke="#EC4899"/>
          <text x="148" y="216" text-anchor="middle" class="small">Local Collector</text>

          <rect x="220" y="180" width="120" height="88" rx="8" class="box" stroke="#60A5FA"/>
          <text x="280" y="216" text-anchor="middle" class="small">Analyst Console</text>
        </g>

        <!-- SOC Node B -->
        <g filter="url(#soft)">
          <rect x="520" y="52" width="320" height="220" rx="12" class="zone" stroke="#3B82F6"/>
          <text x="680" y="82" text-anchor="middle" class="small">SOC Node B (Partner)</text>
          <text x="680" y="100" text-anchor="middle" class="muted">Local correlation, triage & response</text>

          <rect x="560" y="120" width="120" height="88" rx="8" class="box" stroke="#3B82F6"/>
          <text x="620" y="156" text-anchor="middle" class="small">Collector</text>

          <rect x="692" y="120" width="120" height="88" rx="8" class="box" stroke="#A855F7"/>
          <text x="752" y="156" text-anchor="middle" class="small">Response Orchestrator</text>
        </g>

        <!-- SOC Node C -->
        <g filter="url(#soft)">
          <rect x="992" y="112" width="320" height="220" rx="12" class="zone" stroke="#22C55E"/>
          <text x="1152" y="142" text-anchor="middle" class="small">SOC Node C (Cloud / Central)</text>
          <text x="1152" y="160" text-anchor="middle" class="muted">Cross-correlation & threat intelligence</text>

          <rect x="1032" y="180" width="120" height="88" rx="8" class="box" stroke="#22C55E"/>
          <text x="1092" y="216" text-anchor="middle" class="small">Correlation Engine</text>

          <rect x="1164" y="180" width="120" height="88" rx="8" class="box" stroke="#F59E0B"/>
          <text x="1224" y="216" text-anchor="middle" class="small">Sharing Policy Gate</text>
        </g>

        <!-- Mesh links (encrypted tunnels) -->
        <path d="M368 240 L520 112" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M840 112 L992 240" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M368 240 L1152 240" stroke="#EC4899" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Blockchain Anchored Logs -->
        <g>
          <rect x="520" y="364" width="360" height="160" rx="12" class="box" stroke="#A855F7"/>
          <text x="700" y="400" text-anchor="middle" class="small">Immutable Audit Ledger (Permissioned Chain)</text>
          <text x="700" y="418" text-anchor="middle" class="muted">Anchors: digest pointers, merkle roots, signed attestations</text>
          <text x="700" y="436" text-anchor="middle" class="muted">Selective disclosure via zero-knowledge proofs / Merkle proofs</text>
        </g>

        <!-- Shared Threat Intel & Marketplace -->
        <g>
          <rect x="48" y="504" width="252" height="120" rx="12" class="box" stroke="#F97316"/>
          <text x="174" y="536" text-anchor="middle" class="small">Shared Threat Intel Store (MISP / TAXII)</text>
          <text x="174" y="556" text-anchor="middle" class="muted">Hash pointers to evidences on ledger</text>
        </g>

        <!-- Privacy & selective disclosure module -->
        <g>
          <rect x="320" y="504" width="420" height="120" rx="12" class="box" stroke="#60A5FA"/>
          <text x="530" y="536" text-anchor="middle" class="small">Selective Disclosure Engine</text>
          <text x="530" y="556" text-anchor="middle" class="muted">Attribute-based access, Merkle proofs & ZKP gateway</text>
        </g>

        <!-- Governance / Consortium Org -->
        <g>
          <rect x="760" y="504" width="552" height="120" rx="12" class="box" stroke="#10B981"/>
          <text x="1036" y="536" text-anchor="middle" class="small">Consortium Governance & Policy Board</text>
          <text x="1036" y="556" text-anchor="middle" class="muted">Node membership, SLA, quorum rules, privacy policies</text>
        </g>

        <!-- Management Plane -->
        <g>
          <rect x="48" y="648" width="1264" height="120" rx="12" class="box" stroke="#60A5FA"/>
          <text x="700" y="680" text-anchor="middle" class="small">Management Plane — PKI, RBAC, Certificate Authority & Audit UIs (Bastion access only)</text>
          <text x="700" y="700" text-anchor="middle" class="muted">Key lifecycle, membership onboarding/offboarding</text>
        </g>

        <!-- flows legend -->
        <g>
          <rect x="36" y="784" width="1328" height="28" rx="6" fill="#021024" stroke="#94A3B8"/>
          <text x="64" y="802" class="muted">Legend: Encrypted tunnels (mTLS / IPsec) connect local SOCs; Audit ledger anchors digests; selective disclosure via signed Merkle proofs or ZK primitives; governance enforces policies & SLAs.</text>
        </g>
      </svg>
        `;
        title = 'Secure Multi-Party Mesh + Blockchain Audit Trail';
        description = 'Federated mesh connecting participating SOC nodes over encrypted tunnels with a permissioned blockchain-anchored immutable audit trail and a selective disclosure gateway for privacy-preserving sharing.';
        break;


      /* ----------------------- AI THREAT HUNTING TOPOLOGY ---------------------- */
      /* ----------------------- AI THREAT HUNTING (robust, production-ready) ----------------------- */
      case 'ai-threat-hunting':
        svgContent = `
      <svg viewBox="0 0 1600 920" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI Threat Hunting topology">
        <defs>
          <linearGradient id="bg" x1="0" x2="1">
            <stop offset="0%" stop-color="#071426"/>
            <stop offset="100%" stop-color="#011021"/>
          </linearGradient>

          <filter id="soft"><feDropShadow dx="0" dy="10" stdDeviation="16" flood-opacity="0.12"/></filter>

          <marker id="arrow" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <path d="M0 0 L14 7 L0 14 z" fill="#22C55E"/>
          </marker>

          <style>
            .title{font-family:Inter,system-ui,-apple-system; fill:#E6F7EA; font-size:20px; font-weight:700}
            .subtitle{font-family:Inter; fill:#9CA3AF; font-size:12px}
            .note{font-family:Inter; fill:#94A3B8; font-size:11px}
            .zone{fill:rgba(2,6,23,0.66); stroke-width:2}
            .box{fill:#061022; stroke-width:1.5}
            .accent1{stroke:#60A5FA}
            .accent2{stroke:#10B981}
            .accent3{stroke:#F97316}
            .muted{fill:#9CA3AF; font-size:11px}
            .small{fill:#CDEDD8; font-size:11px}
            .ephemeral{stroke-dasharray:8 6}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>
        <text x="36" y="48" class="title">AI Threat Hunting — High-volume Ingest → Lakehouse → Analytics Fabric → Investigator Bastion</text>
        <text x="36" y="72" class="subtitle">Design: scalable, auditable, immutable evidence chain-of-custody, safe analyst workflows, ML-assisted hunting & automated containment.</text>

        <!-- Top ingest ribbon -->
        <g filter="url(#soft)">
          <rect x="36" y="96" width="1528" height="96" rx="12" class="zone" stroke="#60A5FA"/>
          <text x="800" y="148" text-anchor="middle" class="small">Telemetry Ingest Fabric — brokered, schema-validated, scrubbers & attestors (TLS/mTLS enforced)</text>
          <text x="800" y="166" text-anchor="middle" class="muted">Sources: network TAPs, cloud logs, EDR, DNS/Proxy, Cloud APIs, Application traces</text>
        </g>

        <!-- Left: collectors -->
        <g>
          <rect x="36" y="212" width="300" height="212" rx="12" class="box accent3"/>
          <text x="186" y="240" text-anchor="middle" class="small">Edge Collection Layer</text>
          <text x="186" y="258" text-anchor="middle" class="muted">Packet brokers, Zeek sensors, Suricata, Cloud Forwarders</text>

          <rect x="72" y="276" width="120" height="96" rx="8" class="box accent3"/>
          <text x="132" y="314" text-anchor="middle" class="small">Packet Broker / TAP</text>

          <rect x="204" y="276" width="120" height="96" rx="8" class="box accent3"/>
          <text x="264" y="314" text-anchor="middle" class="small">Cloud / Agent Forwarder</text>
        </g>

        <!-- Ingest / stream processing -->
        <g>
          <rect x="360" y="212" width="520" height="312" rx="12" class="zone accent2" filter="url(#soft)"/>
          <text x="620" y="240" text-anchor="middle" class="small">Stream Platform & Preprocessing (Kafka/Redpanda/Pulsar)</text>
          <text x="620" y="258" text-anchor="middle" class="muted">Topic partitioning, ACLs, schema registry (Avro/Protobuf), watermarking</text>

          <rect x="384" y="284" width="140" height="96" rx="8" class="box accent1"/>
          <text x="454" y="322" text-anchor="middle" class="small">Parser Workers (Zeek/Suricata)</text>

          <rect x="536" y="284" width="140" height="96" rx="8" class="box accent2"/>
          <text x="606" y="322" text-anchor="middle" class="small">Enrichment Workers (TI, Asset, GeoIP)</text>

          <rect x="688" y="284" width="140" height="96" rx="8" class="box accent3"/>
          <text x="758" y="322" text-anchor="middle" class="small">Normalization & Dedup</text>

          <rect x="420" y="392" width="360" height="100" rx="10" class="box accent1"/>
          <text x="600" y="426" text-anchor="middle" class="small">Stream Processing / Real-time Correlation (Flink/Spark Streaming)</text>
          <text x="600" y="444" text-anchor="middle" class="muted">Real-time scoring, anomaly detectors, enrichment joins</text>
        </g>

        <!-- Lakehouse: raw + curated + evidence -->
        <g>
          <rect x="360" y="544" width="760" height="260" rx="12" class="box" stroke="#EC4899"/>
          <text x="740" y="576" text-anchor="middle" class="small">Lakehouse (Raw → Curated → Indexed) — Object store + metadata catalog (Delta / Iceberg / Hudi)</text>
          <text x="740" y="594" text-anchor="middle" class="muted">Signed manifests, versioned datasets, catalog (Glue/Atlas), fine-grain ACLs</text>

          <!-- Immutable evidence store -->
          <rect x="1168" y="600" width="396" height="160" rx="12" class="box accent2"/>
          <text x="1366" y="632" text-anchor="middle" class="small">Immutable Evidence Store (WORM / Object Lock)</text>
          <text x="1366" y="650" text-anchor="middle" class="muted">Signed chain-of-custody manifests, pcap archives, forensic snapshots</text>

          <!-- Data catalog & governance -->
          <rect x="392" y="616" width="200" height="120" rx="10" class="box accent1"/>
          <text x="492" y="652" text-anchor="middle" class="small">Data Catalog / Governance (tags, lineage)</text>
        </g>

        <!-- Analytics & Hunting Fabric -->
        <g>
          <rect x="48" y="780" width="740" height="220" rx="12" class="zone accent1" filter="url(#soft)"/>
          <text x="420" y="812" text-anchor="middle" class="small">Analytics & ML Fabric — ClickHouse / ClickHouse + Spark / Dask / Ray / GPU Pools</text>
          <text x="420" y="830" text-anchor="middle" class="muted">Interactive queries, batch ML for anomaly detection & behavior modeling, feature store for hunting models</text>

          <rect x="84" y="836" width="200" height="120" rx="10" class="box accent1"/>
          <text x="184" y="896" text-anchor="middle" class="small">Interactive Query Nodes (SQL / Notebook)</text>

          <rect x="304" y="836" width="200" height="120" rx="10" class="box accent3"/>
          <text x="404" y="896" text-anchor="middle" class="small">Batch ML Workers / GPU Pool (Hunting models)</text>

          <rect x="524" y="836" width="200" height="120" rx="10" class="box accent2"/>
          <text x="624" y="896" text-anchor="middle" class="small">Feature Store (Feast or custom)</text>
        </g>

        <!-- Investigator Bastion + Forensic Workbench -->
        <g>
          <rect x="820" y="780" width="740" height="220" rx="12" class="box accent1"/>
          <text x="1180" y="812" text-anchor="middle" class="small">Investigator Bastion — Jump-hosts, session recording & JIT access</text>
          <text x="1180" y="830" text-anchor="middle" class="muted">Forensics Workbench (Volatility, Rekall), Read-only Notebook access to lakehouse</text>

          <rect x="856" y="846" width="240" height="120" rx="10" class="box accent3"/>
          <text x="976" y="896" text-anchor="middle" class="small">Forensic Tools & Memory Imaging</text>

          <rect x="1116" y="846" width="240" height="120" rx="10" class="box accent2"/>
          <text x="1236" y="896" text-anchor="middle" class="small">Notebook Sandbox (Read-only, audited)</text>
        </g>

        <!-- SIEM / SOAR -->
        <g>
          <rect x="1128" y="212" width="436" height="316" rx="12" class="box accent3"/>
          <text x="1356" y="240" text-anchor="middle" class="small">SIEM / Correlation & Alert Manager</text>
          <text x="1356" y="258" text-anchor="middle" class="muted">Score enrichment, long-term index, threat hunting dashboards</text>

          <rect x="1128" y="544" width="436" height="140" rx="10" class="box accent1"/>
          <text x="1356" y="576" text-anchor="middle" class="small">SOAR Orchestration — Playbooks, containment connectors, ticketing</text>
        </g>

        <!-- KMS / Audit / Observability -->
        <g>
          <rect x="360" y="880" width="1240" height="36" rx="6" class="box" stroke="#60A5FA"/>
          <text x="400" y="905" class="muted">Legend & Notes: TLS/mTLS everywhere. Signed evidence manifests written to WORM. Catalog + lineage required for model-driven hunting. Management plane (bastions & CI) isolated. Use HSM for signing critical artifacts.</text>
        </g>

        <!-- Flow arrows -->
        <path d="M236 332 L360 332" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M880 408 L1168 408" stroke="#22C55E" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M640 516 L740 616" stroke="#10B981" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M820 844 L856 844" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrow)"/>
      </svg>
        `;
        title = 'Data Lake Ingest + Analytics Fabric (AI Threat Hunting)';
        description = 'High-throughput telemetry ingest into a versioned lakehouse, indexed hotstore and analytics fabric; investigator bastion with read-only notebooks and forensic workbench; immutable evidence store for chain-of-custody.';
        break;


      /* -------------------------- END OF UPDATED CASES ------------------------- */

      /* ----------------------- Tokenomics Simulator — Robust, Production-ready ----------------------- */
      case 'tokenomics-simulator':
        svgContent = `
      <svg viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tokenomics simulator topology">
        <defs>
          <linearGradient id="bg" x1="0" x2="1"><stop offset="0%" stop-color="#041022"/><stop offset="100%" stop-color="#00121a"/></linearGradient>
          <filter id="soft"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.12"/></filter>
          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#F97316"/></marker>
          <style>
            .title{font-family:Inter,system-ui,-apple-system; fill:#EDE9F6; font-size:18px; font-weight:700}
            .note{font-family:Inter; fill:#9CA3AF; font-size:12px}
            .box{fill:#061022; stroke-width:2}
            .zone{fill:rgba(2,6,23,0.66); stroke-width:2}
            .muted{fill:#94A3B8; font-size:11px}
            .small{fill:#C7D2FE; font-size:11px}
            .ephemeral{stroke-dasharray:8 6}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>

        <text x="36" y="44" class="title">Tokenomics Simulator — Ephemeral Compute Mesh with Sandbox Overlay & Safe Bridges</text>
        <text x="36" y="68" class="note">Design: isolated compute sandboxes, deterministic networks, controlled test token bridges, HSM-backed custody for keys, immutable experiment audit trail.</text>

        <!-- Control Plane -->
        <g filter="url(#soft)">
          <rect x="36" y="96" width="1328" height="84" rx="10" class="zone" stroke="#60A5FA"/>
          <text x="680" y="142" text-anchor="middle" class="small">Control Plane — Orchestrator (Airflow/Argo/Terraform CI) • Job Scheduler • Experiment Catalog</text>
          <text x="680" y="160" text-anchor="middle" class="muted">Authn: 2FA + RBAC • Approvals required for topologies that allow any real network egress</text>
        </g>

        <!-- Provisioning / CI -->
        <g>
          <rect x="40" y="208" width="340" height="140" rx="10" class="box" stroke="#3B82F6"/>
          <text x="210" y="236" text-anchor="middle" class="small">CI/CD & IaC (Terraform / Terragrunt / GitOps)</text>
          <text x="210" y="256" text-anchor="middle" class="muted">Immutable infra templates, experiment-as-code</text>
        </g>

        <!-- Orchestration & Scheduler -->
        <g>
          <rect x="412" y="208" width="360" height="140" rx="10" class="box" stroke="#10B981"/>
          <text x="592" y="236" text-anchor="middle" class="small">Simulation Orchestrator (Argo / Nomad / K8s Jobs)</text>
          <text x="592" y="256" text-anchor="middle" class="muted">Ephemeral network stitching, TTL-based teardown, quota enforcement</text>
        </g>

        <!-- Compute Sandbox Mesh -->
        <g>
          <rect x="796" y="208" width="568" height="340" rx="12" class="zone" stroke="#F97316"/>
          <text x="1080" y="240" text-anchor="middle" class="small">Ephemeral Compute Sandbox Mesh (Firecracker / Kata / Podman / K8s Namespaces)</text>
          <text x="1080" y="258" text-anchor="middle" class="muted">MicroVMs/containers per run, isolated vNets, ephemeral persistent volumes</text>

          <!-- Sandbox clusters -->
          <rect x="828" y="276" width="160" height="96" rx="10" class="box" stroke="#A855F7"/>
          <text x="908" y="308" text-anchor="middle" class="small">Simulator Worker Pool (deterministic seeds)</text>

          <rect x="1004" y="276" width="160" height="96" rx="10" class="box" stroke="#3B82F6"/>
          <text x="1084" y="308" text-anchor="middle" class="small">Exchange Simulation Nodes (Orderbook, AMM)</text>

          <rect x="1180" y="276" width="160" height="96" rx="10" class="box" stroke="#60A5FA"/>
          <text x="1260" y="308" text-anchor="middle" class="small">Participant Bots (Traders, LPs, Oracles)</text>

          <rect x="928" y="388" width="320" height="96" rx="10" class="box" stroke="#10B981"/>
          <text x="1088" y="420" text-anchor="middle" class="small">Shared Epoch Storage (snapshots, logs, result artifacts)</text>
        </g>

        <!-- Test Token Bridge (controlled) -->
        <g>
          <rect x="40" y="372" width="360" height="160" rx="10" class="box" stroke="#A78BFA"/>
          <text x="220" y="404" text-anchor="middle" class="small">Test Token Bridge & Faucet</text>
          <text x="220" y="422" text-anchor="middle" class="muted">One-way egress (if allowed), strict rate-limits, burnable test tokens</text>
          <text x="220" y="440" text-anchor="middle" class="muted">Anchors to private chain (Ganache / Geth devnet) or sandbox ledger</text>
        </g>

        <!-- Key Management / HSM -->
        <g>
          <rect x="412" y="372" width="360" height="160" rx="10" class="box" stroke="#10B981"/>
          <text x="592" y="404" text-anchor="middle" class="small">KMS / HSM — Key custody & signing</text>
          <text x="592" y="422" text-anchor="middle" class="muted">Short-lived signing keys for test bridges, multisig for critical exports</text>
        </g>

        <!-- Monitoring / Metrics / Results Aggregator -->
        <g>
          <rect x="796" y="560" width="568" height="180" rx="10" class="box" stroke="#3B82F6"/>
          <text x="1080" y="592" text-anchor="middle" class="small">Results Aggregator & Analytics (time-series DB + analytics UIs)</text>
          <text x="1080" y="610" text-anchor="middle" class="muted">Metrics: liquidity, slippage, fees, latency, P&L, tail risk metrics</text>
        </g>

        <!-- Quarantine & Evidence / WORM -->
        <g>
          <rect x="40" y="560" width="360" height="180" rx="10" class="box" stroke="#EF4444"/>
          <text x="220" y="592" text-anchor="middle" class="small">Quarantine / Forensics Store (WORM)</text>
          <text x="220" y="610" text-anchor="middle" class="muted">Signed experiment manifests, pcaps (if networked), deterministic seeds</text>
        </g>

        <!-- Controlled Egress Gateway -->
        <g>
          <rect x="412" y="560" width="360" height="180" rx="10" class="box" stroke="#10B981"/>
          <text x="592" y="592" text-anchor="middle" class="small">Egress Gateways / DLP & Approval Engine</text>
          <text x="592" y="610" text-anchor="middle" class="muted">Rate-limited exports, content-scrubbing, dual approval for off-platform exports</text>
        </g>

        <!-- Dashboard / Experiment Catalog -->
        <g>
          <rect x="796" y="760" width="568" height="100" rx="10" class="box" stroke="#F59E0B"/>
          <text x="1080" y="792" text-anchor="middle" class="small">Experiment Catalog & Dashboard</text>
          <text x="1080" y="810" text-anchor="middle" class="muted">Run configs, reproducibility, audit trail & compare runs</text>
        </g>

        <!-- Flow arrows -->
        <path d="M376 278 L412 278" stroke="#F97316" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M772 354 L796 354" stroke="#A78BFA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M1164 384 L1164 560" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M592 532 L592 560" stroke="#10B981" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Legend -->
        <g>
          <rect x="36" y="876" width="1328" height="28" rx="6" fill="#021024" stroke="#94A3B8"/>
          <text x="64" y="894" class="muted">Legend: Orchestrator → ephemeral sandbox mesh → test bridge & HSM custody → results aggregator + WORM evidence store. All actions signed, auditable & auto-tear down.</text>
        </g>
      </svg>
        `;
        title = 'Compute Cluster with Sandbox Overlay (Tokenomics Simulator)';
        description = 'Isolated ephemeral compute mesh for simulation runs with deterministic seeds, controlled test token bridge, HSM-backed signing, quarantine/WORM storage, and a strict egress/approval engine.';
        break;


      /* ----------------------- WEB3 E-COMMERCE (robust, production-ready) ----------------------- */
      case 'web3-ecommerce':
        svgContent = `
      <svg viewBox="0 0 1400 880" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Web3 E-commerce topology">
        <defs>
          <linearGradient id="bg" x1="0" x2="1"><stop offset="0%" stop-color="#071426"/><stop offset="100%" stop-color="#021021"/></linearGradient>
          <filter id="soft"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-opacity="0.12"/></filter>
          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#60A5FA"/></marker>
          <style>
            .title{font-family:Inter,system-ui,-apple-system; fill:#E6F7FF; font-size:18px; font-weight:700}
            .sub{font-family:Inter; fill:#9CA3AF; font-size:12px}
            .box{fill:#061022; stroke-width:1.5}
            .zone{fill:rgba(2,6,23,0.66); stroke-width:2}
            .muted{fill:#94A3B8;font-size:11px}
            .small{fill:#CFE8FF;font-size:11px}
            .dashed{stroke-dasharray:7 6}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>
        <text x="36" y="44" class="title">Web3 E-Commerce — Edge CDN + Private API Backend + HSM-backed Payment/Wallet Nodes</text>
        <text x="36" y="68" class="sub">Design: performant CDN storefront + hardened private API backend, HSM-secured wallet nodes, hybrid on-chain/off-chain payment flows, rigorous PCI/KYC controls and auditable settlement paths.</text>

        <!-- Edge CDN / Storefront -->
        <g filter="url(#soft)">
          <rect x="36" y="96" width="420" height="200" rx="12" class="zone" stroke="#60A5FA"/>
          <text x="246" y="132" text-anchor="middle" class="small">Edge CDN & Storefront (Global)</text>
          <text x="246" y="150" text-anchor="middle" class="muted">Static assets, SSR/edge functions, prerendered pages</text>

          <rect x="72" y="160" width="160" height="96" rx="10" class="box" stroke="#3B82F6"/>
          <text x="152" y="198" text-anchor="middle" class="small">Edge SSR / Edge Functions</text>

          <rect x="252" y="160" width="160" height="96" rx="10" class="box" stroke="#60A5FA"/>
          <text x="332" y="198" text-anchor="middle" class="small">Cache / CDN PoPs</text>
        </g>

        <!-- Public API / DMZ -->
        <g>
          <rect x="492" y="96" width="360" height="200" rx="12" class="zone" stroke="#F97316"/>
          <text x="672" y="128" text-anchor="middle" class="small">Gateway / Public API (DMZ)</text>
          <text x="672" y="146" text-anchor="middle" class="muted">Rate-limited edge proxies, WAF, request validation</text>

          <rect x="516" y="160" width="160" height="96" rx="10" class="box" stroke="#F59E0B"/>
          <text x="596" y="198" text-anchor="middle" class="small">API Gateway (Auth, Throttling)</text>

          <rect x="676" y="160" width="160" height="96" rx="10" class="box" stroke="#F97316"/>
          <text x="756" y="198" text-anchor="middle" class="small">Proxy for Wallet Relayer & Payment APIs</text>
        </g>

        <!-- Private API Backend (private subnets) -->
        <g filter="url(#soft)">
          <rect x="36" y="320" width="420" height="300" rx="12" class="zone" stroke="#3B82F6"/>
          <text x="246" y="356" text-anchor="middle" class="small">Private API Backend (Private Subnets)</text>
          <text x="246" y="374" text-anchor="middle" class="muted">Business logic, order engine, inventory, promo engine</text>

          <rect x="72" y="400" width="160" height="120" rx="10" class="box" stroke="#60A5FA"/>
          <text x="152" y="440" text-anchor="middle" class="small">Order Engine / Inventory</text>

          <rect x="252" y="400" width="160" height="120" rx="10" class="box" stroke="#A855F7"/>
          <text x="332" y="440" text-anchor="middle" class="small">Payment Orchestration Service</text>
        </g>

        <!-- HSM / Wallet Vault VLAN -->
        <g>
          <rect x="492" y="320" width="360" height="300" rx="12" class="zone" stroke="#10B981"/>
          <text x="672" y="356" text-anchor="middle" class="small">HSM / Wallet Vaults (PCI & KMS boundary)</text>
          <text x="672" y="374" text-anchor="middle" class="muted">HSM-backed key custody, transaction signing, hardware-backed multisig</text>

          <rect x="516" y="400" width="160" height="120" rx="10" class="box" stroke="#10B981"/>
          <text x="596" y="440" text-anchor="middle" class="small">Custodial Wallet Nodes (HSM)</text>

          <rect x="676" y="400" width="160" height="120" rx="10" class="box" stroke="#34D399"/>
          <text x="756" y="440" text-anchor="middle" class="small">KMS / Signer Service</text>
        </g>

        <!-- Off-chain Settlement & Fiat Connectors -->
        <g>
          <rect x="872" y="96" width="420" height="200" rx="12" class="zone" stroke="#A78BFA"/>
          <text x="1082" y="128" text-anchor="middle" class="small">Off-chain Settlement & Fiat Connectors</text>
          <text x="1082" y="146" text-anchor="middle" class="muted">Payment gateways, custody partners, fiat rails (ACH/SEPA)</text>

          <rect x="908" y="160" width="160" height="96" rx="10" class="box" stroke="#A855F7"/>
          <text x="988" y="198" text-anchor="middle" class="small">Payment Gateways (PCI scope)</text>

          <rect x="1076" y="160" width="160" height="96" rx="10" class="box" stroke="#8B5CF6"/>
          <text x="1156" y="198" text-anchor="middle" class="small">Custodial Partner API</text>
        </g>

        <!-- Blockchain Layer (L1 / L2 / Relayer) -->
        <g>
          <rect x="872" y="320" width="420" height="300" rx="12" class="zone" stroke="#F59E0B"/>
          <text x="1082" y="356" text-anchor="middle" class="small">Blockchain Layer — Relayer, Contract Registry & Oracles</text>
          <text x="1082" y="374" text-anchor="middle" class="muted">L2 (optional), relayer nodes, gasless meta-transactions, oracle services</text>

          <rect x="908" y="400" width="160" height="120" rx="10" class="box" stroke="#F97316"/>
          <text x="988" y="440" text-anchor="middle" class="small">Relayer / MetaTx Signing Service</text>

          <rect x="1076" y="400" width="160" height="120" rx="10" class="box" stroke="#F59E0B"/>
          <text x="1156" y="440" text-anchor="middle" class="small">Smart Contract Registry</text>

          <rect x="992" y="540" width="200" height="60" rx="8" class="box" stroke="#60A5FA"/>
          <text x="1092" y="572" text-anchor="middle" class="small">Oracle Feeds (Price, KYC attestations)</text>
        </g>

        <!-- Monitoring, SIEM, & Logs -->
        <g>
          <rect x="36" y="652" width="1256" height="180" rx="12" class="box" stroke="#3B82F6"/>
          <text x="664" y="684" text-anchor="middle" class="small">Observability & Security — Logs to SIEM, Audits to WORM, Metrics to TSDB</text>
          <text x="664" y="702" text-anchor="middle" class="muted">Transaction traces, signed audit logs, threat detection & policy enforcement</text>
        </g>

        <!-- Arrows / flows -->
        <path d="M456 196 L492 196" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M852 196 L872 196" stroke="#A78BFA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M852 420 L872 420" stroke="#F59E0B" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M792 460 L872 460" stroke="#10B981" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Legend -->
        <g>
          <rect x="36" y="844" width="1328" height="28" rx="6" fill="#021024" stroke="#94A3B8"/>
          <text x="64" y="863" class="muted">Legend: Edge CDN → DMZ Gateway → Private Backend → HSM Vaults → Blockchain Relayers/Oracles → Off-chain settlement. Rate-limit, WAF, mTLS, and strict network segmentation enforced.</text>
        </g>
      </svg>
        `;
        title = 'Hybrid Edge + Cloud Backend + HSM-secured Payment/Wallet Nodes';
        description = 'Edge CDN storefront, private cloud API backend, HSM-secured custody for wallet transactions, relayer & contract registry, and off-chain settlement connectors with full auditability.';
        break;


      /* --------------------------- CLOUD DR & HARDENING (robust) --------------------------- */
      case 'cloud-dr':
        svgContent = `
      <svg viewBox="0 0 1400 820" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cloud DR and hardening topology">
        <defs>
          <linearGradient id="bg" x1="0" x2="1"><stop offset="0%" stop-color="#071026"/><stop offset="100%" stop-color="#021022"/></linearGradient>
          <filter id="soft"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.12"/></filter>
          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M0 0 L12 6 L0 12 z" fill="#10B981"/>
          </marker>
          <style>
            .title{font-family:Inter,system-ui,-apple-system; fill:#E6F7FF; font-size:18px; font-weight:700}
            .sub{font-family:Inter; fill:#9CA3AF; font-size:12px}
            .zone{fill:rgba(2,6,23,0.66); stroke-width:2}
            .box{fill:#061022; stroke-width:1.5}
            .muted{fill:#94A3B8;font-size:11px}
            .small{fill:#CFE8FF;font-size:11px}
            .dashed{stroke-dasharray:7 6}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>
        <text x="36" y="44" class="title">Cloud DR & Hardening — Immutable Backup Overlay + Orchestration Plane</text>
        <text x="36" y="68" class="sub">Design: active/active or active/passive sites, immutable snapshot overlay, hardened control plane for failover orchestration, encrypted replication channels, and regular DR test automation.</text>

        <!-- Primary Site -->
        <g filter="url(#soft)">
          <rect x="36" y="96" width="420" height="260" rx="12" class="zone" stroke="#3B82F6"/>
          <text x="246" y="128" text-anchor="middle" class="small">Primary Site (Active)</text>
          <text x="246" y="146" text-anchor="middle" class="muted">Public workloads, DB clusters, app nodes, load balancers</text>

          <rect x="72" y="176" width="160" height="96" rx="10" class="box" stroke="#60A5FA"/>
          <text x="152" y="214" text-anchor="middle" class="small">App & API Clusters</text>

          <rect x="252" y="176" width="160" height="96" rx="10" class="box" stroke="#3B82F6"/>
          <text x="332" y="214" text-anchor="middle" class="small">Primary DB Cluster (Active)</text>
        </g>

        <!-- DR Site -->
        <g filter="url(#soft)">
          <rect x="940" y="96" width="420" height="260" rx="12" class="zone" stroke="#10B981"/>
          <text x="1150" y="128" text-anchor="middle" class="small">DR Site (Passive or Active)</text>
          <text x="1150" y="146" text-anchor="middle" class="muted">Replica DBs, warm app pool, failover endpoints</text>

          <rect x="976" y="176" width="160" height="96" rx="10" class="box" stroke="#34D399"/>
          <text x="1056" y="214" text-anchor="middle" class="small">Replica DB Cluster</text>

          <rect x="1156" y="176" width="160" height="96" rx="10" class="box" stroke="#10B981"/>
          <text x="1236" y="214" text-anchor="middle" class="small">Warm App Pool / Standby Hosts</text>
        </g>

        <!-- Immutable Backup Overlay -->
        <g>
          <rect x="476" y="96" width="420" height="156" rx="12" class="box" stroke="#EF4444"/>
          <text x="686" y="128" text-anchor="middle" class="small">Immutable Backup Overlay (WORM / Object-lock)</text>
          <text x="686" y="146" text-anchor="middle" class="muted">Immutable snapshots, signed manifests, point-in-time recovery</text>

          <rect x="516" y="136" width="160" height="76" rx="8" class="box" stroke="#F97316"/>
          <text x="596" y="168" text-anchor="middle" class="small">Snapshot & Versioning Service</text>

          <rect x="696" y="136" width="160" height="76" rx="8" class="box" stroke="#EF4444"/>
          <text x="776" y="168" text-anchor="middle" class="small">Signed Manifest Store (KMS-signed)</text>
        </g>

        <!-- Replication Channels -->
        <g>
          <rect x="476" y="276" width="420" height="140" rx="12" class="zone" stroke="#60A5FA"/>
          <text x="686" y="304" text-anchor="middle" class="small">Encrypted Replication Channels (TLS/IPsec / VPN)</text>
          <text x="686" y="322" text-anchor="middle" class="muted">Async replication (WAN-optimized), CDP options, replication queues</text>
        </g>

        <!-- DR Orchestration Plane -->
        <g>
          <rect x="476" y="440" width="420" height="240" rx="12" class="zone" stroke="#8B5CF6"/>
          <text x="686" y="468" text-anchor="middle" class="small">DR Orchestration Plane — Runbooks, Playbooks, Test Automation</text>
          <text x="686" y="486" text-anchor="middle" class="muted">Orchestrator (Terraform/Ansible/Argo), DNS failover controls, traffic steering</text>

          <rect x="516" y="500" width="160" height="88" rx="10" class="box" stroke="#A78BFA"/>
          <text x="596" y="540" text-anchor="middle" class="small">Runbook Engine & Automation</text>

          <rect x="696" y="500" width="160" height="88" rx="10" class="box" stroke="#C4B5FD"/>
          <text x="776" y="540" text-anchor="middle" class="small">Test Harness (DR Tests & Chaos)</text>
        </g>

        <!-- Control Plane / Bastion -->
        <g>
          <rect x="36" y="368" width="420" height="140" rx="12" class="box" stroke="#60A5FA"/>
          <text x="246" y="396" text-anchor="middle" class="small">Hardened Control Plane (Bastion, Admin, KMS)</text>
          <text x="246" y="414" text-anchor="middle" class="muted">RBAC + MFA, session recording, KMS for snapshot signing</text>
        </g>

        <!-- DNS & Traffic Steering -->
        <g>
          <rect x="36" y="520" width="420" height="140" rx="12" class="box" stroke="#10B981"/>
          <text x="246" y="548" text-anchor="middle" class="small">DNS / Traffic Steering (GSLB / Route53 / Traffic Manager)</text>
          <text x="246" y="566" text-anchor="middle" class="muted">Weighted routing, health checks, regional failover policies</text>
        </g>

        <!-- Flows & arrows -->
        <path d="M456 208 L476 208" stroke="#10B981" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M896 208 L940 208" stroke="#10B981" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M686 252 L686 276" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M686 416 L686 440" stroke="#8B5CF6" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Legend -->
        <g>
          <rect x="36" y="724" width="1328" height="72" rx="8" fill="#021024" stroke="#94A3B8"/>
          <text x="56" y="748" class="muted">Legend: Primary & DR sites, immutable WORM backup overlay with signed manifests, encrypted replication channels, and a hardened orchestration/control plane for automated & manual failover. Test harness + DNS steering.</text>
          <text x="56" y="768" class="muted">Note: All replication and backup artifacts must be KMS/HSM-signed and carry a manifest for chain-of-custody and verification.</text>
        </g>
      </svg>
        `;
        title = 'Immutable Backup Overlay & Orchestration';
        description = 'Immutable backups, hardened control plane and an orchestrated DR plane for failover and regular testing.';
        break;


      /* ----------------------- IOT TELEMETRY STACK (robust, production-ready) ----------------------- */
      case 'iot-telemetry':
        svgContent = `
      <svg viewBox="0 0 1600 920" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IoT telemetry topology">
        <defs>
          <linearGradient id="bg" x1="0" x2="1">
            <stop offset="0%" stop-color="#061526"/>
            <stop offset="100%" stop-color="#011221"/>
          </linearGradient>
          <filter id="soft"><feDropShadow dx="0" dy="10" stdDeviation="16" flood-opacity="0.12"/></filter>
          <marker id="arrow" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <path d="M0 0 L14 7 L0 14 z" fill="#60A5FA"/>
          </marker>
          <style>
            .title{font-family:Inter,system-ui,-apple-system; fill:#E6F7FF; font-size:20px; font-weight:700}
            .note{font-family:Inter; fill:#9CA3AF; font-size:12px}
            .zone{fill:rgba(2,6,23,0.66); stroke-width:2}
            .box{fill:#071022; stroke-width:1.5}
            .muted{fill:#94A3B8;font-size:11px}
            .small{fill:#CFE8FF;font-size:11px}
            .dashed{stroke-dasharray:8 6}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>
        <text x="36" y="46" class="title">IoT Telemetry Stack — Converged Edge → Gateway → Secure Ingest → Analytics & Control</text>
        <text x="36" y="72" class="note">Design goals: secure device identity, reliable ingest (MQTT/CoAP/HTTPS), edge-fog processing, immutable evidence for forensic & compliance, safe OTA with A/B canaries.</text>

        <!-- Device / Field layer -->
        <g filter="url(#soft)">
          <rect x="36" y="96" width="420" height="240" rx="12" class="zone" stroke="#F97316"/>
          <text x="246" y="128" text-anchor="middle" class="small">Field Devices (Sensors, Actuators, Gateways)</text>
          <text x="246" y="146" text-anchor="middle" class="muted">Secure Boot, TPM/SE, deterministic IDs</text>

          <rect x="56" y="164" width="160" height="100" rx="8" class="box" stroke="#F97316"/>
          <text x="136" y="198" text-anchor="middle" class="small">Edge Sensors (MQTT/CoAP)</text>
          <rect x="216" y="164" width="160" height="100" rx="8" class="box" stroke="#F59E0B"/>
          <text x="296" y="198" text-anchor="middle" class="small">Actuators / Controllers</text>
        </g>

        <!-- Local Gateway / Fog -->
        <g>
          <rect x="480" y="96" width="340" height="240" rx="12" class="zone" stroke="#60A5FA">
          </rect>
          <text x="650" y="128" text-anchor="middle" class="small">Local Gateway / Fog Node</text>
          <text x="650" y="146" text-anchor="middle" class="muted">Protocol translation, device shadow, edge analytics, local rules/actuation</text>

          <rect x="504" y="168" width="140" height="96" rx="8" class="box" stroke="#3B82F6"/>
          <text x="574" y="198" text-anchor="middle" class="small">Protocol Bridge (CoAP↔MQTT, LwM2M)</text>

          <rect x="654" y="168" width="160" height="96" rx="8" class="box" stroke="#10B981"/>
          <text x="734" y="198" text-anchor="middle" class="small">Local Cache & Edge ML (anomaly detection)</text>
        </g>

        <!-- Secure Gateway / Ingress -->
        <g>
          <rect x="840" y="96" width="340" height="240" rx="12" class="zone" stroke="#A855F7"></rect>
          <text x="1010" y="128" text-anchor="middle" class="small">Secure Gateway / Regional Ingest</text>
          <text x="1010" y="146" text-anchor="middle" class="muted">MQTT Broker Cluster (mTLS), CoAP DTLS Termination, API Ingest</text>

          <rect x="864" y="168" width="140" height="96" rx="8" class="box" stroke="#A855F7"/>
          <text x="934" y="198" text-anchor="middle" class="small">MQTT Broker (Clustered, HA)</text>

          <rect x="1004" y="168" width="140" height="96" rx="8" class="box" stroke="#8B5CF6"/>
          <text x="1074" y="198" text-anchor="middle" class="small">Ingress Gateway (Authz, Throttling, WAF)</text>
        </g>

        <!-- Message Bus & Stream Fabric -->
        <g filter="url(#soft)">
          <rect x="36" y="360" width="540" height="260" rx="12" class="zone" stroke="#10B981"/>
          <text x="306" y="392" text-anchor="middle" class="small">Stream Fabric — Kafka / Pulsar / Redpanda (topic partitioned by device-class)</text>
          <text x="306" y="410" text-anchor="middle" class="muted">Schema Registry, Backpressure, TLS + ACLs</text>

          <rect x="72" y="432" width="160" height="120" rx="8" class="box" stroke="#60A5FA"/>
          <text x="152" y="470" text-anchor="middle" class="small">Parser & Normalizer (Zeek-like for IoT metadata)</text>

          <rect x="252" y="432" width="260" height="120" rx="8" class="box" stroke="#A3E635"/>
          <text x="382" y="470" text-anchor="middle" class="small">Enrichment Workers (Asset, GeoIP, Threat Intel)</text>
        </g>

        <!-- Time-series & Cold Store -->
        <g>
          <rect x="600" y="360" width="540" height="260" rx="12" class="box" stroke="#F97316"/>
          <text x="870" y="392" text-anchor="middle" class="small">Time-series DB + Object Lake</text>
          <text x="870" y="410" text-anchor="middle" class="muted">TSDB (Influx/ClickHouse/Timescale) + S3 WORM for raw pcap/firmware snapshots</text>

          <rect x="624" y="432" width="240" height="120" rx="8" class="box" stroke="#F97316"/>
          <text x="744" y="470" text-anchor="middle" class="small">Hot TSDB / OLAP (fast queries)</text>

          <rect x="884" y="432" width="240" height="120" rx="8" class="box" stroke="#EF4444"/>
          <text x="1004" y="470" text-anchor="middle" class="small">Immutable Evidence WORM (signed manifests)</text>
        </g>

        <!-- Analytics / ML & Control Plane -->
        <g>
          <rect x="36" y="648" width="740" height="220" rx="12" class="zone" stroke="#22C55E" filter="url(#soft)"/>
          <text x="406" y="680" text-anchor="middle" class="small">Analytics & Hunting — Model training, drift detection, AB tests on OTA</text>
          <text x="406" y="698" text-anchor="middle" class="muted">Notebook access read-only, model registry, feature store</text>

          <rect x="72" y="712" width="220" height="120" rx="8" class="box" stroke="#60A5FA"/>
          <text x="182" y="760" text-anchor="middle" class="small">Model Training / Batch Jobs (GPU pool)</text>

          <rect x="304" y="712" width="220" height="120" rx="8" class="box" stroke="#A855F7"/>
          <text x="414" y="760" text-anchor="middle" class="small">Control Plane / OTA Orchestrator (signed artifacts, canary rollout)</text>
        </g>

        <!-- Fleet Management & Device Provisioning -->
        <g>
          <rect x="800" y="648" width="776" height="220" rx="12" class="zone" stroke="#A78BFA">
          </rect>
          <text x="1188" y="680" text-anchor="middle" class="small">Fleet Management & Provisioning</text>
          <text x="1188" y="698" text-anchor="middle" class="muted">Factory bootstrap → EST / SCEP enrollment → X.509 device certs → Device Registry</text>

          <rect x="816" y="712" width="240" height="120" rx="8" class="box" stroke="#8B5CF6"/>
          <text x="936" y="760" text-anchor="middle" class="small">Provisioning Server (EST / SCEP)</text>

          <rect x="1068" y="712" width="240" height="120" rx="8" class="box" stroke="#F59E0B"/>
          <text x="1188" y="760" text-anchor="middle" class="small">Device Registry & Identity (PKI, attestation)</text>
        </g>

        <!-- SIEM, SOAR & Admin Bastion -->
        <g>
          <rect x="36" y="892" width="1540" height="16" rx="6" class="box" stroke="#60A5FA"/>
          <text x="64" y="906" class="muted">Legend: secured device identity → gateway translation & auth → clustered ingest → parsing/enrichment → TSDB + WORM → analytics & OTA control. All critical actions signed and stored in WORM; management plane bastion-only.</text>
        </g>

        <!-- Flow arrows -->
        <path d="M196 266 L504 266" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M736 266 L864 266" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M720 452 L624 452" stroke="#10B981" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M930 592 L930 648" stroke="#A855F7" stroke-width="2" marker-end="url(#arrow)"/>
      </svg>
        `;
        title = 'Converged Edge-Gateway Telemetry Topology';
        description = 'Field IoT devices → local gateway/fog nodes → secure regional ingest (MQTT/DTLS/HTTPS) → stream fabric → time-series + immutable evidence store → analytics, OTA control & fleet management.';
        break;
      /* --------------------------- EDGE AI (robust, production-ready) --------------------------- */

     /* --------------------------- EDGE AI DEPLOYMENTS (robust + detailed) ----------------------- */
      case 'edge-ai':
        svgContent = `
      <svg viewBox="0 0 1600 960" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Edge AI Deployment Topology">
        <defs>
          <linearGradient id="bgEdgeAI" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#020617"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
          <marker id="arrowEdgeAI" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <path d="M0 0 L14 7 L0 14 z" fill="#38bdf8"/>
          </marker>
          <filter id="softEdgeAI"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.18"/></filter>
          <style>
            .title { font-family: Inter, system-ui; fill: #f0f9ff; font-size: 22px; font-weight: 700 }
            .note { font-family: Inter, system-ui; fill: #94a3b8; font-size: 13px }
            .zone { fill: rgba(2,6,23,0.6); stroke-width:2 }
            .box { fill: #0f172a; stroke-width:1.5 }
            .small { fill:#cbd5e1; font-size:12px }
            .muted { fill:#94a3b8; font-size:11px }
          </style>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#bgEdgeAI)"/>
        <text x="36" y="44" class="title">Edge AI Deployment — Distributed Edge Nodes + Central Orchestration</text>
        <text x="36" y="68" class="note">Design: edge AI nodes with GPUs/TPUs at field sites; central orchestrator pushes signed models & configs; certificate-based mesh ensures secure sync.</text>

        <!-- Edge AI nodes -->
        <g filter="url(#softEdgeAI)">
          <rect x="40" y="100" width="460" height="260" rx="12" class="zone" stroke="#38bdf8"/>
          <text x="270" y="128" text-anchor="middle" class="small">Edge AI Nodes (Field Deployed)</text>
          <text x="270" y="146" text-anchor="middle" class="muted">Inference close to data, GPU/TPU accelerators, TLS tunnels upstream</text>
          
          <rect x="60" y="160" width="190" height="100" rx="8" class="box" stroke="#0ea5e9"/>
          <text x="155" y="200" text-anchor="middle" class="small">Camera/IoT AI Inference</text>
          
          <rect x="260" y="160" width="190" height="100" rx="8" class="box" stroke="#22d3ee"/>
          <text x="355" y="200" text-anchor="middle" class="small">Industrial AI Node</text>
          
          <rect x="160" y="270" width="190" height="70" rx="8" class="box" stroke="#2dd4bf"/>
          <text x="255" y="310" text-anchor="middle" class="small">Local Cache & Policy Agent</text>
        </g>

        <!-- Regional aggregation -->
        <g filter="url(#softEdgeAI)">
          <rect x="540" y="100" width="460" height="260" rx="12" class="zone" stroke="#22c55e"/>
          <text x="770" y="128" text-anchor="middle" class="small">Regional Edge Hub / Aggregator</text>
          <text x="770" y="146" text-anchor="middle" class="muted">Aggregates edge telemetry, pushes OTA models, acts as control relay</text>
          
          <rect x="560" y="160" width="200" height="100" rx="8" class="box" stroke="#16a34a"/>
          <text x="660" y="200" text-anchor="middle" class="small">Regional Cache / Model Store</text>
          
          <rect x="770" y="160" width="210" height="100" rx="8" class="box" stroke="#4ade80"/>
          <text x="875" y="200" text-anchor="middle" class="small">Control Plane Relay (Policies, OTA)</text>
        </g>

        <!-- Central orchestration -->
        <g filter="url(#softEdgeAI)">
          <rect x="1040" y="100" width="520" height="260" rx="12" class="zone" stroke="#a855f7"/>
          <text x="1300" y="128" text-anchor="middle" class="small">Central AI Orchestration Cluster (Cloud/DC)</text>
          <text x="1300" y="146" text-anchor="middle" class="muted">Model registry, CI/CD for AI, signed artifact repo, orchestrator</text>
          
          <rect x="1060" y="160" width="220" height="100" rx="8" class="box" stroke="#9333ea"/>
          <text x="1170" y="200" text-anchor="middle" class="small">Model Registry (versioned, signed)</text>
          
          <rect x="1290" y="160" width="250" height="100" rx="8" class="box" stroke="#c084fc"/>
          <text x="1415" y="200" text-anchor="middle" class="small">AI Orchestrator (deploy/rollback)</text>
        </g>

        <!-- Data pipeline -->
        <g filter="url(#softEdgeAI)">
          <rect x="40" y="400" width="1520" height="220" rx="12" class="zone" stroke="#f97316"/>
          <text x="800" y="428" text-anchor="middle" class="small">Telemetry + Analytics Flow</text>
          <text x="800" y="446" text-anchor="middle" class="muted">Inference telemetry → stream bus → time-series DB → dashboards + SIEM</text>
          
          <rect x="60" y="460" width="300" height="120" rx="8" class="box" stroke="#fb923c"/>
          <text x="210" y="500" text-anchor="middle" class="small">Stream Bus (Kafka/Pulsar)</text>
          
          <rect x="380" y="460" width="300" height="120" rx="8" class="box" stroke="#f59e0b"/>
          <text x="530" y="500" text-anchor="middle" class="small">Time-series DB + OLAP</text>
          
          <rect x="700" y="460" width="340" height="120" rx="8" class="box" stroke="#ef4444"/>
          <text x="870" y="500" text-anchor="middle" class="small">Immutable Evidence Store (WORM)</text>
          
          <rect x="1060" y="460" width="480" height="120" rx="8" class="box" stroke="#fbbf24"/>
          <text x="1300" y="500" text-anchor="middle" class="small">SOC / Dashboards / Analysts (SIEM + Forensic Tools)</text>
        </g>

        <!-- Arrows -->
        <path d="M500 210 L540 210" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowEdgeAI)"/>
        <path d="M1000 210 L1040 210" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowEdgeAI)"/>
        <path d="M270 360 L270 460" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowEdgeAI)"/>
        <path d="M770 360 L770 460" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowEdgeAI)"/>
        <path d="M1300 360 L1300 460" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowEdgeAI)"/>
      </svg>
        `;
        title = 'Distributed Edge AI with Central Orchestration';
        description = 'Field-deployed AI nodes (GPU/TPU) with local inference → regional aggregation hubs → central AI orchestrator. Model registry + signed OTA, telemetry stream fabric, WORM store, SOC dashboards.';
        break;


      /* ----------------------- AI THREAT HUNTING SYSTEM (robust + detailed) ----------------------- */
      case 'ai-threat-hunting':
        svgContent = `
      <svg viewBox="0 0 1650 1000" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI Threat Hunting System">
        <defs>
          <linearGradient id="bgThreat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0f172a"/>
            <stop offset="100%" stop-color="#020617"/>
          </linearGradient>
          <marker id="arrowThreat" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <path d="M0 0 L14 7 L0 14 z" fill="#38bdf8"/>
          </marker>
          <filter id="softThreat"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.18"/></filter>
          <style>
            .title { font-family: Inter, system-ui; fill: #f0f9ff; font-size: 22px; font-weight: 700 }
            .note { font-family: Inter, system-ui; fill: #94a3b8; font-size: 13px }
            .zone { fill: rgba(2,6,23,0.65); stroke-width:2 }
            .box { fill: #0f172a; stroke-width:1.5 }
            .small { fill:#cbd5e1; font-size:12px }
            .muted { fill:#94a3b8; font-size:11px }
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgThreat)"/>
        <text x="36" y="44" class="title">AI Threat Hunting System — Data Lake Ingest + Analytics Fabric + Investigator Plane</text>
        <text x="36" y="68" class="note">Goal: high-volume ingest → enriched data lake → ML-driven analytics → investigator-friendly hunting tools with bastion isolation.</text>

        <!-- Ingest Layer -->
        <g filter="url(#softThreat)">
          <rect x="40" y="100" width="480" height="240" rx="12" class="zone" stroke="#38bdf8"/>
          <text x="280" y="128" text-anchor="middle" class="small">Telemetry & Ingest Layer</text>
          <text x="280" y="146" text-anchor="middle" class="muted">NetFlow, Syslog, EDR, Cloud Trails, PCAPs</text>
          
          <rect x="60" y="160" width="200" height="90" rx="8" class="box" stroke="#0ea5e9"/>
          <text x="160" y="200" text-anchor="middle" class="small">Ingest Gateways (mTLS, WAF)</text>
          
          <rect x="280" y="160" width="220" height="90" rx="8" class="box" stroke="#22d3ee"/>
          <text x="390" y="200" text-anchor="middle" class="small">Streaming Collectors (Kafka / Pulsar)</text>
          
          <rect x="150" y="260" width="220" height="60" rx="8" class="box" stroke="#2dd4bf"/>
          <text x="260" y="295" text-anchor="middle" class="small">Schema Registry + Normalization</text>
        </g>

        <!-- Data Lake -->
        <g filter="url(#softThreat)">
          <rect x="540" y="100" width="500" height="240" rx="12" class="zone" stroke="#f59e0b"/>
          <text x="790" y="128" text-anchor="middle" class="small">Data Lake & Evidence Store</text>
          <text x="790" y="146" text-anchor="middle" class="muted">Raw + normalized data, WORM store, encrypted partitions</text>
          
          <rect x="560" y="160" width="220" height="90" rx="8" class="box" stroke="#fbbf24"/>
          <text x="670" y="200" text-anchor="middle" class="small">Raw Telemetry (Immutable)</text>
          
          <rect x="800" y="160" width="220" height="90" rx="8" class="box" stroke="#f97316"/>
          <text x="910" y="200" text-anchor="middle" class="small">Enriched / Normalized Views</text>
          
          <rect x="680" y="260" width="220" height="60" rx="8" class="box" stroke="#fb923c"/>
          <text x="790" y="295" text-anchor="middle" class="small">Evidence Vault (WORM, signed manifests)</text>
        </g>

        <!-- Analytics Fabric -->
        <g filter="url(#softThreat)">
          <rect x="1060" y="100" width="540" height="240" rx="12" class="zone" stroke="#a855f7"/>
          <text x="1330" y="128" text-anchor="middle" class="small">Analytics & ML Fabric</text>
          <text x="1330" y="146" text-anchor="middle" class="muted">ML pipelines, anomaly detection, graph analysis</text>
          
          <rect x="1080" y="160" width="240" height="90" rx="8" class="box" stroke="#9333ea"/>
          <text x="1200" y="200" text-anchor="middle" class="small">Streaming Analytics (Flink/Spark)</text>
          
          <rect x="1340" y="160" width="240" height="90" rx="8" class="box" stroke="#c084fc"/>
          <text x="1460" y="200" text-anchor="middle" class="small">Graph/Link Analysis (Neo4j/TigerGraph)</text>
          
          <rect x="1210" y="260" width="240" height="60" rx="8" class="box" stroke="#d946ef"/>
          <text x="1330" y="295" text-anchor="middle" class="small">ML/AI Detection Models</text>
        </g>

        <!-- Investigator Plane -->
        <g filter="url(#softThreat)">
          <rect x="40" y="380" width="1560" height="300" rx="12" class="zone" stroke="#22c55e"/>
          <text x="820" y="408" text-anchor="middle" class="small">Investigator Bastion & Hunting Tools</text>
          <text x="820" y="426" text-anchor="middle" class="muted">Isolated bastion → query lake, visualize anomalies, build hunts</text>
          
          <rect x="60" y="440" width="360" height="120" rx="8" class="box" stroke="#16a34a"/>
          <text x="240" y="500" text-anchor="middle" class="small">Investigator Bastion (Jupyter, RStudio, read-only creds)</text>
          
          <rect x="440" y="440" width="360" height="120" rx="8" class="box" stroke="#4ade80"/>
          <text x="620" y="500" text-anchor="middle" class="small">Hunting Workbench (query builders, hunt orchestration)</text>
          
          <rect x="820" y="440" width="360" height="120" rx="8" class="box" stroke="#22d3ee"/>
          <text x="1000" y="500" text-anchor="middle" class="small">Visualization Dashboards (Kibana/Grafana/Custom)</text>
          
          <rect x="1200" y="440" width="380" height="120" rx="8" class="box" stroke="#14b8a6"/>
          <text x="1390" y="500" text-anchor="middle" class="small">Case Management & SOAR (ticketing, playbooks)</text>
        </g>

        <!-- Arrows -->
        <path d="M520 200 L540 200" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowThreat)"/>
        <path d="M1040 200 L1060 200" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowThreat)"/>
        <path d="M790 340 L790 380" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowThreat)"/>
        <path d="M1330 340 L1330 380" stroke="#a855f7" stroke-width="2" marker-end="url(#arrowThreat)"/>
      </svg>
        `;
        title = 'AI Threat Hunting System';
        description = 'Telemetry ingestion → data lake (raw + enriched + immutable evidence) → analytics fabric (ML + graph analysis) → investigator bastion plane with hunting tools and dashboards.';
        break;


      /* ----------------------- TOKENOMICS SIMULATOR (ultra-robust) ----------------------- */
      case 'tokenomics':
        svgContent = `
      <svg viewBox="0 0 1500 920" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tokenomics simulator topology">
        <defs>
          <linearGradient id="bg" x1="0" x2="1"><stop offset="0%" stop-color="#041022"/><stop offset="100%" stop-color="#00121a"/></linearGradient>
          <filter id="soft"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.12"/></filter>
          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#F97316"/></marker>
          <style>
            .title{font-family:Inter,system-ui,-apple-system; fill:#EDE9F6; font-size:18px; font-weight:700}
            .note{font-family:Inter; fill:#9CA3AF; font-size:12px}
            .box{fill:#061022; stroke-width:2}
            .zone{fill:rgba(2,6,23,0.66); stroke-width:2}
            .muted{fill:#94A3B8; font-size:11px}
            .small{fill:#C7D2FE; font-size:11px}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>
        <text x="36" y="44" class="title">Tokenomics Simulator — Deterministic Ephemeral Mesh with Sandbox Overlay & Secure Bridges</text>
        <text x="36" y="68" class="note">Isolated microVMs/containers, private blockchain forks, HSM-signed manifests, one-way/dual-sign bridges, WORM evidence & reproducible experiment bundles.</text>

        <!-- Control Plane -->
        <g filter="url(#soft)">
          <rect x="36" y="96" width="1428" height="88" rx="10" class="zone" stroke="#60A5FA"/>
          <text x="760" y="140" text-anchor="middle" class="small">Control Plane — Orchestrator (Argo/ Nomad), Experiment Catalog, Policy Engine, Audit Service</text>
        </g>

        <!-- CI / IaC -->
        <g>
          <rect x="36" y="206" width="360" height="160" rx="12" class="box" stroke="#3B82F6"/>
          <text x="216" y="236" text-anchor="middle" class="small">CI / IaC & GitOps</text>
          <text x="216" y="256" class="muted" text-anchor="middle">Signed build artifacts & reproducible images</text>
        </g>

        <!-- Orchestrator -->
        <g>
          <rect x="420" y="206" width="380" height="160" rx="12" class="box" stroke="#10B981"/>
          <text x="610" y="236" text-anchor="middle" class="small">Orchestrator / Scheduler (Argo / Nomad / K8s Jobs)</text>
          <text x="610" y="256" class="muted" text-anchor="middle">Quota enforcement, TTL teardown, payment policy gate</text>
        </g>

        <!-- Sandbox mesh -->
        <g>
          <rect x="828" y="206" width="636" height="340" rx="12" class="zone" stroke="#F97316">
          </rect>
          <text x="1150" y="236" text-anchor="middle" class="small">Ephemeral Sandbox Mesh (microVMs / containers / network namespaces)</text>
          <text x="1150" y="256" class="muted" text-anchor="middle">Deterministic seeds, isolated vNets, per-run snapshots</text>

          <rect x="860" y="276" width="180" height="110" rx="10" class="box" stroke="#A855F7"/>
          <text x="950" y="320" text-anchor="middle" class="small">Simulator Worker Pool (deterministic RNG)</text>

          <rect x="1060" y="276" width="180" height="110" rx="10" class="box" stroke="#3B82F6"/>
          <text x="1150" y="320" text-anchor="middle" class="small">Exchange Simulation Nodes (AMM, Orderbook)</text>

          <rect x="1260" y="276" width="180" height="110" rx="10" class="box" stroke="#60A5FA"/>
          <text x="1350" y="320" text-anchor="middle" class="small">Participant Bots (Traders, Oracles)</text>

          <rect x="1060" y="396" width="380" height="90" rx="10" class="box" stroke="#10B981"/>
          <text x="1250" y="432" text-anchor="middle" class="small">Epoch Storage (snapshots, logs, deterministic outputs)</text>
        </g>

        <!-- Private chain & test bridge -->
        <g>
          <rect x="36" y="396" width="360" height="200" rx="12" class="box" stroke="#A78BFA"/>
          <text x="216" y="430" text-anchor="middle" class="small">Private Chain Cluster (Geth/Ganache/Besu)</text>
          <text x="216" y="452" class="muted" text-anchor="middle">Forked mainnet snapshots, deterministic block times, chain snapshots</text>

          <rect x="420" y="396" width="360" height="200" rx="12" class="box" stroke="#A855F7"/>
          <text x="600" y="430" text-anchor="middle" class="small">Test Token Bridge & Faucet (One-way by default)</text>
          <text x="600" y="452" class="muted" text-anchor="middle">Dual-sign egress gate, burn on exit, export bundles</text>
        </g>

        <!-- HSM / KMS -->
        <g>
          <rect x="828" y="560" width="380" height="160" rx="12" class="box" stroke="#10B981"/>
          <text x="1018" y="594" text-anchor="middle" class="small">HSM / KMS — Key custody, signing experiment bundles, multisig</text>
          <text x="1018" y="612" class="muted" text-anchor="middle">Attestations, manifest signing, export approvals</text>
        </g>

        <!-- Quarantine / WORM -->
        <g>
          <rect x="36" y="612" width="360" height="220" rx="12" class="box" stroke="#EF4444"/>
          <text x="216" y="646" text-anchor="middle" class="small">Quarantine / Forensics WORM (Signed Manifests)</text>
          <text x="216" y="668" class="muted" text-anchor="middle">Immutable bundles, deterministic seeds, chain-of-custody</text>
        </g>

        <!-- Results aggregator -->
        <g>
          <rect x="420" y="612" width="780" height="220" rx="12" class="box" stroke="#3B82F6"/>
          <text x="810" y="646" text-anchor="middle" class="small">Results Aggregator & Analytics (TSDB, ClickHouse, Grafana)</text>
          <text x="810" y="668" class="muted" text-anchor="middle">Slippage, liquidity curves, P&L, tail-risk metrics, snapshot diffs</text>
        </g>

        <!-- Flow arrows -->
        <path d="M396 276 L420 276" stroke="#F97316" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M780 276 L828 276" stroke="#A78BFA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M600 496 L600 560" stroke="#10B981" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Legend -->
        <g>
          <rect x="36" y="844" width="1428" height="48" rx="6" fill="#021024" stroke="#94A3B8"/>
          <text x="64" y="866" class="muted">Legend: CI→Orchestrator→Ephemeral sandbox mesh→private-chain & bridge→HSM-signed evidence→WORM quarantine→results analytics. All runs signed, reproducible, and policy-gated.</text>
        </g>
      </svg>
        `;
        title = 'Ephemeral Compute Cluster with Sandbox Overlay';
        description = 'Deterministic sandbox cluster for tokenomics experiments with private chain forks, signed experiment bundles, controlled bridges, HSM custody, immutable evidence, and results analytics.';
        break;


      /* ----------------------- COMPLIANCE & REPORTING GENERATORS (robust + detailed) ----------------------- */
      case 'compliance':
        svgContent = `
      <svg viewBox="0 0 1600 960" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compliance & Reporting Generators Topology">
        <defs>
          <linearGradient id="bgCompliance" x1="0" x2="1">
            <stop offset="0%" stop-color="#0f172a"/>
            <stop offset="100%" stop-color="#020617"/>
          </linearGradient>
          <marker id="arrowCompliance" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <path d="M0 0 L14 7 L0 14 z" fill="#60a5fa"/>
          </marker>
          <filter id="softCompliance"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.12"/></filter>
          <style>
            .title { font-family: Inter, system-ui; fill: #f8fafc; font-size: 22px; font-weight: 700 }
            .note { font-family: Inter, system-ui; fill: #94a3b8; font-size: 13px }
            .zone { fill: rgba(2,6,23,0.65); stroke-width:2 }
            .box { fill: #0f172a; stroke-width:1.5 }
            .small { fill:#cbd5e1; font-size:12px }
            .muted { fill:#94a3b8; font-size:11px }
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgCompliance)"/>
        <text x="36" y="44" class="title">Compliance & Reporting Generators — Secure Doc Gen Zone</text>
        <text x="36" y="68" class="note">Pipeline: Data Lake → Normalization → Report Engine → Signed PDF/Doc → Immutable Evidence Store → Regulator Submission.</text>

        <!-- Data Inputs -->
        <g filter="url(#softCompliance)">
          <rect x="40" y="100" width="480" height="180" rx="12" class="zone" stroke="#38bdf8"/>
          <text x="280" y="128" text-anchor="middle" class="small">Data Sources (Internal + External)</text>
          <text x="280" y="146" text-anchor="middle" class="muted">SIEM, Finance, HR, Risk, Cloud APIs</text>

          <rect x="60" y="160" width="200" height="80" rx="8" class="box" stroke="#0ea5e9"/>
          <text x="160" y="200" text-anchor="middle" class="small">Finance / Treasury Feeds</text>

          <rect x="280" y="160" width="220" height="80" rx="8" class="box" stroke="#22d3ee"/>
          <text x="390" y="200" text-anchor="middle" class="small">SIEM / Security Logs</text>
        </g>

        <!-- Normalization -->
        <g filter="url(#softCompliance)">
          <rect x="540" y="100" width="340" height="180" rx="12" class="zone" stroke="#f59e0b"/>
          <text x="710" y="128" text-anchor="middle" class="small">Normalization Layer</text>
          <text x="710" y="146" text-anchor="middle" class="muted">Schema registry, ETL, sanitization</text>

          <rect x="560" y="160" width="140" height="80" rx="8" class="box" stroke="#fbbf24"/>
          <text x="630" y="200" text-anchor="middle" class="small">ETL Workers</text>

          <rect x="710" y="160" width="150" height="80" rx="8" class="box" stroke="#f97316"/>
          <text x="785" y="200" text-anchor="middle" class="small">Schema Validator</text>
        </g>

        <!-- Report Engine -->
        <g filter="url(#softCompliance)">
          <rect x="900" y="100" width="320" height="180" rx="12" class="zone" stroke="#a855f7"/>
          <text x="1060" y="128" text-anchor="middle" class="small">Secure Document Generation</text>
          <text x="1060" y="146" text-anchor="middle" class="muted">PDF/DOC generation, template engine</text>

          <rect x="920" y="160" width="130" height="80" rx="8" class="box" stroke="#9333ea"/>
          <text x="985" y="200" text-anchor="middle" class="small">Template Engine</text>

          <rect x="1060" y="160" width="140" height="80" rx="8" class="box" stroke="#c084fc"/>
          <text x="1130" y="200" text-anchor="middle" class="small">Generator (LaTeX/Docx)</text>
        </g>

        <!-- Signing & Evidence -->
        <g filter="url(#softCompliance)">
          <rect x="1240" y="100" width="320" height="180" rx="12" class="zone" stroke="#10b981"/>
          <text x="1400" y="128" text-anchor="middle" class="small">Signing + Immutable Storage</text>
          <text x="1400" y="146" text-anchor="middle" class="muted">HSM signing, WORM evidence vault</text>

          <rect x="1260" y="160" width="130" height="80" rx="8" class="box" stroke="#059669"/>
          <text x="1325" y="200" text-anchor="middle" class="small">HSM Signer</text>

          <rect x="1400" y="160" width="140" height="80" rx="8" class="box" stroke="#22c55e"/>
          <text x="1470" y="200" text-anchor="middle" class="small">Immutable WORM Vault</text>
        </g>

        <!-- Regulator Submission -->
        <g filter="url(#softCompliance)">
          <rect x="40" y="320" width="1520" height="160" rx="12" class="zone" stroke="#ef4444"/>
          <text x="800" y="348" text-anchor="middle" class="small">Regulator Submission Gateway</text>
          <text x="800" y="366" text-anchor="middle" class="muted">Air-gapped queue, outbound proxy, legal review</text>

          <rect x="60" y="360" width="360" height="80" rx="8" class="box" stroke="#ef4444"/>
          <text x="240" y="400" text-anchor="middle" class="small">Submission Staging</text>

          <rect x="440" y="360" width="360" height="80" rx="8" class="box" stroke="#dc2626"/>
          <text x="620" y="400" text-anchor="middle" class="small">Legal & Compliance Review</text>

          <rect x="820" y="360" width="360" height="80" rx="8" class="box" stroke="#f87171"/>
          <text x="1000" y="400" text-anchor="middle" class="small">Outbound Proxy / Queue</text>

          <rect x="1200" y="360" width="340" height="80" rx="8" class="box" stroke="#b91c1c"/>
          <text x="1370" y="400" text-anchor="middle" class="small">Regulator / Auditor Endpoint</text>
        </g>

        <!-- Arrows -->
        <path d="M520 200 L540 200" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowCompliance)"/>
        <path d="M880 200 L900 200" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowCompliance)"/>
        <path d="M1220 200 L1240 200" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowCompliance)"/>
        <path d="M1400 280 L1400 320" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowCompliance)"/>
      </svg>
        `;
        title = 'Secure Document Generation Zone';
        description = 'Data feeds → ETL normalization → doc gen cluster → HSM-signed PDF/DOC artifacts → immutable evidence vault → staged legal review & regulator submission.';
        break;


      /* ----------------------- CUSTOM SECURITY APPLIANCES (robust + detailed) ----------------------- */
      case 'security-appliance':
        svgContent = `
      <svg viewBox="0 0 1650 960" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Custom Security Appliances Topology">
        <defs>
          <linearGradient id="bgSecApp" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0f172a"/>
            <stop offset="100%" stop-color="#020617"/>
          </linearGradient>
          <marker id="arrowSecApp" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <path d="M0 0 L14 7 L0 14 z" fill="#38bdf8"/>
          </marker>
          <filter id="softSecApp"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.15"/></filter>
          <style>
            .title { font-family: Inter, system-ui; fill: #f8fafc; font-size: 22px; font-weight: 700 }
            .note { font-family: Inter, system-ui; fill: #94a3b8; font-size: 13px }
            .zone { fill: rgba(2,6,23,0.6); stroke-width:2 }
            .box { fill: #0f172a; stroke-width:1.5 }
            .small { fill:#cbd5e1; font-size:12px }
            .muted { fill:#94a3b8; font-size:11px }
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgSecApp)"/>
        <text x="36" y="44" class="title">Custom Security Appliances — Inline DMZ / Inspection Topology</text>
        <text x="36" y="68" class="note">Traffic flow: External → DMZ → Inline Security Appliances → Internal / Cloud | Dedicated VLANs for management & monitoring mirrors.</text>

        <!-- External Zone -->
        <g filter="url(#softSecApp)">
          <rect x="40" y="120" width="360" height="180" rx="12" class="zone" stroke="#f87171"/>
          <text x="220" y="148" text-anchor="middle" class="small">External / Untrusted Zone</text>
          <rect x="60" y="160" width="320" height="100" rx="8" class="box" stroke="#ef4444"/>
          <text x="220" y="210" text-anchor="middle" class="small">Internet / External Clients</text>
        </g>

        <!-- DMZ Zone -->
        <g filter="url(#softSecApp)">
          <rect x="440" y="120" width="360" height="180" rx="12" class="zone" stroke="#fbbf24"/>
          <text x="620" y="148" text-anchor="middle" class="small">DMZ (Exposed Services)</text>
          <rect x="460" y="160" width="150" height="100" rx="8" class="box" stroke="#f59e0b"/>
          <text x="535" y="210" text-anchor="middle" class="small">Web Servers / Proxies</text>
          <rect x="620" y="160" width="160" height="100" rx="8" class="box" stroke="#d97706"/>
          <text x="700" y="210" text-anchor="middle" class="small">Email Gateways</text>
        </g>

        <!-- Inline Appliances Zone -->
        <g filter="url(#softSecApp)">
          <rect x="840" y="120" width="400" height="180" rx="12" class="zone" stroke="#38bdf8"/>
          <text x="1040" y="148" text-anchor="middle" class="small">Inline Security Appliances</text>
          
          <rect x="860" y="160" width="120" height="100" rx="8" class="box" stroke="#0ea5e9"/>
          <text x="920" y="210" text-anchor="middle" class="small">Firewall (Next-Gen)</text>
          
          <rect x="990" y="160" width="110" height="100" rx="8" class="box" stroke="#22d3ee"/>
          <text x="1045" y="210" text-anchor="middle" class="small">IPS / IDS</text>
          
          <rect x="1110" y="160" width="110" height="100" rx="8" class="box" stroke="#38bdf8"/>
          <text x="1165" y="210" text-anchor="middle" class="small">DLP / WAF</text>
        </g>

        <!-- Internal Zone -->
        <g filter="url(#softSecApp)">
          <rect x="1260" y="120" width="340" height="180" rx="12" class="zone" stroke="#4ade80"/>
          <text x="1430" y="148" text-anchor="middle" class="small">Internal / Trusted Zone</text>
          <rect x="1280" y="160" width="300" height="100" rx="8" class="box" stroke="#22c55e"/>
          <text x="1430" y="210" text-anchor="middle" class="small">Application Servers / Cloud Connect</text>
        </g>

        <!-- Management Plane -->
        <g filter="url(#softSecApp)">
          <rect x="440" y="340" width="760" height="160" rx="12" class="zone" stroke="#a855f7"/>
          <text x="820" y="368" text-anchor="middle" class="small">Dedicated Management & Monitoring VLAN</text>
          
          <rect x="460" y="380" width="200" height="100" rx="8" class="box" stroke="#9333ea"/>
          <text x="560" y="430" text-anchor="middle" class="small">Mgmt Bastion (MFA + RBAC)</text>
          
          <rect x="680" y="380" width="240" height="100" rx="8" class="box" stroke="#c084fc"/>
          <text x="800" y="430" text-anchor="middle" class="small">Config Mgmt (Ansible / GitOps)</text>
          
          <rect x="940" y="380" width="240" height="100" rx="8" class="box" stroke="#d946ef"/>
          <text x="1060" y="430" text-anchor="middle" class="small">Monitoring Mirrors (SPAN / TAP)</text>
        </g>

        <!-- Arrows -->
        <path d="M400 210 L440 210" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowSecApp)"/>
        <path d="M800 210 L840 210" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowSecApp)"/>
        <path d="M1240 210 L1260 210" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowSecApp)"/>
      </svg>
        `;
        title = 'Custom Security Appliances';
        description = 'Inline deployment of firewalls, IPS/IDS, DLP/WAF appliances in DMZ → Trusted flow; isolated management VLAN with bastion + config mgmt + monitoring mirrors.';
        break;


      /* ----------------------- HA STORAGE SOLUTIONS — Dual-Site Replicated SAN/NAS Fabric ----------------------- */
      case 'ha-storage':
        svgContent = `
      <svg viewBox="0 0 1500 920" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="High Availability Storage Topology">
        <defs>
          <linearGradient id="bg" x1="0" x2="1"><stop offset="0%" stop-color="#041022"/><stop offset="100%" stop-color="#00101a"/></linearGradient>
          <filter id="soft'><feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.12"/></filter>
          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#60A5FA"/></marker>
          <style>
            .title{font-family:Inter,system-ui; fill:#E6F7FF; font-size:20px; font-weight:700}
            .note{font-family:Inter; fill:#9CA3AF; font-size:12px}
            .zone{fill:rgba(2,6,23,0.66); stroke-width:2}
            .box{fill:#061022; stroke-width:1.5}
            .muted{fill:#94A3B8; font-size:11px}
            .small{fill:#CFE8FF; font-size:11px}
            .dashed{stroke-dasharray:7 6}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>
        <text x="36" y="44" class="title">High Availability Storage — Dual-Site Active/Active or Active/Passive SAN/NAS Fabric</text>
        <text x="36" y="68" class="note">Design: synchronous & async replication options, multi-path Fabric, RAID/erasure coding, immutable snapshots, tested failover orchestration, and strict encryption & ACLs.</text>

        <!-- Primary site -->
        <g>
          <rect x="36" y="96" width="660" height="260" rx="12" class="zone" stroke="#3B82F6"/>
          <text x="366" y="128" text-anchor="middle" class="small">Primary Site — Active Storage Fabric</text>

          <rect x="72" y="156" width="220" height="140" rx="10" class="box" stroke="#60A5FA"/>
          <text x="182" y="190" text-anchor="middle" class="small">Compute Cluster A (App / DB Hosts)</text>
          <text x="182" y="210" class="muted" text-anchor="middle">iSCSI/FC Clients, Multipath (DM-MP/MPIO)</text>

          <rect x="312" y="156" width="280" height="140" rx="10" class="box" stroke="#3B82F6"/>
          <text x="452" y="190" text-anchor="middle" class="small">Primary Storage Array / NAS Gateway</text>
          <text x="452" y="210" class="muted" text-anchor="middle">RAID/Erasure, SSD cache, NVMe-oF frontends</text>
        </g>

        <!-- Replication / fabric -->
        <g>
          <rect x="720" y="96" width="60" height="260" rx="8" class="box" stroke="#10B981"/>
          <text x="750" y="128" text-anchor="middle" class="small">Replication Fabric</text>
          <text x="750" y="148" class="muted" text-anchor="middle">Sync/Async, WAN-optimized, dedupe & compression</text>
        </g>

        <!-- Secondary site -->
        <g>
          <rect x="812" y="96" width="660" height="260" rx="12" class="zone" stroke="#10B981"/>
          <text x="1142" y="128" text-anchor="middle" class="small">Secondary Site — DR / Replicated Storage</text>

          <rect x="848" y="156" width="280" height="140" rx="10" class="box" stroke="#34D399"/>
          <text x="988" y="190" text-anchor="middle" class="small">Replica Storage Array (Hot / Warm)</text>
          <text x="988" y="210" class="muted" text-anchor="middle">Synchronous/Asynchronous replicas, read-only mounts optional</text>

          <rect x="1138" y="156" width="220" height="140" rx="10" class="box" stroke="#10B981"/>
          <text x="1248" y="190" text-anchor="middle" class="small">Compute Cluster B (Failover Targets)</text>
          <text x="1248" y="210" class="muted" text-anchor="middle">Ready to promote; automated cutover support</text>
        </g>

        <!-- Immutable backups & WORM -->
        <g>
          <rect x="36" y="380" width="660" height="200" rx="12" class="box" stroke="#EF4444"/>
          <text x="366" y="410" text-anchor="middle" class="small">Immutable Backup Overlay (Object Lock / Tape Vault)</text>
          <text x="366" y="430" class="muted" text-anchor="middle">Point-in-time snapshots, signed manifests, offsite cold archive</text>
        </g>

        <!-- Management & orchestration -->
        <g>
          <rect x="720" y="380" width="752" height="200" rx="12" class="zone" stroke="#A78BFA"/>
          <text x="1100" y="410" text-anchor="middle" class="small">Storage Control Plane & Orchestrator</text>
          <text x="1100" y="430" class="muted" text-anchor="middle">Runbooks, replication controls, cutover automation, monitoring</text>

          <rect x="760" y="420" width="220" height="120" rx="10" class="box" stroke="#9333ea"/>
          <text x="870" y="470" text-anchor="middle" class="small">Replication Manager / Fabric Controller</text>

          <rect x="1000" y="420" width="240" height="120" rx="10" class="box" stroke="#C084FC"/>
          <text x="1120" y="470" text-anchor="middle" class="small">Storage Monitoring & Telemetry (Prometheus / ELK)</text>
        </g>

        <!-- Flow arrows -->
        <path d="M352 276 L720 276" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M780 276 L812 276" stroke="#10B981" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M1142 276 L1482 276" stroke="#34D399" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Legend -->
        <g>
          <rect x="36" y="604" width="1436" height="68" rx="8" fill="#021024" stroke="#94A3B8"/>
          <text x="64" y="628" class="muted">Legend: Primary & Secondary arrays, replication fabric (sync/async), immutable backup overlay for legal hold, management plane with runbooks and monitoring. Multipath + FC/iSCSI/NVMe-oF supported.</text>
        </g>
      </svg>
        `;
        title = 'Dual-Site Replicated SAN/NAS Fabric';
        description = 'Active/active or Active/passive storage clusters with synchronous and asynchronous replication, multi-path fabric, immutable backup overlay, orchestration plane for failover and monitoring.';
        break;


      /* ----------------------- TREASURY & RISK DASHBOARDS (robust + detailed) ----------------------- */
      case 'treasury':
        svgContent = `
      <svg viewBox="0 0 1650 960" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Treasury & Risk Dashboards Topology">
        <defs>
          <linearGradient id="bgTreasury" x1="0" x2="1">
            <stop offset="0%" stop-color="#0f172a"/>
            <stop offset="100%" stop-color="#020617"/>
          </linearGradient>
          <marker id="arrowTreasury" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <path d="M0 0 L14 7 L0 14 z" fill="#60a5fa"/>
          </marker>
          <filter id="softTreasury"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.15"/></filter>
          <style>
            .title { font-family: Inter, system-ui; fill: #f8fafc; font-size: 22px; font-weight: 700 }
            .note { font-family: Inter, system-ui; fill: #94a3b8; font-size: 13px }
            .zone { fill: rgba(2,6,23,0.65); stroke-width:2 }
            .box { fill: #0f172a; stroke-width:1.5 }
            .small { fill:#cbd5e1; font-size:12px }
            .muted { fill:#94a3b8; font-size:11px }
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgTreasury)"/>
        <text x="36" y="44" class="title">Treasury & Risk Dashboards — Financial VLAN + Read-Only Feeds</text>
        <text x="36" y="68" class="note">Pipeline: Market Feeds → Treasury Engine → Risk Models → Read-only Dashboards → Auditors/Regulators.</text>

        <!-- Market Data Feeds -->
        <g filter="url(#softTreasury)">
          <rect x="40" y="120" width="360" height="180" rx="12" class="zone" stroke="#38bdf8"/>
          <text x="220" y="148" text-anchor="middle" class="small">Market & Liquidity Feeds</text>
          <rect x="60" y="160" width="140" height="100" rx="8" class="box" stroke="#0ea5e9"/>
          <text x="130" y="210" text-anchor="middle" class="small">FX Feeds</text>
          <rect x="220" y="160" width="160" height="100" rx="8" class="box" stroke="#22d3ee"/>
          <text x="300" y="210" text-anchor="middle" class="small">Liquidity / Market Data</text>
        </g>

        <!-- Treasury Engine -->
        <g filter="url(#softTreasury)">
          <rect x="420" y="120" width="340" height="180" rx="12" class="zone" stroke="#f59e0b"/>
          <text x="590" y="148" text-anchor="middle" class="small">Treasury Engine VLAN</text>
          <rect x="440" y="160" width="140" height="100" rx="8" class="box" stroke="#fbbf24"/>
          <text x="510" y="210" text-anchor="middle" class="small">Cash Mgmt</text>
          <rect x="590" y="160" width="150" height="100" rx="8" class="box" stroke="#f97316"/>
          <text x="665" y="210" text-anchor="middle" class="small">Liquidity Pools</text>
        </g>

        <!-- Risk Analytics -->
        <g filter="url(#softTreasury)">
          <rect x="780" y="120" width="340" height="180" rx="12" class="zone" stroke="#a855f7"/>
          <text x="950" y="148" text-anchor="middle" class="small">Risk Analytics VLAN</text>
          <rect x="800" y="160" width="150" height="100" rx="8" class="box" stroke="#9333ea"/>
          <text x="875" y="210" text-anchor="middle" class="small">VaR Models</text>
          <rect x="960" y="160" width="140" height="100" rx="8" class="box" stroke="#c084fc"/>
          <text x="1030" y="210" text-anchor="middle" class="small">Stress Testing</text>
        </g>

        <!-- Dashboards -->
        <g filter="url(#softTreasury)">
          <rect x="1140" y="120" width="340" height="180" rx="12" class="zone" stroke="#22c55e"/>
          <text x="1310" y="148" text-anchor="middle" class="small">Read-Only Dashboards</text>
          <rect x="1160" y="160" width="140" height="100" rx="8" class="box" stroke="#16a34a"/>
          <text x="1230" y="210" text-anchor="middle" class="small">Exec / CFO</text>
          <rect x="1310" y="160" width="150" height="100" rx="8" class="box" stroke="#4ade80"/>
          <text x="1385" y="210" text-anchor="middle" class="small">Audit / Regulator</text>
        </g>

        <!-- Arrows -->
        <path d="M400 210 L420 210" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowTreasury)"/>
        <path d="M760 210 L780 210" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowTreasury)"/>
        <path d="M1120 210 L1140 210" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowTreasury)"/>
      </svg>
        `;
        title = 'Secure Financial VLAN + Read-Only Feeds';
        description = 'Market/FX feeds → Treasury engines → Risk models → Read-only dashboards for executives, auditors, and regulators. Enforced separation and egress controls.';
        break;


      /* ------------- DEFI YIELD & ARBITRAGE SYSTEMS (robust + production-ready) ----------------------- */
      case 'defi':
        svgContent = `
      <svg viewBox="0 0 1600 960" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DeFi yield and arbitrage topology">
        <defs>
          <linearGradient id="bgDefi" x1="0" x2="1">
            <stop offset="0%" stop-color="#071426"/>
            <stop offset="100%" stop-color="#00121a"/>
          </linearGradient>
          <marker id="arrowDefi" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M0 0 L12 6 L0 12 z" fill="#FBBF24"/>
          </marker>
          <filter id="softDefi"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.12"/></filter>
          <style>
            .title{font-family:Inter,system-ui; fill:#E6F7FF; font-size:20px; font-weight:700}
            .desc{font-family:Inter; fill:#94A3B8; font-size:12px}
            .zone{fill:rgba(2,6,23,0.66); stroke-width:2}
            .box{fill:#071022; stroke-width:1.5}
            .small{fill:#CFE8FF; font-size:11px}
            .muted{fill:#9CA3AF; font-size:11px}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgDefi)"/>
        <text x="36" y="44" class="title">DeFi Yield & Arbitrage Systems — Multi-Pool Liquidity Mesh</text>
        <text x="36" y="66" class="desc">Low-latency mesh between liquidity nodes, exchange relays, HSM-secured wallet nodes, federated order router, observability & immutable audit trail.</text>

        <!-- Exchange relays -->
        <g filter="url(#softDefi)">
          <rect x="36" y="96" width="520" height="200" rx="12" class="zone" stroke="#60A5FA"/>
          <text x="296" y="132" text-anchor="middle" class="small">Exchange Relays / Market Connectors</text>
          <text x="296" y="150" text-anchor="middle" class="muted">CEX APIs, DEX RPC endpoints, orderbook adapters</text>

          <rect x="56" y="160" width="160" height="96" rx="8" class="box" stroke="#3B82F6"/>
          <text x="136" y="198" text-anchor="middle" class="small">CEX Adapter Pool</text>

          <rect x="236" y="160" width="160" height="96" rx="8" class="box" stroke="#60A5FA"/>
          <text x="316" y="198" text-anchor="middle" class="small">DEX RPC / Subgraph Adapters</text>

          <rect x="416" y="160" width="120" height="96" rx="8" class="box" stroke="#93C5FD"/>
          <text x="476" y="198" text-anchor="middle" class="small">Onchain Relayer Nodes</text>
        </g>

        <!-- Liquidity mesh -->
        <g filter="url(#softDefi)">
          <rect x="36" y="320" width="520" height="200" rx="12" class="zone" stroke="#FBBF24"/>
          <text x="296" y="356" text-anchor="middle" class="small">Liquidity Mesh — Pool Nodes & Hubs</text>
          <text x="296" y="374" text-anchor="middle" class="muted">AMM nodes, lending pools, aggregator endpoints</text>

          <rect x="56" y="360" width="150" height="120" rx="8" class="box" stroke="#F97316"/>
          <text x="131" y="418" text-anchor="middle" class="small">AMM Node Cluster</text>

          <rect x="226" y="360" width="150" height="120" rx="8" class="box" stroke="#FB923C"/>
          <text x="301" y="418" text-anchor="middle" class="small">Lending/Pool Node</text>

          <rect x="396" y="360" width="150" height="120" rx="8" class="box" stroke="#F59E0B"/>
          <text x="471" y="418" text-anchor="middle" class="small">Liquidity Aggregator</text>
        </g>

        <!-- Wallet custody / HSM -->
        <g filter="url(#softDefi)">
          <rect x="600" y="96" width="480" height="200" rx="12" class="zone" stroke="#10B981"/>
          <text x="840" y="132" text-anchor="middle" class="small">Wallet Custody & HSM Vaults</text>
          <text x="840" y="150" text-anchor="middle" class="muted">HSM-secured signing, multisig, threshold signature service</text>

          <rect x="620" y="160" width="200" height="96" rx="8" class="box" stroke="#059669"/>
          <text x="720" y="198" text-anchor="middle" class="small">HSM Wallet Nodes (Custodial)</text>

          <rect x="840" y="160" width="220" height="96" rx="8" class="box" stroke="#34D399"/>
          <text x="950" y="198" text-anchor="middle" class="small">Threshold Sig / Multisig Orchestrator</text>
        </g>

        <!-- Order Router & Execution -->
        <g filter="url(#softDefi)">
          <rect x="600" y="320" width="480" height="200" rx="12" class="zone" stroke="#A855F7"/>
          <text x="840" y="356" text-anchor="middle" class="small">Federated Order Router & Executor</text>
          <text x="840" y="374" text-anchor="middle" class="muted">Smart order routing, latency-aware execution, risk checks</text>

          <rect x="620" y="360" width="200" height="120" rx="8" class="box" stroke="#8B5CF6"/>
          <text x="720" y="420" text-anchor="middle" class="small">Order Router (latency aware)</text>

          <rect x="840" y="360" width="220" height="120" rx="8" class="box" stroke="#C084FC"/>
          <text x="950" y="420" text-anchor="middle" class="small">Execution Engine (Simulate → Submit)</text>
        </g>

        <!-- MEV / Arb Engine -->
        <g filter="url(#softDefi)">
          <rect x="36" y="560" width="520" height="220" rx="12" class="zone" stroke="#F97316"/>
          <text x="296" y="596" text-anchor="middle" class="small">MEV & Arbitrage Engine</text>
          <text x="296" y="614" text-anchor="middle" class="muted">Bundle builder, private tx pool, front-running protections</text>

          <rect x="56" y="600" width="200" height="140" rx="8" class="box" stroke="#F97316"/>
          <text x="156" y="664" text-anchor="middle" class="small">Simulator & Profitability Engine</text>

          <rect x="276" y="600" width="200" height="140" rx="8" class="box" stroke="#FB923C"/>
          <text x="376" y="664" text-anchor="middle" class="small">Bundle Builder & Private Pool (Flashbots-like)</text>
        </g>

        <!-- Observability & WORM -->
        <g filter="url(#softDefi)">
          <rect x="600" y="560" width="480" height="220" rx="12" class="zone" stroke="#3B82F6"/>
          <text x="840" y="596" text-anchor="middle" class="small">Observability, Audit & Evidence Vault</text>
          <text x="840" y="614" text-anchor="middle" class="muted">Metrics, traces, signed transaction logs, WORM storage</text>

          <rect x="620" y="600" width="200" height="120" rx="8" class="box" stroke="#3B82F6"/>
          <text x="720" y="660" text-anchor="middle" class="small">Results & Ledger (ClickHouse/TSDB)</text>

          <rect x="840" y="600" width="220" height="120" rx="8" class="box" stroke="#60A5FA"/>
          <text x="950" y="660" text-anchor="middle" class="small">WORM Evidence Store & Manifest Signer</text>
        </g>

        <!-- Flows -->
        <path d="M556 196 L600 196" stroke="#FBBF24" stroke-width="2" marker-end="url(#arrowDefi)"/>
        <path d="M556 356 L600 356" stroke="#A855F7" stroke-width="2" marker-end="url(#arrowDefi)"/>
        <path d="M556 676 L600 676" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrowDefi)"/>

        <!-- Legend -->
        <g>
          <rect x="36" y="804" width="1528" height="120" rx="8" fill="#021024" stroke="#94A3B8"/>
          <text x="56" y="828" class="muted">Legend: Exchange relays & liquidity mesh feed a federated order router and MEV/arb engine. HSM-backed wallets hold custody. All actions logged and signed; WORM archive for audits and dispute resolution.</text>
        </g>
      </svg>
        `;
        title = 'Multi-Pool Liquidity Mesh with HSM Custody & MEV Controls';
        description = 'Low-latency liquidity mesh, federated order router, HSM-secured wallets, MEV bundle builder, private pool, and immutable audit trail.';
        break;


      /* ----------------------- TRAINING & KNOWLEDGE PLATFORMS — Multi-Tier LMS Topology ----------------------- */
      case 'training':
        svgContent = `
      <svg viewBox="0 0 1600 920" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Training and knowledge platform topology">
        <defs>
          <linearGradient id="bgTrain" x1="0" x2="1"><stop offset="0%" stop-color="#071026"/><stop offset="100%" stop-color="#021022"/></linearGradient>
          <marker id="arrowTrain" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M0 0 L12 6 L0 12 z" fill="#60A5FA"/>
          </marker>
          <filter id="softTrain"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-opacity="0.12"/></filter>
          <style>
            .title{font-family:Inter,system-ui,-apple-system; fill:#E6F7FF; font-size:18px; font-weight:700}
            .sub{font-family:Inter; fill:#9CA3AF; font-size:12px}
            .zone{fill:rgba(2,6,23,0.66); stroke-width:2}
            .box{fill:#061022; stroke-width:1.5}
            .muted{fill:#94A3B8;font-size:11px}
            .small{fill:#CFE8FF;font-size:11px}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgTrain)"/>
        <text x="36" y="44" class="title">Training & Knowledge Platforms — Multi-Tier LMS Topology</text>
        <text x="36" y="66" class="sub">Presentation/web tier (DMZ) → App & API tier (private subnets) → Content storage & CDN + DRM → Assessment & Proctoring → Analytics & Evidence</text>

        <!-- Edge CDN / Learner UI -->
        <g filter="url(#softTrain)">
          <rect x="36" y="92" width="420" height="180" rx="12" class="zone" stroke="#60A5FA"/>
          <text x="246" y="120" text-anchor="middle" class="small">Edge CDN & Learner UI (Global)</text>
          <text x="246" y="138" text-anchor="middle" class="muted">Static site, SPA, signed URLs for protected assets</text>

          <rect x="72" y="152" width="160" height="96" rx="10" class="box" stroke="#3B82F6"/>
          <text x="152" y="190" text-anchor="middle" class="small">CDN (signed URLs, cache)</text>

          <rect x="252" y="152" width="160" height="96" rx="10" class="box" stroke="#60A5FA"/>
          <text x="332" y="190" text-anchor="middle" class="small">Static LMS frontend (React/Vue)</text>
        </g>

        <!-- Public Auth / API Gateway (DMZ) -->
        <g>
          <rect x="492" y="92" width="420" height="180" rx="12" class="zone" stroke="#F97316"/>
          <text x="712" y="120" text-anchor="middle" class="small">API Gateway & Public Auth (DMZ)</text>
          <text x="712" y="138" text-anchor="middle" class="muted">SSO entry, OIDC, rate-limit, WAF</text>

          <rect x="516" y="152" width="190" height="96" rx="10" class="box" stroke="#F59E0B"/>
          <text x="611" y="190" text-anchor="middle" class="small">OIDC / Keycloak (SSO)</text>

          <rect x="716" y="152" width="190" height="96" rx="10" class="box" stroke="#F97316"/>
          <text x="811" y="190" text-anchor="middle" class="small">API Gateway (Auth, Throttling)</text>
        </g>

        <!-- Private App / LMS -->
        <g filter="url(#softTrain)">
          <rect x="36" y="296" width="540" height="260" rx="12" class="zone" stroke="#10B981"/>
          <text x="306" y="324" text-anchor="middle" class="small">Application Tier — LMS Core & Authoring</text>
          <text x="306" y="342" text-anchor="middle" class="muted">Course engine, SCORM/xAPI importer, authoring, quiz engine</text>

          <rect x="72" y="360" width="220" height="140" rx="10" class="box" stroke="#10B981"/>
          <text x="182" y="400" text-anchor="middle" class="small">LMS App Cluster (Moodle/Canvas/Custom)</text>

          <rect x="312" y="360" width="240" height="140" rx="10" class="box" stroke="#34D399"/>
          <text x="432" y="400" text-anchor="middle" class="small">Authoring Service & Content QA</text>
        </g>

        <!-- Content Storage & DRM -->
        <g>
          <rect x="600" y="296" width="460" height="260" rx="12" class="zone" stroke="#A855F7"/>
          <text x="830" y="324" text-anchor="middle" class="small">Content Storage & DRM</text>
          <text x="830" y="342" text-anchor="middle" class="muted">Encrypted object store, HSM signing of certificates, licensed media (Kaltura/Panopto)</text>

          <rect x="620" y="360" width="200" height="140" rx="10" class="box" stroke="#9333ea"/>
          <text x="720" y="400" text-anchor="middle" class="small">Object Storage (S3 w/ Object Lock)</text>

          <rect x="840" y="360" width="240" height="140" rx="10" class="box" stroke="#C084FC"/>
          <text x="960" y="400" text-anchor="middle" class="small">DRM / License Server (HSM-signed tokens)</text>
        </g>

        <!-- Assessment & Proctoring -->
        <g filter="url(#softTrain)">
          <rect x="36" y="588" width="540" height="260" rx="12" class="zone" stroke="#F59E0B"/>
          <text x="306" y="616" text-anchor="middle" class="small">Assessment & Proctoring</text>
          <text x="306" y="634" text-anchor="middle" class="muted">Proctoring VM pool, secure exam browser, keystroke & video evidence</text>

          <rect x="72" y="652" width="220" height="140" rx="10" class="box" stroke="#F97316"/>
          <text x="182" y="692" text-anchor="middle" class="small">Proctor VM Pool (ephemeral, screen capture)</text>

          <rect x="312" y="652" width="240" height="140" rx="10" class="box" stroke="#FB923C"/>
          <text x="432" y="692" text-anchor="middle" class="small">Secure Exam Browser / Lockdown + Evidence Store</text>
        </g>

        <!-- Analytics, Reports & Evidence (SIEM) -->
        <g>
          <rect x="600" y="588" width="460" height="260" rx="12" class="zone" stroke="#3B82F6"/>
          <text x="830" y="616" text-anchor="middle" class="small">Analytics, Reporting & Evidence Vault</text>
          <text x="830" y="634" text-anchor="middle" class="muted">Learner analytics, compliance reporting, signed audit trails</text>

          <rect x="620" y="652" width="200" height="140" rx="10" class="box" stroke="#60A5FA"/>
          <text x="720" y="692" text-anchor="middle" class="small">Analytics / BI (ClickHouse / Redshift)</text>

          <rect x="840" y="652" width="240" height="140" rx="10" class="box" stroke="#3B82F6"/>
          <text x="960" y="692" text-anchor="middle" class="small">Evidence WORM Store (signed manifests)</text>
        </g>

        <!-- Management & Bastion -->
        <g>
          <rect x="1080" y="92" width="420" height="180" rx="12" class="zone" stroke="#22C55E"/>
          <text x="1290" y="120" text-anchor="middle" class="small">Management Plane (Bastion, CI/CD, Content Pipeline)</text>

          <rect x="1100" y="152" width="180" height="96" rx="10" class="box" stroke="#16A34A"/>
          <text x="1190" y="190" text-anchor="middle" class="small">Author CI/CD & Signed Artifacts</text>

          <rect x="1280" y="152" width="180" height="96" rx="10" class="box" stroke="#34D399"/>
          <text x="1370" y="190" text-anchor="middle" class="small">Ops Bastion (MFA, Session Recording)</text>
        </g>

        <!-- Flow arrows -->
        <path d="M456 172 L492 172" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrowTrain)"/>
        <path d="M936 172 L1080 172" stroke="#F59E0B" stroke-width="2" marker-end="url(#arrowTrain)"/>
        <path d="M456 520 L600 520" stroke="#10B981" stroke-width="2" marker-end="url(#arrowTrain)"/>
        <path d="M936 520 L1080 520" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrowTrain)"/>

        <!-- Legend -->
        <g>
          <rect x="36" y="868" width="1528" height="36" rx="6" fill="#021024" stroke="#94A3B8"/>
          <text x="64" y="889" class="muted">Legend: CDN→DMZ Gateway→Private App Tier→Content Storage/DRM→Assessment/Proctoring→Analytics & WORM evidence. HSM signs DRM tokens and audit manifests. Ephemeral proctor VMs and strict egress controls for exam evidence.</text>
        </g>
      </svg>
        `;
        title = 'Multi-Tier LMS with DRM, Proctoring & Evidence Vault';
        description = 'Presentation: CDN & SPA; DMZ API gateway & OIDC; private LMS + authoring; encrypted content storage & DRM; ephemeral proctor VMs; analytics & signed evidence WORM.';
        break;


      /* ----------------------- CUSTOM SECURITY APPLIANCES (production-grade, enhanced) ----------------------- */
      case 'security-appliance':
        svgContent = `
      <svg viewBox="0 0 1700 1040" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Custom Security Appliances Topology (enhanced)">
        <defs>
          <linearGradient id="bgSecApp" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#071026"/>
            <stop offset="100%" stop-color="#021022"/>
          </linearGradient>
          <marker id="arrowSecApp" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <path d="M0 0 L14 7 L0 14 z" fill="#60a5fa"/>
          </marker>
          <filter id="softSecApp"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.15"/></filter>
          <style>
            .title{font-family:Inter,system-ui; fill:#F8FAFC; font-size:20px; font-weight:700}
            .sub{font-family:Inter; fill:#94A3B8; font-size:12px}
            .zone{fill:rgba(2,6,23,0.62); stroke-width:2}
            .box{fill:#071022; stroke-width:1.5}
            .muted{fill:#94A3B8;font-size:11px}
            .small{fill:#CFE8FF;font-size:11px}
            .dashed{stroke-dasharray:6 6}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgSecApp)"/>
        <text x="36" y="44" class="title">Custom Security Appliances — Inline & Out-of-Path Inspection with TAP/Packet Broker</text>
        <text x="36" y="68" class="sub">Design: HA inline clusters (fail-closed), out-of-path TAP/packet-broker for deep forensics, management & monitoring plane isolation, signed configs, and automated change gating (GitOps).</text>

        <!-- Internet/Edge -->
        <g filter="url(#softSecApp)">
          <rect x="36" y="96" width="360" height="200" rx="12" class="zone" stroke="#ef4444"/>
          <text x="216" y="128" text-anchor="middle" class="small">External / Internet Edge</text>
          <rect x="56" y="156" width="300" height="120" rx="8" class="box" stroke="#fb7185"/>
          <text x="216" y="200" text-anchor="middle" class="small">Edge Routers / Peering / DDoS Scrub</text>
        </g>

        <!-- DMZ -->
        <g filter="url(#softSecApp)">
          <rect x="420" y="96" width="360" height="200" rx="12" class="zone" stroke="#fbbf24"/>
          <text x="600" y="128" text-anchor="middle" class="small">DMZ — Exposed Services</text>
          <rect x="440" y="156" width="160" height="120" rx="8" class="box" stroke="#f59e0b"/>
          <text x="520" y="200" text-anchor="middle" class="small">Web / API Proxies</text>
          <rect x="620" y="156" width="160" height="120" rx="8" class="box" stroke="#f97316"/>
          <text x="700" y="200" text-anchor="middle" class="small">Email / Delivery Gateways</text>
        </g>

        <!-- Inline Security Cluster (HA, fail-closed) -->
        <g filter="url(#softSecApp)">
          <rect x="820" y="96" width="420" height="200" rx="12" class="zone" stroke="#38bdf8"/>
          <text x="1030" y="128" text-anchor="middle" class="small">Inline Security Cluster (HA) — NGFW / IPS / WAF / TLS Inspection</text>

          <rect x="840" y="156" width="120" height="120" rx="8" class="box" stroke="#0ea5e9"/>
          <text x="900" y="200" text-anchor="middle" class="small">NGFW Pair (HA)</text>

          <rect x="970" y="156" width="120" height="120" rx="8" class="box" stroke="#22d3ee"/>
          <text x="1030" y="200" text-anchor="middle" class="small">IPS / Protocol Analyzer</text>

          <rect x="1100" y="156" width="120" height="120" rx="8" class="box" stroke="#60a5fa"/>
          <text x="1160" y="200" text-anchor="middle" class="small">WAF / App-Layer Inspection</text>

          <rect x="840" y="276" width="380" height="70" rx="6" class="box" stroke="#0891b2"/>
          <text x="1030" y="314" text-anchor="middle" class="muted">Inline TAP / Bypass Switch (fail-closed with managed bypass)</text>
        </g>

        <!-- Internal / Trust -->
        <g filter="url(#softSecApp)">
          <rect x="1260" y="96" width="360" height="200" rx="12" class="zone" stroke="#22c55e"/>
          <text x="1440" y="128" text-anchor="middle" class="small">Internal / Trusted Zone</text>
          <rect x="1280" y="156" width="300" height="120" rx="8" class="box" stroke="#16a34a"/>
          <text x="1440" y="200" text-anchor="middle" class="small">Application Servers / DB / Storage</text>
        </g>

        <!-- Packet Broker / TAP Farm -->
        <g filter="url(#softSecApp)">
          <rect x="36" y="320" width="480" height="260" rx="12" class="zone" stroke="#a855f7"/>
          <text x="276" y="352" text-anchor="middle" class="small">TAP/Packet Broker Farm — Out-of-Path Forensics & SIEM</text>
          <rect x="60" y="392" width="140" height="140" rx="8" class="box" stroke="#9333ea"/>
          <text x="130" y="460" text-anchor="middle" class="small">Packet Brokers (VeEX / Gigamon)</text>
          <rect x="220" y="392" width="140" height="140" rx="8" class="box" stroke="#c084fc"/>
          <text x="290" y="460" text-anchor="middle" class="small">PCAP Storage / Forensic Cluster (WORM)</text>
          <rect x="380" y="392" width="140" height="140" rx="8" class="box" stroke="#8b5cf6"/>
          <text x="450" y="460" text-anchor="middle" class="small">Traffic Normalizers & De-dup Engines</text>
        </g>

        <!-- Management & Monitoring Plane -->
        <g filter="url(#softSecApp)">
          <rect x="540" y="320" width="1160" height="260" rx="12" class="zone" stroke="#10b981"/>
          <text x="1120" y="352" text-anchor="middle" class="small">Management / Monitoring Plane (Isolated & Bastion Only)</text>

          <rect x="560" y="392" width="220" height="140" rx="8" class="box" stroke="#059669"/>
          <text x="670" y="460" text-anchor="middle" class="small">Mgmt Bastion (MFA, Session Recording)</text>

          <rect x="800" y="392" width="220" height="140" rx="8" class="box" stroke="#16a34a"/>
          <text x="910" y="460" text-anchor="middle" class="small">Config Mgmt (GitOps / Ansible Pull)</text>

          <rect x="1040" y="392" width="220" height="140" rx="8" class="box" stroke="#22c55e"/>
          <text x="1150" y="460" text-anchor="middle" class="small">Monitoring Mirrors (NetFlow / sFlow / Telemetry)</text>

          <rect x="1280" y="392" width="240" height="140" rx="8" class="box" stroke="#34d399"/>
          <text x="1400" y="460" text-anchor="middle" class="small">SIEM / SOAR / Forensics UI</text>
        </g>

        <!-- Flow arrows -->
        <path d="M396 196 L420 196" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowSecApp)"/>
        <path d="M780 196 L820 196" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowSecApp)"/>
        <path d="M1240 196 L1260 196" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowSecApp)"/>
        <path d="M216 580 L560 580" stroke="#a855f7" stroke-width="2" marker-end="url(#arrowSecApp)"/>

        <!-- Legend -->
        <g>
          <rect x="36" y="944" width="1660" height="72" rx="8" fill="#021024" stroke="#94A3B8"/>
          <text x="56" y="972" class="muted">Legend: Edge → DMZ → Inline HA cluster (NGFW + IPS + WAF) with fail-closed bypass, TAP/Packet broker farm for out-of-path capture, isolated management plane with GitOps & signed configs, monitoring & SIEM. Use WORM for long-term PCAP/evidence retention.</text>
        </g>
      </svg>
        `;
        title = 'Inline & Out-of-Path Security Appliance Topology';
        description = 'HA inline appliance clusters with fail-closed bypass, TAP/packet-broker farm for forensic capture, and a bastion-only management plane. Signed configs and GitOps gating for changes.';
        break;


      /* ----------------------- HIGH AVAILABILITY STORAGE SOLUTIONS — Dual-Site Replicated SAN/NAS Fabric ----------------------- */
      case 'ha-storage':
        svgContent = `
      <svg viewBox="0 0 1680 1060" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="High Availability Storage Solutions Topology">
        <defs>
          <linearGradient id="bgHAStorage" x1="0" x2="1">
            <stop offset="0%" stop-color="#0f172a"/>
            <stop offset="100%" stop-color="#020617"/>
          </linearGradient>
          <marker id="arrowHAStorage" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <path d="M0 0 L14 7 L0 14 z" fill="#38bdf8"/>
          </marker>
          <filter id="softHAStorage"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.12"/></filter>
          <style>
            .title{font-family:Inter,system-ui;fill:#f8fafc;font-size:20px;font-weight:700}
            .sub{font-family:Inter,system-ui;fill:#94a3b8;font-size:12px}
            .zone{fill:rgba(2,6,23,0.65);stroke-width:2}
            .box{fill:#0f172a;stroke-width:1.5}
            .small{fill:#cbd5e1;font-size:12px}
            .muted{fill:#94a3b8;font-size:11px}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgHAStorage)"/>
        <text x="36" y="44" class="title">High Availability Storage Solutions — Dual-Site Replicated SAN/NAS Fabric</text>
        <text x="36" y="68" class="sub">Active/Active clusters across sites with sync/async replication, quorum witness, immutable snapshots, encrypted replication channels.</text>

        <!-- Site A -->
        <g filter="url(#softHAStorage)">
          <rect x="36" y="96" width="560" height="280" rx="12" class="zone" stroke="#3b82f6"/>
          <text x="316" y="128" text-anchor="middle" class="small">Site A — Primary Storage Cluster</text>

          <rect x="56" y="160" width="240" height="120" rx="8" class="box" stroke="#2563eb"/>
          <text x="176" y="210" text-anchor="middle" class="small">SAN Controllers (HA Pair)</text>

          <rect x="316" y="160" width="260" height="120" rx="8" class="box" stroke="#60a5fa"/>
          <text x="446" y="210" text-anchor="middle" class="small">NAS / Object Storage Nodes</text>

          <rect x="56" y="300" width="520" height="60" rx="6" class="box" stroke="#38bdf8"/>
          <text x="316" y="336" text-anchor="middle" class="muted">Local Clients (VMware, DB, App Servers)</text>
        </g>

        <!-- Site B -->
        <g filter="url(#softHAStorage)">
          <rect x="1080" y="96" width="560" height="280" rx="12" class="zone" stroke="#10b981"/>
          <text x="1360" y="128" text-anchor="middle" class="small">Site B — Secondary / DR Storage Cluster</text>

          <rect x="1100" y="160" width="240" height="120" rx="8" class="box" stroke="#059669"/>
          <text x="1220" y="210" text-anchor="middle" class="small">SAN Controllers (HA Pair)</text>

          <rect x="1360" y="160" width="260" height="120" rx="8" class="box" stroke="#34d399"/>
          <text x="1490" y="210" text-anchor="middle" class="small">NAS / Object Storage Nodes</text>

          <rect x="1100" y="300" width="520" height="60" rx="6" class="box" stroke="#22c55e"/>
          <text x="1360" y="336" text-anchor="middle" class="muted">Local Clients (Analytics, DR VMs)</text>
        </g>

        <!-- Replication Channel -->
        <g>
          <path d="M596 220 L1080 220" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrowHAStorage)" marker-start="url(#arrowHAStorage)"/>
          <text x="840" y="200" text-anchor="middle" class="muted">Encrypted Replication Channel (IPSec/MPLS)</text>
        </g>

        <!-- Witness / Quorum -->
        <g filter="url(#softHAStorage)">
          <rect x="600" y="420" width="480" height="180" rx="12" class="zone" stroke="#a855f7"/>
          <text x="840" y="448" text-anchor="middle" class="small">Witness / Quorum Services</text>
          <rect x="620" y="460" width="200" height="100" rx="8" class="box" stroke="#9333ea"/>
          <text x="720" y="510" text-anchor="middle" class="small">Arbitrator VM / Service</text>
          <rect x="840" y="460" width="220" height="100" rx="8" class="box" stroke="#c084fc"/>
          <text x="950" y="510" text-anchor="middle" class="small">Consensus / Split-Brain Protection</text>
        </g>

        <!-- Backup / Immutable -->
        <g filter="url(#softHAStorage)">
          <rect x="36" y="640" width="1604" height="280" rx="12" class="zone" stroke="#f59e0b"/>
          <text x="838" y="672" text-anchor="middle" class="small">Backup, Immutable Snapshots & Compliance Vault</text>

          <rect x="56" y="700" width="280" height="140" rx="8" class="box" stroke="#f59e0b"/>
          <text x="196" y="770" text-anchor="middle" class="small">Immutable Snapshots (Object Lock / ZFS)</text>

          <rect x="356" y="700" width="280" height="140" rx="8" class="box" stroke="#fbbf24"/>
          <text x="496" y="770" text-anchor="middle" class="small">Backup Orchestrator (Air-Gap Option)</text>

          <rect x="656" y="700" width="320" height="140" rx="8" class="box" stroke="#f97316"/>
          <text x="816" y="770" text-anchor="middle" class="small">Compliance Vault (WORM Store, Signed Manifests)</text>

          <rect x="996" y="700" width="280" height="140" rx="8" class="box" stroke="#facc15"/>
          <text x="1136" y="770" text-anchor="middle" class="small">Off-Site Cold Storage (Tape / Glacier)</text>

          <rect x="1296" y="700" width="320" height="140" rx="8" class="box" stroke="#fde047"/>
          <text x="1456" y="770" text-anchor="middle" class="small">Audit / Evidence Retrieval Services</text>
        </g>

        <!-- Legend -->
        <g>
          <rect x="36" y="940" width="1604" height="72" rx="8" fill="#021024" stroke="#94a3b8"/>
          <text x="56" y="968" class="muted">Legend: Dual-site SAN/NAS clusters with encrypted replication, quorum witness for split-brain avoidance, immutable snapshots, WORM compliance vault, off-site backup tier. Local clients access nearest cluster; failover coordinated via witness.</text>
        </g>
      </svg>
        `;
        title = 'Dual-Site Replicated SAN/NAS Fabric';
        description = 'Active/active SAN & NAS clusters across two sites, with synchronous + asynchronous replication, quorum services, immutable snapshots, and compliance-ready backup vault.';
        break;


      /* ----------------------- TREASURY & RISK DASHBOARDS — Secure Financial VLAN + Read-Only Feeds ----------------------- */
      case 'treasury-risk-dashboards':
        svgContent = `
      <svg viewBox="0 0 1680 1080" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Treasury and Risk Dashboards Topology">
        <defs>
          <linearGradient id="bgTreasury" x1="0" x2="1">
            <stop offset="0%" stop-color="#0f172a"/>
            <stop offset="100%" stop-color="#020617"/>
          </linearGradient>
          <marker id="arrowTreasury" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <path d="M0 0 L14 7 L0 14 z" fill="#38bdf8"/>
          </marker>
          <filter id="softTreasury"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.12"/></filter>
          <style>
            .title{font-family:Inter,system-ui;fill:#f8fafc;font-size:20px;font-weight:700}
            .sub{font-family:Inter,system-ui;fill:#94a3b8;font-size:12px}
            .zone{fill:rgba(2,6,23,0.65);stroke-width:2}
            .box{fill:#0f172a;stroke-width:1.5}
            .small{fill:#cbd5e1;font-size:12px}
            .muted{fill:#94a3b8;font-size:11px}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgTreasury)"/>
        <text x="36" y="44" class="title">Treasury & Risk Dashboards — Secure Financial VLAN + Read-Only Feeds</text>
        <text x="36" y="68" class="sub">Financial compute engines in segregated VLANs, market feeds via DMZ proxies, read-only ingestion, dashboards in secure enclaves, immutable audit logging.</text>

        <!-- Market Feeds DMZ -->
        <g filter="url(#softTreasury)">
          <rect x="36" y="96" width="500" height="240" rx="12" class="zone" stroke="#3b82f6"/>
          <text x="286" y="120" text-anchor="middle" class="small">DMZ — Market Data Proxies</text>
          <rect x="56" y="150" width="200" height="100" rx="8" class="box" stroke="#2563eb"/>
          <text x="156" y="200" text-anchor="middle" class="small">Exchange Feeds (FIX, WebSocket)</text>
          <rect x="276" y="150" width="240" height="100" rx="8" class="box" stroke="#60a5fa"/>
          <text x="396" y="200" text-anchor="middle" class="small">DMZ Proxy Gateways (Read-Only)</text>
        </g>

        <!-- Secure Financial VLAN -->
        <g filter="url(#softTreasury)">
          <rect x="560" y="96" width="560" height="320" rx="12" class="zone" stroke="#10b981"/>
          <text x="840" y="120" text-anchor="middle" class="small">Secure Financial VLAN — Compute Engines</text>

          <rect x="580" y="160" width="240" height="120" rx="8" class="box" stroke="#059669"/>
          <text x="700" y="210" text-anchor="middle" class="small">Treasury Engines (FX, Cash Mgmt)</text>

          <rect x="840" y="160" width="260" height="120" rx="8" class="box" stroke="#34d399"/>
          <text x="970" y="210" text-anchor="middle" class="small">Risk Models (VaR, Stress Tests)</text>

          <rect x="700" y="300" width="280" height="90" rx="8" class="box" stroke="#22c55e"/>
          <text x="840" y="345" text-anchor="middle" class="small">In-Memory Analytics Cluster</text>
        </g>

        <!-- Dashboards / BI -->
        <g filter="url(#softTreasury)">
          <rect x="1160" y="96" width="480" height="240" rx="12" class="zone" stroke="#f97316"/>
          <text x="1400" y="120" text-anchor="middle" class="small">Dashboards & BI Enclave</text>

          <rect x="1180" y="160" width="200" height="100" rx="8" class="box" stroke="#fb923c"/>
          <text x="1280" y="210" text-anchor="middle" class="small">Secure BI (Tableau/Qlik)</text>

          <rect x="1400" y="160" width="220" height="100" rx="8" class="box" stroke="#f59e0b"/>
          <text x="1510" y="210" text-anchor="middle" class="small">Read-Only User Access (RBAC)</text>
        </g>

        <!-- Audit & Compliance -->
        <g filter="url(#softTreasury)">
          <rect x="36" y="400" width="1604" height="260" rx="12" class="zone" stroke="#a855f7"/>
          <text x="838" y="428" text-anchor="middle" class="small">Audit, Compliance & Immutable Storage</text>

          <rect x="56" y="460" width="300" height="120" rx="8" class="box" stroke="#9333ea"/>
          <text x="206" y="510" text-anchor="middle" class="small">Immutable Audit Logs (WORM)</text>

          <rect x="376" y="460" width="300" height="120" rx="8" class="box" stroke="#c084fc"/>
          <text x="526" y="510" text-anchor="middle" class="small">Regulatory Reporting Store</text>

          <rect x="696" y="460" width="300" height="120" rx="8" class="box" stroke="#a78bfa"/>
          <text x="846" y="510" text-anchor="middle" class="small">Key Mgmt (HSM-signed reports)</text>

          <rect x="1016" y="460" width="300" height="120" rx="8" class="box" stroke="#8b5cf6"/>
          <text x="1166" y="510" text-anchor="middle" class="small">Case Mgmt / SOAR (Incident Handling)</text>

          <rect x="1336" y="460" width="280" height="120" rx="8" class="box" stroke="#7c3aed"/>
          <text x="1476" y="510" text-anchor="middle" class="small">Audit Reviewer Workbench</text>
        </g>

        <!-- Arrows -->
        <path d="M536 200 L560 200" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowTreasury)"/>
        <path d="M1120 200 L1160 200" stroke="#10b981" stroke-width="2" marker-end="url(#arrowTreasury)"/>
        <path d="M840 416 L840 456" stroke="#a855f7" stroke-width="2" marker-end="url(#arrowTreasury)"/>

        <!-- Legend -->
        <g>
          <rect x="36" y="680" width="1604" height="72" rx="8" fill="#021024" stroke="#94a3b8"/>
          <text x="56" y="708" class="muted">Legend: Market data feeds → DMZ proxies → Secure Financial VLAN (engines + risk models) → Dashboards enclave. Read-only dashboards, immutable audit logs, HSM-signed regulatory reporting, and SOAR case mgmt for incidents.</text>
        </g>
      </svg>
        `;
        title = 'Treasury & Risk Dashboards — Secure Financial VLAN';
        description = 'Financial compute engines run in segregated VLANs; data ingested from DMZ proxies in read-only mode; dashboards served from secure enclaves; evidence & audit logs immutable and HSM-signed.';
        break;


      /* ----------------------- DEFI YIELD & ARBITRAGE (production-grade — ultra-detailed) ----------------------- */
      case 'defi-yield-arbitrage':
        svgContent = `
      <svg viewBox="0 0 1700 1040" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DeFi Yield & Arbitrage Systems — Multi-pool liquidity mesh (production)">
        <defs>
          <linearGradient id="bg" x1="0" x2="1">
            <stop offset="0%" stop-color="#061126"/><stop offset="100%" stop-color="#00121a"/>
          </linearGradient>
          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M0 0 L12 6 L0 12 z" fill="#FBBF24"/>
          </marker>
          <filter id="soft"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.12"/></filter>
          <style>
            .title{font-family:Inter,system-ui;fill:#E6F7FF;font-size:20px;font-weight:700}
            .desc{font-family:Inter;fill:#9CA3AF;font-size:12px}
            .zone{fill:rgba(2,6,23,0.66);stroke-width:2}
            .box{fill:#061022;stroke-width:1.5}
            .small{fill:#CFE8FF;font-size:11px}
            .muted{fill:#9CA3AF;font-size:11px}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>
        <text x="36" y="44" class="title">DeFi Yield & Arbitrage — Multi-Pool Liquidity Mesh (Production)</text>
        <text x="36" y="68" class="desc">Edge relays + liquidity mesh → latency-aware order router → execution & MEV engine → HSM custody → signed WORM audit trail</text>

        <!-- Exchange Relays -->
        <g filter="url(#soft)">
          <rect x="36" y="96" width="520" height="200" rx="12" class="zone" stroke="#60A5FA"/>
          <text x="296" y="120" class="small" text-anchor="middle">Exchange Relays / Market Adapters (colocated)</text>
          <rect x="56" y="150" width="160" height="110" rx="8" class="box" stroke="#3B82F6"/>
          <text x="136" y="210" class="small" text-anchor="middle">CEX Adapter Cluster (REST / FIX)</text>
          <rect x="236" y="150" width="160" height="110" rx="8" class="box" stroke="#60A5FA"/>
          <text x="316" y="210" class="small" text-anchor="middle">DEX/RPC Adapter (Archive nodes)</text>
          <rect x="416" y="150" width="140" height="110" rx="8" class="box" stroke="#93C5FD"/>
          <text x="486" y="210" class="small" text-anchor="middle">Subgraph / Indexers</text>
        </g>

        <!-- Liquidity Mesh -->
        <g filter="url(#soft)">
          <rect x="36" y="320" width="520" height="240" rx="12" class="zone" stroke="#FBBF24"/>
          <text x="296" y="342" class="small" text-anchor="middle">Liquidity Mesh — AMM / Lending / Aggregator Nodes</text>
          <rect x="56" y="370" width="150" height="160" rx="8" class="box" stroke="#F97316"/>
          <text x="131" y="430" class="small" text-anchor="middle">AMM Node Cluster (forked simulators)</text>
          <rect x="226" y="370" width="150" height="160" rx="8" class="box" stroke="#FB923C"/>
          <text x="301" y="430" class="small" text-anchor="middle">Lending/Pool Replica Nodes</text>
          <rect x="396" y="370" width="160" height="160" rx="8" class="box" stroke="#F59E0B"/>
          <text x="476" y="430" class="small" text-anchor="middle">Liquidity Aggregator & Price Oracle Mirror</text>
        </g>

        <!-- Order Router & Executor -->
        <g filter="url(#soft)">
          <rect x="580" y="96" width="520" height="240" rx="12" class="zone" stroke="#A855F7"/>
          <text x="840" y="120" class="small" text-anchor="middle">Order Router & Execution Plane</text>
          <rect x="600" y="150" width="220" height="110" rx="8" class="box" stroke="#8B5CF6"/>
          <text x="710" y="200" class="small" text-anchor="middle">Latency-aware Router (sim + scoring)</text>
          <rect x="840" y="150" width="240" height="110" rx="8" class="box" stroke="#C084FC"/>
          <text x="960" y="200" class="small" text-anchor="middle">Execution Engine (batching, gas-opt)</text>
        </g>

        <!-- MEV / Arb Engine -->
        <g filter="url(#soft)">
          <rect x="580" y="320" width="520" height="240" rx="12" class="zone" stroke="#F97316"/>
          <text x="840" y="342" class="small" text-anchor="middle">MEV & Arbitrage Engine</text>
          <rect x="600" y="370" width="220" height="160" rx="8" class="box" stroke="#F97316"/>
          <text x="710" y="430" class="small" text-anchor="middle">Simulator & Profitability Engine</text>
          <rect x="840" y="370" width="240" height="160" rx="8" class="box" stroke="#FB923C"/>
          <text x="960" y="430" class="small" text-anchor="middle">Bundle Builder & Private Pool (Flashbots-style)</text>
        </g>

        <!-- Wallet Custody & HSM -->
        <g filter="url(#soft)">
          <rect x="1120" y="96" width="520" height="240" rx="12" class="zone" stroke="#10B981"/>
          <text x="1380" y="120" class="small" text-anchor="middle">Wallet Custody & HSM Vaults</text>
          <rect x="1140" y="150" width="240" height="110" rx="8" class="box" stroke="#059669"/>
          <text x="1260" y="200" class="small" text-anchor="middle">HSM Cluster (sign-only API)</text>
          <rect x="1380" y="150" width="240" height="110" rx="8" class="box" stroke="#34D399"/>
          <text x="1500" y="200" class="small" text-anchor="middle">Threshold Sig Orchestrator / Multisig</text>
        </g>

        <!-- Observability & WORM -->
        <g filter="url(#soft)">
          <rect x="1120" y="320" width="520" height="240" rx="12" class="zone" stroke="#3B82F6"/>
          <text x="1380" y="342" class="small" text-anchor="middle">Observability, Audit & Evidence Vault</text>
          <rect x="1140" y="370" width="240" height="160" rx="8" class="box" stroke="#3B82F6"/>
          <text x="1260" y="430" class="small" text-anchor="middle">High-cardinality TSDB (ClickHouse)</text>
          <rect x="1380" y="370" width="240" height="160" rx="8" class="box" stroke="#60A5FA"/>
          <text x="1500" y="430" class="small" text-anchor="middle">WORM Evidence Store & Signed Manifests</text>
        </g>

        <!-- Flows -->
        <path d="M556 196 L580 196" stroke="#FBBF24" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M1116 196 L1120 196" stroke="#10B981" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M840 580 L840 620" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Legend -->
        <g>
          <rect x="36" y="880" width="1604" height="112" rx="8" fill="#021024" stroke="#94A3B8"/>
          <text x="56" y="900" class="muted">Legend: colocated exchange relays and archive nodes feed a latency-aware order router and MEV/bundle engine. Execution requests are signed by HSM (threshold for high-value ops). All decisions, signed txs and traces are archived to WORM for audit. Private mempool / relayer support for front-run protection.</text>
        </g>
      </svg>
        `;
        title = 'DeFi Yield & Arbitrage — Production Topology';
        description = 'Colocated relays + liquidity mesh → router & execution → MEV bundle builder → HSM-secured custody → signed WORM audit trail.';
        break;


      /* ----------------------- TRAINING & KNOWLEDGE PLATFORMS — Production-grade Topology ----------------------- */
      case 'training-knowledge-platforms':
        svgContent = `
      <svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Training & Knowledge Platforms (production)">
        <defs>
          <linearGradient id="bg" x1="0" x2="1"><stop offset="0%" stop-color="#071026"/><stop offset="100%" stop-color="#021022"/></linearGradient>
          <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#60A5FA"/></marker>
          <style>
            .title{font-family:Inter,system-ui; fill:#E6F7FF; font-size:18px; font-weight:700}
            .note{font-family:Inter; fill:#9CA3AF; font-size:12px}
            .zone{fill:rgba(2,6,23,0.66); stroke-width:2}
            .box{fill:#061022; stroke-width:1.5}
            .muted{fill:#94A3B8; font-size:11px}
            .small{fill:#CFE8FF; font-size:11px}
          </style>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)"/>
        <text x="40" y="40" class="title">Training & Knowledge Platforms — Multi-tier, DRM & Proctoring, Evidence WORM</text>
        <text x="40" y="62" class="note">CDN & Edge → DMZ API Gateway → Private App Tier → Encrypted Content Storage & DRM (HSM) → Proctoring (ephemeral VMs) → Analytics & WORM Evidence</text>

        <!-- CDN / Edge -->
        <g class="zone" transform="translate(36,86)">
          <rect width="420" height="160" rx="10" stroke="#60A5FA"/>
          <text x="210" y="22" text-anchor="middle" class="small">Global CDN / PoPs (signed URLs)</text>
          <rect x="20" y="52" width="180" height="90" rx="8" class="box" stroke="#3B82F6"/><text x="110" y="102" class="small" text-anchor="middle">Static SPA & Media Edge</text>
          <rect x="220" y="52" width="180" height="90" rx="8" class="box" stroke="#60A5FA"/><text x="310" y="102" class="small" text-anchor="middle">Edge Auth & Token Validation</text>
        </g>

        <!-- DMZ -->
        <g class="zone" transform="translate(492,86)">
          <rect width="420" height="160" rx="10" stroke="#F97316"/>
          <text x="210" y="22" text-anchor="middle" class="small">DMZ — API Gateway & OIDC</text>
          <rect x="20" y="52" width="180" height="90" rx="8" class="box" stroke="#F59E0B"/><text x="110" y="102" class="small" text-anchor="middle">OIDC IdP (Keycloak)</text>
          <rect x="220" y="52" width="180" height="90" rx="8" class="box" stroke="#F97316"/><text x="310" y="102" class="small" text-anchor="middle">API GW (WAF, Rate-limit)</text>
        </g>

        <!-- App / LMS Private Tier -->
        <g class="zone" transform="translate(36,266)">
          <rect width="620" height="260" rx="12" stroke="#10B981"/>
          <text x="310" y="26" text-anchor="middle" class="small">Private App Tier — LMS Core, Authoring, LRS</text>
          <rect x="40" y="62" width="260" height="180" rx="10" class="box" stroke="#10B981"/><text x="170" y="140" class="small" text-anchor="middle">LMS App Cluster (Canvas/Moodle/Custom)</text>
          <rect x="320" y="62" width="260" height="80" rx="10" class="box" stroke="#34D399"/><text x="450" y="98" class="small" text-anchor="middle">Authoring & CI (SCORM/xAPI build)</text>
          <rect x="320" y="154" width="260" height="88" rx="10" class="box" stroke="#059669"/><text x="450" y="200" class="small" text-anchor="middle">Learning Record Store (xAPI)</text>
        </g>

        <!-- Content Storage + DRM (HSM) -->
        <g class="zone" transform="translate(676,266)">
          <rect width="480" height="260" rx="12" stroke="#A855F7"/>
          <text x="240" y="26" text-anchor="middle" class="small">Content Storage & DRM</text>
          <rect x="34" y="62" width="200" height="180" rx="10" class="box" stroke="#9333EA"/><text x="134" y="140" class="small" text-anchor="middle">S3 w/ Object Lock (encrypted)</text>
          <rect x="254" y="62" width="190" height="88" rx="10" class="box" stroke="#C084FC"/><text x="349" y="98" class="small" text-anchor="middle">DRM / License Server (HSM-signed tokens)</text>
          <rect x="254" y="162" width="190" height="80" rx="10" class="box" stroke="#A78BFA"/><text x="349" y="202" class="small" text-anchor="middle">Transcode / ASR / Captions (in sandbox)</text>
        </g>

        <!-- Proctoring -->
        <g class="zone" transform="translate(36,552)">
          <rect width="620" height="260" rx="12" stroke="#F59E0B"/>
          <text x="310" y="26" class="small" text-anchor="middle">Assessment & Proctoring — Ephemeral VM Pool</text>
          <rect x="40" y="62" width="260" height="180" rx="10" class="box" stroke="#F97316"/><text x="170" y="140" class="small" text-anchor="middle">Proctor VM Pool (ephemeral, per-exam)</text>
          <rect x="320" y="62" width="260" height="180" rx="10" class="box" stroke="#FB923C"/><text x="450" y="140" class="small" text-anchor="middle">Exam Locker (Secure Browser + Recorder)</text>
        </g>

        <!-- Analytics & Evidence WORM -->
        <g class="zone" transform="translate(676,552)">
          <rect width="480" height="260" rx="12" stroke="#3B82F6"/>
          <text x="240" y="26" text-anchor="middle" class="small">Analytics, Reports & Evidence WORM</text>
          <rect x="34" y="62" width="200" height="180" rx="10" class="box" stroke="#60A5FA"/><text x="134" y="140" class="small" text-anchor="middle">BI / ClickHouse / Grafana</text>
          <rect x="254" y="62" width="200" height="180" rx="10" class="box" stroke="#2563EB"/><text x="354" y="140" class="small" text-anchor="middle">WORM Evidence Store (signed manifests)</text>
        </g>

        <!-- Management / Bastion -->
        <g class="zone" transform="translate(1168,86)">
          <rect width="384" height="180" rx="12" stroke="#22C55E"/>
          <text x="192" y="24" text-anchor="middle" class="small">Management Plane — Bastion & CI</text>
          <rect x="22" y="56" width="160" height="110" rx="10" class="box" stroke="#16A34A"/><text x="102" y="110" class="small" text-anchor="middle">Bastion (MFA + Session Recording)</text>
          <rect x="202" y="56" width="160" height="110" rx="10" class="box" stroke="#34D399"/><text x="282" y="110" class="small" text-anchor="middle">CI/CD (signed artifacts)</text>
        </g>

        <!-- flow arrows -->
        <path d="M456 196 L492 196" stroke="#60A5FA" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M708 260 L676 260" stroke="#10B981" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M456 664 L676 664" stroke="#F59E0B" stroke-width="2" marker-end="url(#arrow)"/>
      </svg>
        `;
        title = 'Training & Knowledge Platform — Production Topology';
        description = 'CDN/Edge → DMZ API GW → Private App Tier → Encrypted Content Storage & DRM (HSM) → Proctoring Ephemeral VMs → Analytics & WORM Evidence';
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {specializedSolutions.map((solution, index) => (
                  <div key={solution.id} className="solution-wrapper">
                    <SolutionCard
                      solution={solution}
                      isActive={activeCard === solution.id}
                      onHover={setActiveCard}
                    />
                    {activeCard === solution.id && (
                      <div className="mt-4 bg-slate-900/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
                        <ExpandableTopologyDiagram solutionId={solution.id} />
                      </div>
                    )}
                  </div>
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