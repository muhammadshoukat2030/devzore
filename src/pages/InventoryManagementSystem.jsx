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
import weldonPaintImg from "../assets/weldonpaint.webp";

export default function InventoryManagementSystem() {
  const [activeFaq, setActiveFaq] = useState(null);

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20custom%20inventory%20management%20system%20development.";

  const modules = [
    {
      icon: <Boxes size={20} />,
      number: "01",
      title: "Warehouse & Multi-Location Stock Control",
      desc: "Real-time stock balance tracking across central warehouses and retail counters with batch code tracking, formula allocations, and minimum threshold reorder alerts.",
      points: [
        "Live stock sync across multiple facilities",
        "Batch & formulation allocation logs",
        "Automated low-stock threshold alerts",
      ],
    },
    {
      icon: <Store size={20} />,
      number: "02",
      title: "Point-of-Sale (POS) & Counter Billing",
      desc: "High-speed counter invoicing supporting retail and wholesale price tiers, instant tax/discount calculations, barcode scanning, and thermal receipt printing.",
      points: [
        "Sub-second counter invoice creation",
        "Wholesale vs retail price matrix",
        "Thermal receipt printer compatibility",
      ],
    },
    {
      icon: <CreditCard size={20} />,
      number: "03",
      title: "Customer & Dealer Credit Ledgers",
      desc: "Audited account balances tracking customer credit limits, payment installment histories, outstanding receivables, and automated WhatsApp/PDF account statements.",
      points: [
        "Full double-entry transaction ledgers",
        "Configurable credit limits & warnings",
        "Instalment & payment reconciliation",
      ],
    },
    {
      icon: <Truck size={20} />,
      number: "04",
      title: "Supplier Purchasing & Intake Logs",
      desc: "Structured purchase order creation, vendor payment schedules, raw material receiving logs, and automated supplier balance reconciliation.",
      points: [
        "Vendor purchase order generation",
        "Receiving inspection & discrepancy logs",
        "Supplier payment schedule tracking",
      ],
    },
    {
      icon: <TrendingUp size={20} />,
      number: "05",
      title: "Financial Analytics & Daily Shift Audits",
      desc: "Daily cashier shift reconciliation, sales volume trends, product margin breakdowns, gross profit calculation, and automated balance sheet reporting.",
      points: [
        "Cashier register shift closing logs",
        "Daily gross profit margin metrics",
        "Dead-stock & fast-moving inventory analytics",
      ],
    },
    {
      icon: <ShieldCheck size={20} />,
      number: "06",
      title: "Role-Based Access Control & Audit Trails",
      desc: "Granular permissions separating store managers, counter cashiers, and warehouse dispatchers with tamper-proof activity logs on every bill edit or discount.",
      points: [
        "Cashier, Manager & Admin permission tiers",
        "Audit log on voids, discounts & edits",
        "Encrypted database backups & secure logins",
      ],
    },
  ];

  const industries = [
    { title: "Paint & Chemical Manufacturers", desc: "Formulation tracking, raw material batching, and dealer network credit accounts." },
    { title: "FMCG & Food Wholesalers", desc: "Perishable expiration dates, bulk case packing, and high-frequency warehouse turnover." },
    { title: "Retail Stores & Hardware Outlets", desc: "High-speed barcode checkout, customer credit ledgers, and multi-shelf stock sync." },
    { title: "Import & Export Trading Houses", desc: "Multi-currency purchase orders, container receiving logs, and supplier payment cycles." },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Operational Workflow Mapping",
      desc: "We analyze your exact physical stock flows, receiving procedures, billing rules, and cashier permissions to ensure software fits your business — not the other way around.",
    },
    {
      step: "02",
      title: "Database Architecture & Testing",
      desc: "We engineer relational/document schemas in MongoDB or PostgreSQL with transactional integrity, eliminating concurrency bugs when multiple cashiers bill simultaneously.",
    },
    {
      step: "03",
      title: "Full-Stack Custom Development",
      desc: "We build intuitive React interfaces for desktop terminals and tablets, coupled with robust Node.js APIs for instant search, filtering, and PDF generation.",
    },
    {
      step: "04",
      title: "Data Migration & Team Onboarding",
      desc: "We import your historical stock lists and customer balances, train your staff, deploy on high-availability cloud servers, and provide post-launch support.",
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
      q: "Do you provide source code handover and ongoing support?",
      a: "Yes. DevZore provides 100% source code handover upon project completion with full intellectual property rights, plus dedicated post-launch support and warranty maintenance.",
    },
  ];

  const pageTitle = "Inventory Management System Development Services | DevZore";
  const pageDescription =
    "Custom inventory management system and POS software development. Multi-warehouse stock tracking, billing, ledgers, and reporting built with MERN stack.";

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
        { "@type": "Offer", name: "Supplier Purchasing & Inventory Analytics" },
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

      <div className="min-h-screen bg-[#061923] text-white antialiased">
        {/* HERO */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[10%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[11px] font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <Package size={13} />
                Custom Operations Software
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                Custom <span className="text-[#1bbac8]">Inventory Management System</span> Development
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

              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Real-Time</div>
                  <div className="text-xs text-slate-400 mt-0.5">Multi-warehouse sync</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">MERN Stack</div>
                  <div className="text-xs text-slate-400 mt-0.5">High-speed POS billing</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">100% Owned</div>
                  <div className="text-xs text-slate-400 mt-0.5">Zero monthly user fees</div>
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
              Clear Answer for Business Leaders
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Is Custom Inventory Management System Development?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                <strong>Inventory Management System Development</strong> is the process of creating bespoke software to automate and synchronize physical stock tracking, purchase orders, counter point-of-sale billing, and dealer financial ledgers across multiple facilities in real time.
              </p>
              <p>
                <strong>Who It Is For:</strong> Manufacturers, wholesale distributors, and retail chains that deal with high SKU volumes, custom pricing tiers, batch formulas, or credit ledgers that off-the-shelf software fails to handle cleanly.
              </p>
            </div>
          </div>
        </section>

        {/* TARGET INDUSTRIES */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Industries Served</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Built for High-Volume Physical Operations</h2>
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

        {/* MODULES / SYSTEM CAPABILITIES */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">System Architecture</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Core Modules Engineered in Your Custom System
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
                <ul className="space-y-2 pt-4 border-t border-white/[0.06] text-[11px] text-slate-300">
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

        {/* PROOF BLOCK: WELDON PAINTS CASE STUDY */}
        <section className="py-14 sm:py-18 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#071923] shadow-2xl">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3">
                  <CheckCircle2 size={14} className="text-[#1bbac8]" />
                  Verified Case Study Proof
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Weldon Paints: Custom Inventory & POS Management System
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Weldon Paints replaced fragmented manual paper registers and counter calculations with a centralized, high-availability MERN web platform. We delivered warehouse stock control with batch tracking, POS billing, dealer credit ledgers, and financial analytics.
                </p>
                <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-[#1bbac8] font-bold">✓</span>
                    <span>Sub-second counter invoicing with thermal receipt printer integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1bbac8] font-bold">✓</span>
                    <span>Real-time warehouse reconciliation across multiple store branches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1bbac8] font-bold">✓</span>
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

              <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#04111a]">
                <img
                  src={weldonPaintImg}
                  alt="Weldon Paints Inventory and POS management platform preview"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How We Build Your Inventory Platform</h2>
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
              Ready to Upgrade Your Inventory & POS Operations?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-8">
              Discuss your warehouse workflow, SKU volume, and billing requirements with our engineering team.
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
