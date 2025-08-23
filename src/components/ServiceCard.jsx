import React from "react";

const ServicesSection = () => {
  const styles = {
    section: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#f9f9f7",
      padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)",
      textAlign: "center",
    },
    subheading: {
      textTransform: "uppercase",
      fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
      color: "#4b5563",
      marginBottom: "clamp(0.5rem, 1vw, 0.8rem)",
      letterSpacing: "1px",
      fontFamily:"Bricolage Grotesque",
    },
    heading: {
      fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
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
    gridcard:{
       display:"flex",
       width:"100%",
       flexDirection:"column",
       gap:"10px",
       justifyContent:"center",
    },

    grid: {
      display: "flex",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "clamp(1rem, 2vw, 1.5rem)",
    //   maxWidth: "1100px",
      margin: "0 auto",
      flexDirection:"row",
      width:"90%",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "clamp(1.5rem, 3vw, 2rem)",
      borderRadius: "20px",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    },
    cardAlt: {
      backgroundColor: "#fdecd8",
      padding: "clamp(1.5rem, 3vw, 2rem)",
      borderRadius: "20px",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    },
    cardTitle: {
      fontSize: "clamp(1rem, 2vw, 1.25rem)",
      fontWeight: "600",
      color: "#0f3d36",
      marginBottom: "clamp(0.5rem, 1vw, 0.8rem)",
    },
    cardText: {
      fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
      color: "#374151",
      marginBottom: "clamp(1rem, 2vw, 1.5rem)",
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
    },
    buttonFilled: {
      border: "none",
      padding: "clamp(0.6rem, 1.2vw, 0.9rem) clamp(1.2rem, 2.5vw, 1.5rem)",
      borderRadius: "30px",
      background: "#0f3d36",
      color: "#fff",
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
      justifyContent: "center",
      alignItems: "center",
      gap: "clamp(1rem, 2vw, 2rem)",
      flexWrap: "wrap",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      width:"84%",
      marginLeft:"5%", 
    },
    fullCardContent: {
      flex: "1 1 60%",
      minWidth: "280px",
    //   marginLeft:"10%",
    },
    illustration: {
      width: "clamp(120px, 18vw, 160px)",
      height: "auto",
    },
  };

  return (
    <section style={styles.section}>
      <p style={styles.subheading}>SERVICES</p>
      <h2 style={styles.heading}>Your Path to Well-being</h2>
      <p style={styles.description}>
        Discover expert guidance for a healthier mind and balanced life.
      </p>

      <div style={styles.gridcard}>
<div style={styles.grid}>
        {/* Mindfulness Card */}
        <div style={styles.cardAlt}>
          <h3 style={styles.cardTitle}>Mindfulness & Meditation</h3>
          <p style={styles.cardText}>
            Guided meditation sessions and stress management techniques.
          </p>
          <button style={styles.button}>Learn More</button>
        </div>

        {/* Therapy Card */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>One-on-One Therapy</h3>
          <p style={styles.cardText}>
            Virtual and in-person therapy sessions with licensed professionals.
          </p>
          <button style={styles.button}>Learn More</button>
        </div>
      </div>
      

        {/* Wellness Coaching Card */}
        <div style={styles.fullCard}>
          <div style={styles.fullCardContent}>
            <h3 style={styles.cardTitle}>Wellness Coaching</h3>
            <p style={styles.cardText}>
              Personalized guidance to help you build healthier habits,<br/>
              manage stress, and achieve balance in all areas of your life. <br />
              <br />
              Our wellness coaches support you in creating sustainable <br />routines
              for mental, emotional, and physical well-being.
            </p>
            <button style={styles.buttonFilled}>Learn More</button>
          </div>
          {/* Replace with your illustration image */}
          <img
            // style={styles.illustration}
            // src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
            // alt="Wellness Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
