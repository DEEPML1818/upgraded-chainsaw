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
} from 'lucide-react';
import { BusinessSolution } from './types';

export const generalSolutions: BusinessSolution[] = [
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
    name: 'Compliance & Reporting',
    icon: FileText,
    description: 'Automated compliance monitoring with real-time reporting and audit trails for regulatory requirements.',
    category: 'general',
    workflow: [
      { id: 'data-collection', icon: Database, label: 'Data Collection', description: 'Gather compliance data' },
      { id: 'analysis', icon: BarChart3, label: 'Analysis', description: 'Process and analyze data' },
      { id: 'reporting', icon: FileText, label: 'Reporting', description: 'Generate compliance reports' },
      { id: 'audit', icon: Shield, label: 'Audit', description: 'Audit trail maintenance' }
    ]
  },
  {
    id: 'help-desk',
    name: 'Help Desk & Support',
    icon: Headphones,
    description: 'Comprehensive support system with ticketing, knowledge base, and automated escalation.',
    category: 'general',
    workflow: [
      { id: 'ticket-creation', icon: Ticket, label: 'Ticket Creation', description: 'Create support tickets' },
      { id: 'knowledge-base', icon: BookOpen, label: 'Knowledge Base', description: 'Search solutions' },
      { id: 'escalation', icon: ArrowRight, label: 'Escalation', description: 'Escalate complex issues' },
      { id: 'resolution', icon: CheckCircle, label: 'Resolution', description: 'Resolve and close tickets' }
    ]
  },
  {
    id: 'training-platforms',
    name: 'Training Platforms',
    icon: GraduationCap,
    description: 'Interactive learning management system with progress tracking and certification.',
    category: 'general',
    workflow: [
      { id: 'course-creation', icon: BookOpen, label: 'Course Creation', description: 'Create training content' },
      { id: 'enrollment', icon: Users, label: 'Enrollment', description: 'Student enrollment' },
      { id: 'progress-tracking', icon: BarChart3, label: 'Progress Tracking', description: 'Monitor learning progress' },
      { id: 'certification', icon: GraduationCap, label: 'Certification', description: 'Issue certificates' }
    ]
  },
  {
    id: 'maintenance-tools',
    name: 'Maintenance Tools',
    icon: Wrench,
    description: 'Predictive maintenance system with automated scheduling and resource optimization.',
    category: 'general',
    workflow: [
      { id: 'monitoring', icon: Monitor, label: 'Monitoring', description: 'Monitor equipment status' },
      { id: 'scheduling', icon: Settings, label: 'Scheduling', description: 'Schedule maintenance tasks' },
      { id: 'resource-management', icon: Settings, label: 'Resource Management', description: 'Manage maintenance resources' },
      { id: 'documentation', icon: FileText, label: 'Documentation', description: 'Maintain service records' }
    ]
  }
];

export const nicheSolutions: BusinessSolution[] = [
  {
    id: 'defi-launch',
    name: 'Secure DeFi Launch Pack',
    icon: Shield,
    description: 'Multi-cloud active-active blockchain infrastructure with smart contract auditing and compliance monitoring.',
    category: 'niche',
    workflow: [
      { id: 'blockchain-setup', icon: Network, label: 'Blockchain Setup', description: 'Deploy blockchain infrastructure' },
      { id: 'smart-contracts', icon: Bot, label: 'Smart Contracts', description: 'Deploy and audit contracts' },
      { id: 'security-audit', icon: Shield, label: 'Security Audit', description: 'Security validation' },
      { id: 'compliance', icon: CheckCircle, label: 'Compliance', description: 'Regulatory compliance' }
    ]
  },
  {
    id: 'ai-automation',
    name: 'AI Automation Suite',
    icon: Bot,
    description: 'Intelligent automation platform with machine learning capabilities for business process optimization.',
    category: 'niche',
    workflow: [
      { id: 'data-ingestion', icon: Database, label: 'Data Ingestion', description: 'Collect and process data' },
      { id: 'ml-training', icon: Bot, label: 'ML Training', description: 'Train machine learning models' },
      { id: 'automation', icon: Repeat, label: 'Automation', description: 'Automate business processes' },
      { id: 'optimization', icon: TrendingUp, label: 'Optimization', description: 'Continuous improvement' }
    ]
  },
  {
    id: 'iot-platform',
    name: 'IoT Management Platform',
    icon: Antenna,
    description: 'Comprehensive IoT device management with real-time monitoring and edge computing capabilities.',
    category: 'niche',
    workflow: [
      { id: 'device-registration', icon: Antenna, label: 'Device Registration', description: 'Register IoT devices' },
      { id: 'data-collection', icon: Database, label: 'Data Collection', description: 'Collect sensor data' },
      { id: 'edge-processing', icon: Cpu, label: 'Edge Processing', description: 'Process data at edge' },
      { id: 'analytics', icon: BarChart3, label: 'Analytics', description: 'Analyze IoT data' }
    ]
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Lab',
    icon: Cpu,
    description: 'Quantum computing infrastructure for research and development with classical-quantum hybrid systems.',
    category: 'niche',
    workflow: [
      { id: 'quantum-setup', icon: Cpu, label: 'Quantum Setup', description: 'Setup quantum environment' },
      { id: 'algorithm-development', icon: Bot, label: 'Algorithm Development', description: 'Develop quantum algorithms' },
      { id: 'simulation', icon: Monitor, label: 'Simulation', description: 'Run quantum simulations' },
      { id: 'results-analysis', icon: BarChart3, label: 'Results Analysis', description: 'Analyze quantum results' }
    ]
  },
  {
    id: 'blockchain-enterprise',
    name: 'Enterprise Blockchain',
    icon: Lock,
    description: 'Private blockchain network for enterprise use cases with smart contracts and governance.',
    category: 'niche',
    workflow: [
      { id: 'network-setup', icon: Network, label: 'Network Setup', description: 'Deploy private blockchain' },
      { id: 'consensus', icon: Users, label: 'Consensus', description: 'Establish consensus mechanism' },
      { id: 'smart-contracts', icon: Bot, label: 'Smart Contracts', description: 'Deploy enterprise contracts' },
      { id: 'governance', icon: Settings, label: 'Governance', description: 'Manage network governance' }
    ]
  },
  {
    id: 'metaverse-platform',
    name: 'Metaverse Platform',
    icon: Globe,
    description: 'Virtual world infrastructure with 3D environments, avatars, and immersive experiences.',
    category: 'niche',
    workflow: [
      { id: 'world-creation', icon: Globe, label: 'World Creation', description: 'Create virtual environments' },
      { id: 'avatar-system', icon: Users, label: 'Avatar System', description: 'User avatar management' },
      { id: 'interaction-engine', icon: Bot, label: 'Interaction Engine', description: 'Handle user interactions' },
      { id: 'content-delivery', icon: Cloud, label: 'Content Delivery', description: 'Stream 3D content' }
    ]
  }
];

