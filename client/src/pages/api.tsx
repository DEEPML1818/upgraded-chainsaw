import { Navigation } from '@/components/navigation';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';

export default function API() {
  useGSAPInit();
  useGSAPAnimations();

  return (
    <div className="min-h-screen bg-slate-950">
      <EnhancedSectionBackgrounds />
      <Navigation />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="hero" className="liquid-section min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-green-950"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white slide-in-up">
              Developer <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">APIs</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light fade-in">
              Build the future of finance with our Web3-native APIs. RESTful endpoints, WebSocket streams, and comprehensive SDK support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center scale-in">
              <button className="group bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 px-12 py-6 rounded-2xl font-bold text-xl text-white transition-all duration-500 transform hover:scale-105 shadow-2xl">
                Get API Key
              </button>
              <button className="group bg-transparent border-2 border-green-400/60 hover:border-green-400 px-12 py-6 rounded-2xl font-bold text-xl text-green-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-green-400/10 backdrop-blur-sm">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">API Endpoints</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Wallet API</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Connect, authenticate, and interact with MetaMask wallets. Retrieve balances, transaction history, and execute transactions.
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                    <code className="text-green-400 text-sm">
                      GET /api/v1/wallet/balance/:address<br/>
                      POST /api/v1/wallet/transaction<br/>
                      GET /api/v1/wallet/history/:address
                    </code>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Multi-chain support (ETH, Polygon, BSC)</li>
                    <li>• Real-time balance updates</li>
                    <li>• Transaction fee estimation</li>
                  </ul>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">DeFi API</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Access decentralized finance protocols, swap tokens, manage liquidity positions, and track yield farming opportunities.
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                    <code className="text-purple-400 text-sm">
                      POST /api/v1/defi/swap<br/>
                      GET /api/v1/defi/pools<br/>
                      POST /api/v1/defi/liquidity/add
                    </code>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Uniswap, SushiSwap integration</li>
                    <li>• Price impact calculations</li>
                    <li>• Slippage protection</li>
                  </ul>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Payments API</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Process cryptocurrency payments, handle fiat conversions, and manage global transactions with minimal fees.
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                    <code className="text-cyan-400 text-sm">
                      POST /api/v1/payments/send<br/>
                      GET /api/v1/payments/rates<br/>
                      POST /api/v1/payments/convert
                    </code>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• 150+ countries supported</li>
                    <li>• Real-time exchange rates</li>
                    <li>• Merchant solutions</li>
                  </ul>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Analytics API</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Track portfolio performance, analyze DeFi positions, and get detailed insights into crypto investments and yields.
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                    <code className="text-orange-400 text-sm">
                      GET /api/v1/analytics/portfolio<br/>
                      GET /api/v1/analytics/yields<br/>
                      GET /api/v1/analytics/performance
                    </code>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Real-time portfolio tracking</li>
                    <li>• Yield farming analytics</li>
                    <li>• Risk assessment tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDK & Libraries */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SDKs & Libraries</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold text-white mb-4">JavaScript SDK</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Complete TypeScript SDK for web and Node.js applications. Full Web3 integration with type safety.
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                    <code className="text-blue-400 text-sm">
                      npm install @flowtech/sdk
                    </code>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Documentation
                  </button>
                </div>
              </div>

              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🐍</div>
                  <h3 className="text-xl font-bold text-white mb-4">Python SDK</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Python library for DeFi automation, analytics, and algorithmic trading strategies.
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                    <code className="text-purple-400 text-sm">
                      pip install flowtech-sdk
                    </code>
                  </div>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Documentation
                  </button>
                </div>
              </div>

              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🦀</div>
                  <h3 className="text-xl font-bold text-white mb-4">Rust SDK</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    High-performance Rust library for institutional trading and large-scale DeFi operations.
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                    <code className="text-green-400 text-sm">
                      cargo add flowtech-sdk
                    </code>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Quick Start</span>
              </h2>
            </div>

            <div className="liquid-card">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-gray-600/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Connect MetaMask & Get Balance</h3>
                
                <div className="bg-slate-900/70 p-6 rounded-xl overflow-x-auto">
                  <pre className="text-sm">
                    <code className="text-gray-300">
{`import { FlowTech } from '@flowtech/sdk';

// Initialize the SDK
const flowtech = new FlowTech({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

// Connect MetaMask wallet
const wallet = await flowtech.wallet.connect();
console.log('Connected:', wallet.address);

// Get wallet balance
const balance = await flowtech.wallet.getBalance(wallet.address);
console.log('ETH Balance:', balance.eth);

// Swap tokens via DeFi
const swap = await flowtech.defi.swap({
  from: 'ETH',
  to: 'USDC',
  amount: '1.0',
  slippage: 0.5
});

console.log('Swap completed:', swap.txHash);`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-8 relative z-10">
            <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl border border-blue-500/20 p-12 text-center liquid-card scale-in">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                API <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Rate Limits</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400 mb-2">Free Tier</div>
                  <div className="text-lg text-cyan-400 mb-2">1,000 requests/day</div>
                  <div className="text-gray-500 text-sm">Rate: 10 req/min</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">Pro Tier</div>
                  <div className="text-lg text-cyan-400 mb-2">100,000 requests/day</div>
                  <div className="text-gray-500 text-sm">Rate: 1,000 req/min</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">Enterprise</div>
                  <div className="text-lg text-cyan-400 mb-2">Unlimited requests</div>
                  <div className="text-gray-500 text-sm">Custom rate limits</div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get API Access
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}