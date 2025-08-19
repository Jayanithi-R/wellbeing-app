// src/components/FAQSection.jsx
import React from "react";
import { Plus } from "lucide-react"; // for plus icon

export default function FAQSection() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-start p-10 font-sans">
      {/* Top Text */}
      <p className="text-xs tracking-wide text-gray-500 mb-2 self-start">
        NEED HELP?
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 leading-snug self-start">
        Frequently <br />
        Asked Questions
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-md mt-4 self-start">
        Find answers to common questions about our services, therapy, and mental
        well-being.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 w-full max-w-6xl">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/faq-illustration.png" // replace with your image path
            alt="FAQ Illustration"
            className="w-[350px] h-auto rounded-2xl"
          />
        </div>

        {/* Right FAQ Box */}
        <div className="flex flex-col gap-4">
          {[
            "How do I book a therapy session?",
            "Are online sessions available?",
            "What’s the difference between therapy and coaching?",
            "Do I need a subscription to access services?",
            "Can I switch therapists if I don’t feel the right connection?",
            "Is my information and session history kept confidential?",
          ].map((question, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white shadow-sm rounded-2xl px-6 py-4"
            >
              <p className="text-gray-800 font-medium">{question}</p>
              <Plus className="text-gray-700 w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
