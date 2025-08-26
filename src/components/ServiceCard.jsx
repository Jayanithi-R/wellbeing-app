import React, { useState, useEffect } from "react";
import img from "../assets/community(2).png";
import img2 from "../assets/extraImage.png";

const ServicesSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    section: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#f9f9f7",
      padding: "clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem)",
      textAlign: "center",
    },
    subheading: {
      textTransform: "uppercase",
      fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
      color: "#4b5563",
      letterSpacing: "1px",
      fontFamily: "Bricolage Grotesque",
    },
    heading: {
      fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
      fontWeight: "700",
      color: "#0f3d36",
      marginBottom: "clamp(0.5rem, 1.2vw, 1rem)",
    },
    description: {
      fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
      color: "#4b5563",
      marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "clamp(1rem, 2vw, 1.5rem)",
      justifyContent: "center",
      alignItems: "stretch",
      width: "90%",
      margin: "0 auto clamp(2rem, 4vw, 3rem)",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "clamp(1.5rem, 3vw, 2rem)",
      borderRadius: "20px",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    },
    cardAlt: {
      backgroundColor: "#fdecd8",
      padding: "clamp(1.5rem, 3vw, 2rem)",
      borderRadius: "20px",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      position: "relative",
      overflow: "hidden",
    },
    cardTitle: {
      fontSize: "22px",
      fontWeight: "600",
      color: "#0f3d36",
      marginBottom: "clamp(0.5rem, 1vw, 0.8rem)",
    },
    cardText: {
      fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
      color: "#374151",
      marginBottom: "clamp(1rem, 2vw, 1.5rem)",
      maxWidth: "95%",
      lineHeight: 1.6,
    },
    button: {
      border: "1px solid #0f3d36",
      padding: "clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.25rem)",
      borderRadius: "30px",
      background: "transparent",
      fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
      fontWeight: "500",
      cursor: "pointer",
      alignSelf: "flex-start",
      transition: "all 0.3s ease",
        color: "#0f3d36",
      
    },
    buttonHover: {
      background: "#0f3d36",
      color: "#fff",
    },
    buttonFilled: {
      border: "none",
      padding: "clamp(0.6rem, 1.2vw, 0.9rem) clamp(1.2rem, 2.5vw, 1.5rem)",
      borderRadius: "30px",
      background: "#0f3d36",
      color: "#291616ff",
      fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
      fontWeight: "500",
      cursor: "pointer",
      alignSelf: "flex-start",
    },
    fullCard: {
      gridColumn: "1 / -1",
      backgroundColor: "#ffffff",
      padding: "clamp(1.5rem, 3vw, 2rem)",
      borderRadius: "20px",
      textAlign: "left",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      width: "85%",
      margin: "0 auto",
      alignItems: "center",
      gap: "2rem",
    },
    fullCardContent: {
      width: isMobile ? "100%" : "50%",
      display: "flex",
      flexDirection: "column",
    },
    illustration: {
      objectFit: "contain",
      width: isMobile ? "100%" : "50%",
      height: "auto",
    },
    // ✅ Responsive decorative image
    decorImage: {
      position: "absolute",
      top: "clamp(10px, 2vw, 20px)",
      right: "clamp(10px, 2vw, 20px)",
      width: "clamp(60px, 15vw, 120px)", // scales between 60px → 120px
      height: "auto",
      pointerEvents: "none", // doesn’t block clicks
    },
  };

  return (
    <section style={styles.section}>
      <div>
        <p style={styles.subheading}>SERVICES</p>
        <h2 style={styles.heading}>Your Path to Well-being</h2>
        <p style={styles.description}>
          Discover expert guidance for a healthier mind and balanced life.
        </p>
      </div>

      {/* Two cards */}
      <div style={styles.grid}>
        {/* Mindfulness card with right-side image */}
        <div style={styles.cardAlt}>
          <h3 style={styles.cardTitle}>Mindfulness & Meditation</h3>
          <p style={styles.cardText}>
            Guided meditation sessions and stress management techniques.
          </p>

          {/* Decorative image positioned right */}
          <img src={img2} alt="decor" style={styles.decorImage} />

          <button
            style={styles.button}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
          >
            Learn More
          </button>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>One-on-One Therapy</h3>
          <p style={styles.cardText}>
            Virtual and in-person therapy sessions with licensed professionals.
          </p>
          <button
            style={styles.button}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Full card */}
      <div style={styles.fullCard}>
        <div style={styles.fullCardContent}>
          <h3 style={styles.cardTitle}>Wellness Coaching</h3>
          <p style={styles.cardText}>
            Personalized guidance to help you build healthier habits, manage
            stress, and achieve balance in all areas of your life. <br />
            <br />
            Our wellness coaches support you in creating sustainable routines for
            mental, emotional, and physical well-being.
          </p>
          <button style={styles.buttonFilled}>Learn More</button>
        </div>
        <img style={styles.illustration} src={img} alt="Wellness Illustration" />
      </div>
    </section>
  );
};

export default ServicesSection;
