import { CreditCard, Shield, TrendingUp } from 'lucide-react';

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-8">
        <div className="section-header text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Services</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Revolutionary financial technology services designed to accelerate your digital transformation and enhance user experiences.
          </p>
        </div>
        
        <div className="services-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass-card service-card slide-in-left" data-testid="service-payments">
            <div className="service-icon w-15 h-15 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Digital Payments</h3>
            <p className="text-white/70 leading-relaxed">
              Seamless payment processing with advanced security, real-time transactions, and multi-currency support. Built for scale with enterprise-grade reliability and lightning-fast processing speeds.
            </p>
          </div>
          
          <div className="glass-card service-card fade-in" data-testid="service-security">
            <div className="service-icon w-15 h-15 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Blockchain Security</h3>
            <p className="text-white/70 leading-relaxed">
              Military-grade encryption and blockchain-powered security infrastructure that protects transactions and user data with immutable ledger technology and advanced threat detection.
            </p>
          </div>
          
          <div className="glass-card service-card slide-in-right" data-testid="service-analytics">
            <div className="service-icon w-15 h-15 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Analytics Dashboard</h3>
            <p className="text-white/70 leading-relaxed">
              Real-time insights and comprehensive analytics with AI-powered predictive modeling, custom reporting, and interactive visualizations that drive informed business decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
