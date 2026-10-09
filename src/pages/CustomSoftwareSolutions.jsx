import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Braces,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cloud,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  Minus,
  MonitorCog,
  Plug,
  Plus,
  RefreshCw,
  Rocket,
  Send,
  Settings,
  ShieldCheck,
  Users,
  Workflow,
  Boxes,
} from "lucide-react";

const CustomSoftwareSolutions = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Custom Software Development",
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

  // SOFTWARE SOLUTIONS

  const solutions = [
    {
      icon: <MonitorCog size={20} />,
      number: "01",
      title: "Custom Web Applications",
      description:
        "Purpose-built web applications designed around your business processes, users and operational requirements.",
    },
    {
      icon: <LayoutDashboard size={20} />,
      number: "02",
      title: "Admin Dashboards",
      description:
        "Custom dashboards for managing users, operations, reports, content, transactions and important business activity.",
    },
    {
      icon: <Workflow size={20} />,
      number: "03",
      title: "Business Automation",
      description:
        "Automate repetitive workflows and connect important business processes through custom software.",
    },
    {
      icon: <Boxes size={20} />,
      number: "04",
      title: "Management Systems",
      description:
        "Centralized systems for inventory, customers, sales, billing, staff, expenses and operational records.",
    },
    {
      icon: <Plug size={20} />,
      number: "05",
      title: "API Integrations",
      description:
        "Connect your software with third-party services, payment systems, APIs and external business tools.",
    },
    {
      icon: <Database size={20} />,
      number: "06",
      title: "Database Systems",
      description:
        "Structured data solutions for storing, managing and retrieving important business information.",
    },
    {
      icon: <Users size={20} />,
      number: "07",
      title: "Internal Business Tools",
      description:
        "Private tools and portals that help teams manage internal workflows, information and daily operations.",
    },
    {
      icon: <BarChart3 size={20} />,
      number: "08",
      title: "Reporting Platforms",
      description:
        "Custom reporting and analytics interfaces that turn operational data into useful business insights.",
    },
  ];

  // DEVELOPMENT STANDARDS

  const standards = [
    {
      icon: <Settings size={18} />,
      title: "Business-Focused Architecture",
      description:
        "Software structure is planned around your business rules, users and workflows instead of a generic template.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security Conscious",
      description:
        "Authentication, permissions, validation and access controls are considered throughout development.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance Considered",
      description:
        "Frontend, backend and database workflows are structured with practical performance requirements in mind.",
    },
    {
      icon: <Database size={18} />,
      title: "Structured Data",
      description:
        "Business records are organized through clear data models designed around application workflows.",
    },
    {
      icon: <Plug size={18} />,
      title: "Integration Ready",
      description:
        "Third-party services and APIs can be connected when your software needs external functionality.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "Built for Change",
      description:
        "Software can continue evolving through new modules, workflows and integrations as requirements change.",
    },
  ];

  // SOFTWARE TYPES

  const softwareTypes = [
    {
      title: "Operational Software",
      description:
        "Software designed to manage day-to-day business activities, records and workflows.",
    },
    {
      title: "Internal Business Tools",
      description:
        "Private applications that help teams manage internal processes, information and operational tasks.",
    },
    {
      title: "Customer Portals",
      description:
        "Secure customer-facing systems for accounts, information, requests, records and service workflows.",
    },
    {
      title: "Business Platforms",
      description:
        "Larger digital systems connecting users, data, dashboards, workflows and integrations in one application.",
    },
  ];

  // SOFTWARE REQUIREMENTS

  const softwareRequirements = [
    "Custom business workflows",
    "User accounts & permissions",
    "Database-driven functionality",
    "Administrative dashboards",
    "Reports & analytics",
    "API integrations",
    "Automated business processes",
    "Future modules & expansion",
  ];

  // DEVELOPMENT PRINCIPLES

  const principles = [
    {
      icon: <ShieldCheck size={18} />,
      title: "Secure Access",
      description:
        "Authentication and permission systems can control how different users access business functionality.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Responsive Experience",
      description:
        "Interfaces can be designed for practical use across desktop, tablet and mobile screen sizes.",
    },
    {
      icon: <Cloud size={18} />,
      title: "Ready to Grow",
      description:
        "Architecture can support additional users, features and integrations as product requirements evolve.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "Maintainable Structure",
      description:
        "Reusable components and organized application logic make future software work easier to manage.",
    },
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Requirements Discovery",
      description:
        "We understand your business processes, users, existing challenges and the outcome you want the software to support.",
    },
    {
      number: "02",
      title: "Architecture & Planning",
      description:
        "Modules, workflows, user roles, data structures and important integrations are planned around the project scope.",
    },
    {
      number: "03",
      title: "UI & UX Direction",
      description:
        "Important screens, dashboards, forms and user flows are planned so the software remains practical to use.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Frontend, backend, databases, business logic and integrations are developed through structured project stages.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "Core workflows, permissions, calculations, responsiveness and important application behaviour are reviewed.",
    },
    {
      number: "06",
      title: "Launch & Improvement",
      description:
        "The software is prepared for deployment and can continue through future improvements and additional functionality.",
    },
  ];

  // USE CASES

  const useCases = [
    "Business Management",
    "Internal Operations",
    "Workflow Automation",
    "Customer Portals",
    "Admin Dashboards",
    "Reporting Systems",
    "Inventory Platforms",
    "Sales Systems",
    "Service Management",
    "Staff Portals",
    "Data Management",
    "Business Integrations",
  ];

  // WHY CUSTOM SOFTWARE

  const reasons = [
    {
      icon: <Settings size={18} />,
      title: "Your Exact Workflow",
      description:
        "Custom software follows how your organization actually operates instead of forcing your team into generic processes.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Focused Functionality",
      description:
        "Build the functionality your business needs without unnecessary features complicating everyday use.",
    },
    {
      icon: <GitBranch size={18} />,
      title: "Future Flexibility",
      description:
        "A structured system can be expanded with additional modules and integrations as requirements evolve.",
    },
    {
      icon: <LockKeyhole size={18} />,
      title: "Controlled Access",
      description:
        "User roles and permissions can reflect how administrators, managers, staff and customers should use the software.",
    },
    {
      icon: <Database size={18} />,
      title: "Organized Business Data",
      description:
        "Important records can be stored and connected through structured application data models.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Connected Processes",
      description:
        "Separate business tasks can be connected into clearer digital workflows within one software platform.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "What is custom software development?",
      a: "Custom software development means designing and building software around the specific requirements, workflows and users of a business instead of relying only on a generic off-the-shelf product.",
    },
    {
      q: "What type of custom software can DevZore build?",
      a: "DevZore can develop custom web applications, management systems, dashboards, internal business tools, SaaS platforms, APIs, database-driven applications and workflow automation solutions.",
    },
    {
      q: "Can custom software replace spreadsheets or manual processes?",
      a: "Depending on the workflow, manual records and spreadsheet-based processes can often be converted into a centralized application with structured data, user access, automation and reporting.",
    },
    {
      q: "Can custom software integrate with other services?",
      a: "Yes. Where suitable APIs are available, custom software can integrate with payment providers, communication platforms, storage services and other external business systems.",
    },
    {
      q: "Can different users have different permissions?",
      a: "Yes. Role-based access can be implemented so administrators, managers, employees or customers receive access appropriate to their responsibilities.",
    },
    {
      q: "Can the software be expanded later?",
      a: "Yes. When the architecture is planned for future development, additional modules, integrations and functionality can be added as business requirements change.",
    },
    {
      q: "Can you build dashboards and reports?",
      a: "Yes. Custom software can include dashboards, reporting screens, summaries, filters and business-specific reporting according to the information your organization needs.",
    },
    {
      q: "Can DevZore work on an existing software system?",
      a: "Yes. Existing software can first be reviewed to understand its architecture, current functionality, issues and development requirements before improvements are planned.",
    },
    {
      q: "Can the application work on mobile devices?",
      a: "Web-based business applications can be designed with responsive interfaces so important workflows remain usable across desktop, tablet and mobile devices.",
    },
    {
      q: "How much does custom software development cost?",
      a: "Cost depends on application complexity, required modules, user roles, integrations, business logic, reporting requirements and overall project scope. A project estimate can be prepared after reviewing the requirements.",
    },
    {
      q: "How long does custom software take to build?",
      a: "Development time depends on the number of modules, complexity of workflows, integrations, design requirements and testing scope. The timeline is defined after the project requirements are understood.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. Ongoing software maintenance, bug fixing, improvements and additional feature development can be discussed according to the needs of the project.",
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  // RELATED SERVICES

  const relatedServices = [
    {
      icon: <Boxes size={21} />,
      title: "Management Systems",
      description:
        "Custom systems for inventory, sales, customers, installments, expenses, staff and business reporting.",
      path: "/management-systems",
    },
    {
      icon: <Layers3 size={21} />,
      title: "Business Solutions",
      description:
        "Digital solutions for businesses that need applications, automation, dashboards and connected operations.",
      path: "/business-solutions",
    },
    {
      icon: <Database size={21} />,
      title: "Backend & API Development",
      description:
        "Backend systems, databases, APIs, integrations and business logic for custom applications.",
      path: "/backend-api",
    },
    {
      icon: <Rocket size={21} />,
      title: "SaaS Product Development",
      description:
        "Multi-user software products with authentication, dashboards, workflows and scalable functionality.",
      path: "/saas-product-development",
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
      `Custom Software Enquiry - ${formData.name}`
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
    "@id": "https://devzore.com/custom-software-solutions#webpage",
    url: "https://devzore.com/custom-software-solutions",
    name: "Custom Software Solutions",
    description:
      "Custom software development for businesses including web applications, dashboards, workflow automation, management systems, APIs and internal business tools.",
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
    "@id": "https://devzore.com/custom-software-solutions#service",
    name: "Custom Software Development",
    serviceType: "Custom Software Development",
    url: "https://devzore.com/custom-software-solutions",
    description:
      "Custom software development services for business applications, management systems, dashboards, workflow automation, APIs, databases and internal tools.",
    provider: {
      "@id": "https://devzore.com/#organization",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Software Solutions",
      itemListElement: solutions.map((solution) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: solution.title,
          description: solution.description,
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
        name: "Custom Software Solutions",
        item: "https://devzore.com/custom-software-solutions",
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
          aria-labelledby="custom-software-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[5%] w-[540px] h-[540px] rounded-full bg-[#0796A8]/12 blur-[145px]" />

            <div className="absolute inset-0 opacity-50" style={darkGrid} />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/96 to-[#04111a]/75" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-24 pb-11 sm:pb-13">
            <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5] mb-5">
                  <Braces size={14} className="text-[#26becb]" />
                  Custom Software Solutions
                </div>

                <h1
                  id="custom-software-heading"
                  className="max-w-[790px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[53px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Software built around{" "}
                  <span className="text-[#22bdca]">
                    your business workflow.
                  </span>
                </h1>

                <p className="max-w-[690px] mt-4 text-[16px] sm:text-[13.5px] leading-7 text-slate-300">
                  DevZore designs custom software for businesses that need more
                  than generic tools — including web applications, dashboards,
                  management systems, automation and connected business
                  platforms.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  The software is structured around your users, workflows,
                  business rules and operational requirements while keeping
                  future development in mind.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#software-enquiry"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start a Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#custom-software-services"
                    className="inline-flex justify-center items-center gap-2 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore Software Solutions
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "Custom Workflows",
                    "Secure Access",
                    "API Integrations",
                    "Scalable Structure",
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

              {/* SOFTWARE VISUAL */}

              <div className="relative min-h-[370px] lg:min-h-[420px] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[420px] h-[420px] rounded-full bg-[#0796A8]/15 blur-[100px]" />

                  <div className="relative w-full max-w-[550px]">
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

                      <div className="grid grid-cols-[110px_1fr] min-h-[300px]">
                        <div className="border-r border-white/[0.07] bg-[#071923] p-3">
                          <div className="w-14 h-2 rounded bg-[#25c0ce]/60 mb-5" />

                          <div className="space-y-2">
                            {[
                              "Overview",
                              "Workflow",
                              "Users",
                              "Reports",
                              "Settings",
                            ].map((item, index) => (
                              <div
                                key={item}
                                className={`rounded-lg px-2 py-2 text-[7px] ${
                                  index === 0
                                    ? "bg-[#17b6c4]/10 text-[#24c5d3]"
                                    : "text-slate-500"
                                }`}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[8px] text-slate-500">
                                Custom Platform
                              </p>

                              <p className="text-[11px] font-semibold mt-1">
                                Business Operations
                              </p>
                            </div>

                            <div className="rounded-lg bg-[#20bdcb]/10 px-2.5 py-1.5 text-[7px] font-semibold text-[#26c4d2]">
                              CONNECTED
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 mt-4">
                            {[
                              ["Users", "Access"],
                              ["Workflow", "Operations"],
                              ["Data", "Records"],
                            ].map(([title, label]) => (
                              <div
                                key={title}
                                className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                              >
                                <p className="text-[7px] text-slate-500">
                                  {label}
                                </p>

                                <p className="text-[10px] font-semibold mt-1">
                                  {title}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-[1.2fr_0.8fr] gap-2 mt-2">
                            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                              <div className="flex items-center justify-between">
                                <p className="text-[8px] text-slate-400">
                                  Workflow Activity
                                </p>

                                <Workflow
                                  size={11}
                                  className="text-[#26c4d2]"
                                />
                              </div>

                              <div className="h-[78px] flex items-end gap-1.5 mt-3">
                                {[42, 61, 50, 73, 64, 84, 76].map(
                                  (height, index) => (
                                    <div
                                      key={index}
                                      className="flex-1 rounded-t bg-[#20bdcb]/70"
                                      style={{
                                        height: `${height}%`,
                                      }}
                                    />
                                  )
                                )}
                              </div>
                            </div>

                            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                              <p className="text-[8px] text-slate-400">
                                Modules
                              </p>

                              <div className="mt-3 space-y-2.5">
                                {[
                                  ["API", "Ready"],
                                  ["Data", "Connected"],
                                  ["Access", "Controlled"],
                                ].map(([title, label]) => (
                                  <div key={title}>
                                    <p className="text-[7px] text-slate-500">
                                      {title}
                                    </p>

                                    <p className="text-[8px] font-medium text-[#24c5d3]">
                                      {label}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -left-5 top-16 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <Database
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Data
                      </p>
                    </div>

                    <div className="absolute -right-5 top-12 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <Plug size={17} className="text-[#29c7d5]" />

                      <p className="text-[8px] font-semibold mt-2">
                        APIs
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-8 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <BarChart3
                        size={17}
                        className="text-[#29c7d5]"
                      />

                      <p className="text-[8px] font-semibold mt-2">
                        Reports
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
                  ["01", "Requirements"],
                  ["02", "Architecture"],
                  ["03", "Development"],
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
                <SectionLabel>Built for Your Business</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  When generic software{" "}
                  <span className="text-[#0796A8]">
                    does not fit.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  Every organization has different users, workflows, business
                  rules and reporting requirements. Generic software may not
                  always match those processes clearly.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  Custom software gives you the flexibility to design around
                  the way your business actually operates while keeping future
                  functionality and integrations in mind.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
                  {[
                    "Built around your workflow",
                    "Custom features & modules",
                    "Secure user access",
                    "Third-party integrations",
                    "Scalable architecture",
                    "Long-term extensibility",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-[#07899a]"
                      />

                      <span className="text-[10px] font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOFTWARE SOLUTIONS */}

        <section
          id="custom-software-services"
          aria-labelledby="software-services-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>What We Can Build</SectionLabel>

              <h2
                id="software-services-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Custom software for{" "}
                <span className="text-[#0796A8]">
                  real business needs.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                From private business tools to larger digital platforms, the
                system can be structured around the functionality your
                organization actually requires.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {solutions.map((solution) => (
                <article
                  key={solution.title}
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

                  <h3 className="text-[#071923] text-[15px] font-semibold mt-4">
                    {solution.title}
                  </h3>

                  <p className="text-slate-600 text-[11px] leading-5 mt-2">
                    {solution.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STANDARDS */}

        <section
          aria-labelledby="software-standards-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute top-0 right-0 w-[500px] h-[420px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Development Standards</SectionLabel>

              <h2
                id="software-standards-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Software structured for{" "}
                <span className="text-[#25bfce]">
                  long-term business use.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                Custom software should solve the immediate business problem
                without making future development unnecessarily difficult.
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

        {/* SOFTWARE TYPES */}

        <section
          aria-labelledby="software-types-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Software Solutions</SectionLabel>

                <h2
                  id="software-types-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Different software for different{" "}
                  <span className="text-[#0796A8]">
                    business requirements.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  The product structure depends on who will use it and what
                  processes the application needs to support.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {softwareTypes.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 hover:border-[#0796A8]/40 transition-colors"
                  >
                    <h3 className="text-[#071923] text-[13px] font-semibold">
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

        {/* WORKFLOW */}

        <section
          aria-labelledby="workflow-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel>Your Workflow</SectionLabel>

                <h2
                  id="workflow-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Your workflow.{" "}
                  <span className="text-[#0796A8]">
                    Your software.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Instead of adapting operations to software designed for
                  everyone, custom development allows important workflows,
                  roles and business rules to be designed around your
                  organization.
                </p>

                <p className="text-slate-500 text-[12px] leading-6 mt-3">
                  Related processes can then be connected through one
                  application instead of being managed separately.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {softwareRequirements.map((item) => (
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

        {/* PRINCIPLES */}

        <section className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[780px] mb-7">
              <SectionLabel>Development Approach</SectionLabel>

              <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3">
                Built for more than{" "}
                <span className="text-[#0796A8]">
                  just launch day.
                </span>
              </h2>

              <p className="text-slate-600 text-[13px] leading-6 mt-3">
                Good custom software should support current requirements while
                keeping future maintenance and development practical.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-4"
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
        </section>

        {/* PROCESS */}

        <section
          aria-labelledby="software-process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute -top-20 left-[10%] w-[420px] h-[420px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="software-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From requirements to{" "}
                <span className="text-[#25bfce]">
                  working software.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                A structured workflow keeps business requirements and
                development aligned throughout the project.
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
          aria-labelledby="software-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Business Use Cases</SectionLabel>

                <h2
                  id="software-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Software for different{" "}
                  <span className="text-[#0796A8]">
                    operational challenges.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Custom development can support customer-facing products,
                  internal systems and business-specific operational
                  workflows.
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

        {/* WHY CUSTOM SOFTWARE */}

        <section
          aria-labelledby="why-custom-software-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Why Custom Software</SectionLabel>

              <h2
                id="why-custom-software-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Software that fits{" "}
                <span className="text-[#0796A8]">
                  your organization.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {reasons.map((item) => (
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
          aria-labelledby="software-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Related Services</SectionLabel>

              <h2
                id="software-related-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Supporting services for complete custom software.
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
          aria-labelledby="software-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="mb-6">
              <SectionLabel>FAQ</SectionLabel>

              <h2
                id="software-faq-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
              >
                Custom software questions.
              </h2>

              <p className="text-slate-600 text-[13px] leading-6 mt-3 max-w-2xl">
                Common questions about custom applications, integrations,
                business workflows, permissions and future development.
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
                      aria-controls={`software-faq-${originalIndex}`}
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
                      id={`software-faq-${originalIndex}`}
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
          id="software-enquiry"
          aria-labelledby="software-enquiry-heading"
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
                  id="software-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us what your{" "}
                  <span className="text-[#25bfce]">
                    software needs to do.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share your existing workflow, the problem you want to solve
                  and the functionality your users need.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Custom web applications",
                    "Management & internal systems",
                    "Business workflow automation",
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
                      htmlFor="software-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="software-name"
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
                      htmlFor="software-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="software-email"
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
                      htmlFor="software-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Business / Company
                    </label>

                    <input
                      id="software-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Business name"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="software-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Type
                    </label>

                    <select
                      id="software-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Custom Software Development</option>
                      <option>Custom Web Application</option>
                      <option>Management System</option>
                      <option>Admin Dashboard</option>
                      <option>Business Automation</option>
                      <option>Internal Business Tool</option>
                      <option>API Integration</option>
                      <option>Reporting Platform</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="software-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Timeline
                    </label>

                    <select
                      id="software-timeline"
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
                      htmlFor="software-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Project Requirements *
                    </label>

                    <textarea
                      id="software-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current workflow, users, problems and the functionality you need..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    You do not need a complete technical specification. Explain
                    the business problem and the workflow you want the software
                    to support.
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
                  Have a business process that needs custom software?
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  Share the workflow and functionality you need and we can
                  discuss the right software structure.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex self-start items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
              >
                Discuss Your Project
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomSoftwareSolutions;