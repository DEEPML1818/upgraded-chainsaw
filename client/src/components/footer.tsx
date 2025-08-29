import { Link, useLocation } from 'wouter';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Globe } from 'lucide-react';

export function Footer() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content - GitHub Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <div className="text-2xl font-bold cursor-pointer transition-all duration-300 hover:text-white">
                Flow<span className="text-cyan-400">Tech</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enterprise-grade cybersecurity solutions protecting your digital infrastructure with AI-powered threat detection.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={16} />
              <span>Klang, Malaysia</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Services</h4>
            <nav className="space-y-3">
              <Link href="/services" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Managed IT Services
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Cybersecurity Solutions
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Cloud Infrastructure
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                IT Consulting
              </Link>
            </nav>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Solutions</h4>
            <nav className="space-y-3">
              <Link href="/solutions" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Network Security
              </Link>
              <Link href="/solutions" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Data Protection
              </Link>
              <Link href="/solutions" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Threat Detection
              </Link>
              <Link href="/solutions" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Infrastructure Security
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+60 3-3344-5566</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} />
                <span>hello@flowtech.my</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Globe size={16} />
                <span>www.flowtech.my</span>
              </div>
              <Link href="/contact" className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-4">
          <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-400">
            <span>© 2025 FlowTech Solutions. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
              <Link href="/security" className="hover:text-white transition-colors duration-200">Security</Link>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/flowtech-my" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/company/flowtech-my" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/flowtech_my" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}