import React from "react";
// import { Helmet } from "react-helmet-async";

const whyUsData = [
  {
    icon: "💰",
    title: "Transparent Pricing for Global Clients",
    desc: "We offer clear and fixed pricing for all software development services. No hidden charges, no surprises. Our transparent pricing model builds trust with international clients and businesses."
  },
  {
    icon: "⚡",
    title: "Agile Process, On-Time Delivery",
    desc: "We deliver high-performance web and mobile applications within 2–8 weeks. Our agile development process ensures speed, scalability, and quality for startups and enterprises."
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership Approach",
    desc: "We work as your technology partner, not just a service provider. Continuous support, updates, and improvements are included to ensure long-term success."
  },
  {
    icon: "🎨",
    title: "Custom Web & Software Solutions",
    desc: "Every project is fully custom-built using modern technologies like React, Next.js, and Node.js to match your business goals and user experience requirements."
  },
  {
    icon: "📞",
    title: "Transparent Communication",
    desc: "Communicate directly with experienced developers. No middlemen. This ensures faster decisions, better understanding, and high-quality results."
  },
  {
    title: "Scalable & Production-Ready Code",
    desc: "We write clean, maintainable, and high-quality code designed to handle millions of users. Our applications are rigorously tested and optimized for peak performance.",
    icon: "🏗️",
    path: "/scalable-code-architecture"
  },
  {
    icon: "🔒",
    title: "Full Ownership & Security",
    desc: "You get complete ownership of your project, source code, and data. We follow best security practices to protect your application and business."
  }
];

export default function WhyUs() {
  return (
    <>
      {/* 🔥 SEO META */}
      {/* <Helmet>
        <title>Why Choose DevZore | Software Development Company for Global Clients</title>

        <meta
          name="description"
          content="Discover why DevZore is the best software development company offering web development, mobile apps, SaaS solutions, and scalable applications for international clients."
        />

        <meta
          name="keywords"
          content="software development company, hire developers, web development services, MERN stack developer, React developer, SaaS development, mobile app development, custom software solutions, outsourcing development, IT company Pakistan"
        />

        <meta name="robots" content="index, follow" />
      </Helmet> */}

      {/* 🔥 STRUCTURED DATA (SEO BOOST) */}
      {/* <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DevZore",
          "url": "https://devzore.com",
          "description": "Professional software development company providing web, mobile, and SaaS solutions globally",
          "areaServed": "Worldwide"
        })}
      </script> */}

      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#080808]">

        {/* HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Why Choose DevZore?
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            We provide professional web development, mobile app development, and SaaS solutions tailored for startups, businesses, and international clients.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {whyUsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#100f0f] border border-white/10 p-6 md:p-8 rounded-[6px] hover:border-purple-600/50 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>

              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}