import { Network, Database, Cloud, Cpu, Layers, Activity } from 'lucide-react';
import { EnhancedPhysicsPlayground } from './enhanced-physics-playground';

export function LiquidSolutions() {
  const solutions = [
    { icon: <Network className="w-8 h-8" />, title: "Neural Networks", desc: "Adaptive AI-driven infrastructure" },
    { icon: <Database className="w-8 h-8" />, title: "Quantum Storage", desc: "Infinite scalability with quantum compression" },
    { icon: <Cloud className="w-8 h-8" />, title: "Fluid Cloud", desc: "Seamless multi-cloud orchestration" },
    { icon: <Cpu className="w-8 h-8" />, title: "Edge Computing", desc: "Ultra-low latency processing nodes" },
    { icon: <Layers className="w-8 h-8" />, title: "Smart Layers", desc: "Intelligent service mesh architecture" },
    { icon: <Activity className="w-8 h-8" />, title: "Live Monitoring", desc: "Real-time system health analytics" }
  ];

  return (
    <section id="solutions" className="liquid-section py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-cyan-900/10"></div>
      
      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <div className="section-header text-center mb-20">
          <h2 className="liquid-text text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Liquid Architecture
          </h2>
          <p className="liquid-text text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Infrastructure that flows and adapts in real-time to meet your evolving business demands
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="liquid-card group relative p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20"
              data-testid={`solution-${index}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transform transition-transform duration-500`}>
                {solution.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-200 transition-colors duration-500">
                {solution.title}
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                {solution.desc}
              </p>
              
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Physics Playground */}
        <div className="liquid-card p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 max-w-6xl mx-auto">
          <EnhancedPhysicsPlayground />
        </div>
      </div>
    </section>
  );
}