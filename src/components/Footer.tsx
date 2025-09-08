import React from "react";
import { Zap, Brain, Linkedin, Mail, MapPin, Globe, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="footerGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-500"/>
              <circle cx="0" cy="0" r="1" fill="currentColor" className="text-emerald-500"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)"/>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative group">
                <img
      src="/image.png.jpg"
      alt="Decorative Footer Image"
      className="w-full max-w-md mx-auto object-contain"
    />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Zylectra
                </h3>
                <p className="text-emerald-400 text-sm font-medium">Charge your Vehicles, Not your Anxiety!</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl text-gray-300 font-semibold">
                Driving the Intelligence Behind EV Infrastructure
              </p>
              <p className="text-gray-400 leading-relaxed max-w-lg">
                Building the intelligent operating system for the electric mobility revolution. 
                From route optimization to energy intelligence, we're powering the future of 
                sustainable transportation.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8 pt-6 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">500+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Early Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">99.9%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Uptime</div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2 translate-x-3">
              <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-emerald-400" />
              </div>
              Contact
            </h4>
            
            <div className="space-y-5">
              <div className="group">
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mt-0.5">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">General</p>
                    <a 
                      href="mailto:zylectra.official@gmail.com" 
                      className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
                    >
                      zylectra.official@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mt-0.5">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Founder</p>
                    <a 
                      href="mailto:prabhsingh1407@gmail.com" 
                      className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
                    >
                      prabhsingh1407@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Location</p>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    Thapar Innovate (Venture Lab), TIET<br />
                    Patiala, Punjab, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Links Section */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-emerald-400" />
              </div>
              Connect
            </h4>
            
            <div className="space-y-6">
              {/* Social Links */}
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/zylectra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 bg-gray-800 hover:bg-emerald-600 rounded-xl transition-all duration-300 flex items-center justify-center overflow-hidden"
                    aria-label="LinkedIn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Linkedin className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-3">Quick Links</p>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm py-1"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm py-1"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="mailto:zylectra.official@gmail.com"
                    className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm py-1"
                  >
                    Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 Zylectra. All rights reserved.
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>Building the future of EV intelligence</span>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-emerald-600 rounded-full transition-all duration-300 text-sm font-medium"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;