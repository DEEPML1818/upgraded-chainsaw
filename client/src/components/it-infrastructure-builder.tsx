import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Shield, Wifi, Cloud, Monitor, Database, Router, HardDrive } from 'lucide-react';

interface NetworkElement {
  id: string;
  type: 'server' | 'firewall' | 'switch' | 'cloud' | 'workstation' | 'database' | 'router' | 'storage';
  x: number;
  y: number;
  icon: any;
  label: string;
  description: string;
}

interface Connection {
  from: string;
  to: string;
}

const networkElements = [
  { type: 'server', icon: Server, label: 'Server', description: 'Core server hosting applications and data' },
  { type: 'firewall', icon: Shield, label: 'Firewall', description: 'Security barrier protecting your network' },
  { type: 'switch', icon: Wifi, label: 'Network Switch', description: 'Connects multiple devices in your network' },
  { type: 'cloud', icon: Cloud, label: 'Cloud Service', description: 'Cloud-based services and storage' },
  { type: 'workstation', icon: Monitor, label: 'Workstation', description: 'Employee computers and devices' },
  { type: 'database', icon: Database, label: 'Database', description: 'Data storage and management system' },
  { type: 'router', icon: Router, label: 'Router', description: 'Routes data between networks' },
  { type: 'storage', icon: HardDrive, label: 'Storage', description: 'Network attached storage system' }
] as const;

export function ITInfrastructureBuilder() {
  const [placedElements, setPlacedElements] = useState<NetworkElement[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [draggedElement, setDraggedElement] = useState<any>(null);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [showBusinessOverlay, setShowBusinessOverlay] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Auto-connect elements when they're close to each other
  useEffect(() => {
    if (placedElements.length < 2) return;
    
    const newConnections: Connection[] = [];
    placedElements.forEach((element, i) => {
      placedElements.slice(i + 1).forEach(other => {
        const distance = Math.sqrt(
          Math.pow(element.x - other.x, 2) + Math.pow(element.y - other.y, 2)
        );
        
        if (distance < 120 && !connections.find(c => 
          (c.from === element.id && c.to === other.id) ||
          (c.from === other.id && c.to === element.id)
        )) {
          newConnections.push({ from: element.id, to: other.id });
        }
      });
    });
    
    if (newConnections.length > 0) {
      setConnections(prev => [...prev, ...newConnections]);
    }
  }, [placedElements]);

  // Show business overlay when network has good coverage
  useEffect(() => {
    if (placedElements.length >= 4 && connections.length >= 2) {
      const timer = setTimeout(() => setShowBusinessOverlay(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [placedElements.length, connections.length]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedElement || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newElement: NetworkElement = {
      id: `${draggedElement.type}-${Date.now()}`,
      type: draggedElement.type,
      x,
      y,
      icon: draggedElement.icon,
      label: draggedElement.label,
      description: draggedElement.description
    };

    setPlacedElements(prev => [...prev, newElement]);
    setDraggedElement(null);
  };

  const resetBuilder = () => {
    setPlacedElements([]);
    setConnections([]);
    setShowBusinessOverlay(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 mb-12 relative"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">IT Infrastructure Builder</h3>
        <p className="text-white/70">Drag and drop elements to build your IT network • See how everything connects</p>
      </div>
      
      {/* Network Elements Toolbar */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {networkElements.map((element) => {
          const IconComponent = element.icon;
          return (
            <div
              key={element.type}
              draggable
              onDragStart={() => setDraggedElement(element)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg cursor-grab active:cursor-grabbing transition-all duration-200 hover:scale-105"
            >
              <IconComponent className="w-5 h-5 text-cyan-400" />
              <span className="text-white text-sm font-medium">{element.label}</span>
            </div>
          );
        })}
      </div>

      {/* Build Canvas */}
      <div
        ref={canvasRef}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="relative w-full h-96 rounded-2xl border-2 border-dashed border-white/20 bg-gradient-to-br from-slate-800/50 to-indigo-900/50 mb-4 overflow-hidden"
      >
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map((connection, index) => {
            const fromElement = placedElements.find(e => e.id === connection.from);
            const toElement = placedElements.find(e => e.id === connection.to);
            
            if (!fromElement || !toElement) return null;
            
            return (
              <motion.line
                key={`${connection.from}-${connection.to}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                x1={fromElement.x}
                y1={fromElement.y}
                x2={toElement.x}
                y2={toElement.y}
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            );
          })}
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Placed Elements */}
        {placedElements.map((element) => {
          const IconComponent = element.icon;
          return (
            <motion.div
              key={element.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: element.x, top: element.y }}
              onMouseEnter={() => setHoveredElement(element.id)}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 p-4 rounded-full border border-indigo-500/30 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-110">
                <IconComponent className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors duration-300" />
              </div>
              
              {/* Tooltip */}
              <AnimatePresence>
                {hoveredElement === element.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black/90 px-3 py-2 rounded-lg min-w-48 z-10"
                  >
                    <p className="text-white font-semibold text-sm">{element.label}</p>
                    <p className="text-gray-300 text-xs">{element.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {/* Drop Zone Hint */}
        {placedElements.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/40">
              <div className="text-4xl mb-2">🏗️</div>
              <p>Drop IT components here to start building</p>
            </div>
          </div>
        )}
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={resetBuilder}
          className="px-6 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Reset Network
        </button>
      </div>

      {/* Network Status */}
      {placedElements.length > 0 && (
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            {placedElements.length} Components • {connections.length} Connections
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
                <div className="text-6xl mb-4">🔧</div>
                <h4 className="text-3xl font-bold text-white mb-4">
                  Your IT network has a lot of moving parts.
                </h4>
                <p className="text-xl text-white/80 mb-6">
                  This is where <span className="text-cyan-400 font-semibold">FlowTech</span> comes in.
                </p>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/20 p-2 rounded-lg mt-1">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold">Managed Services</h5>
                    <p className="text-white/70 text-sm">Optimize these connections and maintain peak performance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                    <Monitor className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold">IT Consulting</h5>
                    <p className="text-white/70 text-sm">Help with the initial design and strategic planning</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg mt-1">
                    <Server className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold">IT Solutions</h5>
                    <p className="text-white/70 text-sm">Provide the building blocks and infrastructure you need</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowBusinessOverlay(false)}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Continue Building
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}