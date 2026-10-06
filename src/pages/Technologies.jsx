import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";

const Technologies = () => {
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

  // TECHNOLOGY CATEGORIES

  const technologyCategories = [
    {
      number: "01",
      icon: <MonitorSmartphone size={20} />,
      title: "Frontend Development",
      shortTitle: "Frontend",
      description:
        "Frontend technologies are used to build the interfaces customers and users interact with. We focus on responsive layouts, reusable components, accessible structure and maintainable application interfaces.",
      technologies: [
        {
          name: "React",
          label: "User Interface Library",
          description:
            "React helps us build interactive web applications using reusable components and structured application interfaces.",
          useCases: [
            "Web applications",
            "Business dashboards",
            "Customer portals",
          ],
        },
        {
          name: "Next.js",
          label: "React Framework",
          description:
            "Next.js can be used when a React-based product requires structured routing, server rendering capabilities, performance features and search-friendly page delivery.",
          useCases: [
            "Business websites",
            "Content-driven platforms",
            "Production web products",
          ],
        },
        {
          name: "JavaScript",
          label: "Programming Language",
          description:
            "JavaScript powers interactive behaviour, application logic and communication between modern frontend interfaces and backend services.",
          useCases: [
            "Interactive interfaces",
            "Application logic",
            "Frontend integrations",
          ],
        },
        {
          name: "HTML5",
          label: "Page Structure",
          description:
            "HTML provides the semantic structure behind web pages and helps organize content, forms, navigation and accessible page elements.",
          useCases: [
            "Semantic pages",
            "Accessible content",
            "Structured interfaces",
          ],
        },
        {
          name: "CSS3",
          label: "Interface Styling",
          description:
            "CSS controls layouts, responsive behaviour, typography, spacing and the visual presentation of web applications across different screen sizes.",
          useCases: [
            "Responsive layouts",
            "Visual systems",
            "Device adaptation",
          ],
        },
        {
          name: "Tailwind CSS",
          label: "Utility-First CSS",
          description:
            "Tailwind CSS helps create consistent responsive interfaces through reusable utility classes and structured design patterns.",
          useCases: [
            "Design systems",
            "Responsive interfaces",
            "Reusable styling",
          ],
        },
      ],
    },
    {
      number: "02",
      icon: <Server size={20} />,
      title: "Backend Development",
      shortTitle: "Backend",
      description:
        "Backend development handles application logic, authentication, permissions, business workflows, APIs and communication between interfaces, databases and external services.",
      technologies: [
        {
          name: "Node.js",
          label: "Server Runtime",
          description:
            "Node.js allows JavaScript to run on the server and can power APIs, application logic, authentication systems and backend services.",
          useCases: [
            "Application backends",
            "REST APIs",
            "Business logic",
          ],
        },
        {
          name: "Express.js",
          label: "Backend Framework",
          description:
            "Express.js provides routing, middleware and request handling for structured Node.js backend applications and APIs.",
          useCases: [
            "API routing",
            "Server middleware",
            "Backend services",
          ],
        },
        {
          name: "REST APIs",
          label: "Application Communication",
          description:
            "REST APIs allow websites, mobile applications and external systems to securely exchange application data and trigger backend functionality.",
          useCases: [
            "Frontend connectivity",
            "Mobile APIs",
            "Third-party integrations",
          ],
        },
        {
          name: "Authentication",
          label: "User Access",
          description:
            "Authentication and authorization systems control account access and help ensure users can only reach the functionality permitted for their role.",
          useCases: [
            "User login",
            "Role-based access",
            "Protected application areas",
          ],
        },
      ],
    },
    {
      number: "03",
      icon: <Database size={20} />,
      title: "Database & Data",
      shortTitle: "Data",
      description:
        "Database structure affects how reliably an application can store, retrieve and manage information. Data models should match the actual workflows and reporting needs of the product.",
      technologies: [
        {
          name: "MongoDB",
          label: "NoSQL Database",
          description:
            "MongoDB is a document-oriented database suited to many modern web applications, SaaS products and business systems.",
          useCases: [
            "Application data",
            "User records",
            "Business systems",
          ],
        },
        {
          name: "Mongoose",
          label: "MongoDB Modeling",
          description:
            "Mongoose provides schema-based modeling and validation for MongoDB data inside Node.js applications.",
          useCases: [
            "Schema modeling",
            "Data validation",
            "Application models",
          ],
        },
        {
          name: "Database Design",
          label: "Data Architecture",
          description:
            "Database design involves structuring collections, relationships, indexes and fields according to application requirements and expected workflows.",
          useCases: [
            "Data modeling",
            "Application structure",
            "Reporting requirements",
          ],
        },
        {
          name: "Data Validation",
          label: "Data Reliability",
          description:
            "Validation rules help ensure information entering an application follows expected formats and remains consistent before storage.",
          useCases: [
            "Form validation",
            "API validation",
            "Data consistency",
          ],
        },
      ],
    },
    {
      number: "04",
      icon: <Smartphone size={20} />,
      title: "Mobile App Development",
      shortTitle: "Mobile",
      description:
        "Mobile application development combines responsive interface work with backend connectivity, authentication, APIs and data workflows suited to mobile users.",
      technologies: [
        {
          name: "React Native",
          label: "Cross-Platform Development",
          description:
            "React Native can be used to build applications for Android and iOS while sharing a significant part of the application codebase.",
          useCases: [
            "Android applications",
            "iOS applications",
            "Cross-platform products",
          ],
        },
        {
          name: "Mobile APIs",
          label: "Backend Connectivity",
          description:
            "Mobile APIs connect applications with user accounts, databases, business logic, dashboards and external services.",
          useCases: [
            "Authentication",
            "Application data",
            "Backend workflows",
          ],
        },
        {
          name: "Responsive UI",
          label: "Mobile Experience",
          description:
            "Mobile interfaces are structured around smaller screens, touch interactions, clear navigation and different device sizes.",
          useCases: [
            "Mobile layouts",
            "Touch interactions",
            "Device adaptation",
          ],
        },
        {
          name: "App Integration",
          label: "Connected Services",
          description:
            "Mobile products can connect with backend APIs, authentication systems, databases and supported external services where required.",
          useCases: [
            "API integration",
            "User accounts",
            "External services",
          ],
        },
      ],
    },
    {
      number: "05",
      icon: <Cloud size={20} />,
      title: "Deployment & Infrastructure",
      shortTitle: "Deployment",
      description:
        "Production software requires more than working source code. Hosting, DNS, database services, environment variables and deployment configuration all need to work together.",
      technologies: [
        {
          name: "Vercel",
          label: "Application Deployment",
          description:
            "Vercel supports deployment workflows for modern web applications and can connect directly with source-code repositories for automated releases.",
          useCases: [
            "Frontend deployment",
            "Web applications",
            "Automated releases",
          ],
        },
        {
          name: "Cloudflare",
          label: "DNS & Web Infrastructure",
          description:
            "Cloudflare can support domain configuration, DNS management and other web infrastructure requirements depending on the project.",
          useCases: [
            "DNS management",
            "Domain configuration",
            "Web infrastructure",
          ],
        },
        {
          name: "MongoDB Atlas",
          label: "Managed Database Hosting",
          description:
            "MongoDB Atlas provides managed cloud hosting for MongoDB databases used by deployed applications.",
          useCases: [
            "Cloud databases",
            "Application storage",
            "Managed MongoDB",
          ],
        },
        {
          name: "Environment Configuration",
          label: "Production Configuration",
          description:
            "Environment variables and production configuration keep API URLs, service settings and sensitive application configuration separate from source code.",
          useCases: [
            "Environment variables",
            "Production settings",
            "Secure configuration",
          ],
        },
      ],
    },
    {
      number: "06",
      icon: <GitBranch size={20} />,
      title: "Development Workflow",
      shortTitle: "Workflow",
      description:
        "A structured development workflow makes software easier to track, maintain, deploy and improve across different stages of the project.",
      technologies: [
        {
          name: "Git",
          label: "Version Control",
          description:
            "Git tracks source-code changes and provides a structured history that supports safer development and future updates.",
          useCases: [
            "Version history",
            "Code changes",
            "Development workflow",
          ],
        },
        {
          name: "GitHub",
          label: "Code Repository",
          description:
            "GitHub is used for source-code repositories, version management, project collaboration and supported deployment integrations.",
          useCases: [
            "Source repositories",
            "Code collaboration",
            "Deployment integration",
          ],
        },
        {
          name: "NPM",
          label: "Package Management",
          description:
            "NPM manages JavaScript packages, libraries and development dependencies used throughout modern application projects.",
          useCases: [
            "Dependencies",
            "Libraries",
            "Development tooling",
          ],
        },
        {
          name: "Vite",
          label: "Frontend Build Tool",
          description:
            "Vite provides a fast frontend development environment and production build process for modern JavaScript applications.",
          useCases: [
            "Frontend development",
            "Production builds",
            "Local development",
          ],
        },
      ],
    },
  ];

  // DEVELOPMENT PRINCIPLES

  const developmentPrinciples = [
    {
      icon: <Layers3 size={18} />,
      title: "Requirement-Led Architecture",
      description:
        "Architecture is planned around the actual users, workflows, features and growth requirements of the product.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance Considered",
      description:
        "Frontend behaviour, API design, application structure and database access are considered with performance in mind.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security Awareness",
      description:
        "Authentication, authorization, validation and configuration are considered according to the needs of the application.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Maintainable Structure",
      description:
        "Reusable components, organized logic and clear application structure help make future changes easier.",
    },
    {
      icon: <Network size={18} />,
      title: "Connected Systems",
      description:
        "Frontend applications, backend services, databases and external integrations are designed to work as one connected product.",
    },
    {
      icon: <Zap size={18} />,
      title: "Practical Technology Choices",
      description:
        "We aim to choose technology based on product requirements rather than adding tools that create unnecessary complexity.",
    },
  ];

  // PRODUCT TYPES

  const productTypes = [
    {
      title: "Business Websites",
      description:
        "Responsive websites with service pages, forms, content and business-focused functionality.",
    },
    {
      title: "Web Applications",
      description:
        "Interactive applications with dashboards, workflows, user accounts and application logic.",
    },
    {
      title: "Mobile Applications",
      description:
        "Cross-platform applications connected with backend APIs and business systems.",
    },
    {
      title: "SaaS Platforms",
      description:
        "Multi-user products with authentication, dashboards and subscription-based workflows.",
    },
    {
      title: "E-Commerce Systems",
      description:
        "Online stores with products, customer accounts, checkout and administrative functionality.",
    },
    {
      title: "Management Systems",
      description:
        "Business platforms for sales, inventory, customers, reporting and operational workflows.",
    },
    {
      title: "Backend & APIs",
      description:
        "Application logic, authentication, database communication and integration services.",
    },
    {
      title: "Startup MVPs",
      description:
        "Focused first versions of digital products designed around essential functionality.",
    },
  ];

  // MERN STACK

  const mernStack = [
    {
      letter: "M",
      name: "MongoDB",
      role: "Database",
      description:
        "Stores application information using flexible document-based data structures.",
    },
    {
      letter: "E",
      name: "Express.js",
      role: "Backend Framework",
      description:
        "Handles server routing, middleware and API functionality inside Node.js applications.",
    },
    {
      letter: "R",
      name: "React",
      role: "Frontend Library",
      description:
        "Builds reusable and interactive interfaces for users and application dashboards.",
    },
    {
      letter: "N",
      name: "Node.js",
      role: "Server Runtime",
      description:
        "Runs backend JavaScript used for APIs, application logic and server-side workflows.",
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
    "@id": "https://devzore.com/technologies#webpage",
    url: "https://devzore.com/technologies",
    name: "Technologies Used by DevZore",
    description:
      "Explore the frontend, backend, database, mobile, deployment and development technologies DevZore uses to build modern digital products.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
    },
  };

  const technologyListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DevZore Technology Categories",
    itemListElement: technologyCategories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.title,
      description: category.description,
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
        name: "Technologies",
        item: "https://devzore.com/technologies",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(technologyListSchema)}
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
          aria-labelledby="technologies-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-55"
              style={darkGrid}
            />

            <div className="absolute -top-28 left-[8%] w-[560px] h-[560px] rounded-full bg-[#0796A8]/12 blur-[150px]" />

            <div className="absolute top-10 right-[4%] w-[430px] h-[430px] rounded-full bg-[#20bdcb]/7 blur-[135px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04111a]/85" />
          </div>

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-14">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.17em] uppercase text-[#c2ccd2]">
                  <Code2 size={14} className="text-[#25c0ce]" />
                  Technologies
                </div>

                <h1
                  id="technologies-heading"
                  className="mt-5 text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[64px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Technologies selected around{" "}
                  <span className="text-[#22bdca]">
                    real product requirements.
                  </span>
                </h1>

                <p className="max-w-[680px] mt-5 text-[16px] sm:text-[17px] leading-7 text-slate-300">
                  DevZore works across frontend, backend, databases, mobile
                  development, APIs and deployment to build complete digital
                  products.
                </p>

                <p className="max-w-[640px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  The technology stack is chosen according to the product,
                  users, required functionality, integrations and future
                  development needs.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[12px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
                  >
                    Discuss Your Project

                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>

                  <a
                    href="#technology-stack"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore Technologies

                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>

                <div className="mt-7 pt-5 border-t border-white/[0.08] flex flex-wrap gap-x-6 gap-y-2.5">
                  {[
                    "Frontend",
                    "Backend",
                    "Database",
                    "Deployment",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 text-[10px] font-medium text-slate-400"
                    >
                      <CheckCircle2
                        size={12}
                        className="text-[#25c0ce]"
                      />

                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* HERO VISUAL */}

              <div className="hidden md:block">
                <div className="rounded-[22px] border border-white/[0.1] bg-[#091d27]/95 p-5 shadow-[0_35px_90px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.17em] font-semibold text-[#25c0ce]">
                        Product Architecture
                      </p>

                      <p className="mt-1 text-[14px] font-semibold">
                        Connected Development Layers
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-[#0c2a35] text-[#28c5d4] flex items-center justify-center">
                      <Network size={18} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {[
                      {
                        icon: <MonitorSmartphone size={17} />,
                        title: "Frontend",
                        text: "Interfaces & interaction",
                      },
                      {
                        icon: <Server size={17} />,
                        title: "Backend",
                        text: "Logic & APIs",
                      },
                      {
                        icon: <Database size={17} />,
                        title: "Database",
                        text: "Application data",
                      },
                      {
                        icon: <Cloud size={17} />,
                        title: "Deployment",
                        text: "Production delivery",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#0c2a35] text-[#28c5d4] flex items-center justify-center">
                          {item.icon}
                        </div>

                        <p className="mt-3 text-[11px] font-semibold text-white">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[8px] text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-xl border border-white/[0.07] bg-[#071923] p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-400">
                        Product requirement
                      </span>

                      <span className="text-[8px] font-semibold text-[#25c0ce]">
                        Technology choice
                      </span>
                    </div>

                    <div className="mt-3 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div className="w-[78%] h-full rounded-full bg-gradient-to-r from-[#0796A8] to-[#22bdca]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HERO STRIP */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "User Interface"],
                  ["02", "Application Logic"],
                  ["03", "Data Layer"],
                  ["04", "Production"],
                ].map(([number, label], index) => (
                  <div
                    key={label}
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
                      {label}
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
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>Technology Approach</SectionLabel>

                <h2 className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold">
                  The right technology for{" "}
                  <span className="text-[#0796A8]">
                    the right product.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Technology affects performance, maintenance, integrations,
                  development speed and how easily a product can evolve.
                  Choosing a stack should therefore start with the requirements
                  rather than the popularity of a particular tool.
                </p>

                <p className="mt-3 text-[13px] leading-6 text-slate-500">
                  A marketing website, SaaS application, mobile product and
                  business management system can have very different
                  requirements. The architecture should reflect those
                  differences.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
                  {[
                    "Product requirements first",
                    "Appropriate architecture",
                    "Maintainable development",
                    "Production-ready delivery",
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

        {/* TECHNOLOGY CATEGORIES */}

        <section
          id="technology-stack"
          aria-labelledby="technology-stack-heading"
          className="py-10 md:py-12 bg-white scroll-mt-24"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-8">
              <SectionLabel>Development Stack</SectionLabel>

              <h2
                id="technology-stack-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Technologies across the{" "}
                <span className="text-[#0796A8]">
                  full product stack.
                </span>
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-slate-600">
                Each category handles a different part of the product, from
                user interfaces and backend logic to data storage and
                production deployment.
              </p>
            </div>

            <div className="space-y-5">
              {technologyCategories.map((category) => (
                <article
                  key={category.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  {/* CATEGORY HEADER */}

                  <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-5 border-b border-slate-200 bg-[#f8fafb] p-5 sm:p-6">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-[#eaf4f5] text-[#07899a] flex items-center justify-center">
                        {category.icon}
                      </div>

                      <div>
                        <span className="text-[9px] font-semibold text-[#07899a]">
                          {category.number}
                        </span>

                        <h3 className="mt-1 text-[16px] font-semibold text-[#071923]">
                          {category.title}
                        </h3>

                        <div className="mt-2 h-[2px] w-8 bg-[#0796A8]" />
                      </div>
                    </div>

                    <p className="text-[12px] leading-6 text-slate-600">
                      {category.description}
                    </p>
                  </div>

                  {/* TECHNOLOGIES */}

                  <div className="grid md:grid-cols-2 xl:grid-cols-3">
                    {category.technologies.map((technology, index) => (
                      <div
                        key={technology.name}
                        className={`p-5 border-slate-200 ${
                          index % 3 !== 2
                            ? "xl:border-r"
                            : ""
                        } ${
                          index % 2 === 0
                            ? "md:border-r xl:border-r"
                            : "md:border-r-0"
                        } ${
                          index <
                          category.technologies.length -
                            (category.technologies.length % 3 || 3)
                            ? "xl:border-b"
                            : ""
                        } ${
                          index <
                          category.technologies.length -
                            (category.technologies.length % 2 || 2)
                            ? "md:border-b"
                            : ""
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                            <Braces size={14} />
                          </div>

                          <span className="text-[8px] uppercase tracking-[0.12em] font-semibold text-slate-400">
                            {technology.label}
                          </span>
                        </div>

                        <h4 className="mt-4 text-[14px] font-semibold text-[#071923]">
                          {technology.name}
                        </h4>

                        <p className="mt-2 text-[10px] leading-5 text-slate-500">
                          {technology.description}
                        </p>

                        <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                          {technology.useCases.map((useCase) => (
                            <div
                              key={useCase}
                              className="flex items-center gap-2 text-[9px] text-slate-500"
                            >
                              <Check
                                size={10}
                                className="text-[#07899a] shrink-0"
                              />

                              {useCase}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MERN */}

        <section
          aria-labelledby="mern-stack-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute top-0 right-0 w-[500px] h-[430px] rounded-full bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel light>Full-Stack Development</SectionLabel>

                <h2
                  id="mern-stack-heading"
                  className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
                >
                  How the{" "}
                  <span className="text-[#25bfce]">MERN stack</span>{" "}
                  fits together.
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-slate-400">
                  MERN combines MongoDB, Express.js, React and Node.js into a
                  JavaScript-based full-stack architecture for building web
                  applications and digital products.
                </p>

                <p className="mt-3 text-[12px] leading-6 text-slate-500">
                  It can support dashboards, management platforms, SaaS
                  products, portals and other applications where frontend,
                  backend and database systems need to work together.
                </p>

                <Link
                  to="/mern-stack-development"
                  onClick={scrollTop}
                  className="group mt-5 inline-flex items-center gap-2 text-[10px] font-semibold text-[#28c5d4]"
                >
                  Explore MERN Stack Development

                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
                {mernStack.map((item) => (
                  <article
                    key={item.name}
                    className="bg-[#071923] p-5 min-h-[180px] hover:bg-[#0a202a] transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#0c2a35] text-[#28c5d4] flex items-center justify-center text-[15px] font-semibold">
                        {item.letter}
                      </div>

                      <span className="text-[8px] uppercase tracking-[0.14em] text-slate-500">
                        {item.role}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[14px] font-semibold">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-slate-400">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT PRINCIPLES */}

        <section
          aria-labelledby="technology-principles-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Development Principles</SectionLabel>

              <h2
                id="technology-principles-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                Technology is only{" "}
                <span className="text-[#0796A8]">
                  part of the solution.
                </span>
              </h2>

              <p className="mt-3 text-[13px] leading-6 text-slate-600 max-w-2xl">
                Good software also depends on architecture, security,
                maintainability, performance and how well the different parts
                of the product work together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {developmentPrinciples.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 text-[13px] font-semibold text-[#071923]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-slate-500">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT TYPES */}

        <section
          aria-labelledby="technology-products-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Flexible Architecture</SectionLabel>

                <h2
                  id="technology-products-heading"
                  className="mt-3 text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold"
                >
                  Different products need{" "}
                  <span className="text-[#0796A8]">
                    different technical decisions.
                  </span>
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-slate-600">
                  The development stack can change according to functionality,
                  integrations, users, data requirements and how the product
                  may need to grow in the future.
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
                {productTypes.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-[#fbfcfc] p-4"
                  >
                    <span className="text-[8px] font-semibold text-[#07899a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-1 text-[13px] font-semibold text-[#071923]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}

        <section
          aria-labelledby="technology-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Related Services</SectionLabel>

              <h2
                id="technology-related-heading"
                className="mt-3 text-[28px] sm:text-[33px] md:text-[38px] leading-[1.08] tracking-[-0.035em] font-semibold"
              >
                See how these technologies support{" "}
                <span className="text-[#0796A8]">
                  real development services.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  icon: <Code2 size={18} />,
                  title: "Web Development",
                  desc:
                    "Custom websites and web applications built around business requirements.",
                  path: "/web-development",
                },
                {
                  icon: <Layers3 size={18} />,
                  title: "MERN Stack",
                  desc:
                    "Full-stack application development with connected frontend, backend and database systems.",
                  path: "/mern-stack-development",
                },
                {
                  icon: <Server size={18} />,
                  title: "Backend & APIs",
                  desc:
                    "APIs, authentication, business logic, databases and integration services.",
                  path: "/backend-api",
                },
                {
                  icon: <Smartphone size={18} />,
                  title: "Mobile Apps",
                  desc:
                    "Cross-platform mobile applications connected with backend systems and APIs.",
                  path: "/mobile-apps",
                },
              ].map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {service.icon}
                  </div>

                  <h3 className="mt-3 text-[13px] font-semibold text-[#071923]">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    {service.desc}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a]">
                    Explore Service
                    <ArrowUpRight size={10} />
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
              <Rocket size={19} />
            </div>

            <h2 className="mt-4 text-[29px] sm:text-[35px] md:text-[40px] font-semibold tracking-[-0.04em] leading-[1.06]">
              Need the right technical approach for{" "}
              <span className="text-[#25bfce]">
                your product?
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
              Share your project requirements and we can discuss the product
              structure, functionality and development approach that best fits
              what you want to build.
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
              aria-label="DevZore technology related pages"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            >
              {[
                ["Web Development", "/web-development"],
                ["MERN Stack", "/mern-stack-development"],
                ["React Development", "/reactdevelopment"],
                ["Mobile Apps", "/mobile-apps"],
                ["Backend & API", "/backend-api"],
                ["SaaS Development", "/saas-product-development"],
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

export default Technologies;