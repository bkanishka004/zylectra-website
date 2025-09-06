import React from "react";
import { scrollToSection } from "../utils/scrollToSection";

const Section9 = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" className="text-emerald-600"/>
              <circle cx="0" cy="30" r="1" fill="currentColor" className="text-emerald-600"/>
              <circle cx="30" cy="0" r="1" fill="currentColor" className="text-emerald-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        {/* Main Headline with Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your EV is ready for the{" "}
            <span className="relative inline-block">
              <span className="text-emerald-600">upgrade</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            </span>. 
            <br />
            Are you?
          </h2>
        </div>

        {/* Content Cards */}
        <div className="space-y-6 mb-12">
          {/* Orbit Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-emerald-600 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-semibold text-emerald-700">Orbit</span>
              <span className="text-lg text-gray-700">is just the start.</span>
            </div>
          </div>

          {/* Zylectra OS Card */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg border border-emerald-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-lg text-gray-700">With your help, we're building</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <span className="text-xl font-bold text-gray-900">Zylectra OS</span>
              </div>
              <span className="text-lg text-gray-700">: the future of EVs.</span>
            </div>
          </div>

          {/* Call to Action Message */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg">Join now, and be remembered as one of the first.</span>
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
          <a
            onClick={() => scrollToSection("cta")}
            className="relative inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Join the Early Access Waitlist Now</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Timeline Indicator */}
        <div className="mt-12 flex items-center justify-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
            <span>Orbit (Now)</span>
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-emerald-600 to-gray-300"></div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
            <span>Zylectra OS (Future)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;