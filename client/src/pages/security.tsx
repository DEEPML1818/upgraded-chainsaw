import { Navigation } from '@/components/navigation';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';

export default function Security() {
  useGSAPInit();
  useGSAPAnimations();

  return (
    <div className="min-h-screen bg-slate-950">
      <EnhancedSectionBackgrounds />
      <Navigation />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="hero" className="liquid-section min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white slide-in-up">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security</span> First
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light fade-in">
              Bank-grade security meets blockchain innovation. Your assets are protected by military-grade encryption and battle-tested protocols.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center scale-in">
              <button className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 px-12 py-6 rounded-2xl font-bold text-xl text-white transition-all duration-500 transform hover:scale-105 shadow-2xl">
                Security Audit
              </button>
              <button className="group bg-transparent border-2 border-orange-400/60 hover:border-orange-400 px-12 py-6 rounded-2xl font-bold text-xl text-orange-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-orange-400/10 backdrop-blur-sm">
                Bug Bounty Program
              </button>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Features</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-red-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Non-Custodial Architecture</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Your private keys never leave your MetaMask wallet. We use a non-custodial approach where you maintain complete control over your assets at all times.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Your keys, your crypto - always</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>No central point of failure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Cannot be frozen or confiscated</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Hardware wallet compatibility</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Smart Contract Security</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    All smart contracts are audited by leading security firms. Multi-signature controls and time-locks protect against admin key compromises.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">🔍</span>
                      <span>Audited by CertiK and ConsenSys Diligence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">🔍</span>
                      <span>Multi-signature admin controls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">🔍</span>
                      <span>Time-locked emergency procedures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">🔍</span>
                      <span>Open-source code verification</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Infrastructure Security</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Enterprise-grade infrastructure with 99.9% uptime. Distributed across multiple regions with automatic failover and DDoS protection.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">⚡</span>
                      <span>AWS and Google Cloud infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">⚡</span>
                      <span>Multi-region deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">⚡</span>
                      <span>DDoS protection and WAF</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">⚡</span>
                      <span>24/7 monitoring and alerts</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🔐</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Data Encryption</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    All data is encrypted in transit and at rest using AES-256 encryption. Zero-knowledge architecture ensures we cannot access your private information.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">🔑</span>
                      <span>AES-256 encryption standard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">🔑</span>
                      <span>TLS 1.3 for data in transit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">🔑</span>
                      <span>Zero-knowledge proofs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">🔑</span>
                      <span>Perfect forward secrecy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Compliance & Certifications</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold text-white mb-4">SOC 2 Type II</h3>
                  <p className="text-gray-400 text-sm">
                    Certified for security, availability, processing integrity, confidentiality, and privacy controls.
                  </p>
                </div>
              </div>

              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h3 className="text-xl font-bold text-white mb-4">FinCEN Registered</h3>
                  <p className="text-gray-400 text-sm">
                    Money Services Business (MSB) registration with the Financial Crimes Enforcement Network.
                  </p>
                </div>
              </div>

              <div className="liquid-card text-center">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-green-500/20 backdrop-blur-sm">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-white mb-4">GDPR Compliant</h3>
                  <p className="text-gray-400 text-sm">
                    Full compliance with European General Data Protection Regulation for user privacy rights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bug Bounty Section */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-8 relative z-10">
            <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl border border-orange-500/20 p-12 text-center liquid-card scale-in">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Bug Bounty <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Program</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Help us keep FlowTech secure. Report vulnerabilities and earn rewards up to $100,000 for critical findings.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">$100,000</div>
                  <div className="text-gray-400 text-sm">Critical</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-2">$50,000</div>
                  <div className="text-gray-400 text-sm">High</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">$10,000</div>
                  <div className="text-gray-400 text-sm">Medium</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">$1,000</div>
                  <div className="text-gray-400 text-sm">Low</div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Submit Vulnerability
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}