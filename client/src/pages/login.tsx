import { Navigation } from '@/components/navigation';
import { EnhancedSectionBackgrounds } from '@/components/enhanced-section-backgrounds';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';

export default function Login() {
  useGSAPInit();
  useGSAPAnimations();

  return (
    <div className="min-h-screen bg-slate-950">
      <EnhancedSectionBackgrounds />
      <Navigation />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="hero" className="liquid-section min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950"></div>
          
          <div className="max-w-md mx-auto relative z-10">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm liquid-card scale-in">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4 slide-in-up">
                  Welcome Back
                </h1>
                <p className="text-gray-300 fade-in">
                  Connect your MetaMask wallet to access your Web3 finance dashboard
                </p>
              </div>

              {/* MetaMask Connection */}
              <div className="space-y-6">
                <button data-metamask-button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <span className="text-2xl">🦊</span>
                  <span>Connect with MetaMask</span>
                </button>
                
                <div className="text-center text-gray-400 text-sm">
                  <span>Don't have MetaMask? </span>
                  <a href="https://metamask.io" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
                    Install it here
                  </a>
                </div>
              </div>

              <div className="my-8 text-center">
                <div className="flex items-center">
                  <div className="flex-1 border-t border-gray-600"></div>
                  <span className="px-4 text-gray-400 text-sm">OR</span>
                  <div className="flex-1 border-t border-gray-600"></div>
                </div>
              </div>

              {/* Traditional Login */}
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-orange-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-orange-400 focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded" />
                    <span className="text-gray-300 text-sm">Remember me</span>
                  </label>
                  <a href="#" className="text-orange-400 hover:text-orange-300 text-sm transition-colors">
                    Forgot password?
                  </a>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-8 text-center">
                <span className="text-gray-400 text-sm">Don't have an account? </span>
                <a href="/signup" className="text-orange-400 hover:text-orange-300 transition-colors font-semibold">
                  Sign Up
                </a>
              </div>

              {/* Security Notice */}
              <div className="mt-8 p-4 bg-slate-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl">🔒</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Security First</h4>
                    <p className="text-gray-400 text-xs">
                      We recommend using MetaMask for enhanced security. Your private keys never leave your wallet with our non-custodial approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Below Login */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center liquid-card">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="text-white font-semibold mb-1">Non-Custodial</h3>
                <p className="text-gray-400 text-sm">Your keys, your crypto</p>
              </div>
              
              <div className="text-center liquid-card">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="text-white font-semibold mb-1">Instant Access</h3>
                <p className="text-gray-400 text-sm">Connect in seconds</p>
              </div>
              
              <div className="text-center liquid-card">
                <div className="text-3xl mb-2">🌐</div>
                <h3 className="text-white font-semibold mb-1">Multi-Chain</h3>
                <p className="text-gray-400 text-sm">ETH, Polygon, BSC</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}