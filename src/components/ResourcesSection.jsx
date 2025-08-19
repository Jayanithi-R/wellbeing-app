import React from "react";

const styles = {
  section: {
    backgroundColor: "#f9f9f7",
    padding: "60px 20px",
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "start",
    gap: "40px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  leftContent: {
    textAlign: "left",
  },
  smallHeading: {
    fontSize: "0.75rem",
    fontWeight: "600",
    letterSpacing: "1px",
    color: "#4b5563",
    marginBottom: "10px",
  },
  mainHeading: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#00332c",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#404040",
    marginBottom: "30px",
    lineHeight: "1.6",
    maxWidth: "400px",
  },
  illustration: {
    width: "100%",
    maxWidth: "350px",
    borderRadius: "20px",
    marginTop: "20px",
  },
  faqContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  faqBox: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
    padding: "18px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  faqText: {
    margin: 0,
    fontSize: "1rem",
    fontWeight: "600",
    color: "#00332c",
  },
  plus: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#00332c",
  },
};

const FAQSection = () => {
  const faqs = [
    "How do I book a therapy session?",
    "Are online sessions available?",
    "What’s the difference between therapy and coaching?",
    "Do I need a subscription to access services?",
    "Can I switch therapists if I don’t feel the right connection?",
    "Is my information and session history kept confidential?",
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left Side Content */}
        <div style={styles.leftContent}>
          <p style={styles.smallHeading}>NEED HELP?</p>
          <h2 style={styles.mainHeading}>
            Frequently <br /> Asked Questions
          </h2>
          <p style={styles.paragraph}>
            Find answers to common questions about our services, therapy, and
            mental well-being.
          </p>
          <img
            src="/faq-illustration.png"
            alt="FAQ Illustration"
            style={styles.illustration}
          />
        </div>

        {/* Right Side FAQ List */}
        <div style={styles.faqContainer}>
          {faqs.map((question, index) => (
            <div key={index} style={styles.faqBox}>
              <p style={styles.faqText}>{question}</p>
              <span style={styles.plus}>+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
