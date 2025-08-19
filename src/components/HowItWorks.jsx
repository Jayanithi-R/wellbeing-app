import React from "react";
import heroImage from "../assets/hero.png"; // ✅ Your illustration

const HeroSection = () => {
  return (
    <>
      <style>{`
        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 60px 80px;
          background-color: #f9f8f6;
          font-family: 'Inter', sans-serif;
          gap: 40px;
        }

        .hero-text {
          flex: 1;
        }

        .hero-title {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #00332c;
          margin-bottom: 15px;
        }

        .hero-heading {
          font-size: 2.8rem;
          font-weight: 800;
          color: #00332c;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .hero-paragraph {
          font-size: 1.1rem;
          color: #404040;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .hero-button {
          background-color: #00332c;
          color: white;
          padding: 12px 28px;
          font-size: 1rem;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .hero-button:hover {
          background-color: #004d42;
        }

        .hero-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-box {
          background-color: #003c3b;
          padding: 40px;
          border-radius: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 400px;
          width: 100%;
          aspect-ratio: 1 / 1;
        }

        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 16px;
        }

        /* ✅ Tablet */
        @media (max-width: 992px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding: 40px 30px;
          }

          .hero-text {
            margin-bottom: 30px;
          }

          .hero-heading {
            font-size: 2.2rem;
          }

          .hero-paragraph {
            font-size: 1rem;
          }

          .hero-image-box {
            max-width: 320px;
            padding: 30px;
          }
        }

        /* ✅ Mobile */
        @media (max-width: 600px) {
          .hero {
            padding: 30px 20px;
          }

          .hero-heading {
            font-size: 1.8rem;
          }

          .hero-paragraph {
            font-size: 0.95rem;
          }

          .hero-button {
            font-size: 0.9rem;
            padding: 10px 20px;
          }

          .hero-image-box {
            max-width: 260px;
            padding: 20px;
          }
        }
      `}</style>

      <section className="hero">
        {/* Left Side - Text */}
        <div className="hero-text">
          <h5 className="hero-title">HOW IT WORKS</h5>
          <h1 className="hero-heading">
            We Help You <br />
            Prioritize Your <br />
            Mental Health
          </h1>
          <p className="hero-paragraph">
            Browse therapists, book a session, and <br />
            start your healing journey with trusted <br />
            professionals.
          </p>
          <button className="hero-button">Find A Therapist</button>
        </div>

        {/* Right Side - Image */}
        <div className="hero-image-container">
          <div className="hero-image-box">
            <img src={heroImage} alt="Mental Health Illustration" className="hero-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
