import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
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
  Mail,
  Minus,
  Monitor,
  Plus,
  RefreshCw,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  TestTube2,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const ReactDevelopment = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "React Development",
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
     REACT SERVICES
  ========================================================= */

  const whatWeBuild = [
    {
      icon: <Monitor size={21} />,
      number: "01",
      title: "React Web Development",
      desc:
        "Custom React web development for responsive, interactive and maintainable business websites and web applications.",
      points: [
        "Reusable components",
        "Responsive interfaces",
        "Modern frontend architecture",
      ],
    },
    {
      icon: <Code2 size={21} />,
      number: "02",
      title: "React Application Development",
      desc:
        "React application development for business software, customer portals, internal tools and interactive products.",
      points: [
        "Business applications",
        "API integration",
        "Interactive workflows",
      ],
    },
    {
      icon: <TrendingUp size={21} />,
      number: "03",
      title: "React SaaS Development",
      desc:
        "React SaaS interfaces for onboarding, account management, subscriptions, dashboards and product workflows.",
      points: [
        "SaaS interfaces",
        "Account workflows",
        "Dashboard development",
      ],
    },
    {
      icon: <BarChart3 size={21} />,
      number: "04",
      title: "React Dashboard Development",
      desc:
        "Custom dashboards and administration panels with charts, tables, filters, forms, permissions and business data.",
      points: [
        "Charts & reporting",
        "Data tables",
        "Admin interfaces",
      ],
    },
    {
      icon: <ShoppingCart size={21} />,
      number: "05",
      title: "React E-Commerce Development",
      desc:
        "React commerce interfaces for product catalogues, search, filters, carts, customer accounts and checkout integrations.",
      points: [
        "Product interfaces",
        "Cart workflows",
        "Checkout integration",
      ],
    },
    {
      icon: <Layers3 size={21} />,
      number: "06",
      title: "React UI Development",
      desc:
        "Reusable React UI components, responsive layouts, design systems and consistent interface patterns.",
      points: [
        "Component systems",
        "Responsive layouts",
        "Design consistency",
      ],
    },
    {
      icon: <RefreshCw size={21} />,
      number: "07",
      title: "React Migration & Modernisation",
      desc:
        "Modernise legacy frontend applications through React migration, component refactoring, hooks and TypeScript.",
      points: [
        "Legacy migration",
        "Component refactoring",
        "TypeScript adoption",
      ],
    },
    {
      icon: <Server size={21} />,
      number: "08",
      title: "React API Integration",
      desc:
        "Connect React applications with REST APIs, GraphQL services, authentication systems and third-party platforms.",
      points: [
        "REST APIs",
        "Authentication",
        "Third-party services",
      ],
    },
    {
      icon: <Smartphone size={21} />,
      number: "09",
      title: "Responsive React Development",
      desc:
        "Responsive React interfaces developed for desktop, tablet and mobile screens with adaptive layouts.",
      points: [
        "Mobile responsive",
        "Tablet layouts",
        "Desktop interfaces",
      ],
    },
  ];

  /* =========================================================
     PROJECT TYPES
  ========================================================= */

  const services = [
    {
      icon: <Code2 size={19} />,
      title: "Custom React Development",
      desc:
        "Purpose-built React frontend development around product functionality, workflows, APIs and interface requirements.",
    },
    {
      icon: <Monitor size={19} />,
      title: "React Website Development",
      desc:
        "Responsive React websites with reusable sections, dynamic content and backend integrations.",
    },
    {
      icon: <Workflow size={19} />,
      title: "Single-Page Applications",
      desc:
        "React SPAs with client-side routing, authentication, dynamic data and application-style user experiences.",
    },
    {
      icon: <Users size={19} />,
      title: "React Portal Development",
      desc:
        "Customer, employee, partner and internal business portals with role-based interfaces.",
    },
    {
      icon: <Layers3 size={19} />,
      title: "React Component Development",
      desc:
        "Reusable components and design systems for consistent and maintainable frontend development.",
    },
    {
      icon: <Rocket size={19} />,
      title: "React MVP Development",
      desc:
        "Focused React frontend development for startup MVPs with essential workflows and API integration.",
    },
  ];

  /* =========================================================
     WHY REACT
  ========================================================= */

  const whyReact = [
    {
      icon: <Boxes size={19} />,
      title: "Component-Based Architecture",
      desc:
        "Reusable React components help maintain consistency and reduce duplicated frontend code.",
    },
    {
      icon: <Zap size={19} />,
      title: "Interactive Interfaces",
      desc:
        "React works well for dashboards, forms, workflows and frequently changing application states.",
    },
    {
      icon: <Code2 size={19} />,
      title: "TypeScript Friendly",
      desc:
        "React works effectively with TypeScript for typed components and clearer application models.",
    },
    {
      icon: <Database size={19} />,
      title: "Modern Data Management",
      desc:
        "Server data, caching and application state can be organised using modern React data-management tools.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Performance Optimisation",
      desc:
        "Code splitting, lazy loading, rendering improvements and asset optimisation can improve application performance.",
    },
    {
      icon: <Globe2 size={19} />,
      title: "Broad Ecosystem",
      desc:
        "React integrates with APIs, backend technologies, UI libraries, testing tools and deployment platforms.",
    },
  ];

  /* =========================================================
     QUALITY
  ========================================================= */

  const qualityAreas = [
    {
      icon: <Gauge size={19} />,
      title: "React Performance",
      desc:
        "Bundle analysis, lazy loading, code splitting and rendering optimisation based on application requirements.",
    },
    {
      icon: <Accessibility size={19} />,
      title: "Accessibility",
      desc:
        "Semantic HTML, keyboard interactions, focus handling and accessible component patterns where appropriate.",
    },
    {
      icon: <TestTube2 size={19} />,
      title: "React Testing",
      desc:
        "Unit, component and end-to-end testing strategies for important application behaviour and workflows.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "Frontend Security",
      desc:
        "Careful handling of authentication state, user input, API communication and environment configuration.",
    },
    {
      icon: <Boxes size={19} />,
      title: "Maintainable Code",
      desc:
        "Reusable components, organised project structure and consistent coding patterns for ongoing development.",
    },
    {
      icon: <RefreshCw size={19} />,
      title: "Scalable Architecture",
      desc:
        "Frontend architecture organised so new screens, features and integrations can be added efficiently.",
    },
  ];

  /* =========================================================
     TECHNOLOGY
  ========================================================= */

  const techStack = [
    {
      category: "Core",
      items: ["React.js", "JavaScript", "TypeScript", "JSX"],
    },
    {
      category: "Routing",
      items: ["React Router", "SPA Routing", "Protected Routes"],
    },
    {
      category: "State & Data",
      items: ["TanStack Query", "Redux Toolkit", "Zustand", "Context API"],
    },
    {
      category: "UI",
      items: ["Tailwind CSS", "Responsive UI", "Component Systems"],
    },
    {
      category: "APIs",
      items: ["REST APIs", "GraphQL", "Axios", "Fetch API"],
    },
    {
      category: "Deployment",
      items: ["Vite", "Vercel", "GitHub", "CI/CD"],
    },
  ];

  /* =========================================================
     PROCESS
  ========================================================= */

  const process = [
    {
      number: "01",
      title: "Project Discovery",
      desc:
        "We review product requirements, target users, frontend functionality, APIs and business workflows.",
    },
    {
      number: "02",
      title: "Frontend Architecture",
      desc:
        "Routing, reusable components, application structure, state management and integrations are planned.",
    },
    {
      number: "03",
      title: "React UI Development",
      desc:
        "Application screens and workflows are developed using reusable React components and responsive layouts.",
    },
    {
      number: "04",
      title: "API & Backend Integration",
      desc:
        "React features are connected to backend APIs with authentication, loading states, validation and error handling.",
    },
    {
      number: "05",
      title: "Testing & Optimisation",
      desc:
        "Important workflows are reviewed for functionality, responsiveness, accessibility and frontend performance.",
    },
    {
      number: "06",
      title: "Deployment & Handover",
      desc:
        "The application is prepared for production deployment, environment configuration and project handover.",
    },
  ];

  /* =========================================================
     USE CASES
  ========================================================= */

  const useCases = [
    "SaaS Frontends",
    "Business Dashboards",
    "Admin Panels",
    "Customer Portals",
    "Single-Page Applications",
    "E-Commerce Interfaces",
    "Startup MVPs",
    "Internal Business Tools",
    "Booking Platforms",
    "Management Systems",
    "Analytics Applications",
    "Custom Web Products",
  ];

  /* =========================================================
     FAQ
  ========================================================= */

  const faqs = [
    {
      q: "What React development services does DevZore provide?",
      a:
        "DevZore provides React development services for custom web applications, React websites, SaaS frontends, dashboards, admin panels, customer portals, e-commerce interfaces, component systems, API integrations and existing React application improvements.",
    },
    {
      q: "Why hire a React development company?",
      a:
        "A React development company can handle frontend architecture, reusable components, API integration, responsive UI, application state, testing and deployment as part of one structured development workflow.",
    },
    {
      q: "Can I hire a React developer from DevZore?",
      a:
        "Yes. DevZore provides React development for complete projects, individual product features and ongoing frontend requirements.",
    },
    {
      q: "What is React.js development?",
      a:
        "React.js development is the process of building component-based web interfaces using React. It can be used for websites, single-page applications, dashboards, SaaS products, portals and interactive web applications.",
    },
    {
      q: "Do you provide custom React development?",
      a:
        "Yes. DevZore provides custom React development based on the workflows, interface requirements, backend systems and integrations of each product.",
    },
    {
      q: "Can you build a React web application?",
      a:
        "Yes. React web applications can include reusable components, routing, forms, authentication, dashboards, APIs and responsive layouts.",
    },
    {
      q: "Do you provide React website development?",
      a:
        "Yes. React can be used to develop responsive business websites and interactive web experiences. Depending on SEO and rendering requirements, React may also be combined with suitable frameworks.",
    },
    {
      q: "Can you build a React admin dashboard?",
      a:
        "Yes. React dashboards can include data tables, charts, filters, forms, authentication, permissions and API-driven business data.",
    },
    {
      q: "Can React be used for SaaS development?",
      a:
        "Yes. React is suitable for SaaS frontend development including onboarding, account settings, team management, dashboards and interactive software workflows.",
    },
    {
      q: "Do you provide React e-commerce development?",
      a:
        "Yes. React e-commerce development can include product catalogues, filters, search, carts, customer accounts and backend integrations.",
    },
    {
      q: "What is the difference between React and Next.js?",
      a:
        "React is a JavaScript library for building component-based interfaces. Next.js is a React framework that adds features such as routing and multiple rendering approaches.",
    },
    {
      q: "Do you use TypeScript with React?",
      a:
        "Yes. TypeScript can be used with React for typed components, application models and clearer contracts between frontend and backend code.",
    },
    {
      q: "Can you connect React to an existing backend API?",
      a:
        "Yes. React applications can integrate with REST or GraphQL APIs including authentication, data fetching, forms, loading states and error handling.",
    },
    {
      q: "Can React work with Node.js, Express and MongoDB?",
      a:
        "Yes. React is commonly used as the frontend of MERN applications, with Node.js and Express handling backend APIs and MongoDB storing application data.",
    },
    {
      q: "Can you improve an existing React application?",
      a:
        "Yes. Existing React applications can be reviewed for component refactoring, TypeScript adoption, state management, routing, API integration and performance improvements.",
    },
    {
      q: "Do you provide React migration services?",
      a:
        "Yes. Depending on the existing system, frontend applications can be migrated or progressively modernised using React, reusable components and TypeScript.",
    },
    {
      q: "How do you optimise React application performance?",
      a:
        "Performance work may include reducing unnecessary renders, lazy loading, code splitting, bundle analysis, asset optimisation and reviewing third-party dependencies.",
    },
    {
      q: "Do you test React applications?",
      a:
        "Testing can include unit tests, component tests and end-to-end tests for important workflows depending on project requirements.",
    },
    {
      q: "How much does React development cost?",
      a:
        "React development cost depends on the number of screens, UI complexity, backend requirements, authentication, integrations and testing.",
    },
    {
      q: "How long does React application development take?",
      a:
        "The timeline depends on product scope, number of screens, feature complexity, API readiness, integrations and design requirements.",
    },
    {
      q: "Do you provide React source code?",
      a:
        "Source-code ownership and handover terms can be defined in the project agreement. Deliverables can include the agreed React source code and documentation.",
    },
    {
      q: "Do you provide React development services worldwide?",
      a:
        "Yes. DevZore provides remote React development services for startups, founders and businesses.",
    },
  ];

  /* =========================================================
     RELATED SERVICES
  ========================================================= */

  const relatedServices = [
    {
      label: "FULL STACK",
      title: "MERN Stack Development",
      desc:
        "MongoDB, Express, React and Node.js development for complete web applications.",
      path: "/mern-stack-development",
    },
    {
      label: "BACKEND",
      title: "Backend & API Development",
      desc:
        "Backend systems, APIs, databases and integrations for React applications.",
      path: "/backend-api",
    },
    {
      label: "PRODUCT",
      title: "SaaS Product Development",
      desc:
        "Custom SaaS products with React dashboards, authentication and backend systems.",
      path: "/saas-product-development",
    },
    {
      label: "DESIGN",
      title: "UI/UX Design",
      desc:
        "User flows, application interfaces and reusable product design systems.",
      path: "/ui-ux-design",
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
      `React Development Enquiry - ${formData.name}`
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
    "@id": "https://devzore.com/reactdevelopment#service",
    name: "React Development Services",
    url: "https://devzore.com/reactdevelopment",
    serviceType: "React Development",
    description:
      "Custom React development services for web applications, websites, SaaS frontends, dashboards, portals, e-commerce interfaces, UI development and API integration.",
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
      name: "React Development Services",
      itemListElement: whatWeBuild.map((service) => ({
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
        name: "React Development",
        item: "https://devzore.com/reactdevelopment",
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
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          aria-labelledby="react-heading"
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

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-23 sm:pt-24 lg:pt-24 pb-12 sm:pb-14">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
              {/* LEFT */}

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5]">
                    <CircleCheck
                      size={14}
                      className="text-[#26becb]"
                    />
                    React Development
                  </div>
                </div>

                <h1
                  id="react-heading"
                  className="max-w-[790px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[54px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  React applications built for{" "}
                  <span className="text-[#22bdca]">
                    real products and users.
                  </span>
                </h1>

                <p className="max-w-[700px] mt-5 text-[16px] sm:text-[13.5px] leading-7 text-slate-300">
                  DevZore develops React websites, web applications, SaaS
                  frontends, dashboards and business interfaces using reusable
                  components and modern frontend architecture.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  From responsive interfaces and frontend architecture to API
                  integrations, authentication and application workflows, we
                  build React products around real technical requirements.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#react-project-enquiry"
                    className="inline-flex justify-center items-center gap-2.5 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start Your React Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#react-development-services"
                    className="inline-flex justify-center items-center gap-2.5 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore React Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "React.js",
                    "TypeScript",
                    "Responsive UI",
                    "API Integration",
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

              {/* REACT VISUAL */}

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
                            <Code2
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
                              ["Components", "48"],
                              ["Routes", "12"],
                              ["APIs", "18"],
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
                                Application Activity
                              </p>

                              <div className="flex items-end gap-2 h-20 mt-3">
                                {[35, 55, 43, 74, 58, 86, 68, 94].map(
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
                                Components
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
                      <Boxes
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Components
                      </p>
                    </div>

                    <div className="absolute -right-5 top-16 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Zap
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Performance
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Server
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        API Ready
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
                  ["01", "React Apps"],
                  ["02", "SaaS Frontends"],
                  ["03", "Dashboards"],
                  ["04", "Custom UI"],
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

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section
          className="relative py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>React Development</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  More than components.{" "}
                  <span className="text-[#0796A8]">
                    A complete frontend experience.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  A professional React application needs more than a collection
                  of screens. Routing, state, APIs, reusable components and
                  frontend architecture all affect how the product works and
                  grows.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  DevZore develops React interfaces around the real product
                  workflow, whether that is a SaaS application, dashboard,
                  portal, e-commerce interface or custom business system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="react-development-services"
          aria-labelledby="react-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>What We Build</SectionLabel>

              <h2
                id="react-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                React development built around your product requirements.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                From responsive websites to complex software interfaces, the
                frontend structure is adapted around the users, backend and
                functionality of each project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatWeBuild.map((service) => (
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

        {/* =====================================================
            PROJECT TYPES
        ===================================================== */}

        <section
          aria-labelledby="react-project-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
              <div>
                <SectionLabel>React Solutions</SectionLabel>

                <h2
                  id="react-project-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  React solutions for{" "}
                  <span className="text-[#0796A8]">
                    different product requirements.
                  </span>
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-4">
                  React can support many types of frontend products, from
                  business interfaces and portals to complex SaaS applications.
                </p>

                <a
                  href="#react-project-enquiry"
                  className="inline-flex items-center gap-2 mt-5 text-[11px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss Your React Project
                  <ArrowRight size={13} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((item) => (
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

        {/* =====================================================
            WHY REACT
        ===================================================== */}

        <section
          aria-labelledby="why-react-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel light>Why React</SectionLabel>

              <h2
                id="why-react-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                A flexible frontend foundation{" "}
                <span className="text-[#25bfce]">
                  for modern applications.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                React provides a component-based approach that works well for
                interactive software, dashboards, portals and evolving
                products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {whyReact.map((item) => (
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

        {/* =====================================================
            QUALITY
        ===================================================== */}

        <section
          aria-labelledby="react-quality-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Development Quality</SectionLabel>

              <h2
                id="react-quality-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Frontend quality beyond how the interface looks.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Performance, accessibility, testing and maintainability all
                influence how reliable a React product becomes over time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {qualityAreas.map((item) => (
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

                  <p className="text-slate-500 text-[11px] leading-5 mt-1.5">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY
        ===================================================== */}

        <section
          aria-labelledby="react-tech-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Technology Stack</SectionLabel>

              <h2
                id="react-tech-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Modern frontend tools for React applications.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Tools are selected according to routing, data, interface,
                backend and deployment requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {techStack.map((category) => (
                <article
                  key={category.category}
                  className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/35 transition-colors"
                >
                  <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#07899a]">
                    {category.category}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-[#f8fafb] px-2.5 py-1.5 text-[10px] font-medium text-slate-600"
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
          aria-labelledby="react-process-heading"
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
                id="react-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From frontend requirements{" "}
                <span className="text-[#25bfce]">
                  to a production React application.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured React workflow keeps architecture, development,
                integrations, testing and deployment organised.
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

        {/* =====================================================
            USE CASES
        ===================================================== */}

        <section
          aria-labelledby="react-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>React Use Cases</SectionLabel>

                <h2
                  id="react-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Different products. Different frontend requirements.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  React architecture can be adapted around each product's
                  screens, data, workflows and backend integrations.
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

        {/* =====================================================
            RELATED SERVICES
        ===================================================== */}

        <section
          aria-labelledby="react-related-heading"
          className="py-10 md:py-12 bg-white border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="react-related-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  Supporting your complete web application.
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

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          aria-labelledby="react-faq-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="react-faq-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  React development questions clients ask.
                </h2>
              </div>

              <a
                href="#react-project-enquiry"
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
                      aria-controls={`react-faq-${index}`}
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
                      id={`react-faq-${index}`}
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

        {/* =====================================================
            PROJECT ENQUIRY
        ===================================================== */}

        <section
          id="react-project-enquiry"
          aria-labelledby="react-project-enquiry-heading"
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
                <SectionLabel light>Start a React Project</SectionLabel>

                <h2
                  id="react-project-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us what you{" "}
                  <span className="text-[#25bfce]">
                    want to build with React.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share your product idea, screens, backend requirements and
                  important frontend workflows. We can review the project and
                  discuss the appropriate React architecture.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "React applications and dashboards",
                    "SaaS frontend development",
                    "API and backend integrations",
                    "Existing React improvements",
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
                      htmlFor="react-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="react-name"
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
                      htmlFor="react-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="react-email"
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
                      htmlFor="react-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="react-company"
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
                      htmlFor="react-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="react-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>React Development</option>
                      <option>React Web Application</option>
                      <option>React Dashboard</option>
                      <option>React SaaS Frontend</option>
                      <option>React Website</option>
                      <option>React E-Commerce</option>
                      <option>React Migration</option>
                      <option>Existing React Improvement</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="react-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="react-timeline"
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
                      htmlFor="react-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="react-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your product, required screens, backend/API, users and important React functionality..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    Share enough detail for us to understand the application.
                    Technical requirements and scope can be discussed in more
                    detail afterwards.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send React Enquiry
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
                  Need a React application? We’re ready to build it.
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  React applications, dashboards, SaaS frontends and custom
                  interfaces by DevZore.
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

export default ReactDevelopment;