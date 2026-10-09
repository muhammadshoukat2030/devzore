import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock3,
  Code2,
  Globe,
  HeartHandshake,
  Layers3,
  Lightbulb,
  Mail,
  Minus,
  Plus,
  Rocket,
  Send,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const StartupSolutions = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Startup MVP Development",
    timeline: "",
    message: "",
  });

  // BACKGROUNDS

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

  // SOLUTIONS

  const solutions = [
    {
      icon: <Lightbulb size={20} />,
      number: "01",
      title: "Idea to MVP",
      description:
        "Turn your startup idea into a focused MVP with the essential functionality needed to validate your concept and start learning from real users.",
    },
    {
      icon: <Globe size={20} />,
      number: "02",
      title: "Web Applications",
      description:
        "Build responsive web applications around your product requirements, customer workflows and business model.",
    },
    {
      icon: <Smartphone size={20} />,
      number: "03",
      title: "Mobile Applications",
      description:
        "Launch modern mobile applications with user-focused interfaces, backend connectivity and practical product workflows.",
    },
    {
      icon: <TrendingUp size={20} />,
      number: "04",
      title: "SaaS Products",
      description:
        "Develop SaaS platforms with user accounts, dashboards, subscriptions, APIs, permissions and scalable product architecture.",
    },
    {
      icon: <Sparkles size={20} />,
      number: "05",
      title: "AI-Powered Products",
      description:
        "Add AI assistants, intelligent workflows, generative AI capabilities and automation to modern startup products where they provide real value.",
    },
    {
      icon: <Settings size={20} />,
      number: "06",
      title: "Backend & APIs",
      description:
        "Build backend systems, APIs, authentication and databases that support your product as users and requirements evolve.",
    },
  ];

  // PRODUCT PRINCIPLES

  const principles = [
    {
      icon: <Target size={18} />,
      title: "Focused MVP Scope",
      description:
        "Prioritise the functionality needed to test the product instead of building unnecessary features too early.",
    },
    {
      icon: <Layers3 size={18} />,
      title: "Product-Focused Architecture",
      description:
        "Structure the application around the actual product workflows and future development requirements.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security Conscious",
      description:
        "Authentication, validation, access control and sensible application security practices are considered during development.",
    },
    {
      icon: <Zap size={18} />,
      title: "Performance Considered",
      description:
        "Frontend, backend and application performance are considered as part of the development process.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Maintainable Development",
      description:
        "Reusable components and clear application structure help make future product changes easier to manage.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Built for Iteration",
      description:
        "The first version provides a technical foundation that can evolve as product requirements become clearer.",
    },
  ];

  // STARTUP TYPES

  const startupTypes = [
    {
      icon: <Lightbulb size={18} />,
      title: "Early-Stage Founders",
      description:
        "Turn an initial product idea into a defined digital product and practical MVP scope.",
    },
    {
      icon: <Rocket size={18} />,
      title: "New Startups",
      description:
        "Build and launch the first usable version of a web, mobile or SaaS product.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Growing Startups",
      description:
        "Improve existing products through new workflows, features, integrations and technical improvements.",
    },
    {
      icon: <Globe size={18} />,
      title: "Digital Businesses",
      description:
        "Build software platforms that support online services, customer experiences and digital operations.",
    },
  ];

  // VALIDATION

  const validationPoints = [
    "Define the core product problem",
    "Identify the primary user journey",
    "Prioritise essential MVP features",
    "Avoid unnecessary early complexity",
    "Plan authentication and user roles",
    "Define backend and data requirements",
    "Prepare for launch and testing",
    "Leave room for future iteration",
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your startup idea, target users, business model, goals and initial product requirements.",
    },
    {
      number: "02",
      title: "Product Planning",
      description:
        "The MVP scope, user journeys, core features and technical requirements are organised into a practical development plan.",
    },
    {
      number: "03",
      title: "UI & UX Direction",
      description:
        "Important screens, product flows and interface direction are planned before full implementation begins.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Frontend, backend, databases, integrations and required product functionality are developed according to the agreed scope.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "Important product workflows, responsive behaviour and application functionality are reviewed before launch.",
    },
    {
      number: "06",
      title: "Launch & Iteration",
      description:
        "The product is prepared for deployment and can continue evolving through feedback, improvements and additional development.",
    },
  ];

  // USE CASES

  const useCases = [
    "SaaS MVPs",
    "Business Platforms",
    "Customer Portals",
    "Marketplace Products",
    "Booking Platforms",
    "Management Systems",
    "AI-Powered Tools",
    "Mobile Applications",
    "Education Platforms",
    "Service Marketplaces",
    "Internal Business Tools",
    "Subscription Products",
  ];

  // WHY DEVZORE

  const whyDevZore = [
    {
      icon: <Target size={18} />,
      title: "Built Around the Product",
      description:
        "Development decisions are based on product requirements instead of forcing every startup into the same structure.",
    },
    {
      icon: <Rocket size={18} />,
      title: "MVP-Focused Development",
      description:
        "The initial version stays focused on useful functionality that can support product validation and launch.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Professional Engineering",
      description:
        "Frontend, backend and application structure are developed with future maintenance in mind.",
    },
    {
      icon: <Users size={18} />,
      title: "Clear Communication",
      description:
        "Requirements, product decisions and development progress can be discussed throughout the project.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Ready to Evolve",
      description:
        "The product can continue through additional features, integrations and improvements after launch.",
    },
    {
      icon: <HeartHandshake size={18} />,
      title: "Ongoing Support",
      description:
        "Maintenance and continued product development can be provided as requirements grow.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "What startup software development services does DevZore provide?",
      a: "DevZore provides startup software development for MVPs, SaaS products, web applications, mobile applications, backend systems, APIs and selected AI-powered product features.",
    },
    {
      q: "Can DevZore help turn an idea into an MVP?",
      a: "Yes. The project can begin with product discovery, feature prioritisation, user flows and technical planning before developing the first usable version of the product.",
    },
    {
      q: "What should be included in a startup MVP?",
      a: "An MVP should generally focus on the smallest useful set of features required to demonstrate the core product value and allow real users to interact with the main workflow.",
    },
    {
      q: "How much does startup MVP development cost?",
      a: "The cost depends on the number of screens, product workflows, backend requirements, user roles, integrations, mobile requirements and overall technical complexity. A project-specific estimate can be prepared after the scope is defined.",
    },
    {
      q: "How long does startup product development take?",
      a: "The timeline depends on product scope and complexity. A focused MVP normally requires less development than a larger SaaS platform or multi-role business application. A realistic timeline can be estimated after requirements are reviewed.",
    },
    {
      q: "Can you build both the frontend and backend?",
      a: "Yes. Startup projects can include frontend development, backend APIs, databases, authentication, business logic and third-party integrations according to the product requirements.",
    },
    {
      q: "Can you build a mobile application for a startup?",
      a: "Yes. DevZore provides mobile application development for startup products when a mobile experience is appropriate for the users and product requirements.",
    },
    {
      q: "Can AI features be added to a startup product?",
      a: "Yes, where AI provides practical value. Product features may include AI assistants, generative AI capabilities, content workflows or automation depending on the use case and available services.",
    },
    {
      q: "Can you continue developing the product after the MVP launch?",
      a: "Yes. An MVP can continue through feature development, performance improvements, integrations, maintenance and product iterations after launch.",
    },
    {
      q: "Can DevZore work remotely with startup founders?",
      a: "Yes. Startup projects can be managed remotely through agreed communication channels, online meetings, requirement reviews and development updates.",
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  // RELATED SERVICES

  const relatedServices = [
    {
      icon: <Rocket size={21} />,
      title: "Startup MVP Development",
      description:
        "Focused MVP development from product planning and essential features through testing and launch.",
      path: "/startup-mvp",
    },
    {
      icon: <TrendingUp size={21} />,
      title: "SaaS Product Development",
      description:
        "Custom SaaS platforms with authentication, dashboards, user management, subscriptions and APIs.",
      path: "/saas-product-development",
    },
    {
      icon: <Globe size={21} />,
      title: "Web Development",
      description:
        "Responsive web applications and business platforms built around real product requirements.",
      path: "/web-development",
    },
    {
      icon: <Smartphone size={21} />,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile products for startups requiring iOS and Android user experiences.",
      path: "/mobile-apps",
    },
  ];

  // HELPERS

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Startup Project Enquiry - ${formData.name}`
    );

    const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Company / Startup: ${formData.company || "Not provided"}
Service: ${formData.service}
Timeline: ${formData.timeline || "Not specified"}

Startup / Product Details:
${formData.message}`
    );

    window.location.href = `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;
  };

  // SCHEMA

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://devzore.com/startup-solutions#webpage",
    url: "https://devzore.com/startup-solutions",
    name: "Startup Software Solutions",
    description:
      "Startup software solutions including MVP development, web applications, mobile apps, SaaS products, backend systems and AI-powered digital products.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
    },
  };

  const solutionsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Startup Software Solutions",
    itemListElement: solutions.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: solution.title,
        description: solution.description,
        provider: {
          "@id": "https://devzore.com/#organization",
        },
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
        name: "Startup Solutions",
        item: "https://devzore.com/startup-solutions",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  // SECTION LABEL

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

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(solutionsSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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
          aria-labelledby="startup-solutions-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[8%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/12 blur-[140px]" />

            <div className="absolute inset-0 opacity-50" style={darkGrid} />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/96 to-[#04111a]/75" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-23 sm:pt-24 lg:pt-24 pb-11 sm:pb-13">
            <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5] mb-5">
                  <Rocket size={14} className="text-[#26becb]" />
                  Startup Solutions
                </div>

                <h1
                  id="startup-solutions-heading"
                  className="max-w-[780px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[53px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Turn your startup idea into a{" "}
                  <span className="text-[#22bdca]">
                    working digital product.
                  </span>
                </h1>

                <p className="max-w-[690px] mt-4 text-[16px] sm:text-[13.5px] leading-7 text-slate-300">
                  From early-stage ideas and MVPs to SaaS platforms, web
                  applications, mobile products and selected AI features,
                  DevZore helps startups move from product planning to launch.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  Build the essential first version, establish a practical
                  technical foundation and continue improving the product as
                  real requirements become clearer.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#startup-enquiry"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start Your Project
                    <ArrowRight size={14} />
                  </a>

                  <Link
                    to="/startup-mvp"
                    onClick={scrollTop}
                    className="inline-flex justify-center items-center gap-2 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore MVP Development
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "MVP Development",
                    "Product Architecture",
                    "Launch Support",
                    "Future Iteration",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-400"
                    >
                      <CheckCircle2
                        size={12}
                        className="text-[#20becd]"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* PRODUCT VISUAL */}

              <div className="relative min-h-[360px] lg:min-h-[410px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[400px] h-[400px] rounded-full bg-[#0796A8]/15 blur-[100px]" />

                  <div className="relative w-full max-w-[540px]">
                    <div className="rounded-[20px] border border-white/10 bg-[#091d27]/95 shadow-[0_35px_90px_rgba(0,0,0,0.45)] overflow-hidden">
                      <div className="h-9 px-4 border-b border-white/10 bg-[#0b222d] flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {[1, 2, 3].map((item) => (
                            <span
                              key={item}
                              className="w-2 h-2 rounded-full bg-white/20"
                            />
                          ))}
                        </div>

                        <div className="w-[44%] h-4 rounded bg-white/[0.05]" />

                        <div className="w-5" />
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="w-20 h-2 rounded bg-[#1bbac8]/60 mb-2" />
                            <div className="w-36 h-3 rounded bg-white/80" />
                          </div>

                          <div className="rounded-lg border border-[#21bfcd]/20 bg-[#21bfcd]/10 px-3 py-1.5 text-[8px] font-semibold text-[#2bc6d3]">
                            STARTUP PRODUCT
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-3">
                          {[
                            ["MVP", "Core"],
                            ["Users", "Active"],
                            ["Launch", "Ready"],
                          ].map(([title, text]) => (
                            <div
                              key={title}
                              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"
                            >
                              <p className="text-[7px] uppercase tracking-[0.14em] text-slate-500">
                                {title}
                              </p>

                              <p className="text-[10px] font-semibold mt-1.5">
                                {text}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-[9px] font-semibold text-slate-300">
                              Product Roadmap
                            </p>

                            <TrendingUp
                              size={13}
                              className="text-[#28c5d4]"
                            />
                          </div>

                          <div className="space-y-3">
                            {[
                              ["Discovery", "100%"],
                              ["Development", "72%"],
                              ["Testing", "45%"],
                            ].map(([label, width], index) => (
                              <div key={label}>
                                <div className="flex justify-between text-[7px] text-slate-500 mb-1">
                                  <span>{label}</span>
                                  <span>{width}</span>
                                </div>

                                <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                                  <div
                                    className="h-full rounded-full bg-[#20becd]"
                                    style={{
                                      width:
                                        index === 0
                                          ? "100%"
                                          : index === 1
                                          ? "72%"
                                          : "45%",
                                    }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-5 top-20 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <Lightbulb
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Validate
                      </p>
                    </div>

                    <div className="absolute -right-5 top-14 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <Rocket
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Launch
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <TrendingUp
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Grow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CAPABILITIES */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "Product Discovery"],
                  ["02", "MVP Planning"],
                  ["03", "Development"],
                  ["04", "Launch & Iteration"],
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
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>Built for Startups</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  Build the right product{" "}
                  <span className="text-[#0796A8]">
                    from the beginning.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Early-stage products need clear priorities. Building every
                  possible feature before validating the main product idea can
                  add unnecessary development work and complexity.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  The goal is to define the essential product experience,
                  build a usable first version and establish a technical
                  foundation that can continue evolving as you learn more from
                  users and the market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}

        <section
          aria-labelledby="startup-solutions-list-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>What We Build</SectionLabel>

              <h2
                id="startup-solutions-list-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Startup development solutions for{" "}
                <span className="text-[#0796A8]">
                  real product ideas.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Development support can cover the complete product or a
                specific stage depending on where your startup currently is.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map((solution) => (
                <article
                  key={solution.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center group-hover:bg-[#071923] group-hover:text-[#28c5d4] transition-colors">
                      {solution.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {solution.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[16px] font-semibold mt-4">
                    {solution.title}
                  </h3>

                  <p className="text-slate-600 text-[12px] leading-5 mt-2">
                    {solution.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPMENT STANDARDS */}

        <section
          aria-labelledby="startup-principles-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute top-0 right-0 w-[500px] h-[420px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>
                Startup Development Standards
              </SectionLabel>

              <h2
                id="startup-principles-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                A product foundation designed for{" "}
                <span className="text-[#25bfce]">
                  iteration and growth.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Startup development should balance speed with enough structure
                to keep future product development practical.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className="bg-[#071923] p-5 min-h-[170px] hover:bg-[#0a202a] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0c2a35] text-[#27c1cf] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[14px] font-semibold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-2">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STARTUP TYPES */}

        <section
          aria-labelledby="startup-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Who We Work With</SectionLabel>

                <h2
                  id="startup-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Product development for different{" "}
                  <span className="text-[#0796A8]">
                    startup stages.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  The right development approach depends on whether you are
                  still defining the idea, launching an MVP or improving an
                  existing product.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {startupTypes.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] text-[13px] font-semibold mt-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALIDATION */}

        <section
          aria-labelledby="startup-validation-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel>Product Validation</SectionLabel>

                <h2
                  id="startup-validation-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Build what needs to be tested{" "}
                  <span className="text-[#0796A8]">
                    before adding everything else.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  An MVP is most useful when its scope is connected to the main
                  product hypothesis and customer journey rather than simply
                  being a smaller version of a large feature list.
                </p>

                <p className="text-slate-500 text-[12px] leading-6 mt-3">
                  Product planning helps identify what needs to exist in the
                  first release and what can reasonably wait for later
                  iterations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {validationPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#fbfcfc] p-3.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#edf4f5] flex items-center justify-center">
                      <Check
                        size={12}
                        className="text-[#07899a]"
                      />
                    </div>

                    <span className="text-[11px] font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section
          aria-labelledby="startup-process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="startup-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From startup idea to{" "}
                <span className="text-[#25bfce]">
                  product launch.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured workflow keeps the product focused while moving
                from planning into development and release.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="bg-[#071923] p-5 min-h-[175px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-[10px] font-semibold text-[#22bfce]">
                    {step.number}
                  </span>

                  <h3 className="text-[15px] font-semibold mt-6">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-2">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}

        <section
          aria-labelledby="startup-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Startup Use Cases</SectionLabel>

                <h2
                  id="startup-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Digital products across different{" "}
                  <span className="text-[#0796A8]">
                    startup models.
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                {useCases.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-3.5"
                  >
                    <span className="text-[8px] font-semibold text-[#0796A8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-[11px] font-semibold text-[#071923] mt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY DEVZORE */}

        <section
          aria-labelledby="why-startup-devzore-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="why-startup-devzore-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                A development approach built around{" "}
                <span className="text-[#0796A8]">
                  startup products.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {whyDevZore.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-[#fbfcfc] p-4 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[#071923] text-[13px] font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[10px] leading-5 mt-1">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}

        <section
          aria-labelledby="startup-related-services-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Related Services</SectionLabel>

              <h2
                id="startup-related-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Explore services that support your startup journey.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {service.icon}
                  </div>

                  <h3 className="text-[#071923] text-[13px] font-semibold mt-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a] mt-3">
                    Explore Service
                    <ArrowUpRight size={11} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section
          aria-labelledby="startup-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="mb-6">
              <SectionLabel>FAQ</SectionLabel>

              <h2
                id="startup-faq-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
              >
                Startup software development questions.
              </h2>

              <p className="text-slate-600 text-[13px] leading-6 mt-3 max-w-2xl">
                Common questions about MVP planning, startup product
                development, timelines and ongoing development.
              </p>
            </div>

            <div className="border-t border-slate-200">
              {visibleFaqs.map((faq) => {
                const originalIndex = faqs.findIndex(
                  (item) => item.q === faq.q
                );

                const isOpen = activeFaq === originalIndex;

                return (
                  <div
                    key={faq.q}
                    className="border-b border-slate-200"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isOpen ? null : originalIndex)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`startup-faq-${originalIndex}`}
                      className="w-full flex items-center justify-between gap-5 py-4 text-left"
                    >
                      <span
                        className={`text-[13px] sm:text-[14px] font-semibold ${
                          isOpen
                            ? "text-[#07899a]"
                            : "text-[#071923]"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={`w-7 h-7 flex-shrink-0 rounded-full border flex items-center justify-center ${
                          isOpen
                            ? "border-[#0796A8] bg-[#0796A8] text-white"
                            : "border-slate-200 bg-white text-[#071923]"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={12} />
                        ) : (
                          <Plus size={12} />
                        )}
                      </span>
                    </button>

                    <div
                      id={`startup-faq-${originalIndex}`}
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-3xl pb-4 text-[12px] leading-6 text-slate-600">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {faqs.length > 3 && (
              <div className="flex justify-center mt-5">
                <button
                  type="button"
                  onClick={() => {
                    setShowAllFaqs((current) => !current);
                    setActiveFaq(null);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#071923]/15 bg-[#f8fafb] px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:border-[#0796A8]/50 transition-colors"
                >
                  {showAllFaqs
                    ? "Show Less Questions"
                    : `Show More Questions (${faqs.length - 3})`}

                  {showAllFaqs ? (
                    <ChevronUp size={13} />
                  ) : (
                    <ChevronDown size={13} />
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* PROJECT ENQUIRY */}

        <section
          id="startup-enquiry"
          aria-labelledby="startup-enquiry-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute -top-20 left-[5%] w-[450px] h-[450px] rounded-full bg-[#0796A8]/10 blur-[130px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel light>Start Your Product</SectionLabel>

                <h2
                  id="startup-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us about your{" "}
                  <span className="text-[#25bfce]">
                    startup idea.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share the product idea, target users and the functionality
                  you believe the first version needs. We can discuss the
                  appropriate scope and development approach.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Startup MVPs",
                    "SaaS product development",
                    "Web & mobile applications",
                    "Backend, APIs and integrations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#19b9c8]/10 border border-[#19b9c8]/25 flex items-center justify-center">
                        <Check
                          size={10}
                          className="text-[#2ac6d4]"
                        />
                      </div>

                      <span className="text-[11px] font-medium text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <p className="text-[9px] uppercase tracking-[0.18em] font-semibold text-slate-500">
                    Prefer email?
                  </p>

                  <a
                    href="mailto:hellodevzore@gmail.com"
                    className="inline-flex items-center gap-2 mt-2 text-[12px] font-medium text-[#26c4d2]"
                  >
                    <Mail size={14} />
                    hellodevzore@gmail.com
                  </a>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.1] bg-[#0a202a]/90 p-5 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="startup-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="startup-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="startup-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="startup-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@startup.com"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="startup-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Startup / Company
                    </label>

                    <input
                      id="startup-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Startup name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="startup-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="startup-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Startup MVP Development</option>
                      <option>SaaS Product</option>
                      <option>Web Application</option>
                      <option>Mobile Application</option>
                      <option>AI-Powered Product</option>
                      <option>Backend & API Development</option>
                      <option>Existing Startup Product</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="startup-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Timeline
                    </label>

                    <select
                      id="startup-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option value="">Select a timeline</option>
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Still planning</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="startup-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Product Details *
                    </label>

                    <textarea
                      id="startup-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the product idea, users, important features and current stage..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    You do not need a complete specification. Share the current
                    idea and requirements you already know.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send Startup Enquiry
                    <Send size={13} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white text-[14px] font-semibold">
                  Have a startup idea but not sure what the MVP needs?
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  Share the idea and DevZore can help discuss the product scope
                  and next development step.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex self-start items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
              >
                Discuss Your Startup
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StartupSolutions;