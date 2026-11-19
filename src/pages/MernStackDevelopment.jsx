import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  Minus,
  Monitor,
  Plus,
  Rocket,
  Send,
  Server,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
  Phone,
  HelpCircle,
  AlertCircle,
  FileCode,
} from "lucide-react";
import SEO from "../components/SEO";
import PricingBlock from "../components/PricingBlock";
import { projectsData } from "../data/projectsData";

const mernProjects = projectsData.filter((p) =>
  ["weldon-paints", "frostyops", "installment-management"].includes(p.slug)
);

const MernStackDevelopment = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "MERN Stack Development",
    timeline: "",
    message: "",
  });

  /* =========================================================
     BACKGROUND GRIDS
  ========================================================= */

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

  /* =========================================================
     SERVICES
  ========================================================= */

  const services = [
    {
      icon: <Monitor size={21} />,
      number: "01",
      title: "MERN Web Application Development",
      desc:
        "Custom full-stack applications using MongoDB, Express.js, React.js and Node.js with responsive interfaces, APIs and database-driven functionality.",
      points: [
        "Responsive React frontend",
        "Node.js & Express APIs",
        "MongoDB integration",
      ],
    },
    {
      icon: <Layers3 size={21} />,
      number: "02",
      title: "MERN SaaS Development",
      desc:
        "Build SaaS platforms with authentication, user accounts, dashboards, subscriptions, permissions and product-specific business workflows.",
      points: [
        "User authentication",
        "SaaS dashboards",
        "Subscription workflows",
      ],
    },
    {
      icon: <TrendingUp size={21} />,
      number: "03",
      title: "Business Dashboards & Portals",
      desc:
        "Develop custom dashboards, customer portals, CRM systems and internal software designed around real operational requirements.",
      points: [
        "Admin dashboards",
        "Reporting & analytics",
        "Role-based access",
      ],
    },
    {
      icon: <Server size={21} />,
      number: "04",
      title: "Backend & REST API Development",
      desc:
        "Node.js and Express.js backend development with structured APIs, authentication, authorization, validation and third-party integrations.",
      points: [
        "REST APIs",
        "Authentication",
        "Business logic",
      ],
    },
    {
      icon: <Rocket size={21} />,
      number: "05",
      title: "MERN MVP Development",
      desc:
        "Focused MERN stack MVPs for startups that need to validate an idea, launch essential functionality and build a foundation for future development.",
      points: [
        "Focused MVP scope",
        "Core product features",
        "Launch-ready foundation",
      ],
    },
    {
      icon: <Settings2 size={21} />,
      number: "06",
      title: "MERN Modernisation & Support",
      desc:
        "Improve existing MERN applications with new features, cleaner architecture, better interfaces, API improvements and maintainable code.",
      points: [
        "Existing project review",
        "Feature improvements",
        "Architecture updates",
      ],
    },
  ];

  /* =========================================================
     MERN STACK
  ========================================================= */

  const mernStack = [
    {
      letter: "M",
      name: "MongoDB",
      role: "Database",
      desc:
        "Document-oriented database for storing and managing application data.",
    },
    {
      letter: "E",
      name: "Express.js",
      role: "Backend",
      desc:
        "Node.js framework for routes, APIs, middleware and server-side logic.",
    },
    {
      letter: "R",
      name: "React.js",
      role: "Frontend",
      desc:
        "Component-based frontend library for interactive user interfaces.",
    },
    {
      letter: "N",
      name: "Node.js",
      role: "Runtime",
      desc:
        "Server-side JavaScript runtime for APIs and application services.",
    },
  ];

  /* =========================================================
     DEVELOPMENT STANDARDS
  ========================================================= */

  const standards = [
    {
      icon: <Code2 size={19} />,
      title: "Full-Stack JavaScript",
      desc:
        "A consistent JavaScript-based development environment across frontend and backend application layers.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Performance Considered",
      desc:
        "Application rendering, APIs, database queries and important interactions are considered during development.",
    },
    {
      icon: <LockKeyhole size={19} />,
      title: "Security Conscious",
      desc:
        "Authentication, authorization, validation and secure application configuration are applied where required.",
    },
    {
      icon: <Database size={19} />,
      title: "Database Architecture",
      desc:
        "MongoDB collections, schemas, indexes and relationships are structured around application requirements.",
    },
    {
      icon: <Server size={19} />,
      title: "API-Driven Development",
      desc:
        "Frontend interfaces communicate with structured backend APIs and business services.",
    },
    {
      icon: <Settings2 size={19} />,
      title: "Maintainable Structure",
      desc:
        "Organised frontend, backend and database layers make future development easier to manage.",
    },
  ];

  /* =========================================================
     WHO WE BUILD FOR
  ========================================================= */

  const projectTypes = [
    {
      icon: <Rocket size={19} />,
      title: "Startups & MVPs",
      desc:
        "Focused full-stack products for founders who need to validate and launch software ideas.",
    },
    {
      icon: <Layers3 size={19} />,
      title: "SaaS Products",
      desc:
        "Subscription-based products with accounts, dashboards and business workflows.",
    },
    {
      icon: <Users size={19} />,
      title: "Business Applications",
      desc:
        "Custom systems for customers, employees, operations and management teams.",
    },
    {
      icon: <LockKeyhole size={19} />,
      title: "Customer & Admin Portals",
      desc:
        "Secure applications with authentication, permissions and role-specific functionality.",
    },
  ];

  /* =========================================================
     WHY MERN
  ========================================================= */

  const whyMern = [
    {
      icon: <Code2 size={19} />,
      title: "JavaScript Across the Stack",
      desc:
        "React, Express and Node.js allow JavaScript to be used across major application layers.",
    },
    {
      icon: <Database size={19} />,
      title: "Flexible MongoDB Data",
      desc:
        "MongoDB supports document-based data models suitable for many evolving application requirements.",
    },
    {
      icon: <Monitor size={19} />,
      title: "Reusable React Interfaces",
      desc:
        "React components make dashboards, portals and interactive interfaces easier to organise and extend.",
    },
    {
      icon: <Server size={19} />,
      title: "Structured Backend APIs",
      desc:
        "Node.js and Express.js can support authentication, integrations, application logic and REST APIs.",
    },
    {
      icon: <Settings2 size={19} />,
      title: "Maintainable Architecture",
      desc:
        "Frontend, backend and database responsibilities can be clearly separated within an organised project structure.",
    },
    {
      icon: <Zap size={19} />,
      title: "Established Ecosystem",
      desc:
        "The MERN ecosystem supports authentication, payments, deployment, testing and many third-party integrations.",
    },
  ];

  /* =========================================================
     TECHNOLOGIES
  ========================================================= */

  const techStack = [
    {
      category: "MongoDB",
      items: [
        "MongoDB Atlas",
        "Mongoose",
        "Aggregation",
        "Indexes",
        "Data Modelling",
      ],
    },
    {
      category: "Express.js",
      items: [
        "Express.js",
        "REST APIs",
        "Middleware",
        "Validation",
        "Authentication",
      ],
    },
    {
      category: "React.js",
      items: [
        "React.js",
        "React Router",
        "TypeScript",
        "Tailwind CSS",
        "State Management",
      ],
    },
    {
      category: "Node.js",
      items: [
        "Node.js",
        "JWT",
        "Socket.io",
        "Nodemailer",
        "Background Tasks",
      ],
    },
    {
      category: "Deployment",
      items: [
        "Vercel",
        "AWS",
        "Docker",
        "GitHub Actions",
        "Nginx",
      ],
    },
    {
      category: "Integrations",
      items: [
        "Payment APIs",
        "Email APIs",
        "Storage APIs",
        "Webhooks",
        "Third-Party APIs",
      ],
    },
  ];

  /* =========================================================
     PROCESS
  ========================================================= */

  const process = [
    {
      number: "01",
      title: "Requirements & Architecture",
      desc:
        "We review users, features, workflows, integrations and business requirements before defining the application structure.",
    },
    {
      number: "02",
      title: "Database & Backend",
      desc:
        "MongoDB models, Express routes, authentication, validation and core backend APIs are structured around the product.",
    },
    {
      number: "03",
      title: "React Frontend",
      desc:
        "Responsive React interfaces and reusable components are developed and connected with backend APIs.",
    },
    {
      number: "04",
      title: "Features & Integrations",
      desc:
        "Business logic, payments, notifications, external APIs and other required functionality are integrated.",
    },
    {
      number: "05",
      title: "Testing & Review",
      desc:
        "Core workflows, APIs, validation, responsive behaviour and important application scenarios are reviewed.",
    },
    {
      number: "06",
      title: "Deployment & Handover",
      desc:
        "The application is prepared for production and relevant code and project assets are handed over as agreed.",
    },
  ];

  /* =========================================================
     SOLUTIONS
  ========================================================= */

  const solutions = [
    "Custom MERN Applications",
    "MERN SaaS Platforms",
    "React + Node.js Products",
    "MongoDB Applications",
    "Express.js REST APIs",
    "Startup MVP Development",
    "Business Dashboards",
    "Existing MERN Support",
    "Customer Portals",
    "Admin Systems",
    "Authentication Systems",
    "Third-Party Integrations",
  ];

  /* =========================================================
     WHY DEVZORE
  ========================================================= */

  const whyDevZore = [
    {
      icon: <Layers3 size={19} />,
      title: "Full-Stack Delivery",
      desc:
        "Frontend, backend, database and integrations can be handled as one connected application project.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "Security-Conscious Development",
      desc:
        "Authentication, permissions, validation and secure configuration are considered throughout development.",
    },
    {
      icon: <Code2 size={19} />,
      title: "Maintainable Code",
      desc:
        "Application structure is organised so future development and feature additions remain manageable.",
    },
    {
      icon: <Rocket size={19} />,
      title: "Startup-Friendly Development",
      desc:
        "MVP scope can be focused around essential functionality before additional product expansion.",
    },
    {
      icon: <Globe2 size={19} />,
      title: "Remote Collaboration",
      desc:
        "Projects can be managed remotely using organised communication, repositories and development workflows.",
    },
    {
      icon: <TrendingUp size={19} />,
      title: "Built for Growth",
      desc:
        "Applications can be structured so features, integrations and workflows can evolve with the product.",
    },
  ];

  /* =========================================================
     FAQ
  ========================================================= */

  const faqs = [
    {
      q: "What is MERN stack development and who is it for?",
      a: "MERN stack development is full-stack web engineering using MongoDB, Express.js, React, and Node.js. It is ideal for startups building MVPs, SaaS founders launching subscription platforms, and businesses requiring custom management systems, real-time dashboards, and secure REST APIs without fragmented technology overhead.",
    },
    {
      q: "How much does MERN stack development cost?",
      a: "Project costs typically range depending on application scope, user roles, integrations, and database complexity. A focused MVP or business dashboard is significantly more cost-effective than a large multi-tenant SaaS. DevZore provides clear, fixed-price milestone quotes with zero hidden charges.",
    },
    {
      q: "How long does a MERN stack project take to build?",
      a: "A focused MVP or operational business portal typically takes 3 to 6 weeks from architecture design to production launch. Complex SaaS platforms with subscription billing, role hierarchies, and extensive third-party APIs typically take 8 to 12 weeks with weekly sprint demos.",
    },
    {
      q: "Will I own the complete source code and repository?",
      a: "Yes, 100%. Upon project completion and milestone handover, DevZore transfers full ownership of the Git repository, production deployment configurations, database schemas, and intellectual property directly to your team.",
    },
    {
      q: "Do you offer post-launch maintenance and support?",
      a: "Yes. Every MERN project includes 30 days of complimentary post-launch bug fixing and monitoring. We also provide ongoing monthly support plans covering security patches, dependency upgrades, cloud performance tuning, and new feature development.",
    },
    {
      q: "Can DevZore migrate an existing application to the MERN stack?",
      a: "Yes. We frequently modernize legacy PHP, WordPress, or outdated single-page apps to the modern MERN stack. We migrate databases to MongoDB Atlas, re-engineer backend logic into REST APIs with Node.js, and rebuild frontend interfaces in modern React.",
    },
    {
      q: "How does DevZore manage remote projects internationally?",
      a: "We collaborate with clients across Pakistan, Qatar, the UK, the US, and internationally via structured GitHub repositories, sprint boards, staging URLs, WhatsApp, and asynchronous or scheduled video reviews.",
    },
    {
      q: "Is MERN suitable for enterprise SaaS development?",
      a: "Yes. With MongoDB indexing, Express middleware, React component state management, and Node.js event-driven concurrency, MERN reliably powers scalable SaaS platforms handling tens of thousands of active users.",
    },
  ];

  /* =========================================================
     RELATED SERVICES
  ========================================================= */

  const relatedServices = [
    {
      label: "BACKEND",
      title: "Backend & API Development",
      desc:
        "Node.js APIs, databases, authentication and server-side functionality for modern applications.",
      path: "/backend-api",
    },
    {
      label: "PRODUCT",
      title: "SaaS Product Development",
      desc:
        "Custom SaaS applications with users, dashboards, subscriptions and business workflows.",
      path: "/saas-product-development",
    },
    {
      label: "FRONTEND",
      title: "React Development",
      desc:
        "Responsive React interfaces, dashboards and modern frontend applications.",
      path: "/reactdevelopment",
    },
    {
      label: "STARTUP",
      title: "Startup MVP Development",
      desc:
        "Focused first releases for founders validating web, mobile and SaaS product ideas.",
      path: "/startup-mvp",
    },
  ];

  /* =========================================================
     HELPERS
  ========================================================= */

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
      `MERN Stack Development Enquiry - ${formData.name}`
    );

    const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Service: ${formData.service}
