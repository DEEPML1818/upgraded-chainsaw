import { Link, useLocation } from 'wouter';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#CCCCCC] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Company Logo - Left */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="text-2xl font-bold cursor-pointer transition-all duration-300 hover:scale-105">
                Flow<span className="text-cyan-400">Tech</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <nav className="flex flex-wrap justify-center gap-8">
            <Link 
              href="/"
              className={`font-medium transition-all duration-300 hover:text-white hover:scale-105 ${
                isActive('/') 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              data-testid="footer-home"
            >
              Home
            </Link>
            <Link 
              href="/services"
              className={`font-medium transition-all duration-300 hover:text-white hover:scale-105 ${
                isActive('/services') 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              data-testid="footer-services"
            >
              Services
            </Link>
            <Link 
              href="/about"
              className={`font-medium transition-all duration-300 hover:text-white hover:scale-105 ${
                isActive('/about') 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              data-testid="footer-about"
            >
              About
            </Link>
            <Link 
              href="/contact"
              className={`font-medium transition-all duration-300 hover:text-white hover:scale-105 ${
                isActive('/contact') 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              data-testid="footer-contact"
            >
              Contact
            </Link>
          </nav>

          {/* Social Media Icons - Right */}
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              data-testid="footer-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-sky-500 transition-all duration-300 hover:scale-110"
              data-testid="footer-twitter"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300 hover:scale-110"
              data-testid="footer-github"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Copyright Notice - Bottom Center */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2025 FlowTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}