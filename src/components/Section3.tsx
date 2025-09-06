import React from "react";
import { scrollToSection } from "../utils/scrollToSection"; 
import { Car, BatteryCharging, Zap } from "lucide-react";

const SectionThree = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
          Zylectra is <span className="text-emerald-600">building the brain</span> of your EV.
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12 animate-fade-in opacity-80">
          Orbit is the <span className="font-bold text-gray-900">first layer</span>, a smart operating system that connects:
        </p>
       
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-xl hover:shadow-lg transition-all">
            <Car className="w-8 h-8 text-emerald-600" />
            <span className="text-gray-800 font-medium">Your routes </span>
          </div>
          <div className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-xl hover:shadow-lg transition-all">
            <BatteryCharging className="w-8 h-8 text-emerald-600" />
            <span className="text-gray-800 font-medium">Your charging </span>
          </div>
          <div className="flex items-center gap-3 bg-white shadow-md px-6 py-4 rounded-xl hover:shadow-lg transition-all">
            <Zap className="w-8 h-8 text-emerald-600" />
            <span className="text-gray-800 font-medium">Your energy usage </span>
          </div>
        </div>

       
        <div className="mb-16">
          <button onClick={() => scrollToSection("cta")}
           className="px-10 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg hover:shadow-emerald-400/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-bounce-slow">
            Reserve Your Spot — Be an Early Pioneer
            
          </button>
        </div>

       
   
<div className="grid sm:grid-cols-3 gap-10 mt-16">
  
  <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
    <div className="relative w-full h-64 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 mb-4">
      <img 
        src="src/assets/route.png"  
        alt="Route Planning Screenshot" 
        className="w-full h-full object-contain p-2 hover:scale-105 transition-transform"
      />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Route Planning</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Orbit plans routes that keep you confident — never worry about running out of charge.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
    <div className="relative w-full h-64 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 mb-4">
      <img 
        src="src/assets/charger.png" 
        alt="Smart Charging Screenshot" 
        className="w-full h-full object-contain p-2 hover:scale-105 transition-transform"
      />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Optimized Charging</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Smart charging recommendations ensure optimal stops along the way.
    </p>
  </div>

 
  <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
    <div className="relative w-full h-64 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 mb-4">
      <img 
        src="src/assets/optimize.png" 
        alt="Energy Tracking Screenshot" 
        className="w-full h-full object-contain p-2 hover:scale-105 transition-transform"
      />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Energy Insights</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Track and optimize your EV’s energy usage seamlessly.
    </p>
  </div>
</div>

</div> </section> ); }; export default SectionThree; 