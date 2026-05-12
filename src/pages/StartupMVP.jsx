
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Rocket, Layers, ShieldCheck, ArrowRight,
  Target, Zap, Flame, Code2, Cpu
} from 'lucide-react';

const StartupMVP = () => {
  return (
    // Selection color aur background original design jaisa hi rakha hai
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-0.1">
      <Helmet>
        <title>Startup MVP Development Company | DevZore</title>
        <meta
          name="description"
          content="DevZore helps startups build fast MVPs (Minimum Viable Products) with scalable architecture, modern UI/UX, and rapid development cycles to validate ideas quickly and efficiently."
        />
        <link
          rel="canonical"
          href="https://devzore.com/startup-mvp"
        />
        {/* Open Graph */}
        <meta property="og:title" content="Startup MVP Development Company | DevZore" />
        <meta
          property="og:description"
          content="We build fast and scalable MVPs for startups to validate ideas quickly using modern web and mobile technologies."
        />
        <meta property="og:url" content="https://devzore.com/startup-mvp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevZore" />

        {/* Social Image */}
        <meta property="og:image" content="https://devzore.com/og/startup-mvp.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Startup MVP Development Company | DevZore" />
        <meta
          name="twitter:description"
          content="Fast MVP development for startups to validate ideas and launch quickly with scalable architecture."
        />
        <meta name="twitter:image" content="https://devzore.com/og/startup-mvp.jpg" />
      </Helmet>
      {/* --- TOP HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          Rapid Launch Protocol
        </div>

        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          Pitch Your Idea
        </button>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            From Concept to <br />
            <span className="text-purple-500">Market-Ready</span> <br />
            in <span className="text-purple-500">Record Time</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
            Stop over-engineering. We build lean, scalable MVPs designed to validate your business model and impress your investors.
          </p>

          <div className="flex flex-nowrap gap-3 pt-2">
            <button className="flex-1 md:flex-none bg-purple-600 hover:bg-purple-700 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base flex items-center justify-center gap-2 group transition-all">
              Launch MVP <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex-1 md:flex-none bg-[#111111] border border-gray-800 hover:bg-gray-800 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base transition-all">
              Pricing Models
            </button>
          </div>
        </div>

        <div className="relative group lg:justify-self-end hidden md:block">
          <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="relative bg-[#111111] border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl max-w-[500px]">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
              alt="Startup Growth"
              className="w-full h-auto opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* --- MVP STRATEGY SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            Startup <span className="text-purple-500">Blueprint</span>
          </h2>
          <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <StrategyCard
            icon={<Target className="text-purple-500" size={22} />}
            title="Proof of Concept"
            desc="We transform your raw idea into a functional prototype. Focused on core value propositions to test market demand without the high cost of full-scale development."
            borderColor="border-l-purple-600"
          />
          <StrategyCard
            icon={<Zap className="text-orange-500" size={22} />}
            title="Rapid Iteration"
            desc="Built with agile methodologies, our MVPs are designed to evolve. We implement feedback loops that allow you to pivot and adapt to user needs in real-time."
            borderColor="border-l-orange-500"
          />
          <StrategyCard
            icon={<Layers className="text-purple-500" size={22} />}
            title="Scalable Tech Stack"
            desc="We use modern frameworks (MERN/Next.js) to ensure that your 'Minimum' product is built on a foundation that can support 'Maximum' growth later."
            borderColor="border-l-purple-600"
          />
        </div>
      </section>

      {/* --- SUCCESSFUL LAUNCHES SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">Market <span className="text-purple-500">Disruptors</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <LaunchCard
            image="https://images.unsplash.com/photo-1551288049-bbbda536ad39?auto=format&fit=crop&q=80&w=800"
            title="Fintech Dashboard MVP"
            subtitle="Raised $1.2M in Seed Round"
          />
          <LaunchCard
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            title="SaaS Collaboration Tool"
            subtitle="Zero to 10k Active Users"
          />
        </div>
      </section>

      {/* --- TECH STACK (Extra for MVP) --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#080808] border border-gray-900 rounded-[2rem] p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full"></div>
          </div>
          <div className="text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">Our High-Octane Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
              <TechItem icon={<Code2 size={20} />} label="React/Next" />
              <TechItem icon={<Cpu size={20} />} label="Node.js" />
              <TechItem icon={<Flame size={20} />} label="Firebase" />
              <TechItem icon={<ShieldCheck size={20} />} label="AWS" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-10 pb-10">
        <div className="bg-gray-200/5 border border-white/10 rounded-[2rem] p-10 md:p-12 text-center relative overflow-hidden group">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10 tracking-tight leading-tight">
            Stop Dreaming, Start Shipping.
          </h2>
          <p className="text-gray-400 mb-8 relative z-10 max-w-lg mx-auto font-medium text-sm">
            The market waits for no one. Let’s turn your pitch deck into a live product that users can actually pay for.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3.5 rounded-xl font-bold transition-all relative z-10 text-sm shadow-lg">
            Get Started in 4 Weeks →
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- HELPER COMPONENTS --- */
const StrategyCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-6 rounded-xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const LaunchCard = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    <div className="bg-[#0c0c0c] rounded-2xl overflow-hidden mb-3 border border-gray-900 shadow-xl group-hover:border-purple-500/50 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-[250px] md:h-[300px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" />
    </div>
    <h3 className="text-lg font-bold mb-1">{title}</h3>
    <p className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">{subtitle}</p>
  </div>
);

const TechItem = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span className="text-xs font-bold uppercase tracking-tighter">{label}</span>
  </div>
);

export default StartupMVP;