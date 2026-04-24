import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "923358004900";
  const location = useLocation();
  const navigate = useNavigate();

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

      <footer className="relative bg-[#050505] pt-24 pb-10 px-6 overflow-hidden border-t border-white/10 font-sans">
        {/* --- LUXURY AMBIENT BACKGROUND --- */}
        <div className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* --- TOP SECTION: BRAND & STRATEGY --- */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-16 border-b border-white/5">
            <div className="max-w-2xl">
              <div 
                onClick={() => handleNavigation('/')}
                className="flex items-center gap-4 mb-6 cursor-pointer group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-700 rounded-xl flex items-center justify-center p-2 shadow-xl group-hover:scale-105 transition-transform">
                  <img src="/logo1.png" alt="DevZore" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic leading-none">
                    Dev<span className="text-purple-500 not-italic">Zore</span>
                  </h2>
                  <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase font-bold">International Agency</span>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Architecting <span className="text-white font-semibold">high-performance digital engines</span>. We specialize in MERN stack ecosystem, delivering scalable SaaS and enterprise solutions for global clients.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative group overflow-hidden">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Scale?</h3>
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Business Email" 
                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-all text-white text-sm min-w-[250px]"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all text-xs uppercase tracking-widest whitespace-nowrap">
                    Get Roadmap
                  </button>
                </form>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
              </div>
            </div>
          </div>

          {/* --- MIDDLE SECTION: NAVIGATION GRID --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.3em] mb-8 opacity-50">Navigation</h4>
              <ul className="space-y-4">
                {[
                  { name: "About Agency", path: "/about" },
                  { name: "Solutions", path: "/#services" },
                  { name: "Our Work", path: "/#projects" },
                  { name: "Pricing", path: "/#pricing" },
                  { name: "Insights", path: "/blog" }
                ].map((item) => (
                  <li key={item.name}>
                    <button 
                      onClick={() => handleNavigation(item.path)}
                      className="text-gray-400 hover:text-purple-400 text-sm font-medium transition-all text-left flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.3em] mb-8 opacity-50">Expertise</h4>
              <ul className="space-y-4 text-gray-500 text-sm font-medium">
                <li className="hover:text-white transition-colors cursor-default">Cloud Microservices</li>
                <li className="hover:text-white transition-colors cursor-default">Custom CRM Core</li>
                <li className="hover:text-white transition-colors cursor-default">Real-time WebSockets</li>
                <li className="hover:text-white transition-colors cursor-default">AWS Deployment</li>
                <li className="hover:text-white transition-colors cursor-default">API Security</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.3em] mb-8 opacity-50">Global Office</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-purple-500 font-black uppercase mb-1">Project Inquiry</p>
                  <a href="mailto:shoukat@devzore.com" className="text-white text-base font-bold hover:text-purple-400 transition-colors">shoukat@devzore.com</a>
                </div>
                <div>
                  <p className="text-[10px] text-blue-500 font-black uppercase mb-1">HQ Location</p>
                  <p className="text-gray-400 text-sm">Islamabad, PK</p>
                  <p className="text-[11px] text-gray-600 italic">Serving Dubai & Qatar Clients</p>
                </div>
              </div>
            </div>

            {/* Social Authority */}
            <div>
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.3em] mb-8 opacity-50">Connect</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Github', link: 'https://github.com/muhammadshoukat2030/' },
                  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/muhammad-shoukat-0178a3328' },
                  { name: 'Upwork', link: '#' },
                  { name: 'X', link: '#' }
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-[10px] font-bold text-gray-400 hover:text-white uppercase tracking-widest"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
                © {currentYear} <span className="text-white font-bold">DevZore International</span>. All Rights Reserved.
              </p>
              <p className="text-[9px] text-gray-700 uppercase tracking-[0.3em] mt-1">
                Engineered with precision by M-Shoukat Engineer
              </p>
            </div>

            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              <button className="hover:text-purple-500 transition-colors">Privacy</button>
              <button className="hover:text-purple-500 transition-colors">Terms</button>
              <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
                className="text-white hover:text-purple-500 transition-all flex items-center gap-2"
              >
                Top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP FLOATING BUTTON (Modern UI) --- */}
      <div className="fixed bottom-8 right-8 z-[9999] group">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=Hi DevZore! I want to discuss a software project.`}
          target="_blank" 
          rel="noopener noreferrer"
          className="relative bg-[#25D366] w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-500 group-hover:rotate-6"
        >
          <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888-11.888-2.022 0-4.005-.515-5.755-1.492l-6.129 1.615zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/>
          </svg>
        </a>
        {/* Tooltip */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
          Let's Build Something 🚀
        </div>
      </div>
    </>
  );
};

export default Footer;