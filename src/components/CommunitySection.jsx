import React, { useState, useEffect } from "react";
import communityImg from "../assets/community(3).png"; // ✅ imported from src/assets

const CommunitySection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    section: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f9f8f6",
      width: "100%",
      padding: isMobile ? "40px 0px" : "60px 0px",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderRadius: "25px",
      padding: isMobile ? "30px 20px" : "50px",
      width: "85%",
      // maxWidth: "1200px",
      boxSizing: "border-box",
      gap: isMobile ? "20px" : "40px",
      flexDirection: isMobile ? "column" : "row", // ✅ stack on mobile
      textAlign: isMobile ? "center" : "left",
    },
    text: {
      flex: 1,
      width: isMobile ? "100%" : "50%",
    },
    label: {
      fontSize: "12px",
      fontWeight: 600,
      color: "#1a2e35",
      textTransform: "uppercase",
      marginBottom: "12px",
      letterSpacing: "1px",
    },
    title: {
      fontSize: isMobile ? "24px" : "32px",
      fontWeight: 700,
      color: "#123d3a",
      marginBottom: "20px",
      lineHeight: 1.3,
    },
    subtitle: {
      fontSize: "16px",
      color: "#445556",
      lineHeight: 1.6,
      marginBottom: "30px",
    },
    button: {
      backgroundColor: "#0c3b36",
      color: "#fff",
      border: "none",
      padding: isMobile ? "12px 24px" : "14px 28px",
      borderRadius: "999px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
    },
    buttonHover: { backgroundColor: "#092f2a" },
    imageWrapper: {
      flex: 1,
      display: "flex",
      justifyContent: isMobile ? "center" : "flex-end",
      width: isMobile ? "100%" : "50%",
    },
    image: {
      width: isMobile ? "80%" : "100%", // ✅ shrink on mobile
      maxWidth: isMobile ? "300px" : "500px",
      height: "auto",
      objectFit: "contain",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left Content */}
        <div style={styles.text}>
          <p style={styles.label}>COMMUNITY</p>
          <h2 style={styles.title}>
            You’re Not Alone <br /> on This Journey
          </h2>
          <p style={styles.subtitle}>
            Connect with others, share experiences, <br />
            and find encouragement in a safe, <br />
            supportive space.
          </p>
          <button
            style={styles.button}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
          >
            Join The Community
          </button>
        </div>

        {/* Right Image */}
        <div style={styles.imageWrapper}>
          <img src={communityImg} alt="Community" style={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
