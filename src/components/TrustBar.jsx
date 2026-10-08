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

// ======================================================
// TRUST BAR
// ======================================================

const TrustBar = ({ isDark = false }) => {
  const d = isDark;

  // ====================================================
  // TECHNOLOGIES
  // ====================================================

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

  // ====================================================
  // CAPABILITIES
  // ====================================================

  const capabilities = [
    {
      icon: Code2,
      title: "Custom Development",
      description:
        "Solutions designed around your business requirements, workflows and goals.",
    },
    {
      icon: Smartphone,
      title: "Responsive by Default",
      description:
        "Consistent digital experiences across mobile, tablet and desktop devices.",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description:
        "Fast, clean and maintainable products built with modern technologies.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Delivery",
      description:
        "Structured planning, development, testing and support from start to launch.",
    },
  ];

  // ====================================================
  // ASSURANCES
  // ====================================================

  const assurances = [
    "Clear Project Scope",
    "Direct Communication",
    "Source Code Handover",
    "Post-Launch Support",
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
      id="why-devzore"
      aria-labelledby="devzore-trust-heading"
      className={`
        relative
        overflow-hidden
        border-y
        transition-colors
        duration-300

        ${
          d
            ? "border-white/[0.08] bg-[#061923]"
            : "border-slate-200 bg-[#f7f9fa]"
        }
      `}
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* GRID */}

        <div
          className={`
            absolute
            inset-0

            ${
              d
                ? "bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]"
                : "bg-[linear-gradient(rgba(7,25,35,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(7,25,35,0.025)_1px,transparent_1px)]"
            }

            bg-[size:48px_48px]
          `}
        />

        {/* SOFT GLOW */}

        <div
          className={`
            absolute

            -top-[130px]
            left-1/2

            h-[260px]
            w-[520px]

            -translate-x-1/2

            rounded-full

            blur-[130px]

            ${
              d
                ? "bg-[#22bdca]/[0.05]"
                : "bg-[#22bdca]/[0.10]"
            }
          `}
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10">
        {/* =================================================
            INTRO
        ================================================= */}

        <div
          className="
            mx-auto
            max-w-7xl

            px-5
            sm:px-6
            lg:px-8

            pt-6
            pb-5

            sm:pt-7
            sm:pb-6

            lg:pt-8
            lg:pb-7
          "
        >
          <div className="max-w-[780px]">
            {/* LABEL */}

            <div
              className={`
                mb-2.5

                inline-flex
                items-center

                gap-2

                text-[8px]
                sm:text-[9px]

                font-bold

                uppercase

                tracking-[0.19em]

                ${
                  d
                    ? "text-[#22bdca]"
                    : "text-[#07899a]"
                }
              `}
            >
              <span
                className={`
                  h-[2px]
                  w-5

                  rounded-full

                  ${
                    d
                      ? "bg-[#22bdca]"
                      : "bg-[#07899a]"
                  }
                `}
              />

              Why DevZore
            </div>

            {/* HEADING */}

            <h2
              id="devzore-trust-heading"
              className={`
                max-w-[760px]

                text-[24px]
                min-[380px]:text-[26px]

                sm:text-[30px]
                md:text-[33px]

                lg:text-[36px]
                xl:text-[38px]

                leading-[1.08]

                font-bold

                tracking-[-0.035em]

                ${
                  d
                    ? "text-white"
                    : "text-[#071923]"
                }
              `}
            >
              Built for real business needs,
              <span
                className={
                  d
                    ? "text-[#28c5d4]"
                    : "text-[#07899a]"
                }
              >
                {" "}
                not generic solutions.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className={`
                mt-3

                max-w-[690px]

                text-[11px]
                sm:text-[12.5px]
                lg:text-[13px]

                leading-[1.7]

                ${
                  d
                    ? "text-slate-400"
                    : "text-slate-600"
                }
              `}
            >
              DevZore designs websites, software,
              SaaS platforms and mobile products
              around how your business actually
              works — with clear goals, real users
              and scalable technology in mind.
            </p>
          </div>
        </div>

        {/* =================================================
            CAPABILITIES
        ================================================= */}

        <div
          className={`
            border-y

            ${
              d
                ? "border-white/[0.07]"
                : "border-slate-200"
            }
          `}
        >
          <div
            className="
              mx-auto
              max-w-7xl

              px-5
              sm:px-6
              lg:px-8

              py-4
              sm:py-5
              lg:py-6
            "
          >
            <div
              className="
                grid
                grid-cols-2
                lg:grid-cols-4

                gap-2.5
                sm:gap-3
                lg:gap-4
              "
            >
              {capabilities.map(
                (item) => {
                  const Icon =
                    item.icon;

                  return (
                    <div
                      key={
                        item.title
                      }
                      className={`
                        group
                        relative

                        min-w-0

                        overflow-hidden

                        rounded-xl

                        border

                        p-3
                        sm:p-4
                        lg:p-4.5

                        transition-all
                        duration-300

                        ${
                          d
                            ? "border-white/[0.08] bg-white/[0.025] hover:border-[#22bdca]/30 hover:bg-white/[0.045]"
                            : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-[#0796A8]/40 hover:shadow-[0_12px_35px_rgba(7,25,35,0.06)]"
                        }
                      `}
                    >
                      {/* TOP ACCENT */}

                      <span
                        aria-hidden="true"
                        className={`
                          absolute

                          left-0
                          right-0
                          top-0

                          h-[2px]

                          ${
                            d
                              ? "bg-[#22bdca]"
                              : "bg-gradient-to-r from-[#071923] to-[#22bdca]"
                          }
                        `}
                      />

                      {/* ICON */}

                      <div
                        className={`
                          mb-2.5

                          flex

                          h-8
                          w-8

                          sm:h-9
                          sm:w-9

                          items-center
                          justify-center

                          rounded-lg

                          ${
                            d
                              ? "bg-white/[0.06] text-[#22bdca]"
                              : "bg-[#edf4f5] text-[#07899a]"
                          }
                        `}
                      >
                        <Icon
                          size={15}
                          aria-hidden="true"
                        />
                      </div>

                      {/* TITLE */}

                      <h3
                        className={`
                          text-[10.5px]
                          sm:text-[12px]
                          lg:text-[13px]

                          leading-[1.35]

                          font-semibold

                          ${
                            d
                              ? "text-white"
                              : "text-[#071923]"
                          }
                        `}
                      >
                        {item.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className={`
                          mt-1.5

                          text-[8.5px]
                          sm:text-[9.5px]
                          lg:text-[10px]

                          leading-[1.6]

                          ${
                            d
                              ? "text-slate-500"
                              : "text-slate-500"
                          }
                        `}
                      >
                        {
                          item.description
                        }
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        <div
          className="
            overflow-hidden

            py-4
            sm:py-5
            lg:py-6
          "
        >
          <div
            className="
              mx-auto
              max-w-7xl

              px-5
              sm:px-6
              lg:px-8
            "
          >
            <div
              className="
                mb-3

                flex
                items-center

                gap-4
              "
            >
              <p
                className={`
                  shrink-0

                  text-[8px]
                  sm:text-[9px]

                  font-bold

                  uppercase

                  tracking-[0.17em]

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
                className={`
                  hidden
                  h-px
                  flex-1

                  sm:block

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

          <div
            className="
              relative
              flex
              overflow-hidden
            "
          >
            {/* LEFT FADE */}

            <div
              aria-hidden="true"
              className={`
                pointer-events-none

                absolute
                bottom-0
                left-0
                top-0

                z-10

                w-8
                sm:w-24

                ${
                  d
                    ? "bg-gradient-to-r from-[#061923] to-transparent"
                    : "bg-gradient-to-r from-[#f7f9fa] to-transparent"
                }
              `}
            />

            {/* RIGHT FADE */}

            <div
              aria-hidden="true"
              className={`
                pointer-events-none

                absolute
                bottom-0
                right-0
                top-0

                z-10

                w-8
                sm:w-24

                ${
                  d
                    ? "bg-gradient-to-l from-[#061923] to-transparent"
                    : "bg-gradient-to-l from-[#f7f9fa] to-transparent"
                }
              `}
            />

            <div
              className="
                trust-tech-marquee

                flex
                w-max

                whitespace-nowrap
              "
            >
              {[...technologies, ...technologies].map(
                (
                  technology,
                  index
                ) => (
                  <span
                    key={`${technology}-${index}`}
                    className={`
                      mx-1.5

                      inline-flex
                      flex-shrink-0

                      items-center

                      gap-2

                      rounded-lg

                      border

                      px-3
                      py-2

                      sm:px-3.5

                      text-[8.5px]
                      sm:text-[10px]

                      font-semibold

                      ${
                        d
                          ? "border-white/[0.08] bg-white/[0.035] text-slate-400"
                          : "border-slate-200 bg-white text-slate-600"
                      }
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className={`
                        h-1.5
                        w-1.5

                        rounded-full

                        ${
                          d
                            ? "bg-[#22bdca]"
                            : "bg-[#07899a]"
                        }
                      `}
                    />

                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            TRUST + CTA
        ================================================= */}

        <div
          className={`
            border-t

            ${
              d
                ? "border-white/[0.07]"
                : "border-slate-200"
            }
          `}
        >
          <div
            className="
              mx-auto
              max-w-7xl

              px-5
              sm:px-6
              lg:px-8

              py-4
              sm:py-5
            "
          >
            <div
              className="
                flex
                flex-col

                gap-4

                xl:flex-row
                xl:items-center
                xl:justify-between
              "
            >
              {/* ASSURANCES */}

              <div
                className="
                  grid
                  grid-cols-2

                  gap-x-3
                  gap-y-2.5

                  sm:flex
                  sm:flex-wrap
                  sm:gap-x-5
                "
              >
                {assurances.map(
                  (item) => (
                    <span
                      key={item}
                      className={`
                        inline-flex

                        items-center

                        gap-1.5

                        text-[8.5px]
                        sm:text-[10px]

                        font-semibold

                        ${
                          d
                            ? "text-slate-400"
                            : "text-slate-600"
                        }
                      `}
                    >
                      <CheckCircle2
                        size={12}
                        className={`
                          shrink-0

                          ${
                            d
                              ? "text-[#22bdca]"
                              : "text-[#07899a]"
                          }
                        `}
                        aria-hidden="true"
                      />

                      {item}
                    </span>
                  )
                )}
              </div>

              {/* CTA */}

              <div
                className="
                  grid
                  w-full
                  grid-cols-2

                  gap-2

                  sm:flex

                  xl:w-auto
                "
              >
                {/* SECONDARY */}

                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className={`
                    inline-flex

                    min-h-[39px]

                    items-center
                    justify-center

                    gap-2

                    rounded-lg

                    border

                    px-3.5
                    sm:px-4

                    py-2

                    text-[8.5px]
                    sm:text-[10px]

                    font-semibold

                    transition-all
                    duration-200

                    ${
                      d
                        ? "border-white/[0.12] text-white hover:border-[#22bdca]/40 hover:bg-white/[0.05]"
                        : "border-slate-300 text-[#071923] hover:border-[#0796A8]"
                    }
                  `}
                >
                  <MessageCircle
                    size={12}
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
                    group

                    inline-flex

                    min-h-[39px]

                    items-center
                    justify-center

                    gap-2

                    rounded-lg

                    border
                    border-[#071923]

                    bg-[#071923]

                    px-3.5
                    sm:px-4

                    py-2

                    text-[8.5px]
                    sm:text-[10px]

                    font-semibold

                    text-white

                    transition-all
                    duration-200

                    hover:bg-[#0b2633]
                  "
                >
                  <span className="whitespace-nowrap">
                    Free Consultation
                  </span>

                  <ArrowRight
                    size={12}
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-200

                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          LOCAL ANIMATION
      ================================================= */}

      <style>
        {`
          @keyframes trustTechMarquee {
            from {
              transform: translate3d(0, 0, 0);
            }

            to {
              transform: translate3d(-50%, 0, 0);
            }
          }

          .trust-tech-marquee {
            animation:
              trustTechMarquee
              30s
              linear
              infinite;

            will-change: transform;
            backface-visibility: hidden;
            transform: translateZ(0);
          }

          @media (max-width: 480px) {
            .trust-tech-marquee {
              animation-duration: 24s;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .trust-tech-marquee {
              animation: none !important;
              transform: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default TrustBar;