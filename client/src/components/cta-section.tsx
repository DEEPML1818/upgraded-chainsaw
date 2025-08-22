import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-hero">Ready to Transform</span>
            <br />
            <span className="text-white">Your Digital Future?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of companies that trust us with their digital transformation journey. 
            Let's build something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-slate-800/40 backdrop-blur-lg border border-indigo-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full btn-flowtech btn-flowtech-primary group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Us</p>
                    <p className="text-gray-400">contact@flowtech.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Call Us</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Visit Us</p>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Business Hours</p>
                    <p className="text-gray-400">Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-slate-800/40 backdrop-blur-lg border border-indigo-500/20 rounded-3xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Why Choose FlowTech?</h4>
              <div className="space-y-3">
                {[
                  "24/7 Expert Support",
                  "99.9% Uptime Guarantee",
                  "Enterprise Security",
                  "Scalable Solutions"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-10 opacity-10 animate-float">
          <div className="w-24 h-24 border-2 border-indigo-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 right-20 opacity-10 animate-float" style={{ animationDelay: '3s' }}>
          <div className="w-16 h-16 border-2 border-cyan-400 transform rotate-45"></div>
        </div>
      </div>
    </section>
  );
}