export const specializedSolutions: BusinessSolution[] = [
  {
    id: 'pen-test-toolkits',
    name: 'Pen Test Toolkits & Scripts',
    icon: Shield,
    description: 'Isolated Test Lab VLAN Air-gapped or VLAN-segmented test lab with mirrored production snapshots and controlled gateway for safe pentesting.',
    category: 'specialized',
    workflow: [
      { id: 'lab-setup', icon: Settings, label: 'Lab Setup', description: 'Create isolated test environment' },
      { id: 'tool-deployment', icon: Wrench, label: 'Tool Deployment', description: 'Deploy testing tools' },
      { id: 'vulnerability-scan', icon: Eye, label: 'Vulnerability Scan', description: 'Scan for vulnerabilities' },
      { id: 'report-generation', icon: FileText, label: 'Report Generation', description: 'Generate test reports' }
    ]
  },
  {
    id: 'crypto-mining',
    name: 'Crypto Mining Operations',
    icon: Cpu,
    description: 'High-performance mining infrastructure with optimized hardware and energy management.',
    category: 'specialized',
    workflow: [
      { id: 'hardware-setup', icon: Cpu, label: 'Hardware Setup', description: 'Configure mining hardware' },
      { id: 'pool-configuration', icon: Network, label: 'Pool Configuration', description: 'Connect to mining pools' },
      { id: 'monitoring', icon: Monitor, label: 'Monitoring', description: 'Monitor mining performance' },
      { id: 'profit-optimization', icon: TrendingUp, label: 'Profit Optimization', description: 'Optimize profitability' }
    ]
  },
  {
    id: 'research-lab',
    name: 'Research & Development Lab',
    icon: GraduationCap,
    description: 'Advanced research environment with specialized tools and collaborative workspaces.',
    category: 'specialized',
    workflow: [
      { id: 'project-setup', icon: Folder, label: 'Project Setup', description: 'Initialize research projects' },
      { id: 'data-analysis', icon: BarChart3, label: 'Data Analysis', description: 'Analyze research data' },
      { id: 'collaboration', icon: Users, label: 'Collaboration', description: 'Team collaboration tools' },
      { id: 'publication', icon: FileText, label: 'Publication', description: 'Publish research findings' }
    ]
  },
  {
    id: 'edge-computing',
    name: 'Edge Computing Network',
    icon: CloudSnow,
    description: 'Distributed edge computing infrastructure for low-latency applications and data processing.',
    category: 'specialized',
    workflow: [
      { id: 'edge-deployment', icon: CloudSnow, label: 'Edge Deployment', description: 'Deploy edge nodes' },
      { id: 'data-routing', icon: Network, label: 'Data Routing', description: 'Route data to optimal nodes' },
      { id: 'processing', icon: Cpu, label: 'Processing', description: 'Process data at edge' },
      { id: 'result-aggregation', icon: Database, label: 'Result Aggregation', description: 'Aggregate results' }
    ]
  },
  {
    id: 'digital-twin',
    name: 'Digital Twin Platform',
    icon: Monitor,
    description: 'Real-time digital replicas of physical systems with simulation and predictive capabilities.',
    category: 'specialized',
    workflow: [
      { id: 'model-creation', icon: Monitor, label: 'Model Creation', description: 'Create digital twin models' },
      { id: 'data-synchronization', icon: ArrowLeftRight, label: 'Data Synchronization', description: 'Sync with physical system' },
      { id: 'simulation', icon: Bot, label: 'Simulation', description: 'Run simulations' },
      { id: 'prediction', icon: TrendingUp, label: 'Prediction', description: 'Predict system behavior' }
    ]
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain Optimization',
    icon: ShoppingCart,
    description: 'AI-powered supply chain management with predictive analytics and automation.',
    category: 'specialized',
    workflow: [
      { id: 'inventory-tracking', icon: Database, label: 'Inventory Tracking', description: 'Track inventory levels' },
      { id: 'demand-forecasting', icon: TrendingUp, label: 'Demand Forecasting', description: 'Predict demand patterns' },
      { id: 'route-optimization', icon: Globe, label: 'Route Optimization', description: 'Optimize delivery routes' },
      { id: 'cost-analysis', icon: Calculator, label: 'Cost Analysis', description: 'Analyze costs and savings' }
    ]
  }
];

export const allSolutions = [...generalSolutions, ...nicheSolutions, ...specializedSolutions];
