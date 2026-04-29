import React, { useState } from 'react';
import { 
  Database, 
  Layers, 
  Cpu, 
  ArrowRight, 
  Zap, 
  Code2, 
  Globe, 
  Server,
  Plus
} from 'lucide-react';

const MernStackDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a MERN stack project take? ",
      answer: " A focused MVP typically takes 8 to 14 weeks. A full-featured SaaS platform or enterprise application can take 4 to 8 months depending on complexity, number of integrations, and how much design work is needed. After our discovery call, we give you a milestone-based timeline with no hidden phases."
    },
    {
      question: "Is MERN stack still a good choice in 2026?",
      answer: "Absolutely. MERN is actively used by companies from early-stage startups to Fortune 500 enterprises. The ecosystem has grown stronger with React 19's Server Components, modern Next.js features, and excellent AI integration support. It remains one of the most in-demand full-stack skill sets on the market and shows no signs of declining relevance."
    },
    {
      question: "What is the difference between MERN stack and Next.js? ",
      answer: "Next.js is a framework built on top of React — you can think of it as the React layer of MERN upgraded with server-side rendering, static generation, and file-based routing. DevZore uses Next.js as the frontend layer for most client projects while keeping the Express and MongoDB backend structure. The two approaches complement each other rather than compete."
    },
    {
      question: "Can DevZore take over an existing MERN project? ",
      answer: "Yes. We regularly audit and inherit existing codebases. We start with a code and architecture review, identify technical debt and security issues, and produce a clear findings report before touching any code. Most rescue projects become long-term engagements."
    },
    {
      question: "Do you provide ongoing maintenance after launch?  ",
      answer: "Every project includes 30 days of post-launch support. After that, we offer flexible monthly maintenance plans covering bug fixes, dependency updates, security patches, performance monitoring, and feature development."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-20">
      
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
            desc="Developing highly interactive, state-driven interfaces with React.js and Redux for a buttery-smooth user experience."
            borderColor="border-l-blue-400"
          />
          <ExpertiseCard 
            icon={<Zap className="text-yellow-500" size={22} />}
            title="Backend Systems"
            desc="Building lightning-fast server-side logic with Node.js and Express, designed to handle thousands of concurrent requests."
            borderColor="border-l-yellow-500"
          />
          <ExpertiseCard 
            icon={<Database className="text-green-500" size={22} />}
            title="Database Design"
            desc="Architecting flexible, schema-less NoSQL databases with MongoDB that scale horizontally as your user base grows."
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

      {/* --- FAQ SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Common Queries</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">Frequently Asked Questions<span className="text-purple-500">FAQ</span></h2>
          <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
        </div>

        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                activeIndex === i 
                ? 'border-purple-500/50 bg-purple-500/5' 
                : 'border-white/5 bg-[#0A0A0A]'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(i)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className={`font-bold text-sm md:text-base transition-colors ${activeIndex === i ? 'text-purple-400' : 'text-white group-hover:text-purple-300'}`}>
                  <h3>{faq.question}</h3>
                </span>
                <Plus 
                  size={20} 
                  className={`transition-transform duration-300 ${activeIndex === i ? 'rotate-45 text-purple-400' : 'text-gray-500'}`} 
                />
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#0c0c0c] border border-white/10 rounded-[2rem] p-10 md:p-12 text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-5">
              <Code2 size={200} className="text-purple-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10 tracking-tight leading-tight">
            Ready to build your MERN stack application?
          </h2>
          <p className="text-gray-400 mb-8 relative z-10 max-w-lg mx-auto font-medium text-sm">
            Talk to our team — we respond within 24 hours with a clear plan and honest pricing.
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