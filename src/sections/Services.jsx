import React, { useEffect } from 'react'; // added useEffect
import { Link } from 'react-router-dom';
import SectionTag from '../components/SectionTag';
import { Helmet } from "react-helmet-async";

const Services = () => {

  // 🔥 SEO optimized data for international clients
  const mainServices = [
    {
      title: "Custom Web Application Development",
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
      title: "MERN Stack Development",
      desc: "Empower your business with scalable full-stack solutions. We specialize in building robust web applications using MongoDB, Express.js, React, and Node.js.",
      icon: "🚀", // MERN stack ki speed ke liye rocket icon behtar lagta hai
      path: "/mern-stack-development"
    },
    {
      title: "SaaS Product Development",
      desc: "Build scalable multi-tenant architectures and subscription-based platforms. We develop secure, high-performance SaaS solutions with seamless API integrations.",
      icon: "☁️", // Cloud icon SaaS ke liye perfect hai
      path: "/saas-product-development"
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
      icon: "💡",
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

  // 🔥 YOUR ADDED CODE: Dynamic Schema for SEO Boost
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "DevZore Services",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "Web Development",
          "description": "Custom websites and web apps using React, Next.js and Node.js.",
          "provider": { "@type": "Organization", "name": "DevZore" }
        },
        {
          "@type": "Service",
          "position": 2,
          "name": "Mobile App Development",
          "description": "iOS and Android apps using React Native and Flutter.",
          "provider": { "@type": "Organization", "name": "DevZore" }
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "MERN Stack Development",
          "description": "Full-stack apps with MongoDB, Express, React and Node.js.",
          "provider": { "@type": "Organization", "name": "DevZore" }
        }
      ]
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);


  return (
    <>
      <Helmet>
        {/* Basic SEO Tags for Services Subpage */}
        <title>Mobile App Development Services — iOS & Android | DevZore</title>
        <meta name="description" content="DevZore offers premium mobile app development services for startups and enterprises. We build high-performance iOS & Android apps using React Native, Swift, and Kotlin." />
        <link rel="canonical" href="https://devzore.com/services" />

        {/* Open Graph (OG) / Facebook */}
        <meta property="og:title" content="Mobile App Development Services — iOS & Android | DevZore" />
        <meta property="og:description" content="Professional mobile app development services for iOS and Android using React Native, Swift, and Kotlin. Discover our scalable and performance-focused engineering." />
        <meta property="og:url" content="https://devzore.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevZore" />

        {/* Social Image */}
        <meta property="og:image" content="https://devzore.com/og/services-mobile-apps.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile App Development Services — DevZore" />
        <meta name="twitter:description" content="We design and develop high-fidelity iOS & Android applications tailored to your business goals with modern frameworks." />
        <meta name="twitter:image" content="https://devzore.com/og/services-mobile-apps.jpg" />
      </Helmet>

      <section id="services" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">
          {/* <SectionTag text="SERVICES" /> */}
          <h2 class="inline-block px-3 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-4">Our Core Services</h2>
          <h1 className="text-3xl md:text-5xl font-bold mt-5 text-white leading-tight">
            Architecting High-Performance <br className="hidden md:block" /> Digital Excellence Globally
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            We transform complex business requirements into scalable digital products using industry-leading technologies like React, Node.js, and Cloud Infrastructure.
          </p>
        </div>

        {/* MAIN SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {mainServices.map((service, i) => (
            <div key={i} className="p-8 bg-gray-200/5 border border-white/10 rounded-xl hover:border-purple-600/50 transition-all flex flex-col justify-between group backdrop-blur-sm">
              <div>
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="flex justify-end">
                <Link
                  to={service.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-purple-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-all group/btn"
                >
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* INDUSTRIES SECTION */}
        <div className="text-center mb-12">
          {/* <SectionTag text="INDUSTRIES" /> */}
          <h2 className='inline-block px-3 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-4'>Industries We Serve</h2>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white">
            Specialized Industry Solutions
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Delivering domain-specific software excellence across global business sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, i) => (
            <div key={i} className="p-6 bg-gray-200/5 border border-white/10 rounded-lg text-left hover:border-purple-500 transition-all">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg text-white mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 🔥 SEO CONTENT BLOCK (ENHANCED FOR CONVERSION) */}
        <div className="mt-32 p-12 bg-purple-950/20 border border-purple-500/20 rounded-2xl max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Hire Professional Developers for Your Vision
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Looking for a trusted technology partner? <strong>DevZore</strong> offers world-class software engineering services. We specialize in <strong>MERN stack development</strong>, <strong>Next.js web applications</strong>, and <strong>secure API architectures</strong>. Our team empowers startups and global enterprises by building high-quality digital products optimized for speed, SEO, and superior user experience. Whether you need to <strong>outsource development</strong> or build a custom solution, we deliver scalable results globally.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all text-base md:text-lg inline-block"
            >
              Start Your Project Today →
            </Link>
          </div>
        </div>

      </section>
    </>
  );
};

export default Services;