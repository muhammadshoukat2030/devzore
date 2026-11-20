import React from "react";
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
} from "lucide-react";
import SEO from "../components/SEO";
import ProjectBriefCTA from "../components/ProjectBriefCTA";
import { trackWhatsAppClick } from "../utils/analytics";

const qatarServices = [
  {
    icon: <Compass size={22} className="text-[#1bbac8]" />,
    title: "Tourism & Safari Booking Systems",
    desc: "Custom booking engines tailored for Qatar tour operators. Real-time slot availability, desert safari packages, automated WhatsApp voucher dispatch, and multi-currency checkout.",
    caseStudy: "/projects/desert-safari-qatar",
    caseTitle: "Desert Safari Qatar Case Study",
  },
  {
    icon: <Building2 size={22} className="text-[#1bbac8]" />,
    title: "Logistics & Distribution ERP",
    desc: "Operational software for GCC trading and distribution firms. Route tracking, customer credit balances, automated delivery receipts, and warehouse batch control.",
    caseStudy: "/projects/frostyops",
    caseTitle: "FrostyOps Distribution Case Study",
  },
  {
    icon: <Code2 size={22} className="text-[#1bbac8]" />,
    title: "High-Performance Next.js & MERN Web Apps",
    desc: "Fast, bilingual (English & Arabic) web applications built for commercial reach. Sub-second load times optimized for Qatar mobile users and search engine visibility.",
    caseStudy: "/projects/weldon-paints",
    caseTitle: "Weldon Paints Case Study",
  },
  {
    icon: <Layers size={22} className="text-[#1bbac8]" />,
    title: "Commission-Free Food & Retail Ordering",
    desc: "Direct online storefronts that bypass aggregator commissions. Instant kitchen display queues, modifier add-on engines, and automated order notifications.",
    caseStudy: "/projects/sarab-express",
    caseTitle: "Sarab Express Case Study",
  },
];

const gccAdvantages = [
  {
    title: "2-Hour Time Zone Alignment",
    desc: "Pakistan is at UTC+5 while Qatar and Saudi Arabia are at UTC+3. Our full working day overlaps with your business hours in Doha, Riyadh, and Dubai for real-time collaboration.",
  },
  {
    title: "Proven Delivery for Qatar Brands",
    desc: "We have delivered custom tourism and reservation software for Desert Safari Qatar and Gulf Dunes Tourism, with deep understanding of local hospitality and payment requirements.",
  },
  {
    title: "60% Lower Development Overhead",
    desc: "Receive senior-level software architecture and modern full-stack engineering at transparent milestone pricing, without the inflated overhead of local Doha agencies.",
  },
  {
    title: "100% IP & Source Code Handover",
    desc: "You retain full ownership of your GitHub repository, architecture documentation, and production databases upon milestone completion. Zero vendor lock-in.",
  },
];

const qatarFaqs = [
  {
    q: "How does DevZore collaborate with businesses in Qatar?",
    a: "We operate with full time-zone overlap (Pakistan is UTC+5, Qatar is UTC+3 — just 2 hours difference). We communicate via dedicated WhatsApp groups, Slack, and Google Meet, providing weekly sprint demos and continuous GitHub visibility.",
  },
  {
    q: "Can you build Arabic and English bilingual software?",
    a: "Yes. We engineer multi-language architectures with Right-to-Left (RTL) layout support, dynamic language switching, and localized currency formatting for QAR, SAR, AED, and USD.",
  },
  {
    q: "What payment gateways can you integrate for Qatar?",
    a: "We integrate Stripe, Tap Payments, Checkout.com, Moyasar, and Qatar National Bank (QNB) payment gateways alongside direct cash-on-delivery and bank transfer workflows.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do. 100% of the custom source code, documentation, and database schemas are transferred directly to your organization's repository upon project milestone sign-off.",
  },
];

