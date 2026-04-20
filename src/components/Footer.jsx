import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "923358004900";
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth Scroll & Navigation Logic
  const handleNavigation = (path) => {
    if (path.includes('#')) {
      const id = path.split('#')[1];
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Redirect to Home then scroll
        navigate(`/#${id}`);
      }
    } else {
      // Normal page navigation (Contact, Blogs)
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // SEO Schema (JSON-LD) for Global Software Agency Ranking
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

      <footer className="relative bg-[#030303] pt-32 pb-12 px-6 overflow-hidden border-t border-white/5 font-sans">
        {/* --- LUXURY AMBIENT BACKGROUND --- */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* --- TOP ROW: BRANDING & NEWSLETTER --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div 
                  onClick={() => handleNavigation('/')}
                  className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center p-2 shadow-2xl shadow-purple-500/30 cursor-pointer"
                >
                  <img src="/logo1.png" alt="DevZore Logo" className="w-full h-full object-contain brightness-0 invert" />
                </div>
                <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">
                  Dev<span className="text-purple-500 not-italic">Zore</span>
                </h2>
              </div>
              <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
                Engineering the future with <strong className="text-white">MERN Stack Mastery</strong>. 
                DevZore is a globally recognized software agency delivering high-performance 
                web apps, bespoke mobile solutions, and enterprise-grade SaaS architecture.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                {["#FullStackExperts", "#MERNStack", "#CloudArchitecture", "#UIUXInnovation", "#ScalableSystems"].map(tag => (
                  <span key={tag} className="px-5 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] uppercase tracking-widest text-gray-500 font-bold hover:border-purple-500/40 transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#080808] border border-white/10 p-10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">Kickstart Your Project</h3>
                  <p className="text-gray-500 mb-8 text-sm">Get a detailed tech roadmap and 30-min strategy audit at zero cost.</p>
                  <form className="relative" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="Enter your business email" 
                      className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-purple-600 transition-all text-white pr-36"
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-purple-600 text-white font-black px-6 rounded-xl hover:bg-purple-700 transition-all text-[11px] uppercase tracking-widest">
                      Consult Now
                    </button>
                  </form>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-3xl group-hover:bg-purple-600/30 transition-all"></div>
              </div>
            </div>
          </div>

          {/* --- MAIN NAVIGATION LINKS (Synced with Navbar) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-24">
            
            {/* Column 1: Core Navigation */}
            <div>
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.4em] mb-12 opacity-40">Main Menu</h4>
              <ul className="space-y-6">
                {[
                  { name: "Services & Solutions", path: "/#services" },
                  { name: "Global Portfolio", path: "/#projects" },
                  { name: "Investment Plans", path: "/#pricing" },
                  { name: "Client Testimonials", path: "/#testimonials" },
                  { name: "Technical Blogs", path: "/blogs" },
                  { name: "Hire Engineer", path: "/contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <button 
                      onClick={() => handleNavigation(item.path)}
                      className="text-gray-400 hover:text-white text-sm font-bold tracking-tight flex items-center gap-3 group transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-all"></span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Deep Expertise (SEO Keywords) */}
            <div>
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.4em] mb-12 opacity-40">Engineering</h4>
              <ul className="space-y-5 text-gray-500 text-[13px] font-medium">
                <li className="hover:text-purple-400 cursor-default">Enterprise React Integration</li>
                <li className="hover:text-purple-400 cursor-default">Next.js Server-Side Rendering</li>
                <li className="hover:text-purple-400 cursor-default">Node.js Microservices</li>
                <li className="hover:text-purple-400 cursor-default">MongoDB Data Modeling</li>
                <li className="hover:text-purple-400 cursor-default">AWS & Cloud Deployment</li>
                <li className="hover:text-purple-400 cursor-default">API Security & Optimization</li>
              </ul>
            </div>

            {/* Column 3: Contact & Global Presence */}
            <div>
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.4em] mb-12 opacity-40">Headquarters</h4>
              <div className="space-y-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-purple-600 uppercase tracking-tighter">Direct Inquiry</span>
                  <a href="mailto:shoukat@devzore.com" className="text-white text-lg font-bold hover:text-purple-500 transition-colors">shoukat@devzore.com</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">Office Location</span>
                  <p className="text-gray-400 font-medium">Islamabad, Pakistan</p>
                  <span className="text-[11px] text-gray-600 italic">Available for Dubai, Qatar & Global Remote</span>
                </div>
              </div>
            </div>

            {/* Column 4: Authority & Socials */}
            <div>
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.4em] mb-12 opacity-40">Social Authority</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'GitHub', link: 'https://github.com/muhammadshoukat2030/' },
                  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/muhammad-shoukat-0178a3328' },
                  { name: 'Upwork', link: '#' },
                  { name: 'Twitter', link: '#' }
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-600/50 hover:bg-purple-600/10 transition-all text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- FINAL FOOTER BAR --- */}
          <div className="border-t border-white/5 pt-12 flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="text-center lg:text-left">
              <p className="text-gray-500 text-xs font-medium">
                © {currentYear} <span className="text-white font-black tracking-widest ml-1">DEVZORE INTERNATIONAL</span>.
              </p>
              <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em] mt-2">
                Designed & Engineered with Precision by M-Shoukat Engineer
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              <button onClick={() => handleNavigation('/contact')} className="hover:text-purple-500 transition-all">Support</button>
              <button className="hover:text-purple-500 transition-all">Privacy</button>
              <button className="hover:text-purple-500 transition-all">Terms</button>
              <button className="hover:text-purple-500 transition-all">Security</button>
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-white hover:text-purple-500 transition-all flex items-center gap-2">
                Back to Top ↑
              </button>
            </nav>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <div className="fixed bottom-10 right-10 z-[9999] group">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all"></div>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=Hi DevZore! I want to discuss a software project.`}
          target="_blank" 
          rel="noopener noreferrer"
          className="relative bg-[#25D366] w-20 h-20 rounded-3xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-500 rotate-[-10deg] hover:rotate-0"
        >
          <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888-11.888-2.022 0-4.005-.515-5.755-1.492l-6.129 1.615zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/>
          </svg>
        </a>
        <div className="absolute right-24 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transition-all translate-x-5 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
          Discuss Project 🚀
        </div>
      </div>
    </>
  );
};

export default Footer;