import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* --- 1. ICONS IMPORT (Naye icons: Rocket, Cloud, Lightbulb yahan add kiye hain) --- */
import { 
  Globe, Smartphone, ShoppingCart, Settings, 
  Palette, Wrench, Rocket, ArrowRight, Zap,
  Plus, Minus, CheckCircle2, MessageSquare,
  Cloud, Lightbulb
} from 'lucide-react';

const AllServices = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  /* --- 2. SERVICES ARRAY (MERN aur SaaS ko yahan update kiya gaya hai) --- */
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
    /* MERN Stack Section Updated */
    { 
      name: "MERN Stack Development", 
      icon: <Rocket size={24} className="text-purple-500" />, 
      path: "/mern-stack-development",
      desc: "End-to-end full-stack applications engineered with MongoDB, Express, React, and Node.js for seamless performance.",
      details: ["Full-stack Engineering", "RESTful APIs", "Real-time Solutions"]
    },
    /* SaaS Product Section Updated */
    { 
      name: "SaaS Product Development", 
      icon: <Cloud size={24} className="text-blue-500" />, 
      path: "/saas-product-development",
      desc: "End-to-end engineering of multi-tenant cloud platforms with scalable architecture and recurring revenue logic.",
      details: ["Multi-Tenancy", "Cloud Infrastructure", "Subscription Engine"]
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

  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Typically, an MVP takes 4-6 weeks, while more complex enterprise solutions can take 3-5 months depending on requirements."
    },
    {
      q: "Do you offer international client support?",
      a: "Yes, we work with clients globally (Qatar, Dubai, etc.) using agile communication tools like Slack, Zoom, and Trello."
    },
    {
      q: "Will my website be SEO-friendly?",
      a: "Absolutely. Every project at DevZore is built with SEO best practices, including semantic HTML and fast loading speeds."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-20">
      
      {/* --- TOP HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          
          {/* Left Side: Title & Description */}
          <div className="flex-1">
            
            {/* --- START: ANIMATED BADGE (Yahan se add kiya gaya hai) --- */}
            <div className="mb-6 flex justify-start">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-500/5 border border-purple-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.25em]">
                  Our Expertise
                </span>
              </div>
            </div>
            {/* --- END: ANIMATED BADGE --- */}

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Digital <span className="text-purple-500">Solutions</span> <br />
              Architected to Scale
            </h1>
            <p className="text-gray-400 text-base md:text-lg mt-8 max-w-xl leading-relaxed font-medium">
              We transform complex business requirements into elegant digital products. 
              Our engineering team focuses on clean code and international standards.
            </p>
          </div>

          {/* Right Side: Quick Shortcuts */}
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

      {/* --- MAIN SERVICES GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to={service.path} key={index} className="group">
              <div className="h-full bg-[#0c0c0c] p-8 rounded-3xl border border-gray-900 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-2xl">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-purple-500/5 blur-2xl group-hover:bg-purple-500/20 transition-all duration-500 rounded-full"></div>
                
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
                        <div key={i} className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
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

          {/* Special Custom Solution Card */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-3xl flex flex-col justify-center items-center text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <Zap size={30} className="text-white" fill="white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Custom Architecture?</h3>
            <p className="text-purple-100 text-sm mb-8 font-medium">Need a tailored solution for your unique business logic?</p>
            <Link to="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-transform hover:scale-105 shadow-xl">
              Get A Quote
            </Link>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Project <span className="text-purple-500">FAQs</span></h2>
            <p className="text-gray-500 text-sm">Common questions about our development process.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#0c0c0c] border border-gray-900 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-base">{faq.q}</span>
                {activeFaq === i ? <Minus size={18} className="text-purple-500" /> : <Plus size={18} />}
              </button>
              {activeFaq === i && (
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL START PROJECT CTA --- */}
      <section className="max-w-7xl mx-auto px-6 mt-12 shadow-inner">
        <div className="bg-[#0c0c0c] border border-gray-900 rounded-[3rem] p-10 md:p-20 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <MessageSquare size={48} className="text-purple-500 mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-gray-400 max-w-xl mb-10 text-lg">
                Join our list of satisfied international clients and let's build something extraordinary together.
            </p>
            <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all hover:scale-105 shadow-2xl shadow-purple-500/20">
                Contact DevZore Today
            </Link>
        </div>
      </section>

    </div>
  );
};

export default AllServices;