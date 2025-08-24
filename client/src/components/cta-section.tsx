export function CTASection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-8">
        <div className="cta text-center bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 rounded-3xl p-16 mx-4 fade-in" data-testid="cta-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Ready to Transform Your Business?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
            Join thousands of companies that trust FlowTech to power their digital financial transformation. Get started today and experience the future of fintech.
          </p>
          <div className="cta-actions flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="btn-flowtech btn-flowtech-primary"
              data-testid="cta-request-demo"
            >
              Request Demo
            </a>
            <a 
              href="#" 
              className="btn-flowtech btn-flowtech-secondary"
              data-testid="cta-contact-sales"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
