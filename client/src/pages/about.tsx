import { Navigation } from '@/components/navigation';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';

export default function About() {
  useGSAPInit();
  useGSAPAnimations();

  return (
    <div className="min-h-screen bg-slate-950">
      <EnhancedSectionBackgrounds />
      <Navigation />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="hero" className="liquid-section min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white slide-in-up">
              About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">FlowTech</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light fade-in">
              Bridging traditional finance with Web3 innovation. Built by crypto natives for the future of digital payments.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="liquid-card">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white slide-in-up">
                  <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Our Mission</span>
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed fade-in">
                  We're democratizing access to financial services by combining the security of traditional banking with the innovation of decentralized finance.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed fade-in">
                  Every user deserves financial sovereignty - the ability to control their own money, access global markets, and build wealth without traditional barriers.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="liquid-stat text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">2019</div>
                    <div className="text-gray-300">Founded</div>
                  </div>
                  <div className="liquid-stat text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                    <div className="text-gray-300">Countries</div>
                  </div>
                </div>
              </div>
              
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-white mb-6">Why Web3 Matters</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Self-Custody:</strong> Your private keys, your crypto - no third party can freeze your assets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Global Access:</strong> Send money anywhere in the world, 24/7, without banking restrictions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Higher Yields:</strong> DeFi protocols offer significantly higher returns than traditional savings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Transparency:</strong> All transactions on public blockchains - verifiable and auditable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Our Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                Crypto veterans, fintech experts, and blockchain developers building the future of money.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Alex Chen</h3>
                  <p className="text-purple-400 mb-4">CEO & Founder</p>
                  <p className="text-gray-400 text-sm">Former Goldman Sachs, Early Bitcoin adopter since 2011</p>
                </div>
              </div>

              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">👩‍💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Sarah Kim</h3>
                  <p className="text-cyan-400 mb-4">CTO</p>
                  <p className="text-gray-400 text-sm">Ex-Coinbase engineer, Smart contract security expert</p>
                </div>
              </div>

              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">👨‍🔬</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Marcus Johnson</h3>
                  <p className="text-orange-400 mb-4">Head of DeFi</p>
                  <p className="text-gray-400 text-sm">Uniswap contributor, Yield farming pioneer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Our Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="liquid-card text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
                <p className="text-gray-400 text-sm">Multi-signature wallets, smart contract audits, and security-first development</p>
              </div>
              
              <div className="liquid-card text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-white mb-3">Global Access</h3>
                <p className="text-gray-400 text-sm">Financial services for everyone, everywhere, without discrimination</p>
              </div>
              
              <div className="liquid-card text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-400 text-sm">Cutting-edge DeFi integration and Web3 technologies</p>
              </div>
              
              <div className="liquid-card text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-3">Transparency</h3>
                <p className="text-gray-400 text-sm">Open-source code, public audits, and clear communication</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}