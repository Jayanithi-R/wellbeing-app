// src/components/FAQSection.jsx
import React from "react";
import { Plus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    "How do I book a therapy session?",
    "Are online sessions available?",
    "What’s the difference between therapy and coaching?",
    "Do I need a subscription to access services?",
    "Can I switch therapists if I don’t feel the right connection?",
    "Is my information and session history kept confidential?",
  ];

  return (
    <section className="bg-[#F9F8F6] font-sans">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        {/* Left heading block (matches screenshot spacing/typography) */}
        <div className="mb-8 lg:mb-10">
          <p className="uppercase text-[10px] tracking-[0.14em] text-[#6B7A78] mb-3">
            NEED HELP?
          </p>
          <h2 className="text-[#0F2F2C] font-extrabold leading-tight tracking-[-0.01em] text-[32px] md:text-[40px]">
            Frequently
            <br /> Asked Questions
          </h2>
          <p className="text-[#445556] text-[15px] leading-[1.7] mt-4 max-w-[360px]">
            Find answers to common questions about
            our services, therapy, and mental well-being.
          </p>
        </div>

        {/* Two-column layout (left: illustration card, right: FAQ list) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left Illustration card (peach rounded box) */}
          <div className="order-2 md:order-1">
            <div className="bg-[#F7E5D1] rounded-[28px] w-full max-w-[520px] aspect-[4/3] md:aspect-[5/3] flex items-end justify-center overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.03)]">
              <img
                src="/faq-illustration.png" /* ← replace with your image */
                alt="FAQ Illustration"
                className="w-[86%] h-auto translate-y-[6%]"
              />
            </div>
          </div>

          {/* Right FAQ list */}
          <div className="order-1 md:order-2 w-full">
            <ul className="space-y-4">
              {faqs.map((q, i) => (
                <li
                  key={i}
                  className="bg-white rounded-[22px] px-6 md:px-7 py-5 flex items-center justify-between shadow-sm"
                >
                  <p className="text-[#112F2C] text-[15px] md:text-[15.5px] font-medium leading-snug">
                    {q}
                  </p>

                  {/* circular + button just like screenshot */}
                  <button
                    aria-label="Expand"
                    className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white ring-1 ring-[#0F2F2C]/30 hover:ring-[#0F2F2C]/60 transition"
                  >
                    <Plus className="w-[18px] h-[18px] text-[#0F2F2C]" strokeWidth={2.6} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
