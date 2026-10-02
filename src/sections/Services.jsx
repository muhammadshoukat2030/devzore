import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Layers3,
  Megaphone,
  Palette,
  Search,
  Server,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wrench,
} from "lucide-react";

const Services = ({ isDark = true }) => {
  const d = isDark;

  // ======================================================
  // STATE
  // ======================================================

  const [showAll, setShowAll] = useState(false);

  // ======================================================
  // PRIMARY SERVICES
  // ======================================================

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      subtitle: "React · Next.js · Node.js",
      path: "/web-development",
      category: "Development",
      description:
        "Custom websites and web applications built for performance, usability, responsive experiences and long-term maintainability.",
      points: [
        "Business websites & web apps",
        "Responsive frontend development",
        "Backend & third-party integrations",
      ],
    },

    {
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "iOS · Android · Cross-Platform",
      path: "/mobile-apps",
      category: "Mobile",
      description:
        "Cross-platform mobile applications designed around real business workflows, smooth user experiences and reliable backend systems.",
      points: [
        "iOS & Android applications",
        "API & backend integration",
        "Deployment & release support",
      ],
    },

    {
      icon: TrendingUp,
      title: "SaaS Product Development",
      subtitle: "SaaS · Dashboards · Billing",
      path: "/saas-product-development",
      category: "SaaS",
      description:
        "Scalable SaaS products with authentication, dashboards, subscription workflows, APIs and administration systems.",
      points: [
        "SaaS product architecture",
        "Subscriptions & billing",
        "Admin & analytics dashboards",
      ],
    },

    {
      icon: Bot,
      title: "Generative AI Services",
      subtitle: "AI · LLMs · Automation",
      path: "/generative-ai-services",
      category: "AI",
      featured: true,
      description:
        "Generative AI solutions that bring intelligent assistants, AI-powered workflows and language-model capabilities into digital products.",
      points: [
        "AI chatbot integration",
        "LLM-powered applications",
        "Business workflow automation",
      ],
    },

    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      subtitle: "Stores · Payments · Admin",
      path: "/ecommerce",
      category: "Commerce",
      description:
        "E-commerce platforms with product management, order workflows, payment integrations and responsive shopping experiences.",
      points: [
        "Product & inventory workflows",
        "Payment gateway integration",
        "Responsive storefronts",
      ],
    },

    {
      icon: Server,
      title: "Backend & API Development",
      subtitle: "Node.js · Express · Databases",
      path: "/backend-api",
      category: "Backend",
      description:
        "Secure and maintainable backend systems for websites, mobile apps, SaaS platforms and custom software products.",
      points: [
        "REST & GraphQL APIs",
        "Authentication & authorization",
        "Database & cloud integration",
      ],
    },

    {
      icon: Layers3,
      title: "MERN Stack Development",
      subtitle: "MongoDB · Express · React · Node",
      path: "/mern-stack-development",
      category: "Full Stack",
      description:
        "End-to-end JavaScript application development using the MERN stack for modern business applications and digital products.",
      points: [
        "Full-stack application development",
        "Database architecture",
        "Reusable & scalable codebase",
      ],
    },

    {
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "Figma · UX · Design Systems",
      path: "/ui-ux-design",
      category: "Design",
      description:
        "User-focused interface design for websites, applications and software products, from early wireframes to developer-ready interfaces.",
      points: [
        "Wireframes & prototypes",
        "Responsive UI design",
        "Design systems & handoff",
      ],
    },

    {
      icon: Search,
      title: "SEO Services",
      subtitle: "Technical · On-Page · Strategy",
      path: "/seo-services",
      category: "Growth",
      description:
        "SEO services focused on technical foundations, content relevance, search visibility and sustainable organic discovery.",
      points: [
        "Technical & on-page SEO",
        "Keyword & content strategy",
        "Search performance monitoring",
      ],
    },
  ];

  // ======================================================
  // ADDITIONAL SERVICES
  // ======================================================

  const additionalServices = [
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
  // VISIBLE SERVICES
  // ======================================================

  const visibleServices = showAll ? services : services.slice(0, 6);

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
  // TOGGLE SERVICES
  // ======================================================

  const toggleServices = () => {
    setShowAll((prev) => !prev);
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`relative overflow-hidden py-7 sm:py-8 lg:py-9 transition-colors duration-300 ${
        d ? "bg-[#030303]" : "bg-[#fafafa]"
      }`}
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className={`absolute -top-32 right-[-120px] w-[300px] h-[300px] rounded-full blur-[120px] ${
            d ? "bg-purple-700/[0.07]" : "bg-purple-200/25"
          }`}
        />

        <div
          className={`absolute -bottom-40 -left-28 w-[320px] h-[320px] rounded-full blur-[130px] ${
            d ? "bg-blue-700/[0.035]" : "bg-blue-100/25"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-5 sm:mb-6">
          <div className="max-w-3xl">

            {/* BADGE */}

            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border mb-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] ${
                d
                  ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                  : "bg-purple-50 border-purple-200 text-purple-700"
              }`}
            >
              <Sparkles size={10} aria-hidden="true" />
              Our Services
            </div>

            {/* HEADING */}

            <h2
              id="services-heading"
              className={`text-[26px] sm:text-[32px] lg:text-[38px] xl:text-[40px] font-black tracking-[-0.035em] leading-[1.08] ${
                d ? "text-white" : "text-slate-950"
              }`}
            >
              Technology services to
              <span className="text-purple-600">
                {" "}
                build, launch and grow
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className={`mt-2.5 max-w-2xl text-[11px] sm:text-[13px] leading-[1.65] ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              DevZore provides software development and digital services for
              startups and businesses — from websites, mobile applications and
              SaaS products to AI integrations, backend systems, e-commerce,
              UI/UX and search optimization.
            </p>
          </div>

          {/* ALL SERVICES PAGE */}

          <Link
            to="/allservices"
            onClick={scrollTop}
            className={`hidden lg:inline-flex shrink-0 items-center gap-2 px-4 py-2 rounded-lg border text-[10px] font-bold transition-all duration-200 hover:-translate-y-0.5 ${
              d
                ? "border-white/10 text-gray-300 hover:text-white hover:bg-white/[0.04] hover:border-purple-500/30"
                : "border-slate-200 bg-white text-slate-700 hover:border-purple-300 hover:text-purple-700 shadow-sm"
            }`}
          >
            Explore Services Page
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* ==================================================
            SERVICES GRID
        ================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {visibleServices.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to={service.path}
                onClick={scrollTop}
                aria-label={`Explore ${service.title}`}
                className={`group relative flex flex-col overflow-hidden rounded-xl border p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                  d
                    ? service.featured
                      ? "bg-purple-600/[0.06] border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_8px_24px_rgba(124,58,237,0.07)]"
                      : "bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.035] hover:border-purple-500/25"
                    : service.featured
                    ? "bg-purple-50/60 border-purple-200 hover:border-purple-300 hover:shadow-md"
                    : "bg-white border-slate-200 hover:border-purple-200 hover:shadow-md"
                }`}
              >
                {/* FEATURED GLOW */}

                {service.featured && (
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-purple-600/10 blur-[50px]"
                  />
                )}

                {/* ==================================================
                    CARD TOP
                ================================================== */}

                <div className="relative z-10 flex items-start justify-between gap-2 mb-2.5">

                  {/* ICON */}

                  <div
                    className={`flex w-8 h-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                      d
                        ? "bg-white/[0.035] border-white/[0.08] text-purple-400 group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:text-white"
                        : "bg-purple-50 border-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:text-white"
                    }`}
                  >
                    <Icon size={15} aria-hidden="true" />
                  </div>

                  {/* CATEGORY */}

                  <span
                    className={`rounded-full border px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.06em] ${
                      service.featured
                        ? d
                          ? "bg-purple-500/10 border-purple-500/20 text-purple-300"
                          : "bg-purple-100 border-purple-200 text-purple-700"
                        : d
                        ? "bg-white/[0.03] border-white/[0.07] text-gray-500"
                        : "bg-slate-50 border-slate-200 text-slate-500"
                    }`}
                  >
                    {service.category}
                  </span>
                </div>

                {/* ==================================================
                    TITLE
                ================================================== */}

                <div className="relative z-10">
                  <h3
                    className={`text-[13px] sm:text-[14px] font-bold leading-tight transition-colors ${
                      d
                        ? "text-white group-hover:text-purple-300"
                        : "text-slate-900 group-hover:text-purple-700"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`mt-0.5 text-[9px] font-medium ${
                      d ? "text-gray-500" : "text-slate-400"
                    }`}
                  >
                    {service.subtitle}
                  </p>
                </div>

                {/* ==================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className={`relative z-10 mt-2 text-[10px] sm:text-[11px] leading-[1.55] ${
                    d ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* ==================================================
                    POINTS
                ================================================== */}

                <ul className="relative z-10 mt-2.5 space-y-1">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-1.5 text-[9px] sm:text-[10px] leading-[1.4] ${
                        d ? "text-gray-400" : "text-slate-600"
                      }`}
                    >
                      <CheckCircle2
                        size={10}
                        aria-hidden="true"
                        className="mt-[1px] shrink-0 text-purple-500"
                      />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* ==================================================
                    EXPLORE
                ================================================== */}

                <div
                  className={`relative z-10 mt-2.5 pt-2.5 border-t ${
                    d ? "border-white/[0.07]" : "border-slate-100"
                  }`}
                >
                  <span
                    className={`inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold transition-colors ${
                      d
                        ? "text-purple-400 group-hover:text-purple-300"
                        : "text-purple-600 group-hover:text-purple-700"
                    }`}
                  >
                    Explore Service

                    <ArrowRight
                      size={10}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ==================================================
            SHOW ALL / SHOW LESS
        ================================================== */}

        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={toggleServices}
            aria-expanded={showAll}
            className={`group inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg border text-[10px] sm:text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 ${
              d
                ? "bg-white/[0.025] border-white/[0.09] text-gray-300 hover:text-white hover:bg-purple-600/[0.08] hover:border-purple-500/30"
                : "bg-white border-slate-200 text-slate-700 hover:text-purple-700 hover:border-purple-200 shadow-sm"
            }`}
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp
                  size={13}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </>
            ) : (
              <>
                Show All Services
                <ChevronDown
                  size={13}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </>
            )}
          </button>
        </div>

        {/* ==================================================
            MORE EXPERTISE
        ================================================== */}

        <div
          className={`mt-4 rounded-xl border px-3.5 sm:px-4 py-3 ${
            d
              ? "bg-white/[0.015] border-white/[0.06]"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2.5">

            {/* TEXT */}

            <div>
              <p
                className={`text-[8px] uppercase tracking-[0.15em] font-bold ${
                  d ? "text-gray-600" : "text-slate-400"
                }`}
              >
                More Expertise
              </p>

              <p
                className={`mt-0.5 text-[10px] sm:text-[11px] font-semibold ${
                  d ? "text-gray-300" : "text-slate-700"
                }`}
              >
                Specialized development, growth and ongoing support.
              </p>
            </div>

            {/* ADDITIONAL SERVICES */}

            <div className="flex flex-wrap gap-1.5">
              {additionalServices.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    to={service.path}
                    onClick={scrollTop}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[9px] font-semibold transition-all duration-200 ${
                      d
                        ? "bg-white/[0.025] border-white/[0.07] text-gray-400 hover:text-white hover:border-purple-500/25 hover:bg-purple-600/[0.06]"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200"
                    }`}
                  >
                    <Icon
                      size={10}
                      aria-hidden="true"
                      className="text-purple-500"
                    />

                    {service.title}

                    <ArrowRight size={8} aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================================================
            MOBILE / TABLET ALL SERVICES PAGE
        ================================================== */}

        <div className="lg:hidden mt-3 text-center">
          <Link
            to="/allservices"
            onClick={scrollTop}
            className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2 rounded-lg border text-[10px] font-bold transition-all ${
              d
                ? "border-white/10 text-gray-300 bg-white/[0.02] hover:bg-white/[0.05] hover:border-purple-500/25"
                : "border-slate-200 bg-white text-slate-700 shadow-sm hover:border-purple-200"
            }`}
          >
            Explore Complete Services Page
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;