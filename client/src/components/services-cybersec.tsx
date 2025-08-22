import { Shield, Eye, Lock, Zap, Activity, Users, Globe, Server } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: "Threat Detection & Response",
    description: "24/7 monitoring with AI-powered threat detection and automated incident response protocols.",
    features: ["Real-time monitoring", "AI threat analysis", "Automated response", "Incident reporting"],
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Lock,
    title: "Data Protection & Encryption",
    description: "Military-grade encryption and data loss prevention systems to secure your sensitive information.",
    features: ["AES-256 encryption", "Data masking", "Access controls", "Backup security"],
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Eye,
    title: "Security Assessment", 
    description: "Comprehensive security audits and penetration testing to identify vulnerabilities.",
    features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance audit"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Network Security",
    description: "Advanced firewall management, intrusion detection, and network traffic analysis.",
    features: ["Firewall management", "IDS/IPS systems", "VPN solutions", "Traffic analysis"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Users,
    title: "Identity & Access Management",
    description: "Secure authentication systems, single sign-on, and privileged access management.",
    features: ["Multi-factor auth", "SSO integration", "Access controls", "User monitoring"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Server,
    title: "Cloud Security",
    description: "Secure cloud migration, configuration management, and continuous compliance monitoring.",
    features: ["Cloud migration", "Config management", "Compliance", "Monitoring"],
    color: "from-pink-500 to-rose-500"
  }
];

const industries = [
  { name: "Financial Services", icon: "💰", description: "Banking, fintech, insurance" },
  { name: "Healthcare", icon: "🏥", description: "Hospitals, clinics, pharma" },
  { name: "Manufacturing", icon: "🏭", description: "Industrial, automotive, aerospace" },
  { name: "Government", icon: "🏛️", description: "Federal, state, municipal" },
  { name: "E-commerce", icon: "🛒", description: "Retail, marketplace, logistics" },
  { name: "Technology", icon: "💻", description: "Software, hardware, SaaS" }
];

export function ServicesCybersec() {
  return (
    <section className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-hero">Comprehensive</span>
            <span className="text-white block">Security Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From threat detection to compliance management, our cybersecurity services 
            provide complete protection for your digital infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="glass-card group hover:scale-105 transition-all duration-500 relative overflow-hidden"
              >
                {/* Service Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`bg-gradient-to-br ${service.color} p-3 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                
                {/* Service Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Service Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" 
                           style={{ animationDelay: `${featureIndex * 0.2}s` }}></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Animated border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">How We Secure Your Business</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Complete security audit and risk analysis" },
              { step: "02", title: "Strategy", desc: "Custom security roadmap and implementation plan" },
              { step: "03", title: "Deploy", desc: "Implementation of security solutions and monitoring" },
              { step: "04", title: "Monitor", desc: "24/7 monitoring and continuous improvement" }
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-indigo-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-white text-lg">
                  {phase.step}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{phase.title}</h4>
                <p className="text-gray-400 text-sm">{phase.desc}</p>
                
                {/* Connecting line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-indigo-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-12">Industries We Protect</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="glass-card text-center hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h4 className="text-white font-semibold mb-2 text-sm">{industry.name}</h4>
                <p className="text-gray-400 text-xs">{industry.description}</p>
                
                {/* Pulse effect on hover */}
                <div className="absolute inset-0 border border-indigo-500/30 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Business?</h3>
            <p className="text-gray-400 mb-6">
              Get a free security assessment and personalized recommendations for your organization.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2 mx-auto w-fit">
                <Activity className="w-5 h-5" />
                Start Free Assessment
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Security pattern overlay */}
        <div className="absolute top-1/4 right-10 opacity-5">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-8 h-8 border border-indigo-400 rounded animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>
        </div>
        
        {/* Floating security icons */}
        <div className="absolute left-10 top-1/3 animate-float">
          <Lock className="w-12 h-12 text-indigo-400/20" />
        </div>
        <div className="absolute right-20 bottom-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Shield className="w-16 h-16 text-cyan-400/20" />
        </div>
      </div>
    </section>
  );
}