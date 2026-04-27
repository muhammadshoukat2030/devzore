import React from 'react';
import { 
  Database, 
  Layers, 
  Cpu, 
  ArrowRight, 
  Zap, 
  Code2, 
  Globe, 
  Server 
} from 'lucide-react';

const MernStackDevelopment = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-0.1">
      
      {/* --- TOP HEADER SPACE --- */}
      <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          Full-Stack Engineering
        </div>
        
        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          Free Consultation
        </button>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Scalable <span className="text-purple-500">MERN</span> <br />
            Stack Solutions for <br />
            <span className="text-purple-500">Modern</span> Business
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
            We architect high-performance applications using MongoDB, Express, React, and Node.js to ensure speed, security, and seamless scalability.
          </p>
          
          <div className="flex flex-nowrap gap-3 pt-2">
            <button className="flex-1 md:flex-none bg-purple-600 hover:bg-purple-700 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base flex items-center justify-center gap-2 group transition-all">
              Start Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex-1 md:flex-none bg-[#111111] border border-gray-800 hover:bg-gray-800 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base transition-all">
              Stack Details
            </button>
          </div>
        </div>
        
        <div className="relative group lg:justify-self-end hidden md:block">
          <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="relative bg-[#0c0c0c] border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl max-w-[500px] p-8 flex items-center justify-center">
             {/* Tech Stack Icons Grid */}
             <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center gap-2 p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Database size={40} className="text-green-500" />
                    <span className="text-[10px] font-bold">MongoDB</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Layers size={40} className="text-gray-300" />
                    <span className="text-[10px] font-bold">Express.js</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Code2 size={40} className="text-blue-400" />
                    <span className="text-[10px] font-bold">React.js</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Server size={40} className="text-green-400" />
                    <span className="text-[10px] font-bold">Node.js</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- MERN EXPERTISE SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            MERN <span className="text-purple-500">Architecture</span>
          </h2>
          <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          <ExpertiseCard 
            icon={<Cpu className="text-blue-400" size={22} />}
            title="Frontend Engineering"
            desc="Developing highly interactive, state-driven interfaces with React.js and Redux for a buttery-smooth user experience and rapid page transitions."
            borderColor="border-l-blue-400"
          />
          <ExpertiseCard 
            icon={<Zap className="text-yellow-500" size={22} />}
            title="Backend Systems"
            desc="Building lightning-fast server-side logic with Node.js and Express, designed to handle thousands of concurrent requests with ease."
            borderColor="border-l-yellow-500"
          />
          <ExpertiseCard 
            icon={<Database className="text-green-500" size={22} />}
            title="Database Design"
            desc="Architecting flexible, schema-less NoSQL databases with MongoDB that scale horizontally as your user base and data grow."
            borderColor="border-l-green-500"
          />
        </div>
      </section>

      {/* --- RECENT MERN PROJECTS --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Full-Stack Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">Live <span className="text-purple-500">Deployments</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard 
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            title="SaaS Analytics Dashboard"
            subtitle="React & Node.js"
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
            title="Modern E-Commerce Engine"
            subtitle="MERN Stack"
          />
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-10 pb-10">
        <div className="bg-[#0c0c0c] border border-white/10 rounded-[2rem] p-10 md:p-12 text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-5">
              <Code2 size={200} className="text-purple-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10 tracking-tight leading-tight">
            Need a Robust Full-Stack App?
          </h2>
          <p className="text-gray-400 mb-8 relative z-10 max-w-lg mx-auto font-medium text-sm">
            From database modeling to professional frontend design, we handle the entire MERN lifecycle. Let's discuss your technical requirements today.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3.5 rounded-xl font-bold transition-all relative z-10 text-sm flex items-center gap-2 mx-auto">
            Book a Tech Call <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- HELPER COMPONENTS --- */
const ExpertiseCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-6 rounded-xl border border-gray-900 border-l-4 ${borderColor} transition-all hover:bg-[#0c0c0c] group cursor-default`}>
    <div className="mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const ProjectCard = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    <div className="bg-[#0c0c0c] rounded-2xl overflow-hidden mb-3 border border-gray-900 shadow-xl relative">
      <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
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

export default MernStackDevelopment;