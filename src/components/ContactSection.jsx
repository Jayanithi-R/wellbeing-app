import React from "react";
import { FaLinkedin, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const styles = {
  container: {
    backgroundColor: "#f7f6f3",
    padding: "60px 20px",
    fontFamily: "'Inter', sans-serif",
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
    fontSize: "28px",
    fontWeight: 700,
    color: "#00342e",
    marginBottom: "10px",
  },
  subHeading: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "40px",
  },
  contactBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "40px",
    maxWidth: "900px",
    margin: "0 auto",
    background: "#fff",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
    flexWrap: "wrap",
  },
  left: {
    flex: 1,
    textAlign: "left",
    minWidth: "250px",
  },
  right: {
    flex: 1,
    minWidth: "280px",
    background: "#fefaf5",
    borderRadius: "16px",
    padding: "20px",
    textAlign: "left",
  },
  heading3: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "15px",
    color: "#00342e",
  },
  text: {
    fontSize: "14px",
    color: "#222",
    margin: "8px 0",
  },
  icons: {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
  },
  icon: {
    fontSize: "20px",
    color: "#00342e",
    cursor: "pointer",
    transition: "0.3s",
  },
  response: {
    marginTop: "15px",
    fontSize: "13px",
    color: "#666",
    paddingUp:"30px",
  },
  label: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#00342e",
    display: "block",
    marginTop: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "6px",
    marginBottom: "12px",
    border: "none",
    borderBottom: "1px solid #999",
    background: "transparent",
    fontSize: "14px",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginTop: "6px",
    marginBottom: "12px",
    border: "none",
    borderBottom: "1px solid #999",
    background: "transparent",
    fontSize: "14px",
    outline: "none",
    resize: "none",
  },
  button: {
    background: "#00342e",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "14px",
    width: "100%",
    marginTop: "10px",
    transition: "0.3s",
  },
};

const ContactSection = () => {
  return (
    <div style={styles.container}>
      {/* Top Text */}
      <p style={styles.smallHeading}>GET IN TOUCH</p>
      <h2 style={styles.mainHeading}>We’re Here to Support You</h2>
      <p style={styles.subHeading}>
        Whether you have questions, need help getting started, or want to learn more — reach out anytime.
      </p>

      {/* Contact Box */}
      <div style={styles.contactBox}>
        {/* Left Section */}
        <div style={styles.left}>
          <h3 style={styles.heading3}>Contact Details:</h3>
          <p style={styles.text}><strong>Email:</strong> support@solus.com</p>
          <p style={styles.text}><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p style={styles.text}><strong>Address:</strong> 123 Wellness Way, Calm City, CA 90210</p>

          {/* Social Icons */}
          <div style={styles.icons}>
            <FaLinkedin style={styles.icon} />
            <FaFacebookF style={styles.icon} />
            <FaInstagram style={styles.icon} />
            <FaWhatsapp style={styles.icon} />
          </div>

          <p style={styles.response}>We typically respond within 12 hours.</p>
        </div>
       {/* <div>
        <p style={styles.response}>We typically respond within 12 hours.</p>
       </div> */}

        {/* Right Section (Form) */}
        <div style={styles.right}>
          <h3 style={styles.heading3}>Send Us a Message</h3>
          <form>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Email" required style={styles.input} />

            <label style={styles.label}>Message</label>
            <textarea placeholder="Message" rows="4" required style={styles.textarea}></textarea>

            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
