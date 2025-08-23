import { useEffect, useRef, useState } from 'react';

const securityCommands = [
  {
    command: "nmap -sS -A target.domain.com",
    output: [
      "Starting Nmap 7.92 ( https://nmap.org )",
      "Nmap scan report for target.domain.com (192.168.1.100)",
      "Host is up (0.0012s latency).",
      "PORT     STATE SERVICE VERSION",
      "22/tcp   open  ssh     OpenSSH 8.2p1",
      "80/tcp   open  http    Apache httpd 2.4.41",
      "443/tcp  open  https   Apache httpd 2.4.41",
      "Nmap done: 1 IP address (1 host up) scanned in 2.43 seconds"
    ]
  },
  {
    command: "wireshark -i eth0 -f 'port 443'",
    output: [
      "Capturing on 'Ethernet'",
      "TLS packets detected: 1,247",
      "Suspicious certificate found: CN=malicious.cert",
      "⚠️  ALERT: Potential man-in-the-middle attack",
      "Blocking connection to 192.168.1.255"
    ]
  },
  {
    command: "python3 threat_detector.py --realtime",
    output: [
      "🔍 Initializing AI threat detection engine...",
      "✅ Neural network model loaded (accuracy: 97.3%)",
      "🌐 Monitoring network traffic on all interfaces",
      "📊 Processing 15,247 packets/second",
      "🚨 Detected: SQL injection attempt from 203.0.113.45",
      "🛡️  Auto-blocked malicious IP in firewall"
    ]
  },
  {
    command: "metasploit-framework",
    output: [
      "      =[ metasploit v6.2.9-dev                          ]",
      "+ -- --=[ 2230 exploits - 1177 auxiliary - 398 post       ]",
      "+ -- --=[ 867 payloads - 45 encoders - 11 nops            ]",
      "+ -- --=[ 9 evasion                                       ]",
      "",
      "msf6 > use auxiliary/scanner/portscan/syn",
      "msf6 auxiliary(syn) > set RHOSTS 192.168.1.0/24",
      "msf6 auxiliary(syn) > run",
      "[*] Scanning 192.168.1.0/24..."
    ]
  },
  {
    command: "hashcat -a 0 -m 1000 hashes.txt rockyou.txt",
    output: [
      "hashcat (v6.2.5) starting...",
      "OpenCL API (OpenCL 3.0 CUDA 11.8.89) - Platform #1",
      "* Device #1: NVIDIA GeForce RTX 4080, 16256/16383 MB",
      "",
      "Cracking passwords...",
      "5d41402abc4b2a76b9719d911017c592:hello",
      "098f6bcd4621d373cade4e832627b4f6:test123",
      "Status.......: Running",
      "Speed.#1.....: 15847.2 MH/s (285ms)"
    ]
  },
  {
    command: "sudo fail2ban-client status",
    output: [
      "Status",
      "|- Number of jail:      3",
      "|- Jail list:   apache-auth, ssh, nginx-limit-req",
      "",
      "Status for the jail: ssh",
      "|- Filter",
      "|  |- Currently failed: 12",
      "|  |- Total failed:     8,247",
      "|  `- File list:        /var/log/auth.log",
      "|- Actions",
      "|  |- Currently banned: 45",
      "|  `- Total banned:     1,832"
    ]
  }
];

interface Terminal {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  currentCommandIndex: number;
  currentOutputIndex: number;
  isTyping: boolean;
  typedText: string;
  lastUpdate: number;
}

