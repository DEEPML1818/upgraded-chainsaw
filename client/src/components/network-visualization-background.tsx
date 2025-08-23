import { useEffect, useRef } from 'react';

interface Node {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: 'server' | 'client' | 'router' | 'firewall' | 'threat';
  connections: string[];
  health: 'healthy' | 'warning' | 'critical';
  size: number;
}

interface DataPacket {
  id: string;
  sourceId: string;
  targetId: string;
  progress: number;
  type: 'data' | 'threat' | 'secure';
  speed: number;
}

export function NetworkVisualizationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const packetsRef = useRef<DataPacket[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize network nodes
    const initializeNodes = () => {
      const nodes: Node[] = [
        // Central servers
        { 
          id: 'server-1', x: canvas.width * 0.3, y: canvas.height * 0.4, vx: 0, vy: 0, 
          type: 'server', connections: ['router-1', 'firewall-1'], health: 'healthy', size: 15 
        },
        { 
          id: 'server-2', x: canvas.width * 0.7, y: canvas.height * 0.6, vx: 0, vy: 0, 
          type: 'server', connections: ['router-1', 'client-1'], health: 'healthy', size: 15 
        },
        
        // Network infrastructure
        { 
          id: 'router-1', x: canvas.width * 0.5, y: canvas.height * 0.3, vx: 0, vy: 0, 
          type: 'router', connections: ['server-1', 'server-2', 'firewall-1'], health: 'healthy', size: 12 
        },
        { 
          id: 'firewall-1', x: canvas.width * 0.2, y: canvas.height * 0.2, vx: 0, vy: 0, 
          type: 'firewall', connections: ['router-1'], health: 'warning', size: 10 
        },
        
        // Client connections
        { 
          id: 'client-1', x: canvas.width * 0.8, y: canvas.height * 0.8, vx: 0, vy: 0, 
          type: 'client', connections: ['server-2'], health: 'healthy', size: 8 
        },
        { 
          id: 'client-2', x: canvas.width * 0.1, y: canvas.height * 0.7, vx: 0, vy: 0, 
          type: 'client', connections: ['firewall-1'], health: 'healthy', size: 8 
        },
        
        // Threat indicators
        { 
          id: 'threat-1', x: canvas.width * 0.9, y: canvas.height * 0.1, vx: -1, vy: 1, 
          type: 'threat', connections: [], health: 'critical', size: 6 
        }
      ];
      nodesRef.current = nodes;
    };

    // Generate data packets
    const generatePacket = () => {
      const nodes = nodesRef.current;
      const validNodes = nodes.filter(n => n.type !== 'threat' && n.connections.length > 0);
      
      if (validNodes.length === 0) return;
      
      const sourceNode = validNodes[Math.floor(Math.random() * validNodes.length)];
      const targetId = sourceNode.connections[Math.floor(Math.random() * sourceNode.connections.length)];
      
      const packet: DataPacket = {
        id: `packet-${Date.now()}-${Math.random()}`,
        sourceId: sourceNode.id,
        targetId,
        progress: 0,
        type: Math.random() < 0.1 ? 'threat' : (Math.random() < 0.3 ? 'secure' : 'data'),
        speed: 0.01 + Math.random() * 0.02
      };
      
      packetsRef.current.push(packet);
    };

    initializeNodes();

    // Colors for different elements
    const colors = {
      server: '#06b6d4',
      client: '#10b981', 
      router: '#8b5cf6',
      firewall: '#f59e0b',
      threat: '#ef4444',
      healthy: '#22c55e',
      warning: '#f59e0b', 
      critical: '#ef4444',
      connection: '#4b5563',
      data: '#06b6d4',
      secure: '#10b981',
      threatPacket: '#ef4444'
    };

    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const packets = packetsRef.current;

      // Draw connections
      nodes.forEach(node => {
        node.connections.forEach(targetId => {
          const target = nodes.find(n => n.id === targetId);
          if (target) {
            ctx.strokeStyle = colors.connection;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.3;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });

      // Draw and update nodes
      nodes.forEach(node => {
        // Move threat nodes
        if (node.type === 'threat') {
          node.x += node.vx;
          node.y += node.vy;
          
          // Bounce off edges
          if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
          if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;
        }

        // Draw node
        const color = colors[node.type];
        const healthColor = colors[node.health];
        
        // Node glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        
        // Main node circle
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Health indicator ring
        ctx.strokeStyle = healthColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + 3, 0, Math.PI * 2);
        ctx.stroke();
        
        // Reset shadow
        ctx.shadowBlur = 0;
        
        // Node labels
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        const label = node.type.toUpperCase();
        ctx.fillText(label, node.x, node.y - node.size - 8);
      });

      // Generate new packets occasionally
      if (Math.random() < 0.03) {
        generatePacket();
      }

      // Update and draw packets
      packetsRef.current = packets.filter(packet => {
        const source = nodes.find(n => n.id === packet.sourceId);
        const target = nodes.find(n => n.id === packet.targetId);
        
        if (!source || !target) return false;
        
        // Update packet progress
        packet.progress += packet.speed;
        
        if (packet.progress >= 1) return false; // Remove completed packets
        
        // Calculate packet position
        const x = source.x + (target.x - source.x) * packet.progress;
        const y = source.y + (target.y - source.y) * packet.progress;
        
        // Draw packet
        const packetColor = packet.type === 'threat' ? colors.threatPacket :
                           packet.type === 'secure' ? colors.secure : colors.data;
        
        ctx.fillStyle = packetColor;
        ctx.shadowBlur = 5;
        ctx.shadowColor = packetColor;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Add trailing effect for threats
        if (packet.type === 'threat') {
          ctx.strokeStyle = `${packetColor}40`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          const trailLength = 20;
          const trailX = x - (target.x - source.x) * (trailLength / 100);
          const trailY = y - (target.y - source.y) * (trailLength / 100);
          ctx.moveTo(trailX, trailY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
        
        ctx.shadowBlur = 0;
        return true;
      });

      // Draw security metrics overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(20, 20, 250, 120);
      ctx.strokeStyle = colors.secure;
      ctx.lineWidth = 1;
      ctx.strokeRect(20, 20, 250, 120);
      
      ctx.fillStyle = colors.secure;
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'left';
      ctx.fillText('NETWORK STATUS', 30, 40);
      
      ctx.font = '10px monospace';
      ctx.fillStyle = '#ffffff';
      
      const stats = [
        `Active Nodes: ${nodes.filter(n => n.type !== 'threat').length}`,
        `Data Packets: ${packets.length}`,
        `Threats Detected: ${nodes.filter(n => n.type === 'threat').length}`,
        `Firewall Status: ACTIVE`,
        `Network Health: ${nodes.filter(n => n.health === 'healthy').length}/${nodes.length} OK`
      ];
      
      stats.forEach((stat, index) => {
        ctx.fillText(stat, 30, 60 + index * 15);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-70"
      />
      
      {/* Additional UI elements */}
      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md rounded-lg border border-cyan-500/30 p-4">
        <div className="text-cyan-400 font-mono text-sm mb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Network Monitor
        </div>
        <div className="space-y-2 text-xs text-gray-300">
          <div className="flex justify-between">
            <span>Bandwidth:</span>
            <span className="text-cyan-400">1.2 Gbps</span>
          </div>
          <div className="flex justify-between">
            <span>Latency:</span>
            <span className="text-green-400">12ms</span>
          </div>
          <div className="flex justify-between">
            <span>Packet Loss:</span>
            <span className="text-yellow-400">0.01%</span>
          </div>
        </div>
      </div>
      
      {/* Threat alert */}
      <div className="absolute bottom-4 left-4 bg-red-900/80 backdrop-blur-md rounded-lg border border-red-500/50 p-3">
        <div className="flex items-center gap-2 text-red-400 font-mono text-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Threat Detected - Quarantined
        </div>
      </div>
    </div>
  );
}