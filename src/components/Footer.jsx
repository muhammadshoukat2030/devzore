import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "923348004300";
  const location = useLocation();
  const navigate = useNavigate();

  // Custom professional message for WhatsApp conversion
  const customMessage = encodeURIComponent(
    "Hi DevZore! I checked your official website and I'm interested in discussing a custom software/web development project with you. Let's connect!"
  );

  const handleNavigation = (path) => {
    if (path.includes('#')) {
      const id = path.split('#')[1];
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        navigate(`/${path}`);
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DevZore",
    "alternateName": "DevZore International",
    "url": "https://devzore.com",
    "author": {
      "@type": "Person",
      "name": "M-Shoukat Engineer"
    },
    "description": "Premium MERN Stack Software Development Agency specializing in scalable web and mobile applications.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "120"
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* --- REDUCED PADDING FROM pt-24 TO pt-12 FOR COMPACT SLEEK LOOK --- */}
      <footer className="relative bg-[#050505] pt-12 pb-6 px-6 overflow-hidden border-t border-white/10 font-sans">
        {/* --- LUXURY AMBIENT BACKGROUND --- */}
        <div className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* --- TOP SECTION: BRAND & STRATEGY (Reduced pb-16 to pb-8) --- */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 pb-8 border-b border-white/5">
            <div className="max-w-2xl">
              <div
                onClick={() => handleNavigation('/')}
                className="flex items-center gap-4 mb-4 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-700 rounded-xl flex items-center justify-center p-2 shadow-xl group-hover:scale-105 transition-transform">
                  <img src="/logo1.png" alt="DevZore" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tighter text-white uppercase italic leading-none">
                    Dev<span className="text-purple-500 not-italic">Zore</span>
                  </h2>
                  <span className="text-[9px] text-gray-500 tracking-[0.3em] uppercase font-bold">International Agency</span>
                </div>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Architecting <span className="text-white font-semibold">high-performance digital engines</span>. We specialize in MERN stack ecosystem, delivering scalable SaaS and enterprise solutions for global clients.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm relative group overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-3">Ready to Scale?</h3>
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Business Email"
                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 outline-none focus:border-purple-500 transition-all text-white text-sm min-w-[230px]"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all text-xs uppercase tracking-widest whitespace-nowrap">
                    Get Roadmap
                  </button>
                </form>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
              </div>
            </div>
          </div>

          {/* --- LINKS LAYOUT GRID (Reduced vertical padding from py-20 to py-10) --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">

            {/* Services Column */}
            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-5 opacity-50">Services</h4>
              <ul className="space-y-1.5">
                <li><Link to="/web-development" className="text-gray-400 hover:text-purple-400 transition text-xs font-medium">Web Development</Link></li>
                <li><Link to="/mobile-apps" className="text-gray-400 hover:text-purple-400 transition text-xs font-medium">Mobile Apps</Link></li>
                <li><Link to="/mern-stack-development" className="text-gray-400 hover:text-purple-400 transition text-xs font-medium">MERN Stack</Link></li>
                <li><Link to="/ecommerce" className="text-gray-400 hover:text-purple-400 transition text-xs font-medium">E-Commerce</Link></li>
                <li><Link to="/ui-ux-design" className="text-gray-400 hover:text-purple-400 transition text-xs font-medium">UI/UX Design</Link></li>
                <li><Link to="/saas-product-development" className="text-gray-400 hover:text-purple-400 transition text-xs font-medium">SaaS Development</Link></li>
                <li><Link to="/backend-api" className="text-gray-400 hover:text-purple-400 transition text-xs font-medium">Backend & API</Link></li>
                <li><Link to="/startup-mvp" className="text-gray-400 hover:text-purple-400 transition text-xs font-medium">Startup MVP</Link></li>
                <li><Link to="/maintenance" className="text-gray-400 hover:text-purple-400 transition text-xs font-medium">Maintenance</Link></li>
                <li><Link to="/reactdevelopment" className="text-gray-400 hover:text-purple-400 transition text-xs font-medium">React Development</Link></li>
              </ul>
            </div>

            {/* Engineering Column */}
            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-5 opacity-50">Engineering</h4>
              <ul className="space-y-3 text-gray-400 text-xs font-medium">
                <li className="hover:text-purple-400 cursor-default transition-colors">Enterprise React Integration</li>
                <li className="hover:text-purple-400 cursor-default transition-colors">Next.js Server-Side Rendering</li>
                <li className="hover:text-purple-400 cursor-default transition-colors">Node.js Microservices</li>
                <li className="hover:text-purple-400 cursor-default transition-colors">MongoDB Data Modeling</li>
                <li className="hover:text-purple-400 cursor-default transition-colors">AWS & Cloud Deployment</li>
                <li className="hover:text-purple-400 cursor-default transition-colors">API Security & Optimization</li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="col-span-1">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-5 opacity-50">Global Office</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-[9px] text-purple-500 font-black uppercase mb-0.5">Project Inquiry</p>
                  <a href="mailto:hellodevzore@gmail.com" className="text-white text-sm font-bold hover:text-purple-400 transition-colors">
                    hellodevzore@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[9px] text-green-500 font-black uppercase mb-0.5">Phone</p>
                  <a href="tel:+923348004300" className="text-white text-sm font-bold hover:text-green-400 transition-colors">
                    +92 334 8004300
                  </a>
                </div>
                <div>
                  <p className="text-[9px] text-blue-500 font-black uppercase mb-0.5">Main Location</p>
                  <p className="text-gray-400 text-xs">Islamabad, Pakistan</p>
                  <p className="text-[10px] text-gray-600 italic mt-0.5">Serving international clients remotely.</p>
                </div>
              </div>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-5 opacity-50">Connect</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "GitHub", link: "https://github.com/muhammadshoukat2030" },
                  { name: "LinkedIn", link: "https://www.linkedin.com/in/dev-zore-833893418" },
                  { name: "Instagram", link: "https://www.instagram.com/devz.ore/" },
                  { name: "Facebook", link: "#" },
                  { name: "Upwork", link: "#" },
                  { name: "Fiverr", link: "#" },
                  { name: "X (Twitter)", link: "#" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-[9px] font-bold text-gray-400 hover:text-white uppercase tracking-widest text-center"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em]">
                © {currentYear} <span className="text-white font-bold">DevZore International</span>. All Rights Reserved.
              </p>
              <p className="text-[8px] text-gray-700 uppercase tracking-[0.3em] mt-0.5">
                Engineered with precision by M-Shoukat Engineer
              </p>
            </div>

            {/* --- FIX: ADJUSTED FOR TEXT LAYOUT TO REMOVE INTERACTION CODES UNDER WHATSAPP --- */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-[9px] font-bold uppercase tracking-widest text-gray-500">
              <Link to="/privacy-policy" className="hover:text-purple-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-purple-500 transition-colors">Terms & Conditions</Link>
              
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white hover:text-purple-800 transition-all flex items-center justify-center bg-white/8 border border-white/10 w-7 h-7 rounded-lg text-sm font-normal"
                title="Scroll back to top"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP FLOATING BUTTON (Official Clean UI Fix) --- */}
      <div className="fixed bottom-5 right-5 sm:bottom-15 sm:right-4 z-[9999] group">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${customMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
        >
          {/* Official Clean SVG Vector */}
          <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
            <path d="M12.004 2c-5.517 0-9.996 4.477-9.996 9.995 0 1.763.459 3.418 1.259 4.865l-1.267 4.624 4.745-1.243c1.412.766 3.017 1.201 4.722 1.201 5.517 0 9.996-4.477 9.996-9.995 0-5.517-4.479-9.995-9.996-9.995zm4.992 14.073c-.219.613-1.285 1.135-1.767 1.181-.462.046-.906.231-2.956-.583-2.622-1.042-4.29-3.719-4.421-3.894-.131-.175-1.056-1.403-1.056-2.677 0-1.273.656-1.901.897-2.164.241-.262.525-.328.7-.328.175 0 .35 0 .503.009.166.009.385-.061.604.464.219.525.744 1.815.81 1.946.066.131.109.284.022.459-.088.175-.131.284-.262.437-.131.153-.276.341-.394.459-.131.131-.269.273-.116.536.153.262.68 1.114 1.455 1.802.996.886 1.836 1.159 2.099 1.29.262.131.415.109.569-.066.153-.175.656-.765.831-1.028.175-.262.35-.219.591-.131.241.087 1.531.722 1.794.853.262.131.437.197.481.273.044.077.044.448-.175 1.061z" />
          </svg>
        </a>
        
        {/* Modern Label Overlay */}
        <div className="absolute hidden sm:block right-16 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1.5 rounded-lg font-bold text-[9px] uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
          Let's Build Something 🚀
        </div>
      </div>
    </>
  );
};

export default Footer;