import { Shield, Lock, Eye, Zap, Activity, Code2 } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "AI-powered threat detection with real-time security monitoring",
    color: "text-green-400",
    bgColor: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30 group-hover:border-green-400/50"
  },
  {
    icon: Lock,
    title: "Military-Grade Encryption", 
    description: "AES-256 encryption for all data transactions and communications",
    color: "text-purple-400",
    bgColor: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30 group-hover:border-purple-400/50"
  },
  {
    icon: Eye,
    title: "Behavioral Analysis",
    description: "Machine learning algorithms detect anomalies and suspicious patterns",
    color: "text-cyan-400",
    bgColor: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30 group-hover:border-cyan-400/50"
  },
  {
    icon: Code2,
    title: "Live Code Analysis",
    description: "Real-time code vulnerability scanning and secure development",
    color: "text-yellow-400",
    bgColor: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30 group-hover:border-yellow-400/50"
  },
  {
    icon: Activity,
    title: "Network Monitoring",
    description: "24/7 network surveillance with advanced intrusion detection",
    color: "text-red-400",
    bgColor: "from-red-500/20 to-pink-500/20",
    borderColor: "border-red-500/30 group-hover:border-red-400/50"
  },
  {
    icon: Zap,
    title: "Infrastructure Security",
    description: "Complete server hardening and infrastructure protection",
    color: "text-indigo-400",
    bgColor: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/30 group-hover:border-indigo-400/50"
  }
];

export function SecurityFeatures() {
  return (
    <section className="py-12 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient-hero">Advanced Security</span> Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity services protecting your digital infrastructure 24/7
          </p>
        </div>
        
        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="glass-card group hover:scale-105 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${feature.bgColor} p-3 rounded-lg border ${feature.borderColor} transition-colors duration-300`}>
                    <IconComponent className={`w-6 h-6 ${feature.color} group-hover:brightness-110 transition-all duration-300`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                {/* Animated border effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm mb-6">Trusted by leading organizations worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-50">
            <div className="text-2xl font-mono text-gray-600">ISO 27001</div>
            <div className="text-2xl font-mono text-gray-600">SOC 2</div>
            <div className="text-2xl font-mono text-gray-600">GDPR</div>
            <div className="text-2xl font-mono text-gray-600">PCI DSS</div>
          </div>
        </div>
      </div>
    </section>
  );
}