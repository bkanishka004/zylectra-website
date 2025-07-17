import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import zylectraLogo from '../assets/image.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border border-emerald-100/50' 
        : 'bg-transparent'
    } rounded-2xl`}>
      <div className="max-w-7xl mx-auto px-6 ${isScrolled ? 'py-3' : 'py-4'}">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img
                src={zylectraLogo}
                alt="Zylectra Logo"
                className="w-10 h-10 object-contain"
              />
            <span className="text-xl font-bold text-gray-900">Zylectra</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-emerald-50"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-emerald-50"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-emerald-50"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('careers')}
              className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-emerald-50"
            >
              Careers
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Early Access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-emerald-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-emerald-100/50 py-4 mt-4 rounded-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium text-left px-4 py-3 rounded-lg hover:bg-emerald-50 mx-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium text-left px-4 py-3 rounded-lg hover:bg-emerald-50 mx-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium text-left px-4 py-3 rounded-lg hover:bg-emerald-50 mx-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('careers')}
                className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium text-left px-4 py-3 rounded-lg hover:bg-emerald-50 mx-2"
              >
                Careers
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mx-4 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Early Access
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;