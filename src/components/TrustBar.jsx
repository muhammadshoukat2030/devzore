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
      description:
        "Software solutions planned around your business goals and requirements.",
    },
    {
      icon: Smartphone,
      title: "Responsive by Default",
      description:
        "Digital experiences designed for mobile, tablet and desktop.",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description:
        "Clean and maintainable development with performance in mind.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Delivery",
      description:
        "Structured development, testing and support from start to launch.",
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

  // ======================================================
  // SCROLL TOP
  // ======================================================

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section
      id="why-devzore"
      aria-labelledby="devzore-trust-heading"
      className={`relative overflow-hidden border-y transition-colors duration-300 ${
        d
          ? "bg-[#061923] border-white/[0.08]"
          : "bg-[#f7f8f8] border-slate-200"
      }`}
    >
      {/* ==================================================
          SUBTLE BACKGROUND
      ================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className={`absolute inset-0 ${
            d
              ? "bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(15,23,42,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.022)_1px,transparent_1px)]"
          } bg-[size:48px_48px]`}
        />

        <div
          className={`absolute
            top-[-120px]
            left-1/2
            -translate-x-1/2
            w-[520px]
            h-[260px]
            rounded-full
            blur-[130px]
            ${
              d
                ? "bg-cyan-400/[0.04]"
                : "bg-cyan-200/[0.16]"
            }
          `}
        />
      </div>

      <div className="relative z-10">
        {/* ==================================================
            INTRO
        ================================================== */}

        <div
          className="
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            pt-9 pb-7
            sm:pt-11 sm:pb-9
          "
        >
          <div className="max-w-3xl">
            {/* LABEL */}

            <div
              className={`inline-flex items-center gap-2
                text-[9px] sm:text-[10px]
                font-black uppercase
                tracking-[0.2em]
                mb-3
                ${
                  d
                    ? "text-cyan-400"
                    : "text-[#08788c]"
                }
              `}
            >
              <span
                className={`w-6 h-[2px] rounded-full ${
                  d ? "bg-cyan-400" : "bg-[#08788c]"
                }`}
              />

              Why DevZore
            </div>

            {/* HEADING */}

            <h2
              id="devzore-trust-heading"
              className={`text-[27px]
                sm:text-[34px]
                lg:text-[40px]
                leading-[1.1]
                font-black
                tracking-[-0.03em]
                ${
                  d ? "text-white" : "text-[#061923]"
                }
              `}
            >
              Built around your business,
              <span
                className={
                  d
                    ? "text-cyan-400"
                    : "text-[#08788c]"
                }
              >
                {" "}
                not a template.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className={`mt-4
                max-w-2xl
                text-[12px]
                sm:text-[14px]
                leading-6
                sm:leading-7
                ${
                  d
                    ? "text-slate-400"
                    : "text-slate-600"
                }
              `}
            >
              From business systems and e-commerce platforms
              to SaaS products, websites and mobile
              applications, DevZore builds digital solutions
              around real requirements, users and business
              workflows.
            </p>
          </div>
        </div>

        {/* ==================================================
            CAPABILITIES
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
              px-4 sm:px-6 lg:px-8
              py-5 sm:py-7
            "
          >
            <div
              className="
                grid
                grid-cols-2
                lg:grid-cols-4
                gap-2.5
                sm:gap-4
              "
            >
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`relative
                      overflow-hidden
                      min-w-0
                      p-3.5
                      sm:p-5
                      rounded-xl
                      border
                      transition-colors
                      duration-200
                      ${
                        d
                          ? "bg-white/[0.025] border-white/[0.08] hover:bg-white/[0.04]"
                          : "bg-white border-slate-200 hover:border-[#061923]"
                      }
                    `}
                  >
                    {/* TOP ACCENT LINE */}

                    <span
                      className={`absolute
                        top-0 left-0 right-0
                        h-[2px]
                        ${
                          d
                            ? "bg-cyan-400"
                            : "bg-[#061923]"
                        }
                      `}
                    />

                    {/* ICON */}

                    <div
                      className={`w-9 h-9
                        sm:w-10 sm:h-10
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        mb-3 sm:mb-4
                        ${
                          d
                            ? "bg-white/[0.06] text-cyan-400"
                            : "bg-[#061923]/[0.06] text-[#061923]"
                        }
                      `}
                    >
                      <Icon
                        size={17}
                        aria-hidden="true"
                      />
                    </div>

                    {/* TITLE */}

                    <h3
                      className={`text-[11px]
                        sm:text-[14px]
                        font-black
                        leading-[1.35]
                        ${
                          d
                            ? "text-white"
                            : "text-[#061923]"
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className={`mt-1.5
                        text-[8.5px]
                        sm:text-[11px]
                        leading-[1.6]
                        ${
                          d
                            ? "text-slate-500"
                            : "text-slate-500"
                        }
                      `}
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
            TECHNOLOGIES
        ================================================== */}

        <div className="py-6 sm:py-8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                mb-4
              "
            >
              <p
                className={`text-[9px]
                  sm:text-[10px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  ${
                    d
                      ? "text-slate-500"
                      : "text-slate-400"
                  }
                `}
              >
                Technologies We Work With
              </p>

              <span
                className={`hidden sm:block
                  h-px flex-1
                  ${
                    d
                      ? "bg-white/[0.07]"
                      : "bg-slate-200"
                  }
                `}
              />
            </div>
          </div>

          {/* MARQUEE */}

          <div className="relative flex overflow-hidden">
            {/* LEFT FADE */}

            <div
              aria-hidden="true"
              className={`absolute
                left-0 top-0 bottom-0
                w-10 sm:w-28
                z-10
                pointer-events-none
                ${
                  d
                    ? "bg-gradient-to-r from-[#061923] to-transparent"
                    : "bg-gradient-to-r from-[#f7f8f8] to-transparent"
                }
              `}
            />

            {/* RIGHT FADE */}

            <div
              aria-hidden="true"
              className={`absolute
                right-0 top-0 bottom-0
                w-10 sm:w-28
                z-10
                pointer-events-none
                ${
                  d
                    ? "bg-gradient-to-l from-[#061923] to-transparent"
                    : "bg-gradient-to-l from-[#f7f8f8] to-transparent"
                }
              `}
            />

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
                      items-center
                      gap-2
                      mx-1.5
                      px-3 py-2
                      sm:px-4 sm:py-2.5
                      rounded-lg
                      border
                      text-[9px]
                      sm:text-[11px]
                      font-semibold
                      flex-shrink-0
                      ${
                        d
                          ? "bg-white/[0.035] border-white/[0.08] text-slate-400"
                          : "bg-white border-slate-200 text-slate-600"
                      }
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className={`w-1.5 h-1.5 rounded-full ${
                        d
                          ? "bg-cyan-400"
                          : "bg-[#08788c]"
                      }`}
                    />

                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* ==================================================
            TRUST + CTA
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
                flex
                flex-col
                xl:flex-row
                xl:items-center
                xl:justify-between
                gap-5
              "
            >
              {/* ============================================
                  ASSURANCES
              ============================================ */}

              <div
                className="
                  grid
                  grid-cols-2
                  sm:flex
                  sm:flex-wrap
                  gap-x-4
                  gap-y-3
                  sm:gap-x-6
                "
              >
                {assurances.map((item) => (
                  <span
                    key={item}
                    className={`inline-flex
                      items-center
                      gap-2
                      text-[9px]
                      sm:text-[11px]
                      font-semibold
                      ${
                        d
                          ? "text-slate-400"
                          : "text-slate-600"
                      }
                    `}
                  >
                    <CheckCircle2
                      size={13}
                      className={
                        d
                          ? "text-cyan-400 shrink-0"
                          : "text-[#08788c] shrink-0"
                      }
                      aria-hidden="true"
                    />

                    {item}
                  </span>
                ))}
              </div>

              {/* ============================================
                  CTA BUTTONS
              ============================================ */}

              <div
                className="
                  grid
                  grid-cols-2
                  sm:flex
                  gap-2.5
                  w-full
                  xl:w-auto
                "
              >
                {/* SECONDARY */}

                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className={`inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-4
                    sm:px-5
                    py-2.5
                    rounded-lg
                    border
                    text-[9px]
                    sm:text-[11px]
                    font-bold
                    transition-colors
                    ${
                      d
                        ? "border-white/[0.12] text-white hover:bg-white/[0.05]"
                        : "border-slate-300 text-[#061923] hover:border-[#061923]"
                    }
                  `}
                >
                  <MessageCircle
                    size={13}
                    aria-hidden="true"
                  />

                  <span className="whitespace-nowrap">
                    Discuss Project
                  </span>
                </Link>

                {/* PRIMARY */}

                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-4
                    sm:px-5
                    py-2.5
                    rounded-lg
                    bg-[#061923]
                    border
                    border-[#061923]
                    hover:bg-[#061923]
                    hover:border-[#061923]
                    text-white
                    text-[9px]
                    sm:text-[11px]
                    font-bold
                    transition-colors
                  "
                >
                  <span className="whitespace-nowrap">
                    Free Consultation
                  </span>

                  <ArrowRight
                    size={13}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;