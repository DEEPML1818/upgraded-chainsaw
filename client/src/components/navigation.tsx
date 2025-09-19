import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronDown } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  const isServicesActive = () => {
    return isActive('/it-services') || isActive('/managed-it-services') || isActive('/consulting');
  };

  const isSolutionsActive = () => {
    return isActive('/solution') || isActive('/business-solutions');
  };

  return (
    <nav className="nav liquid-nav fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold text-gradient cursor-pointer">
            klang<span className="text-cyan-400">Its</span>
          </div>
        </Link>

        <ul className={`nav-links hidden md:flex list-none gap-6 ${mobileMenuOpen ? 'nav-links-mobile' : ''}`}>
          {/* Services Dropdown */}
          <li className="relative group">
            <button
              className={`font-medium transition-all duration-300 relative hover:-translate-y-0.5 flex items-center gap-1 ${
                isServicesActive()
                  ? 'text-white border-b-2 border-blue-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="nav-services-dropdown"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-56 bg-slate-900/95 backdrop-blur-lg border border-gray-700/50 rounded-xl shadow-2xl transition-all duration-200 ${
                servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="py-2">
                <Link
                  href="/it-services"
                  className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-800/50 ${
                    isActive('/it-services') ? 'text-blue-400 bg-slate-800/30' : 'text-gray-300 hover:text-white'
                  }`}
                  data-testid="dropdown-it-services"
                >
                  IT Services
                  <div className="text-xs text-gray-500 mt-1">General IT support and services</div>
                </Link>
                <Link
                  href="/managed-it-services"
                  className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-800/50 ${
                    isActive('/managed-it-services') ? 'text-cyan-400 bg-slate-800/30' : 'text-gray-300 hover:text-white'
                  }`}
                  data-testid="dropdown-managed-services"
                >
                  Managed IT Services
                  <div className="text-xs text-gray-500 mt-1">Complete IT support packages</div>
                </Link>
                <Link
                  href="/consulting"
                  className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-800/50 ${
                    isActive('/consulting') ? 'text-indigo-400 bg-slate-800/30' : 'text-gray-300 hover:text-white'
                  }`}
                  data-testid="dropdown-consulting"
                >
                  IT Consulting
                  <div className="text-xs text-gray-500 mt-1">Strategic technology guidance</div>
                </Link>
              </div>
            </div>
          </li>
          
          {/* Solutions Dropdown */}
          <li className="relative group">
            <button
              className={`font-medium transition-all duration-300 relative hover:-translate-y-0.5 flex items-center gap-1 ${
                isSolutionsActive()
                  ? 'text-white border-b-2 border-purple-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="nav-solutions-dropdown"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Solutions Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-56 bg-slate-900/95 backdrop-blur-lg border border-gray-700/50 rounded-xl shadow-2xl transition-all duration-200 ${
                solutionsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <div className="py-2">
                <Link
                  href="/solution"
                  className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-800/50 ${
                    isActive('/solution') ? 'text-purple-400 bg-slate-800/30' : 'text-gray-300 hover:text-white'
                  }`}
                  data-testid="dropdown-solutions"
                >
                  IT Solutions
                  <div className="text-xs text-gray-500 mt-1">Automation and workflow solutions</div>
                </Link>
                <Link
                  href="/business-solutions"
                  className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-800/50 ${
                    isActive('/business-solutions') ? 'text-purple-400 bg-slate-800/30' : 'text-gray-300 hover:text-white'
                  }`}
                  data-testid="dropdown-business-solutions"
                >
                  Business Solutions
                  <div className="text-xs text-gray-500 mt-1">Interactive workflow diagrams</div>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link
              href="/about"
              className={`font-medium transition-all duration-300 relative hover:-translate-y-0.5 ${
                isActive('/about')
                  ? 'text-white border-b-2 border-green-400'
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
                  ? 'text-white border-b-2 border-orange-400'
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
          {/* Mobile Services Section */}
          <li className="mb-4">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full flex items-center justify-between font-medium transition-all duration-300 ${
                isServicesActive()
                  ? 'text-blue-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="mobile-nav-services"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Services Submenu */}
            {mobileServicesOpen && (
              <div className="mt-3 ml-4 space-y-3 border-l border-gray-700/50 pl-4">
                <Link
                  href="/it-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-medium transition-all duration-300 ${
                    isActive('/it-services')
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  data-testid="mobile-nav-it-services"
                >
                  IT Services
                </Link>
                <Link
                  href="/managed-it-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-medium transition-all duration-300 ${
                    isActive('/managed-it-services')
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  data-testid="mobile-nav-managed-services"
                >
                  Managed IT Services
                </Link>
                <Link
                  href="/consulting"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-medium transition-all duration-300 ${
                    isActive('/consulting')
                      ? 'text-indigo-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  data-testid="mobile-nav-consulting"
                >
                  IT Consulting
                </Link>
              </div>
            )}
          </li>
          
          {/* Mobile Solutions Section */}
          <li className="mb-4">
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className={`w-full flex items-center justify-between font-medium transition-all duration-300 ${
                isSolutionsActive()
                  ? 'text-purple-400'
                  : 'text-white/70 hover:text-white'
              }`}
              data-testid="mobile-nav-solutions"
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Solutions Submenu */}
            {mobileSolutionsOpen && (
              <div className="mt-3 ml-4 space-y-3 border-l border-gray-700/50 pl-4">
                <Link
                  href="/solution"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-medium transition-all duration-300 ${
                    isActive('/solution')
                      ? 'text-purple-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  data-testid="mobile-nav-it-solutions"
                >
                  IT Solutions
                </Link>
                <Link
                  href="/business-solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-medium transition-all duration-300 ${
                    isActive('/business-solutions')
                      ? 'text-purple-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  data-testid="mobile-nav-business-solutions"
                >
                  Business Solutions
                </Link>
              </div>
            )}
          </li>
          <li className="mb-4">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium transition-all duration-300 ${
                isActive('/about')
                  ? 'text-green-400'
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
                  ? 'text-orange-400'
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