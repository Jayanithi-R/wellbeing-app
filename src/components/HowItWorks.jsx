import React from "react";
import heroImage from "../assets/hero(2).png";

const HeroSection = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem)",
        backgroundColor: "#f9f8f6",
          
        gap: "clamp(1.5rem, 4vw, 3rem)",
        flexWrap: "wrap", // ✅ allows responsiveness
      }}
    >
      {/* Left Side - Text */}
      <div
        style={{
          flex: "1 1 400px",
          minWidth: "280px",
          textAlign: "left",
        }}
      >
        <h5
          style={{
            fontSize: "clamp(0.7rem, 1vw, 0.9rem)",
            fontWeight: "600",
            letterSpacing: "1px",
            color: "#00332c",
            marginBottom: "clamp(0.5rem, 1vw, 1rem)",
          }}
        >
          HOW IT WORKS
        </h5>

        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: "800",
            color: "#00332c",
            marginBottom: "clamp(1rem, 2vw, 1.5rem)",
            lineHeight: "1.3",
          }}
        >
          We Help You <br />
          Prioritize Your <br />
          Mental Health
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            color: "#404040",
            marginBottom: "clamp(1.2rem, 2.5vw, 2rem)",
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
            padding: "clamp(0.6rem, 1.2vw, 0.8rem) clamp(1.2rem, 2vw, 1.8rem)",
            fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
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
        }}
      >
        <div
          style={{
            backgroundColor: "#003c3b",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
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
