import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Cloud,
  Code2,
  Database,
  Globe2,
  Key,
  Layers3,
  Lock,
  Mail,
  Minus,
  Plus,
  Send,
  Server,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

const BackendApi = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Backend & API Development",
    timeline: "",
    message: "",
  });

  // BACKGROUND GRIDS

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

  // BACKEND SERVICES

  const features = [
    {
      icon: <Server size={21} />,
      number: "01",
      title: "REST API Development",
      desc:
        "Custom REST and RESTful APIs for web applications, mobile apps, SaaS platforms and business software using structured endpoints and maintainable backend architecture.",
      points: [
        "Structured API endpoints",
        "Validation & pagination",
        "Clear API architecture",
      ],
    },
    {
      icon: <Code2 size={21} />,
      number: "02",
      title: "GraphQL API Development",
      desc:
        "GraphQL APIs for applications that need flexible queries, mutations, subscriptions and structured frontend-to-backend communication.",
      points: [
        "Queries & mutations",
        "GraphQL schemas",
        "Application integration",
      ],
    },
    {
      icon: <Database size={21} />,
      number: "03",
      title: "Database Development",
      desc:
        "Database architecture and integration for application data, relationships, indexes, queries and business workflows.",
      points: [
        "Data modelling",
        "Database integration",
        "Query optimisation",
      ],
    },
    {
      icon: <ShieldCheck size={21} />,
      number: "04",
      title: "Secure Backend Development",
      desc:
        "Authentication, authorization, validation, permissions and security-conscious backend development for modern applications.",
      points: [
        "Authentication",
        "Role-based access",
        "Input validation",
      ],
    },
    {
      icon: <Activity size={21} />,
      number: "05",
      title: "Real-Time Backend Development",
      desc:
        "Real-time backend functionality for chat, live notifications, dashboards, collaboration and event-driven application experiences.",
      points: [
        "Live notifications",
        "Real-time updates",
        "Event-driven workflows",
      ],
    },
    {
      icon: <Layers3 size={21} />,
      number: "06",
      title: "SaaS Backend Development",
      desc:
        "Backend systems for SaaS products with account management, permissions, APIs, business logic and scalable application workflows.",
      points: [
        "SaaS architecture",
        "Account workflows",
        "Reusable business logic",
      ],
    },
    {
      icon: <Key size={21} />,
      number: "07",
      title: "Third-Party API Integration",
      desc:
        "Integrate payment providers, email platforms, authentication services, AI APIs, webhooks and other external systems.",
      points: [
        "Payment APIs",
        "Webhooks",
        "External platforms",
      ],
    },
    {
      icon: <TrendingUp size={21} />,
      number: "08",
      title: "Backend Optimisation",
      desc:
        "Improve backend performance through better queries, indexing, caching, pagination and application-level optimisation.",
      points: [
        "Query optimisation",
        "Caching strategies",
        "Performance review",
      ],
    },
    {
      icon: <Cloud size={21} />,
      number: "09",
      title: "Deployment & Backend Support",
      desc:
        "Prepare backend applications for production environments with configuration, deployment support and ongoing improvements.",
      points: [
        "Production preparation",
        "Environment setup",
        "Ongoing support",
      ],
    },
  ];

  // APPLICATION BACKENDS

  const applicationBackends = [
    {
      icon: <Globe2 size={19} />,
      title: "Web Application Backend",
      desc:
        "Server-side APIs, databases, authentication and business logic for modern web applications.",
    },
    {
      icon: <Server size={19} />,
      title: "Mobile App Backend",
      desc:
        "Authentication, data, notifications, storage and APIs for connected mobile applications.",
    },
    {
      icon: <Layers3 size={19} />,
      title: "SaaS Backend",
      desc:
        "Backend architecture for subscription products, dashboards, users and product-specific workflows.",
    },
    {
      icon: <Database size={19} />,
      title: "Database-Driven Systems",
      desc:
        "Backend applications designed around structured business data and operational workflows.",
    },
    {
      icon: <Key size={19} />,
      title: "API Integration Systems",
      desc:
        "Connect applications with payments, messaging, storage, AI services and external platforms.",
    },
    {
      icon: <Activity size={19} />,
      title: "Real-Time Applications",
      desc:
        "Server-side functionality for live events, messaging, notifications and interactive systems.",
    },
  ];

  // DEVELOPMENT STANDARDS

  const whyUs = [
    {
      icon: <Code2 size={19} />,
      title: "Clean Backend Architecture",
      desc:
        "Modular backend code structured to remain understandable, maintainable and easier to extend.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "Security Conscious",
      desc:
        "Authentication, authorization, validation and secure configuration are considered throughout development.",
    },
    {
      icon: <Database size={19} />,
      title: "Database-Focused Engineering",
      desc:
        "Database structures and queries are designed around real application data and business workflows.",
    },
    {
      icon: <Activity size={19} />,
      title: "Performance Considered",
      desc:
        "API responses, database queries, caching and backend architecture are developed with performance in mind.",
    },
    {
      icon: <Cloud size={19} />,
      title: "Production Ready",
      desc:
        "Backend applications can be prepared for production deployment with suitable environment configuration.",
    },
    {
      icon: <Globe2 size={19} />,
      title: "Remote Collaboration",
      desc:
        "Backend and API projects can be handled remotely through organised communication and development workflows.",
    },
  ];

  // SECURITY

  const securityPoints = [
    "JWT Authentication",
    "Role-Based Access Control",
    "OAuth Integration",
    "Input Validation",
    "API Rate Limiting",
    "Password Hashing",
    "Secure Environment Variables",
    "CORS Configuration",
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Backend Architecture",
      desc:
        "We review the application, business logic, APIs, users, authentication, integrations and data requirements.",
    },
    {
      number: "02",
      title: "Database Planning",
      desc:
        "Application data, relationships, validation, indexes and access patterns are planned around the project.",
    },
    {
      number: "03",
      title: "Core Development",
      desc:
        "APIs, authentication, business logic, middleware, validation and database operations are developed.",
    },
    {
      number: "04",
      title: "Integrations",
      desc:
        "Payment services, email, storage, AI APIs, webhooks and other required external systems are connected.",
    },
    {
      number: "05",
      title: "Testing & Security",
      desc:
        "Authentication, permissions, validation, errors, workflows and important performance areas are reviewed.",
    },
    {
      number: "06",
      title: "Deployment & Handover",
      desc:
        "The backend is prepared for production along with agreed configuration, documentation and project handover.",
    },
  ];

  // USE CASES

  const useCases = [
    "Web Application APIs",
    "Mobile App Backends",
    "SaaS Platforms",
    "Business Systems",
    "Customer Portals",
    "Admin Dashboards",
    "E-Commerce Backends",
    "Authentication Systems",
    "Payment Integrations",
    "Real-Time Applications",
    "Third-Party Integrations",
    "Custom Business APIs",
  ];

  // FAQ

  const faqs = [
    {
      q: "What backend development services does DevZore provide?",
      a:
        "DevZore provides custom backend development for web applications, mobile apps, SaaS products and business software. Services can include APIs, authentication, databases, third-party integrations, real-time functionality and deployment preparation.",
    },
    {
      q: "How much does backend and API development cost?",
      a:
        "Cost depends on application complexity, database requirements, authentication, integrations, business logic, security requirements and deployment needs. A project-specific estimate can be prepared after reviewing the scope.",
    },
    {
      q: "Do you provide custom backend development?",
      a:
        "Yes. Backend systems can be developed around your application's users, business logic, database structure, permissions, integrations and frontend requirements.",
    },
    {
      q: "Do you provide Node.js and Express.js development?",
      a:
        "Yes. Node.js and Express.js can be used to develop backend systems and APIs for web applications, mobile apps, SaaS products and custom software.",
    },
    {
      q: "Do you build REST APIs and RESTful APIs?",
      a:
        "Yes. REST APIs can include structured endpoints, authentication, validation, error handling, pagination and database integration.",
    },
    {
      q: "Do you provide GraphQL API development?",
      a:
        "Yes. GraphQL can be used where an application benefits from flexible data queries, mutations or subscriptions. The appropriate API approach depends on the project.",
    },
    {
      q: "Can you build a backend for a web application?",
      a:
        "Yes. Web application backends can include server-side logic, authentication, databases, APIs, permissions, payments, notifications and integrations.",
    },
    {
      q: "Can you build a backend for a mobile app?",
      a:
        "Yes. Mobile app backends can include authentication, accounts, databases, APIs, notifications, payments, storage and administration functionality.",
    },
    {
      q: "Can you build a backend for a SaaS application?",
      a:
        "Yes. SaaS backend development can include users, organisations, permissions, APIs, databases, subscriptions and product-specific business logic.",
    },
    {
      q: "Can you integrate third-party APIs and payment gateways?",
      a:
        "Yes. Suitable payment providers, email services, maps, authentication platforms, AI services, cloud storage and other APIs can be integrated where access is available.",
    },
    {
      q: "Do you provide database development and integration?",
      a:
        "Yes. Database work can include data modelling, relationships, indexes, queries and integration with backend APIs and business logic.",
    },
    {
      q: "Do you work with MongoDB and PostgreSQL?",
      a:
        "Yes. Database technology can be selected according to application data, relationships, query requirements and architecture.",
    },
    {
      q: "Do you provide API documentation?",
      a:
        "API projects can include endpoint documentation, request and response examples, authentication instructions and development environment information according to project scope.",
    },
    {
      q: "How do you approach backend API security?",
      a:
        "Security can include authentication, authorization, input validation, rate limiting, secure configuration, password hashing and appropriate access controls.",
    },
    {
      q: "Can you improve an existing backend or API?",
      a:
        "Yes. Existing systems can be reviewed for API structure, queries, authentication, integrations, error handling, performance and maintainability.",
    },
    {
      q: "Can React or Next.js connect to your backend APIs?",
      a:
        "Yes. APIs can be designed to work with React, Next.js and other compatible frontend applications with suitable authentication, CORS and data structures.",
    },
  ];

  // RELATED SERVICES

  const relatedServices = [
    {
      label: "FULL STACK",
      title: "MERN Stack Development",
      desc:
        "Complete MongoDB, Express, React and Node.js application development.",
      path: "/mern-stack-development",
    },
    {
      label: "PRODUCT",
      title: "SaaS Product Development",
      desc:
        "Custom SaaS products with users, dashboards, APIs and product workflows.",
      path: "/saas-product-development",
    },
    {
      label: "FRONTEND",
      title: "React Development",
      desc:
        "Responsive React applications connected to secure backend services and APIs.",
      path: "/reactdevelopment",
    },
    {
      label: "WEB",
      title: "Web Development",
      desc:
        "Business websites and custom web applications built around real requirements.",
      path: "/web-development",
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
      `Backend & API Development Enquiry - ${formData.name}`
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

  // STRUCTURED DATA

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/backend-api#service",
    name: "Backend & API Development Services",
    url: "https://devzore.com/backend-api",
    serviceType: "Backend and API Development",
    description:
      "Custom backend and API development services for web applications, mobile apps and SaaS products including APIs, authentication, databases and integrations.",
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
      name: "Backend & API Development Services",
      itemListElement: features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title,
          description: feature.desc,
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
        name: "Backend & API Development",
        item: "https://devzore.com/backend-api",
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
          {JSON.stringify(serviceSchema)}
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
          aria-labelledby="backend-heading"
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

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-14">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5]">
                    <CircleCheck
                      size={14}
                      className="text-[#26becb]"
                    />
                    Backend & API Development
                  </div>
                </div>

                <h1
                  id="backend-heading"
                  className="max-w-[800px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[54px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Backend systems built for{" "}
                  <span className="text-[#22bdca]">
                    reliable modern applications.
                  </span>
                </h1>

                <p className="max-w-[700px] mt-5 text-[16px] sm:text-[13.5px] leading-7 text-slate-300">
                  DevZore develops backend systems, APIs, authentication,
                  databases and integrations for web applications, mobile
                  apps, SaaS products and custom business software.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  From application logic and database architecture to secure
                  APIs and third-party integrations, we build around the real
                  workflows your software needs to support.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#backend-project-enquiry"
                    className="inline-flex justify-center items-center gap-2.5 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start Your Backend Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#backend-development-services"
                    className="inline-flex justify-center items-center gap-2.5 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore Backend Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "Custom APIs",
                    "Authentication",
                    "Databases",
                    "Integrations",
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

              {/* BACKEND VISUAL */}

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

                      <div className="grid grid-cols-[66px_1fr] min-h-[285px]">
                        <div className="border-r border-white/[0.08] p-3">
                          <div className="w-8 h-8 rounded-lg bg-[#1bbac8]/20 border border-[#1bbac8]/30 mb-5 flex items-center justify-center">
                            <Server
                              size={14}
                              className="text-[#23bfce]"
                            />
                          </div>

                          <div className="space-y-3">
                            {[1, 2, 3, 4, 5].map((item) => (
                              <div
                                key={item}
                                className="w-7 h-2 rounded bg-white/[0.07]"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="flex justify-between items-center mb-5">
                            <div>
                              <div className="w-20 h-2 rounded bg-[#1bbac8]/60 mb-2" />
                              <div className="w-36 h-3 rounded bg-white/80" />
                            </div>

                            <div className="w-16 h-7 rounded-lg bg-[#18bdcb]" />
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            {[
                              ["APIs", "24"],
                              ["Users", "8.4K"],
                              ["Services", "12"],
                            ].map(([label, value]) => (
                              <div
                                key={label}
                                className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"
                              >
                                <p className="text-[7px] text-slate-500">
                                  {label}
                                </p>

                                <p className="text-[15px] font-semibold mt-2">
                                  {value}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-[1.2fr_0.8fr] gap-3 mt-3">
                            <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                              <p className="text-[8px] text-slate-400">
                                API Activity
                              </p>

                              <div className="flex items-end gap-2 h-20 mt-3">
                                {[35, 56, 42, 74, 60, 84, 70, 94].map(
                                  (height, index) => (
                                    <div
                                      key={index}
                                      className="flex-1 rounded-t bg-[#18b7c6]/40"
                                      style={{
                                        height: `${height}%`,
                                      }}
                                    />
                                  )
                                )}
                              </div>
                            </div>

                            <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                              <p className="text-[8px] text-slate-400">
                                Services
                              </p>

                              <div className="space-y-2.5 mt-3">
                                {[1, 2, 3, 4].map((item) => (
                                  <div
                                    key={item}
                                    className="flex items-center gap-2"
                                  >
                                    <div className="w-5 h-5 rounded-md bg-[#18bdcb]/10" />
                                    <div className="flex-1 h-2 rounded bg-white/[0.08]" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-6 top-14 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Database
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Database
                      </p>
                    </div>

                    <div className="absolute -right-5 top-16 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <ShieldCheck
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Secure APIs
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Activity
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Real-Time
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
                  ["01", "REST APIs"],
                  ["02", "Authentication"],
                  ["03", "Databases"],
                  ["04", "Integrations"],
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
          className="relative py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>Backend Development</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  More than endpoints.{" "}
                  <span className="text-[#0796A8]">
                    The engine behind your application.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  A reliable backend manages data, users, permissions,
                  workflows, integrations and communication between different
                  parts of a software product.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  DevZore develops backend systems around the actual application
                  requirements, whether the product is a web application,
                  mobile app, SaaS platform, dashboard or custom business
                  system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section
          id="backend-development-services"
          aria-labelledby="backend-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Backend Services</SectionLabel>

              <h2
                id="backend-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Backend and API solutions built around your application.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                Different applications require different data, authentication,
                integrations and server-side workflows. The backend is planned
                around those requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4f5] text-[#075f70] flex items-center justify-center">
                      {service.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[16px] leading-6 font-semibold mt-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-[12px] leading-5 mt-2">
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

                        <span className="text-[10px] font-medium text-slate-600">
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

        {/* APPLICATION BACKENDS */}

        <section
          aria-labelledby="application-backends-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
              <div>
                <SectionLabel>Application Backends</SectionLabel>

                <h2
                  id="application-backends-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Backend development for{" "}
                  <span className="text-[#0796A8]">
                    connected software products.
                  </span>
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-4">
                  Backend architecture can be adapted to different products,
                  user roles, data requirements and integrations.
                </p>

                <a
                  href="#backend-project-enquiry"
                  className="inline-flex items-center gap-2 mt-5 text-[11px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss Your Backend
                  <ArrowRight size={13} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {applicationBackends.map((item) => (
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

                    <p className="text-slate-500 text-[11px] leading-5 mt-1.5">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT STANDARDS */}

        <section
          aria-labelledby="backend-standards-heading"
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
                id="backend-standards-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Built for reliability,{" "}
                <span className="text-[#25bfce]">
                  security and future growth.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Backend decisions affect security, data quality, performance,
                integrations and how easily the product can evolve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {whyUs.map((item) => (
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

                  <p className="text-[11px] leading-5 text-slate-400 mt-1.5">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECURITY */}

        <section
          aria-labelledby="backend-security-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel>Backend Security</SectionLabel>

                <div className="w-10 h-10 mt-4 rounded-xl bg-[#edf5f6] text-[#07899a] flex items-center justify-center">
                  <Lock size={19} />
                </div>

                <h2
                  id="backend-security-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-4"
                >
                  Security should be considered from the architecture stage.
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-3">
                  Authentication, authorization, validation and API access
                  controls should be part of backend development rather than
                  treated only as final-stage additions.
                </p>

                <p className="text-slate-500 text-[12px] leading-5 mt-3">
                  The exact security approach depends on the application,
                  users, data and integrations involved.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-5">
                <p className="text-[#071923] text-[10px] font-semibold tracking-[0.16em] uppercase">
                  Common security considerations
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-4">
                  {securityPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl bg-white border border-slate-100 p-3"
                    >
                      <ShieldCheck
                        size={14}
                        className="text-[#0796A8] flex-shrink-0"
                      />

                      <span className="text-slate-600 text-[10px] leading-5">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section
          aria-labelledby="backend-process-heading"
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
                id="backend-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From backend requirements{" "}
                <span className="text-[#25bfce]">
                  to production deployment.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A clear backend workflow keeps architecture, data, APIs,
                integrations, security and deployment organised.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="relative bg-[#071923] p-5 min-h-[175px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-[10px] font-semibold text-[#22bfce]">
                    {step.number}
                  </span>

                  <h3 className="text-[15px] font-semibold mt-6">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-2">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}

        <section
          aria-labelledby="backend-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Backend Use Cases</SectionLabel>

                <h2
                  id="backend-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Different applications. Different backend requirements.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Backend architecture can be adapted around the product,
                  users, data model and integrations that need to work
                  together.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {useCases.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <div>
                      <span className="text-[8px] font-semibold text-[#0796A8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-[#071923] text-[11px] font-semibold mt-1">
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

        {/* RELATED SERVICES */}

        <section
          aria-labelledby="backend-related-heading"
          className="py-10 md:py-12 bg-white border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="backend-related-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  Supporting your complete application.
                </h2>
              </div>

              <Link
                to="/allservices"
                onClick={scrollTop}
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#07899a]"
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
                  className="group rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <span className="text-[8px] tracking-[0.15em] font-semibold text-[#0796A8]">
                    {service.label}
                  </span>

                  <h3 className="text-[#071923] text-[14px] font-semibold mt-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-2">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[9px] font-medium text-slate-500 group-hover:text-[#07899a]">
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

        {/* FAQ */}

        <section
          aria-labelledby="backend-faq-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="backend-faq-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  Backend and API questions clients ask.
                </h2>
              </div>

              <a
                href="#backend-project-enquiry"
                className="self-start md:self-auto inline-flex items-center gap-2 rounded-lg bg-[#071923] px-4 py-2.5 text-[10px] font-semibold text-white"
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
                      aria-controls={`backend-faq-${index}`}
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
                      id={`backend-faq-${index}`}
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
                  className="inline-flex items-center gap-2 rounded-lg border border-[#071923]/15 bg-white px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:border-[#0796A8]/50 transition-colors"
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
          id="backend-project-enquiry"
          aria-labelledby="backend-project-enquiry-heading"
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
                <SectionLabel light>Start a Backend Project</SectionLabel>

                <h2
                  id="backend-project-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us what your{" "}
                  <span className="text-[#25bfce]">
                    application needs behind the interface.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share the application, users, APIs, database requirements
                  and integrations you need. We can review the requirements
                  and discuss the appropriate backend approach.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "REST and application APIs",
                    "Authentication and permissions",
                    "Databases and business logic",
                    "Payments and third-party integrations",
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
                    Prefer a direct conversation?
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

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.1] bg-[#0a202a]/90 p-5 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="backend-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="backend-name"
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
                      htmlFor="backend-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="backend-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="backend-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="backend-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="backend-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="backend-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Backend & API Development</option>
                      <option>REST API Development</option>
                      <option>GraphQL API Development</option>
                      <option>Web Application Backend</option>
                      <option>Mobile App Backend</option>
                      <option>SaaS Backend</option>
                      <option>Database Development</option>
                      <option>API Integration</option>
                      <option>Existing Backend Improvement</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="backend-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="backend-timeline"
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
                      htmlFor="backend-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="backend-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your application, users, database, APIs, authentication and integrations..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    Share enough detail for us to understand the backend
                    requirements. Technical scope can be discussed in more
                    detail afterwards.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send Backend Enquiry
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
                  Need a reliable backend? We’re ready to build it.
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  APIs, databases, authentication and backend systems by
                  DevZore.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex self-start items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
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

export default BackendApi;