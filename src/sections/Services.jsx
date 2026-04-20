import React from 'react';
import SectionTag from '../components/SectionTag';
import { Helmet } from "react-helmet-async";

const Services = () => {

  const mainServices = [
    { title: "Web Development Services", desc: "Custom SEO-optimized websites and web applications using React, Next.js, and modern JavaScript frameworks.", icon: "🌐" },
    { title: "Mobile App Development", desc: "High-performance Android and iOS apps using React Native and Flutter for scalable business solutions.", icon: "📱" },
    { title: "E-Commerce Development", desc: "Complete eCommerce solutions with payment integration, cart systems, and inventory management.", icon: "🛒" },
    { title: "API & Backend Development", desc: "Secure and scalable REST APIs, Node.js microservices, and cloud-based backend systems.", icon: "⚙️" },
    { title: "UI/UX Design Services", desc: "Modern UI/UX design focused on user experience, conversion rate, and responsive layouts.", icon: "🎨" },
    { title: "Startup MVP Development", desc: "Launch your startup fast with MVP development in 2-4 weeks using agile methodology.", icon: "🚀" },
  ];

  const industries = [
    { title: "E-Commerce Solutions", desc: "Online stores, marketplaces, and custom shopping platforms.", icon: "🛒" },
    { title: "Healthcare Software", desc: "Telemedicine apps, patient portals, and medical management systems.", icon: "⚕️" },
    { title: "Real Estate Platforms", desc: "Property listing websites, CRM systems, and rental management apps.", icon: "🏠" },
    { title: "Food & Restaurant Apps", icon: "🍕", desc: "Online ordering, delivery systems, and restaurant management solutions." },
    { title: "Automotive Software", icon: "🚗", desc: "Car rental platforms, dealership systems, and vehicle marketplaces." },
    { title: "E-Learning Platforms", icon: "🎓", desc: "LMS systems, online courses, and student portals." },
    { title: "Fintech Applications", icon: "💰", desc: "Payment gateways, invoicing systems, and financial dashboards." },
    { title: "Fitness & Wellness Apps", icon: "💪", desc: "Gym management, fitness tracking, and health applications." },
    { title: "Travel & Booking Systems", icon: "✈️", desc: "Hotel booking platforms and travel agency websites." },
    { title: "Salon & Beauty Apps", icon: "💅", desc: "Booking systems, memberships, and beauty service platforms." },
  ];

  return (
    <>
      {/* 🔥 ADVANCED SEO META */}
      <Helmet>
        <title>DevZore Services | Web Development, Mobile Apps & SaaS Solutions</title>

        <meta 
          name="description" 
          content="DevZore is a leading software development company providing web development, mobile app development, SaaS solutions, and SEO optimized applications worldwide." 
        />

        <meta 
          name="keywords" 
          content="software development company, web development services, mobile app development, MERN stack developer, React developer, Next.js development, SaaS development, API development, UI UX design, startup MVP development, software house Pakistan" 
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* 🔥 JSON-LD SCHEMA (Google Ranking Boost) */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DevZore",
          "url": "https://devzore.com",
          "description": "Global software development company providing web, mobile, and SaaS solutions",
          "sameAs": [
            "https://linkedin.com",
            "https://github.com"
          ]
        }
        `}
      </script>

      <section id="services" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <SectionTag text="SERVICES" />
          <h1 className="text-3xl md:text-5xl font-bold mt-5 text-white">
            Professional Software Development Services
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We provide high-quality web development, mobile app development, and SaaS solutions for startups and enterprises worldwide.
          </p>
        </div>

        {/* MAIN SERVICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {mainServices.map((service, i) => (
            <div key={i} className="p-8 bg-[#0a0a0a] border border-white/10 rounded-[6px] hover:border-purple-500 transition-all">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* INDUSTRIES */}
        <div className="text-center mb-12">
          <SectionTag text="INDUSTRIES" />
          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white">
            Industries We Serve
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We deliver custom software solutions for multiple industries and business domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, i) => (
            <div key={i} className="p-6 bg-[#0a0a0a] border border-white/10 rounded-[6px] text-center hover:border-purple-500 transition-all">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="font-bold text-lg text-white mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default Services;