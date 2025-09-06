import React from "react";
import { scrollToSection } from "../utils/scrollToSection"; 

const Section8 = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-emerald-700 to-gray-800 leading-tight">
            Will you <span className="text-emerald-600 drop-shadow-sm">lead</span>
            <br className="md:hidden" />
            <span className="text-2xl md:text-4xl font-light text-gray-600"> or </span>
            <span className="text-gray-700">follow?</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Lead Option - Box + Button */}
          <div className="flex flex-col space-y-6">
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-3">Choose to Lead</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Join India's pioneering EV intelligence platform and shape the future of sustainable transportation.
                </p>
                <div className="mt-6 flex items-center justify-center text-emerald-600 font-semibold">
                  <span className="text-sm uppercase tracking-wider">Be a Pioneer</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button 
                onClick={() => scrollToSection("cta")} 
                className="group relative px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  I Choose to Lead
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Follow Option - Box + Button */}
          <div className="flex flex-col space-y-6">
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-600 mb-3">Choose to Follow</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  Remain in the comfort zone with traditional solutions and ongoing range anxiety.
                </p>
                <div className="mt-6 flex items-center justify-center text-gray-500 font-semibold">
                  <span className="text-sm uppercase tracking-wider">Status Quo</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button className="group relative px-12 py-5 bg-white border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50">
                <div className="flex items-center">
                  <svg className="mr-3 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  I'll Stay Behind
                  <svg className="ml-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-14 text-gray-600 text-lg font-medium">
          The choice is yours. The future is now.
        </p>
      </div>
    </section>
  );
};

export default Section8;