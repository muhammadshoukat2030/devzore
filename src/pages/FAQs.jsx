import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Cloud,
  Code2,
  CreditCard,
  Clock3,
  MessageCircle,
  Search,
  SearchCheck,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
} from "lucide-react";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // FAQ DATA

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

  // CATEGORIES

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

  // FILTERED FAQS

  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;

      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        faq.question.toLowerCase().includes(search) ||
        faq.answer.toLowerCase().includes(search) ||
        faq.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // CATEGORY ICON

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

  // HELPERS

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const lightGrid = {
    backgroundImage:
      "linear-gradient(rgba(7,25,35,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(7,25,35,0.045) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  const SectionLabel = ({ children, light = false }) => (
    <div
      className={`flex items-center gap-2.5 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase ${
        light ? "text-[#28c5d4]" : "text-[#07899a]"
      }`}
    >
      <span className="w-5 h-[2px] bg-[#0796A8]" />
      {children}
    </div>
  );

  // STRUCTURED DATA

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://devzore.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQs",
        item: "https://devzore.com/faqs",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div
        className="min-h-screen overflow-hidden bg-[#f7f9fa] text-[#071923] antialiased"
        style={{
          fontFamily: '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
        }}
      >
        {/* HERO */}

        <section
          aria-labelledby="faq-page-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-55"
              style={darkGrid}
            />

            <div className="absolute -top-32 left-[10%] w-[560px] h-[560px] rounded-full bg-[#0796A8]/12 blur-[150px]" />

            <div className="absolute top-8 right-[4%] w-[420px] h-[420px] rounded-full bg-[#20bdcb]/7 blur-[130px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04111a]/85" />
          </div>

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6 pt-23 sm:pt-24 lg:pt-28 pb-10 sm:pb-12">
            <div className="max-w-[900px] mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.17em] uppercase text-[#c2ccd2]">
                <CircleHelp size={14} className="text-[#25c0ce]" />
                Frequently Asked Questions
              </div>

              <h1
                id="faq-page-heading"
                className="mt-5 text-[40px] sm:text-[50px] lg:text-[62px] xl:text-[54px] leading-[1.04] font-semibold tracking-[-0.045em]"
              >
                Answers to common questions about{" "}
                <span className="text-[#22bdca]">
                  working with DevZore.
                </span>
              </h1>

              <p className="max-w-[760px] mx-auto mt-5 text-[16px] sm:text-[15px] leading-7 text-slate-300">
                Find answers about our development services, project process,
                pricing, SaaS, mobile apps, AI, e-commerce, maintenance and
                ongoing support.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-colors"
                >
                  Ask About Your Project
                  <ArrowRight size={14} />
                </Link>

                <a
                  href="#faq-list"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                >
                  Browse Questions
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="mt-7 pt-5 border-t border-white/[0.08] flex flex-wrap justify-center gap-x-6 gap-y-2.5">
                {[
                  "Project Planning",
                  "Development",
                  "Pricing",
                  "Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 text-[10px] font-medium text-slate-400"
                  >
                    <CheckCircle2
                      size={12}
                      className="text-[#25c0ce]"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HERO STRIP */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "Services"],
                  ["02", "Process"],
                  ["03", "Pricing"],
                  ["04", "Support"],
                ].map(([number, title], index) => (
                  <div
                    key={title}
                    className={`py-4 ${
                      index !== 3
                        ? "lg:border-r border-white/[0.07]"
                        : ""
                    } ${index > 0 ? "lg:pl-7" : ""}`}
                  >
                    <span className="block text-[9px] font-semibold text-[#1bb8c7] mb-1">
                      {number}
                    </span>

                    <span className="text-[11px] font-medium text-slate-300">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}

        <section
          className="py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-7 lg:gap-12 items-center">
              <div>
                <SectionLabel>Quick Answers</SectionLabel>

                <h2 className="mt-3 text-[28px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold">
                  Find the information you need{" "}
                  <span className="text-[#0796A8]">before getting started.</span>
                </h2>
              </div>

              <div>
                <p className="text-[14px] leading-7 text-slate-600">
                  Software projects often involve questions about scope,
                  technology, pricing, timelines, ownership, maintenance and
                  how the development process works.
                </p>

                <p className="mt-3 text-[13px] leading-6 text-slate-500">
                  Use the search and category filters below to quickly find
                  answers related to your project.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
                  {[
                    "Understand our services",
                    "Learn how projects are handled",
                    "Review pricing and timeline questions",
                    "Explore post-launch support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-[#07899a]"
                      />

                      <span className="text-[10px] font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH */}

        <section
          id="faq-list"
          className="py-10 bg-white scroll-mt-24"
        >
          <div className="max-w-[1080px] mx-auto px-5 sm:px-6">
            <div className="text-center max-w-[720px] mx-auto mb-7">
              <SectionLabel>Search FAQs</SectionLabel>

              <h2 className="mt-3 text-[28px] sm:text-[34px] md:text-[40px] font-semibold tracking-[-0.035em] leading-[1.08]">
                What would you like to{" "}
                <span className="text-[#0796A8]">know?</span>
              </h2>

              <p className="text-[13px] leading-6 text-slate-500 mt-3">
                Search all questions or select a category to narrow the
                results.
              </p>
            </div>

            <div className="max-w-[720px] mx-auto">
              <div className="relative">
                <Search
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
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
                  className="w-full rounded-xl border border-slate-200 bg-[#f9fbfb] py-3.5 pl-11 pr-4 text-[12px] text-[#071923] placeholder:text-slate-400 outline-none transition-all focus:border-[#0796A8]/60 focus:ring-4 focus:ring-[#0796A8]/10"
                />
              </div>
            </div>

            {/* CATEGORIES */}

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    type="button"
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenFAQ(null);
                    }}
                    aria-pressed={active}
                    className={`rounded-full border px-3 py-1.5 text-[9px] sm:text-[10px] font-semibold transition-all ${
                      active
                        ? "bg-[#071923] border-[#071923] text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-[#0796A8]/40 hover:text-[#07899a]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="text-center mt-4">
              <span className="text-[10px] text-slate-400">
                {filteredFAQs.length}{" "}
                {filteredFAQs.length === 1 ? "question" : "questions"} found
              </span>
            </div>
          </div>
        </section>

        {/* FAQ LIST */}

        <section className="pb-11 md:pb-12 bg-white">
          <div className="max-w-[900px] mx-auto px-5 sm:px-6">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-2.5">
                {filteredFAQs.map((faq, index) => {
                  const open = openFAQ === index;

                  return (
                    <article
                      key={`${faq.category}-${faq.question}`}
                      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                        open
                          ? "border-[#0796A8]/35 bg-[#f2f8f9]"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFAQ(open ? null : index)}
                        aria-expanded={open}
                        aria-controls={`faq-answer-${index}`}
                        className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 text-left"
                      >
                        <div
                          className={`shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                            open
                              ? "bg-[#071923] border-[#071923] text-[#28c5d4]"
                              : "bg-[#edf4f5] border-[#dce9eb] text-[#07899a]"
                          }`}
                        >
                          {getCategoryIcon(faq.category)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className="block text-[8px] font-bold uppercase tracking-[0.16em] text-[#07899a] mb-1">
                            {faq.category}
                          </span>

                          <h3 className="text-[12px] sm:text-[13px] font-semibold leading-5 text-[#071923]">
                            {faq.question}
                          </h3>
                        </div>

                        <div
                          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            open
                              ? "bg-[#071923] text-[#28c5d4]"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </button>

                      <div
                        id={`faq-answer-${index}`}
                        className={`grid transition-all duration-300 ${
                          open
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-4 sm:px-5 pb-4 sm:pl-[68px]">
                            <div className="border-t border-[#0796A8]/15 pt-3">
                              <p className="text-[11px] sm:text-[12px] leading-6 text-slate-600">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-[#f9fbfb] py-12 px-5 text-center">
                <div className="w-11 h-11 mx-auto rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                  <CircleHelp size={22} />
                </div>

                <h2 className="mt-4 text-[17px] font-semibold text-[#071923]">
                  No questions found
                </h2>

                <p className="mt-2 text-[11px] text-slate-500">
                  Try another keyword or select a different category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                    setOpenFAQ(0);
                  }}
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#071923] px-4 py-2.5 text-[10px] font-semibold text-white hover:bg-[#0b2631] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* FAQ AREAS */}

        <section
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
          style={darkGrid}
        >
          <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[760px] mb-7">
              <SectionLabel light>Common Topics</SectionLabel>

              <h2 className="mt-3 text-[28px] sm:text-[34px] md:text-[40px] font-semibold tracking-[-0.035em] leading-[1.08]">
                Questions across the{" "}
                <span className="text-[#25bfce]">full project journey.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {[
                {
                  icon: <Code2 size={18} />,
                  title: "Development",
                  text: "Websites, applications, architecture and technologies.",
                },
                {
                  icon: <CreditCard size={18} />,
                  title: "Pricing & Scope",
                  text: "Project estimates, requirements and scope considerations.",
                },
                {
                  icon: <Clock3 size={18} />,
                  title: "Process",
                  text: "Planning, development, feedback, testing and launch.",
                },
                {
                  icon: <Settings size={18} />,
                  title: "Support",
                  text: "Maintenance, updates, troubleshooting and improvements.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#071923] p-5 min-h-[165px] hover:bg-[#0a202a] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0c2a35] text-[#27c1cf] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[14px] font-semibold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-2">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STILL HAVE QUESTIONS */}

        <section
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1000px] mx-auto px-5 sm:px-6">
            <div className="rounded-2xl border border-slate-200 bg-white px-5 sm:px-7 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#071923] tracking-[-0.02em]">
                    Still have a question?
                  </h2>

                  <p className="mt-1 max-w-xl text-[11px] sm:text-[12px] leading-6 text-slate-500">
                    Tell us about your project or question and we can discuss
                    your requirements, technical considerations and next steps.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="group shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#071923] hover:bg-[#0b2631] px-5 py-3 text-[10px] font-semibold text-white transition-colors"
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

        {/* FINAL CTA */}

        <section className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden">
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[620px] h-[400px] bg-[#0796A8]/10 blur-[145px]" />

          <div className="relative max-w-[900px] mx-auto px-5 sm:px-6 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#0b2a35] text-[#28c5d4] flex items-center justify-center">
              <Sparkles size={19} />
            </div>

            <h2 className="mt-4 text-[29px] sm:text-[35px] md:text-[40px] font-semibold tracking-[-0.04em] leading-[1.06]">
              Ready to discuss{" "}
              <span className="text-[#25bfce]">your project?</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
              Share your idea, requirements and goals with DevZore. We can
              discuss the right approach for your website, application, SaaS
              platform or custom software.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
              >
                Start Your Project

                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/guides"
                onClick={scrollTop}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] px-5 py-3 text-[11px] font-semibold text-white hover:border-[#23bfce]/40 hover:text-[#28c5d4] transition-colors"
              >
                Development Guides

                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <nav
              aria-label="DevZore FAQ related pages"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            >
              {[
                ["All Services", "/allservices"],
                ["Web Development", "/web-development"],
                ["Generative AI", "/generative-ai-development"],
                ["SaaS Development", "/saas-product-development"],
                ["Development Guides", "/guides"],
                ["Blog", "/blog"],
                ["Contact DevZore", "/contact"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={scrollTop}
                  className="text-[9px] font-medium text-slate-500 hover:text-[#25bfce] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQs;