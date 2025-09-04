import React from "react";
import { Battery, MapPin, Network } from "lucide-react";

const SectionTwo = () => {
  const items = [
    {
      icon: <Battery className="w-10 h-10 text-emerald-600" />,
      text: "Charging feels uncertain and inconvenient.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-emerald-600" />,
      text: "Range anxiety limits your trips.",
    },
    {
      icon: <Network className="w-10 h-10 text-emerald-600" />,
      text: "No single system connects your EV life.",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
      
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
          EVs promised freedom.{" "}
          <span className="text-emerald-600">But owners still feel stuck.</span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          Right now, your EV is powerful hardware running on weak software.
          <br className="hidden sm:block" />
          And that’s why driving still feels stressful.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 mt-10">

  
  <div
    className="bg-gray-50 hover:bg-emerald-50 transition-all duration-500 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 opacity-0 animate-fade-up"
    style={{
      animationDelay: '0.4s',
      animationFillMode: "forwards",
      
    }}
  >
    <div className="mb-6 flex items-center justify-center h-12 w-12">
      
      {items[0].icon}
    </div>
    <p className="text-lg text-gray-700 font-medium">{items[0].text}</p>
  </div>

 
  <div
    className="bg-gray-50 hover:bg-emerald-50 transition-all duration-500 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 opacity-0 animate-fade-up"
    style={{
      animationDelay: '0.7s',
      animationFillMode: "forwards",
      marginTop: '-4px', 
    }}
  >
    <div className="mb-6 flex items-center justify-center h-12 w-12">
     
      {items[1].icon}
    </div>
    <br />
    <p className="text-lg text-gray-700 font-medium">{items[1].text}</p>
    
  </div>

  {/* Third Card */}
  <div
    className="bg-gray-50 hover:bg-emerald-50 transition-all duration-500 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 opacity-0 animate-fade-up"
    style={{
      animationDelay: '1.0s',
      animationFillMode: "forwards",
      // marginTop: '0', // adjust if needed
    }}
  >
    <div className="mb-6 flex items-center justify-center h-12 w-12">
      {/* Put third icon here */}
      {items[2].icon}
    </div>
    <p className="text-lg text-gray-700 font-medium">{items[2].text}</p>
  </div>

</div>


      </div>
    </section>
  );
};

export default SectionTwo;
