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
    { name: "MERN Stack", icon: <Rocket size={18} />, path: "/MernStackDevelopment" },
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
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`} 
      />

      <nav 
        className={`fixed top-0 w-full transition-all duration-500 z-[9999] ${
          scrolled || isOpen 
            ? 'bg-[#050505]/95 backdrop-blur-2xl border-b border-white/5 h-[75px]' 
            : 'bg-transparent h-[95px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => handleLinkClick("/")} 
            className={`flex items-center gap-3 group transition-all duration-300 ${
              isOpen ? "opacity-0 invisible -translate-x-10" : "opacity-100 visible translate-x-0"
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
                    className={`text-[13px] font-bold uppercase tracking-widest transition-all hover:text-purple-400 ${
                      isLinkActive(link.path) ? "text-purple-500" : "text-gray-400"
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
              <button onClick={() => setIsOpen(true)} className="w-12 h-12 flex items-center justify-center text-white active:scale-90 transition-all">
                <Menu size={32} />
              </button>
            ) : (
              <button onClick={() => setIsOpen(false)} className="fixed top-4 right-6 w-12 h-12 flex items-center justify-center text-white z-[10003] active:scale-90 transition-all">
                <X size={35} />
              </button>
            )}
          </div>
        </div>

         {/* Mobile Sidebar */}
        <div className={`fixed inset-0 w-full h-screen bg-[#050504] transition-transform duration-500 ease-in-out z-[10001] flex flex-col ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="flex-1 overflow-y-auto px-12 pt-7 pb-1 ">
            <div className="flex flex-col gap-4 ">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-2xl font-black tracking-tighter transition-all duration-500 delay-[${index * 100}ms] ${
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  } ${
                    isLinkActive(link.path) ? "text-purple-500" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-white/10">
              <button 
                onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                className="flex justify-between items-center w-full"
              >
                <span className="text-purple-500 text-[21px] font-black uppercase tracking-[0.3em]">Services</span>
                <ChevronDown size={20} className={`text-gray-500 transition-transform duration-500 ${mobileServiceOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`mt-6 grid grid-cols-1 gap-2 transition-all duration-500 overflow-hidden ${mobileServiceOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {services.map((s, i) => (
                  <Link 
                    key={i} 
                    to={s.path} 
                    onClick={() => handleLinkClick(s.path)} 
                    className="flex items-center gap-4 text-gray-400 py-4 px-4 rounded-2xl bg-white/5 border border-white/5 active:bg-purple-600/20 transition-all"
                  >
                    <span className="text-purple-500">{s.icon}</span>
                    <span className="text-lg font-bold">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 bg-[#080808] border-t border-white/5">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 w-full bg-purple-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl active:scale-[0.95] transition-all"
            >
              <Mail size={20} /> Start a Project
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;