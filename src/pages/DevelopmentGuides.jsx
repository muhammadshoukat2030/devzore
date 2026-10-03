import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Globe,
  Layers3,
  Rocket,
  SearchCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Server,
  Gauge,
  ShieldCheck,
  CheckCircle2,
  Lightbulb,
  Database,
  Cloud,
} from "lucide-react";

const DevelopmentGuides = ({ isDark }) => {
  const d = isDark;

  // ======================================================
  // GUIDE CATEGORIES
  // ======================================================

  const guides = [
    {
      icon: <Globe size={20} />,
      title: "Web Development",
      description:
        "Learn about modern websites, web applications, responsive development and choosing the right approach for your project.",
      topics: [
        "Business Websites",
        "Web Applications",
        "Responsive Design",
      ],
      link: "/web-development",
      linkText: "Explore Web Development",
    },
    {
      icon: <Code2 size={20} />,
      title: "React Development",
      description:
        "Understand React development, component-based architecture and how modern frontend applications are structured.",
      topics: [
        "React Applications",
        "Reusable Components",
        "Frontend Architecture",
      ],
      link: "/reactdevelopment",
      linkText: "Explore React Development",
    },
    {
      icon: <Layers3 size={20} />,
      title: "MERN Stack",
      description:
        "Explore how MongoDB, Express, React and Node.js work together to build full-stack web applications.",
      topics: [
        "MongoDB",
        "Express & Node.js",
        "Full-Stack Applications",
      ],
      link: "/mern-stack-development",
      linkText: "Explore MERN Stack",
    },
    {
      icon: <Smartphone size={20} />,
      title: "Mobile App Development",
      description:
        "Learn the fundamentals of planning and developing modern mobile applications for businesses and startups.",
      topics: [
        "Mobile App Planning",
        "Cross-Platform Apps",
        "Mobile UX",
      ],
      link: "/mobile-apps",
      linkText: "Explore Mobile Apps",
    },
    {
      icon: <Cloud size={20} />,
      title: "SaaS Development",
      description:
        "Understand SaaS architecture, subscriptions, dashboards, authentication and scalable product development.",
      topics: [
        "SaaS Architecture",
        "Subscriptions",
        "User Management",
      ],
      link: "/saas-product-development",
      linkText: "Explore SaaS Development",
    },
    {
      icon: <Sparkles size={20} />,
      title: "Generative AI",
      description:
        "Explore AI applications, LLM integrations, intelligent assistants, chatbots and AI-powered product development.",
      topics: [
        "LLM Integration",
        "AI Assistants",
        "AI Applications",
      ],
      link: "/generative-ai-development",
      linkText: "Explore AI Development",
    },
    {
      icon: <Server size={20} />,
      title: "Backend & APIs",
      description:
        "Learn about backend architecture, APIs, databases and the systems that power modern digital products.",
      topics: [
        "REST APIs",
        "Backend Architecture",
        "Database Integration",
      ],
      link: "/backend-api",
      linkText: "Explore Backend Development",
    },
    {
      icon: <ShoppingCart size={20} />,
      title: "E-Commerce",
      description:
        "Understand the core components of modern online stores, from product management to checkout and payments.",
      topics: [
        "Online Stores",
        "Product Management",
        "Payment Integration",
      ],
      link: "/ecommerce",
      linkText: "Explore E-Commerce",
    },
    {
      icon: <SearchCheck size={20} />,
      title: "SEO & Optimization",
      description:
        "Learn how technical SEO, crawlability, performance and on-page optimization improve website visibility.",
      topics: [
        "Technical SEO",
        "Website Performance",
        "Search Visibility",
      ],
      link: "/seo-services",
      linkText: "Explore SEO Services",
    },
  ];

  // ======================================================
  // DEVELOPMENT PRINCIPLES
  // ======================================================

  const principles = [
    {
      icon: <Lightbulb size={18} />,
      title: "Plan Before Building",
      text: "Define the problem, users, requirements and essential features before development begins.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Build for Performance",
      text: "Fast loading, responsive interfaces and efficient architecture improve the overall user experience.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Think About Security",
      text: "Authentication, validation, permissions and secure data handling should be considered from the beginning.",
    },
    {
      icon: <Database size={18} />,
      title: "Design for Growth",
      text: "A clean data model and maintainable architecture make future improvements easier to implement.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        d ? "bg-[#030303] text-white" : "bg-[#fafafa] text-[#0b1020]"
      }`}
    >
      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className={`relative overflow-hidden pt-[105px] sm:pt-[112px] pb-10 sm:pb-12 border-b ${
          d ? "border-white/[0.06]" : "border-gray-200"
        }`}
      >
        {/* BACKGROUND */}

        <div
          className={`absolute inset-0 pointer-events-none ${
            d
              ? "bg-[radial-gradient(circle_at_50%_10%,rgba(147,51,234,0.14),transparent_42%)]"
              : "bg-[radial-gradient(circle_at_50%_10%,rgba(168,85,247,0.12),transparent_45%)]"
          }`}
        />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 text-center">
          {/* BADGE */}

          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
              d
                ? "border-purple-500/20 bg-purple-500/[0.07]"
                : "border-purple-200 bg-purple-50"
            }`}
          >
            <BookOpen size={14} className="text-purple-500" />

            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-purple-600">
              Development Guides
            </span>
          </div>

          {/* TITLE */}

          <h1
            className={`mt-5 text-[38px] sm:text-5xl lg:text-[64px] leading-[1.03] font-black tracking-[-0.04em] ${
              d ? "text-white" : "text-[#080d1a]"
            }`}
          >
            Practical Guides for
            <span className="block mt-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              Modern Digital Products
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className={`mt-5 max-w-3xl mx-auto text-[13px] sm:text-[15px] lg:text-[16px] leading-7 ${
              d ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Explore practical development topics covering websites,
            web applications, mobile apps, SaaS products, AI,
            e-commerce, backend systems and search optimization.
          </p>

          {/* BUTTONS */}

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/blog"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3.5 text-[11px] font-black text-white transition-all hover:-translate-y-0.5"
            >
              Read Our Blog
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="/contact"
              className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[11px] font-black transition-all ${
                d
                  ? "border-white/[0.12] bg-white/[0.03] text-white hover:bg-white/[0.07]"
                  : "border-gray-300 bg-white text-gray-900 hover:border-purple-300"
              }`}
            >
              Discuss Your Project
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* QUICK POINTS */}

          <div
            className={`mt-8 pt-5 border-t flex flex-wrap justify-center gap-x-7 gap-y-3 ${
              d ? "border-white/[0.06]" : "border-gray-200"
            }`}
          >
            {[
              "Web Development",
              "SaaS",
              "Mobile Apps",
              "AI Development",
            ].map((item) => (
              <div
                key={item}
                className={`flex items-center gap-2 text-[10px] sm:text-[11px] font-medium ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <CheckCircle2
                  size={13}
                  className="text-purple-500"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          GUIDES
      ================================================== */}

      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* SECTION HEADER */}

          <div className="max-w-2xl">
            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-purple-500">
              Explore Topics
            </p>

            <h2
              className={`mt-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Development Guides & Resources
            </h2>

            <p
              className={`mt-3 text-[12px] sm:text-[13px] leading-6 ${
                d ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Start with the technology or development area most
              relevant to the digital product you want to understand
              or build.
            </p>
          </div>

          {/* GUIDE GRID */}

          <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  d
                    ? "bg-white/[0.025] border-white/[0.07] hover:border-purple-500/25 hover:bg-white/[0.04]"
                    : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)]"
                }`}
              >
                {/* ICON */}

                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center text-purple-500 ${
                    d
                      ? "bg-purple-500/[0.08] border-purple-500/15"
                      : "bg-purple-50 border-purple-100"
                  }`}
                >
                  {guide.icon}
                </div>

                {/* CONTENT */}

                <h3
                  className={`mt-4 text-[15px] font-bold ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {guide.title}
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-5 ${
                    d ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  {guide.description}
                </p>

                {/* TOPICS */}

                <div className="mt-4 space-y-2">
                  {guide.topics.map((topic) => (
                    <div
                      key={topic}
                      className={`flex items-center gap-2 text-[10px] ${
                        d ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <CheckCircle2
                        size={12}
                        className="text-purple-500 shrink-0"
                      />
                      {topic}
                    </div>
                  ))}
                </div>

                {/* LINK */}

                <Link
                  to={guide.link}
                  className="group/link mt-5 inline-flex items-center gap-2 text-[10px] font-bold text-purple-500 hover:text-purple-600 transition"
                >
                  {guide.linkText}

                  <ArrowRight
                    size={12}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          DEVELOPMENT PRINCIPLES
      ================================================== */}

      <section
        className={`py-10 sm:py-12 border-y ${
          d
            ? "border-white/[0.06] bg-white/[0.015]"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-purple-500">
              Development Fundamentals
            </p>

            <h2
              className={`mt-2 text-2xl sm:text-3xl font-black ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Principles Behind Better Software
            </h2>

            <p
              className={`mt-3 text-[12px] leading-6 ${
                d ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Good digital products are not only about writing code.
              Planning, performance, security and maintainability all
              influence the final result.
            </p>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-5 ${
                  d
                    ? "bg-[#080808] border-white/[0.07]"
                    : "bg-[#fafafa] border-gray-200"
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  {item.icon}
                </div>

                <h3
                  className={`mt-4 text-[13px] font-bold ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-2 text-[10px] leading-5 ${
                    d ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          STARTUP / BUSINESS LINKS
      ================================================== */}

      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* STARTUPS */}

            <div
              className={`rounded-2xl border p-6 ${
                d
                  ? "border-white/[0.07] bg-white/[0.025]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <Rocket size={22} className="text-purple-500" />

              <h3
                className={`mt-4 text-xl font-black ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Building a Startup Product?
              </h3>

              <p
                className={`mt-2 text-[11px] leading-5 ${
                  d ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Explore how MVPs, SaaS products and scalable
                applications can move an idea from planning to
                development.
              </p>

              <Link
                to="/startup-solutions"
                className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-purple-500"
              >
                Startup Solutions
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* BUSINESS */}

            <div
              className={`rounded-2xl border p-6 ${
                d
                  ? "border-white/[0.07] bg-white/[0.025]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <Layers3 size={22} className="text-purple-500" />

              <h3
                className={`mt-4 text-xl font-black ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Improving a Business?
              </h3>

              <p
                className={`mt-2 text-[11px] leading-5 ${
                  d ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Explore custom software, management systems and
                digital solutions designed around real business
                workflows.
              </p>

              <Link
                to="/business-solutions"
                className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-purple-500"
              >
                Business Solutions
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="pb-10 sm:pb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className={`relative overflow-hidden rounded-3xl border px-6 py-9 sm:px-10 sm:py-10 text-center ${
              d
                ? "bg-gradient-to-br from-purple-950/40 via-[#0a0710] to-indigo-950/30 border-purple-500/15"
                : "bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-purple-100"
            }`}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl mx-auto">
              <Sparkles
                size={24}
                className="mx-auto text-purple-500"
              />

              <h2
                className={`mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Need Help With Your Project?
              </h2>

              <p
                className={`mt-3 text-[12px] sm:text-[13px] leading-6 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tell us what you want to build and we can discuss the
                appropriate development approach, technology and
                features for your digital product.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3.5 text-[11px] font-black text-white transition-all hover:-translate-y-0.5"
                >
                  Discuss Your Project
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <Link
                  to="/allservices"
                  className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[11px] font-black transition-all ${
                    d
                      ? "border-white/[0.12] bg-white/[0.04] text-white hover:bg-white/[0.08]"
                      : "border-gray-300 bg-white text-gray-900 hover:border-purple-300"
                  }`}
                >
                  Explore Our Services
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTERNAL LINKS
      ================================================== */}

      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-5 border-t ${
              d ? "border-white/[0.06]" : "border-gray-200"
            }`}
          >
            <Link
              to="/web-development"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Web Development
            </Link>

            <Link
              to="/generative-ai-development"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Generative AI
            </Link>

            <Link
              to="/saas-product-development"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              SaaS Development
            </Link>

            <Link
              to="/mern-stack-development"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              MERN Stack
            </Link>

            <Link
              to="/seo-services"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              SEO Services
            </Link>

            <Link
              to="/blog"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              DevZore Blog
            </Link>

            <Link
              to="/contact"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Contact DevZore
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentGuides;