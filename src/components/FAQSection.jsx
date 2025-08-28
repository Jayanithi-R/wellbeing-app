import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import web from "../assets/web(2).png";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      background: "#f7f6f3",
      padding: "clamp(2rem, 5vw, 4rem)",
      boxSizing: "border-box",
    },
    faqContainer: {
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "row",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: isMobile ? "2rem" : "3rem",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
    },
    left: {
      flex: "1",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      textAlign: isMobile ? "center" : "left",
      alignItems: isMobile ? "center" : "flex-start",
    },
    text: {
      width: "100%",
    },
    smallText: {
      fontSize: "clamp(0.65rem, 1vw, 0.75rem)",
      fontWeight: 500,
      color: "#666",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    heading: {
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
      fontWeight: 700,
      lineHeight: 1.3,
      color: "#00342e",
    },
    desc: {
      fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
      lineHeight: 1.6,
      color: "#555",
      maxWidth: isMobile ? "100%" : "90%",
      margin: "0 auto",
    },
    imageWrapper: {
      position: "relative",
      width: "100%",
      maxWidth: isMobile ? "220px" : "320px",
      marginTop: isMobile ? "2rem" : "4rem",
      alignSelf: isMobile ? "center" : "flex-start",
    },
    imageBox: {
      background: "#F9E6D0",
      borderRadius: "24px",
      width: "100%",
      height: isMobile ? "160px" : "220px",
      position: "relative",
      overflow: "hidden",
    },
    image: {
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      maxWidth: isMobile ? "150px" : "200px",
      width: "80%",
      height: "auto",
    },
    right: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(0.8rem, 2vw, 1.2rem)",
      width: isMobile ? "100%" : "90%",
      maxWidth: isMobile ? "100%" : "480px",
      alignItems: isMobile ? "center" : "flex-start",
      margin: isMobile ? "0 auto" : "0",
      transition: "all 0.3s ease",
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
      width: isMobile ? "90%" : "100%",
      animation: "slideIn 0.6s ease forwards",
    },
    question: {
      fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
      fontWeight: 600,
      color: "#00342e",
      flex: 1,
      marginRight: "10px",
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
          <div style={styles.text}>
            <p style={styles.smallText}>NEED HELP?</p>
            <h2 style={styles.heading}>Frequently Asked Questions</h2>
            <p style={styles.desc}>
              Find answers to common questions about our services, therapy, and
              mental well-being.
            </p>
          </div>

          <div style={styles.imageWrapper}>
            <div style={styles.imageBox}></div>
            <img src={web} alt="illustration" style={styles.image} />
          </div>
        </div>

        {/* Right Side */}
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

      {/* Slide In Animation */}
      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FAQSection;
