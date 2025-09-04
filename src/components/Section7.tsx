
import React from "react";
import { scrollToSection } from "../utils/scrollToSection"; 

const Section7 = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-center relative inline-block">
  India’s first 100 EV pioneers.
  <span className="block w-60 h-1 bg-emerald-500 mx-auto mt-2 rounded"></span>
  <br/>
</h2>
       
        <p className="text-lg text-gray-700 mb-4">
          Join the founding group shaping Zylectra.
        </p>
        <p className="text-lg text-gray-600 mb-10">
  Not just early users… be early leaders.  
  Your feedback will help design the <span className="font-bold text-gray-800">future EV operating system</span>.
</p>

        <a
          onClick={() => scrollToSection("careers")}
          className="inline-block px-8 py-4 rounded-full text-white font-semibold 
                     bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:shadow-xl"
        >
          I Want Early Access
        </a>
      </div>
    </section>
  );
};

export default Section7;
