import React from "react";
import { Zap, Brain, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Zap className="w-9 h-9 text-emerald-500" />
                <Brain className="w-5 h-5 text-emerald-400 absolute -top-1 -right-1" />
              </div>
              <h3 className="text-2xl font-poppins font-bold">Zylectra</h3>
            </div>
            <p className="text-gray-400 text-base mb-4 max-w-md">
              Driving the Intelligence Behind EV Infrastructure
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Building the intelligent operating system for the electric
              mobility revolution. From route optimization to energy
              intelligence, we're powering the future of sustainable
              transportation.
            </p>
          </div>

          
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:zylectra.official@gmail.com" className="text-sm">
                  zylectra.official@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:prabhsingh1407@gmail.com" className="text-sm">
                  prabhsingh1407@gmail.com
                </a>
              </div>
              <div className="text-gray-400 text-sm leading-relaxed">
                Thapar Innovate (Venture Lab), TIET <br />
                Patiala, Punjab, India
              </div>
            </div>
          </div>

         
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/zylectra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-emerald-600 p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2025 Zylectra. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="mailto:zylectra.official@gmail.com"
                className="hover:text-emerald-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
