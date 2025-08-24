import { Navigation } from '@/components/navigation';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';

export default function Help() {
  useGSAPInit();
  useGSAPAnimations();

  return (
    <div className="min-h-screen bg-slate-950">
      <EnhancedSectionBackgrounds />
      <Navigation />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="hero" className="liquid-section min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white slide-in-up">
              Help <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light fade-in">
              Everything you need to know about Web3 finance, MetaMask integration, and DeFi protocols. Get help from our crypto-native support team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center scale-in">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-12 py-6 rounded-2xl font-bold text-xl text-white transition-all duration-500 transform hover:scale-105 shadow-2xl">
                Search Help
              </button>
              <button className="group bg-transparent border-2 border-blue-400/60 hover:border-blue-400 px-12 py-6 rounded-2xl font-bold text-xl text-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-blue-400/10 backdrop-blur-sm">
                Contact Support
              </button>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Popular Topics</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🦊</div>
                  <h3 className="text-xl font-bold text-white mb-4">MetaMask Setup</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Learn how to install, configure, and connect your MetaMask wallet to FlowTech platform.
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="block text-orange-400 hover:text-orange-300 text-sm transition-colors">
                      • Installing MetaMask Extension
                    </a>
                    <a href="#" className="block text-orange-400 hover:text-orange-300 text-sm transition-colors">
                      • Creating Your First Wallet
                    </a>
                    <a href="#" className="block text-orange-400 hover:text-orange-300 text-sm transition-colors">
                      • Connecting to FlowTech
                    </a>
                    <a href="#" className="block text-orange-400 hover:text-orange-300 text-sm transition-colors">
                      • Managing Multiple Accounts
                    </a>
                  </div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-4">DeFi Basics</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Understanding decentralized finance, yield farming, liquidity pools, and smart contracts.
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="block text-purple-400 hover:text-purple-300 text-sm transition-colors">
                      • What is DeFi?
                    </a>
                    <a href="#" className="block text-purple-400 hover:text-purple-300 text-sm transition-colors">
                      • How Yield Farming Works
                    </a>
                    <a href="#" className="block text-purple-400 hover:text-purple-300 text-sm transition-colors">
                      • Understanding Liquidity Pools
                    </a>
                    <a href="#" className="block text-purple-400 hover:text-purple-300 text-sm transition-colors">
                      • Risks and Best Practices
                    </a>
                  </div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-bold text-white mb-4">Security</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Protect your crypto assets with security best practices and risk management strategies.
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="block text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                      • Securing Your Private Keys
                    </a>
                    <a href="#" className="block text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                      • Hardware Wallet Setup
                    </a>
                    <a href="#" className="block text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                      • Avoiding Phishing Attacks
                    </a>
                    <a href="#" className="block text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                      • Smart Contract Risks
                    </a>
                  </div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-white mb-4">Trading & Swaps</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Master token swapping, understand slippage, and optimize your trading strategies.
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="block text-green-400 hover:text-green-300 text-sm transition-colors">
                      • How to Swap Tokens
                    </a>
                    <a href="#" className="block text-green-400 hover:text-green-300 text-sm transition-colors">
                      • Understanding Slippage
                    </a>
                    <a href="#" className="block text-green-400 hover:text-green-300 text-sm transition-colors">
                      • Gas Fee Optimization
                    </a>
                    <a href="#" className="block text-green-400 hover:text-green-300 text-sm transition-colors">
                      • Cross-Chain Bridges
                    </a>
                  </div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-red-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-bold text-white mb-4">Troubleshooting</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Common issues, error messages, and step-by-step solutions for platform problems.
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="block text-red-400 hover:text-red-300 text-sm transition-colors">
                      • Transaction Failed
                    </a>
                    <a href="#" className="block text-red-400 hover:text-red-300 text-sm transition-colors">
                      • MetaMask Connection Issues
                    </a>
                    <a href="#" className="block text-red-400 hover:text-red-300 text-sm transition-colors">
                      • High Gas Fees
                    </a>
                    <a href="#" className="block text-red-400 hover:text-red-300 text-sm transition-colors">
                      • Stuck Transactions
                    </a>
                  </div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-yellow-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-white mb-4">Account Management</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Manage your account settings, subscriptions, and access advanced features.
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="block text-yellow-400 hover:text-yellow-300 text-sm transition-colors">
                      • Upgrading to Pro
                    </a>
                    <a href="#" className="block text-yellow-400 hover:text-yellow-300 text-sm transition-colors">
                      • API Key Management
                    </a>
                    <a href="#" className="block text-yellow-400 hover:text-yellow-300 text-sm transition-colors">
                      • Portfolio Tracking
                    </a>
                    <a href="#" className="block text-yellow-400 hover:text-yellow-300 text-sm transition-colors">
                      • Export Data
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-8 relative z-10">
            <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl border border-blue-500/20 p-12 text-center liquid-card scale-in">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Still Need <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Help?</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our crypto-native support team is available 24/7 to help with any Web3 questions or technical issues.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <h4 className="text-white font-semibold mb-2">Live Chat</h4>
                  <p className="text-gray-400 text-sm">Instant support via chat</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📧</div>
                  <h4 className="text-white font-semibold mb-2">Email Support</h4>
                  <p className="text-gray-400 text-sm">support@flowtech.com</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📞</div>
                  <h4 className="text-white font-semibold mb-2">Phone Support</h4>
                  <p className="text-gray-400 text-sm">Pro & Enterprise only</p>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Video Tutorials</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="aspect-video bg-slate-700/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">▶️</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Getting Started with MetaMask</h3>
                  <p className="text-gray-400 text-sm mb-4">Learn how to set up and connect your first MetaMask wallet.</p>
                  <div className="text-purple-400 text-sm">Duration: 5:23</div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                  <div className="aspect-video bg-slate-700/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">▶️</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Your First DeFi Swap</h3>
                  <p className="text-gray-400 text-sm mb-4">Step-by-step guide to swapping tokens on our platform.</p>
                  <div className="text-cyan-400 text-sm">Duration: 8:15</div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-green-500/20 backdrop-blur-sm">
                  <div className="aspect-video bg-slate-700/50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">▶️</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Liquidity Pool Basics</h3>
                  <p className="text-gray-400 text-sm mb-4">Understanding how to provide liquidity and earn fees.</p>
                  <div className="text-green-400 text-sm">Duration: 12:07</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}