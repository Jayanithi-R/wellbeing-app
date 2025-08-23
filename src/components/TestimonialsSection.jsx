import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const partnerLogos = [partner1, partner2, partner3, partner4, partner5];

  return (
    <div
      style={{
        backgroundColor: "#f7f6f3",
        padding: "clamp(2rem, 5vw, 4rem) 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: isMobile ? "center" : "flex-start",
          gap: "clamp(2rem, 4vw, 3rem)",
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Header */}
        <div
          style={{
            width: isMobile ? "100%" : "35%",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
              letterSpacing: "0.08em",
              color: "#00514a",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            TESTIMONIALS
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              fontWeight: 700,
              color: "#00342e",
              margin: "clamp(0.5rem, 1vw, 1rem) 0",
              lineHeight: 1.3,
            }}
          >
            What Our Clients Are Saying
          </h2>
          <p
            style={{
              color: "#265a55",
              fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
              lineHeight: 1.6,
            }}
          >
            Positive experiences from users who have <br />
            benefited from therapy or wellness programs.
          </p>

          {/* Arrows */}
          <div
            style={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: "clamp(0.8rem, 1vw, 1rem)",
              marginTop: "clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            <button
              style={{
                width: "clamp(2.4rem, 3vw, 2.8rem)",
                height: "clamp(2.4rem, 3vw, 2.8rem)",
                borderRadius: "50%",
                fontSize: "clamp(0.9rem, 1vw, 1rem)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "#ffffff",
                color: "#00342e",
                border: "1px solid #e0e0e0",
                transition: "all 0.3s ease",
              }}
            >
              <FaArrowLeft />
            </button>
            <button
              style={{
                width: "clamp(2.4rem, 3vw, 2.8rem)",
                height: "clamp(2.4rem, 3vw, 2.8rem)",
                borderRadius: "50%",
                fontSize: "clamp(0.9rem, 1vw, 1rem)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "#00342e",
                color: "#ffffff",
                border: "none",
                transition: "all 0.3s ease",
              }}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Testimonial Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "clamp(1rem, 2vw, 1.5rem)",
            flex: "2 1 500px",
            justifyContent: "center",
            alignItems: "stretch",
            width: "100%",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              borderRadius: "24px",
              padding: "clamp(1.2rem, 2vw, 1.8rem)",
              flex: isMobile ? 0 : "1 1 35%",
              lineHeight: 1.6,
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
              backgroundColor: "#fce8d2",
              color: "#2d2d2d",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between",
            }}
          >
            <p>
              "Solus made it so easy to find the right therapist for me. The
              sessions have truly transformed my mindset, and I feel more in
              control of my emotions than ever before!"
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontWeight: 500,
                fontSize: "clamp(0.8rem, 0.9vw, 0.85rem)",
              }}
            >
              — Anna R., 32
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              borderRadius: "24px",
              padding: "clamp(1.2rem, 2vw, 1.8rem)",
              flex: isMobile ? 0 : "1 1 35%",
              lineHeight: 1.6,
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
              backgroundColor: "#00454b",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between",
            }}
          >
            <p>
              "I was struggling with stress and anxiety, but the mindfulness
              program at Solus has helped me regain balance. I finally feel like
              I'm prioritizing my mental well-being."
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontWeight: 500,
                fontSize: "clamp(0.8rem, 0.9vw, 0.85rem)",
              }}
            >
              — Mark S., 41
            </p>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "36px",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          marginTop: "clamp(2rem, 5vw, 3rem)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          // gap: "clamp(1rem, 2vw, 1.5rem)",
          width: "80%",
          // maxWidth: "1100px",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            color: "#00342e",
            fontSize: "clamp(0.9rem, 1vw, 1rem)",
            textAlign: "center",
          }}
        >
          Our Partners
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(1rem, 3vw, 4rem)",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {partnerLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Partner ${index + 1}`}
              style={{
                height: "clamp(30px, 4vw, 50px)",
                maxWidth: "clamp(70px, 12vw, 150px)",
                objectFit: "contain",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