export default function QatarSoftwareDevelopment() {
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
        "Custom web applications, SaaS platforms, and reservation systems engineered for businesses in Qatar and the GCC.",
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

  return (
    <>
      <SEO
        title="Software Development Company in Qatar | DevZore"
        description="Custom software development for businesses in Qatar & the GCC. High-performance web apps, tour booking engines, SaaS & ERP systems with local Qatar delivery."
        canonical="/qatar-software-development"
        schema={schema}
        keywords="software development company qatar, web development qatar, saas development qatar, custom software doha, tour booking system qatar"
      />

      <div className="bg-[#030b12] text-white min-h-screen antialiased">
        {/* HERO SECTION */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-5">
                <Globe size={13} />
                <span>Qatar & GCC Engineering Partner</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Software Development Company for{" "}
                <span className="text-[#1bbac8]">Businesses in Qatar</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                DevZore engineers bespoke web applications, SaaS platforms, tour booking engines, and operational ERP systems for companies across Doha, Qatar, and the wider GCC. Delivered by senior full-stack developers with real Gulf market experience.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/923348004300?text=Hi%20DevZore,%20I%20am%20reaching%20out%20from%20Qatar%20to%20discuss%20a%20software%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("qatar_hero")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#06101a] font-bold text-sm shadow-[0_10px_30px_rgba(37,211,102,0.25)] transition-all"
                >
                  <MessageSquare size={17} />
                  <span>Chat with an Engineer on WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:border-cyan-400/60 bg-white/[0.04] text-white font-semibold text-sm transition"
                >
                  <span>Request a Qatar Project Quote</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Quick facts strip */}
              <div className="mt-10 pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
                <div>
                  <div className="text-white font-bold text-sm">2h Timezone</div>
                  <div className="text-slate-400 mt-0.5">Real-time Doha overlap</div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Qatar Clients</div>
                  <div className="text-slate-400 mt-0.5">Verified delivered work</div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">100% IP Handover</div>
                  <div className="text-slate-400 mt-0.5">Full GitHub ownership</div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">2–4h Response</div>
                  <div className="text-slate-400 mt-0.5">Direct senior engineers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES FOR QATAR & GCC */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1bbac8]">
                Custom Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                What We Build for Qatar & GCC Businesses
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Proven software architectures designed around regional market requirements, payment workflows, and mobile customer behavior.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {qatarServices.map((svc, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        {svc.icon}
                      </div>
                      <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{svc.title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{svc.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <Link
                      to={svc.caseStudy}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition"
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

        {/* VERIFIED QATAR CASE STUDIES */}
        <section className="py-16 sm:py-20 bg-[#02090e] border-b border-white/[0.08]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1bbac8]">
                Proven Qatar Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Delivered Software in Qatar & GCC
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Real production software systems built and deployed for verified tourism, retail, and food operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* CASE 1: Desert Safari Qatar */}
              <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-white/[0.03] space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/20">
                    Travel & Hospitality · Qatar
                  </span>
                  <span>Delivered Remote</span>
                </div>
                <h3 className="text-xl font-bold text-white">Desert Safari Qatar</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Engineered an end-to-end safari excursion booking platform allowing international tourists to book dune bashing, desert camps, and dhow cruises with real-time slot availability, instant voucher generation, and automated WhatsApp driver dispatch.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2 py-0.5 rounded text-xs bg-white/[0.05] text-slate-300">React</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-white/[0.05] text-slate-300">Node.js</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-white/[0.05] text-slate-300">WhatsApp API</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-white/[0.05] text-slate-300">Multi-Currency</span>
                </div>
                <div className="pt-4 border-t border-white/[0.08]">
                  <Link
                    to="/projects/desert-safari-qatar"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* CASE 2: Gulf Dunes Tourism */}
              <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-white/[0.03] space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/20">
                    Tourism & Booking · Qatar
                  </span>
                  <span>Delivered Remote</span>
                </div>
                <h3 className="text-xl font-bold text-white">Gulf Dunes Tourism</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Developed an online reservation and agency portal for safari and marine tours in Qatar. Features integrated payment processing, booking rescheduling workflows, and comprehensive sales reporting for operational leads.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2 py-0.5 rounded text-xs bg-white/[0.05] text-slate-300">Next.js</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-white/[0.05] text-slate-300">Express API</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-white/[0.05] text-slate-300">MongoDB</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-white/[0.05] text-slate-300">Booking Engine</span>
                </div>
                <div className="pt-4 border-t border-white/[0.08]">
                  <Link
                    to="/projects/gulf-dunes-tourism"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY WORK WITH DEVZORE */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1bbac8]">
                Regional Partnership
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Why Qatar Companies Partner with DevZore
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {gccAdvantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] space-y-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold flex items-center justify-center text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white">{adv.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QATAR FAQS */}
        <section className="py-16 sm:py-20 bg-[#02090e] border-b border-white/[0.08]">
          <div className="max-w-[840px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1bbac8]">
                Clear Answers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1.5">
                Frequently Asked Questions — Qatar & GCC
              </h2>
            </div>

            <div className="space-y-4">
              {qatarFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]"
                >
                  <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONVERSION PROJECT BRIEF CTA */}
        <ProjectBriefCTA
          title="Start Your Software Project in Qatar"
          subtitle="Tell us what you want to build. Our senior engineers will prepare a technical approach, milestones, and transparent cost breakdown."
          serviceContext="Qatar Software Development"
        />
      </div>
    </>
  );
}
