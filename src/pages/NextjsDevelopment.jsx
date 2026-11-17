import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  ExternalLink,
  Globe2,
  Layers3,
  Lock,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import SEO from "../components/SEO";

export default function NextjsDevelopment() {
  const [activeFaq, setActiveFaq] = useState(null);

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20Next.js%20development%20services.";

  const capabilities = [
    {
      icon: <Layers3 size={20} />,
      number: "01",
      title: "App Router & React Server Components (RSC)",
      desc: "Modern Next.js architecture separating server-rendered components from interactive client islands, drastically slashing JavaScript bundle sizes.",
      points: [
        "React Server Components (RSC) architecture",
        "Nested layouts & dynamic route parallelization",
        "Minimal client-side JavaScript overhead",
      ],
    },
    {
      icon: <Zap size={20} />,
      number: "02",
      title: "SSR & Incremental Static Regeneration (ISR)",
      desc: "Instant server-rendered pages combined with ISR caching, serving pre-rendered HTML to millions of visitors while updating data in the background.",
      points: [
        "Sub-second Time to First Byte (TTFB)",
        "On-demand & time-based cache revalidation",
        "Edge caching with stale-while-revalidate",
      ],
    },
    {
      icon: <Rocket size={20} />,
      number: "03",
      title: "Full-Stack SaaS Web Applications",
      desc: "Scalable cloud SaaS applications featuring secure authentication (Auth.js / Clerk / Supabase), subscription billing (Stripe), and interactive client dashboards.",
      points: [
        "Session authentication & RBAC permissions",
        "Multi-tenant data isolation & secure cookies",
        "Stripe webhook billing & portal integration",
      ],
    },
    {
      icon: <Terminal size={20} />,
      number: "04",
      title: "Server Actions & Edge API Routes",
      desc: "Type-safe server mutations without boilerplate REST endpoints, running on global edge runtimes with automated validation using Zod.",
      points: [
        "Zero-boilerplate Server Action forms",
        "Strict input validation with Zod schemas",
        "Edge runtime execution with low latency",
      ],
    },
    {
      icon: <Database size={20} />,
      number: "05",
      title: "Headless CMS & Database Integration",
      desc: "Connect Next.js seamlessly to MongoDB, PostgreSQL, Prisma, Supabase, or headless CMS platforms (Sanity, Strapi) for flexible content authoring.",
      points: [
        "MongoDB Atlas, PostgreSQL & Prisma ORM",
        "Headless CMS live content previews",
        "Automated database connection pooling",
      ],
    },
    {
      icon: <Search size={20} />,
      number: "06",
      title: "Technical SEO & Core Web Vitals 95+",
      desc: "Built-in dynamic metadata generators, automated XML sitemaps, Open Graph social cards, and perfect Core Web Vitals (LCP, INP, CLS) optimization.",
      points: [
        "Dynamic Next.js generateMetadata APIs",
        "Automatic sitemap.xml & robots.txt routes",
        "Next.js Image & Font asset optimization",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Architecture & Rendering Strategy",
      desc: "We analyze your project's data velocity to decide the ideal rendering mix: Server Components, Static Generation, SSR, or Client Islands.",
    },
    {
      step: "02",
      title: "Full-Stack Engineering & Server Actions",
      desc: "We build modern interfaces with Tailwind CSS and TypeScript, implementing secure Server Actions, database queries, and third-party APIs.",
    },
    {
      step: "03",
      title: "Core Web Vitals & Edge Optimization",
      desc: "We audit performance on mobile devices, optimize bundle chunks, configure edge CDN caching, and implement structured schema.org markup.",
    },
    {
      step: "04",
      title: "Production Deployment & Handoff",
      desc: "We deploy on Vercel or custom cloud infrastructure with automated CI/CD pipelines, complete documentation, and 100% source code handover.",
    },
  ];

  const faqs = [
    {
      q: "What is Next.js and why should a business use it?",
      a: "Next.js is a production-grade React framework that enables Server-Side Rendering (SSR) and Static Site Generation (SSG). Unlike standard client-side React apps that send a blank HTML page to search engines, Next.js sends fully rendered HTML instantly. This results in superior Google rankings, lightning-fast initial loading, and improved conversion rates.",
    },
    {
      q: "How does Next.js differ from standard React and MERN stack development?",
      a: "Standard React (our /reactdevelopment services) typically builds Single Page Applications (SPAs) where rendering happens inside the user's browser — ideal for internal dashboards and private portals. MERN Stack (/mern-stack-development) couples React with a separate Express/Node API and MongoDB. Next.js unifies frontend and backend into a single server-rendered framework with built-in SEO and edge capabilities.",
    },
    {
      q: "Can you migrate an existing React app or WordPress site to Next.js?",
      a: "Yes. We frequently migrate legacy WordPress websites, single-page React apps, and custom platforms to Next.js. We ensure all existing URLs are preserved or properly 301-redirected so your search engine rankings and backlink authority remain intact.",
    },
    {
      q: "Where is Next.js deployed?",
      a: "Next.js is optimized for Vercel's global edge network, but can also be deployed seamlessly via Docker containers on AWS, DigitalOcean, or private cloud servers.",
    },
    {
      q: "Do you provide source code handover and ongoing support?",
      a: "Yes. DevZore delivers 100% source code handover upon deployment with full intellectual property rights, plus dedicated post-launch support and warranty maintenance.",
    },
  ];

  const pageTitle = "Next.js Development Services | SSR React Apps | DevZore";
  const pageDescription =
    "Custom Next.js development services. High-performance SSR, Server Components, App Router web apps, SaaS platforms, and SEO-optimized web development.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Next.js Development Services",
    serviceType: "Full-Stack Next.js & React SSR Software Development",
    provider: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    areaServed: "Worldwide",
    description: pageDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Next.js Capabilities",
      itemListElement: [
        { "@type": "Offer", name: "Next.js App Router & Server Components" },
        { "@type": "Offer", name: "Full-Stack SaaS & Web Applications" },
        { "@type": "Offer", name: "Server-Side Rendering (SSR) & ISR" },
        { "@type": "Offer", name: "Technical SEO & Edge Vercel Deployment" },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://devzore.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://devzore.com/allservices" },
      { "@type": "ListItem", position: 3, name: "Next.js Development Services", item: "https://devzore.com/nextjs-development" },
    ],
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical="/nextjs-development"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-[#061923] text-white antialiased">
        {/* HERO */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[10%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[13px] font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <Rocket size={13} />
                High-Performance Full-Stack React
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                Custom <span className="text-[#1bbac8]">Next.js Development</span> Services
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Build search-optimized, high-speed web applications with Next.js App Router and React Server Components. We engineer production-ready SaaS platforms, commercial web portals, and headless web applications engineered for sub-second page loads.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] text-xs sm:text-sm font-bold transition shadow-lg shadow-[#25D366]/20"
                >
                  <span>Discuss Your Next.js Project on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="#system-form"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-white text-xs sm:text-sm font-semibold transition"
                >
                  Request Technical Quotation
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">App Router</div>
                  <div className="text-xs text-slate-400 mt-0.5">React Server Components</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">Core Vitals 95+</div>
                  <div className="text-xs text-slate-400 mt-0.5">SEO & Edge CDN caching</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Full-Stack</div>
                  <div className="text-xs text-slate-400 mt-0.5">Server Actions & APIs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATION BAR: NEXTJS VS REACT VS MERN */}
        <section className="bg-[#05141c] border-b border-white/[0.08] py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="text-slate-300">
                <strong className="text-white">Comparing frameworks?</strong> Explore our dedicated{" "}
                <Link to="/reactdevelopment" className="text-[#1bbac8] underline font-semibold hover:text-white transition">
                  React Development
                </Link>{" "}
                (client-side SPAs & internal portals) and{" "}
                <Link to="/mern-stack-development" className="text-[#1bbac8] underline font-semibold hover:text-white transition">
                  MERN Stack Development
                </Link>{" "}
                (custom full-stack architectures).
              </div>
              <Link
                to="/allservices"
                className="inline-flex items-center gap-1 text-[#1bbac8] font-bold text-xs shrink-0 hover:underline"
              >
                <span>View All Services</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* AEO ANSWER BLOCK */}
        <section className="py-14 sm:py-18 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#08222f] to-[#061923] p-6 sm:p-9">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3">
              <Sparkles size={14} className="text-[#1bbac8]" />
              Clear Answer for Technical Decision-Makers
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Are Next.js Development Services and When Should You Choose Next.js?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                <strong>Next.js Development Services</strong> encompass building full-stack web applications utilizing the Next.js React framework to achieve server-side rendering (SSR), incremental static regeneration (ISR), and minimal client-side JavaScript execution.
              </p>
              <p>
                <strong>When to Choose Next.js:</strong> Choose Next.js when your application requires top organic search rankings on Google, rapid mobile loading speeds, rich dynamic social sharing previews, or when you are building content-rich SaaS platforms that need both public marketing pages and private member dashboards within one unified codebase.
              </p>
            </div>
          </div>
        </section>

        {/* SYSTEM CAPABILITIES */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Technical Capabilities</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What We Build With Next.js
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#071923] hover:border-cyan-500/30 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20">
                      {c.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">{c.number}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">{c.desc}</p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-white/[0.06] text-[13px] text-slate-300">
                  {c.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={12} className="text-[#1bbac8] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROOF BLOCK: BLOG GUIDE & REAL SYSTEMS */}
        <section className="py-14 sm:py-18 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#071923] shadow-2xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3">
                <CheckCircle2 size={14} className="text-[#1bbac8]" />
                Technical Authority & Proof
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Architecture Guide: MERN Stack vs Next.js
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Choosing the right framework dictates your product's performance for years. Read our in-depth engineering comparison exploring SEO, server costs, developer velocity, and database architectures across MERN and Next.js platforms.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/blog/mern-stack-vs-nextjs-business-guide"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0796A8] hover:bg-[#1BBAC8] text-white text-xs font-bold transition shadow-md shadow-[#0796A8]/30"
                >
                  <span>Read MERN Stack vs Next.js Guide</span>
                  <ExternalLink size={13} />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 text-xs font-bold transition border border-white/[0.1]"
                >
                  <span>Explore Delivered React Systems</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Implementation</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How We Engineer Your Next.js Application</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/[0.08] bg-[#071923]">
                <div className="text-2xl font-black text-cyan-400/40 font-mono mb-3">{p.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BUYER FAQ */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/[0.08]">
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">FAQ</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-white/[0.08] bg-[#071923] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-white hover:text-[#1bbac8] transition"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp size={18} className="text-[#1bbac8] shrink-0 ml-3" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0 ml-3" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA FORM */}
        <section id="system-form" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/[0.08]">
          <div className="p-6 sm:p-10 rounded-3xl border border-cyan-500/20 bg-[#081d28] shadow-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to Build Your High-Performance Next.js Platform?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-8">
              Discuss your rendering strategy, database requirements, and target timeline with our senior React engineers.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] text-sm font-bold transition shadow-lg shadow-[#25D366]/20"
            >
              <span>Discuss on WhatsApp (+92 334 8004300)</span>
              <ArrowRight size={15} />
            </a>

            <div className="mt-6 text-xs text-slate-400">
              Or submit a scope inquiry via our{" "}
              <Link to="/contact" className="text-[#1bbac8] underline font-bold hover:text-white">
                Contact Page
              </Link>
              .
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
