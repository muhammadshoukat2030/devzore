import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgePercent,
  Boxes,
  Building2,
  Calculator,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  CreditCard,
  Database,
  ExternalLink,
  FileCheck,
  FileText,
  Layers3,
  Lock,
  Receipt,
  RefreshCw,
  Scale,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";
import ProjectBriefCTA from "../components/ProjectBriefCTA";

export default function InstallmentManagementSoftware() {
  const [activeFaq, setActiveFaq] = useState(null);

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20custom%20financial%20management%20and%20installment%20credit%20software.";

  const modules = [
    {
      icon: <UserCheck size={20} />,
      number: "01",
      title: "Borrower KYC, Credit Underwriting & Guarantor Vault",
      desc: "Structured borrower profiling with national identity verification (CNIC/Passport), employment verification, residential utility audits, and dual guarantor archives to minimize lending risk before contract signing.",
      points: [
        "National ID / CNIC verification & biometric document scans",
        "Dual guarantor dossiers with contact, asset & employer proof",
        "Borrower historical repayment scoring & credit limit gating",
        "Digital contract archiving with signature and thumbprint scans",
      ],
    },
    {
      icon: <Calculator size={20} />,
      number: "02",
      title: "Automated Amortization, EMI & Profit Calculator",
      desc: "Dynamic repayment schedule generators supporting configurable down payments, flexible tenures (3, 6, 12, 18, 24, 36 months), flat or reducing profit markups, and Shariah-compliant Murabaha installment calculations.",
      points: [
        "Configurable down payment percentages & profit markups",
        "Daily, weekly, and monthly equated installment schedules",
        "Automated grace period buffers & late surcharge accruals",
        "Instant early settlement discount & prepayment calculations",
      ],
    },
    {
      icon: <ShieldAlert size={20} />,
      number: "03",
      title: "Smart Daily Recovery & Collection Queue Dashboard",
      desc: "Visual recovery operations command center displaying payments due today, active grace periods, delinquent accounts categorized by aging tiers (30/60/90+ days), and automated recovery staff task queues.",
      points: [
        "Daily recovery calendar: Due Today vs Collected vs Overdue",
        "Delinquency aging buckets (30, 60, 90+ days) with priority flags",
        "Automated WhatsApp & SMS payment due notifications",
        "Promise-to-Pay (PTP) scheduling with agent callback alerts",
      ],
    },
    {
      icon: <Scale size={20} />,
      number: "04",
      title: "Multi-Investor Capital Management & Profit Distribution",
      desc: "Segregated investor ledgers tracking contributed principal pools, allocating active loan portfolios to specific financiers, and automatically computing monthly net yield payouts after recovery expense deductions.",
      points: [
        "Individual investor capital accounts with equity tracking",
        "Contract-to-investor portfolio matching & risk spreading",
        "Automated monthly profit share payouts & yield statements",
        "Bad-debt reserve allocations & recovery-based payouts",
      ],
    },
    {
      icon: <Receipt size={20} />,
      number: "05",
      title: "Tamper-Proof Double-Entry Accounting & Digital Passbooks",
      desc: "Double-entry bookkeeping architecture ensuring every installment payment updates cash-in-hand, principal balance, and profit ledgers simultaneously, backed by instant printed vouchers and customer SMS receipts.",
      points: [
        "Thermal receipt printer support (80mm) & laser A4/A5 vouchers",
        "Digital installment passbook with balance breakdown and QR verification",
        "Immutable audit trails recording user, timestamp & terminal IP",
        "Cashier shift closing reconciliation with cash drawer audits",
      ],
    },
    {
      icon: <Smartphone size={20} />,
      number: "06",
      title: "Field Agent Mobile Collection & Cashier Reconciliation",
      desc: "Mobile-optimized portals for field recovery officers to record on-site doorstep collections, issue immediate SMS receipts, and reconcile collected funds with central cashier desks at shift end.",
      points: [
        "Mobile-responsive agent interface with offline collection caching",
        "Instant digital receipt dispatch via SMS & WhatsApp to payer",
        "Daily cash handover verification between field agents and cashiers",
        "Geo-stamped collection confirmation and visit outcome logs",
      ],
    },
    {
      icon: <TrendingUp size={20} />,
      number: "07",
      title: "Portfolio Risk Intelligence & Executive Cash-Flow Analytics",
      desc: "Executive business intelligence delivering real-time insight into capital at risk, Non-Performing Loan (NPL) ratios, collection efficiency indices, branch performance comparisons, and 12-month forward cash-flow forecasts.",
      points: [
        "Real-time Non-Performing Loan (NPL) & default probability metrics",
        "Total active capital deployed vs gross monthly recovery yield",
        "Staff recovery performance & collection efficiency scores",
        "12-month predictive cash-flow forecasting & liquidity reports",
      ],
    },
    {
      icon: <FileCheck size={20} />,
      number: "08",
      title: "Legal Notice Automation & Default Enforcement Hub",
      desc: "Structured recovery escalation workflows that automatically generate formal legal notices, dispute documentation, and guarantor liability warnings when accounts exceed agreed delinquency thresholds.",
      points: [
        "Automated legal demand letters with customized legal phrasing",
        "Disputed account arbitration dossiers & audit trail exports",
        "Guarantor liability escalation notices & tracking registers",
        "Write-off approval workflows with committee sign-off logs",
      ],
    },
  ];

  const industries = [
    {
      icon: <Smartphone size={22} className="text-[#1bbac8]" />,
      title: "Consumer Electronics, Mobiles & Appliances",
      desc: "Smartphones, laptops, LED TVs, air conditioners, and kitchen appliances sold on flexible 3–24 month installment plans with rapid identity verification.",
    },
    {
      icon: <Building2 size={22} className="text-[#1bbac8]" />,
      title: "Motorcycle, Auto & Electric Vehicle Dealerships",
      desc: "Two-wheeler, rickshaw, auto, and commercial EV financing with vehicle chassis/engine recording, asset collateral vaults, and daily recovery tracking.",
    },
    {
      icon: <BadgePercent size={22} className="text-[#1bbac8]" />,
      title: "Solar Systems & Renewable Energy Installations",
      desc: "Residential and commercial solar inverter and panel installment financing with monthly billing schedules aligned to client utility savings.",
    },
    {
      icon: <Boxes size={22} className="text-[#1bbac8]" />,
      title: "Furniture, Home Goods & Retail Durables",
      desc: "Bedroom sets, bridal packages, and home interior installment contracts with custom down payments, guarantor checks, and monthly passbooks.",
    },
    {
      icon: <CreditCard size={22} className="text-[#1bbac8]" />,
      title: "Private Consumer Finance & Merchant BNPL",
      desc: "Micro-lending firms, private credit syndicates, and Buy-Now-Pay-Later merchants requiring investor pooling, automated penalties, and collection queues.",
    },
    {
      icon: <Users size={22} className="text-[#1bbac8]" />,
      title: "Wholesale Distributor & Dealer Credit Ledgers",
      desc: "B2B distribution credit management tracking retail shopkeeper credit limits, payment cycles, invoice aging, and field collection reconciliations.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Repayment Amortization",
      spreadsheet: "Manual formulas prone to formula corruption and rounding errors",
      devzore: "Automated calculation engine with customizable profit markups & tenures",
    },
    {
      feature: "Borrower & Guarantor Files",
      spreadsheet: "Paper files in cabinets, easily misplaced during recovery disputes",
      devzore: "Centralized digital KYC vault with verified ID, phone, photos & guarantor dossiers",
    },
    {
      feature: "Daily Recovery & Overdue Alerts",
      spreadsheet: "Zero automated notifications; staff must manually inspect hundreds of rows",
      devzore: "Dynamic daily collection calendar with automated WhatsApp & SMS payment alerts",
    },
    {
      feature: "Multi-Investor Capital Splits",
      spreadsheet: "Hours of manual end-of-month reconciliations and disputed profit returns",
      devzore: "Automated investor ledgers with recovery-based profit distributions and statements",
    },
    {
      feature: "Payment Proof & Receipts",
      spreadsheet: "Handwritten paper passbooks that customers frequently dispute",
      devzore: "Instant thermal & digital vouchers with QR verification and tamper-proof ledgers",
    },
    {
      feature: "Multi-Branch & Field Security",
      spreadsheet: "No access control; spreadsheets can be copied, deleted, or altered by staff",
      devzore: "Role-based access control, encrypted database storage, and immutable audit logs",
    },
  ];

  const securityFeatures = [
    {
      icon: <Lock size={20} />,
      title: "Bank-Grade Encryption",
      desc: "All sensitive borrower data, national identity cards, and financial contracts are encrypted in storage (AES-256) and in transit (TLS 1.3).",
    },
    {
      icon: <Database size={20} />,
      title: "Double-Entry Transaction Integrity",
      desc: "ACID-compliant database transactions guarantee that payment entries never result in corrupted balances, duplicate entries, or lost funds.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Granular Role-Based Access",
      desc: "Distinct operational roles for Super Admins, Loan Approval Officers, Counter Cashiers, Field Recovery Agents, and Investor Auditors.",
    },
    {
      icon: <FileText size={20} />,
      title: "Immutable Audit Trails",
      desc: "Every loan creation, payment entry, overdue waiver, and customer balance modification is permanently logged with timestamp and user ID.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Financial Model & Lending Logic Workshop",
      desc: "We analyze your exact markup calculations (flat rate, reducing balance, or Islamic Murabaha), down payment structures, penalty grace periods, and investor distribution policies.",
    },
    {
      step: "02",
      title: "Secure Double-Entry Ledger Schema Design",
      desc: "We architect resilient database schemas in PostgreSQL or MongoDB with strict transactional isolation and locking to prevent race conditions during high-volume cashier collections.",
    },
    {
      step: "03",
      title: "Full-Stack Portal & Dashboard Engineering",
      desc: "We build intuitive web and mobile interfaces for customer onboarding, loan approval workflows, daily recovery queues, cashier desks, and investor transparency portals.",
    },
    {
      step: "04",
      title: "Legacy Data Migration, Testing & Go-Live",
      desc: "We safely import your active customer contracts, historical passbooks, and outstanding balances, integrate thermal printers, train your staff, and deploy on scalable cloud infrastructure.",
    },
  ];

  const faqs = [
    {
      q: "What is financial management and installment credit software?",
      a: "Financial management and installment credit software is specialized enterprise software that automates the complete lifecycle of deferred-payment retail sales and consumer lending — including customer KYC verification, automated amortization schedule generation, daily staff collection queues, multi-investor capital allocations, and tamper-proof financial ledger accounting.",
    },
    {
      q: "How does the software calculate profit markups and amortization?",
      a: "The system supports multiple financial models: flat markup rates, reducing balance amortization, customized monthly equated installments (EMI), and Shariah-compliant Murabaha markup structures. Down payments, tenures, processing fees, and grace periods can be configured globally or per product category.",
    },
    {
      q: "Can the system manage capital and profit shares for private investors?",
      a: "Yes. Our platforms feature dedicated multi-investor accounting engines. You can track capital contributed by private equity partners, assign specific loan portfolios to specific investors, and automatically calculate monthly profit distributions after deducting bad-debt reserves or operational recovery costs.",
    },
    {
      q: "How does the platform help reduce installment default rates?",
      a: "By enforcing structured underwriting with verified borrower dossiers, dual guarantor archives, and residence utility proof. The system generates automated daily collection task queues for recovery staff and dispatches automated WhatsApp and SMS reminders before payment due dates, catching delinquent accounts before they turn into bad debt.",
    },
    {
      q: "What types of payment receipts and vouchers can staff print?",
      a: "The platform supports high-speed thermal receipt printing on standard 80mm and 58mm point-of-sale printers, as well as formal A4/A5 PDF invoices and digital customer installment passbooks with QR verification codes for tamper-proof record-keeping.",
    },
    {
      q: "Can field recovery agents record collections on their mobile phones?",
      a: "Yes. Field collection officers receive dedicated mobile-responsive interfaces. They can review customer contact details and collection histories on-site, record cash collections, and trigger instant SMS confirmation receipts directly to the borrower upon receiving payment.",
    },
    {
      q: "Do we receive 100% full source code ownership?",
      a: "Yes. DevZore delivers 100% full source code handover upon deployment, with complete intellectual property rights, zero recurring per-user licensing fees, and comprehensive post-launch warranty maintenance.",
    },
  ];

  const pageTitle = "Financial Management & Installment Software | DevZore";
  const pageDescription =
    "Custom financial management & installment credit software. Automate loan amortization, borrower KYC, collection queues, investor shares and audit ledgers.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Financial Management & Installment Credit Software Development",
    serviceType: "Financial Management & Consumer Lending Software",
    provider: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    areaServed: "Worldwide",
    description: pageDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Financial & Credit Software Modules",
      itemListElement: [
        { "@type": "Offer", name: "Borrower KYC & Guarantor Verification Vault" },
        { "@type": "Offer", name: "Automated Amortization & Markup Engine" },
        { "@type": "Offer", name: "Daily Recovery & Delinquency Queue Dashboard" },
        { "@type": "Offer", name: "Multi-Investor Capital Management & Profit Splits" },
        { "@type": "Offer", name: "Double-Entry Accounting & Digital Passbooks" },
        { "@type": "Offer", name: "Field Recovery Agent Mobile Portal" },
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
      { "@type": "ListItem", position: 3, name: "Financial & Installment Software", item: "https://devzore.com/installment-management-software" },
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
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[10%] w-[540px] h-[540px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 right-[5%] w-[420px] h-[420px] rounded-full bg-[#20bdcb]/8 blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[13px] font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <Scale size={13} />
                Financial Management & Credit Systems
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                Financial Management & <span className="text-[#1bbac8]">Installment Credit Software</span> Development
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Eliminate spreadsheet errors and mitigate lending default risks. We engineer custom enterprise financial management software tailored for retail installment sales, consumer financing, and private credit portfolios — featuring automated loan amortization engines, borrower KYC & guarantor vaults, daily recovery operations, multi-investor profit-sharing ledgers, and tamper-proof double-entry accounting.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] text-xs sm:text-sm font-bold transition shadow-lg shadow-[#25D366]/20"
                >
                  <span>Discuss Your Financial System on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="#system-form"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-white text-xs sm:text-sm font-semibold transition"
                >
                  Request Technical Architecture Scope
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">100% Automated</div>
                  <div className="text-xs text-slate-400 mt-0.5">Amortization & EMI calculations</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">Bank-Grade KYC</div>
                  <div className="text-xs text-slate-400 mt-0.5">Verified borrower & guarantor dossiers</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Multi-Investor</div>
                  <div className="text-xs text-slate-400 mt-0.5">Capital pooling & profit splits</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">Tamper-Proof</div>
                  <div className="text-xs text-slate-400 mt-0.5">Audited double-entry ledgers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE SPOTLIGHT GRID */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-white/[0.08] bg-[#071923] p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] font-bold text-[#1bbac8]">
                  Core Financial Infrastructure
                </p>
                <h2 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                  Four Pillars of Custom Financial & Installment Software
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck size={16} className="text-[#1bbac8]" />
                Zero Spreadsheet Vulnerabilities
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
              {[
                {
                  title: "Underwriting Vault",
                  desc: "National identity verification, utility bill address checks, employment proofs, and dual-guarantor archiving.",
                  icon: <UserCheck size={18} />,
                },
                {
                  title: "Amortization Engine",
                  desc: "Daily/monthly EMI plans, flat & reducing balance markups, Shariah Murabaha options, and automated grace periods.",
                  icon: <Calculator size={18} />,
                },
                {
                  title: "Recovery Operations",
                  desc: "Priority staff recovery queues, 30/60/90+ day overdue buckets, and automated WhatsApp payment reminders.",
                  icon: <ShieldAlert size={18} />,
                },
                {
                  title: "Investor Capital Ledgers",
                  desc: "Segregated investor portfolios, capital allocations, automated monthly profit splits, and net yield statements.",
                  icon: <Scale size={18} />,
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 hover:border-cyan-500/30 transition"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-[#1bbac8] flex items-center justify-center mb-3">
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AEO ANSWER BLOCK */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#08222f] to-[#061923] p-6 sm:p-9">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3">
              <Sparkles size={14} className="text-[#1bbac8]" />
              Executive Financial Definition
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Is Financial Management & Installment Credit Software?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                <strong>Financial Management and Installment Credit Software</strong> is dedicated enterprise software engineered to manage the entire lifecycle of deferred-payment consumer sales, asset leasing, and private lending operations. It replaces fragile spreadsheets and generic accounting software with automated loan underwriting, mathematical amortization schedules, daily collection recovery queues, multi-investor capital accounting, and tamper-proof financial ledgers.
              </p>
              <p>
                <strong>Who It Is Built For:</strong> Retailers of consumer electronics, motorcycles, solar systems, and furniture, as well as private credit syndicates, micro-finance lenders, and commercial installment distributors who need to safeguard capital, eliminate ledger tampering, and reduce overdue payment delinquency rates across single or multi-branch operations.
              </p>
            </div>
          </div>
        </section>

        {/* SYSTEM MODULES */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">System Architecture</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              End-to-End Financial & Lending Modules Engineered for Your Business
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              Every module is custom-configured around your exact markup formulas, down payment rules, penalty policies, and organizational hierarchy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <ul className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-slate-300">
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

        {/* COMPARISON MATRIX: SPREADSHEETS VS DEVZORE PLATFORM */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Operational Comparison</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Manual Spreadsheets vs Custom Financial Platform
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              Why fast-growing installment businesses replace manual Excel sheets with an automated financial software platform.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#071923]">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-[#05151e] text-xs uppercase tracking-wider text-slate-400 border-b border-white/[0.08]">
                <tr>
                  <th className="py-4 px-5">Operational Function</th>
                  <th className="py-4 px-5 text-rose-300">Manual Spreadsheets / Paper Files</th>
                  <th className="py-4 px-5 text-[#1bbac8]">DevZore Financial Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition">
                    <td className="py-4 px-5 font-semibold text-white whitespace-nowrap">{row.feature}</td>
                    <td className="py-4 px-5 text-slate-400">{row.spreadsheet}</td>
                    <td className="py-4 px-5 text-[#1bbac8] font-medium">{row.devzore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TARGET INDUSTRIES */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Industries & Verticals</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Tailored for High-Volume Credit Retailers & Financiers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/[0.08] bg-[#071923] hover:border-cyan-500/30 transition">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-[#1bbac8] flex items-center justify-center mb-4 border border-cyan-500/20">
                  {ind.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{ind.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINANCIAL SECURITY & AUDIT STANDARDS */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Compliance & Data Integrity</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Bank-Grade Security for Credit Ledgers & Sensitive Customer Records
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              Financial data requires uncompromising security standards, multi-tenant isolation, and complete audit accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityFeatures.map((sec, i) => (
              <div key={i} className="p-5 rounded-2xl border border-white/[0.08] bg-[#071923]">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-[#1bbac8] flex items-center justify-center mb-3">
                  {sec.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{sec.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Implementation</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How We Engineer Your Financial Software
            </h2>
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
            serviceContext="Financial Management & Retail Installment Credit Software"
            title="Ready to Automate Your Installment Credit & Lending Operations?"
            subtitle="Discuss your amortization models, borrower verification workflow, recovery operations, and investor profit sharing with our software engineering team."
          />
        </section>
      </div>
    </>
  );
}
