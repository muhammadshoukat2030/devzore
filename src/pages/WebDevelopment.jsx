import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Globe,
  ArrowRight,
  CheckCircle,
  Database,
  Monitor,
  Zap,
  Search,
  Layers,
  RefreshCw,
  Code2,
  Settings,
  Lock,
  Clock,
  Shield,
  Plus,
  Minus,
  Server,
  TrendingUp,
  Smartphone,
} from "lucide-react";

const WebDevelopment = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  /* =====================================================
     WHAT WE BUILD
  ===================================================== */

  const whatWeBuild = [
    {
      icon: <Database size={22} />,
      color: "blue",
      title: "Business Web Applications & Internal Tools",
      desc: "Custom CRM systems, HR platforms, inventory tools, project management systems and internal dashboards designed around your business workflows.",
    },
    {
      icon: <Monitor size={22} />,
      color: "purple",
      title: "Corporate & Business Websites",
      desc: "Professional business websites and landing pages built with modern technologies, responsive layouts, clean architecture and search-friendly foundations.",
    },
    {
      icon: <Zap size={22} />,
      color: "yellow",
      title: "E-Commerce & Marketplace Platforms",
      desc: "Custom e-commerce storefronts, B2B ordering systems and marketplace solutions with payment, product, inventory and order-management integrations.",
    },
    {
      icon: <Search size={22} />,
      color: "green",
      title: "Analytics Dashboards & Data Platforms",
      desc: "Reporting interfaces, business dashboards and data visualisation platforms with filtering, charts, role-based access and export capabilities.",
    },
    {
      icon: <Layers size={22} />,
      color: "orange",
      title: "SaaS Products & Subscription Platforms",
      desc: "SaaS applications with authentication, subscriptions, dashboards, user management, permissions and scalable backend architecture.",
    },
    {
      icon: <RefreshCw size={22} />,
      color: "gray",
      title: "Legacy System Modernisation",
      desc: "Modernisation of older websites and applications using current frontend and backend technologies while preserving important business data and workflows.",
    },
  ];

  /* =====================================================
     TECHNOLOGY STACK
  ===================================================== */

  const techStack = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "GraphQL",
        "Socket.io",
      ],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma ORM"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Vercel", "DigitalOcean", "Docker", "GitHub Actions"],
    },
    {
      category: "Payments",
      items: ["Stripe", "PayPal", "JazzCash", "Easypaisa", "Razorpay"],
    },
    {
      category: "SEO & Performance",
      items: [
        "Core Web Vitals",
        "Structured Data",
        "Technical SEO",
        "CDN",
        "SSR / SSG",
      ],
    },
  ];

  /* =====================================================
     PROCESS
  ===================================================== */

  const process = [
    {
      n: "01",
      title: "Discovery & Project Scoping",
      desc: "We discuss your business goals, users, required features, workflows, integrations and technical requirements before development begins.",
    },
    {
      n: "02",
      title: "Architecture & Technology Planning",
      desc: "We select an appropriate frontend, backend, database and deployment approach based on the requirements and expected growth of the project.",
    },
    {
      n: "03",
      title: "UI/UX Design & Prototyping",
      desc: "Important screens, layouts and user flows can be designed and reviewed before development so the product direction is clear.",
    },
    {
      n: "04",
      title: "Development",
      desc: "The approved product is developed using reusable components, maintainable code and structured frontend and backend architecture.",
    },
    {
      n: "05",
      title: "Testing & Optimisation",
      desc: "We test important functionality, responsive layouts, browser compatibility, security considerations and performance before launch.",
    },
    {
      n: "06",
      title: "Deployment & Support",
      desc: "The application is prepared for production deployment, and ongoing maintenance or technical support can be provided based on project requirements.",
    },
  ];

  /* =====================================================
     WHY DEVZORE
  ===================================================== */

  const whyUs = [
    {
      icon: <Code2 size={16} />,
      title: "Modern Development Stack",
      desc: "We use modern frontend and backend technologies selected around the requirements of each project.",
    },
    {
      icon: <Shield size={16} />,
      title: "Source Code Ownership",
      desc: "Project source code and agreed deliverables are handed over according to the project agreement, helping you maintain control of your software.",
    },
    {
      icon: <Zap size={16} />,
      title: "Performance Focus",
      desc: "We consider page speed, responsive design, asset optimisation and Core Web Vitals throughout development.",
    },
    {
      icon: <Lock size={16} />,
      title: "Security-Conscious Development",
      desc: "Authentication, validation, permissions, secure configuration and other security practices are considered according to project requirements.",
    },
    {
      icon: <Settings size={16} />,
      title: "Maintainable Architecture",
      desc: "Projects are structured around reusable components, clear application logic and technologies that can be maintained as the product evolves.",
    },
    {
      icon: <Clock size={16} />,
      title: "Clear Communication",
      desc: "We keep project requirements, progress, feedback and deliverables organised so clients can understand how development is moving forward.",
    },
  ];

  /* =====================================================
     FAQ
  ===================================================== */

  const faqs = [
    {
      q: "How much does custom web development cost?",
      a: "The cost depends on your project requirements, number of features, design complexity, integrations and backend requirements. After reviewing your project, DevZore can provide a proposal with the expected scope, deliverables and estimated timeline.",
    },
    {
      q: "How long does a web development project take?",
      a: "Development time depends on the size and complexity of the project. A business website generally requires less time than a custom dashboard, marketplace or SaaS platform. We estimate the timeline after understanding the required features and workflows.",
    },
    {
      q: "What is the difference between a website and a web application?",
      a: "A website primarily presents information and content, while a web application usually includes interactive functionality such as accounts, dashboards, forms, databases, workflows, bookings or other user-driven features. DevZore can develop both.",
    },
    {
      q: "Do you build SEO-friendly websites?",
      a: "Yes. SEO considerations can include semantic HTML, responsive design, page performance, structured data, canonical URLs, XML sitemaps, metadata and search-friendly rendering depending on the technology and project requirements.",
    },
    {
      q: "Can you build scalable web applications?",
      a: "Yes. Application architecture can be planned around expected traffic, database requirements, caching, APIs, deployment infrastructure and future product growth.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes. DevZore can work remotely with businesses and clients internationally, using online communication, project-management and collaboration tools throughout the project.",
    },
    {
      q: "Do you use React or Next.js for web development?",
      a: "We can use React or Next.js depending on the project. React is well suited to interactive applications and dashboards, while Next.js provides additional rendering and routing options that can be useful for content-heavy and search-focused websites.",
    },
    {
      q: "Will I receive the source code?",
      a: "Source-code ownership and handover are defined as part of the project agreement. DevZore can provide the repository, agreed project assets and technical handover required for continued maintenance and development.",
    },
  ];

  /* =====================================================
     RELATED SERVICES
  ===================================================== */

  const relatedServices = [
    {
      badge: "Full Stack",
      icon: <Code2 size={21} />,
      title: "MERN Stack Development",
      subtitle: "MongoDB · Express · React · Node",
      description:
        "Full-stack JavaScript development for business applications, dashboards and modern digital products.",
      points: [
        "Frontend & backend development",
        "Database integration",
        "Authentication & APIs",
      ],
      path: "/mern-stack-development",
      color: "purple",
    },
    {
      badge: "Backend",
      icon: <Server size={21} />,
      title: "Backend & API Development",
      subtitle: "Node.js · Express · REST APIs",
      description:
        "Backend systems and APIs for web applications, mobile apps and third-party integrations.",
      points: [
        "REST API development",
        "Authentication & permissions",
        "Database architecture",
      ],
      path: "/backend-api",
      color: "orange",
    },
    {
      badge: "Product",
      icon: <TrendingUp size={21} />,
      title: "SaaS Product Development",
      subtitle: "Dashboards · Billing · SaaS",
      description:
        "End-to-end development for SaaS platforms with users, dashboards, subscriptions and business workflows.",
      points: [
        "SaaS architecture",
        "Subscription workflows",
        "Admin dashboards",
      ],
      path: "/saas-product-development",
      color: "blue",
    },
  ];

  /* =====================================================
     COLOR MAP
  ===================================================== */

  const colorMap = {
    blue: d
      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
      : "bg-blue-50 border-blue-100 text-blue-600",

    purple: d
      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
      : "bg-purple-50 border-purple-100 text-purple-600",

    yellow: d
      ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
      : "bg-yellow-50 border-yellow-100 text-yellow-600",

    green: d
      ? "bg-green-500/10 border-green-500/20 text-green-400"
      : "bg-green-50 border-green-100 text-green-600",

    orange: d
      ? "bg-orange-500/10 border-orange-500/20 text-orange-400"
      : "bg-orange-50 border-orange-100 text-orange-600",

    gray: d
      ? "bg-white/[0.06] border-white/[0.1] text-gray-400"
      : "bg-gray-100 border-gray-200 text-gray-600",
  };

  /* =====================================================
     STRUCTURED DATA
  ===================================================== */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/web-development#service",
    name: "Web Development Services",
    description:
      "Custom web development services for business websites, web applications, SaaS platforms, e-commerce systems and digital products.",
    url: "https://devzore.com/web-development",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      "@id": "https://devzore.com/#organization",
      name: "DevZore",
      url: "https://devzore.com/",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: whatWeBuild.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.desc,
        },
      })),
    },
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
        name: "Web Development",
        item: "https://devzore.com/web-development",
      },
    ],
  };

  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
          Title/meta/canonical are managed centrally in App.jsx
      ===================================================== */}

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main
        className={`min-h-screen transition-colors duration-300 ${
          d ? "bg-[#030303]" : "bg-white"
        }`}
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          aria-labelledby="webdev-heading"
          className={`pt-28 pb-14 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${
                      d
                        ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                        : "bg-purple-50 border-purple-200 text-purple-700"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Web Development
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? "bg-green-500/10 border-green-500/20 text-green-400"
                        : "bg-green-50 border-green-200 text-green-700"
                    }`}
                  >
                    <Globe size={11} />
                    Worldwide Clients
                  </div>
                </div>

                <h1
                  id="webdev-heading"
                  className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Custom Web Development{" "}
                  <span className="text-purple-600">
                    Built for Modern Businesses
                  </span>
                </h1>

                <p
                  className={`text-lg font-semibold mb-5 ${
                    d ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  React · Next.js · Node.js · APIs · Business Applications
                </p>

                <p
                  className={`text-base leading-relaxed mb-5 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  DevZore builds professional websites and custom web
                  applications for startups and businesses. From corporate
                  websites and dashboards to e-commerce systems and SaaS
                  products, we develop digital solutions around real business
                  requirements.
                </p>

                <p
                  className={`text-base leading-relaxed mb-8 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Our development approach focuses on responsive interfaces,
                  maintainable architecture, performance, security and
                  search-friendly foundations so your product is prepared for
                  long-term use and growth.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Get a Web Development Quote
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20would%20like%20to%20discuss%20a%20web%20development%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* CAPABILITIES */}

              <div
                className={`p-7 md:p-8 rounded-3xl border ${
                  d
                    ? "bg-white/[0.02] border-white/[0.06]"
                    : "bg-[#fafafa] border-gray-200"
                }`}
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-widest mb-6 ${
                    d ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Web Development Capabilities
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Business Websites",
                      desc: "Responsive and professionally structured company websites",
                    },
                    {
                      title: "Custom Web Applications",
                      desc: "Dashboards, portals, management systems and internal tools",
                    },
                    {
                      title: "E-Commerce Platforms",
                      desc: "Products, orders, payments and business workflows",
                    },
                    {
                      title: "SaaS Applications",
                      desc: "Authentication, subscriptions, dashboards and user management",
                    },
                    {
                      title: "Backend & API Integration",
                      desc: "REST APIs, databases and third-party service integrations",
                    },
                    {
                      title: "Performance Optimisation",
                      desc: "Responsive delivery, asset optimisation and Core Web Vitals",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-3 pb-4 border-b last:border-0 ${
                        d ? "border-white/[0.05]" : "border-gray-100"
                      }`}
                    >
                      <CheckCircle
                        size={14}
                        className="text-purple-500 flex-shrink-0 mt-0.5"
                      />

                      <div>
                        <p
                          className={`text-[13px] font-bold ${
                            d ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.title}
                        </p>

                        <p
                          className={`text-[11px] leading-relaxed ${
                            d ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-5 p-3 rounded-xl ${
                    d ? "bg-purple-600/5" : "bg-purple-50"
                  }`}
                >
                  <p
                    className={`text-[11px] font-semibold text-center ${
                      d ? "text-purple-400" : "text-purple-700"
                    }`}
                  >
                    Available for remote web development projects worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE BUILD
        ===================================================== */}

        <section
          aria-labelledby="whatwebuild-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${
                  d
                    ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                    : "bg-purple-50 border-purple-200 text-purple-700"
                }`}
              >
                What We Build
              </div>

              <h2
                id="whatwebuild-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Web Development Solutions for Different Business Needs
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We build websites and web applications around the workflows,
                users and technical requirements of each project instead of
                relying on a one-size-fits-all solution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeBuild.map((item) => (
                <article
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/25 hover:bg-white/[0.04]"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${
                      colorMap[item.color]
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TECH STACK
        ===================================================== */}

        <section
          aria-labelledby="techstack-heading"
          className={`py-16 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="techstack-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Web Development Technology Stack
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Modern technologies selected according to your application's
                functionality, performance and maintainability requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {techStack.map((cat) => (
                <div
                  key={cat.category}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-[#fafafa] border-gray-200"
                  }`}
                >
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3 text-purple-500">
                    {cat.category}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-lg border ${
                          d
                            ? "bg-white/[0.04] border-white/[0.08] text-gray-300"
                            : "bg-white border-gray-200 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY DEVZORE
        ===================================================== */}

        <section
          aria-labelledby="why-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${
                  d
                    ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                    : "bg-purple-50 border-purple-200 text-purple-700"
                }`}
              >
                Why DevZore
              </div>

              <h2
                id="why-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                A Practical Approach to Web Development
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We focus on building software that is clear to use,
                maintainable for developers and aligned with the requirements
                of the business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyUs.map((item) => (
                <article
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/20"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${
                      d
                        ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                        : "bg-purple-50 border-purple-100 text-purple-600"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section
          aria-labelledby="process-heading"
          className={`py-16 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 border ${
                  d
                    ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                    : "bg-purple-50 border-purple-200 text-purple-700"
                }`}
              >
                Our Process
              </div>

              <h2
                id="process-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                How Our Web Development Process Works
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                A structured process from initial requirements through
                development, testing and production deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map((step) => (
                <article
                  key={step.n}
                  className={`p-6 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-[#fafafa] border-gray-200"
                  }`}
                >
                  <div
                    className={`text-[13px] font-black mb-3 ${
                      d ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    {step.n}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-2 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-[13px] leading-relaxed ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            INDUSTRIES
        ===================================================== */}

        <section
          aria-labelledby="industries-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <h2
                id="industries-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Web Solutions for Different Industries
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Our technology stack can be adapted to different business
                models, workflows and digital product requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                {
                  name: "Real Estate & PropTech",
                  icon: "🏠",
                  desc: "Property portals & management",
                },
                {
                  name: "Healthcare",
                  icon: "🏥",
                  desc: "Portals & digital workflows",
                },
                {
                  name: "E-Commerce & Retail",
                  icon: "🛒",
                  desc: "Stores & marketplaces",
                },
                {
                  name: "Finance",
                  icon: "💳",
                  desc: "Dashboards & payment workflows",
                },
                {
                  name: "Education",
                  icon: "🎓",
                  desc: "Learning & management platforms",
                },
                {
                  name: "Logistics",
                  icon: "🚚",
                  desc: "Tracking & operations systems",
                },
                {
                  name: "Food & Restaurant",
                  icon: "🍽️",
                  desc: "Ordering & management systems",
                },
                {
                  name: "Travel & Hospitality",
                  icon: "✈️",
                  desc: "Booking & customer platforms",
                },
                {
                  name: "Construction",
                  icon: "🏗️",
                  desc: "Projects & reporting systems",
                },
                {
                  name: "HR & Business",
                  icon: "👥",
                  desc: "HR and internal tools",
                },
                {
                  name: "Organisations",
                  icon: "🌱",
                  desc: "Information & management systems",
                },
                {
                  name: "SaaS Products",
                  icon: "⚙️",
                  desc: "Subscription-based applications",
                },
              ].map((industry) => (
                <article
                  key={industry.name}
                  className={`p-4 rounded-xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.05]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <span className="text-xl block mb-1.5" aria-hidden="true">
                    {industry.icon}
                  </span>

                  <h3
                    className={`text-[12px] font-bold leading-tight ${
                      d ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {industry.name}
                  </h3>

                  <p
                    className={`text-[10px] mt-1 ${
                      d ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {industry.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          aria-labelledby="faq-heading"
          className={`py-16 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                id="faq-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Web Development FAQ
              </h2>

              <p
                className={`text-base ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Common questions about custom web development projects.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.q}
                    className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? d
                          ? "border-purple-500/40 bg-purple-600/5"
                          : "border-purple-200 bg-purple-50/50"
                        : d
                          ? "border-white/[0.06] bg-white/[0.02]"
                          : "border-gray-200 bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`web-faq-${index}`}
                      className="w-full p-5 text-left flex items-start justify-between gap-4"
                    >
                      <span
                        className={`text-[14px] font-bold ${
                          isOpen
                            ? "text-purple-500"
                            : d
                              ? "text-white"
                              : "text-gray-900"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${
                          isOpen
                            ? "bg-purple-600 text-white"
                            : d
                              ? "bg-white/[0.06] text-gray-500"
                              : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={13} />
                        ) : (
                          <Plus size={13} />
                        )}
                      </span>
                    </button>

                    <div
                      id={`web-faq-${index}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`px-5 pb-5 border-t text-[14px] leading-relaxed ${
                          d
                            ? "border-white/[0.06] text-gray-400"
                            : "border-purple-100 text-gray-600"
                        }`}
                      >
                        <p className="pt-4">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            RELATED SERVICES
        ===================================================== */}

        <section
          aria-labelledby="related-services-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-9">
              <p
                className={`text-[11px] font-black uppercase tracking-[0.18em] mb-3 ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Related Services
              </p>

              <h2
                id="related-services-heading"
                className={`text-2xl md:text-3xl font-black ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Explore Related Development Services
              </h2>

              <p
                className={`mt-3 text-sm max-w-2xl leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Explore additional DevZore services that can support the
                frontend, backend and product requirements of your project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((service) => {
                const styles = {
                  purple: {
                    badge: d
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                      : "bg-purple-50 border-purple-200 text-purple-600",
                    icon: d
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                      : "bg-purple-50 border-purple-100 text-purple-600",
                  },
                  orange: {
                    badge: d
                      ? "bg-orange-500/10 border-orange-500/20 text-orange-400"
                      : "bg-orange-50 border-orange-200 text-orange-600",
                    icon: d
                      ? "bg-orange-500/10 border-orange-500/20 text-orange-400"
                      : "bg-orange-50 border-orange-100 text-orange-600",
                  },
                  blue: {
                    badge: d
                      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                      : "bg-blue-50 border-blue-200 text-blue-600",
                    icon: d
                      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                      : "bg-blue-50 border-blue-100 text-blue-600",
                  },
                };

                const style = styles[service.color];

                return (
                  <article
                    key={service.path}
                    className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                      d
                        ? "bg-white/[0.02] border-white/[0.08] hover:border-purple-500/30"
                        : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    <span
                      className={`inline-flex px-3 py-1 rounded-full border text-[10px] font-black mb-5 ${style.badge}`}
                    >
                      {service.badge}
                    </span>

                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${style.icon}`}
                      >
                        {service.icon}
                      </div>

                      <div>
                        <h3
                          className={`text-[16px] font-black leading-tight ${
                            d ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <p
                          className={`text-[11px] font-semibold mt-1 ${
                            d ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p
                      className={`text-[13px] leading-6 mb-5 ${
                        d ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2.5"
                        >
                          <CheckCircle
                            size={14}
                            className="text-purple-500 flex-shrink-0"
                          />

                          <span
                            className={`text-[12px] ${
                              d ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 text-[13px] font-bold text-purple-500 hover:text-purple-400 transition-colors"
                    >
                      Learn more
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </article>
                );
              })}
            </div>

            <div className="mt-7 text-center">
              <Link
                to="/allservices"
                className={`inline-flex items-center gap-2 text-[13px] font-bold ${
                  d
                    ? "text-gray-400 hover:text-purple-400"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Explore All DevZore Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section
          aria-labelledby="web-development-cta"
          className="py-16"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div
              className={`p-8 md:p-10 rounded-3xl border text-center ${
                d
                  ? "bg-white/[0.02] border-white/[0.06]"
                  : "bg-[#fafafa] border-gray-200"
              }`}
            >
              <h2
                id="web-development-cta"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Ready to Build Your Web Project?
              </h2>

              <p
                className={`text-base mb-8 max-w-2xl mx-auto leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tell us about your website, web application or digital product.
                We can discuss your requirements, suitable technologies and the
                next steps for development.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                >
                  Discuss Your Project
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20would%20like%20to%20discuss%20a%20web%20development%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                >
                  WhatsApp
                </a>

                <Link
                  to="/allservices"
                  className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${
                    d
                      ? "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]"
                      : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  View All Services
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebDevelopment;