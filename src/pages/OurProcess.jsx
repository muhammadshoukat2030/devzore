import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  Code2,
  Gauge,
  Headphones,
  MessageSquare,
  Palette,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
} from "lucide-react";

const OurProcess = () => {
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

  // PROCESS STEPS

  const processSteps = [
    {
      number: "01",
      icon: <Search size={19} />,
      title: "Discovery",
      description:
        "We start by understanding your business, users, goals, challenges and project requirements before recommending a development approach.",
      points: [
        "Business requirements",
        "Target users",
        "Project objectives",
        "Technical requirements",
      ],
    },
    {
      number: "02",
      icon: <ClipboardList size={19} />,
      title: "Planning",
      description:
        "We organize the project into a clear development plan covering important features, architecture, priorities and implementation stages.",
      points: [
        "Feature planning",
        "Project architecture",
        "Development roadmap",
        "Scope priorities",
      ],
    },
    {
      number: "03",
      icon: <Palette size={19} />,
      title: "UI/UX Design",
      description:
        "Where required, we prepare user flows, interface structure and responsive designs around the product goals and user experience.",
      points: [
        "User experience",
        "Interface structure",
        "Responsive layouts",
        "Design consistency",
      ],
    },
    {
      number: "04",
      icon: <Code2 size={19} />,
      title: "Development",
      description:
        "The approved product plan is turned into a functional application through structured frontend, backend and integration development.",
      points: [
        "Frontend development",
        "Backend development",
        "API integration",
        "Database development",
      ],
    },
    {
      number: "05",
      icon: <TestTube2 size={19} />,
      title: "Testing & QA",
      description:
        "Important user flows, functionality, responsive behaviour and application performance are reviewed before launch.",
      points: [
        "Functional testing",
        "Responsive testing",
        "Performance review",
        "Bug fixing",
      ],
    },
    {
      number: "06",
      icon: <Rocket size={19} />,
      title: "Launch",
      description:
        "Once the product is ready, we prepare the production environment and complete the deployment and final verification.",
      points: [
        "Production setup",
        "Deployment",
        "Domain configuration",
        "Final verification",
      ],
    },
    {
      number: "07",
      icon: <Headphones size={19} />,
      title: "Support & Improvement",
      description:
        "After launch, the product can continue evolving through maintenance, fixes, improvements and future development.",
      points: [
        "Maintenance",
        "Feature updates",
        "Performance improvements",
        "Technical support",
      ],
    },
  ];

  // PRINCIPLES

  const principles = [
    {
      icon: <MessageSquare size={18} />,
      title: "Clear Communication",
      description:
        "Requirements, priorities, feedback and project progress are kept clear throughout the development process.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Quality Development",
      description:
        "We focus on reliable functionality, maintainable structure and responsible development practices.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance Focus",
      description:
        "Responsiveness, user experience and practical application performance are considered throughout development.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "Built to Evolve",
      description:
        "Products are structured with future improvements, additional functionality and ongoing development in mind.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Structured Delivery",
      description:
        "Breaking the project into understandable stages helps keep development aligned with agreed requirements.",
    },
    {
      icon: <CheckCircle2 size={18} />,
      title: "Requirement Driven",
      description:
        "The development approach is based on what the product actually needs rather than unnecessary complexity.",
    },
  ];

  // PROJECT TYPES

  const projectTypes = [
    {
      title: "Business Websites",
      desc: "Professional websites with responsive layouts, service flows and business-focused functionality.",
    },
    {
      title: "Web Applications",
      desc: "Custom applications with dashboards, user accounts, workflows and business logic.",
    },
    {
      title: "Mobile Applications",
      desc: "Cross-platform applications connected with backend services and APIs.",
    },
    {
      title: "SaaS Platforms",
      desc: "Multi-user software products with dashboards, authentication and subscription workflows.",
    },
    {
      title: "E-Commerce Platforms",
      desc: "Online stores with products, checkout, payments and administrative workflows.",
    },
    {
      title: "Management Systems",
      desc: "Custom systems for customers, sales, inventory, reporting and daily operations.",
    },
    {
      title: "Backend Systems",
      desc: "APIs, authentication, databases and application logic supporting digital products.",
    },
    {
      title: "AI-Powered Products",
      desc: "Software with intelligent assistants, automation and AI-enabled product workflows.",
    },
  ];

  // DELIVERY STANDARDS

  const deliveryStandards = [
    {
      title: "Clear Requirements",
      desc:
        "Important functionality, users, workflows and project expectations are clarified before development begins.",
    },
    {
      title: "Focused Scope",
      desc:
        "Development priorities are organized around the features that matter most to the product and its users.",
    },
    {
      title: "Regular Review",
      desc:
        "Key stages can be reviewed during development so feedback can be addressed before final delivery.",
    },
    {
      title: "Responsive Experience",
      desc:
        "Interfaces are reviewed across relevant screen sizes and common user flows.",
    },
    {
      title: "Production Readiness",
      desc:
        "Deployment settings, environment configuration and important launch requirements are checked before release.",
    },
    {
      title: "Post-Launch Continuity",
      desc:
        "Maintenance and future development can continue after the initial release when required.",
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

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://devzore.com/process#webpage",
    url: "https://devzore.com/process",
    name: "Our Software Development Process",
    description:
      "Learn how DevZore approaches software projects from discovery and planning through design, development, testing, deployment and ongoing support.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
    },
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
        name: "Our Process",
        item: "https://devzore.com/process",
      },
    ],
  };

  const processSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "DevZore Software Development Process",
    description:
      "A structured software development process covering discovery, planning, design, development, testing, launch and ongoing support.",
    step: processSteps.map((step) => ({
      "@type": "HowToStep",
      position: Number(step.number),
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(processSchema)}
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
          aria-labelledby="process-page-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-55"
              style={darkGrid}
            />

            <div className="absolute -top-28 left-[8%] w-[560px] h-[560px] rounded-full bg-[#0796A8]/12 blur-[150px]" />

            <div className="absolute top-8 right-[4%] w-[430px] h-[430px] rounded-full bg-[#20bdcb]/7 blur-[135px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04111a]/85" />
          </div>

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6 pt-23 sm:pt-24 lg:pt-25 pb-11 sm:pb-12">
            <div className="max-w-[900px] mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.17em] uppercase text-[#c2ccd2]">
                <Workflow size={14} className="text-[#25c0ce]" />
                Our Process
              </div>

              <h1
                id="process-page-heading"
                className="mt-5 text-[40px] sm:text-[50px] lg:text-[62px] xl:text-[55px] leading-[1.04] font-semibold tracking-[-0.045em]"
              >
                From idea to launch with a{" "}
                <span className="text-[#22bdca]">
                  clear development process.
                </span>
              </h1>

              <p className="max-w-[770px] mx-auto mt-5 text-[16px] sm:text-[15px] leading-7 text-slate-300">
                DevZore follows a structured workflow from initial discovery
                and planning through design, development, testing, deployment
                and ongoing support.
              </p>

              <p className="max-w-[680px] mx-auto mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                The exact process can adapt to the project, but each stage
                helps keep requirements, development and delivery easier to
                understand.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-colors"
                >
                  Start Your Project

                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <a
                  href="#process-steps"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                >
                  See Our Process

                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              <div className="mt-7 pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
                {[
                  "Clear Planning",
                  "Structured Development",
                  "Quality Review",
                  "Launch Support",
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
                  ["01", "Discover"],
                  ["02", "Plan"],
                  ["03", "Build"],
                  ["04", "Launch & Improve"],
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
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-7 lg:gap-12 items-start">
              <div>
                <SectionLabel>How We Work</SectionLabel>

                <h2 className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold">
                  A structured path from{" "}
                  <span className="text-[#0796A8]">
                    concept to product.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Every software project is different, but a clear development
                  process helps reduce confusion and keeps important decisions
                  connected to the actual product requirements.
                </p>

                <p className="mt-3 text-[13px] leading-6 text-slate-500">
                  Each stage gives the project a clear purpose — from
                  understanding the problem to planning the solution, building
                  it, validating important workflows and preparing it for
                  production.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
                  {[
                    "Clearer project scope",
                    "Better development priorities",
                    "Structured review points",
                    "More predictable delivery",
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

        {/* PROCESS STEPS */}

        <section
          id="process-steps"
          aria-labelledby="process-steps-heading"
          className="py-10 md:py-12 bg-white scroll-mt-24"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Development Process</SectionLabel>

              <h2
                id="process-steps-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Seven stages from discovery to{" "}
                <span className="text-[#0796A8]">
                  ongoing improvement.
                </span>
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-slate-600 max-w-2xl">
                The exact activities can vary by project, but these stages
                provide a practical framework for moving from requirements to
                production.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {processSteps.map((step, index) => (
                <article
                  key={step.number}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)] ${
                    index === processSteps.length - 1
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      {step.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[9px] font-semibold text-[#07899a]">
                            STEP {step.number}
                          </span>

                          <h3 className="mt-1 text-[16px] font-semibold text-[#071923]">
                            {step.title}
                          </h3>
                        </div>

                        <span className="text-[28px] font-semibold text-slate-100 leading-none">
                          {step.number}
                        </span>
                      </div>

                      <p className="mt-2 text-[11px] sm:text-[12px] leading-6 text-slate-600">
                        {step.description}
                      </p>

                      <div className="mt-4 grid sm:grid-cols-2 gap-2">
                        {step.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-2 rounded-lg border border-slate-100 bg-[#fafcfc] px-3 py-2"
                          >
                            <Check
                              size={11}
                              className="text-[#07899a] shrink-0"
                            />

                            <span className="text-[9px] font-medium text-slate-600">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}

        <section
          aria-labelledby="process-principles-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute top-0 right-0 w-[500px] h-[430px] rounded-full bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Development Principles</SectionLabel>

              <h2
                id="process-principles-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Built around clarity, quality and{" "}
                <span className="text-[#25bfce]">
                  future development.
                </span>
              </h2>

              <p className="mt-3 max-w-2xl text-[14px] leading-6 text-slate-400">
                A good process should make development easier to understand
                while keeping the product flexible enough to evolve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className="bg-[#071923] p-5 min-h-[175px] hover:bg-[#0a202a] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0c2a35] text-[#27c1cf] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-[14px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT TYPES */}

        <section
          aria-labelledby="process-project-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Flexible Workflow</SectionLabel>

                <h2
                  id="process-project-types-heading"
                  className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
                >
                  One process, adapted to{" "}
                  <span className="text-[#0796A8]">
                    different digital products.
                  </span>
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-slate-600">
                  The core workflow stays structured, while the exact scope,
                  design work, development stages and testing can adapt to each
                  project's complexity.
                </p>

                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="group mt-5 inline-flex items-center gap-2 text-[10px] font-semibold text-[#07899a]"
                >
                  Discuss Your Requirements

                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {projectTypes.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="text-[8px] font-semibold text-[#07899a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-1 text-[13px] font-semibold text-[#071923]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERY STANDARDS */}

        <section
          aria-labelledby="delivery-standards-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Delivery Standards</SectionLabel>

              <h2
                id="delivery-standards-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Keeping the project{" "}
                <span className="text-[#0796A8]">
                  organized from start to finish.
                </span>
              </h2>

              <p className="mt-3 text-[13px] leading-6 text-slate-600 max-w-2xl">
                Good delivery depends on more than writing code. Requirements,
                review points, production readiness and post-launch continuity
                all matter.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {deliveryStandards.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-[#fbfcfc] p-4"
                >
                  <span className="text-[9px] font-semibold text-[#07899a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 text-[13px] font-semibold text-[#071923]">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}

        <section
          aria-labelledby="process-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Explore Services</SectionLabel>

              <h2
                id="process-related-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[38px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Start with the service that matches{" "}
                <span className="text-[#0796A8]">
                  your project.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  title: "Web Development",
                  desc:
                    "Custom websites and web applications built around business requirements.",
                  path: "/web-development",
                },
                {
                  title: "Mobile App Development",
                  desc:
                    "Cross-platform mobile applications connected with backend services.",
                  path: "/mobile-apps",
                },
                {
                  title: "SaaS Development",
                  desc:
                    "SaaS products with dashboards, users, workflows and scalable application structure.",
                  path: "/saas-product-development",
                },
                {
                  title: "Startup MVP",
                  desc:
                    "Focused MVP development for validating and launching early-stage products.",
                  path: "/startup-mvp",
                },
              ].map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    <ArrowRight size={15} />
                  </div>

                  <h3 className="mt-3 text-[13px] font-semibold text-[#071923]">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    {service.desc}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a]">
                    Explore Service
                    <ArrowRight
                      size={10}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              ))}
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
              Ready to move your project{" "}
              <span className="text-[#25bfce]">
                from idea to development?
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
              Tell us what you want to build and we can discuss the
              requirements, scope and appropriate development path for your
              product.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
              >
                Discuss Your Project

                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/allservices"
                onClick={scrollTop}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] px-5 py-3 text-[11px] font-semibold text-white hover:border-[#23bfce]/40 hover:text-[#28c5d4] transition-colors"
              >
                Explore Services

                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM LINKS */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <nav
              aria-label="DevZore process related pages"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            >
              {[
                ["Web Development", "/web-development"],
                ["Mobile App Development", "/mobile-apps"],
                ["SaaS Development", "/saas-product-development"],
                ["Startup MVP", "/startup-mvp"],
                ["UI/UX Design", "/ui-ux-design"],
                ["All Services", "/allservices"],
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

export default OurProcess;