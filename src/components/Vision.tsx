import React from 'react';
import { Quote } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8 sm:mb-12">
          <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-300 mx-auto mb-6 sm:mb-8 opacity-60" />
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-tight px-4">
            "From range anxiety to energy intelligence."
          </blockquote>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 px-4">
            Our Vision: The Zylectra OS
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-emerald-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 leading-relaxed mb-8 sm:mb-12 px-4">
            We envision Zylectra OS as the foundational software layer that powers every 
            electric vehicle on the road. Just as Android revolutionized mobile computing, 
            Zylectra will transform electric mobility through intelligent, interconnected systems.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-emerald-400/30">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Universal Integration</h3>
              <p className="text-emerald-100 text-sm sm:text-base">
                Seamless compatibility across all EV manufacturers and charging networks.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-emerald-400/30">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Predictive Intelligence</h3>
              <p className="text-emerald-100 text-sm sm:text-base">
                AI that learns and anticipates energy needs before they arise.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-emerald-400/30">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Autonomous Optimization</h3>
              <p className="text-emerald-100 text-sm sm:text-base">
                Self-managing systems that optimize without human intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;