import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const codeSnippets = [
  `# Threat Detection Engine
import numpy as np
from sklearn.ensemble import IsolationForest

class ThreatDetector:
    def __init__(self):
        self.model = IsolationForest(contamination=0.1)
        self.is_trained = False
    
    def analyze_traffic(self, network_data):
        if not self.is_trained:
            self.model.fit(network_data)
            self.is_trained = True
        
        anomalies = self.model.predict(network_data)
        threats = network_data[anomalies == -1]
        return threats`,

  `// Security Monitoring System
const SecurityManager = {
    activeConnections: 2847,
    threatsDetected: 1254,
    systemHealth: 99.9,
    
    async scanPorts(target) {
        const openPorts = [];
        for (let port = 1; port <= 65535; port++) {
            const result = await this.checkPort(target, port);
            if (result.isOpen) {
                openPorts.push({
                    port: port,
                    service: result.service,
                    vulnerability: result.checkVuln()
                });
            }
        }
        return openPorts;
    }
};`,

  `# Network Intrusion Detection
import hashlib
import socket
from datetime import datetime

def monitor_network_traffic():
    suspicious_ips = []
    packet_count = 0
    
    while True:
        packet = capture_packet()
        packet_count += 1
        
        if detect_anomaly(packet):
            threat_level = analyze_threat(packet)
            if threat_level > 0.7:
                suspicious_ips.append({
                    'ip': packet.source_ip,
                    'timestamp': datetime.now(),
                    'threat_score': threat_level
                })
                
        if packet_count % 1000 == 0:
            generate_report(suspicious_ips)`,

  `/* Cybersecurity Dashboard API */
class CyberDefenseSystem {
    constructor() {
        this.alertLevel = 'GREEN';
        this.activeThreatMonitoring = true;
        this.firewallStatus = 'ACTIVE';
    }
    
    async processSecurityEvent(event) {
        const riskScore = await this.calculateRisk(event);
        
        if (riskScore > 8) {
            this.alertLevel = 'RED';
            await this.triggerIncidentResponse(event);
        } else if (riskScore > 5) {
            this.alertLevel = 'YELLOW';
            await this.enhanceMonitoring(event.source);
        }
        
        return this.logSecurityEvent(event, riskScore);
    }
}`,
];

const systemMetrics = [
  {
    label: "Active Connections",
    value: 2847,
    color: "#00FF88",
    increment: true,
  },
  { label: "Threats Blocked", value: 1254, color: "#FF6B6B", increment: true },
  {
    label: "Data Processed",
    value: 2.3,
    unit: "TB",
    color: "#4ECDC4",
    increment: false,
  },
  {
    label: "System Uptime",
    value: 99.9,
    unit: "%",
    color: "#45B7D1",
    increment: false,
  },
  {
    label: "Security Score",
    value: 98,
    unit: "/100",
    color: "#96CEB4",
    increment: false,
  },
];

export function FramerCodingBackground() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const controls = useAnimation();
  const terminalRef = useRef<HTMLDivElement>(null);

  // Code typing animation
  useEffect(() => {
    const currentSnippet = codeSnippets[currentSnippetIndex];

    if (charIndex < currentSnippet.length) {
      const timer = setTimeout(
        () => {
          setCurrentText(currentSnippet.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        },
        20 + Math.random() * 30,
      ); // Vary typing speed

      return () => clearTimeout(timer);
    } else {
      // Move to next snippet after pause
      const resetTimer = setTimeout(() => {
        setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        setCurrentText("");
        setCharIndex(0);
      }, 3000);

      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, currentSnippetIndex]);

  // Matrix rain effect positions
  const matrixChars = "01";
  const matrixColumns = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 80% 60%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse 60% 70% at 80% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 60%), radial-gradient(ellipse 80% 60% at 20% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)",
            "radial-gradient(ellipse 90% 40% at 40% 60%, rgba(99, 102, 241, 0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 90% at 70% 30%, rgba(6, 182, 212, 0.12) 0%, transparent 55%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Matrix rain columns */}
      {matrixColumns.map((col) => (
        <motion.div
          key={col}
          className="absolute top-0 font-mono text-sm text-green-400/30"
          style={{
            left: `${(col / matrixColumns.length) * 100}%`,
            width: "20px",
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            >
              {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
            </motion.div>
          ))}
        </motion.div>
      ))}

      {/* Live coding terminal - Top Left */}
      <motion.div
        className="absolute top-20 left-8 w-96 h-80 bg-black/90 backdrop-blur-lg rounded-xl border border-green-500/40 overflow-hidden shadow-2xl shadow-green-500/20"
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Terminal header */}
        <motion.div
          className="bg-gradient-to-r from-green-500/30 to-green-400/20 px-4 py-3 border-b border-green-500/30 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="w-3 h-3 bg-red-500 rounded-full"
            whileHover={{ scale: 1.2 }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="w-3 h-3 bg-yellow-500 rounded-full"
            whileHover={{ scale: 1.2 }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            whileHover={{ scale: 1.2 }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
          <motion.span
            className="ml-2 text-green-300 text-sm font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            security-monitor.py
          </motion.span>
        </motion.div>

        {/* Terminal content */}
        <div className="p-4 h-full overflow-auto" ref={terminalRef}>
          <motion.div
            className="text-green-400 font-mono text-xs leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="text-green-300 mb-2"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 1.5 }}
            >
              $ python security-monitor.py --live
            </motion.div>
            <div className="whitespace-pre-wrap">
              {currentText}
              <motion.span
                className="bg-green-400 w-2 h-4 inline-block ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Security Dashboard - Top Right */}
      <motion.div
        className="absolute top-20 right-8 w-80 bg-black/90 backdrop-blur-lg rounded-xl border border-cyan-500/40 p-6 shadow-2xl shadow-cyan-500/20"
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          className="text-cyan-300 font-mono text-sm mb-6 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.div
            className="w-3 h-3 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Security Dashboard
        </motion.div>

        <div className="space-y-4">
          {systemMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-center text-xs"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 + index * 0.1 }}
            >
              <span className="text-gray-300">{metric.label}:</span>
              <motion.span
                className="font-mono font-bold"
                style={{ color: metric.color }}
                animate={
                  metric.increment
                    ? {
                        scale: [1, 1.05, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {metric.value}
                {metric.unit || ""}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Network activity visualization */}
        <motion.div
          className="mt-6 pt-4 border-t border-cyan-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="text-cyan-300 font-mono text-xs mb-3">
            Network Activity
          </div>
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div key={i} className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
                <motion.div
                  className="h-1 bg-gradient-to-r from-green-400/70 to-transparent rounded flex-1"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.random() * 80 + 20}%` }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.2,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom status bar */}

      {/* Floating code elements */}
      <div className="absolute inset-0">
        {[
          "{ }",
          "[ ]",
          "( )",
          "//",
          "#",
          "*",
          "=>",
          "++",
          "if",
          "else",
          "def",
          "class",
        ].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-sm text-indigo-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 360],
              y: [-20, -40, -20],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Data stream lines */}
      {[25, 50, 75].map((position, index) => (
        <motion.div
          key={index}
          className="absolute top-0 bottom-0 w-px opacity-30"
          style={{ left: `${position}%` }}
          animate={{
            background: [
              "linear-gradient(to bottom, transparent, #6366F1, transparent)",
              "linear-gradient(to bottom, transparent, #06B6D4, transparent)",
              "linear-gradient(to bottom, transparent, #10B981, transparent)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 1.3,
          }}
        />
      ))}
    </div>
  );
}
