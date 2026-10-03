import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Users,
  CreditCard,
  BarChart3,
  ShieldCheck,
  Settings,
  Database,
  Workflow,
  Gauge,
  Layers3,
  Rocket,
  Code2,
  RefreshCw,
  Server,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

const SaaSSolutions = ({ isDark }) => {
  // ======================================================
  // SAAS FEATURES
  // ======================================================

  const features = [
    {
      icon: <Users size={22} />,
      title: "User Management",
      description:
        "Secure registration, authentication, profiles, roles and permission-based access for your SaaS users.",
    },
    {
      icon: <CreditCard size={22} />,
      title: "Subscriptions & Billing",
      description:
        "Build subscription plans, recurring billing flows and payment integrations around your business model.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "SaaS Dashboards",
      description:
        "Modern dashboards that help users access important data, actions, reports and product functionality.",
    },
    {
      icon: <Workflow size={22} />,
      title: "Workflow Automation",
      description:
        "Automate repetitive processes and connect important product workflows to improve operational efficiency.",
    },
    {
      icon: <Database size={22} />,
      title: "Scalable Backend",
      description:
        "Structured backend architecture, databases and APIs designed to support growing SaaS products.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Security & Access",
      description:
        "Authentication, authorization, validation and secure development practices built into your platform.",
    },
  ];

  // ======================================================
  // DEVELOPMENT PROCESS
  // ======================================================

  const process = [
    {
      number: "01",
      title: "Product Discovery",
      description:
        "We understand your SaaS idea, users, business model, required features and technical requirements.",
    },
    {
      number: "02",
      title: "Architecture & UX",
      description:
        "We plan the product structure, user flows, database architecture, APIs and scalable application experience.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "We build the frontend, backend, dashboards, authentication and core SaaS functionality.",
    },
    {
      number: "04",
      title: "Testing & Launch",
      description:
        "We test important workflows, optimize the product and prepare your SaaS platform for deployment.",
    },
    {
      number: "05",
      title: "Scale & Improve",
      description:
        "After launch, the product can evolve with new features, integrations, automation and performance improvements.",
    },
  ];

  // ======================================================
  // SAAS TYPES
  // ======================================================

  const productTypes = [
    "B2B SaaS Platforms",
    "Business Management Software",
    "Subscription Applications",
    "Customer Portals",
    "Admin Dashboards",
    "Workflow Platforms",
    "AI-Powered SaaS Products",
    "Analytics Platforms",
    "Internal Business Tools",
    "Multi-User Web Applications",
  ];

  // ======================================================
  // TECHNOLOGY
  // ======================================================

  const technologies = [
    {
      icon: <Code2 size={19} />,
      title: "Modern Frontend",
      text: "React and modern frontend technologies for responsive, fast and maintainable user interfaces.",
    },
    {
      icon: <Server size={19} />,
      title: "Backend & APIs",
      text: "Structured backend systems and APIs for application logic, integrations and business workflows.",
    },
    {
      icon: <Database size={19} />,
      title: "Database Architecture",
      text: "Organized data models designed around your SaaS users, subscriptions and application requirements.",
    },
    {
      icon: <Cloud size={19} />,
      title: "Cloud Ready",
      text: "Applications prepared for modern cloud deployment and scalable digital infrastructure.",
    },
  ];

  // ======================================================
  // WHY DEVZORE
  // ======================================================

  const benefits = [
    "Product-focused SaaS development",
    "Scalable application architecture",
    "Responsive modern interfaces",
    "Secure authentication systems",
    "Custom dashboards and workflows",
    "API and third-party integrations",
    "Performance-focused development",
    "Post-launch improvements and support",
  ];

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-[#030303] text-white"
          : "bg-white text-[#0b1020]"
      }`}
    >
      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className={`relative pt-[105px] sm:pt-[115px] pb-10 sm:pb-12 border-b overflow-hidden ${
          isDark
            ? "border-white/[0.06]"
            : "border-gray-200"
        }`}
      >
        {/* BACKGROUND GLOW */}

        <div
          className={`absolute inset-0 pointer-events-none ${
            isDark
              ? "bg-[radial-gradient(circle_at_50%_20%,rgba(147,51,234,0.15),transparent_42%)]"
              : "bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.13),transparent_43%)]"
          }`}
        />

        <div className="absolute top-10 left-[12%] w-52 h-52 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-[10%] w-60 h-60 bg-indigo-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          {/* BADGE */}

          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
              isDark
                ? "border-purple-500/25 bg-purple-500/[0.07]"
                : "border-purple-200 bg-purple-50/70"
            }`}
          >
            <Cloud size={15} className="text-purple-600" />

            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] text-purple-600">
              SaaS Solutions
            </span>
          </div>

          {/* HEADING */}

          <h1 className="mt-6 mx-auto max-w-5xl text-[40px] sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-[-0.045em] leading-[0.98]">
            Build a SaaS Product
            <span className="block mt-2 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Ready to Grow With You
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className={`mt-6 max-w-4xl mx-auto text-[15px] sm:text-[17px] lg:text-[18px] leading-7 sm:leading-8 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            DevZore designs and develops modern SaaS platforms with
            authentication, dashboards, subscriptions, APIs, user
            management and scalable architecture for startups and
            businesses.
          </p>

          {/* CTA */}

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-3.5 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Discuss Your SaaS
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/saas-product-development"
              className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "border-white/15 text-white hover:bg-white/[0.06]"
                  : "border-gray-300 text-gray-900 hover:bg-gray-50"
              }`}
            >
              SaaS Development
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* QUICK BENEFITS */}

          <div
            className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-x-7 gap-y-3 ${
              isDark
                ? "border-white/[0.07]"
                : "border-gray-200"
            }`}
          >
            {[
              "Scalable Architecture",
              "Secure Authentication",
              "Subscription Ready",
              "Launch Support",
            ].map((item) => (
              <div
                key={item}
                className={`flex items-center gap-2 text-[11px] sm:text-xs font-semibold ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <CheckCircle2
                  size={14}
                  className="text-purple-500"
                />

                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          INTRODUCTION
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div>
              <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.22em] text-purple-600">
                SaaS Product Development
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[44px] leading-[1.08] font-black tracking-tight">
                From SaaS Idea to a
                <span className="text-purple-600">
                  {" "}
                  Working Product
                </span>
              </h2>

              <p
                className={`mt-4 text-[14px] sm:text-[15px] leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Building a SaaS product requires more than creating a
                website. The platform needs clear user flows, secure
                accounts, reliable backend systems, scalable data
                architecture and a product experience designed for
                continued growth.
              </p>

              <p
                className={`mt-3 text-[14px] sm:text-[15px] leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We help transform SaaS ideas into structured digital
                products that can be launched, tested and improved as
                the business grows.
              </p>
            </div>

            {/* RIGHT CARD */}

            <div
              className={`rounded-3xl border p-5 sm:p-7 ${
                isDark
                  ? "bg-white/[0.025] border-white/[0.07]"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: <Layers3 size={19} />,
                    value: "MVP",
                    label: "Product Launch",
                  },
                  {
                    icon: <Users size={19} />,
                    value: "Multi-User",
                    label: "Architecture",
                  },
                  {
                    icon: <Gauge size={19} />,
                    value: "Fast",
                    label: "Performance",
                  },
                  {
                    icon: <RefreshCw size={19} />,
                    value: "Scalable",
                    label: "Development",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl border p-4 ${
                      isDark
                        ? "bg-[#080808] border-white/[0.06]"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                      {item.icon}
                    </div>

                    <p className="mt-4 text-lg font-black">
                      {item.value}
                    </p>

                    <p
                      className={`mt-1 text-[10px] ${
                        isDark
                          ? "text-gray-500"
                          : "text-gray-500"
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FEATURES
      ================================================== */}

      <section
        className={`py-12 sm:py-14 border-y ${
          isDark
            ? "bg-white/[0.015] border-white/[0.06]"
            : "bg-[#fafafa] border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.22em] text-purple-600">
              Core SaaS Features
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
              Everything Your SaaS Platform Needs
            </h2>

            <p
              className={`mt-3 text-[14px] leading-7 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              We develop the core systems needed to turn your
              application into a practical, usable and scalable SaaS
              product.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-[#080808] border-white/[0.07] hover:border-purple-500/30"
                    : "bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>

                <h3 className="mt-4 text-[15px] font-bold">
                  {feature.title}
                </h3>

                <p
                  className={`mt-2 text-[12px] leading-6 ${
                    isDark ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          PRODUCT TYPES
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-purple-600">
                SaaS Products
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
                SaaS Solutions We Can Build
              </h2>

              <p
                className={`mt-4 text-[14px] leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                From early-stage SaaS MVPs to business platforms,
                DevZore can build software around your users,
                workflows and product goals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-2.5">
              {productTypes.map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                    isDark
                      ? "border-white/[0.07] bg-white/[0.02]"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <CheckCircle2
                    size={15}
                    className="text-purple-500 shrink-0"
                  />

                  <span className="text-[12px] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          TECHNOLOGY
      ================================================== */}

      <section
        className={`py-12 sm:py-14 border-y ${
          isDark
            ? "bg-white/[0.015] border-white/[0.06]"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-purple-600">
              Technology & Architecture
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
              Built on a Modern Technology Foundation
            </h2>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {technologies.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-5 ${
                  isDark
                    ? "bg-[#080808] border-white/[0.07]"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-purple-500/10 text-purple-500">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-[14px] font-bold">
                  {item.title}
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-5 ${
                    isDark ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          PROCESS
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-purple-600">
              Development Process
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
              How We Build Your SaaS Product
            </h2>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {process.map((step) => (
              <div
                key={step.number}
                className={`relative rounded-2xl border p-5 ${
                  isDark
                    ? "border-white/[0.07] bg-white/[0.02]"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <span className="text-[11px] font-black text-purple-500">
                  {step.number}
                </span>

                <h3 className="mt-3 text-[14px] font-bold">
                  {step.title}
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-5 ${
                    isDark ? "text-gray-500" : "text-gray-600"
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
          SECURITY / SCALABILITY
      ================================================== */}

      <section
        className={`py-12 sm:py-14 border-y ${
          isDark
            ? "border-white/[0.06] bg-[#070707]"
            : "border-gray-200 bg-[#fafafa]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className={`rounded-3xl border p-6 sm:p-8 lg:p-10 grid lg:grid-cols-2 gap-8 items-center ${
              isDark
                ? "border-white/[0.08] bg-white/[0.025]"
                : "border-gray-200 bg-white"
            }`}
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <LockKeyhole size={22} />
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl font-black tracking-tight">
                Designed for Security,
                <span className="text-purple-600">
                  {" "}
                  Performance & Growth
                </span>
              </h2>

              <p
                className={`mt-4 text-[14px] leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                A SaaS product should be designed so new users,
                features and integrations can be added without
                unnecessarily complicating the application.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  icon: <ShieldCheck size={17} />,
                  title: "Secure Access",
                },
                {
                  icon: <Gauge size={17} />,
                  title: "Performance",
                },
                {
                  icon: <Layers3 size={17} />,
                  title: "Scalable Structure",
                },
                {
                  icon: <Settings size={17} />,
                  title: "Maintainable Code",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`flex items-center gap-3 rounded-xl border p-4 ${
                    isDark
                      ? "border-white/[0.07] bg-black/20"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="text-purple-500">
                    {item.icon}
                  </div>

                  <span className="text-[12px] font-bold">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY DEVZORE
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-purple-600">
                Why DevZore
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
                A Development Partner for Your SaaS Journey
              </h2>

              <p
                className={`mt-4 text-[14px] leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We focus on building practical software around your
                product requirements instead of forcing your idea
                into a generic template.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-2.5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 ${
                    isDark
                      ? "border-white/[0.06] bg-white/[0.02]"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <CheckCircle2
                    size={15}
                    className="text-purple-500 mt-0.5 shrink-0"
                  />

                  <span className="text-[11px] font-semibold leading-5">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="pb-12 sm:pb-14">
       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
  <div
    className={`relative overflow-hidden rounded-3xl border px-6 py-9 sm:px-10 sm:py-10 text-center transition-colors duration-300 ${
      isDark
        ? "bg-gradient-to-br from-[#111018] via-[#15111f] to-[#10131d] border-purple-500/15"
        : "bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-purple-100"
    }`}
  >
    {/* TOP DECORATION */}
    <div
      className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
        isDark ? "bg-purple-500/10" : "bg-purple-300/20"
      }`}
    />

    {/* BOTTOM DECORATION */}
    <div
      className={`absolute -bottom-24 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
        isDark ? "bg-indigo-500/10" : "bg-indigo-200/25"
      }`}
    />

    <div className="relative max-w-3xl mx-auto">
      {/* ICON */}
      <div
        className={`mx-auto w-11 h-11 rounded-xl flex items-center justify-center border ${
          isDark
            ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
            : "bg-white border-purple-100 text-purple-600 shadow-sm"
        }`}
      >
        <Sparkles size={21} />
      </div>

      {/* HEADING */}
      <h2
        className={`mt-4 text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight ${
          isDark ? "text-white" : "text-gray-950"
        }`}
      >
        Have a SaaS Idea?
      </h2>

      {/* DESCRIPTION */}
      <p
        className={`mt-3 max-w-2xl mx-auto text-[13px] sm:text-[14px] leading-7 ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Tell us what you want to build. We can discuss your
        product requirements, core features and the right
        development approach for your SaaS platform.
      </p>

      {/* BUTTONS */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/contact"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-[12px] font-black text-white transition-all duration-300 hover:bg-purple-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20"
        >
          Start Your SaaS Project

          <ArrowRight
            size={15}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>

        <Link
          to="/saas-product-development"
          className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-[12px] font-black transition-all duration-300 ${
            isDark
              ? "bg-white/[0.03] border-white/[0.10] text-gray-200 hover:bg-white/[0.07] hover:border-purple-500/30"
              : "bg-white border-gray-200 text-gray-800 hover:text-purple-600 hover:border-purple-200 hover:shadow-sm"
          }`}
        >
          Explore SaaS Development

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
    </div>
  );
};

export default SaaSSolutions;