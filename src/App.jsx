import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import ServicesSection from "./components/ServiceCard";
import TestimonialsSection from "./components/TestimonialsSection";
import ResourcesSection from "./components/ResourcesSection";
import CommunitySection from "./components/CommunitySection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

// ✅ Ensure file names match exactly (login.jsx & register.jsx must exist in /src/Backend/)
import Login from "./Backend/login";
import Register from "./Backend/register";

import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Website */}
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
