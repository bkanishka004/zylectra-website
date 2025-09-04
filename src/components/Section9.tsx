import React from "react";
import { scrollToSection } from "../utils/scrollToSection"; 

const Section9 = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-4xl mx-auto text-center px-6">
       
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Your EV is ready for the{" "}
          <span className="text-emerald-600">upgrade</span>. Are you?
        </h2>
<br/>
        
        <div className="mt-6 space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            <span className="font-semibold text-emerald-700">Orbit</span> is just
            the start.
          </p>
          <p>
            With your help, we’re building{" "}
            <span className="font-semibold text-gray-900">Zylectra OS</span>: the
            future of EVs.
          </p>
          <p>
            Join now, and be remembered as one of the first.
          </p>
        </div>

        <div className="mt-10">
          <a
            onClick={() => scrollToSection("careers")}
            className="inline-block px-8 py-4 rounded-2xl bg-emerald-600 text-white font-semibold text-lg shadow-lg hover:bg-emerald-700 hover:scale-105 transition-transform"
          >
            Join the Early Access Waitlist Now 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section9;
