import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const WhyUs = () => {
  // ======================================================
  // WHY DEVZORE
  // ======================================================

  const reasons = [
    {
      icon: Code2,
      number: "01",
      title: "Business-Focused",
      desc: "Solutions built around your actual business requirements.",
    },
    {
      icon: MessageCircle,
      number: "02",
      title: "Clear Communication",
      desc: "Clear requirements, progress updates and feedback throughout.",
    },
    {
      icon: Gauge,
      number: "03",
      title: "Performance Mindset",
      desc: "Fast, practical and responsive digital experiences.",
    },
    {
      icon: Smartphone,
      number: "04",
      title: "Responsive by Default",
      desc: "Built to work smoothly across mobile, tablet and desktop.",
    },
    {
      icon: ShieldCheck,
      number: "05",
      title: "Maintainable Code",
      desc: "Structured development designed for easier future updates.",
    },
    {
      icon: Headphones,
      number: "06",
      title: "Ongoing Support",
      desc: "Maintenance, improvements and new features after launch.",
    },
  ];

  // ======================================================
  // PROJECT ASSURANCES
  // ======================================================

  const assurances = [
    "Clear project scope",
    "Source code handover",
    "Modern technology stack",
    "Direct communication",
    "Responsive development",
    "Post-launch support",
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
      id="why-us"
      aria-labelledby="whyus-heading"
      className="relative overflow-hidden bg-[#061923] text-white"
    >
      {/* ==================================================
          BACKGROUND DETAILS
      ================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />

        <div
          className="
            absolute -top-40 -right-28
            h-[380px] w-[380px]
            rounded-full
            bg-cyan-500/[0.08]
            blur-[130px]
          "
        />

        <div
          className="
            absolute -bottom-48 -left-24
            h-[360px] w-[360px]
            rounded-full
            bg-blue-600/[0.07]
            blur-[140px]
          "
        />
      </div>

      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

        {/* ==================================================
            TOP SECTION
        ================================================== */}

        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          {/* LEFT */}

          <div className="max-w-xl">
            <p
              className="
                mb-3
                font-mono
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-cyan-400
                sm:text-[10px]
              "
            >
              Why DevZore
            </p>

            <h2
              id="whyus-heading"
              className="
                max-w-[620px]
                text-[27px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                sm:text-[34px]
                lg:text-[40px]
                xl:text-[43px]
              "
            >
              A practical development partner for{" "}
              <span className="text-cyan-400">
                digital products.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-lg
                text-[11px]
                leading-[1.75]
                text-slate-300
                sm:text-[13px]
                sm:leading-6
              "
            >
              DevZore helps businesses turn requirements into
              websites, applications and software products with
              a clear development process and modern technology.
            </p>

            {/* ASSURANCES */}

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              {assurances.map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-2
                    text-[9px]
                    font-medium
                    text-slate-300
                    sm:text-[11px]
                  "
                >
                  <span
                    className="
                      flex h-4 w-4 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-cyan-400/10
                      text-cyan-400
                    "
                  >
                    <Check size={10} strokeWidth={3} />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-7">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="
                  group
                  inline-flex items-center justify-center gap-2
                  rounded-lg
                  bg-white
                  px-5 py-3
                  text-[10px]
                  font-bold
                  text-[#061923]
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-cyan-50
                  sm:text-[11px]
                "
              >
                Discuss Your Project

                <ArrowRight
                  size={13}
                  className="
                    transition-transform duration-200
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>

          {/* ==================================================
              RIGHT — REASONS GRID
          ================================================== */}

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border border-white/[0.08]
                    bg-white/[0.035]
                    p-3
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-cyan-400/30
                    hover:bg-white/[0.055]
                    sm:p-4
                  "
                >
                  {/* TOP LINE */}

                  <div
                    className="
                      absolute left-0 top-0
                      h-[2px] w-full
                      bg-gradient-to-r
                      from-cyan-400
                      via-cyan-400/50
                      to-transparent
                      opacity-70
                    "
                  />

                  {/* NUMBER */}

                  <span
                    className="
                      absolute right-3 top-3
                      font-mono
                      text-[8px]
                      font-bold
                      text-white/20
                    "
                  >
                    {reason.number}
                  </span>

                  {/* ICON */}

                  <div
                    className="
                      mb-3
                      flex h-8 w-8
                      items-center justify-center
                      rounded-lg
                      border border-white/[0.07]
                      bg-white/[0.05]
                      text-cyan-400
                      transition-colors duration-300
                      group-hover:bg-cyan-400
                      group-hover:text-[#061923]
                    "
                  >
                    <Icon size={14} />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      pr-3
                      text-[11px]
                      font-semibold
                      leading-tight
                      text-white
                      sm:text-[13px]
                    "
                  >
                    {reason.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-1.5
                      text-[8.5px]
                      leading-[1.55]
                      text-slate-400
                      sm:text-[10px]
                    "
                  >
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            BOTTOM DIVIDER
        ================================================== */}

        <div className="my-8 border-t border-white/[0.08] sm:my-10" />

        {/* ==================================================
            PROJECT CTA
        ================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-xl
            border border-white/[0.08]
            bg-white/[0.035]
            px-4 py-5
            sm:px-6 sm:py-6
            lg:px-7
          "
        >
          {/* GLOW */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -right-16 -top-24
              h-64 w-64
              rounded-full
              bg-cyan-400/[0.08]
              blur-[90px]
            "
          />

          <div
            className="
              relative z-10
              flex flex-col gap-5
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* TEXT */}

            <div className="max-w-2xl">
              <p
                className="
                  font-mono
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-cyan-400
                  sm:text-[9px]
                "
              >
                Have a project in mind?
              </p>

              <h3
                className="
                  mt-1.5
                  text-[20px]
                  font-semibold
                  leading-tight
                  tracking-[-0.025em]
                  text-white
                  sm:text-[24px]
                "
              >
                Tell us what you want to build.
              </h3>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-[10px]
                  leading-[1.65]
                  text-slate-400
                  sm:text-[11px]
                "
              >
                Share your requirements and we can discuss the
                right approach for your website, application or
                software product.
              </p>
            </div>

            {/* BUTTONS */}

            <div className="flex flex-row gap-2 lg:shrink-0">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="
                  group
                  inline-flex flex-1
                  items-center justify-center gap-2
                  whitespace-nowrap
                  rounded-lg
                  bg-white
                  px-4 py-2.5
                  text-[9px]
                  font-bold
                  text-[#061923]
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-cyan-50
                  sm:flex-none
                  sm:px-5
                  sm:text-[10px]
                "
              >
                Start a Project

                <ArrowRight
                  size={12}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss a project with DevZore on WhatsApp"
                className="
                  inline-flex flex-1
                  items-center justify-center
                  whitespace-nowrap
                  rounded-lg
                  border border-cyan-400/25
                  bg-cyan-400/[0.07]
                  px-4 py-2.5
                  text-[9px]
                  font-bold
                  text-cyan-300
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/[0.12]
                  sm:flex-none
                  sm:px-5
                  sm:text-[10px]
                "
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