import React from "react";
import { FaLinkedin, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const styles = {
    container: {
      backgroundColor: "#f7f6f3",
      padding: "clamp(40px, 6vw, 70px) clamp(20px, 5vw, 60px)",
      textAlign: "center",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(20px, 3vw, 40px)",
      boxSizing: "border-box",
      alignItems: "center",
    },
    smallHeading: {
      textTransform: "uppercase",
      fontSize: "clamp(10px, 1.2vw, 12px)",
      letterSpacing: "1px",
      color: "#555",
      marginBottom: "clamp(5px, 1vw, 10px)",
    },
    mainHeading: {
      fontSize: "clamp(22px, 3vw, 32px)",
      fontWeight: 700,
      color: "#00342e",
      marginBottom: "clamp(10px, 2vw, 15px)",
    },
    subHeading: {
      fontSize: "clamp(14px, 1.5vw, 16px)",
      color: "#555",
      marginBottom: "clamp(30px, 5vw, 50px)",
      maxWidth: "clamp(280px, 80%, 600px)",
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: 1.6,
    },
    box: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "stretch",
      background: "#fff",
      borderRadius: "20px",
      padding: "clamp(30px, 5vw, 60px)",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.06)",
      boxSizing: "border-box",
      gap: "clamp(20px, 4vw, 40px)", // ensures spacing on smaller screens
      // width: "100%",
      maxWidth: "1100px",
    },
    left: {
      flex: "1 1 320px", // min width for mobile
      textAlign: "left",
    },
    right: {
      flex: "1 1 320px", // min width for mobile
      background: "#fefaf5",
      borderRadius: "20px",
      padding: "clamp(20px, 3vw, 25px)",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      boxSizing: "border-box",
    },
    heading3: {
      fontSize: "clamp(16px, 2vw, 18px)",
      fontWeight: 600,
      marginBottom: "clamp(15px, 2vw, 20px)",
      color: "#00342e",
    },
    text: {
      fontSize: "clamp(13px, 1.5vw, 15px)",
      color: "#222",
      margin: "clamp(5px, 1vw, 10px) 0",
    },
    socialIcons: {
      display: "flex",
      gap: "clamp(10px, 2vw, 15px)",
      marginTop: "clamp(15px, 2vw, 20px)",
      flexWrap: "wrap",
    },
    icon: {
      fontSize: "clamp(16px, 1.5vw, 20px)",
      color: "#00342e",
      cursor: "pointer",
      transition: "0.3s",
    },
    response: {
      marginTop: "clamp(10px, 1vw, 15px)",
      fontSize: "clamp(12px, 1vw, 14px)",
      color: "#666",
    },
    label: {
      fontSize: "clamp(12px, 1vw, 14px)",
      fontWeight: 600,
      color: "#00342e",
      display: "block",
      marginTop: "clamp(10px, 1vw, 15px)",
    },
    input: {
      width: "100%",
      padding: "clamp(8px, 1vw, 10px)",
      marginTop: "6px",
      marginBottom: "clamp(10px, 1vw, 15px)",
      border: "none",
      borderBottom: "1px solid #999",
      background: "transparent",
      fontSize: "clamp(12px, 1vw, 14px)",
      outline: "none",
      boxSizing: "border-box",
    },
    button: {
      background: "#00342e",
      color: "#fff",
      padding: "clamp(10px, 2vw, 14px) 20px",
      border: "none",
      borderRadius: "999px",
      cursor: "pointer",
      fontSize: "clamp(13px, 1.2vw, 15px)",
      width: "100%",
      marginTop: "clamp(10px, 2vw, 15px)",
      transition: "background 0.3s",
    },
    buttonHover: {
      background: "#00564d",
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <p style={styles.smallHeading}>GET IN TOUCH</p>
        <h2 style={styles.mainHeading}>We’re Here to Support You</h2>
        <p style={styles.subHeading}>
          Whether you have questions, need help getting started, or want to learn more — reach out anytime.
        </p>
      </div>

      <div style={styles.box}>
        {/* Left Side */}
        <div style={styles.left}>
          <h3 style={styles.heading3}>Contact Details:</h3>
          <p style={styles.text}><strong>Email:</strong> support@solus.com</p>
          <p style={styles.text}><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p style={styles.text}><strong>Address:</strong> 123 Wellness Way, Calm City, CA 90210</p>

          <div style={styles.socialIcons}>
            <FaLinkedin style={styles.icon} />
            <FaFacebookF style={styles.icon} />
            <FaInstagram style={styles.icon} />
            <FaWhatsapp style={styles.icon} />
          </div>

          <p style={styles.response}>We typically respond within 12 hours.</p>
        </div>

        {/* Right Side */}
        <div style={styles.right}>
          <h3 style={styles.heading3}>Send Us a Message</h3>
          <form>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Email" required style={styles.input} />

            <label style={styles.label}>Message</label>
            <input type="text" placeholder="Message" required style={styles.input} />

            <button
              type="submit"
              style={styles.button}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = styles.buttonHover.background)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = styles.button.background)
              }
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
