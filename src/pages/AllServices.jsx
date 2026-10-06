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
  Code2,
  Gauge,
  Globe,
  HeartHandshake,
  Layers,
  LockKeyhole,
  Mail,
  MessageSquare,
  Minus,
  Palette,
  Plus,
  Rocket,
  Send,
  Server,
  Shield,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";

const AllServices = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    timeline: "",
    message: "",
  });

  const filters = ["All", "Web", "Mobile", "Backend", "Design", "Growth"];

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

  // SERVICES

  const services = [
    {
      icon: <Globe size={21} />,
      number: "01",
      title: "Custom Web Development",
      subtitle: "React · Next.js · Node.js",
      path: "/web-development",
      filter: "Web",
      desc:
        "Custom websites and web applications built around your business requirements with responsive interfaces, maintainable architecture and performance-focused development.",
      points: [
        "Responsive interfaces",
        "Business web applications",
        "API integrations",
      ],
    },
    {
      icon: <Smartphone size={21} />,
      number: "02",
      title: "Mobile App Development",
      subtitle: "React Native · iOS · Android",
      path: "/mobile-apps",
      filter: "Mobile",
      desc:
        "Cross-platform mobile applications designed around practical business workflows with modern interfaces and backend integration.",
      points: [
        "iOS & Android apps",
        "React Native development",
        "Backend integration",
      ],
    },
    {
      icon: <ShoppingCart size={21} />,
      number: "03",
      title: "E-Commerce Development",
      subtitle: "Stores · Payments · Orders",
      path: "/ecommerce",
      filter: "Web",
      desc:
        "Custom online stores and marketplaces with product management, checkout flows, payments, inventory and administrative functionality.",
      points: [
        "Online stores",
        "Payment integrations",
        "Order management",
      ],
    },
    {
      icon: <Server size={21} />,
      number: "04",
      title: "Backend & API Development",
      subtitle: "Node.js · Express · APIs",
      path: "/backend-api",
      filter: "Backend",
      desc:
        "Backend systems and APIs covering authentication, databases, business logic, integrations and maintainable application architecture.",
      points: [
        "REST APIs",
        "Authentication",
        "Database integration",
      ],
    },
    {
      icon: <Layers size={21} />,
      number: "05",
      title: "MERN Stack Development",
      subtitle: "MongoDB · Express · React · Node",
      path: "/mern-stack-development",
      filter: "Web",
      desc:
        "Full-stack JavaScript applications combining React interfaces, Node.js backends, Express APIs and MongoDB databases.",
      points: [
        "Full-stack development",
        "MongoDB architecture",
        "React + Node.js",
      ],
    },
    {
      icon: <TrendingUp size={21} />,
      number: "06",
      title: "SaaS Product Development",
      subtitle: "Accounts · Dashboards · SaaS",
      path: "/saas-product-development",
      filter: "Web",
      desc:
        "Custom SaaS products for startups and businesses requiring user accounts, dashboards, subscriptions and scalable product workflows.",
      points: [
        "SaaS architecture",
        "User management",
        "Product dashboards",
      ],
    },
    {
      icon: <Palette size={21} />,
      number: "07",
      title: "UI/UX Design",
      subtitle: "Figma · UX · Product Design",
      path: "/ui-ux-design",
      filter: "Design",
      desc:
        "User-focused product design for websites, mobile apps, SaaS products and dashboards from UX flows to development-ready interfaces.",
      points: [
        "UX & wireframes",
        "Figma UI design",
        "Design systems",
      ],
    },
    {
      icon: <Rocket size={21} />,
      number: "08",
      title: "Startup MVP Development",
      subtitle: "Planning · MVP · Launch",
      path: "/startup-mvp",
      filter: "Growth",
      desc:
        "Focused MVP development for founders who want to validate a product idea and establish a foundation for future development.",
      points: [
        "MVP planning",
        "Core product features",
        "Launch preparation",
      ],
    },
    {
      icon: <Wrench size={21} />,
      number: "09",
      title: "Maintenance & Support",
      subtitle: "Updates · Fixes · Performance",
      path: "/maintenance",
      filter: "Growth",
      desc:
        "Ongoing technical support for websites and applications covering bug fixing, updates, monitoring and performance improvements.",
      points: [
        "Bug fixing",
        "Application updates",
        "Ongoing support",
      ],
    },
    {
      icon: <Code2 size={21} />,
      number: "10",
      title: "React Development",
      subtitle: "React · Components · Frontend",
      path: "/reactdevelopment",
      filter: "Web",
      desc:
        "React development for interactive websites, SaaS interfaces, dashboards and web applications using reusable frontend components.",
      points: [
        "React applications",
        "Reusable components",
        "API integration",
      ],
    },
    {
      icon: <Shield size={21} />,
      number: "11",
      title: "Cloud & Deployment",
      subtitle: "Deployment · Environments · CI/CD",
      path: "/backend-api",
      filter: "Backend",
      desc:
        "Production deployment and infrastructure support covering application environments, cloud platforms and deployment workflows.",
      points: [
        "Production deployment",
        "Environment setup",
        "Deployment workflows",
      ],
    },
    {
      icon: <TrendingUp size={21} />,
      number: "12",
      title: "SEO Services",
      subtitle: "Technical · On-Page · Search",
      path: "/seo-services",
      filter: "Growth",
      desc:
        "SEO services focused on technical foundations, crawlability, search intent, website structure and organic search visibility.",
      points: [
        "Technical SEO",
        "On-page optimisation",
        "Search visibility",
      ],
    },
    {
      icon: <Zap size={21} />,
      number: "13",
      title: "Digital Marketing",
      subtitle: "Content · Social · Campaigns",
      path: "/digital-marketing",
      filter: "Growth",
      desc:
        "Digital marketing support across social media, paid campaigns, content, lead generation and performance measurement.",
      points: [
        "Digital strategy",
        "Paid campaigns",
        "Content marketing",
      ],
    },
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Discovery",
      desc:
        "We review your business goals, users, requirements and project priorities before defining the solution.",
    },
    {
      number: "02",
      title: "Planning",
      desc:
        "Features, workflows, milestones and technical requirements are organised into a practical project plan.",
    },
    {
      number: "03",
      title: "UI & UX Direction",
      desc:
        "Where needed, user flows, wireframes and interface direction are prepared before implementation begins.",
    },
    {
      number: "04",
      title: "Development",
      desc:
        "Frontend, backend, integrations and application functionality are developed according to the agreed scope.",
    },
    {
      number: "05",
      title: "Testing",
      desc:
        "Important workflows, responsive behaviour and application functionality are reviewed before release.",
    },
    {
      number: "06",
      title: "Launch & Support",
      desc:
        "The product is prepared for production deployment with continued maintenance and development available afterwards.",
    },
  ];

  // WHY DEVZORE

  const reasons = [
    {
      icon: <UsersRound size={18} />,
      title: "Direct Communication",
      desc:
        "Clear communication throughout product planning, development and delivery.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Maintainable Development",
      desc:
        "Applications structured so future updates and development remain easier to manage.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance Considered",
      desc:
        "Frontend, backend and application performance are considered during development.",
    },
    {
      icon: <LockKeyhole size={18} />,
      title: "Security Conscious",
      desc:
        "Authentication, validation and appropriate application security practices are considered.",
    },
    {
      icon: <Layers size={18} />,
      title: "Product-Focused Architecture",
      desc:
        "Technical decisions are made around product requirements instead of fixed templates.",
    },
    {
      icon: <HeartHandshake size={18} />,
      title: "Continued Support",
      desc:
        "Maintenance, improvements and additional development can continue after launch.",
    },
  ];

  // BUSINESS TYPES

  const clientTypes = [
    {
      title: "Startups",
      desc:
        "MVPs and early-stage products designed around focused launch requirements.",
    },
    {
      title: "Growing Businesses",
      desc:
        "Digital systems and applications that support expanding business operations.",
    },
    {
      title: "Digital Products",
      desc:
        "SaaS products, dashboards, portals and other software-based businesses.",
    },
    {
      title: "E-Commerce Brands",
      desc:
        "Online stores, marketplaces and supporting commerce applications.",
    },
    {
      title: "Service Businesses",
      desc:
        "Websites, customer portals and systems supporting service delivery.",
    },
    {
      title: "Existing Software Teams",
      desc:
        "Development support for existing products, applications and codebases.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "How much does software development cost?",
      a:
        "Project cost depends on features, design requirements, integrations, technical complexity and overall scope. After reviewing your requirements, DevZore can prepare a project-specific estimate and development approach.",
    },
    {
      q: "How long does a software project take?",
      a:
        "Development time varies by project. A focused website may require less work than a SaaS product, marketplace or mobile application. A timeline can be estimated after the actual requirements are defined.",
    },
    {
      q: "Can DevZore work with international clients?",
      a:
        "Yes. DevZore provides services remotely and projects can be managed through online meetings, agreed communication channels and regular development updates.",
    },
    {
      q: "Will I own my source code?",
      a:
        "Source-code access, repositories, design files and other project deliverables can be clearly defined in the project agreement before development begins.",
    },
    {
      q: "What technologies does DevZore work with?",
      a:
        "The technology depends on project requirements. Development work can include modern frontend, backend, database, mobile and deployment technologies suited to the application being built.",
    },
    {
      q: "Do you provide maintenance after launch?",
      a:
        "Yes. Ongoing support can include bug fixing, updates, performance improvements, maintenance and additional feature development after launch.",
    },
    {
      q: "How will I communicate during development?",
      a:
        "Project communication can take place through email, WhatsApp, online meetings and other agreed channels according to the project requirements.",
    },
    {
      q: "Can you work on an existing project or codebase?",
      a:
        "Yes. Existing applications can be reviewed first to understand their architecture, dependencies, current issues and technical requirements before changes are planned.",
    },
  ];

  // FILTERING

  const filteredServices =
    activeFilter === "All"
      ? services
      : services.filter((service) => service.filter === activeFilter);

  const displayedServices =
    activeFilter === "All" && !showAllServices
      ? filteredServices.slice(0, 6)
      : filteredServices;

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

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
      `DevZore Project Enquiry - ${formData.name}`
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
          "@id": "https://devzore.com/#organization",
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
          aria-labelledby="allservices-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[6%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/12 blur-[140px]" />

            <div
              className="absolute inset-0 opacity-50"
              style={darkGrid}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/96 to-[#04111a]/75" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-28 pb-11 sm:pb-13">
            <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5] mb-5">
                  <Layers
                    size={14}
                    className="text-[#26becb]"
                  />
                  Software Development Services
                </div>

                <h1
                  id="allservices-heading"
                  className="max-w-[800px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[64px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Digital solutions built around{" "}
                  <span className="text-[#22bdca]">
                    real business requirements.
                  </span>
                </h1>

                <p className="max-w-[700px] mt-5 text-[16px] sm:text-[17px] leading-7 text-slate-300">
                  DevZore provides web development, mobile applications, SaaS
                  development, e-commerce, backend engineering, UI/UX design
                  and digital growth services.
                </p>

                <p className="max-w-[660px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  Services can be combined from planning and design through
                  development, deployment and ongoing support according to the
                  needs of your project.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#project-enquiry"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start a Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#services"
                    className="inline-flex justify-center items-center gap-2 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore Services
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "Web Applications",
                    "Mobile Apps",
                    "SaaS Products",
                    "Business Systems",
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

              {/* SERVICES VISUAL */}

              <div className="relative min-h-[365px] lg:min-h-[410px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[400px] h-[400px] rounded-full bg-[#0796A8]/15 blur-[100px]" />

                  <div className="relative w-full max-w-[540px]">
                    <div className="rounded-[20px] border border-white/10 bg-[#091d27]/95 shadow-[0_35px_90px_rgba(0,0,0,0.45)] overflow-hidden">
                      <div className="h-9 px-4 border-b border-white/10 bg-[#0b222d] flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {[1, 2, 3].map((item) => (
                            <span
                              key={item}
                              className="w-2 h-2 rounded-full bg-white/20"
                            />
                          ))}
                        </div>

                        <div className="w-[44%] h-4 rounded bg-white/[0.05]" />

                        <div className="w-5" />
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="w-20 h-2 rounded bg-[#1bbac8]/60 mb-2" />
                            <div className="w-36 h-3 rounded bg-white/80" />
                          </div>

                          <div className="rounded-lg border border-[#21bfcd]/20 bg-[#21bfcd]/10 px-3 py-1.5 text-[8px] font-semibold text-[#2bc6d3]">
                            DEVZORE SERVICES
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {[
                            [<Globe size={16} />, "Web Development"],
                            [<Smartphone size={16} />, "Mobile Apps"],
                            [<TrendingUp size={16} />, "SaaS Products"],
                            [<Server size={16} />, "Backend APIs"],
                            [<Palette size={16} />, "UI/UX Design"],
                            [<Rocket size={16} />, "Startup MVP"],
                          ].map(([icon, title]) => (
                            <div
                              key={title}
                              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"
                            >
                              <div className="w-7 h-7 rounded-lg bg-[#0f303b] text-[#28c3d0] flex items-center justify-center mb-3">
                                {icon}
                              </div>

                              <p className="text-[9px] font-semibold text-slate-300">
                                {title}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-5 top-20 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <Code2
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Development
                      </p>
                    </div>

                    <div className="absolute -right-5 top-14 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <Layers
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Products
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-9 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <HeartHandshake
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CAPABILITIES */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "Product Planning"],
                  ["02", "UI & UX"],
                  ["03", "Engineering"],
                  ["04", "Launch & Support"],
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
          className="py-10 md:py-12 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 lg:gap-12">
              <div>
                <SectionLabel>What We Do</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  Services designed around{" "}
                  <span className="text-[#0796A8]">
                    complete digital products.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Some projects need only a website. Others need UI/UX,
                  backend APIs, dashboards, mobile applications, SaaS
                  workflows or ongoing support.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  DevZore combines the relevant services around your project so
                  design, development and technical implementation work as one
                  connected solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FILTER */}

        <section className="sticky top-[70px] z-30 border-y border-slate-200 bg-white/95 backdrop-blur-xl">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-3">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const count =
                  filter === "All"
                    ? services.length
                    : services.filter(
                        (service) => service.filter === filter
                      ).length;

                const active = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setActiveFilter(filter);
                      setShowAllServices(false);
                    }}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-[10px] font-semibold transition-all ${
                      active
                        ? "bg-[#071923] border-[#071923] text-white"
                        : "bg-white border-slate-200 text-slate-600 hover:border-[#0796A8]/40 hover:text-[#07899a]"
                    }`}
                  >
                    {filter}

                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[8px] ${
                        active
                          ? "bg-white/10 text-slate-300"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section
          id="services"
          aria-labelledby="services-heading"
          className="py-10 md:py-12 bg-white scroll-mt-28"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel>Our Services</SectionLabel>

              <h2
                id="services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Explore our development and growth services.
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3 max-w-2xl">
                Choose a service to see its capabilities, approach and the type
                of products it can support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedServices.map((service) => (
                <Link
                  key={service.title}
                  to={service.path}
                  onClick={scrollTop}
                  aria-label={`Explore ${service.title}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f4f5] text-[#075f70] flex items-center justify-center group-hover:bg-[#071923] group-hover:text-[#25c2cf] transition-colors">
                      {service.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[16px] leading-6 font-semibold mt-4">
                    {service.title}
                  </h3>

                  <p className="text-[#07899a] text-[9px] font-semibold tracking-[0.04em] mt-1">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 text-[12px] leading-5 mt-3">
                    {service.desc}
                  </p>

                  <div className="mt-4 space-y-2">
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

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[9px] font-semibold text-slate-500 group-hover:text-[#07899a]">
                      Explore Service
                    </span>

                    <ArrowUpRight
                      size={13}
                      className="text-[#07899a]"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {activeFilter === "All" && services.length > 6 && (
              <div className="flex justify-center mt-6">
                <button
                  type="button"
                  onClick={() =>
                    setShowAllServices((current) => !current)
                  }
                  className="inline-flex items-center gap-2 rounded-lg border border-[#071923]/15 bg-[#f8fafb] px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:border-[#0796A8]/50 transition-colors"
                >
                  {showAllServices
                    ? "Show Fewer Services"
                    : `View All ${services.length} Services`}

                  {showAllServices ? (
                    <ChevronUp size={13} />
                  ) : (
                    <ChevronDown size={13} />
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* PROCESS */}

        <section
          aria-labelledby="process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div
            className="absolute inset-0"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[420px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                A clear path from{" "}
                <span className="text-[#25bfce]">
                  requirements to launch.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                A structured process keeps product decisions, development and
                delivery easier to understand throughout the project.
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

        {/* CLIENT TYPES */}

        <section
          aria-labelledby="client-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.74fr_1.26fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Who We Build For</SectionLabel>

                <h2
                  id="client-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Digital products for different stages of business growth.
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  The project scope can be adapted around a new idea, an
                  existing business or an already-running software product.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {clientTypes.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <span className="text-[8px] font-semibold text-[#0796A8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-[#071923] text-[13px] font-semibold mt-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY DEVZORE */}

        <section
          aria-labelledby="why-devzore-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Why DevZore</SectionLabel>

                <h2
                  id="why-devzore-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
                >
                  Development focused on{" "}
                  <span className="text-[#0796A8]">
                    the complete product.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Design, frontend, backend and product requirements need to
                  work together. Our development approach considers those
                  pieces as one system.
                </p>

                <Link
                  to="/about"
                  onClick={scrollTop}
                  className="inline-flex items-center gap-2 mt-4 text-[10px] font-semibold text-[#07899a]"
                >
                  Learn About DevZore
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {reasons.map((reason) => (
                  <article
                    key={reason.title}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-[#fbfcfc] p-4 hover:border-[#0796A8]/35 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex-shrink-0 flex items-center justify-center">
                      {reason.icon}
                    </div>

                    <div>
                      <h3 className="text-[#071923] text-[13px] font-semibold">
                        {reason.title}
                      </h3>

                      <p className="text-slate-500 text-[10px] leading-5 mt-1">
                        {reason.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section
          aria-labelledby="faq-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="faq-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
                >
                  Questions businesses commonly ask before starting.
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
                const originalIndex = faqs.findIndex(
                  (item) => item.q === faq.q
                );

                const isOpen = activeFaq === originalIndex;

                return (
                  <div
                    key={faq.q}
                    className="border-b border-slate-200"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isOpen ? null : originalIndex)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`allservices-faq-${originalIndex}`}
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
                            : "border-slate-200 bg-white text-[#071923]"
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
                      id={`allservices-faq-${originalIndex}`}
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
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel light>Start a Project</SectionLabel>

                <h2
                  id="project-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us what you want{" "}
                  <span className="text-[#25bfce]">
                    to build.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share your project idea, required functionality and current
                  stage. We can discuss the suitable service combination and
                  development approach.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Web and mobile applications",
                    "SaaS and startup products",
                    "Backend and API development",
                    "Design, launch and ongoing support",
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
                    Prefer email?
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

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.1] bg-[#0a202a]/90 p-5 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="services-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="services-name"
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
                      htmlFor="services-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="services-email"
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
                      htmlFor="services-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="services-company"
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
                      htmlFor="services-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Service
                    </label>

                    <select
                      id="services-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>E-Commerce Development</option>
                      <option>Backend & API Development</option>
                      <option>MERN Stack Development</option>
                      <option>SaaS Product Development</option>
                      <option>UI/UX Design</option>
                      <option>Startup MVP Development</option>
                      <option>Maintenance & Support</option>
                      <option>React Development</option>
                      <option>SEO Services</option>
                      <option>Digital Marketing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="services-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Timeline
                    </label>

                    <select
                      id="services-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option value="">Select a timeline</option>
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="services-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="services-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you want to build, important features and any existing system or reference..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    Share the main requirements and we can discuss the most
                    suitable development approach.
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

        {/* BOTTOM CTA */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white text-[14px] font-semibold">
                  Not sure which service your project needs?
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  Share the requirements and DevZore can help define the right
                  development scope.
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

export default AllServices;