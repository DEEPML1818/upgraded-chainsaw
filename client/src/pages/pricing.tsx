import { Navigation } from '@/components/navigation';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';

export default function Pricing() {
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
              Simple <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light fade-in">
              No hidden fees. No monthly subscriptions. Pay only for what you use.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Personal Plan */}
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Personal</h3>
                    <p className="text-gray-400 mb-6">For individual crypto users</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">Free</div>
                    <p className="text-gray-500">+ transaction fees</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">MetaMask wallet connection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Multi-chain asset management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Basic DeFi trading</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">NFT portfolio view</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Standard support</span>
                    </li>
                  </ul>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="font-semibold text-white mb-3">Transaction Fees:</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex justify-between">
                        <span>Crypto payments</span>
                        <span className="text-cyan-400">0.1%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DeFi trading</span>
                        <span className="text-cyan-400">0.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cross-chain bridges</span>
                        <span className="text-cyan-400">0.3%</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold mt-8 transition-colors">
                    Get Started Free
                  </button>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border-2 border-purple-500/40 backdrop-blur-sm h-full relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                    <p className="text-gray-400 mb-6">For serious DeFi traders</p>
                    <div className="text-4xl font-bold text-purple-400 mb-2">$29<span className="text-2xl">/mo</span></div>
                    <p className="text-gray-500">+ reduced fees</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Everything in Personal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Advanced trading tools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Automated yield farming</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Portfolio analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Priority support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">API access</span>
                    </li>
                  </ul>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="font-semibold text-white mb-3">Transaction Fees:</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex justify-between">
                        <span>Crypto payments</span>
                        <span className="text-purple-400">0.05%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DeFi trading</span>
                        <span className="text-purple-400">0.25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cross-chain bridges</span>
                        <span className="text-purple-400">0.15%</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold mt-8 transition-colors">
                    Start Pro Trial
                  </button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                    <p className="text-gray-400 mb-6">For institutions & businesses</p>
                    <div className="text-4xl font-bold text-orange-400 mb-2">Custom</div>
                    <p className="text-gray-500">Volume-based pricing</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Everything in Pro</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Institutional custody</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">White-label solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">24/7 phone support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Custom integrations</span>
                    </li>
                  </ul>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="font-semibold text-white mb-3">Features:</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div>• Multi-signature wallets</div>
                      <div>• Compliance & reporting</div>
                      <div>• Treasury management</div>
                      <div>• Risk management tools</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold mt-8 transition-colors">
                    Contact Sales
                  </button>
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
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">FAQ</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-gray-600/20 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-3">Are there any hidden fees?</h3>
                  <p className="text-gray-300">
                    No hidden fees. All our pricing is transparent. You only pay the transaction fees shown above plus any network gas fees required by the blockchain.
                  </p>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-gray-600/20 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-3">Can I change plans anytime?</h3>
                  <p className="text-gray-300">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any remaining subscription time.
                  </p>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-gray-600/20 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-3">Do you offer refunds?</h3>
                  <p className="text-gray-300">
                    We offer a 30-day money-back guarantee for Pro subscriptions. Transaction fees are non-refundable as they cover blockchain network costs.
                  </p>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-gray-600/20 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-3">Is my crypto safe?</h3>
                  <p className="text-gray-300">
                    Yes. We use non-custodial architecture - your crypto stays in your MetaMask wallet, controlled by your private keys. We never have access to your funds.
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