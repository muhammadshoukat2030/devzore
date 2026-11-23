import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Code2,
  Calendar,
  Compass,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
  Building2,
  FileText,
  ChevronDown,
  ExternalLink,
  Lock,
  Server,
  Zap,
  Check,
  HelpCircle,
  CreditCard,
  Languages,
  Truck,
  Utensils,
  BarChart3,
} from "lucide-react";
import SEO from "../components/SEO";
import ProjectBriefCTA from "../components/ProjectBriefCTA";
import { trackWhatsAppClick } from "../utils/analytics";

const qatarServices = [
  {
    icon: <Compass size={24} className="text-[#0796A8]" />,
    title: "Tourism & Safari Booking Platforms",
    desc: "Custom booking engines tailored for Qatar tour operators and excursion agencies. Real-time slot availability, desert safari packages, automated WhatsApp voucher dispatch, and multi-currency checkout.",
    caseStudy: "/projects/desert-safari-qatar",
    caseTitle: "Desert Safari Qatar Case Study",
    tags: ["React / Node.js", "WhatsApp Webhook", "Multi-Currency (QAR/USD)"],
  },
  {
    icon: <Languages size={24} className="text-[#0796A8]" />,
    title: "Bilingual Arabic & English Web Applications",
    desc: "Production-ready Right-to-Left (RTL) architectures with clean typography (Cairo, Readex Pro). Sub-1.5-second load times optimized for Qatar 5G mobile networks and organic GCC search visibility.",
    caseStudy: "/web-development",
    caseTitle: "Custom Web Development",
    tags: ["Arabic RTL UI", "Next.js / Tailwind", "Core Web Vitals 95+"],
  },
  {
    icon: <Truck size={24} className="text-[#0796A8]" />,
    title: "Route Logistics & Cold-Chain ERP",
    desc: "Operational business software for GCC trading houses, wholesalers, and FMCG distributors. Salesman route manifests, evening van return audits, retailer credit accounts, and thermal delivery receipts.",
    caseStudy: "/projects/frostyops",
    caseTitle: "FrostyOps Distribution Case Study",
    tags: ["Van Route Dispatch", "Return Audits", "Retail Credit Ledgers"],
  },
  {
    icon: <Utensils size={24} className="text-[#0796A8]" />,
    title: "Commission-Free Food & Retail Ordering",
    desc: "Direct digital storefronts allowing Qatar restaurants and specialty retailers to avoid 25%–35% aggregator commission fees. Instant kitchen order queues, meal customizers, and automated WhatsApp receipts.",
    caseStudy: "/projects/sarab-express",
    caseTitle: "Sarab Express Ordering Case Study",
    tags: ["Zero Commissions", "Kitchen Display Queue", "Instant WhatsApp Orders"],
  },
  {
    icon: <Building2 size={24} className="text-[#0796A8]" />,
    title: "B2B Wholesale & Multi-Branch Inventory",
    desc: "Multi-location inventory tracking, batch lot numbers, paint tinting & custom formula allocation, supplier purchasing logs, and counter POS billing tailored for physical stores and warehouses.",
    caseStudy: "/projects/weldon-paints",
    caseTitle: "Weldon Paints Inventory Case Study",
    tags: ["Multi-Warehouse Control", "Batch Numbers", "POS Counter Billing"],
  },
  {
    icon: <BarChart3 size={24} className="text-[#0796A8]" />,
    title: "Enterprise SaaS & Management Dashboards",
    desc: "Secure multi-tenant cloud software, role-based access control (RBAC), executive KPI analytics, automated financial reconciliation, and exportable audit logs built for rapid regional scale.",
    caseStudy: "/saasdevelopment",
    caseTitle: "SaaS Platform Engineering",
    tags: ["Multi-Tenant SaaS", "Executive Analytics", "Role-Based Security"],
  },
];

const gccAdvantages = [
  {
    title: "2-Hour Time Zone Alignment",
    desc: "Pakistan is at UTC+5 while Qatar and Saudi Arabia are at UTC+3. Our full working day overlaps with your business hours in Doha, Lusail, and Riyadh for instant daily collaboration and sprint reviews.",
    metric: "100% Workday Sync",
  },
  {
    title: "Proven Delivery for Qatar Brands",
    desc: "We have delivered custom tourism and reservation platforms for Desert Safari Qatar and Gulf Dunes Tourism, with deep firsthand understanding of regional hospitality, logistics, and payment needs.",
    metric: "Verified Gulf Track Record",
  },
  {
    title: "60% Lower Development Overhead",
    desc: "Receive senior-level software architecture, production code standards, and agile sprint delivery at transparent milestone pricing, without the inflated overhead of local Doha agencies.",
    metric: "Transparent Milestone Billing",
  },
  {
    title: "100% IP & Source Code Handover",
    desc: "You retain full ownership of your GitHub repositories, architecture documentation, Docker configurations, and production database schemas upon milestone sign-off. Zero vendor lock-in.",
    metric: "Total Code Ownership",
  },
];

