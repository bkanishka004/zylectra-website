import React from 'react';
import { Plug, Brain, Gauge } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Plug,
      title: 'Connect',
      description: 'Integrate your EV or fleet with Zylectra Orbit through our simple API or mobile app.'
    },
    {
      icon: Brain,
      title: 'Optimize',
      description: 'Our AI analyzes real-time data to create the most efficient routes and charging strategies.'
    },
    {
      icon: Gauge,
      title: 'Operate',
      description: 'Execute optimized plans with continuous monitoring and dynamic adjustments.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            How Zylectra Orbit Works
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-emerald-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our three-step process transforms complex EV operations into intelligent, 
            automated efficiency.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden xl:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center px-32">
              <div className="w-32 h-0.5 bg-emerald-300"></div>
              <div className="w-32 h-0.5 bg-emerald-300"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6 sm:mb-8">
                  <div className="bg-emerald-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-emerald-200 text-emerald-800 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm mx-auto px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 p-6 sm:p-8 rounded-2xl border border-emerald-200 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              The Result: Seamless EV Operations
            </h3>
            <p className="text-gray-700 text-base sm:text-lg">
              Experience up to 30% improvement in route efficiency, reduced charging costs, 
              and eliminated range anxiety through intelligent automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;