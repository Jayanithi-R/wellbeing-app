import React from "react";
import rainbow from "./assets/rainbow.png";   // save rainbow image here
import flower1 from "./assets/flower1.png";   // save flower images here
import flower2 from "./assets/flower2.png";
import flower3 from "./assets/flower3.png";

const styles = {
  container: {
    backgroundColor: "#f7f6f3",
    padding: "60px 20px",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    justifyContent: "center",
  },
  footerBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    maxWidth: "1000px",
    width: "100%",
    gap: "40px",
    flexWrap: "wrap",
  },
  left: {
    background: "#fff",
    borderRadius: "20px",
    padding: "30px",
    flex: 1,
    minWidth: "280px",
  },
  brand: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#00342e",
    marginBottom: "20px",
  },
  linksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
    gap: "12px 40px",
    fontSize: "14px",
    color: "#00342e",
    marginBottom: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#00342e",
    cursor: "pointer",
  },
  copyright: {
    fontSize: "12px",
    color: "#888",
    marginTop: "10px",
  },
  right: {
    flex: 1,
    minWidth: "300px",
    background: "#00342e",
    color: "#fff",
    borderRadius: "24px",
    padding: "40px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  },
  rightText: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: 1.4,
    marginBottom: "30px",
  },
  button: {
    background: "#fff",
    color: "#00342e",
    border: "none",
    borderRadius: "30px",
    padding: "14px 20px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
    textAlign: "center",
  },
  decoration: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "10px",
  },
  img: {
    width: "70px",
    height: "auto",
  },
};

const FooterSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.footerBox}>
        {/* Left Section */}
        <div style={styles.left}>
          <h3 style={styles.brand}>Solus</h3>
          <div style={styles.linksGrid}>
            <a href="#" style={styles.link}>About</a>
            <a href="#" style={styles.link}>Instagram</a>
            <a href="#" style={styles.link}>Terms Of Use</a>
            <a href="#" style={styles.link}>Services</a>
            <a href="#" style={styles.link}>Facebook</a>
            <a href="#" style={styles.link}>Privacy Policy</a>
            <a href="#" style={styles.link}>Therapists</a>
            <a href="#" style={styles.link}>YouTube</a>
            <a href="#" style={styles.link}>Resources</a>
            <a href="#" style={styles.link}>LinkedIn</a>
            <a href="#" style={styles.link}>Contact</a>
          </div>
          <p style={styles.copyright}>© [2035] Solus. All Rights Reserved.</p>
        </div>

        {/* Right Section (CTA Box) */}
        <div style={styles.right}>
          <p style={styles.rightText}>
            Find Support, <br />
            Guidance, <br />
            and Balance.
          </p>
          <button style={styles.button}>Find Support Now</button>

          {/* Decorative Images */}
          <div style={styles.decoration}>
            <img src={rainbow} alt="Rainbow" style={styles.img} />
            <img src={flower1} alt="Flower" style={styles.img} />
            <img src={flower2} alt="Flower" style={styles.img} />
            <img src={flower3} alt="Flower" style={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
