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
  Package,
  Receipt,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  TrendingUp,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";
import ProjectBriefCTA from "../components/ProjectBriefCTA";
import weldonPaintImg from "../assets/weldonpaint.webp";

export default function InventoryManagementSystem() {
  const [activeFaq, setActiveFaq] = useState(null);

  // Background grids for rhythmic section alternating
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

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20custom%20inventory%20management%20system%20development.";

  const modules = [
    {
      icon: <Boxes size={20} />,
      number: "01",
      title: "Warehouse & Multi-Location Stock Control",
      desc: "Real-time stock balance tracking across central warehouses and retail counters with inter-branch transfers, batch code tracking, formula allocations, and minimum threshold reorder alerts.",
      points: [
        "Live stock sync across multiple facilities & retail counters",
        "Inter-branch transfer manifests with receiving confirmations",
        "Batch & formulation allocation logs with automated low-stock alerts",
      ],
    },
    {
      icon: <Store size={20} />,
      number: "02",
      title: "Point-of-Sale (POS) & Counter Billing",
      desc: "High-speed counter invoicing supporting retail and wholesale price tiers, instant tax/discount calculations, barcode scanning, and thermal receipt printing.",
      points: [
        "Sub-second barcode scanning and counter invoice generation",
        "Wholesale vs retail price tiers with custom client discount rules",
        "80mm & 58mm thermal receipt printer driver integration",
      ],
    },
    {
      icon: <CreditCard size={20} />,
      number: "03",
      title: "Customer & Dealer Credit Ledgers",
      desc: "Audited account balances tracking customer credit limits, payment installment histories, outstanding receivables, and automated WhatsApp/PDF account statements.",
      points: [
        "Full double-entry transaction ledgers with timestamp audits",
        "Configurable credit limits, overdue grace periods & warnings",
        "Automated PDF and WhatsApp account statement dispatching",
      ],
    },
    {
      icon: <Truck size={20} />,
      number: "04",
      title: "Supplier Purchasing & Landed Cost Tracking",
      desc: "Structured purchase order (PO) creation, vendor payment schedules, Goods Received Notes (GRN), and automated landed cost calculations across shipments.",
      points: [
        "Vendor purchase order generation with approval workflows",
        "Receiving inspection, return to vendor, and discrepancy logs",
        "Landed cost apportionment (freight, duties, storage fees)",
      ],
    },
    {
      icon: <TrendingUp size={20} />,
      number: "05",
      title: "Financial Analytics & Daily Shift Audits",
      desc: "Daily cashier shift reconciliation, sales volume trends, product margin breakdowns, gross profit calculation, and automated balance sheet reporting.",
      points: [
        "Cashier register shift closing logs with cash drawer audit",
        "Cost of Goods Sold (COGS) vs real-time gross margin metrics",
        "Dead-stock, shrinkage & fast-moving inventory analytics",
      ],
    },
    {
      icon: <ShieldCheck size={20} />,
      number: "06",
      title: "Role-Based Access Control & Audit Trails",
      desc: "Granular permissions separating store managers, counter cashiers, and warehouse dispatchers with tamper-proof activity logs on every bill edit or discount.",
      points: [
        "Cashier, Store Manager, and System Admin permission tiers",
        "Immutable audit logs on bill cancellations, voids & discounts",
        "Encrypted database backups and multi-terminal session security",
      ],
    },
  ];

  const industries = [
    {
      title: "Paint & Chemical Manufacturers",
      desc: "Formulation tracking, raw material batching, base-paint blending ratios, and dealer network credit ledgers.",
    },
    {
      title: "FMCG & Food Wholesalers",
      desc: "Perishable expiration date alerts, bulk case-packing splits, and high-frequency warehouse pallet turnover.",
    },
    {
      title: "Retail Chains & Hardware Outlets",
      desc: "High-speed barcode checkout, customer credit ledgers, multi-shelf stock synchronization, and return logistics.",
    },
    {
      title: "Import & Export Trading Houses",
      desc: "Multi-currency purchase orders, container receiving manifests, customs duty tracking, and supplier payment cycles.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Operational Workflow Mapping",
      desc: "We analyze your physical stock flows, receiving procedures, billing rules, and cashier permissions to ensure software fits your business — not the other way around.",
    },
    {
      step: "02",
      title: "Database Architecture & Schema Design",
      desc: "We engineer relational/document schemas in MongoDB or PostgreSQL with transactional integrity, eliminating concurrency bugs when multiple cashiers bill simultaneously.",
    },
    {
      step: "03",
      title: "Full-Stack Custom Engineering",
      desc: "We build intuitive React interfaces for desktop terminals and tablets, coupled with robust Node.js APIs for instant search, filtering, and thermal receipt printing.",
    },
    {
      step: "04",
      title: "Data Migration & Team Onboarding",
      desc: "We import your historical stock lists, SKU catalogs, and customer balances, train your staff, deploy on high-availability cloud servers, and provide warranty support.",
    },
  ];

  const faqs = [
    {
      q: "How long does custom inventory management system development take?",
      a: "A focused core inventory and POS platform typically takes 4 to 8 weeks to develop, test, and deploy. Complex enterprise systems with multi-branch synchronization and extensive reporting may take 8 to 12 weeks. We deliver working milestone demos throughout the build.",
    },
    {
      q: "Can the software handle multiple warehouses and separate retail stores?",
      a: "Yes. Our systems are engineered from day one for multi-location businesses. You can transfer inventory between central warehouses and retail branches, view consolidated stock balances, and restrict cashiers to their local store data.",
    },
    {
      q: "Why build a custom inventory system instead of buying off-the-shelf software?",
      a: "Generic software (like basic QuickBooks or Odoo modules) often charges expensive recurring per-user license fees, lacks specific industry workflows (such as custom paint formulas or dealer credit rules), and locks your data. With custom software from DevZore, you own 100% of the source code, pay zero user seat licenses, and get a system tailored precisely to your operational workflow.",
    },
    {
      q: "What happens if our retail store internet connection is disrupted?",
      a: "We can design local caching and offline-first queue mechanisms so counter cashiers can continue generating offline invoices, which automatically reconcile and sync with the central database the moment connectivity is restored.",
    },
    {
      q: "Can the system integrate with barcode scanners and thermal receipt printers?",
      a: "Yes. We support standard USB and Bluetooth barcode scanners (1D & 2D QR codes) along with direct printing to standard 80mm and 58mm POS thermal receipt printers without needing third-party middleware.",
    },
    {
      q: "Do you provide source code handover and ongoing support?",
      a: "Yes. DevZore provides 100% source code handover upon project completion with full intellectual property rights, plus dedicated post-launch support and warranty maintenance.",
    },
  ];

  const pageTitle = "Inventory Management System & POS Software | DevZore";
  const pageDescription =
    "Custom inventory management system development for manufacturers, distributors and retail chains. Real-time stock tracking, multi-warehouse and POS sync.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Inventory Management System Development",
    serviceType: "Custom ERP & Inventory Software Engineering",
    provider: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    areaServed: "Worldwide",
    description: pageDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Inventory Management Modules",
      itemListElement: [
        { "@type": "Offer", name: "Multi-Location Warehouse Management" },
        { "@type": "Offer", name: "Point-of-Sale (POS) & Billing Systems" },
        { "@type": "Offer", name: "Dealer Credit & Customer Ledgers" },
        { "@type": "Offer", name: "Supplier Purchasing & Landed Cost Tracking" },
        { "@type": "Offer", name: "Financial Analytics & Daily Shift Audits" },
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
      { "@type": "ListItem", position: 3, name: "Inventory Management System", item: "https://devzore.com/inventory-management-system" },
    ],
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical="/inventory-management-system"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0796A8]/20 selection:text-[#071923]">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-12 sm:pb-16 bg-[#04111a] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[10%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 right-[5%] w-[420px] h-[420px] rounded-full bg-[#20bdcb]/8 blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[13px] font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <Package size={13} />
                Custom Operations & ERP Software
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                Custom <span className="text-[#22bdca]">Inventory Management System</span> & POS Software Development
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Eliminate manual registers, stockouts, and ledger discrepancies. We engineer custom web-based inventory management systems, multi-location stock tracking platforms, and POS software tailored to your wholesale or retail operations.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] text-xs sm:text-sm font-bold transition shadow-lg shadow-[#25D366]/20"
                >
                  <span>Discuss Your System on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="#system-form"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-white text-xs sm:text-sm font-semibold transition"
                >
                  Request Technical Quotation
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Real-Time</div>
                  <div className="text-xs text-slate-400 mt-0.5">Multi-warehouse sync</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">Sub-Second POS</div>
                  <div className="text-xs text-slate-400 mt-0.5">Barcode counter billing</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Batch & Formula</div>
                  <div className="text-xs text-slate-400 mt-0.5">Lot & recipe tracking</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">100% Owned</div>
                  <div className="text-xs text-slate-400 mt-0.5">Zero monthly seat fees</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: AEO ANSWER BLOCK (LIGHT SLATE WITH SUBTLE GRID) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#f8fafb] border-b border-slate-200" style={lightGrid}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />
              <SectionLabel>Clear Answer for Business Leaders</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] mb-4 tracking-tight">
                What Is Custom Inventory Management System Development and <span className="text-[#0796A8]">Why Build Bespoke?</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong>Inventory Management System Development</strong> is the engineering of dedicated operational software to automate and synchronize physical stock balances, purchase orders (PO), Goods Received Notes (GRN), counter point-of-sale (POS) billing, and dealer double-entry ledgers across multiple facilities in real time.
                </p>
                <p>
                  <strong>Why Build Bespoke:</strong> Generic off-the-shelf software (like basic QuickBooks or rigid ERP modules) charges recurring per-user licensing fees, restricts data exports, and fails to accommodate specialized industry workflows — such as custom paint chemical formulations, tiered dealer discount schemes, or offline counter billing during internet disruptions. An owned system gives you 100% source code ownership and adapts perfectly to your real operational floor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: SYSTEM MODULES (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>System Architecture</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                Core Modules Engineered in <span className="text-[#0796A8]">Your Custom System</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600">
                End-to-end capabilities engineered to eliminate stockouts, prevent shrinkage, and streamline warehouse fulfillment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((m, idx) => (
                <article
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)] hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf4f5] text-[#07899a] group-hover:bg-[#071923] group-hover:text-[#28c5d4] transition-colors">
                        {m.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">{m.number}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#071923] mb-2">{m.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">{m.desc}</p>
                  </div>
                  <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                    {m.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={13} className="text-[#07899a] shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: PROOF BLOCK (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative py-14 sm:py-18 bg-[#071923] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="p-6 sm:p-10 rounded-3xl border border-white/10 bg-[#092230] shadow-2xl">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <div>
                  <SectionLabel light>Verified Case Study Proof</SectionLabel>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                    Weldon Paints: <span className="text-[#25bfce]">Custom Inventory & POS Platform</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    Weldon Paints replaced fragmented manual paper registers and counter calculations with a centralized, high-availability MERN web platform. We delivered warehouse stock control with batch tracking, POS billing, dealer credit ledgers, and financial analytics.
                  </p>
                  <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#22bdca]" />
                      <span>Sub-second counter invoicing with thermal receipt printer integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#22bdca]" />
                      <span>Real-time warehouse reconciliation across multiple store branches</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#22bdca]" />
                      <span>Audited dealer credit accounts with automatic payment histories</span>
                    </div>
                  </div>
                  <Link
                    to="/projects/weldon-paints"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0796A8] hover:bg-[#1BBAC8] text-white text-xs font-bold transition shadow-md shadow-[#0796A8]/30"
                  >
                    <span>Read Full Weldon Paints Case Study</span>
                    <ExternalLink size={13} />
                  </Link>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#04111a] shadow-inner">
                  <img
                    src={weldonPaintImg}
                    alt="Weldon Paints Inventory and POS management platform preview"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: INDUSTRIES SERVED (LIGHT SLATE WITH SUBTLE GRID) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#f7f9fa] border-b border-slate-200" style={lightGrid}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel>Industries Served</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                Built for <span className="text-[#0796A8]">High-Volume Physical Operations</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Custom inventory workflows adapted to diverse manufacturing floors, distribution channels, and retail networks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#0796A8]/50 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <h3 className="text-base font-bold text-[#071923] mb-2">{ind.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: IMPLEMENTATION PROCESS (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative py-12 sm:py-16 bg-[#071923] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel light>Implementation</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                How We Build Your <span className="text-[#25bfce]">Inventory Platform</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                A structured engineering approach from physical stock audit to staff training and cloud go-live.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {processSteps.map((p, idx) => (
                <article
                  key={idx}
                  className="p-6 bg-[#071923] hover:bg-[#0a202a] transition-colors flex flex-col justify-between min-h-[180px]"
                >
                  <div>
                    <div className="text-2xl font-black text-[#20becd]/60 font-mono mb-3">{p.step}</div>
                    <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: FAQ (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                Frequently Asked <span className="text-[#0796A8]">Questions</span>
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 bg-[#f8fafb] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-[#071923] hover:text-[#0796A8] transition"
                  >
                    <span>{faq.q}</span>
                    {activeFaq === idx ? (
                      <ChevronUp size={18} className="text-[#0796A8] shrink-0 ml-3" />
                    ) : (
                      <ChevronDown size={18} className="text-slate-400 shrink-0 ml-3" />
                    )}
                  </button>
                  {activeFaq === idx && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: CTA FORM (DARK NAVY ANCHOR) */}
        {/* ========================================================================= */}
        <section id="system-form" className="py-16 px-4 sm:px-6 bg-[#06151d] text-white">
          <div className="max-w-5xl mx-auto">
            <ProjectBriefCTA
              serviceContext="Inventory Management & POS System"
              title="Ready to Upgrade Your Inventory & POS Operations?"
              subtitle="Discuss your warehouse workflow, SKU volume, and billing requirements with our engineering team."
            />
          </div>
        </section>
      </div>
    </>
  );
}
