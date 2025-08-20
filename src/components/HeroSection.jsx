import React from "react";
import community from "../assets/community.png";

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
};

// Hover effect (applied via JS since inline styles don’t support :hover)
styles.heroButton[":hover"] = {
  backgroundColor: "#066f4d",
};

export default HeroSection;
