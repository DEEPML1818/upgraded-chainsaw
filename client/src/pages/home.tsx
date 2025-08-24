import { Navigation } from '@/components/navigation';
import { useParticleBurst } from '@/components/particle-burst';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { GSAPScrollSmootherWrapper } from '@/components/gsap-scroll-smoother-wrapper';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';

export default function Home() {
  const { burst, triggerBurst } = useParticleBurst();
  
  // Initialize GSAP plugins
  useGSAPInit();
  useGSAPAnimations();

  const handleClick = (e: React.MouseEvent) => {
    triggerBurst(e.clientX, e.clientY);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <EnhancedSectionBackgrounds />
      <Navigation />
      
      <main className="container mx-auto px-4" onClick={handleClick}>
        {/* Hero Section */}
        <section id="hero" className="liquid-section min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 bg-parallax"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
          
          <div className="w-full relative z-10">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center">
                <div className="mb-6 fade-in">
                  <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-semibold tracking-wide">
                    Next-Generation Payment Platform
                  </span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight slide-in-up">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    One App for
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    All Your Payments
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light fade-in">
                  Experience the future of digital payments with Web3 integration. 
                  Connect your MetaMask wallet, manage crypto assets, and seamlessly bridge traditional and decentralized finance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 scale-in">
                  <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-12 py-6 rounded-2xl font-bold text-xl text-white transition-all duration-500 transform hover:scale-105 shadow-2xl relative overflow-hidden">
                    <span className="relative z-10">Get Started Free</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                  <button data-metamask-button className="group bg-transparent border-2 border-orange-400/60 hover:border-orange-400 px-12 py-6 rounded-2xl font-bold text-xl text-orange-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-orange-400/10 backdrop-blur-sm">
                    <span className="flex items-center gap-3">
                      <span className="text-lg">🦊</span>
                      <span>Connect MetaMask</span>
                    </span>
                  </button>
                  <button className="group bg-transparent border-2 border-cyan-400/60 hover:border-cyan-400 px-12 py-6 rounded-2xl font-bold text-xl text-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400/10 backdrop-blur-sm">
                    <span className="flex items-center gap-3">
                      <span>Watch Demo</span>
                      <span className="text-2xl group-hover:translate-x-1 transition-transform">▶</span>
                    </span>
                  </button>
                </div>
                
                {/* Feature Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto stats-grid">
                  <div className="text-center group cursor-pointer liquid-stat">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      200M+
                    </div>
                    <div className="text-gray-400 text-sm font-medium">Active Users</div>
                  </div>
                  <div className="text-center group cursor-pointer liquid-stat">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      150+
                    </div>
                    <div className="text-gray-400 text-sm font-medium">Countries</div>
                  </div>
                  <div className="text-center group cursor-pointer liquid-stat">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      99.9%
                    </div>
                    <div className="text-gray-400 text-sm font-medium">Uptime</div>
                  </div>
                  <div className="text-center group cursor-pointer liquid-stat">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      $1B+
                    </div>
                    <div className="text-gray-400 text-sm font-medium">Processed Daily</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="liquid-section py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent bg-parallax"></div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Everything You Need
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light fade-in">
                Revolutionary financial technology that transforms how you manage money. 
                From instant transfers to AI-powered insights, experience the future of finance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 features-grid">
              <div className="liquid-card group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-2xl">💳</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Web3 Digital Wallet</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Connect your MetaMask wallet and manage both traditional and crypto assets in one unified interface. Support for 50+ fiat currencies and major cryptocurrencies with DeFi integration.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• MetaMask wallet integration</li>
                    <li>• Multi-chain support (Ethereum, Polygon, BSC)</li>
                    <li>• DeFi protocol connections</li>
                    <li>• NFT portfolio management</li>
                    <li>• Hardware wallet support</li>
                  </ul>
                </div>
              </div>
              
              <div className="liquid-card group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Instant Transfers</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Send money instantly to anyone, anywhere in the world with our lightning-fast transfer network. Average transaction time: 3.2 seconds globally.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Sub-5 second processing worldwide</li>
                    <li>• 24/7/365 availability</li>
                    <li>• Low fees (0.1% - 0.5%)</li>
                    <li>• Real-time transaction tracking</li>
                  </ul>
                </div>
              </div>
              
              <div className="liquid-card group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-green-500/20 hover:border-green-500/40 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Bank-Level Security</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Military-grade encryption, biometric authentication, and AI-powered fraud detection. Your security is our top priority with 99.99% uptime guarantee.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• AES-256 encryption standard</li>
                    <li>• Biometric login (Face ID, Touch ID)</li>
                    <li>• AI fraud detection system</li>
                    <li>• Insurance coverage up to $1M</li>
                  </ul>
                </div>
              </div>
              
              <div className="liquid-card group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-orange-500/20 hover:border-orange-500/40 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Analytics</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    AI-powered spending insights, predictive budgeting, and personalized financial recommendations. Make data-driven financial decisions with confidence.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Automated expense categorization</li>
                    <li>• Predictive spending alerts</li>
                    <li>• Investment opportunity insights</li>
                    <li>• Custom financial goal tracking</li>
                  </ul>
                </div>
              </div>
              
              <div className="liquid-card group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-pink-500/20 hover:border-pink-500/40 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Global Payments</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Seamlessly pay merchants, online services, and friends across 150+ countries. Best-in-class exchange rates and minimal fees.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• 150+ countries supported</li>
                    <li>• Crypto & fiat payments</li>
                    <li>• MetaMask wallet integration</li>
                    <li>• Cross-chain transactions</li>
                  </ul>
                </div>
              </div>
              
              <div className="liquid-card group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Mobile First</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Award-winning mobile apps with intuitive design. Rated #1 FinTech app with 4.9/5 stars across app stores worldwide.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• iOS & Android native apps</li>
                    <li>• Offline transaction capability</li>
                    <li>• Apple Pay & Google Pay integration</li>
                    <li>• 4.9/5 star rating globally</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web3 Integration Section */}
        <section id="web3-integration" className="liquid-section py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-950 bg-parallax"></div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Web3 Native Platform
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light fade-in">
                Why MetaMask? Bridge the gap between traditional finance and decentralized web. 
                Your gateway to DeFi, NFTs, and the future of digital ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <div className="liquid-card scale-in">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🦊</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">MetaMask Integration</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Connect your existing MetaMask wallet instantly. No seed phrase sharing required - maintain full control of your private keys while accessing our platform's features.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>One-click wallet connection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Your keys, your crypto - non-custodial</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Support for 1000+ tokens and NFTs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Hardware wallet compatibility</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="liquid-card scale-in">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">⛓️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Multi-Chain DeFi</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Access decentralized finance protocols across multiple blockchains. Swap tokens, provide liquidity, stake assets, and earn yield - all from one interface.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">◆</span>
                      <span>Ethereum, Polygon, Binance Smart Chain</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">◆</span>
                      <span>Uniswap, SushiSwap, PancakeSwap integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">◆</span>
                      <span>Yield farming and liquidity mining</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">◆</span>
                      <span>Cross-chain bridge functionality</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Web3 Benefits */}
            <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl border border-cyan-500/20 p-12 text-center liquid-card scale-in">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Why Choose <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Web3 Finance?</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔓</div>
                  <h4 className="text-xl font-bold text-white mb-3">True Ownership</h4>
                  <p className="text-gray-400 text-sm">
                    Your assets remain in your wallet. No central authority can freeze or confiscate your funds.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h4 className="text-xl font-bold text-white mb-3">Global Access</h4>
                  <p className="text-gray-400 text-sm">
                    Borderless financial services. Access DeFi protocols from anywhere in the world, 24/7.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💎</div>
                  <h4 className="text-xl font-bold text-white mb-3">Higher Yields</h4>
                  <p className="text-gray-400 text-sm">
                    Earn significantly more through DeFi protocols, liquidity provision, and yield farming strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="liquid-section py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950 bg-parallax"></div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  How It Works
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light fade-in">
                Get started in minutes with MetaMask integration. Experience Web3 finance in three simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              <div className="text-center liquid-card scale-in">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full border-2 border-orange-500/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🦊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Connect MetaMask</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  One-click connection to your existing MetaMask wallet. No seed phrase sharing - your keys stay secure in your wallet.
                </p>
                <div className="text-sm text-gray-400 space-y-2">
                  <div>• Install MetaMask browser extension</div>
                  <div>• Click "Connect MetaMask" button</div>
                  <div>• Approve connection in MetaMask</div>
                </div>
              </div>

              <div className="text-center liquid-card scale-in">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border-2 border-purple-500/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Add Assets</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Your MetaMask assets are instantly available. Add more funds via bank transfer, card purchases, or direct crypto transfers to your wallet.
                </p>
                <div className="text-sm text-gray-400 space-y-2">
                  <div>• Use existing wallet balance</div>
                  <div>• Buy crypto directly in MetaMask</div>
                  <div>• Bridge assets from other chains</div>
                </div>
              </div>

              <div className="text-center liquid-card scale-in">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full border-2 border-green-500/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Explore Web3</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Access DeFi protocols, swap tokens, provide liquidity, and earn yield. Traditional payments meet decentralized finance.
                </p>
                <div className="text-sm text-gray-400 space-y-2">
                  <div>• DeFi protocol integration</div>
                  <div>• Token swaps & liquidity pools</div>
                  <div>• NFT marketplace access</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section id="trust" className="liquid-section py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 bg-parallax"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)] parallax-slow"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)] parallax-fast"></div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Trusted Worldwide
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light fade-in">
                Join 200 million+ users who trust Jeton with their financial future. Regulated and compliant in 150+ countries.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 trust-features">
              <div className="text-center group cursor-pointer liquid-feature scale-in">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Instant Processing</h3>
                <p className="text-gray-400 text-sm mb-3">Transactions processed in seconds, not hours</p>
                <div className="text-xs text-gray-500">
                  <div>Average: 3.2 seconds globally</div>
                  <div>Peak volume: 10M transactions/day</div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer liquid-feature scale-in">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:border-green-400/50 transition-all duration-300">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Military Grade Security</h3>
                <p className="text-gray-400 text-sm mb-3">End-to-end encryption and biometric protection</p>
                <div className="text-xs text-gray-500">
                  <div>Zero security breaches in 8 years</div>
                  <div>SOC 2 Type II certified</div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer liquid-feature scale-in">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:border-purple-400/50 transition-all duration-300">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lowest Fees</h3>
                <p className="text-gray-400 text-sm mb-3">Transparent pricing with no hidden charges</p>
                <div className="text-xs text-gray-500">
                  <div>Domestic: 0.1% | International: 0.5%</div>
                  <div>Free P2P transfers under $1000</div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer liquid-feature scale-in">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:border-orange-400/50 transition-all duration-300">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
                <p className="text-gray-400 text-sm mb-3">Available in 150+ countries worldwide</p>
                <div className="text-xs text-gray-500">
                  <div>Licensed in US, EU, UK, Asia-Pacific</div>
                  <div>24/7 multilingual support</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-purple-500/20 p-12 max-w-4xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Transform Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Financial Life?</span>
                </h3>
                <p className="text-xl text-gray-300 mb-8 font-light">
                  Join millions who have already made the switch to seamless digital payments.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-12 py-6 rounded-2xl font-bold text-xl text-white transition-all duration-500 transform hover:scale-105 shadow-2xl">
                  Start Your Journey Today
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section id="footer" className="liquid-section py-20 bg-gradient-to-t from-black to-slate-950 relative">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16 fade-in">
              <div className="text-6xl md:text-8xl font-black mb-6 slide-in-up">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  JETON
                </span>
              </div>
              <p className="text-xl text-gray-400 mb-8 fade-in">
                The future of payments is here. Simple, secure, and designed for everyone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 scale-in">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105 liquid-button">
                  Download App
                </button>
                <button className="bg-transparent border-2 border-cyan-400/60 hover:border-cyan-400 px-8 py-4 rounded-2xl font-bold text-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400/10 liquid-button">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-400 footer-grid">
              <div className="liquid-footer-item slide-in-left">
                <h4 className="text-white font-bold mb-4">Product</h4>
                <div className="space-y-2 text-sm">
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Digital Wallet</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Instant Transfers</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Global Payments</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Business Solutions</div>
                </div>
              </div>
              
              <div className="liquid-footer-item fade-in">
                <h4 className="text-white font-bold mb-4">Company</h4>
                <div className="space-y-2 text-sm">
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">About Us</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Careers</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Press</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Partners</div>
                </div>
              </div>
              
              <div className="liquid-footer-item fade-in">
                <h4 className="text-white font-bold mb-4">Support</h4>
                <div className="space-y-2 text-sm">
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Help Center</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Contact</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Security</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Status</div>
                </div>
              </div>
              
              <div className="liquid-footer-item slide-in-right">
                <h4 className="text-white font-bold mb-4">Legal</h4>
                <div className="space-y-2 text-sm">
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Privacy</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Terms</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Compliance</div>
                  <div className="hover:text-purple-400 cursor-pointer transition-colors">Licenses</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-800 mt-16 pt-8 text-center text-gray-500 fade-in">
              <p>&copy; 2024 Jeton. All rights reserved. Making payments simple, secure, and accessible worldwide.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}