import { Navigation } from '@/components/navigation';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';

export default function Dashboard() {
  useGSAPInit();
  useGSAPAnimations();

  return (
    <div className="min-h-screen bg-slate-950">
      <EnhancedSectionBackgrounds />
      <Navigation />
      
      <main className="container mx-auto px-4">
        {/* Header */}
        <section className="liquid-section pt-32 pb-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white slide-in-up">
                  Web3 <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Dashboard</span>
                </h1>
                <p className="text-gray-300 mt-2 fade-in">Manage your crypto portfolio and DeFi positions</p>
              </div>
              
              <div className="flex items-center gap-4">
                <button data-metamask-button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  <span className="text-lg">🦊</span>
                  <span>0x1234...5678</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Overview */}
        <section className="liquid-section py-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-300 text-sm">Total Portfolio</h3>
                    <span className="text-purple-400">📊</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">$124,567.89</div>
                  <div className="text-green-400 text-sm">+12.5% (24h)</div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-300 text-sm">DeFi Yield</h3>
                    <span className="text-cyan-400">💰</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">8.7% APY</div>
                  <div className="text-cyan-400 text-sm">$342.15 earned</div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-orange-500/20 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-300 text-sm">Active Positions</h3>
                    <span className="text-orange-400">⚡</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">7</div>
                  <div className="text-orange-400 text-sm">3 pools, 4 stakes</div>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-green-500/20 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-300 text-sm">Available Cash</h3>
                    <span className="text-green-400">💵</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">$8,234.56</div>
                  <div className="text-green-400 text-sm">Ready to invest</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assets & Positions */}
        <section className="liquid-section py-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Asset Holdings */}
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-6">Asset Holdings</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">ETH</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Ethereum</div>
                          <div className="text-gray-400 text-sm">45.67 ETH</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">$89,234.56</div>
                        <div className="text-green-400 text-sm">+5.2%</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">BTC</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Bitcoin</div>
                          <div className="text-gray-400 text-sm">0.876 BTC</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">$28,456.78</div>
                        <div className="text-red-400 text-sm">-2.1%</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">MATIC</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Polygon</div>
                          <div className="text-gray-400 text-sm">1,234 MATIC</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">$2,468.90</div>
                        <div className="text-green-400 text-sm">+8.7%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DeFi Positions */}
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-6">DeFi Positions</h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-purple-400">🦄</span>
                          <span className="text-white font-semibold">Uniswap V3</span>
                        </div>
                        <span className="text-green-400 text-sm">+12.5% APY</span>
                      </div>
                      <div className="text-gray-400 text-sm mb-2">ETH/USDC Pool</div>
                      <div className="text-white font-semibold">$15,678.90</div>
                    </div>

                    <div className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400">🍣</span>
                          <span className="text-white font-semibold">SushiSwap</span>
                        </div>
                        <span className="text-green-400 text-sm">+18.2% APY</span>
                      </div>
                      <div className="text-gray-400 text-sm mb-2">WETH/USDT Pool</div>
                      <div className="text-white font-semibold">$8,234.56</div>
                    </div>

                    <div className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-orange-400">🔥</span>
                          <span className="text-white font-semibold">ETH 2.0 Staking</span>
                        </div>
                        <span className="text-green-400 text-sm">+5.8% APY</span>
                      </div>
                      <div className="text-gray-400 text-sm mb-2">32 ETH Staked</div>
                      <div className="text-white font-semibold">$64,567.89</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="liquid-section py-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8">Quick Actions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <button className="liquid-card group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🔄</div>
                  <h3 className="text-white font-semibold mb-2">Swap Tokens</h3>
                  <p className="text-gray-400 text-sm">Exchange crypto instantly</p>
                </div>
              </button>

              <button className="liquid-card group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">💧</div>
                  <h3 className="text-white font-semibold mb-2">Add Liquidity</h3>
                  <p className="text-gray-400 text-sm">Earn fees from trading</p>
                </div>
              </button>

              <button className="liquid-card group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏦</div>
                  <h3 className="text-white font-semibold mb-2">Lend Assets</h3>
                  <p className="text-gray-400 text-sm">Earn interest on deposits</p>
                </div>
              </button>

              <button className="liquid-card group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-green-500/20 hover:border-green-500/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-white font-semibold mb-2">View Analytics</h3>
                  <p className="text-gray-400 text-sm">Track performance</p>
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}