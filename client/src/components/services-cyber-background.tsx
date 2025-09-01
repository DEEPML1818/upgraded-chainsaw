import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ServicesCyberBackground() {
  const [logs, setLogs] = useState<string[]>([]);
  const [threats, setThreats] = useState<Array<{ id: number; type: string; severity: string; ip: string; time: string }>>([]);
  
  const securityLogs = [
    "FIREWALL: Blocking suspicious traffic from 192.168.1.100",
    "IDS: Potential SQL injection attempt detected",
    "VPN: Secure tunnel established for user@klangits.com",
    "SCAN: Network vulnerability assessment completed",
    "AUTH: Multi-factor authentication verified successfully",
    "ENCRYPT: Data transmission secured with AES-256",
    "MONITOR: Real-time threat analysis active",
    "BACKUP: Encrypted backup completed successfully",
    "ANTIVIRUS: Malware signature database updated",
    "CERT: SSL certificate renewed and deployed"
  ];

  const threatTypes = [
    { type: "SQL Injection", severity: "HIGH", color: "#ef4444" },
    { type: "DDoS Attack", severity: "CRITICAL", color: "#dc2626" },
    { type: "Phishing", severity: "MEDIUM", color: "#f59e0b" },
    { type: "Malware", severity: "HIGH", color: "#ef4444" },
    { type: "Brute Force", severity: "LOW", color: "#10b981" },
    { type: "Port Scan", severity: "MEDIUM", color: "#f59e0b" }
  ];

  useEffect(() => {
    const logInterval = setInterval(() => {
      const randomLog = securityLogs[Math.floor(Math.random() * securityLogs.length)];
      setLogs(prev => [randomLog, ...prev.slice(0, 8)]);
    }, 2000);

    const threatInterval = setInterval(() => {
      const randomThreat = threatTypes[Math.floor(Math.random() * threatTypes.length)];
      const newThreat = {
        id: Date.now(),
        type: randomThreat.type,
        severity: randomThreat.severity,
        ip: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        time: new Date().toLocaleTimeString()
      };
      setThreats(prev => [newThreat, ...prev.slice(0, 5)]);
    }, 3000);

    return () => {
      clearInterval(logInterval);
      clearInterval(threatInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Network Grid */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%), radial-gradient(ellipse 50% 80% at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(239, 68, 68, 0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 70% at 20% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
            'radial-gradient(ellipse 60% 90% at 20% 60%, rgba(239, 68, 68, 0.12) 0%, transparent 55%), radial-gradient(ellipse 90% 50% at 70% 40%, rgba(16, 185, 129, 0.12) 0%, transparent 55%)'
          ]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      {/* Floating Cyber Elements */}
      <div className="absolute inset-0">
        {['🛡️', '🔒', '👁️', '⚠️', '🔐', '🖥️', '📡', '🎯'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 180, 360],
              x: [-30, 30, -30],
              y: [-20, 20, -20]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Security Operations Center */}
      <motion.div 
        className="absolute top-12 left-6 w-80 h-96 bg-black/95 backdrop-blur-lg rounded-xl border border-red-500/40 overflow-hidden shadow-2xl shadow-red-500/20"
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div 
          className="bg-gradient-to-r from-red-500/30 to-red-400/20 px-4 py-3 border-b border-red-500/30 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="w-3 h-3 bg-red-500 rounded-full"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-red-300 text-sm font-mono">Security Operations Center</span>
        </motion.div>

        <div className="p-4 h-full overflow-hidden">
          <div className="text-red-400 font-mono text-xs leading-relaxed">
            <div className="text-red-300 mb-2">$ tail -f /var/log/security.log</div>
            <div className="space-y-1">
              {logs.map((log, index) => (
                <motion.div 
                  key={index}
                  className="text-green-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  [{new Date().toLocaleTimeString()}] {log}
                </motion.div>
              ))}
            </div>
            <motion.span
              className="bg-red-400 w-2 h-4 inline-block ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      {/* Threat Detection Dashboard */}
      <motion.div 
        className="absolute top-12 right-6 w-72 bg-black/95 backdrop-blur-lg rounded-xl border border-orange-500/40 p-4 shadow-2xl shadow-orange-500/20"
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        <motion.div 
          className="text-orange-300 font-mono text-sm mb-4 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.div 
            className="w-3 h-3 bg-orange-400 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Threat Detection
        </motion.div>

        <div className="space-y-3">
          {threats.map((threat, index) => (
            <motion.div 
              key={threat.id}
              className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-1">
                <span 
                  className="text-xs font-bold"
                  style={{ color: threatTypes.find(t => t.type === threat.type)?.color }}
                >
                  {threat.severity}
                </span>
                <span className="text-gray-400 text-xs">{threat.time}</span>
              </div>
              <div className="text-white text-xs">{threat.type}</div>
              <div className="text-gray-400 text-xs font-mono">{threat.ip}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* Binary Rain Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 font-mono text-sm text-red-400/20"
            style={{
              left: `${(i / 15) * 100}%`,
              width: '20px'
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: ['0vh', '100vh'],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5
            }}
          >
            {Array.from({ length: 25 }).map((_, j) => (
              <motion.div
                key={j}
                animate={{ opacity: [0.1, 0.8, 0.1] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: j * 0.1
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}