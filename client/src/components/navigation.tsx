import { useState } from 'react';
import { useLenis } from '@/hooks/use-lenis';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(target);
    if (targetElement) {
      scrollTo(targetElement, { offset: -80 });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="nav fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient">
          Flow<span className="text-cyan-400">Tech</span>
        </div>
        
        <ul className={`nav-links hidden md:flex list-none gap-8 ${mobileMenuOpen ? 'nav-links-mobile' : ''}`}>
          <li>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-white/70 hover:text-white font-medium transition-all duration-300 relative hover:-translate-y-0.5"
              data-testid="nav-services"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#solutions" 
              onClick={(e) => handleNavClick(e, 'solutions')}
              className="text-white/70 hover:text-white font-medium transition-all duration-300 relative hover:-translate-y-0.5"
              data-testid="nav-solutions"
            >
              Solutions
            </a>
          </li>
          <li>
            <a 
              href="#technology" 
              onClick={(e) => handleNavClick(e, 'technology')}
              className="text-white/70 hover:text-white font-medium transition-all duration-300 relative hover:-translate-y-0.5"
              data-testid="nav-technology"
            >
              Technology
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-white/70 hover:text-white font-medium transition-all duration-300 relative hover:-translate-y-0.5"
              data-testid="nav-contact"
            >
              Contact
            </a>
          </li>
        </ul>
        
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
        <ul className="nav-links-mobile md:hidden">
          <li className="mb-4">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-white/70 hover:text-white font-medium transition-all duration-300"
              data-testid="mobile-nav-services"
            >
              Services
            </a>
          </li>
          <li className="mb-4">
            <a 
              href="#solutions" 
              onClick={(e) => handleNavClick(e, 'solutions')}
              className="text-white/70 hover:text-white font-medium transition-all duration-300"
              data-testid="mobile-nav-solutions"
            >
              Solutions
            </a>
          </li>
          <li className="mb-4">
            <a 
              href="#technology" 
              onClick={(e) => handleNavClick(e, 'technology')}
              className="text-white/70 hover:text-white font-medium transition-all duration-300"
              data-testid="mobile-nav-technology"
            >
              Technology
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-white/70 hover:text-white font-medium transition-all duration-300"
              data-testid="mobile-nav-contact"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
