import { Network, Box, Scale, Database, Lock, Rocket } from 'lucide-react';

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-8">
        <div className="section-header text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Cloud Architecture</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Scalable, secure, and resilient cloud infrastructure that powers the next generation of financial applications.
          </p>
        </div>
        
        <div className="tech-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="tech-card bg-slate-800/40 backdrop-blur-lg border border-indigo-500/10 rounded-2xl p-6 text-center transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:border-indigo-500/30 fade-in" data-testid="tech-api-gateway">
            <Network className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-white">API Gateway</h3>
            <p className="text-white/70 text-sm">High-performance API management with rate limiting, authentication, and real-time monitoring.</p>
          </div>
          
          <div className="tech-card bg-slate-800/40 backdrop-blur-lg border border-indigo-500/10 rounded-2xl p-6 text-center transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:border-indigo-500/30 fade-in" data-testid="tech-microservices">
            <Box className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-white">Microservices</h3>
            <p className="text-white/70 text-sm">Modular architecture enabling rapid deployment, seamless scaling, and independent service management.</p>
          </div>
          
          <div className="tech-card bg-slate-800/40 backdrop-blur-lg border border-indigo-500/10 rounded-2xl p-6 text-center transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:border-indigo-500/30 fade-in" data-testid="tech-load-balancer">
            <Scale className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-white">Load Balancer</h3>
            <p className="text-white/70 text-sm">Intelligent traffic distribution ensuring optimal performance and 99.9% uptime across all services.</p>
          </div>
          
          <div className="tech-card bg-slate-800/40 backdrop-blur-lg border border-indigo-500/10 rounded-2xl p-6 text-center transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:border-indigo-500/30 fade-in" data-testid="tech-data-lake">
            <Database className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-white">Data Lake</h3>
            <p className="text-white/70 text-sm">Centralized data storage with real-time processing capabilities and advanced analytics integration.</p>
          </div>
          
          <div className="tech-card bg-slate-800/40 backdrop-blur-lg border border-indigo-500/10 rounded-2xl p-6 text-center transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:border-indigo-500/30 fade-in" data-testid="tech-security-hub">
            <Lock className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-white">Security Hub</h3>
            <p className="text-white/70 text-sm">Comprehensive security monitoring with AI-powered threat detection and automated response systems.</p>
          </div>
          
          <div className="tech-card bg-slate-800/40 backdrop-blur-lg border border-indigo-500/10 rounded-2xl p-6 text-center transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:border-indigo-500/30 fade-in" data-testid="tech-auto-scaling">
            <Rocket className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-white">Auto Scaling</h3>
            <p className="text-white/70 text-sm">Dynamic resource allocation that automatically adapts to traffic demands and optimizes costs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
