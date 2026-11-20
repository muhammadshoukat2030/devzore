import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Database,
  ExternalLink,
  FileText,
  Layers3,
  Lock,
  MapPin,
  Package,
  Plus,
  RefreshCw,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  TrendingUp,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";
import ProjectBriefCTA from "../components/ProjectBriefCTA";
import frostyOpsImg from "../assets/food.webp";

export default function DistributionManagementSystem() {
  const [activeFaq, setActiveFaq] = useState(null);

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20distribution%20management%20system%20development.";

  const modules = [
    {
      icon: <Truck size={20} />,
      number: "01",
      title: "Fleet Route Logistics & Delivery Runs",
      desc: "Daily route creation, driver dispatch manifests, delivery sequence planning, and real-time trip milestone logs for refrigerated and dry cargo vehicles.",
      points: [
        "Structured daily delivery run manifests",
        "Driver stop sequences & delivery confirmation",
        "Vehicle fuel & per-kilometer trip expense logs",
      ],
    },
    {
      icon: <Users size={20} />,
      number: "02",
      title: "Field Salesman Order Booking App",
      desc: "Mobile-responsive interface enabling field sales reps to take retail store orders on-site, check live warehouse stock availability, and enforce customer credit caps.",
      points: [
        "Real-time retail shop order capture",
        "Instant live stock balance lookup",
        "Retailer credit limit enforcement",
      ],
    },
    {
      icon: <Boxes size={20} />,
      number: "03",
      title: "Warehouse Inventory & Batch Tracking",
      desc: "Multi-depot stock control with expiration date monitoring, batch allocation, returns intake, and cold-storage shrinkage reconciliation.",
      points: [
        "Batch and expiry date tracking",
        "Driver return & damaged goods reconciliation",
        "Central warehouse to depot stock transfers",
      ],
    },
    {
      icon: <CreditCard size={20} />,
      number: "04",
      title: "Retailer Accounts & Payment Recovery",
      desc: "Customer credit ledgers tracking Cash-on-Delivery (COD), partial payments, aging receivables, and salesman cash collection handovers.",
      points: [
        "Salesman daily cash handover audits",
        "Retailer overdue aging debt reports",
        "Digital payment receipt generation",
      ],
    },
    {
      icon: <Store size={20} />,
      number: "05",
      title: "Supplier Purchasing & Vendor Invoicing",
      desc: "Supplier purchase order management, intake receiving logs, freight cost allocations, and vendor payment schedule reconciliation.",
      points: [
        "Raw material and stock purchase orders",
        "Freight, toll, and distributor cost tracking",
        "Automated vendor payment balance sheets",
      ],
    },
    {
      icon: <TrendingUp size={20} />,
      number: "06",
      title: "Distribution Analytics & Route Margin Reporting",
      desc: "Executive dashboards tracking daily distribution revenue, route profitability, individual salesman recovery efficiency, and dead-stock alerts.",
      points: [
        "Per-route net margin calculations",
        "Salesman recovery performance rankings",
        "Automated daily operational summaries",
      ],
    },
  ];

  const industries = [
    { title: "Ice Cream & Frozen Foods", desc: "Cold-chain temperature sensitivity, rapid route delivery, and vehicle refrigeration logs." },
    { title: "Dairy, Beverages & FMCG", desc: "High-frequency daily retail replenishment, return crates, and tight expiry management." },
    { title: "Pharmaceutical Distributors", desc: "Batch tracking, regulatory documentation, licensed chemist account balances." },
    { title: "Wholesale Food Networks", desc: "Bulk packaging, multi-depot transfers, and high-volume field order booking." },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Route & Fleet Workflow Analysis",
      desc: "We analyze your delivery routes, salesman booking habits, vehicle capacities, and retailer payment practices to structure an efficient operational system.",
    },
    {
      step: "02",
      title: "Database & Concurrency Architecture",
      desc: "We design robust schemas that support simultaneous order booking from dozens of field salesmen without database locking or stock allocation discrepancies.",
    },
    {
      step: "03",
      title: "MERN Stack Development",
      desc: "We engineer fast mobile-friendly interfaces for salesmen and drivers, paired with a comprehensive desktop operations dashboard for dispatch managers.",
    },
    {
      step: "04",
      title: "Depot Deployment & Staff Training",
      desc: "We migrate your historical retailer accounts, train dispatchers and field agents, deploy on secure cloud infrastructure, and provide post-launch support.",
    },
  ];

  const faqs = [
    {
      q: "What is a Distribution Management System (DMS)?",
      a: "A Distribution Management System is end-to-end software that oversees the entire flow of goods from central warehouse intake to field salesman order booking, delivery truck dispatch, retailer invoicing, and daily cash reconciliation.",
    },
    {
      q: "Can field salesmen book orders on smartphones while visiting shops?",
      a: "Yes. Our systems include responsive, lightweight mobile interfaces designed specifically for field agents to view real-time inventory, record retail orders, check store credit, and submit bookings instantly.",
    },
    {
      q: "How does the system handle delivery returns and damaged stock?",
      a: "We engineer dedicated return workflows where drivers log rejected or damaged crates upon return to the warehouse. Stock is automatically marked for inspection before re-entering active inventory, and retailer invoices are adjusted accordingly.",
    },
    {
      q: "Can the system calculate profit per delivery route?",
      a: "Yes. By factoring in product cost, fuel expenses, driver allowances, and gross billings per run, the dashboard generates clear net profitability metrics for every individual route and vehicle.",
    },
    {
      q: "Do you provide source code handover and ongoing support?",
      a: "Yes. DevZore delivers 100% source code handover upon deployment with full intellectual property rights, plus dedicated post-launch support and warranty maintenance.",
    },
  ];

  const pageTitle = "Distribution Management System Development | DevZore";
  const pageDescription =
    "Custom distribution management software and ERP for wholesale logistics, field order booking, refrigerated fleet routing, and stock reconciliation.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Distribution Management System Development",
    serviceType: "Wholesale Logistics & Distribution ERP Development",
    provider: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    areaServed: "Worldwide",
    description: pageDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "DMS Capabilities",
      itemListElement: [
        { "@type": "Offer", name: "Fleet Route Logistics & Dispatch" },
        { "@type": "Offer", name: "Field Salesman Order Booking" },
        { "@type": "Offer", name: "Warehouse Inventory & Batch Control" },
        { "@type": "Offer", name: "Retailer Accounts & Cash Handover" },
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
      { "@type": "ListItem", position: 3, name: "Distribution Management System", item: "https://devzore.com/distribution-management-system" },
    ],
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical="/distribution-management-system"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-[#061923] text-white antialiased">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-10 sm:pb-12 border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[10%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[13px] font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <Truck size={13} />
                Logistics & Supply Chain ERP
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                Custom <span className="text-[#1bbac8]">Distribution Management System</span> Development
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Empower your wholesale distribution operations with custom software. We engineer platforms connecting field sales reps, depot warehouses, fleet delivery routes, retailer credit ledgers, and cash recovery audits into one real-time system.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] text-xs sm:text-sm font-bold transition shadow-lg shadow-[#25D366]/20"
                >
                  <span>Discuss Your Logistics on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="#system-form"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-white text-xs sm:text-sm font-semibold transition"
                >
                  Request Technical Scope
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Route Planning</div>
                  <div className="text-xs text-slate-400 mt-0.5">Fleet delivery dispatch</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">Field Booking</div>
                  <div className="text-xs text-slate-400 mt-0.5">Salesman mobile portal</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Cash Audits</div>
                  <div className="text-xs text-slate-400 mt-0.5">Automated recovery logs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AEO ANSWER BLOCK */}
        <section className="py-14 sm:py-18 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#08222f] to-[#061923] p-6 sm:p-9">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3">
              <Sparkles size={14} className="text-[#1bbac8]" />
              Clear Answer for Logistics Operators
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Is a Distribution Management System and Who Needs One?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                A <strong>Distribution Management System (DMS)</strong> is specialized software that centralizes wholesale supply chain workflows: receiving supplier stock, managing warehouse batch allocations, enabling field salesmen to take store orders, dispatching delivery trucks, and tracking retailer credit balances.
              </p>
              <p>
                <strong>Who Needs One:</strong> Wholesale distributors, FMCG distributors, beverage suppliers, and cold-chain fleets that suffer from misplaced paper manifests, undocumented retailer debts, and uncoordinated delivery routes.
              </p>
            </div>
          </div>
        </section>

        {/* TARGET INDUSTRIES */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Industries Served</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Built for High-Frequency Wholesale Distribution</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => (
              <div key={i} className="p-5 rounded-2xl border border-white/[0.08] bg-[#071923]">
                <h3 className="text-base font-bold text-white mb-2">{ind.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SYSTEM MODULES */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">System Architecture</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              End-to-End Modules Engineered in Your Custom DMS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#071923] hover:border-cyan-500/30 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20">
                      {m.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">{m.number}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">{m.desc}</p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-white/[0.06] text-[13px] text-slate-300">
                  {m.points.map((p, i) => (
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

        {/* PROOF BLOCK: FROSTYOPS CASE STUDY */}
        <section className="py-14 sm:py-18 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#071923] shadow-2xl">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3">
                  <CheckCircle2 size={14} className="text-[#1bbac8]" />
                  Verified Case Study Proof
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  FrostyOps: Logistics & Distribution ERP Platform
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  FrostyOps replaces fragmented phone calls and paper delivery manifests with a centralized MERN ERP system. It manages cold-chain vehicle routing, warehouse stock intake, field salesman retail ordering, customer credit, and driver trip reconciliation.
                </p>
                <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-[#1bbac8] font-bold">✓</span>
                    <span>Refrigerated fleet route dispatch with per-route net margin analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1bbac8] font-bold">✓</span>
                    <span>Field sales agent order booking with instant live warehouse stock sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1bbac8] font-bold">✓</span>
                    <span>Retailer account credit ledgers and daily cashier recovery handovers</span>
                  </div>
                </div>
                <Link
                  to="/projects/frostyops"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0796A8] hover:bg-[#1BBAC8] text-white text-xs font-bold transition shadow-md shadow-[#0796A8]/30"
                >
                  <span>Read Full FrostyOps Case Study</span>
                  <ExternalLink size={13} />
                </Link>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#04111a]">
                <img
                  src={frostyOpsImg}
                  alt="FrostyOps distribution management ERP interface preview"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Implementation</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How We Build Your Distribution System</h2>
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
        <section id="system-form" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/[0.08]">
          <ProjectBriefCTA
            serviceContext="Distribution Management System (DMS)"
            title="Ready to Modernize Your Wholesale Distribution Network?"
            subtitle="Discuss your fleet size, field booking requirements, and warehouse operations with our engineering team."
          />
        </section>
      </div>
    </>
  );
}
