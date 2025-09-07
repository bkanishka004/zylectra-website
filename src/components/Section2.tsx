import React from "react";
import { Battery, MapPin, Network, Zap } from "lucide-react";

const SectionTwo = () => {
  const items = [
    {
      icon: <Battery className="w-12 h-12 text-red-500" />,
      text: "Charging feels uncertain and inconvenient.",
      bgGradient: "from-red-50 to-orange-50",
      borderColor: "border-red-200",
      glowColor: "shadow-red-100"
    },
    {
      icon: <MapPin className="w-12 h-12 text-amber-500" />,
      text: "Range anxiety limits your trips.",
      bgGradient: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-200",
      glowColor: "shadow-amber-100"
    },
    {
      icon: <Network className="w-12 h-12 text-blue-500" />,
      text: "No single system connects your EV life.",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      glowColor: "shadow-blue-100"
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184_/_0.15)_1px,transparent_0)] [background-size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Enhanced heading with better typography */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-6 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            The Reality Check
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in">
            EVs promised{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                freedom
              </span>
            </span>
            <span className="relative">
              <br />
              But owners still feel{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                stuck
              </span>
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
            Right now, your EV is{" "}
            <span className="font-semibold text-emerald-600">powerful hardware</span>{" "}
            running on{" "}
            <span className="font-semibold text-red-500">weak software</span>.
            <br className="hidden sm:block" />
            And that's why driving still feels stressful.
          </p>
        </div>

        {/* Enhanced cards with better spacing and effects */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`
                relative group bg-gradient-to-br ${item.bgGradient} 
                hover:shadow-2xl hover:${item.glowColor} 
                transition-all duration-700 ease-out
                rounded-3xl border-2 ${item.borderColor}
                p-8 flex flex-col items-center justify-center text-center 
                transform hover:-translate-y-4 hover:scale-105
                opacity-0 animate-fade-up backdrop-blur-sm
                min-h-[280px] cursor-pointer
              `}
              style={{
                animationDelay: `${0.5 + index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* Card background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon container with enhanced styling */}
              <div className="relative mb-8 p-4 bg-white/50 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 rounded-2xl"></div>
                <div className="relative flex items-center justify-center">
                  {item.icon}
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-current rounded-full opacity-20 animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-current rounded-full opacity-30 animate-ping" style={{animationDelay: '1s'}}></div>
              </div>

              {/* Enhanced text with better typography */}
              <p className="relative text-xl font-semibold text-gray-800 leading-relaxed tracking-wide">
                {item.text}
              </p>

              {/* Subtle bottom accent */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-current to-transparent rounded-full opacity-20"></div>
            </div>
          ))}
        </div>

        {/* Call-to-action hint */}
        <div className="mt-20 opacity-0 animate-fade-in [animation-delay:1.5s] [animation-fill-mode:forwards]">
          <p className="text-lg text-gray-500 mb-6">
            But what if there was a better way?
          </p>
          <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-transparent mx-auto animate-bounce"></div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        
        .animate-expand {
          animation: expand 1s ease-out forwards;
          transform-origin: left;
        }
      `}</style>
    </section>
  );
};

export default SectionTwo;