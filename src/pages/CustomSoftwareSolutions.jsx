import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Settings,
  Workflow,
  Database,
  BarChart3,
  Plug,
  Users,
  ShieldCheck,
  Gauge,
  Layers3,
  Rocket,
  RefreshCw,
  MonitorCog,
  Boxes,
  Cloud,
  Sparkles,
  ChevronDown,
  Braces,
  Server,
  LayoutDashboard,
  Wrench,
  GitBranch,
  LockKeyhole,
} from "lucide-react";

const CustomSoftwareSolutions = ({ isDark }) => {
  const d = isDark;
  const [openFaq, setOpenFaq] = useState(0);

  // ======================================================
  // CUSTOM SOFTWARE TYPES
  // ======================================================

  const solutions = [
    {
      icon: <MonitorCog size={20} />,
      title: "Custom Web Applications",
      description:
        "Purpose-built web applications designed around your business processes, users and operational requirements.",
    },
    {
      icon: <LayoutDashboard size={20} />,
      title: "Admin Dashboards",
      description:
        "Custom dashboards for managing users, operations, reports, content, transactions and business activity.",
    },
    {
      icon: <Workflow size={20} />,
      title: "Business Automation",
      description:
        "Automate repetitive workflows and connect important business processes through custom software.",
    },
    {
      icon: <Boxes size={20} />,
      title: "Management Systems",
      description:
        "Centralized systems for inventory, customers, sales, billing, staff, expenses and operational records.",
    },
    {
      icon: <Plug size={20} />,
      title: "API Integrations",
      description:
        "Connect your software with third-party services, payment systems, APIs and external business tools.",
    },
    {
      icon: <Database size={20} />,
      title: "Database Systems",
      description:
        "Structured data solutions for storing, managing and retrieving important business information.",
    },
    {
      icon: <Users size={20} />,
      title: "Internal Business Tools",
      description:
        "Private tools and portals that help teams manage internal workflows, information and daily operations.",
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Reporting Platforms",
      description:
        "Custom reporting and analytics interfaces that turn operational data into useful business insights.",
    },
  ];

  // ======================================================
  // BENEFITS
  // ======================================================

  const benefits = [
    "Built around your workflow",
    "Custom features & modules",
    "Scalable architecture",
    "Secure user access",
    "Third-party integrations",
    "Long-term extensibility",
  ];

  // ======================================================
  // PROCESS
  // ======================================================

  const process = [
    {
      number: "01",
      icon: <Workflow size={18} />,
      title: "Requirements Discovery",
      description:
        "We understand your business processes, users, current challenges and the outcomes you want from the software.",
    },
    {
      number: "02",
      icon: <Layers3 size={18} />,
      title: "Architecture & Planning",
      description:
        "We define the system modules, workflows, database structure, integrations and technical architecture.",
    },
    {
      number: "03",
      icon: <Code2 size={18} />,
      title: "Design & Development",
      description:
        "We build the software using modern technologies with a focus on usability, maintainability and performance.",
    },
    {
      number: "04",
      icon: <Rocket size={18} />,
      title: "Testing & Deployment",
      description:
        "Core workflows are tested before deployment, followed by launch and support for future improvements.",
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
  // WHY CUSTOM SOFTWARE
  // ======================================================

  const reasons = [
    {
      icon: <Settings size={19} />,
      title: "Your Exact Workflow",
      description:
        "Custom software can follow the way your business actually operates instead of forcing your team into a generic workflow.",
    },
    {
      icon: <Gauge size={19} />,
      title: "Focused Functionality",
      description:
        "Build the features your business needs without unnecessary functionality that makes everyday work more complicated.",
    },
    {
      icon: <GitBranch size={19} />,
      title: "Future Flexibility",
      description:
        "A well-structured system can be extended with additional modules, workflows and integrations as requirements evolve.",
    },
    {
      icon: <LockKeyhole size={19} />,
      title: "Controlled Access",
      description:
        "User roles and permissions can be designed around your organization so access to important functionality stays controlled.",
    },
  ];

  // ======================================================
  // DEVELOPMENT PRINCIPLES
  // ======================================================

  const principles = [
    {
      icon: <ShieldCheck size={18} />,
      title: "Secure",
      description:
        "Authentication, authorization and secure development practices can be incorporated into the platform.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance Focused",
      description:
        "Applications are structured with responsive interfaces and efficient application workflows in mind.",
    },
    {
      icon: <Cloud size={18} />,
      title: "Scalable",
      description:
        "Architecture can be planned to support additional users, modules and functionality as the product grows.",
    },
    {
      icon: <RefreshCw size={18} />,
      title: "Maintainable",
      description:
        "Clean structure and reusable components make future maintenance and feature development easier.",
    },
  ];

  // ======================================================
  // FAQ
  // ======================================================

  const faqs = [
    {
      question: "What is custom software development?",
      answer:
        "Custom software development means designing and building software around the specific requirements, workflows and users of a business instead of relying only on a generic off-the-shelf product.",
    },
    {
      question: "What type of custom software can DevZore build?",
      answer:
        "DevZore can develop custom web applications, management systems, dashboards, internal business tools, SaaS platforms, APIs, database-driven applications and workflow automation solutions.",
    },
    {
      question: "Can you replace spreadsheets or manual processes?",
      answer:
        "Depending on the workflow, manual records and spreadsheet-based processes can often be converted into a centralized application with structured data, user access, automation and reporting.",
    },
    {
      question: "Can custom software integrate with other services?",
      answer:
        "Yes. Where suitable APIs are available, custom software can integrate with third-party services such as payment providers, communication platforms and other business systems.",
    },
    {
      question: "Can different users have different permissions?",
      answer:
        "Yes. Role-based access can be implemented so administrators, managers, employees or customers receive access appropriate to their role.",
    },
    {
      question: "Can the software be expanded later?",
      answer:
        "Yes. When the architecture is planned for future development, new modules, integrations and functionality can be added as business requirements change.",
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
        <div
          className={`absolute inset-0 pointer-events-none ${
            d
              ? "bg-[radial-gradient(circle_at_50%_15%,rgba(147,51,234,0.12),transparent_38%)]"
              : "bg-[radial-gradient(circle_at_50%_15%,rgba(168,85,247,0.11),transparent_40%)]"
          }`}
        />

        <div
          className={`absolute top-8 right-[12%] w-64 h-64 rounded-full blur-[120px] pointer-events-none ${
            d ? "bg-indigo-700/10" : "bg-indigo-200/30"
          }`}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* BADGE */}

            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
                d
                  ? "border-purple-500/20 bg-purple-500/[0.07]"
                  : "border-purple-200 bg-purple-50/80"
              }`}
            >
              <Code2 size={14} className="text-purple-500" />

              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-purple-600">
                Custom Software Solutions
              </span>
            </div>

            {/* HEADING */}

            <h1
              className={`mt-6 text-[38px] sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-[-0.045em] leading-[1.02] ${
                d ? "text-white" : "text-[#080d1b]"
              }`}
            >
              Software Built Around
              <span className="block mt-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                Your Business Workflow
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className={`mt-5 max-w-4xl mx-auto text-[14px] sm:text-[16px] lg:text-[17px] leading-7 ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              DevZore designs and develops custom software solutions
              for businesses that need more than generic tools — from
              web applications and internal systems to dashboards,
              automation, APIs and scalable digital platforms.
            </p>

            {/* BUTTONS */}

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3.5 text-[12px] font-black text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Discuss Your Software
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/allservices"
                className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[12px] font-black transition-all ${
                  d
                    ? "border-white/[0.12] bg-white/[0.03] text-white hover:bg-white/[0.07]"
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

            {/* HERO FEATURES */}

            <div
              className={`mt-8 pt-5 border-t flex flex-wrap items-center justify-center gap-x-7 gap-y-3 ${
                d ? "border-white/[0.07]" : "border-gray-200"
              }`}
            >
              {[
                "Custom Architecture",
                "Secure Development",
                "API Integrations",
                "Scalable Software",
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
                Built for Your Business
              </span>

              <h2
                className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight leading-tight ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                When Generic Software
                <span className="text-purple-500">
                  {" "}
                  Is Not Enough
                </span>
              </h2>

              <p
                className={`mt-4 text-[13px] sm:text-[14px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Every business has different workflows, users,
                processes and reporting requirements. Generic software
                may not always fit those requirements effectively.
              </p>

              <p
                className={`mt-3 text-[13px] sm:text-[14px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Custom software gives you the flexibility to build
                around the way your organization works, while keeping
                future development and integrations in mind.
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
          CUSTOM SOFTWARE SOLUTIONS
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
              What We Can Build
            </span>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Custom Software for
              <span className="text-purple-500">
                {" "}
                Real Business Needs
              </span>
            </h2>

            <p
              className={`mt-3 text-[13px] sm:text-[14px] leading-7 ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              From internal tools to complete business platforms, the
              system can be structured around the functionality your
              organization actually requires.
            </p>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
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
                  {solution.icon}
                </div>

                <h3
                  className={`mt-4 text-[14px] font-bold ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {solution.title}
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-6 ${
                    d ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          CUSTOM WORKFLOW SECTION
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
                  <Braces size={21} />
                </div>

                <h2
                  className={`mt-4 text-3xl sm:text-4xl font-black tracking-tight ${
                    d ? "text-white" : "text-gray-950"
                  }`}
                >
                  Your Workflow.
                  <span className="text-purple-500">
                    {" "}
                    Your Software.
                  </span>
                </h2>

                <p
                  className={`mt-4 text-[13px] sm:text-[14px] leading-7 ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Instead of adapting your operations to software that
                  was built for everyone, custom development allows the
                  software to be designed around your own processes,
                  users and business requirements.
                </p>

                <Link
                  to="/contact"
                  className="group mt-5 inline-flex items-center gap-2 text-[11px] font-black text-purple-500"
                >
                  Tell Us What You Need
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* SOFTWARE VISUAL */}

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
                      Custom Software Platform
                    </p>

                    <p className="text-[8px] text-gray-500 mt-1">
                      Built around your workflow
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                    <Code2 size={15} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    {
                      label: "Operations",
                      title: "Workflow",
                      icon: <Workflow size={13} />,
                    },
                    {
                      label: "Information",
                      title: "Database",
                      icon: <Database size={13} />,
                    },
                    {
                      label: "Connectivity",
                      title: "Integrations",
                      icon: <Plug size={13} />,
                    },
                    {
                      label: "Visibility",
                      title: "Reports",
                      icon: <BarChart3 size={13} />,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`rounded-xl border p-3 ${
                        d
                          ? "border-white/[0.06] bg-white/[0.025]"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-[8px] text-gray-500">
                          {item.label}
                        </p>

                        <span className="text-purple-500">
                          {item.icon}
                        </span>
                      </div>

                      <p
                        className={`mt-2 text-[12px] font-bold ${
                          d ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {item.title}
                      </p>

                      <div
                        className={`mt-3 h-1.5 rounded-full overflow-hidden ${
                          d ? "bg-white/[0.05]" : "bg-gray-100"
                        }`}
                      >
                        <div className="w-[70%] h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
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
          DEVELOPMENT PRINCIPLES
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
              Development Approach
            </span>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Built for More Than
              <span className="text-purple-500">
                {" "}
                Just Launch Day
              </span>
            </h2>

            <p
              className={`mt-3 text-[13px] leading-7 ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Good custom software should support today's requirements
              while keeping future maintenance and development in mind.
            </p>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-5 text-center ${
                  d
                    ? "border-white/[0.07] bg-[#080808]"
                    : "border-gray-200 bg-[#fafafa]"
                }`}
              >
                <div className="mx-auto w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
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
          PROCESS
      ================================================== */}

      <section className="py-10 sm:py-12">
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
              From Requirements to
              <span className="text-purple-500">
                {" "}
                Working Software
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

      <section
        className={`py-10 sm:py-12 ${
          d ? "bg-white/[0.015]" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-7 lg:gap-12 items-center">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-purple-500">
                Technology Stack
              </span>

              <h2
                className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Modern Technology for
                <span className="text-purple-500">
                  {" "}
                  Custom Products
                </span>
              </h2>

              <p
                className={`mt-3 text-[13px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We use modern frontend, backend and database
                technologies to develop custom software for web-based
                business applications.
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
          WHY CUSTOM SOFTWARE
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
              Why Custom Software
            </span>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Software That Fits
              <span className="text-purple-500">
                {" "}
                Your Organization
              </span>
            </h2>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {reasons.map((item) => (
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
              Custom Software
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
                Have a Custom Software Idea?
              </h2>

              <p
                className={`mt-4 text-[13px] sm:text-[14px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tell us what your business needs. We can discuss your
                workflows, required features, integrations and a
                suitable development approach for your software.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3.5 text-[12px] font-black text-white transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/15"
                >
                  Discuss Your Project
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <Link
                  to="/management-systems"
                  className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[12px] font-black transition-all ${
                    d
                      ? "border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08]"
                      : "border-gray-300 bg-white text-gray-900 hover:border-purple-300"
                  }`}
                >
                  Management Systems
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
              to="/management-systems"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Management Systems
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

export default CustomSoftwareSolutions;