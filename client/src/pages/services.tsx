import { Navigation } from '@/components/navigation';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';

export default function Services() {
  useGSAPInit();
  useGSAPAnimations();

  return (
    <div className="min-h-screen bg-slate-950">
      <EnhancedSectionBackgrounds />
      <Navigation />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="hero" className="liquid-section min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white slide-in-up">
              Web3 <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light fade-in">
              Complete suite of decentralized financial services. From MetaMask integration to advanced DeFi protocols.
            </p>
            
            <button data-metamask-button className="group bg-transparent border-2 border-orange-400/60 hover:border-orange-400 px-12 py-6 rounded-2xl font-bold text-xl text-orange-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-orange-400/10 backdrop-blur-sm scale-in">
              <span className="flex items-center gap-3">
                <span className="text-lg">🦊</span>
                <span>Connect MetaMask</span>
              </span>
            </button>
          </div>
        </section>

        {/* Core Services */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Core Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🦊</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">MetaMask Wallet Services</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Seamless integration with your existing MetaMask wallet. Manage crypto assets, connect to DeFi protocols, and maintain full custody of your private keys.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>One-click wallet connection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Multi-chain asset management (ETH, Polygon, BSC)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Hardware wallet support (Ledger, Trezor)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>NFT portfolio management</span>
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-orange-400">Free</div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">DeFi Trading</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Access the best DeFi protocols for token swaps, liquidity provision, and yield farming. Automated strategies to maximize your crypto returns.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">◆</span>
                      <span>Uniswap, SushiSwap, PancakeSwap integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">◆</span>
                      <span>Automated yield farming strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">◆</span>
                      <span>Liquidity pool optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">◆</span>
                      <span>Cross-chain bridge functionality</span>
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-purple-400">0.5% fee</div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Global Payments</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Send and receive payments globally using crypto or traditional currencies. Instant settlements, minimal fees, and 24/7 availability.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">★</span>
                      <span>Instant crypto payments worldwide</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">★</span>
                      <span>Fiat on/off ramps in 150+ countries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">★</span>
                      <span>Merchant payment solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">★</span>
                      <span>QR code and mobile payments</span>
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-cyan-400">0.1% fee</div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">💎</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Staking & Rewards</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Earn passive income by staking your crypto assets. Access to high-yield opportunities across multiple blockchain networks.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">💰</span>
                      <span>ETH 2.0 staking (4-6% APY)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">💰</span>
                      <span>Liquid staking tokens (stETH, rETH)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">💰</span>
                      <span>Governance token staking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">💰</span>
                      <span>Auto-compounding rewards</span>
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-green-400">Up to 12% APY</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Services */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Advanced Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h3 className="text-xl font-bold text-white mb-4">Institutional Services</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Enterprise-grade crypto custody, treasury management, and institutional DeFi access for businesses and funds.
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-4">Flash Loans</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Uncollateralized loans for arbitrage, liquidations, and other advanced DeFi strategies. For experienced traders only.
                  </p>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Apply Access
                  </button>
                </div>
              </div>

              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold text-white mb-4">AI Trading Bots</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Automated trading strategies powered by machine learning. Optimize your portfolio while you sleep.
                  </p>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}