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
  Database,
  FileBarChart,
  Gauge,
  Layers3,
  LockKeyhole,
  Mail,
  Minus,
  MonitorCog,
  PackageSearch,
  Plus,
  ReceiptText,
  RefreshCw,
  Rocket,
  Send,
  Settings,
  ShieldCheck,
  ShoppingCart,
  UserRoundCog,
  Users,
  WalletCards,
  Workflow,
} from "lucide-react";

const ManagementSystems = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Custom Management System",
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

  // SYSTEM MODULES

  const systems = [
    {
      icon: <PackageSearch size={20} />,
      number: "01",
      title: "Inventory Management",
      description:
        "Track products, stock levels, purchases, suppliers and inventory movement through one organized business system.",
    },
    {
      icon: <ShoppingCart size={20} />,
      number: "02",
      title: "Sales & Billing",
      description:
        "Manage sales, invoices, billing records, payments and transaction history from a centralized platform.",
    },
    {
      icon: <Users size={20} />,
      number: "03",
      title: "Customer Management",
      description:
        "Store customer information, activity, transactions and important business records in one accessible place.",
    },
    {
      icon: <WalletCards size={20} />,
      number: "04",
      title: "Installment Management",
      description:
        "Manage installment plans, due dates, payments, outstanding balances and complete customer payment history.",
    },
    {
      icon: <UserRoundCog size={20} />,
      number: "05",
      title: "Staff Management",
      description:
        "Organize employee information, user roles, permissions and operational responsibilities in one system.",
    },
    {
      icon: <ReceiptText size={20} />,
      number: "06",
      title: "Expense Management",
      description:
        "Record business expenses, categorize costs and maintain clearer financial activity records.",
    },
    {
      icon: <FileBarChart size={20} />,
      number: "07",
      title: "Reports & Analytics",
      description:
        "Turn operational records into useful dashboards, reports and summaries for better business visibility.",
    },
    {
      icon: <ShieldCheck size={20} />,
      number: "08",
      title: "Role-Based Access",
      description:
        "Control what administrators, managers and staff members can access through structured user permissions.",
    },
  ];

  // DEVELOPMENT STANDARDS

  const standards = [
    {
      icon: <Workflow size={18} />,
      title: "Workflow-Focused Design",
      description:
        "Modules are structured around how your business actually operates instead of forcing a generic workflow.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Simple Daily Use",
      description:
        "Dashboards and common actions are planned to make routine business tasks easier to understand and manage.",
    },
    {
      icon: <Database size={18} />,
      title: "Organized Business Data",
      description:
        "Customers, sales, inventory, payments and other records are stored through structured data models.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Controlled Access",
      description:
        "User roles and permissions help control access to important business information and operational features.",
    },
    {
      icon: <Layers3 size={18} />,
      title: "Modular Architecture",
      description:
        "The system can be divided into logical modules so future business functionality can be introduced clearly.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "Built for Change",
      description:
        "Business software can continue evolving as workflows, reporting needs and operational requirements change.",
    },
  ];

  // BUSINESS TYPES

  const businessTypes = [
    {
      title: "Retail Businesses",
      description:
        "Manage products, sales, stock, customers, purchases and operational reporting.",
    },
    {
      title: "Installment Businesses",
      description:
        "Track customer plans, due dates, payments, outstanding balances and payment history.",
    },
    {
      title: "Wholesale Businesses",
      description:
        "Organize stock, suppliers, customers, orders, billing and account records.",
    },
    {
      title: "Service Businesses",
      description:
        "Manage customers, staff, service records, expenses, payments and reporting.",
    },
  ];

  // REQUIREMENTS

  const managementRequirements = [
    "Customers & customer history",
    "Products & inventory",
    "Sales & billing",
    "Payments & installments",
    "Expenses & financial records",
    "Staff roles & permissions",
    "Dashboard summaries",
    "Reports & exports",
  ];

  // BUSINESS BENEFITS

  const benefits = [
    {
      icon: <Workflow size={18} />,
      title: "Centralized Operations",
      description:
        "Bring important daily business workflows into one connected digital system.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Less Manual Work",
      description:
        "Reduce repetitive record handling and make routine operational tasks easier to complete.",
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Better Visibility",
      description:
        "Use dashboards and reports to understand sales, customers, stock, payments and expenses.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Controlled Access",
      description:
        "Give different users access to the areas and information relevant to their responsibilities.",
    },
  ];

  // PROCESS

  const process = [
    {
      number: "01",
      title: "Workflow Discovery",
      description:
        "We understand how your business currently manages customers, products, sales, payments, staff and reporting.",
    },
    {
      number: "02",
      title: "System Planning",
      description:
        "The required modules, user roles, data structure and important business workflows are defined.",
    },
    {
      number: "03",
      title: "UI & Dashboard Direction",
      description:
        "Key dashboards, forms, tables and operational screens are planned around the people using the system.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "The management system, modules, business logic, data workflows and user permissions are developed.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "Important workflows are reviewed for calculations, permissions, responsive behaviour and data handling.",
    },
    {
      number: "06",
      title: "Launch & Improvement",
      description:
        "The system is prepared for deployment and can continue through additional modules and improvements.",
    },
  ];

  // USE CASES

  const useCases = [
    "Inventory Systems",
    "Sales Management",
    "Installment Systems",
    "POS Management",
    "Customer Management",
    "Staff Management",
    "Expense Tracking",
    "Supplier Management",
    "Order Management",
    "Business Dashboards",
    "Reporting Systems",
    "Internal Business Tools",
  ];

  // WHY DEVZORE

  const whyDevZore = [
    {
      icon: <Settings size={18} />,
      title: "Built Around Your Business",
      description:
        "The software can be structured around your actual processes, users and operational requirements.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Workflow-Focused Development",
      description:
        "Features are connected to real tasks your team needs to complete during everyday operations.",
    },
    {
      icon: <Database size={18} />,
      title: "Structured Data",
      description:
        "Important business records are organized through clear application models and connected workflows.",
    },
    {
      icon: <LockKeyhole size={18} />,
      title: "Permission Controls",
      description:
        "Different staff members can be given appropriate access depending on their responsibilities.",
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Business Reporting",
      description:
        "Dashboards, summaries and reports can be designed around the information management needs to review.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "Ready to Expand",
      description:
        "The system can continue through new modules, integrations and workflow improvements as requirements change.",
    },
  ];

  // FAQ

  const faqs = [
    {
      q: "What is a custom management system?",
      a: "A custom management system is business software designed around specific operational workflows. It can connect customers, products, inventory, sales, billing, installments, staff, expenses and reporting inside one digital platform.",
    },
    {
      q: "Can DevZore build a management system for my business?",
      a: "Yes. DevZore can develop management software based on your business processes, required modules, user roles, calculations, reporting needs and other application requirements.",
    },
    {
      q: "Can different staff members have different permissions?",
      a: "Yes. Role-based access can be implemented so administrators, managers and staff members can access only the features and data appropriate for their responsibilities.",
    },
    {
      q: "Can the system include inventory and sales management?",
      a: "Yes. Inventory, products, purchases, sales, invoices, customers and reporting can be connected as modules within one management system.",
    },
    {
      q: "Can you build an installment management system?",
      a: "Yes. A custom installment system can include customer records, installment plans, down payments, due dates, payment records, outstanding balances, customer ledgers and related reports.",
    },
    {
      q: "Can the system manage expenses?",
      a: "Yes. Expense management can include categories, amounts, dates, descriptions and reporting according to the financial records your business needs to maintain.",
    },
    {
      q: "Can the management system include dashboards and reports?",
      a: "Yes. Dashboards and reports can show relevant information such as sales, outstanding balances, stock, customers, payments, expenses and other business-specific metrics.",
    },
    {
      q: "Can reports be exported?",
      a: "Depending on project requirements, reports can include printing or exports such as PDF and spreadsheet formats.",
    },
    {
      q: "Can the system work on mobile devices?",
      a: "Yes. A web-based management system can be developed with responsive layouts so important workflows can be accessed on desktop, tablet and mobile devices.",
    },
    {
      q: "Can new modules be added later?",
      a: "Yes. A properly organized management system can be extended with additional modules, workflows, reporting and integrations as business requirements evolve.",
    },
    {
      q: "Can DevZore improve an existing management system?",
      a: "Yes. Existing business software can be reviewed for new functionality, UI improvements, bug fixes, data workflows, reports, permissions and application improvements.",
    },
    {
      q: "How much does a custom management system cost?",
      a: "The cost depends on the required modules, workflows, user roles, calculations, reporting, integrations and other system requirements. A project estimate can be prepared after reviewing the scope.",
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  // RELATED SERVICES

  const relatedServices = [
    {
      icon: <Settings size={21} />,
      title: "Custom Software Solutions",
      description:
        "Purpose-built software designed around unique business processes and operational requirements.",
      path: "/custom-software-solutions",
    },
    {
      icon: <Layers3 size={21} />,
      title: "Business Solutions",
      description:
        "Digital solutions for businesses that need websites, applications, automation and management platforms.",
      path: "/business-solutions",
    },
    {
      icon: <Database size={21} />,
      title: "Backend & API Development",
      description:
        "Backend systems, databases, APIs, authentication and business logic for management software.",
      path: "/backend-api",
    },
    {
      icon: <Rocket size={21} />,
      title: "SaaS Product Development",
      description:
        "Multi-user software products with dashboards, accounts, workflows and scalable application functionality.",
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
      `Management System Enquiry - ${formData.name}`
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
    "@id": "https://devzore.com/management-systems#webpage",
    url: "https://devzore.com/management-systems",
    name: "Custom Management Systems",
    description:
      "Custom business management systems for inventory, sales, customers, installments, staff, expenses, dashboards and operational reporting.",
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
    "@id": "https://devzore.com/management-systems#service",
    name: "Custom Management System Development",
    serviceType: "Management System Development",
    url: "https://devzore.com/management-systems",
    description:
      "Custom management software development for inventory, sales, customers, installments, staff, expenses, reporting and business operations.",
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
        name: "Management Systems",
        item: "https://devzore.com/management-systems",
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
          aria-labelledby="management-heading"
          className="relative overflow-hidden bg-[#04111a] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[7%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/12 blur-[140px]" />

            <div className="absolute inset-0 opacity-50" style={darkGrid} />

            <div className="absolute inset-0 bg-gradient-to-r from-[#04111a] via-[#04111a]/96 to-[#04111a]/76" />
          </div>

          <div className="relative max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-24 pb-11 sm:pb-13">
            <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#c4ced5] mb-5">
                  <MonitorCog size={14} className="text-[#26becb]" />
                  Management Systems
                </div>

                <h1
                  id="management-heading"
                  className="max-w-[790px] text-[40px] sm:text-[48px] lg:text-[58px] xl:text-[53px] leading-[1.04] font-semibold tracking-[-0.045em]"
                >
                  Run your business from{" "}
                  <span className="text-[#22bdca]">
                    one organized system.
                  </span>
                </h1>

                <p className="max-w-[690px] mt-4 text-[16px] sm:text-[13.5px] leading-7 text-slate-300">
                  DevZore builds custom management systems for customers,
                  inventory, sales, installments, expenses, staff and reporting
                  through one centralized digital platform.
                </p>

                <p className="max-w-[650px] mt-3 text-[13px] sm:text-[14px] leading-6 text-slate-400">
                  Replace scattered spreadsheets and disconnected records with
                  software designed around how your business actually works.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                  <a
                    href="#management-enquiry"
                    className="inline-flex justify-center items-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-5 py-3 text-[12px] font-semibold text-[#071923] transition-all"
                  >
                    Start a Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#management-modules"
                    className="inline-flex justify-center items-center gap-2 px-4 py-3 text-[12px] font-semibold text-white hover:text-[#28c5d4] transition-colors"
                  >
                    Explore System Modules
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                  {[
                    "Custom Workflows",
                    "Centralized Data",
                    "Role-Based Access",
                    "Business Reports",
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

              {/* DASHBOARD VISUAL */}

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
                              "Dashboard",
                              "Customers",
                              "Sales",
                              "Inventory",
                              "Reports",
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
                                Management Dashboard
                              </p>

                              <p className="text-[11px] font-semibold mt-1">
                                Business Overview
                              </p>
                            </div>

                            <div className="rounded-lg bg-[#20bdcb]/10 px-2.5 py-1.5 text-[7px] font-semibold text-[#26c4d2]">
                              LIVE DATA
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 mt-4">
                            {[
                              ["Sales", "Overview"],
                              ["Customers", "Records"],
                              ["Stock", "Status"],
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
                                  Activity
                                </p>

                                <BarChart3
                                  size={11}
                                  className="text-[#26c4d2]"
                                />
                              </div>

                              <div className="h-[78px] flex items-end gap-1.5 mt-3">
                                {[43, 58, 47, 70, 63, 83, 75].map(
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
                                System Status
                              </p>

                              <div className="mt-3 space-y-2.5">
                                {[
                                  ["Records", "Updated"],
                                  ["Reports", "Ready"],
                                  ["Access", "Secure"],
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
                      <Users size={17} className="text-[#29c7d5]" />

                      <p className="text-[8px] font-semibold mt-2">
                        Users
                      </p>
                    </div>

                    <div className="absolute -right-4 bottom-8 rounded-xl border border-[#24c6d5]/25 bg-[#0b2833]/95 px-3 py-3 shadow-xl">
                      <FileBarChart
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
                  ["01", "Workflow Discovery"],
                  ["02", "System Planning"],
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
                <SectionLabel>Custom Business Software</SectionLabel>

                <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3">
                  Replace scattered processes with{" "}
                  <span className="text-[#0796A8]">
                    one organized platform.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-slate-700">
                  When customers, sales, stock, payments and expenses are
                  managed across multiple files and disconnected tools, daily
                  business operations become harder to control.
                </p>

                <p className="text-[13px] leading-6 mt-3 text-slate-500">
                  A custom management system brings important workflows and
                  records together while giving staff a clearer way to manage
                  routine operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MODULES */}

        <section
          id="management-modules"
          aria-labelledby="management-modules-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>System Modules</SectionLabel>

              <h2
                id="management-modules-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] leading-[1.08] tracking-[-0.035em] font-semibold mt-3"
              >
                Business modules built around{" "}
                <span className="text-[#0796A8]">
                  your operations.
                </span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-6 mt-3">
                Select and connect the modules your business actually needs
                instead of working around unnecessary software features.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {systems.map((system) => (
                <article
                  key={system.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0796A8]/40 hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />

                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center group-hover:bg-[#071923] group-hover:text-[#28c5d4] transition-colors">
                      {system.icon}
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {system.number}
                    </span>
                  </div>

                  <h3 className="text-[#071923] text-[15px] font-semibold mt-4">
                    {system.title}
                  </h3>

                  <p className="text-slate-600 text-[11px] leading-5 mt-2">
                    {system.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STANDARDS */}

        <section
          aria-labelledby="management-standards-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="absolute top-0 right-0 w-[500px] h-[420px] bg-[#0796A8]/10 blur-[140px]" />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Development Standards</SectionLabel>

              <h2
                id="management-standards-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Management software built for{" "}
                <span className="text-[#25bfce]">
                  real business workflows.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3 max-w-2xl">
                The system should support everyday work clearly while keeping
                business information structured and easier to manage.
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
          aria-labelledby="management-business-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>Business Types</SectionLabel>

                <h2
                  id="management-business-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Management systems for different{" "}
                  <span className="text-[#0796A8]">
                    operational models.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  The modules, calculations and reports can be shaped around
                  the type of business using the software.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {businessTypes.map((item) => (
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

        {/* REQUIREMENTS */}

        <section
          aria-labelledby="management-requirements-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <SectionLabel>Connected Operations</SectionLabel>

                <h2
                  id="management-requirements-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Connect important business data{" "}
                  <span className="text-[#0796A8]">
                    in one system.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  A management platform becomes more useful when related
                  workflows are connected. A customer can connect to a sale, a
                  sale to a payment and that activity to business reporting.
                </p>

                <p className="text-slate-500 text-[12px] leading-6 mt-3">
                  The exact structure depends on your actual business rules and
                  the information your team needs to manage.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {managementRequirements.map((item) => (
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

        {/* BENEFITS */}

        <section className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[780px] mb-7">
              <SectionLabel>Business Operations</SectionLabel>

              <h2 className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3">
                Give your team a clearer way to{" "}
                <span className="text-[#0796A8]">
                  manage daily work.
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
          aria-labelledby="management-process-heading"
          className="relative py-10 md:py-12 bg-[#071923] text-white"
        >
          <div className="absolute inset-0" style={darkGrid} />

          <div className="relative max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel light>Our Process</SectionLabel>

              <h2
                id="management-process-heading"
                className="text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                From existing workflow to{" "}
                <span className="text-[#25bfce]">
                  working management software.
                </span>
              </h2>

              <p className="text-slate-400 text-[14px] leading-6 mt-3">
                We start with how your business already works before deciding
                how the digital system should be structured.
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
          aria-labelledby="management-use-cases-heading"
          className="py-10 md:py-12 bg-[#f7f9fa]"
          style={lightGrid}
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12">
              <div>
                <SectionLabel>System Use Cases</SectionLabel>

                <h2
                  id="management-use-cases-heading"
                  className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
                >
                  Management software for different{" "}
                  <span className="text-[#0796A8]">
                    business operations.
                  </span>
                </h2>

                <p className="text-slate-600 text-[13px] leading-6 mt-3">
                  Different modules can be combined to create one complete
                  management platform.
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
          aria-labelledby="management-why-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Why DevZore</SectionLabel>

              <h2
                id="management-why-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[39px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Management software designed around{" "}
                <span className="text-[#0796A8]">
                  real workflows.
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
          aria-labelledby="management-related-heading"
          className="py-10 md:py-12 bg-[#f7f9fa] border-y border-slate-200"
        >
          <div className="max-w-[1260px] mx-auto px-5 sm:px-6">
            <div className="max-w-[800px] mb-7">
              <SectionLabel>Related Services</SectionLabel>

              <h2
                id="management-related-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] leading-[1.08] mt-3"
              >
                Supporting services for complete business software.
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
          aria-labelledby="management-faq-heading"
          className="py-10 md:py-12 bg-white"
        >
          <div className="max-w-[980px] mx-auto px-5 sm:px-6">
            <div className="mb-6">
              <SectionLabel>FAQ</SectionLabel>

              <h2
                id="management-faq-heading"
                className="text-[#071923] text-[28px] sm:text-[33px] md:text-[38px] font-semibold tracking-[-0.035em] mt-3"
              >
                Management system questions.
              </h2>

              <p className="text-slate-600 text-[13px] leading-6 mt-3 max-w-2xl">
                Common questions about modules, permissions, reports,
                installments, mobile access and custom management software.
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
                      aria-controls={`management-faq-${originalIndex}`}
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
                      id={`management-faq-${originalIndex}`}
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
          id="management-enquiry"
          aria-labelledby="management-enquiry-heading"
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
                  id="management-enquiry-heading"
                  className="text-[30px] sm:text-[35px] md:text-[40px] leading-[1.06] tracking-[-0.04em] font-semibold mt-3"
                >
                  Tell us how your{" "}
                  <span className="text-[#25bfce]">
                    business currently works.
                  </span>
                </h2>

                <p className="text-slate-300 text-[14px] leading-6 mt-4 max-w-lg">
                  Share the workflows you currently manage, the records you
                  maintain and the areas you want your management system to
                  improve.
                </p>

                <div className="mt-5 space-y-2.5">
                  {[
                    "Inventory & sales systems",
                    "Installment management",
                    "Customer & staff management",
                    "Dashboards, reports & exports",
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
                      htmlFor="management-name"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Your Name *
                    </label>

                    <input
                      id="management-name"
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
                      htmlFor="management-email"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Email Address *
                    </label>

                    <input
                      id="management-email"
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
                      htmlFor="management-company"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Business / Company
                    </label>

                    <input
                      id="management-company"
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
                      htmlFor="management-service"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      System Type
                    </label>

                    <select
                      id="management-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] text-slate-300 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    >
                      <option>Custom Management System</option>
                      <option>Inventory Management</option>
                      <option>Sales & Billing System</option>
                      <option>Installment Management</option>
                      <option>Customer Management</option>
                      <option>Staff Management</option>
                      <option>Expense Management</option>
                      <option>Reporting System</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="management-timeline"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Timeline
                    </label>

                    <select
                      id="management-timeline"
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
                      htmlFor="management-message"
                      className="block text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5"
                    >
                      Business Requirements *
                    </label>

                    <textarea
                      id="management-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what your business manages today, the main problems and the modules you need..."
                      className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#071923] px-3.5 py-3 text-[12px] leading-5 text-white placeholder:text-slate-600 outline-none focus:border-[#19b9c8]/70 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                  <p className="text-[9px] leading-4 text-slate-500 max-w-sm">
                    You do not need a complete software specification. Explain
                    how the business currently works and what you want the
                    system to manage.
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
                  Need software built around your business workflow?
                </p>

                <p className="text-slate-500 text-[10px] mt-1">
                  Share the process you want to manage and we can discuss the
                  right system structure.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex self-start items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-[#071923] hover:bg-slate-100 transition-colors"
              >
                Discuss Your System
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManagementSystems;