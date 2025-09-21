// Corporate Topology Data Model & TypeScript Interfaces
// Enterprise-grade network topology visualization system

export interface Position {
  x: number; // Percentage (0-100) for responsive positioning
  y: number; // Percentage (0-100) for responsive positioning
}

export interface Size {
  width: number;  // Viewport width units (vw)
  height: number; // Viewport height units (vh)
}

export interface Dimensions {
  width: number;
  height: number;
}

// Node Classification for Enterprise Networks
export enum NodeKind {
  // Infrastructure Nodes
  CLOUD = 'cloud',
  INTERNET = 'internet',
  
  // Security Layer
  FIREWALL = 'firewall',
  SECURITY_GATEWAY = 'security_gateway',
  WAF = 'waf',
  IDS_IPS = 'ids_ips',
  BASTION = 'bastion',
  
  // Network Infrastructure
  LOAD_BALANCER = 'load_balancer',
  API_GATEWAY = 'api_gateway',
  CDN = 'cdn',
  DNS = 'dns',
  VPN_GATEWAY = 'vpn_gateway',
  
  // Service Mesh & Orchestration
  SERVICE_MESH = 'service_mesh',
  ORCHESTRATOR = 'orchestrator',
  SERVICE_REGISTRY = 'service_registry',
  CONFIG_SERVER = 'config_server',
  
  // Compute & Processing
  CONTAINER = 'container',
  MICROSERVICE = 'microservice',
  LAMBDA = 'lambda',
  WORKER = 'worker',
  
  // Data Layer
  DATABASE = 'database',
  CACHE = 'cache',
  QUEUE = 'queue',
  STORAGE = 'storage',
  DATA_LAKE = 'data_lake',
  SEARCH = 'search',
  
  // Application Layer
  TENANT = 'tenant',
  APPLICATION = 'application',
  MOBILE_APP = 'mobile_app',
  WEB_APP = 'web_app',
  
  // Monitoring & Management
  MONITORING = 'monitoring',
  LOGGING = 'logging',
  METRICS = 'metrics',
  ALERTING = 'alerting',
  
  // External Services
  THIRD_PARTY = 'third_party',
  PAYMENT = 'payment',
  IDENTITY_PROVIDER = 'identity_provider'
}

// Connection Types for Network Flows
export enum EdgeKind {
  // Data Flow Types
  API_CALL = 'api_call',
  DATA_SYNC = 'data_sync',
  FILE_TRANSFER = 'file_transfer',
  STREAM = 'stream',
  
  // Security Connections
  SECURE_TUNNEL = 'secure_tunnel',
  ENCRYPTED = 'encrypted',
  AUTHENTICATED = 'authenticated',
  AUTHORIZED = 'authorized',
  
  // Service Mesh Communications
  MESH_INTERNAL = 'mesh_internal',
  SIDECAR = 'sidecar',
  ENVOY_PROXY = 'envoy_proxy',
  
  // Network Infrastructure
  LOAD_BALANCED = 'load_balanced',
  FAILOVER = 'failover',
  BACKUP = 'backup',
  REPLICATION = 'replication',
  
  // Monitoring & Control
  HEALTH_CHECK = 'health_check',
  METRICS_COLLECTION = 'metrics_collection',
  LOG_AGGREGATION = 'log_aggregation',
  ALERT = 'alert',
  
  // Standard Network
  HTTP = 'http',
  HTTPS = 'https',
  TCP = 'tcp',
  UDP = 'udp',
  WEBSOCKET = 'websocket'
}

// Network Zone Classification
export enum GroupKind {
  // External Zone
  INTERNET = 'internet',
  PUBLIC_CLOUD = 'public_cloud',
  
  // Security Perimeter
  DMZ_INGRESS = 'dmz_ingress',
  DMZ_EGRESS = 'dmz_egress',
  SECURITY_ZONE = 'security_zone',
  
  // Application Layers
  PRESENTATION_LAYER = 'presentation_layer',
  SERVICE_MESH_LAYER = 'service_mesh_layer',
  BUSINESS_LOGIC_LAYER = 'business_logic_layer',
  
  // Data & Storage
  DATA_LAYER = 'data_layer',
  CACHE_LAYER = 'cache_layer',
  STORAGE_LAYER = 'storage_layer',
  
  // Tenant Isolation
  TENANT_SPACE = 'tenant_space',
  SHARED_SERVICES = 'shared_services',
  
  // Infrastructure
  COMPUTE_CLUSTER = 'compute_cluster',
  NETWORK_INFRASTRUCTURE = 'network_infrastructure',
  
  // Management & Operations
  MANAGEMENT_PLANE = 'management_plane',
  MONITORING_STACK = 'monitoring_stack',
  DEVOPS_TOOLS = 'devops_tools'
}

