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

const Solutions = () => {
  // ======================================================
  // SOLUTIONS DATA
  // ======================================================

  const solutions = [
    {
      icon: Rocket,
      title: "Startups & MVPs",
      subtitle: "From idea to first launch",
      description:
        "Focused MVP development for startups that need to validate an idea and launch a practical first version.",
      points: [
        "MVP Development",
        "Core Feature Planning",
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
        "Custom software for managing business workflows, internal data and repetitive operational processes.",
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
      subtitle: "Build and manage online sales",
      description:
        "E-commerce solutions for products, customers, orders, payments and responsive online shopping experiences.",
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
      subtitle: "Build scalable digital products",
      description:
        "SaaS applications with user accounts, dashboards, APIs and subscription-based product workflows.",
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
        "Generative AI integrations for applications, assistants and practical business workflows.",
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
        "Technical SEO and digital marketing support focused on stronger search visibility and online presence.",
      points: [
        "Technical SEO",
        "Search Strategy",
        "Digital Marketing",
      ],
      path: "/seo-services",
      number: "06",
    },
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
      id="solutions"
      aria-labelledby="solutions-heading"
      className="
        relative
        overflow-hidden
        bg-[#f6f7f7]
        border-y
        border-slate-200
        py-12
        sm:py-14
        lg:py-16
      "
    >
      {/* ==================================================
          SUBTLE BACKGROUND GRID
      ================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(rgba(6,25,35,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(6,25,35,0.025)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* ==================================================
          CONTAINER
      ================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-5
            mb-8
            sm:mb-10
          "
        >
          {/* LEFT */}

          <div className="max-w-3xl">

            {/* LABEL */}

            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-[2px] bg-[#17bebb]" />

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#061923]/60
                "
              >
                Solutions That Work
              </span>
            </div>

            {/* HEADING */}

            <h2
              id="solutions-heading"
              className="
                max-w-[800px]
                text-[28px]
                sm:text-[36px]
                lg:text-[44px]
                font-semibold
                tracking-[-0.035em]
                leading-[1.07]
                text-[#061923]
              "
            >
              Solutions built around
              <span className="block">
                real business needs.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4
                max-w-2xl
                text-[12px]
                sm:text-[14px]
                leading-6
                sm:leading-7
                text-slate-600
              "
            >
              From startup MVPs and business systems to e-commerce,
              SaaS and AI integrations, we build digital solutions
              around practical requirements.
            </p>
          </div>

          {/* DESKTOP BUTTON */}

          <Link
            to="/allservices"
            onClick={scrollTop}
            className="
              hidden
              lg:inline-flex
              items-center
              justify-center
              gap-2
              shrink-0

              px-5
              py-3

              rounded-lg
              bg-white
              border
              border-slate-200

              shadow-[0_3px_10px_rgba(6,25,35,0.07)]

              text-[11px]
              font-bold
              text-[#061923]

              transition-all
              duration-200

              hover:border-[#061923]/30
              hover:shadow-[0_5px_14px_rgba(6,25,35,0.10)]
            "
          >
            Explore Capabilities
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* ==================================================
            SOLUTION CARDS
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
                className="
                  group
                  relative

                  flex
                  flex-col

                  min-w-0
                  overflow-hidden

                  min-h-[215px]
                  min-[420px]:min-h-[240px]
                  sm:min-h-[280px]

                  p-3
                  sm:p-5

                  rounded-xl
                  sm:rounded-2xl

                  bg-white

                  border
                  border-slate-200

                  shadow-[0_5px_18px_rgba(6,25,35,0.045)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:border-slate-300
                  hover:shadow-[0_10px_26px_rgba(6,25,35,0.08)]
                "
              >
                {/* ==================================================
                    PERMANENT TOP ACCENT LINE
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-[2px]

                    bg-gradient-to-r
                    from-[#0d5066]
                    via-[#118da0]
                    to-[#17bebb]
                  "
                />

                {/* ==================================================
                    TOP ROW
                ================================================== */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-2
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      w-8
                      h-8

                      sm:w-10
                      sm:h-10

                      rounded-lg
                      sm:rounded-xl

                      flex
                      items-center
                      justify-center

                      shrink-0

                      bg-[#061923]/[0.055]
                      text-[#0d5066]

                      transition-colors
                      duration-200

                      group-hover:bg-[#061923]/[0.075]
                    "
                  >
                    <Icon
                      size={16}
                      className="sm:w-[18px] sm:h-[18px]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* NUMBER */}

                  <span
                    className="
                      text-[8px]
                      sm:text-[9px]
                      font-black
                      tracking-[0.08em]
                      text-slate-300
                    "
                  >
                    {solution.number}
                  </span>
                </div>

                {/* ==================================================
                    CONTENT
                ================================================== */}

                <div className="mt-3 sm:mt-4">

                  {/* AI BADGE */}

                  {solution.featured && (
                    <span
                      className="
                        inline-flex
                        mb-2

                        px-2
                        py-0.5

                        rounded-full

                        bg-[#17bebb]/[0.08]
                        border
                        border-[#17bebb]/20

                        text-[7px]
                        sm:text-[8px]

                        uppercase
                        font-black
                        tracking-[0.12em]

                        text-[#087f8c]
                      "
                    >
                      AI Solution
                    </span>
                  )}

                  {/* TITLE */}

                  <h3
                    className="
                      text-[12px]
                      sm:text-[16px]

                      font-bold
                      tracking-[-0.015em]
                      leading-tight

                      text-[#061923]
                    "
                  >
                    {solution.title}
                  </h3>

                  {/* SUBTITLE */}

                  <p
                    className="
                      mt-1

                      text-[8px]
                      sm:text-[10px]

                      font-semibold
                      text-slate-400
                    "
                  >
                    {solution.subtitle}
                  </p>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-2
                      sm:mt-3

                      text-[9px]
                      sm:text-[11px]

                      leading-[1.55]
                      sm:leading-[1.65]

                      text-slate-500
                    "
                  >
                    {solution.description}
                  </p>
                </div>

                {/* ==================================================
                    POINTS
                ================================================== */}

                <div
                  className="
                    hidden
                    min-[420px]:block

                    mt-3
                    sm:mt-4

                    space-y-1.5
                  "
                >
                  {solution.points.map((point) => (
                    <div
                      key={point}
                      className="
                        flex
                        items-center
                        gap-1.5

                        text-[8px]
                        sm:text-[10px]

                        font-medium
                        text-slate-600
                      "
                    >
                      <CheckCircle2
                        size={10}
                        aria-hidden="true"
                        className="
                          shrink-0
                          text-[#0ea5b7]
                        "
                      />

                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* ==================================================
                    CTA
                ================================================== */}

                <div
                  className="
                    mt-auto
                    pt-3
                    sm:pt-5

                    flex
                    items-center
                    gap-1.5

                    text-[9px]
                    sm:text-[10px]

                    font-bold
                    text-[#061923]
                  "
                >
                  Explore Solution

                  <ArrowRight
                    size={11}
                    className="
                      transition-transform
                      duration-200

                      group-hover:translate-x-1
                    "
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ==================================================
            BOTTOM CTA
        ================================================== */}

        <div
          className="
            relative
            overflow-hidden

            mt-7
            sm:mt-9

            rounded-xl
            sm:rounded-2xl

            bg-white

            border
            border-slate-200

            shadow-[0_5px_18px_rgba(6,25,35,0.045)]

            px-4
            py-4

            sm:px-6
            sm:py-5

            flex
            flex-col

            sm:flex-row
            sm:items-center
            sm:justify-between

            gap-4
          "
        >
          {/* LEFT ACCENT */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-0
              top-0
              bottom-0

              w-[3px]

              bg-gradient-to-b
              from-[#0d5066]
              to-[#17bebb]
            "
          />

          {/* TEXT */}

          <div className="max-w-2xl">
            <span
              className="
                text-[8px]
                sm:text-[9px]

                uppercase
                tracking-[0.18em]
                font-black

                text-[#087f8c]
              "
            >
              Custom Requirements
            </span>

            <h3
              className="
                mt-1

                text-[14px]
                sm:text-[17px]

                font-bold
                tracking-[-0.02em]

                text-[#061923]
              "
            >
              Have a different business challenge?
            </h3>

            <p
              className="
                mt-1

                text-[10px]
                sm:text-[11px]

                leading-relaxed
                text-slate-500
              "
            >
              Share your requirements and we can discuss an approach
              based on your project and business needs.
            </p>
          </div>

          {/* CTA BUTTON */}

          <Link
            to="/contact"
            onClick={scrollTop}
            className="
              inline-flex
              items-center
              justify-center
              gap-2

              shrink-0

              w-full
              sm:w-auto

              px-5
              py-2.5

              rounded-lg

              bg-[#061923]
              border
              border-[#061923]

              text-white

              text-[10px]
              sm:text-[11px]

              font-bold

              transition-all
              duration-200

              hover:shadow-[0_6px_16px_rgba(6,25,35,0.16)]
            "
          >
            Discuss Your Project
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* ==================================================
            MOBILE ALL SERVICES
        ================================================== */}

        <div className="lg:hidden mt-3">
          <Link
            to="/allservices"
            onClick={scrollTop}
            className="
              flex
              items-center
              justify-center
              gap-2

              w-full

              py-3

              rounded-lg

              bg-white

              border
              border-slate-200

              text-[#061923]
              text-[10px]
              font-bold

              transition-all
              duration-200

              hover:border-[#061923]/30
            "
          >
            Explore Our Capabilities
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;