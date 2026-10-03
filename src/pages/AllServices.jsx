import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Server,
  Layers,
  Palette,
  Wrench,
  Rocket,
  Code2,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Plus,
  Minus,
  MessageSquare,
  Zap,
  LockKeyhole,
  Gauge,
  UsersRound,
  HeartHandshake,
} from "lucide-react";

const AllServices = ({ isDark = true }) => {
  const d = isDark;

  const [activeFilter, setActiveFilter] = useState("All");
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);

  const filters = ["All", "Web", "Mobile", "Backend", "Design", "Growth"];

  // =========================================================
  // SERVICES
  // =========================================================

  const services = [
    {
      icon: <Globe size={20} />,
      title: "Custom Web Development",
      subtitle: "React · Next.js · Node.js",
      path: "/web-development",
      filter: "Web",
      tag: "Web",
      tagColor: "purple",
      desc:
        "Custom websites and web applications built around your business requirements, with responsive interfaces, maintainable architecture and a strong focus on performance.",
      points: [
        "Responsive, mobile-first interfaces",
        "SEO-aware application structure",
        "Performance-focused development",
        "API and third-party integrations",
        "Deployment and production setup",
      ],
    },
    {
      icon: <Smartphone size={20} />,
      title: "Mobile App Development",
      subtitle: "React Native · iOS · Android",
      path: "/mobile-apps",
      filter: "Mobile",
      tag: "Cross-Platform",
      tagColor: "blue",
      desc:
        "Cross-platform mobile applications designed for practical business use cases, with modern interfaces, secure integrations and maintainable application architecture.",
      points: [
        "iOS and Android development",
        "Cross-platform React Native solutions",
        "API and backend integration",
        "Push notification integration",
        "App deployment support",
      ],
    },
    {
      icon: <ShoppingCart size={20} />,
      title: "E-Commerce Development",
      subtitle: "Stores · Payments · Admin Systems",
      path: "/ecommerce",
      filter: "Web",
      tag: "Commerce",
      tagColor: "green",
      desc:
        "Custom e-commerce solutions for businesses that need product management, secure checkout experiences, payment integrations, order workflows and administrative tools.",
      points: [
        "Product and category management",
        "Shopping cart and checkout flows",
        "Payment gateway integrations",
        "Inventory and order management",
        "Admin dashboards and reporting",
      ],
    },
    {
      icon: <Server size={20} />,
      title: "Backend & API Development",
      subtitle: "Node.js · Express · REST APIs",
      path: "/backend-api",
      filter: "Backend",
      tag: "Backend",
      tagColor: "orange",
      desc:
        "Backend systems and APIs designed for security, maintainability and scalability, including authentication, database integration and business logic.",
      points: [
        "REST API architecture",
        "Authentication and authorization",
        "MongoDB and database integration",
        "Validation and error handling",
        "API documentation and testing",
      ],
    },
    {
      icon: <Layers size={20} />,
      title: "MERN Stack Development",
      subtitle: "MongoDB · Express · React · Node.js",
      path: "/mern-stack-development",
      filter: "Web",
      tag: "Full Stack",
      tagColor: "purple",
      desc:
        "Full-stack JavaScript applications using MongoDB, Express, React and Node.js, covering frontend interfaces, backend logic, databases and deployment.",
      points: [
        "Frontend and backend development",
        "MongoDB database architecture",
        "Authentication and user roles",
        "REST API integration",
        "Production deployment",
      ],
    },
    {
      icon: <TrendingUp size={20} />,
      title: "SaaS Product Development",
      subtitle: "Subscriptions · Dashboards · SaaS",
      path: "/saas-product-development",
      filter: "Web",
      tag: "SaaS",
      tagColor: "indigo",
      desc:
        "SaaS product development for startups and businesses that need subscription workflows, dashboards, user management and scalable application architecture.",
      points: [
        "SaaS application architecture",
        "Subscription and billing integration",
        "User roles and permissions",
        "Business dashboards",
        "Scalable backend development",
      ],
    },
    {
      icon: <Palette size={20} />,
      title: "UI/UX Design",
      subtitle: "Figma · Prototypes · Design Systems",
      path: "/ui-ux-design",
      filter: "Design",
      tag: "Design",
      tagColor: "pink",
      desc:
        "User-focused interface and experience design for websites, dashboards, SaaS products and mobile applications, from wireframes to developer-ready designs.",
      points: [
        "Wireframes and user flows",
        "High-fidelity interface design",
        "Interactive prototypes",
        "Reusable design systems",
        "Developer-ready Figma handoff",
      ],
    },
    {
      icon: <Rocket size={20} />,
      title: "Startup MVP Development",
      subtitle: "Planning · MVP · Launch",
      path: "/startup-mvp",
      filter: "Growth",
      tag: "Startup",
      tagColor: "amber",
      desc:
        "Focused MVP development for founders who want to turn an idea into a usable product, validate core functionality and create a foundation for future development.",
      points: [
        "Feature planning and prioritisation",
        "MVP-focused product architecture",
        "Responsive product development",
        "Testing and deployment",
        "Post-launch iteration support",
      ],
    },
    {
      icon: <Wrench size={20} />,
      title: "Website Maintenance & Support",
      subtitle: "Updates · Security · Performance",
      path: "/maintenance",
      filter: "Growth",
      tag: "Support",
      tagColor: "gray",
      desc:
        "Ongoing technical support for websites and web applications, including updates, bug fixes, monitoring, performance improvements and maintenance.",
      points: [
        "Bug fixes and troubleshooting",
        "Dependency and software updates",
        "Performance reviews",
        "Backup and recovery planning",
        "Ongoing technical improvements",
      ],
    },
    {
      icon: <Code2 size={20} />,
      title: "React Development",
      subtitle: "React · Components · Modern Frontend",
      path: "/reactdevelopment",
      filter: "Web",
      tag: "Frontend",
      tagColor: "cyan",
      desc:
        "React development for interactive websites, dashboards and web applications using reusable components and maintainable frontend architecture.",
      points: [
        "Reusable React components",
        "Responsive interfaces",
        "API integration",
        "State management",
        "Frontend performance optimisation",
      ],
    },
    {
      icon: <Shield size={20} />,
      title: "Cloud & Deployment",
      subtitle: "Vercel · Cloud · CI/CD",
      path: "/backend-api",
      filter: "Backend",
      tag: "Infrastructure",
      tagColor: "red",
      desc:
        "Deployment and infrastructure support for web applications, including cloud configuration, CI/CD workflows, environment management and production setup.",
      points: [
        "Vercel and cloud deployment",
        "Environment configuration",
        "CI/CD workflow setup",
        "SSL and production configuration",
        "Monitoring setup",
      ],
    },
    {
      icon: <TrendingUp size={20} />,
      title: "SEO Services",
      subtitle: "Technical · On-Page · Search",
      path: "/seo-services",
      filter: "Growth",
      tag: "SEO",
      tagColor: "green",
      desc:
        "SEO services focused on improving technical foundations, crawlability, page structure, search visibility and the quality of your website's search presence.",
      points: [
        "Technical SEO audits",
        "On-page SEO improvements",
        "Indexing and crawlability checks",
        "Metadata and structured data",
        "Search performance monitoring",
      ],
    },
    {
      icon: <Zap size={20} />,
      title: "Digital Marketing",
      subtitle: "Content · Social · Campaigns",
      path: "/digital-marketing",
      filter: "Growth",
      tag: "Marketing",
      tagColor: "blue",
      desc:
        "Digital marketing support for businesses that want a stronger online presence through content, social channels, campaigns and measurable digital strategies.",
      points: [
        "Digital strategy planning",
        "Social media support",
        "Content marketing",
        "Campaign setup",
        "Performance reporting",
      ],
    },
  ];

  // =========================================================
  // PROCESS
  // =========================================================

  const process = [
    {
      n: "01",
      title: "Discovery",
      desc:
        "We discuss your goals, users, requirements and priorities to understand what needs to be built.",
    },
    {
      n: "02",
      title: "Planning",
      desc:
        "The project is organised into features, technical requirements, milestones and an appropriate development approach.",
    },
    {
      n: "03",
      title: "UI/UX & Prototype",
      desc:
        "Where required, we prepare user flows, wireframes and interface designs before implementation.",
    },
    {
      n: "04",
      title: "Development",
      desc:
        "Frontend, backend and integrations are developed in structured stages with regular project reviews.",
    },
    {
      n: "05",
      title: "Testing & QA",
      desc:
        "The product is tested across relevant devices and workflows, with important issues addressed before launch.",
    },
    {
      n: "06",
      title: "Launch & Support",
      desc:
        "We prepare the production deployment and can continue supporting maintenance, improvements and future development.",
    },
  ];

  // =========================================================
  // WHY DEVZORE
  // =========================================================

  const reasons = [
    {
      icon: <UsersRound size={17} />,
      title: "Direct Communication",
      desc:
        "Clear communication throughout planning, development and delivery.",
    },
    {
      icon: <Code2 size={17} />,
      title: "Maintainable Code",
      desc:
        "Code organised for easier maintenance, updates and future development.",
    },
    {
      icon: <Gauge size={17} />,
      title: "Performance Focus",
      desc:
        "Performance is considered throughout frontend and backend development.",
    },
    {
      icon: <LockKeyhole size={17} />,
      title: "Security-Conscious",
      desc:
        "Authentication, validation and secure development practices are considered where applicable.",
    },
    {
      icon: <Layers size={17} />,
      title: "Scalable Architecture",
      desc:
        "Technical decisions are made with future product development in mind.",
    },
    {
      icon: <HeartHandshake size={17} />,
      title: "Ongoing Support",
      desc:
        "Maintenance and continued development can be provided after launch.",
    },
  ];

  // =========================================================
  // FAQ
  // =========================================================

  const faqs = [
    {
      q: "How much does software development cost?",
      a:
        "Project cost depends on the features, design requirements, integrations, technical complexity and scope. After understanding your requirements, DevZore can provide a project estimate and proposed development approach.",
    },
    {
      q: "How long does a software project take?",
      a:
        "Development time varies by project. A focused website may require less time than a custom SaaS platform, marketplace or mobile application. We define milestones and an estimated timeline after reviewing the actual requirements.",
    },
    {
      q: "Can DevZore work with international clients?",
      a:
        "Yes. DevZore can work remotely with businesses and founders in different regions using online meetings, project management tools and regular development updates.",
    },
    {
      q: "Will I own my source code?",
      a:
        "Project ownership, source code access, repositories, design files and other deliverables can be clearly defined in the project agreement before development begins.",
    },
    {
      q: "What technologies does DevZore work with?",
      a:
        "Our development work can include technologies such as React, Node.js, Express, MongoDB, Next.js, React Native and Tailwind CSS, depending on the requirements of the project.",
    },
    {
      q: "Do you provide maintenance after launch?",
      a:
        "Yes. Maintenance and ongoing development can include bug fixes, updates, performance improvements, security-related maintenance and additional feature development.",
    },
    {
      q: "How will I communicate during development?",
      a:
        "Communication can take place through email, WhatsApp, online meetings and other agreed project channels. The communication process is selected according to the project and client requirements.",
    },
    {
      q: "Can you work on an existing project or codebase?",
      a:
        "Yes. Existing applications can first be reviewed to understand their architecture, dependencies, current issues and technical requirements before changes are planned.",
    },
  ];

  // =========================================================
  // COLORS
  // =========================================================

  const tagColors = {
    purple: d
      ? "bg-purple-500/15 text-purple-400 border-purple-500/20"
      : "bg-purple-50 text-purple-700 border-purple-200",

    blue: d
      ? "bg-blue-500/15 text-blue-400 border-blue-500/20"
      : "bg-blue-50 text-blue-700 border-blue-200",

    green: d
      ? "bg-green-500/15 text-green-400 border-green-500/20"
      : "bg-green-50 text-green-700 border-green-200",

    orange: d
      ? "bg-orange-500/15 text-orange-400 border-orange-500/20"
      : "bg-orange-50 text-orange-700 border-orange-200",

    indigo: d
      ? "bg-indigo-500/15 text-indigo-400 border-indigo-500/20"
      : "bg-indigo-50 text-indigo-700 border-indigo-200",

    pink: d
      ? "bg-pink-500/15 text-pink-400 border-pink-500/20"
      : "bg-pink-50 text-pink-700 border-pink-200",

    amber: d
      ? "bg-amber-500/15 text-amber-400 border-amber-500/20"
      : "bg-amber-50 text-amber-700 border-amber-200",

    gray: d
      ? "bg-white/[0.06] text-gray-400 border-white/[0.08]"
      : "bg-gray-100 text-gray-600 border-gray-200",

    cyan: d
      ? "bg-cyan-500/15 text-cyan-400 border-cyan-500/20"
      : "bg-cyan-50 text-cyan-700 border-cyan-200",

    red: d
      ? "bg-red-500/15 text-red-400 border-red-500/20"
      : "bg-red-50 text-red-700 border-red-200",
  };

  // =========================================================
  // FILTERING
  // =========================================================

  const filteredServices =
    activeFilter === "All"
      ? services
      : services.filter((service) => service.filter === activeFilter);

  const displayedServices =
    activeFilter === "All" && !showAllServices
      ? filteredServices.slice(0, 6)
      : filteredServices;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // =========================================================
  // STRUCTURED DATA
  // =========================================================

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DevZore Software Development Services",
    url: "https://devzore.com/allservices",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        url: `https://devzore.com${service.path}`,
        provider: {
          "@type": "Organization",
          "@id": "https://devzore.com/#organization",
          name: "DevZore",
          url: "https://devzore.com/",
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
        name: "All Services",
        item: "https://devzore.com/allservices",
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

  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

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

      <main
        className={`min-h-screen transition-colors duration-300 ${
          d ? "bg-[#030303]" : "bg-white"
        }`}
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          aria-labelledby="allservices-heading"
          className={`pt-20 sm:pt-24 pb-8 sm:pb-10 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-7 lg:gap-10 items-center">
              {/* LEFT */}

              <div>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border ${
                    d
                      ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                      : "bg-purple-50 border-purple-200 text-purple-700"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Software Development Services
                </div>

                <h1
                  id="allservices-heading"
                  className={`text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.1] mb-4 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Digital Products Built Around{" "}
                  <span className="text-purple-600">Your Business</span>
                </h1>

                <p
                  className={`text-[13px] sm:text-sm leading-relaxed max-w-2xl mb-3 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  DevZore provides web development, mobile app development,
                  SaaS engineering, e-commerce, backend development, UI/UX
                  design and digital growth services for startups and
                  businesses.
                </p>

                <p
                  className={`text-[12px] sm:text-[13px] leading-relaxed max-w-2xl mb-5 ${
                    d ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  From initial planning to design, development, deployment and
                  ongoing support, services can be combined according to the
                  actual requirements of your project.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Discuss Your Project
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="#services"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 font-bold rounded-xl text-xs sm:text-sm border transition-all ${
                      d
                        ? "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]"
                        : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    Browse Services
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* RIGHT */}

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  {
                    icon: <Layers size={18} />,
                    title: "Full-Cycle Development",
                    desc: "Planning, design, development and deployment.",
                  },
                  {
                    icon: <Code2 size={18} />,
                    title: "Modern Technology",
                    desc: "Technology selected according to project requirements.",
                  },
                  {
                    icon: <Shield size={18} />,
                    title: "Reliable Architecture",
                    desc: "Maintainability and security considered during development.",
                  },
                  {
                    icon: <HeartHandshake size={18} />,
                    title: "Continued Support",
                    desc: "Maintenance and future development available after launch.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`p-3.5 sm:p-4 rounded-xl border ${
                      d
                        ? "bg-white/[0.02] border-white/[0.06]"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 ${
                        d
                          ? "bg-purple-500/10 text-purple-400"
                          : "bg-purple-50 text-purple-600"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <h2
                      className={`text-[11px] sm:text-[12px] font-bold mb-1 ${
                        d ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h2>

                    <p
                      className={`text-[9px] sm:text-[10px] leading-relaxed ${
                        d ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FILTER
        ===================================================== */}

        <div
          className={`py-3 border-b sticky top-[70px] z-40 ${
            d
              ? "bg-[#030303]/95 border-white/[0.06] backdrop-blur-xl"
              : "bg-white/95 border-gray-100 backdrop-blur-xl"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-1.5">
              {filters.map((filter) => {
                const count =
                  filter === "All"
                    ? services.length
                    : services.filter((service) => service.filter === filter)
                        .length;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => {
                      setActiveFilter(filter);
                      setShowAllServices(false);
                    }}
                    aria-pressed={activeFilter === filter}
                    className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-semibold transition-all border ${
                      activeFilter === filter
                        ? "bg-purple-600 text-white border-purple-600 shadow-[0_0_14px_rgba(124,58,237,0.22)]"
                        : d
                        ? "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]"
                        : "bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300"
                    }`}
                  >
                    {filter}

                    <span
                      className={`ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full ${
                        activeFilter === filter
                          ? "bg-white/20 text-white"
                          : d
                          ? "bg-white/[0.06] text-gray-500"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="services"
          aria-labelledby="services-heading"
          className="py-8 sm:py-10 scroll-mt-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-6">
              <p
                className={`text-[9px] sm:text-[10px] font-black uppercase tracking-[0.22em] mb-2 ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Our Expertise
              </p>

              <h2
                id="services-heading"
                className={`text-2xl sm:text-3xl font-black tracking-tight ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Explore Our Services
              </h2>

              <p
                className={`mt-2 text-[12px] sm:text-[13px] leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Select a service to explore its capabilities, technologies and
                development approach.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {displayedServices.map((service) => (
                <Link
                  to={service.path}
                  key={service.title}
                  onClick={scrollTop}
                  aria-label={`Learn more about ${service.title}`}
                  className={`group flex flex-col p-4 rounded-xl border transition-all duration-300 ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/25"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 transition-all ${
                        d
                          ? "bg-white/[0.04] border-white/[0.08] text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600"
                          : "bg-purple-50 border-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600"
                      }`}
                    >
                      {service.icon}
                    </div>

                    <span
                      className={`text-[9px] font-bold px-2 py-1 rounded-full border ${
                        tagColors[service.tagColor]
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h3
                    className={`text-[13px] sm:text-[14px] font-bold leading-tight mb-1 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-[9px] sm:text-[10px] font-medium mb-2.5 ${
                      d ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {service.subtitle}
                  </p>

                  <p
                    className={`text-[11px] sm:text-[12px] leading-relaxed mb-3 ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {service.desc}
                  </p>

                  <ul className="space-y-1.5 mb-3">
                    {service.points.slice(0, 4).map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-2 text-[10px] sm:text-[11px] leading-relaxed ${
                          d ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <CheckCircle
                          size={11}
                          className="text-purple-500 shrink-0 mt-0.5"
                        />

                        {point}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold pt-3 border-t mt-auto ${
                      d
                        ? "border-white/[0.06] text-purple-400"
                        : "border-gray-100 text-purple-600"
                    }`}
                  >
                    Explore Service
                    <ArrowRight
                      size={11}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* SHOW ALL */}

            {activeFilter === "All" && services.length > 6 && (
              <div className="text-center mt-5">
                <button
                  type="button"
                  onClick={() => setShowAllServices((prev) => !prev)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[11px] sm:text-xs font-bold border transition-all ${
                    showAllServices
                      ? d
                        ? "border-white/10 text-gray-300 hover:bg-white/[0.04]"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50"
                      : "bg-purple-600 border-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  {showAllServices
                    ? "Show Fewer Services"
                    : `View All ${services.length} Services`}

                  <ArrowRight
                    size={12}
                    className={showAllServices ? "-rotate-90" : "rotate-90"}
                  />
                </button>
              </div>
            )}

            {/* INTERNAL LINKS */}

            <div
              className={`mt-7 p-4 sm:p-5 rounded-xl border ${
                d
                  ? "bg-white/[0.02] border-white/[0.06]"
                  : "bg-[#fafafa] border-gray-200"
              }`}
            >
              <h2
                className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-3 ${
                  d ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Explore DevZore Services
              </h2>

              <nav aria-label="DevZore service pages">
                <div className="flex flex-wrap gap-1.5">
                  {services.map((service) => (
                    <Link
                      key={`${service.title}-${service.path}`}
                      to={service.path}
                      onClick={scrollTop}
                      className={`inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-semibold px-2.5 py-1.5 rounded-lg border transition-all ${
                        d
                          ? "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:border-purple-500/30 hover:text-purple-400 hover:bg-purple-600/10"
                          : "bg-white border-gray-200 text-gray-600 hover:border-purple-200 hover:text-purple-700 hover:bg-purple-50"
                      }`}
                    >
                      {service.title}
                      <ArrowRight size={9} />
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section
          aria-labelledby="process-heading"
          className={`py-8 sm:py-10 border-t border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-center">
              <div
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 border ${
                  d
                    ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                    : "bg-purple-50 border-purple-200 text-purple-700"
                }`}
              >
                How We Work
              </div>

              <h2
                id="process-heading"
                className={`text-2xl sm:text-3xl font-black mb-2 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                A Clear Development Process
              </h2>

              <p
                className={`text-[12px] sm:text-[13px] max-w-2xl mx-auto leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                A structured workflow keeps requirements, development and
                delivery easier to understand throughout the project.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {process.map((step) => (
                <div
                  key={step.n}
                  className={`p-4 rounded-xl border transition-all ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/20"
                      : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-[11px] font-black ${
                        d ? "text-purple-400" : "text-purple-600"
                      }`}
                    >
                      {step.n}
                    </span>

                    <div
                      className={`h-px flex-1 ${
                        d ? "bg-white/[0.06]" : "bg-gray-100"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-[12px] sm:text-[13px] font-bold mb-1.5 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-[10px] sm:text-[11px] leading-relaxed ${
                      d ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs transition-all"
              >
                Discuss Your Project
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY DEVZORE
        ===================================================== */}

        <section
          aria-labelledby="why-devzore-heading"
          className={`py-8 sm:py-10 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-7 lg:gap-10 items-center">
              <div>
                <div
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 border ${
                    d
                      ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                      : "bg-purple-50 border-purple-200 text-purple-700"
                  }`}
                >
                  Why DevZore
                </div>

                <h2
                  id="why-devzore-heading"
                  className={`text-2xl sm:text-3xl font-black mb-3 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Development Focused on the Product, Not Just the Code
                </h2>

                <p
                  className={`text-[12px] sm:text-[13px] leading-relaxed mb-4 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Our approach combines product requirements, interface design,
                  development and technical planning so each part of the
                  project works together.
                </p>

                <Link
                  to="/about"
                  onClick={scrollTop}
                  className={`inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold ${
                    d
                      ? "text-purple-400 hover:text-purple-300"
                      : "text-purple-600 hover:text-purple-700"
                  }`}
                >
                  Learn More About DevZore
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border ${
                      d
                        ? "bg-white/[0.02] border-white/[0.06]"
                        : "bg-[#fafafa] border-gray-200"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        d
                          ? "bg-purple-500/10 text-purple-400"
                          : "bg-purple-50 text-purple-600"
                      }`}
                    >
                      {reason.icon}
                    </div>

                    <div>
                      <h3
                        className={`text-[11px] sm:text-[12px] font-bold mb-0.5 ${
                          d ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {reason.title}
                      </h3>

                      <p
                        className={`text-[9px] sm:text-[10px] leading-relaxed ${
                          d ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          aria-labelledby="faq-heading"
          className={`py-8 sm:py-10 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-center">
              <div
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 border ${
                  d
                    ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                    : "bg-purple-50 border-purple-200 text-purple-700"
                }`}
              >
                FAQ
              </div>

              <h2
                id="faq-heading"
                className={`text-2xl sm:text-3xl font-black mb-2 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Frequently Asked Questions
              </h2>

              <p
                className={`text-[12px] sm:text-[13px] ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Common questions about DevZore services and our development
                process.
              </p>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, index) => {
                const isActive = activeFaq === index;

                return (
                  <div
                    key={faq.q}
                    className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                      isActive
                        ? d
                          ? "border-purple-500/40 bg-purple-600/5"
                          : "border-purple-200 bg-purple-50/50"
                        : d
                        ? "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isActive ? null : index)
                      }
                      aria-expanded={isActive}
                      aria-controls={`faq-answer-${index}`}
                      className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-4"
                    >
                      <span
                        className={`text-[11px] sm:text-[13px] font-bold leading-snug ${
                          isActive
                            ? "text-purple-500"
                            : d
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <div
                        className={`shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-purple-600 text-white"
                            : d
                            ? "bg-white/[0.06] text-gray-500"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {isActive ? (
                          <Minus size={12} />
                        ) : (
                          <Plus size={12} />
                        )}
                      </div>
                    </button>

                    <div
                      id={`faq-answer-${index}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isActive
                          ? "max-h-[350px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`px-4 pb-4 border-t text-[11px] sm:text-[12px] leading-relaxed ${
                          d
                            ? "border-white/[0.06] text-gray-400"
                            : "border-purple-100 text-gray-600"
                        }`}
                      >
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section
          aria-labelledby="services-contact-heading"
          className="py-9 sm:py-10"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`relative overflow-hidden text-center p-6 sm:p-7 rounded-2xl border ${
                d
                  ? "bg-purple-600/[0.05] border-purple-500/15"
                  : "bg-purple-50 border-purple-100"
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute -top-28 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-600/10 blur-[90px] rounded-full pointer-events-none"
              />

              <div className="relative z-10">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                    d
                      ? "bg-purple-600/15 text-purple-400"
                      : "bg-white text-purple-600"
                  }`}
                >
                  <MessageSquare size={19} />
                </div>

                <h2
                  id="services-contact-heading"
                  className={`text-xl sm:text-2xl font-black mb-2 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Have a Project in Mind?
                </h2>

                <p
                  className={`text-xs sm:text-[13px] mb-5 max-w-xl mx-auto leading-relaxed ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Tell us what you want to build and we can discuss the
                  requirements, suitable technology and next steps for your
                  project.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 justify-center">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Contact DevZore
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-xs sm:text-sm hover:bg-[#25D366]/20 transition-all"
                  >
                    WhatsApp Us
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AllServices;