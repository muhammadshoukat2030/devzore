import React from 'react';
import { 
  Layers, 
  Cloud, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  BarChart3, 
  Users2,
  Settings2
} from 'lucide-react';

const SaaSProductDevelopment = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-0.1">
      
      {/* --- TOP HEADER SPACE --- */}
      <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          Product Engineering Lab
        </div>
        
        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          Talk to Specialist
        </button>
      </div>

      {/* --- HERO SECTION SPACE --- */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Build Scalable <br />
            <span className="text-purple-500">SaaS</span> Platforms <br />
            For <span className="text-purple-500">Global</span> Markets
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
            We engineer multi-tenant cloud solutions with robust subscription logic, microservices architecture, and enterprise-grade security.
          </p>
          
          <div className="flex flex-nowrap gap-3 pt-2">
            <button className="flex-1 md:flex-none bg-purple-600 hover:bg-purple-700 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base flex items-center justify-center gap-2 group transition-all">
              Build My SaaS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex-1 md:flex-none bg-[#111111] border border-gray-800 hover:bg-gray-800 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base transition-all">
              View Framework
            </button>
          </div>
        </div>
        
        <div className="relative group lg:justify-self-end hidden md:block">
          <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="relative bg-[#0c0c0c] border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl max-w-[500px] p-10">
            {/* SaaS Abstract Visual */}
            <div className="grid grid-cols-2 gap-4">
               {[ShieldCheck, BarChart3, Users2, Settings2].map((Icon, i) => (
                 <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center gap-3">
                    <Icon size={32} className="text-purple-500" />
                    <div className="h-1.5 w-12 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-purple-500 w-2/3"></div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERTISE SECTION SPACE --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            SaaS <span className="text-purple-500">Core Capabilities</span>
          </h2>
          <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          <ExpertiseCard 
            icon={<Layers className="text-purple-500" size={22} />}
            title="Multi-Tenancy"
            desc="Architecting secure data isolation for multiple clients within a single application instance, ensuring high efficiency and manageable maintenance."
            borderColor="border-l-purple-600"
          />
          <ExpertiseCard 
            icon={<Cloud className="text-blue-500" size={22} />}
            title="Cloud Infrastructure"
            desc="Leveraging AWS and Azure for auto-scaling capabilities that grow with your user base, maintaining 99.9% uptime for global accessibility."
            borderColor="border-l-blue-500"
          />
          <ExpertiseCard 
            icon={<Zap className="text-yellow-500" size={22} />}
            title="Subscription Engine"
            desc="Integrated billing systems using Stripe or PayPal with tiered pricing, automated invoicing, and complex recurring revenue logic."
            borderColor="border-l-yellow-500"
          />
        </div>
      </section>

      {/* --- PORTFOLIO SECTION SPACE --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">SaaS Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">Global <span className="text-purple-500">Products</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard 
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            title="FinTech Dashboard"
            subtitle="Subscription-based Analytics"
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1454165833767-027eeef1596e?auto=format&fit=crop&q=80&w=800"
            title="HRMS Enterprise"
            subtitle="B2B Cloud Solution"
          />
        </div>
      </section>

      {/* --- FOOTER CTA SECTION SPACE --- */}
      <section className="max-w-7xl mx-auto px-6 py-10 pb-10">
        <div className="bg-[#0c0c0c] border border-white/10 rounded-[2rem] p-10 md:p-12 text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-5">
              <Layers size={200} className="text-purple-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10 tracking-tight leading-tight">
            Turn Your Idea Into Recurring Revenue.
          </h2>
          <p className="text-gray-400 mb-8 relative z-10 max-w-lg mx-auto font-medium text-sm">
            We don't just build software; we build businesses. Get a complete technical roadmap for your SaaS product from our engineering leads.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3.5 rounded-xl font-bold transition-all relative z-10 text-sm">
            Start Developing SaaS →
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- HELPER COMPONENTS --- */
const ExpertiseCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-6 rounded-xl border border-gray-900 border-l-4 ${borderColor} transition-all hover:bg-[#0c0c0c]`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const ProjectCard = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    <div className="bg-[#0c0c0c] rounded-2xl overflow-hidden mb-3 border border-gray-900 shadow-xl relative">
      <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[250px] md:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500" 
      />
    </div>
    <h3 className="text-lg font-bold mb-1 group-hover:text-purple-400 transition-colors">{title}</h3>
    <p className="text-gray-500 text-[10px] uppercase tracking-wide font-bold">{subtitle}</p>
  </div>
);

export default SaaSProductDevelopment;