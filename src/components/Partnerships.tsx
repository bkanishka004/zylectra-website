import React from 'react';
import { Building2, Truck, Car, Zap, Users, Target } from 'lucide-react';

const Partnerships = () => {
  const partners = [
    { icon: Building2, name: 'Fleet Solutions Inc', type: 'Fleet Partner' },
    { icon: Car, name: 'EV Motors Corp', type: 'OEM Partner' },
    { icon: Truck, name: 'LogiTech Fleet', type: 'Fleet Partner' },
    { icon: Zap, name: 'ChargePoint Pro', type: 'Charging Network' },
    { icon: Users, name: 'Smart Mobility', type: 'Technology Partner' },
    { icon: Target, name: 'GreenFleet Solutions', type: 'Fleet Partner' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Collaborating with Industry Leaders
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-emerald-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We're actively partnering with EV fleets and OEMs to build and test scalable, 
            intelligent infrastructure that transforms electric mobility operations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-emerald-50 p-4 sm:p-6 rounded-2xl border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:bg-emerald-100 transition-colors shadow-sm">
                <partner.icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2">
                {partner.name}
              </h3>
              <p className="text-xs text-gray-500">
                {partner.type}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-emerald-100 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-800 font-semibold text-sm sm:text-base">Active Partnerships</span>
            </div>
            <div className="text-emerald-700 text-xs sm:text-sm">
              Building the future of EV infrastructure together
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;