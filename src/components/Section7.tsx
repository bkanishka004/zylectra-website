import React from "react";
import { scrollToSection } from "../utils/scrollToSection";

const Section7 = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <pattern id="section7Pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-emerald-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#section7Pattern)"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Pioneer Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
          <div className="w-2 h-2 bg-emerald-200 rounded-full animate-pulse"></div>
          <span>Limited Spots Available</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          India's first{" "}
          <span className="relative inline-block">
            <span className="text-emerald-600">100 EV pioneers</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
          </span>
        </h2>

        {/* Subtext */}
        <div className="mb-8 space-y-2">
          <p className="text-xl text-gray-700 font-medium">
            Join the founding group shaping Zylectra.
          </p>
          <p className="text-lg text-gray-600">
            Not just early users… be{" "}
            <span className="font-bold text-emerald-700">early leaders</span>.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-emerald-200 shadow-lg max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Shape the Future</h3>
          </div>
          <p className="text-gray-700">
            Your feedback will help design the{" "}
            <span className="font-bold text-emerald-700">future EV operating system</span>.
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <button
            onClick={() => scrollToSection("cta")}
            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer group"
          >
            <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>I Want Early Access</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Pioneer Counter */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 bg-emerald-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
              >
                {i + 1}
              </div>
            ))}
            <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs text-gray-600">
              ...
            </div>
          </div>
          <span className="font-medium">
            <span className="text-emerald-600 font-bold">500</span> pioneers already joined
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section7;