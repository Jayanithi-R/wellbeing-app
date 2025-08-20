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
          padding: 60px 20px;
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
          font-size: 28px;
          font-weight: 700;
          color: #00342e;
          margin-bottom: 10px;
        }

        .sub-heading {
          font-size: 15px;
          color: #555;
          margin-bottom: 40px;
        }

        .contact-box {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          max-width: 900px;
          margin: 0 auto;
          background: #fff;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0px 2px 8px rgba(0,0,0,0.08);
          flex-wrap: wrap;
        }

        .contact-left {
          flex: 1;
          text-align: left;
          min-width: 250px;
        }

        .contact-right {
          flex: 1;
          min-width: 280px;
          background: #fefaf5;
          border-radius: 16px;
          padding: 20px;
          text-align: left;
        }

        .heading3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #00342e;
        }

        .text {
          font-size: 14px;
          color: #222;
          margin: 8px 0;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 15px;
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
          font-size: 13px;
          color: #666;
        }

        .label {
          font-size: 14px;
          font-weight: 600;
          color: #00342e;
          display: block;
          margin-top: 10px;
        }

        .input, .textarea {
          width: 100%;
          padding: 10px;
          margin-top: 6px;
          margin-bottom: 12px;
          border: none;
          border-bottom: 1px solid #999;
          background: transparent;
          font-size: 14px;
          outline: none;
        }

        .textarea {
          resize: none;
        }

        .button {
          background: #00342e;
          color: #fff;
          padding: 12px 20px;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          font-size: 14px;
          width: 100%;
          margin-top: 10px;
          transition: background 0.3s;
        }
        .button:hover {
          background: #00564d;
        }

        /* ---------------- RESPONSIVENESS ---------------- */
        @media (max-width: 768px) {
          .contact-box {
            flex-direction: column;
            padding: 20px;
            gap: 20px;
          }

          .main-heading {
            font-size: 24px;
          }

          .sub-heading {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .contact-container {
            padding: 40px 15px;
          }

          .main-heading {
            font-size: 20px;
          }

          .sub-heading {
            font-size: 13px;
          }

          .contact-right {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
