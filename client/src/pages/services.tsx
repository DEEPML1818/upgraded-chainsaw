import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ServicesCyberBackground } from '@/components/services-cyber-background';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';
import { useGSAPScrollSmoother } from '@/hooks/use-gsap-scroll-smoother';

export default function Services() {
  useGSAPInit();
  useGSAPAnimations();
  useGSAPScrollSmoother();

  return (
    <div id="smooth-wrapper" className="min-h-screen bg-slate-950 flex flex-col relative">
      <ServicesCyberBackground />
      <Navigation />
      
      <div id="smooth-content" className="flex-1">
        <main className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="liquid-section min-h-screen flex items-center relative overflow-hidden pt-20 hero">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-red-950/40"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10 hero-content">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white slide-in-up">
              Managed IT <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light fade-in">
              Comprehensive IT support packages designed for businesses of all sizes. Choose the plan that fits your needs.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 services-grid">
              
              {/* Essential Plan - RM 80 */}
              <div className="liquid-card transform transition-transform hover:scale-105">
                <div className="glass-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Essential</h3>
                    <p className="text-gray-400 mb-6">Basic IT Support</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">RM 80<span className="text-2xl">/device</span></div>
                    <p className="text-gray-500">Small businesses with limited IT needs</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Unlimited remote troubleshooting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">OS-level support (Windows/Mac/Linux)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Antivirus installation & updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Printer & peripheral support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Software installation (basic apps)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Basic security patching (monthly)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Email account setup & troubleshooting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Monthly device health check report</span>
                    </li>
                  </ul>
                  
                  <div className="border-t border-gray-700 pt-6 mb-6">
                    <h4 className="font-semibold text-white mb-3">SLA & Limitations:</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div>• Next Business Day response</div>
                      <div>• Business hours only (no 24/7)</div>
                      <div>• Onsite support charged separately</div>
                      <div>• No advanced security features</div>
                      <div>• No backup solutions</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition-colors" data-testid="button-essential-plan">
                    Choose Essential
                  </button>
                </div>
              </div>

              {/* Standard Plan - RM 120 */}
              <div className="liquid-card transform transition-transform hover:scale-105">
                <div className="glass-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border-2 border-purple-500/40 backdrop-blur-sm h-full relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
                    <p className="text-gray-400 mb-6">SME IT Support</p>
                    <div className="text-4xl font-bold text-purple-400 mb-2">RM 120<span className="text-2xl">/device</span></div>
                    <p className="text-gray-500">SMEs needing proactive monitoring</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Everything in Essential plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Proactive endpoint monitoring (RMM)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Patch management (OS + 3rd party apps)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Advanced antivirus & endpoint protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Cloud/email service integration support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Quarterly IT health & security reports</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Limited onsite visits (2 free/month)</span>
                    </li>
                  </ul>
                  
                  <div className="border-t border-gray-700 pt-6 mb-6">
                    <h4 className="font-semibold text-white mb-3">SLA & Features:</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div>• 4-hour response time (business hrs)</div>
                      <div>• Business hours support</div>
                      <div>• Endpoint backup available as add-on</div>
                      <div>• Complex projects billed separately</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold transition-colors" data-testid="button-standard-plan">
                    Choose Standard
                  </button>
                </div>
              </div>

              {/* Premium Plan - RM 180 */}
              <div className="liquid-card transform transition-transform hover:scale-105">
                <div className="glass-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                    <p className="text-gray-400 mb-6">Enterprise IT Support</p>
                    <div className="text-4xl font-bold text-orange-400 mb-2">RM 180<span className="text-2xl">/device</span></div>
                    <p className="text-gray-500">High availability & compliance</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Everything in Standard plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">24/7 remote support coverage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Advanced endpoint security (EDR/XDR)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Endpoint backup included (daily)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Firewall & network monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Unlimited onsite support (Klang Valley)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Vendor management & IT policy advisory</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">Monthly compliance-grade reports</span>
                    </li>
                  </ul>
                  
                  <div className="border-t border-gray-700 pt-6 mb-6">
                    <h4 className="font-semibold text-white mb-3">Premium Features:</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div>• 1-hour response time (24/7)</div>
                      <div>• Preventive maintenance schedule</div>
                      <div>• Large IT projects quoted separately</div>
                      <div>• Hardware replacement costs not included</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors" data-testid="button-premium-plan">
                    Choose Premium
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Feature Comparison</span>
              </h2>
            </div>

            <div className="liquid-card transform transition-transform hover:scale-[1.02]">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-gray-600/20 backdrop-blur-sm overflow-x-auto">
                <table className="w-full text-left" data-testid="comparison-table">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="p-6 text-white font-semibold">Feature</th>
                      <th className="p-6 text-cyan-400 font-semibold text-center">RM 80 (Essential)<br/><span className="text-sm font-normal">Basic Plan</span></th>
                      <th className="p-6 text-purple-400 font-semibold text-center">RM 120 (Standard)<br/><span className="text-sm font-normal">SME Plan</span></th>
                      <th className="p-6 text-orange-400 font-semibold text-center">RM 180 (Premium)<br/><span className="text-sm font-normal">Enterprise Plan</span></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700/50">
                      <td className="p-4 font-medium">Remote Support</td>
                      <td className="p-4 text-center">Unlimited</td>
                      <td className="p-4 text-center">Unlimited</td>
                      <td className="p-4 text-center text-green-400">24/7 Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="p-4 font-medium">Onsite Support</td>
                      <td className="p-4 text-center text-red-400">Chargeable</td>
                      <td className="p-4 text-center">2 visits/month</td>
                      <td className="p-4 text-center text-green-400">Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="p-4 font-medium">SLA Response</td>
                      <td className="p-4 text-center">Next Business Day</td>
                      <td className="p-4 text-center">4 hours (business hrs)</td>
                      <td className="p-4 text-center text-green-400">1 hour (24/7)</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="p-4 font-medium">Antivirus</td>
                      <td className="p-4 text-center">Basic</td>
                      <td className="p-4 text-center">Advanced suite</td>
                      <td className="p-4 text-center text-green-400">Advanced + EDR</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="p-4 font-medium">Patching</td>
                      <td className="p-4 text-center">OS only</td>
                      <td className="p-4 text-center">OS + 3rd Party Apps</td>
                      <td className="p-4 text-center text-green-400">OS + 3rd Party + Advanced</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="p-4 font-medium">Backup</td>
                      <td className="p-4 text-center text-red-400">❌</td>
                      <td className="p-4 text-center text-yellow-400">Add-on</td>
                      <td className="p-4 text-center text-green-400">✅ Included</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="p-4 font-medium">Monitoring</td>
                      <td className="p-4 text-center text-red-400">❌</td>
                      <td className="p-4 text-center">Endpoint monitoring</td>
                      <td className="p-4 text-center text-green-400">Endpoint + Network</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="p-4 font-medium">Reports</td>
                      <td className="p-4 text-center">Monthly (basic)</td>
                      <td className="p-4 text-center">Quarterly (detailed)</td>
                      <td className="p-4 text-center text-green-400">Monthly (compliance-grade)</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="p-4 font-medium">Vendor Management</td>
                      <td className="p-4 text-center text-red-400">❌</td>
                      <td className="p-4 text-center text-red-400">❌</td>
                      <td className="p-4 text-center text-green-400">✅ Yes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">IT Policy Advisory</td>
                      <td className="p-4 text-center text-red-400">❌</td>
                      <td className="p-4 text-center text-red-400">❌</td>
                      <td className="p-4 text-center text-green-400">✅ Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Extra Services */}
        <section className="liquid-section py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-20 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-in-up">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Extra Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto fade-in">
                Optional upgrades and add-on services to enhance your IT support package
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 tech-cards">
              
              {/* 1. Endpoint Backup & Disaster Recovery */}
              <div className="tech-card transform transition-transform hover:scale-105">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-cyan-500/20 backdrop-blur-sm h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">Endpoint Backup & Disaster Recovery</h3>
                    <div className="text-2xl font-bold text-cyan-400 mb-3">RM 30–50<span className="text-sm">/device/month</span></div>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li>• Daily cloud backup of user files/folders</li>
                    <li>• Version history & file recovery</li>
                    <li>• Disaster recovery (bare-metal restore)</li>
                  </ul>
                </div>
              </div>

              {/* 2. Email & Collaboration Solutions */}
              <div className="tech-card transform transition-transform hover:scale-105">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">Email & Collaboration Solutions</h3>
                    <div className="text-2xl font-bold text-purple-400 mb-3">RM 20–40<span className="text-sm">/user/month</span></div>
                    <p className="text-xs text-gray-500">(licenses separate)</p>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li>• Microsoft 365 / Google Workspace setup & admin</li>
                    <li>• Email migration (POP3/IMAP → M365/Google)</li>
                    <li>• Anti-spam filtering & archiving</li>
                  </ul>
                </div>
              </div>

              {/* 3. Advanced Security Suite */}
              <div className="tech-card transform transition-transform hover:scale-105">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-red-500/20 backdrop-blur-sm h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">Advanced Security Suite</h3>
                    <div className="text-2xl font-bold text-red-400 mb-3">RM 50–80<span className="text-sm">/device/month</span></div>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li>• Endpoint Detection & Response (EDR/XDR)</li>
                    <li>• Ransomware protection</li>
                    <li>• Dark web monitoring & phishing simulation</li>
                  </ul>
                </div>
              </div>

              {/* 4. Network & Wi-Fi Management */}
              <div className="tech-card transform transition-transform hover:scale-105">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-green-500/20 backdrop-blur-sm h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">Network & Wi-Fi Management</h3>
                    <div className="text-2xl font-bold text-green-400 mb-3">RM 200–400<span className="text-sm">/month</span></div>
                    <p className="text-xs text-gray-500">(per site)</p>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li>• Router, firewall, switch monitoring</li>
                    <li>• Guest Wi-Fi setup with access policies</li>
                    <li>• VPN setup for remote workers</li>
                  </ul>
                </div>
              </div>

              {/* 5. Onsite IT Support Packs */}
              <div className="tech-card transform transition-transform hover:scale-105">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-yellow-500/20 backdrop-blur-sm h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">Onsite IT Support Packs</h3>
                    <div className="text-lg font-bold text-yellow-400 mb-3">
                      RM 100/hour<br/>
                      <span className="text-sm">OR RM 800/10-hour pack</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li>• For clients on RM 80 / RM 120 needing more visits</li>
                    <li>• Pre-purchase discounted blocks of hours</li>
                    <li>• (e.g., 10 hours/month)</li>
                  </ul>
                </div>
              </div>

              {/* 6. Server Support */}
              <div className="tech-card transform transition-transform hover:scale-105">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">Server Support</h3>
                    <div className="text-2xl font-bold text-blue-400 mb-3">RM 300–500<span className="text-sm">/server/month</span></div>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li>• Windows Server / Linux maintenance</li>
                    <li>• Active Directory & Group Policy management</li>
                    <li>• Patch management & monitoring</li>
                  </ul>
                </div>
              </div>

              {/* 7. Cloud Services Management */}
              <div className="tech-card transform transition-transform hover:scale-105">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-indigo-500/20 backdrop-blur-sm h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">Cloud Services Management</h3>
                    <div className="text-2xl font-bold text-indigo-400 mb-3">RM 300–800<span className="text-sm">/month</span></div>
                    <p className="text-xs text-gray-500">(depending on size)</p>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li>• Azure / AWS / Google Cloud resource monitoring</li>
                    <li>• Cloud cost optimization reports</li>
                    <li>• Cloud backup integration</li>
                  </ul>
                </div>
              </div>

              {/* 8. IT Compliance & Policy Advisory */}
              <div className="tech-card transform transition-transform hover:scale-105">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-pink-500/20 backdrop-blur-sm h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">IT Compliance & Policy Advisory</h3>
                    <div className="text-2xl font-bold text-pink-400 mb-3">RM 1,500–3,000<span className="text-sm">/project</span></div>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li>• Data protection policy (PDPA compliance in Malaysia)</li>
                    <li>• Security audits</li>
                    <li>• Employee IT training sessions (cybersecurity awareness)</li>
                  </ul>
                </div>
              </div>

              {/* 9. Hardware Procurement & Lifecycle Management */}
              <div className="tech-card transform transition-transform hover:scale-105">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-teal-500/20 backdrop-blur-sm h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">Hardware Procurement & Lifecycle Management</h3>
                    <div className="text-lg font-bold text-teal-400 mb-3">
                      5–10% fee<br/>
                      <span className="text-sm">OR RM 150/device setup</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li>• Recommend, source, and deliver laptops/PCs/network gear</li>
                    <li>• Install, configure, and asset-tagging</li>
                  </ul>
                </div>
              </div>

              {/* 10. Helpdesk After-Hours Support */}
              <div className="tech-card transform transition-transform hover:scale-105">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-orange-500/20 backdrop-blur-sm h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">Helpdesk After-Hours Support</h3>
                    <div className="text-2xl font-bold text-orange-400 mb-3">RM 300–500<span className="text-sm">/month</span></div>
                    <p className="text-xs text-gray-500">(per client account)</p>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li>• Extend RM 80 / RM 120 plans to cover nights/weekends</li>
                    <li>• 24/7 access to support hotline</li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="text-center mt-16">
              <p className="text-gray-400 mb-8">
                Want to customize your IT support package? Contact us to discuss which add-ons work best for your business.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105" data-testid="button-contact-custom">
                Get Custom Quote
              </button>
            </div>
          </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}