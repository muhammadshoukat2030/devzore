import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  ClipboardList,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  Headphones,
  Workflow,
  MessageSquare,
  ShieldCheck,
  Gauge,
  RefreshCw,
  Sparkles,
} from "lucide-react";

const OurProcess = ({ isDark }) => {
  const d = isDark;

  /* ==================================================
     PROCESS STEPS
  ================================================== */

  const processSteps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description:
        "We start by understanding your business, users, goals, challenges and project requirements before recommending a technical solution.",
      points: [
        "Business requirements",
        "Target users",
        "Project objectives",
        "Technical requirements",
      ],
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Planning",
      description:
        "We organize the project into a clear development plan covering features, architecture, technology and implementation priorities.",
      points: [
        "Feature planning",
        "Technology selection",
        "Project architecture",
        "Development roadmap",
      ],
    },
    {
      number: "03",
      icon: Palette,
      title: "UI/UX Design",
      description:
        "We design clean and intuitive digital experiences focused on usability, responsiveness and your product's business goals.",
      points: [
        "User experience",
        "Interface design",
        "Responsive layouts",
        "Design consistency",
      ],
    },
    {
      number: "04",
      icon: Code2,
      title: "Development",
      description:
        "Our development phase turns the approved plan and design into a functional, scalable and maintainable digital product.",
      points: [
        "Frontend development",
        "Backend development",
        "API integration",
        "Database development",
      ],
    },
    {
      number: "05",
      icon: TestTube2,
      title: "Testing & QA",
      description:
        "Before launch, we test functionality, responsiveness, performance and important user flows across the product.",
      points: [
        "Functional testing",
        "Responsive testing",
        "Performance checks",
        "Bug fixing",
      ],
    },
    {
      number: "06",
      icon: Rocket,
      title: "Launch",
      description:
        "Once everything is ready, we prepare the application for production and deploy it using an appropriate hosting environment.",
      points: [
        "Production setup",
        "Deployment",
        "Domain configuration",
        "Final verification",
      ],
    },
    {
      number: "07",
      icon: Headphones,
      title: "Support & Improvement",
      description:
        "After launch, we can continue supporting the product with maintenance, updates, improvements and future development.",
      points: [
        "Maintenance",
        "Feature updates",
        "Performance improvements",
        "Technical support",
      ],
    },
  ];

  /* ==================================================
     PRINCIPLES
  ================================================== */

  const principles = [
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description:
        "We keep project discussions clear so requirements, priorities and progress remain easy to understand.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Development",
      description:
        "We focus on clean implementation, maintainable architecture and reliable functionality throughout development.",
    },
    {
      icon: Gauge,
      title: "Performance Focused",
      description:
        "Performance, responsiveness and usability are considered throughout the development lifecycle.",
    },
    {
      icon: RefreshCw,
      title: "Built to Evolve",
      description:
        "We structure digital products so they can be improved and extended as business requirements grow.",
    },
  ];

  /* ==================================================
     PROJECT TYPES
  ================================================== */

  const projectTypes = [
    "Business Websites",
    "Web Applications",
    "Mobile Applications",
    "SaaS Platforms",
    "E-Commerce Systems",
    "Management Systems",
    "Backend & APIs",
    "AI-Powered Products",
  ];

  return (
    <main
      className={`min-h-screen overflow-hidden transition-colors duration-300 ${
        d
          ? "bg-[#030303] text-white"
          : "bg-[#fafafa] text-[#111827]"
      }`}
    >
      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className={`relative overflow-hidden border-b ${
          d
            ? "border-white/[0.06]"
            : "border-gray-200"
        }`}
      >
        {/* Background Glow */}

        <div className="pointer-events-none absolute inset-0">
          <div
            className={`absolute left-1/2 top-[-180px] h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[120px] ${
              d
                ? "bg-purple-700/10"
                : "bg-purple-300/20"
            }`}
          />

          <div
            className={`absolute right-[-150px] top-[-130px] h-[500px] w-[500px] rounded-full blur-[120px] ${
              d
                ? "bg-indigo-700/10"
                : "bg-indigo-200/20"
            }`}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">

            {/* Badge */}

            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] sm:text-xs ${
                d
                  ? "border-purple-500/25 bg-purple-500/10 text-purple-300"
                  : "border-purple-200 bg-purple-50/70 text-purple-600"
              }`}
            >
              <Workflow size={15} />
              Our Process
            </div>

            {/* Heading */}

            <h1
              className={`mt-6 text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl ${
                d ? "text-white" : "text-[#090d18]"
              }`}
            >
              From Idea to Launch

              <span className="mt-2 block bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                A Clear Development Process
              </span>
            </h1>

            {/* Description */}

            <p
              className={`mx-auto mt-6 max-w-4xl text-[14px] leading-7 sm:text-[16px] sm:leading-8 lg:text-[17px] ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              DevZore follows a structured software development process that
              takes your project from initial discovery and planning through
              design, development, testing, launch and ongoing support.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 px-7 py-3.5 text-[12px] font-black text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20 sm:w-auto"
              >
                Start Your Project

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/allservices"
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl border px-7 py-3.5 text-[12px] font-black transition-all sm:w-auto ${
                  d
                    ? "border-white/[0.12] bg-white/[0.03] text-white hover:bg-white/[0.06]"
                    : "border-gray-300 bg-white text-slate-900 hover:bg-gray-100"
                }`}
              >
                Explore Our Services

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Hero Features */}

          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t pt-6 ${
              d
                ? "border-white/[0.06]"
                : "border-gray-200"
            }`}
          >
            {[
              "Clear Planning",
              "Modern Development",
              "Quality Testing",
              "Launch Support",
            ].map((item) => (
              <div
                key={item}
                className={`flex items-center gap-2 text-[11px] font-semibold sm:text-xs ${
                  d ? "text-gray-400" : "text-slate-600"
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
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-purple-500 sm:text-[11px]">
              How We Work
            </span>

            <h2
              className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              A Structured Path From

              <span className="text-purple-500">
                {" "}
                Concept to Product
              </span>
            </h2>

            <p
              className={`mt-4 text-[13px] leading-7 sm:text-[15px] ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Every project is different, but a clear process helps reduce
              confusion, improve collaboration and keep development focused on
              the real business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          PROCESS STEPS
      ================================================== */}

      <section className="pb-12 sm:pb-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                    d
                      ? "border-white/[0.07] bg-white/[0.025] hover:border-purple-500/30 hover:bg-white/[0.04]"
                      : "border-gray-200 bg-white hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/[0.06]"
                  } ${
                    index === processSteps.length - 1
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4">

                    {/* Icon */}

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                        d
                          ? "border-purple-500/20 bg-purple-500/10 text-purple-300"
                          : "border-purple-100 bg-purple-50 text-purple-600"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3
                          className={`text-lg font-black sm:text-xl ${
                            d ? "text-white" : "text-gray-950"
                          }`}
                        >
                          {step.title}
                        </h3>

                        <span
                          className={`text-3xl font-black ${
                            d
                              ? "text-white/[0.06]"
                              : "text-slate-100"
                          }`}
                        >
                          {step.number}
                        </span>
                      </div>

                      <p
                        className={`mt-2 text-[12px] leading-6 sm:text-[13px] ${
                          d
                            ? "text-gray-400"
                            : "text-slate-600"
                        }`}
                      >
                        {step.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {step.points.map((point) => (
                          <span
                            key={point}
                            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[10px] font-semibold ${
                              d
                                ? "border-white/[0.07] bg-white/[0.03] text-gray-400"
                                : "border-gray-200 bg-gray-50 text-slate-600"
                            }`}
                          >
                            <CheckCircle2
                              size={11}
                              className="text-purple-500"
                            />

                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY OUR PROCESS
      ================================================== */}

      <section
        className={`border-y py-12 sm:py-14 ${
          d
            ? "border-white/[0.06] bg-white/[0.015]"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-purple-500 sm:text-[11px]">
              Development Principles
            </span>

            <h2
              className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Built Around Clarity,

              <span className="text-purple-500">
                {" "}
                Quality & Growth
              </span>
            </h2>

            <p
              className={`mt-4 text-[13px] leading-7 sm:text-[14px] ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Our process is designed to keep development organized while
              leaving room for improvements as the product evolves.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                    d
                      ? "border-white/[0.07] bg-[#080808] hover:border-purple-500/30"
                      : "border-gray-200 bg-[#fafafa] hover:border-purple-200 hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      d
                        ? "bg-purple-500/10 text-purple-300"
                        : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    <Icon size={19} />
                  </div>

                  <h3
                    className={`mt-4 text-[14px] font-black ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-2 text-[11px] leading-6 sm:text-[12px] ${
                      d
                        ? "text-gray-400"
                        : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          PROJECT TYPES
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-purple-500 sm:text-[11px]">
                Flexible Workflow
              </span>

              <h2
                className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                One Process.

                <span className="block text-purple-500">
                  Different Digital Products.
                </span>
              </h2>

              <p
                className={`mt-4 text-[13px] leading-7 sm:text-[14px] ${
                  d ? "text-gray-400" : "text-slate-600"
                }`}
              >
                The exact workflow can be adjusted depending on the scope,
                complexity and requirements of your project.
              </p>

              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-[12px] font-black text-purple-500 transition hover:text-purple-600"
              >
                Discuss Your Requirements

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {projectTypes.map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 transition-all ${
                    d
                      ? "border-white/[0.07] bg-white/[0.025]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-purple-500"
                  />

                  <span
                    className={`text-[11px] font-bold sm:text-[12px] ${
                      d
                        ? "text-gray-300"
                        : "text-slate-700"
                    }`}
                  >
                    {item}
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

      <section className="pb-10 sm:pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className={`relative overflow-hidden rounded-[24px] border px-5 py-9 text-center sm:px-8 sm:py-10 ${
              d
                ? "border-purple-500/20 bg-gradient-to-br from-purple-600/[0.12] via-white/[0.02] to-indigo-600/[0.08]"
                : "border-purple-200 bg-gradient-to-br from-purple-50 via-white to-indigo-50"
            }`}
          >
            {/* Glow */}

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-[180px] w-[350px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[90px]" />
            </div>

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-white">
                <Sparkles size={20} />
              </div>

              <h2
                className={`mt-4 text-[27px] font-black tracking-tight sm:text-[35px] lg:text-[42px] ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Ready to Start Your Project?
              </h2>

              <p
                className={`mx-auto mt-3 max-w-2xl text-[12px] leading-6 sm:text-[14px] ${
                  d
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                Tell us what you want to build. We can discuss your goals,
                requirements and the right development approach for your
                project.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-[11px] font-bold text-white transition-all hover:bg-purple-700 sm:w-auto"
                >
                  Discuss Your Project

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/allservices"
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-[11px] font-bold transition-all sm:w-auto ${
                    d
                      ? "border-white/[0.12] text-gray-300 hover:bg-white/[0.05]"
                      : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Explore Services

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t pt-5 ${
              d
                ? "border-white/[0.06]"
                : "border-gray-200"
            }`}
          >
            <Link
              to="/web-development"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              Web Development
            </Link>

            <Link
              to="/mobile-apps"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              Mobile App Development
            </Link>

            <Link
              to="/saas-product-development"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              SaaS Development
            </Link>

            <Link
              to="/startup-mvp"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              Startup MVP
            </Link>

            <Link
              to="/ui-ux-design"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              UI/UX Design
            </Link>

            <Link
              to="/technologies"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              Technologies
            </Link>

            <Link
              to="/contact"
              className="text-[10px] text-gray-500 transition hover:text-purple-500"
            >
              Contact DevZore
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurProcess;