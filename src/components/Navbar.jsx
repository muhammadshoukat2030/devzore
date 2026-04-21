import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { name: "Services", path: "/#services" },
    { name: "Portfolio", path: "/#projects" },
    { name: "Pricing", path: "/#pricing" },
    { name: "FAQ", path: "/#faq" },
    { name: "Blog", path: "/BlogPost" },
  ];

  const handleClick = (path) => {
    setIsOpen(false);

    if (path.includes("#")) {
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>

      {/* 🔥 DARK OVERLAY (UX FIX) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        />
      )}

      <nav className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${
        scrolled
          ? 'bg-[#030303]/90 backdrop-blur-lg border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}>

        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

          {/* LOGO (IMPROVED LOOK) */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg flex items-center justify-center p-1.5 shadow-lg shadow-purple-500/20">
              <img src="/logo1.png" alt="DevZore" />
            </div>
            <span className="text-lg md:text-xl font-black text-white uppercase tracking-wide">
              Dev<span className="text-purple-500">Zore</span>
            </span>
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-10">

            <ul className="flex gap-7 text-[12px] font-semibold uppercase text-gray-400 tracking-widest">
              {navLinks.map((link) => {
                const active = location.hash === link.path.replace('/', '');
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => handleClick(link.path)}
                      className={`relative pb-2 transition ${
                        active ? "text-white" : "hover:text-white"
                      }`}
                    >
                      {link.name}
                      <span className={`absolute left-0 bottom-0 h-[2px] bg-purple-500 transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-md text-xs font-bold tracking-widest"
            >
              Hire Us
            </Link>
          </div>

          {/* MOBILE BUTTON (HAMBURGER ↔ X) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[10000]"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>

              <span className={`h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}></span>

              <span className={`h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* MOBILE MENU (RIGHT SIDE SLIDE) */}
        <div className={`fixed top-0 right-0 h-full w-[75%] bg-[#030303] z-[9999] shadow-2xl transform transition-all duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>

          <div className="flex flex-col mt-24 px-6">

            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleClick(link.path)}
                className="text-left text-lg text-white py-4 border-b border-white/10 hover:text-purple-500 transition"
              >
                {link.name}
              </button>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-purple-600 text-white py-3 rounded-lg text-center font-bold"
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