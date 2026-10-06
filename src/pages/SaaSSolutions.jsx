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
  Cloud,
  CreditCard,
  Database,
  Gauge,
  Layers3,
  LockKeyhole,
  Mail,
  Minus,
  Plus,
  RefreshCw,
  Rocket,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const SaaSSolutions = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "SaaS Platform",
    timeline: "",
    message: "",
  });

  // BACKGROUNDS

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

  // CORE SAAS FEATURES

  const features = [
    {
      icon: <Users size={20} />,
      number: "01",
      title: "User Management",
      description:
        "Registration, authentication, profiles, organizations, roles and permission-based access for your SaaS users.",
    },
    {
      icon: <CreditCard size={20} />,
      number: "02",
      title: "Subscriptions & Billing",
      description:
        "Subscription plans, billing workflows and suitable payment integrations designed around your SaaS business model.",
    },
    {
      icon: <BarChart3 size={20} />,
      number: "03",
      title: "SaaS Dashboards",
      description:
        "Clear dashboards that help users access important information, actions, reports and product functionality.",
    },
    {
      icon: <Workflow size={20} />,
      number: "04",
      title: "Workflow Automation",
      description:
        "Automate repetitive processes and connect important product workflows to make the platform easier to operate.",
    },
    {
      icon: <Database size={20} />,
      number: "05",
      title: "Structured Product Data",
      description:
        "Organized data models and application logic designed around users, subscriptions and product requirements.",
    },
    {
      icon: <ShieldCheck size={20} />,
      number: "06",
      title: "Security & Access",
      description:
        "Authentication, authorization, validation and secure development practices considered throughout the platform.",
    },
  ];

  // DEVELOPMENT STANDARDS

  const standards = [
    {
      icon: <Layers3 size={18} />,
      title: "Product-Focused Architecture",
      description:
        "The application structure is planned around your actual product, users and workflows instead of a generic template.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance Considered",
      description:
        "Frontend behaviour, data loading and application workflows are developed with responsiveness in mind.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security Conscious",
      description:
        "Authentication, permissions, validation and sensitive product workflows are considered throughout development.",
    },
    {
      icon: <Database size={18} />,
      title: "Structured Data",
      description:
        "Application data is organized around product entities, users, organizations and business requirements.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Integration Ready",
      description:
        "The product can connect with suitable payment providers, email services, APIs and other external systems.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "Built for Iteration",
      description:
        "The platform can continue evolving as new workflows, users and product requirements are introduced.",
    },
  ];

  // SAAS TYPES

  const productTypes = [
    {
      icon: <Users size={18} />,
      title: "B2B SaaS",
      description:
        "Software platforms designed for teams, organizations and business customers.",
    },
    {
      icon: <Cloud size={18} />,
      title: "B2C SaaS",
      description:
        "Subscription products and digital services built around individual customer accounts.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Vertical SaaS",
      description:
        "Software designed around the specific workflows and requirements of a particular industry.",
    },
    {
      icon: <Rocket size={18} />,
      title: "SaaS MVPs",
      description:
        "Focused first versions for founders who want to validate their product with real users.",
    },
  ];

  // PRODUCT REQUIREMENTS

  const productRequirements = [
    "Authentication & user accounts",
    "Roles & permission management",
    "Subscription workflows",
    "Dashboards & reporting",
    "Organization or team management",
    "Admin controls",
    "API & third-party integrations",
    "Notifications & product workflows",
  ];

  // PRODUCT BENEFITS

  const benefits = [
    {
      icon: <Rocket size={18} />,
      title: "Focused Product Launch",
      description:
        "Prioritize the workflows required to move from product concept to a usable SaaS application.",
    },
    {
      icon: <Users size={18} />,
      title: "Better User Experience",
      description:
        "Create clear account, dashboard and product workflows around the tasks users need to complete.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Ready for Product Growth",
      description:
        "Build a foundation that can continue evolving as features and business requirements change.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Reliable Product Foundation",
      description:
        "Use structured authentication, permissions and application logic for important product workflows.",
    },
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Product Discovery",
      description:
        "We understand your SaaS idea, users, business model, core workflows and product requirements.",
    },
    {
      number: "02",
      title: "Product Planning",
      description:
        "The feature scope, user journeys, application structure and data requirements are defined.",
    },
    {
      number: "03",
      title: "UI & UX Direction",
      description:
        "Important product screens, dashboards, onboarding and user workflows are planned.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Frontend, backend, authentication, dashboards and required integrations are developed.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "Important user journeys, permissions, responsive layouts and product functionality are reviewed.",
    },
    {
      number: "06",
      title: "Launch & Iteration",
      description:
        "The SaaS product is prepared for deployment and can continue through future improvements.",
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
      icon: <Layers3 size={18} />,
      title: "Built Around Your Product",
      description:
        "Features and workflows are planned around your SaaS idea rather than forcing it into a fixed system.",
    },
    {
      icon: <Rocket size={18} />,
      title: "Product-Focused Development",
      description:
        "Development priorities are connected to real user workflows and business requirements.",
    },
    {
      icon: <Settings size={18} />,
      title: "Professional Engineering",
      description:
        "Application structure is organized for maintenance and continued feature development.",
    },
    {
      icon: <LockKeyhole size={18} />,
      title: "Security Considered",
      description:
        "Authentication, permissions and sensitive SaaS workflows are handled carefully.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Integration Ready",
      description:
        "Suitable payments, email services, APIs and other systems can be connected where required.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "Ready to Evolve",
      description:
        "Your product can continue through maintenance, improvements and new functionality after launch.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "What SaaS solutions can DevZore build?",
      a: "DevZore can build B2B and B2C SaaS platforms, business software, customer portals, dashboards, workflow applications, subscription products, internal tools and other custom multi-user web applications.",
    },
    {
      q: "Can you build a SaaS MVP?",
      a: "Yes. A SaaS MVP can focus on the essential user journeys and product functionality required to validate the idea before investing in a larger feature set.",
    },
    {
      q: "Can you build authentication and user management?",
      a: "Yes. SaaS products can include registration, login, account management, organizations, teams, roles, permissions and administrative access depending on the product requirements.",
    },
    {
      q: "Can subscriptions and billing be integrated?",
      a: "Yes. Subscription plans and payment workflows can be integrated when suitable payment provider access is available for the target market and project.",
    },
    {
      q: "Can you build SaaS dashboards?",
      a: "Yes. Dashboards can include business data, charts, reports, user actions, tables, filters, account information and other product-specific functionality.",
    },
    {
      q: "Can a SaaS platform support multiple organizations?",
      a: "Yes. Depending on the product model, the application can support users, teams, organizations and role-based access structures.",
    },
    {
      q: "Can you integrate third-party APIs?",
      a: "Yes. SaaS products can connect with payment providers, email platforms, authentication systems, storage services and other APIs where suitable access is available.",
    },
    {
      q: "Can you improve an existing SaaS product?",
      a: "Yes. Existing SaaS applications can be reviewed for new features, UI improvements, backend work, integrations, performance improvements or architecture changes.",
    },
    {
      q: "How much does SaaS development cost?",
      a: "The cost depends on product scope, number of workflows, user roles, subscriptions, dashboards, integrations and other functionality. A project-specific estimate can be prepared after reviewing the requirements.",
    },
    {
      q: "How long does SaaS development take?",
      a: "The timeline depends on the size and complexity of the product. A focused MVP and a larger production SaaS platform require different levels of planning, development and testing.",
    },
    {
      q: "Do you provide post-launch SaaS support?",
      a: "Yes. Ongoing work can include maintenance, bug fixes, product improvements, integrations and additional features after launch.",
    },
    {
      q: "Can DevZore work with SaaS founders internationally?",
      a: "Yes. SaaS development can be managed remotely through online meetings, requirement reviews and regular development communication.",
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  // RELATED SERVICES

  const relatedServices = [
    {
      icon: <Rocket size={21} />,
      title: "SaaS Product Development",
      description:
        "Custom SaaS product development covering authentication, dashboards, subscriptions, APIs and application workflows.",
      path: "/saas-product-development",
    },
    {
      icon: <Layers3 size={21} />,
      title: "Startup MVP Development",
      description:
        "Focused MVP development for founders who want to launch and validate an early product.",
      path: "/startup-mvp",
    },
    {
      icon: <Database size={21} />,
      title: "Backend & API Development",
      description:
        "Backend systems, databases, authentication and APIs for modern SaaS applications.",
      path: "/backend-api",
    },
    {
      icon: <Workflow size={21} />,
      title: "UI/UX Design",
      description:
        "Product design for onboarding, dashboards, account areas and complex SaaS workflows.",
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
      `SaaS Project Enquiry - ${formData.name}`
    );

    const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Project Type: ${formData.service}
Timeline: ${formData.timeline || "Not specified"}

Project Requirements:
${formData.message}`
    );

    window.location.href = `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;
  };

  // STRUCTURED DATA

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://devzore.com/saas-solutions#webpage",
    url: "https://devzore.com/saas-solutions",
    name: "SaaS Solutions",
    description:
      "Custom SaaS solutions for subscription products, dashboards, business applications, customer portals, workflow platforms and multi-user software.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/saas-solutions#service",
    name: "SaaS Software Solutions",
    serviceType: "SaaS Development",
    url: "https://devzore.com/saas-solutions",
    description:
      "SaaS software solutions including authentication, user management, dashboards, subscription workflows, APIs and custom application development.",
    provider: {
      "@id": "https://devzore.com/#organization",
    },
    areaServed: "Worldwide",
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
        name: "SaaS Solutions",
        item: "https://devzore.com/saas-solutions",
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
          {JSON.stringify(pageSchema)}
        </script>

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
          aria-labelledby="saas-solutions-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[7%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/12 blur-[140px]" />

            <div className="absolute inset-0 opacity-50" style={darkGrid} />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/96 to-[#04111a]/76" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-28 pb-11 sm:pb-13">
            <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5] mb-5">
                  <Cloud size={14} className="text-[#26becb]" />
                  SaaS Solutions
                </div>

                <h1
                  id="saas-solutions-heading"
                  className="max-w-[780px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[64px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Build a SaaS product ready for{" "}
                  <span className="text-[#22bdca]">
                    real users and growth.
                  </span>
                </h1>

                <p className="max-w-[690px] mt-5 text-[16px] sm:text-[17px] leading-7 text-slate-300">
                  DevZore builds modern SaaS platforms with authentication,
                  dashboards, user management, subscriptions, product
                  workflows and scalable application architecture.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  From a focused SaaS MVP to a larger multi-user platform, the
                  product can be designed around your users, business model and
                  real operational requirements.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#saas-enquiry"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start a Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#saas-features"
                    className="inline-flex justify-center items-center gap-2 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore SaaS Solutions
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "SaaS MVPs",
                    "User Management",
                    "Subscription Workflows",
                    "Ongoing Support",
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

              {/* PRODUCT DASHBOARD */}

              <div className="relative min-h-[360px] lg:min-h-[410px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[410px] h-[410px] rounded-full bg-[#0796A8]/15 blur-[100px]" />

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
                            PRODUCT OVERVIEW
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-3">
                          {[
                            ["Users", "Active"],
                            ["Plans", "Live"],
                            ["System", "Online"],
                          ].map(([title, text]) => (
                            <div
                              key={title}
                              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"
                            >
                              <p className="text-[7px] uppercase tracking-[0.14em] text-slate-500">
                                {title}
                              </p>

                              <p className="text-[10px] font-semibold mt-1.5">
                                {text}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-[1.3fr_0.7fr] gap-3">
                          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                            <div className="flex items-center justify-between mb-4">
                              <p className="text-[9px] font-semibold text-slate-300">
                                Product Activity
                              </p>

                              <BarChart3
                                size={13}
                                className="text-[#28c5d4]"
                              />
                            </div>

                            <div className="flex items-end gap-2 h-20">
                              {[38, 52, 45, 66, 61, 82, 76].map(
                                (height, index) => (
                                  <div
                                    key={index}
                                    className="flex-1 rounded-t bg-[#1bbac8]/70"
                                    style={{
                                      height: `${height}%`,
                                    }}
                                  />
                                )
                              )}
                            </div>
                          </div>

                          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                            <p className="text-[8px] font-semibold text-slate-400">
                              Product Health
                            </p>

                            <div className="mt-3 space-y-2">
                              {[88, 72, 93].map((width, index) => (
                                <div key={index}>
                                  <div className="h-1.5 rounded-full bg-white/[0.06]">
                                    <div
                                      className="h-full rounded-full bg-[#20becd]"
                                      style={{
                                        width: `${width}%`,
                                      }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>

                            <p className="text-[8px] font-semibold text-[#28c5d4] mt-4">
                              SaaS Ready
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-5 top-20 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <Users size={17} className="text-[#29c7d5]" />

                      <p className="text-[8px] font-semibold mt-2">
                        Users
                      </p>
                    </div>

                    <div className="absolute -right-5 top-14 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <CreditCard
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Plans
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <Workflow
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Workflows
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
                  ["01", "Product Discovery"],
                  ["02", "SaaS Planning"],
                  ["03", "Development"],
                  ["04", "Launch & Iteration"],
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
                <SectionLabel>SaaS Product Development</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  From product idea to a{" "}
                  <span className="text-[#0796A8]">
                    working SaaS platform.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Building a SaaS product requires more than creating a set of
                  pages. The product needs clear user journeys, account
                  management, permissions, business logic and workflows that
                  work together as one application.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  We help structure SaaS products around real users and
                  business requirements so the first version can launch with a
                  useful foundation for future development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}

        <section
          id="saas-features"
          aria-labelledby="saas-features-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Core SaaS Features</SectionLabel>

              <h2
                id="saas-features-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Core systems for a practical{" "}
                <span className="text-[#0796A8]">
                  SaaS product.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Build the workflows required for users to access, understand
                and use your product effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center group-hover:bg-[#071923] group-hover:text-[#28c5d4] transition-colors">
                      {feature.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[16px] font-semibold mt-4">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 text-[12px] leading-5 mt-2">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPMENT STANDARDS */}

        <section
          aria-labelledby="saas-standards-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute top-0 right-0 w-[500px] h-[420px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Product Standards</SectionLabel>

              <h2
                id="saas-standards-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                SaaS development focused on{" "}
                <span className="text-[#25bfce]">
                  real product requirements.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Product architecture, user experience and business workflows
                should support one another as the SaaS platform evolves.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {standards.map((item) => (
                <article
                  key={item.title}
                  className="bg-[#071923] p-5 min-h-[170px] hover:bg-[#0a202a] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0c2a35] text-[#27c1cf] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-[14px] font-semibold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-2">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT TYPES */}

        <section
          aria-labelledby="saas-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>SaaS Product Types</SectionLabel>

                <h2
                  id="saas-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  SaaS solutions for different{" "}
                  <span className="text-[#0796A8]">
                    product models.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  The product structure should reflect who uses the software,
                  what they need to accomplish and how the business delivers
                  value.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {productTypes.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-[#071923] text-[13px] font-semibold mt-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT REQUIREMENTS */}

        <section
          aria-labelledby="saas-requirements-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel>Product Requirements</SectionLabel>

                <h2
                  id="saas-requirements-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Connect users, workflows and{" "}
                  <span className="text-[#0796A8]">
                    product operations.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  A SaaS platform usually includes multiple connected parts.
                  Users need accounts, permissions and product workflows while
                  administrators need clear controls over the system.
                </p>

                <p className="text-slate-500 text-[12px] leading-6 mt-3">
                  The exact feature set should be planned around the product
                  rather than added only because another SaaS platform has it.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {productRequirements.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#fbfcfc] p-3.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#edf4f5] flex items-center justify-center">
                      <Check size={12} className="text-[#07899a]" />
                    </div>

                    <span className="text-[11px] font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT IMPACT */}

        <section className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[760px] mb-7">
              <SectionLabel>Product Experience</SectionLabel>

              <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3">
                Build a SaaS experience ready for{" "}
                <span className="text-[#0796A8]">
                  real product usage.
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {benefit.icon}
                  </div>

                  <h3 className="text-[#071923] text-[13px] font-semibold mt-3">
                    {benefit.title}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section
          aria-labelledby="saas-process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="saas-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From SaaS concept to{" "}
                <span className="text-[#25bfce]">
                  working digital product.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured development process keeps product scope, user
                experience and technical implementation aligned.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="bg-[#071923] p-5 min-h-[175px] hover:bg-[#0a202a] transition-colors"
                >
                  <span className="text-[10px] font-semibold text-[#22bfce]">
                    {step.number}
                  </span>

                  <h3 className="text-[15px] font-semibold mt-6">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-[11px] leading-5 mt-2">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}

        <section
          aria-labelledby="saas-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>SaaS Use Cases</SectionLabel>

                <h2
                  id="saas-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  SaaS products for different{" "}
                  <span className="text-[#0796A8]">
                    business workflows.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Product functionality can be shaped around the industry,
                  target users and workflows the software needs to support.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                {useCases.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-3.5"
                  >
                    <span className="text-[8px] font-semibold text-[#0796A8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-[11px] font-semibold text-[#071923] mt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY DEVZORE */}

        <section
          aria-labelledby="why-saas-devzore-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="why-saas-devzore-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                SaaS development focused on{" "}
                <span className="text-[#0796A8]">
                  the product, not just the code.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {whyDevZore.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-[#fbfcfc] p-4 hover:border-[#0796A8]/35 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef4f5] text-[#07899a] flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[#071923] text-[13px] font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-[10px] leading-5 mt-1">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}

        <section
          aria-labelledby="saas-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Related Services</SectionLabel>

              <h2
                id="saas-related-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Supporting services for complete SaaS products.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center">
                    {service.icon}
                  </div>

                  <h3 className="text-[#071923] text-[13px] font-semibold mt-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[10px] leading-5 mt-1.5">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a] mt-3">
                    Explore Service
                    <ArrowUpRight size={11} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section
          aria-labelledby="saas-solutions-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="mb-6">
              <SectionLabel>FAQ</SectionLabel>

              <h2
                id="saas-solutions-faq-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
              >
                SaaS solution questions.
              </h2>

              <p className="text-slate-600 text-[13px] leading-6 mt-3 max-w-2xl">
                Common questions about SaaS MVPs, subscriptions, dashboards,
                authentication, integrations and custom product development.
              </p>
            </div>

            <div className="border-t border-slate-200">
              {visibleFaqs.map((faq) => {
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
                      aria-controls={`saas-solutions-faq-${originalIndex}`}
                      className="w-full flex items-center justify-between gap-5 py-4 text-left"
                    >
                      <span
                        className={`text-[13px] sm:text-[14px] font-semibold ${
                          isOpen
                            ? "text-[#07899a]"
                            : "text-[#071923]"
                        }`}
                      >
                        {faq.q}
                      </span>

                      <span
                        className={`w-7 h-7 flex-shrink-0 rounded-full border flex items-center justify-center ${
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
                      id={`saas-solutions-faq-${originalIndex}`}
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

        {/* PROJECT ENQUIRY */}

        <section
          id="saas-enquiry"
          aria-labelledby="saas-enquiry-heading"
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
                  id="saas-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us about your{" "}
                  <span className="text-[#25bfce]">
                    SaaS product.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share your product idea, target users, core workflows and the
                  functionality you want to include in the first version.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "SaaS MVP development",
                    "Dashboards & user management",
                    "Subscriptions & account workflows",
                    "Existing SaaS improvements",
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
                      htmlFor="saas-solution-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="saas-solution-name"
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
                      htmlFor="saas-solution-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="saas-solution-email"
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
                      htmlFor="saas-solution-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="saas-solution-company"
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
                      htmlFor="saas-solution-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="saas-solution-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>SaaS Platform</option>
                      <option>SaaS MVP</option>
                      <option>B2B SaaS</option>
                      <option>B2C SaaS</option>
                      <option>Customer Portal</option>
                      <option>Business Software</option>
                      <option>Existing SaaS Improvement</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="saas-solution-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Timeline
                    </label>

                    <select
                      id="saas-solution-timeline"
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
                      <option>Still planning</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="saas-solution-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Product Requirements *
                    </label>

                    <textarea
                      id="saas-solution-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your product idea, users, core workflows and important features..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    You do not need a complete technical specification. Share
                    the product idea and the main workflows you want users to
                    complete.
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
                  Have a SaaS idea you want to turn into a real product?
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  Share your idea and core requirements so we can discuss the
                  right product approach.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex self-start items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
              >
                Discuss Your SaaS
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SaaSSolutions;