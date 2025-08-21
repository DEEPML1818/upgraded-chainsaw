import { useEffect, useState } from 'react';
import { CreditCard, Shield, TrendingUp, Zap, Globe, Lock } from 'lucide-react';
import { getServicesContent, type ServiceContent } from '@/lib/sanity';
import { CardTransition, StaggerContainer, StaggerItem } from '@/components/page-transitions';

export function LiquidServices() {
  const [services, setServices] = useState<ServiceContent[]>([]);

  useEffect(() => {
    getServicesContent().then(setServices);
  }, []);

  const fallbackServices = [
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "Quantum Payments",
      description: "Lightning-fast payment processing with quantum-encrypted security and real-time global settlement.",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Neural Security",
      description: "AI-powered threat detection with blockchain immutability and quantum-resistant encryption.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Liquid Analytics",
      description: "Real-time insights that flow seamlessly through predictive AI and interactive visualizations.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Flow APIs",
      description: "Ultra-responsive APIs that adapt to demand with microsecond latency and infinite scalability.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Global Sync",
      description: "Synchronized financial ecosystems across continents with zero-latency data replication.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Vault Protection",
      description: "Military-grade digital vaults with biometric access and distributed security protocols.",
      gradient: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="liquid-section py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <div className="section-header text-center mb-20">
          <h2 className="flow-text text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Fluid Services
          </h2>
          <p className="flow-text text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Revolutionary financial technology that flows through every aspect of your digital transformation journey
          </p>
        </div>
        
        <StaggerContainer>
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(services.length > 0 ? services : fallbackServices).map((service, index) => {
            const IconComponent = service.icon === 'CreditCard' ? CreditCard : 
                               service.icon === 'Shield' ? Shield : 
                               service.icon === 'TrendingUp' ? TrendingUp :
                               service.icon === 'Zap' ? Zap :
                               service.icon === 'Globe' ? Globe : Lock;
            
            return (
              <StaggerItem key={index}>
                <CardTransition index={index}>
                  <div 
                    className="flow-card liquid-card group relative p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-500/20"
                    data-testid={`service-${index}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transform transition-transform duration-500`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors duration-500">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-500">
                      {service.description}
                    </p>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </CardTransition>
              </StaggerItem>
            );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}