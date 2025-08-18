import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ServicesSection from './components/ServiceCard';
import TestimonialsSection from './components/TestimonialsSection';
import ResourcesSection from './components/ResourcesSection';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
      <TestimonialsSection />
      <ResourcesSection />
    </div>
  );
}

export default App;
