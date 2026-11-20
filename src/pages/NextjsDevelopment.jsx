import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PricingBlock from "../components/PricingBlock";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock3,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  Minus,
  Monitor,
  Palette,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Send,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Terminal,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";
import { trackLeadSubmission } from "../utils/analytics";

export default function NextjsDevelopment({ isDark }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Next.js Development",
    timeline: "",
    message: "",
  });

  const d = isDark;

  /* =========================================================
     THEME & GRIDS
  ========================================================= */

  const pageBg = d ? "bg-[#06151d]" : "bg-[#f7f9fa]";
  const textMain = d ? "text-white" : "text-[#071923]";
  const textBody = d ? "text-slate-300" : "text-slate-600";

  const lightGrid = {
    backgroundImage:
      "linear-gradient(rgba(7,25,35,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(7,25,35,0.045) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20Next.js%20development%20services%20for%20my%20business.";

  /* =========================================================
     CAPABILITIES (WHAT WE BUILD)
  ========================================================= */

  const services = [
    {
      icon: <Layers3 size={20} />,
      number: "01",
      title: "App Router & Server Components (RSC)",
      desc:
        "High-performance web architecture separating server-rendered components from interactive client islands, drastically slashing JavaScript bundle sizes.",
      points: [
        "React Server Components (RSC) architecture",
        "Nested layouts & dynamic parallel routing",
        "Minimal client-side JavaScript overhead",
      ],
    },
    {
      icon: <Zap size={20} />,
      number: "02",
      title: "SSR & Incremental Static Regeneration (ISR)",
      desc:
        "Sub-second page rendering combined with background cache revalidation, serving instant static HTML to millions of visitors while keeping content fresh.",
      points: [
        "Sub-second Time to First Byte (TTFB)",
        "On-demand & time-based cache revalidation",
        "Global edge caching with stale-while-revalidate",
      ],
    },
    {
      icon: <Rocket size={20} />,
      number: "03",
      title: "Full-Stack SaaS Web Applications",
      desc:
        "Production cloud SaaS platforms with secure session authentication, Stripe subscription billing, tenant isolation, and interactive client dashboards.",
      points: [
        "Auth.js / Clerk / Supabase session management",
        "Stripe customer portal & webhook billing",
        "Role-based access control & admin panels",
      ],
    },
    {
      icon: <Terminal size={20} />,
      number: "04",
      title: "Server Actions & Edge API Routes",
      desc:
        "Type-safe server mutations without REST endpoint boilerplate, executing on global edge runtimes with strict schema validation using Zod.",
      points: [
        "Zero-boilerplate Server Action mutations",
        "Strict input validation with Zod schemas",
        "Low-latency edge runtime execution",
      ],
    },
    {
      icon: <Database size={20} />,
      number: "05",
      title: "Headless CMS & Database Engineering",
      desc:
        "Connect Next.js to MongoDB, PostgreSQL, Prisma ORM, or headless CMS platforms (Sanity, Strapi, Contentful) for live editorial preview workflows.",
      points: [
        "MongoDB Atlas, PostgreSQL & Prisma ORM",
        "Headless CMS live editorial previews",
        "Automated database connection pooling",
      ],
    },
    {
      icon: <Search size={20} />,
      number: "06",
      title: "Technical SEO & Core Web Vitals 95+",
      desc:
        "Dynamic metadata generators, automated XML sitemaps, Open Graph social card renderers, and rigorous Core Web Vitals (LCP, INP, CLS) optimization.",
      points: [
        "Dynamic generateMetadata & JSON-LD schemas",
        "Automated sitemap.xml & robots.txt generation",
        "next/image and next/font asset optimization",
      ],
    },
  ];

  /* =========================================================
     STANDARDS
  ========================================================= */

  const standards = [
    {
      icon: <Smartphone size={19} />,
      title: "Server-Rendered on Byte 1",
      desc:
        "Google and search engines receive fully populated semantic HTML immediately without waiting for client-side JavaScript execution.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Core Web Vitals 95+ Guarantee",
      desc:
        "Automated image optimization, zero layout shift (CLS < 0.05), and instantaneous Interaction to Next Paint (INP < 150ms).",
    },
    {
      icon: <Search size={19} />,
      title: "Technical SEO Architecture",
      desc:
        "Automated OpenGraph images (next/og), programmatic canonical tags, structured JSON-LD schemas, and dynamic XML sitemaps.",
    },
    {
      icon: <LockKeyhole size={19} />,
      title: "Enterprise-Grade Security",
      desc:
        "httpOnly secure cookies, CSRF protection, strict Content Security Policy headers, and server-side input validation with Zod.",
    },
    {
      icon: <Server size={19} />,
      title: "Unified TypeScript Stack",
      desc:
        "Single end-to-end type-safe codebase spanning database models, server actions, API routes, and React client components.",
    },
    {
      icon: <Settings2 size={19} />,
      title: "Zero-Downtime Edge Deployment",
      desc:
        "Automated CI/CD deployment on Vercel or Docker containers with global edge CDN routing and instant rollback capabilities.",
    },
  ];

  /* =========================================================
     BUSINESS IMPACT PILLARS
  ========================================================= */

  const businessTypes = [
    {
      icon: <Building2 size={18} />,
      title: "Enterprise Marketing Sites",
      desc:
        "High-conversion corporate platforms requiring instant page loads, dynamic CMS management, and maximum organic search visibility.",
    },
    {
      icon: <Rocket size={18} />,
      title: "B2B SaaS Products",
      desc:
        "Scalable web applications with user dashboards, subscription billing, multi-tenancy, and complex interactive workflows.",
    },
    {
      icon: <ShoppingCart size={18} />,
      title: "Headless E-Commerce",
      desc:
        "Lightning-fast digital storefronts powered by Next.js ISR, delivering sub-second checkout speeds and superior mobile conversion rates.",
    },
    {
      icon: <Globe2 size={18} />,
      title: "Legacy React & WP Migrations",
      desc:
        "Upgrading slow single-page apps or bloated WordPress sites to Next.js while protecting existing rankings with 301 redirect mapping.",
    },
  ];

  /* =========================================================
     DIAGNOSTIC ASSESSMENT (PROBLEMS VS SOLUTIONS)
  ========================================================= */

  const redesignProblems = [
    "Your current client-side React SPA renders a blank page to search engines, hurting rankings",
    "Slow Time to First Byte (TTFB) and high bounce rates on mobile devices",
    "Bloated JavaScript bundles (>1.5MB) triggering Core Web Vitals warnings in Google Search Console",
    "Monolithic WordPress plugins causing security vulnerabilities and sluggish load times",
    "Complex REST API boilerplate required for basic form submissions and database updates",
    "Inconsistent social media previews and broken Open Graph share cards",
    "Messy custom routing with duplicate layouts and unoptimized asset delivery",
    "Servers crashing or slowing to a crawl during sudden traffic spikes",
  ];

  /* =========================================================
     PROCESS
  ========================================================= */

  const process = [
    {
      number: "01",
      title: "Discovery & Architecture",
      desc:
        "We audit your requirements, data velocity, and user journeys to select the optimal rendering mix: Server Components, Static Generation, or ISR.",
    },
    {
      number: "02",
      title: "Data Modeling & API Design",
      desc:
        "We define database schemas, Prisma models, Server Actions, and third-party integrations with strict TypeScript and Zod validation.",
    },
    {
      number: "03",
      title: "UI/UX & Component Engineering",
      desc:
        "We engineer accessible, responsive UI systems with Tailwind CSS, establishing a clean separation between server and client components.",
    },
    {
      number: "04",
      title: "Full-Stack Development",
      desc:
        "Frontend layouts, dynamic routing, authentication, payment webhooks, and database queries are engineered into a unified Next.js application.",
    },
    {
      number: "05",
      title: "Performance & Security Audit",
      desc:
        "We audit mobile Lighthouse scores, optimize font and image assets, enforce security headers, and verify structured schema.org markup.",
    },
    {
      number: "06",
      title: "Production Launch & Handover",
      desc:
        "We configure automated CI/CD pipelines, deploy on Vercel or cloud infrastructure, and deliver 100% source code with post-launch warranty.",
    },
  ];

  /* =========================================================
     INDUSTRIES
  ========================================================= */

  const industries = [
    "SaaS & Cloud Platforms",
    "B2B Enterprise Software",
    "Headless E-Commerce",
    "Fintech & Payment Portals",
    "Healthcare & Booking Systems",
    "Logistics & Route ERPs",
    "Real Estate Marketplaces",
    "EdTech & Learning Portals",
  ];

  /* =========================================================
     WHY DEVZORE
  ========================================================= */

  const whyChooseUs = [
    {
      icon: <CheckCircle2 size={18} />,
      title: "Senior Next.js Engineers",
      desc:
        "Your project is built by full-stack engineers who understand React Server Components, hydration boundaries, and edge runtimes.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "100% Source Code Handover",
      desc:
        "You own complete intellectual property rights. Clean TypeScript code, comprehensive Git history, and zero vendor lock-in.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Core Web Vitals Guarantee",
      desc:
        "We optimize your Next.js application to achieve 90+ Lighthouse performance scores on real mobile devices.",
    },
    {
      icon: <LockKeyhole size={18} />,
      title: "Built-In Security & Compliance",
      desc:
        "Strict input validation, secure session management, rate limiting, and encrypted environment variables configured by default.",
    },
    {
      icon: <Clock3 size={18} />,
      title: "Milestone-Based Delivery",
      desc:
        "Transparent sprint updates, staging deployment previews for every feature branch, and guaranteed production timelines.",
    },
    {
      icon: <Wrench size={18} />,
      title: "Post-Launch Warranty & Support",
      desc:
        "Every Next.js project includes dedicated warranty bug-fixing and ongoing support packages for continuous feature expansion.",
    },
  ];

  /* =========================================================
     RELATED SERVICES
  ========================================================= */

  const relatedServices = [
    {
      title: "MERN Stack Development",
      path: "/mern-stack-development",
      desc:
        "Full-stack React, Node.js, Express, and MongoDB development for scalable business software and custom portals.",
    },
    {
      title: "React Development",
      path: "/reactdevelopment",
      desc:
        "Frontend React application engineering, complex user interfaces, interactive dashboards, and design system builds.",
    },
    {
      title: "Web Development",
      path: "/web-development",
      desc:
        "Custom websites, web applications, and corporate platforms built around real business needs.",
    },
    {
      title: "Cloud & Deployment",
      path: "/cloud-deployment",
      desc:
        "Production cloud architecture, DevOps automation, CI/CD pipelines, Docker containerization, and AWS / Vercel hosting.",
    },
  ];

  /* =========================================================
     FAQS
  ========================================================= */

  const faqs = [
    {
      q: "What is Next.js and why should our business use it over standard React?",
      a: "Next.js is a production-grade React framework that enables Server-Side Rendering (SSR) and Static Site Generation (SSG). Unlike standard client-side React apps (SPAs) that deliver a blank HTML document to search crawlers, Next.js sends fully rendered HTML instantly on the very first byte. This provides vastly superior Google search rankings, lightning-fast initial load times, and significantly higher conversion rates.",
    },
    {
      q: "How does Next.js differ from MERN stack development?",
      a: "In a standard MERN stack architecture, React functions purely as a client-side Single Page Application (SPA) communicating with an external Express/Node API over REST or GraphQL. Next.js unifies the frontend and backend into a single cohesive framework featuring React Server Components, Server Actions, edge API routes, and built-in image/font optimization. Both have their place: MERN is excellent for private internal tools, while Next.js is the gold standard for public-facing, SEO-critical web applications and modern SaaS.",
    },
    {
      q: "Can you migrate an existing WordPress or React SPA to Next.js without losing SEO rankings?",
      a: "Yes. Migrating legacy WordPress sites and single-page React apps to Next.js is one of our core specialties. We preserve all existing URL structures, implement automated 301 redirects for modified paths, retain metadata hierarchy, and optimize Core Web Vitals so your organic rankings and backlink equity remain protected and grow post-migration.",
    },
    {
      q: "Where can Next.js applications be deployed and hosted?",
      a: "Next.js applications can be deployed effortlessly on Vercel's global edge network for automated CI/CD and edge caching, or containerized via Docker and deployed on AWS (ECS, Fargate, Amplify), DigitalOcean, Google Cloud, or custom Linux virtual servers.",
    },
    {
      q: "What is the difference between Pages Router and App Router in Next.js?",
      a: "The App Router (introduced in Next.js 13+) is the modern architectural standard for Next.js. It natively supports React Server Components (RSC), streaming HTML rendering with Suspense, nested layouts, and Server Actions. We build all new projects exclusively on the App Router to ensure maximum performance and long-term framework compatibility.",
    },
    {
      q: "Do you provide full source code ownership upon project completion?",
      a: "Yes, 100%. Upon project completion and deployment, DevZore transfers full intellectual property ownership and source code repositories to your company. You receive clean, fully documented TypeScript code with zero proprietary lock-in.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 6);

  /* =========================================================
     FORM HANDLERS
  ========================================================= */

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    trackLeadSubmission("nextjs_page_form", {
      service: formData.service,
      timeline: formData.timeline,
    });

    const subject = encodeURIComponent(
      `Next.js Development Enquiry - ${formData.name}`
    );

    const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Service: ${formData.service}
Timeline: ${formData.timeline || "Not specified"}

Project Details:
${formData.message}`
    );

    window.location.href = `mailto:hello@devzore.com?subject=${subject}&body=${body}`;
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* =========================================================
     SCHEMAS (JSON-LD)
  ========================================================= */

  const pageTitle = "Next.js Development Services | Custom SSR & Full-Stack Apps | DevZore";
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

  const SectionLabel = ({ children, light = false }) => (
    <div
      className={`flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase ${
        light ? "text-[#28c5d4]" : "text-[#07899a]"
      }`}
    >
      <span className="w-5 h-[2px] bg-[#0796A8]" />
      {children}
    </div>
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div
        className={`min-h-screen overflow-hidden antialiased transition-colors duration-300 ${pageBg}`}
        style={{
          fontFamily:
            'var(--font-sans, "DM Sans", "Segoe UI", Arial, sans-serif)',
        }}
      >
        {/* =====================================================
            HERO SECTION (DARK)
        ===================================================== */}

        <section
          aria-labelledby="nextjs-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div
            className="absolute inset-0 opacity-80 pointer-events-none"
            style={darkGrid}
          />

          <div className="absolute -top-32 left-[8%] w-[550px] h-[550px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-10 sm:pb-12">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-slate-300 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1bc6d5] animate-pulse" />
                  Next.js Development Company
                </div>

                <h1
                  id="nextjs-heading"
                  className="text-[34px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-[1.08] tracking-[-0.04em] font-bold text-white"
                >
                  Custom Next.js{" "}
                  <span className="text-[#20c5d6]">
                    Development Services.
                  </span>
                </h1>

                <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-slate-300 font-normal max-w-2xl">
                  DevZore engineers high-performance web applications using the Next.js App Router, React Server Components (RSC), and edge rendering. Sub-second load times, flawless Core Web Vitals, and architectures designed to scale.
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-7">
                  <a
                    href="#project-enquiry"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0796A8] hover:bg-[#12b1c4] text-white text-sm font-semibold transition-all shadow-[0_10px_30px_rgba(7,150,168,0.35)] hover:-translate-y-0.5"
                  >
                    <span>Get a Free Consultation</span>
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <span>WhatsApp Consultation</span>
                  </a>
                </div>

                {/* HERO STATS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                  {[
                    { label: "Architecture", value: "App Router & RSC" },
                    { label: "Performance", value: "95+ Core Vitals" },
                    { label: "Rendering", value: "Sub-Second TTFB" },
                    { label: "Code Handover", value: "100% Full IP" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-[17px] sm:text-[19px] font-bold text-white tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CODE / ARCHITECTURE PREVIEW CARD */}
              <div className="relative">
                <div className="rounded-2xl border border-white/[0.1] bg-[#071923]/90 backdrop-blur-md p-6 shadow-2xl">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      app/dashboard/page.tsx
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 font-mono text-xs text-slate-300">
                    <p className="text-cyan-400">// Next.js App Router + Server Action</p>
                    <p><span className="text-purple-400">export default async function</span> <span className="text-blue-300">DashboardPage</span>() &#123;</p>
                    <p className="pl-4 text-slate-400">// Direct database fetch with zero client JS</p>
                    <p className="pl-4"><span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> prisma.analytics.findMany();</p>
                    <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                    <p className="pl-8 text-emerald-300">&lt;<span className="text-blue-300">DashboardShell</span>&gt;</p>
                    <p className="pl-12 text-slate-200">&lt;<span className="text-blue-300">MetricsGrid</span> metrics=&#123;data&#125; /&gt;</p>
                    <p className="pl-12 text-slate-200">&lt;<span className="text-blue-300">ClientInteractiveIsland</span> /&gt;</p>
                    <p className="pl-8 text-emerald-300">&lt;/<span className="text-blue-300">DashboardShell</span>&gt;</p>
                    <p className="pl-4">);</p>
                    <p>&#125;</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 size={13} /> Zero Client Bundle Overhead
                    </span>
                    <span>Edge Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO SECTION (LIGHT)
        ===================================================== */}

        <section
          className={`relative py-12 md:py-16 ${
            d ? "bg-[#081b25]" : "bg-[#f8fafb]"
          }`}
          style={d ? darkGrid : lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-6 lg:gap-12">
              <div>
                <SectionLabel light={d}>Next.js Engineering</SectionLabel>

                <h2
                  className={`text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5 ${textMain}`}
                >
                  Beyond standard React.{" "}
                  <span className="text-[#078fa1]">
                    A modern full-stack web architecture.
                  </span>
                </h2>
              </div>

              <div>
                <p className={`text-[15px] sm:text-[16px] leading-relaxed ${textBody}`}>
                  Modern web applications demand both rich client-side interactivity and flawless search engine discoverability. Traditional single-page React applications force a trade-off: they execute completely inside the client's browser, leaving search engines with empty HTML containers and forcing visitors on mobile networks to download bloated JavaScript bundles before seeing any content.
                </p>

                <p
                  className={`text-[14px] sm:text-[14.5px] leading-relaxed mt-3.5 ${
                    d ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Next.js solves this at the architectural layer. By combining React Server Components with Incremental Static Regeneration (ISR) and global edge CDN caching, DevZore builds web platforms that serve fully populated HTML on the first byte while preserving dynamic client responsiveness. The result is superior Google rankings, sub-second load times, and an exceptional user experience that drives measurable business conversion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE BUILD (CLEAN WHITE GRID)
        ===================================================== */}

        <section
          id="nextjs-services"
          aria-labelledby="what-we-build-heading"
          className="py-12 md:py-16 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-8">
              <SectionLabel>What We Build</SectionLabel>

              <h2
                id="what-we-build-heading"
                className="text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold text-[#071923] mt-2.5"
              >
                Next.js web applications engineered for speed, scale, and conversion.
              </h2>

              <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed mt-3">
                From scalable cloud SaaS dashboards to high-volume headless e-commerce platforms, we engineer full-stack Next.js systems around real operational requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#0796A8]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#edf5f6] text-[#07899a] flex items-center justify-center">
                        {service.icon}
                      </div>
                      <span className="text-xs font-semibold text-slate-400">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-[#071923] text-[18px] sm:text-[19px] leading-snug font-semibold mt-4">
                      {service.title}
                    </h3>

                    <p className="text-[#374151] text-[14px] sm:text-[14.5px] leading-[1.6] mt-2.5">
                      {service.desc}
                    </p>

                    <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2">
                      {service.points.map((point) => (
                        <div key={point} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-[#0796A8] shrink-0" />
                          <span className="text-[13px] font-medium text-slate-700">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            DEVELOPMENT STANDARDS (DARK GRID)
        ===================================================== */}

        <section
          aria-labelledby="standards-heading"
          className="relative py-12 md:py-16 bg-[#071923] text-white overflow-hidden"
        >
          <div className="absolute inset-0 opacity-70 pointer-events-none" style={darkGrid} />
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px] pointer-events-none" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-8">
              <SectionLabel light>Next.js Standards</SectionLabel>

              <h2
                id="standards-heading"
                className="text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5"
              >
                Built to measurable engineering standards,{" "}
                <span className="text-[#25bfce]">
                  not generic templates.
                </span>
              </h2>

              <p className="text-slate-300 text-[14.5px] sm:text-[15px] leading-relaxed mt-2.5 max-w-2xl">
                Every Next.js project we ship is held to strict performance, security, and architectural benchmarks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {standards.map((item, idx) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[#25bfce] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-[16px] font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-[13.5px] leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BUSINESS IMPACT PILLARS (LIGHT)
        ===================================================== */}

        <section
          aria-labelledby="impact-heading"
          className="py-12 md:py-16 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-8">
              <SectionLabel>Business Impact</SectionLabel>

              <h2
                id="impact-heading"
                className="text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold text-[#071923] mt-2.5"
              >
                Why modern companies migrate their web platforms to Next.js.
              </h2>

              <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed mt-2.5">
                Next.js provides practical commercial advantages across organic acquisition, user engagement, and operational cost.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {businessTypes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0796A8]/40 hover:shadow-md transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#edf5f6] text-[#07899a] flex items-center justify-center mb-3">
                    {item.icon}
                  </div>

                  <h3 className="text-[#071923] text-[16px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-[#374151] text-[13.5px] leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            DIAGNOSTIC ASSESSMENT (CLEAN WHITE)
        ===================================================== */}

        <section
          aria-labelledby="diagnostic-heading"
          className="py-12 md:py-16 bg-white border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
              <div>
                <SectionLabel>Diagnostic Assessment</SectionLabel>

                <h2
                  id="diagnostic-heading"
                  className="text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold text-[#071923] mt-2.5"
                >
                  Is your current web stack holding your business back?
                </h2>

                <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed mt-3">
                  If your web platform exhibits any of these technical symptoms, upgrading to a modern Next.js App Router architecture eliminates the underlying bottlenecks.
                </p>

                <div className="mt-6">
                  <a
                    href="#project-enquiry"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0796A8] hover:bg-[#12b1c4] text-white text-sm font-semibold transition shadow-md"
                  >
                    <span>Request a Code & Architecture Audit</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {redesignProblems.map((prob, idx) => (
                  <div
                    key={prob}
                    className="rounded-xl border border-slate-200 bg-[#f8fafb] p-4 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </span>
                    <p className="text-[13.5px] leading-snug text-slate-700 font-medium">
                      {prob}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR PROCESS (DARK)
        ===================================================== */}

        <section
          aria-labelledby="process-heading"
          className="relative py-12 md:py-16 bg-[#071923] text-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-8">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="process-heading"
                className="text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5"
              >
                From initial architecture to production deployment.
              </h2>

              <p className="text-slate-300 text-[15px] sm:text-[16px] leading-relaxed mt-2.5 max-w-2xl">
                A structured, sprint-based delivery methodology ensuring technical precision and transparent milestones.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 hover:border-cyan-500/40 transition"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#25bfce] px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      Phase {step.number}
                    </span>
                  </div>

                  <h3 className="text-[16px] font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-[13.5px] leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            INDUSTRIES (LIGHT)
        ===================================================== */}

        <section
          aria-labelledby="industries-heading"
          className="py-12 md:py-16 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-8">
              <SectionLabel>Industries</SectionLabel>

              <h2
                id="industries-heading"
                className="text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold text-[#071923] mt-2.5"
              >
                Different businesses. Tailored Next.js architectures.
              </h2>

              <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed mt-2.5">
                We design and deploy Next.js platforms tailored specifically to the operational and traffic patterns of your industry.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {industries.map((ind) => (
                <div
                  key={ind}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-center gap-2.5 hover:border-[#0796A8]/50 transition"
                >
                  <span className="w-2 h-2 rounded-full bg-[#0796A8]" />
                  <span className="text-[13.5px] font-semibold text-[#071923]">
                    {ind}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY DEVZORE (CLEAN WHITE)
        ===================================================== */}

        <section
          aria-labelledby="why-devzore-heading"
          className="py-12 md:py-16 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-8">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="why-devzore-heading"
                className="text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold text-[#071923] mt-2.5"
              >
                Engineered around your business, not a generic template.
              </h2>

              <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed mt-2.5">
                We combine modern Next.js engineering with transparent communication and total source code ownership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyChooseUs.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-[#f8fafb] p-5 hover:border-[#0796A8]/40 hover:bg-white hover:shadow-sm transition"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#edf5f6] text-[#07899a] flex items-center justify-center mb-3">
                    {item.icon}
                  </div>

                  <h3 className="text-[16px] font-semibold text-[#071923]">
                    {item.title}
                  </h3>

                  <p className="text-[#374151] text-[13.5px] leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            RELATED SERVICES STRIP (LIGHT)
        ===================================================== */}

        <section
          aria-labelledby="related-services-heading"
          className="py-12 md:py-16 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-8">
              <SectionLabel>Related Services</SectionLabel>

              <h2
                id="related-services-heading"
                className="text-[26px] sm:text-[32px] font-semibold text-[#071923] mt-2"
              >
                Complementary engineering capabilities.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0796A8] hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#071923] group-hover:text-[#0796A8] transition">
                      {service.title}
                    </h3>

                    <p className="text-[#374151] text-[13px] leading-relaxed mt-2">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0796A8] mt-4 pt-3 border-t border-slate-100">
                    <span>Explore Service</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQS (CLEAN WHITE ACCORDION)
        ===================================================== */}

        <section
          aria-labelledby="faq-heading"
          className="py-12 md:py-16 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-8">
              <SectionLabel>FAQ</SectionLabel>

              <h2
                id="faq-heading"
                className="text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold text-[#071923] mt-2.5"
              >
                Frequently asked questions about Next.js development.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {displayedFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;

                return (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-slate-200 bg-[#f8fafb] overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-[#071923] text-[15px] hover:text-[#0796A8] transition"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="text-[#0796A8] shrink-0" />
                      ) : (
                        <ChevronDown size={18} className="text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-[14px] leading-relaxed text-[#374151] border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRICING BLOCK & START A PROJECT (DARK)
        ===================================================== */}

        <section
          id="project-enquiry"
          aria-labelledby="project-enquiry-heading"
          className="relative py-12 md:py-16 bg-[#071923] text-white overflow-hidden"
        >
          <div className="absolute inset-0 opacity-70 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-20 left-[5%] w-[450px] h-[450px] rounded-full bg-[#0796A8]/10 blur-[130px] pointer-events-none" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            {/* PRICING SCOPE */}
            <div className="mb-14">
              <PricingBlock serviceName="Next.js Development" />
            </div>

            {/* ENQUIRY FORM */}
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 pt-10 border-t border-white/[0.08]">
              <div>
                <SectionLabel light>Start a Project</SectionLabel>

                <h2
                  id="project-enquiry-heading"
                  className="text-[29px] sm:text-[34px] md:text-[42px] leading-[1.06] tracking-[-0.04em] font-semibold mt-2.5"
                >
                  Discuss your Next.js{" "}
                  <span className="text-[#25bfce]">
                    application today.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14.5px] sm:text-[15px] leading-relaxed mt-3 max-w-lg">
                  Share a few details about your web application or platform. Our senior engineering team will review the requirements and provide an architecture assessment within 24 hours.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Full-Stack Next.js SaaS & web platforms",
                    "Server Components & App Router migrations",
                    "Headless e-commerce & high-traffic platforms",
                    "Core Web Vitals & technical SEO optimization",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#19b9c8]/10 border border-[#19b9c8]/25 flex items-center justify-center">
                        <Check size={10} className="text-[#2ac6d4]" />
                      </div>
                      <span className="text-[13.5px] font-medium text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <p className="text-xs uppercase tracking-[0.18em] font-semibold text-slate-400">
                    Prefer direct communication?
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <a
                      href="mailto:hellodevzore@gmail.com"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#26c4d2]"
                    >
                      <Mail size={14} /> hellodevzore@gmail.com
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400"
                    >
                      WhatsApp Consultation →
                    </a>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.1] bg-[#0a202a]/90 p-5 sm:p-7 shadow-2xl"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="next-name"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="next-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="next-email"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="next-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="next-company"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="next-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="next-timeline"
                      className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Target Timeline
                    </label>
                    <select
                      id="next-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option value="">Select timeframe</option>
                      <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                      <option value="Standard (1-2 months)">Standard (1-2 months)</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="next-message"
                    className="block text-xs font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="next-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the web application, existing stack, features, and key objectives..."
                    className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0796A8] hover:bg-[#12b1c4] text-white text-sm font-semibold transition shadow-lg"
                >
                  <span>Submit Next.js Project Enquiry</span>
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CONTEXT BAR (DARK)
        ===================================================== */}

        <section className="bg-[#04111a] border-t border-white/[0.06] py-4">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <Link to="/allservices" className="hover:text-white transition">Services</Link>
                <span>/</span>
                <span className="text-white font-medium">Next.js Development</span>
              </div>

              <div>
                <span>Looking for React SPAs? </span>
                <Link to="/reactdevelopment" className="text-[#20c5d6] hover:underline font-semibold">
                  React Development →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