const qatarFaqs = [
  {
    q: "How does DevZore collaborate with businesses in Qatar?",
    a: "We operate with full time-zone alignment (Pakistan is UTC+5, Qatar is UTC+3 — just 2 hours difference). We communicate through dedicated WhatsApp groups, Slack channels, and Google Meet video calls during standard Qatar working hours (9:00 AM – 6:00 PM AST), providing bi-weekly sprint demos and continuous GitHub visibility.",
  },
  {
    q: "Can you build Arabic and English bilingual software with RTL layout?",
    a: "Yes. We engineer complete bilingual architectures featuring Right-to-Left (RTL) layout switching, native Arabic web typography (Cairo, Readex Pro, Amiri), localized numeric formats, and multi-currency checkouts supporting QAR, SAR, AED, and USD seamlessly.",
  },
  {
    q: "What payment gateways can you integrate for Qatar businesses?",
    a: "We integrate leading regional and international payment gateways, including Tap Payments, Moyasar, Checkout.com, Qatar National Bank (QNB) e-Gateway, Stripe, and Apple Pay for Qatar, alongside direct cash-on-delivery and corporate IBAN wire transfer reconciliation workflows.",
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs) before discussing project requirements?",
    a: "Yes. We regularly execute standard mutual Non-Disclosure Agreements (NDAs) with founders, CTOs, and enterprise directors in Qatar before reviewing proprietary business workflows, architecture specifications, or commercial models.",
  },
  {
    q: "Who owns the code and intellectual property upon project completion?",
    a: "You do. 100% of the custom source code, documentation, Docker deployment files, and database schemas are transferred directly to your organization's private GitHub repository upon project milestone sign-off. DevZore charges zero recurring licensing fees.",
  },
  {
    q: "What post-launch support and maintenance do you offer in Qatar?",
    a: "Every delivered project includes a comprehensive 30-day post-launch bug fixing warranty. We also offer dedicated monthly SLA maintenance agreements covering 24/7 uptime monitoring, server security updates, database backups, and ongoing feature development.",
  },
];

