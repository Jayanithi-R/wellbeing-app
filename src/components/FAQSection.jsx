import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import web from "../assets/web(2).png"; // ✅ import from src/assets

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    "How do I book a therapy session?",
    "Are online sessions available?",
    "What’s the difference between therapy and coaching?",
    "Do I need a subscription to access services?",
    "Can I switch therapists if I don’t feel the right connection?",
    "Is my information and session history kept confidential?",
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {/* Left Section */}
      <div className="faq-left">
        <p className="small-text">NEED HELP?</p>
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <p className="faq-desc">
          Find answers to common questions about our services,<br />
          therapy, and mental well-being.
        </p>

        {/* ✅ Box behind image */}
        <div className="faq-image-box">
          <img src={web} alt="illustration" className="faq-image" />
        </div>
      </div>

      {/* Right Section */}
      <div className="faq-right">
        {faqs.map((q, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "faq-active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <p className="faq-question">{q}</p>
            {activeIndex === index ? (
              <FaMinus className="faq-icon" />
            ) : (
              <FaPlus className="faq-icon" />
            )}
          </div>
        ))}
      </div>

      {/* CSS */}
      <style>{`
        .faq-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 60px;
          padding: 60px 80px;
          background: #f7f6f3;
          font-family: "Inter", sans-serif;
        }

        .faq-left {
          flex: 1;
        }

        .small-text {
          font-size: 11px;
          font-weight: 500;
          color: #666;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .faq-heading {
          font-size: 28px;
          font-weight: 700;
          color: #00342e;
          margin-bottom: 15px;
        }

        .faq-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #555;
          margin-bottom: 30px;
        }

        /* ✅ Box behind image */
        .faq-image-box {
          display: inline-block;
          padding: 20px;
          background: #F9E6D0;
          border-radius: 24px;
          box-shadow: 0px 4px 15px rgba(0,0,0,0.08);

        }

        .faq-image {
          max-width: 280px;
          border-radius: 20px;
          display: block;
        }

        .faq-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .faq-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          padding: 16px 20px;
          border-radius: 14px;
          cursor: pointer;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          background: #fdfdfd;
        }

        .faq-question {
          font-size: 15px;
          font-weight: 600;
          color: #00342e;
        }

        .faq-icon {
          font-size: 14px;
          color: #00342e;
          flex-shrink: 0;
        }

        /* Active FAQ */
        .faq-active {
          border: 1px solid #00342e;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .faq-container {
            flex-direction: column;
            padding: 40px 30px;
          }

          .faq-left {
            text-align: center;
          }

          .faq-image-box {
            margin: 20px auto 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQSection;
