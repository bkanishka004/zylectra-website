import React from 'react';
import { ArrowRight, Zap, Brain, Car, MapPin, Battery } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-green-50 to-white opacity-80"></div>
      
      {/* Animated EV Graphics */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
      
      {/* Floating EV Icons */}
      <div className="absolute top-32 right-20 animate-float">
        <Car className="w-8 h-8 text-emerald-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float-delayed">
        <Battery className="w-6 h-6 text-green-500 opacity-50" />
      </div>
      <div className="absolute top-1/2 right-32 animate-pulse">
        <MapPin className="w-5 h-5 text-emerald-500 opacity-40" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="relative">
            <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600" />
            <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-500 absolute -top-1 -right-1" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight">Zylectra</h1>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
          Powering the Intelligence Layer of{' '}
          <span className="text-emerald-600 relative">
            EV Infrastructure
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4">
          AI-powered optimization for electric vehicle charging, routing, and operations.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          className="group bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 sm:gap-3 mx-auto animate-fade-in-up"
        >
          Join the Early Access List
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Visual Elements */}
        <div className="mt-12 sm:mt-16 relative animate-fade-in-up">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xs sm:max-w-md mx-auto px-4">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-emerald-200 hover:scale-105 transition-transform duration-300">
              <div className="relative mx-auto mb-2 w-8 h-8">
                <MapPin className="w-8 h-8 text-emerald-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <div className="text-sm text-gray-600">Route</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-emerald-200 transform scale-105 sm:scale-110 hover:scale-110 sm:hover:scale-115 transition-transform duration-300">
              <div className="relative mx-auto mb-2 w-8 h-8">
                <Brain className="w-8 h-8 text-emerald-600 animate-pulse" />
                <div className="absolute inset-0 bg-emerald-200 rounded-full animate-ping opacity-30"></div>
              </div>
              <div className="text-sm text-gray-600">Optimize</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-emerald-200 hover:scale-105 transition-transform duration-300">
              <div className="relative mx-auto mb-2 w-8 h-8">
                <Zap className="w-8 h-8 text-emerald-600" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
              <div className="text-sm text-gray-600">Charge</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;