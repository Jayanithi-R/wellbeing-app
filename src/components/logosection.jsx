import React from "react";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from '../assets/partner4.png';
import partner5 from '../assets/partner5.png';
// ✅ Add all your partner logos like above

const LogoSection = () => {
  const partnerLogos = [partner1, partner2, partner3,partner4,partner5]; // add more here

  const styles = {
    partnersSection: {
      backgroundColor: "white",
      borderRadius: "36px",
      padding: "32px",
      marginTop: "60px",
      display: "flex",
      flexDirection: "column", // heading above logos
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
    },

    partnersHeading: {
      fontWeight: 600,
      color: "#00342e",
      fontSize: "14px",
      marginBottom: "24px",
    },

    partnersLogos: {
      display: "flex",
      gap: "clamp(20px, 2vh, 90px)",
      justifyContent: "space-evenly",
      flexWrap: "wrap", // ✅ makes it responsive
      width: "90%",
    },

    logo: {
      maxWidth: "100px",
      height: "auto",
      objectFit: "contain",
    },
  };

  return (
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
  );
};

export default LogoSection;
