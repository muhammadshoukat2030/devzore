import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Boxes,
  ShoppingCart,
  Users,
  WalletCards,
  BarChart3,
  Settings,
  Database,
  Workflow,
  Gauge,
  ShieldCheck,
  ReceiptText,
  PackageSearch,
  UserRoundCog,
  FileBarChart,
  Sparkles,
  ChevronDown,
  Code2,
  Rocket,
  MonitorCog,
  Layers3,
  RefreshCw,
} from "lucide-react";

const ManagementSystems = ({ isDark }) => {
  const d = isDark;
  const [openFaq, setOpenFaq] = useState(0);

  // ======================================================
  // MANAGEMENT SYSTEM FEATURES
  // ======================================================

  const systems = [
    {
      icon: <PackageSearch size={20} />,
      title: "Inventory Management",
      description:
        "Track products, stock levels, purchases, suppliers and inventory movement from one organized system.",
    },
    {
      icon: <ShoppingCart size={20} />,
      title: "Sales & Billing",
      description:
        "Manage sales, invoices, billing records, payments and transaction history through a centralized platform.",
    },
    {
      icon: <Users size={20} />,
      title: "Customer Management",
      description:
        "Store customer information, activity, transactions and business records in one accessible place.",
    },
    {
      icon: <WalletCards size={20} />,
      title: "Installment Management",
      description:
        "Manage installment plans, payments, due dates, outstanding balances and customer payment history.",
    },
    {
      icon: <UserRoundCog size={20} />,
      title: "Staff Management",
      description:
        "Organize employee information, roles, permissions and operational responsibilities efficiently.",
    },
    {
      icon: <ReceiptText size={20} />,
      title: "Expense Management",
      description:
        "Record business expenses, categorize costs and maintain clear financial activity records.",
    },
    {
      icon: <FileBarChart size={20} />,
      title: "Reports & Analytics",
      description:
        "Turn operational data into useful reports, summaries and dashboards for better business visibility.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Role-Based Access",
      description:
        "Control what admins, managers and staff members can view or manage through secure permissions.",
    },
  ];

  // ======================================================
  // BENEFITS
  // ======================================================

  const benefits = [
    "Centralized business data",
    "Reduced manual work",
    "Better operational visibility",
    "Faster reporting",
    "Secure user access",
    "Scalable system architecture",
  ];

  // ======================================================
  // PROCESS
  // ======================================================

  const process = [
    {
      number: "01",
      icon: <Workflow size={18} />,
      title: "Understand Your Workflow",
      description:
        "We study how your business currently manages customers, sales, inventory, payments, staff and reporting.",
    },
    {
      number: "02",
      icon: <Layers3 size={18} />,
      title: "Plan the System",
      description:
        "We define the modules, user roles, workflows, dashboard structure and data your management platform needs.",
    },
    {
      number: "03",
      icon: <Code2 size={18} />,
      title: "Design & Development",
      description:
        "We build a responsive and practical system around your real business processes and daily operations.",
    },
    {
      number: "04",
      icon: <Rocket size={18} />,
      title: "Test & Launch",
      description:
        "The system is tested across key workflows before deployment so your team can start using it confidently.",
    },
  ];

  // ======================================================
  // TECHNOLOGIES
  // ======================================================

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "Cloud Deployment",
  ];

  // ======================================================
  // WHY DEVZORE
  // ======================================================

  const whyDevZore = [
    {
      icon: <Settings size={19} />,
      title: "Built Around Your Business",
      description:
        "Your system can be designed around your actual workflow instead of forcing your business into a generic process.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Simple & Practical",
      description:
        "We focus on clear dashboards, useful features and workflows that are easy for teams to understand and operate.",
    },
    {
      icon: <Database size={19} />,
      title: "Organized Business Data",
      description:
        "Important operational records can be stored and managed through a centralized digital platform.",
    },
    {
      icon: <RefreshCw size={19} />,
      title: "Ready to Scale",
      description:
        "The system can be structured so additional modules and functionality can be introduced as your requirements grow.",
    },
  ];

  // ======================================================
  // FAQ
  // ======================================================

  const faqs = [
    {
      question: "What is a custom management system?",
      answer:
        "A custom management system is software designed around a business's specific operations. It can combine areas such as customers, inventory, sales, billing, installments, staff, expenses and reporting into one platform.",
    },
    {
      question: "Can DevZore build a management system for my business?",
      answer:
        "Yes. DevZore can develop management systems based on your business workflow, required modules, user roles and reporting needs.",
    },
    {
      question: "Can different staff members have different permissions?",
      answer:
        "Yes. Role-based access can be implemented so administrators, managers and staff members have access only to the areas relevant to their responsibilities.",
    },
    {
      question: "Can you add inventory, sales and expense management?",
      answer:
        "Yes. Inventory, sales, billing, expenses, customer records and reporting can be developed as connected modules within the same management platform.",
    },
    {
      question: "Can the system include installment management?",
      answer:
        "Yes. A custom system can include installment plans, due dates, payment records, remaining balances, customer ledgers and related reports.",
    },
    {
      question: "Can new features be added later?",
      answer:
        "Yes. A properly structured management system can be extended with additional modules, integrations and workflows as business requirements evolve.",
    },
  ];

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-300 ${
        d ? "bg-[#030303] text-white" : "bg-[#fafafa] text-[#0b1020]"
      }`}
    >
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative pt-[105px] sm:pt-[112px] pb-8 sm:pb-10 overflow-hidden">
        {/* Background decoration */}

        <div
          className={`absolute inset-0 pointer-events-none ${
            d
              ? "bg-[radial-gradient(circle_at_50%_15%,rgba(147,51,234,0.12),transparent_38%)]"
              : "bg-[radial-gradient(circle_at_50%_15%,rgba(168,85,247,0.11),transparent_40%)]"
          }`}
        />

        <div
          className={`absolute top-10 left-[10%] w-64 h-64 rounded-full blur-[120px] pointer-events-none ${
            d ? "bg-purple-700/10" : "bg-purple-200/30"
          }`}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}

            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
                d
                  ? "border-purple-500/20 bg-purple-500/[0.07]"
                  : "border-purple-200 bg-purple-50/80"
              }`}
            >
              <Boxes size={14} className="text-purple-500" />

              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-purple-600">
                Management Systems
              </span>
            </div>

            {/* Heading */}

            <h1
              className={`mt-6 text-[38px] sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-[-0.045em] leading-[1.02] ${
                d ? "text-white" : "text-[#080d1b]"
              }`}
            >
              Manage Your Business
              <span className="block mt-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                From One Powerful System
              </span>
            </h1>

            {/* Description */}

            <p
              className={`mt-5 max-w-4xl mx-auto text-[14px] sm:text-[16px] lg:text-[17px] leading-7 ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              DevZore builds custom management systems that help
              businesses organize customers, inventory, sales,
              installments, expenses, staff and reporting through one
              centralized digital platform.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3.5 text-[12px] font-black text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Discuss Your System
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/custom-software-solutions"
                className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[12px] font-black transition-all ${
                  d
                    ? "border-white/[0.12] bg-white/[0.03] text-white hover:bg-white/[0.07]"
                    : "border-gray-300 bg-white text-gray-900 hover:border-purple-300"
                }`}
              >
                Custom Software
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Hero bottom features */}

            <div
              className={`mt-8 pt-5 border-t flex flex-wrap items-center justify-center gap-x-7 gap-y-3 ${
                d ? "border-white/[0.07]" : "border-gray-200"
              }`}
            >
              {[
                "Custom Workflows",
                "Centralized Data",
                "Secure Access",
                "Business Reports",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 text-[10px] sm:text-[11px] font-medium ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <CheckCircle2
                    size={13}
                    className="text-purple-500"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTRODUCTION
      ================================================== */}

      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-center">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-purple-500">
                Custom Business Software
              </span>

              <h2
                className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight leading-tight ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Replace Scattered Processes With
                <span className="text-purple-500">
                  {" "}
                  One Organized Platform
                </span>
              </h2>

              <p
                className={`mt-4 text-[13px] sm:text-[14px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                When important business information is spread across
                spreadsheets, notebooks and separate tools, daily
                operations can become difficult to manage.
              </p>

              <p
                className={`mt-3 text-[13px] sm:text-[14px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                A custom management system can bring important
                workflows into one place and provide your team with a
                clearer way to manage operations and records.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-5 sm:p-6 ${
                d
                  ? "border-white/[0.07] bg-white/[0.025]"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className={`flex items-center gap-3 rounded-xl border p-3 ${
                      d
                        ? "border-white/[0.06] bg-white/[0.025]"
                        : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <div className="w-7 h-7 shrink-0 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                      <CheckCircle2 size={14} />
                    </div>

                    <span
                      className={`text-[11px] font-semibold ${
                        d ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          MANAGEMENT MODULES
      ================================================== */}

      <section
        className={`py-10 sm:py-12 border-y ${
          d
            ? "border-white/[0.06] bg-white/[0.015]"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[9px] font-black uppercase tracking-[0.22em] text-purple-500">
              System Modules
            </span>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Everything Your Business Needs
              <span className="text-purple-500">
                {" "}
                in One System
              </span>
            </h2>

            <p
              className={`mt-3 text-[13px] sm:text-[14px] leading-7 ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Your management platform can include the modules your
              business actually needs, with workflows designed around
              your operations.
            </p>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {systems.map((system) => (
              <div
                key={system.title}
                className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  d
                    ? "border-white/[0.07] bg-[#080808] hover:border-purple-500/25"
                    : "border-gray-200 bg-[#fafafa] hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-purple-500 ${
                    d ? "bg-purple-500/10" : "bg-purple-50"
                  }`}
                >
                  {system.icon}
                </div>

                <h3
                  className={`mt-4 text-[14px] font-bold ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {system.title}
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-6 ${
                    d ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {system.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          DASHBOARD / SYSTEM EXPERIENCE
      ================================================== */}

      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className={`rounded-3xl border p-6 sm:p-8 lg:p-10 ${
              d
                ? "border-white/[0.07] bg-white/[0.025]"
                : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <MonitorCog size={21} />
                </div>

                <h2
                  className={`mt-4 text-3xl sm:text-4xl font-black tracking-tight ${
                    d ? "text-white" : "text-gray-950"
                  }`}
                >
                  A Dashboard Built Around
                  <span className="text-purple-500">
                    {" "}
                    Your Operations
                  </span>
                </h2>

                <p
                  className={`mt-4 text-[13px] sm:text-[14px] leading-7 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Give your team a clear view of the information that
                  matters. Dashboards can display sales, customers,
                  stock, payments, expenses and other operational data
                  based on your requirements.
                </p>

                <Link
                  to="/contact"
                  className="group mt-5 inline-flex items-center gap-2 text-[11px] font-black text-purple-500"
                >
                  Discuss Your Requirements
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Fake dashboard visual */}

              <div
                className={`rounded-2xl border p-4 ${
                  d
                    ? "border-white/[0.07] bg-[#050505]"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p
                      className={`text-[11px] font-bold ${
                        d ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Business Overview
                    </p>

                    <p className="text-[8px] text-gray-500 mt-1">
                      Management dashboard
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                    <BarChart3 size={15} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    ["Sales", "Overview"],
                    ["Customers", "Records"],
                    ["Inventory", "Stock"],
                    ["Reports", "Analytics"],
                  ].map(([title, label]) => (
                    <div
                      key={title}
                      className={`rounded-xl border p-3 ${
                        d
                          ? "border-white/[0.06] bg-white/[0.025]"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <p className="text-[8px] text-gray-500">
                        {label}
                      </p>

                      <p
                        className={`mt-1 text-[12px] font-bold ${
                          d ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {title}
                      </p>

                      <div
                        className={`mt-3 h-1.5 rounded-full overflow-hidden ${
                          d ? "bg-white/[0.05]" : "bg-gray-100"
                        }`}
                      >
                        <div className="w-[68%] h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          PROCESS
      ================================================== */}

      <section
        className={`py-10 sm:py-12 ${
          d ? "bg-white/[0.015]" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[9px] font-black uppercase tracking-[0.22em] text-purple-500">
              Our Process
            </span>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              From Business Workflow
              <span className="text-purple-500">
                {" "}
                to Working Software
              </span>
            </h2>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {process.map((step) => (
              <div
                key={step.number}
                className={`relative rounded-2xl border p-5 ${
                  d
                    ? "border-white/[0.07] bg-[#080808]"
                    : "border-gray-200 bg-[#fafafa]"
                }`}
              >
                <span className="absolute top-4 right-4 text-[9px] font-black text-purple-500/50">
                  {step.number}
                </span>

                <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  {step.icon}
                </div>

                <h3
                  className={`mt-4 text-[13px] font-bold ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`mt-2 text-[10px] leading-5 ${
                    d ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          TECHNOLOGIES
      ================================================== */}

      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-7 lg:gap-12 items-center">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-purple-500">
                Technology
              </span>

              <h2
                className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Modern Technology for
                <span className="text-purple-500">
                  {" "}
                  Modern Businesses
                </span>
              </h2>

              <p
                className={`mt-3 text-[13px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We use modern web technologies to develop responsive,
                secure and maintainable management platforms.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-[11px] font-bold ${
                    d
                      ? "border-white/[0.07] bg-white/[0.025] text-gray-300"
                      : "border-gray-200 bg-white text-gray-700"
                  }`}
                >
                  <Code2 size={13} className="text-purple-500" />
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY DEVZORE
      ================================================== */}

      <section
        className={`py-10 sm:py-12 border-y ${
          d
            ? "border-white/[0.06] bg-white/[0.015]"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[9px] font-black uppercase tracking-[0.22em] text-purple-500">
              Why DevZore
            </span>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Management Software Designed
              <span className="text-purple-500">
                {" "}
                for Real Workflows
              </span>
            </h2>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {whyDevZore.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-5 ${
                  d
                    ? "border-white/[0.07] bg-[#080808]"
                    : "border-gray-200 bg-[#fafafa]"
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  {item.icon}
                </div>

                <h3
                  className={`mt-4 text-[13px] font-bold ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-2 text-[10px] leading-5 ${
                    d ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          FAQ
      ================================================== */}

      <section className="py-10 sm:py-12">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="text-center">
            <span className="text-[9px] font-black uppercase tracking-[0.22em] text-purple-500">
              FAQ
            </span>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Management Systems
              <span className="text-purple-500"> FAQ</span>
            </h2>
          </div>

          <div className="mt-7 space-y-2">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`rounded-xl border overflow-hidden ${
                    d
                      ? "border-white/[0.07] bg-white/[0.02]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(open ? -1 : index)
                    }
                    className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left"
                  >
                    <span
                      className={`text-[12px] sm:text-[13px] font-bold ${
                        d ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={15}
                      className={`shrink-0 text-purple-500 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      open
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`px-4 sm:px-5 pb-4 text-[11px] sm:text-[12px] leading-6 ${
                          d ? "text-gray-500" : "text-gray-600"
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="pb-10 sm:pb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className={`relative overflow-hidden rounded-3xl border px-6 py-9 sm:px-10 sm:py-11 text-center ${
              d
                ? "border-purple-500/15 bg-gradient-to-br from-[#12091f] via-[#10091a] to-[#0b0a18]"
                : "border-purple-100 bg-gradient-to-br from-purple-50 via-white to-indigo-50"
            }`}
          >
            <div
              className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
                d ? "bg-purple-600/15" : "bg-purple-200/50"
              }`}
            />

            <div
              className={`absolute -bottom-24 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
                d ? "bg-indigo-600/10" : "bg-indigo-100/60"
              }`}
            />

            <div className="relative max-w-3xl mx-auto">
              <Sparkles
                size={25}
                className="mx-auto text-purple-500"
              />

              <h2
                className={`mt-4 text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Need a Custom Management System?
              </h2>

              <p
                className={`mt-4 text-[13px] sm:text-[14px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tell us how your business currently works and what you
                want to improve. We can discuss the modules, workflows
                and development approach for your management platform.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3.5 text-[12px] font-black text-white transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/15"
                >
                  Discuss Your System
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <Link
                  to="/allservices"
                  className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[12px] font-black transition-all ${
                    d
                      ? "border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08]"
                      : "border-gray-300 bg-white text-gray-900 hover:border-purple-300"
                  }`}
                >
                  Explore Our Services
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTERNAL LINKS
      ================================================== */}

      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-5 border-t ${
              d ? "border-white/[0.06]" : "border-gray-200"
            }`}
          >
            <Link
              to="/business-solutions"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Business Solutions
            </Link>

            <Link
              to="/custom-software-solutions"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Custom Software
            </Link>

            <Link
              to="/web-development"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Web Development
            </Link>

            <Link
              to="/backend-api"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Backend & API
            </Link>

            <Link
              to="/saas-solutions"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              SaaS Solutions
            </Link>

            <Link
              to="/contact"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Contact DevZore
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementSystems;