import React from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Compass,
  CreditCard,
  Factory,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

const industries = [
  {
    id: "sports-martial-arts",
    icon: <Award size={22} className="text-[#1bbac8]" />,
    title: "Martial Arts & Sports Academies",
    description:
      "Full-stack academy ERPs, biometric facial & fingerprint attendance, dual-part perforated fee receipts, and PTF belt certification engines.",
    caseStudies: [
      { name: "Al Murtaza Taekwondo Academy", path: "/projects/taekwondo-academy-management" },
    ],
    serviceLink: {
      name: "Taekwondo Academy Management",
      path: "/taekwondo-academy-management-system",
    },
  },
  {
    id: "manufacturing-retail",
    icon: <Factory size={22} className="text-[#1bbac8]" />,
    title: "Manufacturing & Retail",
    description:
      "Centralized multi-warehouse stock control, formula cataloging, barcode batching, and point-of-sale (POS) counter billing systems.",
    caseStudies: [
      { name: "Weldon Paints Case Study", path: "/projects/weldon-paints" },
    ],
    serviceLink: {
      name: "Inventory Management System",
      path: "/inventory-management-system",
    },
  },
  {
    id: "food-beverage-distribution",
    icon: <UtensilsCrossed size={22} className="text-[#1bbac8]" />,
    title: "Food, Beverage & Distribution",
    description:
      "Direct digital food ordering, live kitchen display routing (KDS), route dispatching, driver manifests, and wholesale fleet distribution ERPs.",
    caseStudies: [
      { name: "Sarab Express", path: "/projects/sarab-express" },
      { name: "FrostyOps Logistics ERP", path: "/projects/frostyops" },
    ],
    serviceLink: {
      name: "Distribution Management (DMS)",
      path: "/distribution-management-system",
    },
    extraServiceLink: {
      name: "Online Food Ordering System",
      path: "/food-ordering-system",
    },
  },
  {
    id: "tourism-hospitality",
    icon: <Compass size={22} className="text-[#1bbac8]" />,
    title: "Tourism & Hospitality",
    description:
      "High-conversion excursion booking engines, real-time slot availability, multi-currency checkouts, and instant WhatsApp booking pathways.",
    caseStudies: [
      { name: "Desert Safari Qatar", path: "/projects/desert-safari-qatar" },
      { name: "Gulf Dunes Tourism", path: "/projects/gulf-dunes-tourism" },
    ],
    serviceLink: {
      name: "Tour & Safari Booking System",
      path: "/tour-booking-system",
    },
  },
  {
    id: "finance-installment-sales",
    icon: <CreditCard size={22} className="text-[#1bbac8]" />,
    title: "Finance & Installment Sales",
    description:
      "Custom consumer credit underwriting, automated EMI repayment schedules, guarantor verification vaults, and overdue recovery ledgers.",
    caseStudies: [
      { name: "Installment Management", path: "/projects/installment-management" },
    ],
    serviceLink: {
      name: "Financial & Installment Software",
      path: "/installment-management-software",
    },
  },
  {
    id: "healthcare-dental-care",
    icon: <Activity size={22} className="text-[#1bbac8]" />,
    title: "Healthcare & Dental Care",
    description:
      "Modern clinical web platforms, online patient appointment scheduling, specialist doctor showcases, and clinical treatment guides.",
    caseStudies: [
      { name: "Prime Dental", path: "/projects/prime-dental" },
    ],
    serviceLink: {
      name: "Healthcare Web Development",
      path: "/web-development",
    },
  },
];

const IndustriesWeServe = ({ isLight = false }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="industries-heading"
      className={`py-14 sm:py-18 relative overflow-hidden border-t ${
        isLight
          ? "bg-[#f8fafc] text-[#071923] border-slate-200"
          : "bg-[#061923] text-white border-white/[0.08]"
      }`}
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1bbac8]">
              <Sparkles size={12} className="text-[#1bbac8]" />
              <span>Targeted Sector Expertise</span>
            </div>
            <h2
              id="industries-heading"
              className={`mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
                isLight ? "text-[#071923]" : "text-white"
              }`}
            >
              Industries We Serve
            </h2>
            <p
              className={`mt-1.5 text-xs sm:text-sm max-w-2xl leading-relaxed ${
                isLight ? "text-slate-600" : "text-slate-300"
              }`}
            >
              We engineer mission-critical software tailored specifically for industries where DevZore has verified, active production systems:
            </p>
          </div>

          <Link
            to="/projects"
            onClick={scrollTop}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition shrink-0"
          >
            <span>View all 7 case studies</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 6 INDUSTRY CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => (
            <article
              key={ind.id}
              className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                isLight
                  ? "bg-white border-slate-200 hover:border-[#0796A8]/50 hover:shadow-md"
                  : "bg-white/[0.02] border-white/[0.08] hover:border-cyan-500/40 hover:bg-white/[0.04]"
              }`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isLight
                      ? "bg-cyan-500/10 border border-cyan-500/20 text-[#0796A8]"
                      : "bg-cyan-500/10 border border-cyan-500/20 text-[#1bbac8]"
                  }`}
                >
                  {ind.icon}
                </div>

                <h3
                  className={`text-[18px] sm:text-[19px] font-bold mb-2 tracking-tight ${
                    isLight ? "text-[#071923]" : "text-white"
                  }`}
                >
                  {ind.title}
                </h3>

                <p
                  className={`text-[14px] sm:text-[14.5px] leading-[1.6] mb-4 ${
                    isLight ? "text-[#374151]" : "text-slate-300"
                  }`}
                >
                  {ind.description}
                </p>
              </div>

              <div
                className={`pt-4 border-t space-y-2.5 ${
                  isLight ? "border-slate-100" : "border-white/[0.06]"
                }`}
              >
                <div>
                  <span
                    className={`block text-xs font-bold uppercase tracking-wider mb-1 ${
                      isLight ? "text-slate-400" : "text-slate-400"
                    }`}
                  >
                    Verified Production Proof:
                  </span>
                  <div className="space-y-1">
                    {ind.caseStudies.map((cs) => (
                      <Link
                        key={cs.path}
                        to={cs.path}
                        onClick={scrollTop}
                        className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#1bbac8] hover:text-white transition group/link block"
                      >
                        <span className="truncate">{cs.name}</span>
                        <ArrowUpRight
                          size={11}
                          className="shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition"
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className={`pt-2 border-t border-dashed ${isLight ? "border-slate-200" : "border-white/[0.08]"}`}>
                  <span
                    className={`block text-xs font-bold uppercase tracking-wider mb-1 ${
                      isLight ? "text-slate-400" : "text-slate-400"
                    }`}
                  >
                    Specialized Solution:
                  </span>
                  <Link
                    to={ind.serviceLink.path}
                    onClick={scrollTop}
                    className={`inline-flex items-center gap-1 text-[13px] font-bold ${
                      isLight ? "text-[#071923] hover:text-[#0796A8]" : "text-white hover:text-[#1bbac8]"
                    } transition block`}
                  >
                    <span className="truncate">{ind.serviceLink.name}</span>
                    <ArrowRight size={11} className="shrink-0" />
                  </Link>
                  {ind.extraServiceLink && (
                    <Link
                      to={ind.extraServiceLink.path}
                      onClick={scrollTop}
                      className={`inline-flex items-center gap-1 text-[13px] font-bold ${
                        isLight ? "text-[#071923] hover:text-[#0796A8]" : "text-white hover:text-[#1bbac8]"
                      } transition block mt-1`}
                    >
                      <span className="truncate">{ind.extraServiceLink.name}</span>
                      <ArrowRight size={11} className="shrink-0" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
