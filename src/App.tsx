import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Careers from './components/Careers';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import SectionTwo from './components/Section2';
import SectionThree from './components/Section3';
import SectionFive from './components/Section5';
import SectionSix from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree/>
      <About />
      <SectionFive/>
      <SectionSix/>
      <Section7/>
      <Section8/>
      <Section9/>  
      <Careers />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;