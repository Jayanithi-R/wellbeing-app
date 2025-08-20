import React from "react";
import { FaLinkedin, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="contact-container">
      {/* Top Text */}
      <p className="small-heading">GET IN TOUCH</p>
      <h2 className="main-heading">We’re Here to Support You</h2>
      <p className="sub-heading">
        Whether you have questions, need help getting started, or want to learn more — reach out anytime.
      </p>

      {/* Contact Box */}
      <div className="contact-box">
        {/* Left Section */}
        <div className="contact-left">
          <h3 className="heading3">Contact Details:</h3>
          <p className="text"><strong>Email:</strong> support@solus.com</p>
          <p className="text"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="text"><strong>Address:</strong> 123 Wellness Way, Calm City, CA 90210</p>

          {/* Social Icons */}
          <div className="social-icons">
            <FaLinkedin className="icon" />
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaWhatsapp className="icon" />
          </div>

          <p className="response">We typically respond within 12 hours.</p>
        </div>

        {/* Right Section (Form) */}
        <div className="contact-right">
          <h3 className="heading3">Send Us a Message</h3>
          <form>
            <label className="label">Email</label>
            <input type="email" placeholder="Email" required className="input" />

            <label className="label">Message</label>
            <textarea placeholder="Message" rows="4" required className="textarea"></textarea>

            <button type="submit" className="button">Send Message</button>
          </form>
        </div>
      </div>

      {/* CSS inside same file */}
      <style>{`
        .contact-container {
          background-color: #f7f6f3;
          padding: 70px 20px;
          font-family: "Inter", sans-serif;
          text-align: center;
        }

        .small-heading {
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 1px;
          color: #555;
          margin-bottom: 10px;
        }

        .main-heading {
          font-size: 32px;
          font-weight: 700;
          color: #00342e;
          margin-bottom: 15px;
        }

        .sub-heading {
          font-size: 16px;
          color: #555;
          margin-bottom: 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .contact-box {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          max-width: 950px;
          margin: 0 auto;
          background: #fff;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.06);
          flex-wrap: wrap;
        }

        .contact-left {
          flex: 1;
          text-align: left;
          min-width: 260px;
        }

        .contact-right {
          flex: 1;
          min-width: 300px;
          background: #fefaf5;
          border-radius: 20px;
          padding: 25px;
          text-align: left;
        }

        .heading3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #00342e;
        }

        .text {
          font-size: 15px;
          color: #222;
          margin: 10px 0;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .icon {
          font-size: 20px;
          color: #00342e;
          cursor: pointer;
          transition: 0.3s;
        }
        .icon:hover {
          color: #00796b;
        }

        .response {
          margin-top: 15px;
          font-size: 14px;
          color: #666;
        }

        .label {
          font-size: 14px;
          font-weight: 600;
          color: #00342e;
          display: block;
          margin-top: 15px;
        }

        .input, .textarea {
          width: 100%;
          padding: 10px;
          margin-top: 6px;
          margin-bottom: 15px;
          border: none;
          border-bottom: 1px solid #999;
          background: transparent;
          font-size: 14px;
          outline: none;
        }

        .input::placeholder, .textarea::placeholder {
          color: #bbb;
        }

        .textarea {
          resize: none;
        }

        .button {
          background: #00342e;
          color: #fff;
          padding: 14px 20px;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          font-size: 15px;
          width: 100%;
          margin-top: 15px;
          transition: background 0.3s;
        }
        .button:hover {
          background: #00564d;
        }

        /* ---------------- RESPONSIVENESS ---------------- */
        @media (max-width: 768px) {
          .contact-box {
            flex-direction: column;
            padding: 25px;
            gap: 25px;
          }

          .main-heading {
            font-size: 26px;
          }

          .sub-heading {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .contact-container {
            padding: 50px 15px;
          }

          .main-heading {
            font-size: 22px;
          }

          .sub-heading {
            font-size: 13px;
          }

          .contact-right {
            padding: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
