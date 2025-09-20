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
  Network
} from 'lucide-react';
import { useState, useEffect } from 'react';

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

const TopologyDiagram = ({ solutionId }: { solutionId: string }) => {
  const renderTopology = () => {
    switch (solutionId) {
      case 'custom-saas':
        return (
          <div className="topology-diagram bg-slate-900/30 rounded-xl border border-gray-700/50 p-6 h-96">
            <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2"/>
                </filter>
                <marker id="dataFlow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                  <path d="M0,0 L0,8 L10,4 z" fill="#3B82F6"/>
                </marker>
                <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)"/>
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)"/>
                </linearGradient>
              </defs>
              
              {/* Primary Cloud Infrastructure */}
              <ellipse cx="300" cy="180" rx="260" ry="150" fill="url(#cloudGradient)" stroke="#3B82F6" strokeWidth="2" opacity="0.8" filter="url(#nodeShadow)"/>
              <text x="300" y="50" textAnchor="middle" fill="#60A5FA" fontSize="32" fontWeight="500">☁️</text>
              <text x="300" y="75" textAnchor="middle" fill="#93C5FD" fontSize="13" fontWeight="600">Multi-Tenant Cloud Platform</text>
              
              {/* Tenant VPCs - Left to Right Layout */}
              <g filter="url(#nodeShadow)">
                <rect x="80" y="120" width="120" height="70" rx="16" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" strokeWidth="2"/>
                <text x="140" y="145" textAnchor="middle" fill="#10B981" fontSize="24">👥</text>
                <text x="140" y="170" textAnchor="middle" fill="#34D399" fontSize="13" fontWeight="600">Tenant A</text>
                <text x="140" y="185" textAnchor="middle" fill="#6EE7B7" fontSize="11">Isolated VPC</text>
              </g>
              
              <g filter="url(#nodeShadow)">
                <rect x="240" y="120" width="120" height="70" rx="16" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" strokeWidth="2"/>
                <text x="300" y="145" textAnchor="middle" fill="#10B981" fontSize="24">👥</text>
                <text x="300" y="170" textAnchor="middle" fill="#34D399" fontSize="13" fontWeight="600">Tenant B</text>
                <text x="300" y="185" textAnchor="middle" fill="#6EE7B7" fontSize="11">Isolated VPC</text>
              </g>
              
              <g filter="url(#nodeShadow)">
                <rect x="400" y="120" width="120" height="70" rx="16" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" strokeWidth="2"/>
                <text x="460" y="145" textAnchor="middle" fill="#10B981" fontSize="24">👥</text>
                <text x="460" y="170" textAnchor="middle" fill="#34D399" fontSize="13" fontWeight="600">Tenant C</text>
                <text x="460" y="185" textAnchor="middle" fill="#6EE7B7" fontSize="11">Isolated VPC</text>
              </g>
              
              {/* Service Mesh Orchestration */}
              <g filter="url(#nodeShadow)">
                <rect x="200" y="230" width="200" height="50" rx="25" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="300" y="250" textAnchor="middle" fill="#9333EA" fontSize="24">🔄</text>
                <text x="300" y="270" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Service Mesh Orchestration</text>
              </g>
              
              {/* Security Gateway */}
              <g filter="url(#nodeShadow)">
                <rect x="150" y="300" width="140" height="40" rx="20" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" strokeWidth="2"/>
                <text x="220" y="325" textAnchor="middle" fill="#F59E0B" fontSize="20">🛡️</text>
                <text x="280" y="325" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="600">Gateway</text>
              </g>
              
              {/* Auto-scaling Controller */}
              <g filter="url(#nodeShadow)">
                <rect x="360" y="300" width="140" height="40" rx="20" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" strokeWidth="2"/>
                <text x="430" y="325" textAnchor="middle" fill="#EF4444" fontSize="20">🔄</text>
                <text x="480" y="325" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="600">Auto-scale</text>
              </g>
              
              {/* Data Flow Connections */}
              <path d="M140 190 Q200 210 240 230" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#dataFlow)" opacity="0.8"/>
              <path d="M300 190 L300 230" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#dataFlow)" opacity="0.8"/>
              <path d="M460 190 Q400 210 360 230" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#dataFlow)" opacity="0.8"/>
              
              <path d="M250 280 Q235 290 220 300" stroke="#3B82F6" strokeWidth="2" fill="none" markerEnd="url(#dataFlow)" opacity="0.6"/>
              <path d="M350 280 Q365 290 380 300" stroke="#3B82F6" strokeWidth="2" fill="none" markerEnd="url(#dataFlow)" opacity="0.6"/>
              
              {/* Connection Labels */}
              <text x="190" y="205" fill="#60A5FA" fontSize="10" fontWeight="500">Service Traffic</text>
              <text x="410" y="205" fill="#60A5FA" fontSize="10" fontWeight="500">Service Traffic</text>
              <text x="305" y="210" fill="#60A5FA" fontSize="10" fontWeight="500">Direct</text>
            </svg>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-semibold text-white">Multi-Tenant VPC + Service Mesh</h4>
              <p className="text-sm text-gray-300">Isolated tenant environments with microservices orchestration</p>
            </div>
          </div>
        );
        
      case 'enterprise-portals':
        return (
          <div className="topology-diagram bg-slate-900/30 rounded-xl border border-gray-700/50 p-6 h-96">
            <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="nodeShadow2" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2"/>
                </filter>
                <marker id="secureFlow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                  <path d="M0,0 L0,8 L10,4 z" fill="#F59E0B"/>
                </marker>
                <marker id="controlFlow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                  <path d="M0,0 L0,8 L10,4 z" fill="#3B82F6"/>
                </marker>
                <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)"/>
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)"/>
                </radialGradient>
              </defs>
              
              {/* Central Identity Hub - Primary Node */}
              <g filter="url(#nodeShadow2)">
                <ellipse cx="300" cy="180" rx="120" ry="70" fill="url(#hubGradient)" stroke="#3B82F6" strokeWidth="3"/>
                <text x="300" y="155" textAnchor="middle" fill="#3B82F6" fontSize="28">☁️</text>
                <text x="300" y="180" textAnchor="middle" fill="#3B82F6" fontSize="24">👤</text>
                <text x="300" y="205" textAnchor="middle" fill="#60A5FA" fontSize="14" fontWeight="600">Identity Hub</text>
                <text x="300" y="220" textAnchor="middle" fill="#93C5FD" fontSize="11">SSO + API Gateway</text>
              </g>
              
              {/* Branch Offices - Distributed Layout */}
              <g filter="url(#nodeShadow2)">
                <rect x="60" y="60" width="100" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="110" y="85" textAnchor="middle" fill="#9333EA" fontSize="22">👥</text>
                <text x="110" y="105" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Branch A</text>
                <text x="110" y="118" textAnchor="middle" fill="#C084FC" fontSize="10">Remote Office</text>
              </g>
              
              <g filter="url(#nodeShadow2)">
                <rect x="440" y="60" width="100" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="490" y="85" textAnchor="middle" fill="#9333EA" fontSize="22">👥</text>
                <text x="490" y="105" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Branch B</text>
                <text x="490" y="118" textAnchor="middle" fill="#C084FC" fontSize="10">Remote Office</text>
              </g>
              
              <g filter="url(#nodeShadow2)">
                <rect x="60" y="270" width="100" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="110" y="295" textAnchor="middle" fill="#9333EA" fontSize="22">👥</text>
                <text x="110" y="315" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">On-Premise</text>
                <text x="110" y="328" textAnchor="middle" fill="#C084FC" fontSize="10">Data Center</text>
              </g>
              
              <g filter="url(#nodeShadow2)">
                <rect x="440" y="270" width="100" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="490" y="295" textAnchor="middle" fill="#9333EA" fontSize="22">👥</text>
                <text x="490" y="315" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Remote Site</text>
                <text x="490" y="328" textAnchor="middle" fill="#C084FC" fontSize="10">Field Office</text>
              </g>
              
              {/* Security Gateways */}
              <g filter="url(#nodeShadow2)">
                <rect x="200" y="120" width="50" height="35" rx="18" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" strokeWidth="2"/>
                <text x="225" y="142" textAnchor="middle" fill="#EF4444" fontSize="16">🛡️</text>
              </g>
              
              <g filter="url(#nodeShadow2)">
                <rect x="350" y="120" width="50" height="35" rx="18" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" strokeWidth="2"/>
                <text x="375" y="142" textAnchor="middle" fill="#EF4444" fontSize="16">🛡️</text>
              </g>
              
              <g filter="url(#nodeShadow2)">
                <rect x="200" y="205" width="50" height="35" rx="18" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" strokeWidth="2"/>
                <text x="225" y="227" textAnchor="middle" fill="#EF4444" fontSize="16">🛡️</text>
              </g>
              
              <g filter="url(#nodeShadow2)">
                <rect x="350" y="205" width="50" height="35" rx="18" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" strokeWidth="2"/>
                <text x="375" y="227" textAnchor="middle" fill="#EF4444" fontSize="16">🛡️</text>
              </g>
              
              {/* Encrypted VPN Connections */}
              <path d="M160 90 Q180 105 200 125" stroke="#F59E0B" strokeWidth="4" strokeDasharray="12,6" fill="none" markerEnd="url(#secureFlow)" opacity="0.9"/>
              <path d="M440 90 Q420 105 400 125" stroke="#F59E0B" strokeWidth="4" strokeDasharray="12,6" fill="none" markerEnd="url(#secureFlow)" opacity="0.9"/>
              <path d="M160 300 Q180 255 200 230" stroke="#F59E0B" strokeWidth="4" strokeDasharray="12,6" fill="none" markerEnd="url(#secureFlow)" opacity="0.9"/>
              <path d="M440 300 Q420 255 400 230" stroke="#F59E0B" strokeWidth="4" strokeDasharray="12,6" fill="none" markerEnd="url(#secureFlow)" opacity="0.9"/>
              
              {/* Hub Control Connections */}
              <path d="M250 137 Q270 155 280 170" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#controlFlow)" opacity="0.8"/>
              <path d="M350 137 Q330 155 320 170" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#controlFlow)" opacity="0.8"/>
              <path d="M250 222 Q270 205 280 190" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#controlFlow)" opacity="0.8"/>
              <path d="M350 222 Q330 205 320 190" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#controlFlow)" opacity="0.8"/>
              
              {/* Connection Labels */}
              <text x="180" y="115" fill="#F59E0B" fontSize="11" fontWeight="500">🔒 SD-WAN</text>
              <text x="400" y="115" fill="#F59E0B" fontSize="11" fontWeight="500">🔒 SD-WAN</text>
              <text x="175" y="245" fill="#F59E0B" fontSize="11" fontWeight="500">🔒 VPN</text>
              <text x="405" y="245" fill="#F59E0B" fontSize="11" fontWeight="500">🔒 VPN</text>
              
              {/* Legend */}
              <g transform="translate(20, 20)">
                <rect x="0" y="0" width="140" height="55" rx="8" fill="rgba(0, 0, 0, 0.7)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                <text x="10" y="15" fill="#FFFFFF" fontSize="11" fontWeight="600">Network Types</text>
                <line x1="10" y1="25" x2="30" y2="25" stroke="#F59E0B" strokeWidth="3" strokeDasharray="6,3"/>
                <text x="35" y="28" fill="#FBBF24" fontSize="9">Encrypted</text>
                <line x1="10" y1="40" x2="30" y2="40" stroke="#3B82F6" strokeWidth="2"/>
                <text x="35" y="43" fill="#60A5FA" fontSize="9">Control</text>
              </g>
            </svg>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-semibold text-white">Hub-and-Spoke Hybrid Cloud</h4>
              <p className="text-sm text-gray-300">Centralized identity with distributed branch connectivity</p>
            </div>
          </div>
        );
        
      case 'compliance-reporting':
        return (
          <div className="topology-diagram bg-slate-900/30 rounded-xl border border-gray-700/50 p-6 h-96">
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
                <rect x="40" y="40" width="520" height="80" rx="20" fill="url(#dmzGradient)" stroke="#EF4444" strokeWidth="3"/>
                <text x="300" y="70" textAnchor="middle" fill="#EF4444" fontSize="24">🛡️</text>
                <text x="300" y="95" textAnchor="middle" fill="#F87171" fontSize="14" fontWeight="600">DMZ Data Ingestion Layer</text>
                <text x="300" y="110" textAnchor="middle" fill="#FCA5A5" fontSize="11">Secure External Entry Point</text>
              </g>
              
              {/* Compliance Processing VLAN */}
              <g filter="url(#nodeShadow3)">
                <rect x="80" y="150" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="150" y="175" textAnchor="middle" fill="#9333EA" fontSize="24">📑</text>
                <text x="150" y="195" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Compliance VLAN</text>
                <text x="150" y="208" textAnchor="middle" fill="#C084FC" fontSize="10">Policy Enforcement</text>
              </g>
              
              {/* Audit Processing VLAN */}
              <g filter="url(#nodeShadow3)">
                <rect x="250" y="150" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="320" y="175" textAnchor="middle" fill="#9333EA" fontSize="24">🔄</text>
                <text x="320" y="195" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Audit VLAN</text>
                <text x="320" y="208" textAnchor="middle" fill="#C084FC" fontSize="10">Log Processing</text>
              </g>
              
              {/* Archive VLAN */}
              <g filter="url(#nodeShadow3)">
                <rect x="420" y="150" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="490" y="175" textAnchor="middle" fill="#9333EA" fontSize="24">🗂️</text>
                <text x="490" y="195" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Archive VLAN</text>
                <text x="490" y="208" textAnchor="middle" fill="#C084FC" fontSize="10">Long-term Storage</text>
              </g>
              
              {/* WORM Storage Database (Cylinder) */}
              <g filter="url(#nodeShadow3)">
                <ellipse cx="150" cy="250" rx="50" ry="18" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" strokeWidth="2"/>
                <rect x="100" y="250" width="100" height="40" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="2"/>
                <ellipse cx="150" cy="290" rx="50" ry="18" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" strokeWidth="2"/>
                <text x="150" y="275" textAnchor="middle" fill="#10B981" fontSize="20">🔒</text>
                <text x="150" y="315" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="600">WORM Storage</text>
                <text x="150" y="330" textAnchor="middle" fill="#6EE7B7" fontSize="10">Immutable Records</text>
              </g>
              
              {/* Data Lake Cloud */}
              <g filter="url(#nodeShadow3)">
                <ellipse cx="450" cy="270" rx="90" ry="55" fill="rgba(59, 130, 246, 0.12)" stroke="#3B82F6" strokeWidth="3"/>
                <text x="450" y="255" textAnchor="middle" fill="#3B82F6" fontSize="28">☁️</text>
                <text x="450" y="285" textAnchor="middle" fill="#60A5FA" fontSize="14" fontWeight="600">Analytics Data Lake</text>
                <text x="450" y="300" textAnchor="middle" fill="#93C5FD" fontSize="11">Big Data Processing</text>
              </g>
              
              {/* Audit Engine */}
              <g filter="url(#nodeShadow3)">
                <rect x="250" y="320" width="140" height="40" rx="20" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" strokeWidth="2"/>
                <text x="320" y="345" textAnchor="middle" fill="#F59E0B" fontSize="20">🔄</text>
                <text x="380" y="345" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="600">Audit Engine</text>
              </g>
              
              {/* Data Flow Connections */}
              <path d="M300 120 Q200 135 150 150" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#complianceFlow)" opacity="0.8"/>
              <path d="M300 120 L320 150" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#complianceFlow)" opacity="0.8"/>
              <path d="M300 120 Q400 135 490 150" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#complianceFlow)" opacity="0.8"/>
              
              <path d="M150 210 L150 232" stroke="#10B981" strokeWidth="3" fill="none" markerEnd="url(#complianceFlow)" opacity="0.8"/>
              <path d="M490 210 Q470 230 450 240" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#complianceFlow)" opacity="0.8"/>
              <path d="M320 210 L320 320" stroke="#F59E0B" strokeWidth="3" fill="none" markerEnd="url(#complianceFlow)" opacity="0.8"/>
              
              {/* Connection Labels */}
              <text x="225" y="135" fill="#60A5FA" fontSize="10" fontWeight="500">Compliance Data</text>
              <text x="325" y="135" fill="#60A5FA" fontSize="10" fontWeight="500">Audit Logs</text>
              <text x="395" y="135" fill="#60A5FA" fontSize="10" fontWeight="500">Archive Data</text>
            </svg>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-semibold text-white">Segmented DMZ + Data Lake Overlay</h4>
              <p className="text-sm text-gray-300">Compliance-focused data segregation with audit trail</p>
            </div>
          </div>
        );
        
      case 'itil-itsm':
        return (
          <div className="topology-diagram bg-slate-900/30 rounded-xl border border-gray-700/50 p-6 h-96">
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
                <rect x="220" y="30" width="160" height="45" rx="20" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" strokeWidth="3"/>
                <text x="300" y="55" textAnchor="middle" fill="#EF4444" fontSize="24">🛡️</text>
                <text x="300" y="75" textAnchor="middle" fill="#F87171" fontSize="14" fontWeight="600">ZTNA Gateway</text>
              </g>
              
              {/* ITIL Service Desk Cluster - Primary */}
              <g filter="url(#nodeShadow4)">
                <rect x="180" y="100" width="240" height="80" rx="20" fill="url(#serviceDeskGradient)" stroke="#3B82F6" strokeWidth="3"/>
                <text x="300" y="125" textAnchor="middle" fill="#3B82F6" fontSize="24">👤</text>
                <text x="300" y="150" textAnchor="middle" fill="#3B82F6" fontSize="24">🔄</text>
                <text x="300" y="175" textAnchor="middle" fill="#60A5FA" fontSize="14" fontWeight="600">ITIL Service Desk</text>
              </g>
              
              {/* Bastion Jump Hosts */}
              <g filter="url(#nodeShadow4)">
                <rect x="80" y="210" width="120" height="40" rx="20" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" strokeWidth="2"/>
                <text x="140" y="235" textAnchor="middle" fill="#F59E0B" fontSize="20">🔑</text>
                <text x="170" y="235" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="600">Bastion</text>
                <text x="140" y="250" textAnchor="middle" fill="#FCD34D" fontSize="10">Jump Host</text>
              </g>
              
              <g filter="url(#nodeShadow4)">
                <rect x="400" y="210" width="120" height="40" rx="20" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" strokeWidth="2"/>
                <text x="460" y="235" textAnchor="middle" fill="#F59E0B" fontSize="20">🔑</text>
                <text x="490" y="235" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="600">Bastion</text>
                <text x="460" y="250" textAnchor="middle" fill="#FCD34D" fontSize="10">Jump Host</text>
              </g>
              
              {/* Microsegmented Networks */}
              <g filter="url(#nodeShadow4)">
                <rect x="60" y="280" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="130" y="305" textAnchor="middle" fill="#9333EA" fontSize="22">👥</text>
                <text x="130" y="325" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Production LAN</text>
                <text x="130" y="338" textAnchor="middle" fill="#C084FC" fontSize="10">Critical Systems</text>
              </g>
              
              <g filter="url(#nodeShadow4)">
                <rect x="230" y="280" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="300" y="305" textAnchor="middle" fill="#9333EA" fontSize="22">🔄</text>
                <text x="300" y="325" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Management</text>
                <text x="300" y="338" textAnchor="middle" fill="#C084FC" fontSize="10">Admin Network</text>
              </g>
              
              <g filter="url(#nodeShadow4)">
                <rect x="400" y="280" width="140" height="60" rx="16" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="470" y="305" textAnchor="middle" fill="#9333EA" fontSize="22">👤</text>
                <text x="470" y="325" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Out-of-Band</text>
                <text x="470" y="338" textAnchor="middle" fill="#C084FC" fontSize="10">Emergency Access</text>
              </g>
              
              {/* Zero Trust Control Flow */}
              <path d="M300 75 L300 100" stroke="#EF4444" strokeWidth="4" fill="none" markerEnd="url(#zeroTrustFlow)" opacity="0.9"/>
              
              {/* Bastion Access Control */}
              <path d="M140 250 L130 280" stroke="#F59E0B" strokeWidth="3" fill="none" markerEnd="url(#bastionFlow)" opacity="0.8"/>
              <path d="M460 250 L470 280" stroke="#F59E0B" strokeWidth="3" fill="none" markerEnd="url(#bastionFlow)" opacity="0.8"/>
              
              {/* Service Desk to Bastions */}
              <path d="M220 160 Q150 185 140 210" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="8,4" opacity="0.7"/>
              <path d="M380 160 Q450 185 460 210" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="8,4" opacity="0.7"/>
              
              {/* Connection Labels */}
              <text x="320" y="90" fill="#EF4444" fontSize="11" fontWeight="500">Zero Trust Policy</text>
              <text x="120" y="270" fill="#F59E0B" fontSize="10" fontWeight="500">Controlled Access</text>
              <text x="440" y="270" fill="#F59E0B" fontSize="10" fontWeight="500">Controlled Access</text>
              
              {/* Legend */}
              <g transform="translate(20, 20)">
                <rect x="0" y="0" width="160" height="70" rx="8" fill="rgba(0, 0, 0, 0.7)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                <text x="10" y="15" fill="#FFFFFF" fontSize="11" fontWeight="600">Access Control</text>
                <line x1="10" y1="25" x2="30" y2="25" stroke="#EF4444" strokeWidth="3"/>
                <text x="35" y="28" fill="#F87171" fontSize="9">Zero Trust</text>
                <line x1="10" y1="40" x2="30" y2="40" stroke="#F59E0B" strokeWidth="2"/>
                <text x="35" y="43" fill="#FBBF24" fontSize="9">Bastion Control</text>
                <line x1="10" y1="55" x2="30" y2="55" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4,2"/>
                <text x="35" y="58" fill="#60A5FA" fontSize="9">Service Mgmt</text>
              </g>
            </svg>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-semibold text-white">Zero-Trust Access Fabric</h4>
              <p className="text-sm text-gray-300">Microsegmented ITSM with bastion-controlled access</p>
            </div>
          </div>
        );
        
      case 'operational-playbooks':
        return (
          <div className="topology-diagram bg-slate-900/30 rounded-xl border border-gray-700/50 p-6 h-80">
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
                <ellipse cx="130" cy="100" rx="80" ry="60" fill="url(#managementGradient)" stroke="#F59E0B" strokeWidth="3"/>
                <text x="130" y="80" textAnchor="middle" fill="#F59E0B" fontSize="24">☁️</text>
                <text x="130" y="105" textAnchor="middle" fill="#F59E0B" fontSize="20">📘</text>
                <text x="130" y="130" textAnchor="middle" fill="#FBBF24" fontSize="13" fontWeight="600">CI/CD Management</text>
                <text x="130" y="145" textAnchor="middle" fill="#FCD34D" fontSize="10">DevOps Orchestration</text>
              </g>
              
              {/* Bastion Security Gateway */}
              <g filter="url(#nodeShadow5)">
                <rect x="240" y="110" width="60" height="40" rx="20" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" strokeWidth="3"/>
                <text x="270" y="135" textAnchor="middle" fill="#EF4444" fontSize="20">🔑</text>
                <text x="270" y="155" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="600">Gateway</text>
              </g>
              
              {/* Production VPC */}
              <g filter="url(#nodeShadow5)">
                <ellipse cx="370" cy="100" rx="80" ry="60" fill="url(#productionGradient)" stroke="#10B981" strokeWidth="3"/>
                <text x="370" y="80" textAnchor="middle" fill="#10B981" fontSize="24">☁️</text>
                <text x="370" y="105" textAnchor="middle" fill="#10B981" fontSize="20">🔄</text>
                <text x="370" y="130" textAnchor="middle" fill="#34D399" fontSize="13" fontWeight="600">Production Cluster</text>
                <text x="370" y="145" textAnchor="middle" fill="#6EE7B7" fontSize="10">Live Workloads</text>
              </g>
              
              {/* Automated Workflow Controllers */}
              <g filter="url(#nodeShadow5)">
                <rect x="150" y="210" width="200" height="60" rx="20" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="200" y="235" textAnchor="middle" fill="#9333EA" fontSize="20">🔄</text>
                <text x="250" y="235" textAnchor="middle" fill="#9333EA" fontSize="20">📖</text>
                <text x="300" y="235" textAnchor="middle" fill="#9333EA" fontSize="20">🔄</text>
                <text x="250" y="255" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Workflow Orchestration</text>
                <text x="250" y="270" textAnchor="middle" fill="#C084FC" fontSize="10">Automated Playbooks</text>
              </g>
              
              {/* Role-based Access Control */}
              <path d="M210 100 Q225 105 240 125" stroke="#F59E0B" strokeWidth="3" strokeDasharray="8,4" fill="none" markerEnd="url(#secureAccess)" opacity="0.9"/>
              <path d="M300 125 Q335 115 340 100" stroke="#10B981" strokeWidth="3" strokeDasharray="8,4" fill="none" markerEnd="url(#secureAccess)" opacity="0.9"/>
              <path d="M270 150 L250 210" stroke="#9333EA" strokeWidth="3" fill="none" markerEnd="url(#workflowFlow)" opacity="0.8"/>
              
              {/* Policy Management */}
              <g filter="url(#nodeShadow5)">
                <rect x="40" y="290" width="120" height="30" rx="15" fill="rgba(148, 163, 184, 0.12)" stroke="#64748B" strokeWidth="2"/>
                <text x="70" y="310" textAnchor="middle" fill="#64748B" fontSize="16">🛡️</text>
                <text x="130" y="310" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Policy Engine</text>
              </g>
              
              {/* Monitoring & Logging */}
              <g filter="url(#nodeShadow5)">
                <rect x="340" y="290" width="120" height="30" rx="15" fill="rgba(148, 163, 184, 0.12)" stroke="#64748B" strokeWidth="2"/>
                <text x="370" y="310" textAnchor="middle" fill="#64748B" fontSize="16">📖</text>
                <text x="430" y="310" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Audit Logs</text>
              </g>
              
              {/* Connection Labels */}
              <text x="210" y="95" fill="#F59E0B" fontSize="10" fontWeight="500">Secure CI/CD</text>
              <text x="320" y="95" fill="#10B981" fontSize="10" fontWeight="500">Deploy</text>
              <text x="275" y="185" fill="#9333EA" fontSize="10" fontWeight="500">Orchestrate</text>
              
              {/* Legend */}
              <g transform="translate(20, 20)">
                <rect x="0" y="0" width="150" height="55" rx="8" fill="rgba(0, 0, 0, 0.7)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                <text x="10" y="15" fill="#FFFFFF" fontSize="11" fontWeight="600">Access Control</text>
                <line x1="10" y1="25" x2="30" y2="25" stroke="#F59E0B" strokeWidth="3" strokeDasharray="4,2"/>
                <text x="35" y="28" fill="#FBBF24" fontSize="9">Secure</text>
                <line x1="10" y1="40" x2="30" y2="40" stroke="#9333EA" strokeWidth="2"/>
                <text x="35" y="43" fill="#A855F7" fontSize="9">Workflow</text>
              </g>
            </svg>
            <div className="mt-4 text-center">
              <h4 className="text-sm font-semibold text-white">Bastioned Workflow Cluster</h4>
              <p className="text-xs text-gray-400">Secure CI/CD with role-based network access control</p>
            </div>
          </div>
        );
        
      case 'enterprise-recovery':
        return (
          <div className="topology-diagram bg-slate-900/30 rounded-xl border border-gray-700/50 p-6 h-80">
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
                <rect x="50" y="60" width="140" height="120" rx="20" fill="url(#activeSiteGradient)" stroke="#10B981" strokeWidth="3"/>
                <text x="120" y="90" textAnchor="middle" fill="#10B981" fontSize="24">🔄</text>
                <text x="120" y="120" textAnchor="middle" fill="#10B981" fontSize="20">👥</text>
                <text x="120" y="145" textAnchor="middle" fill="#34D399" fontSize="14" fontWeight="600">Primary Site</text>
                <text x="120" y="165" textAnchor="middle" fill="#6EE7B7" fontSize="11">Active Production</text>
              </g>
              
              {/* Disaster Recovery Site */}
              <g filter="url(#nodeShadow6)">
                <rect x="310" y="60" width="140" height="120" rx="20" fill="url(#drSiteGradient)" stroke="#EF4444" strokeWidth="3" strokeDasharray="12,6"/>
                <text x="380" y="90" textAnchor="middle" fill="rgba(239, 68, 68, 0.8)" fontSize="24">🔄</text>
                <text x="380" y="120" textAnchor="middle" fill="rgba(239, 68, 68, 0.8)" fontSize="20">👥</text>
                <text x="380" y="145" textAnchor="middle" fill="rgba(248, 113, 113, 0.9)" fontSize="14" fontWeight="600">DR Site</text>
                <text x="380" y="165" textAnchor="middle" fill="rgba(252, 165, 165, 0.8)" fontSize="11">Passive Standby</text>
              </g>
              
              {/* Encrypted SD-WAN Tunnel */}
              <g filter="url(#nodeShadow6)">
                <path d="M190 120 Q250 80 310 120" stroke="#F59E0B" strokeWidth="5" strokeDasharray="12,6" fill="none" opacity="0.9"/>
                <ellipse cx="250" cy="95" rx="25" ry="15" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" strokeWidth="2"/>
                <text x="250" y="100" textAnchor="middle" fill="#F59E0B" fontSize="16">🔒</text>
                <text x="250" y="50" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="600">Encrypted SD-WAN</text>
                <text x="250" y="65" textAnchor="middle" fill="#FCD34D" fontSize="10">Multi-Protocol Link</text>
              </g>
              
              {/* Asynchronous Replication Layer */}
              <g filter="url(#nodeShadow6)">
                <rect x="150" y="210" width="200" height="50" rx="25" fill="rgba(147, 51, 234, 0.12)" stroke="#9333EA" strokeWidth="2"/>
                <text x="190" y="235" textAnchor="middle" fill="#9333EA" fontSize="20">🔄</text>
                <text x="250" y="235" textAnchor="middle" fill="#9333EA" fontSize="20">📑</text>
                <text x="310" y="235" textAnchor="middle" fill="#9333EA" fontSize="20">🔄</text>
                <text x="250" y="255" textAnchor="middle" fill="#A855F7" fontSize="13" fontWeight="600">Async Replication VLAN</text>
              </g>
              
              {/* Automated Failover Orchestrator */}
              <g filter="url(#nodeShadow6)">
                <ellipse cx="250" cy="300" rx="50" ry="30" fill="rgba(245, 158, 11, 0.12)" stroke="#F59E0B" strokeWidth="3"/>
                <text x="250" y="290" textAnchor="middle" fill="#F59E0B" fontSize="20">🛠️</text>
                <text x="250" y="310" textAnchor="middle" fill="#F59E0B" fontSize="20">🔄</text>
                <text x="250" y="330" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="600">Failover Orchestrator</text>
              </g>
              
              {/* Health Monitoring */}
              <g filter="url(#nodeShadow6)">
                <rect x="20" y="250" width="80" height="30" rx="15" fill="rgba(34, 197, 94, 0.12)" stroke="#10B981" strokeWidth="2"/>
                <text x="60" y="270" textAnchor="middle" fill="#10B981" fontSize="16">🔄</text>
                <text x="85" y="270" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="600">Monitor</text>
              </g>
              
              <g filter="url(#nodeShadow6)">
                <rect x="400" y="250" width="80" height="30" rx="15" fill="rgba(239, 68, 68, 0.12)" stroke="#EF4444" strokeWidth="2"/>
                <text x="440" y="270" textAnchor="middle" fill="#EF4444" fontSize="16">🔄</text>
                <text x="465" y="270" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="600">Standby</text>
              </g>
              
              {/* Data Replication Flows */}
              <path d="M120 180 Q150 195 170 210" stroke="#9333EA" strokeWidth="3" fill="none" markerEnd="url(#replicationFlow)" opacity="0.8"/>
              <path d="M380 180 Q350 195 330 210" stroke="#9333EA" strokeWidth="3" fill="none" markerEnd="url(#replicationFlow)" opacity="0.8"/>
              
              {/* Orchestrator Control */}
              <path d="M250 260 L250 270" stroke="#F59E0B" strokeWidth="3" fill="none" markerEnd="url(#failoverFlow)" opacity="0.8"/>
              
              {/* Health Check Connections */}
              <path d="M100 250 Q175 235 200 210" stroke="#10B981" strokeWidth="2" fill="none" strokeDasharray="6,3" opacity="0.6"/>
              <path d="M400 250 Q325 235 300 210" stroke="#EF4444" strokeWidth="2" fill="none" strokeDasharray="6,3" opacity="0.6"/>
              
              {/* Connection Labels */}
              <text x="200" y="25" fill="#F59E0B" fontSize="11" fontWeight="500">Primary Connection</text>
              <text x="135" y="195" fill="#9333EA" fontSize="10" fontWeight="500">Data Sync</text>
              <text x="345" y="195" fill="#9333EA" fontSize="10" fontWeight="500">Data Sync</text>
              
              {/* Legend */}
              <g transform="translate(20, 20)">
                <rect x="0" y="0" width="160" height="70" rx="8" fill="rgba(0, 0, 0, 0.7)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
                <text x="10" y="15" fill="#FFFFFF" fontSize="11" fontWeight="600">Recovery Types</text>
                <line x1="10" y1="25" x2="30" y2="25" stroke="#F59E0B" strokeWidth="3" strokeDasharray="6,3"/>
                <text x="35" y="28" fill="#FBBF24" fontSize="9">Encrypted</text>
                <line x1="10" y1="40" x2="30" y2="40" stroke="#9333EA" strokeWidth="2"/>
                <text x="35" y="43" fill="#A855F7" fontSize="9">Replication</text>
                <line x1="10" y1="55" x2="30" y2="55" stroke="#10B981" strokeWidth="2" strokeDasharray="3,2"/>
                <text x="35" y="58" fill="#34D399" fontSize="9">Health Check</text>
              </g>
            </svg>
            <div className="mt-4 text-center">
              <h4 className="text-sm font-semibold text-white">Multi-Site Active/Passive DR with SD-WAN</h4>
              <p className="text-xs text-gray-400">Automated failover orchestration with encrypted replication</p>
            </div>
          </div>
        );
        
      default:
        return <div className="h-80 bg-slate-900/30 rounded-xl border border-gray-700/50 p-6 flex items-center justify-center">
          <span className="text-gray-400">Topology diagram not available</span>
        </div>;
    }
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
        { id: 'threat-sharing', icon: Share, label: 'Threat Sharing', description: 'Intelligence sharing' },
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