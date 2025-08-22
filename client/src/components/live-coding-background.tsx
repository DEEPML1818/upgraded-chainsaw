import { useEffect, useRef } from 'react';

const codeSnippets = [
  `// Security Analysis Running...
function detectThreats(networkTraffic) {
  const threats = [];
  networkTraffic.forEach(packet => {
    if (packet.suspicious) {
      threats.push({
        type: 'MALWARE_DETECTED',
        severity: 'HIGH',
        source: packet.src
      });
    }
  });
  return threats;
}`,

  `# Cybersecurity Monitor
import hashlib
import socket

def scan_ports(target_ip, port_range):
    open_ports = []
    for port in range(*port_range):
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        result = sock.connect_ex((target_ip, port))
        if result == 0:
            open_ports.append(port)
        sock.close()
    return open_ports`,

  `/* Financial Security Protocol */
class SecurityEngine {
  constructor() {
    this.threatLevel = 'LOW';
    this.activeConnections = [];
  }
  
  async monitorTransactions() {
    const transactions = await this.fetchTransactions();
    return transactions.filter(tx => 
      this.validateTransaction(tx) && 
      this.checkFraudPattern(tx)
    );
  }
}`,

  `// Real-time Network Analysis
const networkAnalyzer = {
  activeConnections: 847,
  threatsBlocked: 1254,
  dataProcessed: '2.3TB',
  
  analyze: function(packet) {
    if (packet.encrypted) {
      return this.decryptAndAnalyze(packet);
    }
    return this.patternMatch(packet);
  }
};`,

  `# Machine Learning Threat Detection
import tensorflow as tf
import numpy as np

class ThreatDetector:
    def __init__(self):
        self.model = tf.keras.Sequential([
            tf.keras.layers.Dense(128, activation='relu'),
            tf.keras.layers.Dropout(0.3),
            tf.keras.layers.Dense(64, activation='relu'),
            tf.keras.layers.Dense(1, activation='sigmoid')
        ])
    
    def predict_threat(self, network_data):
        prediction = self.model.predict(network_data)
        return prediction > 0.7`
];

const systemStats = [
  { label: 'Active Connections', value: '2,847', status: 'secure' },
  { label: 'Threats Blocked', value: '1,254', status: 'warning' },
  { label: 'Data Processed', value: '2.3TB', status: 'active' },
  { label: 'System Uptime', value: '99.9%', status: 'secure' },
  { label: 'Firewall Status', value: 'ACTIVE', status: 'secure' },
  { label: 'Encryption Level', value: 'AES-256', status: 'secure' }
];

export function LiveCodingBackground() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const currentSnippetIndex = useRef(0);
  const typingSpeed = 30;

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let currentCharIndex = 0;

    const typeCode = () => {
      if (!codeRef.current) return;

      const currentSnippet = codeSnippets[currentSnippetIndex.current];
      
      if (currentCharIndex < currentSnippet.length) {
        const char = currentSnippet[currentCharIndex];
        codeRef.current.textContent += char;
        currentCharIndex++;
        
        // Scroll to bottom
        if (codeRef.current.parentElement) {
          codeRef.current.parentElement.scrollTop = codeRef.current.parentElement.scrollHeight;
        }
      } else {
        // Move to next snippet after a pause
        setTimeout(() => {
          currentSnippetIndex.current = (currentSnippetIndex.current + 1) % codeSnippets.length;
          currentCharIndex = 0;
          if (codeRef.current) {
            codeRef.current.textContent = '';
          }
        }, 2000);
      }
    };

    typingInterval = setInterval(typeCode, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    // Animate system stats
    const animateStats = () => {
      const statElements = document.querySelectorAll('.stat-value');
      statElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-pulse');
          setTimeout(() => element.classList.remove('animate-pulse'), 1000);
        }, index * 200);
      });
    };

    const interval = setInterval(animateStats, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 opacity-90"></div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-grid-pattern animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Live coding terminal - Top Left */}
      <div className="absolute top-20 left-8 w-96 h-64 bg-black/80 backdrop-blur-md rounded-lg border border-green-500/30 overflow-hidden">
        <div className="bg-green-500/20 px-4 py-2 border-b border-green-500/30 flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-2 text-green-400 text-sm font-mono">threat-detector.py</span>
        </div>
        <div className="p-4 h-full overflow-auto">
          <div className="text-green-400 font-mono text-xs leading-relaxed">
            <div className="text-green-300 mb-2">$ python threat-detector.py</div>
            <div ref={codeRef} className="whitespace-pre-wrap"></div>
            <span className="animate-pulse">█</span>
          </div>
        </div>
      </div>

      {/* Security Dashboard - Top Right */}
      <div className="absolute top-20 right-8 w-80 bg-black/80 backdrop-blur-md rounded-lg border border-cyan-500/30 p-4">
        <div className="text-cyan-400 font-mono text-sm mb-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Security Dashboard
        </div>
        <div className="space-y-3">
          {systemStats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center text-xs">
              <span className="text-gray-300">{stat.label}:</span>
              <span className={`stat-value font-mono ${
                stat.status === 'secure' ? 'text-green-400' :
                stat.status === 'warning' ? 'text-yellow-400' :
                'text-cyan-400'
              }`}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
        
        {/* Mini threat visualization */}
        <div className="mt-4 pt-4 border-t border-cyan-500/20">
          <div className="text-cyan-400 font-mono text-xs mb-2">Network Activity</div>
          <div className="space-y-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" 
                     style={{ animationDelay: `${i * 0.2}s` }}></div>
                <div className="h-1 bg-gradient-to-r from-green-500/50 to-transparent rounded flex-1"
                     style={{ width: `${Math.random() * 100}%` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom monitoring panel */}
      <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md rounded-lg border border-indigo-500/30 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="text-center">
            <div className="text-green-400 font-bold text-lg">847</div>
            <div className="text-gray-400">Active Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-red-400 font-bold text-lg">23</div>
            <div className="text-gray-400">Threats Blocked</div>
          </div>
          <div className="text-center">
            <div className="text-cyan-400 font-bold text-lg">2.3TB</div>
            <div className="text-gray-400">Data Processed</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 font-bold text-lg">99.9%</div>
            <div className="text-gray-400">System Health</div>
          </div>
        </div>
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs text-green-400/30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {['{ }', '[ ]', '( )', '//', '#', '*', '=>', '++'][i]}
          </div>
        ))}
      </div>

      {/* Data streams */}
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-pulse"></div>
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-500/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}