import { useState } from 'react';
import { Link, useLocation } from 'wouter';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="nav fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          Flow<span className="text-cyan-400">Tech</span>
        </Link>
        
        <ul className={`nav-links hidden md:flex list-none gap-8 ${mobileMenuOpen ? 'nav-links-mobile' : ''}`}>
          <li>
            <Link 
              href="/about"
              className={`text-white/70 hover:text-white font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${location === '/about' ? 'text-cyan-400' : ''}`}
              data-testid="nav-about"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/services"
              className={`text-white/70 hover:text-white font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${location === '/services' ? 'text-cyan-400' : ''}`}
              data-testid="nav-services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/pricing"
              className={`text-white/70 hover:text-white font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${location === '/pricing' ? 'text-cyan-400' : ''}`}
              data-testid="nav-pricing"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link 
              href="/security"
              className={`text-white/70 hover:text-white font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${location === '/security' ? 'text-cyan-400' : ''}`}
              data-testid="nav-security"
            >
              Security
            </Link>
          </li>
          <li>
            <Link 
              href="/api"
              className={`text-white/70 hover:text-white font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${location === '/api' ? 'text-cyan-400' : ''}`}
              data-testid="nav-api"
            >
              API
            </Link>
          </li>
          <li>
            <Link 
              href="/help"
              className={`text-white/70 hover:text-white font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${location === '/help' ? 'text-cyan-400' : ''}`}
              data-testid="nav-help"
            >
              Help
            </Link>
          </li>
          <li>
            <Link 
              href="/contact"
              className={`text-white/70 hover:text-white font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${location === '/contact' ? 'text-cyan-400' : ''}`}
              data-testid="nav-contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/login"
            className="text-white/70 hover:text-white font-medium transition-all duration-300"
          >
            Login
          </Link>
          <Link 
            href="/dashboard"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Dashboard
          </Link>
        </div>
        
        <div 
          className={`mobile-menu-btn md:hidden flex flex-col cursor-pointer gap-1 ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="nav-links-mobile md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-gray-700/50 p-6">
          <ul className="space-y-4">
            <li>
              <Link 
                href="/about"
                className="block text-white/70 hover:text-white font-medium transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/services"
                className="block text-white/70 hover:text-white font-medium transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/pricing"
                className="block text-white/70 hover:text-white font-medium transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link 
                href="/security"
                className="block text-white/70 hover:text-white font-medium transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </Link>
            </li>
            <li>
              <Link 
                href="/api"
                className="block text-white/70 hover:text-white font-medium transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                API
              </Link>
            </li>
            <li>
              <Link 
                href="/help"
                className="block text-white/70 hover:text-white font-medium transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Help
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className="block text-white/70 hover:text-white font-medium transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="border-t border-gray-700 pt-4 mt-4">
              <Link 
                href="/login"
                className="block text-white/70 hover:text-white font-medium transition-all duration-300 mb-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/dashboard"
                className="block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
