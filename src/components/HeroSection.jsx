import React, { useState, useEffect } from "react";
// import community from "../assets/community.png"; // ✅ image from src/assets
import right from "../assets/hero.png";
function Cal() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 769);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
}
const HeroSection = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.heroContainer}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Support for Your Mental Well-being</h1>
          <p style={styles.heroText}>
            Connect with licensed therapists, counselors, and wellness coaches
            to support your journey.
          </p>
          <button style={styles.heroButton}>Get Started</button>

          {/* ✅ Image placed inside hero content, without changing UI */}
          {/* <img src={community} alt="Community" style={styles.heroImage} /> */}
          {/* <img src={right} alt="right" style={styles.rightImage} /> */}
        </div>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  hero: {
    position: "relative",
    backgroundColor: "#f9f8f6",
    textAlign: "center",
    fontFamily: '"Bricolage Grotesque", sans-serif',
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    overflowX: "hidden",
  },
  heroContainer: {
    position: "relative",
    backgroundColor: "#f9e6d0",
    borderRadius: "40px",
    padding: "20px",
    textAlign: "center",
    fontFamily: '"Inter", sans-serif',
    width: "90%",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${right})`,
    backgroundPosition:"center",
    backgroundSize: "cover",
  },
  heroContent: {
    maxWidth: "800px",
  },
  heroTitle: {
    fontSize: "2.8rem",
    color: "#00332c",
    fontWeight: "800",
    marginBottom: "20px",
  },
  heroText: {
    color: "#404040",
    fontSize: "1.1rem",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  heroButton: {
    backgroundColor: "#00332c",
    color: "white",
    padding: "12px 24px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  heroImage: {
    marginTop: "20px", // ✅ only adds space, doesn’t break layout
    maxWidth: "300px",
    height: "auto",
    borderRadius: "20px",
  },
};

// Hover effect workaround
styles.heroButton[":hover"] = {
  backgroundColor: "#066f4d",
};

export default HeroSection;




