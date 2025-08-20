import React from "react";
import communityImg from "../assets/community(2).png"; // ✅ imported from src/assets

const CommunitySection = () => {
  return (
    <>
      <style>{`
        .community-section {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f9f9f7;
          padding: 60px 20px;
          font-family: 'Inter', sans-serif;
        }

        .community-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #ffffff;
          border-radius: 25px;
          padding: 50px;
          max-width: 1100px;
          width: 100%;
          box-sizing: border-box;
          gap: 40px;
        }

        /* Left Text */
        .community-text {
          flex: 1;
          max-width: 500px;
        }

        .community-label {
          font-size: 12px;
          font-weight: 600;
          color: #1a2e35;
          text-transform: uppercase;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }

        .community-title {
          font-size: 32px;
          font-weight: 700;
          color: #123d3a;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .community-subtitle {
          font-size: 16px;
          color: #445556;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .btn-community {
          background-color: #0c3b36;
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .btn-community:hover {
          background-color: #092f2a;
        }

        /* Right Image */
        .community-image {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        .community-image img {
          max-width: 380px;
          height: auto;
        }

        /* 📱 Tablet View */
        @media (max-width: 992px) {
          .community-container {
            flex-direction: column;
            text-align: center;
            padding: 40px 30px;
          }

          .community-text {
            max-width: 100%;
          }

          .community-image {
            justify-content: center;
          }

          .community-image img {
            max-width: 300px;
          }
        }

        /* 📱 Mobile View */
        @media (max-width: 600px) {
          .community-container {
            padding: 30px 20px;
          }

          .community-title {
            font-size: 24px;
          }

          .community-subtitle {
            font-size: 14px;
          }

          .btn-community {
            width: 100%;
            padding: 12px;
            font-size: 15px;
          }

          .community-image img {
            max-width: 240px;
          }
        }
      `}</style>

      <section className="community-section">
        <div className="community-container">
          {/* Left Content */}
          <div className="community-text">
            <p className="community-label">COMMUNITY</p>
            <h2 className="community-title">
              You’re Not Alone <br /> on This Journey
            </h2>
            <p className="community-subtitle">
              Connect with others, share experiences, <br />
              and find encouragement in a safe, <br />
              supportive space.
            </p>
            <button className="btn-community">Join The Community</button>
          </div>

          {/* Right Image */}
          <div className="community-image">
            <img src={communityImg} alt="Community" /> {/* ✅ updated */}
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunitySection;
