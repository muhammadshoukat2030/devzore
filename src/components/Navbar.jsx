import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // 🔥 UPDATED: Har service ka apna unique route hai
  const services = [
    // { name: "Web Development", path: "/web-development" },
    { name: "Web Development", icon: "🌐", path: "/web-development" },
    { name: "Mobile App Development", icon: "📱", path: "/mobile-apps" },
    { name: "E-Commerce Website", icon: "🛒", path: "/ecommerce" },
    { name: "Backend & API Development", icon: "⚙️", path: "/backend-api" },
    { name: "UI/UX Design", icon: "🎨", path: "/ui-ux-design" },
    { name: "Website Maintenance", icon: "🛠️", path: "/maintenance" },
    { name: "Startup MVP Development", icon: "🚀", path: "/startup-mvp" },
    
  ];

  const navLinks = [
    { name: "Portfolio", path: "/#projects" },
    { name: "Pricing", path: "/#pricing" },
    { name: "FAQ", path: "/#faq" },
    { name: "Blog", path: "/blog" }, // Updated to match App.jsx route
  ];

  const handleClick = (path) => {
    setIsOpen(false);
    setServiceOpen(false);

    // Agar hum home page par hain aur anchor link par click kiya
    if (path.includes("#") && location.pathname === "/") {
      const id = path.split("#")[1];
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      // Normal page navigation ke liye scroll top par le jaye
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🔥 OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        />
      )}

      <nav className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${
        scrolled
          ? 'bg-[#030303]/95 backdrop-blur-lg border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}>

        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

          {/* 🔥 LOGO */}
          <Link to="/" onClick={() => window.scrollTo(0,0)} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl flex items-center justify-center p-1.5 shadow-lg shadow-purple-500/20">
              <img src="/logo1.png" alt="DevZore Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg md:text-xl font-black text-white uppercase tracking-tighter">
              Dev<span className="text-purple-500">Zore</span>
            </span>
          </Link>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:flex items-center gap-10">

            {/* 🔥 SERVICES DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button className="text-[12px] font-bold uppercase text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
                Services
                <span className={`transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""}`}>▼</span>
              </button>

              {/* Dropdown Container */}
              <div className={`absolute top-full pt-4 left-[-40px] transition-all duration-300 ${
                serviceOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-3"
              }`}>
                <div className="w-72 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl p-3 space-y-1">
                  {services.map((s, i) => (
                    <Link
                      key={i}
                      to={s.path}
                      onClick={() => handleClick(s.path)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-purple-600/20 hover:text-white transition group"
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">{s.icon}</span>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 🔥 OTHER LINKS */}
            <ul className="flex gap-7 text-[12px] font-bold uppercase text-gray-400 tracking-widest">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => handleClick(link.path)}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg text-xs font-black tracking-widest shadow-lg shadow-purple-500/30 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Hire Us
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[10000] p-2"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div className={`fixed top-0 right-0 h-full w-[85%] bg-[#030303] z-[9999] transform transition-transform duration-500 ease-in-out border-l border-white/5 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>

          <div className="flex flex-col mt-24 px-8">

            {/* 🔥 SERVICES DROPDOWN MOBILE */}
            <div className="mb-4">
              <button
                onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                className="w-full flex justify-between items-center text-white text-xl font-black uppercase tracking-tighter mb-4"
              >
                Services
                <span className={`transition-transform ${mobileServiceOpen ? "rotate-180" : ""}`}>▼</span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ${
                mobileServiceOpen ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"
              }`}>
                <div className="space-y-2 pl-4 border-l border-purple-500/30">
                  {services.map((s, i) => (
                    <Link
                      key={i}
                      to={s.path}
                      onClick={() => handleClick(s.path)}
                      className="flex items-center gap-3 text-sm text-gray-400 py-2 hover:text-purple-500 transition-colors"
                    >
                      <span className="text-base">{s.icon}</span>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* OTHER LINKS */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleClick(link.path)}
                className="text-left text-xl font-black text-white py-4 border-b border-white/5 uppercase tracking-tighter hover:text-purple-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA MOBILE */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-purple-600 text-white py-4 rounded-xl text-center font-black tracking-widest shadow-xl shadow-purple-500/20 active:scale-95 transition-transform uppercase"
            >
              Get Started
            </Link>

          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;