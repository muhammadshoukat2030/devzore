import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Search,
  Palette,
  Code2,
  TestTube,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";

const Process = ({ isDark = true }) => {
  const d = isDark;
  const [activeStep, setActiveStep] = useState(0);

  // ======================================================
  // DEVELOPMENT PROCESS
  // ======================================================

  const steps = [
    {
      n: "01",
      icon: MessageSquare,
      title: "Discovery",
      fullTitle: "Discovery & Requirements",
      subtitle: "Understand goals, users and requirements",
      desc: "We begin by understanding your business, project goals, target users, important features and technical requirements before development starts.",
      delivers: [
        "Requirements discussion",
        "Core feature identification",
        "Business goals",
        "Project scope",
      ],
    },
    {
      n: "02",
      icon: Search,
      title: "Planning",
      fullTitle: "Planning & Architecture",
      subtitle: "Define the technical foundation",
      desc: "Once requirements are clear, we plan the application structure, technology choices, database requirements, APIs and deployment approach.",
      delivers: [
        "Technical approach",
        "Application structure",
        "Database planning",
        "API planning",
      ],
    },
    {
      n: "03",
      icon: Palette,
      title: "UI/UX Design",
      fullTitle: "UI/UX Design",
      subtitle: "Plan the product experience",
      desc: "Interfaces are designed around usability, responsive layouts and clear user flows, creating a practical foundation for development.",
      delivers: [
        "Page & screen layouts",
        "Responsive design",
        "UI components",
        "User flows",
      ],
    },
    {
      n: "04",
      icon: Code2,
      title: "Development",
      fullTitle: "Development",
      subtitle: "Build the working product",
      desc: "Frontend and backend functionality is developed using technologies suited to the project, with attention to maintainability and responsive behaviour.",
      delivers: [
        "Frontend development",
        "Backend development",
        "Database integration",
        "API integrations",
      ],
    },
    {
      n: "05",
      icon: TestTube,
      title: "Testing",
      fullTitle: "Testing & Quality Review",
      subtitle: "Review important product flows",
      desc: "Important application flows are reviewed before launch for functionality, responsiveness, usability and technical issues.",
      delivers: [
        "Functional testing",
        "Responsive review",
        "Browser checks",
        "Issue fixing",
      ],
    },
    {
      n: "06",
      icon: Rocket,
      title: "Launch",
      fullTitle: "Deployment & Support",
      subtitle: "Deploy and support the product",
      desc: "After final review, the product is deployed to the agreed environment with assistance for hosting, domains and future technical support when required.",
      delivers: [
        "Production deployment",
        "Hosting setup",
        "Domain & SSL assistance",
        "Project handover",
      ],
    },
  ];

  // ======================================================
  // PRINCIPLES
  // ======================================================

  const principles = [
    {
      icon: MessageSquare,
      title: "Clear Communication",
    },
    {
      icon: Users,
      title: "Collaborative Workflow",
    },
    {
      icon: ShieldCheck,
      title: "Quality Review",
    },
    {
      icon: Zap,
      title: "Practical Delivery",
    },
  ];

  const currentStep = steps[activeStep];
  const CurrentIcon = currentStep.icon;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className={`py-10 sm:py-12 transition-colors duration-300 ${
        d ? "bg-[#030303]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="grid lg:grid-cols-[1fr_auto] gap-5 lg:gap-10 items-end mb-7">
          <div className="max-w-3xl">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest border mb-3 ${
                d
                  ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                  : "bg-purple-50 border-purple-200 text-purple-700"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              How We Work
            </div>

            <h2
              id="process-heading"
              className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3 ${
                d ? "text-white" : "text-slate-950"
              }`}
            >
              From Idea to{" "}
              <span className="text-purple-600">
                Production
              </span>
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              A clear six-step development process that takes your project
              from initial requirements through planning, design,
              development, testing and launch.
            </p>
          </div>

          {/* CONTACT LINK */}

          <Link
            to="/contact"
            onClick={scrollTop}
            className={`hidden lg:inline-flex items-center gap-2 text-xs font-bold transition-colors ${
              d
                ? "text-purple-400 hover:text-purple-300"
                : "text-purple-600 hover:text-purple-700"
            }`}
          >
            Discuss Your Project
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* ==================================================
            PRINCIPLES
        ================================================== */}

        <div
          className={`grid grid-cols-2 lg:grid-cols-4 rounded-xl border overflow-hidden mb-5 ${
            d
              ? "border-white/[0.07] bg-white/[0.02]"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-2.5 px-3 sm:px-4 py-3 ${
                  index !== principles.length - 1
                    ? d
                      ? "lg:border-r border-white/[0.06]"
                      : "lg:border-r border-slate-200"
                    : ""
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    d
                      ? "bg-purple-500/10 text-purple-400"
                      : "bg-purple-50 text-purple-600"
                  }`}
                >
                  <Icon size={13} />
                </div>

                <span
                  className={`text-[10px] sm:text-[11px] font-bold ${
                    d ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* ==================================================
            PROCESS STEPS
            MOBILE 2 / TABLET 3 / DESKTOP 6
        ================================================== */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const active = activeStep === index;

            return (
              <button
                key={step.n}
                type="button"
                onClick={() => setActiveStep(index)}
                aria-pressed={active}
                className={`group relative text-left p-3 rounded-xl border transition-all duration-200 ${
                  active
                    ? d
                      ? "bg-purple-600/[0.10] border-purple-500/40"
                      : "bg-purple-50 border-purple-300"
                    : d
                    ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-purple-500/20"
                    : "bg-white border-slate-200 hover:border-purple-200 hover:shadow-sm"
                }`}
              >
                {/* TOP */}

                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      active
                        ? "bg-purple-600 text-white"
                        : d
                        ? "bg-white/[0.05] text-purple-400"
                        : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    <Icon size={14} />
                  </div>

                  <span
                    className={`text-[9px] font-black ${
                      active
                        ? "text-purple-500"
                        : d
                        ? "text-gray-700"
                        : "text-slate-400"
                    }`}
                  >
                    {step.n}
                  </span>
                </div>

                {/* TITLE */}

                <h3
                  className={`text-[11px] sm:text-[12px] font-bold mb-1 ${
                    active
                      ? "text-purple-500"
                      : d
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {step.title}
                </h3>

                {/* SHORT TEXT */}

                <p
                  className={`hidden sm:block text-[9px] leading-4 ${
                    d ? "text-gray-500" : "text-slate-500"
                  }`}
                >
                  {step.subtitle}
                </p>

                {/* ACTIVE LINE */}

                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-purple-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* ==================================================
            ACTIVE STEP DETAILS
        ================================================== */}

        <div
          className={`rounded-xl border overflow-hidden mb-5 ${
            d
              ? "bg-white/[0.02] border-white/[0.07]"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}

            <div
              className={`p-4 sm:p-5 lg:p-6 ${
                d
                  ? "lg:border-r border-white/[0.07]"
                  : "lg:border-r border-slate-200"
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                  <CurrentIcon size={18} />
                </div>

                <div className="min-w-0">
                  <span
                    className={`text-[9px] font-black uppercase tracking-[0.18em] ${
                      d ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    Step {currentStep.n}
                  </span>

                  <h3
                    className={`text-base sm:text-lg font-black mt-0.5 mb-1 ${
                      d ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {currentStep.fullTitle}
                  </h3>

                  <p className="text-[10px] sm:text-[11px] font-semibold text-purple-500">
                    {currentStep.subtitle}
                  </p>
                </div>
              </div>

              <p
                className={`mt-4 text-[11px] sm:text-[13px] leading-relaxed ${
                  d ? "text-gray-400" : "text-slate-600"
                }`}
              >
                {currentStep.desc}
              </p>
            </div>

            {/* RIGHT */}

            <div className="p-4 sm:p-5 lg:p-6">
              <p
                className={`text-[9px] font-black uppercase tracking-[0.18em] mb-3 ${
                  d ? "text-gray-600" : "text-slate-400"
                }`}
              >
                Typical Activities
              </p>

              <div className="grid grid-cols-2 gap-2">
                {currentStep.delivers.map((item) => (
                  <div
                    key={item}
                    className={`flex items-start gap-2 p-2.5 rounded-lg ${
                      d
                        ? "bg-white/[0.03]"
                        : "bg-slate-50"
                    }`}
                  >
                    <CheckCircle2
                      size={12}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />

                    <span
                      className={`text-[9px] sm:text-[11px] leading-relaxed font-medium ${
                        d ? "text-gray-400" : "text-slate-600"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================
              PROGRESS
          ================================================== */}

          <div
            className={`px-4 sm:px-5 py-3 border-t ${
              d
                ? "border-white/[0.06]"
                : "border-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`text-[9px] font-bold whitespace-nowrap ${
                  d ? "text-gray-600" : "text-slate-400"
                }`}
              >
                {activeStep + 1} / {steps.length}
              </span>

              <div
                className={`flex-1 h-1 rounded-full overflow-hidden ${
                  d ? "bg-white/[0.06]" : "bg-slate-100"
                }`}
              >
                <div
                  className="h-full bg-purple-600 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((activeStep + 1) / steps.length) * 100
                    }%`,
                  }}
                />
              </div>

              {activeStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setActiveStep((prev) =>
                      Math.min(prev + 1, steps.length - 1)
                    )
                  }
                  className={`inline-flex items-center gap-1 text-[10px] font-bold ${
                    d
                      ? "text-purple-400 hover:text-purple-300"
                      : "text-purple-600 hover:text-purple-700"
                  }`}
                >
                  Next Step
                  <ArrowRight size={11} />
                </button>
              ) : (
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className={`inline-flex items-center gap-1 text-[10px] font-bold ${
                    d
                      ? "text-purple-400 hover:text-purple-300"
                      : "text-purple-600 hover:text-purple-700"
                  }`}
                >
                  Start Project
                  <ArrowRight size={11} />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* ==================================================
            SMALL PROCESS NOTE
        ================================================== */}

        <div
          className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 rounded-xl border ${
            d
              ? "bg-white/[0.015] border-white/[0.05]"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <p
            className={`text-[10px] sm:text-[11px] leading-relaxed ${
              d ? "text-gray-500" : "text-slate-500"
            }`}
          >
            <strong
              className={
                d ? "text-gray-300" : "text-slate-700"
              }
            >
              Flexible workflow:
            </strong>{" "}
            The exact process can be adapted according to project scope,
            existing systems, integrations and business requirements.
          </p>

          <Link
            to="/contact"
            onClick={scrollTop}
            className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold shrink-0 ${
              d
                ? "text-purple-400 hover:text-purple-300"
                : "text-purple-600 hover:text-purple-700"
            }`}
          >
            Tell Us About Your Project
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;