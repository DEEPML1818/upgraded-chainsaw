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

const TopologyDiagram = ({ solutionId }: { solutionId: string }) => {
  const renderTopology = useMemo(() => {
    let svgContent = '';
    let title = '';
    let description = '';

    switch (solutionId) {
      case 'custom-saas':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="simpleShadow">
                <feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.2"/>
              </filter>
              <marker id="networkFlow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#60A5FA"/>
              </marker>
              <marker id="secureFlow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#10B981"/>
              </marker>
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
                <rect x="8" y="8" width="64" height="4" rx="2" fill="#8B5CF6" opacity="0.9"/>
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

            {/* Enhanced Connection Labels with professional styling */}
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
                <rect x="8" y="8" width="20" height="30" rx="3" fill="#10B981" opacity="0.8"/>
                <rect x="32" y="8" width="20" height="30" rx="3" fill="#34D399" opacity="0.6"/>
                <rect x="56" y="8" width="16" height="30" rx="3" fill="#6EE7B7" opacity="0.4"/>
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
                <rect x="8" y="18" width="64" height="6" rx="3" fill="#60A5FA" opacity="0.7"/>
                <rect x="8" y="26" width="64" height="6" rx="3" fill="#93C5FD" opacity="0.5"/>
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
                <rect x="25" y="40" width="10" height="4" rx="2" fill="#34D399" opacity="0.9"/>
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
              <rect x="300" y="170" width="80" height="20" rx="10" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="340" y="182" text-anchor="middle" fill="#F87171" font-size="10" font-weight="700">RBAC</text>
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
              <circle cx="400" cy="300" r="2" fill="#F59E0B" class="animated-data-packet" style="animation-delay: 2s"/>
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
                <circle cx="30" cy="45" r="2" fill="#34D399" class="animated-status"/>
                <circle cx="45" cy="45" r="2" fill="#6EE7B7" class="animated-status"/>
                <circle cx="60" cy="45" r="2" fill="#A7F3D0" class="animated-status"/>
                <text x="40" y="75" text-anchor="middle" fill="#6EE7B7" font-size="8" font-weight="600">Production Apps</text>
              </g>

              {/* Enhanced Database Primary */}
              <g transform="translate(160, 140)" class="animated-server">
                <ellipse cx="30" cy="20" rx="30" ry="12" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <rect x="0" y="20" width="60" height="25" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2"/>
                <ellipse cx="30" cy="45" rx="30" ry="12" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="2"/>
                <text x="30" y="35" text-anchor="middle" fill="#10B981" font-size="16" class="animated-icon-pulse">💾</text>
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
              <text x="400" y="145" text             -anchor="middle" fill="#FBBF24" font-size="14" font-weight="bold">ENCRYPTED SD-WAN</text>

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
                <rect width="80" height="60" rx="8" fill="url(#drSiteGradient6)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow6)"/>
                <rect x="8" y="8" width="64" height="10" rx="5" fill="rgba(239, 68, 68, 0.4)" opacity="0.6"/>
                <rect x="8" y="20" width="64" height="8" rx="4" fill="rgba(248, 113, 113, 0.4)" opacity="0.5"/>
                <rect x="8" y="30" width="64" height="8" rx="4" fill="rgba(252, 165, 165, 0.4)" opacity="0.4"/>
                <circle cx="15" cy="45" r="2" fill="rgba(239, 68, 68, 0.7)" class="animated-status"/>
                <circle cx="30" cy="45" r="2" fill="rgba(248, 113, 113, 0.7)" class="animated-status"/>
                <circle cx="45" cy="45" r="2" fill="rgba(252, 165, 165, 0.7)" class="animated-status"/>
                <circle cx="60" cy="45" r="2" fill="rgba(254, 202, 202, 0.7)" class="animated-status"/>
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
              <circle cx="500" cy="325" r="2" fill="#9333EA" class="animated-data-packet" style="animation-delay: 1.5s"/>
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
              <rect x="350" y="350" width="100" height="20" rx="10" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" stroke-width="1"/>
              <text x="400" y="362" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="700">ORCHESTRATION</text>
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

            {/* Enhanced Background with depth */}
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect width="100%" height="100%" fill="url(#defiMeshPattern)" opacity="0.4"/>

            {/* Floating blockchain particles */}
            <g opacity="0.6">
              <circle cx="150" cy="100" r="2" fill="#EC4899" class="animated-data-packet" style="animation-delay: 0s"/>
              <circle cx="650" cy="150" r="1.5" fill="#9333EA" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="400" cy="300" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 2s"/>
              <circle cx="200" cy="250" r="1" fill="#10B981" class="animated-data-packet" style="animation-delay: 0.5s"/>
            </g>

            {/* Load Balancer Layer */}
            <rect x="20" y="20" width="760" height="60" rx="8" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="40" y="45" fill="#10B981" font-size="16" font-weight="bold" class="jump-icon">🪙</text>
            <text x="90" y="45" fill="#34D399" font-size="14" font-weight="bold">GLOBAL LOAD BALANCER</text>
            <text x="400" y="60" text-anchor="middle" fill="#6EE7B7" font-size="12" font-weight="600">Active/Active Multi-Cloud Distribution</text>

            {/* Performance indicators */}
            <g class="performance-indicators">
              <rect x="680" y="25" width="80" height="15" rx="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="720" y="35" text-anchor="middle" fill="#10B981" font-size="8" font-weight="600">STATUS: ACTIVE</text>
              <rect x="680" y="42" width="80" height="15" rx="7" fill="rgba(236, 72, 153, 0.2)" stroke="#EC4899" stroke-width="1"/>
              <text x="720" y="52" text-anchor="middle" fill="#EC4899" font-size="8" font-weight="600">TVL: $2.4B 🔗</text>
            </g>

            {/* Enhanced AWS Multi-Cloud Region */}
            <g class="network-component">
              <rect x="50" y="100" width="250" height="150" rx="12" fill="url(#defiAwsGradient)" stroke="#EC4899" stroke-width="4" stroke-dasharray="8,4" class="animated-secure-connection"/>
              <text x="60" y="125" fill="#F472B6" font-size="14" font-weight="bold">AWS MULTI-AZ REGION</text>

              {/* Enhanced DeFi Protocol Engine */}
              <g transform="translate(70, 140)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#defiAwsGradient)" stroke="#EC4899" stroke-width="2" filter="url(#defiShadow)"/>
                <rect x="8" y="8" width="64" height="8" rx="4" fill="#EC4899" opacity="0.9"/>
                <rect x="8" y="18" width="64" height="6" rx="3" fill="#F472B6" opacity="0.7"/>
                <rect x="8" y="26" width="64" height="6" rx="3" fill="#FBCFE8" opacity="0.5"/>
                <circle cx="15" cy="38" r="2" fill="#EC4899" class="animated-status"/>
                <circle cx="30" cy="38" r="2" fill="#F472B6" class="animated-status"/>
                <circle cx="45" cy="38" r="2" fill="#FBCFE8" class="animated-status"/>
                <circle cx="60" cy="38" r="2" fill="#FDF2F8" class="animated-status"/>
                <text x="40" y="64" text-anchor="middle" fill="#FBCFE8" font-size="8" font-weight="600">DeFi Protocols</text>
              </g>

              {/* Enhanced Liquidity Pools */}
              <g transform="translate(160, 140)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#defiAwsGradient)" stroke="#EC4899" stroke-width="2" filter="url(#defiShadow)"/>
                <rect x="8" y="8" width="25" height="30" rx="4" fill="#EC4899" opacity="0.8"/>
                <rect x="37" y="8" width="25" height="30" rx="4" fill="#F472B6" opacity="0.6"/>
                <circle cx="20" cy="18" r="2" fill="#FDF2F8"/>
                <circle cx="50" cy="18" r="2" fill="#FDF2F8"/>
                <path d="M23 25 L47 25" stroke="#EC4899" stroke-width="2" marker-end="url(#defiFlow)" class="animated-connection"/>
                <text x="40" y="64" text-anchor="middle" fill="#FBCFE8" font-size="8" font-weight="600">Liquidity Pools</text>
              </g>

              {/* Enhanced Yield Farming */}
              <g transform="translate(250, 140)" class="animated-server">
                <rect width="70" height="50" rx="8" fill="url(#defiAwsGradient)" stroke="#EC4899" stroke-width="2" filter="url(#defiShadow)"/>
                <rect x="8" y="8" width="20" height="25" rx="3" fill="#EC4899" opacity="0.8"/>
                <rect x="32" y="8" width="20" height="25" rx="3" fill="#F472B6" opacity="0.6"/>
                <rect x="56" y="8" width="8" height="25" rx="2" fill="#FBCFE8" opacity="0.4"/>
                <circle cx="18" cy="38" r="1.5" fill="#FDF2F8"/>
                <circle cx="42" cy="38" r="1.5" fill="#FDF2F8"/>
                <circle cx="60" cy="38" r="1.5" fill="#FDF2F8"/>
                <text x="35" y="64" text-anchor="middle" fill="#FBCFE8" font-size="8" font-weight="600">Yield Farm</text>
              </g>
            </g>

            {/* Enhanced Azure Multi-Cloud Region */}
            <g class="network-component">
              <rect x="450" y="100" width="300" height="150" rx="12" fill="url(#defiAzureGradient)" stroke="#3B82F6" stroke-width="4" stroke-dasharray="10,5" class="animated-connection"/>
              <text x="460" y="125" fill="#60A5FA" font-size="14" font-weight="bold">AZURE MULTI-REGION</text>

              {/* Enhanced DEX Engine */}
              <g transform="translate(470, 140)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#defiAzureGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#defiShadow)"/>
                <rect x="8" y="8" width="64" height="8" rx="4" fill="#3B82F6" opacity="0.9"/>
                <rect x="8" y="18" width="64" height="6" rx="3" fill="#60A5FA" opacity="0.7"/>
                <rect x="8" y="26" width="64" height="6" rx="3" fill="#93C5FD" opacity="0.5"/>
                <circle cx="15" cy="38" r="2" fill="#3B82F6" class="animated-status"/>
                <circle cx="30" cy="38" r="2" fill="#60A5FA" class="animated-status"/>
                <circle cx="45" cy="38" r="2" fill="#93C5FD" class="animated-status"/>
                <circle cx="60" cy="38" r="2" fill="#BFDBFE" class="animated-status"/>
                <text x="40" y="64" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">DEX Engine</text>
              </g>

              {/* Enhanced Staking Pools */}
              <g transform="translate(560, 140)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#defiAzureGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#defiShadow)"/>
                <ellipse cx="25" cy="20" rx="15" ry="8" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="1"/>
                <rect x="10" y="20" width="30" height="15" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="1"/>
                <ellipse cx="25" cy="35" rx="15" ry="8" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="1"/>
                <text x="25" y="28" text-anchor="middle" fill="#3B82F6" font-size="12" class="animated-icon-pulse">🪙</text>
                <text x="40" y="64" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">Staking Pools</text>
              </g>

              {/* Enhanced AMM Engine */}
              <g transform="translate(650, 140)" class="animated-server">
                <rect width="80" height="50" rx="8" fill="url(#defiAzureGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#defiShadow)"/>
                <circle cx="40" cy="20" r="12" fill="none" stroke="#60A5FA" stroke-width="1.5" class="animated-router"/>
                <circle cx="40" cy="20" r="6" fill="#3B82F6" opacity="0.8"/>
                <rect x="35" y="30" width="10" height="3" rx="1" fill="#60A5FA" opacity="0.9"/>
                <rect x="33" y="35" width="14" height="2" rx="1" fill="#93C5FD" opacity="0.7"/>
                <text x="40" y="64" text-anchor="middle" fill="#93C5FD" font-size="8" font-weight="600">AMM Engine</text>
              </g>
            </g>

            {/* Enhanced Blockchain P2P Overlay Network */}
            <g class="network-component">
              <ellipse cx="400" cy="320" rx="200" ry="60" fill="url(#blockchainGradient)" stroke="#9333EA" stroke-width="4" stroke-dasharray="12,6" class="animated-connection"/>
              <text x="400" y="305" text-anchor="middle" fill="#A855F7" font-size="16" font-weight="bold">BLOCKCHAIN P2P OVERLAY</text>
              <text x="400" y="320" text-anchor="middle" fill="#C4B5FD" font-size="11">Cross-Chain Protocol Integration</text>
              <text x="400" y="335" text-anchor="middle" fill="#DDD6FE" font-size="9">Ethereum • Polygon • Binance Smart Chain • Avalanche</text>

              {/* Blockchain Network Nodes */}
              <g class="animated-node">
                <circle cx="280" cy="290" r="15" fill="#9333EA" class="animated-status"/>
                <text x="280" y="295" text-anchor="middle" fill="white" font-size="8" font-weight="bold">ETH</text>

                <circle cx="350" cy="280" r="15" fill="#8B5CF6" class="animated-status"/>
                <text x="350" y="285" text-anchor="middle" fill="white" font-size="8" font-weight="bold">POL</text>

                <circle cx="450" cy="280" r="15" fill="#A855F7" class="animated-status"/>
                <text x="450" y="285" text-anchor="middle" fill="white" font-size="8" font-weight="bold">BSC</text>

                <circle cx="520" cy="290" r="15" fill="#C4B5FD" class="animated-status"/>
                <text x="520" y="295" text-anchor="middle" fill="white" font-size="8" font-weight="bold">AVAX</text>
              </g>

              {/* Cross-chain bridges */}
              <g class="animated-connection">
                <path d="M295 290 L335 280" stroke="#9333EA" stroke-width="2" stroke-dasharray="4,2" class="animated-connection" marker-end="url(#blockchainFlow)"/>
                <path d="M365 280 L435 280" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,2" class="animated-connection" marker-end="url(#blockchainFlow)"/>
                <path d="M465 280 L505 290" stroke="#A855F7" stroke-width="2" stroke-dasharray="4,2" class="animated-connection" marker-end="url(#blockchainFlow)"/>
              </g>
            </g>

            {/* Enhanced HSM Security Infrastructure */}
            <g class="network-component">
              <rect x="250" y="380" width="300" height="50" rx="12" fill="url(#hsmGradient)" stroke="#EF4444" stroke-width="3" stroke-dasharray="6,3" class="animated-security-shield"/>
              <text x="260" y="400" fill="#F87171" font-size="14" font-weight="bold">HSM SECURITY INFRASTRUCTURE</text>
              <text x="260" y="415" fill="#FCA5A5" font-size="10">Hardware Security Modules & Private Key Management</text>

              {/* HSM Clusters */}
              <g class="animated-server">
                <rect x="270" y="395" width="30" height="20" rx="4" fill="#EF4444" opacity="0.8"/>
                <rect x="310" y="395" width="30" height="20" rx="4" fill="#F87171" opacity="0.6"/>
                <rect x="350" y="395" width="30" height="20" rx="4" fill="#FCA5A5" opacity="0.4"/>
                <rect x="390" y="395" width="30" height="20" rx="4" fill="#EF4444" opacity="0.8"/>
                <rect x="430" y="395" width="30" height="20" rx="4" fill="#F87171" opacity="0.6"/>
                <rect x="470" y="395" width="30" height="20" rx="4" fill="#FCA5A5" opacity="0.4"/>
                <rect x="510" y="395" width="30" height="20" rx="4" fill="#EF4444" opacity="0.8"/>
              </g>
            </g>

            {/* Enhanced Network Connections with data flow */}
            <g class="network-connections">
              {/* Load Balancer to Cloud Regions */}
              <path d="M150 80 L150 100" stroke="#10B981" stroke-width="4" fill="none" marker-end="url(#defiFlow)" class="animated-high-traffic"/>
              <path d="M600 80 L600 100" stroke="#10B981" stroke-width="4" fill="none" marker-end="url(#defiFlow)" class="animated-high-traffic"/>

              {/* Cross-Region Sync */}
              <path d="M300 175 Q400 160 450 175" stroke="#EC4899" stroke-width="3" fill="none" stroke-dasharray="8,4" class="animated-secure-connection" marker-end="url(#defiFlow)"/>

              {/* Cloud to Blockchain */}
              <path d="M175 250 Q200 285 280 290" stroke="#9333EA" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#blockchainFlow)"/>
              <path d="M575 250 Q550 285 520 290" stroke="#3B82F6" stroke-width="3" fill="none" class="animated-connection" marker-end="url(#blockchainFlow)"/>

              {/* Blockchain to HSM */}
              <path d="M400 360 L400 380" stroke="#EF4444" stroke-width="4" fill="none" marker-end="url(#secureFlow)" class="animated-security-shield"/>

              {/* Data flow particles */}
              <circle cx="375" cy="165" r="2" fill="#EC4899" class="animated-data-packet"/>
              <circle cx="350" cy="270" r="2" fill="#9333EA" class="animated-data-packet" style="animation-delay: 1s"/>
              <circle cx="450" cy="270" r="2" fill="#3B82F6" class="animated-data-packet" style="animation-delay: 0.5s"/>
              <circle cx="400" cy="370" r="2" fill="#EF4444" class="animated-data-packet" style="animation-delay: 1.5s"/>
            </g>

            {/* Enhanced Connection Labels */}
            <g class="connection-labels">
              <rect x="100" y="90" width="100" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="150" y="102" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">ACTIVE SYNC</text>
              <rect x="550" y="90" width="100" height="20" rx="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="1"/>
              <text x="600" y="102" text-anchor="middle" fill="#34D399" font-size="10" font-weight="700">ACTIVE SYNC</text>
              <rect x="320" y="165" width="100" height="20" rx="10" fill="rgba(236, 72, 153, 0.2)" stroke="#EC4899" stroke-width="1"/>
              <text x="370" y="177" text-anchor="middle" fill="#F472B6" font-size="10" font-weight="700">CROSS-REGION</text>
              <rect x="240" y="270" width="80" height="20" rx="10" fill="rgba(147, 51, 234, 0.2)" stroke="#9333EA" stroke-width="1"/>
              <text x="280" y="282" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700">BRIDGE</text>
              <rect x="470" y="270" width="80" height="20" rx="10" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
              <text x="510" y="282" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="700">BRIDGE</text>
              <rect x="350" y="370" width="100" height="20" rx="10" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
              <text x="400" y="382" text-anchor="middle" fill="#F87171" font-size="10" font-weight="700">SECURE VAULT</text>
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
              <linearGradient id="nftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(168, 85, 247, 0.3)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="#0F172A"/>

            {/* CDN + Edge Cache Layer */}
            <ellipse cx="400" cy="80" rx="180" ry="40" fill="url(#nftGradient)" stroke="#A855F7" stroke-width="3" class="animated-cloud-float"/>
            <text x="400" y="75" text-anchor="middle" fill="#C4B5FD" font-size="14" font-weight="bold">🎫 EDGE-ACCELERATED CDN</text>
            <text x="400" y="90" text-anchor="middle" fill="#DDD6FE" font-size="10">Global Content Delivery Network</text>

            {/* API Gateway Layer */}
            <rect x="250" y="150" width="300" height="60" rx="12" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="2" class="animated-server"/>
            <text x="260" y="175" fill="#60A5FA" font-size="12" font-weight="bold">CENTRAL API GATEWAY</text>
            <text x="260" y="190" fill="#93C5FD" font-size="10">Microservices Orchestration</text>

            {/* Microservices Layer */}
            <g class="animated-server">
              <rect x="100" y="250" width="120" height="80" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2"/>
              <text x="110" y="270" fill="#34D399" font-size="11" font-weight="bold">🎨 NFT Service</text>

              <rect x="250" y="250" width="120" height="80" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2"/>
              <text x="260" y="270" fill="#FBBF24" font-size="11" font-weight="bold">🪙 Payment Service</text>

              <rect x="400" y="250" width="120" height="80" rx="8" fill="rgba(236, 72, 153, 0.15)" stroke="#EC4899" stroke-width="2"/>
              <text x="410" y="270" fill="#F472B6" font-size="11" font-weight="bold">🎫 Auction Service</text>

              <rect x="550" y="250" width="120" height="80" rx="8" fill="rgba(139, 92, 246, 0.15)" stroke="#8B5CF6" stroke-width="2"/>
              <text x="560" y="270" fill="#A78BFA" font-size="11" font-weight="bold">👤 User Service</text>
            </g>

            {/* Secure Wallet Node Cluster */}
            <rect x="300" y="360" width="200" height="60" rx="8" fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" stroke-width="2" class="animated-security-shield"/>
            <text x="310" y="380" fill="#F87171" font-size="12" font-weight="bold">🔗 WALLET NODE CLUSTER</text>
            <text x="310" y="395" fill="#FCA5A5" font-size="10">Segregated Security Subnets</text>

            {/* Network connections */}
            <path d="M400 120 L400 150" stroke="#A855F7" stroke-width="3" class="animated-connection"/>
            <path d="M400 210 L160 250" stroke="#3B82F6" stroke-width="2" class="animated-connection"/>
            <path d="M400 210 L310 250" stroke="#3B82F6" stroke-width="2" class="animated-connection"/>
            <path d="M400 210 L460 250" stroke="#3B82F6" stroke-width="2" class="animated-connection"/>
            <path d="M400 210 L610 250" stroke="#3B82F6" stroke-width="2" class="animated-connection"/>
            <path d="M400 330 L400 360" stroke="#EF4444" stroke-width="3" class="animated-secure-connection"/>
          </svg>
        `;
        title = 'Edge-Accelerated CDN + API Gateway Topology';
        description = 'NFT marketplace with global CDN, microservices, and secure wallet infrastructure';
        break;

      case 'quant-trading':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="quantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(34, 197, 94, 0.3)"/>
                <stop offset="100%" stop-color="rgba(59, 130, 246, 0.1)"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="#0F172A"/>

            {/* Colocated Leaf-Spine Network */}
            <rect x="50" y="50" width="300" height="150" rx="12" fill="url(#quantGradient)" stroke="#22C55E" stroke-width="3" class="animated-network-glow"/>
            <text x="60" y="75" fill="#4ADE80" font-size="14" font-weight="bold">📊 COLOCATED LEAF-SPINE</text>
            <text x="60" y="90" fill="#86EFAC" font-size="10">Deterministic Switching Fabric</text>

            {/* Spine Switches */}
            <circle cx="120" cy="120" r="15" fill="#22C55E" class="animated-router"/>
            <circle cx="180" cy="120" r="15" fill="#22C55E" class="animated-router"/>
            <circle cx="240" cy="120" r="15" fill="#22C55E" class="animated-router"/>
            <text x="200" y="105" text-anchor="middle" fill="#86EFAC" font-size="9">SPINE</text>

            {/* Leaf Switches */}
            <rect x="100" y="160" width="25" height="15" rx="3" fill="#4ADE80"/>
            <rect x="160" y="160" width="25" height="15" rx="3" fill="#4ADE80"/>
            <rect x="220" y="160" width="25" height="15" rx="3" fill="#4ADE80"/>
            <text x="180" y="190" text-anchor="middle" fill="#86EFAC" font-size="9">LEAF SWITCHES</text>

            {/* Market Data Multicast Network */}
            <rect x="450" y="50" width="300" height="100" rx="12" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" class="animated-high-traffic"/>
            <text x="460" y="75" fill="#FBBF24" font-size="14" font-weight="bold">MARKET DATA MULTICAST</text>
            <text x="460" y="90" fill="#FCD34D" font-size="10">Separate High-Speed Network</text>

            {/* DMA Fabric */}
            <rect x="150" y="250" width="500" height="80" rx="12" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="3" class="animated-connection"/>
            <text x="160" y="275" fill="#60A5FA" font-size="14" font-weight="bold">DIRECT MARKET ACCESS (DMA) FABRIC</text>
            <text x="160" y="290" fill="#93C5FD" font-size="10">Hardware Timestamping & Ultra-Low Latency</text>

            {/* Hardware Timestamping Nodes */}
            <g class="animated-server">
              <rect x="200" y="300" width="60" height="20" rx="4" fill="#3B82F6"/>
              <rect x="300" y="300" width="60" height="20" rx="4" fill="#3B82F6"/>
              <rect x="400" y="300" width="60" height="20" rx="4" fill="#3B82F6"/>
              <rect x="500" y="300" width="60" height="20" rx="4" fill="#3B82F6"/>
              <text x="400" y="345" text-anchor="middle" fill="#93C5FD" font-size="9">HARDWARE TIMESTAMPING</text>
            </g>

            {/* Trading Algorithms */}
            <rect x="50" y="360" width="200" height="60" rx="8" fill="rgba(139, 92, 246, 0.15)" stroke="#8B5CF6" stroke-width="2" class="animated-server"/>
            <text x="60" y="380" fill="#A78BFA" font-size="12" font-weight="bold">TRADING ALGORITHMS</text>
            <text x="60" y="395" fill="#C4B5FD" font-size="10">Ultra-Low Latency Execution</text>

            {/* Risk Management */}
            <rect x="550" y="360" width="200" height="60" rx="8" fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" stroke-width="2" class="animated-security-shield"/>
            <text x="560" y="380" fill="#F87171" font-size="12" font-weight="bold">RISK MANAGEMENT</text>
            <text x="560" y="395" fill="#FCA5A5" font-size="10">Real-time Position Monitoring</text>

            {/* Network Connections */}
            <path d="M350 100 L450 100" stroke="#22C55E" stroke-width="4" class="animated-high-traffic"/>
            <path d="M200 200 L200 250" stroke="#22C55E" stroke-width="3" class="animated-connection"/>
            <path d="M600 150 L600 250" stroke="#F59E0B" stroke-width="3" class="animated-connection"/>
            <path d="M250 330 L150 360" stroke="#3B82F6" stroke-width="3" class="animated-connection"/>
            <path d="M550 330 L650 360" stroke="#3B82F6" stroke-width="3" class="animated-connection"/>
          </svg>
        `;
        title = 'Leaf-Spine Low-Latency Fabric (Colo + DMA)';
        description = 'Ultra-low latency trading infrastructure with hardware timestamping and direct market access';
        break;

      case 'fraud-detection':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="fraudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(239, 68, 68, 0.3)"/>
                <stop offset="100%" stop-color="rgba(245, 158, 11, 0.1)"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="#0F172A"/>

            {/* Data Collectors Layer */}
            <rect x="50" y="50" width="700" height="60" rx="8" fill="url(#fraudGradient)" stroke="#EF4444" stroke-width="2" class="animated-server"/>
            <text x="60" y="75" fill="#F87171" font-size="14" font-weight="bold">🔍 HIGH-THROUGHPUT DATA COLLECTORS</text>
            <text x="60" y="90" fill="#FCA5A5" font-size="10">TAP/SPAN Network Feeds & Transaction Monitoring</text>

            {/* Pub/Sub Overlay Network */}
            <ellipse cx="400" cy="180" rx="200" ry="50" fill="rgba(147, 51, 234, 0.15)" stroke="#9333EA" stroke-width="3" stroke-dasharray="8,4" class="animated-connection"/>
            <text x="400" y="175" text-anchor="middle" fill="#A855F7" font-size="14" font-weight="bold">KAFKA/MQ PUB/SUB OVERLAY</text>
            <text x="400" y="190" text-anchor="middle" fill="#C4B5FD" font-size="10">Event-Driven Stream Processing Mesh</text>

            {/* Stream Processors */}
            <g class="animated-server">
              <rect x="100" y="250" width="120" height="70" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="2"/>
              <text x="110" y="270" fill="#60A5FA" font-size="11" font-weight="bold">Pattern Analysis</text>
              <text x="110" y="285" fill="#93C5FD" font-size="9">Real-time Detection</text>

              <rect x="250" y="250" width="120" height="70" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2"/>
              <text x="260" y="270" fill="#34D399" font-size="11" font-weight="bold">Anomaly Scoring</text>
              <text x="260" y="285" fill="#6EE7B7" font-size="9">ML Risk Assessment</text>

              <rect x="400" y="250" width="120" height="70" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2"/>
              <text x="410" y="270" fill="#FBBF24" font-size="11" font-weight="bold">Fraud Correlation</text>
              <text x="410" y="285" fill="#FCD34D" font-size="9">Cross-Channel Analytics</text>

              <rect x="550" y="250" width="120" height="70" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="#A855F7" stroke-width="2"/>
              <text x="560" y="270" fill="#C4B5FD" font-size="11" font-weight="bold">Behavioral AI</text>
              <text x="560" y="285" fill="#DDD6FE" font-size="9">User Profiling</text>
            </g>

            {/* Analytics Cluster */}
            <rect x="200" y="350" width="400" height="70" rx="8" fill="rgba(34, 197, 94, 0.15)" stroke="#22C55E" stroke-width="2" class="animated-network-glow"/>
            <text x="210" y="375" fill="#4ADE80" font-size="14" font-weight="bold">ANALYTICS CLUSTER</text>
            <text x="210" y="390" fill="#86EFAC" font-size="10">Real-time Dashboard & Alert Generation</text>

            {/* SIEM Ingestion Lanes */}
            <rect x="650" y="300" width="120" height="100" rx="8" fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" stroke-width="2" class="animated-security-shield"/>
            <text x="660" y="320" fill="#F87171" font-size="12" font-weight="bold">SIEM</text>
            <text x="660" y="335" fill="#F87171" font-size="12" font-weight="bold">INGESTION</text>
            <text x="660" y="355" fill="#FCA5A5" font-size="9">Security Event</text>
            <text x="660" y="370" fill="#FCA5A5" font-size="9">Log Aggregation</text>

            {/* Network Connections */}
            <path d="M400 110 L400 130" stroke="#EF4444" stroke-width="4" class="animated-high-traffic"/>
            <path d="M400 230 L160 250" stroke="#9333EA" stroke-width="3" class="animated-connection"/>
            <path d="M400 230 L310 250" stroke="#9333EA" stroke-width="3" class="animated-connection"/>
            <path d="M400 230 L460 250" stroke="#9333EA" stroke-width="3" class="animated-connection"/>
            <path d="M400 230 L610 250" stroke="#9333EA" stroke-width="3" class="animated-connection"/>
            <path d="M400 320 L400 350" stroke="#22C55E" stroke-width="4" class="animated-connection"/>
            <path d="M600 285 L650 350" stroke="#EF4444" stroke-width="3" class="animated-secure-connection"/>
          </svg>
        `;
        title = 'Event-Driven Stream Processing Mesh';
        description = 'High-throughput fraud detection with real-time analytics and SIEM integration';
        break;

      case 'rug-pull-detection':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="rugGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.3)"/>
                <stop offset="100%" stop-color="rgba(239, 68, 68, 0.1)"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="#0F172A"/>

            {/* Edge Telemetry Collectors */}
            <g class="animated-server">
              <ellipse cx="150" cy="80" rx="60" ry="30" fill="url(#rugGradient)" stroke="#F59E0B" stroke-width="2"/>
              <text x="150" y="75" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="bold">⚠️ DEX Endpoint</text>
              <text x="150" y="88" text-anchor="middle" fill="#FCD34D" font-size="8">Uniswap</text>

              <ellipse cx="400" cy="80" rx="60" ry="30" fill="url(#rugGradient)" stroke="#F59E0B" stroke-width="2"/>
              <text x="400" y="75" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="bold">⚠️ DEX Endpoint</text>
              <text x="400" y="88" text-anchor="middle" fill="#FCD34D" font-size="8">PancakeSwap</text>

              <ellipse cx="650" cy="80" rx="60" ry="30" fill="url(#rugGradient)" stroke="#F59E0B" stroke-width="2"/>
              <text x="650" y="75" text-anchor="middle" fill="#FBBF24" font-size="10" font-weight="bold">⚠️ DEX Endpoint</text>
              <text x="650" y="88" text-anchor="middle" fill="#FCD34D" font-size="8">SushiSwap</text>
            </g>

            {/* Lightweight Data Collectors */}
            <rect x="100" y="130" width="600" height="40" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2" class="animated-connection"/>
            <text x="110" y="150" fill="#34D399" font-size="12" font-weight="bold">DISTRIBUTED LIGHTWEIGHT COLLECTORS</text>
            <text x="110" y="162" fill="#6EE7B7" font-size="9">Real-time Contract & Transaction Monitoring</text>

            {/* Secure Overlay Network */}
            <ellipse cx="400" cy="220" rx="180" ry="40" fill="rgba(147, 51, 234, 0.15)" stroke="#9333EA" stroke-width="3" stroke-dasharray="8,4" class="animated-secure-connection"/>
            <text x="400" y="215" text-anchor="middle" fill="#A855F7" font-size="14" font-weight="bold">SECURE OVERLAY NETWORK</text>
            <text x="400" y="228" text-anchor="middle" fill="#C4B5FD" font-size="10">Encrypted Data Feeds & ML Model Distribution</text>

            {/* Central GPU Training Cluster */}
            <rect x="200" y="290" width="400" height="80" rx="12" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" stroke-width="3" class="animated-server"/>
            <text x="210" y="315" fill="#60A5FA" font-size="14" font-weight="bold">🤖 CENTRAL GPU TRAINING CLUSTER</text>
            <text x="210" y="330" fill="#93C5FD" font-size="10">Advanced ML Models for Rug Pull Pattern Recognition</text>

            {/* GPU Nodes */}
            <g class="animated-node">
              <rect x="230" y="340" width="40" height="20" rx="4" fill="#3B82F6"/>
              <rect x="290" y="340" width="40" height="20" rx="4" fill="#3B82F6"/>
              <rect x="350" y="340" width="40" height="20" rx="4" fill="#3B82F6"/>
              <rect x="410" y="340" width="40" height="20" rx="4" fill="#3B82F6"/>
              <rect x="470" y="340" width="40" height="20" rx="4" fill="#3B82F6"/>
              <rect x="530" y="340" width="40" height="20" rx="4" fill="#3B82F6"/>
            </g>

            {/* Edge Inference Nodes */}
            <g class="animated-server">
              <rect x="50" y="390" width="120" height="40" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="#22C55E" stroke-width="2"/>
              <text x="60" y="408" fill="#4ADE80" font-size="10" font-weight="bold">Edge Inference</text>
              <text x="60" y="420" fill="#86EFAC" font-size="8">Low Latency Detection</text>

              <rect x="200" y="390" width="120" height="40" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="#22C55E" stroke-width="2"/>
              <text x="210" y="408" fill="#4ADE80" font-size="10" font-weight="bold">Edge Inference</text>
              <text x="210" y="420" fill="#86EFAC" font-size="8">Real-time Scoring</text>

              <rect x="480" y="390" width="120" height="40" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="#22C55E" stroke-width="2"/>
              <text x="490" y="408" fill="#4ADE80" font-size="10" font-weight="bold">Edge Inference</text>
              <text x="490" y="420" fill="#86EFAC" font-size="8">Alert Generation</text>

              <rect x="630" y="390" width="120" height="40" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="#22C55E" stroke-width="2"/>
              <text x="640" y="408" fill="#4ADE80" font-size="10" font-weight="bold">Edge Inference</text>
              <text x="640" y="420" fill="#86EFAC" font-size="8">Mobile Alerts</text>
            </g>

            {/* Network Connections */}
            <path d="M150 110 L150 130" stroke="#F59E0B" stroke-width="3" class="animated-connection"/>
            <path d="M400 110 L400 130" stroke="#F59E0B" stroke-width="3" class="animated-connection"/>
            <path d="M650 110 L650 130" stroke="#F59E0B" stroke-width="3" class="animated-connection"/>
            <path d="M400 170 L400 180" stroke="#9333EA" stroke-width="4" class="animated-high-traffic"/>
            <path d="M400 230 L160 250" stroke="#3B82F6" stroke-width="3" class="animated-connection"/>
            <path d="M400 230 L310 250" stroke="#3B82F6" stroke-width="3" class="animated-connection"/>
            <path d="M400 230 L460 250" stroke="#3B82F6" stroke-width="3" class="animated-connection"/>
            <path d="M400 230 L610 250" stroke="#3B82F6" stroke-width="3" class="animated-connection"/>
            <path d="M400 330 L400 360" stroke="#22C55E" stroke-width="4" class="animated-connection"/>
            <path d="M600 285 L650 350" stroke="#EF4444" stroke-width="3" class="animated-secure-connection"/>
          </svg>
        `;
        title = 'Edge Telemetry + Central ML Training Cluster';
        description = 'Distributed rug pull detection with edge inference and centralized AI training';
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
        description = 'Decentralized governance platform with multi-chain voting and UI services';
        break;

      default:
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" style="background: #0F172A;">
            <rect width="100%" height="100%" fill="#0F172A"/>
            <rect x="50" y="150" width="200" height="150" rx="20" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" stroke-width="2"/>
            <text x="150" y="200" text-anchor="middle" fill="#60A5FA" font-size="14">Application Layer</text>
            <rect x="300" y="150" width="200" height="150" rx="20" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" stroke-width="2"/>
            <text x="400" y="200" text-anchor="middle" fill="#34D399" font-size="14">Service Layer</text>
            <rect x="550" y="150" width="200" height="150" rx="20" fill="rgba(239, 68, 68, 0.1)" stroke="#EF4444" stroke-width="2"/>
            <text x="650" y="200" text-anchor="middle" fill="#F87171" font-size="14">Data Layer</text>
            <line x1="250" y1="225" x2="300" y2="225" stroke="#60A5FA" stroke-width="3"/>
            <line x1="500" y1="225" x2="550" y2="225" stroke="#34D399" stroke-width="3"/>
          </svg>
        `;
        title = 'Standard Network Topology';
        description = 'Basic three-tier architecture';
        break;
    }
    
    return (
      <InteractiveTopology
        svgContent={svgContent}
        title={title}
        description={description}
        className="h-80"
        enablePerformanceMode={true}
        animationQuality="medium"
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
        <TopologyDiagram solutionId={solution.id} />
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