// Component Status for Operational Visualization
export enum ComponentStatus {
  ACTIVE = 'active',
  WARNING = 'warning', 
  CRITICAL = 'critical',
  MAINTENANCE = 'maintenance',
  OFFLINE = 'offline',
  DEGRADED = 'degraded'
}

// Security Classification
export enum SecurityLevel {
  PUBLIC = 'public',
  INTERNAL = 'internal', 
  RESTRICTED = 'restricted',
  CONFIDENTIAL = 'confidential',
  TOP_SECRET = 'top_secret'
}

// Professional Color Themes for Corporate Environments
export interface ColorTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  border: string;
  text: string;
  shadow: string;
}

// Enterprise Topology Node
export interface TopologyNode {
  id: string;
  name: string;
  kind: NodeKind;
  position: Position;
  size: Size;
  
  // Visual Properties
  icon: string;
  colorTheme: ColorTheme;
  status: ComponentStatus;
  
  // Network Properties
  ipAddress?: string;
  hostname?: string;
  port?: number;
  protocol?: string;
  
  // Security Properties
  securityLevel: SecurityLevel;
  encryptionEnabled: boolean;
  accessControlList?: string[];
  
  // Operational Properties
  healthStatus: ComponentStatus;
  lastUpdated: Date;
  version?: string;
  
  // Grouping & Organization
  groupId?: string;
  tags: string[];
  
  // Metadata for Enterprise Management
  owner?: string;
  environment: 'development' | 'staging' | 'production';
  costCenter?: string;
  compliance?: string[];
  
  // Interactive Properties
  tooltip?: string;
  clickAction?: string;
  hoverInfo?: Record<string, any>;
}

// Enterprise Network Connection
export interface TopologyEdge {
  id: string;
  sourceId: string;
  targetId: string;
  kind: EdgeKind;
  
  // Connection Properties
  protocol: string;
  port?: number;
  bandwidth?: string;
  latency?: number;
  
  // Security Properties
  encrypted: boolean;
  securityLevel: SecurityLevel;
  authenticationRequired: boolean;
  
  // Visual Properties
  color: string;
  strokeWidth: number;
  strokeDashArray?: string;
  animated: boolean;
  
  // Path Definition
  pathData?: string; // SVG path for custom routing
  midpoints?: Position[]; // Intermediate waypoints
  
  // Labels & Metadata
  label?: string;
  description?: string;
  tags: string[];
  
  // Operational Properties
  status: ComponentStatus;
  throughput?: string;
  errorRate?: number;
  lastActiveTime: Date;
  
  // Interactive Properties
  tooltip?: string;
  clickAction?: string;
}

// Enterprise Network Zone/Group
export interface TopologyGroup {
  id: string;
  name: string;
  kind: GroupKind;
  position: Position;
  size: Size;
  
  // Visual Properties
  colorTheme: ColorTheme;
  backgroundPattern?: string;
  borderStyle: 'solid' | 'dashed' | 'dotted';
  
  // Security Properties
  securityLevel: SecurityLevel;
  firewallRules?: string[];
  networkACLs?: string[];
  
  // Network Properties
  subnet?: string;
  vpcId?: string;
  region?: string;
  availabilityZone?: string;
  
  // Child Relationships
  nodeIds: string[];
  subGroupIds?: string[];
  
  // Compliance & Governance
  complianceStandards?: string[];
  dataClassification?: string;
  backupPolicy?: string;
  
  // Interactive Properties
  expandable: boolean;
  expanded: boolean;
  tooltip?: string;
}

// Complete Topology Definition
export interface TopologyDiagram {
  id: string;
  name: string;
  description: string;
  version: string;
  
  // Core Components
  nodes: TopologyNode[];
  edges: TopologyEdge[];
  groups: TopologyGroup[];
  
  // Layout Properties
  canvasSize: Dimensions;
  viewBox: string;
  backgroundColor: string;
  
  // Metadata
  created: Date;
  lastModified: Date;
  author: string;
  tags: string[];
  
  // Configuration
  interactive: boolean;
  animationsEnabled: boolean;
  showLabels: boolean;
  showTooltips: boolean;
  
  // Enterprise Features
  auditLog?: Array<{
    timestamp: Date;
    action: string;
    user: string;
    details: string;
  }>;
  
  permissions?: {
    viewers: string[];
    editors: string[];
    admins: string[];
  };
}

