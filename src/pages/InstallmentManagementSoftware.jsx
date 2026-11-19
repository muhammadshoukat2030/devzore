import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Database,
  ExternalLink,
  FileCheck,
  FileText,
  Layers3,
  Lock,
  Plus,
  RefreshCw,
  Scale,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";

export default function InstallmentManagementSoftware() {
  const [activeFaq, setActiveFaq] = useState(null);

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20custom%20installment%20management%20software.";

  const modules = [
    {
      icon: <UserCheck size={20} />,
      number: "01",
      title: "Borrower Identity & Guarantor Dossier Engine",
      desc: "Structured borrower profiling with national ID / CNIC verification, employment records, residence verification, and dual guarantor documentation to mitigate default risks.",
      points: [
        "CNIC & national identity verification",
        "Dual guarantor profile & document archive",
        "Borrower credit history & asset validation",
      ],
    },
    {
      icon: <Calendar size={20} />,
      number: "02",
      title: "Flexible Amortization & Plan Generator",
      desc: "Automated installment calculation supporting custom down payments, repayment tenures (3, 6, 12, 24 months), markup/profit rates, and automated penalty rules.",
      points: [
        "Configurable down payment & markup tiers",
        "Automated monthly repayment schedules",
        "Grace period & penalty surcharge automation",
      ],
    },
    {
      icon: <ShieldAlert size={20} />,
      number: "03",
      title: "Daily Collection & Overdue Alert Dashboard",
      desc: "Visual daily calendar displaying payments due today, active grace periods, delinquent accounts, and priority collection follow-up queues for recovery staff.",
      points: [
        "Daily due vs collected recovery calendar",
        "Aging overdue accounts (30/60/90+ days)",
        "Automated WhatsApp & SMS payment reminders",
      ],
    },
    {
      icon: <Scale size={20} />,
      number: "04",
      title: "Multi-Investor Capital & Yield Engine",
      desc: "Multi-investor ledgers tracking invested principal, monthly profit distributions, bad-debt deduction rules, and net portfolio yield calculations.",
      points: [
        "Individual investor capital accounts",
        "Automated monthly profit share payouts",
        "Recovery-based return allocations",
      ],
    },
    {
      icon: <CreditCard size={20} />,
      number: "05",
      title: "Payment Receipting & Balance Passbooks",
      desc: "Instant payment entry with printable installment receipts, digital SMS confirmations, and tamper-proof customer balance ledgers eliminating disputed records.",
      points: [
        "Thermal & laser printed payment vouchers",
        "Digital installment passbook for clients",
        "Audited transaction logs on every collection",
      ],
    },
    {
      icon: <TrendingUp size={20} />,
      number: "06",
      title: "Portfolio Risk & Collection Analytics",
      desc: "Comprehensive financial intelligence tracking overall recovery efficiency, default probability metrics, active capital at risk, and monthly revenue trends.",
      points: [
        "Recovery rate vs delinquency ratios",
        "Capital at risk & portfolio aging analysis",
        "Executive cash-flow forecast reports",
      ],
    },
  ];

  const industries = [
    { title: "Consumer Electronics & Appliances", desc: "Smartphones, laptops, refrigerators, and AC installment plans with fast customer KYC." },
    { title: "Motorcycle & Auto Dealerships", desc: "Vehicle financing, asset collateral records, registration tracking, and monthly collection queues." },
    { title: "Furniture & Home Goods", desc: "Long-term retail installment plans, home verification records, and flexible down payments." },
    { title: "Private Consumer Finance", desc: "Micro-loans, investor capital pooling, recovery agents, and automated monthly profit distribution." },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Financial Model & Rules Workshop",
      desc: "We analyze your specific markup calculations, down payment percentages, default penalties, and investor distribution policies to configure the exact financial logic.",
    },
    {
      step: "02",
      title: "Secure Ledger & Database Design",
      desc: "We engineer strict double-entry database schemas in PostgreSQL or MongoDB with transactional locking to prevent duplicate payment entries or corrupted balances.",
    },
    {
      step: "03",
      title: "Full-Stack System Engineering",
      desc: "We develop intuitive staff portals for customer onboarding, loan approval workflows, collection queues, and investor transparency portals.",
    },
    {
      step: "04",
      title: "Legacy Data Migration & Go-Live",
      desc: "We import your active loans, historical passbook records, and customer balances, train your staff, and deploy on high-availability cloud servers.",
    },
  ];

  const faqs = [
    {
      q: "What is custom installment management software?",
      a: "Installment management software is specialized financial software that automates the lifecycle of credit sales and installment plans — from customer KYC and amortization schedules to daily collection queues, investor profit allocations, and overdue loan recovery.",
    },
    {
      q: "Can the software manage profit shares for private investors?",
      a: "Yes. Our systems feature dedicated multi-investor ledgers. You can track capital contributed by private investors, allocate specific customer loan contracts to specific investors, and automatically calculate monthly profit yields after deducting recovery expenses.",
    },
    {
      q: "How does the system help reduce installment defaults?",
      a: "By enforcing dual-guarantor documentation, generating automated daily collection queues for recovery staff, and dispatching SMS/WhatsApp reminders before payment due dates. The dashboard also alerts managers to missed payments before they slip into bad debt.",
    },
    {
      q: "Can we print customer payment receipts and passbooks?",
      a: "Yes. The software supports instant receipt generation compatible with standard thermal receipt printers (80mm) as well as A4/A5 voucher formats, complete with QR-code verification.",
    },
    {
      q: "Do you provide source code handover and ongoing support?",
      a: "Yes. DevZore delivers 100% source code handover upon deployment with full intellectual property rights, plus dedicated post-launch support and warranty maintenance.",
    },
  ];

  const pageTitle = "Installment Management Software Development | DevZore";
  const pageDescription =
    "Custom installment management software for consumer credit, monthly plan amortization, guarantor dossiers, investor shares, and overdue collections.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Installment Management Software Development",
    serviceType: "Consumer Credit & Installment Sales Software Development",
    provider: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    areaServed: "Worldwide",
    description: pageDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Installment Software Capabilities",
      itemListElement: [
        { "@type": "Offer", name: "Borrower KYC & Guarantor Dossiers" },
        { "@type": "Offer", name: "Amortization & Schedule Generation" },
        { "@type": "Offer", name: "Daily Collection & Overdue Dashboards" },
        { "@type": "Offer", name: "Multi-Investor Capital & Yield Engine" },
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
      { "@type": "ListItem", position: 3, name: "Installment Management Software", item: "https://devzore.com/installment-management-software" },
    ],
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical="/installment-management-software"
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
                <Scale size={13} />
                Financial Credit Software
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                Custom <span className="text-[#1bbac8]">Installment Management Software</span> Development
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Eliminate spreadsheet errors and reduce default risk. We engineer custom consumer installment software with borrower KYC verification, automated amortization schedules, daily collection queues, investor profit sharing, and tamper-proof ledgers.
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
                  Request Technical Scope
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Automated</div>
                  <div className="text-xs text-slate-400 mt-0.5">Amortization schedules</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">KYC & Guarantors</div>
                  <div className="text-xs text-slate-400 mt-0.5">Verified borrower dossiers</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Investor Accounts</div>
                  <div className="text-xs text-slate-400 mt-0.5">Automated profit splits</div>
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
              Clear Answer for Credit Businesses
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Is Installment Management Software and Who Is It For?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                <strong>Installment Management Software</strong> is dedicated credit and loan tracking software that automates installment calculations, borrower verification, collection follow-ups, and investor capital accounting for retail businesses selling products on deferred payments.
              </p>
              <p>
                <strong>Who It Is For:</strong> Retailers of consumer electronics, motorcycles, furniture, and home appliances, as well as private consumer-finance firms that need structured customer dossiers and real-time overdue alerts to stop payment defaults.
              </p>
            </div>
          </div>
        </section>

        {/* TARGET INDUSTRIES */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Industries Served</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Built for Installment Retailers & Finance Teams</h2>
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
              End-to-End Modules Engineered in Your Custom Platform
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

        {/* PROOF BLOCK: INSTALLMENT MANAGEMENT CASE STUDY */}
        <section className="py-14 sm:py-18 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#071923] shadow-2xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3">
                <CheckCircle2 size={14} className="text-[#1bbac8]" />
                Verified Case Study Proof
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Installment Management Platform: Case Study
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Our client automated their consumer installment financing lifecycle — from customer onboarding and credit risk assessment to daily collection follow-ups and investor yield payouts. Staff receive daily automated collection queues, eliminating delinquent payment oversights and disputed ledger balances.
              </p>
              <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-[#1bbac8] font-bold">✓</span>
                  <span>Customer identity & verified guarantor dossiers with document archiving</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#1bbac8] font-bold">✓</span>
                  <span>Automated daily collection dashboard alerting staff to due and overdue accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#1bbac8] font-bold">✓</span>
                  <span>Multi-investor capital ledgers tracking monthly profit shares and recovery deductions</span>
                </div>
              </div>
              <Link
                to="/projects/installment-management"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0796A8] hover:bg-[#1BBAC8] text-white text-xs font-bold transition shadow-md shadow-[#0796A8]/30"
              >
                <span>Read Full Installment Management Case Study</span>
                <ExternalLink size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Implementation</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How We Build Your Installment Platform</h2>
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
              Ready to Automate Your Installment Sales & Collections?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-8">
              Discuss your amortization models, borrower verification workflow, and collection staff management with our engineering team.
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
