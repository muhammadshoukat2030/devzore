import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const location = useLocation();

  // Scroll detection for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu scroll lock logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Auto-scroll to sections logic
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location.hash, location.pathname]);

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

  const handleLinkClick = (path) => {
    setIsOpen(false);
    setMobileServiceOpen(false);
    if (!path.includes("#")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isLinkActive = (path) => {
    if (path.includes("#")) {
      return location.hash === `#${path.split("#")[1]}`;
    }
    return location.pathname === path && location.hash === "";
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        onClick={() => setIsOpen(false)} 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`} 
      />

      <nav 
        className={`fixed top-0 w-full z-[9999] transition-all duration-300 font-sans ${
          scrolled || isOpen 
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" onClick={() => handleLinkClick("/")} className="flex items-center gap-2 z-[10001]">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
              <img src="/logo1.png" alt="DevZore" className="w-7 h-7 object-contain" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Dev<span className="text-purple-500">Zore</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`text-[15px] font-medium transition-colors ${
                      isLinkActive(link.path) ? "text-purple-500" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              
              {/* Services Dropdown Desktop */}
              <li 
                className="relative cursor-pointer group"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <div className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${serviceOpen ? 'text-white' : 'text-gray-300'}`}>
                  Services <span className={`text-[10px] transition-transform ${serviceOpen ? 'rotate-180' : ''}`}>▼</span>
                </div>
                <div className={`absolute top-full right-0 pt-4 w-72 transition-all duration-300 ${serviceOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2">
                    {services.map((s, i) => (
                      <Link 
                        key={i} 
                        to={s.path} 
                        onClick={() => setServiceOpen(false)}
                        className="flex items-center gap-4 px-4 py-3 text-[14px] text-gray-400 hover:bg-purple-600/10 hover:text-white rounded-xl transition-all"
                      >
                        <span className="text-lg">{s.icon}</span> {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
            <Link to="/contact" className="bg-white text-black px-7 py-2.5 rounded-full text-[14px] font-bold hover:bg-purple-600 hover:text-white transition-all shadow-lg active:scale-95">
              Hire Us
            </Link>
          </div>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-[10001] gap-1.5"
          >
            <span className={`w-7 h-[2.5px] bg-white rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <span className={`w-7 h-[2.5px] bg-white rounded-full transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-7 h-[2.5px] bg-white rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu Sidebar */}
        <div className={`fixed inset-y-0 right-0 w-[80%] mt-15 max-w-[350px] bg-[#0a0a0a] border-l0 border-white/100 transition-transform duration-500 ease-out z-[100] flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile Menu Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-8  pb-120 custom-scrollbar">
            {/* <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-8 block">Navigation</span> */}
            
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-2xl font-bold py-3 transition-all ${
                    isLinkActive(link.path) ? "text-purple-500 translate-x-2" : "text-white active:text-purple-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Services Accordion */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <button 
                onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                className="flex justify-between items-center w-full text-gray-400 text-[13px] font-bold uppercase tracking-widest"
              >
                Our Expertise 
                <span className={`text-lg transition-transform duration-300 ${mobileServiceOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              
              <div className={`mt-4 space-y-1 transition-all duration-300 overflow-hidden ${mobileServiceOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {services.map((s, i) => (
                  <Link 
                    key={i} 
                    to={s.path} 
                    onClick={() => handleLinkClick(s.path)} 
                    className="flex items-center gap-4 text-gray-300 py-4 border-b border-white/[0.03] text-base active:bg-white/5 px-2 rounded-lg"
                  >
                    <span className="text-xl">{s.icon}</span> {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Fixed Bottom Action on Mobile */}
          <div className="p-8 border-t border-white/5 bg-[#0a0a0a]">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-purple-600 text-white py-4 rounded-2xl text-center font-bold text-lg shadow-xl shadow-purple-900/20 active:scale-[0.98] transition-transform"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
