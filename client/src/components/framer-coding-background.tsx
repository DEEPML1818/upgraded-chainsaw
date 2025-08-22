import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const codeSnippets = [
  `# IT Infrastructure Management System
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
            # time.sleep(0.5)
            
        print(f"✓ {app_name} successfully deployed to {environment}")`,

  `// IT Support Ticketing System
const ITSupportSystem = {
    ticketQueue: [],
    technicians: [],
    
    createTicket(request) {
        const ticket = {
            id: this.generateTicketId(),
            title: request.subject,
            description: request.description,
            priority: request.priority || 'medium',
            status: 'open',
            assignee: null,
            createdAt: new Date()
        };
        
        this.ticketQueue.push(ticket);
        this.assignTicket(ticket);
        return ticket;
    },
    
    assignTicket(ticket) {
        const availableTech = this.technicians.find(tech => 
            tech.available && tech.skills.includes(ticket.category)
        );
        
        if (availableTech) {
            ticket.assignee = availableTech.id;
            availableTech.available = false;
            this.notifyTechnician(availableTech, ticket);
        }
    }
};`,

  `# Network Configuration Manager
import yaml
import json
from netmiko import ConnectHandler

def configure_network_infrastructure():
    print("Starting network configuration deployment...")
    
    # Load network device configurations
    with open('network_config.yaml', 'r') as f:
        config = yaml.safe_load(f)
    
    devices = config['network_devices']
    
    for device in devices:
        print(f"Configuring {device['hostname']}...")
        
        connection = ConnectHandler(
            device_type=device['device_type'],
            host=device['ip_address'],
            username=device['username'],
            password=device['password']
        )
        
        # Apply configurations
        config_commands = device['commands']
        output = connection.send_config_set(config_commands)
        
        print(f"Configuration applied to {device['hostname']}")
        print("Saving configuration...")
        connection.save_config()
        connection.disconnect()
        
    print("Network infrastructure configured successfully")`,

  `/* Cloud Infrastructure Management */
class CloudServicesManager {
    constructor() {
        this.awsServices = [];
        this.azureServices = [];
        this.gcpServices = [];
    }
    
    async provisionInfrastructure(specs) {
        console.log('Provisioning cloud infrastructure...');
        
        const resources = {
            compute: specs.instances || [],
            storage: specs.storage || [],
            networking: specs.networking || [],
            databases: specs.databases || []
        };
        
        for (const [resourceType, configs] of Object.entries(resources)) {
            console.log('Provisioning ' + resourceType + ' resources...');
            
            for (const config of configs) {
                await this.createResource(resourceType, config);
                console.log('✓ ' + config.name + ' created successfully');
            }
        }
        
        console.log('Infrastructure provisioning completed');
        return this.generateInfrastructureReport();
    }
}`
];



export function FramerCodingBackground() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const controls = useAnimation();
  const terminalRef = useRef<HTMLDivElement>(null);

  // Code typing animation
  useEffect(() => {
    const currentSnippet = codeSnippets[currentSnippetIndex];
    
    if (charIndex < currentSnippet.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentSnippet.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 20 + Math.random() * 30); // Vary typing speed
      
      return () => clearTimeout(timer);
    } else {
      // Move to next snippet after pause
      const resetTimer = setTimeout(() => {
        setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        setCurrentText('');
        setCharIndex(0);
      }, 3000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, currentSnippetIndex]);

  // Matrix rain effect positions
  const matrixChars = '01';
  const matrixColumns = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated background gradient */}
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

      {/* Matrix rain columns */}
      {matrixColumns.map((col) => (
        <motion.div
          key={col}
          className="absolute top-0 font-mono text-sm text-green-400/30"
          style={{
            left: `${(col / matrixColumns.length) * 100}%`,
            width: '20px'
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: ['0vh', '100vh'],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
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

      {/* Live coding terminal - Enlarged and centered */}
      <motion.div 
        className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[800px] h-[500px] bg-black/95 backdrop-blur-lg rounded-xl border border-green-500/40 overflow-hidden shadow-2xl shadow-green-500/20"
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
it-services-manager.py
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
              $ python it-services-manager.py --deploy
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

      {/* Data stream lines */}
      {[25, 50, 75].map((position, index) => (
        <motion.div
          key={index}
          className="absolute top-0 bottom-0 w-px opacity-30"
          style={{ left: `${position}%` }}
          animate={{
            background: [
              'linear-gradient(to bottom, transparent, #6366F1, transparent)',
              'linear-gradient(to bottom, transparent, #06B6D4, transparent)',
              'linear-gradient(to bottom, transparent, #10B981, transparent)'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 1.3
          }}
        />
      ))}
    </div>
  );
}