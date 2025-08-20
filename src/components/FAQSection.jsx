import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import web from "../assets/web(2).png"; // ✅ import from src/assets

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

  // ✅ Inline styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "60px",
      padding: "60px 80px",
      background: "#f7f6f3",
      fontFamily: "'Inter', sans-serif",
      flexWrap: "wrap",
    },
    left: { flex: 1 },
    smallText: {
      fontSize: "11px",
      fontWeight: 500,
      color: "#666",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: "10px",
    },
    heading: {
      fontSize: "28px",
      fontWeight: 700,
      color: "#00342e",
      marginBottom: "15px",
    },
    desc: {
      fontSize: "15px",
      lineHeight: 1.6,
      color: "#555",
      marginBottom: "30px",
    },
    imageBox: {
      display: "inline-block",
      padding: "20px",
      background: "#F9E6D0",
      borderRadius: "24px",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
      height: "40%",
    },
    image: {
      maxWidth: "280px",
      borderRadius: "20px",
      display: "block",
    },
    right: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "18px",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#fff",
      padding: "16px 20px",
      borderRadius: "14px",
      cursor: "pointer",
      boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
      transition: "all 0.3s ease",
    },
    itemHover: { background: "#fdfdfd" },
    question: {
      fontSize: "15px",
      fontWeight: 600,
      color: "#00342e",
    },
    icon: { fontSize: "14px", color: "#00342e", flexShrink: 0 },
    active: { border: "1px solid #00342e" },
  };

  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.left}>
        <p style={styles.smallText}>NEED HELP?</p>
        <h2 style={styles.heading}>Frequently Asked Questions</h2>
        <p style={styles.desc}>
          Find answers to common questions about our services,
          <br />
          therapy, and mental well-being.
        </p>

        {/* ✅ Box behind image */}
        <div style={styles.imageBox}>
          <img src={web} alt="illustration" style={styles.image} />
        </div>
      </div>

      {/* Right Section */}
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
            {activeIndex === index ? (
              <FaMinus style={styles.icon} />
            ) : (
              <FaPlus style={styles.icon} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
