import React, { useState, useEffect } from "react";

const ResourcesSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resources = [
    {
      title: "Articles & Guides",
      description: "Practical tips on stress management, mindfulness, and emotional resilience.",
      buttonColor: "#facc15",
    },
    {
      title: "Meditation & Relaxation",
      description: "Audio sessions for guided meditation and deep breathing exercises.",
      buttonColor: "#34d399",
    },
    {
      title: "Webinars & Workshops",
      description: "Live and recorded sessions with mental health professionals.",
      buttonColor: "#f9a8d4",
    },
  ];

  const styles = {
    section: {
      backgroundColor: "#f9f9f7",
      padding: "clamp(30px, 5vw, 60px) 20px",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
    },
    container: {
      display: "flex",
      width: "min(100%, 600px)",
      flexDirection: "column",
      justifyContent: "center",
      margin: "0 auto",
    },
    smallHeading: {
      fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)",
      fontWeight: 600,
      letterSpacing: "1px",
      color: "#4b5563",
      marginBottom: "10px",
      textTransform: "uppercase",
    },
    mainHeading: {
      fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
      fontWeight: "800",
      color: "#00332c",
      marginBottom: "20px",
      margin: "0 auto",
      lineHeight: 1.3,
    },
    subText: {
      fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
      color: "#404040",
      lineHeight: 1.6,
      maxWidth: "600px",
      margin: "0 auto 20px",
    },
    grid: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "clamp(15px, 3vw, 25px)",
      width: "min(100%, 1000px)",
      margin: "0 auto",
    },
    card: {
      background: "#ffffff",
      borderRadius: "20px",
      padding: "clamp(20px, 4vw, 30px) clamp(15px, 3vw, 20px)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      flex: 1,
    },
    cardTitle: {
      fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
      fontWeight: 700,
      color: "#00332c",
      marginBottom: "10px",
    },
    cardDesc: {
      fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
      color: "#404040",
      marginBottom: "20px",
      lineHeight: 1.5,
      maxWidth: "320px",
    },
    cardBtn: {
      border: "none",
      padding: "10px 24px",
      borderRadius: "999px",
      fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
      fontWeight: 600,
      color: "#fff",
      cursor: "pointer",
      transition: "transform 0.2s ease",
      minWidth: "120px",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <p style={styles.smallHeading}>EXPLORE & LEARN</p>
        <h2 style={styles.mainHeading}>Resources for Your Well-being</h2>
        <p style={styles.subText}>
          Explore expert insights, self-care guides, and tools to support your mental health.
        </p>
      </div>

      <div style={styles.grid}>
        {resources.map((res, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{res.title}</h3>
            <p style={styles.cardDesc}>{res.description}</p>
            <button
              style={{
                ...styles.cardBtn,
                backgroundColor: res.buttonColor,
              }}
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;
