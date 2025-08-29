import { useState } from 'react';
import { Link, useLocation } from 'wouter';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="nav liquid-nav fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold text-gradient cursor-pointer">
            klang<span className="text-cyan-400">Its</span>
          </div>
        </Link>

        <ul className={`nav-links hidden md:flex list-none gap-8 ${mobileMenuOpen ? 'nav-links-mobile' : ''}`}>
          <li>
            <Link
              href="/services"
              className={`font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${
                isActive('/services')
                  ? 'text-white border-b-2 border-cyan-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="nav-services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/solution"
              className={`font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${
                isActive('/solution')
                  ? 'text-white border-b-2 border-blue-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="nav-solutions"
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${
                isActive('/about')
                  ? 'text-white border-b-2 border-purple-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="nav-about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${
                isActive('/contact')
                  ? 'text-white border-b-2 border-green-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="nav-contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu button - Simplified */}
        <button
          className="md:hidden mobile-menu-btn p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="nav-links-mobile md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-gray-700/50 py-6 px-8">
          <li className="mb-4">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium transition-all duration-300 ${
                isActive('/services')
                  ? 'text-cyan-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="mobile-nav-services"
            >
              Services
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/solution"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium transition-all duration-300 ${
                isActive('/solution')
                  ? 'text-blue-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="mobile-nav-solutions"
            >
              Solutions
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium transition-all duration-300 ${
                isActive('/about')
                  ? 'text-purple-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="mobile-nav-about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-green-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="mobile-nav-contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}