import React from "react";
// import red from "../assets/1234.png"; // ✅ mindfulness image
import servicesIllustration from "../assets/services-illustration.png";
import extraImage from "../assets/extraImage.png"; // still imported for later use

const ServicesSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#f9f8f6",
        padding: "80px 40px",
        fontFamily: "'Inter', sans-serif",
        textAlign: "center",
        width: "100%",
      }}
    >
      <h6
        style={{
          textTransform: "uppercase",
          fontSize: "12px",
          color: "#00332c",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        SERVICES
      </h6>

      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: 800,
          color: "#00332c",
          marginBottom: "10px",
        }}
      >
        Your Path to Well-being
      </h1>

      <p
        style={{
          fontSize: "1rem",
          color: "#00332c",
          marginBottom: "50px",
        }}
      >
        Discover expert guidance for a healthier <br /> mind and balanced life.
      </p>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "#fce6cf",
            borderRadius: "25px",
            padding: "30px",
            flex: "1 1 320px",
            maxWidth: "400px",
            textAlign: "left",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            backgroundImage: `url(${servicesIllustration})`,
            // backgroundPosition:"center",
            backgroundSize: "cover",
          }}
        >
          {/* ✅ Added mindfulness image */}
          {/* <img src={red} alt="Mindfulness" style={{ width: "100%", borderRadius: "15px", marginBottom: "15px" }} /> */}

          <h6
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#00332c",
              marginBottom: "10px",
            }}
          >
            Mindfulness & Meditation
          </h6>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#00332c",
              marginBottom: "20px",
              lineHeight: 1.5,
            }}
          >
            Guided meditation sessions and <br /> stress management techniques.
          </p>
          <button
            style={{
              padding: "10px 18px",
              border: "1px solid #00332c",
              borderRadius: "25px",
              color: "#00332c",
              backgroundColor: "transparent",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "25px",
            padding: "30px",
            flex: "1 1 320px",
            maxWidth: "400px",
            textAlign: "left",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <h6
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#00332c",
              marginBottom: "10px",
            }}
          >
            One-on-One Therapy
          </h6>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#00332c",
              marginBottom: "20px",
              lineHeight: 1.5,
            }}
          >
            Virtual and in-person therapy <br /> sessions with licensed
            professionals.
          </p>
          <button
            style={{
              padding: "10px 18px",
              border: "1px solid #00332c",
              borderRadius: "25px",
              color: "#00332c",
              backgroundColor: "transparent",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Coaching Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
          background: "white",
          borderRadius: "25px",
          padding: "40px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 2, textAlign: "left" }}>
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#00332c",
              marginBottom: "10px",
            }}
          >
            Wellness Coaching
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#00332c",
              marginBottom: "20px",
              lineHeight: 1.5,
            }}
          >
            Personalized guidance to help you build healthier habits, manage
            stress, and achieve balance in all areas of your life. <br />
            <br />
            Our wellness coaches support you in creating sustainable routines
            for mental, emotional, and physical well-being.
          </p>
          <button
            style={{
              padding: "10px 18px",
              backgroundColor: "#00332c",
              color: "white",
              border: "none",
              borderRadius: "25px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>

        <div style={{ flex: 1, maxWidth: "220px" }}>
          {/* <img
            src={servicesIllustration}
            alt="Wellness Illustration"
            style={{ width: "100%", borderRadius: "20px" }}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
