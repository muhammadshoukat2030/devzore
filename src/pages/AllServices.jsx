import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceGalleryTemplate from '../components/ServiceGalleryTemplate';

/* --- ICONS IMPORT --- */
import {
  Globe, Smartphone, ShoppingCart, Settings,
  Palette, Wrench, Rocket, ArrowRight, Zap,
  Plus, Minus, CheckCircle2, MessageSquare,
  Cloud, Lightbulb, CodeXml
} from 'lucide-react';

const AllServices = () => {
  // ✅ STATE: FAQ Toggle Configuration
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  /* --- SERVICES ARRAY --- */
  const services = [
    {
      name: "Web Development",
      icon: <Globe size={24} className="text-purple-500" />,
      path: "/web-development",
      desc: "Custom high-performance websites built with modern stacks like MERN and Next.js.",
      details: ["SEO Optimized", "Responsive Design", "Fast Loading"]
    },
    {
      name: "Mobile App Development",
      icon: <Smartphone size={24} className="text-green-500" />,
      path: "/mobile-apps",
      desc: "Native and cross-platform mobile apps with seamless user experiences for iOS/Android.",
      details: ["React Native", "Smooth UI", "App Store Ready"]
    },
    {
      name: "E-Commerce Website",
      icon: <ShoppingCart size={24} className="text-blue-500" />,
      path: "/ecommerce",
      desc: "Scalable online stores with secure payments and comprehensive inventory management.",
      details: ["Secure Payments", "Admin Panel", "Order Tracking"]
    },
    {
      name: "MERN Stack Development",
      icon: <Rocket size={24} className="text-purple-500" />,
      path: "/mern-stack-development",
      desc: "End-to-end full-stack applications engineered with MongoDB, Express, React, and Node.js.",
      details: ["Full-stack Engineering", "RESTful APIs", "Real-time Solutions"]
    },
    {
      name: "SaaS Product Development",
      icon: <Cloud size={24} className="text-blue-500" />,
      path: "/saas-product-development",
      desc: "End-to-end engineering of multi-tenant cloud platforms with scalable architecture.",
      details: ["Multi-Tenancy", "Cloud Infrastructure", "Subscription Engine"]
    },
    {
      name: "React Development",
      // 🛠️ CRITICAL FIX: Changed path from "/ReactDevelopment" to "/reactdevelopment" 
      // This ensures 100% routing alignment with Navbar link cases to prevent hydration mismatches.
      icon: <CodeXml size={24} className="text-blue-500" />,
      path: "/reactdevelopment",
      desc: "Building scalable, high-performance web applications with React's component-based architecture.",
      details: ["Custom Hooks", "State Management", "API Integration"]
    },
    {
      name: "UI/UX Design",
      icon: <Palette size={24} className="text-pink-500" />,
      path: "/ui-ux-design",
      desc: "User-centric designs focusing on conversion, usability, and aesthetic excellence.",
      details: ["Modern Assets", "Prototypes", "Brand Guidelines"]
    },
    {
      name: "Bug Fixing & Maintenance",
      icon: <Wrench size={24} className="text-yellow-500" />,
      path: "/maintenance",
      desc: "Regular updates, performance optimization, and rapid bug resolution services.",
      details: ["24/7 Monitoring", "Code Audit", "Fast Fixes"]
    },
    {
      name: "Startup MVP Development",
      icon: <Lightbulb size={24} className="text-cyan-500" />,
      path: "/startup-mvp",
      desc: "Fast-track development to launch your core product to market and attract investors.",
      details: ["Rapid Prototyping", "Scalable MVP", "Lean Launch"]
    },
    {
      name: "Backend & API Development",
      icon: <Settings size={24} className="text-orange-500" />,
      path: "/backend-api",
      desc: "Robust server-side logic and secure API architectures for high-traffic scalability.",
      details: ["Microservices", "Secure Auth", "Database Design"]
    }
  ];

  /* --- FAQ ARRAY --- */
  const faqs = [
    {
      question: "How long does a MERN stack project take?",
      answer: "A focused MVP typically takes 8 to 14 weeks. A full-featured SaaS platform or enterprise application can take 4 to 8 months depending on complexity. After our discovery call, we give you a milestone-based timeline."
    },
    {
      question: "Is MERN stack still a good choice in 2026?",
      answer: "Absolutely. MERN is actively used by companies from early-stage startups to Fortune 500 enterprises. The ecosystem has grown stronger with React 19 and modern AI integration support."
    },
    {
      question: "What is the difference between MERN stack and Next.js?",
      answer: "Next.js is a framework built on top of React. DevZore uses Next.js as the frontend layer for most client projects while keeping the Express and MongoDB backend structure. The two complement each other."
    },
    {
      question: "Can DevZore take over an existing MERN project?",
      answer: "Yes. We regularly audit and inherit existing codebases. We start with a code and architecture review to identify technical debt before starting development."
    },
    {
      question: "Do you provide ongoing maintenance after launch?",
      answer: "Every project includes 30 days of post-launch support. After that, we offer flexible monthly maintenance plans covering bug fixes, security patches, and feature updates."
    }
  ];

  return (
    <>
      {/* ── SEO Metadata Injection ── */}
      <Helmet>
        <title>Full-Stack Digital Engineering Services Portfolio | DevZore</title>
        <meta name="description" content="Explore DevZore's end-to-end global technical services: including advanced web architectures, cross-platform apps, cloud infrastructure, and custom APIs." />
        <link rel="canonical" href="https://devzore.com/allservices" />
        <meta property="og:title" content="Full-Stack Digital Engineering Services Portfolio | DevZore" />
        <meta property="og:description" content="Comprehensive overview of modern software development capabilities engineered for corporate growth." />
        <meta property="og:url" content="https://devzore.com/allservices" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── Main Layout Viewport ── */}
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-20">

        {/* ── HERO SECTION ── */}
        <div className="max-w-7xl mx-auto px-6 pt-30 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="flex-1">
              <div className="mb-6 flex justify-start">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-500/5 border border-purple-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.25em]">Our Expertise</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-center lg:text-left">
                Digital <span className="text-purple-500">Solutions</span> <br />
                Architected to Scale
              </h1>
              <p className="text-gray-400 text-base md:text-lg mt-8 max-w-xl leading-relaxed font-medium text-center lg:text-left mx-auto lg:mx-0">
                We transform complex business requirements into elegant digital products.
                Our engineering team focuses on clean code and international standards.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-8">
                <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 shadow-2xl shadow-purple-500/20">
                  Book a Consultation
                </Link>
                {/* 🛠️ STYLE TWEAK: Maintained anchors natively for standard element ID target behavior */}
                <a href="#services" className="bg-[#111] border border-white/10 hover:border-white/20 px-10 py-5 rounded-2xl font-bold transition-all">
                  Explore Grid
                </a>
              </div>
            </div>

            {/* Jump Menu Cards Container */}
            <div className="flex-1 bg-[#0c0c0c] border border-gray-900 rounded-3xl p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={100} className="text-purple-500" />
              </div>
              <h3 className="text-sm font-bold text-gray-300 mb-6 uppercase tracking-widest flex items-center gap-2">
                <div className="w-8 h-[1px] bg-purple-500"></div> Jump To Service
              </h3>
              <div className="flex flex-wrap gap-2">
                {services.map((s, i) => (
                  <Link to={s.path} key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold hover:bg-purple-600 hover:border-purple-600 transition-all duration-300">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── SERVICES DISPLAY GRID ── */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">Our <span className="text-purple-500">Core</span> Capabilities</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link to={service.path} key={index} className="group">
                <div className="h-full bg-[#0c0c0c] p-8 rounded-3xl border border-gray-900 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-2xl">
                  <div>
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                      {service.desc}
                    </p>
                    <div className="space-y-2 mb-8">
                      {service.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                          <CheckCircle2 size={12} className="text-purple-500" /> {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-black text-gray-500 group-hover:text-white uppercase tracking-widest transition-colors">
                    View Details <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
            {/* Custom CTA Card */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-3xl flex flex-col justify-center items-center text-center group">
              <Zap size={30} className="text-white mb-6 animate-pulse" />
              <h3 className="text-2xl font-bold mb-3">Custom Needs?</h3>
              <p className="text-purple-100 text-sm mb-8">Need a bespoke solution for your business?</p>
              <Link to="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-transform hover:scale-105 shadow-xl">
                Get A Quote
              </Link>
            </div>
          </div>
        </section>

        {/* ── TEMPLATE COMPONENT CONTAINER ── */}
        {/* 🛠️ OPTIMIZATION: Cleaned double min-h-screen properties to avoid extra scroll tracking problems */}
        <div className="bg-black py-4">
          <ServiceGalleryTemplate pageKey="AllServices" />
        </div>

        {/* ── FAQ ACCORDION SECTION ── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Common Queries</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">Frequently Asked Questions <span className="text-purple-500">FAQ</span></h2>
            <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
          </div>

          <div className="max-w-4xl space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${activeIndex === i
                  ? 'border-purple-500/50 bg-purple-500/5'
                  : 'border-white/5 bg-[#0A0A0A]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                >
                  <span className={`font-bold text-sm md:text-base transition-colors ${activeIndex === i ? 'text-purple-400' : 'text-white group-hover:text-purple-300'}`}>
                    {faq.question}
                  </span>
                  {activeIndex === i ? (
                    <Minus size={20} className="text-purple-400" />
                  ) : (
                    <Plus size={20} className="text-gray-500" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5">
                    <div className="mt-4">{faq.answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL FOOTER CONVERSION CTA ── */}
        <section className="max-w-7xl mx-auto px-6 mt-2">
          <div className="bg-[#0c0c0c] border border-gray-900 rounded-[3rem] p-10 md:p-10 flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <MessageSquare size={48} className="text-purple-500 mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to start?</h2>
            <p className="text-gray-400 max-w-xl mb-10 text-lg">
              Let's build something extraordinary together.
            </p>
            <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all hover:scale-105 shadow-2xl shadow-purple-500/20">
              Contact DevZore Today
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default AllServices;