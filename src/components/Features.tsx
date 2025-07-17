import React from 'react';
import { Navigation, Battery, Clock, CloudRain, BarChart3, DollarSign } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Navigation,
      title: 'Real-time Route Optimization',
      description: 'Dynamic routing based on traffic, charging availability, and energy consumption patterns.'
    },
    {
      icon: Battery,
      title: 'Battery-Health-Aware Charging',
      description: 'Intelligent charging strategies that extend battery life while optimizing performance.'
    },
    {
      icon: Clock,
      title: 'Charger Wait-Time Predictions',
      description: 'AI-powered forecasts of charging station availability and expected wait times.'
    },
    {
      icon: CloudRain,
      title: 'Terrain/Weather-Based Routing',
      description: 'Route adjustments considering elevation changes, weather conditions, and road types.'
    },
    {
      icon: BarChart3,
      title: 'Live Dashboard for Fleets',
      description: 'Real-time monitoring and management of entire fleet operations and performance.'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization & Analytics',
      description: 'Detailed insights into energy costs, efficiency metrics, and operational savings.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Key Features
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-emerald-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Zylectra Orbit combines cutting-edge AI with real-world data to deliver 
            the most intelligent EV optimization platform available.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-2xl border border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-emerald-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emerald-200 transition-colors">
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;