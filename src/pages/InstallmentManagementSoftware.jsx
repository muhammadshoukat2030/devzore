import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgePercent,
  Boxes,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CreditCard,
  PackageCheck,
  Receipt,
  Scale,
  ShieldAlert,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";
import SEO from "../components/SEO";
import ProjectBriefCTA from "../components/ProjectBriefCTA";
import installmentSoftware from "../assets/installment_software.webp";

export default function InstallmentManagementSoftware() {
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
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20custom%20software%20for%20an%20owner%20and%20multi-investor%20installment%20sales%20business.";

  const workflowSteps = [
    {
      step: "01",
      icon: <Wallet size={22} className="text-[#07899a]" />,
      title: "Investors Deposit Capital",
      tag: "Capital Inflow",
      desc: "Owner onboards multiple private investors. Each investor's capital deposit is credited to an individual equity account with agreed profit-sharing ratios and terms.",
    },
    {
      step: "02",
      icon: <ShoppingCart size={22} className="text-[#07899a]" />,
      title: "Purchase Products in Quantity",
      tag: "Inventory Procurement",
      desc: "Owner purchases product stock (smartphones, motorcycles, appliances, solar systems) using investor capital. Each batch tracks purchase cost, quantities, and fund allocations.",
    },
    {
      step: "03",
      icon: <PackageCheck size={22} className="text-[#07899a]" />,
      title: "Sell to Customers on Installment",
      tag: "Customer Sales & KYC",
      desc: "Products are sold on 3–24 month installment plans with upfront down payments, verified customer KYC (CNIC + 2 guarantors), and automated inventory stock auto-deduction.",
    },
    {
      step: "04",
      icon: <Scale size={22} className="text-[#07899a]" />,
      title: "Collect & Auto-Split Profits",
      tag: "Payout & Ledger Sync",
      desc: "As monthly installments are collected, the engine automatically returns principal to the investor's balance and splits the profit markup between the Owner and Investor.",
    },
  ];

  const modules = [
    {
      icon: <Users size={20} />,
      number: "01",
      title: "Multi-Investor Capital Management & Equity Portfolios",
      desc: "Individual investor accounts tracking contributed capital, deployed funds, idle cash, monthly return rates, and automated payout ledgers — eliminating manual calculation disputes.",
      points: [
        "Individual investor profiles with equity & deposit ledgers",
        "Configurable profit-sharing percentages (e.g. 50/50, 60/40, or fixed yield)",
        "Automated monthly profit statements & withdrawal approvals",
        "Investor login access to view active contracts funded by their capital",
      ],
    },
    {
      icon: <Boxes size={20} />,
      number: "02",
      title: "Product Procurement & Quantity Inventory Management",
      desc: "Complete stock control linking product purchasing directly to investor capital. Track purchase quantities, supplier bills, unit cost vs installment sale price, and serial/IMEI records.",
      points: [
        "Purchase order logging tagged to specific investor funds or pooled capital",
        "Stock quantity tracking: In Stock, Sold on Installment, In Transit, Returned",
        "Serial number, IMEI, and engine/chassis number verification",
        "Cost of Goods Sold (COGS) vs gross installment profit calculations",
      ],
    },
    {
      icon: <Calculator size={20} />,
      number: "03",
      title: "Installment Sales, Amortization & Plan Generator",
      desc: "Seamless point-of-sale checkout for installment orders. Generates dynamic repayment schedules, down payment receipts, and automated customer ledger entries with stock deduction.",
      points: [
        "Flexible tenures (3, 6, 12, 18, 24, 36 months) with custom markup rates",
        "Instant down payment processing and thermal receipt generation",
        "Shariah-compliant Murabaha markup & flat/reducing interest models",
        "Automated early settlement discounts and partial prepayment handling",
      ],
    },
    {
      icon: <UserCheck size={20} />,
      number: "04",
      title: "Borrower Underwriting, KYC & Dual Guarantor Vault",
      desc: "Rigorous credit underwriting safeguarding investor capital. Captures national ID cards, biometric verification, residential utility bills, and two verified guarantors before delivery.",
      points: [
        "National ID / CNIC verification with photo and biometric document storage",
        "Dual guarantor dossiers with contact, residential, and employment proof",
        "Customer credit limit controls based on past repayment history",
        "Digital contract archiving with signature and thumbprint scans",
      ],
    },
    {
      icon: <ShieldAlert size={20} />,
      number: "05",
      title: "Daily Collection & Overdue Recovery Command Center",
      desc: "Real-time operations dashboard for staff and field agents showing payments due today, active grace periods, aging delinquent accounts (30/60/90+ days), and collection queues.",
      points: [
        "Daily recovery calendar: Due Today vs Collected vs Outstanding",
        "Delinquency aging buckets (30, 60, 90+ days) with priority recovery flags",
        "Automated WhatsApp & SMS payment due and overdue alert triggers",
        "Promise-to-Pay (PTP) scheduling with automated staff callback alarms",
      ],
    },
    {
      icon: <TrendingUp size={20} />,
      number: "06",
      title: "Automated Profit Splitting & Investor Return Engine",
      desc: "Mathematical splitting engine that automatically divides every collected installment into principal recovery, investor dividend, and owner management commission without manual math.",
      points: [
        "Automated split on every collection: Principal vs Markup Profit",
        "Direct credit of profit dividends to investor balances",
        "Owner management fee deduction and net yield calculations",
        "Bad-debt reserve allocations and risk-sharing protection rules",
      ],
    },
    {
      icon: <Smartphone size={20} />,
      number: "07",
      title: "Investor Transparency Portal & Digital Statements",
      desc: "Dedicated read-only or self-service portals where private investors can log in on mobile or desktop to review their capital health, active customers, and monthly cash flow.",
      points: [
        "Real-time investor dashboard showing active capital vs collected returns",
        "Detailed list of products purchased and customers paying installments",
        "Monthly downloadable PDF yield statements and tax summaries",
        "Transparent recovery efficiency metrics and zero hidden deductions",
      ],
    },
    {
      icon: <Receipt size={20} />,
      number: "08",
      title: "Double-Entry Accounting, Passbooks & Thermal Printing",
      desc: "Bank-grade double-entry bookkeeping architecture synchronizing cash drawers, customer receivables, inventory valuations, and investor equity with point-of-sale thermal receipts.",
      points: [
        "High-speed thermal receipt printer integration (80mm & 58mm)",
        "Digital installment passbook with QR verification for customers",
        "Cashier shift closing reconciliation with cash drawer audits",
        "Immutable audit trails logging user ID, terminal IP, and timestamps",
      ],
    },
  ];

  const industries = [
    {
      icon: <Smartphone size={22} className="text-[#07899a]" />,
      title: "Smartphones, Laptops & Electronics",
      desc: "Purchasing mobile phones and laptops in bulk with investor capital and selling on 3–12 month installment plans with IMEI tracking and instant KYC.",
    },
    {
      icon: <Building2 size={22} className="text-[#07899a]" />,
      title: "Motorcycles, Rickshaws & Auto Dealerships",
      desc: "Funding two-wheeler and vehicle stock using investor capital, tracking engine/chassis numbers, asset collateral, and collecting monthly EMIs.",
    },
    {
      icon: <BadgePercent size={22} className="text-[#07899a]" />,
      title: "Solar Systems & Renewable Energy Packages",
      desc: "Procuring solar inverters, lithium batteries, and solar panels with investor funds and offering structured residential/commercial installment financing.",
    },
    {
      icon: <Boxes size={22} className="text-[#07899a]" />,
      title: "Home Appliances & Bridal Furniture Sets",
      desc: "Refrigerators, AC units, washing machines, and furniture packages purchased in quantity and sold on long-term deferred payment contracts.",
    },
    {
      icon: <CreditCard size={22} className="text-[#07899a]" />,
      title: "Private Credit Syndicates & Merchant BNPL",
      desc: "Groups of private investors pooling capital with a managing operator to finance customer purchases across partner retail store networks.",
    },
    {
      icon: <Users size={22} className="text-[#07899a]" />,
      title: "Wholesale Distributor Dealer Credit Accounts",
      desc: "Distributors financing retailer stock purchases with credit terms, tracking shopkeeper aging balances, and distributing returns to backers.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Multi-Investor Tracking",
      spreadsheet: "Scattered Excel sheets with frequent formula errors and disputed profit shares",
      devzore: "Automated investor equity accounts with real-time capital deployment and profit splits",
    },
    {
      feature: "Product Procurement & Stock",
      spreadsheet: "Inventory kept on separate notebook logs, untied to which investor funded which stock",
      devzore: "Direct purchase orders linking product quantities & serials to specific investor capital",
    },
    {
      feature: "Installment Sales & Down Payments",
      spreadsheet: "Manual interest calculation errors, unrecorded down payments, and lost passbooks",
      devzore: "Automated amortization schedules, instant stock deduction, and printed thermal vouchers",
    },
    {
      feature: "Customer KYC & Guarantor Security",
      spreadsheet: "Loose paper photocopies in filing cabinets, easily misplaced during payment disputes",
      devzore: "Digital KYC vault with CNIC verification, utility bill records, and dual guarantor dossiers",
    },
    {
      feature: "Daily Recovery & Overdue Collections",
      spreadsheet: "Zero automated reminders; staff must manually review hundreds of customer rows",
      devzore: "Real-time overdue alerts (30/60/90+ days) and automated WhatsApp & SMS reminders",
    },
    {
      feature: "Investor Transparency & Reports",
      spreadsheet: "Investors must wait for end-of-month manual reports, leading to mistrust and doubt",
      devzore: "Dedicated investor portal with live access to funded products, collections, and yields",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Investor & Profit Logic Workshop",
      desc: "We configure your exact business rules: owner commission percentage, investor profit-sharing models (flat, reducing, or Murabaha), and capital withdrawal policies.",
    },
    {
      step: "02",
      title: "Inventory & Double-Entry Schema Design",
      desc: "We architect relational database schemas connecting products, stock quantities, investor capital accounts, customer contracts, and double-entry general ledgers.",
    },
    {
      step: "03",
      title: "Owner, Cashier & Investor Portals",
      desc: "We build intuitive web and mobile interfaces for the Business Owner, Counter Cashiers, Field Recovery Agents, and private Investor transparency dashboards.",
    },
    {
      step: "04",
      title: "Data Migration, Printer Sync & Cloud Launch",
      desc: "We import your active loans, existing stock, and investor balances, configure point-of-sale thermal receipt printers, train your team, and deploy on secure cloud servers.",
    },
  ];

  const faqs = [
    {
      q: "How does the software handle the Owner and Multiple Investors relationship?",
      a: "The system provides an Owner Master Admin dashboard alongside dedicated Investor Accounts. When private investors deposit capital, it is recorded in their equity ledger. The owner uses these funds to purchase product inventory. When customers purchase products on installment and pay monthly EMIs, the system automatically returns principal capital to the investor's balance and splits the profit margin according to the agreed percentage (e.g. 50/50, 60/40, or custom terms).",
    },
    {
      q: "Can we track which specific products were purchased with which investor's money?",
      a: "Yes. When purchasing product stock, the owner can tag the purchase order to a specific investor's capital account or to a shared capital pool. The system tracks item quantities, cost price, serial/IMEI numbers, and which customer purchased each item on installment, providing 100% transparent auditability.",
    },
    {
      q: "Can investors log in to see their capital, funded products, and earnings?",
      a: "Yes. The platform includes a dedicated Investor Transparency Portal. Investors can log in from their smartphone or computer to view their total invested capital, how much is currently deployed in active customer contracts, monthly collection progress, and their net withdrawable profit dividends.",
    },
    {
      q: "How does the system prevent customer installment default?",
      a: "By enforcing a strict digital underwriting vault before products are released: capturing national identity documents (CNIC/Passport), residential verification, and two verified guarantors. The system automatically populates daily collection queues for recovery staff and sends automated WhatsApp and SMS reminders before payment due dates.",
    },
    {
      q: "How are product stock quantities and inventory updated during sales?",
      a: "Whenever a customer installment sale is approved and down payment is received, the product quantity is automatically deducted from active stock. The system records serial/IMEI numbers, attaches warranty documents, and prints delivery notes alongside installment repayment passbooks.",
    },
    {
      q: "What types of receipt and voucher printing are supported?",
      a: "The platform supports instant thermal receipt printing on standard 80mm and 58mm point-of-sale printers, formal A4/A5 PDF invoices, and digital installment passbooks with QR verification codes for tamper-proof record-keeping.",
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
    serviceType: "Owner & Multi-Investor Installment Sales Software",
    provider: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    areaServed: "Worldwide",
    description: pageDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Multi-Investor Installment Software Modules",
      itemListElement: [
        { "@type": "Offer", name: "Multi-Investor Capital Management & Equity Portfolios" },
        { "@type": "Offer", name: "Product Procurement & Inventory Quantity Tracking" },
        { "@type": "Offer", name: "Installment Sales, Amortization & Down Payment Plans" },
        { "@type": "Offer", name: "Borrower KYC & Dual Guarantor Vault" },
        { "@type": "Offer", name: "Daily Recovery & Delinquency Queue Dashboard" },
        { "@type": "Offer", name: "Automated Profit Splitting & Investor Payout Engine" },
        { "@type": "Offer", name: "Investor Transparency Portal & Digital Statements" },
        { "@type": "Offer", name: "Double-Entry Accounting & Thermal Receipt Printing" },
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

      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0796A8]/20 selection:text-[#071923]">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-12 sm:pb-16 bg-[#04111a] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[10%] w-[540px] h-[540px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 right-[5%] w-[420px] h-[420px] rounded-full bg-[#20bdcb]/8 blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[13px] font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <Users size={13} />
                Owner & Multi-Investor Installment Platform
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                Multi-Investor Financial & <span className="text-[#22bdca]">Installment Sales Software</span> Development
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Built specifically for business owners managing multiple private investors who pool capital to purchase product inventory and sell to customers on profitable installment plans. Our software automates investor capital accounts, inventory procurement tracking, borrower KYC dossiers, monthly EMI collections, and automated profit-sharing splits between owners and investors.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] text-xs sm:text-sm font-bold transition shadow-lg shadow-[#25D366]/20"
                >
                  <span>Discuss Your Multi-Investor System on WhatsApp</span>
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
                  <div className="text-xl sm:text-2xl font-bold text-white">Multi-Investor</div>
                  <div className="text-xs text-slate-400 mt-0.5">Dedicated capital & equity accounts</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">Stock Procurement</div>
                  <div className="text-xs text-slate-400 mt-0.5">Product purchase & quantity tracking</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Automated EMI</div>
                  <div className="text-xs text-slate-400 mt-0.5">Down payments & monthly recovery</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">Instant Profit Split</div>
                  <div className="text-xs text-slate-400 mt-0.5">Owner commission & investor yields</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: WORKFLOW (LIGHT SLATE WITH SUBTLE GRID) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#f8fafb] border-b border-slate-200" style={lightGrid}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionLabel>Operational Workflow</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                How the Owner & Multi-Investor <span className="text-[#0796A8]">Installment Cycle Operates</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                A transparent, automated cycle connecting investor capital, inventory procurement, customer sales, and automated profit returns.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((wf, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#0796A8]/40 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center border border-slate-200/80">
                        {wf.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">STEP {wf.step}</span>
                    </div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#0796A8] mb-1.5">
                      {wf.tag}
                    </span>
                    <h3 className="text-base font-bold text-[#071923] mb-2">{wf.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{wf.desc}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#07899a]" /> Automated in System
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: SYSTEM MODULES (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionLabel>System Architecture</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                End-to-End Modules Engineered for <span className="text-[#0796A8]">Owners & Multi-Investor Businesses</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tailored around your specific procurement workflows, profit-sharing ratios, down payment rules, and field collection operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        {/* SECTION 4: PRODUCTION SYSTEM SHOWCASE & PROOF (HIGH-IMPACT DARK NAVY BAND) */}
        {/* ========================================================================= */}
        <section className="relative py-14 sm:py-20 bg-[#071923] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute top-0 right-0 w-[550px] h-[450px] bg-[#0796A8]/12 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-[#22bdca]/8 blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionLabel light>Verified Production Architecture · Live Client Proof</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Production System: <span className="text-[#25bfce]">Amjad Afridi Multi-Investor Platform</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Engineered by DevZore for commercial consumer finance and retail installment sales. The platform features an operating Owner master admin, dedicated multi-investor transparency portals, customer contract underwriting, and automated profit-splitting ledgers.
              </p>
            </div>

            {/* HIGH-IMPACT SYSTEM SCREENSHOT MOCKUP */}
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0a2332] to-[#04121a] p-4 sm:p-7 shadow-2xl backdrop-blur-sm">
              {/* Window Controls Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-300 hidden sm:inline">
                    Amjad Afridi Multi-Device Production Dashboard (Laptop · Tablet · Mobile)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-semibold border border-emerald-500/20">
                    Live Role: Owner
                  </span>
                  <span className="text-slate-400 hidden sm:inline">Active Contracts: 2</span>
                </div>
              </div>

              {/* Elevated Mockup Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#020b10] shadow-inner group">
                <img
                  src={installmentSoftware}
                  alt="Amjad Afridi Multi-Investor Installment Management Platform Dashboard on Laptop, Tablet, and Mobile"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* 4 LIVE FINANCIAL METRICS FROM SYSTEM */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Sales</div>
                  <div className="text-lg sm:text-xl font-black text-white mt-1">PKR 182,000</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Financed product contracts</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Product Cost</div>
                  <div className="text-lg sm:text-xl font-black text-white mt-1">PKR 140,000</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Funded via investor capital</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Collected</div>
                  <div className="text-lg sm:text-xl font-black text-emerald-400 mt-1">PKR 52,000</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Down payments & EMIs</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Net Expected Profit</div>
                  <div className="text-lg sm:text-xl font-black text-[#25bfce] mt-1">PKR 42,000</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Automated profit-sharing</div>
                </div>
              </div>

              {/* CASE STUDY LINK AND ACTION BAR */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={15} className="text-[#20bdcb]" />
                  <span>Real-time tracking of Paid, Partial, Pending (12), and Overdue (PKR 10,000) installments</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/projects/installment-management"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0796A8] hover:bg-[#18bdcb] px-5 py-2.5 text-xs font-bold text-white transition shadow-lg shadow-[#0796A8]/20"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore,%20I%20am%20interested%20in%20an%20Owner%20and%20Multi-Investor%20Installment%20System."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 hover:bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: OPERATIONAL COMPARISON (LIGHT SLATE WITH SUBTLE GRID) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#f7f9fa] border-b border-slate-200" style={lightGrid}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionLabel>Operational Comparison</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                Manual Spreadsheets vs <span className="text-[#0796A8]">Custom Multi-Investor Platform</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Why business owners switch from messy Excel spreadsheets to an automated financial and inventory management system.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-[#f1f5f9] text-xs uppercase tracking-wider text-slate-700 border-b border-slate-200">
                  <tr>
                    <th className="py-4 px-5 font-bold">Operational Function</th>
                    <th className="py-4 px-5 text-rose-700 font-bold">Manual Spreadsheets / Paper Files</th>
                    <th className="py-4 px-5 text-[#07899a] font-bold">DevZore Multi-Investor Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition">
                      <td className="py-4 px-5 font-semibold text-slate-900 whitespace-nowrap">{row.feature}</td>
                      <td className="py-4 px-5 text-slate-600">{row.spreadsheet}</td>
                      <td className="py-4 px-5 text-[#07899a] font-semibold">{row.devzore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: TARGET PRODUCTS (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel>Products & Verticals</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                What Products Are Financed on <span className="text-[#0796A8]">This Platform?</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                High-turnover consumer and business assets procured with investor capital and sold on structured installments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#0796A8]/50 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center mb-4 border border-slate-200/80">
                    {ind.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#071923] mb-2">{ind.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: IMPLEMENTATION PROCESS (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative py-12 sm:py-16 bg-[#071923] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel light>Implementation</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                How We Engineer Your <span className="text-[#25bfce]">Multi-Investor Platform</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                From initial investor profit math to POS hardware sync and secure cloud deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {processSteps.map((p, idx) => (
                <article
                  key={idx}
                  className="p-6 bg-[#071923] hover:bg-[#0a202a] transition-colors flex flex-col justify-between min-h-[190px]"
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
        {/* SECTION 8: FAQ (CRISP CLEAN WHITE) */}
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
        {/* SECTION 9: CTA FORM (DARK NAVY ANCHOR) */}
        {/* ========================================================================= */}
        <section id="system-form" className="py-16 px-4 sm:px-6 bg-[#06151d] text-white">
          <div className="max-w-5xl mx-auto">
            <ProjectBriefCTA
              serviceContext="Owner & Multi-Investor Installment Sales & Product Procurement Software"
              title="Ready to Scale Your Multi-Investor Installment Business?"
              subtitle="Discuss your investor capital pooling, product procurement workflow, down payment calculations, and profit-sharing models with our software engineering team."
            />
          </div>
        </section>
      </div>
    </>
  );
}
