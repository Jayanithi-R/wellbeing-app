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
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(2rem, 6vw, 4rem)",
      background: "#f7f6f3",
      padding: "clamp(2rem, 5vw, 4rem)",
      boxSizing: "border-box",
    },
    faqContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "clamp(2rem, 5vw, 4rem)",
      background: "#f7f6f3",
      padding: "clamp(2rem, 5vw, 3rem)",
      borderRadius: "24px",
      boxSizing: "border-box",
      // marginTop:"50px",
    },
    left: {
      flex: "1 1 clamp(280px, 40%, 450px)",
      minWidth: "clamp(280px, 40%, 450px)",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(1rem, 2vw, 2rem)",
    },
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
      marginBottom: "clamp(1rem, 2vw, 1.5rem)",
    },
    imageBox: {
      padding: "clamp(1rem, 3vw, 1.5rem)",
      background: "#F9E6D0",
      borderRadius: "24px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      maxWidth: "clamp(250px, 80%, 350px)",
      boxSizing: "border-box",
    },
    image: {
      width: "100%",
      borderRadius: "20px",
      height: "auto",
      display: "block",
    },
    right: {
      flex: "1 1 clamp(280px, 40%, 450px)",
      minWidth: "clamp(280px, 40%, 450px)",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(0.8rem, 2vw, 1.2rem)",
      marginTop:"clamp(6rem, 10vw, 8rem)",
      // alignSelf:"flex-start",
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
      // marginTop:"50px",
    },
    question: {
      fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
      fontWeight: 600,
      color: "#00342e",
    },
    icon: {
      fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
      color: "#00342e",
      flexShrink: 0,
    },
    active: {
      border: "1px solid #00342e",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.faqContainer}>
        {/* Left Side */}
        <div style={styles.left}>
          <p style={styles.smallText}>NEED HELP?</p>
          <h2 style={styles.heading}>Frequently Asked Questions</h2>
          <p style={styles.desc}>
            Find answers to common questions about our services,
            therapy, and mental well-being.
          </p>
          <div style={styles.imageBox}>
            <img src={web} alt="illustration" style={styles.image} />
          </div>
        </div>

        {/* Right Side */}
        {/* <div 
        style={{
          flex:"1 1 clamp(280px, 40%, 450px)",
          minWidth:"clamp(280px, 40%, 450px)"
          paddingTop:"clamp(6rem, 10vw, 8rem)",
          boxSizing: "border-box",
        }}
        ></div> */}
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
    </div>
  );
};

export default FAQSection;
