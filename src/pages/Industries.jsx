import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  CreditCard,
  Factory,
  MessageSquare,
  Sparkles,
  UtensilsCrossed,
  ShieldCheck,
  Phone,
} from "lucide-react";
import SEO from "../components/SEO";

const industriesData = [
  {
    id: "manufacturing-retail",
    icon: <Factory size={26} className="text-[#1bbac8]" />,
    title: "Manufacturing & Retail",
    tagline: "Centralized stock control, formula cataloging and high-velocity point-of-sale systems.",
    challenges: [
      "Inventory shrinkage and mismatched stock numbers across physical warehouses and counter sales.",
      "Complex manufacturing recipes and chemical bill-of-materials tracked manually in paper notebooks.",
      "Generic ERP software imposing rigid workflows, high per-seat fees, and slow localized billing.",
    ],
    whatWeBuild: [
      "Real-time multi-warehouse inventory systems with automated low-stock and safety-level triggers.",
      "Proprietary formula cataloging, recipe security, and automatic raw material depletion upon production.",
      "High-speed point-of-sale (POS) billing with barcode scanning, thermal printing, and dealer credit ledgers.",
    ],
    caseStudies: [
      {
        title: "Weldon Paints",
        desc: "Centralized paint factory inventory, formula cataloging and POS counter billing platform.",
        url: "/projects/weldon-paints",
      },
    ],
    serviceUrl: "/inventory-management-system",
    serviceName: "Custom Inventory Management Systems",
  },
  {
    id: "food-beverage-distribution",
    icon: <UtensilsCrossed size={26} className="text-[#1bbac8]" />,
    title: "Food, Beverage & Wholesale Distribution",
    tagline: "Commission-free ordering portals, kitchen ticket routing and route logistics ERPs.",
    challenges: [
      "Third-party food delivery platforms charging 25%–35% commissions and keeping customer data.",
      "Inefficient vehicle route planning causing late drops, spoiled goods, and unmonitored driver returns.",
      "Disjointed sales invoicing between route salesmen, warehouse loading crews, and accounts.",
    ],
    whatWeBuild: [
      "Custom branded online food ordering platforms with live item customizers and direct WhatsApp conversion.",
      "Digital Kitchen Display Systems (KDS) and automatic order ticket routing to kitchen prep stations.",
      "Wholesale distribution ERPs managing territory routes, driver manifests, van sales, and cash handovers.",
    ],
    caseStudies: [
      {
        title: "Sarab Express",
        desc: "High-speed restaurant ordering platform eliminating aggregator commissions.",
        url: "/projects/sarab-express",
      },
      {
        title: "FrostyOps Logistics ERP",
        desc: "Wholesale route logistics and cold-chain distribution ERP managing vehicle fleets and field orders.",
        url: "/projects/frostyops",
      },
    ],
    serviceUrl: "/distribution-management-system",
    serviceName: "Distribution Management Systems (DMS)",
    extraServiceUrl: "/food-ordering-system",
    extraServiceName: "Online Food Ordering Platforms",
  },
  {
    id: "tourism-hospitality",
    icon: <Compass size={26} className="text-[#1bbac8]" />,
    title: "Tourism & Hospitality",
    tagline: "High-conversion safari and tour booking engines with real-time slot calendars.",
    challenges: [
      "High reliance on third-party OTAs (Viator, GetYourGuide) eating into seasonal excursion margins.",
      "Double bookings and missed inquiries caused by manual telephone, email, and paper scheduling.",
      "Friction for international tourists requiring multi-currency card payments and instant WhatsApp confirmation.",
    ],
    whatWeBuild: [
      "Excursion booking engines with dynamic morning, afternoon, and sunset slot availability allocations.",
      "One-tap WhatsApp booking pathways pre-populated with customer party size, package, and date.",
      "Multi-currency checkout gateways (QAR, AED, USD, EUR) with automated PDF voucher QR generation.",
    ],
    caseStudies: [
      {
        title: "Desert Safari Qatar",
        desc: "International Qatar desert safari excursion portal optimized for search visibility and bookings.",
        url: "/projects/desert-safari-qatar",
      },
      {
        title: "Gulf Dunes Tourism",
        desc: "Modern tourism booking engine built for GCC and international excursion travelers.",
        url: "/projects/gulf-dunes-tourism",
      },
    ],
    serviceUrl: "/tour-booking-system",
    serviceName: "Tour Booking & Safari Reservation Systems",
  },
  {
    id: "finance-installment-sales",
    icon: <CreditCard size={26} className="text-[#1bbac8]" />,
    title: "Finance & Installment Sales",
    tagline: "Equated monthly installment (EMI) underwriting, late fee tracking and recovery ledgers.",
    challenges: [
      "Spreadsheets and manual bookkeeping leading to missed recovery dates and lost capital.",
      "Unenforced customer credit limits, missing guarantor files, and unverified collateral documentation.",
      "Lack of automated overdue penalty calculation creating disputes and revenue leakage.",
    ],
    whatWeBuild: [
      "Dynamic repayment plan engines supporting customized daily, weekly, and monthly installment rules.",
      "Guarantor and collateral verification archives storing digital CNIC/ID files and promissory contracts.",
      "Real-time recovery officer dashboards, overdue penalty accruals, and customer balance SMS sync.",
    ],
    caseStudies: [
      {
        title: "Installment Management",
        desc: "Complete consumer credit sales and installment tracking platform for electronics and durable goods.",
        url: "/projects/installment-management",
      },
    ],
    serviceUrl: "/installment-management-software",
    serviceName: "Installment Management Software",
  },
];

