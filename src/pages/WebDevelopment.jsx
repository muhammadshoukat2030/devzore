import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Clock3,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  MenuSquare,
  Minus,
  Monitor,
  Palette,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Send,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";

const WebDevelopment = ({ isDark }) => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    timeline: "",
    message: "",
  });

  const d = isDark;

  /* =========================================================
     THEME
  ========================================================= */

  const pageBg = d ? "bg-[#06151d]" : "bg-[#f7f9fa]";
  const textMain = d ? "text-white" : "text-[#071923]";
  const textBody = d ? "text-slate-300" : "text-slate-600";

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
      icon: <BriefcaseBusiness size={20} />,
      number: "01",
      title: "Business Website Development",
      desc:
        "Professional websites for companies and service businesses that need a strong online presence, clear service pages and better customer enquiries.",
      points: [
        "Responsive page development",
        "Service-focused structure",
        "Contact and lead journeys",
      ],
    },
    {
      icon: <Monitor size={20} />,
      number: "02",
      title: "Corporate Website Development",
      desc:
        "Structured company websites designed for organisations that need professional presentation, scalable content and clear navigation.",
      points: [
        "Company and service pages",
        "Professional interface",
        "Scalable page structure",
      ],
    },
    {
      icon: <Database size={20} />,
      number: "03",
      title: "Custom Web Applications",
      desc:
        "Custom dashboards, portals, CRM tools and business systems developed around real users, processes and operational requirements.",
      points: [
        "Dashboards and portals",
        "Business workflows",
        "Database-driven features",
      ],
    },
    {
      icon: <ShoppingCart size={20} />,
      number: "04",
      title: "E-Commerce Development",
      desc:
        "Online stores and commerce platforms with product management, customer accounts, payments, orders and operational workflows.",
      points: [
        "Product management",
        "Payment integration",
        "Order workflows",
      ],
    },
    {
      icon: <Layers3 size={20} />,
      number: "05",
      title: "SaaS Web Applications",
      desc:
        "Scalable SaaS products with authentication, dashboards, subscriptions, user management and product-specific workflows.",
      points: [
        "User authentication",
        "Subscription workflows",
        "Admin dashboards",
      ],
    },
    {
      icon: <RefreshCw size={20} />,
      number: "06",
      title: "Website Redesign",
      desc:
        "Modernisation of outdated websites that need stronger usability, responsive layouts, better performance or improved presentation.",
      points: [
        "Modern interface",
        "Mobile improvements",
        "Performance review",
      ],
    },
  ];

  /* =========================================================
     STANDARDS
  ========================================================= */

  const standards = [
    {
      icon: <Smartphone size={19} />,
      title: "Responsive by Default",
      desc:
        "Interfaces are developed to work clearly across mobile, tablet and desktop screen sizes.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Performance Focused",
      desc:
        "Page weight, rendering, assets and loading behaviour are considered throughout development.",
    },
    {
      icon: <Search size={19} />,
      title: "Search-Friendly Structure",
      desc:
        "Semantic structure, crawlability and technical SEO foundations are considered from the beginning.",
    },
    {
      icon: <LockKeyhole size={19} />,
      title: "Security Conscious",
      desc:
        "Authentication, permissions, validation and secure configuration are applied where required.",
    },
    {
      icon: <Server size={19} />,
      title: "Backend Ready",
      desc:
        "Websites can connect with databases, APIs, third-party platforms and custom backend services.",
    },
    {
      icon: <Settings2 size={19} />,
      title: "Built to Maintain",
      desc:
        "Organised components and maintainable application structure make future development easier.",
    },
  ];

  /* =========================================================
     BUSINESS TYPES
  ========================================================= */

  const businessTypes = [
    {
      icon: <Building2 size={18} />,
      title: "Small Businesses",
      desc:
        "Professional websites that establish credibility and make services easier for potential customers to understand.",
    },
    {
      icon: <Rocket size={18} />,
      title: "Startups",
      desc:
        "Focused websites for communicating a product, value proposition and next action to customers or partners.",
    },
    {
      icon: <BriefcaseBusiness size={18} />,
      title: "Professional Services",
      desc:
        "Websites for consultants, agencies and service companies that need a professional digital presence.",
    },
    {
      icon: <Globe2 size={18} />,
      title: "Growing Companies",
      desc:
        "Scalable websites for businesses that need more pages, functionality, integrations and future expansion.",
    },
  ];

  /* =========================================================
     REDESIGN
  ========================================================= */

  const redesignProblems = [
    "Your website looks outdated or no longer represents the business",
    "The mobile experience is difficult to use",
    "Important pages load slowly",
    "Visitors cannot quickly understand your services",
    "The current website is difficult to maintain",
    "You need new features or business integrations",
    "Technical SEO foundations need improvement",
    "Your business has outgrown the existing website",
  ];

  /* =========================================================
     PROCESS
  ========================================================= */

  const process = [
    {
      number: "01",
      title: "Discovery",
      desc:
        "We understand your business, audience, objectives, required pages, functionality and project priorities.",
    },
    {
      number: "02",
      title: "Planning",
      desc:
        "We organise the website structure, user journeys, functional requirements and development approach.",
    },
    {
      number: "03",
      title: "UI & UX Direction",
      desc:
        "Layouts and interface decisions are planned around clarity, usability and the actions visitors need to take.",
    },
    {
      number: "04",
      title: "Development",
      desc:
        "The frontend, backend and required integrations are developed around the approved project requirements.",
    },
    {
      number: "05",
      title: "Testing",
      desc:
        "Responsive behaviour, functionality, browser compatibility and important performance areas are reviewed.",
    },
    {
      number: "06",
      title: "Launch & Support",
      desc:
        "The website is prepared for production and can continue with maintenance, improvements and future features.",
    },
  ];

  /* =========================================================
     INDUSTRIES
  ========================================================= */

  const industries = [
    "Startups & SaaS",
    "Professional Services",
    "E-Commerce & Retail",
    "Real Estate",
    "Healthcare",
    "Restaurants & Hospitality",
    "Education",
    "Construction",
    "Travel & Tourism",
    "Fitness & Wellness",
    "Logistics",
    "Consulting & Agencies",
  ];

  /* =========================================================
     WHY DEVZORE
  ========================================================= */

  const whyDevZore = [
    {
      icon: <MenuSquare size={18} />,
      title: "Built Around Requirements",
      desc:
        "The website structure and functionality are planned around your actual business instead of forcing the project into a generic template.",
    },
    {
      icon: <Zap size={18} />,
      title: "Performance Considered Early",
      desc:
        "Performance is treated as part of development rather than something added only after the website is finished.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Professional Development",
      desc:
        "Projects are developed with maintainability, validation, responsive behaviour and future requirements in mind.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Source Code Handover",
      desc:
        "Repositories, source code and agreed project assets can be handed over according to the project agreement.",
    },
    {
      icon: <Clock3 size={18} />,
      title: "Clear Project Communication",
      desc:
        "Requirements, feedback, progress and deliverables stay organised throughout the development process.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Ready to Grow",
      desc:
        "The project can be structured so new pages, integrations and functionality can be added as the business develops.",
    },
  ];

  /* =========================================================
     FAQ
  ========================================================= */

  const faqs = [
    {
      q: "I need a website for my business. Where should I start?",
      a:
        "Start with the purpose of the website, your target customers, the services or products you want to present and the actions visitors should take. DevZore can review those requirements and recommend an appropriate structure for the project.",
    },
    {
      q: "How much does professional web development cost?",
      a:
        "The cost depends on project scope, number of pages, interface requirements, custom functionality, integrations and backend requirements. Once the scope is understood, an estimate can be prepared around the actual project.",
    },
    {
      q: "How long does it take to develop a website?",
      a:
        "The timeline depends on complexity. A focused business website normally requires less development time than a custom portal, e-commerce platform or SaaS application. A realistic timeline can be provided after the requirements are reviewed.",
    },
    {
      q: "Can DevZore redesign an existing website?",
      a:
        "Yes. We can review an existing website for usability, mobile responsiveness, presentation, performance, structure and required functionality before planning the redesign.",
    },
    {
      q: "Do you build websites for startups and small businesses?",
      a:
        "Yes. DevZore works on websites and web applications for startups, small businesses and growing companies. The project can be adapted to the business model and expected future requirements.",
    },
    {
      q: "Do you build SEO-friendly websites?",
      a:
        "Technical SEO considerations can include semantic structure, metadata support, crawlable pages, canonical URLs, structured data, sitemap support, responsive design and performance considerations.",
    },
    {
      q: "Can you develop custom dashboards and business systems?",
      a:
        "Yes. DevZore can develop custom web applications such as dashboards, portals, management systems and internal tools based on the required workflow and data.",
    },
    {
      q: "What is the difference between a website and a web application?",
      a:
        "A website usually focuses on presenting information, services or content. A web application normally includes deeper functionality such as accounts, dashboards, databases, bookings, management workflows or interactive business features.",
    },
    {
      q: "Can DevZore work with clients remotely?",
      a:
        "Yes. Projects can be handled remotely through online meetings, messaging, shared repositories and organised development workflows.",
    },
    {
      q: "Will I receive the source code?",
      a:
        "Source-code ownership, repositories, project assets and handover requirements can be defined clearly in the project agreement before development starts.",
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
        "Full-stack development for custom applications, dashboards and digital products.",
      path: "/mern-stack-development",
    },
    {
      label: "BACKEND",
      title: "Backend & API Development",
      desc:
        "APIs, databases, authentication and backend services for modern applications.",
      path: "/backend-api",
    },
    {
      label: "COMMERCE",
      title: "E-Commerce Development",
      desc:
        "Online stores with products, payments, customer accounts and order workflows.",
      path: "/ecommerce",
    },
    {
      label: "PRODUCT",
      title: "SaaS Product Development",
      desc:
        "SaaS platforms with users, subscriptions, dashboards and business workflows.",
      path: "/saas-product-development",
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
      `Web Development Enquiry - ${formData.name}`
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

    window.location.href =
      `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;
  };

  /* =========================================================
     STRUCTURED DATA
  ========================================================= */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/web-development#service",
    name: "Web Development Services",
    url: "https://devzore.com/web-development",
    serviceType: "Web Development",
    description:
      "Professional web development services for business websites, custom web applications, e-commerce platforms, SaaS products and website redesign projects.",
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
        name: "Web Development",
        item: "https://devzore.com/web-development",
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
      className={`flex items-center gap-2.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase ${
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
        className={`min-h-screen overflow-hidden antialiased transition-colors duration-300 ${pageBg}`}
        style={{
          fontFamily: '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
        }}
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          aria-labelledby="web-development-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[5%] w-[500px] h-[500px] rounded-full bg-[#078fa5]/15 blur-[130px]" />

            <div
              className="absolute inset-0 opacity-50"
              style={darkGrid}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/95 to-[#04111a]/60" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-7 lg:gap-10 items-center">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-300">
                    <CircleCheck size={12} className="text-[#24c4d3]" />
                    Business-focused development
                  </div>

                  <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                    Web Development
                  </span>
                </div>

                <h1
                  id="web-development-heading"
                  className="max-w-3xl text-[40px] sm:text-[48px] lg:text-[60px] xl:text-[66px] leading-[1.03] font-semibold tracking-[-0.045em]"
                >
                  Websites built for{" "}
                  <span className="text-[#23bfce]">
                    real business growth.
                  </span>
                </h1>

                <p className="max-w-2xl mt-4 text-[15px] sm:text-[16px] lg:text-[17px] leading-7 text-slate-300 font-normal">
                  DevZore designs and develops professional business websites,
                  custom web applications, e-commerce platforms and SaaS
                  products around your users, goals and business workflows.
                </p>

                <p className="max-w-xl mt-2.5 text-[13px] leading-6 text-slate-400">
                  From a new company website to a custom digital platform, we
                  focus on responsive development, maintainable structure,
                  performance and a clear path from visitor to enquiry.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 mt-5">
                  <a
                    href="#project-enquiry"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start Your Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#web-development-services"
                    className="inline-flex justify-center items-center gap-2 px-5 py-3 text-[12px] font-semibold text-white hover:text-[#27c2d0] transition-colors"
                  >
                    Explore Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                  {[
                    "Responsive",
                    "Performance Focused",
                    "SEO-Aware",
                    "Custom Development",
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

              {/* DESKTOP VISUAL */}

              <div className="relative min-h-[360px] lg:min-h-[400px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[360px] h-[360px] rounded-full bg-[#0796A8]/16 blur-[90px]" />

                  <div className="relative w-full max-w-[540px]">
                    <div className="relative rounded-[20px] border border-white/15 bg-[#091d27]/95 shadow-[0_35px_90px_rgba(0,0,0,0.5)] overflow-hidden">
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

                      <div className="grid grid-cols-[62px_1fr] min-h-[280px]">
                        <div className="border-r border-white/[0.08] p-3">
                          <div className="w-8 h-8 rounded-lg bg-[#1bbac8]/20 border border-[#1bbac8]/30 mb-4" />

                          <div className="space-y-3">
                            {[1, 2, 3, 4, 5].map((item) => (
                              <div
                                key={item}
                                className="w-7 h-2 rounded bg-white/[0.07]"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="flex justify-between items-center mb-5">
                            <div>
                              <div className="w-20 h-2 rounded bg-[#1bbac8]/60 mb-2" />
                              <div className="w-36 h-3.5 rounded bg-white/80" />
                            </div>

                            <div className="w-16 h-7 rounded-lg bg-[#18bdcb]" />
                          </div>

                          <div className="grid grid-cols-3 gap-3 mb-3">
                            {[1, 2, 3].map((item) => (
                              <div
                                key={item}
                                className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"
                              >
                                <div className="w-7 h-7 rounded-lg bg-[#159daf]/15 mb-3" />
                                <div className="w-14 h-2 rounded bg-white/30 mb-2" />
                                <div className="w-10 h-2 rounded bg-white/10" />
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
                            <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                              <div className="flex items-end gap-2 h-16">
                                {[35, 55, 42, 80, 62, 90, 70].map(
                                  (height, index) => (
                                    <div
                                      key={index}
                                      className="flex-1 rounded-t bg-[#16aebd]/40"
                                      style={{ height: `${height}%` }}
                                    />
                                  )
                                )}
                              </div>
                            </div>

                            <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                              <div className="w-14 h-2 rounded bg-white/20 mb-3" />

                              <div className="space-y-2">
                                {[1, 2, 3, 4].map((item) => (
                                  <div
                                    key={item}
                                    className="h-2 rounded bg-white/[0.07]"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-5 top-14 w-23 rounded-xl border border-[#24c6d5]/30 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Palette size={18} className="text-[#29c7d5]" />
                      <p className="text-[9px] font-medium mt-2">UI & UX</p>
                    </div>

                    <div className="absolute -right-4 top-12 w-24 rounded-xl border border-[#24c6d5]/30 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Gauge size={18} className="text-[#29c7d5]" />
                      <p className="text-[9px] font-medium mt-2">
                        Performance
                      </p>
                    </div>

                    <div className="absolute -right-3 bottom-9 w-24 rounded-xl border border-[#24c6d5]/30 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Search size={18} className="text-[#29c7d5]" />
                      <p className="text-[9px] font-medium mt-2">
                        SEO Ready
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
                  ["01", "Business Websites"],
                  ["02", "Web Applications"],
                  ["03", "E-Commerce"],
                  ["04", "SaaS Products"],
                ].map(([number, title], index) => (
                  <div
                    key={title}
                    className={`py-3.5 ${
                      index !== 3
                        ? "lg:border-r border-white/[0.07]"
                        : ""
                    } ${index > 0 ? "lg:pl-7" : ""}`}
                  >
                    <span className="block text-[9px] font-semibold text-[#1bb8c7] mb-0.5">
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
          className={`relative py-10 md:py-12 ${
            d ? "bg-[#081b25]" : "bg-[#f8fafb]"
          }`}
          style={d ? darkGrid : lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-6 lg:gap-12">
              <div>
                <SectionLabel light={d}>Web Development</SectionLabel>

                <h2
                  className={`text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5 ${textMain}`}
                >
                  More than a website.{" "}
                  <span className="text-[#078fa1]">
                    A digital business asset.
                  </span>
                </h2>
              </div>

              <div>
                <p className={`text-[15px] leading-7 ${textBody}`}>
                  Your website is often where potential customers first decide
                  whether your business looks credible, relevant and easy to
                  work with. Good web development brings design, content,
                  functionality and performance together.
                </p>

                <p
                  className={`text-[13px] leading-6 mt-2 ${
                    d ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  DevZore develops websites and web applications around the
                  actual needs of the business. That can mean a focused company
                  website, a customer portal, an online store, a management
                  system or a larger SaaS product.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="web-development-services"
          aria-labelledby="web-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-6">
              <SectionLabel>What We Build</SectionLabel>

              <h2
                id="web-services-heading"
                className="text-[#071923] text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5"
              >
                Web solutions designed around what your business needs.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-2.5 max-w-2xl">
                Different businesses need different levels of functionality.
                We develop the website or application around the project rather
                than forcing every client into the same solution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_16px_40px_rgba(7,25,35,0.07)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#eef3f4] text-[#075f70] flex items-center justify-center">
                      {service.icon}
                    </div>

                    <span className="text-[9px] font-semibold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[16px] leading-6 font-semibold mt-3.5">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-[12px] leading-5.5 mt-1.5">
                    {service.desc}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2"
                      >
                        <Check size={12} className="text-[#0796A8]" />

                        <span className="text-[10px] font-medium text-slate-500">
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
            STANDARDS
        ===================================================== */}

        <section
          aria-labelledby="standards-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-6">
              <SectionLabel light>Development Standards</SectionLabel>

              <h2
                id="standards-heading"
                className="text-[29px] sm:text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5"
              >
                Built to a standard you can measure,{" "}
                <span className="text-[#25bfce]">
                  not a template you have to defend.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-2.5 max-w-2xl">
                A professional website needs more than attractive pages.
                Development decisions also affect usability, performance,
                maintainability, search visibility and future growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {standards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-5 hover:bg-white/[0.055] hover:border-[#1bbac8]/25 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg border border-[#1bbac8]/20 bg-[#0e2b36] text-[#27c2d0] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[14px] font-semibold mt-3">
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
            BUSINESS WEBSITES
        ===================================================== */}

        <section
          aria-labelledby="business-websites-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-6 lg:gap-10 items-start">
              <div>
                <SectionLabel>Business Websites</SectionLabel>

                <h2
                  id="business-websites-heading"
                  className="text-[#071923] text-[29px] sm:text-[34px] md:text-[40px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
                >
                  Your website should make your business{" "}
                  <span className="text-[#078fa1]">
                    easier to understand and trust.
                  </span>
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-3">
                  A business website should clearly explain what you do, who
                  you help and what a potential customer should do next.
                </p>

                <p className="text-slate-500 text-[12px] leading-5 mt-2">
                  DevZore develops professional websites for companies,
                  startups and service businesses that need a stronger digital
                  presence without unnecessary complexity.
                </p>

                <a
                  href="#project-enquiry"
                  className="inline-flex items-center gap-2 mt-4 text-[11px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss Your Website
                  <ArrowRight size={13} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {businessTypes.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/35 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] font-semibold text-[14px] mt-3">
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
            REDESIGN
        ===================================================== */}

        <section
          aria-labelledby="redesign-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              <div>
                <SectionLabel>Website Redesign</SectionLabel>

                <div className="w-9 h-9 mt-3 rounded-xl bg-[#edf5f6] text-[#07899a] flex items-center justify-center">
                  <Wrench size={18} />
                </div>

                <h2
                  id="redesign-heading"
                  className="text-[#071923] text-[29px] sm:text-[34px] md:text-[40px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Is your current website holding the business back?
                </h2>

                <p className="text-slate-600 text-[14px] leading-6 mt-2.5">
                  You may not need to start from zero. If the current website
                  is outdated, slow, difficult to use or no longer supports the
                  business properly, redesigning and modernising it may be the
                  better approach.
                </p>

                <p className="text-slate-500 text-[12px] leading-5 mt-2">
                  We can review the existing experience and identify where the
                  interface, structure, performance or functionality needs to
                  improve.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-4 sm:p-5">
                <p className="text-[#071923] text-[9px] font-semibold tracking-[0.16em] uppercase">
                  Common reasons to redesign
                </p>

                <div className="grid sm:grid-cols-2 gap-2 mt-3">
                  {redesignProblems.map((problem) => (
                    <div
                      key={problem}
                      className="flex items-start gap-2.5 rounded-xl bg-white border border-slate-100 p-3"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-[#0796A8] flex-shrink-0 mt-0.5"
                      />

                      <span className="text-slate-600 text-[10px] leading-5">
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
            PROCESS
        ===================================================== */}

        <section
          aria-labelledby="process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-6">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="process-heading"
                className="text-[29px] sm:text-[34px] md:text-[40px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
              >
                From first conversation{" "}
                <span className="text-[#25bfce]">
                  to production.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-2.5">
                A clear process keeps requirements, feedback, development and
                launch easier to manage throughout the project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="relative bg-[#071923] p-5 min-h-[160px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-[10px] font-semibold text-[#22bfce]">
                    {step.number}
                  </span>

                  <h3 className="text-[15px] font-semibold mt-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-1.5">
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
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-6 lg:gap-10">
              <div>
                <SectionLabel>Industries</SectionLabel>

                <h2
                  id="industries-heading"
                  className="text-[#071923] text-[29px] sm:text-[34px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
                >
                  Different businesses. Different workflows.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-2.5">
                  Website structure and functionality can be adapted to the
                  industry, customer journey and operational requirements of
                  the project.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {industries.map((industry, index) => (
                  <div
                    key={industry}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <div>
                      <span className="text-[8px] font-semibold text-[#0796A8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-[#071923] text-[11px] font-semibold mt-1">
                        {industry}
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
          aria-labelledby="why-devzore-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-6">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="why-devzore-heading"
                className="text-[#071923] text-[29px] sm:text-[34px] md:text-[40px] font-semibold tracking-[-0.04em] leading-[1.08] mt-2.5"
              >
                Built around your business,{" "}
                <span className="text-[#078fa1]">
                  not a template.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-2.5">
                We focus on what the website or application needs to achieve
                for the business and the people who will actually use it.
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

                  <h3 className="text-[#071923] text-[14px] font-semibold mt-3">
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
            RELATED SERVICES
        ===================================================== */}

        <section
          aria-labelledby="related-services-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="related-services-heading"
                  className="text-[#071923] text-[29px] sm:text-[34px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
                >
                  More ways DevZore can help.
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
                  className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <span className="text-[8px] tracking-[0.15em] font-semibold text-[#0796A8]">
                    {service.label}
                  </span>

                  <h3 className="text-[#071923] text-[14px] leading-5 font-semibold mt-2.5">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between mt-3.5 pt-3 border-t border-slate-100">
                    <span className="text-[9px] font-medium text-slate-500 group-hover:text-[#07899a]">
                      Explore service
                    </span>

                    <ArrowUpRight size={13} className="text-[#07899a]" />
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
          aria-labelledby="faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="faq-heading"
                  className="text-[#071923] text-[29px] sm:text-[34px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
                >
                  Web development questions clients actually ask.
                </h2>
              </div>

              <a
                href="#project-enquiry"
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
                      aria-controls={`web-faq-${index}`}
                      className="w-full flex items-center justify-between gap-5 py-3.5 text-left"
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
                      id={`web-faq-${index}`}
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-3xl pb-3.5 text-[12px] leading-6 text-slate-600">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {faqs.length > 3 && (
              <div className="flex justify-center mt-4">
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

        {/* =====================================================
            PROJECT ENQUIRY
        ===================================================== */}

        <section
          id="project-enquiry"
          aria-labelledby="project-enquiry-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute -top-20 left-[5%] w-[450px] h-[450px] rounded-full bg-[#0796A8]/10 blur-[130px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel light>Start a Project</SectionLabel>

                <h2
                  id="project-enquiry-heading"
                  className="text-[29px] sm:text-[34px] md:text-[42px] leading-[1.06] tracking-[-0.04em] font-semibold mt-2.5"
                >
                  Tell us what you{" "}
                  <span className="text-[#25bfce]">
                    want to build.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-3 max-w-lg">
                  Share a few details about your website or web application.
                  We can review the requirements and discuss the most
                  appropriate next step for the project.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Business websites and redesigns",
                    "Custom web applications",
                    "E-commerce and SaaS projects",
                    "Backend and API integrations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#19b9c8]/10 border border-[#19b9c8]/25 flex items-center justify-center">
                        <Check size={10} className="text-[#2ac6d4]" />
                      </div>

                      <span className="text-[11px] font-medium text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.08]">
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
                <div className="grid md:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="web-name"
                      className="block text-[9px] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="web-name"
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
                      htmlFor="web-email"
                      className="block text-[9px] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="web-email"
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
                      htmlFor="web-company"
                      className="block text-[9px] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="web-company"
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
                      htmlFor="web-service"
                      className="block text-[9px] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="web-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Web Development</option>
                      <option>Business Website</option>
                      <option>Website Redesign</option>
                      <option>Custom Web Application</option>
                      <option>E-Commerce Development</option>
                      <option>SaaS Development</option>
                      <option>Backend & API Development</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="web-timeline"
                      className="block text-[9px] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="web-timeline"
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
                      htmlFor="web-message"
                      className="block text-[9px] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="web-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, what you need to build and any important features or requirements..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3.5">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    Share enough detail for us to understand the project. We
                    can discuss specifications and scope in more detail
                    afterwards.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send Project Enquiry
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
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-white text-[14px] font-semibold">
                  Have an idea? We’re here to help you build it.
                </p>

                <p className="text-slate-500 text-[10px] mt-0.5">
                  Web development, custom applications and digital products by
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

export default WebDevelopment;