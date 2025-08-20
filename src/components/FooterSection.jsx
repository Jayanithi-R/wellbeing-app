import React from "react";

const FooterSection = () => {
  return (
    <>
      <style>{`
        .footer-container {
          background-color: #f7f6f3;
          padding: 60px 20px;
          font-family: "Inter", sans-serif;
          display: flex;
          justify-content: center;
        }

        .footer-box {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          max-width: 1100px;
          width: 100%;
          gap: 40px;
          flex-wrap: wrap;
        }

        /* Left box */
        .footer-left {
          background: #fff;
          border-radius: 20px;
          padding: 40px 30px;
          flex: 1;
          min-width: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .footer-brand {
          font-size: 22px;
          font-weight: 700;
          color: #00342e;
          margin-bottom: 20px;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(3, auto);
          gap: 12px 40px;
          font-size: 14px;
          color: #00342e;
          margin-bottom: 20px;
        }

        .links-grid a {
          text-decoration: none;
          color: #00342e;
          transition: color 0.2s ease-in-out;
        }

        .links-grid a:hover {
          color: #066f4d;
        }

        .copyright {
          font-size: 12px;
          color: #888;
          margin-top: auto;
        }

        /* Right box */
        .footer-right {
          flex: 1;
          min-width: 300px;
          background: #00342e;
          color: #fff;
          border-radius: 24px;
          padding: 50px 40px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }

        .footer-right-text {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 30px;
          max-width: 300px;
        }

        .cta-button {
          background: #fff;
          color: #00342e;
          border: none;
          border-radius: 30px;
          padding: 14px 20px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          width: fit-content;
          min-width: 220px;
          text-align: center;
          transition: 0.3s;
        }

        .cta-button:hover {
          background: #f4f4f4;
        }

        /* Decorations (optional) */
        .decorations {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        .decorations img {
          width: 70px;
          height: auto;
        }

        /* ✅ RESPONSIVE DESIGN */

        /* Tablets */
        @media (max-width: 900px) {
          .footer-box {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }

          .footer-left,
          .footer-right {
            width: 100%;
            max-width: 650px;
          }

          .links-grid {
            grid-template-columns: repeat(2, auto);
            gap: 12px 30px;
          }

          .footer-right-text {
            font-size: 24px;
          }
        }

        /* Mobile */
        @media (max-width: 500px) {
          .footer-container {
            padding: 40px 15px;
          }

          .footer-left {
            padding: 25px;
          }

          .footer-right {
            padding: 30px 20px;
          }

          .footer-right-text {
            font-size: 20px;
            max-width: 100%;
          }

          .cta-button {
            font-size: 13px;
            padding: 12px 16px;
            width: 100%;
          }

          .links-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .decorations img {
            width: 50px;
          }
        }
      `}</style>

      <div className="footer-container">
        <div className="footer-box">
          {/* Left Section */}
          <div className="footer-left">
            <h3 className="footer-brand">Solus</h3>
            <div className="links-grid">
              <a href="#">About</a>
              <a href="#">Instagram</a>
              <a href="#">Terms Of Use</a>
              <a href="#">Services</a>
              <a href="#">Facebook</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Therapists</a>
              <a href="#">YouTube</a>
              <a href="#">Resources</a>
              <a href="#">LinkedIn</a>
              <a href="#">Contact</a>
            </div>
            <p className="copyright">© [2035] Solus. All Rights Reserved.</p>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <p className="footer-right-text">
              Find Support, <br />
              Guidance, <br />
              and Balance.
            </p>
            <button className="cta-button">Find Support Now</button>

            {/* Decorative Images */}
            <div className="decorations">
              {/* <img src={rainbow} alt="Rainbow" /> */}
              {/* <img src={flower1} alt="Flower" /> */}
              {/* <img src={flower2} alt="Flower" /> */}
              {/* <img src={flower3} alt="Flower" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
