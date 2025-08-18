import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ServicesSection from './components/ServiceCard';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
    </div>
  );
}

export default App;
