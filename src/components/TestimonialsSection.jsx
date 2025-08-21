import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// ✅ Import logos from assets
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";

const styles = {
  container: {
    backgroundColor: "#f7f6f3",
    padding: "clamp(2rem, 6vw, 4rem) clamp(1.5rem, 5vw, 2.5rem)",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  topSection: {
    display: "flex",
    justifyContent: "space-between",
    gap: "clamp(1.5rem, 4vw, 3rem)",
    flexWrap: "wrap",
  },
  header: {
    flex: 1,
    minWidth: "250px",
  },
  subheading: {
    fontSize: "clamp(0.6rem, 1vw, 0.75rem)",
    letterSpacing: "0.08em",
    color: "#00514a",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  heading: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: 700,
    color: "#00342e",
    margin: "clamp(0.5rem, 1.5vw, 1rem) 0",
  },
  description: {
    color: "#265a55",
    fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
    lineHeight: 1.6,
  },
  navButtons: {
    display: "flex",
    gap: "clamp(0.5rem, 1vw, 0.8rem)",
    marginTop: "clamp(1rem, 2vw, 1.5rem)",
  },
  arrow: {
    width: "clamp(2rem, 3vw, 2.4rem)",
    height: "clamp(2rem, 3vw, 2.4rem)",
    borderRadius: "50%",
    fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  left: {
    backgroundColor: "#ffffff",
    color: "#00342e",
    border: "1px solid #e0e0e0",
  },
  right: {
    backgroundColor: "#00342e",
    color: "#ffffff",
    border: "none",
  },
  testimonialCards: {
    display: "flex",
    gap: "clamp(1rem, 3vw, 1.5rem)",
    flex: 2,
    minWidth: "280px",
    flexWrap: "wrap",
  },
  card: {
    borderRadius: "24px",
    padding: "clamp(1.2rem, 2.5vw, 1.8rem)",
    width: "clamp(250px, 30vw, 300px)",
    lineHeight: 1.6,
    fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  peach: {
    backgroundColor: "#fce8d2",
    color: "#2d2d2d",
  },
  teal: {
    backgroundColor: "#00454b",
    color: "#ffffff",
  },
  author: {
    marginTop: "clamp(0.8rem, 2vw, 1rem)",
    fontWeight: 500,
    fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
  },
  partnersSection: {
    backgroundColor: "white",
    borderRadius: "36px",
    padding: "clamp(1.5rem, 4vw, 2.5rem)",
    marginTop: "clamp(2rem, 5vw, 3.5rem)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    flexWrap: "wrap",
    gap: "clamp(1rem, 3vw, 2rem)",
  },
  partnersHeading: {
    fontWeight: 600,
    color: "#00342e",
    fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
    marginBottom: "clamp(1rem, 2vw, 1.5rem)",
    paddingRight: "10px",
    textAlign: "center",
  },
  partnersLogos: {
    display: "flex",
    gap: "clamp(1rem, 4vw, 4rem)",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  logo: {
    height: "clamp(20px, 4vw, 32px)",
    objectFit: "contain",
  },
};

// ✅ Replace placeholders with imported logos
const partnerLogos = [partner1, partner2, partner3, partner4, partner5];

const TestimonialsSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.topSection}>
        <div style={styles.header}>
          <p style={styles.subheading}>TESTIMONIALS</p>
          <h2 style={styles.heading}>What Our Clients Are Saying</h2>
          <p style={styles.description}>
            Positive experiences from users who have <br />
            benefited from therapy or wellness programs.
          </p>
          <div style={styles.navButtons}>
            <button style={{ ...styles.arrow, ...styles.left }}>
              <FaArrowLeft />
            </button>
            <button style={{ ...styles.arrow, ...styles.right }}>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div style={styles.testimonialCards}>
          <div style={{ ...styles.card, ...styles.peach }}>
            <p>
              "Solus made it so easy to find the right therapist for me. The
              sessions have truly transformed my mindset, and I feel more in
              control of my emotions than ever before!"
            </p>
            <p style={styles.author}>— Anna R., 32</p>
          </div>

          <div style={{ ...styles.card, ...styles.teal }}>
            <p>
              "I was struggling with stress and anxiety, but the mindfulness
              program at Solus has helped me regain balance. I finally feel like
              I'm prioritizing my mental well-being."
            </p>
            <p style={styles.author}>— Mark S., 41</p>
          </div>
        </div>
      </div>

      <div style={styles.partnersSection}>
        <p style={styles.partnersHeading}>Our Partners</p>
        <div style={styles.partnersLogos}>
          {partnerLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Partner ${index + 1}`}
              style={styles.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
