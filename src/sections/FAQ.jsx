import React, { useState } from 'react';
import SectionTag from '../components/SectionTag';
import { Helmet } from "react-helmet-async"; // ✅ sirf ye rakho

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What software development services do you offer globally?",
      answer: "We provide international-level software development services including MERN Stack development, Next.js web apps, custom SaaS platforms, business websites, and mobile app development using React Native. Our solutions are optimized for performance, SEO, and scalability."
    },
    {
      question: "How long does a custom web or mobile app project take?",
      answer: "Project timelines vary depending on complexity. A standard business website takes 2-4 weeks, while advanced web applications or SaaS platforms take 4-8 weeks. We also offer fast MVP development for startups to launch quickly."
    },
    {
      question: "Do you provide SEO optimization for websites?",
      answer: "Yes, we build SEO-optimized websites with fast loading speed, mobile responsiveness, structured data, keyword optimization, and Google ranking strategies."
    },
    {
      question: "What technologies do you use for modern web development?",
      answer: "We use MongoDB, Express.js, React.js, Node.js, Next.js, Tailwind CSS, and cloud platforms."
    },
    {
      question: "Do you offer website redesign and optimization?",
      answer: "Yes, we redesign and optimize websites for speed, SEO, UI/UX, and better conversion."
    },
    {
      question: "How can I hire your company?",
      answer: "You can contact us via WhatsApp or website. We work globally with affordable pricing."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* ✅ SEO META */}
      <Helmet>
        <title>DevZore | Leading Software & Product Development Services</title>
        <meta name="description" content="DevZore provides MERN stack, Next.js, SaaS and mobile app development services worldwide with SEO optimized solutions." />
        <meta name="keywords" content="software company, MERN stack, React developer, Next.js, SaaS, mobile app development, SEO services" />
      </Helmet>

      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto bg-[#050505]">
        <div className="text-center mb-16">
          <SectionTag text="FAQ" />
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-4">
            Everything about our web, mobile, and SEO services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`border rounded-[5px] transition-all duration-300 overflow-hidden ${
                activeIndex === i 
                ? 'border-purple-500 bg-purple-500/5' 
                : 'border-white/5 bg-[#0A0A0A]'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(i)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <span className={`font-bold ${activeIndex === i ? 'text-purple-400' : 'text-white'}`}>
                  {faq.question}
                </span>
                <span className={`${activeIndex === i ? 'rotate-45 text-purple-400' : 'text-gray-500'}`}>
                  +
                </span>
              </button>

              <div className={`${activeIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} transition-all`}>
                <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;