import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';
import { Shield, Monitor, Cloud, Database, Lock, Wifi, Server, Users, FileText, Smartphone, HardDrive, Zap } from 'lucide-react';

export default function Solutions() {
  useGSAPInit();
  useGSAPAnimations();

  const extraServices = [
    {
      icon: Cloud,
      name: "Cloud Migration",
      description: "Complete cloud infrastructure migration and optimization",
      price: "From RM 500",
      category: "Infrastructure"
    },
    {
      icon: Shield,
      name: "Advanced Security Audit",
      description: "Comprehensive security assessment and vulnerability testing",
      price: "RM 300/audit",
      category: "Security"
    },
    {
      icon: Database,
      name: "Data Recovery",
      description: "Professional data recovery and backup restoration services",
      price: "RM 200/device",
      category: "Recovery"
    },
    {
      icon: Monitor,
      name: "Network Infrastructure Setup",
      description: "Complete network design, implementation and configuration",
      price: "From RM 800",
      category: "Networking"
    },
    {
      icon: Server,
      name: "Server Management",
      description: "24/7 server monitoring, maintenance and optimization",
      price: "RM 150/server/month",
      category: "Infrastructure"
    },
    {
      icon: Lock,
      name: "Compliance Setup",
      description: "GDPR, ISO 27001 and industry compliance implementation",
      price: "From RM 1000",
      category: "Compliance"
    },
    {
      icon: Users,
      name: "IT Training",
      description: "Staff training on cybersecurity best practices and tools",
      price: "RM 100/person",
      category: "Training"
    },
    {
      icon: Wifi,
      name: "Network Security",
      description: "Firewall setup, VPN configuration and network protection",
      price: "From RM 400",
      category: "Security"
    },
    {
      icon: FileText,
      name: "Documentation Services",
      description: "IT policies, procedures and compliance documentation",
      price: "RM 300/package",
      category: "Documentation"
    },
    {
      icon: Smartphone,
      name: "Mobile Device Management",
      description: "BYOD policies, mobile security and device management",
      price: "RM 20/device/month",
      category: "Mobile"
    },
    {
      icon: HardDrive,
      name: "Hardware Procurement",
      description: "IT equipment sourcing, procurement and installation",
      price: "Cost + 15% markup",
      category: "Hardware"
    },
    {
      icon: Zap,
      name: "Emergency Support",
      description: "After-hours emergency IT support and incident response",
      price: "RM 250/hour",
      category: "Emergency"
    }
  ];

  const categories = ["All", "Security", "Infrastructure", "Recovery", "Networking", "Compliance", "Training", "Documentation", "Mobile", "Hardware", "Emergency"];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <EnhancedSectionBackgrounds />
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4">
        {/* Hero Section */}
        <section id="hero" className="liquid-section min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white slide-in-up">
              Extra <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light fade-in">
              Comprehensive IT solutions beyond our managed packages. Additional services to meet your specific business needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-slate-800/50 border border-gray-600/20 text-gray-300 hover:text-white hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm"
                  data-testid={`filter-${category.toLowerCase()}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {extraServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index}
                    className="liquid-card group"
                    data-testid={`service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-gray-600/20 backdrop-blur-sm h-full transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1">
                      
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          {service.category}
                        </span>
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>

                      {/* Service Info */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Pricing */}
                      <div className="mt-auto">
                        <div className="text-xl font-bold text-blue-400 mb-3">
                          {service.price}
                        </div>
                        
                        <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-300 hover:text-white py-2 rounded-lg transition-all duration-300 text-sm font-medium">
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-16 fade-in">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need Something Custom?
                </h3>
                <p className="text-gray-300 mb-6">
                  Can't find what you're looking for? Contact us for custom IT solutions tailored to your specific business requirements.
                </p>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}