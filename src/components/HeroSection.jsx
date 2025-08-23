import React from "react";
import right from "../assets/hero.png"; // ✅ background shapes

const HeroSection = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.heroContainer}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Support for Your <br /> Mental Well-being
          </h1>
          <p style={styles.heroParagraph}>
            Connect with licensed therapists, counselors, 
            and wellness coaches
            to support your journey.
          </p>
          <button style={styles.heroButton}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

// ✅ Styles with clamp() for responsiveness
const styles = {
  hero: {
    position: "relative",
    backgroundColor: "#f9f8f6",
    textAlign: "center",
    fontFamily: '"Bricolage Grotesque", sans-serif',
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    // padding: "20px",
  },
  heroContainer: {
    position: "relative",
    backgroundColor: "#f9e6d0",
    borderRadius: "40px",
    padding: "clamp(1rem, 4vw, 3rem)",
    width: "90%",
    maxWidth: "1200px",
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage: `url(${right})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: "0 10px",
  },
  heroContent: {
    maxWidth: "700px",
    textAlign: "center",
    padding: "clamp(1rem, 3vw, 2rem)",
  },
  heroTitle: {
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    color: "#00332c",
    fontWeight: "800",
    marginBottom: "clamp(0.8rem, 2vw, 1.2rem)",
    lineHeight: 1.3,
  },
  heroParagraph: {
    color: "#404040",
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    marginBottom: "clamp(1.5rem, 3vw, 2rem)",
    lineHeight: 1.6,
  },
  heroButton: {
    backgroundColor: "#00332c",
    color: "white",
    padding: "clamp(0.7rem, 1.5vw, 1rem) clamp(1.2rem, 3vw, 2rem)",
    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

// ✅ Inline hover style workaround
styles.heroButton[":hover"] = {
  backgroundColor: "#066f4d",
};

export default HeroSection;
