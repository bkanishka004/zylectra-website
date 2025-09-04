import React from 'react';
import { Award, GraduationCap, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
     
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="main-heading text-gray-900 mb-4 sm:mb-6">
            About Zylectra
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-emerald-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="sub-heading text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We're building the intelligent operating system for the electric mobility revolution. 
            Our flagship product, <span className="font-semibold text-emerald-600">Zylectra Orbit</span>, 
            is an AI-powered route and charging optimization platform designed for both personal EV owners 
            and fleet operators.
          </p>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
    
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up">
            <Award className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 mb-4" />
            <h3 className="pre-heading text-gray-900 mb-3 font-bold text-gray-800">
              Thapar Innovate
            </h3>
            <p className="sub-heading text-gray-600">
              Backed by <span className="font-medium">Thapar Innovate</span> for innovation and impact.
            </p>
            <div className="mt-4 flex items-center gap-2">
               <img 
                 src="src/assets/thapar innovate.jpg"   
                 alt="Thapar Innovate Logo"
                 className="w-8 h-8 object-contain rounded-lg"
               />
              <span className="text-xs text-gray-500">Thapar Innovate</span>
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 mb-4" />
            <h3 className="pre-heading text-gray-900 mb-3 font-bold text-gray-800">
              IHFC IIT Delhi
            </h3>
            <p className="sub-heading text-gray-600">
              Selected in the <span className="font-medium">READY Program</span> by IHFC IITD.
            </p>
            <br />
              
            <div className="mt-4 flex items-center gap-2">
              
              <img
                src="src/assets/ihfc.jpg"
                alt="IHFC IIT Delhi Logo"
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="text-xs text-gray-500">IHFC READY Program</span>
            </div>
          </div>

          
          <div 
            className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}
          >
            <Star className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 mb-4" />
            <h3 className="pre-heading text-gray-900 mb-3 font-bold text-gray-800">
              Thapar Open Day 2025
            </h3>
            <p className="sub-heading text-gray-600">
              Showcased as a pioneering <span className="font-medium">student-led EV initiative</span>.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <img
                src="src/assets/thapar.png"
                alt="Thapar Open Day Logo"
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="text-xs text-gray-500 ">Thapar Open Day</span>
            </div>
          </div>
        </div>

        
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-emerald-100 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="pre-heading text-emerald-800 font-medium">Recognized & Backed by Leaders</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
