import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import {
  Database,
  Layers,
  Cpu,
  ArrowRight,
  Zap,
  Code2,
  Globe,
  Server,
  Plus,
  CheckCircle2,
  Settings,
  Rocket,
  Terminal,
  Layout,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';

const MernStackDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a MERN stack project take?",
      answer: "A focused MVP typically takes 8 to 14 weeks. A full-featured SaaS platform or enterprise application can take 4 to 8 months depending on complexity, number of integrations, and how much design work is needed. After our discovery call, we give you a milestone-based timeline with no hidden phases."
    },
    {
      question: "Is MERN stack still a good choice in 2026?",
      answer: "Absolutely. MERN is actively used by companies from early-stage startups to Fortune 500 enterprises. The ecosystem has grown stronger with React 19's Server Components, modern Next.js features, and excellent AI integration support. It remains one of the most in-demand full-stack skill sets on the market."
    },
    {
      question: "What is the difference between MERN stack and Next.js?",
      answer: "Next.js is a framework built on top of React — you can think of it as the React layer of MERN upgraded with server-side rendering and static generation. DevZore uses Next.js as the frontend layer for most client projects while keeping the Express and MongoDB backend structure."
    },
    {
      question: "Can DevZore take over an existing MERN project?",
      answer: "Yes. We regularly audit and inherit existing codebases. We start with a code and architecture review, identify technical debt and security issues, and produce a clear findings report before touching any code."
    },
    {
      question: "Do you provide ongoing maintenance after launch?",
      answer: "Every project includes 30 days of post-launch support. After that, we offer flexible monthly maintenance plans covering bug fixes, dependency updates, security patches, performance monitoring, and feature development."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>MERN Stack Development Company | DevZore</title>
        <meta name="description" content="DevZore builds scalable, production-ready apps using MERN stack — MongoDB, Express.js, React, and Node.js. Full-stack JavaScript development for startups and enterprises." />
      </Helmet>

      {/* overflow-x-hidden yahan add kiya hai taake bottom scroll khatam ho jaye */}
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-10 overflow-x-hidden">

        {/* --- HEADER --- */}
        <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <Link to="/contact">
            <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]">
              Free Consultation
            </button>
          </Link>
        </div>

        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
              Full-Stack Engineering
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Custom <span className="text-purple-500">MERN Stack</span> <br />
              <span className="text-purple-500">Company</span> Built for Scale
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
              The MERN stack — MongoDB, Express.js, React, and Node.js — has become the defining choice for modern web application development. One language across the entire product. At DevZore, we bring serious full-stack engineering to every layer of the MERN architecture, delivering applications that perform under real traffic and grow with your business.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 group transition-all">
                Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative hidden md:block lg:justify-self-end">
            <div className="absolute -inset-10 bg-purple-500/10 blur-3xl rounded-full"></div>
            <div className="relative bg-[#0c0c0c] border border-gray-800/50 rounded-2xl p-8 grid grid-cols-2 gap-4 max-w-[450px]">
              <StackItem icon={<Database size={32} className="text-green-500" />} label="MongoDB" />
              <StackItem icon={<Layers size={32} className="text-gray-300" />} label="Express.js" />
              <StackItem icon={<Code2 size={32} className="text-blue-400" />} label="React.js" />
              <StackItem icon={<Server size={32} className="text-green-400" />} label="Node.js" />
            </div>
          </div>
        </section>

        {/* --- WHAT IS MERN SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Is the MERN Stack and <span className="text-purple-500">Why Does It Matter?</span></h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>MERN is a full-stack JavaScript framework where every layer of the application — database, backend, frontend — uses JavaScript or TypeScript. This unified language approach means your development team moves faster, your codebase stays consistent, and integrating new features doesn't require context-switching.</p>
              <p>In 2026, MERN continues to power some of the world's most successful digital products. From early-stage startups shipping their first MVP to enterprise teams modernizing legacy systems, the combination of MongoDB's flexible data modeling, Express.js's clean API structure, React's component-driven UI, and Node.js's high-concurrency backend makes this stack one of the most practical and powerful choices available.</p>
              <p>At DevZore, we go beyond the basics. Our MERN applications ship with TypeScript throughout, React Server Components where performance demands it, TanStack Query for intelligent data fetching, and deployment pipelines that work from day one.</p>
            </div>
            <div className="bg-[#080808] border border-white/5 rounded-2xl p-8">
               <h3 className="text-purple-500 font-bold mb-4 uppercase tracking-tighter text-xs">Technologies in Our MERN Stack</h3>
               <div className="flex flex-wrap gap-2">
                 {["MongoDB & Atlas", "Prisma", "Express.js", "Node.js 22 LTS", "React 19", "Next.js 15", "TypeScript 5", "TanStack Query", "Zustand", "Tailwind CSS", "shadcn/ui", "Docker", "AWS", "Vercel", "Jest"].map((tech, i) => (
                   <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-gray-300">{tech}</span>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">MERN Stack <span className="text-purple-500">Services</span> We Offer</h2>
            <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard icon={<Globe size={24} className="text-blue-400"/>} title="Full-Stack Application Development" desc="We build complete MERN applications from architecture to deployment — database design, REST or GraphQL API, React frontend, and cloud infrastructure." borderColor="border-l-blue-400" />
            <ExpertiseCard icon={<Rocket size={24} className="text-purple-500"/>} title="MERN MVP for Startups" desc="Our lean MVP process helps founders validate ideas quickly without sacrificing quality. Most MERN MVPs ship in 8 to 14 weeks." borderColor="border-l-purple-500" />
            <ExpertiseCard icon={<Terminal size={24} className="text-yellow-500"/>} title="API Development (Express & Node)" desc="Structured, versioned, and documented REST APIs and GraphQL endpoints built with Express.js and typed with TypeScript." borderColor="border-l-yellow-500" />
            <ExpertiseCard icon={<Layout size={24} className="text-green-500"/>} title="React Frontend Development" desc="Component-driven React interfaces with clear state management, accessibility standards, and the performance optimization users expect." borderColor="border-l-green-500" />
            <ExpertiseCard icon={<Database size={24} className="text-orange-500"/>} title="MongoDB Database Architecture" desc="Design data models for actual queries. Atlas Search, proper indexing, and aggregation pipelines for production reliability." borderColor="border-l-orange-500" />
            <ExpertiseCard icon={<Settings size={24} className="text-gray-400"/>} title="MERN Maintenance & Scaling" desc="After launch, we cover security patches, dependency updates, performance optimization, and feature development." borderColor="border-l-gray-400" />
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Our Development <span className="text-purple-500">Process</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProcessCard step="Step 1" title="Discovery & Architecture" desc="Mapping business goals, user flows, and data relationships into a technical spec before development starts." />
            <ProcessCard step="Step 2" title="UI/UX Prototyping" desc="Create wireframes and interactive Figma prototypes. Review the full experience before production code is written." />
            <ProcessCard step="Step 3" title="Backend API Development" desc="Express and Node.js API built first with full TypeScript coverage, auth middleware, and unit tests." />
            <ProcessCard step="Step 4" title="React Frontend Dev" desc="Component-by-component development with reusable code. Review progress after every two-week sprint." />
            <ProcessCard step="Step 5" title="Testing & Security" desc="Load testing, security audits against OWASP guidelines, and Core Web Vitals optimization before shipping." />
            <ProcessCard step="Step 6" title="Deployment & Support" desc="CI/CD pipelines, cloud monitoring (Sentry), and a 30-day post-launch support period included." />
          </div>
        </section>

        {/* --- PROJECT IMAGES SECTION (The ones you asked for) --- */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Our Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-1">Live <span className="text-purple-500">Deployments</span></h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" title="SaaS Analytics Dashboard" subtitle="Next.js, Node.js, MongoDB" />
            <ProjectCard image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" title="Fintech Payment Portal" subtitle="React, Express, PostgreSQL" />
          </div>
        </section>

        {/* --- INDUSTRIES SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-y border-white/5">
           <h2 className="text-center text-2xl font-bold mb-10">Industries We Serve with <span className="text-purple-500">MERN</span></h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["SaaS Products", "E-commerce", "Fintech", "Healthcare", "EdTech", "Logistics", "Real Estate", "Media Products"].map((ind, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400 text-sm bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-purple-500" /> {ind}
                </div>
              ))}
           </div>
        </section>

        {/* --- WHY DEVZORE --- */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose <span className="text-purple-500">DevZore?</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyItem title="Senior-Only Engineers" desc="No junior developers. Every MERN engineer has shipped real production applications." />
            <WhyItem title="Transparent Process" desc="Weekly progress reports, shared project boards, and direct Slack communication." />
            <WhyItem title="You Own Everything" desc="Source code lives in your GitHub. Cloud infrastructure is in your accounts from day one." />
            <WhyItem title="Honest Scoping" desc="We quote based on reality. If timeline or budget doesn't match, we tell you clearly." />
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="max-w-4xl mx-auto px-6 py-10">
           <h2 className="text-3xl font-bold mb-8">FAQ</h2>
           <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className={`border rounded-xl transition-all ${activeIndex === i ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/5 bg-[#0A0A0A]'}`}>
                  <button onClick={() => toggleFAQ(i)} className="w-full p-6 text-left flex justify-between items-center group">
                    <span className="font-bold text-sm md:text-base">{faq.question}</span>
                    <Plus size={20} className={`transition-transform ${activeIndex === i ? 'rotate-45 text-purple-400' : 'text-gray-500'}`} />
                  </button>
                  {activeIndex === i && <div className="p-6 pt-0 text-gray-400 text-sm border-t border-white/5 mt-4 pt-4 leading-relaxed">{faq.answer}</div>}
                </div>
              ))}
           </div>
        </section>

        {/* --- FOOTER CTA & INTERNAL LINKS --- */}
        <section className="max-w-7xl mx-auto px-6 py-10 mt-10">
          <div className="bg-gradient-to-br from-[#0c0c0c] to-[#111] border border-white/10 rounded-[2.5rem] p-10 md:p-16 text-center relative shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build your <br/> MERN stack application?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm md:text-base">Talk to our team — we respond within 24 hours with a clear plan and honest pricing.</p>
            <button className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto transition-all shadow-xl shadow-purple-500/20">
              Book a Tech Call <ArrowRight size={18} />
            </button>

            {/* --- INTERNAL LINKS --- */}
            <div className="mt-16 pt-10 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-6 font-bold">Explore Our Services</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <InternalLink to="/react-development" label="React Development" />
                <InternalLink to="/node-js-development" label="Node.js Development" />
                <InternalLink to="/web-app-development" label="Web App Development" />
                <InternalLink to="/saas-development" label="SaaS Development" />
                <InternalLink to="/mobile-app-development" label="Mobile App Development" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

/* --- HELPER COMPONENTS --- */
const StackItem = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
    {icon}
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </div>
);

const ExpertiseCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-6 rounded-xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all group`}>
    <div className="mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const ProcessCard = ({ step, title, desc }) => (
  <div className="p-6 bg-[#0c0c0c] border border-white/5 rounded-2xl relative group hover:border-purple-500/30 transition-all">
    <div className="text-xs font-black text-purple-500 mb-2 uppercase tracking-widest">{step}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const ProjectCard = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    <div className="bg-[#0c0c0c] rounded-2xl overflow-hidden mb-4 border border-white/5 shadow-2xl">
      <img src={image} alt={title} className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700" />
    </div>
    <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">{title}</h3>
    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{subtitle}</p>
  </div>
);

const WhyItem = ({ title, desc }) => (
  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
    <h4 className="font-bold text-purple-400 mb-2">{title}</h4>
    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

const InternalLink = ({ to, label }) => (
  <Link to={to} className="text-gray-400 hover:text-purple-400 text-xs font-bold transition-colors flex items-center gap-1 group">
    {label} <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </Link>
);

export default MernStackDevelopment;