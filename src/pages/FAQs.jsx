import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  Search,
  Code2,
  Smartphone,
  ShoppingCart,
  Cloud,
  Sparkles,
  SearchCheck,
  Settings,
  CreditCard,
  Clock3,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const FAQs = ({ isDark }) => {
  const d = isDark;

  const [openFAQ, setOpenFAQ] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // ======================================================
  // FAQ DATA
  // ======================================================

  const faqData = [
    {
      category: "General",
      question: "What services does DevZore provide?",
      answer:
        "DevZore provides web development, mobile app development, generative AI development, e-commerce development, MERN stack development, React development, backend and API development, SaaS product development, UI/UX design, startup MVP development, SEO, digital marketing, maintenance and custom software solutions.",
    },
    {
      category: "General",
      question: "Who does DevZore work with?",
      answer:
        "We work with startups, growing businesses, entrepreneurs and organizations that need websites, web applications, mobile apps, SaaS platforms, management systems, e-commerce solutions or custom software.",
    },
    {
      category: "Development",
      question: "Can DevZore build a custom website for my business?",
      answer:
        "Yes. We can build a custom business website based on your goals, services, audience and required functionality. Projects can include responsive layouts, contact forms, dashboards, APIs, SEO foundations and other business-specific features.",
    },
    {
      category: "Development",
      question: "Do you build custom web applications?",
      answer:
        "Yes. DevZore develops custom web applications including dashboards, management systems, portals, SaaS platforms, internal business tools and workflow-based applications.",
    },
    {
      category: "Development",
      question: "Which technologies does DevZore use?",
      answer:
        "Our technology choices depend on the project. We commonly work with React, JavaScript, Node.js, Express.js, MongoDB, REST APIs and other modern technologies suitable for scalable web and software products.",
    },
    {
      category: "Mobile",
      question: "Does DevZore develop mobile applications?",
      answer:
        "Yes. We provide mobile application development for businesses and startups, including modern cross-platform applications and mobile experiences connected with backend systems and APIs.",
    },
    {
      category: "AI",
      question: "Does DevZore provide generative AI development?",
      answer:
        "Yes. We can develop AI-powered applications, assistants, chatbots, LLM integrations, AI agents, intelligent automation and other generative AI features depending on the product requirements.",
    },
    {
      category: "E-Commerce",
      question: "Can you build an e-commerce website?",
      answer:
        "Yes. We develop e-commerce solutions with product management, shopping experiences, customer flows, payment integrations, order-related functionality and scalable storefront architecture.",
    },
    {
      category: "SaaS",
      question: "Can DevZore develop a SaaS product?",
      answer:
        "Yes. We can help plan and develop SaaS products with features such as authentication, user management, dashboards, subscriptions, APIs, database architecture and scalable application functionality.",
    },
    {
      category: "Startup",
      question: "Can you help turn a startup idea into an MVP?",
      answer:
        "Yes. We help startups move from an initial idea to an MVP by defining important features, planning the product, designing the user experience, developing the application, testing it and preparing it for launch.",
    },
    {
      category: "Pricing",
      question: "How much does a software development project cost?",
      answer:
        "Project cost depends on scope, features, design requirements, integrations, technology, complexity and timeline. After reviewing your requirements, we can discuss an appropriate development approach and project estimate.",
    },
    {
      category: "Pricing",
      question: "Do you provide a quote before starting a project?",
      answer:
        "Yes. Once we understand your requirements and project scope, we can discuss the expected work, development approach, timeline and estimated project cost before development begins.",
    },
    {
      category: "Process",
      question: "What is your development process?",
      answer:
        "Our typical process includes requirement discovery, planning, UI/UX or interface preparation when required, development, testing, review, deployment and post-launch support. The exact workflow can vary depending on the project.",
    },
    {
      category: "Process",
      question: "How long does it take to build a website or software product?",
      answer:
        "The timeline depends on project size and complexity. A focused website may require less time than a custom management system, SaaS platform or advanced application. We discuss the expected timeline after reviewing the requirements.",
    },
    {
      category: "Process",
      question: "Can I request changes during development?",
      answer:
        "Project feedback is an important part of development. Changes within the agreed scope can be reviewed during the project. Larger additions or scope changes may affect the timeline and cost.",
    },
    {
      category: "Support",
      question: "Do you provide support after the project is launched?",
      answer:
        "Yes. DevZore offers maintenance and support services that can include bug fixes, updates, troubleshooting, performance improvements and ongoing technical assistance depending on the support arrangement.",
    },
    {
      category: "Support",
      question: "Can you maintain an existing website or web application?",
      answer:
        "Yes. Depending on the technology and condition of the existing project, we can review it and provide maintenance, bug fixes, updates, performance improvements or further development.",
    },
    {
      category: "SEO",
      question: "Does DevZore provide SEO services?",
      answer:
        "Yes. Our SEO services can include technical SEO, on-page optimization, crawlability improvements, structured data, website performance optimization and search visibility monitoring.",
    },
    {
      category: "Security",
      question: "Do you consider security during development?",
      answer:
        "Yes. Security is considered throughout development, including appropriate authentication, authorization, input handling, API protection and secure application practices based on the requirements of the project.",
    },
    {
      category: "General",
      question: "How can I start a project with DevZore?",
      answer:
        "You can contact DevZore through the project inquiry page and share your requirements, goals, expected features and timeline. We can then review the information and discuss the next steps.",
    },
  ];

  // ======================================================
  // CATEGORIES
  // ======================================================

  const categories = [
    "All",
    "General",
    "Development",
    "Mobile",
    "AI",
    "E-Commerce",
    "SaaS",
    "Startup",
    "Pricing",
    "Process",
    "Support",
    "SEO",
    "Security",
  ];

  // ======================================================
  // FILTER
  // ======================================================

  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" ||
        faq.category === activeCategory;

      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        faq.question.toLowerCase().includes(search) ||
        faq.answer.toLowerCase().includes(search) ||
        faq.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // ======================================================
  // CATEGORY ICON
  // ======================================================

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Development":
        return <Code2 size={13} />;

      case "Mobile":
        return <Smartphone size={13} />;

      case "AI":
        return <Sparkles size={13} />;

      case "E-Commerce":
        return <ShoppingCart size={13} />;

      case "SaaS":
        return <Cloud size={13} />;

      case "Pricing":
        return <CreditCard size={13} />;

      case "Process":
        return <Clock3 size={13} />;

      case "Support":
        return <Settings size={13} />;

      case "SEO":
        return <SearchCheck size={13} />;

      case "Security":
        return <ShieldCheck size={13} />;

      default:
        return <CircleHelp size={13} />;
    }
  };

  // ======================================================
  // PAGE
  // ======================================================

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

      <section className="relative overflow-hidden border-b border-transparent">
        {/* BACKGROUND */}

        <div
          className={`absolute inset-0 pointer-events-none ${
            d
              ? "bg-[radial-gradient(circle_at_50%_20%,rgba(147,51,234,0.12),transparent_42%)]"
              : "bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.12),transparent_43%)]"
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
              <CircleHelp
                size={15}
                className="text-purple-500"
              />

              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-purple-600">
                Frequently Asked Questions
              </span>
            </div>

            {/* TITLE */}

            <h1 className="mt-6 text-[38px] sm:text-5xl lg:text-[64px] leading-[1.02] font-black tracking-[-0.045em]">
              Questions About
              <span className="block mt-2 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                Working With DevZore
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className={`mt-5 max-w-3xl mx-auto text-[14px] sm:text-[16px] leading-7 ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Find answers about our development services, project
              process, pricing, SaaS, mobile apps, AI solutions,
              e-commerce, maintenance and working with DevZore.
            </p>

            {/* BUTTONS */}

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3.5 text-[11px] font-black text-white transition-all hover:-translate-y-0.5"
              >
                Ask About Your Project

                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/allservices"
                className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[11px] font-black transition-all ${
                  d
                    ? "border-white/[0.1] bg-white/[0.03] text-white hover:bg-white/[0.07]"
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

            {/* HERO FEATURES */}

            <div
              className={`mt-8 pt-5 border-t flex flex-wrap items-center justify-center gap-x-7 gap-y-3 ${
                d
                  ? "border-white/[0.06]"
                  : "border-gray-200"
              }`}
            >
              {[
                "Project Planning",
                "Development",
                "Pricing",
                "Support",
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
          SEARCH + CATEGORIES
      ================================================== */}

      <section className="pt-8 pb-4">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">

          {/* SEARCH */}

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search
                size={17}
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  d ? "text-gray-500" : "text-gray-400"
                }`}
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setOpenFAQ(null);
                }}
                placeholder="Search frequently asked questions..."
                aria-label="Search frequently asked questions"
                className={`w-full rounded-2xl border py-3.5 pl-11 pr-4 text-[12px] outline-none transition-all focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10 ${
                  d
                    ? "bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600"
                    : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 shadow-sm"
                }`}
              />
            </div>
          </div>

          {/* CATEGORY FILTERS */}

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => {
              const active =
                activeCategory === category;

              return (
                <button
                  type="button"
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenFAQ(null);
                  }}
                  className={`rounded-full border px-3 py-1.5 text-[9px] sm:text-[10px] font-bold transition-all ${
                    active
                      ? "bg-purple-600 border-purple-600 text-white"
                      : d
                      ? "border-white/[0.08] bg-white/[0.03] text-gray-400 hover:text-white hover:border-purple-500/30"
                      : "border-gray-200 bg-white text-gray-600 hover:text-purple-600 hover:border-purple-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          FAQ LIST
      ================================================== */}

      <section className="pt-5 pb-10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="space-y-2.5">

            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const open = openFAQ === index;

                return (
                  <div
                    key={`${faq.category}-${faq.question}`}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      open
                        ? d
                          ? "border-purple-500/30 bg-purple-500/[0.05]"
                          : "border-purple-200 bg-purple-50/40 shadow-sm"
                        : d
                        ? "border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.04]"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFAQ(
                          open ? null : index
                        )
                      }
                      aria-expanded={open}
                      className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 text-left"
                    >
                      {/* ICON */}

                      <div
                        className={`shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center ${
                          open
                            ? "bg-purple-600 border-purple-600 text-white"
                            : d
                            ? "bg-white/[0.04] border-white/[0.07] text-purple-400"
                            : "bg-purple-50 border-purple-100 text-purple-600"
                        }`}
                      >
                        {getCategoryIcon(
                          faq.category
                        )}
                      </div>

                      {/* QUESTION */}

                      <div className="flex-1 min-w-0">
                        <span className="block text-[8px] font-black uppercase tracking-[0.16em] text-purple-500 mb-1">
                          {faq.category}
                        </span>

                        <h2
                          className={`text-[12px] sm:text-[13px] font-bold leading-5 ${
                            d
                              ? "text-gray-100"
                              : "text-gray-900"
                          }`}
                        >
                          {faq.question}
                        </h2>
                      </div>

                      {/* ARROW */}

                      <div
                        className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          open
                            ? "bg-purple-600 text-white"
                            : d
                            ? "bg-white/[0.05] text-gray-400"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            open
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* ANSWER */}

                    <div
                      className={`grid transition-all duration-300 ${
                        open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-5 pb-4 sm:pl-[64px]">
                          <p
                            className={`text-[11px] sm:text-[12px] leading-6 ${
                              d
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              /* NO RESULTS */

              <div
                className={`rounded-2xl border py-12 px-5 text-center ${
                  d
                    ? "border-white/[0.07] bg-white/[0.02]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <CircleHelp
                  size={30}
                  className="mx-auto text-purple-500"
                />

                <h2
                  className={`mt-4 text-lg font-black ${
                    d
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  No questions found
                </h2>

                <p
                  className={`mt-2 text-[11px] ${
                    d
                      ? "text-gray-500"
                      : "text-gray-500"
                  }`}
                >
                  Try another keyword or choose a
                  different category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                    setOpenFAQ(0);
                  }}
                  className="mt-4 text-[10px] font-bold text-purple-500 hover:text-purple-600"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================================================
          STILL HAVE QUESTIONS
      ================================================== */}

      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div
            className={`rounded-3xl border px-5 sm:px-8 py-7 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-5 ${
              d
                ? "border-white/[0.07] bg-white/[0.025]"
                : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-600/10 text-purple-500 flex items-center justify-center">
                <MessageCircle size={18} />
              </div>

              <div>
                <h2
                  className={`text-lg sm:text-xl font-black ${
                    d
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  Still have a question?
                </h2>

                <p
                  className={`mt-1 max-w-xl text-[11px] sm:text-[12px] leading-6 ${
                    d
                      ? "text-gray-500"
                      : "text-gray-500"
                  }`}
                >
                  Tell us about your project or question
                  and we can discuss your requirements and
                  the next steps.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="group shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-5 py-3 text-[10px] font-black text-white transition-all"
            >
              Contact DevZore

              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
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
              <Sparkles
                size={24}
                className="mx-auto text-purple-500"
              />

              <h2
                className={`mt-4 text-3xl sm:text-4xl font-black tracking-tight ${
                  d
                    ? "text-white"
                    : "text-gray-950"
                }`}
              >
                Ready to Discuss Your Project?
              </h2>

              <p
                className={`mt-3 text-[12px] sm:text-[14px] leading-7 ${
                  d
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                Share your idea, requirements and goals
                with DevZore. We can discuss the right
                approach for your website, application,
                SaaS platform or custom software.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3.5 text-[11px] font-black text-white transition-all hover:-translate-y-0.5"
                >
                  Start Your Project

                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <Link
                  to="/guides"
                  className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[11px] font-black transition-all ${
                    d
                      ? "border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08]"
                      : "border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Development Guides

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
              to="/allservices"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              All Services
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
              to="/guides"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Development Guides
            </Link>

            <Link
              to="/blog"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Blog
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

export default FAQs;