import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Box,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  Layers,
  Lock,
  Mail,
  Plus,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Zap,
  Layout,
  Smartphone,
  Repeat,
  Gauge,
  Cloud
} from 'lucide-react';

function ReactDevelopment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why should I choose React for my next project?",
      answer: "React offers a component-based architecture that promotes reusability, making development faster and maintenance easier. With its Virtual DOM, it ensures high performance even in complex applications, and the vast ecosystem provides ready-made solutions for almost any requirement."
    },
    {
      question: "Do you use Next.js or Vite for React projects?",
      answer: "It depends on your needs. For SEO-heavy products or large-scale SaaS, we use Next.js (SSR/ISR). For highly interactive internal dashboards or SPAs where SEO is not a priority, we use Vite for its lightning-fast development experience and optimized build process."
    },
    {
      question: "Can you migrate my existing legacy app to React?",
      answer: "Yes. We specialize in incremental migration strategies. We can rewrite your application module-by-module to ensure zero downtime while upgrading your stack to modern React (Version 19) with improved performance and maintainability."
    },
    {
      question: "How do you handle State Management?",
      answer: "We follow a 'right tool for the job' approach. We use React Context for simple global states, TanStack Query (React Query) for server-state and caching, and Zustand or Redux Toolkit for complex client-side state logic."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional React.js Development Services | DevZore</title>
        <meta name="description" content="DevZore builds high-performance, scalable React applications. Expert React.js developers specializing in SPAs, Next.js, and complex enterprise frontends." />
        <link rel="canonical" href="https://devzore.com/services/react-development" />
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 pb-10 overflow-x-hidden">

        {/* --- TOP HEADER SPACE --- */}
        <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
            Frontend Engineering Lab
          </div>

          <button className="bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            Hire React Experts
          </button>
        </div>

        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Enterprise <br />
              <span className="text-cyan-500">React.js</span> — <br />
              High Speed <span className="text-cyan-500">UX</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-medium">
              We don't just write components; we engineer scalable frontend architectures. From Virtual DOM optimization to complex state logic, we build React apps that feel instant.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact">
                <button className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group transition-all shadow-xl shadow-cyan-500/20 active:scale-95">
                  Start React Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          <div className="relative group lg:justify-self-end hidden md:block">
            <div className="absolute -inset-10 bg-cyan-500/10 blur-[120px] rounded-full"></div>
            <div className="relative bg-[#0c0c0c] border border-gray-800/50 rounded-[2rem] p-10 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[Code2, Layout, Zap, Smartphone].map((Icon, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center gap-3">
                    <Icon size={32} className="text-cyan-500" />
                    <div className="h-1.5 w-12 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CORE CAPABILITIES --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
              Why Our React <span className="text-cyan-500 text-not-italic">Approach is Different</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-gray-400 text-sm md:text-base leading-relaxed mb-12">
              <p>
                A React app is only as good as its architecture. Most developers create "component soup" that becomes unmanageable. At DevZore, we focus on atomic design, clean props flow, and strict TypeScript patterns to ensure your codebase stays clean as you scale.
              </p>
              <p>
                We prioritize performance metrics like First Contentful Paint (FCP) and Time to Interactive (TTI). By leveraging React 19 features, Server Components, and optimized bundling, we ensure your users never wait for a spinner.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard
              icon={<Repeat className="text-cyan-500" size={24} />}
              title="Reusable Component Systems"
              desc="We build custom design systems with Tailwind CSS or Headless UI, creating a library of modular, testable components that speed up your feature releases by 40%."
              borderColor="border-l-cyan-600" />
            <ExpertiseCard
              icon={<Zap className="text-yellow-500" size={24} />}
              title="Performance Optimization"
              desc="Memoization, code-splitting, lazy loading, and image optimization are standard. We eliminate unnecessary re-renders to keep your UI running at 60 FPS."
              borderColor="border-l-yellow-500" />
            <ExpertiseCard
              icon={<Database className="text-purple-500" size={24} />}
              title="Advanced State Management"
              desc="Expertise in TanStack Query for server state and Zustand/Redux for client state. We ensure data stays synced across your UI without redundant API calls."
              borderColor="border-l-purple-500" />
            <ExpertiseCard
              icon={<Globe className="text-blue-500" size={24} />}
              title="Next.js & SSR/SSG"
              desc="Implementation of Server-Side Rendering and Static Site Generation for lightning-fast SEO performance and superior social media link sharing."
              borderColor="border-l-blue-500" />
            <ExpertiseCard
              icon={<ShieldCheck className="text-green-500" size={24} />}
              title="TypeScript by Default"
              desc="We use strict TypeScript to catch bugs during development, not in production. Type-safe props and API responses make your app robust and self-documenting."
              borderColor="border-l-green-500" />
            <ExpertiseCard
              icon={<Smartphone className="text-pink-500" size={24} />}
              title="Progressive Web Apps (PWA)"
              desc="Transforming React apps into installable mobile experiences with offline support, service workers, and push notifications."
              borderColor="border-l-pink-500" />
          </div>
        </section>

        {/* --- TECH STACK GRID --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">The React <span className="text-cyan-500 text-not-italic">Ecosystem</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">Our curated stack for building modern, type-safe, and high-performance interfaces.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <StackCard category="Core Library" items={["React 19", "Version 18.x"]} icon={<Layers className="text-cyan-400" size={20} />} />
            <StackCard category="Frameworks" items={["Next.js", "Vite", "Remix"]} icon={<Rocket className="text-orange-400" size={20} />} />
            <StackCard category="State" items={["Zustand", "Redux Toolkit", "Context API"]} icon={<Settings2 className="text-purple-400" size={20} />} />
            <StackCard category="Data Fetching" items={["TanStack Query", "SWR", "Axios"]} icon={<Zap className="text-yellow-400" size={20} />} />
            <StackCard category="Styling" items={["Tailwind CSS", "Framer Motion", "Shadcn/UI"]} icon={<Layout className="text-blue-400" size={20} />} />
            <StackCard category="Forms" items={["React Hook Form", "Zod", "Yup"]} icon={<ShieldCheck className="text-green-400" size={20} />} />
            <StackCard category="Testing" items={["Jest", "Cypress", "React Testing Lib"]} icon={<Lock className="text-red-400" size={20} />} />
            <StackCard category="Deployment" items={["Vercel", "Netlify", "AWS Amplify"]} icon={<Cloud className="text-blue-500" size={20} />} />
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 bg-white/[0.01] rounded-[3rem] border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Our React <span className="text-cyan-500 text-not-italic">Workflow</span></h2>
            <div className="w-20 h-1 bg-cyan-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProcessCard step="Step 1" title="Atomic Architecture" desc="We break your UI into atoms, molecules, and organisms. This ensures that a button changed in one place updates everywhere, keeping design consistency 100% intact." />
            <ProcessCard step="Step 2" title="Type-Safe Development" desc="Defining interfaces and schemas early using TypeScript and Zod. This eliminates 'undefined is not a function' errors and makes collaboration seamless." />
            <ProcessCard step="Step 3" title="State & Logic Mapping" desc="Before coding, we map out how data flows through your app. We decide which data belongs in the URL, which in the cache, and which stays local to the component." />
            <ProcessCard step="Step 4" title="Performance Hardening" desc="We use React DevTools and Lighthouse to profile the app. We optimize expensive calculations with useMemo and prevent unnecessary renders with React.memo." />
            <ProcessCard step="Step 5" title="CI/CD & Deployment" desc="Automated testing and preview deployments. Every pull request is automatically built and tested to ensure the main branch is always production-ready." />
            <div className="p-8 bg-cyan-600 rounded-3xl flex flex-col justify-center items-center text-center">
              <Gauge className="mb-4 animate-pulse" size={40} />
              <h3 className="text-xl font-bold mb-2 text-white">Need a Speed Boost?</h3>
              <Link to="/contact">
                <button className="cursor-pointer bg-white text-cyan-600 px-6 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-transform hover:scale-105 active:scale-95">
                  Audit My App
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-10 w-1 bg-cyan-600 rounded-full"></div> 
            <h2 className="text-3xl font-bold italic">React <span className="text-cyan-500 text-not-italic">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`border rounded-2xl transition-all duration-300 ${activeIndex === i ? 'border-cyan-500/50 bg-cyan-500/5' : 'border-white/5 bg-[#0A0A0A]'}`}>
                <button onClick={() => setActiveIndex(activeIndex === i ? null : i)} className="w-full p-6 text-left flex justify-between items-center group">
                  <h3 className="font-bold text-sm md:text-base pr-4">{faq.question}</h3>
                  <div className={`p-1 rounded-full border transition-all ${activeIndex === i ? 'rotate-45 border-cyan-500 text-cyan-500' : 'border-gray-700 text-gray-700'}`}>
                    <Plus size={18} />
                  </div>
                </button>
                {activeIndex === i && (
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-6 animate-in fade-in slide-in-from-top-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="bg-gradient-to-br from-[#0c0c0c] to-[#161616] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Let's build your next React interface.</h2>
            <p className="text-gray-400 mb-12 max-w-lg mx-auto text-sm md:text-base leading-relaxed font-medium">
              High-performance frontends are the heart of successful products. We help you build yours correctly from day one.
            </p>
            <Link to="/contact">
              <button className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 px-12 py-5 rounded-2xl font-bold text-base transition-all shadow-2xl shadow-cyan-500/30 active:scale-95 flex items-center gap-2 mx-auto">
                Hire React Experts <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

/* --- SUB-COMPONENTS --- */
const ExpertiseCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-8 rounded-2xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all group hover:-translate-y-1`}>
    <div className="mb-6 p-3 bg-white/5 inline-block rounded-xl group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-lg font-bold mb-4 text-gray-100">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const StackCard = ({ category, items, icon }) => (
  <div className="bg-[#0c0c0c] border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-all group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
        {icon}
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-cyan-400 transition-colors">
        {category}
      </span>
    </div>
    <div className="space-y-1">
      {items.map((item, idx) => (
        <p key={idx} className="text-sm font-bold text-gray-300">
          {item}
        </p>
      ))}
    </div>
  </div>
);

const ProcessCard = ({ step, title, desc }) => (
  <div className="p-8 bg-[#0c0c0c] border border-white/5 rounded-3xl relative group hover:border-cyan-500/30 transition-all">
    <div className="text-[10px] font-black text-cyan-500 mb-4 uppercase tracking-[0.3em]">{step}</div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

export default ReactDevelopment;