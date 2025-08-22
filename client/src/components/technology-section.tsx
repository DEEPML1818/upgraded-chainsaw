import { useState } from 'react';
import { Code2, Database, Shield, Zap, Cloud, Cpu, Network, Globe } from 'lucide-react';

const technologies = [
  {
    category: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    items: ["Node.js", "Python", "PostgreSQL", "Redis"]
  },
  {
    category: "Cloud",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    items: ["AWS", "Docker", "Kubernetes", "Serverless"]
  },
  {
    category: "Security",
    icon: Shield,
    color: "from-orange-500 to-red-500",
    items: ["OAuth", "JWT", "Encryption", "Monitoring"]
  }
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-second response times"
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Military-level encryption and security protocols"
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Machine learning algorithms for intelligent automation"
  },
  {
    icon: Network,
    title: "Distributed Architecture",
    description: "Microservices architecture for maximum scalability"
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Worldwide content delivery for optimal performance"
  },
  {
    icon: Database,
    title: "Real-time Sync",
    description: "Instant data synchronization across all platforms"
  }
];

export function TechnologySection() {
  const [selectedTech, setSelectedTech] = useState(0);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Cutting-Edge</span>
            <br />
            <span className="text-gradient-hero">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with the most advanced technologies to ensure scalability,
            security, and performance that exceeds industry standards.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`tech-card bg-slate-800/40 backdrop-blur-lg border border-indigo-500/20 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 ${
                selectedTech === index ? 'border-indigo-500/60 scale-105' : ''
              }`}
              onClick={() => setSelectedTech(index)}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-4`}>
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tech.category}</h3>
              <div className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-sm text-gray-400 flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="bg-slate-800/40 backdrop-blur-lg border border-indigo-500/20 rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="bg-slate-800/40 backdrop-blur-lg border border-indigo-500/20 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">System Architecture</h3>

          <div className="relative">
            {/* Architecture Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Client Layer */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Client Layer</h4>
                <p className="text-sm text-gray-400">Web, Mobile & API clients with real-time communication</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <div className="flex items-center">
                  <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full"></div>
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mx-2"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full"></div>
                </div>
              </div>

              {/* Service Layer */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Service Layer</h4>
                <p className="text-sm text-gray-400">Microservices with auto-scaling and load balancing</p>
              </div>
            </div>

            {/* Data Layer */}
            <div className="mt-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Data Layer</h4>
              <p className="text-sm text-gray-400">Distributed databases with real-time replication and backup</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Tech grid pattern */}
        <div className="absolute top-10 right-10 opacity-5">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-4 h-4 border border-indigo-400 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>

        {/* Floating tech icons */}
        <div className="absolute left-20 top-1/2 animate-float">
          <Code2 className="w-16 h-16 text-indigo-400/20" />
        </div>
        <div className="absolute right-10 bottom-20 animate-float" style={{ animationDelay: '4s' }}>
          <Cpu className="w-12 h-12 text-cyan-400/20" />
        </div>
      </div>
    </section>
  );
}