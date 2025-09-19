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
            <svg viewBox="0 0 500 320" className="w-full h-full">
              {/* Cloud Region */}
              <rect x="20" y="20" width="460" height="280" rx="15" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="3"/>
              <text x="40" y="45" fill="rgb(147, 197, 253)" fontSize="16" fontWeight="bold">CLOUD REGION</text>
              
              {/* Tenant VPCs */}
              <rect x="40" y="60" width="120" height="90" rx="8" fill="rgba(34, 197, 94, 0.15)" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="2"/>
              <text x="70" y="80" fill="rgb(134, 239, 172)" fontSize="12" fontWeight="600">TENANT A VPC</text>
              
              <rect x="190" y="60" width="120" height="90" rx="8" fill="rgba(34, 197, 94, 0.15)" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="2"/>
              <text x="220" y="80" fill="rgb(134, 239, 172)" fontSize="12" fontWeight="600">TENANT B VPC</text>
              
              <rect x="340" y="60" width="120" height="90" rx="8" fill="rgba(34, 197, 94, 0.15)" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="2"/>
              <text x="370" y="80" fill="rgb(134, 239, 172)" fontSize="12" fontWeight="600">TENANT C VPC</text>
              
              {/* Microservices */}
              <rect x="60" y="100" width="25" height="15" rx="3" fill="rgba(168, 85, 247, 0.4)" stroke="rgb(168, 85, 247)" strokeWidth="1.5"/>
              <text x="65" y="110" fill="rgb(168, 85, 247)" fontSize="8" fontWeight="500">MS1</text>
              
              <rect x="115" y="100" width="25" height="15" rx="3" fill="rgba(168, 85, 247, 0.4)" stroke="rgb(168, 85, 247)" strokeWidth="1.5"/>
              <text x="120" y="110" fill="rgb(168, 85, 247)" fontSize="8" fontWeight="500">MS2</text>
              
              <rect x="210" y="100" width="25" height="15" rx="3" fill="rgba(168, 85, 247, 0.4)" stroke="rgb(168, 85, 247)" strokeWidth="1.5"/>
              <text x="215" y="110" fill="rgb(168, 85, 247)" fontSize="8" fontWeight="500">MS1</text>
              
              <rect x="265" y="100" width="25" height="15" rx="3" fill="rgba(168, 85, 247, 0.4)" stroke="rgb(168, 85, 247)" strokeWidth="1.5"/>
              <text x="270" y="110" fill="rgb(168, 85, 247)" fontSize="8" fontWeight="500">MS2</text>
              
              <rect x="360" y="100" width="25" height="15" rx="3" fill="rgba(168, 85, 247, 0.4)" stroke="rgb(168, 85, 247)" strokeWidth="1.5"/>
              <text x="365" y="110" fill="rgb(168, 85, 247)" fontSize="8" fontWeight="500">MS1</text>
              
              <rect x="415" y="100" width="25" height="15" rx="3" fill="rgba(168, 85, 247, 0.4)" stroke="rgb(168, 85, 247)" strokeWidth="1.5"/>
              <text x="420" y="110" fill="rgb(168, 85, 247)" fontSize="8" fontWeight="500">MS2</text>
              
              {/* Service Mesh */}
              <path d="M85 100 L115 100 M235 100 L265 100 M385 100 L415 100" stroke="rgba(168, 85, 247, 0.8)" strokeWidth="2" strokeDasharray="5,3"/>
              <text x="90" y="95" fill="rgb(168, 85, 247)" fontSize="9" fontWeight="500">Service Mesh</text>
              
              {/* Ingress Gateway */}
              <rect x="220" y="200" width="60" height="25" rx="6" fill="rgba(251, 191, 36, 0.4)" stroke="rgb(251, 191, 36)" strokeWidth="2"/>
              <text x="235" y="218" fill="rgb(251, 191, 36)" fontSize="11" fontWeight="600">GATEWAY</text>
              
              {/* Kubernetes Cluster */}
              <rect x="40" y="170" width="420" height="20" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1.5"/>
              <text x="220" y="185" fill="rgb(147, 197, 253)" fontSize="11" fontWeight="600">KUBERNETES CLUSTER</text>
              
              {/* Autoscaler */}
              <rect x="380" y="240" width="80" height="25" rx="6" fill="rgba(239, 68, 68, 0.4)" stroke="rgb(239, 68, 68)" strokeWidth="2"/>
              <text x="405" y="258" fill="rgb(239, 68, 68)" fontSize="11" fontWeight="600">AUTOSCALER</text>
              
              <defs>
                <marker id="arrow1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L8,3 z" fill="rgba(148, 163, 184, 0.8)"/>
                </marker>
              </defs>
              
              {/* Connections */}
              <path d="M250 200 L100 150 M250 200 L250 150 M250 200 L400 150" stroke="rgba(148, 163, 184, 0.7)" strokeWidth="2" markerEnd="url(#arrow1)"/>
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
            <svg viewBox="0 0 500 320" className="w-full h-full">
              {/* Central Hub Cloud */}
              <ellipse cx="250" cy="160" rx="100" ry="60" fill="rgba(59, 130, 246, 0.15)" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="3"/>
              <text x="190" y="140" fill="rgb(147, 197, 253)" fontSize="14" fontWeight="bold">CENTRAL HUB</text>
              <text x="200" y="160" fill="rgb(147, 197, 253)" fontSize="12" fontWeight="600">SSO + API GATEWAY</text>
              
              {/* Identity Service */}
              <rect x="220" y="175" width="60" height="20" rx="6" fill="rgba(34, 197, 94, 0.4)" stroke="rgb(34, 197, 94)" strokeWidth="2"/>
              <text x="235" y="190" fill="rgb(34, 197, 94)" fontSize="10" fontWeight="600">IDENTITY</text>
              
              {/* Branch Offices */}
              <rect x="50" y="40" width="80" height="50" rx="10" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="2"/>
              <text x="70" y="60" fill="rgb(196, 181, 253)" fontSize="12" fontWeight="600">BRANCH A</text>
              <text x="75" y="80" fill="rgb(196, 181, 253)" fontSize="10">Office Site</text>
              
              <rect x="370" y="40" width="80" height="50" rx="10" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="2"/>
              <text x="390" y="60" fill="rgb(196, 181, 253)" fontSize="12" fontWeight="600">BRANCH B</text>
              <text x="395" y="80" fill="rgb(196, 181, 253)" fontSize="10">Office Site</text>
              
              <rect x="50" y="230" width="80" height="50" rx="10" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="2"/>
              <text x="70" y="250" fill="rgb(196, 181, 253)" fontSize="12" fontWeight="600">ON-PREMISE</text>
              <text x="75" y="270" fill="rgb(196, 181, 253)" fontSize="10">Data Center</text>
              
              <rect x="370" y="230" width="80" height="50" rx="10" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="2"/>
              <text x="390" y="250" fill="rgb(196, 181, 253)" fontSize="12" fontWeight="600">BRANCH C</text>
              <text x="395" y="270" fill="rgb(196, 181, 253)" fontSize="10">Remote Site</text>
              
              {/* VPN Tunnels */}
              <path d="M130 65 Q190 100 190 150" stroke="rgba(251, 191, 36, 0.9)" strokeWidth="3" strokeDasharray="8,4" fill="none"/>
              <path d="M370 65 Q310 100 310 150" stroke="rgba(251, 191, 36, 0.9)" strokeWidth="3" strokeDasharray="8,4" fill="none"/>
              <path d="M130 255 Q190 220 190 170" stroke="rgba(251, 191, 36, 0.9)" strokeWidth="3" strokeDasharray="8,4" fill="none"/>
              <path d="M370 255 Q310 220 310 170" stroke="rgba(251, 191, 36, 0.9)" strokeWidth="3" strokeDasharray="8,4" fill="none"/>
              
              <text x="160" y="25" fill="rgb(251, 191, 36)" fontSize="12" fontWeight="600">SECURE VPN/SD-WAN TUNNELS</text>
              
              {/* Security Icons */}
              <rect x="160" y="130" width="20" height="15" rx="3" fill="rgba(239, 68, 68, 0.4)" stroke="rgb(239, 68, 68)" strokeWidth="1"/>
              <text x="165" y="141" fill="rgb(239, 68, 68)" fontSize="8" fontWeight="500">FW</text>
              
              <rect x="320" y="130" width="20" height="15" rx="3" fill="rgba(239, 68, 68, 0.4)" stroke="rgb(239, 68, 68)" strokeWidth="1"/>
              <text x="325" y="141" fill="rgb(239, 68, 68)" fontSize="8" fontWeight="500">FW</text>
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
            <svg viewBox="0 0 500 320" className="w-full h-full">
              {/* DMZ Layer */}
              <rect x="20" y="30" width="460" height="70" rx="10" fill="rgba(239, 68, 68, 0.15)" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="3"/>
              <text x="40" y="55" fill="rgb(248, 113, 113)" fontSize="14" fontWeight="bold">DMZ - DATA INGESTION LAYER</text>
              <text x="40" y="85" fill="rgb(248, 113, 113)" fontSize="11" fontWeight="500">Secure External Data Entry Point</text>
              
              {/* VLANs */}
              <rect x="40" y="120" width="120" height="50" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2"/>
              <text x="70" y="140" fill="rgb(196, 181, 253)" fontSize="12" fontWeight="600">COMPLIANCE</text>
              <text x="85" y="155" fill="rgb(196, 181, 253)" fontSize="10">VLAN</text>
              
              <rect x="190" y="120" width="120" height="50" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2"/>
              <text x="230" y="140" fill="rgb(196, 181, 253)" fontSize="12" fontWeight="600">AUDIT</text>
              <text x="240" y="155" fill="rgb(196, 181, 253)" fontSize="10">VLAN</text>
              
              <rect x="340" y="120" width="120" height="50" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2"/>
              <text x="375" y="140" fill="rgb(196, 181, 253)" fontSize="12" fontWeight="600">ARCHIVE</text>
              <text x="385" y="155" fill="rgb(196, 181, 253)" fontSize="10">VLAN</text>
              
              {/* WORM Storage */}
              <rect x="60" y="200" width="80" height="35" rx="6" fill="rgba(34, 197, 94, 0.3)" stroke="rgb(34, 197, 94)" strokeWidth="2"/>
              <text x="80" y="220" fill="rgb(34, 197, 94)" fontSize="11" fontWeight="600">WORM</text>
              <text x="80" y="235" fill="rgb(34, 197, 94)" fontSize="9">Storage</text>
              
              {/* Data Lake */}
              <ellipse cx="380" cy="215" rx="80" ry="45" fill="rgba(59, 130, 246, 0.15)" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="3"/>
              <text x="340" y="205" fill="rgb(147, 197, 253)" fontSize="12" fontWeight="600">DATA LAKE</text>
              <text x="350" y="225" fill="rgb(147, 197, 253)" fontSize="10">Analytics Engine</text>
              
              {/* Audit Engine */}
              <rect x="200" y="270" width="100" height="30" rx="8" fill="rgba(251, 191, 36, 0.3)" stroke="rgb(251, 191, 36)" strokeWidth="2"/>
              <text x="225" y="290" fill="rgb(251, 191, 36)" fontSize="11" fontWeight="600">AUDIT ENGINE</text>
              
              {/* Firewall */}
              <rect x="220" y="60" width="60" height="20" rx="4" fill="rgba(239, 68, 68, 0.4)" stroke="rgb(239, 68, 68)" strokeWidth="2"/>
              <text x="235" y="75" fill="rgb(239, 68, 68)" fontSize="10" fontWeight="600">FIREWALL</text>
              
              <defs>
                <marker id="arrow2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L8,3 z" fill="rgba(148, 163, 184, 0.8)"/>
                </marker>
              </defs>
              
              {/* Data Flow */}
              <path d="M250 100 L100 120 M250 100 L250 120 M250 100 L400 120" stroke="rgba(148, 163, 184, 0.8)" strokeWidth="2" markerEnd="url(#arrow2)"/>
              <path d="M100 170 L100 200 M400 170 L380 175" stroke="rgba(148, 163, 184, 0.8)" strokeWidth="2" markerEnd="url(#arrow2)"/>
              <path d="M250 170 L250 270" stroke="rgba(148, 163, 184, 0.8)" strokeWidth="2" markerEnd="url(#arrow2)"/>
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
            <svg viewBox="0 0 500 320" className="w-full h-full">
              {/* ZTNA Gateway */}
              <rect x="200" y="20" width="100" height="30" rx="6" fill="rgba(239, 68, 68, 0.4)" stroke="rgb(239, 68, 68)" strokeWidth="2"/>
              <text x="225" y="40" fill="rgb(239, 68, 68)" fontSize="12" fontWeight="600">ZTNA GATEWAY</text>
              
              {/* Service Desk Cluster */}
              <rect x="150" y="70" width="200" height="80" rx="10" fill="rgba(59, 130, 246, 0.15)" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="3"/>
              <text x="210" y="95" fill="rgb(147, 197, 253)" fontSize="14" fontWeight="bold">SERVICE DESK CLUSTER</text>
              <text x="220" y="115" fill="rgb(147, 197, 253)" fontSize="11">ITIL Framework</text>
              
              {/* Service Desk Nodes */}
              <rect x="170" y="120" width="35" height="20" rx="4" fill="rgba(34, 197, 94, 0.4)" stroke="rgb(34, 197, 94)" strokeWidth="2"/>
              <text x="180" y="135" fill="rgb(34, 197, 94)" fontSize="9" fontWeight="500">NODE 1</text>
              
              <rect x="230" y="120" width="35" height="20" rx="4" fill="rgba(34, 197, 94, 0.4)" stroke="rgb(34, 197, 94)" strokeWidth="2"/>
              <text x="240" y="135" fill="rgb(34, 197, 94)" fontSize="9" fontWeight="500">NODE 2</text>
              
              <rect x="290" y="120" width="35" height="20" rx="4" fill="rgba(34, 197, 94, 0.4)" stroke="rgb(34, 197, 94)" strokeWidth="2"/>
              <text x="300" y="135" fill="rgb(34, 197, 94)" fontSize="9" fontWeight="500">NODE 3</text>
              
              {/* Bastion Hosts */}
              <rect x="50" y="180" width="80" height="30" rx="6" fill="rgba(251, 191, 36, 0.4)" stroke="rgb(251, 191, 36)" strokeWidth="2"/>
              <text x="70" y="200" fill="rgb(251, 191, 36)" fontSize="11" fontWeight="600">BASTION HOST</text>
              
              <rect x="370" y="180" width="80" height="30" rx="6" fill="rgba(251, 191, 36, 0.4)" stroke="rgb(251, 191, 36)" strokeWidth="2"/>
              <text x="390" y="200" fill="rgb(251, 191, 36)" fontSize="11" fontWeight="600">BASTION HOST</text>
              
              {/* Segmented Networks */}
              <rect x="30" y="230" width="120" height="50" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2"/>
              <text x="65" y="250" fill="rgb(196, 181, 253)" fontSize="12" fontWeight="600">PRODUCTION</text>
              <text x="85" y="270" fill="rgb(196, 181, 253)" fontSize="10">LAN</text>
              
              <rect x="170" y="230" width="160" height="50" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2"/>
              <text x="225" y="250" fill="rgb(196, 181, 253)" fontSize="12" fontWeight="600">MANAGEMENT</text>
              <text x="245" y="270" fill="rgb(196, 181, 253)" fontSize="10">NETWORK</text>
              
              <rect x="350" y="230" width="120" height="50" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2"/>
              <text x="385" y="250" fill="rgb(196, 181, 253)" fontSize="12" fontWeight="600">OUT-OF-BAND</text>
              <text x="395" y="270" fill="rgb(196, 181, 253)" fontSize="10">NETWORK</text>
              
              {/* Zero Trust Lines */}
              <path d="M250 50 L250 70 M90 210 L90 230 M410 210 L410 230" stroke="rgba(239, 68, 68, 0.8)" strokeWidth="3"/>
              <path d="M150 230 L170 230 M330 230 L350 230" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="2" strokeDasharray="5,3"/>
              
              <text x="30" y="20" fill="rgb(239, 68, 68)" fontSize="11" fontWeight="600">ZERO TRUST MICROSEGMENTATION</text>
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
            <svg viewBox="0 0 400 300" className="w-full h-full">
              {/* Management VPC */}
              <rect x="40" y="40" width="140" height="100" rx="12" fill="rgba(251, 191, 36, 0.1)" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="2"/>
              <text x="50" y="60" fill="rgb(251, 191, 36)" fontSize="10" fontWeight="bold">Management VPC</text>
              
              {/* CI/CD Cluster */}
              <rect x="60" y="80" width="100" height="40" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="rgb(59, 130, 246)"/>
              <text x="75" y="105" fill="rgb(59, 130, 246)" fontSize="9">CI/CD Controllers</text>
              
              {/* Bastion Node */}
              <rect x="200" y="100" width="40" height="30" rx="6" fill="rgba(239, 68, 68, 0.3)" stroke="rgb(239, 68, 68)"/>
              <text x="207" y="120" fill="rgb(239, 68, 68)" fontSize="8">🔐 Bastion</text>
              
              {/* Production VPC */}
              <rect x="260" y="40" width="120" height="100" rx="12" fill="rgba(34, 197, 94, 0.1)" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="2"/>
              <text x="270" y="60" fill="rgb(34, 197, 94)" fontSize="10" fontWeight="bold">Production VPC</text>
              
              {/* Workflow Nodes */}
              <circle cx="290" cy="90" r="12" fill="rgba(168, 85, 247, 0.3)" stroke="rgb(168, 85, 247)"/>
              <circle cx="330" cy="90" r="12" fill="rgba(168, 85, 247, 0.3)" stroke="rgb(168, 85, 247)"/>
              <circle cx="310" cy="115" r="12" fill="rgba(168, 85, 247, 0.3)" stroke="rgb(168, 85, 247)"/>
              
              {/* Automation Controllers */}
              <rect x="120" y="170" width="160" height="50" rx="8" fill="rgba(147, 51, 234, 0.1)" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="2"/>
              <text x="140" y="190" fill="rgb(196, 181, 253)" fontSize="10" fontWeight="bold">Automation Controllers</text>
              <text x="160" y="205" fill="rgb(196, 181, 253)" fontSize="8">Workflow Orchestration</text>
              
              {/* Role-based Access Lines */}
              <path d="M180 90 L200 115" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M240 115 L260 90" stroke="rgba(34, 197, 94, 0.8)" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M200 170 L220 130" stroke="rgba(147, 51, 234, 0.8)" strokeWidth="2" strokeDasharray="4,4"/>
              
              <text x="50" y="250" fill="rgb(148, 163, 184)" fontSize="8">Role-based network segmentation</text>
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
            <svg viewBox="0 0 400 300" className="w-full h-full">
              {/* Primary Site */}
              <rect x="30" y="50" width="120" height="100" rx="12" fill="rgba(34, 197, 94, 0.1)" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="2"/>
              <text x="40" y="70" fill="rgb(34, 197, 94)" fontSize="10" fontWeight="bold">🏢 Primary Site</text>
              <text x="50" y="85" fill="rgb(34, 197, 94)" fontSize="8">Active Production</text>
              
              {/* Primary Infrastructure */}
              <rect x="50" y="100" width="30" height="20" fill="rgba(59, 130, 246, 0.3)" stroke="rgb(59, 130, 246)"/>
              <rect x="90" y="100" width="30" height="20" fill="rgba(59, 130, 246, 0.3)" stroke="rgb(59, 130, 246)"/>
              <text x="60" y="135" fill="rgb(59, 130, 246)" fontSize="7">App Servers</text>
              
              {/* DR Site */}
              <rect x="250" y="50" width="120" height="100" rx="12" fill="rgba(239, 68, 68, 0.1)" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="2"/>
              <text x="260" y="70" fill="rgb(239, 68, 68)" fontSize="10" fontWeight="bold">🏢 DR Site</text>
              <text x="270" y="85" fill="rgb(239, 68, 68)" fontSize="8">Passive Standby</text>
              
              {/* DR Infrastructure */}
              <rect x="270" y="100" width="30" height="20" fill="rgba(148, 163, 184, 0.3)" stroke="rgb(148, 163, 184)" strokeDasharray="3,3"/>
              <rect x="310" y="100" width="30" height="20" fill="rgba(148, 163, 184, 0.3)" stroke="rgb(148, 163, 184)" strokeDasharray="3,3"/>
              <text x="280" y="135" fill="rgb(148, 163, 184)" fontSize="7">Standby Servers</text>
              
              {/* SD-WAN Tunnel */}
              <path d="M150 100 Q200 80 250 100" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="3" strokeDasharray="8,4" fill="none"/>
              <text x="170" y="75" fill="rgb(251, 191, 36)" fontSize="9">🔒 Encrypted SD-WAN</text>
              
              {/* Replication VLAN */}
              <rect x="120" y="180" width="160" height="30" rx="6" fill="rgba(168, 85, 247, 0.1)" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2"/>
              <text x="160" y="200" fill="rgb(168, 85, 247)" fontSize="9">Replication VLAN</text>
              
              {/* Async Arrows */}
              <path d="M150 150 L150 180 M250 150 L250 180" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1.5"/>
              <path d="M160 195 L220 195" stroke="rgba(168, 85, 247, 0.8)" strokeWidth="2" markerEnd="url(#arrow)"/>
              <path d="M240 205 L180 205" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)"/>
              
              {/* Failover Orchestrator */}
              <circle cx="200" cy="240" r="15" fill="rgba(251, 191, 36, 0.2)" stroke="rgb(251, 191, 36)" strokeWidth="2"/>
              <text x="192" y="247" fill="rgb(251, 191, 36)" fontSize="8">⚡ Orchestrator</text>
              
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="rgba(168, 85, 247, 0.8)"/>
                </marker>
              </defs>
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
      description: 'Build cloud-based software solutions with modular HR, ERP, and CRM systems that scale with your business.',
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
      description: 'Secure single sign-on portals that provide unified access to all your internal applications and systems.',
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
      description: 'Automated compliance monitoring and audit-ready report generation with blockchain-verified authenticity.',
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
      description: 'Complete IT service management solution with automated ticket routing and resolution workflows.',
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
      description: 'Dynamic standard operating procedure creation with workflow automation for consistent operations.',
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
      description: 'Pre-configured disaster recovery solutions with automated failover and restoration procedures.',
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