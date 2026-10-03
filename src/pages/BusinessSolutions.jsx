import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  ShoppingCart,
  BarChart3,
  Users,
  Settings,
  Database,
  ShieldCheck,
  Zap,
  Workflow,
  Code2,
  Cloud,
  Smartphone,
  LayoutDashboard,
  Headphones,
  Search,
  Rocket,
} from "lucide-react";

const BusinessSolutions = ({ isDark }) => {
  const d = isDark;

  // ======================================================
  // BUSINESS SOLUTIONS
  // ======================================================

  const solutions = [
    {
      icon: <Globe size={22} />,
      title: "Business Websites",
      description:
        "Professional, responsive and conversion-focused websites designed to strengthen your online presence and support business growth.",
      link: "/web-development",
    },
    {
      icon: <LayoutDashboard size={22} />,
      title: "Business Web Applications",
      description:
        "Custom web applications and dashboards that help businesses manage operations, customers, data and internal workflows.",
      link: "/web-development",
    },
    {
      icon: <ShoppingCart size={22} />,
      title: "E-Commerce Solutions",
      description:
        "Scalable online stores with product management, customer experiences, payments and business-focused functionality.",
      link: "/ecommerce",
    },
    {
      icon: <Settings size={22} />,
      title: "Custom Software",
      description:
        "Software solutions tailored around your business processes, operational requirements and long-term digital goals.",
      link: "/custom-software-solutions",
    },
    {
      icon: <Workflow size={22} />,
      title: "Process Automation",
      description:
        "Automate repetitive workflows and connect business processes to reduce manual work and improve operational efficiency.",
      link: "/contact",
    },
    {
      icon: <Database size={22} />,
      title: "Management Systems",
      description:
        "Centralized systems for managing customers, sales, inventory, reports, employees and other important business operations.",
      link: "/management-systems",
    },
  ];

  // ======================================================
  // BENEFITS
  // ======================================================

  const benefits = [
    {
      icon: <Zap size={20} />,
      title: "Improve Efficiency",
      description:
        "Reduce repetitive work and make everyday business operations faster and easier to manage.",
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Better Business Insights",
      description:
        "Organize important data into useful dashboards and reports that support informed decisions.",
    },
    {
      icon: <Users size={20} />,
      title: "Better Customer Experience",
      description:
        "Create smoother digital experiences that make it easier for customers to interact with your business.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Secure & Reliable",
      description:
        "Build modern systems with security, maintainability and reliability considered throughout development.",
    },
  ];

  // ======================================================
  // TECHNOLOGIES
  // ======================================================

  const capabilities = [
    {
      icon: <Code2 size={20} />,
      title: "Modern Web Development",
      text: "React, Node.js and modern web technologies for fast and maintainable applications.",
    },
    {
      icon: <Cloud size={20} />,
      title: "Cloud-Ready Solutions",
      text: "Applications designed for modern deployment, scalability and reliable online access.",
    },
    {
      icon: <Smartphone size={20} />,
      title: "Responsive Experiences",
      text: "Business solutions optimized for desktop, tablet and mobile devices.",
    },
    {
      icon: <Database size={20} />,
      title: "Data & Integrations",
      text: "Databases, APIs and third-party integrations that connect your digital operations.",
    },
  ];

  // ======================================================
  // PROCESS
  // ======================================================

  const process = [
    {
      number: "01",
      title: "Understand",
      description:
        "We understand your business, existing workflow, users, challenges and project goals.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We define the right features, technology, architecture and development roadmap.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "We design and develop your solution with a focus on usability, performance and maintainability.",
    },
    {
      number: "04",
      title: "Launch & Improve",
      description:
        "We deploy the solution, test the experience and support future improvements as your needs evolve.",
    },
  ];

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-300 ${
        d ? "bg-[#030303] text-white" : "bg-[#fafafa] text-[#111827]"
      }`}
    >
      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className={`relative pt-[108px] sm:pt-[116px] pb-12 sm:pb-14 border-b overflow-hidden ${
          d ? "border-white/[0.06]" : "border-gray-200"
        }`}
      >
        {/* BACKGROUND */}

        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-[-180px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[120px] ${
              d ? "bg-purple-700/10" : "bg-purple-300/20"
            }`}
          />

          <div
            className={`absolute top-[-120px] right-[-150px] w-[500px] h-[500px] rounded-full blur-[120px] ${
              d ? "bg-indigo-700/10" : "bg-indigo-200/20"
            }`}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">

            {/* BADGE */}

            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] ${
                d
                  ? "bg-purple-500/[0.08] border-purple-500/20 text-purple-400"
                  : "bg-purple-50 border-purple-200 text-purple-700"
              }`}
            >
              <Building2 size={14} />
              Business Solutions
            </div>

            {/* HEADING */}

            <h1
              className={`mt-6 text-[38px] sm:text-5xl lg:text-[64px] xl:text-[70px] leading-[1.02] font-black tracking-[-0.045em] ${
                d ? "text-white" : "text-[#090d18]"
              }`}
            >
              Digital Solutions Built to
              <span className="block mt-1 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                Move Your Business Forward
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className={`max-w-3xl mx-auto mt-5 text-[15px] sm:text-[17px] leading-7 ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              From professional websites and custom software to
              management systems, e-commerce platforms and business
              automation, DevZore builds digital solutions around your
              real operational needs.
            </p>

            {/* CTA */}

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[12px] font-bold transition-all hover:shadow-[0_10px_35px_rgba(147,51,234,0.25)]"
              >
                Discuss Your Business
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/allservices"
                className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border text-[12px] font-bold transition-all ${
                  d
                    ? "border-white/[0.12] text-white hover:bg-white/[0.06]"
                    : "border-gray-300 text-gray-800 hover:bg-gray-100"
                }`}
              >
                Explore Our Services
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* TRUST POINTS */}

            <div
              className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-x-7 gap-y-3 ${
                d ? "border-white/[0.07]" : "border-gray-200"
              }`}
            >
              {[
                "Custom Solutions",
                "Scalable Architecture",
                "Modern Technology",
                "Ongoing Support",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 text-[11px] sm:text-[12px] font-medium ${
                    d ? "text-gray-400" : "text-gray-600"
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
        </div>
      </section>

      {/* ==================================================
          INTRO
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-14 items-center">

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
                Built Around Your Business
              </p>

              <h2
                className={`mt-3 text-3xl sm:text-4xl lg:text-[44px] leading-[1.08] font-black tracking-tight ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Technology should solve
                <span className="text-purple-500">
                  {" "}real business problems.
                </span>
              </h2>

              <p
                className={`mt-4 text-[14px] leading-7 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Every business operates differently. Instead of forcing
                your workflow into generic software, we focus on
                understanding what your team actually needs and build
                digital solutions around those requirements.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-purple-500 hover:text-purple-600 group"
              >
                Tell us about your challenge
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* FEATURE BOX */}

            <div
              className={`rounded-2xl border p-5 sm:p-6 ${
                d
                  ? "bg-white/[0.025] border-white/[0.07]"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Replace repetitive manual processes",
                  "Centralize important business data",
                  "Improve customer interactions",
                  "Build internal management tools",
                  "Connect systems through APIs",
                  "Create scalable digital platforms",
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-start gap-2.5 rounded-xl px-3.5 py-3 ${
                      d
                        ? "bg-white/[0.03]"
                        : "bg-gray-50"
                    }`}
                  >
                    <CheckCircle2
                      size={16}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />

                    <span
                      className={`text-[12px] leading-5 ${
                        d ? "text-gray-300" : "text-gray-700"
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
      </section>

      {/* ==================================================
          BUSINESS SOLUTIONS
      ================================================== */}

      <section
        className={`py-12 sm:py-14 border-y ${
          d
            ? "bg-white/[0.015] border-white/[0.05]"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
              What We Build
            </p>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black tracking-tight ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Business solutions for modern operations
            </h2>

            <p
              className={`mt-3 text-[14px] leading-6 ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Choose the right digital solution based on your business,
              customers and operational requirements.
            </p>
          </div>

          <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                to={solution.link}
                className={`group rounded-2xl border p-5 transition-all duration-300 ${
                  d
                    ? "bg-[#080808] border-white/[0.07] hover:border-purple-500/30 hover:bg-white/[0.035]"
                    : "bg-[#fafafa] border-gray-200 hover:border-purple-200 hover:shadow-lg"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-purple-500 border transition-all group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 ${
                    d
                      ? "bg-purple-500/[0.08] border-purple-500/15"
                      : "bg-purple-50 border-purple-100"
                  }`}
                >
                  {solution.icon}
                </div>

                <h3
                  className={`mt-4 text-[16px] font-bold ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {solution.title}
                </h3>

                <p
                  className={`mt-2 text-[12px] leading-6 ${
                    d ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  {solution.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-[11px] font-bold text-purple-500">
                  Learn More
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY DIGITAL SOLUTIONS
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
              Business Impact
            </p>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              Build technology that supports growth
            </h2>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`rounded-2xl border p-5 ${
                  d
                    ? "bg-white/[0.02] border-white/[0.07]"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  {benefit.icon}
                </div>

                <h3
                  className={`mt-4 text-[14px] font-bold ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {benefit.title}
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-5 ${
                    d ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          CAPABILITIES
      ================================================== */}

      <section
        className={`py-12 sm:py-14 border-y ${
          d
            ? "bg-[#070707] border-white/[0.05]"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
                Technology & Capabilities
              </p>

              <h2
                className={`mt-3 text-3xl sm:text-4xl font-black leading-tight ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Built with modern technologies for
                <span className="text-purple-500">
                  {" "}modern businesses.
                </span>
              </h2>

              <p
                className={`mt-4 text-[13px] leading-6 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We combine frontend, backend, databases, APIs and cloud
                deployment to build complete digital solutions that can
                evolve with your business.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl border p-4 ${
                    d
                      ? "bg-white/[0.025] border-white/[0.07]"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="text-purple-500">
                    {item.icon}
                  </div>

                  <h3
                    className={`mt-3 text-[13px] font-bold ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-1.5 text-[10px] leading-5 ${
                      d ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          PROCESS
      ================================================== */}

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
              Our Process
            </p>

            <h2
              className={`mt-3 text-3xl sm:text-4xl font-black ${
                d ? "text-white" : "text-gray-950"
              }`}
            >
              From business challenge to digital solution
            </h2>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step) => (
              <div
                key={step.number}
                className={`relative rounded-2xl border p-5 ${
                  d
                    ? "bg-white/[0.02] border-white/[0.07]"
                    : "bg-white border-gray-200"
                }`}
              >
                <span className="text-[10px] font-black tracking-[0.2em] text-purple-500">
                  STEP {step.number}
                </span>

                <h3
                  className={`mt-3 text-[16px] font-bold ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`mt-2 text-[11px] leading-5 ${
                    d ? "text-gray-500" : "text-gray-600"
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
          BUSINESS TYPES
      ================================================== */}

      <section
        className={`py-11 sm:py-12 border-y ${
          d
            ? "bg-white/[0.015] border-white/[0.05]"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-purple-500">
                Who We Help
              </p>

              <h2
                className={`mt-3 text-3xl sm:text-4xl font-black ${
                  d ? "text-white" : "text-gray-950"
                }`}
              >
                Solutions for different business needs
              </h2>

              <p
                className={`mt-3 text-[13px] leading-6 ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Whether you're improving an existing business or building
                a new digital operation, the solution should match how
                your organization actually works.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Small Businesses",
                "Growing Companies",
                "E-Commerce Businesses",
                "Service Businesses",
                "Digital Startups",
                "Custom Operations",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-3 ${
                    d
                      ? "border-white/[0.07] bg-white/[0.02]"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <CheckCircle2
                    size={15}
                    className="text-purple-500 shrink-0"
                  />

                  <span
                    className={`text-[11px] font-semibold ${
                      d ? "text-gray-300" : "text-gray-700"
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

      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div
            className={`relative overflow-hidden rounded-[24px] border px-5 sm:px-8 lg:px-12 py-9 sm:py-10 ${
              d
                ? "bg-[#090909] border-white/[0.08]"
                : "bg-[#111827] border-gray-900"
            }`}
          >
            <div className="absolute -top-24 right-0 w-[350px] h-[350px] rounded-full bg-purple-600/20 blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div className="max-w-2xl">
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-purple-400">
                  Start Your Project
                </p>

                <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
                  Have a business challenge that software can solve?
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-gray-400">
                  Tell us about your workflow, idea or current problem.
                  We'll help you explore the right digital solution for
                  your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold transition-all"
                >
                  Discuss Your Project
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <a
                  href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20business%20software%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-white hover:bg-white/[0.06] text-[11px] font-bold transition-all"
                >
                  <Headphones size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTERNAL SEO LINKS
      ================================================== */}

      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-5 border-t ${
              d ? "border-white/[0.06]" : "border-gray-200"
            }`}
          >
            <Link
              to="/web-development"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Web Development
            </Link>

            <Link
              to="/ecommerce"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              E-Commerce Development
            </Link>

            <Link
              to="/backend-api"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              Backend & API
            </Link>

            <Link
              to="/saas-product-development"
              className="text-[10px] text-gray-500 hover:text-purple-500 transition"
            >
              SaaS Development
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

export default BusinessSolutions;