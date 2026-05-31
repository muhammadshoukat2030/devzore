import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Box,
  ChevronLeft,
  Cloud,
  Code2,
  Cpu,
  CreditCard,
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
  Users2,
  Zap
} from 'lucide-react';

function SaaSProductDevelopment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a SaaS MVP?",
      answer: "A focused SaaS MVP — core features, authentication, billing, and a usable interface — typically takes 10 to 14 weeks. The timeline depends on the complexity of your unique feature set, the number of integrations required at launch, and how much design work is needed. We scope this precisely during the discovery phase."
    },
    {
      question: "What is the biggest mistake SaaS founders make when building their product? ",
      answer: "Not thinking about multi-tenancy early enough. Retrofitting tenant data isolation into an application that was not designed for it is technically complex, risky, and expensive. We design this correctly from day one — it costs a small amount of additional architecture time upfront and saves an enormous amount of engineering time later."
    },
    {
      question: "Can DevZore build white-label SaaS products?",
      answer: "Yes. White-label architecture requires specific design decisions around custom branding, custom domain support, isolated configurations per reseller, and a permission hierarchy that supports your channel model. We have built several white-label platforms and understand exactly what the architecture requires."
    },
    {
      question: " How do you handle GDPR and data compliance requirements?",
      answer: "We implement the technical controls that support compliance: data residency configuration, data deletion and export workflows, audit logging, encryption at rest and in transit, and configurable data retention policies. We recommend working with a legal professional for final compliance certification — we handle the technical implementation, not the legal advice."
    }
  ];

  return (
    <>
      <Helmet>
        <title>SaaS Product Development Company | DevZore</title>
        <meta
          name="description"
          content="DevZore builds scalable, multi-tenant SaaS platforms with subscription billing, user management, and production-ready infrastructure."
        />
        <link
          rel="canonical"
          href="https://devzore.com/saas-product-development"
        />
        {/* Open Graph */}
        <meta property="og:title" content="SaaS Product Development Company | DevZore" />
        <meta
          property="og:description"
          content="We build scalable SaaS platforms with subscription billing, authentication, dashboards, and cloud-ready architecture."
        />
        <meta property="og:url" content="https://devzore.com/saas-product-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevZore" />

        {/* Social Image */}
        <meta property="og:image" content="https://devzore.com/og/saas.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SaaS Product Development Company | DevZore" />
        <meta
          name="twitter:description"
          content="Scalable SaaS platforms with subscription billing, auth systems, and multi-tenant architecture."
        />
        <meta name="twitter:image" content="https://devzore.com/og/saas.jpg" />
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-10 overflow-x-hidden">

        {/* --- TOP HEADER SPACE --- */}
        <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Product Engineering Lab
          </div>
          <Link to="/contact">
          <button className=" cursor-pointer bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
            Talk to Specialist
          </button>
          </Link>
        </div>

        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-1 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              SaaS Product <br />
              <span className="text-purple-500">Development</span> — <br />
              Code to <span className="text-purple-500">MRR</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-medium">
              Building a SaaS is not just building a web app; it's creating a software business. We engineer multi-tenant platforms with subscription logic and enterprise-grade security.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact">
                <button className="cursor-pointer bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group transition-all shadow-xl shadow-purple-500/20 active:scale-95">
                  Build My SaaS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          <div className="relative group lg:justify-self-end hidden md:block">
            <div className="absolute -inset-10 bg-purple-500/10 blur-[120px] rounded-full"></div>
            <div className="relative bg-[#0c0c0c] border border-gray-800/50 rounded-[2rem] p-10 shadow-2xl">
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

        {/* --- CORE CAPABILITIES / WHAT MAKES SAAS DIFFERENT --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
              What Makes SaaS <span className="text-purple-500 text-not-italic">Development Different</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-gray-400 text-sm md:text-base leading-relaxed mb-12">
              <p>
                Most web development companies can build a web app. Fewer understand the specific engineering requirements of a SaaS product: the architecture decisions that seem premature at 100 users but become impossible to fix at 10,000. Multi-tenancy, isolation between customer accounts, metered billing, self-service subscription management, and granular permission systems are not features you add later — they are the foundation everything else sits on.
              </p>
              <p>
                When we start a SaaS project at DevZore, we design this foundation deliberately and correctly. We have built B2B SaaS platforms, B2C subscription products, and marketplace models. We know which decisions matter at the architecture phase and which ones are genuinely premature.
              </p>
            </div>
          </div>

          {/* Expanded Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard
              icon={<Layers className="text-purple-500" size={24} />}
              title="Multi-Tenant Architecture Design"
              desc="We design tenant isolation strategies based on your security requirements, compliance obligations, and scale expectations. Shared schema with tenant IDs, separate schemas per tenant, or fully isolated databases — each model has real trade-offs and the right answer depends on your product, not on what is easiest to build."
              borderColor="border-l-purple-600" />
            <ExpertiseCard
              icon={<Zap className="text-blue-500" size={24} />}
              title="Subscription and Billing Infrastructure"
              desc=" Stripe integration with the full subscription lifecycle: free trials, plan upgrades and downgrades, usage-based billing for variable-consumption products, automated invoicing, payment failure handling, and the dunning flows that recover failed payments before customers churn."
              borderColor="border-l-blue-500" />
            <ExpertiseCard
              icon={<ShieldCheck className="text-green-500" size={24} />}
              title="Authentication and Access Control "
              desc="Multi-role permission systems that reflect your actual business model — organization admins, team members, read-only viewers, API access tokens. SSO and SAML for enterprise customers. Magic link login, MFA, and session management implemented with security best practices at every layer.."
              borderColor="border-l-green-500" />
            <ExpertiseCard
              icon={<Users2 className="text-orange-500" size={24} />}
              title="Self-Serve User Onboarding<"
              desc=" The fastest path to churn is an onboarding flow that leaves users confused about what to do next. We design and build onboarding sequences that get users to their product's core value — their 'aha moment' — as quickly as possible, reducing early-stage churn before it starts."
              borderColor="border-l-orange-500" />
            <ExpertiseCard
              icon={<BarChart3 className="text-pink-500" size={24} />}
              title="Product Analytics and Feature Tracking"
              desc="Usage dashboards, feature adoption tracking, retention cohort analysis, and churn signal detection built into your platform from day one. The companies that grow fastest are the ones that know precisely how users interact with their product and make decisions based on that data rather than assumptions."
              borderColor="border-l-pink-500" />
            <ExpertiseCard
              icon={<Settings2 className="text-cyan-500" size={24} />}
              title="Admin and Customer Dashboards"
              desc="Super-admin panels for your internal team — account management, billing overrides, user impersonation for support, feature flag controls. White-labeled customer dashboards for your clients when your SaaS model requires it."
              borderColor="border-l-cyan-500" />
          </div>
        </section>

        {/* --- SERVICES GRID --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Full-Cycle <span className="text-purple-500 text-not-italic">SaaS Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">Everything you need to scale from first login to enterprise contract.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<Users2 />} title="Self-Serve Onboarding" desc="Onboarding flows designed to get users to their 'aha moment' as quickly as possible, reducing early-stage churn." />
            <ServiceCard icon={<BarChart3 />} title="Product Analytics" desc="Usage dashboards and feature adoption tracking built-in to make data-driven growth decisions." />
            <ServiceCard icon={<Settings2 />} title="Admin Dashboards" desc="Super-admin panels for account management, user impersonation for support, and feature flag controls." />
            <ServiceCard icon={<Database />} title="Cloud Infrastructure" desc="Auto-scaling AWS/GCP setups that handle traffic surges and maintain 99.9% uptime." />
            <ServiceCard icon={<Lock />} title="Compliance Ready" desc="Technical controls for GDPR: data residency, deletion workflows, and encryption at rest/transit." />
            <ServiceCard icon={<CreditCard />} title="White-Label Solutions" desc="Custom branding, custom domain support, and isolated configurations per reseller." />
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 bg-white/[0.01] rounded-[3rem] border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">SaaS Development <span className="text-purple-500 text-not-italic">Process</span></h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProcessCard step="Step 1" title="SaaS Architecture Planning" desc="We document your pricing model, tenant data isolation strategy, feature tiers, and integration requirements in a technical architecture document that both technical and non-technical stakeholders can review and approve." />
            <ProcessCard step="Step 2" title="Core Platform Development" desc="Authentication system, billing infrastructure, tenant management, and admin tooling are built first. These are the hardest components to change once other features are built on top of them. Getting them right early is the difference between a maintainable codebase and one that requires a rewrite at Series A." />
            <ProcessCard step="Step 3" title="Feature Development in Sprints" desc="Your product's unique value — the reason customers pay you rather than a competitor — is built in two-week sprints with real user feedback incorporated at every stage. We prioritize ruthlessly based on what actually drives retention and growth." />
            <ProcessCard step="Step 4" title="Beta Program and Iteration" desc="Private beta with real users, in-app feedback collection, session recording analysis, and structured iteration cycles. The gap between what founders think users want and what users actually do with the product is almost always surprising." />
            <ProcessCard step="Step 5" title="Public Launch and Growth Infrastructure" desc="Production hardening, automated scaling policies, SLO monitoring, and the go-to-market technical support needed for a clean public launch — including the infrastructure that handles a traffic surge if your launch goes better than expected." />
            <div className="p-8 bg-purple-600 rounded-3xl flex flex-col justify-center items-center text-center">
              <Rocket className="mb-4 animate-bounce" size={40} />
              <h3 className="text-xl font-bold mb-2 text-white">Scale Your Revenue</h3>
              <Link to="/contact">
                <button className="cursor-pointer bg-white text-purple-600 px-6 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-transform hover:scale-105 active:scale-95">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>


/* --- 2. PHIR ISAY GRID MEIN USE KAREN --- */
        // Ye hissa aapke main return function ke andar aayega
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Framework & Backend */}
            <StackCard
              category="Frontend & Logic"
              items={["Next.js (SSR)", "React 19"]}
              icon={<Layers className="text-blue-400" size={20} />}
            />
            <StackCard
              category="API Layer"
              items={["Node.js", "Express.js"]}
              icon={<Server className="text-green-500" size={20} />}
            />

            {/* Databases */}
            <StackCard
              category="Relational Data"
              items={["PostgreSQL"]}
              icon={<Database className="text-indigo-400" size={20} />}
            />
            <StackCard
              category="Flexible Storage"
              items={["MongoDB Atlas"]}
              icon={<Database className="text-green-400" size={20} />}
            />

            {/* DevOps & Infra */}
            <StackCard
              category="Cloud & Infra"
              items={["AWS", "GCP", "Terraform"]}
              icon={<Globe className="text-cyan-400" size={20} />}
            />
            <StackCard
              category="Containerization"
              items={["Docker", "Kubernetes"]}
              icon={<Box className="text-blue-500" size={20} />}
            />

            {/* Auth & Payments */}
            <StackCard
              category="Auth & Security"
              items={["Clerk", "Auth0"]}
              icon={<ShieldCheck className="text-purple-400" size={20} />}
            />
            <StackCard
              category="Billing"
              items={["Stripe Connect"]}
              icon={<CreditCard className="text-slate-400" size={20} />}
            />

            {/* Performance & Analytics */}
            <StackCard
              category="Caching"
              items={["Redis"]}
              icon={<Zap className="text-red-500" size={20} />}
            />
            <StackCard
              category="Analytics"
              items={["PostHog", "Segment"]}
              icon={<BarChart3 className="text-orange-400" size={20} />}
            />
            <StackCard
              category="Communication"
              items={["Resend", "SendGrid"]}
              icon={<Mail className="text-pink-400" size={20} />}
            />
            <StackCard
              category="Deployment"
              items={["Vercel", "CI/CD"]}
              icon={<Rocket className="text-yellow-400" size={20} />}
            />
          </div>
        </section>


        {/* --- FAQ SECTION --- */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-10 w-1 bg-purple-600 rounded-full"></div>
            <h2 className="text-3xl font-bold italic">SaaS <span className="text-purple-500 text-not-italic">Frequently Asked Questions</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`border rounded-2xl transition-all duration-300 ${activeIndex === i ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/5 bg-[#0A0A0A]'}`}>
                <button onClick={() => setActiveIndex(activeIndex === i ? null : i)} className="w-full p-6 text-left flex justify-between items-center group">
                  <h3 className="font-bold text-sm md:text-base pr-4">{faq.question}</h3>
                  <div className={`p-1 rounded-full border transition-all ${activeIndex === i ? 'rotate-45 border-purple-500 text-purple-500' : 'border-gray-700 text-gray-700'}`}>
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
        <section className="max-w-7xl mx-auto px-6 py-1">
          <div className="bg-gradient-to-br from-[#0c0c0c] to-[#161616] border border-white/10 rounded-[3rem] p-12 md:p-13 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Share your SaaS concept.</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed font-medium">
              We will map the technical path from idea to launch — with honest timelines, real pricing, and no surprises.
            </p>
            <Link to="/contact">
              <button className="cursor-pointer bg-purple-600 hover:bg-purple-700 px-12 py-5 rounded-2xl font-bold text-base transition-all shadow-2xl shadow-purple-500/30 active:scale-95 flex items-center gap-2 mx-auto">
                Start Developing SaaS <ArrowRight size={20} />
              </button>
            </Link>

            <div className="mt-8 pt-7 border-t border-white/5">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <FooterLink to="/mern-stack-development" label="MERN Stack development" />
                <FooterLink to="/web-development" label="Web App Development" />
                <FooterLink to="/backend-api" label="Node.js" />
                <FooterLink to="/reactdevelopment" label="React Development" />
              </div>
            </div>
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

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-[#080808] p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all group">
    <div className="mb-4 text-purple-500 group-hover:scale-110 transition-transform duration-300">{React.cloneElement(icon, { size: 32 })}</div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
  </div>
);

const ProcessCard = ({ step, title, desc }) => (
  <div className="p-8 bg-[#0c0c0c] border border-white/5 rounded-3xl relative group hover:border-purple-500/30 transition-all">
    <div className="text-[10px] font-black text-purple-500 mb-4 uppercase tracking-[0.3em]">{step}</div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const FooterLink = ({ to, label }) => (
  <Link to={to} className="text-gray-500 hover:text-purple-400 text-[10px] font-bold transition-colors flex items-center gap-1 group uppercase tracking-widest">
    {label} <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </Link>
);
/* --- 1. PEHLE COMPONENT DEFINE KAREN --- */
const StackCard = ({ category, items, icon }) => (
  <div className="bg-[#0c0c0c] border border-white/5 p-6 rounded-2xl hover:border-purple-500/30 transition-all group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-purple-500/10 transition-colors">
        {icon}
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-purple-400 transition-colors">
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
// Phir iske niche export default hoga

export default SaaSProductDevelopment;