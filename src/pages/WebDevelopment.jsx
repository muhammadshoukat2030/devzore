import React from 'react';
import { Globe, Smartphone, RefreshCw, ArrowRight } from 'lucide-react';

const WebDevelopment = () => {
  return (
    // "pb-12" (Bottom padding) ko kam karne ke liye "pb-0" kar sakte hain
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-0.1">
      
      {/* --- TOP HEADER SPACE --- */}
      {/* "pt-16" (Top padding) ko kam karne ke liye "pt-6" ya "pt-8" karein */}
      <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          Digital Craftsmanship
        </div>
        
        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          Consultation
        </button>
      </div>

      {/* --- HERO SECTION SPACE --- */}
      {/* "py-10" (Top & Bottom padding) ko "py-4" ya "py-6" karne se hero ka space kam ho jayega */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Build Your Dream <br />
            <span className="text-purple-500">Website</span>, Mobile App <br />
            & <span className="text-purple-500">SaaS</span> Product
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
            We transform institutional vision into architectural digital excellence.
          </p>
          
          <div className="flex flex-nowrap gap-3 pt-2">
            <button className="flex-1 md:flex-none bg-purple-600 hover:bg-purple-700 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base flex items-center justify-center gap-2 group transition-all">
              Get Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex-1 md:flex-none bg-[#111111] border border-gray-800 hover:bg-gray-800 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base transition-all">
              View Work
            </button>
          </div>
        </div>
        
        <div className="relative group lg:justify-self-end hidden md:block">
          <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="relative bg-[#111111] border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl max-w-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
              alt="Digital Solution" 
              className="w-full h-auto opacity-90"
            />
          </div>
        </div>
      </section>

      {/* --- EXPERTISE SECTION SPACE --- */}
      {/* "py-16" ko "py-8" karne se sections ke darmiyan gap kam ho jayega */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-6"> {/* mb-8 se mb-6 kiya */}
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            Specialized <span className="text-purple-500">Expertise</span>
          </h2>
          <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          <ExpertiseCard 
            icon={<Globe className="text-purple-500" size={22} />}
            title="Development"
            desc="We engineer high-performance, custom themes and plugins built for speed, robust security, and institutional scalability. Our solutions are designed to handle complex workflows while maintaining a seamless user experience.."
            borderColor="border-l-purple-600"
          />
          <ExpertiseCard 
            icon={<Smartphone className="text-green-500" size={22} />}
            title="Mobile Ready"
            desc="In a mobile-centric world, responsive design is just the beginning. We create immersive native and web-mobile experiences that drive engagement and ensure your brand performs flawlessly across all devices and screen sizes."
            borderColor="border-l-green-500"
          />
          <ExpertiseCard 
            icon={<RefreshCw className="text-purple-500" size={22} />}
            title="CMS Migration"
            desc="Transitioning from legacy systems shouldn't be risky. We provide expert migration to modern, headless, or traditional architectures with zero data loss and minimal downtime, ensuring your digital evolution is smooth and secure."
            borderColor="border-l-purple-600"
          />
        </div>
      </section>

      {/* --- PORTFOLIO SECTION SPACE --- */}
      {/* "py-16" ko kam karke "py-10" ya "py-8" karein */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">Recent <span className="text-purple-500">Commissions</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard 
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
            title="The Food Web App"
            subtitle="Delivery Platform"
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
            title="Tourism websites"
            subtitle="Travel Application"
          />
        </div>
      </section>

      {/* --- FOOTER CTA SECTION SPACE --- */}
      {/* "py-16" ko kam karein, aur "pb-32" ko delete kar ke "pb-10" karein */}
      <section className="max-w-7xl mx-auto px-6 py-10 pb-10">
        <div className="bg-gray-200/6 border border-white/20 rounded-[2rem] p-10 md:p-12 text-center relative overflow-hidden group">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10 tracking-tight leading-tight">
            Ready to Architect Your Future?
          </h2>
          <p className="text-gray-400 mb-8 relative z-10 max-w-lg mx-auto font-medium text-sm">
            Let’s turn your vision into a high-performance digital reality. Connect with our engineering leads for a strategic roadmap of your next big project.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3.5 rounded-xl font-bold transition-all relative z-10 text-sm">
            Start Your Project →
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- HELPER COMPONENTS --- */
const ExpertiseCard = ({ icon, title, desc, borderColor }) => (
  // "p-8" padding ko "p-6" karne se card chota ho jayega
  <div className={`bg-[#080808] p-6 rounded-xl border border-gray-900 border-l-4 ${borderColor} transition-all`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const ProjectCard = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    {/* "mb-4" margin-bottom ko kam kar ke card aur title ka gap kam karein */}
    <div className="bg-[#0c0c0c] rounded-2xl overflow-hidden mb-3 border border-gray-900 shadow-xl">
      <img src={image} alt={title} className="w-full h-[250px] md:h-[300px] object-cover" />
    </div>
    <h3 className="text-lg font-bold mb-1">{title}</h3>
    <p className="text-gray-500 text-[10px] uppercase tracking-wide">{subtitle}</p>
  </div>
);

export default WebDevelopment;