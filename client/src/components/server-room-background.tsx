import { useEffect, useRef } from 'react';

interface ServerRack {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  servers: Server[];
  status: 'online' | 'warning' | 'offline';
}

interface Server {
  id: string;
  y: number; // Relative to rack
  height: number;
  status: 'active' | 'idle' | 'error';
  load: number; // 0-1
  temp: number; // Temperature
  blinkPhase: number;
}

export function ServerRoomBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const racksRef = useRef<ServerRack[]>([]);

  useEffect(() => {
    // Initialize server racks
    const initializeRacks = () => {
      const racks: ServerRack[] = [];
      const rackCount = 5;
      
      for (let i = 0; i < rackCount; i++) {
        const servers: Server[] = [];
        const serverCount = 8 + Math.floor(Math.random() * 4);
        
        for (let j = 0; j < serverCount; j++) {
          servers.push({
            id: `server-${i}-${j}`,
            y: j * 25,
            height: 20,
            status: Math.random() < 0.85 ? 'active' : Math.random() < 0.9 ? 'idle' : 'error',
            load: Math.random(),
            temp: 35 + Math.random() * 30,
            blinkPhase: Math.random() * Math.PI * 2
          });
        }
        
        racks.push({
          id: `rack-${i}`,
          x: 50 + i * 180,
          y: 100,
          width: 120,
          height: serverCount * 25 + 40,
          servers,
          status: servers.some(s => s.status === 'error') ? 'warning' : 'online'
        });
      }
      
      racksRef.current = racks;
    };

    initializeRacks();

    // Animation loop for blinking lights and server stats
    const animateServers = () => {
      racksRef.current.forEach(rack => {
        rack.servers.forEach(server => {
          // Update blinking phase
          server.blinkPhase += 0.1 + (server.load * 0.1);
          
          // Simulate load changes
          server.load += (Math.random() - 0.5) * 0.02;
          server.load = Math.max(0, Math.min(1, server.load));
          
          // Temperature fluctuation
          server.temp += (Math.random() - 0.5) * 0.5;
          server.temp = Math.max(20, Math.min(80, server.temp));
          
          // Occasional status changes
          if (Math.random() < 0.001) {
            const statuses: Server['status'][] = ['active', 'idle', 'error'];
            server.status = statuses[Math.floor(Math.random() * statuses.length)];
          }
        });
      });
    };

    const interval = setInterval(animateServers, 100);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#22c55e';
      case 'idle': return '#3b82f6';
      case 'error': return '#ef4444';
      case 'warning': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getLoadColor = (load: number) => {
    if (load < 0.3) return '#22c55e';
    if (load < 0.7) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Dark server room background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
        {/* Floor grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Server racks */}
      <div className="absolute inset-0">
        {racksRef.current.map((rack, rackIndex) => (
          <div
            key={rack.id}
            className="absolute bg-gray-800/80 backdrop-blur-sm rounded-lg border border-blue-500/30 overflow-hidden"
            style={{
              left: `${rack.x}px`,
              top: `${rack.y}px`,
              width: `${rack.width}px`,
              height: `${rack.height}px`,
              transform: `perspective(800px) rotateY(${-10 + rackIndex * 5}deg) rotateX(5deg)`,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            {/* Rack header */}
            <div className="bg-gray-700/80 px-2 py-1 border-b border-blue-500/30">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-blue-400">RACK-{rackIndex + 1}</span>
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: getStatusColor(rack.status) }}
                />
              </div>
            </div>

            {/* Individual servers */}
            <div className="p-2 space-y-1">
              {rack.servers.map((server, serverIndex) => (
                <div
                  key={server.id}
                  className="relative bg-gray-900/60 rounded border border-gray-600/50 p-1"
                  style={{ height: `${server.height}px` }}
                >
                  {/* Server front panel */}
                  <div className="flex items-center justify-between h-full">
                    {/* Status LEDs */}
                    <div className="flex gap-1">
                      <div 
                        className="w-1 h-1 rounded-full"
                        style={{ 
                          backgroundColor: getStatusColor(server.status),
                          opacity: server.status === 'active' ? 
                            0.5 + 0.5 * Math.sin(server.blinkPhase) : 
                            server.status === 'error' ? 
                              Math.sin(server.blinkPhase * 4) > 0 ? 1 : 0.2 : 0.6
                        }}
                      />
                      <div 
                        className="w-1 h-1 rounded-full"
                        style={{ 
                          backgroundColor: getLoadColor(server.load),
                          opacity: 0.3 + 0.7 * server.load
                        }}
                      />
                      <div 
                        className="w-1 h-1 rounded-full bg-blue-400"
                        style={{ 
                          opacity: 0.2 + 0.8 * Math.sin(server.blinkPhase * 0.5)
                        }}
                      />
                    </div>

                    {/* Load bars */}
                    <div className="flex-1 mx-2">
                      <div className="h-1 bg-gray-700 rounded overflow-hidden">
                        <div 
                          className="h-full transition-all duration-300"
                          style={{ 
                            width: `${server.load * 100}%`,
                            backgroundColor: getLoadColor(server.load)
                          }}
                        />
                      </div>
                    </div>

                    {/* Server number */}
                    <div className="text-xs font-mono text-gray-400">
                      {String(serverIndex + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Heat visualization */}
                  {server.temp > 60 && (
                    <div 
                      className="absolute inset-0 bg-red-500/20 rounded animate-pulse"
                      style={{ 
                        opacity: (server.temp - 60) / 20
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Rack ventilation at bottom */}
            <div className="absolute bottom-2 left-2 right-2 flex justify-center">
              <div className="flex gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 h-3 bg-blue-400/30 rounded"
                    style={{
                      animation: `pulse ${1 + i * 0.1}s infinite alternate`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Environmental monitoring */}
      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md rounded-lg border border-green-500/30 p-4">
        <div className="text-green-400 font-mono text-sm mb-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Data Center Environmental
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-300">Temperature:</span>
            <span className="text-blue-400">18.5°C</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Humidity:</span>
            <span className="text-green-400">45%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Power Usage:</span>
            <span className="text-yellow-400">2.8kW</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Uptime:</span>
            <span className="text-green-400">99.98%</span>
          </div>
        </div>
      </div>

      {/* Server statistics */}
      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md rounded-lg border border-cyan-500/30 p-4">
        <div className="text-cyan-400 font-mono text-sm mb-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
          Server Farm Status
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-300">Active Servers:</span>
            <span className="text-green-400">
              {racksRef.current.reduce((total, rack) => 
                total + rack.servers.filter(s => s.status === 'active').length, 0
              )}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Total Capacity:</span>
            <span className="text-blue-400">
              {racksRef.current.reduce((total, rack) => total + rack.servers.length, 0)} Units
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Avg Load:</span>
            <span className="text-yellow-400">
              {Math.round(
                racksRef.current.reduce((total, rack) => 
                  total + rack.servers.reduce((sum, s) => sum + s.load, 0), 0
                ) / racksRef.current.reduce((total, rack) => total + rack.servers.length, 0) * 100
              )}%
            </span>
          </div>
        </div>
      </div>

      {/* Warning alerts */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
        {racksRef.current.some(rack => rack.status === 'warning') && (
          <div className="bg-orange-900/80 backdrop-blur-md rounded-lg border border-orange-500/50 p-3">
            <div className="flex items-center gap-2 text-orange-400 font-mono text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Server Alert: High Temperature
            </div>
          </div>
        )}
        
        <div className="bg-green-900/80 backdrop-blur-md rounded-lg border border-green-500/50 p-3">
          <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            All Systems Operational
          </div>
        </div>
      </div>

      {/* Ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              left: `${20 + i * 30}%`,
              top: `${60 + i * 10}%`,
              width: '200px',
              height: '100px',
              background: `radial-gradient(ellipse, ${['#3b82f6', '#22c55e', '#f59e0b'][i]}40 0%, transparent 70%)`,
              animation: `pulse ${3 + i}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>
    </div>
  );
}