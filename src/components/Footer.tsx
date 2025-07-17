import React from 'react';
import { Zap, Brain, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="relative">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" />
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 absolute -top-1 -right-1" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Zylectra</h3>
            </div>
            <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6 max-w-md">
              Driving the Intelligence Behind EV Infrastructure
            </p>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              Building the intelligent operating system for the electric mobility revolution. 
              From route optimization to energy intelligence, we're powering the future of sustainable transportation.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">hello@zylectra.com</span>
              </div>
              <div className="text-gray-400 text-sm sm:text-base">
                <div>Venture Lab, Thapar Institute</div>
                <div>of Engineering & Technology</div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Follow Us</h4>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-emerald-600 p-2 sm:p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-emerald-600 p-2 sm:p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-gray-500 text-xs sm:text-sm">
              © 2025 Zylectra. All rights reserved.
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;