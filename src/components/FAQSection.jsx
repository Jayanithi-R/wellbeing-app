// // src/components/FAQSection.jsx
// import React from "react";
// import { Plus } from "lucide-react"; // icon

// export default function FAQSection() {
//   const faqs = [
//     "How do I book a therapy session?",
//     "Are online sessions available?",
//     "What’s the difference between therapy and coaching?",
//     "Do I need a subscription to access services?",
//     "Can I switch therapists if I don’t feel the right connection?",
//     "Is my information and session history kept confidential?",
//   ];

//   return (
//     <section className="bg-[#F9F8F6] py-16 px-6 md:px-20 font-sans">
//       {/* Top Text Section */}
//       <div className="max-w-6xl mx-auto">
//         <p className="text-xs tracking-wider text-gray-500 mb-2">NEED HELP?</p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
//           Frequently <br /> Asked Questions
//         </h2>
//         <p className="text-gray-600 max-w-md mb-10">
//           Find answers to common questions about our services, therapy,
//           and mental well-being.
//         </p>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           {/* Left Image */}
//           <div className="flex justify-center md:justify-start">
//             <img
//               src="/faq-illustration.png" // replace with your illustration
//               alt="FAQ Illustration"
//               className="w-[360px] h-auto rounded-2xl"
//             />
//           </div>

//           {/* Right FAQ Cards */}
//           <div className="flex flex-col gap-5">
//             {faqs.map((question, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center bg-white rounded-2xl shadow-sm px-6 py-4 hover:shadow-md transition"
//               >
//                 <p className="text-gray-800 font-medium">{question}</p>
//                 <Plus className="text-gray-700 w-5 h-5" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
