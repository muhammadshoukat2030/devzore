import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Rocket,
  Workflow,
  ShoppingCart,
  Layers3,
  BrainCircuit,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

// ======================================================
// SOLUTIONS
// ======================================================

const Solutions = ({ isDark = true }) => {
  const d = isDark;

  // ====================================================
  // SOLUTION DATA
  // ====================================================

  const solutions = [
    {
      icon: Rocket,
      title: "Startups & MVPs",
      subtitle: "From idea to first launch",
      description:
        "Turn your product idea into a focused MVP designed to validate, launch and improve.",
      points: [
        "MVP Development",
        "Product Validation",
        "Scalable Foundation",
      ],
      path: "/startup-mvp",
      number: "01",
    },

    {
      icon: Workflow,
      title: "Business Automation",
      subtitle: "Simplify daily operations",
      description:
        "Custom software solutions that help businesses manage workflows, data and repetitive processes.",
      points: [
        "Admin Dashboards",
        "Workflow Systems",
        "Custom Software",
      ],
      path: "/web-development",
      number: "02",
    },

    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      subtitle: "Build and grow online",
      description:
        "Digital commerce solutions for managing products, customers, orders and online payments.",
      points: [
        "Online Stores",
        "Payment Integration",
        "Order Management",
      ],
      path: "/ecommerce",
      number: "03",
    },

    {
      icon: Layers3,
      title: "SaaS Platforms",
      subtitle: "Scalable digital products",
      description:
        "Build subscription-based software platforms with dashboards, accounts, APIs and scalable architecture.",
      points: [
        "SaaS Architecture",
        "User Dashboards",
        "Billing & APIs",
      ],
      path: "/saas-product-development",
      number: "04",
    },

    {
      icon: BrainCircuit,
      title: "AI-Powered Solutions",
      subtitle: "Add intelligence to products",
      description:
        "Integrate generative AI and intelligent features into modern web applications and business workflows.",
      points: [
        "Generative AI",
        "AI Integrations",
        "Smart Workflows",
      ],
      path: "/generative-ai-development",
      number: "05",
      featured: true,
    },

    {
      icon: TrendingUp,
      title: "Digital Growth",
      subtitle: "Improve online visibility",
      description:
        "Strengthen your digital presence through search optimization, content structure and marketing strategy.",
      points: [
        "Technical SEO",
        "Search Strategy",
        "Digital Marketing",
      ],
      path: "/seo-services",
      number: "06",
    },
  ];

  // ====================================================
  // SCROLL TOP
  // ====================================================

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className={`relative overflow-hidden border-y transition-colors duration-300 ${
        d
          ? "bg-[#050505] border-white/[0.06]"
          : "bg-white border-slate-200"
      }`}
    >
      {/* ==================================================
          BACKGROUND DECORATION
      ================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        {/* GRID */}

        <div
          className={`absolute inset-0 ${
            d
              ? "bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)]"
          } bg-[size:48px_48px]`}
        />

        {/* GLOW */}

        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2
            w-[500px] h-[250px]
            rounded-full blur-[120px]
            opacity-10
            ${d ? "bg-purple-600" : "bg-purple-300"}
          `}
        />
      </div>

      {/* ==================================================
          CONTAINER
      ================================================== */}

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-12 sm:py-14 lg:py-16
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            flex flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-5
            mb-8 sm:mb-10
          "
        >
          {/* LEFT */}

          <div className="max-w-3xl">
            <div
              className={`inline-flex items-center gap-2
                px-3 py-1.5
                rounded-full border
                text-[9px] sm:text-[10px]
                font-black uppercase
                tracking-[0.18em]
                mb-4
                ${
                  d
                    ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                    : "bg-purple-50 border-purple-200 text-purple-700"
                }
              `}
            >
              Solutions
            </div>

            <h2
              id="solutions-heading"
              className={`text-[28px] sm:text-4xl lg:text-[42px]
                leading-[1.1]
                font-black tracking-tight
                ${
                  d ? "text-white" : "text-slate-950"
                }
              `}
            >
              Solutions for Different
              <span className="text-purple-600">
                {" "}Business Challenges
              </span>
            </h2>

            <p
              className={`mt-4
                max-w-2xl
                text-[13px] sm:text-[15px]
                leading-6 sm:leading-7
                ${
                  d ? "text-gray-400" : "text-slate-600"
                }
              `}
            >
              From launching a startup to automating business
              operations, DevZore builds practical digital
              solutions around your goals, users and
              requirements.
            </p>
          </div>

          {/* DESKTOP LINK */}

          <Link
            to="/allservices"
            onClick={scrollTop}
            className={`hidden lg:inline-flex
              items-center gap-2
              text-[12px] font-bold
              transition-colors
              ${
                d
                  ? "text-gray-400 hover:text-purple-400"
                  : "text-slate-600 hover:text-purple-600"
              }
            `}
          >
            Explore Our Capabilities

            <ArrowRight size={14} />
          </Link>
        </div>

        {/* ==================================================
            SOLUTION CARDS

            Mobile: 2 columns
            Tablet: 2 columns
            Desktop: 3 columns
        ================================================== */}

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-2.5
            sm:gap-4
          "
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <Link
                key={solution.title}
                to={solution.path}
                onClick={scrollTop}
                aria-label={`Explore ${solution.title}`}
                className={`group
                  relative
                  flex flex-col
                  overflow-hidden
                  rounded-xl sm:rounded-2xl
                  border
                  p-3 sm:p-5
                  min-h-[215px] sm:min-h-[275px]
                  transition-all duration-300
                  hover:-translate-y-1
                  ${
                    solution.featured
                      ? d
                        ? "bg-purple-500/[0.07] border-purple-500/25 hover:border-purple-500/50"
                        : "bg-purple-50/60 border-purple-200 hover:border-purple-300"
                      : d
                        ? "bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.04] hover:border-purple-500/25"
                        : "bg-white border-slate-200 hover:border-purple-200 hover:shadow-lg"
                  }
                `}
              >
                {/* ==========================================
                    TOP ROW
                ========================================== */}

                <div className="flex items-start justify-between gap-2">
                  {/* ICON */}

                  <div
                    className={`w-8 h-8
                      sm:w-10 sm:h-10
                      rounded-lg sm:rounded-xl
                      flex items-center justify-center
                      shrink-0
                      transition-all duration-300
                      ${
                        solution.featured
                          ? "bg-purple-600 text-white"
                          : d
                            ? "bg-purple-500/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white"
                            : "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      size={16}
                      className="sm:w-[19px] sm:h-[19px]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* NUMBER */}

                  <span
                    className={`text-[9px] sm:text-[10px]
                      font-mono font-bold
                      ${
                        d
                          ? "text-gray-700"
                          : "text-slate-300"
                      }
                    `}
                  >
                    {solution.number}
                  </span>
                </div>

                {/* ==========================================
                    CONTENT
                ========================================== */}

                <div className="mt-3 sm:mt-5">
                  {/* FEATURED BADGE */}

                  {solution.featured && (
                    <span
                      className={`inline-flex
                        mb-2
                        px-2 py-0.5
                        rounded-full
                        text-[7px] sm:text-[8px]
                        uppercase font-black
                        tracking-[0.12em]
                        ${
                          d
                            ? "bg-purple-500/15 text-purple-300"
                            : "bg-purple-100 text-purple-700"
                        }
                      `}
                    >
                      AI Solution
                    </span>
                  )}

                  <h3
                    className={`text-[12px]
                      sm:text-[16px]
                      font-bold
                      leading-tight
                      transition-colors
                      group-hover:text-purple-500
                      ${
                        d
                          ? "text-white"
                          : "text-slate-900"
                      }
                    `}
                  >
                    {solution.title}
                  </h3>

                  <p
                    className={`mt-1
                      text-[8px] sm:text-[10px]
                      font-semibold
                      ${
                        d
                          ? "text-gray-500"
                          : "text-slate-400"
                      }
                    `}
                  >
                    {solution.subtitle}
                  </p>

                  <p
                    className={`mt-2 sm:mt-3
                      text-[9px] sm:text-[12px]
                      leading-[1.55] sm:leading-5
                      ${
                        d
                          ? "text-gray-500"
                          : "text-slate-500"
                      }
                    `}
                  >
                    {solution.description}
                  </p>
                </div>

                {/* ==========================================
                    POINTS
                    Hidden on very small mobile to keep
                    cards compact.
                ========================================== */}

                <div
                  className="
                    hidden min-[420px]:block
                    mt-3 sm:mt-4
                    space-y-1.5
                  "
                >
                  {solution.points.map((point) => (
                    <div
                      key={point}
                      className={`flex items-center gap-1.5
                        text-[8px] sm:text-[10px]
                        font-medium
                        ${
                          d
                            ? "text-gray-500"
                            : "text-slate-500"
                        }
                      `}
                    >
                      <CheckCircle2
                        size={10}
                        className="text-purple-500 shrink-0"
                        aria-hidden="true"
                      />

                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* ==========================================
                    CTA
                ========================================== */}

                <div
                  className={`mt-auto pt-3 sm:pt-5
                    flex items-center gap-1.5
                    text-[9px] sm:text-[11px]
                    font-bold
                    ${
                      d
                        ? "text-purple-400"
                        : "text-purple-600"
                    }
                  `}
                >
                  Explore Solution

                  <ArrowRight
                    size={11}
                    className="
                      transition-transform duration-200
                      group-hover:translate-x-1
                    "
                  />
                </div>

                {/* ==========================================
                    HOVER GLOW
                ========================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-12 -bottom-12
                    w-28 h-28
                    rounded-full
                    bg-purple-600/0
                    blur-3xl
                    group-hover:bg-purple-600/10
                    transition-all duration-500
                    pointer-events-none
                  "
                />
              </Link>
            );
          })}
        </div>

        {/* ==================================================
            BOTTOM STRIP
        ================================================== */}

        <div
          className={`mt-7 sm:mt-9
            rounded-xl sm:rounded-2xl
            border
            px-4 py-4
            sm:px-6 sm:py-5
            flex flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-4
            ${
              d
                ? "bg-white/[0.02] border-white/[0.07]"
                : "bg-slate-50 border-slate-200"
            }
          `}
        >
          <div>
            <h3
              className={`text-[13px] sm:text-[15px]
                font-bold
                ${
                  d ? "text-white" : "text-slate-900"
                }
              `}
            >
              Have a different business challenge?
            </h3>

            <p
              className={`mt-1
                text-[10px] sm:text-[12px]
                ${
                  d
                    ? "text-gray-500"
                    : "text-slate-500"
                }
              `}
            >
              Tell us what you need and we can discuss a
              solution around your requirements.
            </p>
          </div>

          <Link
            to="/contact"
            onClick={scrollTop}
            className="
              inline-flex
              items-center justify-center
              gap-2
              shrink-0
              px-5 py-2.5
              rounded-lg
              bg-purple-600
              hover:bg-purple-700
              text-white
              text-[11px] sm:text-[12px]
              font-bold
              transition-all duration-200
              hover:-translate-y-0.5
              hover:shadow-[0_0_20px_rgba(124,58,237,0.25)]
            "
          >
            Discuss Your Project

            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;