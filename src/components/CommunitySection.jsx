import React from "react";
import communityImg from "../assets/community(2).png"; // ✅ imported from src/assets

const CommunitySection = () => {
  const styles = {
    section: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f9f9f7",
      padding: "60px 20px",
      fontFamily: "'Inter', sans-serif",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderRadius: "25px",
      padding: "50px",
      maxWidth: "1100px",
      width: "100%",
      boxSizing: "border-box",
      gap: "40px",
      flexWrap: "wrap", // ✅ responsive fallback
    },
    text: { flex: 1, maxWidth: "500px" },
    label: {
      fontSize: "12px",
      fontWeight: 600,
      color: "#1a2e35",
      textTransform: "uppercase",
      marginBottom: "12px",
      letterSpacing: "1px",
    },
    title: {
      fontSize: "32px",
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
      padding: "14px 28px",
      borderRadius: "999px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
    },
    buttonHover: { backgroundColor: "#092f2a" }, // ✅ for JS hover handling
    imageWrapper: {
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
    },
    image: { maxWidth: "380px", height: "auto" },
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
              (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
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
