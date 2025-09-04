
import React from "react";

const SectionFive: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          More charging stations won’t solve EV pain.
        </h2>
        <p className="text-xl text-gray-700 mb-4">
          The real problem isn’t <span className="font-semibold ">infrastructure</span>.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          It’s <span className="font-semibold text-green-600">intelligence</span>.
        </p>
        <p className="text-xl text-gray-900 font-medium">
          Without a brain, EVs remain dumb machines.  
          <br />
          <span className=" font-bold">Zylectra</span> is that brain.  
          Orbit is just where it starts.
        </p>
      </div>
    </section>
  );
};

export default SectionFive;
