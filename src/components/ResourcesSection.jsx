import React from "react";

const styles = {
  section: {
    backgroundColor: "#f9f9f7",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "'Inter', sans-serif",
  },
  smallHeading: {
    fontSize: "0.9rem",
    fontWeight: "600",
    letterSpacing: "1px",
    color: "#00332c",
    marginBottom: "10px",
  },
  mainHeading: {
    fontSize: "2.2rem",
    fontWeight: "800",
    color: "#00332c",
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#404040",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  containerWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "white",
    padding: "30px 20px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    width: "280px",
    textAlign: "center",
  },
  cardHeading: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#00332c",
    marginBottom: "15px",
  },
  cardText: {
    fontSize: "0.95rem",
    color: "#404040",
    marginBottom: "25px",
    lineHeight: "1.5",
  },
  yellowButton: {
    backgroundColor: "#fbc02d",
    color: "#00332c",
    padding: "10px 25px",
    fontSize: "0.95rem",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "600",
  },
  greenButton: {
    backgroundColor: "#2ec4b6",
    color: "white",
    padding: "10px 25px",
    fontSize: "0.95rem",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "600",
  },
  pinkButton: {
    backgroundColor: "#f59ca9",
    color: "white",
    padding: "10px 25px",
    fontSize: "0.95rem",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

const ResourcesSection = () => {
  return (
    <section style={styles.section}>
      <h5 style={styles.smallHeading}>EXPLORE & LEARN</h5>
      <h2 style={styles.mainHeading}>Resources for Your Well-being</h2>
      <p style={styles.paragraph}>
        Explore expert insights, self-care guides, and tools to support your
        mental health.
      </p>

      <div style={styles.containerWrapper}>
        {/* Card 1 */}
        <div style={styles.card}>
          <h3 style={styles.cardHeading}>Articles & Guides</h3>
          <p style={styles.cardText}>
            Practical tips on stress management, mindfulness, and emotional
            resilience.
          </p>
          <button style={styles.yellowButton}>Explore</button>
        </div>

        {/* Card 2 */}
        <div style={styles.card}>
          <h3 style={styles.cardHeading}>Meditation & Relaxation</h3>
          <p style={styles.cardText}>
            Audio sessions for guided meditation and deep breathing exercises.
          </p>
          <button style={styles.greenButton}>Explore</button>
        </div>

        {/* Card 3 */}
        <div style={styles.card}>
          <h3 style={styles.cardHeading}>Webinars & Workshops</h3>
          <p style={styles.cardText}>
            Live and recorded sessions with mental health professionals.
          </p>
          <button style={styles.pinkButton}>Explore</button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