export default function QatarSoftwareDevelopment() {
  const [openFaq, setOpenFaq] = useState(0);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Software Development Services in Qatar",
      provider: {
        "@type": "Organization",
        name: "DevZore",
        url: "https://devzore.com/",
      },
      areaServed: [
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      description:
        "Custom software development for businesses in Qatar & the GCC. High-performance web apps, tour booking engines, SaaS & ERP systems with local Qatar delivery.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://devzore.com/" },
        { "@type": "ListItem", position: 2, name: "Qatar Software Development", item: "https://devzore.com/qatar-software-development" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: qatarFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  const lightGrid = {
    backgroundImage:
      "linear-gradient(rgba(7,25,35,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,25,35,0.04) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  const SectionLabel = ({ children, light = false }) => (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
        light
          ? "bg-white/[0.08] text-[#22bdca] border border-white/[0.12]"
          : "bg-[#071923]/5 text-[#0796A8] border border-[#0796A8]/20"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#18bdcb]" />
      {children}
    </div>
  );

  return (
    <>
      <SEO
        title="Software Development Company in Qatar | DevZore"
        description="Custom software development for businesses in Qatar & the GCC. High-performance web apps, tour booking engines, SaaS & ERP systems with local Qatar delivery."
        canonical="/qatar-software-development"
        schema={schema}
        keywords="software development company qatar, web development qatar, saas development qatar, custom software doha, tour booking system qatar, logistics erp software qatar, arabic web application development"
      />

      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0796A8]/20 selection:text-[#071923]">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SECTION (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-14 sm:pb-20 bg-[#04111a] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          {/* Ambient Lighting Gradients */}
          <div className="absolute -top-32 left-[10%] w-[550px] h-[550px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 right-[5%] w-[420px] h-[420px] rounded-full bg-[#8A1538]/12 blur-[150px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-3xl">
              <SectionLabel light>Qatar & GCC Engineering Partner · Doha & Regional GCC Delivery</SectionLabel>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-5">
                Software Development Company for{" "}
                <span className="text-[#22bdca]">Businesses in Qatar</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                DevZore engineers bespoke web applications, enterprise SaaS platforms, tour booking engines, and route distribution ERP systems for commercial enterprises across Doha, Lusail, Al Rayyan, and the GCC. Delivered by senior full-stack developers with real Gulf market experience, 2-hour timezone alignment, and 100% intellectual property handover.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/923348004300?text=Hi%20DevZore,%20I%20am%20reaching%20out%20from%20Qatar%20to%20discuss%20a%20software%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("qatar_hero")}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#06101a] font-bold text-sm px-6 py-3.5 shadow-[0_10px_30px_rgba(37,211,102,0.25)] transition-all"
                >
                  <MessageSquare size={17} />
                  <span>Discuss Project on WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition backdrop-blur-sm"
                >
                  <span>Request a Qatar Project Quote</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* QUICK FACTS STRIP */}
              <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl font-extrabold text-[#22bdca]">2 Hours</div>
                  <div className="text-xs text-slate-400 mt-1">Doha Timezone Overlap</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">180+</div>
                  <div className="text-xs text-slate-400 mt-1">Delivered Solutions</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#22bdca]">100%</div>
                  <div className="text-xs text-slate-400 mt-1">Source Code IP Handover</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">&lt; 2 Hours</div>
                  <div className="text-xs text-slate-400 mt-1">Direct Engineer Response</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: AEO MARKET OVERVIEW & DIRECT ANSWER (LIGHT SLATE) */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-20 bg-[#f8fafb] border-b border-slate-200">
          <div className="absolute inset-0 pointer-events-none" style={lightGrid} />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-8">
              <SectionLabel>AEO Direct Overview · Qatar Market Engineering</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071923] tracking-tight">
                Why Do Qatar & GCC Enterprises <span className="text-[#0796A8]">Partner with DevZore?</span>
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-medium">
                For commercial enterprises, tour operators, and high-growth founders in Doha, Lusail, and the wider GCC, DevZore provides a dedicated remote engineering alternative to high-priced local agencies and unreliable freelancer networks. Operating with full business-day overlap (UTC+5 / UTC+3, only 2 hours difference), our senior full-stack engineers design, build, and deploy production-grade software with transparent milestone pricing, bilingual English/Arabic readiness, and 100% intellectual property transfer.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0796A8] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#071923]">Milestone-Based Billing</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Eliminate 3x to 5x local agency markups with predictable milestone payments tied to tested deliverables.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0796A8] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#071923]">Direct Senior Engineers</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Collaborate directly with lead software engineers and architects on WhatsApp, without account manager filters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0796A8] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#071923]">Zero Vendor Lock-In</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      You own 100% of your GitHub repository, environment configurations, and database schemas from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: TAILORED CAPABILITIES FOR QATAR (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-12">
              <SectionLabel>Tailored Regional Systems</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071923] tracking-tight">
                Bespoke Software Systems Engineered for <span className="text-[#0796A8]">Qatar Enterprises</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Custom software architectures designed around regional GCC business workflows, bilingual interfaces, local payment gateways, and high mobile usage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qatarServices.map((svc, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-[#fcfdfe] hover:bg-white p-6 transition-all duration-300 hover:border-[#0796A8]/50 hover:shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#071923] text-[#22bdca] flex items-center justify-center shadow-sm">
                        {svc.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#071923] group-hover:text-[#0796A8] transition">
                      {svc.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {svc.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                      {svc.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      to={svc.caseStudy}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0796A8] hover:text-[#071923] transition"
                    >
                      <span>Explore {svc.caseTitle}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: VERIFIED QATAR CASE STUDIES (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-20 bg-[#071923] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-12">
              <SectionLabel light>Verified Gulf Delivery Track Record</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Delivered Production Software in <span className="text-[#22bdca]">Qatar & the GCC</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                Real software systems engineered and deployed for live tourism, excursion booking, and commercial business operations in Doha, Qatar.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CASE 1: Desert Safari Qatar */}
              <div className="rounded-2xl border border-white/10 bg-[#09202c]/90 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Travel & Hospitality · Doha, Qatar
                    </span>
                    <a
                      href="https://www.bestdesertsafariqatar.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                    Desert Safari Qatar
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    Engineered an end-to-end safari excursion booking platform allowing international tourists to reserve dune bashing, desert camps, and dhow cruises with real-time slot availability, instant voucher generation, and automated WhatsApp driver dispatch.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-[#18bdcb] shrink-0" />
                      <span>One-tap WhatsApp reservation trigger with pre-populated excursion details</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-[#18bdcb] shrink-0" />
                      <span>Dynamic Land Cruiser and desert camp guest capacity allocation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-[#18bdcb] shrink-0" />
                      <span>Technical SEO &amp; Schema.org TouristTrip markup ranking in Doha</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {["React", "Node.js", "Express", "MongoDB", "WhatsApp API", "Technical SEO"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-slate-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/projects/desert-safari-qatar"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22bdca] hover:text-white transition"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                  <span className="text-[11px] text-slate-400 font-medium">Delivered Remotely</span>
                </div>
              </div>

              {/* CASE 2: Gulf Dunes Tourism */}
              <div className="rounded-2xl border border-white/10 bg-[#09202c]/90 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Tourism & Excursions · Doha, Qatar
                    </span>
                    <a
                      href="https://www.gulfdunestourism.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                    Gulf Dunes Tourism
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    Developed a comprehensive tourism booking platform featuring desert safaris, Arabian dhow cruises, and Doha city sightseeing excursions. Engineered for mobile roaming tourists with sub-2-second page speeds worldwide.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-[#18bdcb] shrink-0" />
                      <span>Categorized excursion architecture eliminating tourist booking friction</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-[#18bdcb] shrink-0" />
                      <span>Dedicated corporate group retreat and destination management booking funnel</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-[#18bdcb] shrink-0" />
                      <span>Interactive Doha cruise port and hotel pickup location guides</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {["Next.js", "Express API", "MongoDB", "Cloudflare CDN", "Tailwind CSS"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-slate-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/projects/gulf-dunes-tourism"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22bdca] hover:text-white transition"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                  <span className="text-[11px] text-slate-400 font-medium">Delivered Remotely</span>
                </div>
              </div>
            </div>

            {/* Cross-Regional Banner */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">Looking for Enterprise Distribution or Wholesale Systems in the GCC?</p>
                <p className="text-xs text-slate-300 mt-0.5">Explore our custom operational ERPs deployed for trading, warehousing, and logistics.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/distribution-management-system"
                  className="text-xs font-bold text-[#22bdca] hover:underline"
                >
                  Distribution ERP &rarr;
                </Link>
                <span className="text-slate-600">|</span>
                <Link
                  to="/inventory-management-system"
                  className="text-xs font-bold text-[#22bdca] hover:underline"
                >
                  Inventory Systems &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: STRATEGIC REGIONAL ADVANTAGES (LIGHT SLATE) */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-20 bg-[#f7f9fa] border-b border-slate-200">
          <div className="absolute inset-0 pointer-events-none" style={lightGrid} />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-12">
              <SectionLabel>Strategic Regional Partnership</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071923] tracking-tight">
                Why Qatari Founders, CTOs &amp; Owners <span className="text-[#0796A8]">Choose DevZore</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Strategic operational advantages tailored specifically to operating across the Qatar and GCC economic environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gccAdvantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#0796A8]/40 hover:shadow-md transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#071923] text-[#22bdca] font-extrabold flex items-center justify-center text-xs mb-4 shadow-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-[#071923] mb-2">{adv.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{adv.desc}</p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#0796A8] uppercase tracking-wider">
                    {adv.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: SECURITY, PERFORMANCE & QATAR COMPLIANCE (DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-20 bg-[#071923] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-12">
              <SectionLabel light>Engineering Standards &amp; Compliance</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Engineered for Scalability, Security &amp; <span className="text-[#22bdca]">National Vision 2030</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                Future-proof software engineered to meet Qatar&apos;s rigorous data security, digital infrastructure, and performance benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#09202c]/80 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#22bdca] flex items-center justify-center mb-4">
                  <Zap size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">GCC Edge Delivery &amp; Sub-Second Latency</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Deployed with Cloudflare edge acceleration across regional data centers in Doha and Dubai. Static and dynamic assets cache at the edge, guaranteeing sub-1.5s loads on Ooredoo and Vodafone 5G networks.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#09202c]/80 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#22bdca] flex items-center justify-center mb-4">
                  <Lock size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Enterprise Security &amp; OWASP Compliance</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Strict AES-256 encryption at rest, TLS 1.3 in transit, role-based access privilege isolation, sanitized SQL/NoSQL queries, and alignment with Qatar National Cyber Security Agency (NCSA) best practices.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#09202c]/80 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#22bdca] flex items-center justify-center mb-4">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Agile Sprints &amp; 30-Day Post-Launch SLA</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Bi-weekly milestone demonstrations with live staging environments, automated integration tests, and an included 30-day post-launch warranty with optional SLA server maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: TECHNICAL & COMMERCIAL FAQS (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-5 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>Technical &amp; Commercial FAQs</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071923] tracking-tight">
                Frequently Asked Questions — <span className="text-[#0796A8]">Qatar &amp; GCC</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Clear answers regarding communication protocols, Arabic RTL localization, regional payment gateways, and code ownership.
              </p>
            </div>

            <div className="space-y-4">
              {qatarFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-[#fbfcfc] overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-[#071923] pr-2">
                        {faq.q}
                      </span>
                      <span className={`w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#0796A8] text-white" : ""}`}>
                        <ChevronDown size={16} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: CONVERSION PROJECT BRIEF CTA (DARK NAVY ANCHOR) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-[#06151d] text-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <ProjectBriefCTA
              title="Start Your Software Project in Qatar &amp; the GCC"
              subtitle="Tell us about your business application requirements. Our senior software engineers will prepare a technical scope, milestone plan, and transparent cost breakdown."
              serviceContext="Qatar Software Development"
            />
          </div>
        </section>
      </div>
    </>
  );
}
