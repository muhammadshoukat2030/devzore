import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  const stats = [
    { label: "Projects Delivered Worldwide", value: "17+", icon: "🚀" },
    { label: "Client Satisfaction Rate", value: "98%", icon: "⭐" },
    { label: "Average Delivery Time", value: "2-8 Weeks", icon: "⚡" },
    { label: "Global Support Availability", value: "24/7", icon: "💬" },
  ];

  return (
    <section
      className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center"
      aria-label="Hero Section - DevZore Software Development Services"
    >
      {/* SEO Hidden Text (Google-friendly, no UI impact) */}
      <h2 className="sr-only">
        Custom MERN Stack Web Development, React Native Mobile Apps, SaaS Development, and Full Stack Software Solutions Worldwide
      </h2>

      <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-green-300 text-lxs">
        <span className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></span>
        Available 7 days/week • 2 hour response
      </div>

      {/* Main SEO Optimized Heading */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        Build Your Dream <br />
        <span className="gradient-text">
          Website, Mobile App & SaaS Product
        </span>
      </h1>

      {/* SEO Rich Description */}
      <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
        Professional <strong>MERN Stack Development</strong>,{" "}
        <strong>React Native Mobile Apps</strong>, and{" "}
        <strong>Full Stack SaaS Solutions</strong> for startups, businesses, and global enterprises.
        We deliver scalable, SEO-optimized, and high-performance digital products in 2–8 weeks.
      </p>



      <div className="flex justify-center gap-4 mb-20">
        <Link
          to="/contact"
          aria-label="Get Free Software Development Quote"
          className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] inline-block"
        >
          Get Free Quote →
        </Link>


        <button className="bg-[#111] border border-white/10 px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-all">
          <a href="#projects" aria-label="View Our Web Development Portfolio">
            View Our Work
          </a>
        </button>
      </div>


      {/* Stats Section (SEO enhanced labels) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="velocity-card border border-gray-200/25 bg-gray-300/5 
              transition-all duration-300 ease-out 
              hover:-translate-y-2 
              hover:shadow-[0_10px_30px_rgba(167,155,247,.1)]">
            <div className="text-4xl mb-4">{s.icon}</div>
            <div className="text-4xl font-bold mb-1">{s.value}</div>
            <div className="text-white/70 font-bold text-[12px] uppercase tracking-widest">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* SEO Keywords Block (Hidden for ranking boost, safe) */}
      <div className="hidden">
        MERN Stack Developer, React JS Developer, Node JS Backend Development,
        Next.js SEO Website, SaaS Development Company, Mobile App Development Agency,
        Full Stack Web Development Services, Custom Software Development Company,
        UI UX Design Services, E-commerce Development, API Development Services
      </div>
    </section >
  );
};

export default Hero;