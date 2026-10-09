import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Database,
  Globe,
  HeartHandshake,
  LayoutDashboard,
  Mail,
  Minus,
  Plus,
  Rocket,
  Send,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const BusinessSolutions = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Business Software Solution",
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

  // BUSINESS SOLUTIONS

  const solutions = [
    {
      icon: <Globe size={20} />,
      number: "01",
      title: "Business Websites",
      description:
        "Professional and responsive websites designed around your services, customers and business goals.",
      path: "/web-development",
    },
    {
      icon: <LayoutDashboard size={20} />,
      number: "02",
      title: "Business Web Applications",
      description:
        "Custom web applications and dashboards for managing operations, customers, workflows and business data.",
      path: "/web-development",
    },
    {
      icon: <ShoppingCart size={20} />,
      number: "03",
      title: "E-Commerce Solutions",
      description:
        "Custom online stores with product management, checkout workflows, payments, inventory and administration.",
      path: "/ecommerce",
    },
    {
      icon: <Settings size={20} />,
      number: "04",
      title: "Custom Software",
      description:
        "Purpose-built software designed around your existing processes, operational requirements and long-term business goals.",
      path: "/custom-software-solutions",
    },
    {
      icon: <Workflow size={20} />,
      number: "05",
      title: "Process Automation",
      description:
        "Reduce repetitive work by connecting workflows, data and business processes through practical software automation.",
      path: "/contact",
    },
    {
      icon: <Database size={20} />,
      number: "06",
      title: "Management Systems",
      description:
        "Centralised systems for customers, sales, inventory, reports, employees and other important business operations.",
      path: "/management-systems",
    },
  ];

  // DEVELOPMENT STANDARDS

  const standards = [
    {
      icon: <Target size={18} />,
      title: "Business-Focused Planning",
      description:
        "Features and workflows are planned around the actual operational needs of the business.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Workflow-Driven Architecture",
      description:
        "Application structure follows real processes rather than forcing the business into a generic software model.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security Conscious",
      description:
        "Authentication, permissions, validation and access controls are considered where the application requires them.",
    },
    {
      icon: <Zap size={18} />,
      title: "Performance Considered",
      description:
        "Frontend, backend and database performance are considered throughout application development.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Maintainable Development",
      description:
        "Reusable components and clear application structure help make future maintenance and updates easier.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Built for Growth",
      description:
        "The software foundation can continue evolving as users, workflows and business requirements expand.",
    },
  ];

  // BUSINESS TYPES

  const businessTypes = [
    {
      icon: <Building2 size={18} />,
      title: "Small Businesses",
      description:
        "Professional websites, internal tools and management systems that support everyday business operations.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Growing Companies",
      description:
        "Custom systems that help teams manage larger workflows, customers, data and operational complexity.",
    },
    {
      icon: <ShoppingCart size={18} />,
      title: "E-Commerce Businesses",
      description:
        "Commerce platforms, inventory workflows, order management and customer-facing shopping experiences.",
    },
    {
      icon: <Users size={18} />,
      title: "Service Businesses",
      description:
        "Digital systems for enquiries, customer management, bookings, workflows and internal administration.",
    },
  ];

  // BUSINESS REQUIREMENTS

  const businessRequirements = [
    "Centralise important business data",
    "Reduce repetitive manual processes",
    "Improve internal workflows",
    "Manage customers more clearly",
    "Connect APIs and third-party services",
    "Build dashboards and reporting",
    "Improve customer-facing experiences",
    "Prepare systems for future growth",
  ];

  // BUSINESS IMPACT

  const benefits = [
    {
      icon: <Zap size={18} />,
      title: "Improve Efficiency",
      description:
        "Reduce repetitive work and make everyday business operations easier to manage.",
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Better Business Visibility",
      description:
        "Organise important information into useful dashboards, reports and operational views.",
    },
    {
      icon: <Users size={18} />,
      title: "Better Customer Experience",
      description:
        "Create smoother digital experiences for customers interacting with your business.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Reliable Operations",
      description:
        "Develop business software with maintainability, access control and operational reliability in mind.",
    },
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Business Discovery",
      description:
        "We understand your business model, users, current workflows, operational challenges and project objectives.",
    },
    {
      number: "02",
      title: "Solution Planning",
      description:
        "Required features, user roles, workflows, data requirements and integrations are organised into a practical solution.",
    },
    {
      number: "03",
      title: "UI & UX Direction",
      description:
        "Important screens, dashboards and user journeys are planned before the complete application is developed.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "The frontend, backend, databases, APIs and required business functionality are developed according to the agreed scope.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "Important workflows, permissions, responsive behaviour and application functionality are reviewed before release.",
    },
    {
      number: "06",
      title: "Launch & Improvement",
      description:
        "The solution is prepared for deployment and can continue through maintenance, additional features and future improvements.",
    },
  ];

  // USE CASES

  const useCases = [
    "CRM Systems",
    "Sales Management",
    "Inventory Systems",
    "Employee Portals",
    "Customer Portals",
    "Booking Systems",
    "Business Dashboards",
    "Order Management",
    "Reporting Platforms",
    "Workflow Automation",
    "Service Management",
    "Internal Business Tools",
  ];

  // WHY DEVZORE

  const whyDevZore = [
    {
      icon: <Target size={18} />,
      title: "Built Around Your Business",
      description:
        "The solution is planned around real workflows instead of applying the same software structure to every company.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Process-Focused Development",
      description:
        "Business processes, users and operational requirements guide the structure of the application.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Professional Engineering",
      description:
        "Frontend, backend and database development are structured for future maintenance and improvement.",
    },
    {
      icon: <Users size={18} />,
      title: "Clear Communication",
      description:
        "Requirements, workflows and development progress can be reviewed throughout the project.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Ready to Grow",
      description:
        "The application can continue evolving as teams, customers and operational needs expand.",
    },
    {
      icon: <HeartHandshake size={18} />,
      title: "Ongoing Support",
      description:
        "Maintenance and continued feature development can be provided after the initial launch.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "What business software solutions does DevZore provide?",
      a: "DevZore provides custom business websites, web applications, management systems, e-commerce platforms, dashboards, backend systems, process automation and custom software based on business requirements.",
    },
    {
      q: "Can DevZore build custom software for my business?",
      a: "Yes. Custom software can be developed around your existing workflows, users, business rules, reporting requirements, integrations and operational processes.",
    },
    {
      q: "What types of businesses can use custom software?",
      a: "Custom software can support service businesses, retailers, e-commerce companies, growing organisations, startups and businesses with workflows that are difficult to manage using generic software.",
    },
    {
      q: "How much does custom business software cost?",
      a: "Cost depends on the number of users, workflows, screens, business rules, integrations, reporting requirements and overall technical complexity. A project-specific estimate can be prepared after the scope is reviewed.",
    },
    {
      q: "How long does business software development take?",
      a: "The timeline depends on the size and complexity of the system. A focused internal tool may require less development than a larger multi-role management platform. A realistic timeline can be estimated after the requirements are defined.",
    },
    {
      q: "Can you automate manual business processes?",
      a: "Yes. Where appropriate, repetitive workflows can be replaced or supported with custom software, automated actions, integrations and centralised data management.",
    },
    {
      q: "Can you build dashboards and reports?",
      a: "Yes. Business applications can include dashboards, reports, filters, tables, analytics views and other interfaces required to understand operational data.",
    },
    {
      q: "Can different employees have different permissions?",
      a: "Yes. Applications can include role-based permissions and access controls so different users can access the features and information appropriate to their responsibilities.",
    },
    {
      q: "Can existing systems be connected through APIs?",
      a: "Yes. Where suitable APIs are available, business software can connect to payment systems, email services, external applications and other third-party platforms.",
    },
    {
      q: "Can DevZore improve an existing business application?",
      a: "Yes. Existing applications can be reviewed for new functionality, workflow improvements, UI updates, backend changes, integrations, performance or maintenance requirements.",
    },
    {
      q: "Do you provide ongoing software maintenance?",
      a: "Yes. Ongoing support can include bug fixes, technical maintenance, feature development, application improvements and other agreed work after launch.",
    },
    {
      q: "Can DevZore work with businesses remotely?",
      a: "Yes. Business software projects can be managed remotely using online meetings, agreed communication channels, requirement reviews and development updates.",
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  // RELATED SERVICES

  const relatedServices = [
    {
      icon: <Settings size={21} />,
      title: "Custom Software Solutions",
      description:
        "Purpose-built applications designed around specific business operations, workflows and users.",
      path: "/custom-software-solutions",
    },
    {
      icon: <Database size={21} />,
      title: "Management Systems",
      description:
        "Centralised systems for managing customers, operations, inventory, reporting and internal workflows.",
      path: "/management-systems",
    },
    {
      icon: <ShoppingCart size={21} />,
      title: "E-Commerce Development",
      description:
        "Custom online stores with product management, payments, orders, inventory and administration.",
      path: "/ecommerce",
    },
    {
      icon: <Globe size={21} />,
      title: "Web Development",
      description:
        "Responsive business websites and custom web applications built around practical requirements.",
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
      `Business Software Enquiry - ${formData.name}`
    );

    const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Project Type: ${formData.service}
Timeline: ${formData.timeline || "Not specified"}

Business Requirements:
${formData.message}`
    );

    window.location.href = `mailto:hellodevzore@gmail.com?subject=${subject}&body=${body}`;
  };

  // STRUCTURED DATA

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://devzore.com/business-solutions#webpage",
    url: "https://devzore.com/business-solutions",
    name: "Business Software Solutions",
    description:
      "Custom business software solutions including business websites, web applications, management systems, e-commerce platforms, workflow automation and custom software development.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
    },
  };

  const solutionsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Business Software Solutions",
    itemListElement: solutions.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: solution.title,
        description: solution.description,
        url: `https://devzore.com${solution.path}`,
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
        name: "Business Solutions",
        item: "https://devzore.com/business-solutions",
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
          {JSON.stringify(solutionsSchema)}
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
          aria-labelledby="business-solutions-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[8%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/12 blur-[140px]" />

            <div className="absolute inset-0 opacity-50" style={darkGrid} />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/96 to-[#04111a]/75" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-24 pb-11 sm:pb-13">
            <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5] mb-5">
                  <Building2 size={14} className="text-[#26becb]" />
                  Business Solutions
                </div>

                <h1
                  id="business-solutions-heading"
                  className="max-w-[780px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[53px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Digital solutions built around{" "}
                  <span className="text-[#22bdca]">
                    real business operations.
                  </span>
                </h1>

                <p className="max-w-[690px] mt-4 text-[16px] sm:text-[13.5px] leading-7 text-slate-300">
                  From business websites and custom applications to management
                  systems, e-commerce platforms and workflow automation,
                  DevZore builds software around the way your business
                  actually works.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  Improve internal processes, customer experiences and access
                  to important business information through purpose-built
                  digital solutions.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#business-enquiry"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start a Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#business-solutions"
                    className="inline-flex justify-center items-center gap-2 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore Business Solutions
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "Custom Software",
                    "Business Automation",
                    "Management Systems",
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

              {/* BUSINESS DASHBOARD */}

              <div className="relative min-h-[360px] lg:min-h-[410px] hidden md:block">
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
                            BUSINESS OVERVIEW
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-3">
                          {[
                            ["Customers", "Active"],
                            ["Orders", "Live"],
                            ["Reports", "Ready"],
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
                                Business Activity
                              </p>

                              <BarChart3
                                size={13}
                                className="text-[#28c5d4]"
                              />
                            </div>

                            <div className="flex items-end gap-2 h-20">
                              {[38, 54, 42, 68, 58, 82, 72].map(
                                (height, index) => (
                                  <div
                                    key={index}
                                    className="flex-1 rounded-t bg-[#1bbac8]/70"
                                    style={{ height: `${height}%` }}
                                  />
                                )
                              )}
                            </div>
                          </div>

                          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                            <p className="text-[8px] font-semibold text-slate-400">
                              Workflow
                            </p>

                            <div className="mt-3 space-y-2">
                              {[78, 55, 88].map((width, index) => (
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
                              Operations Connected
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-5 top-20 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <Users
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Customers
                      </p>
                    </div>

                    <div className="absolute -right-5 top-14 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <Workflow
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Workflow
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-10 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <TrendingUp
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Growth
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
                  ["01", "Business Discovery"],
                  ["02", "Workflow Planning"],
                  ["03", "Software Development"],
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
                <SectionLabel>
                  Built Around Your Business
                </SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  Technology should solve{" "}
                  <span className="text-[#0796A8]">
                    real business problems.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Every business operates differently. Instead of forcing your
                  team into generic workflows, software can be designed around
                  the processes, users and information that matter to your
                  organisation.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  The goal is to create practical digital systems that make
                  operations easier to manage while providing a foundation for
                  future improvements as the business evolves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS SOLUTIONS */}

        <section
          id="business-solutions"
          aria-labelledby="business-solutions-list-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>What We Build</SectionLabel>

              <h2
                id="business-solutions-list-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Business solutions designed around{" "}
                <span className="text-[#0796A8]">
                  practical operations.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Build complete business software or improve a specific part of
                your digital operation depending on your current requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map((solution) => (
                <Link
                  key={solution.title}
                  to={solution.path}
                  onClick={scrollTop}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center group-hover:bg-[#071923] group-hover:text-[#28c5d4] transition-colors">
                      {solution.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {solution.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[16px] font-semibold mt-4">
                    {solution.title}
                  </h3>

                  <p className="text-slate-600 text-[12px] leading-5 mt-2">
                    {solution.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#07899a] mt-4">
                    Explore Solution
                    <ArrowUpRight size={11} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPMENT STANDARDS */}

        <section
          aria-labelledby="business-standards-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute top-0 right-0 w-[500px] h-[420px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>
                Development Standards
              </SectionLabel>

              <h2
                id="business-standards-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Software designed to support{" "}
                <span className="text-[#25bfce]">
                  real business workflows.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Business software should remain understandable, maintainable
                and practical as workflows and operational requirements grow.
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

        {/* BUSINESS TYPES */}

        <section
          aria-labelledby="business-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Who We Help</SectionLabel>

                <h2
                  id="business-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Solutions for different{" "}
                  <span className="text-[#0796A8]">
                    business models.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  The right software depends on how the organisation works,
                  which users need access and what processes need to become
                  easier to manage.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {businessTypes.map((item) => (
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

        {/* BUSINESS REQUIREMENTS */}

        <section
          aria-labelledby="business-requirements-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel>Operational Requirements</SectionLabel>

                <h2
                  id="business-requirements-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Connect people, processes and{" "}
                  <span className="text-[#0796A8]">
                    business information.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Custom software becomes useful when it simplifies a real
                  operational problem rather than simply adding another system
                  for the team to manage.
                </p>

                <p className="text-slate-500 text-[12px] leading-6 mt-3">
                  Requirements can include internal workflows, customer-facing
                  experiences, reporting, data management, integrations and
                  access controls.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {businessRequirements.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#fbfcfc] p-3.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#edf4f5] flex items-center justify-center">
                      <Check
                        size={12}
                        className="text-[#07899a]"
                      />
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

        {/* BUSINESS IMPACT */}

        <section className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[760px] mb-7">
              <SectionLabel>Business Impact</SectionLabel>

              <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3">
                Build software that improves{" "}
                <span className="text-[#0796A8]">
                  everyday operations.
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
          aria-labelledby="business-process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="business-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From business challenge to{" "}
                <span className="text-[#25bfce]">
                  working software.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured process helps connect business requirements with
                product planning, development and implementation.
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
          aria-labelledby="business-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Business Use Cases</SectionLabel>

                <h2
                  id="business-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Software for real{" "}
                  <span className="text-[#0796A8]">
                    operational workflows.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Custom business systems can be built for customer-facing,
                  internal and operational workflows.
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
          aria-labelledby="why-business-devzore-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="why-business-devzore-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Development focused on{" "}
                <span className="text-[#0796A8]">
                  how your business works.
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
          aria-labelledby="business-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Related Services</SectionLabel>

              <h2
                id="business-related-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Explore services for building complete business systems.
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
          aria-labelledby="business-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="mb-6">
              <SectionLabel>FAQ</SectionLabel>

              <h2
                id="business-faq-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
              >
                Business software development questions.
              </h2>

              <p className="text-slate-600 text-[13px] leading-6 mt-3 max-w-2xl">
                Common questions about custom business software, management
                systems, automation and ongoing development.
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
                      aria-controls={`business-faq-${originalIndex}`}
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
                      id={`business-faq-${originalIndex}`}
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
          id="business-enquiry"
          aria-labelledby="business-enquiry-heading"
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
                  id="business-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us about your{" "}
                  <span className="text-[#25bfce]">
                    business challenge.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share the workflow, operational problem or software idea you
                  want to improve. We can discuss the appropriate solution and
                  development scope.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Custom business applications",
                    "Management systems",
                    "Workflow automation",
                    "Dashboards, APIs & integrations",
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
                      htmlFor="business-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="business-name"
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
                      htmlFor="business-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="business-email"
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
                      htmlFor="business-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="business-company"
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
                      htmlFor="business-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="business-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Business Software Solution</option>
                      <option>Management System</option>
                      <option>Business Web Application</option>
                      <option>Workflow Automation</option>
                      <option>E-Commerce Platform</option>
                      <option>Business Website</option>
                      <option>Existing Software Improvement</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="business-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Timeline
                    </label>

                    <select
                      id="business-timeline"
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
                      htmlFor="business-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Business Requirements *
                    </label>

                    <textarea
                      id="business-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, current workflow, problem and the solution you need..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    You do not need a complete specification. Explain the
                    current workflow and what you want the software to improve.
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
                  Have a business process that could work better with software?
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  Share the current workflow and DevZore can help discuss a
                  practical digital solution.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex self-start items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
              >
                Discuss Your Business
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessSolutions;