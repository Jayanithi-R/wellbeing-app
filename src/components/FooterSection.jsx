import React, { useState, useEffect } from "react";
import cornerImage from "../assets/corner.png"; // ✅ import your image

const FooterSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f7f6f3",
        padding: "clamp(2rem, 6vw, 3rem) 0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          width: isMobile ? "92%" : "80%",
          gap: "clamp(1rem, 3vw, 2rem)",
          flexDirection: isMobile ? "column" : "row", // ✅ stack on mobile
        }}
      >
        {/* White Box */}
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.2rem, 2vw, 1.4rem)",
              fontWeight: 700,
              color: "#00342e",
              marginBottom: "1rem",
              textAlign: isMobile ? "center" : "left", // ✅ center on mobile
            }}
          >
            Solus
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)", // ✅ responsive grid
              gap: "0.8rem 1.5rem",
              fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
              marginBottom: "1.5rem",
            }}
          >
            <a href="#" style={{ color: "#00342e", textDecoration: "none" }}>
              About
            </a>
            <a href="#" style={{ color: "#00342e", textDecoration: "none" }}>
              Instagram
            </a>
            <a href="#" style={{ color: "#00342e", textDecoration: "none" }}>
              Terms Of Use
            </a>
            <a href="#" style={{ color: "#00342e", textDecoration: "none" }}>
              Services
            </a>
            <a href="#" style={{ color: "#00342e", textDecoration: "none" }}>
              Facebook
            </a>
            <a href="#" style={{ color: "#00342e", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: "#00342e", textDecoration: "none" }}>
              Therapists
            </a>
            <a href="#" style={{ color: "#00342e", textDecoration: "none" }}>
              YouTube
            </a>
            <a href="#" style={{ color: "#00342e", textDecoration: "none" }}>
              Resources
            </a>
            <a href="#" style={{ color: "#00342e", textDecoration: "none" }}>
              LinkedIn
            </a>
            <a href="#" style={{ color: "#00342e", textDecoration: "none" }}>
              Contact
            </a>
          </div>

          <p
            style={{
              fontSize: "clamp(0.7rem, 0.9vw, 0.75rem)",
              color: "#888",
              textAlign: isMobile ? "center" : "left",
              marginTop: "auto",
            }}
          >
            © {new Date().getFullYear()} Solus. All Rights Reserved.
          </p>
        </div>

        {/* Teal Box */}
        <div
          style={{
            background: "#00342e",
            color: "#fff",
            borderRadius: "20px",
            padding: "clamp(2rem, 5vw, 3rem)",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-start", // ✅ centered on mobile
            textAlign: isMobile ? "center" : "left",
            position: "relative", // ✅ allows absolute image inside
            overflow: "hidden", // ✅ keep image inside rounded box
          }}
        >
          {/* ✅ Corner Image */}
          <img
            src={cornerImage}
            alt="decor"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "228.38px",
              height: "auto",
              borderBottomRightRadius: "20px",
            }}
          />
          <p
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              fontWeight: 700,
              lineHeight: 1.5,
              marginBottom: "1.5rem",
            }}
          >
            Find <br />
            Support, <br />
            Guidance, <br />
            and Balance.
          </p>
          <button
            style={{
              background: "#fff",
              color: "#00342e",
              border: "none",
              borderRadius: "30px",
              padding:
                "clamp(0.7rem, 1.5vw, 0.9rem) clamp(1rem, 3vw, 1.25rem)",
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
              fontWeight: 600,
              cursor: "pointer",
              width: "100%",
              maxWidth: "400px", // ✅ button doesn't stretch too much
              textAlign: "center",
              transition: "0.3s",
            }}
          >
            Find Support Now
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
