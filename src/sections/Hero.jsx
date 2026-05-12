import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

const Hero = () => {
  const stats = [
    { label: "Projects Delivered Worldwide", value: "17+", icon: "🚀" },
    { label: "Client Satisfaction Rate", value: "98%", icon: "⭐" },
    { label: "Average Delivery Time", value: "2-8 Weeks", icon: "⚡" },
    { label: "Global Support Availability", value: "24/7", icon: "💬" },
  ];

  return (
    <>

      <Helmet>
        <title>DevZore — Web & App Development Agency | Islamabad</title>
        <meta name="description" content="DevZore is a software development agency in Islamabad, Pakistan. We build websites, mobile apps, MERN stack solutions and SaaS products for clients worldwide." />
        <meta name="keywords" content="web development Pakistan, MERN stack development, mobile app development Islamabad, SaaS, software agency Pakistan, software company, Devzore " />
        <link rel="canonical" href="https://devzore.com/" />
        <meta property="og:title" content="DevZore — Web & App Development Agency" />
        <meta property="og:description" content="We build websites, mobile apps and SaaS products. Based in Islamabad, serving clients worldwide." />
        <meta property="og:url" content="https://devzore.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/preview.jpg" />

        <meta property="og:locale" content="en_US" />

      </Helmet>

      <section
        className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center"
        aria-label="Hero Section - DevZore Software Development Services"
      >
        {/* SEO Hidden Text */}
        <h2 className="sr-only">
          Custom MERN Stack Web Development, React Native Mobile Apps, SaaS Development, and Full Stack Software Solutions Worldwide
        </h2>

        {/* Available Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-green-300 text-xs">
          <span className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></span>
          Available 7 days/week • 2 hour response
        </div>

        {/* Main SEO Optimized Heading */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white">
          Build Your Dream <br />
          <span className="gradient-text">
            Website, Mobile App & SaaS Product
          </span>
        </h1>

        {/* SEO Rich Description */}
        <p className="text-gray-400 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
          Professional <strong>MERN Stack Development</strong>,{" "}
          <strong>React Native Mobile Apps</strong>, and{" "}
          <strong>Full Stack SaaS Solutions</strong> for startups, businesses, and global enterprises.
          We deliver scalable, SEO-optimized, and high-performance digital products in 2–8 weeks.
        </p>

        {/* 🔥 STEP 2: RESPONSIVE BUTTONS (Mobile ke liye optimized) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <Link
            to="/contact"
            aria-label="Get Free Software Development Quote"
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] text-center"
          >
            Get Free Quote →
          </Link>

          <a
            href="#projects"
            aria-label="View Our Web Development Portfolio"
            className="w-full sm:w-auto bg-[#111] border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all text-center"
          >
            View Our Work
          </a>
          
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="velocity-card p-6 border border-gray-200/10 bg-gray-300/5 
                transition-all duration-300 ease-out 
                hover:-translate-y-2 
                hover:shadow-[0_10px_30px_rgba(167,155,247,.1)] rounded-2xl">
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-1 text-white">{s.value}</div>
              <div className="text-white/60 font-bold text-[10px] md:text-[12px] uppercase tracking-widest leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* SEO Keywords Block (Hidden for ranking boost) */}
        <div className="hidden">
          MERN Stack Developer, React JS Developer, Node JS Backend Development,
          Next.js SEO Website, SaaS Development Company, Mobile App Development Agency,
          Full Stack Web Development Services, Custom Software Development Company,
          UI UX Design Services, E-commerce Development, API Development Services
        </div>
      </section>
    </>
  );
};

export default Hero;