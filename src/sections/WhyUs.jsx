import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Gauge,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const WhyUs = ({ isDark = true }) => {
  const d = isDark;

  // ======================================================
  // WHY DEVZORE
  // ======================================================

  const reasons = [
    {
      icon: Code2,
      title: "Business-Focused Development",
      desc: "We build around real business requirements instead of forcing every project into the same technical approach.",
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      desc: "Requirements, progress and feedback stay clear throughout planning, development and delivery.",
    },
    {
      icon: Gauge,
      title: "Performance in Mind",
      desc: "We focus on responsive interfaces, efficient development and practical performance improvements.",
    },
    {
      icon: Smartphone,
      title: "Responsive by Default",
      desc: "Digital products are designed to work across mobile, tablet and desktop experiences.",
    },
    {
      icon: ShieldCheck,
      title: "Maintainable Development",
      desc: "Clean structure, reusable components and modern practices help make future updates easier.",
    },
    {
      icon: Headphones,
      title: "Post-Launch Support",
      desc: "We can continue with maintenance, bug fixes, improvements and additional features after launch.",
    },
  ];

  // ======================================================
  // PROJECT ASSURANCES
  // ======================================================

  const assurances = [
    "Clear Project Scope",
    "Source Code Handover",
    "Modern Tech Stack",
    "Direct Communication",
    "Responsive Development",
    "Post-Launch Support",
  ];

  // ======================================================
  // SCROLL TOP
  // ======================================================

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section
      id="why-us"
      aria-labelledby="whyus-heading"
      className={`py-10 sm:py-12 transition-colors duration-300 ${
        d ? "bg-[#050505]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="max-w-3xl mb-7 sm:mb-8">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest border mb-3 ${
              d
                ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                : "bg-purple-50 border-purple-200 text-purple-700"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />

            Why DevZore
          </div>

          <h2
            id="whyus-heading"
            className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3 ${
              d ? "text-white" : "text-slate-950"
            }`}
          >
            A Practical Development Partner for{" "}
            <span className="text-purple-600">
              Digital Products
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
              d ? "text-gray-400" : "text-slate-600"
            }`}
          >
            DevZore combines technical development, clear communication
            and ongoing support to help businesses turn requirements
            into reliable digital products.
          </p>
        </div>

        {/* ==================================================
            REASONS GRID
            MOBILE: 2
            TABLET: 2
            DESKTOP: 3
        ================================================== */}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 mb-6">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group rounded-xl border p-3 sm:p-4 transition-all duration-300 ${
                  d
                    ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/25"
                    : "bg-white border-slate-200 hover:border-purple-200 hover:shadow-sm"
                }`}
              >
                {/* ICON */}

                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center mb-2.5 transition-all duration-300 ${
                    d
                      ? "bg-purple-500/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white"
                      : "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
                  }`}
                >
                  <Icon
                    size={16}
                    aria-hidden="true"
                  />
                </div>

                {/* TITLE */}

                <h3
                  className={`text-[11px] sm:text-[13px] font-bold leading-snug mb-1.5 ${
                    d ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className={`text-[9px] sm:text-[11px] leading-[1.55] sm:leading-5 ${
                    d ? "text-gray-500" : "text-slate-500"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ==================================================
            PROJECT ASSURANCE STRIP
        ================================================== */}

        <div
          className={`rounded-xl border px-4 py-4 sm:px-5 mb-5 ${
            d
              ? "bg-white/[0.02] border-white/[0.07]"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">

            {/* LABEL */}

            <div className="shrink-0">
              <p
                className={`text-[9px] sm:text-[10px] font-black uppercase tracking-[0.18em] ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                What You Can Expect
              </p>
            </div>

            {/* ITEMS */}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-x-4 gap-y-2 flex-1">
              {assurances.map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-1.5 text-[9px] sm:text-[11px] font-medium ${
                    d ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  <CheckCircle2
                    size={12}
                    className="text-purple-500 shrink-0"
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================================================
            COMPACT CTA
        ================================================== */}

        <div
          className={`relative overflow-hidden rounded-xl border p-5 sm:p-6 ${
            d
              ? "bg-purple-600/[0.05] border-purple-500/15"
              : "bg-purple-50 border-purple-100"
          }`}
        >
          {/* BACKGROUND GLOW */}

          <div
            aria-hidden="true"
            className="absolute -top-20 right-0 w-56 h-56 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            {/* CONTENT */}

            <div className="max-w-2xl">
              <span
                className={`text-[9px] sm:text-[10px] font-black uppercase tracking-[0.18em] ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Have a Project in Mind?
              </span>

              <h3
                className={`text-lg sm:text-xl font-black mt-1.5 mb-1.5 ${
                  d ? "text-white" : "text-slate-900"
                }`}
              >
                Let&apos;s Discuss What You Want to Build
              </h3>

              <p
                className={`text-[11px] sm:text-[13px] leading-relaxed ${
                  d ? "text-gray-400" : "text-slate-600"
                }`}
              >
                Share your requirements and we can discuss the right
                development approach for your website, application or
                software product.
              </p>
            </div>

            {/* BUTTONS */}

            <div className="flex flex-row gap-2 shrink-0">

              {/* CONTACT */}

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-[10px] sm:text-xs transition-all hover:shadow-[0_0_18px_rgba(124,58,237,0.25)]"
              >
                Discuss Project

                <ArrowRight
                  size={13}
                  aria-hidden="true"
                />
              </Link>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-lg text-[10px] sm:text-xs hover:bg-[#25D366]/15 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;