import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Hero Section Background - Live Coding Terminal
export function HeroBackground() {
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  
  const codeSnippet = `# IT Infrastructure Management System
import os
import subprocess
import logging
from datetime import datetime

class ITServiceManager:
    def __init__(self):
        self.logger = logging.getLogger('ITServices')
        self.services_status = {}
        
    def check_server_health(self):
        print("Checking server infrastructure...")
        servers = ['web-server-01', 'db-server-02', 'mail-server-03']
        
        for server in servers:
            status = self.ping_server(server)
            self.services_status[server] = status
            print(f"Server {server}: {'ONLINE' if status else 'OFFLINE'}")
            
    def deploy_application(self, app_name, environment):
        print(f"Deploying {app_name} to {environment}...")
        deployment_steps = [
            'Building application...',
            'Running tests...',
            'Creating backup...',
            'Updating configuration...',
            'Starting services...',
            'Verifying deployment...'
        ]
        
        for step in deployment_steps:
            print(step)
            
        print(f"✓ {app_name} successfully deployed to {environment}")`;

  // Code typing animation
  useEffect(() => {
    if (charIndex < codeSnippet.length) {
      const timer = setTimeout(() => {
        setCurrentText(codeSnippet.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 15 + Math.random() * 25);
      
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setCurrentText('');
        setCharIndex(0);
      }, 3000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, codeSnippet]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 80% 60%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse 60% 70% at 80% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 60%), radial-gradient(ellipse 80% 60% at 20% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)',
            'radial-gradient(ellipse 90% 40% at 40% 60%, rgba(99, 102, 241, 0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 90% at 70% 30%, rgba(6, 182, 212, 0.12) 0%, transparent 55%)'
          ]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      {/* Live coding terminal - Large and centered */}
      <motion.div 
        className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[900px] h-[550px] bg-black/95 backdrop-blur-lg rounded-xl border border-green-500/40 overflow-hidden shadow-2xl shadow-green-500/20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Terminal header */}
        <motion.div 
          className="bg-gradient-to-r from-green-500/30 to-green-400/20 px-4 py-3 border-b border-green-500/30 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-2">
            <motion.div 
              className="w-3 h-3 bg-red-500 rounded-full"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="w-3 h-3 bg-yellow-500 rounded-full"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </div>
          <span className="ml-2 text-green-300 text-sm font-mono">
            it-services-manager.py
          </span>
        </motion.div>

        {/* Terminal content */}
        <div className="p-6 h-full overflow-auto">
          <div className="text-green-400 font-mono text-sm leading-relaxed">
            <div className="text-green-300 mb-2">
              $ python it-services-manager.py --deploy
            </div>
            <div className="whitespace-pre-wrap">
              {currentText}
              <motion.span
                className="bg-green-400 w-2 h-5 inline-block ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating code elements */}
      <div className="absolute inset-0">
        {['{ }', '[ ]', '( )', '//', '#', '*', '=>', '++', 'if', 'else', 'def', 'class'].map((symbol, i) => (
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
              y: [-20, -40, -20]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Services Section Background - Network Visualization
export function ServicesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Network-inspired gradient */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 75% 25%, rgba(34, 197, 94, 0.15) 0%, transparent 60%), radial-gradient(circle at 25% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.12) 0%, transparent 55%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 55%)'
          ]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: 'reverse'
        }}
      />

      {/* Network nodes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-cyan-400/40 rounded-full border border-cyan-300/60"
          style={{
            left: `${20 + (i % 4) * 20}%`,
            top: `${30 + Math.floor(i / 4) * 40}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Connecting lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          style={{
            left: `${20 + (i % 3) * 20}%`,
            top: `${40 + Math.floor(i / 3) * 30}%`,
            width: '20%',
            transform: `rotate(${i * 30}deg)`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Data packets */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-green-400 rounded-full"
          style={{
            left: `${10 + i * 25}%`,
            top: '50%',
          }}
          animate={{
            x: [0, 100, 200, 300, 0],
            y: [0, -20, 20, -10, 0],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}

// About/Team Section Background - Code Matrix
export function AboutBackground() {
  const matrixChars = '01ABCDEF';
  const columns = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark tech gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"
        animate={{
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Matrix rain effect */}
      {columns.map((col) => (
        <motion.div
          key={col}
          className="absolute top-0 font-mono text-xs text-green-400/20"
          style={{
            left: `${(col / columns.length) * 100}%`,
            width: '20px'
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: ['0vh', '100vh'],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5
          }}
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1
              }}
            >
              {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
            </motion.div>
          ))}
        </motion.div>
      ))}

      {/* Floating tech icons */}
      {['</>', '{}', '[]', '()', '&&', '||', '!=', '=='].map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-lg text-blue-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut'
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
}

// Contact Section Background - Server Room
export function ContactBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Server room ambiance */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(51, 65, 85, 0.9) 100%)',
            'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.8) 50%, rgba(71, 85, 105, 0.9) 100%)',
            'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(51, 65, 85, 0.9) 100%)'
          ]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          repeatType: 'reverse'
        }}
      />

      {/* Server rack lights */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-8 rounded-full"
          style={{
            left: `${20 + i * 12}%`,
            top: '20%',
            background: 'linear-gradient(to bottom, #22c55e, #16a34a, #15803d)'
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              '0 0 5px #22c55e',
              '0 0 20px #22c55e',
              '0 0 5px #22c55e'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Data flow lines */}
      {[20, 40, 60, 80].map((position, index) => (
        <motion.div
          key={index}
          className="absolute top-0 bottom-0 w-px opacity-20"
          style={{ left: `${position}%` }}
          animate={{
            background: [
              'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
              'linear-gradient(to bottom, transparent, #06b6d4, transparent)',
              'linear-gradient(to bottom, transparent, #10b981, transparent)'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 1
          }}
        />
      ))}

      {/* Blinking status indicators */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${15 + (i % 6) * 12}%`,
            top: `${60 + Math.floor(i / 6) * 20}%`,
            backgroundColor: i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#3b82f6' : '#f59e0b'
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}