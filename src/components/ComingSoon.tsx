import React from 'react';
import { Smartphone, Download, Zap, Battery, Car } from 'lucide-react';

const ComingSoon = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Launching Soon on Mobile
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-emerald-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Zylectra Orbit will soon be available on the App Store and Google Play. 
            Experience the power of AI-optimized EV operations in the palm of your hand.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* iPhone Mockup */}
          <div className="relative">
            <div className="bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-2 shadow-2xl hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <div className="bg-black rounded-[1.5rem] sm:rounded-[2.5rem] w-56 h-[460px] sm:w-64 sm:h-[520px] relative overflow-hidden">
                <div className="bg-white w-full h-full rounded-[1.25rem] sm:rounded-[2.25rem] relative overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-100 h-6 sm:h-8 flex items-center justify-between px-4 sm:px-6 text-xs text-gray-800">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Header */}
                  <div className="bg-emerald-600 px-4 sm:px-6 py-3 sm:py-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold text-sm sm:text-base">Zylectra Orbit</span>
                    </div>
                    <div className="text-xs sm:text-sm opacity-90">Route to Tesla Supercharger</div>
                  </div>
                  
                  {/* Map Area */}
                  <div className="bg-gray-100 h-64 sm:h-80 relative">
                    {/* Simulated Map */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-200">
                      {/* Route Line */}
                      <svg className="absolute inset-0 w-full h-full">
                        <path
                          d="M50 200 Q120 150 180 180 T250 160"
                          stroke="#10B981"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray="8,4"
                          className="animate-pulse"
                        />
                      </svg>
                      
                      {/* Location Pins */}
                      <div className="absolute top-8 sm:top-12 left-8 sm:left-12 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-bounce"></div>
                      <div className="absolute top-24 sm:top-32 right-12 sm:right-16 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute bottom-12 sm:bottom-16 left-16 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                      
                      {/* Charging Station Icon */}
                      <div className="absolute bottom-16 sm:bottom-20 right-8 sm:right-12 bg-white rounded-lg p-1.5 sm:p-2 shadow-lg">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="p-3 sm:p-4 bg-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm text-gray-600">ETA: 12 min</span>
                      <span className="text-xs sm:text-sm text-emerald-600 font-semibold">85% Battery</span>
                    </div>
                    <div className="bg-emerald-100 rounded-lg p-2 sm:p-3">
                      <div className="text-xs text-emerald-800">Optimal Route Found</div>
                      <div className="text-xs sm:text-sm font-semibold text-emerald-900">Save 8 min • 2 chargers available</div>
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black w-24 h-4 sm:w-32 sm:h-6 rounded-b-2xl"></div>
              </div>
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                App Store
              </div>
            </div>
          </div>

          {/* Android Mockup */}
          <div className="relative">
            <div className="bg-gray-800 rounded-[1.5rem] sm:rounded-[2rem] p-2 shadow-2xl hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-black rounded-[1rem] sm:rounded-[1.5rem] w-56 h-[460px] sm:w-64 sm:h-[520px] relative overflow-hidden">
                <div className="bg-white w-full h-full rounded-[0.75rem] sm:rounded-[1.25rem] relative overflow-hidden">
                  {/* Android Status Bar */}
                  <div className="bg-gray-900 h-5 sm:h-6 flex items-center justify-between px-3 sm:px-4 text-xs text-white">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full opacity-60"></div>
                    </div>
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <Battery className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </div>
                  </div>
                  
                  {/* App Header */}
                  <div className="bg-emerald-700 px-3 sm:px-4 py-2 sm:py-3 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-semibold text-xs sm:text-sm">Zylectra Orbit</span>
                    </div>
                    <div className="text-xs sm:text-sm opacity-90">Fleet Dashboard</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-3 sm:p-4 bg-gray-50 h-full">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                        <div className="text-xs text-gray-500">Active Vehicles</div>
                        <div className="text-base sm:text-lg font-bold text-emerald-600">24</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                        <div className="text-xs text-gray-500">Charging</div>
                        <div className="text-base sm:text-lg font-bold text-blue-600">6</div>
                      </div>
                    </div>
                    
                    {/* Vehicle List */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Car className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                            <span className="text-xs sm:text-sm font-medium">Vehicle #001</span>
                          </div>
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">En Route</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 sm:mt-1">Battery: 78% • ETA: 15 min</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Car className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                            <span className="text-xs sm:text-sm font-medium">Vehicle #002</span>
                          </div>
                          <span className="text-xs bg-blue-100 text-blue-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">Charging</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 sm:mt-1">Battery: 45% • Time left: 22 min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                Google Play
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-emerald-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-800 font-semibold text-base sm:text-lg">Coming Soon to Both Platforms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;