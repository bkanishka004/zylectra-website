import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Vision from './components/Vision';
import Partnerships from './components/Partnerships';
import ComingSoon from './components/ComingSoon';
import Careers from './components/Careers';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Vision />
      <Partnerships />
      <ComingSoon />
      <Careers />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;