// Predefined Corporate Color Themes
export const CORPORATE_THEMES: Record<string, ColorTheme> = {
  cloud: {
    primary: 'hsl(210, 100%, 65%)',
    secondary: 'hsl(210, 50%, 85%)',
    accent: 'hsl(210, 80%, 75%)',
    background: 'hsla(210, 100%, 65%, 0.08)',
    border: 'hsla(210, 100%, 65%, 0.25)',
    text: 'hsl(210, 100%, 90%)',
    shadow: 'hsla(210, 100%, 65%, 0.15)'
  },
  security: {
    primary: 'hsl(0, 75%, 60%)',
    secondary: 'hsl(0, 50%, 80%)',
    accent: 'hsl(0, 65%, 70%)',
    background: 'hsla(0, 75%, 60%, 0.08)',
    border: 'hsla(0, 75%, 60%, 0.25)',
    text: 'hsl(0, 75%, 90%)',
    shadow: 'hsla(0, 75%, 60%, 0.15)'
  },
  network: {
    primary: 'hsl(220, 70%, 50%)',
    secondary: 'hsl(220, 45%, 75%)',
    accent: 'hsl(220, 60%, 65%)',
    background: 'hsla(220, 70%, 50%, 0.08)',
    border: 'hsla(220, 70%, 50%, 0.25)',
    text: 'hsl(220, 70%, 90%)',
    shadow: 'hsla(220, 70%, 50%, 0.15)'
  },
  data: {
    primary: 'hsl(190, 85%, 45%)',
    secondary: 'hsl(190, 60%, 70%)',
    accent: 'hsl(190, 75%, 60%)',
    background: 'hsla(190, 85%, 45%, 0.08)',
    border: 'hsla(190, 85%, 45%, 0.25)',
    text: 'hsl(190, 85%, 90%)',
    shadow: 'hsla(190, 85%, 45%, 0.15)'
  },
  mesh: {
    primary: 'hsl(280, 65%, 60%)',
    secondary: 'hsl(280, 40%, 80%)',
    accent: 'hsl(280, 55%, 70%)',
    background: 'hsla(280, 65%, 60%, 0.08)',
    border: 'hsla(280, 65%, 60%, 0.25)',
    text: 'hsl(280, 65%, 90%)',
    shadow: 'hsla(280, 65%, 60%, 0.15)'
  },
  tenant: {
    primary: 'hsl(150, 60%, 50%)',
    secondary: 'hsl(150, 40%, 75%)',
    accent: 'hsl(150, 50%, 65%)',
    background: 'hsla(150, 60%, 50%, 0.08)',
    border: 'hsla(150, 60%, 50%, 0.25)',
    text: 'hsl(150, 60%, 90%)',
    shadow: 'hsla(150, 60%, 50%, 0.15)'
  }
};

// Utility functions for topology management
export const createNode = (partial: Partial<TopologyNode> & { id: string; kind: NodeKind }): TopologyNode => ({
  name: partial.name || partial.id,
  position: partial.position || { x: 50, y: 50 },
  size: partial.size || { width: 8, height: 6 },
  icon: partial.icon || '📦',
  colorTheme: partial.colorTheme || CORPORATE_THEMES.cloud,
  status: partial.status || ComponentStatus.ACTIVE,
  securityLevel: partial.securityLevel || SecurityLevel.INTERNAL,
  encryptionEnabled: partial.encryptionEnabled || false,
  healthStatus: partial.healthStatus || ComponentStatus.ACTIVE,
  lastUpdated: partial.lastUpdated || new Date(),
  tags: partial.tags || [],
  environment: partial.environment || 'production',
  ...partial
});

export const createEdge = (partial: Partial<TopologyEdge> & { 
  id: string; 
  sourceId: string; 
  targetId: string; 
  kind: EdgeKind;
}): TopologyEdge => ({
  protocol: partial.protocol || 'HTTPS',
  encrypted: partial.encrypted || false,
  securityLevel: partial.securityLevel || SecurityLevel.INTERNAL,
  authenticationRequired: partial.authenticationRequired || false,
  color: partial.color || 'hsl(220, 70%, 50%)',
  strokeWidth: partial.strokeWidth || 2,
  animated: partial.animated || false,
  tags: partial.tags || [],
  status: partial.status || ComponentStatus.ACTIVE,
  lastActiveTime: partial.lastActiveTime || new Date(),
  ...partial
});

export const createGroup = (partial: Partial<TopologyGroup> & { 
  id: string; 
  kind: GroupKind;
}): TopologyGroup => ({
  name: partial.name || partial.id,
  position: partial.position || { x: 10, y: 10 },
  size: partial.size || { width: 80, height: 60 },
  colorTheme: partial.colorTheme || CORPORATE_THEMES.cloud,
  borderStyle: partial.borderStyle || 'solid',
  securityLevel: partial.securityLevel || SecurityLevel.INTERNAL,
  nodeIds: partial.nodeIds || [],
  expandable: partial.expandable || false,
  expanded: partial.expanded || true,
  ...partial
});