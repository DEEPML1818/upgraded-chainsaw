import { Navigation } from '@/components/navigation';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';

export default function Contact() {
  useGSAPInit();
  useGSAPAnimations();

  return (
    <div className="min-h-screen bg-slate-950">
      <EnhancedSectionBackgrounds />
      <Navigation />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="hero" className="liquid-section min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white slide-in-up">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light fade-in">
              Questions about Web3 finance? Need enterprise solutions? Our crypto-native team is here to help you navigate the future of money.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 mb-2">First Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Subject</label>
                      <select className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors">
                        <option>General Inquiry</option>
                        <option>Technical Support</option>
                        <option>Enterprise Solutions</option>
                        <option>Partnership</option>
                        <option>Security Issue</option>
                        <option>API Integration</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Message</label>
                      <textarea 
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project or question..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="liquid-card">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-xl">💬</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">24/7 Support</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Our crypto-native support team is available around the clock to help with any Web3 questions.
                    </p>
                    <p className="text-cyan-400 font-semibold">support@flowtech.com</p>
                  </div>
                </div>

                <div className="liquid-card">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-xl">🏢</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">Enterprise Sales</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Custom solutions for institutions and businesses. Volume discounts and white-label options available.
                    </p>
                    <p className="text-orange-400 font-semibold">enterprise@flowtech.com</p>
                  </div>
                </div>

                <div className="liquid-card">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-xl">⚡</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">Emergency Support</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Critical security issues or system downtime? Contact our emergency response team immediately.
                    </p>
                    <p className="text-green-400 font-semibold">emergency@flowtech.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Global Offices</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🇺🇸</div>
                  <h3 className="text-xl font-bold text-white mb-4">San Francisco, USA</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    548 Market Street<br/>
                    San Francisco, CA 94104<br/>
                    United States
                  </p>
                  <p className="text-blue-400 font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🇬🇧</div>
                  <h3 className="text-xl font-bold text-white mb-4">London, UK</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    1 Canada Square<br/>
                    Canary Wharf, London E14 5AB<br/>
                    United Kingdom
                  </p>
                  <p className="text-purple-400 font-semibold">+44 20 7123 4567</p>
                </div>
              </div>

              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🇸🇬</div>
                  <h3 className="text-xl font-bold text-white mb-4">Singapore</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    1 Raffles Place<br/>
                    #40-01 One Raffles Place<br/>
                    Singapore 048616
                  </p>
                  <p className="text-green-400 font-semibold">+65 6123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Common Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-gray-600/20 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-3">How do I get started with MetaMask?</h3>
                  <p className="text-gray-300">
                    Install the MetaMask browser extension, create a wallet, and click "Connect MetaMask" on our platform. We'll guide you through the process.
                  </p>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-gray-600/20 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-3">Is FlowTech available in my country?</h3>
                  <p className="text-gray-300">
                    We support 150+ countries. Some features may be restricted based on local regulations. Contact us for specific availability.
                  </p>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-gray-600/20 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-3">What's the difference between DeFi and traditional finance?</h3>
                  <p className="text-gray-300">
                    DeFi is decentralized, non-custodial, and offers higher yields. Traditional finance is centralized but may be more familiar. We bridge both worlds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}