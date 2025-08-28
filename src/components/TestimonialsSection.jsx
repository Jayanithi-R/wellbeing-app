import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const partnerLogos = [partner1, partner2, partner3, partner4, partner5];

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f7f6f3",
        padding: "clamp(2rem, 6vw, 4rem) clamp(1.5rem, 5vw, 2.5rem)",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "clamp(1.5rem, 4vw, 3rem)",
          flexWrap: "wrap",
        }}
      >
        {/* Left Header */}
        <div style={{ flex: 1, minWidth: "clamp(220px, 40%, 350px)" }}>
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
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              color: "#00342e",
              margin: "clamp(0.5rem, 1.2vw, 1rem) 0",
            }}
          >
            What Our Clients Are Saying
          </h2>
          <p
            style={{
              color: "#265a55",
              fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
              lineHeight: 1.6,
            }}
          >
            Positive experiences from users who have <br />
            benefited from therapy or wellness programs.
          </p>

          {/* Arrow Buttons */}
          {isMobile && (
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <button
                onClick={scrollLeft}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  color: "#00342e",
                  border: "1px solid #e0e0e0",
                }}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={scrollRight}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  backgroundColor: "#00342e",
                  color: "#ffffff",
                  border: "none",
                }}
              >
                <FaArrowRight />
              </button>
            </div>
          )}
        </div>

        {/* Right Testimonial Cards */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: "1rem",
            direction:  "ltr",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              direction: "ltr",
              flex: "0 0 auto",
              width: "clamp(250px, 80vw, 320px)",
              borderRadius: "24px",
              padding: "1rem",
              lineHeight: 1.6,
              fontSize: "0.9rem",
              boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
              backgroundColor: "#fce8d2",
              color: "#2d2d2d",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              scrollSnapAlign: "start",
            }}
          >
            <p>
              "Solus made it so easy to find the right therapist for me. The
              sessions have truly transformed my mindset, and I feel more in
              control of my emotions than ever before!"
            </p>
            <p
              style={{
                marginTop: "0.8rem",
                fontWeight: 500,
                fontSize: "0.85rem",
              }}
            >
              — Anna R., 32
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              direction: "ltr",
              flex: "0 0 auto",
              width: "clamp(250px, 80vw, 320px)",
              borderRadius: "24px",
              padding: "1rem",
              lineHeight: 1.6,
              fontSize: "0.9rem",
              boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
              backgroundColor: "#00454b",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              scrollSnapAlign: "start",
            }}
          >
            <p>
              "I was struggling with stress and anxiety, but the mindfulness
              program at Solus has helped me regain balance. I finally feel like
              I'm prioritizing my mental well-being."
            </p>
            <p
              style={{
                marginTop: "0.8rem",
                fontWeight: 500,
                fontSize: "0.85rem",
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
          padding: "2rem",
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            color: "#00342e",
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          Our Partners
        </p>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {partnerLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Partner ${index + 1}`}
              style={{
                height: "40px",
                maxWidth: "120px",
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


