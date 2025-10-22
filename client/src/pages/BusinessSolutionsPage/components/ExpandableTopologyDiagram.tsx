import React, { useMemo } from 'react';
import { ExpandableTopologyDiagramProps } from '../types';

/**
 * ExpandableTopologyDiagram component that renders topology diagrams for different solutions
 * Uses inline SVG content (preserving original implementation)
 * Do not modify SVG content - only reference existing inline implementations
 */
export const ExpandableTopologyDiagram: React.FC<ExpandableTopologyDiagramProps> = ({ solutionId }) => {
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
              <text x="720" y="52" text-anchor="middle" fill="#3B82F6" font-size="8" font-weight="600">LATENCY: 12ms</text>
            </g>

            {/* DMZ Zone */}
            <rect x="40" y="120" width="720" height="80" rx="12" fill="rgba(239, 68, 68, 0.1)" stroke="#EF4444" stroke-width="2" stroke-dasharray="8,4"/>
            <text x="60" y="145" fill="#EF4444" font-size="16" font-weight="bold">🛡️</text>
            <text x="110" y="145" fill="#F87171" font-size="14" font-weight="bold">DMZ ZONE</text>
            <text x="400" y="175" text-anchor="middle" fill="#FCA5A5" font-size="12" font-weight="600">Demilitarized Zone - External Services</text>

            {/* Load Balancer */}
            <rect x="350" y="140" width="100" height="40" rx="8" fill="url(#routerGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
            <text x="400" y="165" text-anchor="middle" fill="#93C5FD" font-size="11" font-weight="bold">Load Balancer</text>
            <text x="400" y="175" text-anchor="middle" fill="#BFDBFE" font-size="9">AWS ALB</text>

            {/* WAF */}
            <rect x="500" y="140" width="80" height="40" rx="8" fill="url(#firewallGradient)" stroke="#EF4444" stroke-width="2" filter="url(#networkShadow)"/>
            <text x="540" y="165" text-anchor="middle" fill="#FCA5A5" font-size="11" font-weight="bold">WAF</text>
            <text x="540" y="175" text-anchor="middle" fill="#FECACA" font-size="9">Security</text>

            {/* Main Application Zone */}
            <rect x="40" y="240" width="720" height="120" rx="12" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" stroke-width="2"/>
            <text x="60" y="265" fill="#3B82F6" font-size="16" font-weight="bold">🏢</text>
            <text x="110" y="265" fill="#60A5FA" font-size="14" font-weight="bold">APPLICATION ZONE</text>
            <text x="400" y="335" text-anchor="middle" fill="#93C5FD" font-size="12" font-weight="600">Multi-Tenant SaaS Application Layer</text>

            {/* API Gateway */}
            <rect x="80" y="280" width="90" height="50" rx="8" fill="url(#routerGradient)" stroke="#3B82F6" stroke-width="2" filter="url(#networkShadow)"/>
            <text x="125" y="305" text-anchor="middle" fill="#93C5FD" font-size="11" font-weight="bold">API Gateway</text>
            <text x="125" y="315" text-anchor="middle" fill="#BFDBFE" font-size="9">Kong/AWS</text>

            {/* Service Mesh */}
            <rect x="200" y="280" width="100" height="50" rx="8" fill="url(#serverGradient)" stroke="#10B981" stroke-width="2" filter="url(#networkShadow)"/>
            <text x="250" y="305" text-anchor="middle" fill="#6EE7B7" font-size="11" font-weight="bold">Service Mesh</text>
            <text x="250" y="315" text-anchor="middle" fill="#A7F3D0" font-size="9">Istio</text>

            {/* Kubernetes Cluster */}
            <rect x="330" y="280" width="120" height="50" rx="8" fill="url(#serverGradient)" stroke="#8B5CF6" stroke-width="2" filter="url(#networkShadow)"/>
            <text x="390" y="305" text-anchor="middle" fill="#C4B5FD" font-size="11" font-weight="bold">K8s Cluster</text>
            <text x="390" y="315" text-anchor="middle" fill="#DDD6FE" font-size="9">EKS/GKE</text>

            {/* Database Tier */}
            <rect x="480" y="280" width="100" height="50" rx="8" fill="url(#serverGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#networkShadow)"/>
            <text x="530" y="305" text-anchor="middle" fill="#FCD34D" font-size="11" font-weight="bold">Database</text>
            <text x="530" y="315" text-anchor="middle" fill="#FDE68A" font-size="9">PostgreSQL</text>

            {/* Monitoring Stack */}
            <rect x="610" y="280" width="90" height="50" rx="8" fill="url(#serverGradient)" stroke="#EC4899" stroke-width="2" filter="url(#networkShadow)"/>
            <text x="655" y="305" text-anchor="middle" fill="#F9A8D4" font-size="11" font-weight="bold">Monitoring</text>
            <text x="655" y="315" text-anchor="middle" fill="#FBCFE8" font-size="9">Prometheus</text>

            {/* Data Flow Arrows */}
            <path d="M400 80 L400 140" stroke="#60A5FA" stroke-width="3" fill="none" marker-end="url(#networkFlow)"/>
            <path d="M400 180 L400 240" stroke="#10B981" stroke-width="3" fill="none" marker-end="url(#secureFlow)"/>
            <path d="M125 330 L125 360" stroke="#3B82F6" stroke-width="2" fill="none" marker-end="url(#networkFlow)"/>
            <path d="M250 330 L250 360" stroke="#10B981" stroke-width="2" fill="none" marker-end="url(#secureFlow)"/>
            <path d="M390 330 L390 360" stroke="#8B5CF6" stroke-width="2" fill="none" marker-end="url(#networkFlow)"/>
            <path d="M530 330 L530 360" stroke="#F59E0B" stroke-width="2" fill="none" marker-end="url(#secureFlow)"/>
            <path d="M655 330 L655 360" stroke="#EC4899" stroke-width="2" fill="none" marker-end="url(#networkFlow)"/>

            {/* Data Tier */}
            <rect x="40" y="380" width="720" height="50" rx="12" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" stroke-width="2"/>
            <text x="60" y="405" fill="#10B981" font-size="16" font-weight="bold">💾</text>
            <text x="110" y="405" fill="#34D399" font-size="14" font-weight="bold">DATA TIER</text>
            <text x="400" y="420" text-anchor="middle" fill="#6EE7B7" font-size="12" font-weight="600">Persistent Storage & Backup Systems</text>

            {/* Storage Systems */}
            <rect x="150" y="390" width="80" height="30" rx="6" fill="url(#serverGradient)" stroke="#10B981" stroke-width="1"/>
            <text x="190" y="408" text-anchor="middle" fill="#6EE7B7" font-size="10" font-weight="bold">Primary DB</text>
            <rect x="250" y="390" width="80" height="30" rx="6" fill="url(#serverGradient)" stroke="#10B981" stroke-width="1"/>
            <text x="290" y="408" text-anchor="middle" fill="#6EE7B7" font-size="10" font-weight="bold">Cache Redis</text>
            <rect x="350" y="390" width="80" height="30" rx="6" fill="url(#serverGradient)" stroke="#10B981" stroke-width="1"/>
            <text x="390" y="408" text-anchor="middle" fill="#6EE7B7" font-size="10" font-weight="bold">File Storage</text>
            <rect x="450" y="390" width="80" height="30" rx="6" fill="url(#serverGradient)" stroke="#10B981" stroke-width="1"/>
            <text x="490" y="408" text-anchor="middle" fill="#6EE7B7" font-size="10" font-weight="bold">Backup</text>
            <rect x="550" y="390" width="80" height="30" rx="6" fill="url(#serverGradient)" stroke="#10B981" stroke-width="1"/>
            <text x="590" y="408" text-anchor="middle" fill="#6EE7B7" font-size="10" font-weight="bold">Archive</text>

            {/* Network connections */}
            <path d="M190 360 L190 390" stroke="#10B981" stroke-width="2" fill="none" marker-end="url(#secureFlow)"/>
            <path d="M290 360 L290 390" stroke="#10B981" stroke-width="2" fill="none" marker-end="url(#secureFlow)"/>
            <path d="M390 360 L390 390" stroke="#10B981" stroke-width="2" fill="none" marker-end="url(#secureFlow)"/>
            <path d="M490 360 L490 390" stroke="#10B981" stroke-width="2" fill="none" marker-end="url(#secureFlow)"/>
            <path d="M590 360 L590 390" stroke="#10B981" stroke-width="2" fill="none" marker-end="url(#secureFlow)"/>

            {/* Security indicators */}
            <g class="security-indicators">
              <circle cx="750" cy="160" r="8" fill="#10B981" opacity="0.8"/>
              <text x="750" y="165" text-anchor="middle" fill="#065F46" font-size="10" font-weight="bold">✓</text>
              <circle cx="750" cy="300" r="8" fill="#10B981" opacity="0.8"/>
              <text x="750" y="305" text-anchor="middle" fill="#065F46" font-size="10" font-weight="bold">✓</text>
              <circle cx="750" cy="410" r="8" fill="#10B981" opacity="0.8"/>
              <text x="750" y="415" text-anchor="middle" fill="#065F46" font-size="10" font-weight="bold">✓</text>
            </g>

            {/* Performance metrics */}
            <g class="performance-metrics" opacity="0.8">
              <rect x="20" y="450" width="760" height="30" fill="rgba(15, 23, 42, 0.8)" rx="4"/>
              <text x="40" y="470" fill="#94A3B8" font-size="12" font-weight="bold">Performance Metrics:</text>
              <text x="200" y="470" fill="#10B981" font-size="11">Response Time: 45ms</text>
              <text x="350" y="470" fill="#3B82F6" font-size="11">Throughput: 10K req/s</text>
              <text x="500" y="470" fill="#8B5CF6" font-size="11">Availability: 99.9%</text>
              <text x="650" y="470" fill="#F59E0B" font-size="11">Uptime: 365 days</text>
            </g>
          </svg>
        `;
        title = 'Custom SaaS Platform Architecture';
        description = 'Multi-tenant cloud infrastructure with isolated VPCs, Kubernetes orchestration, and service mesh for secure microservices communication.';
        break;

      case 'enterprise-portals':
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="portalShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
              </filter>
              <linearGradient id="portalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)"/>
                <stop offset="100%" stop-color="rgba(30, 41, 59, 0.8)"/>
              </linearGradient>
            </defs>
            
            <rect width="100%" height="100%" fill="#0F172A"/>
            
            {/* Central Hub */}
            <circle cx="400" cy="225" r="80" fill="url(#portalGradient)" stroke="#3B82F6" stroke-width="3" filter="url(#portalShadow)"/>
            <text x="400" y="220" text-anchor="middle" fill="#93C5FD" font-size="16" font-weight="bold">Central Hub</text>
            <text x="400" y="240" text-anchor="middle" fill="#BFDBFE" font-size="12">SSO & API Gateway</text>
            
            {/* Branch Offices */}
            <circle cx="150" cy="150" r="40" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="2"/>
            <text x="150" y="155" text-anchor="middle" fill="#34D399" font-size="12" font-weight="bold">Branch A</text>
            
            <circle cx="650" cy="150" r="40" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="2"/>
            <text x="650" y="155" text-anchor="middle" fill="#34D399" font-size="12" font-weight="bold">Branch B</text>
            
            <circle cx="150" cy="300" r="40" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="2"/>
            <text x="150" y="305" text-anchor="middle" fill="#34D399" font-size="12" font-weight="bold">Branch C</text>
            
            <circle cx="650" cy="300" r="40" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" stroke-width="2"/>
            <text x="650" y="305" text-anchor="middle" fill="#34D399" font-size="12" font-weight="bold">Branch D</text>
            
            {/* Connections */}
            <line x1="190" y1="170" x2="320" y2="200" stroke="#60A5FA" stroke-width="3" stroke-dasharray="5,5"/>
            <line x1="610" y1="170" x2="480" y2="200" stroke="#60A5FA" stroke-width="3" stroke-dasharray="5,5"/>
            <line x1="190" y1="280" x2="320" y2="250" stroke="#60A5FA" stroke-width="3" stroke-dasharray="5,5"/>
            <line x1="610" y1="280" x2="480" y2="250" stroke="#60A5FA" stroke-width="3" stroke-dasharray="5,5"/>
          </svg>
        `;
        title = 'Enterprise Portal Network';
        description = 'Centralized hub with secure VPN/SD-WAN connections to branch offices for unified access and management.';
        break;

      case 'pen-test-toolkits':
        svgContent = `
          <svg viewBox="0 0 1400 820" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pen-test lab topology">
            <defs>
              <linearGradient id="bg" x1="0" x2="1"><stop offset="0%" stop-color="#071426"/><stop offset="100%" stop-color="#021021"/></linearGradient>
              <filter id="soft"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.12"/></filter>
              <marker id="arrow" markerWidth="12" markerHeight="8" refX="10" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#60A5FA"/></marker>
              <marker id="secureArrow" markerWidth="12" markerHeight="8" refX="10" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#10B981"/></marker>
              <marker id="dangerArrow" markerWidth="12" markerHeight="8" refX="10" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#EF4444"/></marker>
              <style>
                .t { font-family: Inter, system-ui, -apple-system; fill:#E6F0FF; font-size:13px }
                .s { fill:#94A3B8; font-size:11px }
                .zone { fill: rgba(2,6,23,0.66); stroke-width:2 }
                .ephemeral { stroke-dasharray:7 6 }
                .box { fill:#061122; stroke-width:1.5 }
                .small { font-size:10px; fill:#94a3b8 }
                .vibrant { filter: drop-shadow(0 0 8px rgba(255,255,255,0.3)) }
              </style>
            </defs>

            <rect width="100%" height="100%" fill="url(#bg)"/>

            <text x="36" y="44" class="t" font-weight="700" font-size="18">Pen-Test Lab — Air-gapped, Segmented & Audited Environment</text>
            <text x="36" y="64" class="small">Design: Bastioned access → Mirrored (one-way) sanitized snapshots → Ephemeral sandbox VLANs → Controlled egress + immutable telemetry</text>

            <!-- Air-gapped envelope -->
            <g filter="url(#soft)">
              <rect x="28" y="92" width="1344" height="620" rx="16" class="zone" stroke="#EF4444"/>
              <text x="48" y="118" class="small" fill="#FCA5A5">Air-gapped Test Envelope (VLAN 600) — strict ingress/egress, audited</text>
            </g>

            <!-- Bastion / Jump (Management) -->
            <g class="vibrant">
              <rect x="56" y="156" width="260" height="140" rx="12" class="box" stroke="#60A5FA"/>
              <text x="186" y="186" text-anchor="middle" class="t">🛡️ Jump Bastion / Admin Gateway</text>
              <text x="186" y="204" text-anchor="middle" class="s">MFA, session recording, IP allowlist</text>
              <text x="186" y="222" text-anchor="middle" class="small">Mgmt VLAN: VLAN 602 — 10.62.0.0/24</text>
              <text x="186" y="238" text-anchor="middle" class="small">🔐 Hardened SSH + VPN access</text>
            </g>

            <!-- Mirror/TAP / Snapshot scrubber -->
            <g class="vibrant">
              <rect x="344" y="156" width="320" height="140" rx="12" class="box" stroke="#FCA5A5"/>
              <text x="504" y="186" text-anchor="middle" class="t">🔄 Mirrored Snapshot Zone</text>
              <text x="504" y="204" text-anchor="middle" class="s">Sanitizer (PII redaction) • One-way replication</text>
              <text x="504" y="222" text-anchor="middle" class="small">Test VLAN: VLAN 600 — 10.60.0.0/24 (read-only snapshots)</text>

              <!-- internal clones -->
              <rect x="384" y="216" width="120" height="64" rx="8" class="box" stroke="#EF4444"/>
              <text x="444" y="249" text-anchor="middle" class="small">📱 App Clone</text>

              <rect x="516" y="216" width="120" height="64" rx="8" class="box" stroke="#EF4444"/>
              <text x="576" y="249" text-anchor="middle" class="small">💾 DB Snapshot</text>
            </g>

            <!-- Ephemeral Labs -->
            <g class="vibrant">
              <rect x="704" y="156" width="616" height="320" rx="12" class="box" stroke="#F97316" class="ephemeral"/>
              <text x="1012" y="186" text-anchor="middle" class="t">⚡ Ephemeral Labs VLAN (VLAN 601)</text>
              <text x="1012" y="204" text-anchor="middle" class="s">Disposable VMs/containers • Network NS/iptables isolation</text>

              <!-- key components inside ephemeral -->
              <rect x="740" y="220" width="160" height="96" rx="10" class="box" stroke="#A855F7"/>
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

      default:
        svgContent = `
          <svg viewBox="0 0 800 450" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <rect width="100%" height="100%" fill="#0F172A"/>
            <text x="400" y="225" text-anchor="middle" fill="#94A3B8" font-size="18">Topology diagram for {solutionId}</text>
          </svg>
        `;
        title = 'Solution Architecture';
        description = 'Interactive topology diagram showing the solution architecture.';
    }

    return { svgContent, title, description };
  }, [solutionId]);

  return (
    <div className="w-full h-96 bg-slate-900 rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold mb-2">{renderTopology.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{renderTopology.description}</p>
      </div>
      <div 
        className="w-full h-64"
        dangerouslySetInnerHTML={{ __html: renderTopology.svgContent }}
      />
    </div>
  );
};
