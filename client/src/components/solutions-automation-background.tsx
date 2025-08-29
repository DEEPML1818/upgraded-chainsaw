import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function SolutionsAutomationBackground() {
  const [deploymentLogs, setDeploymentLogs] = useState<string[]>([]);
  const [automationTasks, setAutomationTasks] = useState<Array<{ id: number; task: string; status: string; progress: number }>>([]);
  
  const deployLogs = [
    "🚀 Building application container...",
    "📦 Installing dependencies via npm...",
    "⚙️ Configuring environment variables...",
    "🔧 Running automated tests...",
    "✅ All tests passed successfully!",
    "🌐 Deploying to production cluster...",
    "🔄 Rolling update in progress...",
    "📊 Health checks completed",
    "✨ Deployment successful!",
    "📈 Performance metrics look good"
  ];

  const automationTypes = [
    { task: "Database Backup", status: "RUNNING", color: "#06b6d4" },
    { task: "Server Monitoring", status: "ACTIVE", color: "#10b981" },
    { task: "Code Deployment", status: "PENDING", color: "#f59e0b" },
    { task: "SSL Renewal", status: "COMPLETED", color: "#10b981" },
    { task: "Load Balancing", status: "ACTIVE", color: "#06b6d4" },
    { task: "Cache Optimization", status: "RUNNING", color: "#8b5cf6" }
  ];

  useEffect(() => {
    const logInterval = setInterval(() => {
      const randomLog = deployLogs[Math.floor(Math.random() * deployLogs.length)];
      setDeploymentLogs(prev => [randomLog, ...prev.slice(0, 7)]);
    }, 2500);

    const taskInterval = setInterval(() => {
      const randomTask = automationTypes[Math.floor(Math.random() * automationTypes.length)];
      const newTask = {
        id: Date.now(),
        task: randomTask.task,
        status: randomTask.status,
        progress: Math.floor(Math.random() * 100)
      };
      setAutomationTasks(prev => [newTask, ...prev.slice(0, 4)]);
    }, 3500);

    return () => {
      clearInterval(logInterval);
      clearInterval(taskInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Deployment Grid */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse 60% 70% at 80% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse 70% 80% at 70% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 60%), radial-gradient(ellipse 80% 60% at 20% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)',
            'radial-gradient(ellipse 90% 50% at 40% 60%, rgba(139, 92, 246, 0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 90% at 70% 40%, rgba(6, 182, 212, 0.12) 0%, transparent 55%)'
          ]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      {/* Floating Automation Elements */}
      <div className="absolute inset-0">
        {['⚙️', '🔄', '🚀', '📊', '🔧', '💻', '📦', '🌐'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0.5, 1.3, 0.5],
              rotate: [0, 360, 720],
              x: [-40, 40, -40],
              y: [-30, 30, -30]
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* CI/CD Pipeline Terminal */}
      <motion.div 
        className="absolute top-12 left-6 w-84 h-96 bg-black/95 backdrop-blur-lg rounded-xl border border-purple-500/40 overflow-hidden shadow-2xl shadow-purple-500/20"
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div 
          className="bg-gradient-to-r from-purple-500/30 to-purple-400/20 px-4 py-3 border-b border-purple-500/30 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="w-3 h-3 bg-purple-500 rounded-full"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <span className="text-purple-300 text-sm font-mono">CI/CD Pipeline</span>
        </motion.div>

        <div className="p-4 h-full overflow-hidden">
          <div className="text-purple-400 font-mono text-xs leading-relaxed">
            <div className="text-purple-300 mb-2">$ kubectl apply -f deployment.yaml</div>
            <div className="space-y-1">
              {deploymentLogs.map((log, index) => (
                <motion.div 
                  key={index}
                  className="text-cyan-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  [{new Date().toLocaleTimeString()}] {log}
                </motion.div>
              ))}
            </div>
            <motion.span
              className="bg-purple-400 w-2 h-4 inline-block ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      {/* Automation Tasks Panel */}
      <motion.div 
        className="absolute top-12 right-6 w-80 bg-black/95 backdrop-blur-lg rounded-xl border border-cyan-500/40 p-4 shadow-2xl shadow-cyan-500/20"
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        <motion.div 
          className="text-cyan-300 font-mono text-sm mb-4 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.div 
            className="w-3 h-3 bg-cyan-400 rounded-full"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          Automation Tasks
        </motion.div>

        <div className="space-y-3">
          {automationTasks.map((task, index) => (
            <motion.div 
              key={task.id}
              className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-xs font-medium">{task.task}</span>
                <span 
                  className="text-xs font-bold px-2 py-1 rounded"
                  style={{ 
                    color: automationTypes.find(t => t.task === task.task)?.color,
                    backgroundColor: `${automationTypes.find(t => t.task === task.task)?.color}20`
                  }}
                >
                  {task.status}
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div 
                  className="h-2 rounded-full"
                  style={{ backgroundColor: automationTypes.find(t => t.task === task.task)?.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${task.progress}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>
              <div className="text-gray-400 text-xs mt-1">{task.progress}% complete</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Infrastructure Metrics */}
      <motion.div 
        className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-lg rounded-xl border border-emerald-500/40 p-4 shadow-2xl shadow-emerald-500/10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs font-mono text-center">
          {[
            { label: 'Services Running', value: '847', color: '#10b981', unit: '' },
            { label: 'CPU Usage', value: '34', color: '#06b6d4', unit: '%' },
            { label: 'Memory Usage', value: '67', color: '#f59e0b', unit: '%' },
            { label: 'Deployments Today', value: '23', color: '#8b5cf6', unit: '' },
            { label: 'Uptime', value: '99.9', color: '#10b981', unit: '%' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 + index * 0.1 }}
            >
              <motion.div 
                className="font-bold text-lg mb-1"
                style={{ color: stat.color }}
                animate={{ 
                  textShadow: [
                    `0 0 5px ${stat.color}40`,
                    `0 0 15px ${stat.color}60`,
                    `0 0 5px ${stat.color}40`
                  ]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                {stat.value}{stat.unit}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Code Flow Animation */}
      <div className="absolute inset-0">
        {['function()', 'deploy()', 'build()', 'test()', 'push()', 'merge()', 'release()', 'monitor()'].map((code, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-sm text-purple-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 180],
              y: [-40, 40, -40],
              x: [-20, 20, -20]
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Floating Data Streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 font-mono text-sm text-cyan-400/20"
            style={{
              left: `${(i / 12) * 100}%`,
              width: '20px'
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: ['0vh', '100vh'],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <motion.div
                key={j}
                animate={{ opacity: [0.1, 0.6, 0.1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: j * 0.1
                }}
              >
                {['>', '|', '<', '-', '=', '+'][Math.floor(Math.random() * 6)]}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}