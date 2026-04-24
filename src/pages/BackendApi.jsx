import React from 'react';
import { Database, Server, Shield, Cpu, ArrowRight, Code2, Zap, Globe, Layers } from 'lucide-react';

const BackendApi = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-10">

      {/* --- 1. TOP HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 pt-16 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          System Architecture
        </div>

        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          API Documentation
        </button>
      </div>

      {/* --- 2. HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Scalable <span className="text-purple-500">Backend</span> <br />
            & Robust <br />
            <span className="text-purple-500">API</span> Solutions
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
            We build the invisible engine that powers your business. From complex database architectures to lightning-fast REST & GraphQL APIs.
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
          <div className="relative bg-[#111111] border border-gray-800/50 rounded-3xl overflow-hidden shadow-2xl max-w-[500px]">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
              alt="Futuristic Network Infrastructure"
              className="w-full h-auto opacity-80 group-hover:scale-105 transition-transform duration-700 object-cover"
              loading="lazy"
              onError={(e) => {
                // Agar phir bhi load na ho to ye generic background dikhayega
                e.target.src = "https://placehold.co/600x400/111/fff?text=Backend+Architecture";
              }}
            />
          </div>
        </div>
      </section>

      {/* --- 3. BACKEND EXPERTISE --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            Core <span className="text-purple-500">Infrastructure</span>
          </h2>
          <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <BackendCard
            icon={<Database className="text-purple-500" size={24} />}
            title="Database Design"
            desc="Expert SQL and NoSQL architectural planning for scalability, high availability, and data integrity across distributed systems."
            borderColor="border-l-purple-600"
          />
          <BackendCard
            icon={<Cpu className="text-blue-500" size={24} />}
            title="Microservices"
            desc="Developing modular, decoupled services that communicate efficiently via message brokers like RabbitMQ or Kafka."
            borderColor="border-l-blue-500"
          />
          <BackendCard
            icon={<Shield className="text-green-500" size={24} />}
            title="API Security"
            desc="Implementing OAuth2, JWT, and advanced encryption to ensure your data remains protected from unauthorized access."
            borderColor="border-l-green-500"
          />
        </div>
      </section>

      {/* --- 4. TECHNICAL SHOWCASE --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Engineering</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">High-Load <span className="text-purple-500">Systems</span></h2>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-900 rounded-md text-[10px] border border-gray-800">Node.js</span>
            <span className="px-3 py-1 bg-gray-900 rounded-md text-[10px] border border-gray-800">Python</span>
            <span className="px-3 py-1 bg-gray-900 rounded-md text-[10px] border border-gray-800">Go</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
            title="Enterprise CRM Core"
            subtitle="Node.js / PostgreSQL / Redis"
          />
          <ProjectItem
            image="https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop"
            title="Real-time Streaming API"
            subtitle="WebSockets / GraphQL / AWS"
          />
        </div>
      </section>

      {/* --- 5. SYSTEM PERFORMANCE SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#080808] border border-gray-900 rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 blur-[120px]"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Performance <br /><span className="text-purple-500">Optimized</span></h2>
              <div className="space-y-6">
                <PerformanceRow icon={<Zap size={18} />} title="Low Latency" text="Sub-100ms response times for global endpoints." />
                <PerformanceRow icon={<Layers size={18} />} text="Auto-scaling infrastructure for traffic spikes." title="Elastic Scaling" />
                <PerformanceRow icon={<Code2 size={18} />} text="Comprehensive documentation for developers." title="Developer Friendly" />
              </div>
            </div>
            <div className="bg-[#0c0c0c] border border-gray-800 p-2 rounded-[2rem] shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1543286386-713bcd549651?q=80&w=2070&auto=format&fit=crop"
                alt="Performance Graphs"
                className="w-full h-auto rounded-[1.5rem] opacity-80 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/10 rounded-[3rem] p-12 text-center relative overflow-hidden group">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Need a Backend Architect?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let's discuss how we can build a stable, secure, and fast foundation for your next digital venture.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
            Get Technical Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- MINI COMPONENTS --- */

const BackendCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-8 rounded-2xl border border-gray-900 border-l-4 ${borderColor} hover:translate-y-[-5px] transition-all`}>
    <div className="mb-5">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const ProjectItem = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    <div className="bg-[#0c0c0c] rounded-[2rem] overflow-hidden mb-4 border border-gray-800 shadow-xl group-hover:border-purple-500/50 transition-all">
      <img src={image} alt={title} className="w-full h-[300px] object-cover opacity-70 group-hover:opacity-100 transition-all duration-500" />
    </div>
    <h3 className="text-xl font-bold mb-1 px-2">{title}</h3>
    <p className="text-blue-500 text-[11px] font-bold uppercase tracking-wider px-2">{subtitle}</p>
  </div>
);

const PerformanceRow = ({ icon, title, text }) => (
  <div className="flex gap-4">
    <div className="bg-gray-900 p-3 rounded-xl border border-gray-800 h-fit text-purple-500">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-gray-500 text-sm">{text}</p>
    </div>
  </div>
);

export default BackendApi;