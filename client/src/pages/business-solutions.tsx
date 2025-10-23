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

        case 'dao-governance':
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
                <marker id="p2pFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                  <path d="M0,0 L0,8 L12,4 z" fill="#8B5CF6" filter="url(#serverGlow)"/>
                </marker>
                <marker id="apiFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                  <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#serverGlow)"/>
                </marker>
                <marker id="voteFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                  <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#serverGlow)"/>
                </marker>
                <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
                  <circle cx="0" cy="0" r="0.5" fill="#8B5CF6" opacity="0.2"/>
                </pattern>
                <linearGradient id="p2pGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="rgba(139, 92, 246, 0.3)"/>
                  <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                  <stop offset="100%" stop-color="rgba(139, 92, 246, 0.1)"/>
                </linearGradient>
                <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="rgba(16, 185, 129, 0.3)"/>
                  <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                  <stop offset="100%" stop-color="rgba(16, 185, 129, 0.1)"/>
                </linearGradient>
                <radialGradient id="blockchainGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="rgba(245, 158, 11, 0.4)"/>
                  <stop offset="70%" stop-color="rgba(30, 41, 59, 0.8)"/>
                  <stop offset="100%" stop-color="rgba(245, 158, 11, 0.2)"/>
                </radialGradient>
                <linearGradient id="relayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                  <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                  <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
                </linearGradient>
              </defs>

              {/* Enhanced Background with depth */}
              <rect width="100%" height="100%" fill="#0F172A"/>
              <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

              {/* Floating vote particles */}
              <g opacity="0.6">
                <circle cx="150" cy="100" r="2" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 0s"/>
                <circle cx="650" cy="150" r="1.5" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
                <circle cx="400" cy="300" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 2s"/>
                <circle cx="200" cy="250" r="1" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 0.5s"/>
              </g>

              {/* Decentralized P2P Blockchain Overlay */}
              <g class="network-component">
                <ellipse cx="400" cy="180" rx="280" ry="100" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="12,6" class="animated-connection"/>
                <text x="400" y="110" text-anchor="middle" fill="#A78BFA" font-size="14" font-weight="bold">DECENTRALIZED P2P BLOCKCHAIN OVERLAY</text>
                <text x="400" y="130" text-anchor="middle" fill="#C4B5FD" font-size="11" font-weight="600">Consensus Layer • On-chain Voting • Distributed Ledger</text>

                {/* P2P Validator Node 1 */}
                <g transform="translate(220, 160)" class="animated-node">
                  <circle cx="0" cy="0" r="28" fill="url(#p2pGradient)" stroke="#8B5CF6" stroke-width="3" filter="url(#serverGlow)" class="animated-router"/>
                  <circle cx="0" cy="0" r="12" fill="#A78BFA" opacity="0.8"/>
                  <text x="0" y="5" text-anchor="middle" fill="white" font-size="16" class="jump-icon">🗳️</text>
                  <text x="0" y="44" text-anchor="middle" fill="#C4B5FD" font-size="9" font-weight="600">Validator 1</text>
                </g>

                {/* P2P Validator Node 2 */}
                <g transform="translate(340, 140)" class="animated-node">
                  <circle cx="0" cy="0" r="28" fill="url(#p2pGradient)" stroke="#8B5CF6" stroke-width="3" filter="url(#serverGlow)" class="animated-router"/>
                  <circle cx="0" cy="0" r="12" fill="#A78BFA" opacity="0.8"/>
                  <text x="0" y="5" text-anchor="middle" fill="white" font-size="16" class="jump-icon">⛓️</text>
                  <text x="0" y="44" text-anchor="middle" fill="#C4B5FD" font-size="9" font-weight="600">Validator 2</text>
                </g>

                {/* P2P Validator Node 3 */}
                <g transform="translate(460, 140)" class="animated-node">
                  <circle cx="0" cy="0" r="28" fill="url(#p2pGradient)" stroke="#8B5CF6" stroke-width="3" filter="url(#serverGlow)" class="animated-router"/>
                  <circle cx="0" cy="0" r="12" fill="#A78BFA" opacity="0.8"/>
                  <text x="0" y="5" text-anchor="middle" fill="white" font-size="16" class="jump-icon">🔗</text>
                  <text x="0" y="44" text-anchor="middle" fill="#C4B5FD" font-size="9" font-weight="600">Validator 3</text>
                </g>

                {/* P2P Validator Node 4 */}
                <g transform="translate(580, 160)" class="animated-node">
                  <circle cx="0" cy="0" r="28" fill="url(#p2pGradient)" stroke="#8B5CF6" stroke-width="3" filter="url(#serverGlow)" class="animated-router"/>
                  <circle cx="0" cy="0" r="12" fill="#A78BFA" opacity="0.8"/>
                  <text x="0" y="5" text-anchor="middle" fill="white" font-size="16" class="jump-icon">📊</text>
                  <text x="0" y="44" text-anchor="middle" fill="#C4B5FD" font-size="9" font-weight="600">Validator 4</text>
                </g>

                {/* Consensus Node (Center) */}
                <g transform="translate(400, 180)" class="animated-server">
                  <circle cx="0" cy="0" r="32" fill="url(#blockchainGradient)" stroke="#F59E0B" stroke-width="3" filter="url(#serverGlow)" class="animated-icon-pulse"/>
                  <circle cx="0" cy="0" r="16" fill="#FBBF24" opacity="0.9"/>
                  <text x="0" y="6" text-anchor="middle" fill="white" font-size="18" class="jump-icon">🏛️</text>
                  <text x="0" y="50" text-anchor="middle" fill="#FCD34D" font-size="10" font-weight="600">Consensus Core</text>
                </g>

                {/* P2P mesh connections */}
                <g class="animated-connection">
                  <path d="M248 160 L340 140" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#p2pFlow)"/>
                  <path d="M368 140 L460 140" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#p2pFlow)"/>
                  <path d="M488 140 L580 160" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#p2pFlow)"/>
                  <path d="M220 188 L368 180" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#p2pFlow)"/>
                  <path d="M432 180 L580 188" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#p2pFlow)"/>
                  <path d="M340 168 L400 180" stroke="#F59E0B" stroke-width="2.5" class="animated-high-traffic" marker-end="url(#voteFlow)"/>
                  <path d="M460 168 L400 180" stroke="#F59E0B" stroke-width="2.5" class="animated-high-traffic" marker-end="url(#voteFlow)"/>
                </g>
              </g>

              {/* API Gateway & Relay Subnet */}
              <g class="network-component">
                <rect x="60" y="300" width="680" height="140" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
                <text x="400" y="325" text-anchor="middle" fill="#34D399" font-size="14" font-weight="bold">API GATEWAY & RELAY SUBNET</text>
                <text x="400" y="343" text-anchor="middle" fill="#6EE7B7" font-size="11" font-weight="600">UI Services • Indexing • Off-chain Data</text>

                {/* API Gateway Cluster */}
                <g transform="translate(110, 355)" class="animated-server">
                  <rect width="100" height="60" rx="8" fill="url(#apiGradient)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
                  <rect x="10" y="10" width="80" height="10" rx="5" fill="#10B981" opacity="0.9"/>
                  <rect x="10" y="24" width="80" height="8" rx="4" fill="#34D399" opacity="0.7"/>
                  <rect x="10" y="36" width="80" height="8" rx="4" fill="#6EE7B7" opacity="0.5"/>
                  <circle cx="20" cy="50" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="35" cy="50" r="2" fill="#34D399" class="animated-status"/>
                  <circle cx="50" cy="50" r="2" fill="#6EE7B7" class="animated-status"/>
                  <circle cx="65" cy="50" r="2" fill="#A7F3D0" class="animated-status"/>
                  <text x="50" y="76" text-anchor="middle" fill="#6EE7B7" font-size="9" font-weight="600">API Gateway</text>
                </g>

                {/* Indexer Service */}
                <g transform="translate(240, 355)" class="animated-server">
                  <rect width="100" height="60" rx="8" fill="url(#relayGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                  <rect x="10" y="10" width="35" height="35" rx="4" fill="#3B82F6" opacity="0.8"/>
                  <rect x="50" y="10" width="35" height="35" rx="4" fill="#60A5FA" opacity="0.6"/>
                  <circle cx="27" cy="27" r="3" fill="#BFDBFE"/>
                  <circle cx="67" cy="27" r="3" fill="#BFDBFE"/>
                  <path d="M30 35 L64 35" stroke="#3B82F6" stroke-width="2" marker-end="url(#apiFlow)" class="animated-connection"/>
                  <text x="50" y="76" text-anchor="middle" fill="#93C5FD" font-size="9" font-weight="600">Indexer Service</text>
                </g>

                {/* Relay Nodes */}
                <g transform="translate(370, 355)" class="animated-server">
                  <rect width="120" height="60" rx="8" fill="url(#apiGradient)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
                  <rect x="10" y="10" width="30" height="35" rx="4" fill="#10B981" opacity="0.9"/>
                  <rect x="45" y="10" width="30" height="35" rx="4" fill="#34D399" opacity="0.7"/>
                  <rect x="80" y="10" width="30" height="35" rx="4" fill="#6EE7B7" opacity="0.5"/>
                  <circle cx="25" cy="27" r="2" fill="#ECFDF5"/>
                  <circle cx="60" cy="27" r="2" fill="#ECFDF5"/>
                  <circle cx="95" cy="27" r="2" fill="#ECFDF5"/>
                  <text x="60" y="76" text-anchor="middle" fill="#6EE7B7" font-size="9" font-weight="600">Relay Nodes</text>
                </g>

                {/* UI Server Cluster */}
                <g transform="translate(520, 355)" class="animated-server">
                  <rect width="100" height="60" rx="8" fill="url(#relayGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                  <rect x="10" y="10" width="80" height="10" rx="5" fill="#3B82F6" opacity="0.9"/>
                  <rect x="10" y="24" width="80" height="8" rx="4" fill="#60A5FA" opacity="0.7"/>
                  <rect x="10" y="36" width="80" height="8" rx="4" fill="#93C5FD" opacity="0.5"/>
                  <circle cx="20" cy="50" r="2" fill="#3B82F6" class="animated-icon-pulse"/>
                  <circle cx="35" cy="50" r="2" fill="#60A5FA" class="animated-icon-pulse" style="animation-delay: 0.5s"/>
                  <circle cx="50" cy="50" r="2" fill="#93C5FD" class="animated-icon-pulse" style="animation-delay: 1s"/>
                  <circle cx="65" cy="50" r="2" fill="#BFDBFE" class="animated-icon-pulse" style="animation-delay: 1.5s"/>
                  <text x="50" y="76" text-anchor="middle" fill="#93C5FD" font-size="9" font-weight="600">UI Server Cluster</text>
                </g>
              </g>

              {/* Enhanced Network Connections */}
              <g class="network-connections">
                {/* P2P to API Gateway connections */}
                <path d="M220 216 L160 300" stroke="#10B981" stroke-width="3" fill="none" marker-end="url(#apiFlow)" class="animated-connection"/>
                <path d="M340 212 L290 300" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#apiFlow)" class="animated-connection"/>
                <path d="M460 212 L440 300" stroke="#10B981" stroke-width="3" fill="none" marker-end="url(#apiFlow)" class="animated-connection"/>
                <path d="M580 216 L570 300" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#apiFlow)" class="animated-connection"/>

                {/* Data flow particles */}
                <circle cx="190" cy="258" r="2" fill="#10B981" class="animated-data-packet"/>
                <circle cx="315" cy="256" r="2" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 1s"/>
                <circle cx="500" cy="256" r="2" fill="#10B981" class="animated-data-packet" style="animation-delay: 0.5s"/>
              </g>

              {/* Enhanced Connection Labels */}
              <g class="connection-labels">
                <rect x="140" y="250" width="100" height="20" rx="10" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
                <text x="190" y="262" text-anchor="middle" fill="#A78BFA" font-size="10" font-weight="700">P2P CONSENSUS</text>

                <rect x="250" y="260" width="80" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
                <text x="290" y="272" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">RELAY</text>

                <rect x="460" y="260" width="80" height="20" rx="10" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
                <text x="500" y="272" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="700">INDEXING</text>

                <rect x="350" y="280" width="100" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
                <text x="400" y="292" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">ON-CHAIN VOTE</text>
              </g>
            </svg>
          `;
          title = 'P2P Blockchain Overlay + API Gateway Topology';
          description = 'Fully decentralized P2P network for on-chain voting with separate API gateway and relay subnet for UI services';
          break;



      // Updated switch-case snippets for the ExpandableTopologyDiagram
      // Replace the corresponding cases in your existing ExpandableTopologyDiagram's switch(solutionId) block.

      /* --------------------------- PEN-TEST TOPOLOGY --------------------------- */
      /* Replace or add this inside your ExpandableTopologyDiagram switch(solutionId) */
      case 'pen-test':
        svgContent = `
          <svg viewBox="0 0 1400 820" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pen-test lab topology">
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
              <marker id="dangerFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#EF4444" filter="url(#serverGlow)"/>
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
              <style>
                .t { font-family: Inter, system-ui, -apple-system; fill:#E6F0FF; font-size:13px }
                .s { fill:#94A3B8; font-size:11px }
                .zone { fill: rgba(15, 23, 42, 0.8); stroke-width:2 }
                .ephemeral { stroke-dasharray:8,4 }
                .box { fill: rgba(30, 41, 59, 0.8); stroke-width:2 }
                .small { font-size:10px; fill:#94a3b8 }
                .animated-network-glow { animation: network-glow 2s infinite ease-in-out; }
                .animated-secure-connection { animation: secure-pulse 3s infinite ease-in-out; }
                .animated-data-packet { animation: data-flow 4s infinite linear; }
                .animated-status { animation: status-blink 2s infinite ease-in-out; }
              </style>
            </defs>

            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

            {/* Floating data particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#60A5FA" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            <text x="36" y="44" class="t" font-weight="700" font-size="18">🛡️ Pen-Test Lab — Air-gapped, Segmented & Audited Environment</text>
            <text x="36" y="64" class="small">Design: Bastioned access → Mirrored (one-way) sanitized snapshots → Ephemeral sandbox VLANs → Controlled egress + immutable telemetry</text>

            <!-- Air-gapped envelope -->
            <g class="animated-secure-connection">
              <rect x="28" y="92" width="1344" height="620" rx="16" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" stroke-width="3" stroke-dasharray="8,4" filter="url(#networkShadow)"/>
              <text x="48" y="118" class="small" fill="#FCA5A5">Air-gapped Test Envelope (VLAN 600) — strict ingress/egress, audited</text>
            </g>

            <!-- Bastion / Jump (Management) -->
            <g class="network-component animated-network-glow">
              <rect x="56" y="156" width="260" height="140" rx="12" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
              <text x="186" y="186" text-anchor="middle" class="t" filter="url(#serverGlow)">🛡️ Jump Bastion / Admin Gateway</text>
              <text x="186" y="204" text-anchor="middle" class="s">MFA, session recording, IP allowlist</text>
              <text x="186" y="222" text-anchor="middle" class="small">Mgmt VLAN: VLAN 602 — 10.62.0.0/24</text>
              <circle cx="166" cy="238" r="2" fill="#3B82F6" class="animated-status"/>
              <circle cx="186" cy="238" r="2" fill="#10B981" class="animated-status"/>
              <circle cx="206" cy="238" r="2" fill="#F59E0B" class="animated-status"/>
            </g>

            <!-- Mirror/TAP / Snapshot scrubber -->
            <g class="network-component animated-network-glow">
              <rect x="344" y="156" width="320" height="140" rx="12" fill="url(#firewallGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
              <text x="504" y="186" text-anchor="middle" class="t" filter="url(#serverGlow)">🔄 Mirrored Snapshot Zone</text>
              <text x="504" y="204" text-anchor="middle" class="s">Sanitizer (PII redaction) • One-way replication</text>
              <text x="504" y="222" text-anchor="middle" class="small">Test VLAN: VLAN 600 — 10.60.0.0/24 (read-only snapshots)</text>

              <!-- internal clones -->
              <g class="animated-secure-connection">
                <rect x="384" y="216" width="120" height="64" rx="8" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                <text x="444" y="249" text-anchor="middle" class="small">📱 App Clone</text>
                <circle cx="424" cy="235" r="2" fill="#3B82F6" class="animated-status"/>
                <circle cx="444" cy="235" r="2" fill="#10B981" class="animated-status"/>
              </g>

              <g class="animated-secure-connection">
                <rect x="516" y="216" width="120" height="64" rx="8" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                <text x="576" y="249" text-anchor="middle" class="small">💾 DB Snapshot</text>
                <circle cx="556" cy="235" r="2" fill="#3B82F6" class="animated-status"/>
                <circle cx="576" cy="235" r="2" fill="#10B981" class="animated-status"/>
              </g>
            </g>

            <!-- Ephemeral Labs -->
            <g class="network-component">
              <rect x="704" y="156" width="616" height="320" rx="12" fill="rgba(249, 115, 22, 0.08)" stroke="#F97316" stroke-width="3" stroke-dasharray="8,4" filter="url(#networkShadow)" class="animated-secure-connection"/>
              <text x="1012" y="186" text-anchor="middle" class="t" filter="url(#serverGlow)">⚡ Ephemeral Labs VLAN (VLAN 601)</text>
              <text x="1012" y="204" text-anchor="middle" class="s">Disposable VMs/containers • Network NS/iptables isolation</text>

              <!-- key components inside ephemeral -->
              <g class="animated-network-glow">
                <rect x="740" y="220" width="160" height="96" rx="10" fill="url(#serverGradient)" stroke="#A855F7" stroke-width="2" filter="url(#networkShadow)"/>
                <circle cx="760" cy="240" r="2" fill="#A855F7" class="animated-status"/>
                <circle cx="780" cy="240" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="800" cy="240" r="2" fill="#F59E0B" class="animated-status"/>
              </g>
              <text x="820" y="256" text-anchor="middle" class="small">🚀 Exploit Runner (Isolated)</text>

              <rect x="920" y="220" width="160" height="96" rx="10" class="box" stroke="#3B82F6"/>
              <text x="1000" y="256" text-anchor="middle" class="small">📦 Payload Sandbox (Containerized)</text>

              <rect x="1100" y="220" width="160" height="96" rx="10" class="box" stroke="#10B981"/>
              <text x="1180" y="256" text-anchor="middle" class="small">📊 Telemetry Collector (Immutable)</text>

              <!-- Quarantine VLAN for discovered artifacts -->
              <rect x="840" y="336" width="360" height="86" rx="8" class="box" stroke="#EF4444"/>
              <text x="1020" y="362" text-anchor="middle" class="small">🔒 Quarantine / Forensics VLAN (VLAN 603)</text>
            </g>

            <!-- Scanner Farm -->
            <g class="vibrant">
              <rect x="56" y="336" width="260" height="140" rx="12" class="box" stroke="#F59E0B"/>
              <text x="186" y="368" text-anchor="middle" class="t">🔍 Scanner Farm</text>
              <text x="186" y="386" text-anchor="middle" class="s">Nmap, Nessus, ZAP (in isolated nodes)</text>
              <text x="186" y="404" text-anchor="middle" class="small">🎯 Automated vulnerability scanning</text>
              <text x="186" y="420" text-anchor="middle" class="small">📈 Continuous assessment tools</text>
            </g>

            <!-- Telemetry & SIEM -->
            <g class="vibrant">
              <rect x="56" y="512" width="420" height="120" rx="12" class="box" stroke="#A3E635"/>
              <text x="266" y="548" text-anchor="middle" class="t">📋 Immutable Telemetry & Evidence Store</text>
              <text x="266" y="566" text-anchor="middle" class="s">WORM store for pcaps, logs, signed artifacts. Forward to SIEM (read-only)</text>
              <text x="266" y="584" text-anchor="middle" class="small">🔐 Tamper-proof evidence collection</text>
            </g>

            <!-- Controlled Egress appliance -->
            <g class="vibrant">
              <rect x="520" y="512" width="800" height="120" rx="12" class="box" stroke="#10B981"/>
              <text x="920" y="548" text-anchor="middle" class="t">🌐 Controlled Egress Gateway — DLP + Content Scrubbing</text>
              <text x="920" y="566" text-anchor="middle" class="s">Only allow approved exfil endpoints; signed export bundles only; full audit</text>
              <text x="920" y="584" text-anchor="middle" class="small">🚫 Data Loss Prevention & Content Filtering</text>
            </g>

            <!-- Flow arrows with vibrant colors -->
            <path d="M316 216 L344 216" stroke="#60A5FA" stroke-width="3" marker-end="url(#arrow)"/>
            <path d="M664 216 L704 216" stroke="#F97316" stroke-width="3" marker-end="url(#secureArrow)"/>
            <path d="M920 320 L920 512" stroke="#A3E635" stroke-width="3" marker-end="url(#dangerArrow)"/>

            <!-- Additional flow indicators -->
            <path d="M316 380 L344 380" stroke="#F59E0B" stroke-width="2" marker-end="url(#arrow)"/>
            <path d="M316 560 L344 560" stroke="#A3E635" stroke-width="2" marker-end="url(#secureArrow)"/>

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

            {/* Top title updated to SOC Automation Starter */}
            <text x="36" y="44" fill="#E6F0FF" font-size="18" font-weight="700">🛡️ SOC Automation Starter — SIEM Ingest Fabric + Monitoring Backbone</text>
            <text x="36" y="64" fill="#94A3B8" font-size="11">Dedicated monitoring backbone with TAP/SPAN aggregators feeding a hardened SIEM cluster and orchestration subnetwork for playbook automation.</text>

            {/* Telemetry Sources (was Internet) */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#F59E0B" font-size="16" font-weight="bold" class="jump-icon">🌐</text>
            <text x="90" y="45" fill="#FBBF24" font-size="14" font-weight="bold">TELEMETRY SOURCES</text>
            <text x="400" y="60" text-anchor="middle" fill="#FCD34D" font-size="12" font-weight="600">TAP/SPAN, EDR, Cloud Logs, Network Feeds → Ingest Fabric</text>

            {/* Network performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">INGEST: ONLINE</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#3B82F6" font-size="8" font-weight="600">QUEUE: STABLE</text>
            </g>

            {/* TAP/SPAN Aggregators Subnet (was Gateway Subnet) */}
            <g class="network-component">
              <rect x="650" y="100" width="130" height="90" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="660" y="120" fill="#34D399" font-size="13" font-weight="bold">TAP/SPAN AGGREGATORS</text>

              {/* Aggregator node */}
              <g transform="translate(665, 130)" class="animated-network-glow">
          <rect width="45" height="35" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
          <circle cx="22.5" cy="12" r="8" fill="none" stroke="#6EE7B7" stroke-width="1.5" class="animated-router"/>
          <circle cx="22.5" cy="12" r="4" fill="#10B981" opacity="0.8"/>
          <rect x="18" y="20" width="9" height="3" rx="1" fill="#6EE7B7" opacity="0.9"/>
          <rect x="16" y="25" width="13" height="2" rx="1" fill="#34D399" opacity="0.7"/>
          <text x="22.5" y="32" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">AGG</text>
              </g>
            </g>

            {/* SIEM Ingest (was Private DMZ IN) */}
            <g class="network-component">
              <rect x="20" y="220" width="200" height="120" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="30" y="240" fill="#60A5FA" font-size="13" font-weight="bold">SIEM INGEST</text>

              <g transform="translate(35, 260)" class="animated-server">
          <rect width="60" height="40" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
          <rect x="8" y="8" width="44" height="6" rx="2" fill="#60A5FA" opacity="0.8"/>
          <rect x="8" y="16" width="44" height="4" rx="1" fill="#93C5FD" opacity="0.6"/>
          <rect x="8" y="22" width="44" height="4" rx="1" fill="#BFDBFE" opacity="0.4"/>
          <circle cx="15" cy="32" r="2" fill="#3B82F6" class="animated-status"/>
          <circle cx="25" cy="32" r="2" fill="#10B981" class="animated-status"/>
          <circle cx="35" cy="32" r="2" fill="#F59E0B" class="animated-status"/>
          <text x="30" y="52" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">INGEST</text>
              </g>

              <g transform="translate(105, 260)" class="animated-server">
          <rect width="60" height="40" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
          <rect x="8" y="8" width="20" height="24" rx="3" fill="#34D399" opacity="0.8"/>
          <rect x="32" y="8" width="20" height="24" rx="3" fill="#6EE7B7" opacity="0.6"/>
          <circle cx="18" cy="14" r="1.5" fill="#10B981"/>
          <circle cx="42" cy="14" r="1.5" fill="#10B981"/>
          <path d="M20 20 L40 20" stroke="#10B981" stroke-width="2" marker-end="url(#secureFlow)" class="animated-connection"/>
          <text x="30" y="52" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">PARSE</text>
              </g>
            </g>

            {/* Orchestration Subnet (was Service Mesh Layer) */}
            <g class="network-component">
              <rect x="240" y="220" width="320" height="120" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="250" y="240" fill="#A78BFA" font-size="13" font-weight="bold">ORCHESTRATION SUBNET</text>

              <g transform="translate(275, 262)" class="animated-server">
          <ellipse cx="0" cy="0" rx="28" ry="20" fill="url(#serverGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
          <rect x="-12" y="-8" width="24" height="4" rx="2" fill="#A78BFA" opacity="0.9"/>
          <rect x="-12" y="-2" width="24" height="3" rx="1" fill="#C4B5FD" opacity="0.7"/>
          <rect x="-12" y="3" width="24" height="3" rx="1" fill="#DDD6FE" opacity="0.5"/>
          <circle cx="0" cy="10" r="3" fill="#8B5CF6" class="animated-icon-pulse"/>
          <text x="0" y="32" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="600">ORCH-1</text>
              </g>

              <g transform="translate(340, 260)" class="animated-server">
          <rect width="80" height="28" rx="14" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
          <rect x="8" y="6" width="16" height="16" rx="3" fill="#F59E0B" opacity="0.8"/>
          <circle cx="16" cy="14" r="3" fill="#FBBF24"/>
          <text x="40" y="40" text-anchor="middle" fill="#FBBF24" font-size="9" font-weight="600">Playbook Engine</text>
              </g>

              <g transform="translate(475, 262)" class="animated-server">
          <ellipse cx="0" cy="0" rx="28" ry="20" fill="url(#serverGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
          <circle cx="0" cy="10" r="3" fill="#8B5CF6" class="animated-icon-pulse"/>
          <text x="0" y="32" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="600">ORCH-2</text>
              </g>

              <path d="M303 262 L340 268" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-connection" marker-end="url(#networkFlow)"/>
              <path d="M420 268 L447 262" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-connection" marker-end="url(#networkFlow)"/>
            </g>

            {/* Monitoring Backbone (was Tenant Applications) */}
            <g class="network-component">
              <rect x="580" y="360" width="200" height="80" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="590" y="380" fill="#34D399" font-size="13" font-weight="bold">MONITORING BACKBONE</text>

              <g transform="translate(595, 390)" class="animated-server">
          <rect width="50" height="35" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
          <rect x="8" y="6" width="34" height="6" rx="3" fill="#10B981" opacity="0.9"/>
          <rect x="8" y="14" width="34" height="4" rx="2" fill="#34D399" opacity="0.7"/>
          <circle cx="15" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
          <text x="25" y="48" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Indexers</text>
              </g>

              <g transform="translate(655, 390)" class="animated-server">
          <rect width="50" height="35" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
          <text x="25" y="48" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Alerting</text>
              </g>

              <g transform="translate(715, 390)" class="animated-server">
          <rect width="50" height="35" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
          <text x="25" y="48" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Dashboards</text>
              </g>
            </g>

            {/* SIEM Cluster (was Data & Storage Layer) */}
            <g class="network-component">
              <rect x="20" y="360" width="320" height="80" rx="12" fill="rgba(220, 38, 38, 0.08)" stroke="#DC2626" stroke-width="3" stroke-dasharray="6,3" class="animated-connection"/>
              <text x="30" y="380" fill="#F87171" font-size="13" font-weight="bold">SIEM CLUSTER & EVIDENCE STORE</text>

              <g transform="translate(35, 390)" class="animated-server">
          <rect width="60" height="35" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
          <text x="30" y="48" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Log Indexer</text>
              </g>

              <g transform="translate(105, 390)" class="animated-server">
          <rect width="60" height="35" rx="6" fill="url(#firewallGradient)" stroke="#DC2626" stroke-width="2" filter="url(#serverGlow)"/>
          <text x="30" y="48" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Fast Cache</text>
              </g>

              <g transform="translate(175, 390)" class="animated-server">
          <rect width="60" height="35" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
          <text x="30" y="48" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Evidence Store</text>
              </g>

              <g transform="translate(245, 390)" class="animated-server">
          <rect width="80" height="35" rx="6" fill="url(#serverGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
          <text x="40" y="48" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Event Bus</text>
              </g>
            </g>

            {/* Network Connections updated to SIEM-focused flows */}
            <g class="network-connections">
              <path d="M715 80 L715 100" stroke="#60A5FA" stroke-width="4" fill="none" marker-end="url(#networkFlow)" class="animated-high-traffic"/>
              <circle cx="715" cy="90" r="3" fill="#60A5FA" class="animated-data-packet"/>

              <path d="M650 145 Q400 180 220 220" stroke="#60A5FA" stroke-width="3" fill="none" stroke-dasharray="12,6" class="animated-secure-connection" marker-end="url(#secureFlow)"/>
              <path d="M240 280 L580 280" stroke="#A78BFA" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#networkFlow)"/>
              <path d="M180 360 L400 340" stroke="#F87171" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-connection" marker-end="url(#secureFlow)"/>
              <path d="M400 340 L680 360" stroke="#34D399" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#networkFlow)"/>
            </g>

            {/* Connection Labels */}
            <g class="connection-labels">
              <rect x="370" y="190" width="60" height="20" rx="10" fill="rgba(96, 165, 250, 0.2)" stroke="#60A5FA" stroke-width="1"/>
              <text x="400" y="202" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="700">INGEST</text>
              <rect x="520" y="190" width="60" height="20" rx="10" fill="rgba(244, 114, 182, 0.2)" stroke="#F472B6" stroke-width="1"/>
              <text x="550" y="202" text-anchor="middle" fill="#F472B6" font-size="10" font-weight="700">PARSE</text>
              <rect x="270" y="340" width="60" height="20" rx="10" fill="rgba(248, 113, 113, 0.2)" stroke="#F87171" stroke-width="1"/>
              <text x="300" y="352" text-anchor="middle" fill="#F87171" font-size="10" font-weight="700">EVIDENCE</text>
              <rect x="510" y="340" width="60" height="20" rx="10" fill="rgba(52, 211, 153, 0.2)" stroke="#34D399" stroke-width="1"/>
              <text x="540" y="352" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">ALERTS</text>
            </g>
          </svg>
        `;
        title = 'AI-Powered Cybersecurity Platform';
        description = 'Advanced threat detection system utilizing GPU-accelerated machine learning models for real-time analysis and response.';
        break;


      /* ---------------------- AI-POWERED CYBERSECURITY TOPOLOGY ----------------- */
      /* ---------------------- AI-POWERED CYBERSECURITY (robust) ---------------------- */
      case 'ai-cybersecurity':
        svgContent = `
          <svg viewBox="0 0 800 500" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="networkShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="gpuGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <marker id="dataFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#60A5FA" filter="url(#gpuGlow)"/>
    </marker>
    <marker id="secureFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#gpuGlow)"/>
    </marker>
    <marker id="mlFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#8B5CF6" filter="url(#gpuGlow)"/>
    </marker>
    <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
      <circle cx="0" cy="0" r="0.5" fill="#60A5FA" opacity="0.2"/>
    </pattern>
    <linearGradient id="gpuGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(139, 92, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
    </linearGradient>
    <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
      <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
    </linearGradient>
    
    <style>
      @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes flow {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -40; }
      }
      @keyframes glow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.5); }
      }
      .animated-pulse { animation: pulse 2s ease-in-out infinite; }
      .animated-rotate { animation: rotate 10s linear infinite; transform-origin: center; }
      .animated-flow { animation: flow 2s linear infinite; }
      .animated-glow { animation: glow 3s ease-in-out infinite; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#0F172A"/>
  <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

  <!-- Floating AI particles -->
  <g opacity="0.6">
    <circle cx="150" cy="80" r="2" fill="#8B5CF6" class="animated-pulse"/>
    <circle cx="650" cy="120" r="1.5" fill="#10B981" class="animated-pulse" style="animation-delay: 0.5s"/>
    <circle cx="400" cy="250" r="2" fill="#60A5FA" class="animated-pulse" style="animation-delay: 1s"/>
    <circle cx="200" cy="350" r="1" fill="#F59E0B" class="animated-pulse" style="animation-delay: 1.5s"/>
  </g>

  <!-- Data Ingestion Overlay -->
  <rect x="20" y="20" width="760" height="80" rx="12" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="40" y="45" fill="#F59E0B" font-size="18" font-weight="bold">🔐</text>
  <text x="90" y="45" fill="#FBBF24" font-size="15" font-weight="bold">ENCRYPTED DATA INGESTION OVERLAY</text>
  
  <!-- Ingestion Sources -->
  <g transform="translate(50, 55)">
    <rect width="80" height="35" rx="6" fill="url(#dataGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
    <text x="40" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="600">Threat Intel</text>
    <text x="40" y="27" text-anchor="middle" fill="#93C5FD" font-size="8">Live Feeds</text>
    <circle cx="15" cy="28" r="2" fill="#10B981" class="animated-pulse"/>
  </g>
  
  <g transform="translate(150, 55)">
    <rect width="80" height="35" rx="6" fill="url(#dataGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
    <text x="40" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="600">Network Logs</text>
    <text x="40" y="27" text-anchor="middle" fill="#93C5FD" font-size="8">PCAP/Flow</text>
    <circle cx="15" cy="28" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
  </g>
  
  <g transform="translate(250, 55)">
    <rect width="80" height="35" rx="6" fill="url(#dataGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
    <text x="40" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="600">Endpoint Data</text>
    <text x="40" y="27" text-anchor="middle" fill="#93C5FD" font-size="8">EDR/XDR</text>
    <circle cx="15" cy="28" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.6s"/>
  </g>

  <!-- Encryption Gateway -->
  <g transform="translate(380, 55)">
    <rect width="90" height="35" rx="6" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#gpuGlow)" class="animated-glow"/>
    <text x="45" y="15" text-anchor="middle" fill="#FCA5A5" font-size="10" font-weight="bold">🛡️ TLS 1.3</text>
    <text x="45" y="27" text-anchor="middle" fill="#F87171" font-size="8">Encryption</text>
    <circle cx="15" cy="28" r="2" fill="#EF4444" class="animated-pulse" style="animation-delay: 0.9s"/>
  </g>

  <!-- Status indicators -->
  <g transform="translate(680, 30)">
    <rect width="85" height="18" rx="9" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
    <text x="42.5" y="12" text-anchor="middle" fill="#10B981" font-size="9" font-weight="600">INGEST: 12.4GB/s</text>
  </g>
  <g transform="translate(680, 52)">
    <rect width="85" height="18" rx="9" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
    <text x="42.5" y="12" text-anchor="middle" fill="#A78BFA" font-size="9" font-weight="600">ENCRYPTED ✓</text>
  </g>

  <!-- GPU Training Cluster (Cloud) -->
  <g class="network-component">
    <rect x="20" y="120" width="380" height="170" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="12,6" class="animated-flow"/>
    <text x="30" y="145" fill="#A78BFA" font-size="15" font-weight="bold">⚡ CLOUD GPU TRAINING CLUSTER</text>
    
    <!-- GPU Node 1 -->
    <g transform="translate(40, 160)" class="animated-glow">
      <rect width="100" height="55" rx="8" fill="url(#gpuGradient)" stroke="#8B5CF6" stroke-width="3" filter="url(#gpuGlow)"/>
      <text x="50" y="15" text-anchor="middle" fill="#C4B5FD" font-size="11" font-weight="bold">GPU Node 1</text>
      <rect x="10" y="20" width="80" height="6" rx="3" fill="#8B5CF6" opacity="0.8"/>
      <rect x="10" y="28" width="80" height="5" rx="2" fill="#A78BFA" opacity="0.6"/>
      <rect x="10" y="35" width="80" height="4" rx="2" fill="#C4B5FD" opacity="0.4"/>
      <text x="50" y="48" text-anchor="middle" fill="#DDD6FE" font-size="8">8x A100 GPUs</text>
      <circle cx="20" cy="50" r="2" fill="#10B981" class="animated-pulse"/>
      <circle cx="50" cy="50" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="80" cy="50" r="2" fill="#EF4444" class="animated-pulse" style="animation-delay: 1s"/>
    </g>

    <!-- GPU Node 2 -->
    <g transform="translate(155, 160)" class="animated-glow" style="animation-delay: 0.5s">
      <rect width="100" height="55" rx="8" fill="url(#gpuGradient)" stroke="#8B5CF6" stroke-width="3" filter="url(#gpuGlow)"/>
      <text x="50" y="15" text-anchor="middle" fill="#C4B5FD" font-size="11" font-weight="bold">GPU Node 2</text>
      <rect x="10" y="20" width="80" height="6" rx="3" fill="#8B5CF6" opacity="0.8"/>
      <rect x="10" y="28" width="80" height="5" rx="2" fill="#A78BFA" opacity="0.6"/>
      <rect x="10" y="35" width="80" height="4" rx="2" fill="#C4B5FD" opacity="0.4"/>
      <text x="50" y="48" text-anchor="middle" fill="#DDD6FE" font-size="8">8x A100 GPUs</text>
      <circle cx="20" cy="50" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
      <circle cx="50" cy="50" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.8s"/>
      <circle cx="80" cy="50" r="2" fill="#EF4444" class="animated-pulse" style="animation-delay: 1.3s"/>
    </g>

    <!-- GPU Node 3 -->
    <g transform="translate(270, 160)" class="animated-glow" style="animation-delay: 1s">
      <rect width="100" height="55" rx="8" fill="url(#gpuGradient)" stroke="#8B5CF6" stroke-width="3" filter="url(#gpuGlow)"/>
      <text x="50" y="15" text-anchor="middle" fill="#C4B5FD" font-size="11" font-weight="bold">GPU Node 3</text>
      <rect x="10" y="20" width="80" height="6" rx="3" fill="#8B5CF6" opacity="0.8"/>
      <rect x="10" y="28" width="80" height="5" rx="2" fill="#A78BFA" opacity="0.6"/>
      <rect x="10" y="35" width="80" height="4" rx="2" fill="#C4B5FD" opacity="0.4"/>
      <text x="50" y="48" text-anchor="middle" fill="#DDD6FE" font-size="8">8x A100 GPUs</text>
      <circle cx="20" cy="50" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.6s"/>
      <circle cx="50" cy="50" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 1.1s"/>
      <circle cx="80" cy="50" r="2" fill="#EF4444" class="animated-pulse" style="animation-delay: 1.6s"/>
    </g>

    <!-- Training Orchestrator -->
    <g transform="translate(120, 230)">
      <rect width="140" height="45" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="70" y="15" text-anchor="middle" fill="#60A5FA" font-size="11" font-weight="bold">Training Orchestrator</text>
      <text x="70" y="28" text-anchor="middle" fill="#93C5FD" font-size="9">Distributed Training</text>
      <text x="70" y="38" text-anchor="middle" fill="#BFDBFE" font-size="8">PyTorch DDP</text>
    </g>
  </g>

  <!-- Model Repository & Versioning -->
  <g class="network-component">
    <rect x="420" y="120" width="360" height="90" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="10,5"/>
    <text x="430" y="145" fill="#60A5FA" font-size="15" font-weight="bold">📦 MODEL REPOSITORY</text>
    
    <g transform="translate(440, 160)">
      <rect width="90" height="40" rx="6" fill="url(#dataGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="45" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="600">Threat Det</text>
      <text x="45" y="27" text-anchor="middle" fill="#93C5FD" font-size="8">v2.4.1</text>
      <circle cx="15" cy="33" r="2" fill="#10B981" class="animated-pulse"/>
    </g>

    <g transform="translate(545, 160)">
      <rect width="90" height="40" rx="6" fill="url(#dataGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="45" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="600">Anomaly Det</text>
      <text x="45" y="27" text-anchor="middle" fill="#93C5FD" font-size="8">v1.8.3</text>
      <circle cx="15" cy="33" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.5s"/>
    </g>

    <g transform="translate(650, 160)">
      <rect width="90" height="40" rx="6" fill="url(#dataGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="45" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="600">Malware Class</text>
      <text x="45" y="27" text-anchor="middle" fill="#93C5FD" font-size="8">v3.1.0</text>
      <circle cx="15" cy="33" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 1s"/>
    </g>
  </g>

  <!-- Isolated Model Serving Endpoints -->
  <g class="network-component">
    <rect x="420" y="230" width="360" height="140" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-flow"/>
    <text x="430" y="255" fill="#34D399" font-size="15" font-weight="bold">🎯 ISOLATED SERVING ENDPOINTS</text>
    
    <!-- Endpoint 1 -->
    <g transform="translate(440, 270)">
      <rect width="100" height="50" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="50" y="15" text-anchor="middle" fill="#34D399" font-size="10" font-weight="bold">Endpoint A</text>
      <text x="50" y="27" text-anchor="middle" fill="#6EE7B7" font-size="8">Real-time Inference</text>
      <rect x="10" y="32" width="80" height="8" rx="4" fill="rgba(16, 185, 129, 0.3)"/>
      <rect x="10" y="32" width="60" height="8" rx="4" fill="#10B981" class="animated-flow"/>
      <text x="50" y="46" text-anchor="middle" fill="#A7F3D0" font-size="7">GPU: 94%</text>
    </g>

    <!-- Endpoint 2 -->
    <g transform="translate(555, 270)">
      <rect width="100" height="50" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="50" y="15" text-anchor="middle" fill="#34D399" font-size="10" font-weight="bold">Endpoint B</text>
      <text x="50" y="27" text-anchor="middle" fill="#6EE7B7" font-size="8">Batch Processing</text>
      <rect x="10" y="32" width="80" height="8" rx="4" fill="rgba(16, 185, 129, 0.3)"/>
      <rect x="10" y="32" width="52" height="8" rx="4" fill="#10B981" class="animated-flow"/>
      <text x="50" y="46" text-anchor="middle" fill="#A7F3D0" font-size="7">GPU: 78%</text>
    </g>

    <!-- Endpoint 3 -->
    <g transform="translate(670, 270)">
      <rect width="100" height="50" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="50" y="15" text-anchor="middle" fill="#34D399" font-size="10" font-weight="bold">Endpoint C</text>
      <text x="50" y="27" text-anchor="middle" fill="#6EE7B7" font-size="8">API Gateway</text>
      <rect x="10" y="32" width="80" height="8" rx="4" fill="rgba(16, 185, 129, 0.3)"/>
      <rect x="10" y="32" width="68" height="8" rx="4" fill="#10B981" class="animated-flow"/>
      <text x="50" y="46" text-anchor="middle" fill="#A7F3D0" font-size="7">GPU: 89%</text>
    </g>

    <!-- Load Balancer -->
    <g transform="translate(520, 330)">
      <rect width="120" height="30" rx="6" fill="url(#dataGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="60" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">Load Balancer</text>
      <text x="60" y="25" text-anchor="middle" fill="#93C5FD" font-size="8">Auto-scaling ✓</text>
    </g>
  </g>

  <!-- On-Premise Hybrid Integration -->
  <g class="network-component">
    <rect x="20" y="310" width="380" height="130" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6,3"/>
    <text x="30" y="335" fill="#FBBF24" font-size="15" font-weight="bold">🏢 ON-PREMISE HYBRID NODE</text>
    
    <!-- Edge GPU -->
    <g transform="translate(40, 350)">
      <rect width="110" height="60" rx="8" fill="url(#gpuGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="55" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Edge GPU</text>
      <text x="55" y="27" text-anchor="middle" fill="#DDD6FE" font-size="9">T4 Tensor Core</text>
      <rect x="10" y="32" width="90" height="6" rx="3" fill="#8B5CF6" opacity="0.6"/>
      <rect x="10" y="40" width="90" height="5" rx="2" fill="#A78BFA" opacity="0.4"/>
      <text x="55" y="54" text-anchor="middle" fill="#E9D5FF" font-size="8">Local Inference</text>
    </g>

    <!-- Data Cache -->
    <g transform="translate(165, 350)">
      <rect width="110" height="60" rx="8" fill="url(#dataGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="55" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">Data Cache</text>
      <text x="55" y="27" text-anchor="middle" fill="#93C5FD" font-size="9">Redis + S3</text>
      <rect x="15" y="32" width="25" height="20" rx="3" fill="#3B82F6" opacity="0.6"/>
      <rect x="45" y="32" width="25" height="20" rx="3" fill="#60A5FA" opacity="0.5"/>
      <rect x="75" y="32" width="25" height="20" rx="3" fill="#93C5FD" opacity="0.4"/>
      <text x="55" y="60" text-anchor="middle" fill="#BFDBFE" font-size="7">Hot: 2.4TB</text>
    </g>

    <!-- Sync Manager -->
    <g transform="translate(290, 350)">
      <rect width="95" height="60" rx="8" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="47.5" y="15" text-anchor="middle" fill="#FCA5A5" font-size="10" font-weight="bold">Sync Manager</text>
      <text x="47.5" y="27" text-anchor="middle" fill="#F87171" font-size="8">Cloud ↔ Edge</text>
      <circle cx="47.5" cy="40" r="8" fill="none" stroke="#EF4444" stroke-width="2" class="animated-rotate"/>
      <circle cx="47.5" cy="40" r="3" fill="#EF4444"/>
      <text x="47.5" y="58" text-anchor="middle" fill="#FCA5A5" font-size="7">VPN Tunnel</text>
    </g>
  </g>

  <!-- Security & Monitoring Layer -->
  <g class="network-component">
    <rect x="20" y="460" width="760" height="35" rx="8" fill="rgba(239, 68, 68, 0.1)" stroke="#EF4444" stroke-width="2" stroke-dasharray="4,2"/>
    <text x="30" y="480" fill="#FCA5A5" font-size="13" font-weight="bold">🔒 SECURITY & MONITORING</text>
    
    <g transform="translate(250, 467)">
      <rect width="80" height="22" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
      <text x="40" y="14" text-anchor="middle" fill="#FCA5A5" font-size="9">Zero Trust</text>
    </g>
    
    <g transform="translate(345, 467)">
      <rect width="90" height="22" rx="4" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
      <text x="45" y="14" text-anchor="middle" fill="#6EE7B7" font-size="9">mTLS Auth</text>
    </g>
    
    <g transform="translate(450, 467)">
      <rect width="85" height="22" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
      <text x="42.5" y="14" text-anchor="middle" fill="#93C5FD" font-size="9">Audit Logs</text>
    </g>
    
    <g transform="translate(550, 467)">
      <rect width="95" height="22" rx="4" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
      <text x="47.5" y="14" text-anchor="middle" fill="#C4B5FD" font-size="9">ML Telemetry</text>
    </g>
    
    <g transform="translate(660, 467)">
      <rect width="90" height="22" rx="4" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
      <text x="45" y="14" text-anchor="middle" fill="#FBBF24" font-size="9">Prometheus</text>
    </g>
  </g>

  <!-- Network Connections -->
  <g class="network-connections">
    <!-- Data ingestion to GPU cluster -->
    <path d="M90 90 L90 160" stroke="#60A5FA" stroke-width="3" marker-end="url(#dataFlow)" class="animated-flow"/>
    <path d="M190 90 L190 160" stroke="#60A5FA" stroke-width="3" marker-end="url(#dataFlow)" class="animated-flow" style="animation-delay: 0.3s"/>
    <path d="M290 90 L290 160" stroke="#60A5FA" stroke-width="3" marker-end="url(#dataFlow)" class="animated-flow" style="animation-delay: 0.6s"/>
    
    <!-- GPU cluster to model repo -->
    <path d="M200 190 Q310 150 485 180" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="8,4" marker-en
        `;
        title = 'Hybrid Cloud GPU Cluster + Encrypted Ingest Overlay';
        description = 'GPU-accelerated training in isolated subnets with an encrypted ingest overlay, secure data lake, model registry, signed artifacts, and isolated model-serving endpoints with canary rollouts.';
        break;


      /* ---------------------------- D-SOC TOPOLOGY ---------------------------- */
      /* ---------------------------- dSOC (robust) ---------------------------- */
      case 'dsoc':
        svgContent = `
      <svg viewBox="0 0 800 500" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="networkShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="blockchainGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <marker id="secureFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#blockchainGlow)"/>
    </marker>
    <marker id="meshFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#8B5CF6" filter="url(#blockchainGlow)"/>
    </marker>
    <marker id="blockchainFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#blockchainGlow)"/>
    </marker>
    <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
      <circle cx="0" cy="0" r="0.5" fill="#60A5FA" opacity="0.2"/>
    </pattern>
    <linearGradient id="socGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(59, 130, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(59, 130, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="blockchainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(245, 158, 11, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(245, 158, 11, 0.2)"/>
    </linearGradient>
    <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
    </linearGradient>
    <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(139, 92, 246, 0.2)"/>
    </linearGradient>
    
    <style>
      @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes flow {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -40; }
      }
      @keyframes blockMove {
        0% { transform: translateX(0); }
        100% { transform: translateX(20px); }
      }
      @keyframes glow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.5); }
      }
      .animated-pulse { animation: pulse 2s ease-in-out infinite; }
      .animated-rotate { animation: rotate 10s linear infinite; transform-origin: center; }
      .animated-flow { animation: flow 2s linear infinite; }
      .animated-glow { animation: glow 3s ease-in-out infinite; }
      .animated-block { animation: blockMove 3s ease-in-out infinite alternate; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#0F172A"/>
  <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

  <!-- Floating security particles -->
  <g opacity="0.6">
    <circle cx="100" cy="80" r="2" fill="#10B981" class="animated-pulse"/>
    <circle cx="700" cy="120" r="1.5" fill="#8B5CF6" class="animated-pulse" style="animation-delay: 0.5s"/>
    <circle cx="400" cy="250" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 1s"/>
    <circle cx="200" cy="400" r="1" fill="#EF4444" class="animated-pulse" style="animation-delay: 1.5s"/>
  </g>

  <!-- Blockchain Audit Trail Header -->
  <rect x="20" y="20" width="760" height="70" rx="12" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="40" y="45" fill="#F59E0B" font-size="18" font-weight="bold">⛓️</text>
  <text x="90" y="45" fill="#FBBF24" font-size="15" font-weight="bold">BLOCKCHAIN AUDIT TRAIL</text>
  <text x="90" y="65" fill="#FCD34D" font-size="11" font-weight="500">Immutable Log Chain - Distributed Consensus</text>
  
  <!-- Blockchain blocks -->
  <g transform="translate(450, 35)">
    <rect width="50" height="35" rx="6" fill="url(#blockchainGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)" class="animated-block"/>
    <text x="25" y="15" text-anchor="middle" fill="#FBBF24" font-size="9" font-weight="bold">Block N</text>
    <text x="25" y="27" text-anchor="middle" fill="#FCD34D" font-size="7">Hash: 0x4a8...</text>
    <circle cx="10" cy="30" r="2" fill="#10B981" class="animated-pulse"/>
  </g>
  
  <g transform="translate(515, 35)">
    <rect width="50" height="35" rx="6" fill="url(#blockchainGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)" class="animated-block" style="animation-delay: 0.5s"/>
    <text x="25" y="15" text-anchor="middle" fill="#FBBF24" font-size="9" font-weight="bold">Block N+1</text>
    <text x="25" y="27" text-anchor="middle" fill="#FCD34D" font-size="7">Hash: 0x7b3...</text>
    <circle cx="10" cy="30" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
  </g>
  
  <g transform="translate(580, 35)">
    <rect width="50" height="35" rx="6" fill="url(#blockchainGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)" class="animated-block" style="animation-delay: 1s"/>
    <text x="25" y="15" text-anchor="middle" fill="#FBBF24" font-size="9" font-weight="bold">Block N+2</text>
    <text x="25" y="27" text-anchor="middle" fill="#FCD34D" font-size="7">Hash: 0x9e5...</text>
    <circle cx="10" cy="30" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.6s"/>
  </g>

  <!-- Status indicators -->
  <g transform="translate(680, 35)">
    <rect width="85" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
    <text x="42.5" y="10" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">CONSENSUS: ✓</text>
  </g>
  <g transform="translate(680, 55)">
    <rect width="85" height="15" rx="7" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
    <text x="42.5" y="10" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">NODES: 5/5</text>
  </g>

  <!-- SOC Node 1 (North America) -->
  <g class="network-component">
    <rect x="50" y="120" width="180" height="130" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-flow"/>
    <text x="60" y="145" fill="#60A5FA" font-size="14" font-weight="bold">🏢 SOC NODE 1</text>
    <text x="60" y="161" fill="#93C5FD" font-size="10" font-weight="500">North America</text>
    
    <!-- SIEM Component -->
    <g transform="translate(65, 175)">
      <rect width="70" height="45" rx="8" fill="url(#socGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow"/>
      <text x="35" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">SIEM</text>
      <rect x="10" y="20" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
      <rect x="10" y="26" width="50" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
      <rect x="10" y="31" width="50" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
      <circle cx="18" cy="38" r="2" fill="#10B981" class="animated-pulse"/>
      <text x="35" y="43" text-anchor="middle" fill="#BFDBFE" font-size="7">Active</text>
    </g>

    <!-- Threat Intel -->
    <g transform="translate(145, 175)">
      <rect width="70" height="45" rx="8" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="35" y="15" text-anchor="middle" fill="#FCA5A5" font-size="10" font-weight="bold">Threat Intel</text>
      <rect x="10" y="20" width="50" height="4" rx="2" fill="#EF4444" opacity="0.8"/>
      <rect x="10" y="26" width="50" height="3" rx="1" fill="#F87171" opacity="0.6"/>
      <rect x="10" y="31" width="50" height="3" rx="1" fill="#FCA5A5" opacity="0.4"/>
      <circle cx="18" cy="38" r="2" fill="#F59E0B" class="animated-pulse"/>
      <text x="35" y="43" text-anchor="middle" fill="#FCA5A5" font-size="7">Feeds: 247</text>
    </g>

    <!-- Mesh Endpoint -->
    <g transform="translate(95, 230)">
      <circle cx="20" cy="10" r="12" fill="url(#meshGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#blockchainGlow)" class="animated-rotate"/>
      <circle cx="20" cy="10" r="6" fill="#8B5CF6" opacity="0.8"/>
      <circle cx="20" cy="10" r="3" fill="#A78BFA"/>
      <text x="45" y="14" fill="#C4B5FD" font-size="9" font-weight="600">Mesh Endpoint</text>
    </g>
  </g>

  <!-- SOC Node 2 (Europe) -->
  <g class="network-component">
    <rect x="570" y="120" width="180" height="130" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-flow" style="animation-delay: 0.5s"/>
    <text x="580" y="145" fill="#60A5FA" font-size="14" font-weight="bold">🏢 SOC NODE 2</text>
    <text x="580" y="161" fill="#93C5FD" font-size="10" font-weight="500">Europe</text>
    
    <!-- SIEM Component -->
    <g transform="translate(585, 175)">
      <rect width="70" height="45" rx="8" fill="url(#socGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 0.5s"/>
      <text x="35" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">SIEM</text>
      <rect x="10" y="20" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
      <rect x="10" y="26" width="50" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
      <rect x="10" y="31" width="50" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
      <circle cx="18" cy="38" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
      <text x="35" y="43" text-anchor="middle" fill="#BFDBFE" font-size="7">Active</text>
    </g>

    <!-- Threat Intel -->
    <g transform="translate(665, 175)">
      <rect width="70" height="45" rx="8" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="35" y="15" text-anchor="middle" fill="#FCA5A5" font-size="10" font-weight="bold">Threat Intel</text>
      <rect x="10" y="20" width="50" height="4" rx="2" fill="#EF4444" opacity="0.8"/>
      <rect x="10" y="26" width="50" height="3" rx="1" fill="#F87171" opacity="0.6"/>
      <rect x="10" y="31" width="50" height="3" rx="1" fill="#FCA5A5" opacity="0.4"/>
      <circle cx="18" cy="38" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <text x="35" y="43" text-anchor="middle" fill="#FCA5A5" font-size="7">Feeds: 198</text>
    </g>

    <!-- Mesh Endpoint -->
    <g transform="translate(635, 230)">
      <circle cx="20" cy="10" r="12" fill="url(#meshGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#blockchainGlow)" class="animated-rotate"/>
      <circle cx="20" cy="10" r="6" fill="#8B5CF6" opacity="0.8"/>
      <circle cx="20" cy="10" r="3" fill="#A78BFA"/>
      <text x="-30" y="14" fill="#C4B5FD" font-size="9" font-weight="600">Mesh Endpoint</text>
    </g>
  </g>

  <!-- SOC Node 3 (Asia Pacific) -->
  <g class="network-component">
    <rect x="50" y="280" width="180" height="130" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-flow" style="animation-delay: 1s"/>
    <text x="60" y="305" fill="#60A5FA" font-size="14" font-weight="bold">🏢 SOC NODE 3</text>
    <text x="60" y="321" fill="#93C5FD" font-size="10" font-weight="500">Asia Pacific</text>
    
    <!-- SIEM Component -->
    <g transform="translate(65, 335)">
      <rect width="70" height="45" rx="8" fill="url(#socGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 1s"/>
      <text x="35" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">SIEM</text>
      <rect x="10" y="20" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
      <rect x="10" y="26" width="50" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
      <rect x="10" y="31" width="50" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
      <circle cx="18" cy="38" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.6s"/>
      <text x="35" y="43" text-anchor="middle" fill="#BFDBFE" font-size="7">Active</text>
    </g>

    <!-- Threat Intel -->
    <g transform="translate(145, 335)">
      <rect width="70" height="45" rx="8" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="35" y="15" text-anchor="middle" fill="#FCA5A5" font-size="10" font-weight="bold">Threat Intel</text>
      <rect x="10" y="20" width="50" height="4" rx="2" fill="#EF4444" opacity="0.8"/>
      <rect x="10" y="26" width="50" height="3" rx="1" fill="#F87171" opacity="0.6"/>
      <rect x="10" y="31" width="50" height="3" rx="1" fill="#FCA5A5" opacity="0.4"/>
      <circle cx="18" cy="38" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.8s"/>
      <text x="35" y="43" text-anchor="middle" fill="#FCA5A5" font-size="7">Feeds: 312</text>
    </g>

    <!-- Mesh Endpoint -->
    <g transform="translate(95, 390)">
      <circle cx="20" cy="10" r="12" fill="url(#meshGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#blockchainGlow)" class="animated-rotate"/>
      <circle cx="20" cy="10" r="6" fill="#8B5CF6" opacity="0.8"/>
      <circle cx="20" cy="10" r="3" fill="#A78BFA"/>
      <text x="45" y="14" fill="#C4B5FD" font-size="9" font-weight="600">Mesh Endpoint</text>
    </g>
  </g>

  <!-- SOC Node 4 (Middle East) -->
  <g class="network-component">
    <rect x="570" y="280" width="180" height="130" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-flow" style="animation-delay: 1.5s"/>
    <text x="580" y="305" fill="#60A5FA" font-size="14" font-weight="bold">🏢 SOC NODE 4</text>
    <text x="580" y="321" fill="#93C5FD" font-size="10" font-weight="500">Middle East</text>
    
    <!-- SIEM Component -->
    <g transform="translate(585, 335)">
      <rect width="70" height="45" rx="8" fill="url(#socGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 1.5s"/>
      <text x="35" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">SIEM</text>
      <rect x="10" y="20" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
      <rect x="10" y="26" width="50" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
      <rect x="10" y="31" width="50" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
      <circle cx="18" cy="38" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.9s"/>
      <text x="35" y="43" text-anchor="middle" fill="#BFDBFE" font-size="7">Active</text>
    </g>

    <!-- Threat Intel -->
    <g transform="translate(665, 335)">
      <rect width="70" height="45" rx="8" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="35" y="15" text-anchor="middle" fill="#FCA5A5" font-size="10" font-weight="bold">Threat Intel</text>
      <rect x="10" y="20" width="50" height="4" rx="2" fill="#EF4444" opacity="0.8"/>
      <rect x="10" y="26" width="50" height="3" rx="1" fill="#F87171" opacity="0.6"/>
      <rect x="10" y="31" width="50" height="3" rx="1" fill="#FCA5A5" opacity="0.4"/>
      <circle cx="18" cy="38" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 1.1s"/>
      <text x="35" y="43" text-anchor="middle" fill="#FCA5A5" font-size="7">Feeds: 178</text>
    </g>

    <!-- Mesh Endpoint -->
    <g transform="translate(635, 390)">
      <circle cx="20" cy="10" r="12" fill="url(#meshGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#blockchainGlow)" class="animated-rotate"/>
      <circle cx="20" cy="10" r="6" fill="#8B5CF6" opacity="0.8"/>
      <circle cx="20" cy="10" r="3" fill="#A78BFA"/>
      <text x="-30" y="14" fill="#C4B5FD" font-size="9" font-weight="600">Mesh Endpoint</text>
    </g>
  </g>

  <!-- Central Mesh Coordinator -->
  <g class="network-component">
    <rect x="280" y="210" width="240" height="110" rx="12" fill="rgba(139, 92, 246, 0.12)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="10,5" class="animated-flow"/>
    <text x="290" y="235" fill="#A78BFA" font-size="15" font-weight="bold">🔗 MESH COORDINATOR</text>
    <text x="290" y="252" fill="#C4B5FD" font-size="10" font-weight="500">Federated Security Operations</text>
    
    <!-- Coordinator Components -->
    <g transform="translate(295, 265)">
      <rect width="100" height="40" rx="8" fill="url(#meshGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#blockchainGlow)" class="animated-glow"/>
      <text x="50" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">P2P Router</text>
      <text x="50" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Multi-Party Compute</text>
      <circle cx="20" cy="33" r="2" fill="#10B981" class="animated-pulse"/>
      <circle cx="50" cy="33" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="80" cy="33" r="2" fill="#EF4444" class="animated-pulse" style="animation-delay: 1s"/>
    </g>

    <g transform="translate(405, 265)">
      <rect width="100" height="40" rx="8" fill="url(#blockchainGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#blockchainGlow)"/>
      <text x="50" y="15" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="bold">Smart Contract</text>
      <text x="50" y="28" text-anchor="middle" fill="#FCD34D" font-size="8">Log Validation</text>
      <circle cx="20" cy="33" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
      <circle cx="50" cy="33" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.8s"/>
      <circle cx="80" cy="33" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 1.3s"/>
    </g>
  </g>

  <!-- SOC Node 5 (Latin America) - Bottom Center -->
  <g class="network-component">
    <rect x="310" y="350" width="180" height="110" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-flow" style="animation-delay: 2s"/>
    <text x="320" y="375" fill="#60A5FA" font-size="14" font-weight="bold">🏢 SOC NODE 5</text>
    <text x="320" y="391" fill="#93C5FD" font-size="10" font-weight="500">Latin America</text>
    
    <!-- SIEM Component -->
    <g transform="translate(325, 405)">
      <rect width="70" height="40" rx="8" fill="url(#socGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 2s"/>
      <text x="35" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">SIEM</text>
      <rect x="10" y="20" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.8"/>
      <rect x="10" y="26" width="50" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
      <circle cx="18" cy="33" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 1.2s"/>
      <text x="35" y="38" text-anchor="middle" fill="#BFDBFE" font-size="7">Active</text>
    </g>

    <!-- Threat Intel -->
    <g transform="translate(405, 405)">
      <rect width="70" height="40" rx="8" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url
        `;
        title = 'Secure Multi-Party Mesh + Blockchain Audit Trail';
        description = 'Federated mesh connecting participating SOC nodes over encrypted tunnels with a permissioned blockchain-anchored immutable audit trail and a selective disclosure gateway for privacy-preserving sharing.';
        break;


      /* ----------------------- AI THREAT HUNTING TOPOLOGY ---------------------- */
      /* ----------------------- AI THREAT HUNTING (robust, production-ready) ----------------------- */
      case 'ai-threat-hunting':
        svgContent = `
      <svg viewBox="0 0 800 500" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="networkShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="dataGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <marker id="dataFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#60A5FA" filter="url(#dataGlow)"/>
    </marker>
    <marker id="analyticsFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#8B5CF6" filter="url(#dataGlow)"/>
    </marker>
    <marker id="secureFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#dataGlow)"/>
    </marker>
    <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
      <circle cx="0" cy="0" r="0.5" fill="#60A5FA" opacity="0.2"/>
    </pattern>
    <linearGradient id="ingestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(59, 130, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(59, 130, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="analyticsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(139, 92, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="lakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(16, 185, 129, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(16, 185, 129, 0.2)"/>
    </linearGradient>
    <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
    </linearGradient>
    
    <style>
      @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      @keyframes flow {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -40; }
      }
      @keyframes dataStream {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(20px); opacity: 0; }
      }
      @keyframes glow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.5); }
      }
      .animated-pulse { animation: pulse 2s ease-in-out infinite; }
      .animated-flow { animation: flow 2s linear infinite; }
      .animated-stream { animation: dataStream 3s ease-in-out infinite; }
      .animated-glow { animation: glow 3s ease-in-out infinite; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#0F172A"/>
  <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

  <!-- Floating data particles -->
  <g opacity="0.6">
    <circle cx="120" cy="80" r="2" fill="#60A5FA" class="animated-pulse"/>
    <circle cx="680" cy="120" r="1.5" fill="#10B981" class="animated-pulse" style="animation-delay: 0.5s"/>
    <circle cx="400" cy="250" r="2" fill="#8B5CF6" class="animated-pulse" style="animation-delay: 1s"/>
    <circle cx="200" cy="400" r="1" fill="#F59E0B" class="animated-pulse" style="animation-delay: 1.5s"/>
  </g>

  <!-- High-Volume Telemetry Ingest Pipeline -->
  <rect x="20" y="20" width="760" height="90" rx="12" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="40" y="45" fill="#60A5FA" font-size="18" font-weight="bold">📡</text>
  <text x="90" y="45" fill="#60A5FA" font-size="15" font-weight="bold">HIGH-VOLUME TELEMETRY INGEST PIPELINE</text>
  <text x="90" y="65" fill="#93C5FD" font-size="11" font-weight="500">Real-time Streaming | Multi-Protocol Support</text>
  
  <!-- Ingest Sources -->
  <g transform="translate(50, 75)">
    <rect width="90" height="28" rx="6" fill="url(#ingestGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
    <text x="45" y="14" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="600">Network Flow</text>
    <text x="45" y="23" text-anchor="middle" fill="#93C5FD" font-size="7">NetFlow/sFlow</text>
    <circle cx="15" cy="22" r="2" fill="#10B981" class="animated-pulse"/>
  </g>
  
  <g transform="translate(155, 75)">
    <rect width="90" height="28" rx="6" fill="url(#ingestGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
    <text x="45" y="14" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="600">Endpoint Logs</text>
    <text x="45" y="23" text-anchor="middle" fill="#93C5FD" font-size="7">Syslog/WinEvent</text>
    <circle cx="15" cy="22" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
  </g>
  
  <g transform="translate(260, 75)">
    <rect width="90" height="28" rx="6" fill="url(#ingestGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
    <text x="45" y="14" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="600">Cloud Audit</text>
    <text x="45" y="23" text-anchor="middle" fill="#93C5FD" font-size="7">AWS/Azure/GCP</text>
    <circle cx="15" cy="22" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.6s"/>
  </g>

  <g transform="translate(365, 75)">
    <rect width="90" height="28" rx="6" fill="url(#ingestGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
    <text x="45" y="14" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="600">Threat Intel</text>
    <text x="45" y="23" text-anchor="middle" fill="#93C5FD" font-size="7">STIX/TAXII</text>
    <circle cx="15" cy="22" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.9s"/>
  </g>

  <!-- Stream Processing -->
  <g transform="translate(470, 75)">
    <rect width="110" height="28" rx="6" fill="url(#analyticsGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#dataGlow)" class="animated-glow"/>
    <text x="55" y="14" text-anchor="middle" fill="#A78BFA" font-size="9" font-weight="bold">Stream Processor</text>
    <text x="55" y="23" text-anchor="middle" fill="#C4B5FD" font-size="7">Kafka/Flink</text>
    <circle cx="20" cy="22" r="2" fill="#8B5CF6" class="animated-pulse" style="animation-delay: 1.2s"/>
  </g>

  <!-- Ingest Metrics -->
  <g transform="translate(595, 35)">
    <rect width="85" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
    <text x="42.5" y="10" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">INGEST: 45TB/day</text>
  </g>
  <g transform="translate(595, 55)">
    <rect width="85" height="15" rx="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
    <text x="42.5" y="10" text-anchor="middle" fill="#60A5FA" font-size="8" font-weight="600">RATE: 2.4M/sec</text>
  </g>
  <g transform="translate(595, 75)">
    <rect width="85" height="15" rx="7" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
    <text x="42.5" y="10" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="600">SOURCES: 4.2K</text>
  </g>

  <!-- Segregated Data Lake -->
  <g class="network-component">
    <rect x="20" y="130" width="500" height="180" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="12,6" class="animated-flow"/>
    <text x="30" y="155" fill="#34D399" font-size="15" font-weight="bold">🗄️ SEGREGATED DATA LAKE</text>
    <text x="30" y="172" fill="#6EE7B7" font-size="10" font-weight="500">Multi-Tier Storage Architecture</text>
    
    <!-- Hot Tier -->
    <g transform="translate(35, 185)">
      <rect width="145" height="105" rx="8" fill="rgba(239, 68, 68, 0.1)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="72.5" y="18" text-anchor="middle" fill="#FCA5A5" font-size="11" font-weight="bold">HOT TIER</text>
      <text x="72.5" y="31" text-anchor="middle" fill="#F87171" font-size="8">Last 30 Days</text>
      
      <rect x="10" y="40" width="125" height="20" rx="4" fill="url(#ingestGradient)" stroke="#3B82F6" stroke-width="1"/>
      <text x="72.5" y="53" text-anchor="middle" fill="#60A5FA" font-size="9">Raw Logs: 8.2TB</text>
      
      <rect x="10" y="65" width="125" height="20" rx="4" fill="url(#ingestGradient)" stroke="#3B82F6" stroke-width="1"/>
      <text x="72.5" y="78" text-anchor="middle" fill="#60A5FA" font-size="9">Indexed: 4.1TB</text>
      
      <circle cx="20" cy="95" r="2" fill="#10B981" class="animated-pulse"/>
      <circle cx="40" cy="95" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="60" cy="95" r="2" fill="#EF4444" class="animated-pulse" style="animation-delay: 1s"/>
    </g>

    <!-- Warm Tier -->
    <g transform="translate(195, 185)">
      <rect width="145" height="105" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="72.5" y="18" text-anchor="middle" fill="#FBBF24" font-size="11" font-weight="bold">WARM TIER</text>
      <text x="72.5" y="31" text-anchor="middle" fill="#FCD34D" font-size="8">31-365 Days</text>
      
      <rect x="10" y="40" width="125" height="20" rx="4" fill="url(#ingestGradient)" stroke="#3B82F6" stroke-width="1"/>
      <text x="72.5" y="53" text-anchor="middle" fill="#60A5FA" font-size="9">Compressed: 24TB</text>
      
      <rect x="10" y="65" width="125" height="20" rx="4" fill="url(#ingestGradient)" stroke="#3B82F6" stroke-width="1"/>
      <text x="72.5" y="78" text-anchor="middle" fill="#60A5FA" font-size="9">Aggregated: 6TB</text>
      
      <circle cx="20" cy="95" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
      <circle cx="40" cy="95" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.8s"/>
      <circle cx="60" cy="95" r="2" fill="#3B82F6" class="animated-pulse" style="animation-delay: 1.3s"/>
    </g>

    <!-- Cold Tier -->
    <g transform="translate(355, 185)">
      <rect width="145" height="105" rx="8" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="72.5" y="18" text-anchor="middle" fill="#60A5FA" font-size="11" font-weight="bold">COLD TIER</text>
      <text x="72.5" y="31" text-anchor="middle" fill="#93C5FD" font-size="8">365+ Days Archive</text>
      
      <rect x="10" y="40" width="125" height="20" rx="4" fill="url(#lakeGradient)" stroke="#10B981" stroke-width="1"/>
      <text x="72.5" y="53" text-anchor="middle" fill="#34D399" font-size="9">Archive: 180TB</text>
      
      <rect x="10" y="65" width="125" height="20" rx="4" fill="url(#lakeGradient)" stroke="#10B981" stroke-width="1"/>
      <text x="72.5" y="78" text-anchor="middle" fill="#34D399" font-size="9">Glacier: 420TB</text>
      
      <circle cx="20" cy="95" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.6s"/>
      <circle cx="40" cy="95" r="2" fill="#3B82F6" class="animated-pulse" style="animation-delay: 1.1s"/>
      <circle cx="60" cy="95" r="2" fill="#8B5CF6" class="animated-pulse" style="animation-delay: 1.6s"/>
    </g>
  </g>

  <!-- Analytics Cluster (Private Subnet) -->
  <g class="network-component">
    <rect x="540" y="130" width="240" height="180" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="10,5" class="animated-flow"/>
    <text x="550" y="155" fill="#A78BFA" font-size="15" font-weight="bold">⚡ ANALYTICS CLUSTER</text>
    <text x="550" y="172" fill="#C4B5FD" font-size="10" font-weight="500">Private Subnet | Isolated Compute</text>
    
    <!-- Spark Cluster -->
    <g transform="translate(555, 185)">
      <rect width="105" height="50" rx="8" fill="url(#analyticsGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#dataGlow)" class="animated-glow"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Spark Cluster</text>
      <text x="52.5" y="27" text-anchor="middle" fill="#DDD6FE" font-size="8">12 Worker Nodes</text>
      <rect x="10" y="32" width="85" height="6" rx="3" fill="#8B5CF6" opacity="0.8"/>
      <rect x="10" y="32" width="68" height="6" rx="3" fill="#A78BFA" class="animated-flow"/>
      <text x="52.5" y="45" text-anchor="middle" fill="#E9D5FF" font-size="7">CPU: 87%</text>
    </g>

    <!-- ML Pipeline -->
    <g transform="translate(670, 185)">
      <rect width="95" height="50" rx="8" fill="url(#analyticsGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#dataGlow)" class="animated-glow" style="animation-delay: 0.5s"/>
      <text x="47.5" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">ML Pipeline</text>
      <text x="47.5" y="27" text-anchor="middle" fill="#DDD6FE" font-size="8">TensorFlow</text>
      <rect x="10" y="32" width="75" height="6" rx="3" fill="#8B5CF6" opacity="0.8"/>
      <rect x="10" y="32" width="55" height="6" rx="3" fill="#A78BFA" class="animated-flow"/>
      <text x="47.5" y="45" text-anchor="middle" fill="#E9D5FF" font-size="7">GPU: 94%</text>
    </g>

    <!-- Query Engine -->
    <g transform="translate(555, 245)">
      <rect width="105" height="50" rx="8" fill="url(#ingestGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">Query Engine</text>
      <text x="52.5" y="27" text-anchor="middle" fill="#93C5FD" font-size="8">Presto/Trino</text>
      <circle cx="20" cy="38" r="2" fill="#10B981" class="animated-pulse"/>
      <circle cx="52.5" cy="38" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="85" cy="38" r="2" fill="#EF4444" class="animated-pulse" style="animation-delay: 1s"/>
      <text x="52.5" y="48" text-anchor="middle" fill="#BFDBFE" font-size="7">Active Queries: 47</text>
    </g>

    <!-- Feature Store -->
    <g transform="translate(670, 245)">
      <rect width="95" height="50" rx="8" fill="url(#lakeGradient)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="47.5" y="15" text-anchor="middle" fill="#34D399" font-size="10" font-weight="bold">Feature Store</text>
      <text x="47.5" y="27" text-anchor="middle" fill="#6EE7B7" font-size="8">Feast/Tecton</text>
      <rect x="10" y="32" width="75" height="4" rx="2" fill="#10B981" opacity="0.6"/>
      <rect x="10" y="38" width="75" height="3" rx="1" fill="#34D399" opacity="0.4"/>
      <text x="47.5" y="48" text-anchor="middle" fill="#A7F3D0" font-size="7">Features: 2.4K</text>
    </g>
  </g>

  <!-- Interactive Investigation Bastion -->
  <g class="network-component">
    <rect x="20" y="330" width="500" height="150" rx="12" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" stroke-width="3" stroke-dasharray="6,3" class="animated-flow"/>
    <text x="30" y="355" fill="#FCA5A5" font-size="15" font-weight="bold">🔍 INTERACTIVE INVESTIGATION BASTION</text>
    <text x="30" y="372" fill="#F87171" font-size="10" font-weight="500">Secure Access | Isolated Workspace</text>
    
    <!-- Jupyter Environment -->
    <g transform="translate(35, 385)">
      <rect width="110" height="75" rx="8" fill="url(#analyticsGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow"/>
      <text x="55" y="18" text-anchor="middle" fill="#C4B5FD" font-size="11" font-weight="bold">Jupyter Lab</text>
      <text x="55" y="32" text-anchor="middle" fill="#DDD6FE" font-size="8">Python/R/Julia</text>
      <rect x="10" y="40" width="90" height="6" rx="3" fill="#8B5CF6" opacity="0.7"/>
      <rect x="10" y="48" width="90" height="5" rx="2" fill="#A78BFA" opacity="0.5"/>
      <rect x="10" y="55" width="90" height="4" rx="2" fill="#C4B5FD" opacity="0.3"/>
      <text x="55" y="68" text-anchor="middle" fill="#E9D5FF" font-size="7">Active Sessions: 12</text>
    </g>

    <!-- Threat Hunt Console -->
    <g transform="translate(160, 385)">
      <rect width="110" height="75" rx="8" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="55" y="18" text-anchor="middle" fill="#FCA5A5" font-size="11" font-weight="bold">Hunt Console</text>
      <text x="55" y="32" text-anchor="middle" fill="#F87171" font-size="8">MITRE ATT&CK</text>
      <circle cx="30" cy="48" r="8" fill="none" stroke="#EF4444" stroke-width="2"/>
      <circle cx="30" cy="48" r="3" fill="#EF4444"/>
      <circle cx="80" cy="48" r="8" fill="none" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="80" cy="48" r="3" fill="#F59E0B"/>
      <text x="55" y="68" text-anchor="middle" fill="#FCA5A5" font-size="7">Active Hunts: 8</text>
    </g>

    <!-- Visualization Studio -->
    <g transform="translate(285, 385)">
      <rect width="110" height="75" rx="8" fill="url(#ingestGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="55" y="18" text-anchor="middle" fill="#60A5FA" font-size="11" font-weight="bold">Viz Studio</text>
      <text x="55" y="32" text-anchor="middle" fill="#93C5FD" font-size="8">Kibana/Grafana</text>
      <rect x="15" y="40" width="20" height="25" rx="2" fill="#3B82F6" opacity="0.6"/>
      <rect x="40" y="40" width="30" height="25" rx="2" fill="#60A5FA" opacity="0.5"/>
      <rect x="75" y="40" width="20" height="25" rx="2" fill="#93C5FD" opacity="0.4"/>
      <text x="55" y="74" text-anchor="middle" fill="#BFDBFE" font-size="7">Dashboards: 24</text>
    </g>

    <!-- Secure Shell Access -->
    <g transform="translate(410, 385)">
      <rect width="95" height="75" rx="8" fill="url(#lakeGradient)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="47.5" y="18" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">SSH Bastion</text>
      <text x="47.5" y="32" text-anchor="middle" fill="#6EE7B7" font-size="8">MFA Required</text>
      <rect x="15" y="40" width="65" height="8" rx="4" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="1"/>
      <text x="47.5" y="46" text-anchor="middle" fill="#10B981" font-size="7">🔒 Secured</text>
      <circle cx="20" cy="58" r="2" fill="#10B981" class="animated-pulse"/>
      <circle cx="47.5" cy="58" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="75" cy="58" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 1s"/>
      <text x="47.5" y="71" text-anchor="middle" fill="#A7F3D0" font-size="7">Users Online: 6</text>
    </g>
  </g>

  <!-- Threat Detection Engine -->
  <g class="network-component">
    <rect x="540" y="330" width="240" height="70" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="8,4"/>
    <text x="550" y="355" fill="#FBBF24" font-size="15" font-weight="bold">🎯 THREAT DETECTION</text>
    <text x="550" y="372" fill="#FCD34D" font-size="10" font-weight="500">AI-Powered Pattern Recognition</text>
    
    <g transform="translate(555, 382)">
      <rect width="100" height="10" rx="5" fill="rgba(245, 158, 11, 0.3)"/>
      <rect width="78" height="10" rx="5" fill="#F59E0B" class="animated-flow"/>
      <text x="50" y="8" text-anchor="middle" fill="#0F172A" font-size="7" font-weight="bold">Anomaly Score: 78%</text>
    </g>
    
    <circle cx="680" cy="387
        `;
        title = 'Data Lake Ingest + Analytics Fabric (AI Threat Hunting)';
        description = 'High-throughput telemetry ingest into a versioned lakehouse, indexed hotstore and analytics fabric; investigator bastion with read-only notebooks and forensic workbench; immutable evidence store for chain-of-custody.';
        break;


      /* -------------------------- END OF UPDATED CASES ------------------------- */

      /* ----------------------- Tokenomics Simulator — Robust, Production-ready ----------------------- */
      case 'tokenomics-simulator':
        svgContent = `
      <svg viewBox="0 0 800 500" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="networkShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="sandboxGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <marker id="dataFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#60A5FA" filter="url(#sandboxGlow)"/>
    </marker>
    <marker id="tokenFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#sandboxGlow)"/>
    </marker>
    <marker id="secureFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#sandboxGlow)"/>
    </marker>
    <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
      <circle cx="0" cy="0" r="0.5" fill="#60A5FA" opacity="0.2"/>
    </pattern>
    <linearGradient id="sandboxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(139, 92, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="computeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(59, 130, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(59, 130, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="tokenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(245, 158, 11, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(245, 158, 11, 0.2)"/>
    </linearGradient>
    <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
    </linearGradient>
    
    <style>
      @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      @keyframes flow {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -40; }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes ephemeral {
        0% { opacity: 0.3; }
        50% { opacity: 1; }
        100% { opacity: 0.3; }
      }
      @keyframes glow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.5); }
      }
      .animated-pulse { animation: pulse 2s ease-in-out infinite; }
      .animated-flow { animation: flow 2s linear infinite; }
      .animated-spin { animation: spin 8s linear infinite; transform-origin: center; }
      .animated-ephemeral { animation: ephemeral 3s ease-in-out infinite; }
      .animated-glow { animation: glow 3s ease-in-out infinite; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#0F172A"/>
  <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

  <!-- Floating token particles -->
  <g opacity="0.6">
    <circle cx="120" cy="80" r="2" fill="#F59E0B" class="animated-pulse"/>
    <circle cx="680" cy="120" r="1.5" fill="#8B5CF6" class="animated-pulse" style="animation-delay: 0.5s"/>
    <circle cx="400" cy="250" r="2" fill="#60A5FA" class="animated-pulse" style="animation-delay: 1s"/>
    <circle cx="200" cy="400" r="1" fill="#10B981" class="animated-pulse" style="animation-delay: 1.5s"/>
  </g>

  <!-- Controlled Egress Gateway -->
  <rect x="20" y="20" width="760" height="75" rx="12" fill="rgba(239, 68, 68, 0.1)" stroke="#EF4444" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="40" y="45" fill="#FCA5A5" font-size="18" font-weight="bold">🚪</text>
  <text x="90" y="45" fill="#FCA5A5" font-size="15" font-weight="bold">CONTROLLED EGRESS GATEWAY</text>
  <text x="90" y="65" fill="#F87171" font-size="11" font-weight="500">Test Token & Data Export | Rate Limited | Audit Logged</text>
  
  <!-- Egress Controls -->
  <g transform="translate(480, 35)">
    <rect width="85" height="28" rx="6" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
    <text x="42.5" y="14" text-anchor="middle" fill="#FCA5A5" font-size="9" font-weight="bold">Rate Limiter</text>
    <text x="42.5" y="23" text-anchor="middle" fill="#F87171" font-size="7">100 req/min</text>
    <circle cx="15" cy="22" r="2" fill="#F59E0B" class="animated-pulse"/>
  </g>
  
  <g transform="translate(580, 35)">
    <rect width="85" height="28" rx="6" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
    <text x="42.5" y="14" text-anchor="middle" fill="#FCA5A5" font-size="9" font-weight="bold">Audit Logger</text>
    <text x="42.5" y="23" text-anchor="middle" fill="#F87171" font-size="7">All Events</text>
    <circle cx="15" cy="22" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
  </g>

  <!-- Status Indicators -->
  <g transform="translate(680, 35)">
    <rect width="85" height="13" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
    <text x="42.5" y="9" text-anchor="middle" fill="#10B981" font-size="7" font-weight="600">EGRESS: ACTIVE</text>
  </g>
  <g transform="translate(680, 52)">
    <rect width="85" height="13" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
    <text x="42.5" y="9" text-anchor="middle" fill="#FBBF24" font-size="7" font-weight="600">EXPORTED: 2.4K</text>
  </g>

  <!-- Isolated Compute Cluster -->
  <g class="network-component">
    <rect x="20" y="115" width="360" height="200" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-flow"/>
    <text x="30" y="140" fill="#60A5FA" font-size="15" font-weight="bold">⚙️ ISOLATED COMPUTE CLUSTER</text>
    <text x="30" y="157" fill="#93C5FD" font-size="10" font-weight="500">High-Performance Simulation Engine</text>
    
    <!-- Compute Node 1 -->
    <g transform="translate(35, 170)">
      <rect width="105" height="60" rx="8" fill="url(#computeGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#sandboxGlow)" class="animated-glow"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">Compute Node 1</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#93C5FD" font-size="8">32 vCPU | 128GB RAM</text>
      <rect x="10" y="35" width="85" height="7" rx="3" fill="rgba(59, 130, 246, 0.3)"/>
      <rect x="10" y="35" width="68" height="7" rx="3" fill="#60A5FA" class="animated-flow"/>
      <text x="52.5" y="41" text-anchor="middle" fill="#0F172A" font-size="7" font-weight="bold">CPU: 82%</text>
      <circle cx="20" cy="52" r="2" fill="#10B981" class="animated-pulse"/>
      <circle cx="52.5" cy="52" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="85" cy="52" r="2" fill="#EF4444" class="animated-pulse" style="animation-delay: 1s"/>
    </g>

    <!-- Compute Node 2 -->
    <g transform="translate(155, 170)">
      <rect width="105" height="60" rx="8" fill="url(#computeGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#sandboxGlow)" class="animated-glow" style="animation-delay: 0.5s"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">Compute Node 2</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#93C5FD" font-size="8">32 vCPU | 128GB RAM</text>
      <rect x="10" y="35" width="85" height="7" rx="3" fill="rgba(59, 130, 246, 0.3)"/>
      <rect x="10" y="35" width="73" height="7" rx="3" fill="#60A5FA" class="animated-flow"/>
      <text x="52.5" y="41" text-anchor="middle" fill="#0F172A" font-size="7" font-weight="bold">CPU: 89%</text>
      <circle cx="20" cy="52" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
      <circle cx="52.5" cy="52" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.8s"/>
      <circle cx="85" cy="52" r="2" fill="#EF4444" class="animated-pulse" style="animation-delay: 1.3s"/>
    </g>

    <!-- Compute Node 3 -->
    <g transform="translate(275, 170)">
      <rect width="95" height="60" rx="8" fill="url(#computeGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#sandboxGlow)" class="animated-glow" style="animation-delay: 1s"/>
      <text x="47.5" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">Node 3</text>
      <text x="47.5" y="28" text-anchor="middle" fill="#93C5FD" font-size="8">16 vCPU | 64GB</text>
      <rect x="10" y="35" width="75" height="7" rx="3" fill="rgba(59, 130, 246, 0.3)"/>
      <rect x="10" y="35" width="56" height="7" rx="3" fill="#60A5FA" class="animated-flow"/>
      <text x="47.5" y="41" text-anchor="middle" fill="#0F172A" font-size="7" font-weight="bold">CPU: 71%</text>
      <circle cx="20" cy="52" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.6s"/>
      <circle cx="47.5" cy="52" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 1.1s"/>
      <circle cx="75" cy="52" r="2" fill="#3B82F6" class="animated-pulse" style="animation-delay: 1.6s"/>
    </g>

    <!-- Orchestration Layer -->
    <g transform="translate(95, 245)">
      <rect width="180" height="55" rx="8" fill="rgba(139, 92, 246, 0.15)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="90" y="18" text-anchor="middle" fill="#A78BFA" font-size="11" font-weight="bold">Kubernetes Orchestrator</text>
      <text x="90" y="32" text-anchor="middle" fill="#C4B5FD" font-size="8">Simulation Scheduler & Load Balancer</text>
      <circle cx="40" cy="43" r="6" fill="none" stroke="#8B5CF6" stroke-width="2" class="animated-spin"/>
      <circle cx="40" cy="43" r="3" fill="#8B5CF6"/>
      <circle cx="90" cy="43" r="6" fill="none" stroke="#A78BFA" stroke-width="2" class="animated-spin" style="animation-delay: 1s"/>
      <circle cx="90" cy="43" r="3" fill="#A78BFA"/>
      <circle cx="140" cy="43" r="6" fill="none" stroke="#C4B5FD" stroke-width="2" class="animated-spin" style="animation-delay: 2s"/>
      <circle cx="140" cy="43" r="3" fill="#C4B5FD"/>
    </g>
  </g>

  <!-- Ephemeral Sandbox Networks -->
  <g class="network-component">
    <rect x="400" y="115" width="380" height="200" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="10,5" class="animated-flow" style="animation-delay: 0.5s"/>
    <text x="410" y="140" fill="#A78BFA" font-size="15" font-weight="bold">🔄 EPHEMERAL SANDBOX NETWORKS</text>
    <text x="410" y="157" fill="#C4B5FD" font-size="10" font-weight="500">Auto-Provisioned | Isolated | Time-Limited</text>
    
    <!-- Sandbox Instance 1 -->
    <g transform="translate(415, 170)" class="animated-ephemeral">
      <rect width="110" height="65" rx="8" fill="url(#sandboxGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#sandboxGlow)"/>
      <text x="55" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Sandbox Alpha</text>
      <text x="55" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Run ID: sim-4a8f2</text>
      <rect x="10" y="33" width="90" height="5" rx="2" fill="#8B5CF6" opacity="0.6"/>
      <rect x="10" y="40" width="90" height="4" rx="2" fill="#A78BFA" opacity="0.4"/>
      <text x="55" y="52" text-anchor="middle" fill="#E9D5FF" font-size="7">TTL: 2h 14m</text>
      <text x="55" y="61" text-anchor="middle" fill="#DDD6FE" font-size="7">Status: Running</text>
    </g>

    <!-- Sandbox Instance 2 -->
    <g transform="translate(540, 170)" class="animated-ephemeral" style="animation-delay: 1s">
      <rect width="110" height="65" rx="8" fill="url(#sandboxGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#sandboxGlow)"/>
      <text x="55" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Sandbox Beta</text>
      <text x="55" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Run ID: sim-7b3e9</text>
      <rect x="10" y="33" width="90" height="5" rx="2" fill="#8B5CF6" opacity="0.6"/>
      <rect x="10" y="40" width="90" height="4" rx="2" fill="#A78BFA" opacity="0.4"/>
      <text x="55" y="52" text-anchor="middle" fill="#E9D5FF" font-size="7">TTL: 1h 47m</text>
      <text x="55" y="61" text-anchor="middle" fill="#DDD6FE" font-size="7">Status: Running</text>
    </g>

    <!-- Sandbox Instance 3 -->
    <g transform="translate(665, 170)" class="animated-ephemeral" style="animation-delay: 2s">
      <rect width="105" height="65" rx="8" fill="url(#sandboxGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#sandboxGlow)"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Sandbox Gamma</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Run ID: sim-2c9d1</text>
      <rect x="10" y="33" width="85" height="5" rx="2" fill="#8B5CF6" opacity="0.6"/>
      <rect x="10" y="40" width="85" height="4" rx="2" fill="#A78BFA" opacity="0.4"/>
      <text x="52.5" y="52" text-anchor="middle" fill="#E9D5FF" font-size="7">TTL: 0h 52m</text>
      <text x="52.5" y="61" text-anchor="middle" fill="#F59E0B" font-size="7">Status: Expiring</text>
    </g>

    <!-- Network Controller -->
    <g transform="translate(490, 250)">
      <rect width="200" height="50" rx="8" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="100" y="18" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Network Lifecycle Manager</text>
      <text x="100" y="32" text-anchor="middle" fill="#6EE7B7" font-size="8">Auto Create | Auto Destroy | Isolated VLANs</text>
      <circle cx="50" cy="42" r="2" fill="#10B981" class="animated-pulse"/>
      <circle cx="100" cy="42" r="2" fill="#34D399" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="150" cy="42" r="2" fill="#6EE7B7" class="animated-pulse" style="animation-delay: 1s"/>
    </g>
  </g>

  <!-- Simulation Run Manager -->
  <g class="network-component">
    <rect x="20" y="335" width="240" height="145" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6,3"/>
    <text x="30" y="360" fill="#FBBF24" font-size="15" font-weight="bold">📊 SIMULATION MANAGER</text>
    <text x="30" y="377" fill="#FCD34D" font-size="10" font-weight="500">Tokenomics Model Execution</text>
    
    <!-- Active Simulations -->
    <g transform="translate(35, 390)">
      <rect width="105" height="35" rx="6" fill="url(#tokenGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="52.5" y="13" text-anchor="middle" fill="#FBBF24" font-size="9" font-weight="bold">Active Runs: 47</text>
      <text x="52.5" y="24" text-anchor="middle" fill="#FCD34D" font-size="7">Avg Duration: 1.2h</text>
      <circle cx="20" cy="29" r="1.5" fill="#10B981" class="animated-pulse"/>
      <circle cx="52.5" cy="29" r="1.5" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="85" cy="29" r="1.5" fill="#EF4444" class="animated-pulse" style="animation-delay: 1s"/>
    </g>

    <!-- Queue Status -->
    <g transform="translate(150, 390)">
      <rect width="95" height="35" rx="6" fill="url(#tokenGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="47.5" y="13" text-anchor="middle" fill="#FBBF24" font-size="9" font-weight="bold">Queue: 124</text>
      <text x="47.5" y="24" text-anchor="middle" fill="#FCD34D" font-size="7">Wait Time: 23min</text>
      <rect x="10" y="27" width="75" height="4" rx="2" fill="rgba(245, 158, 11, 0.3)"/>
      <rect x="10" y="27" width="48" height="4" rx="2" fill="#F59E0B" class="animated-flow"/>
    </g>

    <!-- Model Library -->
    <g transform="translate(35, 435)">
      <rect width="210" height="35" rx="6" fill="rgba(139, 92, 246, 0.12)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="105" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Model Library</text>
      <text x="105" y="27" text-anchor="middle" fill="#DDD6FE" font-size="8">Bonding Curves | Staking | Liquidity Pools | Vesting</text>
    </g>
  </g>

  <!-- Test Token Factory -->
  <g class="network-component">
    <rect x="280" y="335" width="240" height="75" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="8,4"/>
    <text x="290" y="360" fill="#FBBF24" font-size="15" font-weight="bold">🪙 TEST TOKEN FACTORY</text>
    <text x="290" y="377" fill="#FCD34D" font-size="10" font-weight="500">Synthetic Asset Generation</text>
    
    <g transform="translate(295, 385)">
      <rect width="105" height="20" rx="4" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
      <text x="52.5" y="13" text-anchor="middle" fill="#FBBF24" font-size="8">Tokens Minted: 2.4M</text>
    </g>
    
    <g transform="translate(410, 385)">
      <rect width="100" height="20" rx="4" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
      <text x="50" y="13" text-anchor="middle" fill="#34D399" font-size="8">Types: 147</text>
    </g>
  </g>

  <!-- Results Export & Analytics -->
  <g class="network-component">
    <rect x="280" y="425" width="240" height="55" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6"/>
    <text x="290" y="450" fill="#60A5FA" font-size="15" font-weight="bold">📈 RESULTS ANALYTICS</text>
    <text x="290" y="467" fill="#93C5FD" font-size="10" font-weight="500">Export Engine | Data Visualization</text>
  </g>

  <!-- Security Isolation Layer -->
  <g class="network-component">
    <rect x="540" y="335" width="240" height="145" rx="12" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" stroke-width="3" stroke-dasharray="6,3"/>
    <text x="550" y="360" fill="#FCA5A5" font-size="15" font-weight="bold">🔒 SECURITY ISOLATION</text>
    <text x="550" y="377" fill="#F87171" font-size="10" font-weight="500">Network Segmentation & Monitoring</text>
    
    <!-- Firewall Rules -->
    <g transform="translate(555, 390)">
      <rect width="105" height="40" rx="6" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#FCA5A5" font-size="10" font-weight="bold">Firewall Rules</text>
      <text x="52.5" y="27" text-anchor="middle" fill="#F87171" font-size="8">Deny All Default</text>
      <circle cx="20" cy="34" r="2" fill="#EF4444" class="animated-pulse"/>
      <circle cx="52.5" cy="34" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="85" cy="34" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 1s"/>
    </g>

    <!-- Network Monitor -->
    <g transform="translate(670, 390)">
      <rect width="100" height="40" rx="6" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="50" y="15" text-anchor="middle" fill="#FCA5A5" font-size="10" font-weight="bold">IDS/IPS</text>
      <text x="50" y="27" text-anchor="middle" fill="#F87171" font-size="8">Real-time</text>
      <rect x="15" y="30" width="70" height="5" rx="2" fill="rgba(239, 68, 68, 0.3)"/>
      <rect x="15" y="30" width="52" height="5" rx="2" fill="#EF4444" class="animated-flow"/>
        `;
        title = 'Compute Cluster with Sandbox Overlay (Tokenomics Simulator)';
        description = 'Isolated ephemeral compute mesh for simulation runs with deterministic seeds, controlled test token bridge, HSM-backed signing, quarantine/WORM storage, and a strict egress/approval engine.';
        break;


      /* ----------------------- WEB3 E-COMMERCE (robust, production-ready) ----------------------- */
      case 'web3-ecommerce':
        svgContent = `
      <svg viewBox="0 0 800 500" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="networkShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="edgeGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <marker id="dataFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#60A5FA" filter="url(#edgeGlow)"/>
    </marker>
    <marker id="secureFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#edgeGlow)"/>
    </marker>
    <marker id="walletFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#edgeGlow)"/>
    </marker>
    <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
      <circle cx="0" cy="0" r="0.5" fill="#60A5FA" opacity="0.2"/>
    </pattern>
    <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(59, 130, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(59, 130, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(139, 92, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="hsmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
    </linearGradient>
    <linearGradient id="walletGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(245, 158, 11, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(245, 158, 11, 0.2)"/>
    </linearGradient>
    
    <style>
      @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      @keyframes flow {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -40; }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes glow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.5); }
      }
      .animated-pulse { animation: pulse 2s ease-in-out infinite; }
      .animated-flow { animation: flow 2s linear infinite; }
      .animated-spin { animation: spin 8s linear infinite; transform-origin: center; }
      .animated-glow { animation: glow 3s ease-in-out infinite; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#0F172A"/>
  <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

  <!-- Floating Web3 particles -->
  <g opacity="0.6">
    <circle cx="100" cy="80" r="2" fill="#60A5FA" class="animated-pulse"/>
    <circle cx="700" cy="120" r="1.5" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
    <circle cx="400" cy="250" r="2" fill="#8B5CF6" class="animated-pulse" style="animation-delay: 1s"/>
    <circle cx="200" cy="400" r="1" fill="#10B981" class="animated-pulse" style="animation-delay: 1.5s"/>
  </g>

  <!-- Global Edge CDN Network -->
  <rect x="20" y="20" width="760" height="90" rx="12" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="40" y="45" fill="#60A5FA" font-size="18" font-weight="bold">🌍</text>
  <text x="90" y="45" fill="#60A5FA" font-size="15" font-weight="bold">GLOBAL EDGE CDN NETWORK</text>
  <text x="90" y="65" fill="#93C5FD" font-size="11" font-weight="500">Distributed Storefront Delivery | Low Latency | Static Assets</text>
  
  <!-- Edge POPs -->
  <g transform="translate(50, 75)">
    <rect width="95" height="28" rx="6" fill="url(#edgeGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow"/>
    <text x="47.5" y="14" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="bold">NA-EAST POP</text>
    <text x="47.5" y="23" text-anchor="middle" fill="#93C5FD" font-size="7">Cache Hit: 94%</text>
    <circle cx="15" cy="22" r="2" fill="#10B981" class="animated-pulse"/>
  </g>
  
  <g transform="translate(160, 75)">
    <rect width="95" height="28" rx="6" fill="url(#edgeGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 0.5s"/>
    <text x="47.5" y="14" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="bold">EU-WEST POP</text>
    <text x="47.5" y="23" text-anchor="middle" fill="#93C5FD" font-size="7">Cache Hit: 92%</text>
    <circle cx="15" cy="22" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
  </g>
  
  <g transform="translate(270, 75)">
    <rect width="95" height="28" rx="6" fill="url(#edgeGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 1s"/>
    <text x="47.5" y="14" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="bold">APAC POP</text>
    <text x="47.5" y="23" text-anchor="middle" fill="#93C5FD" font-size="7">Cache Hit: 89%</text>
    <circle cx="15" cy="22" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.6s"/>
  </g>

  <!-- CDN Origin -->
  <g transform="translate(380, 75)">
    <rect width="100" height="28" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
    <text x="50" y="14" text-anchor="middle" fill="#34D399" font-size="9" font-weight="bold">Origin Server</text>
    <text x="50" y="23" text-anchor="middle" fill="#6EE7B7" font-size="7">S3 / Cloud Storage</text>
    <circle cx="20" cy="22" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.9s"/>
  </g>

  <!-- Global Metrics -->
  <g transform="translate(495, 40)">
    <rect width="80" height="13" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#10B981" font-size="7" font-weight="600">REQUESTS: 45M/day</text>
  </g>
  <g transform="translate(495, 57)">
    <rect width="80" height="13" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#60A5FA" font-size="7" font-weight="600">LATENCY: 18ms</text>
  </g>
  <g transform="translate(495, 74)">
    <rect width="80" height="13" rx="6" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#A78BFA" font-size="7" font-weight="600">BANDWIDTH: 2.4TB</text>
  </g>

  <!-- Status Dashboard -->
  <g transform="translate(590, 40)">
    <rect width="85" height="13" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
    <text x="42.5" y="9" text-anchor="middle" fill="#10B981" font-size="7" font-weight="600">STATUS: HEALTHY</text>
  </g>
  <g transform="translate(590, 57)">
    <rect width="85" height="13" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
    <text x="42.5" y="9" text-anchor="middle" fill="#60A5FA" font-size="7" font-weight="600">POPS: 12 ACTIVE</text>
  </g>
  <g transform="translate(590, 74)">
    <rect width="85" height="13" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
    <text x="42.5" y="9" text-anchor="middle" fill="#FBBF24" font-size="7" font-weight="600">UPTIME: 99.99%</text>
  </g>

  <!-- Cloud API Backend (Private Subnets) -->
  <g class="network-component">
    <rect x="20" y="130" width="380" height="185" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="12,6" class="animated-flow"/>
    <text x="30" y="155" fill="#A78BFA" font-size="15" font-weight="bold">☁️ CLOUD API BACKEND</text>
    <text x="30" y="172" fill="#C4B5FD" font-size="10" font-weight="500">Private Subnets | Microservices Architecture</text>
    
    <!-- API Gateway -->
    <g transform="translate(35, 185)">
      <rect width="165" height="50" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="82.5" y="18" text-anchor="middle" fill="#60A5FA" font-size="11" font-weight="bold">API Gateway</text>
      <text x="82.5" y="32" text-anchor="middle" fill="#93C5FD" font-size="8">Load Balancer | Rate Limiting | Auth</text>
      <circle cx="30" cy="42" r="2" fill="#10B981" class="animated-pulse"/>
      <circle cx="82.5" cy="42" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="135" cy="42" r="2" fill="#EF4444" class="animated-pulse" style="animation-delay: 1s"/>
    </g>

    <!-- Product Service -->
    <g transform="translate(210, 185)">
      <rect width="85" height="50" rx="8" fill="url(#cloudGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#edgeGlow)" class="animated-glow"/>
      <text x="42.5" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Product API</text>
      <text x="42.5" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Catalog & Inventory</text>
      <rect x="10" y="33" width="65" height="6" rx="3" fill="rgba(139, 92, 246, 0.3)"/>
      <rect x="10" y="33" width="48" height="6" rx="3" fill="#8B5CF6" class="animated-flow"/>
      <text x="42.5" y="44" text-anchor="middle" fill="#E9D5FF" font-size="7">Load: 74%</text>
    </g>

    <!-- Order Service -->
    <g transform="translate(305, 185)">
      <rect width="85" height="50" rx="8" fill="url(#cloudGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#edgeGlow)" class="animated-glow" style="animation-delay: 0.5s"/>
      <text x="42.5" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Order API</text>
      <text x="42.5" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Cart & Checkout</text>
      <rect x="10" y="33" width="65" height="6" rx="3" fill="rgba(139, 92, 246, 0.3)"/>
      <rect x="10" y="33" width="52" height="6" rx="3" fill="#8B5CF6" class="animated-flow"/>
      <text x="42.5" y="44" text-anchor="middle" fill="#E9D5FF" font-size="7">Load: 81%</text>
    </g>

    <!-- User Service -->
    <g transform="translate(35, 245)">
      <rect width="85" height="50" rx="8" fill="url(#cloudGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#edgeGlow)" class="animated-glow" style="animation-delay: 1s"/>
      <text x="42.5" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">User API</text>
      <text x="42.5" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Auth & Profile</text>
      <rect x="10" y="33" width="65" height="6" rx="3" fill="rgba(139, 92, 246, 0.3)"/>
      <rect x="10" y="33" width="39" height="6" rx="3" fill="#8B5CF6" class="animated-flow"/>
      <text x="42.5" y="44" text-anchor="middle" fill="#E9D5FF" font-size="7">Load: 58%</text>
    </g>

    <!-- NFT Service -->
    <g transform="translate(130, 245)">
      <rect width="85" height="50" rx="8" fill="url(#cloudGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#edgeGlow)" class="animated-glow" style="animation-delay: 1.5s"/>
      <text x="42.5" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">NFT API</text>
      <text x="42.5" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Minting & Metadata</text>
      <rect x="10" y="33" width="65" height="6" rx="3" fill="rgba(139, 92, 246, 0.3)"/>
      <rect x="10" y="33" width="44" height="6" rx="3" fill="#8B5CF6" class="animated-flow"/>
      <text x="42.5" y="44" text-anchor="middle" fill="#E9D5FF" font-size="7">Load: 67%</text>
    </g>

    <!-- Analytics Service -->
    <g transform="translate(225, 245)">
      <rect width="85" height="50" rx="8" fill="url(#cloudGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#edgeGlow)" class="animated-glow" style="animation-delay: 2s"/>
      <text x="42.5" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Analytics API</text>
      <text x="42.5" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Metrics & Insights</text>
      <rect x="10" y="33" width="65" height="6" rx="3" fill="rgba(139, 92, 246, 0.3)"/>
      <rect x="10" y="33" width="35" height="6" rx="3" fill="#8B5CF6" class="animated-flow"/>
      <text x="42.5" y="44" text-anchor="middle" fill="#E9D5FF" font-size="7">Load: 52%</text>
    </g>

    <!-- Smart Contract Service -->
    <g transform="translate(320, 245)">
      <rect width="70" height="50" rx="8" fill="url(#walletGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#edgeGlow)"/>
      <text x="35" y="15" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="bold">Contract API</text>
      <text x="35" y="28" text-anchor="middle" fill="#FCD34D" font-size="8">Web3 Bridge</text>
      <circle cx="35" cy="40" r="6" fill="none" stroke="#F59E0B" stroke-width="2" class="animated-spin"/>
      <circle cx="35" cy="40" r="3" fill="#F59E0B"/>
    </g>
  </g>

  <!-- HSM-Secured Payment/Wallet Nodes -->
  <g class="network-component">
    <rect x="420" y="130" width="360" height="185" rx="12" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" stroke-width="3" stroke-dasharray="6,3" class="animated-flow"/>
    <text x="430" y="155" fill="#FCA5A5" font-size="15" font-weight="bold">🔐 HSM-SECURED VLAN</text>
    <text x="430" y="172" fill="#F87171" font-size="10" font-weight="500">Hardware Security Modules | Payment & Wallet Infrastructure</text>
    
    <!-- HSM Cluster -->
    <g transform="translate(435, 185)">
      <rect width="160" height="60" rx="8" fill="url(#hsmGradient)" stroke="#EF4444" stroke-width="3" filter="url(#edgeGlow)" class="animated-glow"/>
      <text x="80" y="18" text-anchor="middle" fill="#FCA5A5" font-size="12" font-weight="bold">HSM Cluster</text>
      <text x="80" y="33" text-anchor="middle" fill="#F87171" font-size="9">FIPS 140-2 Level 3 Certified</text>
      <path d="M60 42 L70 47 L60 52 L50 47 Z" fill="none" stroke="#FCA5A5" stroke-width="2"/>
      <circle cx="60" cy="47" r="3" fill="#EF4444" class="animated-pulse"/>
      <path d="M100 42 L110 47 L100 52 L90 47 Z" fill="none" stroke="#FCA5A5" stroke-width="2"/>
      <circle cx="100" cy="47" r="3" fill="#EF4444" class="animated-pulse" style="animation-delay: 0.5s"/>
    </g>

    <!-- Payment Gateway -->
    <g transform="translate(605, 185)">
      <rect width="165" height="60" rx="8" fill="url(#walletGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="82.5" y="18" text-anchor="middle" fill="#FBBF24" font-size="11" font-weight="bold">Payment Gateway</text>
      <text x="82.5" y="32" text-anchor="middle" fill="#FCD34D" font-size="8">Crypto Processing | Multi-Chain Support</text>
      <circle cx="40" cy="48" r="2" fill="#10B981" class="animated-pulse"/>
      <text x="55" y="51" fill="#FCD34D" font-size="7">BTC</text>
      <circle cx="75" cy="48" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
      <text x="90" y="51" fill="#FCD34D" font-size="7">ETH</text>
      <circle cx="110" cy="48" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.6s"/>
      <text x="125" y="51" fill="#FCD34D" font-size="7">SOL</text>
    </g>

    <!-- Wallet Node 1 -->
    <g transform="translate(435, 255)">
      <rect width="105" height="50" rx="8" fill="url(#walletGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)" class="animated-glow"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="bold">Wallet Node 1</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#FCD34D" font-size="8">Hot Wallet</text>
      <rect x="15" y="33" width="75" height="5" rx="2" fill="rgba(245, 158, 11, 0.3)"/>
      <rect x="15" y="33" width="58" height="5" rx="2" fill="#F59E0B" class="animated-flow"/>
      <text x="52.5" y="44" text-anchor="middle" fill="#FEF3C7" font-size="7">Balance: 2.4M USDC</text>
    </g>

    <!-- Wallet Node 2 -->
    <g transform="translate(550, 255)">
      <rect width="105" height="50" rx="8" fill="url(#walletGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 0.5s"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="bold">Wallet Node 2</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#FCD34D" font-size="8">Warm Wallet</text>
      <rect x="15" y="33" width="75" height="5" rx="2" fill="rgba(245, 158, 11, 0.3)"/>
      <rect x="15" y="33" width="48" height="5" rx="2" fill="#F59E0B" class="animated-flow"/>
      <text x="52.5" y="44" text-anchor="middle" fill="#FEF3C7" font-size="7">Balance: 8.7M USDC</text>
    </g>

    <!-- Cold Storage -->
    <g transform="translate(665, 255)">
      <rect width="105" height="50" rx="8" fill="url(#hsmGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#FCA5A5" font-size="10" font-weight="bold">Cold Storage</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#F87171" font-size="8">Offline Vault</text>
      <path d="M35 35 L45 40 L35 45 L25 40 Z" fill="none" stroke="#FCA5A5" stroke-width="2"/>
      <circle cx="35" cy="40" r="2" fill="#EF4444"/>
      <path d="M70 35 L80 40 L70 45 L60 40 Z" fill="none" stroke="#FCA5A5" stroke-width="2"/>
      <circle cx="70" cy="40" r="2" fill="#EF4444"/>
      <text x="52.5" y="53" text-anchor="middle" fill="#FCA5A5" font-size="7">Vault: 145M USD</text>
    </g>
  </g>

  <!-- Database & Cache Layer -->
  <g class="network-component">
    <rect x="20" y="335" width="240" height="145" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4"/>
    <text x="30" y="360" fill="#34D399" font-size="15" font-weight="bold">💾 DATA LAYER</text>
    <text x="30" y="377" fill="#6EE7B7" font-size="10" font-weight="500">Primary Database & Caching</text>
    
    <!-- PostgreSQL -->
    <g transform="translate(35, 390)">
      <rect width="100" height="60" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="50" y="18" text-anchor="middle" fill="#60A5FA" font-size="11" font-weight="bold">PostgreSQL</text>
      <text x="50" y="32" text-anchor="middle" fill="#93C5FD" font-size="8">Primary DB</text>
      <rect x="15" y="38" width="70" height="5" rx="2" fill="#3B82F6" opacity="0.6"/>
      <rect x="15" y="45" width="70" height="4" rx="2" fill="#60A5FA" opacity="0.4"/>
      <circle cx="25" cy="54" r="1.5" fill="#10B981" class="animated-pulse"/>
      <circle cx="50" cy="54" r="1.5" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="75" cy="54" r="1.5" fill="#3B82F6" class="animated-pulse" style="animation-delay: 1s"/>
    </g>

    <!-- Redis -->
    <g transform="translate(145, 390)">
      <rect width="105" height="60" rx="8" fill="rgba(239, 68, 68, 0.12)" stroke="#DC2626" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="52.5
        `;
        title = 'Hybrid Edge + Cloud Backend + HSM-secured Payment/Wallet Nodes';
        description = 'Edge CDN storefront, private cloud API backend, HSM-secured custody for wallet transactions, relayer & contract registry, and off-chain settlement connectors with full auditability.';
        break;


      /* --------------------------- CLOUD DR & HARDENING (robust) --------------------------- */
      case 'cloud-dr':
        svgContent = `
      <svg viewBox="0 0 800 500" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="networkShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="hardeneGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <marker id="replicationFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#hardeneGlow)"/>
    </marker>
    <marker id="backupFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#3B82F6" filter="url(#hardeneGlow)"/>
    </marker>
    <marker id="controlFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#8B5CF6" filter="url(#hardeneGlow)"/>
    </marker>
    <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
      <circle cx="0" cy="0" r="0.5" fill="#60A5FA" opacity="0.2"/>
    </pattern>
    <linearGradient id="backupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(59, 130, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(59, 130, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="controlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(139, 92, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="immutableGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(16, 185, 129, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(16, 185, 129, 0.2)"/>
    </linearGradient>
    <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
    </linearGradient>
    
    <style>
      @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      @keyframes flow {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -40; }
      }
      @keyframes lock {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-2px); }
      }
      @keyframes glow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.5); }
      }
      .animated-pulse { animation: pulse 2s ease-in-out infinite; }
      .animated-flow { animation: flow 2s linear infinite; }
      .animated-lock { animation: lock 2s ease-in-out infinite; }
      .animated-glow { animation: glow 3s ease-in-out infinite; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#0F172A"/>
  <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

  <!-- Floating security particles -->
  <g opacity="0.6">
    <circle cx="100" cy="80" r="2" fill="#10B981" class="animated-pulse"/>
    <circle cx="700" cy="120" r="1.5" fill="#3B82F6" class="animated-pulse" style="animation-delay: 0.5s"/>
    <circle cx="400" cy="250" r="2" fill="#8B5CF6" class="animated-pulse" style="animation-delay: 1s"/>
    <circle cx="200" cy="400" r="1" fill="#EF4444" class="animated-pulse" style="animation-delay: 1.5s"/>
  </g>

  <!-- Hardened Control Plane -->
  <rect x="20" y="20" width="760" height="85" rx="12" fill="rgba(139, 92, 246, 0.1)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="40" y="45" fill="#A78BFA" font-size="18" font-weight="bold">🛡️</text>
  <text x="90" y="45" fill="#A78BFA" font-size="15" font-weight="bold">HARDENED CONTROL PLANE</text>
  <text x="90" y="65" fill="#C4B5FD" font-size="11" font-weight="500">Zero Trust | Multi-Factor Auth | Role-Based Access Control</text>
  
  <!-- Control Components -->
  <g transform="translate(50, 70)">
    <rect width="100" height="28" rx="6" fill="url(#controlGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow"/>
    <text x="50" y="14" text-anchor="middle" fill="#C4B5FD" font-size="9" font-weight="bold">Orchestrator</text>
    <text x="50" y="23" text-anchor="middle" fill="#DDD6FE" font-size="7">DR Automation</text>
    <circle cx="20" cy="22" r="2" fill="#10B981" class="animated-pulse"/>
  </g>
  
  <g transform="translate(165, 70)">
    <rect width="100" height="28" rx="6" fill="url(#controlGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 0.5s"/>
    <text x="50" y="14" text-anchor="middle" fill="#C4B5FD" font-size="9" font-weight="bold">Policy Engine</text>
    <text x="50" y="23" text-anchor="middle" fill="#DDD6FE" font-size="7">Retention Rules</text>
    <circle cx="20" cy="22" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
  </g>
  
  <g transform="translate(280, 70)">
    <rect width="100" height="28" rx="6" fill="url(#securityGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
    <text x="50" y="14" text-anchor="middle" fill="#FCA5A5" font-size="9" font-weight="bold">Access Control</text>
    <text x="50" y="23" text-anchor="middle" fill="#F87171" font-size="7">IAM + RBAC</text>
    <circle cx="20" cy="22" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.6s"/>
  </g>

  <g transform="translate(395, 70)">
    <rect width="100" height="28" rx="6" fill="url(#controlGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 1s"/>
    <text x="50" y="14" text-anchor="middle" fill="#C4B5FD" font-size="9" font-weight="bold">Audit Logger</text>
    <text x="50" y="23" text-anchor="middle" fill="#DDD6FE" font-size="7">Compliance Trail</text>
    <circle cx="20" cy="22" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 0.9s"/>
  </g>

  <!-- Control Status -->
  <g transform="translate(510, 40)">
    <rect width="80" height="13" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#10B981" font-size="7" font-weight="600">CONTROL: ACTIVE</text>
  </g>
  <g transform="translate(510, 57)">
    <rect width="80" height="13" rx="6" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#A78BFA" font-size="7" font-weight="600">HARDENED: ✓</text>
  </g>
  <g transform="translate(510, 74)">
    <rect width="80" height="13" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#FCA5A5" font-size="7" font-weight="600">AUTH: MFA</text>
  </g>

  <!-- DR Metrics -->
  <g transform="translate(605, 40)">
    <rect width="80" height="13" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#60A5FA" font-size="7" font-weight="600">RPO: 15 min</text>
  </g>
  <g transform="translate(605, 57)">
    <rect width="80" height="13" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#34D399" font-size="7" font-weight="600">RTO: 1 hour</text>
  </g>
  <g transform="translate(605, 74)">
    <rect width="80" height="13" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#FBBF24" font-size="7" font-weight="600">BACKUP: 24/7</text>
  </g>

  <!-- Production Environment (Primary) -->
  <g class="network-component">
    <rect x="20" y="125" width="360" height="180" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-flow"/>
    <text x="30" y="150" fill="#60A5FA" font-size="15" font-weight="bold">🏢 PRIMARY PRODUCTION</text>
    <text x="30" y="167" fill="#93C5FD" font-size="10" font-weight="500">Active Workloads | Primary Region</text>
    
    <!-- Production Workload 1 -->
    <g transform="translate(35, 180)">
      <rect width="105" height="55" rx="8" fill="url(#backupGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#hardeneGlow)" class="animated-glow"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">Database Cluster</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#93C5FD" font-size="8">PostgreSQL</text>
      <rect x="10" y="33" width="85" height="6" rx="3" fill="rgba(59, 130, 246, 0.3)"/>
      <rect x="10" y="33" width="68" height="6" rx="3" fill="#60A5FA" class="animated-flow"/>
      <text x="52.5" y="46" text-anchor="middle" fill="#BFDBFE" font-size="7">Usage: 82%</text>
    </g>

    <!-- Production Workload 2 -->
    <g transform="translate(150, 180)">
      <rect width="105" height="55" rx="8" fill="url(#backupGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#hardeneGlow)" class="animated-glow" style="animation-delay: 0.5s"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">App Servers</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#93C5FD" font-size="8">Kubernetes</text>
      <rect x="10" y="33" width="85" height="6" rx="3" fill="rgba(59, 130, 246, 0.3)"/>
      <rect x="10" y="33" width="59" height="6" rx="3" fill="#60A5FA" class="animated-flow"/>
      <text x="52.5" y="46" text-anchor="middle" fill="#BFDBFE" font-size="7">Usage: 71%</text>
    </g>

    <!-- Production Workload 3 -->
    <g transform="translate(265, 180)">
      <rect width="105" height="55" rx="8" fill="url(#backupGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#hardeneGlow)" class="animated-glow" style="animation-delay: 1s"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">File Storage</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#93C5FD" font-size="8">Object Store</text>
      <rect x="10" y="33" width="85" height="6" rx="3" fill="rgba(59, 130, 246, 0.3)"/>
      <rect x="10" y="33" width="51" height="6" rx="3" fill="#60A5FA" class="animated-flow"/>
      <text x="52.5" y="46" text-anchor="middle" fill="#BFDBFE" font-size="7">Usage: 64%</text>
    </g>

    <!-- Backup Agents -->
    <g transform="translate(35, 245)">
      <rect width="335" height="50" rx="8" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="167.5" y="18" text-anchor="middle" fill="#34D399" font-size="11" font-weight="bold">Backup Agents</text>
      <text x="167.5" y="32" text-anchor="middle" fill="#6EE7B7" font-size="8">Continuous Data Protection | Change Block Tracking</text>
      <circle cx="50" cy="42" r="2" fill="#10B981" class="animated-pulse"/>
      <circle cx="167.5" cy="42" r="2" fill="#34D399" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="285" cy="42" r="2" fill="#6EE7B7" class="animated-pulse" style="animation-delay: 1s"/>
    </g>
  </g>

  <!-- Immutable Backup Network -->
  <g class="network-component">
    <rect x="400" y="125" width="380" height="180" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-flow"/>
    <text x="410" y="150" fill="#34D399" font-size="15" font-weight="bold">🔒 IMMUTABLE BACKUP NETWORK</text>
    <text x="410" y="167" fill="#6EE7B7" font-size="10" font-weight="500">Write-Once-Read-Many | Air-Gapped Storage</text>
    
    <!-- Snapshot Vault 1 -->
    <g transform="translate(415, 180)">
      <rect width="110" height="60" rx="8" fill="url(#immutableGradient)" stroke="#10B981" stroke-width="2" filter="url(#hardeneGlow)" class="animated-glow"/>
      <text x="55" y="15" text-anchor="middle" fill="#34D399" font-size="10" font-weight="bold">Snapshot Vault</text>
      <text x="55" y="28" text-anchor="middle" fill="#6EE7B7" font-size="8">Tier 1 - Hot</text>
      <path d="M35 35 L45 40 L35 45 L25 40 Z" fill="none" stroke="#10B981" stroke-width="2" class="animated-lock"/>
      <circle cx="35" cy="40" r="2" fill="#10B981"/>
      <path d="M70 35 L80 40 L70 45 L60 40 Z" fill="none" stroke="#34D399" stroke-width="2" class="animated-lock" style="animation-delay: 0.5s"/>
      <circle cx="70" cy="40" r="2" fill="#34D399"/>
      <text x="55" y="56" text-anchor="middle" fill="#A7F3D0" font-size="7">14.2TB Immutable</text>
    </g>

    <!-- Snapshot Vault 2 -->
    <g transform="translate(535, 180)">
      <rect width="110" height="60" rx="8" fill="url(#immutableGradient)" stroke="#10B981" stroke-width="2" filter="url(#hardeneGlow)" class="animated-glow" style="animation-delay: 0.5s"/>
      <text x="55" y="15" text-anchor="middle" fill="#34D399" font-size="10" font-weight="bold">Archive Vault</text>
      <text x="55" y="28" text-anchor="middle" fill="#6EE7B7" font-size="8">Tier 2 - Warm</text>
      <path d="M35 35 L45 40 L35 45 L25 40 Z" fill="none" stroke="#10B981" stroke-width="2" class="animated-lock" style="animation-delay: 0.3s"/>
      <circle cx="35" cy="40" r="2" fill="#10B981"/>
      <path d="M70 35 L80 40 L70 45 L60 40 Z" fill="none" stroke="#34D399" stroke-width="2" class="animated-lock" style="animation-delay: 0.8s"/>
      <circle cx="70" cy="40" r="2" fill="#34D399"/>
      <text x="55" y="56" text-anchor="middle" fill="#A7F3D0" font-size="7">47.8TB Immutable</text>
    </g>

    <!-- Glacier Storage -->
    <g transform="translate(655, 180)">
      <rect width="110" height="60" rx="8" fill="url(#immutableGradient)" stroke="#10B981" stroke-width="2" filter="url(#hardeneGlow)" class="animated-glow" style="animation-delay: 1s"/>
      <text x="55" y="15" text-anchor="middle" fill="#34D399" font-size="10" font-weight="bold">Deep Archive</text>
      <text x="55" y="28" text-anchor="middle" fill="#6EE7B7" font-size="8">Tier 3 - Cold</text>
      <path d="M35 35 L45 40 L35 45 L25 40 Z" fill="none" stroke="#10B981" stroke-width="2" class="animated-lock" style="animation-delay: 0.6s"/>
      <circle cx="35" cy="40" r="2" fill="#10B981"/>
      <path d="M70 35 L80 40 L70 45 L60 40 Z" fill="none" stroke="#34D399" stroke-width="2" class="animated-lock" style="animation-delay: 1.1s"/>
      <circle cx="70" cy="40" r="2" fill="#34D399"/>
      <text x="55" y="56" text-anchor="middle" fill="#A7F3D0" font-size="7">142TB Immutable</text>
    </g>

    <!-- Immutability Controller -->
    <g transform="translate(475, 250)">
      <rect width="240" height="45" rx="8" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="120" y="18" text-anchor="middle" fill="#FCA5A5" font-size="11" font-weight="bold">Immutability Controller</text>
      <text x="120" y="32" text-anchor="middle" fill="#F87171" font-size="8">WORM Enforcement | Tamper-Proof | Legal Hold</text>
      <circle cx="60" cy="37" r="2" fill="#EF4444" class="animated-pulse"/>
      <circle cx="120" cy="37" r="2" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="180" cy="37" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 1s"/>
    </g>
  </g>

  <!-- Encrypted Replication Channels -->
  <g class="network-component">
    <rect x="20" y="325" width="760" height="70" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="10,5" class="animated-flow"/>
    <text x="30" y="350" fill="#A78BFA" font-size="15" font-weight="bold">🔐 ENCRYPTED REPLICATION CHANNELS</text>
    <text x="30" y="367" fill="#C4B5FD" font-size="10" font-weight="500">AES-256 Encryption | TLS 1.3 | End-to-End Security</text>
    
    <!-- Replication Stream 1 -->
    <g transform="translate(35, 375)">
      <rect width="130" height="14" rx="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
      <rect x="2" y="2" width="85" height="10" rx="5" fill="#3B82F6" class="animated-flow"/>
      <text x="65" y="10" text-anchor="middle" fill="#0F172A" font-size="7" font-weight="bold">DB → Snapshot: 24MB/s</text>
    </g>

    <g transform="translate(180, 375)">
      <rect width="130" height="14" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
      <rect x="2" y="2" width="92" height="10" rx="5" fill="#10B981" class="animated-flow"/>
      <text x="65" y="10" text-anchor="middle" fill="#0F172A" font-size="7" font-weight="bold">App → Archive: 18MB/s</text>
    </g>

    <g transform="translate(325, 375)">
      <rect width="130" height="14" rx="7" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
      <rect x="2" y="2" width="78" height="10" rx="5" fill="#8B5CF6" class="animated-flow"/>
      <text x="65" y="10" text-anchor="middle" fill="#0F172A" font-size="7" font-weight="bold">File → Vault: 32MB/s</text>
    </g>

    <!-- Encryption Status -->
    <g transform="translate(480, 372)">
      <rect width="90" height="20" rx="6" fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="45" y="13" text-anchor="middle" fill="#FCA5A5" font-size="9" font-weight="bold">🔒 AES-256</text>
    </g>

    <g transform="translate(585, 372)">
      <rect width="90" height="20" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="45" y="13" text-anchor="middle" fill="#34D399" font-size="9" font-weight="bold">✓ TLS 1.3</text>
    </g>

    <g transform="translate(690, 372)">
      <rect width="80" height="20" rx="6" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="40" y="13" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="bold">Zero Trust</text>
    </g>
  </g>

  <!-- DR Failover Environment (Secondary) -->
  <g class="network-component">
    <rect x="20" y="415" width="360" height="65" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6,3"/>
    <text x="30" y="440" fill="#FBBF24" font-size="15" font-weight="bold">⚡ DR FAILOVER SITE</text>
    <text x="30" y="457" fill="#FCD34D" font-size="10" font-weight="500">Standby Environment | Secondary Region</text>
    
    <g transform="translate(35, 462)">
      <rect width="105" height="12" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
      <text x="52.5" y="9" text-anchor="middle" fill="#FBBF24" font-size="8">DB Replica: Standby</text>
    </g>

    <g transform="translate(150, 462)">
      <rect width="105" height="12" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
      <text x="52.5" y="9" text-anchor="middle" fill="#FBBF24" font-size="8">App Pool: Ready</text>
    </g>

    <g transform="translate(265, 462)">
      <rect width="105" height="12" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
      <text x="52.5" y="9" text-anchor="middle" fill="#FBBF24" font-size="8">Storage: Synced</text>
    </g>
  </g>

  <!-- Security & Compliance Layer -->
  <g class="network-component">
    <rect x="400" y="415" width="380" height="65" rx="12" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" stroke-width="3" stroke-dasharray="6,3"/>
    <text x="410" y="440" fill="#FCA5A5" font-size="15" font-weight="bold">🔐 SECURITY & COMPLIANCE</text>
    <text x="410" y="457" fill="#F87171" font-size="10" font-weight="500">Continuous Monitoring | Compliance Validation</text>
        `;
        title = 'Immutable Backup Overlay & Orchestration';
        description = 'Immutable backups, hardened control plane and an orchestrated DR plane for failover and regular testing.';
        break;


      /* ----------------------- IOT TELEMETRY STACK (robust, production-ready) ----------------------- */
      case 'iot-telemetry':
        svgContent = `
      <svg viewBox="0 0 800 500" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="networkShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="iotGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <marker id="telemetryFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#60A5FA" filter="url(#iotGlow)"/>
    </marker>
    <marker id="secureFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#10B981" filter="url(#iotGlow)"/>
    </marker>
    <marker id="edgeFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
      <path d="M0,0 L0,8 L12,4 z" fill="#8B5CF6" filter="url(#iotGlow)"/>
    </marker>
    <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
      <circle cx="0" cy="0" r="0.5" fill="#60A5FA" opacity="0.2"/>
    </pattern>
    <linearGradient id="iotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(59, 130, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(59, 130, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(139, 92, 246, 0.2)"/>
    </linearGradient>
    <linearGradient id="analyticsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(16, 185, 129, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(16, 185, 129, 0.2)"/>
    </linearGradient>
    <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(239, 68, 68, 0.4)"/>
      <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
      <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
    </linearGradient>
    
    <style>
      @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      @keyframes flow {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -40; }
      }
      @keyframes broadcast {
        0% { r: 2; opacity: 1; }
        100% { r: 8; opacity: 0; }
      }
      @keyframes glow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.5); }
      }
      .animated-pulse { animation: pulse 2s ease-in-out infinite; }
      .animated-flow { animation: flow 2s linear infinite; }
      .animated-broadcast { animation: broadcast 2s ease-out infinite; }
      .animated-glow { animation: glow 3s ease-in-out infinite; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#0F172A"/>
  <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

  <!-- Floating IoT particles -->
  <g opacity="0.6">
    <circle cx="100" cy="80" r="2" fill="#60A5FA" class="animated-pulse"/>
    <circle cx="700" cy="120" r="1.5" fill="#8B5CF6" class="animated-pulse" style="animation-delay: 0.5s"/>
    <circle cx="400" cy="250" r="2" fill="#10B981" class="animated-pulse" style="animation-delay: 1s"/>
    <circle cx="200" cy="400" r="1" fill="#F59E0B" class="animated-pulse" style="animation-delay: 1.5s"/>
  </g>

  <!-- Field IoT Devices Layer -->
  <rect x="20" y="20" width="760" height="95" rx="12" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="40" y="45" fill="#60A5FA" font-size="18" font-weight="bold">📡</text>
  <text x="90" y="45" fill="#60A5FA" font-size="15" font-weight="bold">FIELD IoT DEVICES</text>
  <text x="90" y="65" fill="#93C5FD" font-size="11" font-weight="500">Sensors | Actuators | Smart Devices | Real-time Data Collection</text>
  
  <!-- Sensor Groups -->
  <g transform="translate(50, 75)">
    <rect width="95" height="32" rx="6" fill="url(#iotGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow"/>
    <text x="47.5" y="14" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="bold">Temperature</text>
    <text x="47.5" y="24" text-anchor="middle" fill="#93C5FD" font-size="7">124 Sensors</text>
    <circle cx="47.5" cy="27" r="0" fill="#60A5FA" class="animated-broadcast"/>
    <circle cx="20" cy="28" r="1.5" fill="#10B981" class="animated-pulse"/>
  </g>
  
  <g transform="translate(160, 75)">
    <rect width="95" height="32" rx="6" fill="url(#iotGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 0.5s"/>
    <text x="47.5" y="14" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="bold">Pressure</text>
    <text x="47.5" y="24" text-anchor="middle" fill="#93C5FD" font-size="7">87 Sensors</text>
    <circle cx="47.5" cy="27" r="0" fill="#60A5FA" class="animated-broadcast" style="animation-delay: 0.5s"/>
    <circle cx="20" cy="28" r="1.5" fill="#10B981" class="animated-pulse" style="animation-delay: 0.3s"/>
  </g>
  
  <g transform="translate(270, 75)">
    <rect width="95" height="32" rx="6" fill="url(#iotGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 1s"/>
    <text x="47.5" y="14" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="bold">Flow Meters</text>
    <text x="47.5" y="24" text-anchor="middle" fill="#93C5FD" font-size="7">156 Devices</text>
    <circle cx="47.5" cy="27" r="0" fill="#60A5FA" class="animated-broadcast" style="animation-delay: 1s"/>
    <circle cx="20" cy="28" r="1.5" fill="#10B981" class="animated-pulse" style="animation-delay: 0.6s"/>
  </g>

  <g transform="translate(380, 75)">
    <rect width="95" height="32" rx="6" fill="url(#iotGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)" class="animated-glow" style="animation-delay: 1.5s"/>
    <text x="47.5" y="14" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="bold">Actuators</text>
    <text x="47.5" y="24" text-anchor="middle" fill="#93C5FD" font-size="7">63 Units</text>
    <circle cx="47.5" cy="27" r="0" fill="#60A5FA" class="animated-broadcast" style="animation-delay: 1.5s"/>
    <circle cx="20" cy="28" r="1.5" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.9s"/>
  </g>

  <!-- Device Statistics -->
  <g transform="translate(490, 40)">
    <rect width="80" height="13" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#10B981" font-size="7" font-weight="600">TOTAL: 2,847</text>
  </g>
  <g transform="translate(490, 57)">
    <rect width="80" height="13" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#60A5FA" font-size="7" font-weight="600">ACTIVE: 2,841</text>
  </g>
  <g transform="translate(490, 74)">
    <rect width="80" height="13" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#FBBF24" font-size="7" font-weight="600">RATE: 14K msg/s</text>
  </g>

  <!-- Protocol Info -->
  <g transform="translate(585, 40)">
    <rect width="80" height="13" rx="6" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#A78BFA" font-size="7" font-weight="600">MQTT/CoAP</text>
  </g>
  <g transform="translate(585, 57)">
    <rect width="80" height="13" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#60A5FA" font-size="7" font-weight="600">LoRaWAN</text>
  </g>
  <g transform="translate(585, 74)">
    <rect width="80" height="13" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
    <text x="40" y="9" text-anchor="middle" fill="#34D399" font-size="7" font-weight="600">Zigbee/BLE</text>
  </g>

  <!-- Edge Gateway Clusters -->
  <g class="network-component">
    <rect x="20" y="135" width="360" height="185" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="12,6" class="animated-flow"/>
    <text x="30" y="160" fill="#A78BFA" font-size="15" font-weight="bold">🔗 EDGE GATEWAY CLUSTERS</text>
    <text x="30" y="177" fill="#C4B5FD" font-size="10" font-weight="500">Local Edge Compute | Protocol Translation | Data Aggregation</text>
    
    <!-- Gateway Cluster 1 -->
    <g transform="translate(35, 190)">
      <rect width="105" height="60" rx="8" fill="url(#edgeGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#iotGlow)" class="animated-glow"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Gateway A</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Manufacturing</text>
      <rect x="10" y="33" width="85" height="6" rx="3" fill="rgba(139, 92, 246, 0.3)"/>
      <rect x="10" y="33" width="68" height="6" rx="3" fill="#8B5CF6" class="animated-flow"/>
      <text x="52.5" y="46" text-anchor="middle" fill="#E9D5FF" font-size="7">Load: 81%</text>
      <text x="52.5" y="56" text-anchor="middle" fill="#C4B5FD" font-size="7">847 Devices</text>
    </g>

    <!-- Gateway Cluster 2 -->
    <g transform="translate(150, 190)">
      <rect width="105" height="60" rx="8" fill="url(#edgeGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#iotGlow)" class="animated-glow" style="animation-delay: 0.5s"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Gateway B</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Warehouse</text>
      <rect x="10" y="33" width="85" height="6" rx="3" fill="rgba(139, 92, 246, 0.3)"/>
      <rect x="10" y="33" width="59" height="6" rx="3" fill="#8B5CF6" class="animated-flow"/>
      <text x="52.5" y="46" text-anchor="middle" fill="#E9D5FF" font-size="7">Load: 72%</text>
      <text x="52.5" y="56" text-anchor="middle" fill="#C4B5FD" font-size="7">624 Devices</text>
    </g>

    <!-- Gateway Cluster 3 -->
    <g transform="translate(265, 190)">
      <rect width="105" height="60" rx="8" fill="url(#edgeGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#iotGlow)" class="animated-glow" style="animation-delay: 1s"/>
      <text x="52.5" y="15" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="bold">Gateway C</text>
      <text x="52.5" y="28" text-anchor="middle" fill="#DDD6FE" font-size="8">Distribution</text>
      <rect x="10" y="33" width="85" height="6" rx="3" fill="rgba(139, 92, 246, 0.3)"/>
      <rect x="10" y="33" width="73" height="6" rx="3" fill="#8B5CF6" class="animated-flow"/>
      <text x="52.5" y="46" text-anchor="middle" fill="#E9D5FF" font-size="7">Load: 88%</text>
      <text x="52.5" y="56" text-anchor="middle" fill="#C4B5FD" font-size="7">1,376 Devices</text>
    </g>

    <!-- Edge Processing -->
    <g transform="translate(35, 260)">
      <rect width="335" height="50" rx="8" fill="rgba(59, 130, 246, 0.12)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="167.5" y="18" text-anchor="middle" fill="#60A5FA" font-size="11" font-weight="bold">Edge Computing Layer</text>
      <text x="167.5" y="32" text-anchor="middle" fill="#93C5FD" font-size="8">Local Analytics | Data Filtering | Protocol Conversion</text>
      <circle cx="60" cy="42" r="2" fill="#10B981" class="animated-pulse"/>
      <circle cx="167.5" cy="42" r="2" fill="#3B82F6" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="275" cy="42" r="2" fill="#8B5CF6" class="animated-pulse" style="animation-delay: 1s"/>
    </g>
  </g>

  <!-- Secure TLS Tunnels -->
  <g class="network-component">
    <rect x="400" y="135" width="380" height="70" rx="12" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" stroke-width="3" stroke-dasharray="6,3" class="animated-flow"/>
    <text x="410" y="160" fill="#FCA5A5" font-size="15" font-weight="bold">🔐 SECURE TLS TUNNELS</text>
    <text x="410" y="177" fill="#F87171" font-size="10" font-weight="500">Encrypted Transport | Certificate-Based Auth | End-to-End Security</text>
    
    <!-- Tunnel Status -->
    <g transform="translate(415, 185)">
      <rect width="110" height="14" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
      <rect x="2" y="2" width="85" height="10" rx="5" fill="#10B981" class="animated-flow"/>
      <text x="55" y="10" text-anchor="middle" fill="#0F172A" font-size="7" font-weight="bold">Tunnel A: 4.2MB/s</text>
    </g>

    <g transform="translate(540, 185)">
      <rect width="110" height="14" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
      <rect x="2" y="2" width="72" height="10" rx="5" fill="#10B981" class="animated-flow"/>
      <text x="55" y="10" text-anchor="middle" fill="#0F172A" font-size="7" font-weight="bold">Tunnel B: 3.8MB/s</text>
    </g>

    <g transform="translate(665, 185)">
      <rect width="105" height="14" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
      <rect x="2" y="2" width="78" height="10" rx="5" fill="#10B981" class="animated-flow"/>
      <text x="52.5" y="10" text-anchor="middle" fill="#0F172A" font-size="7" font-weight="bold">Tunnel C: 5.1MB/s</text>
    </g>
  </g>

  <!-- Device-Specific VLANs -->
  <g class="network-component">
    <rect x="400" y="225" width="380" height="95" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="8,4"/>
    <text x="410" y="250" fill="#FBBF24" font-size="15" font-weight="bold">🔀 DEVICE-SPECIFIC VLANs</text>
    <text x="410" y="267" fill="#FCD34D" font-size="10" font-weight="500">Network Segmentation | Traffic Isolation | QoS Management</text>
    
    <!-- VLAN 1 -->
    <g transform="translate(415, 275)">
      <rect width="110" height="35" rx="6" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="55" y="13" text-anchor="middle" fill="#FBBF24" font-size="9" font-weight="bold">VLAN 100</text>
      <text x="55" y="23" text-anchor="middle" fill="#FCD34D" font-size="7">Sensors Priority 1</text>
      <circle cx="20" cy="29" r="1.5" fill="#10B981" class="animated-pulse"/>
      <circle cx="55" cy="29" r="1.5" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.3s"/>
      <circle cx="90" cy="29" r="1.5" fill="#EF4444" class="animated-pulse" style="animation-delay: 0.6s"/>
    </g>

    <!-- VLAN 2 -->
    <g transform="translate(540, 275)">
      <rect width="110" height="35" rx="6" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="55" y="13" text-anchor="middle" fill="#FBBF24" font-size="9" font-weight="bold">VLAN 200</text>
      <text x="55" y="23" text-anchor="middle" fill="#FCD34D" font-size="7">Actuators Priority 2</text>
      <circle cx="20" cy="29" r="1.5" fill="#10B981" class="animated-pulse" style="animation-delay: 0.2s"/>
      <circle cx="55" cy="29" r="1.5" fill="#F59E0B" class="animated-pulse" style="animation-delay: 0.5s"/>
      <circle cx="90" cy="29" r="1.5" fill="#3B82F6" class="animated-pulse" style="animation-delay: 0.8s"/>
    </g>

    <!-- VLAN 3 -->
    <g transform="translate(665, 275)">
      <rect width="105" height="35" rx="6" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
      <text x="52.5" y="13" text-anchor="middle" fill="#FBBF24" font-size="9" font-weight="bold">VLAN 300</text>
      <text x="52.5" y="23" text-anchor="middle" fill="#FCD34D" font-size="7">Management</text>
      <circle cx="20" cy="29" r="1.5" fill="#8B5CF6" class="animated-pulse" style="animation-delay: 0.4s"/>
      <circle cx="52.5" cy="29" r="1.5" fill="#10B981" class="animated-pulse" style="animation-delay: 0.7s"/>
      <circle cx="85" cy="29" r="1.5" fill="#F59E0B" class="animated-pulse" style="animation-delay: 1s"/>
    </g>
  </g>

  <!-- Central Analytics VPC -->
  <g class="network-component">
    <rect x="20" y="340" width="760" height="140" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="10,5" class="animated-flow"/>
    <text x="30" y="365" fill="#34D399" font-size="15" font-weight="bold">☁️ CENTRAL ANALYTICS VPC</text>
    <text x="30" y="382" fill="#6EE7B7" font-size="10" font-weight="500">Time-Series Database | Real-Time Processing | ML Analytics</text>
    
    <!-- Time-Series DB -->
    <g transform="translate(35, 395)">
      <rect width="115" height="65" rx="8" fill="url(#analyticsGradient)" stroke="#10B981" stroke-width="2" filter="url(#iotGlow)" class="animated-glow"/>
      <text x="57.5" y="15" text-anchor="middle" fill="#34D399" font-size="10" font-weight="bold">Time-Series DB</text>
      <text x="57.5" y="28" text-anchor="middle" fill="#6EE7B7" font-size="8">InfluxDB/TimescaleDB</text>
      <rect x="10" y="33" width="95" height="6" rx="3" fill="rgba(16, 185, 129, 0.3)"/>
      <rect x="10" y="33" width="78" height="6" rx="3" fill="#10B981" class="animated-flow"/>
      <text x="57.5" y="46" text-anchor="middle" fill="#A7F3D0" font-size="7">Storage: 2.4TB</text>
      <text x="57.5" y="56" text-anchor="middle" fill="#6EE7B7" font-size="7">Retention: 365 days</text>
    </g>

    <!-- Stream Processor -->
    <g transform="translate(165, 395)">
      <rect width="115" height="65" rx="8" fill="url(#analyticsGradient)" stroke="#10B981" stroke-width="2" filter="url(#iotGlow)" class="animated-glow" style="animation-delay: 0.5s"/>
      <text x="57.5" y="15" text-anchor="middle" fill="#34D399" font-size="10" font-weight="bold">Stream Processor</text>
      <text x="57.5" y="28" text-anchor="middle" fill="#6EE7B7" font-size="8">Apache Kafka/Flink</text>
      <rect x="10" y="33" width="95" height="6" rx="3" fill="rgba(16, 185, 129, 0.3)"/>
      <rect x="10" y="33" width="71" height="6" rx="3" fill="#10B981" class="animated-flow"/>
      <text x="57.5" y="46" text-anchor="middle" fill="#A7F3D0" font-size="7">Throughput: 14K/s</text>
      <text x="57.5" y="56" text-anchor="middle" fill="#6EE7B7" font-size="7">Lag: <5ms</text>
    </g>

    <!-- ML Analytics -->
    <g transform="translate(295, 395)">
      <rect width="115" height="65" rx="8" fill="url(#analyticsGradient)" stroke="#10B981" stroke-width="2" filter="url(#iotGlow)" class="animated-glow" style="animation-delay: 1s"/>
      <text x="57.5" y="15" text-anchor="middle" fill="#34D399" font-size="10" font-weight="bold">ML Analytics</text>
      <text x="57.5" y="28" text-anchor="middle" fill="#6EE7B7" font-size="8">Anomaly Detection</text>
      <rect x="10" y="33" width="95" height="6" rx="3" fill="rgba(16, 185, 129, 0.3)"/>
      <rect x="10" y="33" width="64" height="6" rx="3" fill="#10B981" class="animated-flow"/>
      <text x="57.5" y="46" text-anchor="middle" fill="#A7F3D0" font-size="7">Models: 12 Active</text>
      <text x="57.5" y="56" text-anchor="middle" fill="#6EE7B7" font-size="7">Accuracy: 94.2%</text>
    </g>

    <!-- Visualization -->
    <g transform="translate(425, 395)">
      <rect width="115" height="65" rx="8" fill="url(#analyticsGradient)" stroke="#10B981" stroke-width="2" filter="url(#iotGlow)" class="animated-glow" style="animation-delay: 1.5s"/>
      <text x="57.5" y="15" text-anchor="middle" fill ="#34D399" font-size="10" font-weight="bold">Visualization</text>
        `;
        title = 'Converged Edge-Gateway Telemetry Topology';
        description = 'Field IoT devices → local gateway/fog nodes → secure regional ingest (MQTT/DTLS/HTTPS) → stream fabric → time-series + immutable evidence store → analytics, OTA control & fleet management.';
        break;
      /* --------------------------- EDGE AI (robust, production-ready) --------------------------- */

     /* --------------------------- EDGE AI DEPLOYMENTS (robust + detailed) ----------------------- */
      case 'edge-ai':
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
              <marker id="mlFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#8B5CF6" filter="url(#serverGlow)"/>
              </marker>
              <pattern id="meshPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="#60A5FA" opacity="0.2"/>
              </pattern>
              <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(139, 92, 246, 0.3)"/>
              </linearGradient>
              <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(16, 185, 129, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(16, 185, 129, 0.1)"/>
              </linearGradient>
              <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(236, 72, 153, 0.3)"/>
              </linearGradient>
              <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.2)"/>
              </linearGradient>
              <style>
                @keyframes pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.5; }
                }
                @keyframes rotate {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes flow {
                  0% { stroke-dashoffset: 100; }
                  100% { stroke-dashoffset: 0; }
                }
                @keyframes glow {
                  0%, 100% { filter: drop-shadow(0 0 4px currentColor); }
                  50% { filter: drop-shadow(0 0 8px currentColor); }
                }
                .animated-status { animation: pulse 2s ease-in-out infinite; }
                .animated-icon-pulse { animation: pulse 1.5s ease-in-out infinite; }
                .animated-data-packet { animation: pulse 3s ease-in-out infinite; }
                .animated-connection { animation: flow 3s linear infinite; stroke-dasharray: 20; }
                .animated-secure-connection { animation: flow 4s linear infinite; }
                .animated-glow { animation: glow 2s ease-in-out infinite; }
              </style>
            </defs>

            <!-- Enhanced Background with depth -->
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

            <!-- Floating data particles -->
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#60A5FA" class="animated-data-packet"/>
              <circle cx="650" cy="150" r="1.5" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0.5s"/>
              <circle cx="700" cy="350" r="1.5" fill="#EC4899" class="animated-data-packet" style="animation-delay: 1.5s"/>
            </g>

            <!-- Cloud Orchestration Layer -->
            <g class="network-component">
              <rect x="250" y="20" width="300" height="100" rx="12" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="260" y="40" fill="#60A5FA" font-size="13" font-weight="bold">☁️ CLOUD ORCHESTRATION PLANE</text>
              
              <!-- Central Control Plane -->
              <g transform="translate(270, 50)" class="animated-glow">
                <rect width="80" height="50" rx="8" fill="url(#cloudGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                <circle cx="40" cy="15" r="8" fill="#3B82F6" opacity="0.8"/>
                <path d="M35 15 L40 20 L45 15" stroke="#60A5FA" stroke-width="2" fill="none"/>
                <rect x="10" y="28" width="60" height="3" rx="1" fill="#60A5FA" opacity="0.8"/>
                <rect x="10" y="34" width="60" height="3" rx="1" fill="#93C5FD" opacity="0.6"/>
                <rect x="10" y="40" width="60" height="3" rx="1" fill="#BFDBFE" opacity="0.4"/>
                <text x="40" y="60" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Control Plane</text>
              </g>

              <!-- Model Registry -->
              <g transform="translate(365, 50)" class="animated-glow">
                <rect width="80" height="50" rx="8" fill="url(#aiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)"/>
                <rect x="10" y="10" width="60" height="8" rx="2" fill="#8B5CF6" opacity="0.9"/>
                <rect x="12" y="12" width="56" height="1" fill="#A78BFA"/>
                <rect x="12" y="14" width="56" height="1" fill="#C4B5FD" opacity="0.8"/>
                <rect x="10" y="22" width="60" height="6" rx="2" fill="#A78BFA" opacity="0.7"/>
                <rect x="10" y="31" width="60" height="6" rx="2" fill="#C4B5FD" opacity="0.5"/>
                <circle cx="20" cy="42" r="2" fill="#8B5CF6" class="animated-icon-pulse"/>
                <circle cx="35" cy="42" r="2" fill="#A78BFA" class="animated-icon-pulse" style="animation-delay: 0.3s"/>
                <circle cx="50" cy="42" r="2" fill="#C4B5FD" class="animated-icon-pulse" style="animation-delay: 0.6s"/>
                <text x="40" y="60" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Model Registry</text>
              </g>

              <!-- Certificate Authority -->
              <g transform="translate(460, 50)" class="animated-glow">
                <rect width="70" height="50" rx="8" fill="url(#securityGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
                <path d="M35 15 L40 18 L45 15 L45 25 C45 28 40 30 35 30 C30 30 25 28 25 25 L25 15 L30 18 L35 15" fill="none" stroke="#F59E0B" stroke-width="2"/>
                <circle cx="35" cy="22" r="3" fill="#FBBF24"/>
                <rect x="10" y="36" width="50" height="2" rx="1" fill="#F59E0B" opacity="0.8"/>
                <rect x="10" y="40" width="50" height="2" rx="1" fill="#FBBF24" opacity="0.6"/>
                <text x="35" y="60" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Cert Auth</text>
              </g>

              <!-- Status indicators -->
              <g transform="translate(480, 25)">
                <rect width="60" height="12" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
                <text x="30" y="8" text-anchor="middle" fill="#10B981" font-size="7" font-weight="600">ACTIVE</text>
              </g>
            </g>

            <!-- Secure Certificate Mesh Network -->
            <path d="M400 120 L150 220" stroke="#F59E0B" stroke-width="2" stroke-dasharray="8,4" class="animated-connection" opacity="0.6"/>
            <path d="M400 120 L400 220" stroke="#F59E0B" stroke-width="2" stroke-dasharray="8,4" class="animated-connection" opacity="0.6"/>
            <path d="M400 120 L650 220" stroke="#F59E0B" stroke-width="2" stroke-dasharray="8,4" class="animated-connection" opacity="0.6"/>
            
            <!-- Model Update Flows -->
            <path d="M405 120 L155 220" stroke="#8B5CF6" stroke-width="2.5" stroke-dasharray="12,6" class="animated-secure-connection" marker-end="url(#mlFlow)"/>
            <path d="M405 120 L405 220" stroke="#8B5CF6" stroke-width="2.5" stroke-dasharray="12,6" class="animated-secure-connection" marker-end="url(#mlFlow)"/>
            <path d="M405 120 L655 220" stroke="#8B5CF6" stroke-width="2.5" stroke-dasharray="12,6" class="animated-secure-connection" marker-end="url(#mlFlow)"/>

            <!-- Edge Node 1 - Manufacturing -->
            <g class="network-component">
              <rect x="40" y="220" width="220" height="100" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="10,5" class="animated-secure-connection"/>
              <text x="50" y="240" fill="#34D399" font-size="12" font-weight="bold">🏭 EDGE NODE 1 - Manufacturing</text>
              
              <!-- Edge Device -->
              <g transform="translate(55, 250)" class="animated-glow">
                <rect width="65" height="45" rx="6" fill="url(#edgeGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="49" height="6" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="8" y="17" width="49" height="4" rx="1" fill="#34D399" opacity="0.7"/>
                <rect x="8" y="24" width="49" height="4" rx="1" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="15" cy="35" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="32" cy="35" r="2" fill="#34D399" class="animated-status"/>
                <circle cx="49" cy="35" r="2" fill="#6EE7B7" class="animated-status"/>
                <text x="32" y="54" text-anchor="middle" fill="#6EE7B7" font-size="7" font-weight="600">Edge Gateway</text>
              </g>

              <!-- AI Model Container -->
              <g transform="translate(130, 250)" class="animated-glow">
                <rect width="60" height="45" rx="6" fill="url(#aiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="30" cy="15" r="7" fill="#8B5CF6" opacity="0.8"/>
                <path d="M25 15 L30 18 L35 15 M25 20 L30 23 L35 20" stroke="#A78BFA" stroke-width="1.5" fill="none"/>
                <rect x="10" y="28" width="40" height="3" rx="1" fill="#8B5CF6" opacity="0.8"/>
                <rect x="10" y="33" width="40" height="3" rx="1" fill="#A78BFA" opacity="0.6"/>
                <text x="30" y="54" text-anchor="middle" fill="#C4B5FD" font-size="7" font-weight="600">AI Model v2.1</text>
              </g>

              <!-- Local Sensors -->
              <g transform="translate(200, 250)">
                <rect width="50" height="45" rx="6" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="1.5" filter="url(#networkShadow)"/>
                <circle cx="25" cy="15" r="5" fill="none" stroke="#60A5FA" stroke-width="2"/>
                <circle cx="25" cy="15" r="2" fill="#60A5FA" class="animated-icon-pulse"/>
                <path d="M15 25 L35 25 M20 30 L30 30" stroke="#93C5FD" stroke-width="2"/>
                <text x="25" y="54" text-anchor="middle" fill="#93C5FD" font-size="7" font-weight="600">IoT Sensors</text>
              </g>
            </g>

            <!-- Edge Node 2 - Retail -->
            <g class="network-component">
              <rect x="290" y="220" width="220" height="100" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="10,5" class="animated-secure-connection"/>
              <text x="300" y="240" fill="#34D399" font-size="12" font-weight="bold">🏪 EDGE NODE 2 - Retail Store</text>
              
              <!-- Edge Device -->
              <g transform="translate(305, 250)" class="animated-glow">
                <rect width="65" height="45" rx="6" fill="url(#edgeGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="49" height="6" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="8" y="17" width="49" height="4" rx="1" fill="#34D399" opacity="0.7"/>
                <rect x="8" y="24" width="49" height="4" rx="1" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="15" cy="35" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="32" cy="35" r="2" fill="#34D399" class="animated-status"/>
                <circle cx="49" cy="35" r="2" fill="#6EE7B7" class="animated-status"/>
                <text x="32" y="54" text-anchor="middle" fill="#6EE7B7" font-size="7" font-weight="600">Edge Gateway</text>
              </g>

              <!-- AI Model Container -->
              <g transform="translate(380, 250)" class="animated-glow">
                <rect width="60" height="45" rx="6" fill="url(#aiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="30" cy="15" r="7" fill="#8B5CF6" opacity="0.8"/>
                <path d="M25 15 L30 18 L35 15 M25 20 L30 23 L35 20" stroke="#A78BFA" stroke-width="1.5" fill="none"/>
                <rect x="10" y="28" width="40" height="3" rx="1" fill="#8B5CF6" opacity="0.8"/>
                <rect x="10" y="33" width="40" height="3" rx="1" fill="#A78BFA" opacity="0.6"/>
                <text x="30" y="54" text-anchor="middle" fill="#C4B5FD" font-size="7" font-weight="600">AI Model v2.1</text>
              </g>

              <!-- Cameras -->
              <g transform="translate(450, 250)">
                <rect width="50" height="45" rx="6" fill="rgba(236, 72, 153, 0.15)" stroke="#EC4899" stroke-width="1.5" filter="url(#networkShadow)"/>
                <rect x="12" y="12" width="26" height="18" rx="3" fill="none" stroke="#F472B6" stroke-width="2"/>
                <circle cx="25" cy="21" r="4" fill="#EC4899" opacity="0.8"/>
                <circle cx="25" cy="21" r="2" fill="#F9A8D4" class="animated-icon-pulse"/>
                <text x="25" y="54" text-anchor="middle" fill="#F9A8D4" font-size="7" font-weight="600">Vision AI</text>
              </g>
            </g>

            <!-- Edge Node 3 - Healthcare -->
            <g class="network-component">
              <rect x="540" y="220" width="220" height="100" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="10,5" class="animated-secure-connection"/>
              <text x="550" y="240" fill="#34D399" font-size="12" font-weight="bold">🏥 EDGE NODE 3 - Healthcare</text>
              
              <!-- Edge Device -->
              <g transform="translate(555, 250)" class="animated-glow">
                <rect width="65" height="45" rx="6" fill="url(#edgeGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="49" height="6" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="8" y="17" width="49" height="4" rx="1" fill="#34D399" opacity="0.7"/>
                <rect x="8" y="24" width="49" height="4" rx="1" fill="#6EE7B7" opacity="0.5"/>
                <circle cx="15" cy="35" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="32" cy="35" r="2" fill="#34D399" class="animated-status"/>
                <circle cx="49" cy="35" r="2" fill="#6EE7B7" class="animated-status"/>
                <text x="32" y="54" text-anchor="middle" fill="#6EE7B7" font-size="7" font-weight="600">Edge Gateway</text>
              </g>

              <!-- AI Model Container -->
              <g transform="translate(630, 250)" class="animated-glow">
                <rect width="60" height="45" rx="6" fill="url(#aiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="30" cy="15" r="7" fill="#8B5CF6" opacity="0.8"/>
                <path d="M25 15 L30 18 L35 15 M25 20 L30 23 L35 20" stroke="#A78BFA" stroke-width="1.5" fill="none"/>
                <rect x="10" y="28" width="40" height="3" rx="1" fill="#8B5CF6" opacity="0.8"/>
                <rect x="10" y="33" width="40" height="3" rx="1" fill="#A78BFA" opacity="0.6"/>
                <text x="30" y="54" text-anchor="middle" fill="#C4B5FD" font-size="7" font-weight="600">AI Model v2.1</text>
              </g>

              <!-- Medical Devices -->
              <g transform="translate(700, 250)">
                <rect width="50" height="45" rx="6" fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" stroke-width="1.5" filter="url(#networkShadow)"/>
                <path d="M25 12 L25 32 M15 22 L35 22" stroke="#F87171" stroke-width="2.5"/>
                <circle cx="25" cy="22" r="8" fill="none" stroke="#EF4444" stroke-width="2"/>
                <text x="25" y="54" text-anchor="middle" fill="#FCA5A5" font-size="7" font-weight="600">Med Devices</text>
              </g>
            </g>

            <!-- Local Network Layer -->
            <g class="network-component">
              <rect x="40" y="340" width="720" height="90" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="8,4" class="animated-connection"/>
              <text x="50" y="360" fill="#60A5FA" font-size="13" font-weight="bold">📡 LOCAL NETWORK INFRASTRUCTURE</text>
              
              <!-- Edge Data Processing -->
              <g transform="translate(60, 370)" class="animated-glow">
                <rect width="100" height="45" rx="8" fill="url(#cloudGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                <rect x="10" y="10" width="80" height="8" rx="2" fill="#3B82F6" opacity="0.8"/>
                <circle cx="20" cy="14" r="2" fill="#60A5FA" class="animated-data-packet"/>
                <circle cx="40" cy="14" r="2" fill="#93C5FD" class="animated-data-packet" style="animation-delay: 0.5s"/>
                <circle cx="60" cy="14" r="2" fill="#BFDBFE" class="animated-data-packet" style="animation-delay: 1s"/>
                <rect x="10" y="22" width="80" height="4" rx="1" fill="#60A5FA" opacity="0.6"/>
                <rect x="10" y="28" width="80" height="4" rx="1" fill="#93C5FD" opacity="0.4"/>
                <text x="50" y="52" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Edge Processing</text>
              </g>

              <!-- Local Cache -->
              <g transform="translate(175, 370)" class="animated-glow">
                <rect width="90" height="45" rx="8" fill="url(#edgeGradient)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
                <rect x="10" y="10" width="30" height="24" rx="3" fill="#10B981" opacity="0.8"/>
                <rect x="45" y="10" width="30" height="24" rx="3" fill="#34D399" opacity="0.6"/>
                <circle cx="25" cy="22" r="3" fill="#6EE7B7" class="animated-status"/>
                <circle cx="60" cy="22" r="3" fill="#6EE7B7" class="animated-status"/>
                <text x="45" y="52" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Local Cache</text>
              </g>

              <!-- Telemetry Collector -->
              <g transform="translate(280, 370)" class="animated-glow">
                <rect width="95" height="45" rx="8" fill="url(#aiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)"/>
                <path d="M20 15 L47 15 M20 20 L47 20 M20 25 L47 25" stroke="#8B5CF6" stroke-width="2"/>
                <circle cx="55" cy="15" r="2" fill="#8B5CF6" class="animated-icon-pulse"/>
                <circle cx="55" cy="20" r="2" fill="#A78BFA" class="animated-icon-pulse" style="animation-delay: 0.3s"/>
                <circle cx="55" cy="25" r="2" fill="#C4B5FD" class="animated-icon-pulse" style="animation-delay: 0.6s"/>
                <path d="M60 20 L75 15 L75 25 Z" fill="#8B5CF6" opacity="0.6"/>
                <text x="47" y="52" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Telemetry</text>
              </g>

              <!-- Security Layer -->
              <g transform="translate(390, 370)" class="animated-glow">
                <rect width="90" height="45" rx="8" fill="url(#securityGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
                <path d="M45 12 L50 15 L55 12 L55 22 C55 25 50 27 45 27 C40 27 35 25 35 22 L35 12 L40 15 L45 12" fill="none" stroke="#F59E0B" stroke-width="2"/>
                <circle cx="45" cy="19" r="3" fill="#FBBF24" class="animated-icon-pulse"/>
                <rect x="25" y="32" width="40" height="2" rx="1" fill="#F59E0B" opacity="0.8"/>
                <text x="45" y="52" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">TLS/mTLS</text>
              </g>

              <!-- Network Switch -->
              <g transform="translate(495, 370)" class="animated-glow">
                <rect width="85" height="45" rx="8" fill="url(#cloudGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                <rect x="10" y="12" width="65" height="8" rx="2" fill="#3B82F6" opacity="0.8"/>
                <circle cx="20" cy="16" r="1.5" fill="#60A5FA"/>
                <circle cx="30" cy="16" r="1.5" fill="#10B981" class="animated-status"/>
                <circle cx="40" cy="16" r="1.5" fill="#10B981" class="animated-status"/>
                <circle cx="50" cy="16" r="1.5" fill="#60A5FA"/>
                <circle cx="60" cy="16" r="1.5" fill="#10B981" class="animated-status"/>
                <rect x="10" y="24" width="65" height="6" rx="1" fill="#1E293B" stroke="#3B82F6" stroke-width="0.5"/>
                <text x="42" y="52" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Network</text>
        `;
        title = 'Distributed Edge AI with Central Orchestration';
        description = 'Field-deployed AI nodes (GPU/TPU) with local inference → regional aggregation hubs → central AI orchestrator. Model registry + signed OTA, telemetry stream fabric, WORM store, SOC dashboards.';
        break;


      /* ----------------------- AI THREAT HUNTING SYSTEM (robust + detailed) ----------------------- */
      case 'ai-threat-hunting':
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
        title = 'AI Threat Hunting System';
        description = 'Telemetry ingestion → data lake (raw + enriched + immutable evidence) → analytics fabric (ML + graph analysis) → investigator bastion plane with hunting tools and dashboards.';
        break;


      /* ----------------------- TOKENOMICS SIMULATOR (ultra-robust) ----------------------- */
      case 'tokenomics':
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
        title = 'Ephemeral Compute Cluster with Sandbox Overlay';
        description = 'Deterministic sandbox cluster for tokenomics experiments with private chain forks, signed experiment bundles, controlled bridges, HSM custody, immutable evidence, and results analytics.';
        break;


      /* ----------------------- COMPLIANCE & REPORTING GENERATORS (robust + detailed) ----------------------- */
      case 'compliance':
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
        title = 'Secure Document Generation Zone';
        description = 'Data feeds → ETL normalization → doc gen cluster → HSM-signed PDF/DOC artifacts → immutable evidence vault → staged legal review & regulator submission.';
        break;


      /* ----------------------- CUSTOM SECURITY APPLIANCES (robust + detailed) ----------------------- */
      case 'custom-security-appliances':
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
              <marker id="inspectionFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#EF4444" filter="url(#serverGlow)"/>
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
              <linearGradient id="managementGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(139, 92, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(139, 92, 246, 0.1)"/>
              </linearGradient>
              <linearGradient id="inspectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.3)"/>
              </linearGradient>
              <style>
                @keyframes pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.5; }
                }
                @keyframes flow {
                  0% { stroke-dashoffset: 100; }
                  100% { stroke-dashoffset: 0; }
                }
                @keyframes glow {
                  0%, 100% { filter: drop-shadow(0 0 4px currentColor); }
                  50% { filter: drop-shadow(0 0 8px currentColor); }
                }
                .animated-status { animation: pulse 2s ease-in-out infinite; }
                .animated-icon-pulse { animation: pulse 1.5s ease-in-out infinite; }
                .animated-data-packet { animation: pulse 3s ease-in-out infinite; }
                .animated-connection { animation: flow 3s linear infinite; stroke-dasharray: 20; }
                .animated-secure-connection { animation: flow 4s linear infinite; }
                .animated-glow { animation: glow 2s ease-in-out infinite; }
              </style>
            </defs>

            <!-- Enhanced Background with depth -->
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

            <!-- Floating data particles -->
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#60A5FA" class="animated-data-packet"/>
              <circle cx="650" cy="150" r="1.5" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0.5s"/>
              <circle cx="700" cy="350" r="1.5" fill="#EF4444" class="animated-data-packet" style="animation-delay: 1.5s"/>
            </g>

            <!-- Internet/External Zone -->
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#F59E0B" font-size="16" font-weight="bold">🌐</text>
            <text x="90" y="45" fill="#FBBF24" font-size="14" font-weight="bold">INTERNET</text>
            <text x="400" y="60" text-anchor="middle" fill="#FCD34D" font-size="12" font-weight="600">External Network - Untrusted Zone</text>

            <!-- Network performance indicators -->
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">STATUS: ACTIVE</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#3B82F6" font-size="8" font-weight="600">TRAFFIC: HIGH</text>
            </g>

            <!-- Border Router/Gateway -->
            <g class="network-component" transform="translate(350, 90)">
              <rect width="100" height="60" rx="10" fill="url(#routerGradient)" stroke="#3B82F6" stroke-width="3" filter="url(#networkShadow)" class="animated-glow"/>
              <circle cx="50" cy="20" r="12" fill="none" stroke="#60A5FA" stroke-width="2"/>
              <circle cx="50" cy="20" r="6" fill="#3B82F6" opacity="0.8"/>
              <path d="M35 35 L65 35" stroke="#60A5FA" stroke-width="2"/>
              <circle cx="35" cy="35" r="3" fill="#10B981" class="animated-status"/>
              <circle cx="65" cy="35" r="3" fill="#10B981" class="animated-status"/>
              <text x="50" y="55" text-anchor="middle" fill="#93C5FD" font-size="9" font-weight="600">Border Router</text>
            </g>

            <!-- Inline TAP/SPAN Port -->
            <g class="network-component" transform="translate(360, 165)">
              <rect width="80" height="45" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)" class="animated-glow"/>
              <path d="M20 15 L40 15 M20 22 L60 22 M20 29 L40 29" stroke="#F59E0B" stroke-width="2"/>
              <circle cx="65" cy="15" r="2" fill="#F59E0B" class="animated-icon-pulse"/>
              <circle cx="65" cy="22" r="2" fill="#FBBF24" class="animated-icon-pulse" style="animation-delay: 0.3s"/>
              <circle cx="65" cy="29" r="2" fill="#FCD34D" class="animated-icon-pulse" style="animation-delay: 0.6s"/>
              <text x="40" y="50" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">TAP/SPAN</text>
            </g>

            <!-- Isolated Appliance Subnet / Inline DMZ -->
            <g class="network-component">
              <rect x="20" y="230" width="760" height="100" rx="12" fill="rgba(239, 68, 68, 0.08)" stroke="#EF4444" stroke-width="3" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="30" y="250" fill="#F87171" font-size="13" font-weight="bold">🛡️ ISOLATED APPLIANCE SUBNET - Inline Inspection DMZ</text>

              <!-- IDS/IPS Appliance -->
              <g transform="translate(40, 265)" class="animated-glow">
                <rect width="90" height="50" rx="8" fill="url(#firewallGradient)" stroke="#EF4444" stroke-width="2" filter="url(#serverGlow)"/>
                <path d="M45 12 L50 15 L55 12 L55 22 C55 25 50 28 45 28 C40 28 35 25 35 22 L35 12 L40 15 L45 12" fill="none" stroke="#FCA5A5" stroke-width="2"/>
                <circle cx="45" cy="19" r="4" fill="#EF4444" class="animated-icon-pulse"/>
                <rect x="15" y="35" width="60" height="3" rx="1" fill="#EF4444" opacity="0.8"/>
                <rect x="15" y="40" width="60" height="3" rx="1" fill="#F87171" opacity="0.6"/>
                <text x="45" y="60" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">IDS/IPS</text>
              </g>

              <!-- Next-Gen Firewall -->
              <g transform="translate(145, 265)" class="animated-glow">
                <rect width="90" height="50" rx="8" fill="url(#firewallGradient)" stroke="#DC2626" stroke-width="2" filter="url(#serverGlow)"/>
                <path d="M25 15 L30 18 L35 15 M35 18 L40 21 L45 18 M45 21 L50 24 L55 21 M55 24 L60 27 L65 24" stroke="#F87171" stroke-width="2" fill="none"/>
                <rect x="40" y="12" width="10" height="20" rx="2" fill="#EF4444" opacity="0.7"/>
                <circle cx="45" cy="22" r="3" fill="#FCA5A5" class="animated-status"/>
                <rect x="15" y="38" width="60" height="2" rx="1" fill="#DC2626" opacity="0.8"/>
                <text x="45" y="60" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">NGFW</text>
              </g>

              <!-- DLP Appliance -->
              <g transform="translate(250, 265)" class="animated-glow">
                <rect width="90" height="50" rx="8" fill="url(#inspectionGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="15" y="12" width="60" height="8" rx="2" fill="#F59E0B" opacity="0.8"/>
                <path d="M20 24 L70 24 M25 28 L65 28 M30 32 L60 32" stroke="#FBBF24" stroke-width="2"/>
                <circle cx="25" cy="38" r="2" fill="#F59E0B" class="animated-icon-pulse"/>
                <circle cx="45" cy="38" r="2" fill="#FBBF24" class="animated-icon-pulse" style="animation-delay: 0.3s"/>
                <circle cx="65" cy="38" r="2" fill="#FCD34D" class="animated-icon-pulse" style="animation-delay: 0.6s"/>
                <text x="45" y="60" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">DLP</text>
              </g>

              <!-- WAF Appliance -->
              <g transform="translate(355, 265)" class="animated-glow">
                <rect width="90" height="50" rx="8" fill="url(#firewallGradient)" stroke="#EF4444" stroke-width="2" filter="url(#serverGlow)"/>
                <path d="M45 15 L50 18 L55 15 L50 24 L45 15" fill="none" stroke="#FCA5A5" stroke-width="2"/>
                <path d="M35 20 L40 23 L45 20 L40 29 L35 20" fill="none" stroke="#F87171" stroke-width="1.5"/>
                <path d="M55 20 L60 23 L65 20 L60 29 L55 20" fill="none" stroke="#F87171" stroke-width="1.5"/>
                <rect x="25" y="35" width="40" height="3" rx="1" fill="#EF4444" opacity="0.7"/>
                <rect x="25" y="40" width="40" height="3" rx="1" fill="#F87171" opacity="0.5"/>
                <text x="45" y="60" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">WAF</text>
              </g>

              <!-- SSL Inspection -->
              <g transform="translate(460, 265)" class="animated-glow">
                <rect width="90" height="50" rx="8" fill="url(#inspectionGradient)" stroke="#DC2626" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="30" cy="20" r="8" fill="none" stroke="#F59E0B" stroke-width="2"/>
                <circle cx="60" cy="20" r="8" fill="none" stroke="#EF4444" stroke-width="2"/>
                <path d="M38 20 L52 20" stroke="#FBBF24" stroke-width="2" marker-end="url(#inspectionFlow)"/>
                <rect x="25" y="32" width="40" height="3" rx="1" fill="#F59E0B" opacity="0.8"/>
                <rect x="25" y="37" width="40" height="3" rx="1" fill="#EF4444" opacity="0.6"/>
                <text x="45" y="60" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">SSL Inspect</text>
              </g>

              <!-- Threat Detection -->
              <g transform="translate(565, 265)" class="animated-glow">
                <rect width="90" height="50" rx="8" fill="url(#firewallGradient)" stroke="#DC2626" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="45" cy="20" r="10" fill="none" stroke="#EF4444" stroke-width="2" class="animated-icon-pulse"/>
                <circle cx="45" cy="20" r="6" fill="none" stroke="#F87171" stroke-width="1.5"/>
                <circle cx="45" cy="20" r="3" fill="#FCA5A5"/>
                <path d="M35 32 L55 32 M40 37 L50 37" stroke="#EF4444" stroke-width="2"/>
                <text x="45" y="60" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Threat Detect</text>
              </g>

              <!-- Inline Traffic Flow Indicator -->
              <g transform="translate(665, 270)">
                <rect width="80" height="40" rx="6" fill="rgba(239, 68, 68, 0.12)" stroke="#F87171" stroke-width="1.5" stroke-dasharray="4,2"/>
                <path d="M15 12 L65 12 M15 20 L65 20 M15 28 L65 28" stroke="#F87171" stroke-width="1.5" stroke-dasharray="3,2" class="animated-connection"/>
                <circle cx="70" cy="12" r="2" fill="#EF4444" class="animated-data-packet"/>
                <circle cx="70" cy="20" r="2" fill="#F87171" class="animated-data-packet" style="animation-delay: 0.5s"/>
                <circle cx="70" cy="28" r="2" fill="#FCA5A5" class="animated-data-packet" style="animation-delay: 1s"/>
                <text x="40" y="50" text-anchor="middle" fill="#F87171" font-size="7" font-weight="600">Inline Flow</text>
              </g>
            </g>

            <!-- Management VLAN -->
            <g class="network-component">
              <rect x="480" y="350" width="300" height="85" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="490" y="370" fill="#A78BFA" font-size="13" font-weight="bold">🔧 MANAGEMENT VLAN</text>

              <!-- Management Server -->
              <g transform="translate(495, 380)" class="animated-glow">
                <rect width="85" height="45" rx="8" fill="url(#managementGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="10" width="65" height="8" rx="2" fill="#8B5CF6" opacity="0.8"/>
                <rect x="15" y="12" width="55" height="1" fill="#A78BFA"/>
                <rect x="15" y="14" width="55" height="1" fill="#C4B5FD" opacity="0.8"/>
                <rect x="10" y="22" width="65" height="4" rx="1" fill="#A78BFA" opacity="0.6"/>
                <rect x="10" y="28" width="65" height="4" rx="1" fill="#C4B5FD" opacity="0.4"/>
                <circle cx="20" cy="37" r="2" fill="#8B5CF6" class="animated-status"/>
                <circle cx="42" cy="37" r="2" fill="#A78BFA" class="animated-status"/>
                <circle cx="65" cy="37" r="2" fill="#C4B5FD" class="animated-status"/>
                <text x="42" y="58" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Mgmt Server</text>
              </g>

              <!-- SIEM/Logging -->
              <g transform="translate(590, 380)" class="animated-glow">
                <rect width="85" height="45" rx="8" fill="url(#managementGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="10" width="65" height="6" rx="2" fill="#8B5CF6" opacity="0.8"/>
                <rect x="10" y="18" width="65" height="4" rx="1" fill="#A78BFA" opacity="0.6"/>
                <rect x="10" y="24" width="65" height="4" rx="1" fill="#C4B5FD" opacity="0.4"/>
                <rect x="10" y="30" width="65" height="3" rx="1" fill="#DDD6FE" opacity="0.3"/>
                <circle cx="20" cy="38" r="1.5" fill="#8B5CF6" class="animated-data-packet"/>
                <circle cx="40" cy="38" r="1.5" fill="#A78BFA" class="animated-data-packet" style="animation-delay: 0.5s"/>
                <circle cx="60" cy="38" r="1.5" fill="#C4B5FD" class="animated-data-packet" style="animation-delay: 1s"/>
                <text x="42" y="58" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">SIEM/Logs</text>
              </g>

              <!-- Admin Console -->
              <g transform="translate(685, 380)" class="animated-glow">
                <rect width="80" height="45" rx="8" fill="url(#managementGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="10" width="60" height="20" rx="3" fill="#8B5CF6" opacity="0.6"/>
                <rect x="15" y="14" width="50" height="12" rx="2" fill="#1E293B"/>
                <circle cx="25" cy="20" r="2" fill="#10B981" class="animated-icon-pulse"/>
                <path d="M30 18 L60 18 M30 20 L60 20 M30 22 L55 22" stroke="#A78BFA" stroke-width="1"/>
                <text x="40" y="58" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Admin</text>
              </g>
            </g>

            <!-- Monitoring Mirror / SPAN Destination -->
            <g class="network-component">
              <rect x="20" y="350" width="440" height="85" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="8,4" class="animated-connection"/>
              <text x="30" y="370" fill="#60A5FA" font-size="13" font-weight="bold">📊 MONITORING MIRROR - SPAN Destination</text>

              <!-- Network Analyzer -->
              <g transform="translate(35, 380)" class="animated-glow">
                <rect width="95" height="45" rx="8" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="47" cy="18" r="10" fill="none" stroke="#60A5FA" stroke-width="2"/>
                <path d="M37 18 L42 23 L47 13 L52 28 L57 18" stroke="#60A5FA" stroke-width="2" fill="none"/>
                <rect x="20" y="32" width="54" height="3" rx="1" fill="#3B82F6" opacity="0.7"/>
                <rect x="20" y="37" width="54" height="3" rx="1" fill="#60A5FA" opacity="0.5"/>
                <text x="47" y="58" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Analyzer</text>
              </g>

              <!-- Packet Capture -->
              <g transform="translate(140, 380)" class="animated-glow">
                <rect width="95" height="45" rx="8" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="15" y="10" width="65" height="8" rx="2" fill="#10B981" opacity="0.8"/>
                <rect x="15" y="20" width="20" height="15" rx="2" fill="#34D399" opacity="0.7"/>
                <rect x="37" y="20" width="20" height="15" rx="2" fill="#6EE7B7" opacity="0.6"/>
                <rect x="59" y="20" width="20" height="15" rx="2" fill="#A7F3D0" opacity="0.5"/>
                <circle cx="25" cy="27" r="2" fill="#10B981" class="animated-data-packet"/>
                <circle cx="47" cy="27" r="2" fill="#34D399" class="animated-data-packet" style="animation-delay: 0.3s"/>
                <circle cx="69" cy="27" r="2" fill="#6EE7B7" class="animated-data-packet" style="animation-delay: 0.6s"/>
                <text x="47" y="58" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">PacketCapture</text>
              </g>

              <!-- Flow Collector -->
              <g transform="translate(245, 380)" class="animated-glow">
                <rect width="95" height="45" rx="8" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <path d="M25 15 L47 15 M25 20 L47 20 M25 25 L47 25 M25 30 L47 30" stroke="#60A5FA" stroke-width="1.5"/>
                <circle cx="55" cy="15" r="2" fill="#3B82F6" class="animated-icon-pulse"/>
                <circle cx="55" cy="20" r="2" fill="#60A5FA" class="animated-icon-pulse" style="animation-delay: 0.2s"/>
                <circle cx="55" cy="25" r="2" fill="#93C5FD" class="animated-icon-pulse" style="animation-delay: 0.4s"/>
                <circle cx="55" cy="30" r="2" fill="#BFDBFE" class="animated-icon-pulse" style="animation-delay: 0.6s"/>
                <path d="M60 22 L75 17 L75 27 Z" fill="#60A5FA" opacity="0.6"/>
                <text x="47" y="58" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Flow Collect</text>
              </g>

              <!-- Forensics Storage -->
              <g transform="translate(350, 380)" class="animated-glow">
                <rect width="95" height="45" rx="8" fill="url(#routerGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="15" y="10" width="15" height="25" rx="2" fill="#8B5CF6" opacity="0.8"/>
                <rect x="32" y="10" width="15" height="25" rx="2" fill="#A78BFA" opacity="0.6"/>
                <rect x="49" y="10" width="15" height="25" rx="2" fill="#C4B5FD" opacity="0.4"/>
                <circle cx="22" cy="22" r="2" fill="#ECFDF5"/>
                <circle cx="39" cy="22" r="2" fill="#ECFDF5"/>
                <circle cx="56" cy="22" r="2" fill="#ECFDF5"/>
                <rect x="25" y="38" width="35" height="2" rx="1" fill="#8B5CF6" opacity="0.7"/>
                <text x="47" y="58" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Forensics</text>
              </g>
            </g>

            <!-- Internal Network -->
            <g transform="translate(600, 90)">
              <rect width="160" height="120" rx="10" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" class="animated-secure-connection"/>
              <text x="10" y="25" fill="#34D399" font-size  ="13" font-weight="bold">🏢 INTERNAL NETWORK</text>
        `;
        title = 'Custom Security Appliances';
        description = 'Inline deployment of firewalls, IPS/IDS, DLP/WAF appliances in DMZ → Trusted flow; isolated management VLAN with bastion + config mgmt + monitoring mirrors.';
        break;


      /* ----------------------- HA STORAGE SOLUTIONS — Dual-Site Replicated SAN/NAS Fabric ----------------------- */
      case 'ha-storage-solutions':
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
              <marker id="replicationFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#8B5CF6" filter="url(#serverGlow)"/>
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
              <linearGradient id="storageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(16, 185, 129, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(16, 185, 129, 0.2)"/>
              </linearGradient>
              <linearGradient id="serverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
              </linearGradient>
              <linearGradient id="replicationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(236, 72, 153, 0.3)"/>
              </linearGradient>
              <linearGradient id="fabricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.3)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.8)"/>
                <stop offset="100%" stop-color="rgba(245, 158, 11, 0.1)"/>
              </linearGradient>
              <style>
                @keyframes pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.5; }
                }
                @keyframes flow {
                  0% { stroke-dashoffset: 100; }
                  100% { stroke-dashoffset: 0; }
                }
                @keyframes glow {
                  0%, 100% { filter: drop-shadow(0 0 4px currentColor); }
                  50% { filter: drop-shadow(0 0 8px currentColor); }
                }
                .animated-status { animation: pulse 2s ease-in-out infinite; }
                .animated-icon-pulse { animation: pulse 1.5s ease-in-out infinite; }
                .animated-data-packet { animation: pulse 3s ease-in-out infinite; }
                .animated-connection { animation: flow 3s linear infinite; stroke-dasharray: 20; }
                .animated-secure-connection { animation: flow 4s linear infinite; }
                .animated-glow { animation: glow 2s ease-in-out infinite; }
              </style>
            </defs>

            <!-- Enhanced Background -->
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

            <!-- Floating data particles -->
            <g opacity="0.6">
              <circle cx="150" cy="200" r="2" fill="#10B981" class="animated-data-packet"/>
              <circle cx="650" cy="200" r="2" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="100" r="1.5" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="350" r="1" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0.5s"/>
              <circle cx="600" cy="350" r="1" fill="#60A5FA" class="animated-data-packet" style="animation-delay: 1.5s"/>
            </g>

            <!-- Header -->
            <rect x="20" y="20" width="760" height="50" rx="8" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#10B981" font-size="16" font-weight="bold">💾</text>
            <text x="90" y="45" fill="#34D399" font-size="14" font-weight="bold">HIGH AVAILABILITY STORAGE FABRIC</text>
            <text x="400" y="58" text-anchor="middle" fill="#6EE7B7" font-size="11" font-weight="600">Dual-Site Active/Active Storage with Synchronous Replication</text>

            <!-- Status indicators -->
            <g class="performance-indicators">
              <rect x="640" y="28" width="60" height="12" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="670" y="36" text-anchor="middle" fill="#10B981" font-size="7" font-weight="600">SITE A: ACTIVE</text>
              <rect x="710" y="28" width="60" height="12" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="740" y="36" text-anchor="middle" fill="#10B981" font-size="7" font-weight="600">SITE B: ACTIVE</text>
              <rect x="640" y="43" width="130" height="12" rx="6" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
              <text x="705" y="51" text-anchor="middle" fill="#A78BFA" font-size="7" font-weight="600">REPLICATION: SYNC</text>
            </g>

            <!-- PRIMARY SITE A -->
            <g class="network-component">
              <rect x="20" y="90" width="360" height="330" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="30" y="110" fill="#34D399" font-size="13" font-weight="bold">🏢 PRIMARY SITE A - Active</text>

              <!-- Storage Network Fabric A -->
              <g class="network-component">
                <rect x="35" y="125" width="330" height="90" rx="10" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="2" stroke-dasharray="8,4" class="animated-connection"/>
                <text x="45" y="143" fill="#FBBF24" font-size="11" font-weight="bold">📡 Storage Network Fabric A</text>

                <!-- Fibre Channel Switch 1 -->
                <g transform="translate(50, 155)" class="animated-glow">
                  <rect width="80" height="45" rx="8" fill="url(#fabricGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
                  <rect x="10" y="10" width="60" height="8" rx="2" fill="#F59E0B" opacity="0.8"/>
                  <circle cx="20" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="30" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="40" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="50" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="60" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <rect x="10" y="22" width="60" height="6" rx="1" fill="#1E293B" stroke="#F59E0B" stroke-width="0.5"/>
                  <path d="M15 28 L65 28" stroke="#FBBF24" stroke-width="2"/>
                  <circle cx="20" cy="32" r="1.5" fill="#F59E0B" class="animated-icon-pulse"/>
                  <circle cx="40" cy="32" r="1.5" fill="#FBBF24" class="animated-icon-pulse" style="animation-delay: 0.3s"/>
                  <circle cx="60" cy="32" r="1.5" fill="#FCD34D" class="animated-icon-pulse" style="animation-delay: 0.6s"/>
                  <text x="40" y="56" text-anchor="middle" fill="#FBBF24" font-size="7" font-weight="600">FC Switch 1</text>
                </g>

                <!-- Fibre Channel Switch 2 -->
                <g transform="translate(145, 155)" class="animated-glow">
                  <rect width="80" height="45" rx="8" fill="url(#fabricGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
                  <rect x="10" y="10" width="60" height="8" rx="2" fill="#F59E0B" opacity="0.8"/>
                  <circle cx="20" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="30" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="40" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="50" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="60" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <rect x="10" y="22" width="60" height="6" rx="1" fill="#1E293B" stroke="#F59E0B" stroke-width="0.5"/>
                  <path d="M15 28 L65 28" stroke="#FBBF24" stroke-width="2"/>
                  <circle cx="20" cy="32" r="1.5" fill="#F59E0B" class="animated-icon-pulse"/>
                  <circle cx="40" cy="32" r="1.5" fill="#FBBF24" class="animated-icon-pulse" style="animation-delay: 0.3s"/>
                  <circle cx="60" cy="32" r="1.5" fill="#FCD34D" class="animated-icon-pulse" style="animation-delay: 0.6s"/>
                  <text x="40" y="56" text-anchor="middle" fill="#FBBF24" font-size="7" font-weight="600">FC Switch 2</text>
                </g>

                <!-- Ethernet Switch for NAS -->
                <g transform="translate(240, 155)" class="animated-glow">
                  <rect width="110" height="45" rx="8" fill="url(#routerGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                  <rect x="10" y="10" width="90" height="8" rx="2" fill="#3B82F6" opacity="0.8"/>
                  <circle cx="20" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="30" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="40" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="50" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="60" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="70" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="80" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="90" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <rect x="10" y="22" width="90" height="6" rx="1" fill="#1E293B" stroke="#3B82F6" stroke-width="0.5"/>
                  <path d="M15 28 L95 28" stroke="#60A5FA" stroke-width="2"/>
                  <text x="55" y="44" text-anchor="middle" fill="#93C5FD" font-size="7" font-weight="600">10GbE NAS Switch</text>
                </g>
              </g>

              <!-- Storage Cluster A -->
              <g class="network-component">
                <rect x="35" y="230" width="330" height="90" rx="10" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" stroke-width="2" stroke-dasharray="6,3"/>
                <text x="45" y="248" fill="#34D399" font-size="11" font-weight="bold">💽 Storage Cluster A</text>

                <!-- SAN Storage Array 1 -->
                <g transform="translate(50, 260)" class="animated-glow">
                  <rect width="90" height="50" rx="8" fill="url(#storageGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                  <rect x="10" y="8" width="70" height="10" rx="2" fill="#10B981" opacity="0.9"/>
                  <rect x="12" y="10" width="66" height="1" fill="#34D399"/>
                  <rect x="12" y="12" width="66" height="1" fill="#6EE7B7" opacity="0.8"/>
                  <rect x="12" y="14" width="66" height="1" fill="#A7F3D0" opacity="0.6"/>
                  <rect x="10" y="22" width="15" height="20" rx="2" fill="#34D399" opacity="0.8"/>
                  <rect x="27" y="22" width="15" height="20" rx="2" fill="#6EE7B7" opacity="0.7"/>
                  <rect x="44" y="22" width="15" height="20" rx="2" fill="#A7F3D0" opacity="0.6"/>
                  <rect x="61" y="22" width="15" height="20" rx="2" fill="#D1FAE5" opacity="0.5"/>
                  <circle cx="17" cy="32" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="34" cy="32" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="51" cy="32" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="68" cy="32" r="2" fill="#10B981" class="animated-status"/>
                  <text x="45" y="60" text-anchor="middle" fill="#6EE7B7" font-size="7" font-weight="600">SAN Array 1</text>
                </g>

                <!-- SAN Storage Array 2 -->
                <g transform="translate(155, 260)" class="animated-glow">
                  <rect width="90" height="50" rx="8" fill="url(#storageGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                  <rect x="10" y="8" width="70" height="10" rx="2" fill="#10B981" opacity="0.9"/>
                  <rect x="12" y="10" width="66" height="1" fill="#34D399"/>
                  <rect x="12" y="12" width="66" height="1" fill="#6EE7B7" opacity="0.8"/>
                  <rect x="12" y="14" width="66" height="1" fill="#A7F3D0" opacity="0.6"/>
                  <rect x="10" y="22" width="15" height="20" rx="2" fill="#34D399" opacity="0.8"/>
                  <rect x="27" y="22" width="15" height="20" rx="2" fill="#6EE7B7" opacity="0.7"/>
                  <rect x="44" y="22" width="15" height="20" rx="2" fill="#A7F3D0" opacity="0.6"/>
                  <rect x="61" y="22" width="15" height="20" rx="2" fill="#D1FAE5" opacity="0.5"/>
                  <circle cx="17" cy="32" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="34" cy="32" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="51" cy="32" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="68" cy="32" r="2" fill="#10B981" class="animated-status"/>
                  <text x="45" y="60" text-anchor="middle" fill="#6EE7B7" font-size="7" font-weight="600">SAN Array 2</text>
                </g>

                <!-- NAS Filer -->
                <g transform="translate(260, 260)" class="animated-glow">
                  <rect width="90" height="50" rx="8" fill="url(#storageGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                  <rect x="10" y="8" width="70" height="10" rx="2" fill="#3B82F6" opacity="0.9"/>
                  <rect x="12" y="10" width="66" height="2" fill="#60A5FA"/>
                  <rect x="12" y="13" width="66" height="2" fill="#93C5FD" opacity="0.8"/>
                  <rect x="10" y="22" width="22" height="20" rx="2" fill="#60A5FA" opacity="0.7"/>
                  <rect x="34" y="22" width="22" height="20" rx="2" fill="#93C5FD" opacity="0.6"/>
                  <rect x="58" y="22" width="22" height="20" rx="2" fill="#BFDBFE" opacity="0.5"/>
                  <circle cx="21" cy="32" r="2" fill="#3B82F6" class="animated-icon-pulse"/>
                  <circle cx="45" cy="32" r="2" fill="#60A5FA" class="animated-icon-pulse" style="animation-delay: 0.3s"/>
                  <circle cx="69" cy="32" r="2" fill="#93C5FD" class="animated-icon-pulse" style="animation-delay: 0.6s"/>
                  <text x="45" y="60" text-anchor="middle" fill="#93C5FD" font-size="7" font-weight="600">NAS Filer A</text>
                </g>
              </g>

              <!-- Application Servers A -->
              <g class="network-component">
                <rect x="35" y="335" width="330" height="70" rx="10" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="2" stroke-dasharray="6,3"/>
                <text x="45" y="353" fill="#60A5FA" font-size="11" font-weight="bold">🖥️ Application Servers A</text>

                <!-- App Server 1 -->
                <g transform="translate(50, 365)" class="animated-glow">
                  <rect width="70" height="35" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                  <rect x="8" y="6" width="54" height="6" rx="2" fill="#3B82F6" opacity="0.8"/>
                  <rect x="8" y="14" width="54" height="4" rx="1" fill="#60A5FA" opacity="0.6"/>
                  <rect x="8" y="20" width="54" height="4" rx="1" fill="#93C5FD" opacity="0.4"/>
                  <circle cx="15" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                  <circle cx="35" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                  <circle cx="55" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                  <text x="35" y="46" text-anchor="middle" fill="#93C5FD" font-size="7" font-weight="600">Server 1</text>
                </g>

                <!-- App Server 2 -->
                <g transform="translate(135, 365)" class="animated-glow">
                  <rect width="70" height="35" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                  <rect x="8" y="6" width="54" height="6" rx="2" fill="#3B82F6" opacity="0.8"/>
                  <rect x="8" y="14" width="54" height="4" rx="1" fill="#60A5FA" opacity="0.6"/>
                  <rect x="8" y="20" width="54" height="4" rx="1" fill="#93C5FD" opacity="0.4"/>
                  <circle cx="15" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                  <circle cx="35" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                  <circle cx="55" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                  <text x="35" y="46" text-anchor="middle" fill="#93C5FD" font-size="7" font-weight="600">Server 2</text>
                </g>

                <!-- App Server 3 -->
                <g transform="translate(220, 365)" class="animated-glow">
                  <rect width="70" height="35" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                  <rect x="8" y="6" width="54" height="6" rx="2" fill="#3B82F6" opacity="0.8"/>
                  <rect x="8" y="14" width="54" height="4" rx="1" fill="#60A5FA" opacity="0.6"/>
                  <rect x="8" y="20" width="54" height="4" rx="1" fill="#93C5FD" opacity="0.4"/>
                  <circle cx="15" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                  <circle cx="35" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                  <circle cx="55" cy="28" r="1.5" fill="#10B981" class="animated-status"/>
                  <text x="35" y="46" text-anchor="middle" fill="#93C5FD" font-size="7" font-weight="600">Server 3</text>
                </g>
              </g>
            </g>

            <!-- SECONDARY SITE B -->
            <g class="network-component">
              <rect x="420" y="90" width="360" height="330" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="430" y="110" fill="#34D399" font-size="13" font-weight="bold">🏢 SECONDARY SITE B - Active</text>

              <!-- Storage Network Fabric B -->
              <g class="network-component">
                <rect x="435" y="125" width="330" height="90" rx="10" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="2" stroke-dasharray="8,4" class="animated-connection"/>
                <text x="445" y="143" fill="#FBBF24" font-size="11" font-weight="bold">📡 Storage Network Fabric B</text>

                <!-- Fibre Channel Switch 3 -->
                <g transform="translate(450, 155)" class="animated-glow">
                  <rect width="80" height="45" rx="8" fill="url(#fabricGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
                  <rect x="10" y="10" width="60" height="8" rx="2" fill="#F59E0B" opacity="0.8"/>
                  <circle cx="20" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="30" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="40" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="50" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="60" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <rect x="10" y="22" width="60" height="6" rx="1" fill="#1E293B" stroke="#F59E0B" stroke-width="0.5"/>
                  <path d="M15 28 L65 28" stroke="#FBBF24" stroke-width="2"/>
                  <circle cx="20" cy="32" r="1.5" fill="#F59E0B" class="animated-icon-pulse"/>
                  <circle cx="40" cy="32" r="1.5" fill="#FBBF24" class="animated-icon-pulse" style="animation-delay: 0.3s"/>
                  <circle cx="60" cy="32" r="1.5" fill="#FCD34D" class="animated-icon-pulse" style="animation-delay: 0.6s"/>
                  <text x="40" y="56" text-anchor="middle" fill="#FBBF24" font-size="7" font-weight="600">FC Switch 3</text>
                </g>

                <!-- Fibre Channel Switch 4 -->
                <g transform="translate(545, 155)" class="animated-glow">
                  <rect width="80" height="45" rx="8" fill="url(#fabricGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
                  <rect x="10" y="10" width="60" height="8" rx="2" fill="#F59E0B" opacity="0.8"/>
                  <circle cx="20" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="30" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="40" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="50" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <circle cx="60" cy="14" r="2" fill="#10B981" class="animated-status"/>
                  <rect x="10" y="22" width="60" height="6" rx="1" fill="#1E293B" stroke="#F59E0B" stroke-width="0.5"/>
                  <path d="M15 28 L65 28" stroke="#FBBF24" stroke-width="2"/>
                  <circle cx="20" cy="32" r="1.5" fill="#F59E0B" class="animated-icon-pulse"/>
                  <circle cx="40" cy="32" r="1.5" fill="#FBBF24" class="animated-icon-pulse" style="animation-delay: 0.3s"/>
                  <circle cx="60" cy="32" r="1.5" fill="#FCD34D" class="animated-icon-pulse" style="animation-delay: 0.6s"/>
                  <text x="40" y="56" text  -anchor="middle" fill="#FBBF24" font-size="7" font-weight="600">FC Switch 4</text>
                </g>
        `;
        title = 'Dual-Site Replicated SAN/NAS Fabric';
        description = 'Active/active or Active/passive storage clusters with synchronous and asynchronous replication, multi-path fabric, immutable backup overlay, orchestration plane for failover and monitoring.';
        break;


      /* ----------------------- TREASURY & RISK DASHBOARDS (robust + detailed) ----------------------- */
      case 'treasury-risk-dashboards':
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
              <marker id="readOnlyFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#F59E0B" filter="url(#serverGlow)"/>
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
              <linearGradient id="financialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(245, 158, 11, 0.2)"/>
              </linearGradient>
            </defs>

            <style>
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
              }
              @keyframes flow {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -24; }
              }
              @keyframes glow {
                0%, 100% { filter: drop-shadow(0 0 4px currentColor); }
                50% { filter: drop-shadow(0 0 8px currentColor); }
              }
              .animated-data-packet {
                animation: pulse 2s ease-in-out infinite;
              }
              .animated-connection {
                animation: flow 2s linear infinite;
              }
              .animated-secure-connection {
                animation: flow 3s linear infinite;
              }
              .animated-status {
                animation: pulse 1.5s ease-in-out infinite;
              }
              .animated-icon-pulse {
                animation: pulse 2s ease-in-out infinite;
              }
              .animated-server {
                animation: glow 3s ease-in-out infinite;
              }
              .animated-security-shield {
                animation: pulse 2.5s ease-in-out infinite;
              }
            </style>

            {/* Enhanced Background with depth */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

            {/* Floating data particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* External Market Data Feeds */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#F59E0B" font-size="16" font-weight="bold" class="jump-icon">📊</text>
            <text x="90" y="45" fill="#FBBF24" font-size="14" font-weight="bold">EXTERNAL MARKET DATA FEEDS</text>
            <text x="400" y="60" text-anchor="middle" fill="#FCD34D" font-size="12" font-weight="600">Bloomberg • Reuters • FX Rates • Market Indices</text>

            {/* Network performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">STATUS: ACTIVE</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#F59E0B" font-size="8" font-weight="600">READ-ONLY</text>
            </g>

            {/* DMZ Proxy Layer */}
            <g class="network-component">
              <rect x="250" y="100" width="300" height="90" rx="12" fill="rgba(236, 72, 153, 0.08)" stroke="#EC4899" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="260" y="120" fill="#F472B6" font-size="13" font-weight="bold">DMZ PROXY LAYER</text>

              {/* Market Data Proxy */}
              <g transform="translate(270, 135)" class="animated-server">
                <rect width="70" height="40" rx="6" fill="url(#firewallGradient)" stroke="#EC4899" stroke-width="2" filter="url(#networkShadow)"/>
                <circle cx="35" cy="15" r="8" fill="none" stroke="#F9A8D4" stroke-width="1.5" class="animated-security-shield"/>
                <circle cx="35" cy="15" r="4" fill="#EC4899" opacity="0.8"/>
                <rect x="20" y="24" width="30" height="3" rx="1" fill="#F9A8D4" opacity="0.9"/>
                <rect x="18" y="29" width="34" height="2" rx="1" fill="#F472B6" opacity="0.7"/>
                <text x="35" y="50" text-anchor="middle" fill="#F9A8D4" font-size="8" font-weight="600">Market Proxy</text>
              </g>

              {/* Feed Validator */}
              <g transform="translate(355, 135)" class="animated-server">
                <rect width="70" height="40" rx="6" fill="url(#routerGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
                <path d="M35 12 L40 17 L35 25 L30 17 Z" fill="none" stroke="#93C5FD" stroke-width="2"/>
                <circle cx="35" cy="18" r="3" fill="#3B82F6" opacity="0.8"/>
                <rect x="20" y="28" width="30" height="2" rx="1" fill="#93C5FD" opacity="0.7"/>
                <text x="35" y="50" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Validator</text>
              </g>

              {/* Egress Control */}
              <g transform="translate(440, 135)" class="animated-security-shield">
                <rect width="70" height="40" rx="6" fill="url(#firewallGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
                <path d="M35 10 L42 15 L35 24 L28 15 Z" fill="none" stroke="#FCA5A5" stroke-width="2" class="animated-security-shield"/>
                <circle cx="35" cy="17" r="3" fill="#EF4444" opacity="0.8"/>
                <text x="35" y="32" text-anchor="middle" fill="#FCA5A5" font-size="9" font-weight="600">⛔</text>
                <text x="35" y="50" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Egress Ctrl</text>
              </g>
            </g>

            {/* Secure Financial VLAN */}
            <g class="network-component">
              <rect x="20" y="210" width="380" height="130" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="30" y="230" fill="#FBBF24" font-size="13" font-weight="bold">🔒 SECURE FINANCIAL VLAN</text>
              <text x="30" y="245" fill="#FCD34D" font-size="10" font-weight="500">Segregated Network • Zero Trust Access</text>

              {/* Treasury Engine */}
              <g transform="translate(35, 260)" class="animated-server">
                <rect width="75" height="50" rx="6" fill="url(#financialGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="8" width="55" height="8" rx="2" fill="#F59E0B" opacity="0.9"/>
                <rect x="10" y="18" width="55" height="5" rx="1" fill="#FBBF24" opacity="0.7"/>
                <rect x="10" y="25" width="55" height="5" rx="1" fill="#FCD34D" opacity="0.5"/>
                <circle cx="20" cy="35" r="2" fill="#F59E0B" class="animated-status"/>
                <circle cx="30" cy="35" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="40" cy="35" r="2" fill="#3B82F6" class="animated-status"/>
                <text x="37.5" y="60" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Treasury Engine</text>
              </g>

              {/* Risk Analytics */}
              <g transform="translate(125, 260)" class="animated-server">
                <rect width="75" height="50" rx="6" fill="url(#serverGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="8" width="55" height="8" rx="2" fill="#8B5CF6" opacity="0.9"/>
                <rect x="10" y="18" width="55" height="5" rx="1" fill="#A78BFA" opacity="0.7"/>
                <rect x="10" y="25" width="55" height="5" rx="1" fill="#C4B5FD" opacity="0.5"/>
                <circle cx="20" cy="35" r="2" fill="#8B5CF6" class="animated-icon-pulse"/>
                <circle cx="37.5" cy="35" r="2" fill="#A78BFA" class="animated-icon-pulse"/>
                <circle cx="55" cy="35" r="2" fill="#C4B5FD" class="animated-icon-pulse"/>
                <text x="37.5" y="60" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Risk Analytics</text>
              </g>

              {/* Financial Vault */}
              <g transform="translate(215, 260)" class="animated-server">
                <rect width="75" height="50" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="20" y="10" width="35" height="25" rx="3" fill="#10B981" opacity="0.8"/>
                <circle cx="37.5" cy="22.5" r="6" fill="none" stroke="#6EE7B7" stroke-width="2"/>
                <circle cx="37.5" cy="22.5" r="3" fill="#34D399"/>
                <text x="37.5" y="38" text-anchor="middle" fill="#6EE7B7" font-size="10" font-weight="600">🔐</text>
                <text x="37.5" y="60" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Financial Vault</text>
              </g>

              {/* Calculation Engine */}
              <g transform="translate(305, 260)" class="animated-server">
                <rect width="75" height="50" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="8" width="55" height="8" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="10" y="18" width="55" height="5" rx="1" fill="#60A5FA" opacity="0.7"/>
                <rect x="10" y="25" width="55" height="5" rx="1" fill="#93C5FD" opacity="0.5"/>
                <circle cx="25" cy="35" r="2" fill="#3B82F6" class="animated-data-packet"/>
                <circle cx="50" cy="35" r="2" fill="#60A5FA" class="animated-data-packet" style="animation-delay: 0.5s"/>
                <text x="37.5" y="60" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Calc Engine</text>
              </g>
            </g>

            {/* Dashboard & Reporting Layer */}
            <g class="network-component">
              <rect x="420" y="210" width="360" height="130" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="430" y="230" fill="#60A5FA" font-size="13" font-weight="bold">📈 DASHBOARD & REPORTING</text>

              {/* Treasury Dashboard */}
              <g transform="translate(435, 255)" class="animated-server">
                <rect width="90" height="55" rx="6" fill="url(#routerGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="74" height="20" rx="3" fill="#3B82F6" opacity="0.8"/>
                <rect x="12" y="12" width="20" height="12" rx="2" fill="#60A5FA" opacity="0.9"/>
                <rect x="35" y="12" width="20" height="12" rx="2" fill="#93C5FD" opacity="0.7"/>
                <rect x="58" y="12" width="20" height="12" rx="2" fill="#BFDBFE" opacity="0.5"/>
                <text x="45" y="38" text-anchor="middle" fill="#60A5FA" font-size="9" font-weight="600">💰 Treasury</text>
                <text x="45" y="48" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="500">Dashboard</text>
              </g>

              {/* Risk Dashboard */}
              <g transform="translate(540, 255)" class="animated-server">
                <rect width="90" height="55" rx="6" fill="url(#firewallGradient)" stroke="#EF4444" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="74" height="20" rx="3" fill="#EF4444" opacity="0.8"/>
                <rect x="12" y="12" width="20" height="12" rx="2" fill="#F87171" opacity="0.9"/>
                <rect x="35" y="12" width="20" height="12" rx="2" fill="#FCA5A5" opacity="0.7"/>
                <rect x="58" y="12" width="20" height="12" rx="2" fill="#FEE2E2" opacity="0.5"/>
                <text x="45" y="38" text-anchor="middle" fill="#FCA5A5" font-size="9" font-weight="600">⚠️ Risk</text>
                <text x="45" y="48" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="500">Dashboard</text>
              </g>

              {/* Analytics Portal */}
              <g transform="translate(645, 255)" class="animated-server">
                <rect width="90" height="55" rx="6" fill="url(#serverGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="74" height="20" rx="3" fill="#8B5CF6" opacity="0.8"/>
                <rect x="12" y="12" width="20" height="12" rx="2" fill="#A78BFA" opacity="0.9"/>
                <rect x="35" y="12" width="20" height="12" rx="2" fill="#C4B5FD" opacity="0.7"/>
                <rect x="58" y="12" width="20" height="12" rx="2" fill="#DDD6FE" opacity="0.5"/>
                <text x="45" y="38" text-anchor="middle" fill="#C4B5FD" font-size="9" font-weight="600">📊 Analytics</text>
                <text x="45" y="48" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="500">Portal</text>
              </g>
            </g>

            {/* Secure Data Storage */}
            <g class="network-component">
              <rect x="20" y="360" width="760" height="75" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="30" y="380" fill="#34D399" font-size="13" font-weight="bold">💾 SECURE DATA STORAGE & ARCHIVES</text>

              {/* Historical Data Store */}
              <g transform="translate(35, 395)" class="animated-server">
                <rect width="100" height="30" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="6" width="80" height="6" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="10" y="14" width="80" height="4" rx="1" fill="#34D399" opacity="0.7"/>
                <rect x="10" y="20" width="80" height="3" rx="1" fill="#6EE7B7" opacity="0.5"/>
                <text x="50" y="38" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Historical Data</text>
              </g>

              {/* Transaction Archive */}
              <g transform="translate(150, 395)" class="animated-server">
                <rect width="100" height="30" rx="6" fill="url(#financialGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="6" width="80" height="6" rx="2" fill="#F59E0B" opacity="0.9"/>
                <rect x="10" y="14" width="80" height="4" rx="1" fill="#FBBF24" opacity="0.7"/>
                <rect x="10" y="20" width="80" height="3" rx="1" fill="#FCD34D" opacity="0.5"/>
                <text x="50" y="38" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Transaction Archive</text>
              </g>

              {/* Audit Logs */}
              <g transform="translate(265, 395)" class="animated-server">
                <rect width="100" height="30" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="6" width="80" height="6" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="10" y="14" width="80" height="4" rx="1" fill="#60A5FA" opacity="0.7"/>
                <rect x="10" y="20" width="80" height="3" rx="1" fill="#93C5FD" opacity="0.5"/>
                <text x="50" y="38" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Audit Logs</text>
              </g>

              {/* Compliance Store */}
              <g transform="translate(380, 395)" class="animated-server">
                <rect width="100" height="30" rx="6" fill="url(#firewallGradient)" stroke="#EF4444" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="6" width="80" height="6" rx="2" fill="#EF4444" opacity="0.9"/>
                <rect x="10" y="14" width="80" height="4" rx="1" fill="#F87171" opacity="0.7"/>
                <rect x="10" y="20" width="80" height="3" rx="1" fill="#FCA5A5" opacity="0.5"/>
                <text x="50" y="38" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Compliance Store</text>
              </g>

              {/* Encrypted Backup */}
              <g transform="translate(495, 395)" class="animated-server">
                <rect width="100" height="30" rx="6" fill="url(#routerGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="6" width="80" height="6" rx="2" fill="#8B5CF6" opacity="0.9"/>
                <rect x="10" y="14" width="80" height="4" rx="1" fill="#A78BFA" opacity="0.7"/>
                <rect x="10" y="20" width="80" height="3" rx="1" fill="#C4B5FD" opacity="0.5"/>
                <circle cx="50" cy="15" r="2" fill="#8B5CF6" class="animated-icon-pulse"/>
                <text x="50" y="38" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Encrypted Backup</text>
              </g>

              {/* Cold Storage */}
              <g transform="translate(610, 395)" class="animated-server">
                <rect width="100" height="30" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="6" width="80" height="6" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="10" y="14" width="80" height="4" rx="1" fill="#34D399" opacity="0.7"/>
                <rect x="10" y="20" width="80" height="3" rx="1" fill="#6EE7B7" opacity="0.5"/>
                <text x="50" y="38" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Cold Storage</text>
              </g>
            </g>

            {/* Network Connections with data flow */}
            <g class="network-connections">
              {/* Market feeds to DMZ proxies */}
              <path d="M320 80 L320 100" stroke="#F59E0B" stroke-width="4" fill="none" marker-end="url(#readOnlyFlow)" class="animated-connection"/>
              <path d="M400 80 L400 100" stroke="#F59E0B" stroke-width="4" fill="none" marker-end="url(#readOnlyFlow)" class="animated-connection"/>
              <path d="M480 80 L480 100" stroke="#F59E0B" stroke-width="4" fill="none" marker-end="url(#readOnlyFlow)" class="animated-connection"/>
              
              {/* DMZ to Financial VLAN (read-only) */}
              <path d="M305 190 L210 210" stroke="#10B981" stroke-width="3" fill="none" stroke-dasharray="12,6" class="animated-secure-connection" marker-end="url(#secureFlow)"/>
              <circle cx="260" cy="200" r="2" fill="#10B981" class="animated-data-packet"/>
              
              {/* Financial VLAN to Dashboards */}
              <path d="M400 275 L420 275" stroke="#3B82F6" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#networkFlow)"/>
              <circle cx="410" cy="275" r="2" fill="#3B82F6" class="animated-data-packet"/>
              
              {/* Financial VLAN to Storage */}
              <path d="M210 340 L210 360" stroke="#34D399" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-secure-connection" marker-end="url(#secureFlow)"/>
              <path d="M600 340 L600 360" stroke="#34D399" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-secure-connection" marker-end="url(#secureFlow)"/>
              
              {/* Egress control indicator */}
              <path d="M480 175 Q520 160 560 175" stroke="#EF4444" stroke-width="2" fill="none" stroke-dasharray="6,3" class="animated-security-shield" opacity="0.7"/>
            </g>

            {/* Connection Labels */}
            <g class="connection-labels">
              <rect x="230" y="195" width="70" height="18" rx="9" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="265" y="206" text-anchor="middle" fill="#10B981" font-size="9" font-weight="700">READ-ONLY</text>
              
              <rect x="405" y="260" width="60" height="18" rx="9" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="435" y="271" text-anchor="middle" fill="#3B82F6" font-size="9" font-weight="700">LIVE DATA</text>
            </g>
      </svg>
        `;
        title = 'Secure Financial VLAN + Read-Only Feeds';
        description = 'Market/FX feeds → Treasury engines → Risk models → Read-only dashboards for executives, auditors, and regulators. Enforced separation and egress controls.';
        break;


      /* ------------- DEFI YIELD & ARBITRAGE SYSTEMS (robust + production-ready) ----------------------- */
      case 'defi-yield-arbitrage':
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
              <marker id="fastFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#8B5CF6" filter="url(#serverGlow)"/>
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
              <linearGradient id="defiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(139, 92, 246, 0.2)"/>
              </linearGradient>
              <linearGradient id="walletGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(245, 158, 11, 0.2)"/>
              </linearGradient>
            </defs>

            <style>
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
              }
              @keyframes flow {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -24; }
              }
              @keyframes fastflow {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -48; }
              }
              @keyframes glow {
                0%, 100% { filter: drop-shadow(0 0 4px currentColor); }
                50% { filter: drop-shadow(0 0 8px currentColor); }
              }
              .animated-data-packet {
                animation: pulse 2s ease-in-out infinite;
              }
              .animated-connection {
                animation: flow 2s linear infinite;
              }
              .animated-fast-connection {
                animation: fastflow 1s linear infinite;
              }
              .animated-secure-connection {
                animation: flow 3s linear infinite;
              }
              .animated-status {
                animation: pulse 1.5s ease-in-out infinite;
              }
              .animated-icon-pulse {
                animation: pulse 2s ease-in-out infinite;
              }
              .animated-server {
                animation: glow 3s ease-in-out infinite;
              }
              .animated-security-shield {
                animation: pulse 2.5s ease-in-out infinite;
              }
            </style>

            {/* Enhanced Background with depth */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#meshPattern)" opacity="0.4"/>

            {/* Floating data particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#8B5CF6" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#10B981" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#60A5FA" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* External DeFi Exchanges */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(139, 92, 246, 0.1)" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#8B5CF6" font-size="16" font-weight="bold" class="jump-icon">⚡</text>
            <text x="90" y="45" fill="#A78BFA" font-size="14" font-weight="bold">EXTERNAL DeFi EXCHANGES</text>
            <text x="400" y="60" text-anchor="middle" fill="#C4B5FD" font-size="12" font-weight="600">Uniswap • PancakeSwap • SushiSwap • Curve • Balancer</text>

            {/* Network performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="600">LOW LATENCY</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">ACTIVE: 99.9%</text>
            </g>

            {/* Exchange Relay Layer */}
            <g class="network-component">
              <rect x="200" y="100" width="400" height="80" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="210" y="120" fill="#60A5FA" font-size="13" font-weight="bold">⚡ EXCHANGE RELAY LAYER</text>

              {/* Relay Node 1 */}
              <g transform="translate(220, 135)" class="animated-server">
                <rect width="60" height="35" rx="6" fill="url(#routerGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="30" cy="14" r="8" fill="none" stroke="#60A5FA" stroke-width="1.5" class="animated-icon-pulse"/>
                <circle cx="30" cy="14" r="4" fill="#3B82F6" opacity="0.8"/>
                <path d="M20 22 L40 22" stroke="#93C5FD" stroke-width="2" opacity="0.9"/>
                <text x="30" y="45" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Relay-1</text>
              </g>

              {/* Relay Node 2 */}
              <g transform="translate(295, 135)" class="animated-server">
                <rect width="60" height="35" rx="6" fill="url(#routerGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="30" cy="14" r="8" fill="none" stroke="#60A5FA" stroke-width="1.5" class="animated-icon-pulse"/>
                <circle cx="30" cy="14" r="4" fill="#3B82F6" opacity="0.8"/>
                <path d="M20 22 L40 22" stroke="#93C5FD" stroke-width="2" opacity="0.9"/>
                <text x="30" y="45" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Relay-2</text>
              </g>

              {/* Relay Node 3 */}
              <g transform="translate(370, 135)" class="animated-server">
                <rect width="60" height="35" rx="6" fill="url(#routerGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="30" cy="14" r="8" fill="none" stroke="#60A5FA" stroke-width="1.5" class="animated-icon-pulse"/>
                <circle cx="30" cy="14" r="4" fill="#3B82F6" opacity="0.8"/>
                <path d="M20 22 L40 22" stroke="#93C5FD" stroke-width="2" opacity="0.9"/>
                <text x="30" y="45" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Relay-3</text>
              </g>

              {/* Load Balancer */}
              <g transform="translate(450, 135)" class="animated-server">
                <rect width="60" height="35" rx="6" fill="url(#serverGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="8" width="40" height="6" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="10" y="16" width="40" height="4" rx="1" fill="#34D399" opacity="0.7"/>
                <circle cx="20" cy="24" r="1.5" fill="#10B981" class="animated-status"/>
                <circle cx="30" cy="24" r="1.5" fill="#34D399" class="animated-status"/>
                <circle cx="40" cy="24" r="1.5" fill="#6EE7B7" class="animated-status"/>
                <text x="30" y="45" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Load Bal</text>
              </g>

              {/* Rate Limiter */}
              <g transform="translate(525, 135)" class="animated-security-shield">
                <rect width="60" height="35" rx="6" fill="url(#firewallGradient)" stroke="#EF4444" stroke-width="2" filter="url(#serverGlow)"/>
                <path d="M30 10 L36 14 L30 22 L24 14 Z" fill="none" stroke="#FCA5A5" stroke-width="2"/>
                <circle cx="30" cy="16" r="3" fill="#EF4444" opacity="0.8"/>
                <text x="30" y="45" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Rate Limit</text>
              </g>
            </g>

            {/* Multi-Pool Liquidity Mesh */}
            <g class="network-component">
              <rect x="20" y="200" width="380" height="150" rx="12" fill="rgba(139, 92, 246, 0.08)" stroke="#8B5CF6" stroke-width="3" stroke-dasharray="12,6" class="animated-connection"/>
              <text x="30" y="220" fill="#A78BFA" font-size="13" font-weight="bold">🌊 MULTI-POOL LIQUIDITY MESH</text>

              {/* Liquidity Pool 1 */}
              <g transform="translate(35, 240)" class="animated-server">
                <ellipse cx="35" cy="25" rx="32" ry="25" fill="url(#defiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="35" cy="20" r="8" fill="none" stroke="#A78BFA" stroke-width="1.5"/>
                <circle cx="35" cy="20" r="4" fill="#8B5CF6" opacity="0.8"/>
                <text x="35" y="30" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="600">💧</text>
                <text x="35" y="40" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="500">$2.4M TVL</text>
                <text x="35" y="60" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Pool Alpha</text>
              </g>

              {/* Liquidity Pool 2 */}
              <g transform="translate(125, 240)" class="animated-server">
                <ellipse cx="35" cy="25" rx="32" ry="25" fill="url(#defiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="35" cy="20" r="8" fill="none" stroke="#A78BFA" stroke-width="1.5"/>
                <circle cx="35" cy="20" r="4" fill="#8B5CF6" opacity="0.8"/>
                <text x="35" y="30" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="600">💧</text>
                <text x="35" y="40" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="500">$1.8M TVL</text>
                <text x="35" y="60" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Pool Beta</text>
              </g>

              {/* Liquidity Pool 3 */}
              <g transform="translate(215, 240)" class="animated-server">
                <ellipse cx="35" cy="25" rx="32" ry="25" fill="url(#defiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="35" cy="20" r="8" fill="none" stroke="#A78BFA" stroke-width="1.5"/>
                <circle cx="35" cy="20" r="4" fill="#8B5CF6" opacity="0.8"/>
                <text x="35" y="30" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="600">💧</text>
                <text x="35" y="40" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="500">$3.1M TVL</text>
                <text x="35" y="60" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Pool Gamma</text>
              </g>

              {/* Liquidity Pool 4 */}
              <g transform="translate(305, 240)" class="animated-server">
                <ellipse cx="35" cy="25" rx="32" ry="25" fill="url(#defiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="35" cy="20" r="8" fill="none" stroke="#A78BFA" stroke-width="1.5"/>
                <circle cx="35" cy="20" r="4" fill="#8B5CF6" opacity="0.8"/>
                <text x="35" y="30" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="600">💧</text>
                <text x="35" y="40" text-anchor="middle" fill="#A78BFA" font-size="8" font-weight="500">$2.2M TVL</text>
                <text x="35" y="60" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Pool Delta</text>
              </g>

              {/* Pool mesh connections */}
              <path d="M102 265 L135 265" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-fast-connection" marker-end="url(#fastFlow)"/>
              <path d="M192 265 L225 265" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-fast-connection" marker-end="url(#fastFlow)"/>
              <path d="M282 265 L315 265" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-fast-connection" marker-end="url(#fastFlow)"/>
              <path d="M70 280 L160 280" stroke="#A78BFA" stroke-width="1.5" stroke-dasharray="3,2" class="animated-connection" opacity="0.6"/>
              <path d="M160 280 L250 280" stroke="#A78BFA" stroke-width="1.5" stroke-dasharray="3,2" class="animated-connection" opacity="0.6"/>
              <path d="M250 280 L340 280" stroke="#A78BFA" stroke-width="1.5" stroke-dasharray="3,2" class="animated-connection" opacity="0.6"/>

              <text x="200" y="335" text-anchor="middle" fill="#C4B5FD" font-size="10" font-weight="600">Mesh Topology • Low-Latency Routing</text>
            </g>

            {/* Federated Order Router Mesh */}
            <g class="network-component">
              <rect x="420" y="200" width="360" height="150" rx="12" fill="rgba(236, 72, 153, 0.08)" stroke="#EC4899" stroke-width="3" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="430" y="220" fill="#F472B6" font-size="13" font-weight="bold">🔀 FEDERATED ORDER ROUTER MESH</text>

              {/* Arbitrage Engine */}
              <g transform="translate(435, 240)" class="animated-server">
                <rect width="85" height="40" rx="6" fill="url(#routerGradient)" stroke="#EC4899" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="8" width="65" height="8" rx="2" fill="#EC4899" opacity="0.9"/>
                <rect x="10" y="18" width="65" height="5" rx="1" fill="#F472B6" opacity="0.7"/>
                <circle cx="20" cy="28" r="2" fill="#EC4899" class="animated-icon-pulse"/>
                <circle cx="42.5" cy="28" r="2" fill="#F472B6" class="animated-icon-pulse"/>
                <circle cx="65" cy="28" r="2" fill="#F9A8D4" class="animated-icon-pulse"/>
                <text x="42.5" y="52" text-anchor="middle" fill="#F9A8D4" font-size="8" font-weight="600">Arbitrage Engine</text>
              </g>

              {/* Smart Router 1 */}
              <g transform="translate(535, 240)" class="animated-server">
                <rect width="70" height="40" rx="6" fill="url(#defiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="35" cy="15" r="8" fill="none" stroke="#A78BFA" stroke-width="1.5"/>
                <circle cx="35" cy="15" r="4" fill="#8B5CF6" opacity="0.8"/>
                <path d="M20 25 L50 25" stroke="#C4B5FD" stroke-width="2" marker-end="url(#fastFlow)"/>
                <text x="35" y="52" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Router-1</text>
              </g>

              {/* Smart Router 2 */}
              <g transform="translate(620, 240)" class="animated-server">
                <rect width="70" height="40" rx="6" fill="url(#defiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="35" cy="15" r="8" fill="none" stroke="#A78BFA" stroke-width="1.5"/>
                <circle cx="35" cy="15" r="4" fill="#8B5CF6" opacity="0.8"/>
                <path d="M20 25 L50 25" stroke="#C4B5FD" stroke-width="2" marker-end="url(#fastFlow)"/>
                <text x="35" y="52" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Router-2</text>
              </g>

              {/* Smart Router 3 */}
              <g transform="translate(705, 240)" class="animated-server">
                <rect width="70" height="40" rx="6" fill="url(#defiGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="35" cy="15" r="8" fill="none" stroke="#A78BFA" stroke-width="1.5"/>
                <circle cx="35" cy="15" r="4" fill="#8B5CF6" opacity="0.8"/>
                <path d="M20 25 L50 25" stroke="#C4B5FD" stroke-width="2" marker-end="url(#fastFlow)"/>
                <text x="35" y="52" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Router-3</text>
              </g>

              {/* Order Aggregator */}
              <g transform="translate(540, 295)" class="animated-server">
                <rect width="100" height="35" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="8" width="80" height="7" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="10" y="17" width="80" height="4" rx="1" fill="#60A5FA" opacity="0.7"/>
                <circle cx="30" cy="25" r="1.5" fill="#3B82F6" class="animated-data-packet"/>
                <circle cx="50" cy="25" r="1.5" fill="#60A5FA" class="animated-data-packet" style="animation-delay: 0.5s"/>
                <circle cx="70" cy="25" r="1.5" fill="#93C5FD" class="animated-data-packet" style="animation-delay: 1s"/>
                <text x="50" y="47" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Order Aggregator</text>
              </g>

              {/* Router connections */}
              <path d="M520 260 L535 260" stroke="#EC4899" stroke-width="2" class="animated-fast-connection" marker-end="url(#networkFlow)"/>
              <path d="M605 260 L620 260" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-fast-connection"/>
              <path d="M690 260 L705 260" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-fast-connection"/>
            </g>

            {/* HSM Wallet VLAN */}
            <g class="network-component">
              <rect x="20" y="370" width="380" height="70" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="#F59E0B" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="30" y="390" fill="#FBBF24" font-size="13" font-weight="bold">🔐 HSM WALLET VLAN - Secure Key Storage</text>

              {/* Hot Wallet Node */}
              <g transform="translate(35, 400)" class="animated-server">
                <rect width="70" height="30" rx="6" fill="url(#walletGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="35" cy="12" r="6" fill="none" stroke="#FBBF24" stroke-width="2"/>
                <circle cx="35" cy="12" r="3" fill="#F59E0B"/>
                <text x="35" y="22" text-anchor="middle" fill="#FCD34D" font-size="9" font-weight="600">🔥</text>
                <text x="35" y="40" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">Hot Wallet</text>
              </g>

              {/* Cold Wallet Node */}
              <g transform="translate(120, 400)" class="animated-server">
                <rect width="70" height="30" rx="6" fill="url(#routerGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="35" cy="12" r="6" fill="none" stroke="#60A5FA" stroke-width="2"/>
                <circle cx="35" cy="12" r="3" fill="#3B82F6"/>
                <text x="35" y="22" text-anchor="middle" fill="#93C5FD" font-size="9" font-weight="600">❄️</text>
                <text x="35" y="40" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Cold Wallet</text>
              </g>

              {/* HSM Key Store */}
              <g transform="translate(205, 400)" class="animated-server">
                <rect width="80" height="30" rx="6" fill="url(#firewallGradient)" stroke="#EF4444" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="15" y="7" width="50" height="15" rx="3" fill="#EF4444" opacity="0.8"/>
                <circle cx="40" cy="14.5" r="5" fill="none" stroke="#FCA5A5" stroke-width="1.5"/>
                <circle cx="40" cy="14.5" r="2" fill="#FCA5A5"/>
                <text x="40" y="40" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">HSM Keys</text>
              </g>

              {/* Multi-Sig Vault */}
              <g transform="translate(300, 400)" class="animated-server">
                <rect width="85" height="30" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="28" cy="12" r="4" fill="none" stroke="#6EE7B7" stroke-width="1.5"/>
                <circle cx="28" cy="12" r="2" fill="#10B981"/>
                <circle cx="57" cy="12" r="4" fill="none" stroke="#6EE7B7" stroke-width="1.5"/>
                <circle cx="57" cy="12" r="2" fill="#10B981"/>
                <text x="42.5" y="40" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Multi-Sig Vault</text>
              </g>
        `;
        title = 'Multi-Pool Liquidity Mesh with HSM Custody & MEV Controls';
        description = 'Low-latency liquidity mesh, federated order router, HSM-secured wallets, MEV bundle builder, private pool, and immutable audit trail.';
        break;


      /* ----------------------- TRAINING & KNOWLEDGE PLATFORMS — Multi-Tier LMS Topology ----------------------- */
      case 'training':
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
              <marker id="cdnFlow" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
                <path d="M0,0 L0,8 L12,4 z" fill="#8B5CF6" filter="url(#serverGlow)"/>
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
              <linearGradient id="cdnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(139, 92, 246, 0.2)"/>
              </linearGradient>
              <linearGradient id="storageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(16, 185, 129, 0.4)"/>
                <stop offset="50%" stop-color="rgba(30, 41, 59, 0.9)"/>
                <stop offset="100%" stop-color="rgba(16, 185, 129, 0.2)"/>
              </linearGradient>
            </defs>

            <style>
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
              }
              @keyframes flow {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -24; }
              }
              @keyframes glow {
                0%, 100% { filter: drop-shadow(0 0 4px currentColor); }
                50% { filter: drop-shadow(0 0 8px currentColor); }
              }
              .animated-data-packet {
                animation: pulse 2s ease-in-out infinite;
              }
              .animated-connection {
                animation: flow 2s linear infinite;
              }
              .animated-secure-connection {
                animation: flow 3s linear infinite;
              }
              .animated-status {
                animation: pulse 1.5s ease-in-out infinite;
              }
              .animated-icon-pulse {
                animation: pulse 2s ease-in-out infinite;
              }
              .animated-server {
                animation: glow 3s ease-in-out infinite;
              }
              .animated-security-shield {
                animation: pulse 2.5s ease-in-out infinite;
              }
            </style>

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

            {/* CDN & Edge Network */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(139, 92, 246, 0.1)" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#8B5CF6" font-size="16" font-weight="bold" class="jump-icon">🌍</text>
            <text x="90" y="45" fill="#A78BFA" font-size="14" font-weight="bold">CDN & EDGE NETWORK</text>
            <text x="400" y="60" text-anchor="middle" fill="#C4B5FD" font-size="12" font-weight="600">CloudFlare • Akamai • AWS CloudFront - Global Content Delivery</text>

            {/* Network performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">CACHE: 94%</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#8B5CF6" font-size="8" font-weight="600">LATENCY: 45ms</text>
            </g>

            {/* Presentation/Web Tier DMZ */}
            <g class="network-component">
              <rect x="20" y="100" width="760" height="90" rx="12" fill="rgba(236, 72, 153, 0.08)" stroke="#EC4899" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="30" y="120" fill="#F472B6" font-size="13" font-weight="bold">🌐 PRESENTATION / WEB TIER (DMZ)</text>

              {/* Load Balancer */}
              <g transform="translate(40, 135)" class="animated-server">
                <rect width="75" height="40" rx="6" fill="url(#routerGradient)" stroke="#EC4899" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="8" width="55" height="8" rx="2" fill="#EC4899" opacity="0.9"/>
                <rect x="10" y="18" width="55" height="5" rx="1" fill="#F472B6" opacity="0.7"/>
                <circle cx="20" cy="28" r="2" fill="#EC4899" class="animated-status"/>
                <circle cx="37.5" cy="28" r="2" fill="#F472B6" class="animated-status"/>
                <circle cx="55" cy="28" r="2" fill="#F9A8D4" class="animated-status"/>
                <text x="37.5" y="52" text-anchor="middle" fill="#F9A8D4" font-size="8" font-weight="600">Load Balancer</text>
              </g>

              {/* Web Server 1 */}
              <g transform="translate(135, 135)" class="animated-server">
                <rect width="70" height="40" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="54" height="8" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="8" y="18" width="54" height="5" rx="1" fill="#60A5FA" opacity="0.7"/>
                <circle cx="18" cy="28" r="2" fill="#3B82F6" class="animated-icon-pulse"/>
                <circle cx="35" cy="28" r="2" fill="#60A5FA" class="animated-icon-pulse"/>
                <circle cx="52" cy="28" r="2" fill="#93C5FD" class="animated-icon-pulse"/>
                <text x="35" y="52" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Web-1</text>
              </g>

              {/* Web Server 2 */}
              <g transform="translate(220, 135)" class="animated-server">
                <rect width="70" height="40" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="54" height="8" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="8" y="18" width="54" height="5" rx="1" fill="#60A5FA" opacity="0.7"/>
                <circle cx="18" cy="28" r="2" fill="#3B82F6" class="animated-icon-pulse"/>
                <circle cx="35" cy="28" r="2" fill="#60A5FA" class="animated-icon-pulse"/>
                <circle cx="52" cy="28" r="2" fill="#93C5FD" class="animated-icon-pulse"/>
                <text x="35" y="52" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Web-2</text>
              </g>

              {/* Web Server 3 */}
              <g transform="translate(305, 135)" class="animated-server">
                <rect width="70" height="40" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="54" height="8" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="8" y="18" width="54" height="5" rx="1" fill="#60A5FA" opacity="0.7"/>
                <circle cx="18" cy="28" r="2" fill="#3B82F6" class="animated-icon-pulse"/>
                <circle cx="35" cy="28" r="2" fill="#60A5FA" class="animated-icon-pulse"/>
                <circle cx="52" cy="28" r="2" fill="#93C5FD" class="animated-icon-pulse"/>
                <text x="35" y="52" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Web-3</text>
              </g>

              {/* WAF */}
              <g transform="translate(395, 135)" class="animated-security-shield">
                <rect width="70" height="40" rx="6" fill="url(#firewallGradient)" stroke="#EF4444" stroke-width="2" filter="url(#serverGlow)"/>
                <path d="M35 10 L42 15 L35 26 L28 15 Z" fill="none" stroke="#FCA5A5" stroke-width="2"/>
                <circle cx="35" cy="18" r="3" fill="#EF4444" opacity="0.8"/>
                <text x="35" y="52" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">WAF</text>
              </g>

              {/* Static Cache */}
              <g transform="translate(480, 135)" class="animated-server">
                <rect width="80" height="40" rx="6" fill="url(#cdnGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="8" width="60" height="8" rx="2" fill="#8B5CF6" opacity="0.9"/>
                <rect x="10" y="18" width="60" height="5" rx="1" fill="#A78BFA" opacity="0.7"/>
                <circle cx="25" cy="28" r="2" fill="#8B5CF6" class="animated-data-packet"/>
                <circle cx="40" cy="28" r="2" fill="#A78BFA" class="animated-data-packet" style="animation-delay: 0.5s"/>
                <circle cx="55" cy="28" r="2" fill="#C4B5FD" class="animated-data-packet" style="animation-delay: 1s"/>
                <text x="40" y="52" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Static Cache</text>
              </g>

              {/* API Gateway */}
              <g transform="translate(575, 135)" class="animated-server">
                <rect width="80" height="40" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <circle cx="40" cy="16" r="8" fill="none" stroke="#6EE7B7" stroke-width="1.5"/>
                <circle cx="40" cy="16" r="4" fill="#10B981" opacity="0.8"/>
                <path d="M25 28 L55 28" stroke="#34D399" stroke-width="2" marker-end="url(#secureFlow)"/>
                <text x="40" y="52" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">API Gateway</text>
              </g>

              {/* SSL/TLS Termination */}
              <g transform="translate(670, 135)" class="animated-security-shield">
                <rect width="90" height="40" rx="6" fill="url(#firewallGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="20" y="10" width="50" height="18" rx="3" fill="#F59E0B" opacity="0.8"/>
                <circle cx="45" cy="19" r="5" fill="none" stroke="#FBBF24" stroke-width="1.5"/>
                <circle cx="45" cy="19" r="2.5" fill="#FCD34D"/>
                <text x="45" y="52" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">SSL/TLS Term</text>
              </g>
            </g>

            {/* Application Tier (Private Subnets) */}
            <g class="network-component">
              <rect x="20" y="210" width="380" height="140" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" stroke-width="3" stroke-dasharray="12,6" class="animated-secure-connection"/>
              <text x="30" y="230" fill="#60A5FA" font-size="13" font-weight="bold">⚙️ APPLICATION TIER (Private Subnets)</text>

              {/* LMS Core Engine */}
              <g transform="translate(35, 250)" class="animated-server">
                <rect width="85" height="45" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="8" width="65" height="10" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="10" y="20" width="65" height="6" rx="1" fill="#60A5FA" opacity="0.7"/>
                <circle cx="20" cy="30" r="2" fill="#3B82F6" class="animated-icon-pulse"/>
                <circle cx="42.5" cy="30" r="2" fill="#60A5FA" class="animated-icon-pulse"/>
                <circle cx="65" cy="30" r="2" fill="#93C5FD" class="animated-icon-pulse"/>
                <text x="42.5" y="58" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">LMS Core Engine</text>
              </g>

              {/* Course Manager */}
              <g transform="translate(135, 250)" class="animated-server">
                <rect width="75" height="45" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="59" height="10" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="8" y="20" width="59" height="6" rx="1" fill="#34D399" opacity="0.7"/>
                <circle cx="18" cy="30" r="2" fill="#10B981" class="animated-status"/>
                <circle cx="37.5" cy="30" r="2" fill="#34D399" class="animated-status"/>
                <circle cx="57" cy="30" r="2" fill="#6EE7B7" class="animated-status"/>
                <text x="37.5" y="58" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Course Manager</text>
              </g>

              {/* Assessment Engine */}
              <g transform="translate(225, 250)" class="animated-server">
                <rect width="75" height="45" rx="6" fill="url(#cdnGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="59" height="10" rx="2" fill="#8B5CF6" opacity="0.9"/>
                <rect x="8" y="20" width="59" height="6" rx="1" fill="#A78BFA" opacity="0.7"/>
                <circle cx="18" cy="30" r="2" fill="#8B5CF6" class="animated-icon-pulse"/>
                <circle cx="37.5" cy="30" r="2" fill="#A78BFA" class="animated-icon-pulse"/>
                <circle cx="57" cy="30" r="2" fill="#C4B5FD" class="animated-icon-pulse"/>
                <text x="37.5" y="58" text-anchor="middle" fill="#C4B5FD" font-size="8" font-weight="600">Assessment Eng</text>
              </g>

              {/* User Management */}
              <g transform="translate(315, 250)" class="animated-server">
                <rect width="75" height="45" rx="6" fill="url(#firewallGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="59" height="10" rx="2" fill="#F59E0B" opacity="0.9"/>
                <rect x="8" y="20" width="59" height="6" rx="1" fill="#FBBF24" opacity="0.7"/>
                <circle cx="18" cy="30" r="2" fill="#F59E0B" class="animated-status"/>
                <circle cx="37.5" cy="30" r="2" fill="#FBBF24" class="animated-status"/>
                <circle cx="57" cy="30" r="2" fill="#FCD34D" class="animated-status"/>
                <text x="37.5" y="58" text-anchor="middle" fill="#FBBF24" font-size="8" font-weight="600">User Manager</text>
              </g>

              {/* Analytics Service */}
              <g transform="translate(60, 310)" class="animated-server">
                <rect width="90" height="30" rx="6" fill="url(#serverGradient)" stroke="#EC4899" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="6" width="70" height="8" rx="2" fill="#EC4899" opacity="0.9"/>
                <rect x="10" y="16" width="70" height="4" rx="1" fill="#F472B6" opacity="0.7"/>
                <text x="45" y="40" text-anchor="middle" fill="#F9A8D4" font-size="8" font-weight="600">Analytics Service</text>
              </g>

              {/* Notification Service */}
              <g transform="translate(165, 310)" class="animated-server">
                <rect width="90" height="30" rx="6" fill="url(#routerGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="6" width="70" height="8" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="10" y="16" width="70" height="4" rx="1" fill="#60A5FA" opacity="0.7"/>
                <text x="45" y="40" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Notification Service</text>
              </g>

              {/* Integration Hub */}
              <g transform="translate(270, 310)" class="animated-server">
                <rect width="90" height="30" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="6" width="70" height="8" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="10" y="16" width="70" height="4" rx="1" fill="#34D399" opacity="0.7"/>
                <text x="45" y="40" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Integration Hub</text>
              </g>
            </g>

            {/* Database Tier */}
            <g class="network-component">
              <rect x="420" y="210" width="360" height="140" rx="12" fill="rgba(220, 38, 38, 0.08)" stroke="#DC2626" stroke-width="3" stroke-dasharray="6,3" class="animated-connection"/>
              <text x="430" y="230" fill="#F87171" font-size="13" font-weight="bold">💾 DATABASE & CACHE TIER</text>

              {/* Primary Database */}
              <g transform="translate(435, 250)" class="animated-server">
                <rect width="85" height="45" rx="6" fill="url(#serverGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="8" width="65" height="10" rx="2" fill="#3B82F6" opacity="0.9"/>
                <rect x="12" y="10" width="61" height="1" fill="#60A5FA"/>
                <rect x="12" y="12" width="61" height="1" fill="#93C5FD" opacity="0.8"/>
                <rect x="12" y="14" width="61" height="1" fill="#BFDBFE" opacity="0.6"/>
                <rect x="10" y="20" width="65" height="8" rx="1" fill="#1E293B" stroke="#3B82F6" stroke-width="0.5"/>
                <circle cx="20" cy="24" r="1.5" fill="#3B82F6" class="animated-icon-pulse"/>
                <circle cx="32.5" cy="24" r="1.5" fill="#10B981" class="animated-icon-pulse"/>
                <circle cx="45" cy="24" r="1.5" fill="#F59E0B" class="animated-icon-pulse"/>
                <circle cx="57.5" cy="24" r="1.5" fill="#EF4444" class="animated-icon-pulse"/>
                <text x="42.5" y="58" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Primary DB</text>
              </g>

              {/* Read Replica 1 */}
              <g transform="translate(535, 250)" class="animated-server">
                <rect width="75" height="45" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="59" height="10" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="10" y="10" width="55" height="1" fill="#34D399"/>
                <rect x="10" y="12" width="55" height="1" fill="#6EE7B7" opacity="0.8"/>
                <rect x="8" y="20" width="59" height="8" rx="1" fill="#1E293B" stroke="#10B981" stroke-width="0.5"/>
                <circle cx="18" cy="24" r="1.5" fill="#10B981" class="animated-status"/>
                <circle cx="37.5" cy="24" r="1.5" fill="#34D399" class="animated-status"/>
                <circle cx="57" cy="24" r="1.5" fill="#6EE7B7" class="animated-status"/>
                <text x="37.5" y="58" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Replica-1</text>
              </g>

              {/* Read Replica 2 */}
              <g transform="translate(625, 250)" class="animated-server">
                <rect width="75" height="45" rx="6" fill="url(#routerGradient)" stroke="#10B981" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="8" y="8" width="59" height="10" rx="2" fill="#10B981" opacity="0.9"/>
                <rect x="10" y="10" width="55" height="1" fill="#34D399"/>
                <rect x="10" y="12" width="55" height="1" fill="#6EE7B7" opacity="0.8"/>
                <rect x="8" y="20" width="59" height="8" rx="1" fill="#1E293B" stroke="#10B981" stroke-width="0.5"/>
                <circle cx="18" cy="24" r="1.5" fill="#10B981" class="animated-status"/>
                <circle cx="37.5" cy="24" r="1.5" fill="#34D399" class="animated-status"/>
                <circle cx="57" cy="24" r="1.5" fill="#6EE7B7" class="animated-status"/>
                <text x="37.5" y="58" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Replica-2</text>
              </g>

              {/* Redis Cache Cluster */}
              <g transform="translate(470, 310)" class="animated-server">
                <rect width="100" height="30" rx="6" fill="url(#firewallGradient)" stroke="#DC2626" stroke-width="2" filter="url(#serverGlow)"/>
                <rect x="10" y="6" width="80" height="8" rx="2" fill="#DC2626" opacity="0.9"/>
                <rect x="10" y="16" width="80" height="4" rx="1" fill="#EF4444" opacity="0.7"/>
                <circle cx="25" cy="22" r="2" fill="#DC2626" class="animated-icon-pulse"/>
                <circle cx="50" cy="22" r="2" fill="#EF4444" class="animated-icon-pulse"/>
                <circle cx="75" cy="22" r="2" fill="#F87171" class="animated-icon-pulse"/>
                <text x="60" y="40" text-anchor="middle" fill="#FCA5A5" font-size="8" font-weight="600">Redis Cache</text>
              </g>
            </g>
        `;
        title = 'Multi-Tier LMS with DRM, Proctoring & Evidence Vault';
        description = 'Presentation: CDN & SPA; DMZ API gateway & OIDC; private LMS + authoring; encrypted content storage & DRM; ephemeral proctor VMs; analytics & signed evidence WORM.';
        break;


      /* ----------------------- CUSTOM SECURITY APPLIANCES (production-grade, enhanced) ----------------------- */
      

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
      id: 'rug-pull-detection',
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
      id: 'training',
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