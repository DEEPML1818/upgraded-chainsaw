import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, Shield, Wifi, Cloud, Monitor, Database, Router, HardDrive,
  Smartphone, Printer, Globe, Cable, Settings, Play, X, Info
} from 'lucide-react';

interface NetworkDevice {
  id: string;
  type: string;
  category: 'networking' | 'security' | 'cloud' | 'endpoints' | 'storage';
  x: number;
  y: number;
  icon: any;
  label: string;
  description: string;
  specs: string;
  companyHelp: string;
}

interface Connection {
  id: string;
  from: string;
  to: string;
  optimized?: boolean;
}

const deviceCategories = {
  networking: {
    name: 'Networking',
    devices: [
      { 
        type: 'router', 
        icon: Router, 
        label: 'Router', 
        description: 'Routes data between different networks',
        specs: 'Dual-band wireless router with advanced QoS and security features',
        companyHelp: 'FlowTech provides enterprise-grade router configuration and management to ensure optimal network performance and security.'
      },
      { 
        type: 'switch', 
        icon: Wifi, 
        label: 'Switch', 
        description: 'Connects multiple devices in the same network',
        specs: '24-port managed Gigabit switch with VLAN support and PoE capabilities',
        companyHelp: 'Our network engineers optimize switch configurations for maximum throughput and implement proper VLAN segmentation.'
      },
      { 
        type: 'access-point', 
        icon: Globe, 
        label: 'Access Point', 
        description: 'Provides wireless network access',
        specs: 'Wi-Fi 6 enterprise access point with advanced security and management features',
        companyHelp: 'FlowTech designs and deploys wireless networks with optimal coverage and seamless roaming capabilities.'
      }
    ]
  },
  security: {
    name: 'Security',
    devices: [
      { 
        type: 'firewall', 
        icon: Shield, 
        label: 'Firewall', 
        description: 'Protects your network from unauthorized access',
        specs: 'Next-generation firewall with deep packet inspection and threat intelligence',
        companyHelp: 'Our cybersecurity experts configure and monitor firewalls to protect against advanced threats and ensure compliance.'
      },
      { 
        type: 'security-appliance', 
        icon: Settings, 
        label: 'Security Appliance', 
        description: 'Unified threat management and monitoring',
        specs: 'Integrated security platform with IDS/IPS, antivirus, and content filtering',
        companyHelp: 'FlowTech provides 24/7 security monitoring and rapid response to threats detected by your security appliances.'
      }
    ]
  },
  cloud: {
    name: 'Cloud',
    devices: [
      { 
        type: 'cloud', 
        icon: Cloud, 
        label: 'Cloud Service', 
        description: 'Cloud-based computing and storage resources',
        specs: 'Scalable cloud infrastructure with high availability and disaster recovery',
        companyHelp: 'Our cloud architects help you migrate to and optimize cloud environments for cost-effectiveness and performance.'
      },
      { 
        type: 'hybrid-cloud', 
        icon: Globe, 
        label: 'Hybrid Cloud', 
        description: 'Combines on-premises and cloud resources',
        specs: 'Hybrid cloud solution with seamless integration and workload management',
        companyHelp: 'FlowTech designs hybrid cloud strategies that maximize flexibility while maintaining security and compliance.'
      }
    ]
  },
  endpoints: {
    name: 'Endpoints',
    devices: [
      { 
        type: 'workstation', 
        icon: Monitor, 
        label: 'PC/Workstation', 
        description: 'Employee computers and workstations',
        specs: 'High-performance business workstation with enterprise security features',
        companyHelp: 'We provide comprehensive endpoint management including security, updates, and remote support for all user devices.'
      },
      { 
        type: 'laptop', 
        icon: Monitor, 
        label: 'Laptop', 
        description: 'Mobile computing devices',
        specs: 'Business-grade laptop with VPN access and endpoint protection',
        companyHelp: 'FlowTech ensures secure remote access and mobile device management for your distributed workforce.'
      },
      { 
        type: 'mobile', 
        icon: Smartphone, 
        label: 'Mobile Device', 
        description: 'Smartphones and tablets',
        specs: 'Enterprise mobile devices with MDM and security policies',
        companyHelp: 'Our mobile device management solutions keep business data secure across all employee devices.'
      },
      { 
        type: 'printer', 
        icon: Printer, 
        label: 'Network Printer', 
        description: 'Shared printing resources',
        specs: 'Enterprise network printer with security features and print management',
        companyHelp: 'We manage your print infrastructure and implement secure printing solutions to protect sensitive documents.'
      }
    ]
  },
  storage: {
    name: 'Storage',
    devices: [
      { 
        type: 'server', 
        icon: Server, 
        label: 'Server', 
        description: 'Core server hosting applications and data',
        specs: 'Enterprise server with redundant storage and high availability features',
        companyHelp: 'FlowTech provides server management, monitoring, and maintenance to ensure maximum uptime and performance.'
      },
      { 
        type: 'database', 
        icon: Database, 
        label: 'Database Server', 
        description: 'Dedicated database management system',
        specs: 'High-performance database server with backup and replication capabilities',
        companyHelp: 'Our database administrators ensure optimal performance, security, and automated backup strategies.'
      },
      { 
        type: 'storage', 
        icon: HardDrive, 
        label: 'Storage Array', 
        description: 'Network attached storage system',
        specs: 'Enterprise storage array with RAID protection and snapshot capabilities',
        companyHelp: 'We design and manage storage solutions that scale with your business and provide reliable data protection.'
      }
    ]
  }
};

