import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Code2,
  Layers3,
  Megaphone,
  Palette,
  Search,
  Server,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  Wrench,
} from "lucide-react";

const Services = () => {
  // ======================================================
  // SERVICES
  // ======================================================

  const services = [
    {
      icon: Bot,
      title: "Generative AI",
      description:
        "AI assistants, LLM integrations and intelligent workflows for modern digital products.",
      path: "/generative-ai-development",
      accent: "from-violet-500 to-purple-500",
    },
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Responsive websites and web applications built with modern frontend and backend technologies.",
      path: "/web-development",
      accent: "from-cyan-500 to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Cross-platform mobile applications with practical interfaces, APIs and business functionality.",
      path: "/mobile-apps",
      accent: "from-blue-500 to-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "SaaS Development",
      description:
        "Scalable SaaS products with dashboards, authentication, APIs and administration systems.",
      path: "/saas-product-development",
      accent: "from-emerald-500 to-cyan-500",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Online stores with product management, order workflows and payment integrations.",
      path: "/ecommerce",
      accent: "from-orange-500 to-amber-400",
    },
    {
      icon: Server,
      title: "Backend & APIs",
      description:
        "Maintainable backend systems and APIs for web, mobile and custom software applications.",
      path: "/backend-api",
      accent: "from-cyan-500 to-teal-400",
    },
    {
      icon: Layers3,
      title: "MERN Stack",
      description:
        "Full-stack applications using MongoDB, Express, React and Node.js.",
      path: "/mern-stack-development",
      accent: "from-green-500 to-emerald-400",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Clean, responsive interfaces designed around product requirements and user experience.",
      path: "/ui-ux-design",
      accent: "from-purple-500 to-pink-500",
    },
  ];

  // ======================================================
  // ADDITIONAL SERVICES
  // ======================================================

  const additionalServices = [
    {
      icon: Search,
      title: "SEO Services",
      path: "/seo-services",
    },
    {
      icon: Code2,
      title: "React Development",
      path: "/reactdevelopment",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      path: "/maintenance",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      path: "/digital-marketing",
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
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#f4f5f5]"
    >
      {/* ==================================================
          BACKGROUND DETAIL
      ================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(7,31,45,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(7,31,45,0.025)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />

        <div
          className="
            absolute
            -top-32 -right-32
            w-[400px] h-[400px]
            rounded-full
            bg-cyan-200/20
            blur-[130px]
          "
        />
      </div>

      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div
        className="
          relative z-10
          max-w-[1440px]
          mx-auto
          px-4 sm:px-6 lg:px-10
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
            mb-7 sm:mb-9
          "
        >
          <div className="max-w-[850px]">
            {/* SMALL LABEL */}

            <p
              className="
                text-[9px]
                sm:text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#16384a]
                mb-3
              "
            >
              Services That Work
            </p>

            {/* HEADING */}

            <h2
              id="services-heading"
              className="
                text-[#101820]
                text-[28px]
                min-[390px]:text-[31px]
                sm:text-[38px]
                lg:text-[44px]
                xl:text-[48px]
                leading-[1.06]
                tracking-[-0.04em]
                font-semibold
              "
            >
              Engineering solutions
              <span className="block text-[#53616a]">
                built for real business needs.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4
                max-w-[650px]
                text-[11px]
                sm:text-[13px]
                lg:text-[14px]
                leading-[1.7]
                text-[#65727a]
              "
            >
              DevZore designs and develops modern software,
              web applications, mobile products, SaaS platforms
              and AI-enabled solutions.
            </p>
          </div>

          {/* DESKTOP VIEW ALL */}

          <Link
            to="/allservices"
            onClick={scrollTop}
            className="
              hidden lg:inline-flex
              items-center justify-center
              gap-2
              shrink-0

              px-5 py-3
              rounded-xl

              bg-white
              border border-[#dfe4e7]

              text-[#0b2534]
              text-[12px]
              font-semibold

              shadow-[0_5px_18px_rgba(7,31,45,0.08)]

              transition-all duration-200

              hover:-translate-y-0.5
              hover:shadow-[0_8px_25px_rgba(7,31,45,0.12)]
              hover:border-cyan-400
            "
          >
            <ArrowRight size={13} />

            View all services
          </Link>
        </div>

        {/* ==================================================
            SERVICES
          
            MOBILE:
            horizontal swipe like reference website

            TABLET / DESKTOP:
            normal grid
        ================================================== */}

        <div
          className="
            flex
            overflow-x-auto
            snap-x snap-mandatory
            gap-3

            -mx-4 px-4
            pb-3

            sm:mx-0 sm:px-0
            sm:grid
            sm:grid-cols-2
            sm:overflow-visible
            sm:pb-0

            lg:grid-cols-4
            lg:gap-4

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to={service.path}
                onClick={scrollTop}
                aria-label={`Explore ${service.title}`}
                className="
                  group
                  relative
                  overflow-hidden

                  flex
                  flex-col

                  min-w-[82%]
                  min-[390px]:min-w-[78%]
                  snap-start

                  sm:min-w-0

                  min-h-[220px]
                  sm:min-h-[235px]
                  lg:min-h-[245px]

                  bg-white

                  rounded-[18px]

                  border
                  border-[#e1e6e8]

                  px-5 py-5
                  sm:p-6

                  shadow-[0_8px_25px_rgba(7,31,45,0.06)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(7,31,45,0.11)]
                  hover:border-[#cdd8dc]
                "
              >
                {/* ==========================================
                    TOP ACCENT LINE
                ========================================== */}

                <div
                  className="
                    absolute
                    top-0 left-0 right-0
                    h-[2px]
                    bg-gradient-to-r
                    from-[#061923]
                    via-[#08788c]
                    to-[#12d9c5]
                  "
                />

                {/* ==========================================
                    ICON
                ========================================== */}

                <div
                  className="
                    w-11 h-11
                    sm:w-12 sm:h-12

                    flex
                    items-center
                    justify-center

                    rounded-xl

                    bg-[#eef3f5]
                    border border-[#e6ecee]

                    text-[#0c536f]

                    transition-all
                    duration-300

                    group-hover:bg-[#082c3c]
                    group-hover:text-white
                    group-hover:border-[#082c3c]
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                {/* ==========================================
                    CONTENT
                ========================================== */}

                <div className="mt-6">
                  <h3
                    className="
                      text-[#0c1f2a]

                      text-[15px]
                      sm:text-[16px]
                      lg:text-[17px]

                      leading-tight
                      font-semibold

                      tracking-[-0.02em]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3

                      text-[10px]
                      sm:text-[11px]
                      lg:text-[12px]

                      leading-[1.65]

                      text-[#66747c]
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* ==========================================
                    CARD BOTTOM
                ========================================== */}

                <div className="mt-auto pt-5">
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5

                      text-[9px]
                      sm:text-[10px]

                      font-semibold

                      text-[#0b536e]

                      opacity-70

                      transition-all
                      duration-200

                      group-hover:opacity-100
                    "
                  >
                    Explore

                    <ArrowRight
                      size={10}
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    />
                  </span>
                </div>

                {/* ==========================================
                    SUBTLE HOVER GLOW
                ========================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-16
                    -bottom-16

                    w-32 h-32

                    rounded-full

                    bg-cyan-300/0

                    blur-[45px]

                    transition-all
                    duration-500

                    group-hover:bg-cyan-300/20
                  "
                />
              </Link>
            );
          })}
        </div>

        {/* ==================================================
            MOBILE SWIPE INDICATOR
        ================================================== */}

        <div
          className="
            flex sm:hidden
            items-center
            justify-between
            mt-1
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.16em]
              font-semibold
              text-[#839099]
            "
          >
            Swipe to explore
          </p>

          <div className="flex items-center gap-1">
            <span className="w-5 h-[2px] rounded-full bg-[#123e53]" />
            <span className="w-2 h-[2px] rounded-full bg-[#cbd3d7]" />
            <span className="w-2 h-[2px] rounded-full bg-[#cbd3d7]" />
          </div>
        </div>

        {/* ==================================================
            ADDITIONAL CAPABILITIES
        ================================================== */}

        <div
          className="
            mt-7 sm:mt-9

            pt-5

            border-t
            border-[#dce2e5]

            flex
            flex-col
            lg:flex-row

            lg:items-center
            lg:justify-between

            gap-4
          "
        >
          <div>
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                font-bold
                text-[#89949a]
              "
            >
              Additional Capabilities
            </p>

            <p
              className="
                mt-1
                text-[10px]
                sm:text-[11px]
                text-[#58666e]
              "
            >
              Supporting services for growth and long-term
              product development.
            </p>
          </div>

          {/* ADDITIONAL LINKS */}

          <div
            className="
              grid grid-cols-2
              sm:flex sm:flex-wrap
              gap-2
            "
          >
            {additionalServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  to={service.path}
                  onClick={scrollTop}
                  className="
                    group

                    inline-flex
                    items-center
                    justify-center

                    gap-2

                    px-3 py-2

                    rounded-lg

                    bg-white

                    border
                    border-[#dfe5e7]

                    text-[9px]
                    sm:text-[10px]

                    font-medium

                    text-[#40515a]

                    transition-all
                    duration-200

                    hover:text-[#083b50]
                    hover:border-[#9fcbd5]
                    hover:-translate-y-0.5
                  "
                >
                  <Icon
                    size={11}
                    className="text-[#0b647e]"
                  />

                  {service.title}

                  <ArrowRight
                    size={9}
                    className="
                      opacity-50
                      transition-transform
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            MOBILE VIEW ALL
        ================================================== */}

        <div className="lg:hidden mt-6">
          <Link
            to="/allservices"
            onClick={scrollTop}
            className="
              flex
              items-center
              justify-center
              gap-2

              w-full

              px-5 py-3

              rounded-xl

              bg-[#082c3c]

              text-white

              text-[10px]
              font-semibold

              transition-all
              duration-200

              active:scale-[0.99]
            "
          >
            View All Services

            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;