import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

const TrustBar = ({ isDark = false }) => {
  const d = isDark;

  // ======================================================
  // TECHNOLOGIES
  // ======================================================

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "TypeScript",
    "React Native",
    "Tailwind CSS",
    "AWS",
    "Vercel",
    "Stripe",
    "Docker",
    "Firebase",
    "Figma",
  ];

  // ======================================================
  // CAPABILITIES
  // ======================================================

  const capabilities = [
    {
      icon: Code2,
      title: "Custom Development",
      description: "Solutions built around your business requirements",
    },
    {
      icon: Smartphone,
      title: "Responsive by Default",
      description: "Designed for mobile, tablet and desktop",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Clean, optimized and maintainable development",
    },
    {
      icon: ShieldCheck,
      title: "Security in Mind",
      description: "Modern development and security practices",
    },
  ];

  // ======================================================
  // ASSURANCES
  // ======================================================

  const assurances = [
    "Clear Project Scope",
    "Direct Communication",
    "Source Code Handover",
    "Post-Launch Support",
  ];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="devzore-trust-heading"
      className={`border-y transition-colors duration-300 ${
        d
          ? "bg-[#050505] border-white/[0.07]"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      {/* ==================================================
          INTRO / VALUE PROPOSITION
      ================================================== */}

      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          pt-8 pb-6
          sm:pt-10 sm:pb-7
        "
      >
        <div className="max-w-3xl mx-auto text-center">
          <span
            className={`inline-block
              text-[9px] sm:text-[11px]
              font-bold uppercase
              tracking-[0.18em] sm:tracking-[0.2em]
              mb-2.5 sm:mb-3
              ${
                d ? "text-purple-400" : "text-purple-600"
              }`}
          >
            Why Work With DevZore
          </span>

          <h2
            id="devzore-trust-heading"
            className={`text-[22px] leading-[1.2]
              sm:text-3xl
              font-black tracking-tight
              ${
                d ? "text-white" : "text-slate-950"
              }`}
          >
            Software built for real business needs
          </h2>

          <p
            className={`mt-3
              text-[12px] leading-6
              sm:text-[15px] sm:leading-7
              max-w-2xl mx-auto
              ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
          >
            From business websites and eCommerce platforms
            to SaaS products and mobile applications,
            DevZore helps businesses turn ideas into
            reliable digital products.
          </p>
        </div>
      </div>

      {/* ==================================================
          CAPABILITIES

          MOBILE:
          2 columns × 2 rows

          TABLET:
          2 columns

          DESKTOP:
          4 columns
      ================================================== */}

      <div
        className={`border-y ${
          d
            ? "border-white/[0.07]"
            : "border-slate-200"
        }`}
      >
        <div
          className="
            max-w-7xl mx-auto
            px-3 sm:px-6 lg:px-8
            py-4 sm:py-6
          "
        >
          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-2
              sm:gap-3
            "
          >
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`group
                    min-w-0
                    p-3
                    min-[390px]:p-3.5
                    sm:p-5
                    rounded-xl
                    border
                    transition-all duration-300
                    ${
                      d
                        ? "bg-white/[0.02] border-white/[0.07] hover:border-purple-500/30 hover:bg-white/[0.04]"
                        : "bg-white border-slate-200 hover:border-purple-200 hover:shadow-sm"
                    }`}
                >
                  {/* ICON */}

                  <div
                    className={`w-8 h-8
                      sm:w-9 sm:h-9
                      rounded-lg
                      flex items-center justify-center
                      mb-2.5 sm:mb-4
                      ${
                        d
                          ? "bg-purple-500/10 text-purple-400"
                          : "bg-purple-50 text-purple-600"
                      }`}
                  >
                    <Icon
                      size={16}
                      className="sm:w-[18px] sm:h-[18px]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* TITLE */}

                  <h3
                    className={`text-[10px]
                      min-[390px]:text-[11px]
                      sm:text-[13px]
                      leading-[1.35]
                      font-bold
                      mb-1 sm:mb-1.5
                      ${
                        d
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className={`text-[8px]
                      min-[390px]:text-[9px]
                      sm:text-[11px]
                      leading-[1.55]
                      sm:leading-5
                      ${
                        d
                          ? "text-gray-500"
                          : "text-slate-500"
                      }`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==================================================
          TECHNOLOGY STACK
      ================================================== */}

      <div className="py-5 sm:py-7 overflow-hidden">
        <p
          className={`text-center
            text-[9px] sm:text-[10px]
            font-black uppercase
            tracking-[0.18em] sm:tracking-[0.2em]
            mb-4 sm:mb-5
            ${
              d ? "text-gray-600" : "text-slate-400"
            }`}
        >
          Technologies We Work With
        </p>

        <div className="relative flex overflow-hidden">
          {/* LEFT FADE */}

          <div
            aria-hidden="true"
            className={`absolute
              left-0 top-0 bottom-0
              w-8 sm:w-24
              z-10 pointer-events-none
              ${
                d
                  ? "bg-gradient-to-r from-[#050505] to-transparent"
                  : "bg-gradient-to-r from-slate-50 to-transparent"
              }`}
          />

          {/* RIGHT FADE */}

          <div
            aria-hidden="true"
            className={`absolute
              right-0 top-0 bottom-0
              w-8 sm:w-24
              z-10 pointer-events-none
              ${
                d
                  ? "bg-gradient-to-l from-[#050505] to-transparent"
                  : "bg-gradient-to-l from-slate-50 to-transparent"
              }`}
          />

          {/* MARQUEE */}

          <div
            className="
              flex
              animate-[marquee_32s_linear_infinite]
              whitespace-nowrap
              motion-reduce:animate-none
            "
          >
            {[...technologies, ...technologies].map(
              (technology, index) => (
                <span
                  key={`${technology}-${index}`}
                  className={`inline-flex
                    items-center gap-1.5 sm:gap-2
                    mx-1 sm:mx-2
                    px-2.5 py-1.5
                    sm:px-3.5 sm:py-2
                    rounded-lg
                    border
                    text-[9px] sm:text-[11px]
                    font-semibold
                    flex-shrink-0
                    ${
                      d
                        ? "bg-white/[0.035] border-white/[0.08] text-gray-400"
                        : "bg-white border-slate-200 text-slate-600"
                    }`}
                >
                  <span
                    aria-hidden="true"
                    className="
                      w-1.5 h-1.5
                      rounded-full
                      bg-purple-500
                    "
                  />

                  {technology}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* ==================================================
          TRUST / CTA BAR
      ================================================== */}

      <div
        className={`border-t ${
          d
            ? "border-white/[0.07]"
            : "border-slate-200"
        }`}
      >
        <div
          className="
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            py-5 sm:py-6
          "
        >
          <div
            className="
              flex flex-col
              xl:flex-row
              xl:items-center
              justify-between
              gap-5 xl:gap-6
            "
          >
            {/* ==========================================
                ASSURANCES

                Mobile = 2 × 2
            ========================================== */}

            <div
              className="
                grid grid-cols-2
                sm:flex sm:flex-wrap
                justify-center xl:justify-start
                gap-x-3 gap-y-2.5
                sm:gap-x-5 sm:gap-y-3
                w-full xl:w-auto
              "
            >
              {assurances.map((item) => (
                <span
                  key={item}
                  className={`inline-flex
                    items-center
                    gap-1.5 sm:gap-2
                    text-[9px]
                    min-[390px]:text-[10px]
                    sm:text-[12px]
                    font-medium
                    ${
                      d
                        ? "text-gray-400"
                        : "text-slate-600"
                    }`}
                >
                  <CheckCircle2
                    size={12}
                    className="
                      sm:w-[14px]
                      sm:h-[14px]
                      text-purple-500
                      flex-shrink-0
                    "
                    aria-hidden="true"
                  />

                  {item}
                </span>
              ))}
            </div>

            {/* ==========================================
                CTA
            ========================================== */}

            <div
              className="
                grid grid-cols-2
                sm:flex
                items-center
                justify-center
                gap-2 sm:gap-3
                w-full xl:w-auto
              "
            >
              {/* DISCUSS PROJECT */}

              <Link
                to="/contact"
                onClick={scrollTop}
                className={`inline-flex
                  items-center justify-center
                  gap-1.5 sm:gap-2
                  px-3 sm:px-5
                  py-2.5
                  rounded-lg
                  border
                  text-[9px]
                  min-[390px]:text-[10px]
                  sm:text-[12px]
                  font-bold
                  transition-all duration-200
                  ${
                    d
                      ? "border-white/10 text-white hover:bg-white/[0.05] hover:border-white/20"
                      : "border-slate-300 text-slate-800 hover:bg-white hover:border-slate-400"
                  }`}
              >
                <MessageCircle
                  size={12}
                  className="sm:w-[14px] sm:h-[14px] shrink-0"
                  aria-hidden="true"
                />

                <span className="whitespace-nowrap">
                  Discuss Project
                </span>
              </Link>

              {/* FREE CONSULTATION */}

              <Link
                to="/contact"
                onClick={scrollTop}
                className="
                  inline-flex
                  items-center justify-center
                  gap-1.5 sm:gap-2

                  px-3 sm:px-5
                  py-2.5

                  bg-purple-600
                  hover:bg-purple-700

                  text-white

                  text-[9px]
                  min-[390px]:text-[10px]
                  sm:text-[12px]

                  font-bold
                  rounded-lg

                  transition-all duration-200

                  hover:-translate-y-0.5
                  hover:shadow-[0_0_20px_rgba(124,58,237,0.25)]
                "
              >
                <span className="whitespace-nowrap">
                  Free Consultation
                </span>

                <ArrowRight
                  size={12}
                  className="sm:w-[14px] sm:h-[14px] shrink-0"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;