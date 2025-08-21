import { ArrowRight, Sparkles } from 'lucide-react';

export function LiquidCTA() {
  return (
    <section id="contact" className="liquid-section py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-cyan-900/30"></div>
      
      <div className="container max-w-6xl mx-auto px-8 relative z-10">
        <div className="liquid-card text-center p-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="liquid-text text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                Ready to Flow?
              </h2>
              <Sparkles className="w-8 h-8 text-indigo-400 ml-3" />
            </div>
            
            <p className="liquid-text text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the seamless integration of cutting-edge fintech solutions that adapt and flow with your business needs
            </p>
            
            <div className="cta-actions flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#" 
                className="liquid-card group inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white font-bold text-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105"
                data-testid="cta-start-journey"
              >
                Start Your Journey
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#" 
                className="liquid-card group inline-flex items-center px-10 py-5 bg-transparent border-2 border-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white font-bold text-xl backdrop-blur-lg hover:bg-white/10 transition-all duration-500 hover:scale-105"
                data-testid="cta-schedule-demo"
              >
                Schedule Demo
                <Sparkles className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="mt-12 text-white/60">
              <p className="text-sm">Trusted by 10,000+ companies worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}