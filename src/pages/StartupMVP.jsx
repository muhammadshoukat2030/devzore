import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
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
  Lightbulb,
  Mail,
  MenuSquare,
  Minus,
  Monitor,
  Palette,
  Plus,
  RefreshCw,
  Rocket,
  Send,
  Server,
  Settings2,
  ShieldCheck,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const StartupMVP = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Startup MVP Development",
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
     MVP SERVICES
  ========================================================= */

  const services = [
    {
      icon: <Lightbulb size={20} />,
      number: "01",
      title: "MVP Product Planning",
      desc:
        "Turn your startup idea into a focused product scope by defining the core problem, target users, essential workflows and first-release priorities.",
      points: [
        "Product requirement discovery",
        "Core feature prioritisation",
        "MVP scope planning",
      ],
    },
    {
      icon: <Monitor size={20} />,
      number: "02",
      title: "Web Application MVP",
      desc:
        "Build a focused web-based MVP for validating a SaaS product, business platform, marketplace, portal or digital service.",
      points: [
        "Responsive application UI",
        "Core user workflows",
        "Frontend and backend development",
      ],
    },
    {
      icon: <Smartphone size={20} />,
      number: "03",
      title: "Mobile App MVP",
      desc:
        "Develop a mobile-first MVP around the most important product journeys with backend connectivity and practical user experiences.",
      points: [
        "Mobile-focused interface",
        "API integration",
        "Core application features",
      ],
    },
    {
      icon: <Layers3 size={20} />,
      number: "04",
      title: "SaaS MVP Development",
      desc:
        "Develop SaaS MVPs with authentication, dashboards, account management, subscription workflows and product-specific functionality.",
      points: [
        "User authentication",
        "Dashboard development",
        "Subscription workflows",
      ],
    },
    {
      icon: <Database size={20} />,
      number: "05",
      title: "Backend & API Development",
      desc:
        "Build the backend systems, databases and APIs required to support your MVP's users, workflows, integrations and application data.",
      points: [
        "Database architecture",
        "REST API development",
        "Authentication and permissions",
      ],
    },
    {
      icon: <RefreshCw size={20} />,
      number: "06",
      title: "Existing MVP Improvement",
      desc:
        "Review and improve an existing MVP that needs stronger usability, cleaner architecture, better performance or additional functionality.",
      points: [
        "Product and code review",
        "Performance improvements",
        "Feature expansion",
      ],
    },
  ];

  /* =========================================================
     DEVELOPMENT STANDARDS
  ========================================================= */

  const standards = [
    {
      icon: <Target size={19} />,
      title: "Focused MVP Scope",
      desc:
        "Development stays focused on the functionality required to validate the product instead of unnecessary first-version features.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Performance Considered",
      desc:
        "Application loading, rendering, assets and important user interactions are considered throughout development.",
    },
    {
      icon: <Users size={19} />,
      title: "User-Centred Experience",
      desc:
        "Core user journeys are designed around clarity so early users can understand and use the product effectively.",
    },
    {
      icon: <ShieldCheck size={19} />,
      title: "Security Conscious",
      desc:
        "Authentication, authorization, input validation and secure configuration are applied where the product requires them.",
    },
    {
      icon: <Server size={19} />,
      title: "Backend Ready",
      desc:
        "MVPs can connect with databases, APIs, payment providers and other third-party platforms.",
    },
    {
      icon: <Settings2 size={19} />,
      title: "Built for Iteration",
      desc:
        "Organised application structure makes future improvements and additional features easier to introduce.",
    },
  ];

  /* =========================================================
     WHO WE HELP
  ========================================================= */

  const startupTypes = [
    {
      icon: <Lightbulb size={18} />,
      title: "Early-Stage Founders",
      desc:
        "Turn an initial software idea into a usable product that can be tested with real users.",
    },
    {
      icon: <Rocket size={18} />,
      title: "Startups",
      desc:
        "Build and launch the essential version of a new SaaS, web or mobile product.",
    },
    {
      icon: <Globe2 size={18} />,
      title: "Digital Businesses",
      desc:
        "Validate a new digital service, marketplace, portal or online business model.",
    },
    {
      icon: <MenuSquare size={18} />,
      title: "Growing Companies",
      desc:
        "Test new workflows, customer tools or software products before larger development investment.",
    },
  ];

  /* =========================================================
     MVP VALIDATION
  ========================================================= */

  const validationPoints = [
    "The product idea still needs real-user validation",
    "You need to launch core functionality before building more",
    "The complete product scope is becoming too large",
    "You want feedback before investing in advanced features",
    "You need a working product for customers or stakeholders",
    "Your startup needs a usable first version instead of only a prototype",
    "You want to test important business workflows",
    "You need a technical foundation that can continue evolving",
  ];

  /* =========================================================
     PROCESS
  ========================================================= */

  const process = [
    {
      number: "01",
      title: "Discovery",
      desc:
        "We understand the product idea, target users, business goals, required platforms and the main problem the MVP needs to solve.",
    },
    {
      number: "02",
      title: "Scope & Planning",
      desc:
        "We organise requirements into essential MVP functionality and lower-priority features to keep the first release focused.",
    },
    {
      number: "03",
      title: "UI & UX Direction",
      desc:
        "Core screens, user journeys and interfaces are planned around clarity, usability and important product actions.",
    },
    {
      number: "04",
      title: "Development",
      desc:
        "Frontend, backend, database and required integrations are developed around the approved MVP requirements.",
    },
    {
      number: "05",
      title: "Testing",
      desc:
        "Core workflows, responsive behaviour, validation, permissions, integrations and important edge cases are reviewed.",
    },
    {
      number: "06",
      title: "Launch & Iterate",
      desc:
        "The MVP is prepared for production so user feedback can guide improvements and future product development.",
    },
  ];

  /* =========================================================
     MVP USE CASES
  ========================================================= */

  const useCases = [
    "SaaS Products",
    "Marketplace Platforms",
    "Mobile App Startups",
    "Business Portals",
    "E-Commerce MVPs",
    "Booking Platforms",
    "Education Products",
    "Healthcare Platforms",
    "FinTech Concepts",
    "Fitness & Wellness",
    "Internal Business Tools",
    "Service Platforms",
  ];

  /* =========================================================
     WHY DEVZORE
  ========================================================= */

  const whyDevZore = [
    {
      icon: <MenuSquare size={18} />,
      title: "Built Around the MVP Goal",
      desc:
        "Product structure and functionality are planned around what the first release needs to validate instead of using a generic template.",
    },
    {
      icon: <Zap size={18} />,
      title: "Focused Development",
      desc:
        "Development effort stays centred on important product workflows and features that support early validation.",
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
        "Requirements, feedback, progress and deliverables stay organised throughout the MVP development process.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Ready to Grow",
      desc:
        "The MVP can be structured so features, integrations and workflows can be expanded as the product evolves.",
    },
  ];

  /* =========================================================
     FAQ
  ========================================================= */

  const faqs = [
    {
      q: "What is an MVP?",
      a:
        "An MVP, or Minimum Viable Product, is a focused first version of a software product containing the essential functionality needed to solve the main user problem and collect meaningful feedback.",
    },
    {
      q: "Why should a startup build an MVP first?",
      a:
        "An MVP allows a startup to test important product assumptions with real users before investing in a much larger feature set. It helps identify what users actually need and what should be improved next.",
    },
    {
      q: "How much does MVP development cost?",
      a:
        "MVP development cost depends on the number of features, platforms, user roles, interface requirements, backend complexity and integrations. DevZore reviews the requirements before preparing a project-specific proposal.",
    },
    {
      q: "How long does it take to build an MVP?",
      a:
        "The timeline depends on the actual scope. A focused web application may require less development than a marketplace, mobile application or multi-role SaaS product. A realistic estimate can be prepared after the requirements are reviewed.",
    },
    {
      q: "What features should an MVP include?",
      a:
        "An MVP should normally include the functionality required to solve the primary user problem and test the most important product assumptions. Features that are not necessary for early validation can usually be planned for later versions.",
    },
    {
      q: "Can DevZore build a SaaS MVP?",
      a:
        "Yes. DevZore can develop SaaS MVPs with authentication, dashboards, user management, databases, APIs, administration features and subscription workflows based on the product requirements.",
    },
    {
      q: "Can you build a mobile app MVP?",
      a:
        "Yes. Mobile MVPs can be developed with a supporting backend and APIs when a mobile application is the appropriate format for the product.",
    },
    {
      q: "Can you develop a marketplace MVP?",
      a:
        "Yes. Marketplace MVPs can include buyer and seller accounts, listings, search, dashboards, administration and suitable communication or payment workflows.",
    },
    {
      q: "Can you integrate payments or subscriptions?",
      a:
        "Yes. Suitable payment providers can be integrated when payment or subscription functionality is part of the approved MVP scope.",
    },
    {
      q: "Can the MVP grow into a full product later?",
      a:
        "Yes. The project can be structured with future development in mind so new functionality, integrations and workflows can be added after the first version is validated.",
    },
    {
      q: "Can DevZore improve an existing MVP?",
      a:
        "Yes. Existing MVPs can be reviewed for frontend structure, backend architecture, usability, performance, maintainability and required additional features.",
    },
    {
      q: "Do you help prioritise MVP features?",
      a:
        "Yes. Product requirements can be organised into essential MVP functionality and future features so the first development scope remains focused.",
    },
    {
      q: "Can DevZore work with startup clients remotely?",
      a:
        "Yes. MVP projects can be handled remotely through online communication, shared repositories and organised development workflows.",
    },
    {
      q: "Will I receive the source code?",
      a:
        "Source-code ownership, repositories, credentials and project assets can be defined clearly in the project agreement before development begins.",
    },
  ];

  /* =========================================================
     RELATED SERVICES
  ========================================================= */

  const relatedServices = [
    {
      label: "PRODUCT",
      title: "SaaS Product Development",
      desc:
        "SaaS applications with users, dashboards, subscriptions, APIs and product-specific workflows.",
      path: "/saas-product-development",
    },
    {
      label: "BACKEND",
      title: "Backend & API Development",
      desc:
        "APIs, databases, authentication and backend services for modern software products.",
      path: "/backend-api",
    },
    {
      label: "MOBILE",
      title: "Mobile App Development",
      desc:
        "Cross-platform mobile applications designed around users, workflows and business requirements.",
      path: "/mobile-apps",
    },
    {
      label: "FULL STACK",
      title: "MERN Stack Development",
      desc:
        "Full-stack development for dashboards, platforms, portals and custom digital products.",
      path: "/mern-stack-development",
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
      `Startup MVP Development Enquiry - ${formData.name}`
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
    "@id": "https://devzore.com/startup-mvp#service",
    name: "Startup MVP Development Services",
    url: "https://devzore.com/startup-mvp",
    serviceType: "Startup MVP Development",
    description:
      "Startup MVP development services for SaaS products, web applications, mobile apps, marketplaces and custom digital products.",
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
      name: "Startup MVP Development Services",
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
        name: "Startup MVP Development",
        item: "https://devzore.com/startup-mvp",
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
        className="min-h-screen overflow-hidden bg-[#f7f9fa] text-[#071923] antialiased"
        style={{
          fontFamily: '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
        }}
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          aria-labelledby="startup-mvp-heading"
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

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-14 sm:pt-16 lg:pt-20 pb-9 sm:pb-10 lg:pb-12">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-7 lg:gap-10 items-center">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#c4ced5]">
                    <CircleCheck
                      size={13}
                      className="text-[#26becb]"
                    />
                    Startup MVP Development
                  </div>
                </div>

                <h1
                  id="startup-mvp-heading"
                  className="max-w-[760px] text-[38px] sm:text-[46px] lg:text-[58px] xl:text-[64px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Turn your idea into a{" "}
                  <span className="text-[#22bdca]">
                    product people can actually use.
                  </span>
                </h1>

                <p className="max-w-[680px] mt-4 text-[15px] sm:text-[16px] lg:text-[17px] leading-7 font-normal text-slate-300">
                  DevZore develops focused startup MVPs for SaaS products, web
                  applications, mobile apps, marketplaces and custom software
                  ideas.
                </p>

                <p className="max-w-[620px] mt-2 text-[13px] leading-6 font-normal text-slate-400">
                  From product planning and user flows to frontend, backend,
                  databases, integrations and deployment, we build around the
                  core functionality your product needs to validate first.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 mt-5">
                  <a
                    href="#project-enquiry"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start Your MVP
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#mvp-development-services"
                    className="inline-flex justify-center items-center gap-2 px-5 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore MVP Development
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                  {[
                    "Focused Scope",
                    "Responsive",
                    "Backend Ready",
                    "Built for Iteration",
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

              {/* MVP VISUAL */}

              <div className="relative min-h-[340px] lg:min-h-[390px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[350px] h-[350px] rounded-full bg-[#0796A8]/15 blur-[90px]" />

                  <div className="relative w-full max-w-[530px]">
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

                      <div className="grid grid-cols-[62px_1fr] min-h-[270px]">
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

                    <div className="absolute -left-5 top-14 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Target size={17} className="text-[#29c7d5]" />
                      <p className="text-[9px] font-medium mt-2">
                        MVP Scope
                      </p>
                    </div>

                    <div className="absolute -right-4 top-12 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Palette size={17} className="text-[#29c7d5]" />
                      <p className="text-[9px] font-medium mt-2">
                        UI & UX
                      </p>
                    </div>

                    <div className="absolute -right-3 bottom-9 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Rocket size={17} className="text-[#29c7d5]" />
                      <p className="text-[9px] font-medium mt-2">
                        Launch Ready
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
                  ["01", "SaaS MVPs"],
                  ["02", "Web App MVPs"],
                  ["03", "Mobile MVPs"],
                  ["04", "Custom Products"],
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
          className="relative py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-6 lg:gap-12">
              <div>
                <SectionLabel>Startup MVP Development</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5">
                  More than a prototype.{" "}
                  <span className="text-[#0796A8]">
                    A product built to learn.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 font-normal text-slate-700">
                  A strong MVP gives real users enough functionality to
                  experience the main value of your product. It helps you move
                  beyond assumptions and learn from actual usage.
                </p>

                <p className="text-[13px] leading-6 mt-2 font-normal text-slate-500">
                  DevZore develops MVPs around the core product experience.
                  That can mean a SaaS platform, mobile application,
                  marketplace, business portal or another custom software
                  product that needs a focused first release.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="mvp-development-services"
          aria-labelledby="mvp-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-6">
              <SectionLabel>What We Build</SectionLabel>

              <h2
                id="mvp-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5"
              >
                MVP solutions designed around what your product needs to
                validate.
              </h2>

              <p className="text-slate-600 text-[13px] sm:text-[14px] leading-6 mt-2.5 max-w-2xl font-normal">
                Different startup ideas need different levels of functionality.
                We develop the product around its core users and business
                requirements rather than forcing every MVP into the same
                package.
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
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4f5] text-[#075f70] flex items-center justify-center">
                      {service.icon}
                    </div>

                    <span className="text-[9px] font-semibold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[16px] leading-6 font-semibold mt-3.5">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-[12px] leading-5.5 mt-1.5 font-normal">
                    {service.desc}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5">
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
            <div className="max-w-[820px] mb-6">
              <SectionLabel light>Development Standards</SectionLabel>

              <h2
                id="standards-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-2.5"
              >
                Built for validation today,{" "}
                <span className="text-[#25bfce]">
                  without blocking tomorrow.
                </span>
              </h2>

              <p className="text-slate-400 text-[13px] sm:text-[14px] leading-6 mt-2.5 max-w-2xl font-normal">
                An MVP needs more than a quick interface. Development decisions
                also affect usability, performance, security, maintainability
                and how easily the product can evolve after early feedback.
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

                  <h3 className="text-[14px] font-semibold mt-3">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-5 text-slate-400 mt-1.5 font-normal">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO WE HELP
        ===================================================== */}

        <section
          aria-labelledby="startup-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-6 lg:gap-10 items-start">
              <div>
                <SectionLabel>Who We Help</SectionLabel>

                <h2
                  id="startup-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
                >
                  From early concepts to{" "}
                  <span className="text-[#0796A8]">
                    products ready for real users.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] sm:text-[14px] leading-6 mt-3 font-normal">
                  MVP development can support founders, startups and
                  businesses testing a new digital product, software workflow
                  or market opportunity.
                </p>

                <p className="text-slate-500 text-[12px] leading-5 mt-2 font-normal">
                  The scope can be adapted around the product stage, target
                  users, business model and the assumptions that need to be
                  validated first.
                </p>

                <a
                  href="#project-enquiry"
                  className="inline-flex items-center gap-2 mt-4 text-[11px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss Your MVP
                  <ArrowRight size={13} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {startupTypes.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0796A8]/35 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] font-semibold text-[14px] leading-6 mt-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[11px] leading-5 mt-1.5 font-normal">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MVP VALIDATION
        ===================================================== */}

        <section
          aria-labelledby="validation-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              <div>
                <SectionLabel>MVP Validation</SectionLabel>

                <div className="w-9 h-9 mt-3 rounded-xl bg-[#edf5f6] text-[#07899a] flex items-center justify-center">
                  <Target size={18} />
                </div>

                <h2
                  id="validation-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Do you really need the full product before you can test the
                  idea?
                </h2>

                <p className="text-slate-600 text-[13px] sm:text-[14px] leading-6 mt-2.5 font-normal">
                  Building everything at once can make a new product larger,
                  slower and harder to validate. A focused MVP helps move the
                  idea into real usage before unnecessary features are added.
                </p>

                <p className="text-slate-500 text-[12px] leading-5 mt-2 font-normal">
                  We can review the product requirements and help identify the
                  functionality needed for the first meaningful release.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-4 sm:p-5">
                <p className="text-[#071923] text-[9px] font-semibold tracking-[0.17em] uppercase">
                  When an MVP approach makes sense
                </p>

                <div className="grid sm:grid-cols-2 gap-2 mt-3">
                  {validationPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl bg-white border border-slate-100 p-3"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-[#0796A8] flex-shrink-0 mt-0.5"
                      />

                      <span className="text-slate-600 text-[10px] leading-5 font-normal">
                        {item}
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
          <div
            className="absolute inset-0"
            style={darkGrid}
          />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-6">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
              >
                From startup idea{" "}
                <span className="text-[#25bfce]">
                  to a launchable MVP.
                </span>
              </h2>

              <p className="text-slate-400 text-[13px] sm:text-[14px] leading-6 mt-2.5 font-normal">
                A clear process keeps product decisions, requirements,
                feedback, development and launch easier to manage throughout
                the project.
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

                  <p className="text-slate-400 text-[11px] leading-5 mt-1.5 font-normal">
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
          aria-labelledby="use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-6 lg:gap-10">
              <div>
                <SectionLabel>MVP Use Cases</SectionLabel>

                <h2
                  id="use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
                >
                  Different ideas. Different products.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-2.5 font-normal">
                  MVP structure and functionality can be adapted to the
                  product, users, business model and workflows that need to be
                  validated.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {useCases.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 hover:border-[#0796A8]/40 transition-colors"
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
            WHY DEVZORE
        ===================================================== */}

        <section
          aria-labelledby="why-devzore-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[850px] mb-6">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="why-devzore-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
              >
                Built around your product,{" "}
                <span className="text-[#0796A8]">
                  not a generic template.
                </span>
              </h2>

              <p className="text-slate-600 text-[13px] sm:text-[14px] leading-6 mt-2.5 font-normal">
                We focus on what the first product version needs to achieve for
                the business, founders and people who will actually use it.
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

                  <h3 className="text-[#071923] text-[14px] leading-6 font-semibold mt-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-[11px] leading-5 mt-1.5 font-normal">
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
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
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
                  <span className="text-[8px] tracking-[0.16em] font-semibold text-[#0796A8]">
                    {service.label}
                  </span>

                  <h3 className="text-[#071923] text-[14px] leading-5 font-semibold mt-2.5">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-1.5 font-normal">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between mt-3.5 pt-3 border-t border-slate-100">
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
          aria-labelledby="faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="faq-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-2.5"
                >
                  Startup MVP questions founders actually ask.
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
                      aria-controls={`mvp-faq-${index}`}
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
                      id={`mvp-faq-${index}`}
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-3xl pb-3.5 text-[12px] leading-6 text-slate-600 font-normal">
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
                <SectionLabel light>Start Your MVP</SectionLabel>

                <h2
                  id="project-enquiry-heading"
                  className="text-[29px] sm:text-[34px] md:text-[42px] leading-[1.06] tracking-[-0.04em] font-semibold mt-2.5"
                >
                  Tell us what you{" "}
                  <span className="text-[#25bfce]">
                    want to validate and build.
                  </span>
                </h2>

                <p className="text-slate-300 text-[13px] sm:text-[14px] leading-6 mt-3 max-w-lg font-normal">
                  Share a few details about your startup idea, SaaS product,
                  web application or mobile app. We can review the requirements
                  and discuss the most appropriate next step for the MVP.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "SaaS and startup MVPs",
                    "Web and mobile applications",
                    "Backend, APIs and databases",
                    "Authentication, payments and integrations",
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
                      htmlFor="mvp-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="mvp-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] font-normal text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mvp-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="mvp-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] font-normal text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mvp-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company / Startup
                    </label>

                    <input
                      id="mvp-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company or startup name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] font-normal text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mvp-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="mvp-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] font-normal text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Startup MVP Development</option>
                      <option>SaaS MVP Development</option>
                      <option>Web Application MVP</option>
                      <option>Mobile App MVP</option>
                      <option>Marketplace MVP</option>
                      <option>Backend & API Development</option>
                      <option>Existing MVP Improvement</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="mvp-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="mvp-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] font-normal text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
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
                      htmlFor="mvp-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="mvp-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your idea, target users, the problem you want to solve and the core features you believe the MVP needs..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] font-normal leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3.5">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm font-normal">
                    Share enough detail for us to understand the product. We
                    can discuss the scope, technical requirements and next
                    steps in more detail afterwards.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-5 py-3 text-[11px] font-semibold text-[#071923] transition-colors"
                  >
                    Send MVP Enquiry
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
                  Have a startup idea? We’re here to help you build it.
                </p>

                <p className="text-slate-500 text-[10px] leading-5 mt-0.5 font-normal">
                  MVP development, SaaS products and custom software by
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

export default StartupMVP;