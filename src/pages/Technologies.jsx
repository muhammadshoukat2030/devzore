import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Server,
  Database,
  Smartphone,
  Cloud,
  GitBranch,
  Layers3,
  Braces,
  Globe2,
  ShieldCheck,
  Gauge,
  Workflow,
  Cpu,
  Sparkles,
  MonitorSmartphone,
  Network,
} from "lucide-react";

const Technologies = ({ isDark }) => {
  const d = isDark;

  /* ==================================================
     TECHNOLOGY CATEGORIES
  ================================================== */

  const technologyCategories = [
    {
      icon: MonitorSmartphone,
      title: "Frontend Development",
      description:
        "Frontend technologies power the part of a digital product that users see and interact with. We use modern tools to build responsive, fast and maintainable interfaces for websites and web applications.",
      technologies: [
        {
          name: "React",
          description:
            "Used for building reusable, interactive and component-based user interfaces for modern web applications.",
        },
        {
          name: "Next.js",
          description:
            "A React framework suitable for production-grade websites and applications that need strong performance, routing and SEO capabilities.",
        },
        {
          name: "JavaScript",
          description:
            "The core programming language used to create interactive functionality and dynamic behavior across modern web applications.",
        },
        {
          name: "HTML5",
          description:
            "Provides the semantic structure and foundation of accessible, well-organized web pages.",
        },
        {
          name: "CSS3",
          description:
            "Used to control layouts, responsive behavior, visual styling and presentation across different screen sizes.",
        },
        {
          name: "Tailwind CSS",
          description:
            "A utility-first CSS framework that helps us build consistent and responsive interfaces efficiently.",
        },
      ],
    },

    {
      icon: Server,
      title: "Backend Development",
      description:
        "Backend technologies handle application logic, authentication, business rules, APIs and communication between the frontend, database and external services.",
      technologies: [
        {
          name: "Node.js",
          description:
            "A JavaScript runtime used to build scalable server-side applications, APIs and backend services.",
        },
        {
          name: "Express.js",
          description:
            "A lightweight Node.js framework commonly used for REST APIs, routing, middleware and backend application logic.",
        },
        {
          name: "REST APIs",
          description:
            "Structured application interfaces that allow frontend applications, mobile apps and external services to communicate securely with backend systems.",
        },
        {
          name: "Authentication",
          description:
            "Secure login and authorization systems used to control user access and protect application functionality.",
        },
      ],
    },

    {
      icon: Database,
      title: "Database & Data",
      description:
        "Reliable data management is essential for modern software. We structure databases around the application's requirements so information remains organized, accessible and manageable as the product grows.",
      technologies: [
        {
          name: "MongoDB",
          description:
            "A flexible NoSQL database commonly used with modern JavaScript applications and scalable web platforms.",
        },
        {
          name: "Mongoose",
          description:
            "An object modeling library that helps structure, validate and manage MongoDB data in Node.js applications.",
        },
        {
          name: "Database Design",
          description:
            "Planning collections, relationships, indexes and data structures according to real application requirements.",
        },
        {
          name: "Data Validation",
          description:
            "Validation rules help maintain consistent and reliable application data before information is stored.",
        },
      ],
    },

    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "For mobile products, we use technologies that support modern cross-platform application development and integration with backend systems.",
      technologies: [
        {
          name: "React Native",
          description:
            "Used to build mobile applications for Android and iOS while sharing a significant portion of the application codebase.",
        },
        {
          name: "Mobile APIs",
          description:
            "Connect mobile applications with authentication, databases, dashboards and other backend services.",
        },
        {
          name: "Responsive UI",
          description:
            "Interfaces designed around mobile usability, different device sizes and practical user interaction.",
        },
        {
          name: "App Integration",
          description:
            "Integration of mobile applications with APIs, authentication systems and external services when required.",
        },
      ],
    },

    {
      icon: Cloud,
      title: "Deployment & Cloud",
      description:
        "Development does not stop when the code is finished. Applications also need a reliable production environment, domain configuration and deployment workflow.",
      technologies: [
        {
          name: "Vercel",
          description:
            "A deployment platform commonly used for modern frontend applications and web projects with automated deployment workflows.",
        },
        {
          name: "Cloudflare",
          description:
            "Used for services such as DNS management, domain configuration and web infrastructure depending on project requirements.",
        },
        {
          name: "MongoDB Atlas",
          description:
            "A managed cloud database platform used to host and operate MongoDB databases.",
        },
        {
          name: "Environment Configuration",
          description:
            "Secure management of production settings, environment variables, API URLs and application configuration.",
        },
      ],
    },

    {
      icon: GitBranch,
      title: "Development Workflow",
      description:
        "A structured development workflow makes software easier to maintain, test and improve. Version control and organized repositories are an important part of our development process.",
      technologies: [
        {
          name: "Git",
          description:
            "Version control used to track source-code changes and maintain a structured development history.",
        },
        {
          name: "GitHub",
          description:
            "Used for source-code repositories, collaboration, version management and deployment integrations.",
        },
        {
          name: "NPM",
          description:
            "Package management for JavaScript projects, dependencies, development tools and application libraries.",
        },
        {
          name: "Vite",
          description:
            "A modern frontend development and build tool used for fast development workflows and optimized production builds.",
        },
      ],
    },
  ];

  /* ==================================================
     STACK FEATURES
  ================================================== */

  const stackFeatures = [
    {
      icon: Layers3,
      title: "Modern Architecture",
      description:
        "Technology is selected around the structure and requirements of the product rather than following one fixed setup for every project.",
    },
    {
      icon: Gauge,
      title: "Performance Focused",
      description:
        "We consider application structure, frontend performance, APIs and database design throughout development.",
    },
    {
      icon: ShieldCheck,
      title: "Security Awareness",
      description:
        "Authentication, authorization, data validation and secure configuration are considered throughout the development process.",
    },
    {
      icon: Workflow,
      title: "Maintainable Development",
      description:
        "Organized components, reusable logic and structured code make applications easier to maintain and extend.",
    },
  ];

  /* ==================================================
     PRODUCT TYPES
  ================================================== */

  const productTypes = [
    "Business Websites",
    "Web Applications",
    "Mobile Applications",
    "SaaS Platforms",
    "E-Commerce Systems",
    "Management Systems",
    "Backend & APIs",
    "Startup MVPs",
  ];

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-300 ${
        d
          ? "bg-[#030303] text-white"
          : "bg-[#fafafa] text-[#111827]"
      }`}
    >
      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className={`relative overflow-hidden border-b pt-[108px] pb-12 sm:pt-[116px] sm:pb-14 ${
          d ? "border-white/[0.06]" : "border-gray-200"
        }`}
      >
        {/* BACKGROUND GLOW */}

        <div className="pointer-events-none absolute inset-0">
          <div
            className={`absolute left-1/2 top-[-180px] h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[120px] ${
              d ? "bg-purple-700/10" : "bg-purple-300/20"
            }`}
          />

          <div
            className={`absolute right-[-150px] top-[-130px] h-[500px] w-[500px] rounded-full blur-[120px] ${
              d ? "bg-indigo-700/10" : "bg-indigo-200/20"
            }`}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-6xl text-center">
            {/* BADGE */}

            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] sm:text-[11px] ${
                d
                  ? "border-purple-500/20 bg-purple-500/[0.08] text-purple-400"
                  : "border-purple-200 bg-purple-50 text-purple-700"
              }`}
            >
              <Cpu size={14} />
              Technologies
            </div>

            {/* HEADING */}

            <h1
              className={`mt-6 text-[38px] font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[64px] xl:text-[70px] ${
                d ? "text-white" : "text-[#090d18]"
              }`}
            >
              Technologies Behind
              <span className="mt-1 block bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                Modern Digital Products
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className={`mx-auto mt-5 max-w-4xl text-[15px] leading-7 sm:text-[17px] ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              DevZore uses modern frontend, backend, database, mobile and
              deployment technologies to build reliable websites,
              applications, SaaS platforms and custom software solutions.
            </p>

            {/* CTA */}

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-[12px] font-bold text-white transition-all hover:bg-purple-700 hover:shadow-[0_10px_35px_rgba(147,51,234,0.25)] sm:w-auto"
              >
                Discuss Your Project
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/allservices"
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[12px] font-bold transition-all sm:w-auto ${
                  d
                    ? "border-white/[0.12] text-white hover:bg-white/[0.06]"
                    : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                Explore Our Services
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* TRUST POINTS */}

            <div
              className={`mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t pt-6 ${
                d ? "border-white/[0.07]" : "border-gray-200"
              }`}
            >
              {[
                "Modern Stack",
                "Scalable Architecture",
                "Secure Development",
                "Production Ready",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 text-[11px] font-medium sm:text-[12px] ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <CheckCircle2 size={14} className="text-purple-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTRODUCTION
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            {/* LEFT */}

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
                Our Technology Approach
              </p>

              <h2
                className={`mt-3 text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl lg:text-[44px] ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                The Right Technology for
                <span className="block text-purple-500">
                  the Right Product
                </span>
              </h2>

              <p
                className={`mt-4 text-[14px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Technology selection affects performance, maintainability,
                development speed and the future growth of a digital product.
                That is why we consider the actual requirements of the project
                before deciding how it should be built.
              </p>

              <p
                className={`mt-3 text-[14px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                A business website, SaaS application, management system and
                mobile app may require different architecture. Our goal is to
                use technologies that fit the product instead of adding
                unnecessary complexity.
              </p>
            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: Code2,
                  title: "Frontend",
                  text: "Responsive interfaces",
                },
                {
                  icon: Server,
                  title: "Backend",
                  text: "APIs & business logic",
                },
                {
                  icon: Database,
                  title: "Database",
                  text: "Structured data",
                },
                {
                  icon: Cloud,
                  title: "Deployment",
                  text: "Production delivery",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                      d
                        ? "border-white/[0.07] bg-white/[0.025] hover:border-purple-500/30"
                        : "border-gray-200 bg-white hover:border-purple-200 hover:shadow-lg"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        d
                          ? "bg-purple-500/[0.1] text-purple-400"
                          : "bg-purple-50 text-purple-600"
                      }`}
                    >
                      <Icon size={19} />
                    </div>

                    <h3
                      className={`mt-4 text-[14px] font-black ${
                        d ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-1 text-[11px] ${
                        d ? "text-gray-500" : "text-gray-600"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          TECHNOLOGY STACK
      ================================================== */}

      <section
        className={`border-y py-12 sm:py-14 ${
          d
            ? "border-white/[0.05] bg-white/[0.015]"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
              Technology Stack
            </p>

            <h2
              className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Tools We Use to
              <span className="text-purple-500">
                {" "}Build Digital Products
              </span>
            </h2>

            <p
              className={`mt-3 text-[13px] leading-6 ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Our development stack covers the major layers required to take a
              digital product from interface development to backend systems,
              databases and production deployment.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {technologyCategories.map((category) => {
              const CategoryIcon = category.icon;

              return (
                <div
                  key={category.title}
                  className={`overflow-hidden rounded-2xl border ${
                    d
                      ? "border-white/[0.07] bg-[#080808]"
                      : "border-gray-200 bg-[#fafafa]"
                  }`}
                >
                  <div
                    className={`grid gap-5 border-b p-5 sm:p-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center ${
                      d
                        ? "border-white/[0.07]"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          d
                            ? "bg-purple-500/[0.1] text-purple-400"
                            : "bg-purple-50 text-purple-600"
                        }`}
                      >
                        <CategoryIcon size={21} />
                      </div>

                      <div>
                        <h3
                          className={`text-[16px] font-bold ${
                            d ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {category.title}
                        </h3>

                        <div className="mt-2 h-1 w-10 rounded-full bg-purple-500" />
                      </div>
                    </div>

                    <p
                      className={`text-[12px] leading-6 ${
                        d ? "text-gray-500" : "text-gray-600"
                      }`}
                    >
                      {category.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2">
                    {category.technologies.map((technology, index) => (
                      <div
                        key={technology.name}
                        className={`p-5 sm:p-6 ${
                          index % 2 === 0
                            ? d
                              ? "md:border-r md:border-white/[0.07]"
                              : "md:border-r md:border-gray-200"
                            : ""
                        } ${
                          index < category.technologies.length - 2
                            ? d
                              ? "border-b border-white/[0.07]"
                              : "border-b border-gray-200"
                            : ""
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                              d
                                ? "bg-purple-500/[0.1] text-purple-400"
                                : "bg-purple-50 text-purple-600"
                            }`}
                          >
                            <Braces size={14} />
                          </div>

                          <div>
                            <h4
                              className={`text-[13px] font-bold ${
                                d ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {technology.name}
                            </h4>

                            <p
                              className={`mt-1.5 text-[11px] leading-6 ${
                                d ? "text-gray-500" : "text-gray-600"
                              }`}
                            >
                              {technology.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          MERN STACK
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
                Full-Stack Development
              </p>

              <h2
                className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                MERN Stack
                <span className="block text-purple-500">
                  Development
                </span>
              </h2>

              <p
                className={`mt-4 text-[13px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                MERN combines MongoDB, Express.js, React and Node.js into a
                JavaScript-based full-stack development architecture. It can
                be used for dashboards, SaaS applications, management systems,
                portals and other custom web applications.
              </p>

              <Link
                to="/mern-stack-development"
                className="group mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-purple-500 hover:text-purple-600"
              >
                Explore MERN Stack Development
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { letter: "M", name: "MongoDB", role: "Database" },
                {
                  letter: "E",
                  name: "Express.js",
                  role: "Backend Framework",
                },
                { letter: "R", name: "React", role: "Frontend Library" },
                { letter: "N", name: "Node.js", role: "Server Runtime" },
              ].map((item) => (
                <div
                  key={item.name}
                  className={`rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-1 ${
                    d
                      ? "border-white/[0.07] bg-white/[0.025] hover:border-purple-500/30"
                      : "border-gray-200 bg-white hover:border-purple-200 hover:shadow-lg"
                  }`}
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-500 text-lg font-black text-white">
                    {item.letter}
                  </div>

                  <h3
                    className={`mt-3 text-[13px] font-bold ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`mt-1 text-[10px] ${
                      d ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          DEVELOPMENT PRINCIPLES
      ================================================== */}

      <section
        className={`border-y py-12 sm:py-14 ${
          d
            ? "border-white/[0.05] bg-white/[0.015]"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
              Development Principles
            </p>

            <h2
              className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Technology Is Only
              <span className="text-purple-500">
                {" "}Part of the Solution
              </span>
            </h2>

            <p
              className={`mt-3 text-[13px] leading-6 ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Good software also depends on architecture, maintainability,
              security, performance and a development process that fits the
              product.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stackFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                    d
                      ? "border-white/[0.07] bg-[#080808] hover:border-purple-500/30"
                      : "border-gray-200 bg-[#fafafa] hover:border-purple-200 hover:shadow-lg"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                    <Icon size={19} />
                  </div>

                  <h3
                    className={`mt-4 text-[14px] font-bold ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`mt-2 text-[11px] leading-6 ${
                      d ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          PRODUCT TYPES
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
                Flexible Technology
              </p>

              <h2
                className={`mt-3 text-3xl font-black leading-tight sm:text-4xl ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Different Products.
                <span className="block text-purple-500">
                  Different Requirements.
                </span>
              </h2>

              <p
                className={`mt-4 text-[13px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                The technology stack can change depending on the product,
                features, integrations, scalability requirements and business
                objectives. We select the development approach according to
                what the project actually needs.
              </p>

              <Link
                to="/contact"
                className="group mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-purple-500 hover:text-purple-600"
              >
                Discuss Your Requirements
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {productTypes.map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 rounded-xl border px-5 py-4 text-[12px] font-semibold transition-all ${
                    d
                      ? "border-white/[0.07] bg-white/[0.025] text-gray-300 hover:border-purple-500/30"
                      : "border-gray-200 bg-white text-gray-700 hover:border-purple-200 hover:shadow-md"
                  }`}
                >
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-purple-500"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          DEVELOPMENT ECOSYSTEM
      ================================================== */}

      <section className="pb-12 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`rounded-[22px] border p-5 sm:p-7 lg:p-8 ${
              d
                ? "border-white/[0.07] bg-white/[0.02]"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                  <Network size={20} />
                </div>

                <h2
                  className={`mt-4 text-3xl font-black ${
                    d ? "text-white" : "text-gray-950"
                  }`}
                >
                  A Connected Development Ecosystem
                </h2>

                <p
                  className={`mt-3 text-[13px] leading-7 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Modern software is usually a combination of multiple layers.
                  The frontend communicates with APIs, APIs work with databases
                  and external services, and the completed application is
                  deployed into a production environment.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { icon: Globe2, text: "Frontend" },
                  { icon: Server, text: "Backend" },
                  { icon: Database, text: "Database" },
                  { icon: Network, text: "APIs" },
                  { icon: Cloud, text: "Cloud" },
                ].map((item, index, arr) => {
                  const Icon = item.icon;

                  return (
                    <React.Fragment key={item.text}>
                      <div
                        className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-[11px] font-bold ${
                          d
                            ? "border-white/[0.07] bg-[#080808] text-gray-300"
                            : "border-gray-200 bg-gray-50 text-gray-700"
                        }`}
                      >
                        <Icon size={14} className="text-purple-500" />
                        {item.text}
                      </div>

                      {index !== arr.length - 1 && (
                        <ArrowRight
                          size={13}
                          className="hidden text-purple-400 xl:block"
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="pb-12 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`relative overflow-hidden rounded-[24px] border px-5 py-9 text-center sm:px-8 sm:py-10 ${
              d
                ? "border-purple-500/20 bg-gradient-to-br from-purple-600/[0.12] via-white/[0.02] to-indigo-600/[0.08]"
                : "border-purple-200 bg-gradient-to-br from-purple-50 via-white to-indigo-50"
            }`}
          >
            {/* GLOW */}

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-[180px] w-[350px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[90px]" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-500/20">
                <Sparkles size={20} />
              </div>

              <h2
                className={`mt-4 text-[27px] font-black tracking-tight sm:text-[35px] ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Ready to Build with Modern Technologies?
              </h2>

              <p
                className={`mt-3 text-[12px] leading-6 sm:text-[14px] ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tell us what you want to build. DevZore can help you choose the
                right frontend, backend, database and deployment technologies
                for your digital product.
              </p>

              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-[11px] font-bold text-white transition-all hover:bg-purple-700"
                >
                  Discuss Your Project
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/our-process"
                  className={`group inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-[11px] font-bold transition-all ${
                    d
                      ? "border-white/[0.12] text-gray-300 hover:bg-white/[0.05]"
                      : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  View Our Process
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t pt-5 ${
              d ? "border-white/[0.06]" : "border-gray-200"
            }`}
          >
            <Link
              to="/web-development"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              Web Development
            </Link>

            <Link
              to="/mern-stack-development"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              MERN Stack Development
            </Link>

            <Link
              to="/mobile-apps"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              Mobile App Development
            </Link>

            <Link
              to="/backend-api"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              Backend & API
            </Link>

            <Link
              to="/saas-product-development"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              SaaS Development
            </Link>

            <Link
              to="/contact"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              Contact DevZore
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;