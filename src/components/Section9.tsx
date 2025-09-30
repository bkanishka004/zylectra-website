import React from "react";
import { Zap, TrendingUp, ArrowRight, Clock, Star } from "lucide-react";

const Section9 = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="py-20 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden"
      aria-labelledby="future-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" className="text-emerald-600"/>
              <circle cx="0" cy="30" r="1" fill="currentColor" className="text-emerald-600"/>
              <circle cx="30" cy="0" r="1" fill="currentColor" className="text-emerald-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        {/* Main Headline with Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-6" aria-hidden="true">
            <Zap className="w-8 h-8 text-white" />
          </div>
          
          <h2 id="future-heading" className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your infrastructure is ready for {" "}
            <span className="relative inline-block">
              <span className="text-emerald-600">smart charging</span>
            </span>. Are you?
          </h2>
        </div>

        {/* Content Cards */}
        <div className="space-y-6 mb-12">
          {/* Zylectra charge Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center" aria-hidden="true">
                <div className="w-4 h-4 bg-emerald-600 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-semibold text-emerald-700">Zylectra Charge Platform</span>
              <span className="text-lg text-gray-700">is just the beginning.</span>
            </div>
          </div>

          {/* Zylectra OS Card */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg border border-emerald-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-lg text-gray-700">With your partnership, we're building</span>
            </div>
            <div className="flex items-center justify-center space-x-3 flex-wrap gap-2">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <TrendingUp className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span className="text-xl font-bold text-gray-900">Zylectra OS</span>
              </div>
              <span className="text-lg text-gray-700">: the AI-powered EV operating system.</span>
            </div>
          </div>

          {/* Call to Action Message */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center space-x-3 flex-wrap gap-2">
              <Clock className="w-6 h-6 text-emerald-400" aria-hidden="true" />
              <span className="text-lg">Join the early access program and be recognized as an industry pioneer.</span>
              <Star className="w-6 h-6 text-emerald-400" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-30 animate-pulse" aria-hidden="true"></div>
          <button
            onClick={() => scrollToSection("cta")}
            className="relative inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            aria-label="Join the early access waitlist for Zylectra EV charging platform"
          >
            <Zap className="w-6 h-6 group-hover:animate-pulse" aria-hidden="true" />
            <span>Join the Early Access Program Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>

        {/* Timeline Indicator */}
        <div className="mt-12 flex items-center justify-center space-x-4 text-sm text-gray-500" role="list" aria-label="Product roadmap timeline">
          <div className="flex items-center space-x-2" role="listitem">
            <div className="w-3 h-3 bg-emerald-600 rounded-full" aria-hidden="true"></div>
            <span>Zylectra Charge (Available Now)</span>
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-emerald-600 to-gray-300" aria-hidden="true"></div>
          <div className="flex items-center space-x-2" role="listitem">
            <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse" aria-hidden="true"></div>
            <span>Zylectra OS</span>
          </div>
        </div>

        {/* SEO-friendly text content */}
        <div className="sr-only">
          <h3>Zylectra EV Charging Management Platform</h3>
          <p>
            Transform your EV charging infrastructure with Zylectra's intelligent charging platform. 
            Our Orbit system provides real-time charging station management, predictive maintenance, 
            and dynamic pricing for charge point operators (CPOs) and EV fleet managers. Join our 
            early access program to optimize your charging network utilization, reduce downtime, 
            and maximize revenue per charger. Zylectra offers comprehensive EV charging solutions 
            including wait-time prediction, smart booking systems, and advanced analytics dashboards 
            for electric vehicle fleet optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section9;