const Industries = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://devzore.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://devzore.com/industries",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Industries We Serve | Software Solutions | DevZore"
        description="Explore the sectors DevZore builds software for: manufacturing, food & wholesale distribution, tourism & hospitality, and consumer installment finance."
        canonical="/industries"
        schema={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-[#071923] text-white antialiased">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-10 sm:pb-12 border-b border-white/[0.08]">
          <div className="absolute -top-32 left-[10%] w-[500px] h-[500px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />

          <div className="relative max-w-[1260px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[13px] font-bold tracking-wider uppercase text-[#1bbac8]">
                <Sparkles size={12} />
                <span>Sector-Specific Software Solutions</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Industries We Serve With{" "}
                <span className="text-[#1bbac8]">Proven Systems</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                We do not build generic software for every theoretical industry. We focus deeply on sectors where DevZore has engineered active, verified production platforms that process inventory, orders, reservations, and financial ledger data every day.
              </p>
            </div>
          </div>
        </section>

        {/* 4 INDUSTRY DEEP-DIVE SECTIONS */}
        <section className="py-14 sm:py-20 max-w-[1260px] mx-auto px-4 sm:px-6 space-y-12">
          {industriesData.map((ind, index) => (
            <article
              key={ind.id}
              className="rounded-3xl border border-white/[0.08] bg-[#061923] p-6 sm:p-8 lg:p-10 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/[0.06]">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center shrink-0">
                    {ind.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                      Sector 0{index + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                      {ind.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                      {ind.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  <Link
                    to={ind.serviceUrl}
                    onClick={scrollTop}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/15 text-[#1bbac8] hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-bold transition"
                  >
                    <span>{ind.serviceName}</span>
                    <ArrowRight size={12} />
                  </Link>
                  {ind.extraServiceUrl && (
                    <Link
                      to={ind.extraServiceUrl}
                      onClick={scrollTop}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/15 text-[#1bbac8] hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-bold transition"
                    >
                      <span>{ind.extraServiceName}</span>
                      <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </div>

              {/* CHALLENGES & WHAT WE BUILD */}
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-1.5">
                    <span>Typical Operational Pain Points</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {ind.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <span className="text-rose-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#1bbac8]" />
                    <span>What DevZore Engineers</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {ind.whatWeBuild.map((w, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                        <span className="text-[#1bbac8] font-bold shrink-0 mt-0.5">✓</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* VERIFIED CASE STUDIES */}
              <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mr-2">
                    Verified Production Proof:
                  </span>
                  {ind.caseStudies.map((cs) => (
                    <Link
                      key={cs.url}
                      to={cs.url}
                      onClick={scrollTop}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-[#1bbac8] border border-white/[0.08] transition"
                    >
                      <span>{cs.title} Case Study</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  ))}
                </div>

                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="text-xs font-bold text-white hover:text-[#1bbac8] transition inline-flex items-center gap-1 shrink-0"
                >
                  <span>Build For This Industry</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* BOTTOM CTA */}
        <section className="py-16 bg-[#05141c] border-t border-white/[0.08]">
          <div className="max-w-[1260px] mx-auto px-4 sm:px-6 text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to automate your industry operations?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with our senior engineers to discuss your operational bottlenecks and map out a custom software solution.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white text-xs font-bold transition shadow-lg"
              >
                <span>Request a Solution Consultation</span>
                <ArrowRight size={13} />
              </Link>
              <a
                href="https://wa.me/923348004300"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-bold transition"
              >
                <MessageSquare size={14} />
                <span>WhatsApp: +92 334 8004300</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Industries;
