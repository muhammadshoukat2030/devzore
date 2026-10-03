import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lightbulb,
  BookOpen,
  Newspaper,
  CircleHelp,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  ShoppingCart,
  Sparkles,
  SearchCheck,
  Gauge,
  ShieldCheck,
  Database,
  Rocket,
  Layers3,
  CheckCircle2,
  TrendingUp,
  Workflow,
} from "lucide-react";

const Resources = ({ isDark }) => {
  const d = isDark;

  // ======================================================
  // RESOURCE COLLECTIONS
  // ======================================================

  const resourceCollections = [
    {
      icon: <Newspaper size={19} />,
      title: "Development Blog",
      description:
        "Explore articles about web development, software, SaaS, AI, SEO, performance and modern digital products.",
      link: "/blog",
      linkText: "Read Our Blog",
    },
    {
      icon: <BookOpen size={19} />,
      title: "Development Guides",
      description:
        "Practical guides covering websites, applications, mobile apps, backend systems, SaaS and development decisions.",
      link: "/guides",
      linkText: "Explore Guides",
    },
    {
      icon: <CircleHelp size={19} />,
      title: "Frequently Asked Questions",
      description:
        "Find answers about DevZore services, project planning, pricing, development timelines, support and collaboration.",
      link: "/faqs",
      linkText: "Browse FAQs",
    },
  ];

  // ======================================================
  // TOPICS
  // ======================================================

  const topics = [
    {
      icon: <Globe size={17} />,
      title: "Web Development",
      description:
        "Modern websites, web applications, responsive development and scalable web architecture.",
      link: "/web-development",
    },
    {
      icon: <Smartphone size={17} />,
      title: "Mobile Applications",
      description:
        "Mobile product planning, application development and connected digital experiences.",
      link: "/mobile-apps",
    },
    {
      icon: <Sparkles size={17} />,
      title: "Generative AI",
      description:
        "AI applications, LLM integrations, assistants, agents, chatbots and intelligent automation.",
      link: "/generative-ai-development",
    },
    {
      icon: <Cloud size={17} />,
      title: "SaaS Products",
      description:
        "SaaS architecture, dashboards, subscriptions, authentication and scalable product development.",
      link: "/saas-product-development",
    },
    {
      icon: <ShoppingCart size={17} />,
      title: "E-Commerce",
      description:
        "Online stores, product experiences, payments and scalable commerce functionality.",
      link: "/ecommerce",
    },
    {
      icon: <SearchCheck size={17} />,
      title: "SEO & Search",
      description:
        "Technical SEO, crawlability, structured data, performance and search visibility.",
      link: "/seo-services",
    },
  ];

  // ======================================================
  // INSIGHT AREAS
  // ======================================================

  const insightAreas = [
    {
      icon: <Code2 size={18} />,
      title: "Development",
      text: "Understand modern development approaches, technologies and architecture for digital products.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance",
      text: "Learn how speed, responsiveness and technical performance affect websites and applications.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security",
      text: "Explore important security considerations for applications, APIs, authentication and business systems.",
    },
    {
      icon: <Database size={18} />,
      title: "Scalability",
      text: "Learn how databases, APIs and application architecture can support future product growth.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Business Systems",
      text: "Explore how custom software can organize workflows, operations, reporting and business data.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Digital Growth",
      text: "Understand how technology, SEO and digital strategy can support an online business presence.",
    },
  ];

  return (
    <div
      className={`min-h-screen pt-[66px] ${
        d
          ? "bg-[#030303] text-white"
          : "bg-[#fafafa] text-[#111827]"
      }`}
    >
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden">
        <div
          className={`absolute inset-0 pointer-events-none ${
            d
              ? "bg-[radial-gradient(circle_at_50%_18%,rgba(147,51,234,0.12),transparent_43%)]"
              : "bg-[radial-gradient(circle_at_50%_18%,rgba(168,85,247,0.12),transparent_43%)]"
          }`}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-8">
          <div className="max-w-5xl mx-auto text-center">

            {/* BADGE */}

            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
                d
                  ? "border-purple-500/20 bg-purple-500/[0.07]"
                  : "border-purple-200 bg-purple-50/80"
              }`}
            >
              <Lightbulb
                size={15}
                className="text-purple-500"
              />

              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-purple-600">
                Insights & Resources
              </span>
            </div>

            {/* HEADING */}

            <h1 className="mt-6 text-[38px] sm:text-5xl lg:text-[64px] leading-[1.02] font-black tracking-[-0.045em]">
              Resources for Building
              <span className="block mt-2 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                Better Digital Products
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className={`mt-5 max-w-3xl mx-auto text-[14px] sm:text-[16px] leading-7 ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Explore practical insights about websites, software
              development, SaaS products, mobile applications,
              generative AI, e-commerce, SEO and modern digital
              technology.
            </p>

            {/* BUTTONS */}

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/guides"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3.5 text-[11px] font-black text-white transition-all hover:-translate-y-0.5"
              >
                Explore Development Guides

                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/blog"
                className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[11px] font-black transition-all ${
                  d
                    ? "border-white/[0.1] bg-white/[0.03] text-white hover:bg-white/[0.07]"
                    : "border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                Read Our Blog

                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* FEATURES */}

            <div
              className={`mt-8 pt-5 border-t flex flex-wrap items-center justify-center gap-x-7 gap-y-3 ${
                d
                  ? "border-white/[0.06]"
                  : "border-gray-200"
              }`}
            >
              {[
                "Development",
                "SaaS",
                "AI",
                "Business Technology",
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
        </div>
      </section>

      {/* ==================================================
          RESOURCE COLLECTIONS
      ================================================== */}

      <section className="pt-8 pb-9">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* SECTION HEADER */}

          <div className="max-w-2xl">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-purple-500">
              Explore Resources
            </p>

            <h2
              className={`mt-2 text-2xl sm:text-3xl font-black tracking-tight ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Learn, Explore & Discover
            </h2>

            <p
              className={`mt-2 text-[11px] sm:text-[12px] leading-6 ${
                d ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Browse DevZore resources designed to help you understand
              development, digital products and project decisions.
            </p>
          </div>

          {/* CARDS */}

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {resourceCollections.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  d
                    ? "border-white/[0.07] bg-white/[0.025] hover:border-purple-500/25 hover:bg-purple-500/[0.04]"
                    : "border-gray-200 bg-white hover:border-purple-200 hover:shadow-lg"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center text-purple-500 ${
                    d
                      ? "border-white/[0.08] bg-white/[0.04]"
                      : "border-purple-100 bg-purple-50"
                  }`}
                >
                  {item.icon}
                </div>

                <h3
                  className={`mt-4 text-[15px] font-black ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-6 ${
                    d ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {item.description}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-black text-purple-500">
                  {item.linkText}

                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          POPULAR TOPICS
      ================================================== */}

      <section
        className={`py-9 border-y ${
          d
            ? "border-white/[0.06] bg-white/[0.015]"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-purple-500">
              Explore Topics
            </p>

            <h2
              className={`mt-2 text-2xl sm:text-3xl font-black tracking-tight ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Popular Technology Topics
            </h2>

            <p
              className={`mt-2 text-[11px] sm:text-[12px] leading-6 ${
                d ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Explore the technologies and digital solutions businesses
              and startups use to build modern products.
            </p>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((topic) => (
              <Link
                key={topic.title}
                to={topic.link}
                className={`group flex items-start gap-3 rounded-2xl border p-4 transition-all ${
                  d
                    ? "border-white/[0.07] bg-[#070707] hover:bg-white/[0.04] hover:border-purple-500/25"
                    : "border-gray-200 bg-[#fafafa] hover:bg-purple-50/40 hover:border-purple-200"
                }`}
              >
                <div
                  className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-purple-500 ${
                    d
                      ? "bg-purple-500/[0.08]"
                      : "bg-purple-50"
                  }`}
                >
                  {topic.icon}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3
                      className={`text-[12px] font-black ${
                        d ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      {topic.title}
                    </h3>

                    <ArrowRight
                      size={11}
                      className="text-purple-500 group-hover:translate-x-1 transition-transform"
                    />
                  </div>

                  <p
                    className={`mt-1.5 text-[10px] leading-5 ${
                      d ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {topic.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          INSIGHT AREAS
      ================================================== */}

      <section className="py-9">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-7 lg:gap-10 items-start">

            {/* LEFT */}

            <div>
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 ${
                  d
                    ? "border-purple-500/20 bg-purple-500/[0.06]"
                    : "border-purple-200 bg-purple-50"
                }`}
              >
                <Layers3
                  size={13}
                  className="text-purple-500"
                />

                <span className="text-[9px] font-black uppercase tracking-[0.16em] text-purple-600">
                  Knowledge Areas
                </span>
              </div>

              <h2
                className={`mt-4 text-3xl sm:text-4xl font-black tracking-tight leading-tight ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Understand the Technology Behind
                <span className="text-purple-500">
                  {" "}Digital Products
                </span>
              </h2>

              <p
                className={`mt-4 text-[11px] sm:text-[12px] leading-6 ${
                  d ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Good technology decisions start with understanding the
                fundamentals. Our resources cover development,
                performance, security, scalability and digital business
                systems.
              </p>

              <Link
                to="/guides"
                className="group mt-5 inline-flex items-center gap-2 text-[10px] font-black text-purple-500"
              >
                Browse Development Guides

                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* RIGHT */}

            <div className="grid sm:grid-cols-2 gap-3">
              {insightAreas.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-4 ${
                    d
                      ? "border-white/[0.07] bg-white/[0.025]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3
                    className={`mt-3 text-[12px] font-black ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-1.5 text-[10px] leading-5 ${
                      d ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          STARTUP / BUSINESS SECTION
      ================================================== */}

      <section className="pb-9">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className={`rounded-3xl border p-6 sm:p-8 ${
              d
                ? "border-white/[0.07] bg-white/[0.025]"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-5">

              {/* STARTUPS */}

              <div
                className={`rounded-2xl border p-5 ${
                  d
                    ? "border-white/[0.06] bg-[#070707]"
                    : "border-gray-100 bg-gray-50"
                }`}
              >
                <Rocket
                  size={21}
                  className="text-purple-500"
                />

                <h3
                  className={`mt-3 text-lg font-black ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Resources for Startups
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-6 ${
                    d ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  Explore MVP development, SaaS products, application
                  planning and technology options for turning an idea
                  into a digital product.
                </p>

                <Link
                  to="/startup-solutions"
                  className="group mt-4 inline-flex items-center gap-2 text-[10px] font-black text-purple-500"
                >
                  Startup Solutions

                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* BUSINESSES */}

              <div
                className={`rounded-2xl border p-5 ${
                  d
                    ? "border-white/[0.06] bg-[#070707]"
                    : "border-gray-100 bg-gray-50"
                }`}
              >
                <Workflow
                  size={21}
                  className="text-purple-500"
                />

                <h3
                  className={`mt-3 text-lg font-black ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Resources for Businesses
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-6 ${
                    d ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  Learn about websites, custom software, management
                  systems, e-commerce and digital solutions designed
                  around business workflows.
                </p>

                <Link
                  to="/business-solutions"
                  className="group mt-4 inline-flex items-center gap-2 text-[10px] font-black text-purple-500"
                >
                  Business Solutions

                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
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
                ? "border-purple-500/20 bg-gradient-to-br from-purple-500/[0.10] via-[#0a0710] to-indigo-500/[0.08]"
                : "border-purple-100 bg-gradient-to-br from-purple-50 via-white to-indigo-50"
            }`}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute -bottom-24 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl mx-auto">
              <Lightbulb
                size={25}
                className="mx-auto text-purple-500"
              />

              <h2
                className={`mt-4 text-3xl sm:text-4xl font-black tracking-tight ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Need Help With Your Digital Project?
              </h2>

              <p
                className={`mt-3 text-[12px] sm:text-[14px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tell us what you are planning to build. DevZore can
                discuss your requirements and help you understand the
                development approach for your website, application,
                SaaS platform or custom software.
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
                      ? "border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08]"
                      : "border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Explore Services

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
              d
                ? "border-white/[0.06]"
                : "border-gray-200"
            }`}
          >
            <Link
              to="/blog"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Blog
            </Link>

            <Link
              to="/guides"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Development Guides
            </Link>

            <Link
              to="/faqs"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              FAQs
            </Link>

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

export default Resources;