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

  const services = [
    { name: "Web Development", icon: "🌐", path: "/web-development" },
    { name: "Mobile App Development", icon: "📱", path: "/mobile-apps" },
    { name: "E-Commerce Website", icon: "🛒", path: "/ecommerce" },
    { name: "Backend & API Development", icon: "⚙️", path: "/backend-api" },
    { name: "UI/UX Design", icon: "🎨", path: "/ui-ux-design" },
    { name: "Bug Fixing & Maintenance", icon: "🛠️", path: "/maintenance" },
    { name: "Startup MVP Development", icon: "🚀", path: "/startup-mvp" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/#projects" },
    { name: "Pricing", path: "/#pricing" },
    { name: "Blog", path: "/blog" },
  ];

  const handleClick = (path) => {
    setIsOpen(false);
    setServiceOpen(false);
    
    if (path.includes("#")) {
      const id = path.split("#")[1];
      // Agar hum home page par hain to scroll karein
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
        }
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // 🔥 FIXED ACTIVE LOGIC: Checks both Path and Hash
  const isLinkActive = (path) => {
    if (path.includes("#")) {
      const hash = path.split("#")[1];
      return location.hash === `#${hash}`;
    }
    return location.pathname === path && location.hash === "";
  };

  return (
    <>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998]" />
      )}

      <nav className={`fixed top-0 w-full z-[9999] transition-all duration-300 font-sans ${
        scrolled ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
      }`}>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" onClick={() => handleClick("/")} className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-purple-600 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6 shadow-lg shadow-purple-500/20">
              <img src="/logo1.png" alt="DevZore" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Dev<span className="text-purple-500">Zore</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 items-center">
              {navLinks.map((link) => (
                <li key={link.name} className="relative py-1 group">
                  <Link
                    to={link.path}
                    onClick={() => handleClick(link.path)}
                    className={`text-[13px] font-medium transition-colors hover:text-white ${
                      isLinkActive(link.path) ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* Bottom Border - Active State */}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-purple-500 transition-all duration-300 ${
                    isLinkActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </li>
              ))}

              {/* SERVICES DROPDOWN */}
              <li 
                className="relative py-1 group cursor-pointer"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <div className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                  serviceOpen || location.pathname.includes('development') ? "text-white" : "text-gray-400 group-hover:text-white"
                }`}>
                  Services
                  <span className={`text-[8px] transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""}`}>▼</span>
                </div>
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-purple-500 transition-all duration-300 ${serviceOpen ? "w-full" : "w-0"}`} />

                <div className={`absolute top-full right-[-40px] pt-4 transition-all duration-300 ${
                  serviceOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}>
                  <div className="w-64 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl p-2 backdrop-blur-2xl">
                    {services.map((s, i) => (
                      <Link
                        key={i}
                        to={s.path}
                        onClick={() => handleClick(s.path)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-[13px] text-gray-400 hover:bg-purple-600/10 hover:text-white transition-all border-b border-white/[0.03] last:border-0"
                      >
                        <span className="text-base">{s.icon}</span>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            </ul>

            <Link
              to="/contact"
              className="bg-white text-black px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-purple-600 hover:text-white transition-all shadow-xl active:scale-95"
            >
              Hire Us
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`fixed inset-y-0 right-0 w-full max-w-[300px] bg-[#080808] border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-in-out z-[10000] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col p-8 h-full">
             <div className="flex justify-between items-center mb-12">
                <span className="text-lg font-bold text-white">Menu</span>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 text-sm">✕ Close</button>
             </div>
             
             <div className="space-y-4 overflow-y-auto pr-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => handleClick(link.path)}
                    className={`block text-xl font-bold py-2 transition-colors ${isLinkActive(link.path) ? "text-purple-500" : "text-white hover:text-purple-400"}`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* MOBILE SERVICES */}
                <div className="pt-6 border-t border-white/5">
                   <button 
                    onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                    className="flex justify-between items-center w-full text-gray-300 text-xm uppercase tracking-[0.2em] font-black mb-4"
                   >
                     Our Services
                     <span className={`transition-transform ${mobileServiceOpen ? "rotate-180" : ""}`}>▼</span>
                   </button>
                   
                   <div className={`space-y-1 transition-all duration-300 overflow-hidden ${mobileServiceOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                      {services.map((s, i) => (
                        <Link 
                          key={i} 
                          to={s.path} 
                          onClick={() => setIsOpen(false)} 
                          className="flex items-center gap-3 text-gray-300 py-3 border-b border-white/[0.03] text-sm active:bg-white/5"
                        >
                          <span className="text-lg">{s.icon}</span> {s.name}
                        </Link>
                      ))}
                   </div>
                </div>
             </div>

             <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-auto bg-purple-600 text-white py-4 rounded-2xl text-center font-bold shadow-lg shadow-purple-500/20 active:scale-95 transition-transform"
            >
              Hire Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;