export function CLITerminalBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [terminals, setTerminals] = useState<Terminal[]>([]);

  useEffect(() => {
    // Initialize terminals
    const initializeTerminals = () => {
      const newTerminals: Terminal[] = [
        {
          id: 'terminal-1',
          x: 5,
          y: 10,
          width: 500,
          height: 300,
          currentCommandIndex: 0,
          currentOutputIndex: 0,
          isTyping: false,
          typedText: '',
          lastUpdate: Date.now()
        },
        {
          id: 'terminal-2',
          x: 60,
          y: 40,
          width: 450,
          height: 250,
          currentCommandIndex: 1,
          currentOutputIndex: 0,
          isTyping: false,
          typedText: '',
          lastUpdate: Date.now()
        },
        {
          id: 'terminal-3',
          x: 25,
          y: 65,
          width: 480,
          height: 280,
          currentCommandIndex: 2,
          currentOutputIndex: 0,
          isTyping: false,
          typedText: '',
          lastUpdate: Date.now()
        }
      ];
      setTerminals(newTerminals);
    };

    initializeTerminals();

    // Typing animation
    const animateTyping = () => {
      setTerminals(prev => prev.map(terminal => {
        const now = Date.now();
        const currentCommand = securityCommands[terminal.currentCommandIndex];
        
        if (!terminal.isTyping && now - terminal.lastUpdate > 2000) {
          // Start typing new command
          return {
            ...terminal,
            isTyping: true,
            typedText: '',
            lastUpdate: now
          };
        }
        
        if (terminal.isTyping && now - terminal.lastUpdate > 50) {
          const targetText = `$ ${currentCommand.command}`;
          
          if (terminal.typedText.length < targetText.length) {
            // Continue typing command
            return {
              ...terminal,
              typedText: targetText.slice(0, terminal.typedText.length + 1),
              lastUpdate: now
            };
          } else {
            // Command finished, show output
            return {
              ...terminal,
              isTyping: false,
              currentCommandIndex: (terminal.currentCommandIndex + 1) % securityCommands.length,
              lastUpdate: now
            };
          }
        }
        
        return terminal;
      }));
    };

    const interval = setInterval(animateTyping, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Dark background with grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* System stats overlay */}
      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md rounded-lg border border-green-500/30 p-4 font-mono text-xs">
        <div className="text-green-400 mb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Security Operations Center
        </div>
        <div className="space-y-1 text-gray-300">
          <div className="flex justify-between">
            <span>Active Scans:</span>
            <span className="text-cyan-400">17</span>
          </div>
          <div className="flex justify-between">
            <span>Threats Blocked:</span>
            <span className="text-red-400">1,247</span>
          </div>
          <div className="flex justify-between">
            <span>CPU Usage:</span>
            <span className="text-yellow-400">34%</span>
          </div>
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className="text-green-400">8.2/32 GB</span>
          </div>
        </div>
      </div>

      {/* Multiple terminal windows */}
      {terminals.map((terminal, index) => (
        <div
          key={terminal.id}
          className="absolute bg-black/90 backdrop-blur-md rounded-lg border border-green-500/30 overflow-hidden"
          style={{
            left: `${terminal.x}%`,
            top: `${terminal.y}%`,
            width: `${Math.min(terminal.width, window.innerWidth * 0.4)}px`,
            height: `${Math.min(terminal.height, window.innerHeight * 0.3)}px`,
            zIndex: 10 + index,
            transform: `scale(${0.8 + index * 0.1}) rotate(${(index - 1) * 2}deg)`
          }}
        >
          {/* Terminal header */}
          <div className="bg-green-500/20 px-4 py-2 border-b border-green-500/30 flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-2 text-green-400 text-sm font-mono">
              security-tools-{index + 1}
            </span>
          </div>
          
          {/* Terminal content */}
          <div className="p-4 h-full overflow-auto">
            <div className="text-green-400 font-mono text-xs leading-relaxed">
              {/* Previous commands history */}
              {securityCommands.slice(0, terminal.currentCommandIndex).map((cmd, cmdIndex) => (
                <div key={cmdIndex} className="mb-4">
                  <div className="text-green-300">$ {cmd.command}</div>
                  {cmd.output.map((line, lineIndex) => (
                    <div 
                      key={lineIndex} 
                      className={`ml-2 ${
                        line.includes('ALERT') || line.includes('🚨') ? 'text-red-400' :
                        line.includes('✅') || line.includes('🛡️') ? 'text-green-400' :
                        line.includes('⚠️') ? 'text-yellow-400' :
                        'text-gray-300'
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              ))}
              
              {/* Current typing command */}
              <div className="flex items-center">
                <span>{terminal.typedText}</span>
                <span className="animate-pulse ml-1">█</span>
              </div>
              
              {/* Show current command output if finished typing */}
              {!terminal.isTyping && terminal.typedText && (
                <div className="mt-2">
                  {securityCommands[terminal.currentCommandIndex === 0 ? 
                    securityCommands.length - 1 : 
                    terminal.currentCommandIndex - 1
                  ].output.map((line, lineIndex) => (
                    <div 
                      key={lineIndex}
                      className={`ml-2 ${
                        line.includes('ALERT') || line.includes('🚨') ? 'text-red-400' :
                        line.includes('✅') || line.includes('🛡️') ? 'text-green-400' :
                        line.includes('⚠️') ? 'text-yellow-400' :
                        'text-gray-300'
                      }`}
                      style={{ 
                        animationDelay: `${lineIndex * 0.1}s`,
                        opacity: 0,
                        animation: `fadeIn 0.5s ease-in-out ${lineIndex * 0.1}s forwards`
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Floating security indicators */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center pointer-events-none">
        {['FIREWALL: ACTIVE', 'IDS: MONITORING', 'AV: SCANNING', 'VPN: CONNECTED'].map((status, index) => (
          <div 
            key={index}
            className="bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-green-500/30"
          >
            <div className="flex items-center gap-2 text-xs font-mono">
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: index === 1 ? '#22c55e' : '#10b981',
                  animationDelay: `${index * 0.5}s`
                }}
              />
              <span className="text-green-400">{status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CSS animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>
    </div>
  );
}