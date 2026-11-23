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
  PackageCheck,
  Receipt,
  RefreshCw,
  Scale,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
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

export default function InstallmentManagementSoftware() {
  const [activeFaq, setActiveFaq] = useState(null);

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20custom%20software%20for%20an%20owner%20and%20multi-investor%20installment%20sales%20business.";

  const workflowSteps = [
    {
      step: "01",
      icon: <Wallet size={22} className="text-[#1bbac8]" />,
      title: "Investors Deposit Capital",
      tag: "Capital Inflow",
      desc: "Owner onboards multiple private investors. Each investor's capital deposit is credited to an individual equity account with agreed profit-sharing ratios and terms.",
    },
    {
      step: "02",
      icon: <ShoppingCart size={22} className="text-[#1bbac8]" />,
      title: "Purchase Products in Quantity",
      tag: "Inventory Procurement",
      desc: "Owner purchases product stock (smartphones, motorcycles, appliances, solar systems) using investor capital. Each batch tracks purchase cost, quantities, and fund allocations.",
    },
    {
      step: "03",
      icon: <PackageCheck size={22} className="text-[#1bbac8]" />,
      title: "Sell to Customers on Installment",
      tag: "Customer Sales & KYC",
      desc: "Products are sold on 3–24 month installment plans with upfront down payments, verified customer KYC (CNIC + 2 guarantors), and automated inventory stock auto-deduction.",
    },
    {
      step: "04",
      icon: <Scale size={22} className="text-[#1bbac8]" />,
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
      icon: <Smartphone size={22} className="text-[#1bbac8]" />,
      title: "Smartphones, Laptops & Electronics",
      desc: "Purchasing mobile phones and laptops in bulk with investor capital and selling on 3–12 month installment plans with IMEI tracking and instant KYC.",
    },
    {
      icon: <Building2 size={22} className="text-[#1bbac8]" />,
      title: "Motorcycles, Rickshaws & Auto Dealerships",
      desc: "Funding two-wheeler and vehicle stock using investor capital, tracking engine/chassis numbers, asset collateral, and collecting monthly EMIs.",
    },
    {
      icon: <BadgePercent size={22} className="text-[#1bbac8]" />,
      title: "Solar Systems & Renewable Energy Packages",
      desc: "Procuring solar inverters, lithium batteries, and solar panels with investor funds and offering structured residential/commercial installment financing.",
    },
    {
      icon: <Boxes size={22} className="text-[#1bbac8]" />,
      title: "Home Appliances & Bridal Furniture Sets",
      desc: "Refrigerators, AC units, washing machines, and furniture packages purchased in quantity and sold on long-term deferred payment contracts.",
    },
    {
      icon: <CreditCard size={22} className="text-[#1bbac8]" />,
      title: "Private Credit Syndicates & Merchant BNPL",
      desc: "Groups of private investors pooling capital with a managing operator to finance customer purchases across partner retail store networks.",
    },
    {
      icon: <Users size={22} className="text-[#1bbac8]" />,
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

      <div className="min-h-screen bg-[#061923] text-white antialiased">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-12 sm:pb-16 border-b border-white/[0.08]">
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
                Multi-Investor Financial & <span className="text-[#1bbac8]">Installment Sales Software</span> Development
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

        {/* WORKFLOW: HOW THE OWNER & MULTI-INVESTOR MODEL WORKS */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Operational Workflow</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How the Owner & Multi-Investor Installment Cycle Operates
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              A transparent, automated cycle connecting investor capital, inventory procurement, customer sales, and automated profit returns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((wf, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-white/[0.08] bg-[#071923] p-6 hover:border-cyan-500/30 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                      {wf.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">STEP {wf.step}</span>
                  </div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#1bbac8] mb-2">
                    {wf.tag}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{wf.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{wf.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/[0.05] text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[#1bbac8]" /> Automated in System
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AEO ANSWER BLOCK */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#08222f] to-[#061923] p-6 sm:p-9">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3">
              <Sparkles size={14} className="text-[#1bbac8]" />
              Executive Business Summary
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Is an Owner & Multi-Investor Installment Management Platform?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                An <strong>Owner & Multi-Investor Installment Platform</strong> is specialized financial software engineered for businesses where an operating Owner partners with multiple private financial investors to buy high-demand product inventory (smartphones, bikes, electronics, solar equipment, appliances) and sell those items to customers on monthly installment contracts.
              </p>
              <p>
                Instead of confusing paper ledgers and disputed spreadsheet math, the platform tracks every investor&apos;s deposited capital, maps which product inventory was procured with those funds, registers customer down payments and monthly installment collections, and <strong>automatically divides every collected payment into principal capital recovery and profit-sharing payouts</strong> for the owner and investors.
              </p>
            </div>
          </div>
        </section>

        {/* SYSTEM MODULES */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">System Architecture</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              End-to-End Modules Engineered for Owners & Multi-Investor Businesses
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              Tailored around your specific procurement workflows, profit-sharing ratios, down payment rules, and field collection operations.
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
              Manual Spreadsheets vs Custom Multi-Investor Platform
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              Why business owners switch from messy Excel spreadsheets to an automated financial and inventory management system.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#071923]">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-[#05151e] text-xs uppercase tracking-wider text-slate-400 border-b border-white/[0.08]">
                <tr>
                  <th className="py-4 px-5">Operational Function</th>
                  <th className="py-4 px-5 text-rose-300">Manual Spreadsheets / Paper Files</th>
                  <th className="py-4 px-5 text-[#1bbac8]">DevZore Multi-Investor Platform</th>
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
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Products & Verticals</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What Products Are Financed on This Platform?
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

        {/* PROCESS */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Implementation</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How We Engineer Your Multi-Investor Platform
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
            serviceContext="Owner & Multi-Investor Installment Sales & Product Procurement Software"
            title="Ready to Scale Your Multi-Investor Installment Business?"
            subtitle="Discuss your investor capital pooling, product procurement workflow, down payment calculations, and profit-sharing models with our software engineering team."
          />
        </section>
      </div>
    </>
  );
}
