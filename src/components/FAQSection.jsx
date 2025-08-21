import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import web from "../assets/web(2).png";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    "How do I book a therapy session?",
    "Are online sessions available?",
    "What’s the difference between therapy and coaching?",
    "Do I need a subscription to access services?",
    "Can I switch therapists if I don’t feel the right connection?",
    "Is my information and session history kept confidential?",
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(2rem, 6vw, 4rem)",
      Width: "100%",
    //   padding: "0 clamp(1rem, 5vw, 5rem)",
            background: "#f7f6f3",
    },
    faqContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "clamp(1.5rem, 5vw, 3.75rem)",
      flexWrap: "wrap",
      background: "#f7f6f3",
      padding: "clamp(2rem, 6vw, 3.75rem)",
      borderRadius: "24px",
    },
    left: { flex: 1, minWidth: "280px" },
    smallText: {
      fontSize: "clamp(0.65rem, 1vw, 0.75rem)",
      fontWeight: 500,
      color: "#666",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: "clamp(0.5rem, 1vw, 0.6rem)",
    },
    heading: {
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
      fontWeight: 700,
      lineHeight: 1.3,
      color: "#00342e",
      marginBottom: "clamp(0.8rem, 2vw, 1rem)",
    },
    desc: {
      fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
      lineHeight: 1.6,
      color: "#555",
      marginBottom: "clamp(1.2rem, 3vw, 1.8rem)",
    },
    imageBox: {
      display: "inline-block",
      padding: "clamp(1rem, 3vw, 1.25rem)",
      background: "#F9E6D0",
      borderRadius: "24px",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
      height: "auto",
    },
    image: {
      maxWidth: "clamp(200px, 40vw, 280px)",
      borderRadius: "20px",
      display: "block",
      height: "auto",
    },
    right: {
      flex: 1,
      minWidth: "280px",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(0.8rem, 2vw, 1.2rem)",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#fff",
      padding: "clamp(0.8rem, 2vw, 1rem) clamp(1rem, 2.5vw, 1.25rem)",
      borderRadius: "14px",
      cursor: "pointer",
      boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
      transition: "all 0.3s ease",
    },
    question: {
      fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
      fontWeight: 600,
      color: "#00342e",
    },
    icon: { fontSize: "clamp(0.8rem, 1vw, 0.9rem)", color: "#00342e", flexShrink: 0 },
    active: { border: "1px solid #00342e" },
    formContainer: {
      background: "#00342e",
      color: "#fff",
      borderRadius: "24px",
      padding: "clamp(2rem, 6vw, 4rem)",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(1.2rem, 3vw, 2rem)",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "clamp(0.8rem, 2vw, 1.2rem)",
      marginTop: "clamp(1rem, 3vw, 2rem)",
    },
    input: {
      padding: "clamp(0.8rem, 2vw, 1rem)",
      borderRadius: "12px",
      border: "none",
      fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
      outline: "none",
    },
    textarea: {
      padding: "clamp(0.8rem, 2vw, 1rem)",
      borderRadius: "12px",
      border: "none",
      fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
      minHeight: "clamp(120px, 25vh, 180px)",
      outline: "none",
      resize: "vertical",
    },
    button: {
      background: "#fff",
      color: "#00342e",
      border: "none",
      borderRadius: "30px",
      padding: "clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)",
      fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
      fontWeight: 600,
      cursor: "pointer",
      alignSelf: "flex-start",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.container}>
      {/* FAQ Section */}
      <div style={styles.faqContainer}>
        <div style={styles.left}>
          <p style={styles.smallText}>NEED HELP?</p>
          <h2 style={styles.heading}>Frequently Asked Questions</h2>
          <p style={styles.desc}>
            Find answers to common questions about our services,
            <br />
            therapy, and mental well-being.
          </p>
          <div style={styles.imageBox}>
            <img src={web} alt="illustration" style={styles.image} />
          </div>
        </div>

        <div style={styles.right}>
          {faqs.map((q, index) => (
            <div
              key={index}
              style={{
                ...styles.item,
                ...(activeIndex === index ? styles.active : {}),
              }}
              onClick={() => toggleFAQ(index)}
            >
              <p style={styles.question}>{q}</p>
              {activeIndex === index ? <FaMinus style={styles.icon} /> : <FaPlus style={styles.icon} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
