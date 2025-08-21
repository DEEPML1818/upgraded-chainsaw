import { useState, useEffect } from 'react';
import { useLenis } from '@/hooks/use-lenis';

export function LiquidNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollTo } = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(target);
    if (targetElement) {
      scrollTo(targetElement, { offset: -80 });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`liquid-nav fixed top-0 left-0 right-0 z-50 py-6 px-8 transition-all duration-700 ${scrolled ? 'py-4 backdrop-blur-2xl bg-slate-900/30 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo text-3xl font-bold">
          <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">Flow</span>
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Tech</span>
        </div>
        
        <ul className={`nav-links hidden md:flex list-none gap-12 ${mobileMenuOpen ? 'nav-links-mobile' : ''}`}>
          {[
            { label: 'Services', target: 'services' },
            { label: 'Solutions', target: 'solutions' },
            { label: 'Technology', target: 'technology' },
            { label: 'Contact', target: 'contact' }
          ].map((item, index) => (
            <li key={index}>
              <a 
                href={`#${item.target}`}
                onClick={(e) => handleNavClick(e, item.target)}
                className="relative text-white/80 hover:text-white font-medium text-lg transition-all duration-500 group"
                data-testid={`nav-${item.target}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 group-hover:w-full transition-all duration-500"></span>
              </a>
            </li>
          ))}
        </ul>
        
        <div 
          className={`mobile-menu-btn md:hidden flex flex-col cursor-pointer gap-1.5 ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-2xl border-t border-white/10 p-8">
          <ul className="space-y-6">
            {[
              { label: 'Services', target: 'services' },
              { label: 'Solutions', target: 'solutions' },
              { label: 'Technology', target: 'technology' },
              { label: 'Contact', target: 'contact' }
            ].map((item, index) => (
              <li key={index}>
                <a 
                  href={`#${item.target}`}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className="text-white/80 hover:text-white font-medium text-xl transition-colors duration-300"
                  data-testid={`mobile-nav-${item.target}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}