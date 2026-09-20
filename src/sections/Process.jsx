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
  CheckCircle,
  Users,
  Shield,
  Zap,
  GitBranch,
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
      icon: <MessageSquare size={22} />,
      color: "purple",
      title: "Discovery & Requirements",
      subtitle: "Understanding your project and business goals",
      desc: "We begin by understanding your idea, business requirements, target users, important features and technical needs. This gives the project a clear direction before design or development begins.",
      delivers: [
        "Project requirements discussion",
        "Core feature identification",
        "Business goals and user needs",
        "Initial technical considerations",
        "Project scope clarification",
      ],
    },
    {
      n: "02",
      icon: <Search size={22} />,
      color: "blue",
      title: "Planning & Architecture",
      subtitle: "Creating a practical technical foundation",
      desc: "Once the requirements are clear, we plan the application structure, technology choices, database requirements, APIs, authentication and deployment approach according to the needs of the project.",
      delivers: [
        "Technical approach",
        "Application structure",
        "Database planning",
        "API planning",
        "Authentication approach",
        "Development workflow",
      ],
    },
    {
      n: "03",
      icon: <Palette size={22} />,
      color: "pink",
      title: "UI/UX Design",
      subtitle: "Designing the user experience before development",
      desc: "The interface is planned around usability, responsive layouts and the needs of the target users. Depending on the project, this can include wireframes, interface designs, reusable components and interactive prototypes.",
      delivers: [
        "Page and screen layouts",
        "Responsive design planning",
        "UI components",
        "User flow consideration",
        "Design consistency",
        "Design review and feedback",
      ],
    },
    {
      n: "04",
      icon: <Code2 size={22} />,
      color: "green",
      title: "Development",
      subtitle: "Turning approved requirements into working software",
      desc: "Frontend and backend functionality is developed using technologies appropriate for the project. Development focuses on maintainability, responsive behaviour, reusable components and reliable application workflows.",
      delivers: [
        "Frontend development",
        "Backend development",
        "Database integration",
        "Authentication and authorization",
        "API integrations when required",
        "Responsive application functionality",
      ],
    },
    {
      n: "05",
      icon: <TestTube size={22} />,
      color: "amber",
      title: "Testing & Quality Review",
      subtitle: "Reviewing functionality before launch",
      desc: "Before production release, important application flows are reviewed across relevant devices and browsers. We check functionality, responsiveness, usability and technical issues based on the requirements of the project.",
      delivers: [
        "Functional testing",
        "Responsive design review",
        "Browser compatibility checks",
        "Form and workflow testing",
        "Performance review",
        "Issue identification and fixes",
      ],
    },
    {
      n: "06",
      icon: <Rocket size={22} />,
      color: "cyan",
      title: "Deployment & Support",
      subtitle: "Moving the product into production",
      desc: "After final review, the application can be deployed to the agreed hosting environment. Depending on the project, DevZore can also assist with domain configuration, deployment setup, maintenance and future improvements.",
      delivers: [
        "Production deployment",
        "Hosting configuration",
        "Domain and SSL assistance",
        "Deployment verification",
        "Project handover",
        "Optional maintenance and future development",
      ],
    },
  ];

  // ======================================================
  // COLORS
  // ======================================================

  const colorMap = {
    purple: d
      ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
      : "bg-purple-50 border-purple-100 text-purple-600",

    blue: d
      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
      : "bg-blue-50 border-blue-100 text-blue-600",

    pink: d
      ? "bg-pink-500/10 border-pink-500/20 text-pink-400"
      : "bg-pink-50 border-pink-100 text-pink-600",

    green: d
      ? "bg-green-500/10 border-green-500/20 text-green-400"
      : "bg-green-50 border-green-100 text-green-600",

    amber: d
      ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
      : "bg-amber-50 border-amber-100 text-amber-600",

    cyan: d
      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
      : "bg-cyan-50 border-cyan-100 text-cyan-600",
  };

  const activeBorder = {
    purple: d ? "border-purple-500/35" : "border-purple-200",
    blue: d ? "border-blue-500/35" : "border-blue-200",
    pink: d ? "border-pink-500/35" : "border-pink-200",
    green: d ? "border-green-500/35" : "border-green-200",
    amber: d ? "border-amber-500/35" : "border-amber-200",
    cyan: d ? "border-cyan-500/35" : "border-cyan-200",
  };

  // ======================================================
  // PROCESS PRINCIPLES
  // ======================================================

  const principles = [
    {
      icon: <MessageSquare size={15} />,
      title: "Clear Communication",
      text: "Requirements and feedback stay clear",
    },
    {
      icon: <Shield size={15} />,
      title: "Quality Focus",
      text: "Functionality reviewed before launch",
    },
    {
      icon: <Users size={15} />,
      title: "Collaborative Workflow",
      text: "Your feedback remains part of the process",
    },
    {
      icon: <Zap size={15} />,
      title: "Practical Delivery",
      text: "Built around real project requirements",
    },
  ];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentStep = steps[activeStep];

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className={`py-10 sm:py-12 transition-colors duration-300 ${
        d ? "bg-[#050505]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="max-w-3xl mb-8">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-4 ${
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
            className={`text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight mb-3 ${
              d ? "text-white" : "text-slate-950"
            }`}
          >
            Our Software Development{" "}
            <span className="text-purple-600">
              Process
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              d ? "text-gray-400" : "text-slate-600"
            }`}
          >
            A structured development workflow that moves your project from
            initial requirements and planning through design, development,
            testing and production deployment.
          </p>
        </div>

        {/* ==================================================
            PRINCIPLES
        ================================================== */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-7">
          {principles.map((item) => (
            <div
              key={item.title}
              className={`flex items-center gap-3 p-3 rounded-xl border ${
                d
                  ? "bg-white/[0.02] border-white/[0.06]"
                  : "bg-white border-slate-200"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  d
                    ? "bg-purple-500/10 text-purple-400"
                    : "bg-purple-50 text-purple-600"
                }`}
              >
                {item.icon}
              </div>

              <div className="min-w-0">
                <p
                  className={`text-[11px] sm:text-[12px] font-bold ${
                    d ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </p>

                <p
                  className={`hidden sm:block text-[9px] sm:text-[10px] mt-0.5 ${
                    d ? "text-gray-500" : "text-slate-500"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ==================================================
            STEP NAVIGATION
        ================================================== */}

        <div
          className="flex flex-wrap gap-2 mb-5"
          role="tablist"
          aria-label="Development process steps"
        >
          {steps.map((step, index) => {
            const active = activeStep === index;

            return (
              <button
                key={step.n}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-[11px] font-bold border transition-all duration-200 ${
                  active
                    ? "bg-purple-600 text-white border-purple-600 shadow-[0_0_14px_rgba(124,58,237,0.20)]"
                    : d
                    ? "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]"
                    : "bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                <span className="font-black opacity-70">
                  {step.n}
                </span>

                <span className="hidden md:inline">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* ==================================================
            ACTIVE STEP
        ================================================== */}

        <div
          role="tabpanel"
          className={`rounded-2xl border p-5 sm:p-6 lg:p-7 mb-6 transition-all duration-300 ${
            d ? "bg-white/[0.02]" : "bg-white"
          } ${activeBorder[currentStep.color]}`}
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">

            {/* LEFT */}

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${
                    colorMap[currentStep.color]
                  }`}
                >
                  {currentStep.icon}
                </div>

                <div>
                  <p
                    className={`text-[10px] font-black uppercase tracking-widest ${
                      d ? "text-gray-500" : "text-slate-400"
                    }`}
                  >
                    Step {currentStep.n}
                  </p>

                  <h3
                    className={`text-lg sm:text-xl font-black ${
                      d ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-purple-500 text-xs font-semibold mb-3">
                {currentStep.subtitle}
              </p>

              <p
                className={`text-[13px] sm:text-sm leading-relaxed ${
                  d ? "text-gray-400" : "text-slate-600"
                }`}
              >
                {currentStep.desc}
              </p>
            </div>

            {/* RIGHT */}

            <div>
              <p
                className={`text-[10px] font-black uppercase tracking-widest mb-3 ${
                  d ? "text-gray-500" : "text-slate-400"
                }`}
              >
                Typical Activities & Deliverables
              </p>

              <div className="grid sm:grid-cols-2 gap-2">
                {currentStep.delivers.map((item) => (
                  <div
                    key={item}
                    className={`flex items-start gap-2.5 p-2.5 rounded-lg border ${
                      d
                        ? "bg-white/[0.03] border-white/[0.06]"
                        : "bg-slate-50 border-slate-100"
                    }`}
                  >
                    <CheckCircle
                      size={13}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />

                    <span
                      className={`text-[11px] sm:text-[12px] font-medium leading-relaxed ${
                        d ? "text-gray-300" : "text-slate-700"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            ALL STEPS
        ================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {steps.map((step, index) => {
            const active = activeStep === index;

            return (
              <button
                key={step.n}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`group text-left p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  active
                    ? d
                      ? "border-purple-500/35 bg-purple-600/[0.06]"
                      : "border-purple-200 bg-purple-50"
                    : d
                    ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.10]"
                    : "bg-white border-slate-200 hover:border-purple-200 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                        active
                          ? "bg-purple-600 text-white"
                          : d
                          ? "bg-white/[0.06] text-gray-500"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {step.n}
                    </span>

                    <div
                      className={`w-7 h-7 rounded-lg border flex items-center justify-center ${
                        colorMap[step.color]
                      }`}
                    >
                      {React.cloneElement(step.icon, {
                        size: 13,
                      })}
                    </div>
                  </div>

                  <ArrowRight
                    size={13}
                    className={`transition-transform group-hover:translate-x-0.5 ${
                      active
                        ? "text-purple-500"
                        : d
                        ? "text-gray-700"
                        : "text-slate-300"
                    }`}
                  />
                </div>

                <h3
                  className={`text-[13px] font-bold mb-1 ${
                    active
                      ? "text-purple-500"
                      : d
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`text-[10px] sm:text-[11px] leading-relaxed ${
                    d ? "text-gray-500" : "text-slate-500"
                  }`}
                >
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* ==================================================
            WORKFLOW NOTE
        ================================================== */}

        <div
          className={`grid sm:grid-cols-[auto_1fr] gap-4 items-center p-4 sm:p-5 rounded-xl border mb-5 ${
            d
              ? "bg-white/[0.02] border-white/[0.06]"
              : "bg-white border-slate-200"
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              d
                ? "bg-purple-500/10 text-purple-400"
                : "bg-purple-50 text-purple-600"
            }`}
          >
            <GitBranch size={19} />
          </div>

          <div>
            <h3
              className={`text-[13px] font-bold mb-1 ${
                d ? "text-white" : "text-slate-900"
              }`}
            >
              Process adapted to your project
            </h3>

            <p
              className={`text-[11px] sm:text-xs leading-relaxed ${
                d ? "text-gray-500" : "text-slate-500"
              }`}
            >
              The exact workflow, technologies and deliverables can vary
              depending on project scope, existing systems, integrations and
              business requirements.
            </p>
          </div>
        </div>

        {/* ==================================================
            CTA
        ================================================== */}

        <div
          className={`relative overflow-hidden p-6 sm:p-7 rounded-2xl border text-center ${
            d
              ? "bg-purple-600/[0.05] border-purple-500/15"
              : "bg-purple-50 border-purple-100"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-600/10 blur-[90px] rounded-full pointer-events-none"
          />

          <div className="relative z-10">
            <h3
              className={`text-xl sm:text-2xl font-black mb-2 ${
                d ? "text-white" : "text-slate-900"
              }`}
            >
              Have a Project You Want to Build?
            </h3>

            <p
              className={`text-xs sm:text-sm leading-relaxed mb-5 max-w-xl mx-auto ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Share your requirements with DevZore and discuss the technical
              approach, development process and services suitable for your
              project.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 justify-center">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                Discuss Your Project
                <ArrowRight size={14} />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-xs sm:text-sm hover:bg-[#25D366]/20 transition-all"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z" />
                </svg>

                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;