Timeline: ${formData.timeline || "Not specified"}

Project Details:
${formData.message}`
    );

    window.location.href = `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;
  };

  /* =========================================================
     STRUCTURED DATA
  ========================================================= */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/mern-stack-development#service",
    name: "MERN Stack Development Services",
    url: "https://devzore.com/mern-stack-development",
    serviceType: "MERN Stack Development",
    description:
      "Custom MERN stack development services using MongoDB, Express.js, React.js and Node.js for SaaS products, dashboards, APIs, portals and startup applications.",
    provider: {
      "@type": "Organization",
      "@id": "https://devzore.com/#organization",
      name: "DevZore",
      url: "https://devzore.com/",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "MERN Stack Development Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc,
        },
      })),
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
        name: "Services",
        item: "https://devzore.com/allservices",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "MERN Stack Development",
        item: "https://devzore.com/mern-stack-development",
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

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  /* =========================================================
     SECTION LABEL
  ========================================================= */

  const SectionLabel = ({ children, light = false }) => (
    <div
      className={`flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase ${
        light ? "text-[#28c5d4]" : "text-[#07899a]"
      }`}
    >
      <span className="w-5 h-[2px] bg-[#0796A8]" />
      {children}
    </div>
  );

  return (
    <>
      <SEO
        title="MERN Stack Development Services | React & Node | DevZore"
        description="Custom MERN stack development services by DevZore. We build scalable SaaS platforms, dashboards, APIs and MVPs using MongoDB, Express, React and Node."
        canonical="https://devzore.com/mern-stack-development"
        jsonLd={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      <div
        className="min-h-screen overflow-hidden bg-[#f7f9fa] text-[#071923] antialiased"
        style={{
          fontFamily: '"DM Sans", "Segoe UI", Arial, sans-serif',
        }}
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          aria-labelledby="mern-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[5%] w-[500px] h-[500px] rounded-full bg-[#078fa5]/12 blur-[130px]" />

            <div
              className="absolute inset-0 opacity-50"
              style={darkGrid}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/95 to-[#04111a]/70" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-23 sm:pt-20 lg:pt-24 pb-10 sm:pb-12">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
              {/* LEFT */}

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] uppercase text-[#c4ced5]">
                    <CircleCheck
                      size={14}
                      className="text-[#26becb]"
                    />

                    DevZore Full-Stack Engineering
                  </div>
                </div>

                <h1
                  id="mern-heading"
                  className="max-w-[780px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[53px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  MERN Stack Development Services
                </h1>

                <p className="text-[17px] sm:text-[20px] font-medium text-[#22bdca] mt-2 mb-3">
                  Full-stack applications built with MongoDB, Express, React & Node.
                </p>

                <p className="max-w-[700px] mt-4 text-[15px] sm:text-[16px] leading-7 font-normal text-slate-300">
                  DevZore develops custom MERN stack applications for startups,
                  SaaS products, dashboards, portals and businesses that need a
                  connected frontend, backend and database solution.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 font-normal text-slate-400">
                  React interfaces connect with Node.js and Express APIs,
                  MongoDB databases, authentication and third-party
                  integrations to create practical full-stack products.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#mern-project-enquiry"
                    className="inline-flex justify-center items-center gap-2.5 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start Your MERN Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#mern-development-services"
                    className="inline-flex justify-center items-center gap-2.5 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore MERN Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "React Frontend",
                    "Node.js Backend",
                    "MongoDB",
                    "REST APIs",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400"
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

              {/* RIGHT VISUAL */}

              <div className="relative min-h-[380px] lg:min-h-[430px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[390px] h-[390px] rounded-full bg-[#0796A8]/15 blur-[90px]" />

                  <div className="relative w-full max-w-[560px]">
                    <div className="relative rounded-[20px] border border-white/10 bg-[#091d27]/95 shadow-[0_35px_90px_rgba(0,0,0,0.45)] overflow-hidden">
                      <div className="h-9 px-4 border-b border-white/10 bg-[#0b222d] flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {[1, 2, 3].map((item) => (
                            <span
                              key={item}
                              className="w-2 h-2 rounded-full bg-white/20"
                            />
                          ))}
                        </div>

                        <div className="w-[46%] h-4 rounded bg-white/[0.05]" />
                        <div className="w-5" />
                      </div>

                      <div className="p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#22bdca] font-semibold mb-4">
                          Full-Stack Architecture
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                          {mernStack.map((item) => (
                            <div
                              key={item.letter}
                              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-[#19bdca]/10 border border-[#19bdca]/20 flex items-center justify-center">
                                  <span className="text-[#28c5d4] text-[15px] font-semibold">
                                    {item.letter}
                                  </span>
                                </div>

                                <div>
                                  <p className="text-[12px] font-semibold text-white">
                                    {item.name}
                                  </p>

                                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                                    {item.role}
                                  </p>
                                </div>
                              </div>

                              <p className="text-xs leading-5 text-slate-500 mt-3">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-3 rounded-xl border border-[#1bbac8]/15 bg-[#1bbac8]/[0.04] p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-slate-400">
                              React Frontend
                            </span>

                            <ArrowRight
                              size={12}
                              className="text-[#28c5d4]"
                            />

                            <span className="text-xs font-medium text-slate-400">
                              Express API
                            </span>

                            <ArrowRight
                              size={12}
                              className="text-[#28c5d4]"
                            />

                            <span className="text-xs font-medium text-slate-400">
                              MongoDB
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-6 top-14 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Monitor
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-xs font-semibold mt-2">
                        React
                      </p>
                    </div>

                    <div className="absolute -right-5 top-16 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Server
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-xs font-semibold mt-2">
                        Node API
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Database
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-xs font-semibold mt-2">
                        MongoDB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CAPABILITY STRIP */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "MERN Applications"],
                  ["02", "SaaS Platforms"],
                  ["03", "REST APIs"],
                  ["04", "Business Systems"],
                ].map(([number, title], index) => (
                  <div
                    key={title}
                    className={`py-4 ${
                      index !== 3
                        ? "lg:border-r border-white/[0.07]"
                        : ""
                    } ${index > 0 ? "lg:pl-7" : ""}`}
                  >
                    <span className="block text-xs font-semibold text-[#1bb8c7] mb-1">
                      {number}
                    </span>

                    <span className="text-[13px] font-medium text-slate-300">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DIRECT-ANSWER BLOCK (D1) & INTRO
        ===================================================== */}

        <section
          className="relative py-12 md:py-16 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="rounded-2xl border-2 border-[#0796A8]/25 bg-white p-6 sm:p-9 shadow-sm mb-12">
              <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.18em] text-[#0796A8] mb-3">
                <HelpCircle size={16} />
                <span>Executive Answer</span>
              </div>

              <h2 className="text-[#071923] text-[22px] sm:text-[26px] md:text-[30px] leading-[1.2] font-bold tracking-[-0.03em] mb-4">
                What is MERN stack development and who is it for?
              </h2>

              <p className="text-[15px] sm:text-[16px] leading-7 font-normal text-slate-700 mb-6">
                MERN stack development is full-stack software engineering using MongoDB, Express.js, React, and Node.js with unified JavaScript across frontend and backend. It is ideal for startups building MVPs, SaaS founders launching subscription platforms, and businesses requiring custom management systems, real-time dashboards, and secure REST APIs without fragmented technology overhead.
              </p>

              <div className="border-t border-slate-100 pt-5">
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-3">
                  Ideal MERN Stack Use Cases:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "SaaS products with subscription billing & multi-tenant data",
                    "Operational management systems (inventory, billing, dispatch)",
                    "Real-time analytics dashboards and client portals",
                    "Startup MVPs requiring rapid time-to-market iteration",
                    "Custom RESTful API backends connected to React SPAs",
                    "Operational software requiring single-stack code maintenance",
                  ].map((useCase, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[12px] text-slate-700">
                      <CheckCircle2 size={14} className="text-[#0796A8] flex-shrink-0 mt-0.5" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>MERN Development</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  One connected stack.{" "}
                  <span className="text-[#0796A8]">
                    Complete application development.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 font-normal text-slate-700">
                  MERN brings frontend interfaces, backend services and
                  database development into one JavaScript-focused application
                  stack.
                </p>

                <p className="text-[13px] leading-6 mt-3 font-normal text-slate-500">
                  DevZore uses the stack for SaaS products, dashboards,
                  portals, startup MVPs and custom applications that require
                  more functionality than a standard website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="mern-development-services"
          aria-labelledby="mern-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>What We Build</SectionLabel>

              <h2
                id="mern-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                MERN solutions designed around your application requirements.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                From product interfaces to databases and backend APIs, the
                project is structured around what the application actually
                needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4f5] text-[#075f70] flex items-center justify-center">
                      {service.icon}
                    </div>

                    <span className="text-xs font-semibold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[18px] sm:text-[19px] leading-snug font-semibold mt-4">
                    {service.title}
                  </h3>

                  <p className="text-[#374151] text-[14px] sm:text-[14.5px] leading-[1.6] mt-2">
                    {service.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2
                          size={12}
                          className="text-[#0796A8]"
                        />

                        <span className="text-[13px] font-medium text-slate-700">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            REAL MERN PROJECTS (CASE STUDIES)
        ===================================================== */}

        <section
          id="real-mern-projects"
          aria-labelledby="real-mern-projects-heading"
          className="py-12 md:py-16 bg-[#f7f9fa] border-y border-slate-200"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <SectionLabel>Client Case Studies</SectionLabel>

                <h2
                  id="real-mern-projects-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
                >
                  Real MERN projects built for active operations.
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                  Inspect concrete systems engineered by DevZore with MongoDB, Express, React, and Node.js for client operations in Pakistan and internationally.
                </p>
              </div>

              <Link
                to="/projects"
                onClick={scrollTop}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
              >
                <span>View All Case Studies</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mernProjects.map((project) => (
                <article
                  key={project.slug}
                  className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-[#0796A8]/50 hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-cyan-50 text-[#0796A8] border border-cyan-100">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {project.location} • Remote
                      </span>
                    </div>

                    <h3 className="text-[#071923] text-[18px] font-bold leading-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="text-[12px] font-semibold text-[#0796A8] mb-3">
                      {project.systemType}
                    </p>

                    <p className="text-[12px] text-slate-600 leading-relaxed mb-4">
                      {project.problem}
                    </p>

                    <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Features Built:
                      </p>
                      {project.builtFeatures.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[13px] text-slate-700">
                          <CheckCircle2 size={13} className="text-[#0796A8] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hidden results placeholder:
                        [OWNER INPUT NEEDED: verified business outcome metrics before making visible]
                    */}
                    {project.hasRealResults && (
                      <div className="mb-4 p-2.5 rounded-lg bg-emerald-50 text-emerald-800 text-[13px] font-medium">
                        Verified business metrics will display here.
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/projects/${project.slug}`}
                      onClick={scrollTop}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#071923] hover:bg-[#0796A8] text-white text-[13px] font-semibold transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            STANDARDS
        ===================================================== */}

        <section
          aria-labelledby="mern-standards-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel light>Development Standards</SectionLabel>

              <h2
                id="mern-standards-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Full-stack development that stays{" "}
                <span className="text-[#25bfce]">
                  organised as the product grows.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Good MERN development requires more than connecting React to an
                API. Architecture, security, data and maintainability all need
                to work together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {standards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/[0.09] bg-white/[0.035] p-5 hover:bg-white/[0.055] hover:border-[#1bbac8]/25 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg border border-[#1bbac8]/20 bg-[#0e2b36] text-[#27c2d0] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[14px] font-semibold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-[13px] leading-5 text-slate-400 mt-1.5">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO WE BUILD FOR
        ===================================================== */}

        <section
          aria-labelledby="mern-project-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
              <div>
                <SectionLabel>Who We Build For</SectionLabel>

                <h2
                  id="mern-project-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  MERN development for{" "}
                  <span className="text-[#0796A8]">
                    startups and businesses.
                  </span>
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-4">
                  MERN can support new products and existing businesses that
                  need custom workflows, data management and application
                  functionality.
                </p>

                <p className="text-slate-500 text-[12px] leading-5 mt-2">
                  Architecture can be adapted around user roles, integrations,
                  product complexity and expected future development.
                </p>

                <a
                  href="#mern-project-enquiry"
                  className="inline-flex items-center gap-2 mt-5 text-[13px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss Your MERN Project
                  <ArrowRight size={13} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {projectTypes.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/35 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] font-semibold text-[14px] mt-4">
                      {item.title}
                    </h3>

                    <p className="text-[#374151] text-[14px] sm:text-[14.5px] leading-[1.6] mt-1.5">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY MERN
        ===================================================== */}

        <section
          aria-labelledby="why-mern-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Why MERN</SectionLabel>

              <h2
                id="why-mern-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Why use MongoDB, Express, React and Node?
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                The MERN stack combines established JavaScript technologies
                for user interfaces, backend development, APIs and database
                operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyMern.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[#071923] text-[14px] font-semibold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-[#374151] text-[14px] sm:text-[14.5px] leading-[1.6] mt-1.5">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>

            {/* HONEST ENGINEERING COMPARISON */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="max-w-3xl mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0796A8]">
                  Architectural Decision Framework
                </span>
                <h3 className="text-[20px] sm:text-[24px] font-bold text-[#071923] mt-1">
                  When MERN is the right choice — and when it isn't.
                </h3>
                <p className="text-[13px] text-slate-600 mt-2">
                  Honest engineering requires choosing tools for the problem, not following trends. Here is how DevZore advises clients evaluating the MERN stack:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Column 1: MERN is Ideal */}
                <div className="p-5 rounded-xl bg-white border border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-[13px] mb-3">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>When MERN is the Ideal Stack</span>
                  </div>
                  <ul className="space-y-2.5 text-[12px] text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold mt-0.5">•</span>
                      <span><strong>SaaS platforms & portals:</strong> Subscription workflows, role-based dashboards, and interactive UI state.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold mt-0.5">•</span>
                      <span><strong>Flexible data schemas:</strong> Applications where data models evolve rapidly without complex SQL migration locks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold mt-0.5">•</span>
                      <span><strong>Startup MVPs:</strong> Rapid prototyping with unified JavaScript across frontend, backend, and MongoDB.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold mt-0.5">•</span>
                      <span><strong>High-concurrency APIs:</strong> Node.js non-blocking I/O handles numerous concurrent user connections efficiently.</span>
                    </li>
                  </ul>
                </div>

                {/* Column 2: When Another Stack is Better */}
                <div className="p-5 rounded-xl bg-white border border-amber-200 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-[13px] mb-3">
                    <AlertCircle size={16} className="text-amber-600" />
                    <span>When Another Stack is Recommended</span>
                  </div>
                  <ul className="space-y-2.5 text-[12px] text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span><strong>Relational accounting & banking:</strong> Complex multi-table financial ledgers strictly requiring PostgreSQL or MySQL ACID transactions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span><strong>Heavy CPU data crunching:</strong> Machine learning, computer vision, or scientific computing (Python is superior).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span><strong>SEO-first & server-rendered applications:</strong> Where instant server-side rendering is required, explore our <Link to="/nextjs-development" className="text-[#0796A8] font-semibold underline">Next.js Development Services</Link> or read our <Link to="/blog/mern-stack-vs-nextjs-business-guide" className="text-[#0796A8] font-semibold underline">MERN vs Next.js Guide</Link>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span><strong>DevZore pledge:</strong> We review your operational scope first and recommend relational SQL or specialized backends whenever MERN is not the best fit.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY
        ===================================================== */}

        <section
          aria-labelledby="mern-tech-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>MERN Technology</SectionLabel>

              <h2
                id="mern-tech-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Technologies for complete full-stack applications.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Supporting tools are selected according to application
                functionality, integrations, deployment and maintenance
                requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {techStack.map((category) => (
                <article
                  key={category.category}
                  className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/35 transition-colors"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#07899a]">
                    {category.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-[#f8fafb] px-2.5 py-1.5 text-[13px] font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section
          aria-labelledby="mern-process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div
            className="absolute inset-0"
            style={darkGrid}
          />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="mern-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From requirements{" "}
                <span className="text-[#25bfce]">
                  to production deployment.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured workflow keeps frontend, backend, database,
                integrations and deployment organised throughout development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="relative bg-[#071923] p-5 min-h-[175px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-xs font-semibold text-[#22bfce]">
                    {step.number}
                  </span>

                  <h3 className="text-[15px] font-semibold mt-6">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-[14px] sm:text-[14.5px] leading-[1.6] mt-2">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SOLUTIONS
        ===================================================== */}

        <section
          aria-labelledby="mern-solutions-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>MERN Solutions</SectionLabel>

                <h2
                  id="mern-solutions-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Full-stack solutions for different product requirements.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  MERN architecture can be adapted according to users,
                  workflows, integrations and the type of application being
                  developed.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {solutions.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-semibold text-[#0796A8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-[#071923] text-[13px] font-semibold mt-1">
                        {item}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={13}
                      className="text-slate-300 group-hover:text-[#0796A8]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY DEVZORE
        ===================================================== */}

        <section
          aria-labelledby="mern-why-devzore-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="mern-why-devzore-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Full-stack development around{" "}
                <span className="text-[#0796A8]">
                  your actual product.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                We focus on the application requirements, users and business
                workflows instead of applying the same project structure to
                every product.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyDevZore.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[#071923] text-[14px] font-semibold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-[#374151] text-[14px] sm:text-[14.5px] leading-[1.6] mt-1.5">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            RELATED SERVICES
        ===================================================== */}

        <section
          aria-labelledby="mern-related-services-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="mern-related-services-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  More ways DevZore can help.
                </h2>
              </div>

              <Link
                to="/allservices"
                onClick={scrollTop}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#07899a]"
              >
                View All Services
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <span className="text-xs tracking-[0.15em] font-semibold text-[#0796A8]">
                    {service.label}
                  </span>

                  <h3 className="text-[#071923] text-[14px] font-semibold mt-3">
                    {service.title}
                  </h3>

                  <p className="text-[#374151] text-[14px] sm:text-[14.5px] leading-[1.6] mt-2">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[13px] font-medium text-slate-700 group-hover:text-[#07899a]">
                      Explore service
                    </span>

                    <ArrowUpRight
                      size={13}
                      className="text-[#07899a]"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          aria-labelledby="mern-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="mern-faq-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  MERN stack questions clients actually ask.
                </h2>
              </div>

              <a
                href="#mern-project-enquiry"
                className="self-start md:self-auto inline-flex items-center gap-2 rounded-lg bg-[#071923] px-4 py-2.5 text-xs font-semibold text-white"
              >
                Ask Your Question
                <ArrowRight size={12} />
              </a>
            </div>

            <div className="border-t border-slate-200">
              {visibleFaqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.q}
                    className="border-b border-slate-200"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`mern-faq-${index}`}
                      className="w-full flex items-center justify-between gap-5 py-4 text-left"
                    >
                      <span
                        className={`text-[13px] sm:text-[14px] font-semibold transition-colors ${
                          isOpen
                            ? "text-[#07899a]"
                            : "text-[#071923]"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={`w-7 h-7 flex-shrink-0 rounded-full border flex items-center justify-center transition-all ${
                          isOpen
                            ? "border-[#0796A8] bg-[#0796A8] text-white"
                            : "border-slate-200 text-[#071923]"
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
                      id={`mern-faq-${index}`}
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
                  className="inline-flex items-center gap-2 rounded-lg border border-[#071923]/15 bg-[#f8fafb] px-4 py-2.5 text-xs font-semibold text-[#071923] hover:border-[#0796A8]/50 transition-colors"
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

        {/* =====================================================
            PRICING & SCOPE BLOCK (WORKSTREAM F9)
        ===================================================== */}
        <PricingBlock serviceName="MERN Stack Development" />

        {/* =====================================================
            PROJECT ENQUIRY
        ===================================================== */}

        <section
          id="mern-project-enquiry"
          aria-labelledby="mern-project-enquiry-heading"
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
                <SectionLabel light>Start a MERN Project</SectionLabel>

                <h2
                  id="mern-project-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us what you{" "}
                  <span className="text-[#25bfce]">
                    want to build.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share a few details about your application, SaaS platform,
                  dashboard, portal or startup idea. We can review the
                  requirements and discuss the most appropriate development
                  approach.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Custom MERN applications",
                    "SaaS platforms and MVPs",
                    "React frontend development",
                    "Node.js APIs and MongoDB",
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

                      <span className="text-[13px] font-medium text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.08] space-y-3">
                  <p className="text-xs uppercase tracking-[0.18em] font-semibold text-slate-400">
                    Prefer an immediate response?
                  </p>

                  <div>
                    <a
                      href="https://wa.me/923348004300"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[12px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <Phone size={14} />
                      WhatsApp: +92 334 8004300
                    </a>
                  </div>

                  <div>
                    <a
                      href="mailto:hellodevzore@gmail.com"
                      className="inline-flex items-center gap-2 text-[12px] font-medium text-[#26c4d2] hover:text-white transition-colors"
                    >
                      <Mail size={14} />
                      hellodevzore@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.1] bg-[#0a202a]/90 p-5 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="mern-name"
                      className="block text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="mern-name"
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
                      htmlFor="mern-email"
                      className="block text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="mern-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  {/* <div>
                    <label
                      htmlFor="mern-company"
                      className="block text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="mern-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div> */}

                  <div>
                    <label
                      htmlFor="mern-service"
                      className="block text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="mern-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>MERN Stack Development</option>
                      <option>MERN SaaS Development</option>
                      <option>Startup MVP</option>
                      <option>Business Dashboard</option>
                      <option>Customer Portal</option>
                      <option>React Development</option>
                      <option>Backend & REST API</option>
                      <option>Existing MERN Project</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-1">
                    <label
                      htmlFor="mern-timeline"
                      className="block text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="mern-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option value="">Select a timeline</option>
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                      <option>3+ months</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="mern-message"
                      className="block text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="mern-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the application, users, important features, integrations and any existing system..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-xs leading-4 text-slate-500 max-w-sm">
                    Share enough information for us to understand the
                    application. Detailed scope and technical requirements can
                    be discussed afterwards.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[13px] font-semibold text-[#071923] transition-colors"
                  >
                    Send MERN Enquiry
                    <Send size={13} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white text-[14px] font-semibold">
                  Need a full-stack application? We’re ready to build it.
                </p>

                <p className="text-slate-500 text-xs mt-1">
                  MongoDB, Express.js, React.js and Node.js development by
                  DevZore.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex self-start items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
              >
                Contact DevZore
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MernStackDevelopment;