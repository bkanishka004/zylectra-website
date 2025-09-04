import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-emerald-600 to-green-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-white animate-fade-in-up">
          {/* Main Heading */}
          <h2 className="main-heading mb-4 sm:mb-6 px-4">
            Get Early Access to Orbit
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-emerald-300 mx-auto mb-6 sm:mb-8"></div>

 
          <p className="sub-heading text-emerald-100 mb-8 sm:mb-12 leading-relaxed px-4">
            Join the exclusive early access list and be among the first to experience 
            the future of intelligent EV operations.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email address"
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-full text-gray-900 bg-white border-0 focus:ring-4 focus:ring-emerald-300 outline-none text-base sm:text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 text-sm sm:text-base"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added!
                  </>
                ) : (
                  <>
                    Join List
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-emerald-200 pre-heading">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              No spam, ever
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Exclusive updates
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Early access perks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
