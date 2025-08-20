import React from "react";
import poster from "../assets/poster.png"; // ✅ imported from src/assets

const FooterSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#f7f6f3",
        padding: "60px 20px",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          maxWidth: "1100px",
          width: "100%",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "40px 30px",
            flex: 1,
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#00342e",
              marginBottom: "20px",
            }}
          >
            Solus
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, auto)",
              gap: "12px 40px",
              fontSize: "14px",
              color: "#00342e",
              marginBottom: "20px",
            }}
          >
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>
              About
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>
              Instagram
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>
              Terms Of Use
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>
              Services
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>
              Facebook
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>
              Therapists
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>
              YouTube
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>
              Resources
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>
              LinkedIn
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>
              Contact
            </a>
          </div>

          <p style={{ fontSize: "12px", color: "#888", marginTop: "auto" }}>
            © [2035] Solus. All Rights Reserved.
          </p>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            background: "#00342e",
            color: "#fff",
            borderRadius: "24px",
            padding: "50px 40px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: "30px",
              maxWidth: "300px",
            }}
          >
            Find 
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
              padding: "14px 20px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              width: "fit-content",
              minWidth: "220px",
              textAlign: "center",
              transition: "0.3s",
            }}
          >
            Find Support Now
          </button>

          {/* ✅ Decorative Image imported from assets */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "10px",
            }}
          >
            <img
              src={poster}
              alt="Poster"
              style={{ width: "100px", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
