import React, { useState, useEffect } from "react";
import heroImage from "../assets/hero(2).png";
function Cal() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 769);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
}
const HeroSection = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 80px",
        backgroundColor: "#f9f8f6",
        fontFamily: "Inter, sans-serif",
        gap: "40px",
        flexWrap: "wrap", // ✅ allows responsiveness
      }}
    >
      {/* Left Side - Text */}
      <div
        style={{
          flex: "1 1 400px", // ✅ flex grows, shrinks, and has a min width
          minWidth: "280px",
          textAlign: "left",
        }}
      >
        <h5
          style={{
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "1px",
            color: "#00332c",
            marginBottom: "15px",
          }}
        >
          HOW IT WORKS
        </h5>

        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "800",
            color: "#00332c",
            marginBottom: "20px",
            lineHeight: "1.3",
          }}
        >
          We Help You <br />
          Prioritize Your <br />
          Mental Health
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#404040",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          Browse therapists, book a session, and <br />
          start your healing journey with trusted <br />
          professionals.
        </p>

        <button
          style={{
            backgroundColor: "#00332c",
            color: "white",
            padding: "12px 28px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
          }}
        >
          Find A Therapist
        </button>
      </div>

      {/* Right Side - Image */}
      <div
        style={{
          flex: "1 1 400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "280px",
        }}
      >
        <div
          style={{
            backgroundColor: "#003c3b",
            padding: "40px",
            borderRadius: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "400px",
            width: "100%",
            aspectRatio: "1 / 1", // ✅ keeps it square
          }}
        >
          <img
            src={heroImage}
            alt="Mental Health Illustration"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
