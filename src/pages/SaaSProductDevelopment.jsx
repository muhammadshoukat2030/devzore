import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Clock3,
  Code2,
  CreditCard,
  Database,
  Gauge,
  Layers3,
  LockKeyhole,
  Mail,
  MenuSquare,
  Minus,
  Plus,
  RefreshCw,
  Rocket,
  Send,
  Server,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const SaaSProductDevelopment = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "SaaS Product Development",
    timeline: "",
    message: "",
  });

  // GRID

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
      icon: <Users size={21} />,
      number: "01",
      title: "Multi-Tenant SaaS Architecture",
      desc:
        "Build SaaS applications with tenant-aware data models, workspace management, organisation settings and role-based access.",
      points: [
        "Workspace management",
        "Tenant-aware data structure",
        "Roles and permissions",
      ],
    },
    {
      icon: <CreditCard size={21} />,
      number: "02",
      title: "Subscription Billing & Payments",
      desc:
        "Implement subscription plans, recurring billing, trials, upgrades, downgrades and payment workflows around your product requirements.",
      points: [
        "Subscription plans",
        "Payment integration",
        "Billing webhooks",
      ],
    },
    {
      icon: <BarChart3 size={21} />,
      number: "03",
      title: "SaaS Dashboards",
      desc:
        "Develop responsive dashboards for account activity, product usage, business metrics, reporting and operational workflows.",
      points: [
        "Product dashboards",
        "Usage reporting",
        "Operational insights",
      ],
    },
    {
      icon: <LockKeyhole size={21} />,
      number: "04",
      title: "Authentication & Access Control",
      desc:
        "Secure user accounts with authentication, team invitations, account management and role-based permissions.",
      points: [
        "Secure authentication",
        "Role-based access",
        "Team invitations",
      ],
    },
    {
      icon: <Zap size={21} />,
      number: "05",
      title: "SaaS API Development",
      desc:
        "Develop backend APIs with validation, authorization, product workflows and integrations with external services.",
      points: [
        "REST API development",
        "Third-party integrations",
        "Validation and authorization",
      ],
    },
    {
      icon: <Settings2 size={21} />,
      number: "06",
      title: "SaaS Admin Panels",
      desc:
        "Build internal administration tools for managing users, organisations, subscriptions, settings and product operations.",
      points: [
        "User management",
        "Subscription management",
        "Product administration",
      ],
    },
  ];

  // STANDARDS

  const standards = [
    {
      icon: <Layers3 size={19} />,
      title: "Product-Focused Architecture",
      desc:
        "Application structure is planned around your users, workflows, business model and expected product growth.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Performance Considered",
      desc:
        "Rendering, application state, assets, APIs and important user interactions are considered throughout development.",
    },
    {
      icon: <LockKeyhole size={19} />,
      title: "Security Conscious",
      desc:
        "Authentication, authorization, validation and secure configuration are applied where the product requires them.",
    },
    {
      icon: <Database size={19} />,
      title: "Data Architecture",
      desc:
        "Database models and relationships are planned around application workflows and product requirements.",
    },
    {
      icon: <Server size={19} />,
      title: "Integration Ready",
      desc:
        "SaaS products can connect with payment providers, email services, analytics platforms and external APIs.",
    },
    {
      icon: <RefreshCw size={19} />,
      title: "Built for Iteration",
      desc:
        "Organised frontend and backend structure makes future product improvements easier to introduce.",
    },
  ];

  // SAAS TYPES

  const saasTypes = [
    {
      icon: <Workflow size={18} />,
      title: "B2B SaaS",
      desc:
        "Software for business workflows, CRM systems, operations, reporting, automation and team collaboration.",
    },
    {
      icon: <Users size={18} />,
      title: "B2C SaaS",
      desc:
        "Customer-facing products with accounts, subscriptions, dashboards and personalised experiences.",
    },
    {
      icon: <Layers3 size={18} />,
      title: "Vertical SaaS",
      desc:
        "Industry-specific platforms designed around specialised business processes and operational requirements.",
    },
    {
      icon: <Rocket size={18} />,
      title: "SaaS MVPs",
      desc:
        "Focused first releases for startups and founders validating a new subscription-based software product.",
    },
  ];

  // REQUIREMENTS

  const productRequirements = [
    "Your product needs multiple user roles or permission levels",
    "You need subscription or recurring payment workflows",
    "Multiple companies or workspaces will use the platform",
    "Users need dashboards, reports or account-specific data",
    "The application needs external API integrations",
    "You need an internal admin panel for product operations",
    "The existing SaaS application is becoming difficult to maintain",
    "The product needs a stronger foundation for future functionality",
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Discovery",
      desc:
        "We understand the SaaS product, target users, business model, core features, user roles and operational requirements.",
    },
    {
      number: "02",
      title: "Product Planning",
      desc:
        "We organise user journeys, data requirements, permissions, subscription logic and technical priorities.",
    },
    {
      number: "03",
      title: "UI & UX Direction",
      desc:
        "Dashboards, onboarding, navigation and important product screens are planned around clear user workflows.",
    },
    {
      number: "04",
      title: "Development",
      desc:
        "Frontend, backend, databases, APIs, authentication and required integrations are developed around the approved scope.",
    },
    {
      number: "05",
      title: "Testing",
      desc:
        "Core workflows, permissions, billing flows, responsive behaviour, integrations and important edge cases are reviewed.",
    },
    {
      number: "06",
      title: "Launch & Iteration",
      desc:
        "The SaaS product is prepared for production and can continue with monitoring, improvements and additional features.",
    },
  ];

  // USE CASES

  const useCases = [
    "CRM Platforms",
    "Project Management",
    "Business Automation",
    "Customer Portals",
    "Analytics Platforms",
    "Booking Software",
    "Education SaaS",
    "Healthcare SaaS",
    "Real Estate Software",
    "Retail Platforms",
    "Logistics Software",
    "Professional Services",
  ];

  // WHY DEVZORE

  const whyDevZore = [
    {
      icon: <MenuSquare size={18} />,
      title: "Built Around Your Product",
      desc:
        "Application structure and functionality are planned around your actual users and workflows instead of a generic SaaS template.",
    },
    {
      icon: <Zap size={18} />,
      title: "Product-Focused Development",
      desc:
        "Development priorities stay connected to real product requirements and important customer workflows.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Professional Engineering",
      desc:
        "Maintainability, permissions, validation, responsive behaviour and future requirements are considered throughout development.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Source Code Handover",
      desc:
        "Repositories, source code and agreed project assets can be handed over according to the project agreement.",
    },
    {
      icon: <Clock3 size={18} />,
      title: "Clear Communication",
      desc:
        "Requirements, feedback, progress and deliverables stay organised throughout SaaS product development.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Ready to Grow",
      desc:
        "The product can be structured so users, integrations and new functionality can be added as the business develops.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "What is SaaS product development?",
      a:
        "SaaS product development is the process of building software that users access online, usually through accounts and often through recurring subscriptions. It can include dashboards, authentication, billing, APIs, databases and product-specific workflows.",
    },
    {
      q: "How much does SaaS development cost?",
      a:
        "The cost depends on product scope, user roles, dashboards, billing requirements, integrations, backend complexity and interface requirements. A project-specific estimate can be prepared after the requirements are reviewed.",
    },
    {
      q: "How long does it take to build a SaaS product?",
      a:
        "The timeline depends on scope and complexity. A focused SaaS MVP normally requires less development work than a larger multi-tenant application with advanced permissions, integrations, billing and reporting.",
    },
    {
      q: "Can DevZore build a SaaS MVP?",
      a:
        "Yes. DevZore can build focused SaaS MVPs with essential functionality such as authentication, dashboards, account management, APIs, databases and subscription workflows.",
    },
    {
      q: "Can you build multi-tenant SaaS software?",
      a:
        "Yes. Multi-tenant architecture can support multiple organisations or workspaces while keeping access and data organised according to the product requirements.",
    },
    {
      q: "Can you integrate subscription billing?",
      a:
        "Yes. Subscription plans, trials, checkout, recurring billing and webhook-based billing events can be implemented with suitable payment providers.",
    },
    {
      q: "Can SaaS applications have different user roles?",
      a:
        "Yes. Role-based access can be implemented for administrators, owners, managers, team members or other product-specific roles.",
    },
    {
      q: "Can you develop dashboards and reporting?",
      a:
        "Yes. SaaS products can include dashboards, charts, activity information, usage data and product-specific reporting features.",
    },
    {
      q: "Can you connect a SaaS product with external APIs?",
      a:
        "Yes. SaaS products can integrate with compatible third-party APIs for payments, email, analytics, storage, authentication and other services.",
    },
    {
      q: "Can DevZore improve an existing SaaS application?",
      a:
        "Yes. Existing SaaS products can be reviewed for frontend structure, backend architecture, APIs, database design, usability, performance and maintainability.",
    },
    {
      q: "Will the SaaS product be mobile responsive?",
      a:
        "Yes. Web-based SaaS interfaces can be developed responsively for desktop, tablet and supported mobile screen sizes.",
    },
    {
      q: "Can you build an admin panel for my SaaS product?",
      a:
        "Yes. Admin panels can be developed for user management, organisations, subscriptions, settings, reports and product operations.",
    },
    {
      q: "Can the product grow after launch?",
      a:
        "Yes. The application can be structured with future development in mind so new functionality, users, integrations and workflows can be added as requirements evolve.",
    },
    {
      q: "Will I receive the source code?",
      a:
        "Source-code ownership, repositories, credentials and project assets can be defined clearly in the project agreement before development begins.",
    },
  ];

  // RELATED SERVICES

  const relatedServices = [
    {
      label: "MVP",
      title: "Startup MVP Development",
      desc:
        "Focused MVP development for validating SaaS, web and mobile product ideas.",
      path: "/startup-mvp",
    },
    {
      label: "BACKEND",
      title: "Backend & API Development",
      desc:
        "APIs, databases, authentication and backend services for SaaS applications.",
      path: "/backend-api",
    },
    {
      label: "FULL STACK",
      title: "MERN Stack Development",
      desc:
        "Full-stack development for dashboards, SaaS platforms and custom business software.",
      path: "/mern-stack-development",
    },
    {
      label: "DESIGN",
      title: "UI/UX Design",
      desc:
        "User-focused interfaces and product flows for SaaS dashboards and digital products.",
      path: "/ui-ux-design",
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
      `SaaS Product Development Enquiry - ${formData.name}`
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

  // SCHEMA

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/saas-product-development#service",
    name: "SaaS Product Development Services",
    url: "https://devzore.com/saas-product-development",
    serviceType: "SaaS Product Development",
    description:
      "Custom SaaS product development services including SaaS MVPs, dashboards, authentication, subscriptions, APIs, admin panels and custom web applications.",
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
      name: "SaaS Development Services",
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
        name: "SaaS Product Development",
        item: "https://devzore.com/saas-product-development",
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
          fontFamily:
            '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
        }}
      >
        {/* HERO */}

        <section
          aria-labelledby="saas-development-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[5%] w-[500px] h-[500px] rounded-full bg-[#078fa5]/10 blur-[130px]" />

            <div
              className="absolute inset-0 opacity-50"
              style={darkGrid}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/95 to-[#04111a]/75" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-16 lg:pb-10">
            <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-[#c4ced5]">
                    <Layers3
                      size={14}
                      className="text-[#26becb]"
                    />

                    SaaS Product Development
                  </div>
                </div>

                <h1
                  id="saas-development-heading"
                  className="max-w-[760px] text-[42px] sm:text-[52px] lg:text-[64px] xl:text-[54px] leading-[1.055] font-semibold tracking-[-0.045em]"
                >
                  Turn your product idea into a{" "}
                  <span className="text-[#22bdca]">
                    working SaaS platform.
                  </span>
                </h1>

                <p className="max-w-[700px] mt-7 text-[17px] sm:text-[18px] lg:text-[13.5px] leading-8 font-normal text-slate-300">
                  Scalable SaaS products and subscription platforms built
                  around your requirements, users and business goals.
                </p>

                <p className="max-w-[650px] mt-1 text-[14px] sm:text-[15px] leading-7 font-normal text-slate-400">
                  From SaaS MVP development to multi-tenant applications,
                  dashboards, subscriptions and APIs, DevZore develops the
                  product around the workflows your customers actually need.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-8">
                  <a
                    href="#project-enquiry"
                    className="inline-flex justify-center items-center gap-3 rounded-lg bg-white hover:bg-slate-100 px-6 py-3.5 text-[13px] font-semibold text-[#071923] transition-all"
                  >
                    Start a Project
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href="#saas-development-services"
                    className="inline-flex justify-center items-center gap-3 px-5 py-3.5 text-[13px] font-semibold text-white transition-colors hover:text-[#26c4d2]"
                  >
                    Explore SaaS Development
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              {/* PRODUCT VISUAL */}

              <div className="relative min-h-[390px] lg:min-h-[450px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[400px] h-[400px] rounded-full bg-[#0796A8]/15 blur-[90px]" />

                  <div className="relative w-full max-w-[570px]">
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

                      <div className="grid grid-cols-[62px_1fr] min-h-[300px]">
                        <div className="border-r border-white/[0.08] p-3">
                          <div className="w-8 h-8 rounded-lg bg-[#1bbac8]/20 border border-[#1bbac8]/30 mb-5" />

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
                          <div className="flex justify-between items-center mb-6">
                            <div>
                              <div className="w-20 h-2 rounded bg-[#1bbac8]/60 mb-2.5" />
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
                                <div className="w-7 h-7 rounded-lg bg-[#159daf]/15 mb-4" />
                                <div className="w-14 h-2 rounded bg-white/30 mb-2" />
                                <div className="w-10 h-2 rounded bg-white/10" />
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
                            <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                              <div className="flex items-end gap-2 h-20">
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

                              <div className="space-y-2.5">
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

                    <div className="absolute -left-6 top-16 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <Users
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Users
                      </p>
                    </div>

                    <div className="absolute -right-5 top-14 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <CreditCard
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Billing
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 w-24 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 p-3 shadow-xl">
                      <BarChart3
                        size={18}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[9px] font-semibold mt-2">
                        Analytics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STRIP */}

          <div className="relative border-t border-white/[0.08] bg-[#06151d]/90">
            <div className="max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "SaaS MVPs"],
                  ["02", "B2B SaaS"],
                  ["03", "Subscription Platforms"],
                  ["04", "Custom SaaS"],
                ].map(([number, title], index) => (
                  <div
                    key={title}
                    className={`py-4 ${
                      index !== 3
                        ? "lg:border-r border-white/[0.07]"
                        : ""
                    } ${index > 0 ? "lg:pl-7" : ""}`}
                  >
                    <span className="block text-[9px] font-bold text-[#1bb8c7] mb-1">
                      {number}
                    </span>

                    <span className="text-[11px] font-semibold text-slate-300">
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
          className="relative py-14 md:py-16 bg-[#f8fafb]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-14">
              <div>
                <SectionLabel>SaaS Development</SectionLabel>

                <h2 className="text-[#071923] text-[30px] sm:text-[36px] md:text-[44px] leading-[1.08] tracking-[-0.035em] font-semibold mt-4">
                  More than software.{" "}
                  <span className="text-[#0796A8]">
                    A product people rely on.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[16px] leading-8 font-normal text-slate-700">
                  A successful SaaS product combines useful workflows,
                  dependable infrastructure and an interface users can
                  understand without unnecessary friction.
                </p>

                <p className="text-[14px] leading-7 mt-4 font-normal text-slate-500">
                  DevZore develops SaaS applications around the actual product
                  model. That can include user accounts, subscriptions,
                  dashboards, teams, administration tools, integrations and
                  product-specific business logic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section
          id="saas-development-services"
          aria-labelledby="saas-services-heading"
          className="py-14 md:py-16 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-10">
              <SectionLabel>What We Build</SectionLabel>

              <h2
                id="saas-services-heading"
                className="text-[#071923] text-[30px] sm:text-[36px] md:text-[44px] leading-[1.08] tracking-[-0.035em] font-semibold mt-4"
              >
                SaaS functionality designed around your product.
              </h2>

              <p className="text-slate-600 text-[14px] sm:text-[15px] leading-7 mt-4 max-w-2xl font-normal">
                Different SaaS products need different combinations of users,
                permissions, data, billing and workflows. We develop the
                application around the product instead of forcing every
                project into the same structure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex justify-between items-start">
                    <div className="w-11 h-11 rounded-xl bg-[#f0f4f5] text-[#075f70] flex items-center justify-center">
                      {service.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[17px] leading-6 font-semibold mt-5">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-[13px] leading-6 mt-2.5 font-normal">
                    {service.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2.5"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-[#0796A8]"
                        />

                        <span className="text-[11px] font-medium text-slate-600">
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

        {/* STANDARDS */}

        <section
          aria-labelledby="saas-standards-heading"
          className="relative py-14 md:py-16 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-10">
              <SectionLabel light>Development Standards</SectionLabel>

              <h2
                id="saas-standards-heading"
                className="text-[30px] sm:text-[36px] md:text-[44px] leading-[1.08] tracking-[-0.035em] font-semibold mt-4"
              >
                Built for users today,{" "}
                <span className="text-[#25bfce]">
                  structured for future growth.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] sm:text-[15px] leading-7 mt-4 max-w-2xl font-normal">
                SaaS development decisions affect usability, security, data,
                billing, maintainability and how easily the product can
                continue evolving.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {standards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/[0.09] bg-white/[0.035] p-5 sm:p-6 hover:bg-white/[0.055] hover:border-[#1bbac8]/25 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg border border-[#1bbac8]/20 bg-[#0e2b36] text-[#27c2d0] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[15px] font-semibold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-[12px] leading-6 text-slate-400 mt-2 font-normal">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SAAS TYPES */}

        <section
          aria-labelledby="saas-types-heading"
          className="py-14 md:py-16 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-14 items-start">
              <div>
                <SectionLabel>SaaS Products</SectionLabel>

                <h2
                  id="saas-types-heading"
                  className="text-[#071923] text-[30px] sm:text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] leading-[1.08] mt-4"
                >
                  Different SaaS models need{" "}
                  <span className="text-[#0796A8]">
                    different product workflows.
                  </span>
                </h2>

                <p className="text-slate-600 text-[14px] sm:text-[15px] leading-7 mt-5 font-normal">
                  The right SaaS architecture depends on who uses the product,
                  how accounts are organised and how customers interact with
                  the software.
                </p>

                <p className="text-slate-500 text-[13px] leading-6 mt-3 font-normal">
                  We adapt the application structure around the business model,
                  product stage, user roles and expected future requirements.
                </p>

                <a
                  href="#project-enquiry"
                  className="inline-flex items-center gap-2 mt-6 text-[12px] font-semibold text-[#07899a] hover:text-[#071923] transition-colors"
                >
                  Discuss Your SaaS Product
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {saasTypes.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-[#0796A8]/35 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] font-semibold text-[16px] leading-6 mt-5">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[12px] leading-6 mt-2 font-normal">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}

        <section
          aria-labelledby="product-requirements-heading"
          className="py-14 md:py-16 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div>
                <SectionLabel>Product Requirements</SectionLabel>

                <div className="w-10 h-10 mt-5 rounded-xl bg-[#edf5f6] text-[#07899a] flex items-center justify-center">
                  <Workflow size={19} />
                </div>

                <h2
                  id="product-requirements-heading"
                  className="text-[#071923] text-[30px] sm:text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] leading-[1.08] mt-5"
                >
                  Does your SaaS product need more than a basic application?
                </h2>

                <p className="text-slate-600 text-[14px] sm:text-[15px] leading-7 mt-5 font-normal">
                  SaaS products often combine users, billing, permissions,
                  reporting, data and third-party services into one connected
                  experience.
                </p>

                <p className="text-slate-500 text-[13px] leading-6 mt-3 font-normal">
                  We can review the product requirements and organise these
                  systems into a practical application structure.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-5 sm:p-6">
                <p className="text-[#071923] text-[10px] font-bold tracking-[0.17em] uppercase">
                  Common SaaS requirements
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
                  {productRequirements.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl bg-white border border-slate-100 p-3.5"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[#0796A8] flex-shrink-0 mt-0.5"
                      />

                      <span className="text-slate-600 text-[11px] leading-5 font-normal">
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
          aria-labelledby="saas-process-heading"
          className="relative py-14 md:py-16 bg-[#071923] text-white"
        >
          <div
            className="absolute inset-0"
            style={darkGrid}
          />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[820px] mb-10">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="saas-process-heading"
                className="text-[30px] sm:text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] leading-[1.08] mt-4"
              >
                From SaaS concept{" "}
                <span className="text-[#25bfce]">
                  to production.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] sm:text-[15px] leading-7 mt-4 font-normal">
                A structured process keeps product requirements, user
                workflows, development, testing and launch easier to manage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="relative bg-[#071923] p-6 min-h-[190px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-[10px] font-bold text-[#22bfce]">
                    {step.number}
                  </span>

                  <h3 className="text-[17px] font-semibold mt-7">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-[12px] leading-6 mt-2.5 font-normal">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}

        <section
          aria-labelledby="saas-use-cases-heading"
          className="py-14 md:py-16 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-14">
              <div>
                <SectionLabel>SaaS Use Cases</SectionLabel>

                <h2
                  id="saas-use-cases-heading"
                  className="text-[#071923] text-[30px] sm:text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] leading-[1.08] mt-4"
                >
                  Different products. Different workflows.
                </h2>

                <p className="text-slate-600 text-[14px] leading-7 mt-5 font-normal">
                  SaaS architecture and functionality can be adapted to the
                  industry, user journey, business model and operational
                  requirements of the product.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {useCases.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-5 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <div>
                      <span className="text-[9px] font-bold text-[#0796A8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-[#071923] text-[13px] font-semibold mt-1.5">
                        {item}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={14}
                      className="text-slate-300 group-hover:text-[#0796A8]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY DEVZORE */}

        <section
          aria-labelledby="why-devzore-heading"
          className="py-14 md:py-16 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[850px] mb-10">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="why-devzore-heading"
                className="text-[#071923] text-[30px] sm:text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] leading-[1.08] mt-4"
              >
                Built around your SaaS product,{" "}
                <span className="text-[#0796A8]">
                  not a generic template.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] sm:text-[15px] leading-7 mt-4 font-normal">
                We focus on what the software needs to achieve for the business
                and the users who will depend on it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyDevZore.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#fbfcfc] p-5 sm:p-6 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#eef4f5] text-[#07899a] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[#071923] text-[16px] leading-6 font-semibold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-[12px] leading-6 mt-2 font-normal">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}

        <section
          aria-labelledby="related-services-heading"
          className="py-14 md:py-16 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9">
              <div>
                <SectionLabel>Related Services</SectionLabel>

                <h2
                  id="related-services-heading"
                  className="text-[#071923] text-[30px] sm:text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] leading-[1.08] mt-4"
                >
                  More ways DevZore can help.
                </h2>
              </div>

              <Link
                to="/allservices"
                onClick={scrollTop}
                className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#07899a]"
              >
                View All Services
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <span className="text-[9px] tracking-[0.16em] font-bold text-[#0796A8]">
                    {service.label}
                  </span>

                  <h3 className="text-[#071923] text-[16px] leading-6 font-semibold mt-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[11px] leading-6 mt-2 font-normal">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-medium text-slate-500 group-hover:text-[#07899a]">
                      Explore service
                    </span>

                    <ArrowUpRight
                      size={14}
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
          aria-labelledby="faq-heading"
          className="py-14 md:py-16 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2
                  id="faq-heading"
                  className="text-[#071923] text-[30px] sm:text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] leading-[1.08] mt-4"
                >
                  SaaS development questions clients actually ask.
                </h2>
              </div>

              <a
                href="#project-enquiry"
                className="self-start md:self-auto inline-flex items-center gap-2 rounded-lg bg-[#071923] px-5 py-3 text-[11px] font-semibold text-white"
              >
                Ask Your Question
                <ArrowRight size={13} />
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
                      aria-controls={`saas-faq-${index}`}
                      className="w-full flex items-center justify-between gap-5 py-5 text-left"
                    >
                      <span
                        className={`text-[14px] sm:text-[15px] font-semibold transition-colors ${
                          isOpen
                            ? "text-[#07899a]"
                            : "text-[#071923]"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={`w-8 h-8 flex-shrink-0 rounded-full border flex items-center justify-center transition-all ${
                          isOpen
                            ? "border-[#0796A8] bg-[#0796A8] text-white"
                            : "border-slate-200 text-[#071923]"
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
                      id={`saas-faq-${index}`}
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-3xl pb-5 text-[13px] leading-7 text-slate-600 font-normal">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {faqs.length > 3 && (
              <div className="flex justify-center mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowAllFaqs((current) => !current);
                    setActiveFaq(null);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#071923]/15 bg-[#f8fafb] px-5 py-3 text-[11px] font-semibold text-[#071923] hover:border-[#0796A8]/50 transition-colors"
                >
                  {showAllFaqs
                    ? "Show Less Questions"
                    : `Show More Questions (${faqs.length - 3})`}

                  {showAllFaqs ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* PROJECT FORM */}

        <section
          id="project-enquiry"
          aria-labelledby="project-enquiry-heading"
          className="relative py-14 md:py-16 bg-[#071923] text-white overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={darkGrid}
          />

          <div className="absolute -top-20 left-[5%] w-[450px] h-[450px] rounded-full bg-[#0796A8]/10 blur-[130px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-9 lg:gap-14">
              <div>
                <SectionLabel light>Start a Project</SectionLabel>

                <h2
                  id="project-enquiry-heading"
                  className="text-[32px] sm:text-[38px] md:text-[48px] leading-[1.07] tracking-[-0.04em] font-semibold mt-4"
                >
                  Tell us what you{" "}
                  <span className="text-[#25bfce]">
                    want to build.
                  </span>
                </h2>

                <p className="text-slate-300 text-[15px] leading-7 mt-5 max-w-lg font-normal">
                  Share a few details about your SaaS product, target users,
                  business model and required workflows. We can review the
                  requirements and discuss the most appropriate next step.
                </p>

                <div className="mt-7 space-y-3.5">
                  {[
                    "SaaS MVP and subscription products",
                    "Multi-tenant platforms",
                    "Dashboards and administration systems",
                    "Backend APIs and integrations",
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

                      <span className="text-[12px] font-medium text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.08]">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-slate-500">
                    Prefer a direct conversation?
                  </p>

                  <a
                    href="mailto:hellodevzore@gmail.com"
                    className="inline-flex items-center gap-2 mt-3 text-[13px] font-medium text-[#26c4d2]"
                  >
                    <Mail size={14} />
                    hellodevzore@gmail.com
                  </a>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.1] bg-[#0a202a]/90 p-5 sm:p-7 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="saas-name"
                      className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-2"
                    >
                      Your Name *
                    </label>

                    <input
                      id="saas-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-4 py-3.5 text-[13px] font-normal text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="saas-email"
                      className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-2"
                    >
                      Email Address *
                    </label>

                    <input
                      id="saas-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-4 py-3.5 text-[13px] font-normal text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="saas-company"
                      className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-2"
                    >
                      Company / Startup
                    </label>

                    <input
                      id="saas-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-4 py-3.5 text-[13px] font-normal text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="saas-service"
                      className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-2"
                    >
                      Project Type
                    </label>

                    <select
                      id="saas-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-4 py-3.5 text-[13px] font-normal text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>SaaS Product Development</option>
                      <option>SaaS MVP Development</option>
                      <option>B2B SaaS</option>
                      <option>B2C SaaS</option>
                      <option>Multi-Tenant SaaS</option>
                      <option>SaaS Dashboard</option>
                      <option>Subscription Platform</option>
                      <option>Existing SaaS Improvement</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="saas-timeline"
                      className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-2"
                    >
                      Preferred Timeline
                    </label>

                    <select
                      id="saas-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-4 py-3.5 text-[13px] font-normal text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
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
                      htmlFor="saas-message"
                      className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-2"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="saas-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your SaaS idea, users, business model, important workflows and features..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-4 py-3.5 text-[13px] font-normal leading-6 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5">
                  <p className="text-[10px] leading-5 text-slate-500 max-w-sm font-normal">
                    Share enough detail for us to understand the product. We
                    can discuss scope, specifications and technical
                    requirements in more detail afterwards.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#1bbdca] hover:bg-[#28c9d5] px-6 py-3.5 text-[12px] font-semibold text-[#071923] transition-colors"
                  >
                    Send Project Enquiry
                    <Send size={14} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}

        <section className="bg-[#06151d] border-t border-white/[0.06]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white text-[15px] font-semibold">
                  Have a SaaS product idea? We’re here to help you build it.
                </p>

                <p className="text-slate-500 text-[11px] leading-5 mt-1.5 font-normal">
                  SaaS platforms, MVPs and custom software development by
                  DevZore.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex self-start items-center gap-2 rounded-lg bg-white px-5 py-3 text-[11px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
              >
                Contact DevZore
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SaaSProductDevelopment;