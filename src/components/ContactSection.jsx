import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
function Cal() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 769);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
}
const ContactSection = () => {
  const styles = {
    container: {
      backgroundColor: "#f7f6f3",
      padding: "70px 20px",
        
      textAlign: "center",
    },
    smallHeading: {
      textTransform: "uppercase",
      fontSize: "12px",
      letterSpacing: "1px",
      color: "#555",
      marginBottom: "10px",
    },
    mainHeading: {
      fontSize: "32px",
      fontWeight: 700,
      color: "#00342e",
      marginBottom: "15px",
    },
    subHeading: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "50px",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: 1.6,
    },
    box: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "40px",
      maxWidth: "950px",
      margin: "0 auto",
      background: "#fff",
      borderRadius: "20px",
      padding: "40px",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.06)",
      flexWrap: "wrap", // ✅ responsive fallback
    },
    left: {
      flex: 1,
      textAlign: "left",
      minWidth: "260px",
    },
    right: {
      flex: 1,
      // minWidth: "300px",
      width:"40%",
      background: "#fefaf5",
      borderRadius: "20px",
      padding: "clamp(10px,25px,25px)",
      textAlign: "left",
    },
    heading3: {
      fontSize: "18px",
      fontWeight: 600,
      marginBottom: "20px",
      color: "#00342e",
    },
    text: {
      fontSize: "15px",
      color: "#222",
      margin: "10px 0",
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
      marginTop: "20px",
    },
    icon: {
      fontSize: "20px",
      color: "#00342e",
      cursor: "pointer",
      transition: "0.3s",
    },
    response: {
      marginTop: "15px",
      fontSize: "14px",
      color: "#666",
    },
    label: {
      fontSize: "14px",
      fontWeight: 600,
      color: "#00342e",
      display: "block",
      marginTop: "15px",
    },
    input: {
      width: "80%",
      padding: "10px",
      marginTop: "6px",
      marginBottom: "15px",
      border: "none",
      borderBottom: "1px solid #999",
      background: "transparent",
      fontSize: "14px",
      outline: "none",
    },
    // textarea: {
    //   width: "100%",
    //   padding: "10px",
    //   marginTop: "6px",
    //   marginBottom: "15px",
    //   border: "none",
    //   borderBottom: "1px solid #999",
    //   background: "transparent",
    //   fontSize: "14px",
    //   outline: "none",
    //   resize: "none",
    //   input:""
    // },
    button: {
      background: "#00342e",
      color: "#fff",
      padding: "14px 20px",
      border: "none",
      borderRadius: "999px",
      cursor: "pointer",
      fontSize: "15px",
      width: "100%",
      marginTop: "15px",
      transition: "background 0.3s",
    },
    buttonHover: {
      background: "#00564d",
    },
  };

  return (
    <div style={styles.container}>
      {/* Top Text */}
      <p style={styles.smallHeading}>GET IN TOUCH</p>
      <h2 style={styles.mainHeading}>We’re Here to Support You</h2>
      <p style={styles.subHeading}>
        Whether you have questions, need help getting started, or want to learn more — reach out anytime.
      </p>

      {/* Contact Box */}
      <div style={styles.box}>
        {/* Left Section */}
        <div style={styles.left}>
          <h3 style={styles.heading3}>Contact Details:</h3>
          <p style={styles.text}><strong>Email:</strong> support@solus.com</p>
          <p style={styles.text}><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p style={styles.text}><strong>Address:</strong> 123 Wellness Way, Calm City, CA 90210</p>

          {/* Social Icons */}
          <div style={styles.socialIcons}>
            <FaLinkedin style={styles.icon} />
            <FaFacebookF style={styles.icon} />
            <FaInstagram style={styles.icon} />
            <FaWhatsapp style={styles.icon} />
          </div>

          <p style={styles.response}>We typically respond within 12 hours.</p>
        </div>

        {/* Right Section (Form) */}
        <div style={styles.right}>
          <h3 style={styles.heading3}>Send Us a Message</h3>
          <form>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Email" required style={styles.input} />

            <label style={styles.label}>Message</label>
            <input type="text" placeholder="Message" required style={styles.input}></input>

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
