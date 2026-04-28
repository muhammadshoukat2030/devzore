import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Globe, Smartphone, ShoppingCart, Settings,
  Palette, Wrench, Rocket, Cloud, Lightbulb,
  ChevronDown, LayoutGrid, Mail, Menu, X,
  Database
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const location = useLocation();

  // Scroll detection for navbar background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fix for Section Scrolling (#projects, #pricing)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const services = [
    { name: "All Services", icon: <LayoutGrid size={18} />, path: "/AllServices" },
    { name: "Web Development", icon: <Globe size={18} />, path: "/web-development" },
    { name: "Mobile App Development", icon: <Smartphone size={18} />, path: "/mobile-apps" },
    { name: "E-Commerce Website", icon: <ShoppingCart size={18} />, path: "/ecommerce" },
    { name: "MERN Stack", icon: <Rocket size={18} />, path: "/mern-stack-development" },
    { name: "SaaS Development", icon: <Cloud size={18} />, path: "/SaaSProductDevelopment" },
    { name: "UI/UX Design", icon: <Palette size={18} />, path: "/ui-ux-design" },
    { name: "Startup MVP", icon: <Lightbulb size={18} />, path: "/startup-mvp" },
    { name: "Maintenance", icon: <Wrench size={18} />, path: "/maintenance" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/#projects" },
    { name: "Pricing", path: "/#pricing" },
    { name: "Blog", path: "/blog" },
  ];

  const handleLinkClick = (path) => {
    setIsOpen(false);
    setMobileServiceOpen(false);
    if (!path.includes("#")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isLinkActive = (path) => {
    if (path.includes("#")) return location.hash === `#${path.split("#")[1]}`;
    return location.pathname === path && location.hash === "";
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />

      <nav
        className={`fixed top-0 w-full transition-all duration-500 z-[9999] ${scrolled || isOpen
          ? 'bg-[#050505]/95 backdrop-blur-2xl border-b border-white/5 h-[75px]'
          : 'bg-transparent h-[95px]'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className={`flex items-center gap-3 group transition-all duration-300 ${isOpen ? "opacity-0 invisible -translate-x-10" : "opacity-100 visible translate-x-0"
              }`}
          >
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:rotate-6 transition-transform">
              <img src="/logo1.png" alt="DevZore" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">
              Dev<span className="text-purple-500">Zore</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-7 items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`text-[13px] font-bold uppercase tracking-widest transition-all hover:text-purple-400 ${isLinkActive(link.path) ? "text-purple-500" : "text-gray-400"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li
                className="relative"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <button className={`flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-widest transition-colors ${serviceOpen ? 'text-purple-400' : 'text-gray-400'}`}>
                  Services <ChevronDown size={14} className={`transition-transform duration-300 ${serviceOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`absolute top-full -right-4 pt-2 w-80 transition-all duration-300 ${serviceOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2 backdrop-blur-2xl">
                    <div className="grid grid-cols-1 gap-1">
                      {services.map((s, i) => (
                        <Link
                          key={i}
                          to={s.path}
                          onClick={() => setServiceOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-[13px] font-semibold text-gray-400 hover:bg-purple-600/10 hover:text-white rounded-xl transition-all"
                        >
                          <span className="text-purple-500 bg-purple-500/10 p-2 rounded-lg">{s.icon}</span>
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <Link to="/contact" className="group relative px-6 py-2.5 overflow-hidden rounded-full bg-white text-black text-[12px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Hire Us</span>
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
          
          {/* Toggle Buttons */}
          <div className="md:hidden flex items-center z-[10002]">
            {!isOpen ? (
              <button
                onClick={() => setIsOpen(true)}
                className="w-12 h-12 flex items-center justify-center text-white active:scale-90 transition-all"
              >
                <Menu size={30} strokeWidth={1.5} />
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(false)}
                className="fixed top-5 right-6 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white z-[10003] active:scale-90 transition-all"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Sidebar - International Standard UI */}
        <div className={`fixed inset-y-0 right-0 w-[80%] max-w-[380px] h-screen bg-[#050505] border-l border-purple-400 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) z-[10001] flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.9)] ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>

          <div className="flex-1 overflow-y-auto px-6 pt-7 pb-25 scrollbar-hide">

            {/* Quick Links Section */}
            <div className="flex flex-col gap-0.5 ">
              <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/30 mb-0 px-2">Navigation</p>
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-5 py-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${isLinkActive(link.path)
                    ? "bg-purple-600/10 border-purple-500/30 text-purple-400"
                    : "bg-white/[0.02] border-white/[0.03] text-white/60 hover:text-white"
                    }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(10px)'
                  }}
                >
                  <span className="text-lg font-semibold tracking-tight">{link.name}</span>
                  {isLinkActive(link.path) && <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />}
                </Link>
              ))}
            </div>

            {/* Services Dropdown Section - Optimized Gap */}
            <div className="mt-8">
              <button
                onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                className={`flex justify-between items-center w-full px-5 py-4 rounded-xl transition-all duration-300 border ${mobileServiceOpen ? "bg-white/[0.04] border-white/10" : "bg-transparent border-transparent"
                  }`}
              >
                <div className="flex flex-col items-start">
                  <span className="text-purple-500 text-[13px] font-black uppercase tracking-[0.3em]">Our Services</span>
                  <span className="text-[11px] text-white/30 tracking-wide mt-0.5">Explore our expertise</span>
                </div>
                <ChevronDown size={18} className={`text-white/40 transition-transform duration-500 ${mobileServiceOpen ? 'rotate-180 text-purple-500' : ''}`} />
              </button>

              <div className={`grid grid-cols-1 gap-1.5 mt-1 px-1 transition-all duration-500 ease-in-out overflow-hidden ${mobileServiceOpen ? 'max-h-[800px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                }`}>
                {services.map((s, i) => (
                  <Link
                    key={i}
                    to={s.path}
                    onClick={() => handleLinkClick(s.path)}
                    className="flex items-center gap-4 text-white/50 py-3 px-4 rounded-lg bg-white/[0.01] border border-white/[0.08] hover:bg-purple-600/500 hover:text-white transition-all group"
                  >
                    <div className="w-8 h-8 rounded-md bg-white/[0.03] flex items-center justify-center group-hover:bg-purple-600/20 transition-colors">
                      <span className="text-purple-500/80 group-hover:text-purple-400 transform scale-75 transition-transform group-hover:scale-90">
                        {s.icon}
                      </span>
                    </div>
                    <span className="text-[14px] font-medium tracking-wide">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Area - Solid & Prominent */}
          <div className="p-6 bg-[#080808]/80 backdrop-blur-md border-t border-white/5">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-[0_10px_20px_rgba(147,51,234,0.2)] active:scale-[0.98] transition-all"
            >
              <Mail size={16} /> <span>Hire Us</span>
            </Link>
            <p className="text-[9px] text-center text-white/20 mt-4 tracking-widest uppercase">DevZore Global • 2026</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;