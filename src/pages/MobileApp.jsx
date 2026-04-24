import React from 'react';
import { 
  Smartphone, Layers, Zap, ArrowRight, ShieldCheck, 
  Cpu, Code2, Layout, Rocket, CheckCircle2 
} from 'lucide-react';

const MobileApps = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-10 overflow-x-hidden">
      
      {/* --- 1. HEADER SECTION --- */}
      <nav className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          Next-Gen Mobility
        </div>
        
        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          App Consultation
        </button>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Elevate Your Brand <br />
            With <span className="text-purple-500">Native</span> & <br />
            <span className="text-purple-500">Hybrid</span> Mobile Apps
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
            We engineer high-performance iOS and Android applications that provide seamless 
            user experiences. From concept to App Store deployment, we handle the full lifecycle.
          </p>
          
          <div className="flex flex-nowrap gap-3 pt-2">
            <button className="flex-1 md:flex-none bg-purple-600 hover:bg-purple-700 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base flex items-center justify-center gap-2 group transition-all">
              App Estimate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex-1 md:flex-none bg-[#111111] border border-gray-800 hover:bg-gray-800 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base transition-all">
              Our Apps
            </button>
          </div>
        </div>
        
        <div className="relative group lg:justify-self-end hidden md:block">
          <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="relative bg-[#111111] border border-gray-800/50 rounded-[2.5rem] overflow-hidden shadow-2xl max-w-[400px] mx-auto p-4 transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
              alt="Mobile App Interface" 
              className="w-full h-auto rounded-[2rem] opacity-90 object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- 3. CORE CAPABILITIES --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Specialization</span>
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mt-1">
            App <span className="text-purple-500">Capabilities</span>
          </h2>
          <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          <AppExpertiseCard 
            icon={<Cpu className="text-purple-500" size={22} />}
            title="Native iOS & Android"
            desc="Swift and Kotlin based development for maximum performance, accessing device hardware like GPS and Biometrics."
            borderColor="border-l-purple-600"
          />
          <AppExpertiseCard 
            icon={<Layers className="text-purple-400" size={22} />}
            title="Cross-Platform"
            desc="Leveraging Flutter and React Native to build once and deploy everywhere, reducing time-to-market."
            borderColor="border-l-purple-400"
          />
          <AppExpertiseCard 
            icon={<ShieldCheck className="text-purple-500" size={22} />}
            title="Secure Backends"
            desc="End-to-end encrypted API integrations with scalable Node.js backends, ensuring user data privacy."
            borderColor="border-l-purple-600"
          />
        </div>
      </section>

      {/* --- 4. APP PORTFOLIO --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Showcase</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">Featured <span className="text-purple-500">Apps</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AppProjectCard 
            image="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800"
            title="Fintech Wallet Pro"
            subtitle="Secure Transaction System"
          />
          <AppProjectCard 
            image="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=800"
            title="Smart E-Commerce"
            subtitle="Seamless Shopping Experience"
          />
        </div>
      </section>

      {/* --- 5. NEW: 4 IMAGES GALLERY SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Recent <span className="text-purple-500">Interfaces</span></h2>
          <p className="text-gray-500 text-sm mt-2">Explore our latest UI/UX mobile designs</p>
        </div>

        {/* 4 Images Grid - Responsive for all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600"
          ].map((url, index) => (
            <div key={index} className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gray-800 group cursor-crosshair">
              <img 
                src={url} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400">View Concept</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 6. TECHNOLOGY STACK --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#080808] border border-gray-900 rounded-3xl p-8 flex flex-wrap justify-center gap-8 opacity-70">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest"><Code2 size={16}/> React Native</div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest"><Code2 size={16}/> Flutter</div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest"><Code2 size={16}/> Firebase</div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest"><Code2 size={16}/> MongoDB</div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest"><Code2 size={16}/> Swift</div>
        </div>
      </section>

      {/* --- 7. FOOTER CTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-10 pb-10">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/5 blur-[80px]"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10 tracking-tight leading-tight">
            Ready to Go Mobile?
          </h2>
          <p className="text-gray-400 mb-8 relative z-10 max-w-lg mx-auto font-medium text-sm">
            From wireframes to the Play Store launch—let's build an app that stays on your users' home screens.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3.5 rounded-xl font-bold transition-all relative z-10 text-sm hover:scale-105 active:scale-95 shadow-xl shadow-purple-900/20">
            Launch Your App Now →
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- HELPER COMPONENTS --- */
const AppExpertiseCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-7 rounded-xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all group shadow-lg`}>
    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const AppProjectCard = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    <div className="bg-[#0c0c0c] rounded-3xl overflow-hidden mb-3 border border-gray-900 shadow-xl relative">
      <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition-all z-10" />
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[250px] md:h-[350px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
      />
    </div>
    <h3 className="text-lg font-bold mb-1 group-hover:text-purple-400 transition-colors">{title}</h3>
    <p className="text-gray-400 text-[10px] uppercase tracking-wide font-semibold">{subtitle}</p>
  </div>
);

export default MobileApps;