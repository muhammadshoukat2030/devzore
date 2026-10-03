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
  Building2,
  Rocket,
  BriefcaseBusiness,
  Gauge,
  ShoppingCart,
  Wrench,
  Palette,
  CircleCheckBig,
} from "lucide-react";

const WebDevelopment = ({ isDark }) => {
  const d = isDark;
  const [activeFaq, setActiveFaq] = useState(null);

  /* =====================================================
     CAPABILITIES
  ===================================================== */

  const capabilities = [
    {
      title: "Business Websites",
      desc: "Professional, responsive websites for companies and growing businesses.",
    },
    {
      title: "Custom Web Applications",
      desc: "Dashboards, portals, management systems and internal business tools.",
    },
    {
      title: "E-Commerce Platforms",
      desc: "Online stores with products, orders, payments and business workflows.",
    },
    {
      title: "SaaS Applications",
      desc: "User accounts, subscriptions, dashboards and product workflows.",
    },
    {
      title: "Backend & API Integration",
      desc: "Databases, REST APIs and third-party service integrations.",
    },
    {
      title: "Performance & SEO Foundations",
      desc: "Responsive delivery, technical structure and performance optimisation.",
    },
  ];

  /* =====================================================
     WHAT WE BUILD
  ===================================================== */

  const whatWeBuild = [
    {
      icon: <BriefcaseBusiness size={22} />,
      color: "blue",
      title: "Business Website Development",
      desc: "Professional business websites designed to clearly present your company, services and value while giving potential customers an easy path to contact you.",
    },
    {
      icon: <Monitor size={22} />,
      color: "purple",
      title: "Corporate & Company Websites",
      desc: "Modern company websites with responsive layouts, service pages, conversion-focused calls to action and a maintainable content structure.",
    },
    {
      icon: <Database size={22} />,
      color: "blue",
      title: "Custom Web Applications",
      desc: "Custom CRM systems, portals, inventory tools, management systems and internal dashboards built around real business workflows.",
    },
    {
      icon: <ShoppingCart size={22} />,
      color: "green",
      title: "E-Commerce Development",
      desc: "Custom online stores and commerce platforms with product management, payments, inventory, customer accounts and order workflows.",
    },
    {
      icon: <Layers size={22} />,
      color: "orange",
      title: "SaaS & Subscription Platforms",
      desc: "SaaS applications with authentication, subscriptions, dashboards, user management, permissions and scalable backend architecture.",
    },
    {
      icon: <RefreshCw size={22} />,
      color: "gray",
      title: "Website Redesign & Modernisation",
      desc: "Redesign and modernisation for outdated websites that need improved usability, mobile responsiveness, performance or a stronger professional presence.",
    },
  ];

  /* =====================================================
     BUSINESS WEBSITE TYPES
  ===================================================== */

  const websiteTypes = [
    {
      icon: <Building2 size={19} />,
      title: "Small Business Websites",
      desc: "Professional websites for small businesses that need a credible online presence, clear service information and stronger customer enquiries.",
    },
    {
      icon: <Rocket size={19} />,
      title: "Startup Websites",
      desc: "Modern startup websites designed to communicate your product, value proposition and next action clearly to early customers and partners.",
    },
    {
      icon: <BriefcaseBusiness size={19} />,
      title: "Professional Service Websites",
      desc: "Websites for consultants, agencies and service businesses that need to explain expertise, services and contact options professionally.",
    },
    {
      icon: <Globe size={19} />,
      title: "Company Websites",
      desc: "Structured company websites for organisations that need service pages, company information, resources and conversion-focused contact journeys.",
    },
  ];

  /* =====================================================
     PROBLEMS / REDESIGN
  ===================================================== */

  const problems = [
    "Your website looks outdated or no longer represents your business",
    "The website is difficult to use on mobile devices",
    "Pages load slowly or important assets are poorly optimised",
    "Visitors struggle to understand your services or next steps",
    "Your current website is difficult to update or maintain",
    "You need new functionality, integrations or business workflows",
    "The website has weak technical SEO foundations",
    "Your business has grown beyond the capabilities of the current website",
  ];

  /* =====================================================
     FEATURES INCLUDED
  ===================================================== */

  const included = [
    {
      icon: <Smartphone size={18} />,
      title: "Responsive Development",
      desc: "Layouts designed to work across mobile, tablet and desktop screen sizes.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance Focus",
      desc: "Attention to asset optimisation, rendering, page speed and Core Web Vitals.",
    },
    {
      icon: <Search size={18} />,
      title: "SEO-Friendly Foundations",
      desc: "Semantic structure, metadata support, crawlable pages and technical SEO considerations.",
    },
    {
      icon: <Lock size={18} />,
      title: "Security Considerations",
      desc: "Validation, authentication and secure configuration applied where relevant.",
    },
    {
      icon: <Server size={18} />,
      title: "API & Database Integration",
      desc: "Backend services, databases and third-party APIs integrated according to requirements.",
    },
    {
      icon: <Settings size={18} />,
      title: "Maintainable Architecture",
      desc: "Reusable components and organised application structure for future development.",
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
      items: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Prisma ORM",
      ],
    },
    {
      category: "Cloud & Deployment",
      items: [
        "AWS",
        "Vercel",
        "DigitalOcean",
        "Docker",
        "GitHub Actions",
      ],
    },
    {
      category: "Payments & Integrations",
      items: [
        "Stripe",
        "PayPal",
        "JazzCash",
        "Easypaisa",
        "Third-Party APIs",
      ],
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
      title: "Discovery & Requirements",
      desc: "We discuss your business, target users, website goals, required pages, functionality, integrations and project priorities.",
    },
    {
      n: "02",
      title: "Planning & Architecture",
      desc: "The website structure, technical requirements, development approach and appropriate technology stack are planned around the project.",
    },
    {
      n: "03",
      title: "UI/UX & Interface Planning",
      desc: "Important layouts, user journeys and interface decisions are prepared so visitors can navigate the website clearly.",
    },
    {
      n: "04",
      title: "Web Development",
      desc: "Frontend, backend and required integrations are developed using reusable components and maintainable application architecture.",
    },
    {
      n: "05",
      title: "Testing & Optimisation",
      desc: "Important functionality, responsive layouts, browser compatibility, performance and technical requirements are reviewed before launch.",
    },
    {
      n: "06",
      title: "Launch & Ongoing Support",
      desc: "The website is prepared for production deployment, with maintenance and future development available when required.",
    },
  ];

  /* =====================================================
     WHY DEVZORE
  ===================================================== */

  const whyUs = [
    {
      icon: <Code2 size={17} />,
      title: "Modern Development Stack",
      desc: "Modern frontend and backend technologies are selected according to the requirements of the project.",
    },
    {
      icon: <Shield size={17} />,
      title: "Source Code Handover",
      desc: "Source code, repositories and agreed deliverables can be handed over according to the project agreement.",
    },
    {
      icon: <Zap size={17} />,
      title: "Performance Focus",
      desc: "Responsive design, loading performance and frontend optimisation are considered throughout development.",
    },
    {
      icon: <Lock size={17} />,
      title: "Security-Conscious Development",
      desc: "Authentication, validation, permissions and secure configuration are considered where applicable.",
    },
    {
      icon: <Settings size={17} />,
      title: "Maintainable Development",
      desc: "Projects are structured to make future maintenance, improvements and feature development easier.",
    },
    {
      icon: <Clock size={17} />,
      title: "Clear Communication",
      desc: "Requirements, progress, feedback and project deliverables are kept organised throughout development.",
    },
  ];

  /* =====================================================
     INDUSTRIES
  ===================================================== */

  const industries = [
    {
      name: "Startups & SaaS",
      desc: "Product websites and web applications",
    },
    {
      name: "Professional Services",
      desc: "Company and service websites",
    },
    {
      name: "E-Commerce & Retail",
      desc: "Stores and commerce platforms",
    },
    {
      name: "Real Estate",
      desc: "Property websites and portals",
    },
    {
      name: "Healthcare",
      desc: "Business websites and digital workflows",
    },
    {
      name: "Restaurants & Hospitality",
      desc: "Service, booking and business websites",
    },
    {
      name: "Education",
      desc: "Learning and management platforms",
    },
    {
      name: "Construction",
      desc: "Company websites and project systems",
    },
    {
      name: "Travel & Tourism",
      desc: "Tour, service and booking platforms",
    },
    {
      name: "Fitness & Wellness",
      desc: "Business and membership websites",
    },
    {
      name: "Logistics",
      desc: "Operations and tracking systems",
    },
    {
      name: "Consulting & Agencies",
      desc: "Lead-focused professional websites",
    },
  ];

  /* =====================================================
     FAQ
  ===================================================== */

  const faqs = [
    {
      q: "I need a website for my business. Where should I start?",
      a: "Start by defining what the website needs to achieve, who your customers are, which services or products need to be presented and what actions visitors should take. DevZore can review these requirements and recommend an appropriate website structure and development approach.",
    },
    {
      q: "How much does a professional business website cost?",
      a: "Website cost depends on the number of pages, design requirements, custom functionality, integrations, content requirements and backend features. After reviewing the scope, DevZore can provide an estimate based on the actual project requirements.",
    },
    {
      q: "How long does website development take?",
      a: "The timeline depends on scope and complexity. A focused business website generally requires less development time than a custom web application, marketplace or SaaS platform. The expected timeline can be estimated after the requirements are reviewed.",
    },
    {
      q: "Can you redesign my existing business website?",
      a: "Yes. An existing website can be reviewed for design, mobile responsiveness, usability, performance, technical structure and required functionality before a redesign or modernisation plan is prepared.",
    },
    {
      q: "Do you build websites for small businesses and startups?",
      a: "Yes. DevZore develops websites for startups, small businesses and growing companies. The structure and technology can be adapted according to the business model, content, functionality and expected future requirements.",
    },
    {
      q: "Do you build SEO-friendly websites?",
      a: "SEO considerations can include semantic HTML, responsive design, page performance, metadata, canonical URLs, structured data, XML sitemaps and crawlable page architecture depending on the project.",
    },
    {
      q: "What is the difference between a website and a web application?",
      a: "A website commonly focuses on presenting information, services or content. A web application usually includes more interactive functionality such as user accounts, dashboards, databases, bookings, management workflows or other application features.",
    },
    {
      q: "Do you use React and Next.js for web development?",
      a: "React or Next.js can be used depending on the requirements. Technology is selected according to the interface, functionality, rendering requirements, SEO considerations and overall architecture of the project.",
    },
    {
      q: "Can DevZore work with clients remotely?",
      a: "Yes. DevZore can work remotely with businesses and founders using online meetings, messaging, project-management tools and shared development workflows.",
    },
    {
      q: "Will I receive my website source code?",
      a: "Source-code ownership, repositories, project assets and handover requirements can be clearly defined in the project agreement before development begins.",
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
        "Full-stack JavaScript development for custom web applications, dashboards and digital products.",
      points: [
        "Frontend & backend development",
        "MongoDB integration",
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
        "Backend systems and APIs for websites, applications, mobile products and third-party integrations.",
      points: [
        "REST API development",
        "Authentication & permissions",
        "Database architecture",
      ],
      path: "/backend-api",
      color: "orange",
    },
    {
      badge: "Commerce",
      icon: <ShoppingCart size={21} />,
      title: "E-Commerce Development",
      subtitle: "Stores · Payments · Orders",
      description:
        "E-commerce development for businesses that need online stores, payment integrations and order workflows.",
      points: [
        "Online store development",
        "Payment integrations",
        "Product & order management",
      ],
      path: "/ecommerce",
      color: "green",
    },
    {
      badge: "Product",
      icon: <TrendingUp size={21} />,
      title: "SaaS Product Development",
      subtitle: "Users · Billing · Dashboards",
      description:
        "Development for SaaS platforms with users, dashboards, subscriptions and business workflows.",
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

  const relatedColorMap = {
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

    green: {
      badge: d
        ? "bg-green-500/10 border-green-500/20 text-green-400"
        : "bg-green-50 border-green-200 text-green-600",
      icon: d
        ? "bg-green-500/10 border-green-500/20 text-green-400"
        : "bg-green-50 border-green-100 text-green-600",
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

  /* =====================================================
     HELPERS
  ===================================================== */

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
      "Professional web development services for business websites, custom web applications, e-commerce platforms, SaaS products and website redesign projects.",
    url: "https://devzore.com/web-development",
    serviceType: "Web Development",
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
          Main SEO metadata is handled by SEOManager in App.jsx
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
          aria-labelledby="webdev-heading"
          className={`pt-28 pb-14 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
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
                    Web Development Services
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold border ${
                      d
                        ? "bg-green-500/10 border-green-500/20 text-green-400"
                        : "bg-green-50 border-green-200 text-green-700"
                    }`}
                  >
                    <Globe size={11} />
                    Remote Projects
                  </div>
                </div>

                <h1
                  id="webdev-heading"
                  className={`text-4xl lg:text-5xl xl:text-[56px] font-black tracking-tight leading-[1.08] mb-6 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Professional Web Development{" "}
                  <span className="text-purple-600">
                    for Modern Businesses
                  </span>
                </h1>

                <p
                  className={`text-lg leading-relaxed mb-5 max-w-2xl ${
                    d ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Need a professional website for your business?
                  DevZore provides custom web development services for
                  startups, small businesses and growing companies that need
                  responsive, maintainable and professionally built websites.
                </p>

                <p
                  className={`text-[15px] leading-relaxed mb-8 max-w-2xl ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From business websites and custom web applications to
                  e-commerce platforms, SaaS products and website redesigns,
                  we develop digital solutions around your users, workflows
                  and business requirements.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    onClick={scrollTop}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    Get a Website Quote
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="#website-services"
                    className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${
                      d
                        ? "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]"
                        : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    Explore Web Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-7">
                  {[
                    "Responsive Development",
                    "Custom Solutions",
                    "SEO-Aware Structure",
                  ].map((item) => (
                    <span
                      key={item}
                      className={`flex items-center gap-2 text-[12px] font-medium ${
                        d ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      <CircleCheckBig
                        size={13}
                        className="text-purple-500"
                      />
                      {item}
                    </span>
                  ))}
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
                  {capabilities.map((item) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0 ${
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
                          className={`text-[11px] leading-relaxed mt-0.5 ${
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
                  className={`mt-6 p-3 rounded-xl ${
                    d ? "bg-purple-600/5" : "bg-purple-50"
                  }`}
                >
                  <p
                    className={`text-[11px] font-semibold text-center ${
                      d ? "text-purple-400" : "text-purple-700"
                    }`}
                  >
                    Custom website and web application development
                  based on your project requirements
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
          id="website-services"
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
                Web Development Solutions
              </div>

              <h2
                id="whatwebuild-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Websites and Web Applications Built Around Your Business
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Whether you need a new business website, a custom web
                application or a redesign of an existing website, the
                development approach should match what your business and
                users actually need.
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
                    className={`text-[15px] font-bold mb-2 ${
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
            BUSINESS / SMALL BUSINESS INTENT
        ===================================================== */}

        <section
          aria-labelledby="business-websites-heading"
          className={`py-16 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-12 items-center">
              <div>
                <p
                  className={`text-[11px] font-black uppercase tracking-[0.2em] mb-4 ${
                    d ? "text-purple-400" : "text-purple-600"
                  }`}
                >
                  Business Website Development
                </p>

                <h2
                  id="business-websites-heading"
                  className={`text-3xl font-black mb-5 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Need a Website for Your Business?
                </h2>

                <p
                  className={`text-base leading-relaxed mb-4 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A professional business website should do more than simply
                  put your company online. It should clearly explain what you
                  offer, build confidence in your business and make it easy
                  for potential customers to take the next step.
                </p>

                <p
                  className={`text-[14px] leading-relaxed mb-7 ${
                    d ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  DevZore develops custom business websites for companies,
                  startups and service providers that need a modern,
                  mobile-friendly website designed around their actual
                  services and customers.
                </p>

                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-purple-500 hover:text-purple-400"
                >
                  Discuss Your Business Website
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {websiteTypes.map((item) => (
                  <article
                    key={item.title}
                    className={`p-5 rounded-2xl border ${
                      d
                        ? "bg-white/[0.02] border-white/[0.06]"
                        : "bg-[#fafafa] border-gray-200"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${
                        d
                          ? "bg-purple-500/10 text-purple-400"
                          : "bg-purple-50 text-purple-600"
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
                      className={`text-[12px] leading-relaxed ${
                        d ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INCLUDED
        ===================================================== */}

        <section
          aria-labelledby="included-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-11">
              <p
                className={`text-[11px] font-black uppercase tracking-[0.2em] mb-3 ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Development Foundations
              </p>

              <h2
                id="included-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                What We Consider During Website Development
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                The exact implementation depends on your project, but these
                areas form an important part of modern professional web
                development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {included.map((item) => (
                <article
                  key={item.title}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${
                      d
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-[14px] font-bold mb-1.5 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[12px] leading-relaxed ${
                      d ? "text-gray-500" : "text-gray-500"
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
            REDESIGN / PROBLEMS
        ===================================================== */}

        <section
          aria-labelledby="redesign-heading"
          className={`py-16 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    d
                      ? "bg-orange-500/10 text-orange-400"
                      : "bg-orange-50 text-orange-600"
                  }`}
                >
                  <Wrench size={20} />
                </div>

                <h2
                  id="redesign-heading"
                  className={`text-3xl font-black mb-5 ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  Is Your Current Website Holding Your Business Back?
                </h2>

                <p
                  className={`text-base leading-relaxed mb-4 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Not every business needs to start from zero. If your
                  existing website is slow, outdated, difficult to use or no
                  longer supports your business requirements, a website
                  redesign or technical modernisation may be more appropriate.
                </p>

                <p
                  className={`text-[14px] leading-relaxed mb-7 ${
                    d ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  We can review the existing website and determine which
                  areas need design, development, performance or technical
                  improvements before planning the next version.
                </p>

                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-purple-500"
                >
                  Discuss a Website Redesign
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div
                className={`p-6 rounded-2xl border ${
                  d
                    ? "bg-white/[0.02] border-white/[0.06]"
                    : "bg-[#fafafa] border-gray-200"
                }`}
              >
                <p
                  className={`text-[12px] font-black uppercase tracking-widest mb-5 ${
                    d ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Common Reasons for a Redesign
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {problems.map((problem) => (
                    <div
                      key={problem}
                      className={`flex items-start gap-2.5 p-3 rounded-xl ${
                        d ? "bg-white/[0.025]" : "bg-white"
                      }`}
                    >
                      <CheckCircle
                        size={13}
                        className="text-purple-500 flex-shrink-0 mt-0.5"
                      />

                      <span
                        className={`text-[12px] leading-relaxed ${
                          d ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {problem}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECH STACK
        ===================================================== */}

        <section
          aria-labelledby="techstack-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p
                className={`text-[11px] font-black uppercase tracking-[0.2em] mb-3 ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Technologies
              </p>

              <h2
                id="techstack-heading"
                className={`text-3xl font-black mb-3 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Modern Web Development Technology Stack
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Technologies are selected according to the functionality,
                performance, maintainability and deployment requirements of
                each project.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {techStack.map((cat) => (
                <article
                  key={cat.category}
                  className={`p-5 rounded-2xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06]"
                      : "bg-white border-gray-200"
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
                            : "bg-[#fafafa] border-gray-200 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-7">
              <Link
                to="/mern-stack-development"
                onClick={scrollTop}
                className="inline-flex items-center gap-2 text-[13px] font-bold text-purple-500"
              >
                Explore MERN Stack Development
                <ArrowRight size={14} />
              </Link>
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
                Our Web Development Process
              </h2>

              <p
                className={`text-base max-w-2xl mx-auto ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                A structured workflow keeps requirements, development,
                testing and launch easier to understand throughout the
                project.
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
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-[13px] font-black ${
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
              <p
                className={`text-[11px] font-black uppercase tracking-[0.2em] mb-3 ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Industries
              </p>

              <h2
                id="industries-heading"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Web Development for Different Business Models
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Website functionality and structure can be adapted to the
                needs of different industries without relying on a
                one-size-fits-all template.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {industries.map((industry) => (
                <article
                  key={industry.name}
                  className={`p-4 rounded-xl border ${
                    d
                      ? "bg-white/[0.02] border-white/[0.05]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-[12px] font-bold ${
                      d ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {industry.name}
                  </h3>

                  <p
                    className={`text-[10px] mt-1.5 leading-relaxed ${
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
            WHY DEVZORE
        ===================================================== */}

        <section
          aria-labelledby="why-heading"
          className={`py-16 border-b ${
            d ? "border-white/[0.06]" : "border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-11">
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
                A Practical Approach to Professional Web Development
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We focus on the requirements of the product and business,
                not simply the number of pages or technologies used.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyUs.map((item) => (
                <article
                  key={item.title}
                  className={`p-6 rounded-2xl border transition-all ${
                    d
                      ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/20"
                      : "bg-[#fafafa] border-gray-200 hover:border-purple-200"
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
            FAQ
        ===================================================== */}

        <section
          aria-labelledby="faq-heading"
          className={`py-16 border-b ${
            d
              ? "border-white/[0.06] bg-[#050505]"
              : "border-gray-100 bg-[#fafafa]"
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p
                className={`text-[11px] font-black uppercase tracking-[0.2em] mb-3 ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Frequently Asked Questions
              </p>

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
                Common questions from businesses planning a new website,
                web application or website redesign.
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
                        className={`text-[14px] font-bold leading-snug ${
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
            d ? "border-white/[0.06]" : "border-gray-100"
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
                Combine web development with the frontend, backend,
                commerce or product-development capabilities required by
                your project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedServices.map((service) => {
                const style = relatedColorMap[service.color];

                return (
                  <article
                    key={service.path}
                    className={`group flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                      d
                        ? "bg-white/[0.02] border-white/[0.08] hover:border-purple-500/30"
                        : "bg-[#fafafa] border-gray-200 hover:border-purple-200 hover:shadow-sm"
                    }`}
                  >
                    <span
                      className={`self-start inline-flex px-3 py-1 rounded-full border text-[10px] font-black mb-5 ${style.badge}`}
                    >
                      {service.badge}
                    </span>

                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${style.icon}`}
                    >
                      {service.icon}
                    </div>

                    <h3
                      className={`text-[15px] font-black leading-tight ${
                        d ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`text-[11px] font-semibold mt-1 mb-4 ${
                        d ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {service.subtitle}
                    </p>

                    <p
                      className={`text-[12px] leading-relaxed mb-5 ${
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
                            size={13}
                            className="text-purple-500 flex-shrink-0"
                          />

                          <span
                            className={`text-[11px] ${
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
                      onClick={scrollTop}
                      className="inline-flex items-center gap-2 text-[12px] font-bold text-purple-500 hover:text-purple-400 transition-colors mt-auto"
                    >
                      Explore service
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/allservices"
                onClick={scrollTop}
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
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 ${
                  d
                    ? "bg-purple-600/10 text-purple-400"
                    : "bg-purple-50 text-purple-600"
                }`}
              >
                <Palette size={21} />
              </div>

              <h2
                id="web-development-cta"
                className={`text-3xl font-black mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Looking for a Website Developer for Your Business?
              </h2>

              <p
                className={`text-base mb-8 max-w-2xl mx-auto leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tell DevZore what you need to build. We can discuss your
                website goals, required functionality, suitable technology
                and the next steps for your web development project.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                >
                  Discuss Your Website
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20need%20a%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
                >
                  WhatsApp DevZore
                  <ArrowRight size={15} />
                </a>

                <Link
                  to="/allservices"
                  onClick={scrollTop}
                  className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${
                    d
                      ? "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]"
                      : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  View All Services
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