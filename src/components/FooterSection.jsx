import React from "react";
import poster from "../assets/poster.png"; // ✅ imported from src/assets

const FooterSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#f7f6f3",
        padding: "clamp(2rem, 6vw, 3.75rem) clamp(1rem, 4vw, 1.25rem)",
          
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
          gap: "clamp(1.5rem, 5vw, 2.5rem)",
          flexWrap: "wrap",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            background: "#fff",
            borderRadius: "clamp(12px, 2vw, 20px)",
            padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1.2rem, 4vw, 2rem)",
            flex: 1,
            minWidth: "clamp(240px, 40vw, 320px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.2rem, 2.2vw, 1.4rem)",
              fontWeight: 700,
              color: "#00342e",
              marginBottom: "clamp(0.8rem, 2vw, 1.25rem)",
            }}
          >
            Solus
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, auto)",
              gap: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 2.5rem)",
              fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)",
              color: "#00342e",
              marginBottom: "clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>About</a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>Instagram</a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>Terms Of Use</a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>Services</a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>Facebook</a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>Privacy Policy</a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>Therapists</a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>YouTube</a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>Resources</a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>LinkedIn</a>
            <a href="#" style={{ textDecoration: "none", color: "#00342e" }}>Contact</a>
          </div>

          <p
            style={{
              fontSize: "clamp(0.65rem, 1vw, 0.75rem)",
              color: "#888",
              marginTop: "auto",
            }}
          >
            © [2035] Solus. All Rights Reserved.
          </p>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: 1,
            minWidth: "clamp(260px, 45vw, 360px)",
            background: "#00342e",
            color: "#fff",
            borderRadius: "clamp(16px, 3vw, 24px)",
            padding: "clamp(2rem, 5vw, 3rem) clamp(1.5rem, 5vw, 2.5rem)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.5rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: "clamp(1rem, 2.5vw, 1.8rem)",
              maxWidth: "clamp(240px, 30vw, 300px)",
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
              padding: "clamp(0.7rem, 1.5vw, 0.9rem) clamp(1rem, 3vw, 1.25rem)",
              fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
              fontWeight: 600,
              cursor: "pointer",
              width: "fit-content",
              minWidth: "clamp(160px, 20vw, 220px)",
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
              top: "clamp(0.8rem, 2vw, 1.25rem)",
              right: "clamp(0.8rem, 2vw, 1.25rem)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "clamp(0.4rem, 1vw, 0.6rem)",
            }}
          >
            <img
              src={poster}
              alt="Poster"
              style={{
                width: "clamp(60px, 12vw, 100px)",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
