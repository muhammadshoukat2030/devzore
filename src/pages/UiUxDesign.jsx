
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Palette, MousePointer2, Layers, Layout,
  Figma, PenTool, Eye, Zap, ArrowRight,
  Maximize2, Component, Smartphone
} from 'lucide-react';

const UIUXDesign = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-0.1">
      <Helmet>
        <title>UI/UX Design Services | Modern Product Design | DevZore</title>
        <meta
          name="description"
          content="DevZore offers professional UI/UX design services focused on modern, user-friendly and conversion-driven interfaces. We design web and mobile experiences that improve usability, engagement, and business growth."
        />
        <link
          rel="canonical"
          href="https://devzore.com/ui-ux-design"
        />
        {/* Open Graph */}
        <meta property="og:title" content="UI/UX Design Services | DevZore" />
        <meta
          property="og:description"
          content="Modern UI/UX design services focused on user experience, clean interfaces, and high-conversion digital products."
        />
        <meta property="og:url" content="https://devzore.com/ui-ux-design" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevZore" />

        {/* Social Image */}
        <meta property="og:image" content="https://devzore.com/og/ui-ux-design.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UI/UX Design Services | DevZore" />
        <meta
          name="twitter:description"
          content="Professional UI/UX design services for web and mobile apps focused on user experience and conversion."
        />
        <meta name="twitter:image" content="https://devzore.com/og/ui-ux-design.jpg" />
      </Helmet>
      
      {/* --- 1. TOP HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          Visual Strategy & Experience
        </div>

        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          Design Audit
        </button>
      </div>

      {/* --- 2. HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Design that <span className="text-purple-500">Converts</span> <br />
            Experience that <br />
            <span className="text-purple-500">Retains</span> Users
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
            We blend psychological research with pixel-perfect aesthetics to create interfaces that aren't just beautiful, but functional.
          </p>

          <div className="flex flex-nowrap gap-3 pt-2">
            <button className="flex-1 md:flex-none bg-purple-600 hover:bg-purple-700 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base flex items-center justify-center gap-2 group transition-all">
              Start Designing <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex-1 md:flex-none bg-[#111111] border border-gray-800 hover:bg-gray-800 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base transition-all">
              Our Process
            </button>
          </div>
        </div>

        <div className="relative group lg:justify-self-end hidden md:block">
          <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="relative bg-[#111111] border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl max-w-[500px]">
            <img
              src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop"
              alt="UI/UX Design Process"
              className="w-full h-auto opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* --- 3. DESIGN SERVICES --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            Design <span className="text-purple-500">Capabilities</span>
          </h2>
          <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <DesignCard
            icon={<Layout className="text-purple-500" size={22} />}
            title="User Interface (UI)"
            desc="Creating high-fidelity visual assets, style guides, and design systems that ensure brand consistency across every digital touchpoint and screen resolution."
            borderColor="border-l-purple-600"
          />
          <DesignCard
            icon={<MousePointer2 className="text-green-500" size={22} />}
            title="User Experience (UX)"
            desc="Mapping user journeys, wireframing, and interactive prototyping to solve complex usability challenges and minimize friction in the conversion funnel."
            borderColor="border-l-green-500"
          />
          <DesignCard
            icon={<Maximize2 className="text-purple-500" size={22} />}
            title="Prototyping"
            desc="Building high-fidelity interactive prototypes that simulate real product behavior, allowing for early-stage testing and stakeholder alignment before development."
            borderColor="border-l-purple-600"
          />
        </div>
      </section>

      {/* --- 4. PORTFOLIO SHOWCASE --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Showcase</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">Design <span className="text-purple-500">Case Studies</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            image="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop"
            title="SaaS Dashboard Design"
            subtitle="Analytics & Data Visualization"
          />
          <ProjectCard
            image="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop"
            title="Fintech Mobile Experience"
            subtitle="Digital Wallet Interface"
          />
        </div>
      </section>

      {/* --- 5. PROCESS SECTION (Extra for UI/UX) --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#080808] border border-gray-900 rounded-[2rem] p-10 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px]"></div>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            <ProcessStep number="01" title="Discover" text="User research and market analysis." />
            <ProcessStep number="02" title="Define" text="Wireframes and information architecture." />
            <ProcessStep number="03" title="Design" text="Visual interface and design systems." />
            <ProcessStep number="04" title="Deliver" text="Handover and developer collaboration." />
          </div>
        </div>
      </section>

      {/* --- 6. FOOTER CTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-10 pb-10">
        <div className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10 rounded-[2rem] p-10 md:p-12 text-center relative overflow-hidden group">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10 tracking-tight leading-tight">
            Have a Vision for a Product?
          </h2>
          <p className="text-gray-400 mb-8 relative z-10 max-w-lg mx-auto font-medium text-sm">
            Let's transform your idea into an award-winning interface. Our designers are ready to map out your user's next favorite experience.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3.5 rounded-xl font-bold transition-all relative z-10 text-sm shadow-xl">
            Book a Strategy Session →
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- HELPER COMPONENTS --- */
const DesignCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-6 rounded-xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const ProjectCard = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    <div className="bg-[#0c0c0c] rounded-2xl overflow-hidden mb-3 border border-gray-900 shadow-xl group-hover:border-purple-500/50 transition-all">
      <img src={image} alt={title} className="w-full h-[250px] md:h-[300px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
    </div>
    <h3 className="text-lg font-bold mb-1 group-hover:text-purple-500 transition-colors">{title}</h3>
    <p className="text-gray-500 text-[10px] uppercase tracking-wide">{subtitle}</p>
  </div>
);

const ProcessStep = ({ number, title, text }) => (
  <div className="text-center md:text-left">
    <span className="text-3xl font-black text-purple-500/20 block mb-2">{number}</span>
    <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-widest">{title}</h4>
    <p className="text-gray-500 text-[11px] leading-tight">{text}</p>
  </div>
);

export default UIUXDesign;