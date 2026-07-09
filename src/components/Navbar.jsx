import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Globe, Smartphone, ShoppingCart, Settings,
  Palette, Wrench, Rocket, Cloud, Lightbulb,
  ChevronDown, LayoutGrid, Mail, Menu, X,
  ArrowRight, Zap
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const services = [
    { name: "All Services",              icon: <LayoutGrid size={16} />,  path: "/allservices",            desc: "Browse everything we offer" },
    { name: "Web Development",           icon: <Globe size={16} />,        path: "/web-development",        desc: "React, Next.js, modern web apps" },
    { name: "Mobile App Development",    icon: <Smartphone size={16} />,   path: "/mobile-apps",            desc: "iOS & Android with React Native" },
    { name: "E-Commerce",                icon: <ShoppingCart size={16} />, path: "/ecommerce",              desc: "Custom online stores that convert" },
    { name: "MERN Stack",                icon: <Rocket size={16} />,       path: "/mern-stack-development", desc: "Full-stack JS from DB to UI" },
    { name: "SaaS Development",          icon: <Cloud size={16} />,        path: "/saas-product-development", desc: "Scalable SaaS products" },
    { name: "React Development",         icon: <Zap size={16} />,          path: "/reactdevelopment",       desc: "Component-driven React UIs" },
    { name: "UI/UX Design",              icon: <Palette size={16} />,      path: "/ui-ux-design",           desc: "Figma to pixel-perfect design" },
    { name: "Startup MVP",               icon: <Lightbulb size={16} />,    path: "/startup-mvp",            desc: "Launch in 8–14 weeks" },
    { name: "Maintenance & Support",     icon: <Wrench size={16} />,       path: "/maintenance",            desc: "Keep your site running perfectly" },
    { name: "Backend & API",             icon: <Settings size={16} />,     path: "/backend-api",            desc: "Node.js, Express, REST & GraphQL" },
  ];

  const navLinks = [
    { name: "Home",      path: "/" },
    { name: "About",     path: "/about" },
    { name: "Portfolio", path: "/#projects" },
    { name: "Blog",      path: "/blog" },
  ];

  const handleLinkClick = (path) => {
    setIsOpen(false);
    setMobileServiceOpen(false);
    if (!path.includes("#")) window.scrollTo({ top: 0, behavior: "smooth" });
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
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Top announcement bar */}
      {!scrolled && !isOpen && (
        <div className="fixed top-0 w-full z-[10000] bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-blue-600/20 border-b border-white/5 py-2 px-4 text-center hidden md:block">
          <p className="text-[11px] text-gray-400 tracking-widest uppercase">
            <span className="text-purple-400 font-bold">✦ Now Available</span>
            &nbsp;— Free consultation for your next project &nbsp;
            <Link to="/contact" className="text-white underline underline-offset-2 hover:text-purple-400 transition-colors">
              Book a call →
            </Link>
          </p>
        </div>
      )}

      <nav
        className={`fixed w-full transition-all duration-500 z-[9999] ${
          scrolled || isOpen
            ? 'top-0 bg-[#050505]/98 backdrop-blur-3xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.8)] h-[70px]'
            : 'top-[36px] bg-transparent h-[80px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* ── Logo ── */}
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className={`flex items-center gap-3 group transition-all duration-300 ${
              isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 rounded-xl blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative w-9 h-9 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <img src="/logo1.webp" alt="DevZore — Software Development Agency Islamabad" className="w-5 h-5 object-contain" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[22px] font-black text-white tracking-tight">
                Dev<span className="text-purple-400">Zore</span>
              </span>
              <span className="text-[8px] text-gray-500 tracking-[0.25em] uppercase font-semibold -mt-0.5">Software Agency</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-8">

            {/* Nav Links */}
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`relative px-4 py-2 rounded-lg text-[12px] font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${
                      isLinkActive(link.path)
                        ? "text-white bg-white/[0.06]"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {isLinkActive(link.path) && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-500"></span>
                    )}
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <button className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${
                  serviceOpen ? 'text-white bg-white/[0.06]' : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}>
                  Services
                  <ChevronDown size={13} className={`transition-transform duration-300 ${serviceOpen ? 'rotate-180 text-purple-400' : ''}`} />
                </button>

                {/* Mega Dropdown */}
                <div className={`absolute top-full right-0 mt-3 w-[480px] transition-all duration-300 ${
                  serviceOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {/* Arrow */}
                  <div className="absolute -top-1.5 right-16 w-3 h-3 bg-[#0e0e0e] border-l border-t border-white/10 rotate-45"></div>

                  <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.9)] overflow-hidden">

                    {/* Header */}
                    <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500">Our Expertise</p>
                        <p className="text-white text-sm font-bold mt-0.5">What can we build for you?</p>
                      </div>
                      <Link
                        to="/allservices"
                        onClick={() => handleLinkClick("/allservices")}
                        className="text-[10px] text-purple-400 hover:text-white font-bold uppercase tracking-widest flex items-center gap-1 transition-colors"
                      >
                        View all <ArrowRight size={10} />
                      </Link>
                    </div>

                    {/* Services Grid */}
                    <div className="p-3 grid grid-cols-2 gap-1 max-h-[60vh] overflow-y-auto">
                      {services.slice(1).map((s, i) => (
                        <Link
                          key={i}
                          to={s.path}
                          onClick={() => { setServiceOpen(false); handleLinkClick(s.path); }}
                          className="group flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06]"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-200 mt-0.5">
                            {s.icon}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-gray-200 group-hover:text-white transition-colors leading-tight">{s.name}</p>
                            <p className="text-[11px] text-gray-500 group-hover:text-gray-400 transition-colors mt-0.5 leading-tight">{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="px-5 py-4 border-t border-white/[0.06] bg-gradient-to-r from-purple-600/5 to-indigo-600/5 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-gray-500">Not sure what you need?</p>
                        <p className="text-[12px] text-white font-bold">Let's figure it out together</p>
                      </div>
                      <Link
                        to="/contact"
                        onClick={() => handleLinkClick("/contact")}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-bold rounded-lg transition-colors"
                      >
                        Free Call <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className="group flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-purple-500 text-black hover:text-white text-[11px] font-black uppercase tracking-[0.15em] rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              Book a Call
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <div className="md:hidden z-[10002]">
            {!isOpen ? (
              <button
                onClick={() => setIsOpen(true)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
              >
                <span className="w-6 h-0.5 bg-white rounded-full transition-all group-hover:w-7"></span>
                <span className="w-5 h-0.5 bg-purple-400 rounded-full transition-all group-hover:w-7"></span>
                <span className="w-4 h-0.5 bg-white/50 rounded-full transition-all group-hover:w-7"></span>
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(false)}
                className="fixed top-5 right-6 w-9 h-9 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg text-white z-[10003] hover:bg-white/20 transition-all"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ── Mobile Sidebar ── */}
      <div className={`fixed inset-y-0 right-0 w-[85%] max-w-[360px] h-screen z-[10001] flex flex-col transition-transform duration-400 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>

        {/* Glassmorphism bg */}
        <div className="absolute inset-0 bg-[#060606]/98 backdrop-blur-3xl border-l border-white/[0.08]"></div>

        {/* Top brand in sidebar */}
        <div className="relative z-10 px-6 pt-6 pb-4 border-b border-white/[0.06] flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-lg flex items-center justify-center">
            <img src="/logo1.webp" alt="DevZore" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <p className="text-white text-base font-black tracking-tight">Dev<span className="text-purple-400">Zore</span></p>
            <p className="text-[9px] text-gray-600 uppercase tracking-widest">Software Agency</p>
          </div>
        </div>

        <div className="relative z-10 flex-1 overflow-y-auto px-4 py-5">

          {/* Nav Links */}
          <div className="mb-6">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600 mb-3 px-2">Navigation</p>
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                    isLinkActive(link.path)
                      ? "bg-purple-600/15 border border-purple-500/30 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  <span className="text-[15px] font-semibold">{link.name}</span>
                  {isLinkActive(link.path)
                    ? <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    : <ArrowRight size={14} className="text-gray-600" />
                  }
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all mb-1"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <LayoutGrid size={14} className="text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="text-white text-[14px] font-semibold">Our Services</p>
                  <p className="text-[10px] text-gray-500">11 services available</p>
                </div>
              </div>
              <ChevronDown size={15} className={`text-gray-500 transition-transform duration-300 ${mobileServiceOpen ? 'rotate-180 text-purple-400' : ''}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-400 ${
              mobileServiceOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="flex flex-col gap-0.5 pt-1 pl-2">
                {services.map((s, i) => (
                  <Link
                    key={i}
                    to={s.path}
                    onClick={() => handleLinkClick(s.path)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all group"
                  >
                    <span className="text-purple-400/70 group-hover:text-purple-400 transition-colors">{s.icon}</span>
                    <span className="text-[13px] font-medium">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative z-10 p-4 border-t border-white/[0.06] space-y-3">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3.5 rounded-xl font-bold text-[12px] uppercase tracking-widest hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all"
          >
            <Mail size={14} /> Hire Us Now
          </Link>
          <a
            href="https://wa.me/923348004300?text=Hi DevZore! I want to discuss a project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-[#25D366]/20 transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/>
            </svg>
            WhatsApp Us
          </a>
          <p className="text-[9px] text-center text-gray-700 uppercase tracking-widest">DevZore • Islamabad • 2026</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;