export function CiscoPacketTracerBuilder() {
  const [placedDevices, setPlacedDevices] = useState<NetworkDevice[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof deviceCategories>('networking');
  const [connectionMode, setConnectionMode] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [hoveredDevice, setHoveredDevice] = useState<string | null>(null);
  const [sidePanel, setSidePanel] = useState<NetworkDevice | null>(null);
  const [simulationMode, setSimulationMode] = useState(false);
  const [showBusinessOverlay, setShowBusinessOverlay] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Grid pattern for professional look
  const gridPattern = "data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='m 40 0 l 0 40 m -40 0 l 40 0' fill='none' stroke='%23374151' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e";

  // Helper function to get icon component by device type
  const getIconComponent = (deviceType: string) => {
    const iconMap: { [key: string]: any } = {
      'router': Router,
      'switch': Wifi,
      'access-point': Globe,
      'firewall': Shield,
      'security-appliance': Settings,
      'cloud': Cloud,
      'hybrid-cloud': Globe,
      'workstation': Monitor,
      'laptop': Monitor,
      'mobile': Smartphone,
      'printer': Printer,
      'server': Server,
      'database': Database,
      'storage': HardDrive
    };
    return iconMap[deviceType] || Server;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const deviceData = JSON.parse(e.dataTransfer.getData('text/plain'));
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newDevice: NetworkDevice = {
      id: `${deviceData.type}-${Date.now()}`,
      type: deviceData.type,
      category: selectedCategory,
      x: Math.max(30, Math.min(x, rect.width - 30)),
      y: Math.max(30, Math.min(y, rect.height - 30)),
      icon: getIconComponent(deviceData.type),
      label: deviceData.label,
      description: deviceData.description,
      specs: deviceData.specs,
      companyHelp: deviceData.companyHelp
    };

    setPlacedDevices(prev => [...prev, newDevice]);
  };

  const handleDeviceClick = (deviceId: string) => {
    if (connectionMode) {
      if (selectedDevice && selectedDevice !== deviceId) {
        // Create connection
        const newConnection: Connection = {
          id: `${selectedDevice}-${deviceId}`,
          from: selectedDevice,
          to: deviceId,
          optimized: Math.random() > 0.3 // Random optimization for demo
        };
        setConnections(prev => [...prev, newConnection]);
        setSelectedDevice(null);
        setConnectionMode(false);
      } else {
        setSelectedDevice(deviceId);
      }
    } else {
      // Open side panel
      const device = placedDevices.find(d => d.id === deviceId);
      if (device) setSidePanel(device);
    }
  };

  // Show business overlay when network is substantial
  useEffect(() => {
    if (placedDevices.length >= 5 && connections.length >= 3) {
      const timer = setTimeout(() => setShowBusinessOverlay(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [placedDevices.length, connections.length]);

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 mb-12 relative h-[800px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Network Topology Designer</h3>
          <p className="text-white/70 text-sm">Build your IT infrastructure like Cisco Packet Tracer</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setConnectionMode(!connectionMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              connectionMode 
                ? 'bg-cyan-500 text-white' 
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            <Cable className="w-4 h-4" />
            {connectionMode ? 'Connecting...' : 'Connect'}
          </button>
          <button
            onClick={() => setSimulationMode(!simulationMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              simulationMode 
                ? 'bg-green-500 text-white' 
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            <Play className="w-4 h-4" />
            Simulation
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex">
        {/* Canvas */}
        <div
          ref={canvasRef}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="flex-1 relative rounded-lg border border-white/20"
          style={{
            backgroundColor: '#374151',
            backgroundImage: `url("${gridPattern}")`,
            backgroundSize: '40px 40px'
          }}
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((connection) => {
              const fromDevice = placedDevices.find(d => d.id === connection.from);
              const toDevice = placedDevices.find(d => d.id === connection.to);
              
              if (!fromDevice || !toDevice) return null;
              
              return (
                <line
                  key={connection.id}
                  x1={fromDevice.x}
                  y1={fromDevice.y}
                  x2={toDevice.x}
                  y2={toDevice.y}
                  stroke={simulationMode ? (connection.optimized ? '#10b981' : '#ef4444') : '#6b7280'}
                  strokeWidth="2"
                  strokeDasharray={simulationMode && !connection.optimized ? '5,5' : undefined}
                />
              );
            })}
          </svg>

          {/* Placed Devices */}
          {placedDevices.map((device) => {
            const IconComponent = device.icon;
            return (
              <div
                key={device.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group ${
                  selectedDevice === device.id ? 'ring-2 ring-cyan-400' : ''
                }`}
                style={{ left: device.x, top: device.y }}
                onClick={() => handleDeviceClick(device.id)}
                onMouseEnter={() => setHoveredDevice(device.id)}
                onMouseLeave={() => setHoveredDevice(null)}
              >
                <div className="bg-white/90 p-3 rounded-lg shadow-lg border border-gray-300 group-hover:border-cyan-400 transition-all duration-200">
                  <IconComponent className="w-8 h-8 text-gray-700" />
                </div>
                <div className="text-xs text-white/80 text-center mt-1 font-medium">
                  {device.label}
                </div>
                
                {/* Tooltip */}
                {hoveredDevice === device.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/90 px-3 py-2 rounded-lg min-w-48 z-20">
                    <p className="text-white font-semibold text-sm">{device.label}</p>
                    <p className="text-gray-300 text-xs">{device.description}</p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Empty State */}
          {placedDevices.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="text-6xl mb-4">🌐</div>
                <p className="text-lg font-medium">Drag devices from the toolbar below</p>
                <p className="text-sm">Build your network topology like Packet Tracer</p>
              </div>
            </div>
          )}
        </div>

        {/* Side Panel */}
        <AnimatePresence>
          {sidePanel && (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className="w-80 bg-white/10 backdrop-blur-xl border-l border-white/20 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">{sidePanel.label}</h4>
                <button
                  onClick={() => setSidePanel(null)}
                  className="text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-white/80 mb-2">Description</h5>
                  <p className="text-white/70 text-sm">{sidePanel.description}</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-white/80 mb-2">Specifications</h5>
                  <p className="text-white/70 text-sm">{sidePanel.specs}</p>
                </div>
                
                <div className="bg-cyan-500/20 rounded-lg p-4 border border-cyan-500/30">
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-semibold text-cyan-400 mb-2">How FlowTech Helps</h5>
                      <p className="text-white/80 text-sm">{sidePanel.companyHelp}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Device Toolbar */}
      <div className="mt-4 bg-white/10 rounded-lg p-4">
        {/* Category Tabs */}
        <div className="flex gap-2 mb-4">
          {Object.entries(deviceCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as keyof typeof deviceCategories)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === key
                  ? 'bg-cyan-500 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Device Icons */}
        <div className="flex gap-3 overflow-x-auto">
          {deviceCategories[selectedCategory].devices.map((device) => {
            const IconComponent = device.icon;
            return (
              <div
                key={device.type}
                draggable
                onDragStart={(e) => e.dataTransfer.setData('text/plain', JSON.stringify({
                  ...device,
                  icon: device.type // Store type instead of component
                }))}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 rounded-lg cursor-grab hover:bg-white/20 transition-all min-w-20"
              >
                <IconComponent className="w-8 h-8 text-white" />
                <span className="text-xs text-white/80 text-center font-medium">{device.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Status Bar */}
      {(connectionMode || simulationMode || placedDevices.length > 0) && (
        <div className="mt-2 flex items-center justify-between text-sm text-white/60">
          <div className="flex items-center gap-4">
            {connectionMode && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                Connection Mode: Click two devices to connect
              </div>
            )}
            {simulationMode && connections.length > 0 && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Optimized</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span>Needs Attention</span>
                </div>
              </div>
            )}
          </div>
          <div>
            {placedDevices.length} devices • {connections.length} connections
          </div>
        </div>
      )}

      {/* Business Overlay */}
      <AnimatePresence>
        {showBusinessOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-3xl flex items-center justify-center p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center max-w-lg"
            >
              <div className="mb-6">
                <div className="text-6xl mb-4">🎯</div>
                <h4 className="text-3xl font-bold text-white mb-4">
                  Great job building your IT network!
                </h4>
                <p className="text-xl text-white/80 mb-6">
                  Just like in Packet Tracer, everything needs to work together — and that's where <span className="text-cyan-400 font-semibold">FlowTech</span> helps with Managed Services, Consulting, and IT Solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 text-left mb-6">
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <Settings className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h5 className="text-white font-semibold">Managed Services</h5>
                    <p className="text-white/70 text-sm">We monitor and optimize your network 24/7, just like simulation mode</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <Shield className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h5 className="text-white font-semibold">IT Consulting</h5>
                    <p className="text-white/70 text-sm">Expert network design and architecture planning</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <Server className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h5 className="text-white font-semibold">IT Solutions</h5>
                    <p className="text-white/70 text-sm">All the hardware and software components you dragged and dropped</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowBusinessOverlay(false)}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Continue Building
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}