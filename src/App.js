import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ServicesSection from './components/ServiceCard';
import TestimonialsSection from './components/TestimonialsSection';
import ResourcesSection from './components/ResourcesSection';
import CommunitySection from './components/CommunitySection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
// import LogoSection from './components/logosection';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
      <TestimonialsSection />
      <ResourcesSection />
      <CommunitySection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
      {/* <LogoSection /> */}
      
    </div>
  );
} 

export default App;
