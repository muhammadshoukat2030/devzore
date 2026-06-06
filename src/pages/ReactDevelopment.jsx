import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import ServiceGalleryTemplate from '../components/ServiceGalleryTemplate';
import {
  ArrowRight,
  Code2,
  Database,
  Layers,
  Lock,
  Plus,
  Rocket,
  Zap,
  Layout,
  Smartphone,
  Repeat,
  Trophy,
  MousePointer2,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Globe,
  BarChart3,
  ExternalLink,
  Mail,
  Server,
  Settings2,
  Box
} from 'lucide-react';

function ReactDevelopment() {
  const [activeIndex, setActiveIndex] = useState(null);

  // SEO & Content Data
  const faqs = [
    {
      question: "Should I use React or Next.js for my project?",
      answer: "Next.js is React with additional capabilities built in — server-side rendering, static generation, file-based routing, and API routes. For most new projects, Next.js is the better starting point because it handles SEO, performance, and deployment better out of the box. Pure React with Vite makes sense for internal dashboards and admin tools where SEO is irrelevant."
    },
    {
      question: "Can DevZore take over my existing React codebase?",
      answer: "Yes. We begin with a thorough code audit covering architecture, dependencies, test coverage, bundle size, accessibility, and security. We deliver a written findings report with a proposed improvement roadmap before any development begins. Most codebases we audit have specific, fixable issues rather than fundamental problems requiring a full rewrite."
    },
    {
      question: "How do you handle state management in large React applications?",
      answer: "We use TanStack Query for server state because it eliminates most of the boilerplate that teams previously used Redux for. Zustand handles the remaining client-side global state where needed. Local useState and useReducer handle everything else. The goal is the minimum state management complexity that the product requires — not the maximum sophistication we can demonstrate."
    },
    {
      question: "Do you build accessible React applications?",
      answer: "Yes. We use Radix UI primitives precisely because they handle ARIA attributes, keyboard navigation, and focus management correctly. Accessibility is not something we add at the end — it is built into the component design from the beginning, which is also the only time it is economically feasible to do properly."
    }
  ];

  return (
    <>
      <Helmet>
        <title>React Development Company — Next.js & React Apps | DevZore</title>
        <meta
          name="description"
          content="Expert React and Next.js development for fast, scalable web interfaces. DevZore builds component-driven React apps with TypeScript, clean architecture, and great UX. Get a consultation."
        />
        <link
          rel="canonical"
          href="https://devzore.com/services/react-development"
        />

        {/* Optional but recommended */}
        <meta property="og:title" content="React Development Company — Next.js & React Apps | DevZore" />
        <meta
          property="og:description"
          content="Expert React and Next.js development for fast, scalable web interfaces. Clean architecture, TypeScript, and high-performance UI."
        />
        <meta property="og:url" content="https://devzore.com/services/react-development" />
        <meta property="og:type" content="website" />
        {/* Open Graph (Facebook, LinkedIn, WhatsApp preview) */}
        <meta property="og:title" content="React Development Company — Next.js & React Apps | DevZore" />
        <meta
          property="og:description"
          content="Expert React and Next.js development for fast, scalable web interfaces. DevZore builds modern, component-driven apps with great UX."
        />
        {/* Optional image (VERY important for sharing) */}
        <meta property="og:image" content="https://devzore.com/og/react-development.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="React Development Company — DevZore" />
        <meta
          name="twitter:description"
          content="Fast, scalable React & Next.js development services by DevZore."
        />
        <meta name="twitter:image" content="https://devzore.com/og/react-development.jpg" />
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-10 overflow-x-hidden">

        {/* --- HEADER --- */}
        <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
            Frontend Engineering Excellence
          </div>
          <Link to="/contact">
            <button className=" cursor-pointer bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all shadow-lg shadow-purple-500/20">
              Request Code Audit
            </button>
          </Link>
        </div>

        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-1 grid lg:grid-cols-2 gap-3 items-center">
          <div className="space-y-3.5">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              React Development Company — <span className="text-purple-500">Building Interfaces That Last</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
              React is the world's most widely used frontend library — but the gap between knowing React and shipping maintainable applications is enormous. At DevZore, we understand Server Components, scalable state architecture, and component libraries that teams actually use.
            </p>
            <div className="flex gap-4">
              <Link to="/contact">
                <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold text-sm flex items-center gap-2 transition-all active:scale-95">
                  Get a Consultation <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute -inset-10 bg-purple-600/20 blur-[120px] rounded-full"></div>
            <div className="relative border border-white/10 bg-[#0a0a0a] rounded-[2rem] p-8 shadow-2xl">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-white/5 rounded-md animate-pulse"></div>
                <div className="h-4 w-full bg-white/5 rounded-md animate-pulse delay-75"></div>
                <div className="h-4 w-5/6 bg-white/5 rounded-md animate-pulse delay-150"></div>
                <div className="pt-4 flex gap-4">
                  <div className="h-10 w-24 bg-purple-500/20 rounded-lg border border-purple-500/30"></div>
                  <div className="h-10 w-24 bg-white/5 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- DETAILED EXPERTISE --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
              Advanced <span className="text-purple-500 text-not-italic">React Architecture</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard
              icon={<Code2 className="text-purple-500" />}
              title="Atomic Component Design"
              desc="We build scalable UI libraries using Atomic Design methodology to ensure 100% consistency across your platform. By modularizing interfaces into reusable atoms and organisms, we enable rapid prototyping and easy maintenance."
              borderColor="border-l-purple-600"
            />

            <ExpertiseCard
              icon={<Zap className="text-blue-500" />}
              title="Next.js 15 (App Router)"
              desc="Leveraging Next.js 15 and React Server Components (RSC) to minimize bundle sizes and maximize performance. We focus on perfect Core Web Vitals and advanced SEO strategies for lightning-fast, production-ready apps."
              borderColor="border-l-blue-500"
            />

            <ExpertiseCard
              icon={<Database className="text-green-500" />}
              title="Global State Management"
              desc="Expert implementation of Zustand and Redux Toolkit to manage complex data flows in enterprise-scale applications. We optimize state architecture to eliminate redundant re-renders and ensure high responsiveness."
              borderColor="border-l-green-500"
            />

            <ExpertiseCard
              icon={<Repeat className="text-orange-500" />}
              title="Performance Optimization"
              desc="Specializing in memoization, lazy loading, and code-splitting to keep React apps smooth under heavy data loads. We perform deep audits to fix rendering bottlenecks and ensure high responsiveness across all devices."
              borderColor="border-l-orange-500"
            />

            <ExpertiseCard
              icon={<ShieldCheck className="text-pink-500" />}
              title="TypeScript Integration"
              desc="Building strictly typed codebases to catch errors early and simplify long-term maintenance for your engineering team. We prioritize type safety in props, state, and API layers to deliver secure, enterprise-grade software."
              borderColor="border-l-pink-500"
            />

            <ExpertiseCard
              icon={<Layers className="text-cyan-500" />}
              title="Micro-Frontends"
              desc="Scaling massive projects using Module Federation or Turborepo to break monoliths into independent React modules. This architecture enables independent deployments and seamless team collaboration for large organizations."
              borderColor="border-l-cyan-500"
            />
          </div>
        </section>

       
        <div className="bg-black min-h-screen">
          {/* Baki sections yahan aayenge */}
          <ServiceGalleryTemplate pageKey="ReactDevelopment" />
        </div>

        {/* --- SERVICES SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 italic text-center md:text-left">
            React <span className="text-purple-500 text-not-italic">Development Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Layout />}
              title="Custom React Application Development"
              desc="Single-page applications, admin portals, complex interactive dashboards, and data-heavy interfaces built with modern React patterns, strict TypeScript, and the kind of component architecture that makes adding features straightforward rather than scary."
            />
            <ServiceCard
              icon={<Zap />}
              title="Next.js Development"
              desc="Server-side rendering, static site generation, the App Router, React Server Components, and streaming — Next.js 15 features configured correctly for your project's specific performance and SEO requirements. Not every project needs every Next.js feature; we use what serves your product and skip what doesn't."
            />
            <ServiceCard
              icon={<Box />}
              title="React Design System and Component Library Development"
              desc="Reusable component libraries built with Radix UI primitives for accessibility, Tailwind CSS for consistent styling, and Storybook for documentation. These are fully yours — versioned in your own repository, not a vendor dependency with a license attached."
            />
            <ServiceCard
              icon={<BarChart3 />}
              title="React Performance Optimization "
              desc="Bundle size analysis, code splitting for every route, lazy loading of non-critical components, React.memo and useMemo applied where profiling shows genuine benefit (not everywhere), and Core Web Vitals optimization that moves Lighthouse scores from 40 to 90+."
            />
            <ServiceCard
              icon={<Repeat />}
              title="React Migration and Refactoring"
              desc="Migrating existing Angular, Vue, jQuery, or class-component React applications to modern React with hooks and TypeScript. We approach migrations incrementally where possible — running old and new code side by side — so you get the benefits without a big-bang rewrite risk."
            />
            <ServiceCard
              icon={<Smartphone />}
              title="React Native for Mobile"
              desc="React Native for Mobile The same React mental model applied to iOS and Android. One team, one language, two platforms. We build React Native applications that use the same TypeScript types and business logic as your web application, minimizing duplicate work across platforms."
            />
          </div>
        </section>

        {/* --- HOW WE WRITE REACT --- */}
        <section className="max-w-7xl mx-auto px-6 py-24 bg-white/[0.02] rounded-[3rem] border border-white/5">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Write React <span className="text-purple-500">in 2026</span></h2>
            <p className="text-gray-400">React has changed significantly in the past two years. The introduction of Server Components, the App Router in Next.js, and the evolution of state management best practices means that the patterns from 2021 are not the patterns you want in your codebase today.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <MethodologyItem
                title="Component Architecture"
                desc="Before writing any component, we define the hierarchy, data flow, and state boundaries. This prevents the prop-drilling nightmares and unintentional re-renders that make React applications slow and hard to debug. Good architecture at the start saves weeks of debugging later."
              />
              <MethodologyItem
                title="TypeScript-First Development"
                desc="Every component, every custom hook, every utility function, and every API response type is strictly typed. TypeScript is not optional for us — it is the baseline that makes safe refactoring possible and new developer onboarding fast."
              />
            </div>
            <div className="space-y-8">
              <MethodologyItem
                title="State Management Done Right"
                desc="TanStack Query for all server state — data fetching, caching, background refetching, and optimistic updates. Zustand for client-side UI state that genuinely needs to be global. Local component state for everything else. We do not reach for Redux unless the project requires it, which is genuinely rare."
              />
              <MethodologyItem
                title="Performance by Design"
                desc="Bundle size budgets enforced in CI, dynamic imports for every route, image optimization with next/image, font loading strategy, and Lighthouse audits run against every major release. Performance is not an optimization phase — it is an ongoing discipline."
              />
            </div>
          </div>
        </section>

        {/* --- TECH STACK SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-sm font-bold mb-12 text-center uppercase tracking-[0.3em] text-purple-500">
            React Ecosystem & Infrastructure
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Core Frameworks */}
            <TechCard title="Frontend" items={["React 19", "Next.js 15", "Vite"]} icon={<Code2 size={18} />} />

            {/* State & Data */}
            <TechCard title="State & Data" items={["TanStack Query", "Zustand", "Zod"]} icon={<Database size={18} />} />

            {/* UI & Styling */}
            <TechCard title="UI & Design" items={["Tailwind CSS v4", "shadcn/ui", "Radix UI"]} icon={<Layout size={18} />} />

            {/* Infrastructure */}
            <TechCard title="Infrastructure" items={["TypeScript 5", "Docker", "GCP"]} icon={<Server size={18} />} />

            {/* Testing */}
            <TechCard title="Quality" items={["Vitest", "Storybook", "ESLint"]} icon={<ShieldCheck size={18} />} />

            {/* Animation */}
            <TechCard title="Animation" items={["Framer Motion", "GSAP"]} icon={<Zap size={18} />} />

            {/* Auth & Security */}
            <TechCard title="Auth" items={["Clerk", "NextAuth", "Auth0"]} icon={<Lock size={18} />} />

            {/* Deployment */}
            <TechCard title="Deployment" items={["Vercel", "Netlify", "CI/CD"]} icon={<Rocket size={18} />} />
          </div>
        </section>



        {/* --- WORKFLOW SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold italic">Our React <span className="text-purple-500 text-not-italic">Workflow</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StepCard
              step="01"
              title="Component Architecture"
              desc="Breaking UI into reusable atomic modules to ensure long-term maintainability and system consistency."
              icon={<Layers size={20} />}
            />
            <StepCard
              step="02"
              title="State Planning"
              desc="Defining efficient data flow strategies using TanStack Query or Zustand for high-performance logic."
              icon={<Database size={20} />}
            />
            <StepCard
              step="03"
              title="UI Implementation"
              desc="Crafting pixel-perfect, responsive interfaces with Tailwind CSS and interactive Framer Motion animations."
              icon={<Layout size={20} />}
            />
            <StepCard
              step="04"
              title="API Integration"
              desc="Seamlessly syncing frontend components with robust backend services and secure data fetching patterns."
              icon={<Repeat size={20} />}
            />
            <StepCard
              step="05"
              title="Optimization"
              desc="Hardening performance, accessibility, and SEO scores to deliver a world-class user experience."
              icon={<Zap size={20} />}
            />

            <div className="p-8 bg-purple-600 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl shadow-purple-500/20 group hover:bg-purple-700 transition-all">
              <Rocket className="mb-4 animate-bounce text-white" size={32} />
              <h3 className="font-bold text-white mb-2 text-xl">Ready to launch?</h3>
              <p className="text-purple-100 text-xs mb-4">Let's build something extraordinary together.</p>
              <Link to="/contact" className="text-xs font-black uppercase tracking-tighter bg-white text-purple-600 px-6 py-2.5 rounded-xl hover:scale-105 transition-transform">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* --- IMAGES & PROCESS CARDS --- */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1: Modern Coding Standards */}
            <div className="bg-[#0c0c0c] border border-white/5 rounded-3xl overflow-hidden group hover:border-purple-500/30 transition-all shadow-2xl shadow-purple-500/5">
              <div className="relative overflow-hidden h-72">
                <img
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="React Coding Standards"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent"></div>
              </div>
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-500">
                    <Code2 size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Enterprise Coding Standards</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  We write modular, documented, and strictly typed React code. Our focus on clean architecture ensures your application is maintainable, scalable, and secure.
                </p>
                <div className="text-[10px] font-bold text-purple-400 uppercase tracking-widest border-t border-white/5 pt-4">
                  TypeScript 5 • Modular Components • Clean Architecture
                </div>
              </div>
            </div>

            {/* Card 2: UI UX Excellence */}
            <div className="bg-[#0c0c0c] border border-white/5 rounded-3xl overflow-hidden group hover:border-purple-500/30 transition-all shadow-2xl shadow-purple-500/5">
              <div className="relative overflow-hidden h-72">
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Interface Excellence"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent"></div>
              </div>
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-500">
                    <Layout size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Pixel-Perfect Interfaces</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Converting complex designs into smooth, interactive React interfaces. We utilize Tailwind CSS and Framer Motion to deliver exceptional performance and accessibility.
                </p>
                <div className="text-[10px] font-bold text-purple-400 uppercase tracking-widest border-t border-white/5 pt-4">
                  Tailwind CSS v4 • Accessibility • Interactive Animations
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-12 italic text-center">Frequently Asked <span className="text-purple-500 text-not-italic">Questions</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`border rounded-2xl transition-all ${activeIndex === i ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/5 bg-[#0A0A0A]'}`}>
                <button onClick={() => setActiveIndex(activeIndex === i ? null : i)} className="w-full p-6 text-left flex justify-between items-center group">
                  <h3 className="font-bold text-sm md:text-base">{faq.question}</h3>
                  <Plus size={18} className={`${activeIndex === i ? 'rotate-45 text-purple-500' : 'text-gray-600'}`} />
                </button>
                {activeIndex === i && <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* --- FINAL CTA WITH INTERNAL LINKS --- */}
        <section className="max-w-7xl mx-auto px-6 py-1">
          <div className="bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 text-center relative overflow-hidden">

            {/* Glow Effect Background */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Need expert React developers?</h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-lg">
              Whether you are starting fresh, migrating a legacy frontend, or optimizing an underperforming React app — our team can help.
            </p>

            <Link to="/contact" className="inline-block relative z-10">
              <button className="group bg-purple-600 hover:bg-purple-700 px-8 py-4 md:px-12 md:py-5 rounded-2xl font-bold text-base md:text-xl flex items-center gap-3 mx-auto mb-16 transition-all active:scale-95 shadow-2xl shadow-purple-500/25 cursor-pointer">
                Start Developing React <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* Internal Links - Fixed for Mobile Click and Hover Pointer */}
            <div className="border-t border-white/5 pt-5 relative z-10">
              <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-x-4 gap-y-8 md:gap-x-8 text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">

                <Link to="/mern-stack-development" className="hover:text-purple-500 transition-all flex items-center justify-center gap-1 group cursor-pointer py-2">
                  MERN STACK
                  <ExternalLink size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-500" />
                </Link>

                <Link to="/web-development" className="hover:text-purple-500 flex items-center justify-center gap-1 group cursor-pointer py-2">
                  WEB APP DEVELOPMENT
                  <ExternalLink size={11} className="opacity-100 transition-all" />
                </Link>

                <Link to="/backend-api" className="hover:text-purple-500 transition-all flex items-center justify-center gap-1 group cursor-pointer py-2">
                  NODE.JS
                  <ExternalLink size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-500" />
                </Link>

                <Link to="/reactdevelopment" className="hover:text-purple-400 transition-all flex items-center justify-center gap-1 group cursor-pointer py-2">
                  REACT DEVELOPMENT
                  <ExternalLink size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-500" />
                </Link>

                <Link to="/saas-product-development" className="hover:text-purple-500 transition-all flex items-center justify-center gap-1 group cursor-pointer py-2">
                  SAAS SOLUTIONS
                  <ExternalLink size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-500" />
                </Link>

                <Link to="/" className="hover:text-white transition-all text-gray-400 flex items-center justify-center gap-1 group cursor-pointer py-2">
                  BACK TO HOME
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/* --- REUSABLE SUB-COMPONENTS --- */

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-[#080808] p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group">
    <div className="mb-4 text-purple-500 group-hover:scale-110 transition-transform duration-300">
      {React.cloneElement(icon, { size: 35 })}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const MethodologyItem = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1"><CheckCircle2 className="text-purple-500" size={20} /></div>
    <div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const StepCard = ({ step, title, desc, icon }) => (
  <div className="p-8 bg-[#0c0c0c] border border-white/5 rounded-3xl relative group hover:border-purple-500/30 transition-all">
    <div className="flex justify-between items-start mb-6">
      <div className="text-[10px] font-black text-purple-500 uppercase tracking-widest">{step}</div>
      <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">{icon}</div>
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

{/* --- Reusable TechCard Component --- */ }
const TechCard = ({ title, items, icon }) => (
  <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition-all group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{title}</h3>
    </div>
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="text-sm font-semibold text-gray-200 block">
          {item}
        </div>
      ))}
    </div>
  </div>
);
const ExpertiseCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-8 rounded-2xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all group`}>
    <div className="mb-6 p-3 bg-white/5 inline-block rounded-xl group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-lg font-bold mb-3 text-gray-100">{title}</h3>
    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

export default ReactDevelopment;