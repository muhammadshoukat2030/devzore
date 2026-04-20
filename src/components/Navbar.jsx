import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for high-end glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Navigation Links
  const navLinks = [
    { name: "Services", path: "/#services" },
    { name: "Portfolio", path: "/#projects" }, 
    { name: "Pricing", path: "/#pricing" },
    { name: "FAQ", path: "/#faq" }, // FAQ Path Linked
    { name: "Blogs", path: "/blogs" },
  ];

  // Professional Navigation Logic
  const handleNavLinkClick = (path) => {
    setIsOpen(false);
    
    // Agar hum page change kar rahe hain (e.g., Contact ya Blog se Home ja rahe hain)
    if (path.includes('#')) {
      const id = path.split('#')[1];
      
      // Agar hum already Home page par hain
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } 
      // Agar hum kisi aur page se aa rahe hain, to URL automatic handles it
    } else {
      // Normal page navigation ke liye top par scroll karein
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[10000] transition-all duration-500 ${
      scrolled 
      ? 'bg-[#030303]/85 backdrop-blur-md border-b border-white/5 py-4' 
      : 'bg-transparent py-7'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* --- BRAND IDENTITY --- */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center p-1.5 shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <img 
              src="/logo1.png" 
              alt="DevZore International Agency" 
              className="w-full h-full object-contain filter brightness-0 invert" 
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
            Dev<span className="text-purple-500 not-italic">Zore</span>
          </span>
        </Link>
        
        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-9 text-[13px] font-bold uppercase tracking-[0.15em] text-gray-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  onClick={() => handleNavLinkClick(link.path)}
                  className={`hover:text-white transition-all relative py-2 block ${
                    location.pathname === link.path ? 'text-white' : ''
                  }`}
                >
                  {link.name}
                  {/* Premium Hover Underline */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-purple-600 transition-all duration-300 ${
                    location.hash === link.path.replace('/', '') ? 'w-full' : 'w-0 hover:w-full'
                  }`}></span>
                </Link>
              </li>
            ))}
          </ul>
          
          <Link 
            to="/contact" 
            onClick={() => window.scrollTo(0, 0)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-purple-600/25 active:scale-95 border border-purple-500/20"
          >
            Hire DevZore →
          </Link>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-3/4'}`}></span>
              <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div className={`md:hidden fixed inset-0 bg-[#030303] transition-all duration-500 ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="h-full flex flex-col items-center justify-center gap-10 px-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => handleNavLinkClick(link.path)}
              className="text-5xl font-black text-white uppercase tracking-tighter hover:text-purple-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            to="/contact" 
            onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
            className="mt-6 bg-purple-600 text-white w-full py-5 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl shadow-purple-600/30"
          >
            Get Started Now
          </Link>

          <div className="absolute bottom-12 flex gap-6 text-gray-500">
            <span className="text-[10px] tracking-widest uppercase">Global Quality</span>
            <span className="text-[10px] tracking-widest uppercase">Premium Support</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;