import React from 'react';
import { Link } from 'react-router-dom';
import SectionTag from '../components/SectionTag';
import { Helmet } from "react-helmet-async";

const Services = () => {

  const mainServices = [
    {
      title: "Custom Web Development Services",
      desc: "We build high-performance, SEO-optimized websites and web applications using React, Next.js, and modern JavaScript frameworks for global businesses.",
      icon: "🌐",
      path: "/web-development" // Links to WebDevelopment.jsx
    },
    {
      title: "Mobile App Development (iOS & Android)",
      desc: "Scalable and user-friendly mobile applications using React Native and Flutter for startups and enterprises worldwide.",
      icon: "📱",
      path: "/mobile-apps"
    },
    {
      title: "E-Commerce Website Development",
      desc: "Full-featured eCommerce platforms with secure payment integration, product management, and conversion-focused UI/UX.",
      icon: "🛒",
      path: "/ecommerce"
    },
    {
      title: "Backend & API Development",
      desc: "Robust backend systems using Node.js, Express, and cloud architecture with secure REST APIs and scalable microservices.",
      icon: "⚙️",
      path: "/backend-api"
    },
    {
      title: "UI/UX Design & Optimization",
      desc: "Modern, responsive, and conversion-focused UI/UX design to enhance user experience and business growth.",
      icon: "🎨",
      path: "/ui-ux-design"
    },
    {
      title: "Startup MVP Development",
      desc: "Launch your startup quickly with MVP development services in 2–4 weeks using agile methodology and modern tech stack.",
      icon: "🚀",
      path: "/startup-mvp"
    }
  ];

  const industries = [
    { title: "E-Commerce Development", desc: "Custom online stores, marketplaces, and scalable shopping platforms.", icon: "🛒" },
    { title: "Healthcare Software Solutions", desc: "Telemedicine apps, patient portals, and healthcare management systems.", icon: "⚕️" },
    { title: "Real Estate Web Platforms", desc: "Property listing websites, CRM systems, and rental management applications.", icon: "🏠" },
    { title: "Food & Restaurant Applications", icon: "🍕", desc: "Online ordering systems, delivery apps, and restaurant management software." },
    { title: "Automotive Software Systems", icon: "🚗", desc: "Car rental platforms, dealership management, and vehicle marketplaces." },
    { title: "E-Learning & LMS Platforms", icon: "🎓", desc: "Online education systems, student dashboards, and learning management platforms." },
    { title: "Fintech & Financial Apps", icon: "💰", desc: "Secure fintech applications including payment gateways and financial dashboards." },
    { title: "Fitness & Wellness Apps", icon: "💪", desc: "Gym management, fitness tracking, and health monitoring applications." },
    { title: "Travel & Booking Platforms", icon: "✈️", desc: "Hotel booking systems, travel agency websites, and reservation platforms." },
    { title: "Salon & Beauty Systems", icon: "💅", desc: "Appointment booking, memberships, and beauty service platforms." },
  ];

  return (
    <>

      {/* 🔥 ADVANCED META SEO */}
      <Helmet>
        <title>DevZore | Web Development, Mobile App & SaaS Development Company</title>
        <title>DevZore | Software Development Company | Web, Mobile & SaaS Experts</title>

        <meta
          name="description"
          content="DevZore is a global software development company offering web development, mobile app development, SaaS solutions, MERN stack development, and SEO optimized applications for international clients."
        />

        <meta name="description" content="
        DevZore is a professional software development company offering web development, mobile app development, SaaS platforms, MERN stack development, React.js, Next.js, Node.js backend systems, API development, and cloud-based scalable solutions for startups and enterprises worldwide." />


        <meta name="keywords" content="
        software development company,
        web development services,
        hire web developer,
        MERN stack developer,
        React developer,
        Next.js development,
        SaaS development company,
        mobile app development,
        custom software development,
        outsource software development,
        IT company Pakistan,
        software house Islamabad,
        global software agency,
        full stack developer services,
        API development services,
        Node.js backend developer,
        cloud application development,
        hire developers remotely,
        enterprise software solutions,
        startup MVP development
        " />

        <meta
          name="keywords"
          content="software development company, web development services, hire MERN stack developer, React developer, Next.js development, SaaS development company, mobile app development, outsource software development, IT company Pakistan, hire developers globally"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph (for sharing) */}
        <meta property="og:title" content="DevZore Software Development Services" />
        <meta property="og:description" content="Professional web, mobile, and SaaS development services for global clients." />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />

        {/* GEO SEO */}
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Islamabad" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="DevZore - Software Development Company" />
        <meta property="og:description" content="Web, Mobile, SaaS & Cloud Solutions for global clients." />
        <meta property="og:type" content="website" />

        {/* TWITTER SEO */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* 🔥 SCHEMA MARKUP (GOOGLE BOOST) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Software Development",
          "provider": {
            "@type": "Organization",
            "name": "DevZore",
            "url": "https://devzore.com"
          },
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Services",
            "itemListElement": mainServices.map(service => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.title
              }
            }))
          }
        })}
      </script>

      <section id="services" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <SectionTag text="SERVICES" />
          <h1 className="text-3xl md:text-5xl font-bold mt-5 text-white">
            Global Software Development Services for Modern Businesses
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We provide custom web development, mobile applications, and SaaS solutions using modern technologies like React, Node.js, and cloud infrastructure for startups and enterprises worldwide.
          </p>
        </div>

        {/* MAIN SERVICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {mainServices.map((service, i) => (
            <div key={i} className="p-8 bg-gray-200/6 border border-white/30 rounded-[8px] hover:border-purple-700/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h2 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* 🔥 Button Aligned to Right */}
              <div className="flex justify-end">
                <Link 
                  to={service.path} 
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-purple-500 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-white transition-all group/btn"
                >
                  Learn More 
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* INDUSTRIES */}
        <div className="text-center mb-12">
          <SectionTag text="INDUSTRIES" />
          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white">
            Industries We Serve Worldwide
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We deliver industry-specific software solutions tailored for different business sectors across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, i) => (
            <div key={i} className="p-6 bg-gray-200/6 border border-white/30 rounded-[8px] text-center hover:border-purple-500 transition-all">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg text-white mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 🔥 SEO CONTENT BLOCK (VERY IMPORTANT) */}
        <div className="mt-24 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Hire Professional Developers for Your Next Project
          </h2>
          <p className="text-gray-400 leading-relaxed">
            If you are looking to hire experienced developers for web development, mobile app development, or SaaS applications, DevZore is your trusted technology partner. We specialize in MERN stack development, React.js applications, and scalable backend systems using Node.js. Our team helps startups and enterprises build high-quality digital products that are optimized for performance, SEO, and user experience. Whether you want to outsource software development or build a custom solution, we deliver reliable and cost-effective services globally.
          </p>
        </div>

      </section>
    </>
  );
};

export default Services;