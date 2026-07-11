import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { assets } from "../assets/assets";
import ServiceGalleryTemplate from '../components/ServiceGalleryTemplate';
import {
  Globe,
  Smartphone,
  RefreshCw,
  ArrowRight,
  ChevronLeft,
  Database,
  Layout,
  ShieldCheck,
  Zap,
  Search,
  Layers,
  Code2,
  Plus,
  ExternalLink,
  Settings,
  Monitor,
  Lock,
  Cpu,
  Rocket,
  TrendingUp,    // Fixed: Added missing import
  CheckCircle2
} from 'lucide-react';
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How much does custom web application development cost?",
      answer: "A well-scoped MVP typically ranges from $15,000 to $40,000. A full-featured enterprise platform with complex integrations and a custom design system can range from $60,000 to $200,000 or more. We provide a detailed cost breakdown after understanding your requirements — with no ambiguous line items."
    },
    {
      question: "How do you handle changing requirements during development?",
      answer: "Requirements change — that is normal and expected. Our agile process is designed for it. We track scope changes transparently, discuss the impact on timeline and cost before any additional work begins, and adjust the plan with your explicit approval. Nothing happens without your sign-off."
    },
    {
      question: "Can your web applications handle high traffic?",
      answer: "Yes. We design for scalability from the first sprint: horizontal scaling on cloud infrastructure, database query optimization and proper indexing, CDN configuration for static assets, Redis caching for frequently accessed data, and load testing before launch to find bottlenecks before your users do."
    },
    {
      question: "Will I own the source code?",
      answer: "Completely. Your code lives in your GitHub or GitLab organization from the first commit. You have full access at every stage of development. There is no withholding of code at project end, no proprietary frameworks that only we can maintain, and no licensing fees attached to the software we build."
    }
  ];

  return (
    <>


      <Helmet>
        <title>Custom Web Application Development Services | DevZore</title>
        <meta name="description" content="Bespoke, secure, and enterprise-grade web systems engineered for performance, flawless responsiveness, and global scalability." />
        <link rel="canonical" href="https://devzore.com/web-development" />
        <meta property="og:title" content="Custom Web Application Development Services | DevZore" />
        <meta property="og:description" content="High-performance modern web architectures built using secure, industry-standard development patterns." />
        <meta property="og:url" content="https://devzore.com/web-development" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-10 overflow-x-hidden">

        {/* --- NAVIGATION / HEADER --- */}
        <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Digital Craftsmanship
          </div>
        </div>

        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-1 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1] tracking-tight">
              Custom Web <br /> Application <span className="text-purple-500">Development</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-300">
              That Performs Under Pressure
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-x leading-relaxed font-medium">
              Off-the-shelf software has limits. When your business process doesn't fit into a template — when you need workflows, data structures, and user experiences built around exactly how your team works — custom web application development is the answer. DevZore designs and builds web applications that solve real business problems, handle real traffic, and grow with your company over years, not just months.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold text-sm flex items-center gap-2 group transition-all shadow-xl shadow-purple-500/20 active:scale-95">
                Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#050505]" />)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-400">Trusted by Global Clients</span>
              </div>
            </div>
          </div>

          <div className="relative group lg:justify-self-end hidden lg:block">
            <div className="absolute -inset-10 bg-purple-500/10 blur-[120px] rounded-full"></div>
            <div className="relative bg-[#0c0c0c] border border-gray-800/50 rounded-3xl p-4 shadow-2xl">
              <img
                src={assets.Web_App_Development}
                alt="Web App Development"
                className="rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-10 -left-10 bg-[#111] border border-white/10 p-5 rounded-2xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg"><Zap size={20} className="text-green-500" /></div>
                  <div>
                    <div className="text-xs font-bold">High Performance</div>
                    <div className="text-[10px] text-gray-500">Optimized Core Web Vitals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHAT WE BUILD SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We <span className="text-purple-500">Build</span></h2>
            <p className="text-gray-400 max-w-3xl text-sm md:text-base leading-relaxed">
              We build web applications across a wide range of categories and industries. The common thread in every project is engineering discipline: clear requirements, scalable architecture, and production-quality code delivered through a transparent, milestone-based process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard
              icon={<Database className="text-blue-400" size={24} />}
              title="Business Process Portals & Internal Tools"
              desc="CRM systems, HR platforms, inventory management systems, approval workflow tools, and internal dashboards that replace spreadsheets and disconnected software with a single, purpose-built application your team actually uses."
              borderColor="border-l-blue-400"
            />
            <ExpertiseCard
              icon={<Monitor className="text-purple-500" size={24} />}
              title="Customer-Facing Web Platforms"
              desc="Consumer portals, client dashboards, booking systems, and subscription platforms — built with the performance and user experience standards that today's users expect from any product they interact with online."
              borderColor="border-l-purple-500"
            />
            <ExpertiseCard
              icon={<Zap className="text-yellow-500" size={24} />}
              title="E-commerce & Marketplace Applications"
              desc="Custom storefronts, B2B ordering systems, multi-vendor marketplaces, and headless commerce builds that outperform generic Shopify themes when your product catalog, pricing model, or checkout flow requires something that templates cannot provide."
              borderColor="border-l-yellow-500"
            />
            <ExpertiseCard
              icon={<Search className="text-green-500" size={24} />}
              title="Data Dashboards & Analytics Platforms"
              desc="Real-time reporting interfaces, business intelligence tools, and analytics dashboards with complex filtering, data visualization, and export capabilities built for the people who make decisions from data every day."
              borderColor="border-l-green-500"
            />
            <ExpertiseCard
              icon={<Layers className="text-orange-500" size={24} />}
              title="API-First & Headless Applications"
              desc="Backend systems and API layers that power web apps, mobile apps, and third-party integrations simultaneously — designed from the beginning for multiple frontends rather than a single monolithic application."
              borderColor="border-l-orange-500"
            />
            <ExpertiseCard
              icon={<RefreshCw className="text-gray-400" size={24} />}
              title="Legacy System Modernization"
              desc="Migration of aging PHP, ASP.NET, or monolithic applications to modern JavaScript stacks. We move data, rebuild interfaces, and maintain business continuity throughout the transition — without the big-bang rewrites that tend to go badly."
              borderColor="border-l-gray-400"
            />
          </div>
        </section>


        <div className="bg-black min-h-screen">
          {/* Baki sections yahan aayenge */}
          <ServiceGalleryTemplate pageKey="WebDevelopment" />
        </div>


        {/* --- PROCESS SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 bg-white/[0.01] rounded-[3rem] border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Development <span className="text-purple-500">Process</span></h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProcessCard
              step="Step 1"
              title="Requirements & Scope Definition"
              desc="Discovery sessions that map business logic, user flows, data requirements, and integrations into a technical spec. Both sides sign off before development begins."
            />
            <ProcessCard
              step="Step 2"
              title="Architecture & Technology Selection"
              desc="Choosing the right tools for your specific problem. Decisions depend on scale, compliance, real-time needs, and third-party integrations."
            />
            <ProcessCard
              step="Step 3"
              title="Sprint-Based Development"
              desc="Two-week sprints with a demo call at every cycle. Test functionality, provide feedback, and reprioritize features with complete visibility."
            />
            <ProcessCard
              step="Step 4"
              title="Quality Assurance & Security Testing"
              desc="Manual QA, automated test suites for critical paths, WCAG 2.1 accessibility review, and OWASP security testing before production."
            />
            <ProcessCard
              step="Step 5"
              title="Deployment & Monitoring"
              desc="Production deployment with proper monitoring — error tracking, uptime alerts, and logging. We document everything and train your team."
            />
            <div className="p-8 bg-purple-600 rounded-2xl flex flex-col justify-center items-center text-center">
              <Rocket className="mb-4 animate-bounce" size={40} />
              <h3 className="text-xl font-bold mb-2">Ready to Scale?</h3>
              <p className="text-sm opacity-90 mb-4">Let's build a solution that grows with you.</p>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-bold text-xs uppercase">Get Started</button>
            </div>
          </div>
        </section>

        {/* --- TECHNOLOGY STACK --- */}
        <section className="max-w-7xl mx-auto px-6 py-7">
          <h2 className="text-2xl font-bold mb-12 text-center uppercase tracking-[0.3em] text-gray-500">Web Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js", "React", "Vue.js", "Node.js", "PostgreSQL",
              "MongoDB", "Redis", "GraphQL", "TypeScript", "Tailwind CSS",
              "AWS (EC2, S3, RDS, Lambda)", "Docker & Kubernetes",
              "Stripe & Payment Gateways", "Elasticsearch", "Cloudflare CDN",
              "GitHub Actions for CI/CD"
            ].map((tech, i) => (
              <div key={i} className="px-6 py-3 bg-[#0c0c0c] border border-white/5 rounded-xl text-xs font-bold text-gray-300 hover:border-purple-500/40 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </section>


        {/* --- NEW SECTION 1: PERFORMANCE ARCHITECTURE (IMAGE LEFT, INFO RIGHT) --- */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full"></div>
              <img
                src={assets.web_Architecture_and_Speed2}
                alt="Architecture and Speed"
                className="relative rounded-3xl border border-white/10 shadow-1xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0c0c0c] border border-purple-500/30 p-6 rounded-2xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-500"><TrendingUp size={24} /></div>
                  <div className="text-2xl font-bold tracking-tighter">99.9%</div>
                </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Uptime Optimization</div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Performance-First <br /><span className="text-purple-500">Infrastructure</span></h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                We don't just build code; we build high-speed engines. Every application we deploy is pre-configured for maximum speed and global reach.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Server-side rendering (SSR) for instant first paint",
                  "Database sharding and intelligent indexing",
                  "Automated horizontal scaling on AWS/Google Cloud",
                  "Global CDN distribution for static assets"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                    <CheckCircle2 size={18} className="text-green-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION 2: CASE STUDY PREVIEW (IMAGE RIGHT, INFO LEFT) --- */}
        <section className="max-w-7xl mx-auto px-6 py-14 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[10px] font-bold uppercase tracking-widest">Case Study</div>
              <h2 className="text-3xl md:text-4xl font-bold">Scaling Complex <br /><span className="text-purple-500">Business Logic</span></h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                See how we transformed a manual logistics workflow into a fully automated SaaS platform that handles over 50,000 transactions per day with zero latency.
              </p>
              <div className="grid grid-cols-2 gap-6 py-4">
                <div>
                  <div className="text-2xl font-bold text-white tracking-tighter">40%</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Efficiency Boost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tracking-tighter">100ms</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Avg Response Time</div>
                </div>
              </div>
              <button className="text-white border-b-2 border-purple-500 pb-1 text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Explore Our Portfolio <ArrowRight size={16} />
              </button>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-10 bg-blue-500/5 blur-[120px] rounded-full"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/5">
                <img
                  src={assets.Web_App_Development}
                  alt="Web Project Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>


        {/* --- FAQ SECTION --- */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-10 w-1 bg-purple-600 rounded-full"></div>
            <h2 className="text-3xl font-bold">Frequently Asked <span className="text-purple-500">Questions</span></h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`border rounded-2xl transition-all duration-300 ${activeIndex === i ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/5 bg-[#0A0A0A]'}`}>
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                >
                  <span className="font-bold text-sm md:text-base pr-4">{faq.question}</span>
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
          <div className="bg-gradient-to-br from-[#0c0c0c] to-[#161616] border border-white/10 rounded-[3rem] p-12 md:p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Have a web application <br /> in mind?</h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto text-sm md:text-base leading-relaxed font-medium">
              Share your requirements and we'll respond with a clear plan and realistic estimate within 24 hours.
            </p>

            <Link to="/contact">
              <button className="bg-purple-600 hover:bg-purple-700 px-13 py-5 rounded-2xl font-bold text-base transition-all shadow-2xl shadow-purple-500/30 active:scale-95 flex items-center gap-2 mx-auto">
                Start Your Project <ArrowRight size={20} />
              </button>
            </Link>

            <div className="mt-2 pt-6 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 mb-8 font-black">Internal Links</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <FooterLink to="/mern-stack-development" label="MERN Stack Development" />
                <FooterLink to="/ReactDevelopment" label="React Development" />
                <FooterLink to="/backend-api" label="Node.js Development" />
                <FooterLink to="/saas-product-development" label="SaaS Development" />
                <FooterLink to="/mobile-apps" label="Mobile App Development" />
                <FooterLink to="/" label="Back to Home" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

/* --- SUB-COMPONENTS --- */
const ExpertiseCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-8 rounded-2xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all group hover:-translate-y-1`}>
    <div className="mb-6 p-3 bg-white/5 inline-block rounded-xl group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-lg font-bold mb-4 text-gray-100">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
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

export default WebDevelopment;