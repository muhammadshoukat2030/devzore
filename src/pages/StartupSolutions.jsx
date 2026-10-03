import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Rocket,
  Lightbulb,
  Code2,
  Layers3,
  Smartphone,
  Globe,
  Database,
  CheckCircle2,
  Zap,
  ShieldCheck,
  TrendingUp,
  Users,
  Clock3,
  Settings,
  Cloud,
  Sparkles,
  Target,
  BarChart3,
} from "lucide-react";

const StartupSolutions = ({ isDark }) => {
  const d = isDark;

  // ======================================================
  // DATA
  // ======================================================

  const solutions = [
    {
      icon: <Lightbulb size={20} />,
      title: "Idea to MVP",
      description:
        "Turn your startup idea into a focused MVP with the essential features needed to validate your concept and reach real users.",
    },
    {
      icon: <Globe size={20} />,
      title: "Web Applications",
      description:
        "Build responsive, secure and scalable web applications designed around your startup's product and business requirements.",
    },
    {
      icon: <Smartphone size={20} />,
      title: "Mobile Applications",
      description:
        "Launch modern mobile experiences for your customers with scalable application architecture and user-focused interfaces.",
    },
    {
      icon: <Cloud size={20} />,
      title: "SaaS Products",
      description:
        "Develop SaaS platforms with authentication, dashboards, subscriptions, APIs, user management and scalable architecture.",
    },
    {
      icon: <Sparkles size={20} />,
      title: "AI-Powered Products",
      description:
        "Integrate generative AI, intelligent assistants, automation and AI-powered workflows into modern startup products.",
    },
    {
      icon: <Settings size={20} />,
      title: "Backend & APIs",
      description:
        "Build reliable backend systems, databases and APIs that support your application as users and product requirements grow.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your idea, users, goals, required features and technical requirements.",
    },
    {
      number: "02",
      title: "Product Planning",
      description:
        "We define the MVP scope, user flow, architecture and practical development roadmap.",
    },
    {
      number: "03",
      title: "UI/UX & Development",
      description:
        "We design the product experience and build the frontend, backend and required integrations.",
    },
    {
      number: "04",
      title: "Testing & Launch",
      description:
        "We test the product, resolve issues, optimize performance and prepare it for deployment.",
    },
    {
      number: "05",
      title: "Improve & Scale",
      description:
        "After launch, the product can evolve through new features, optimization and ongoing technical support.",
    },
  ];

  const benefits = [
    "Focused MVP development",
    "Scalable product architecture",
    "Responsive user experience",
    "Modern development technologies",
    "Secure backend development",
    "API & third-party integrations",
    "Deployment support",
    "Ongoing maintenance options",
  ];

  const technologies = [
    {
      icon: <Code2 size={18} />,
      title: "Frontend",
      text: "React, Next.js & modern UI architecture",
    },
    {
      icon: <Database size={18} />,
      title: "Backend",
      text: "Node.js, Express, APIs & databases",
    },
    {
      icon: <Layers3 size={18} />,
      title: "Full Stack",
      text: "MERN stack & scalable application systems",
    },
    {
      icon: <Sparkles size={18} />,
      title: "AI",
      text: "LLM integrations, AI assistants & automation",
    },
  ];

  // ======================================================
  // STYLES
  // ======================================================

  const sectionTitle = d ? "text-white" : "text-gray-950";
  const mutedText = d ? "text-gray-400" : "text-gray-600";

  const cardStyle = d
    ? "bg-white/[0.025] border-white/[0.08] hover:border-purple-500/30 hover:bg-white/[0.04]"
    : "bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg";

  // ======================================================
  // PAGE
  // ======================================================

  return (
    <>
      <Helmet>
        <title>
          Startup Software Solutions & MVP Development | DevZore
        </title>

        <meta
          name="description"
          content="DevZore provides startup software solutions including MVP development, web applications, mobile apps, SaaS products, backend systems and AI-powered digital products."
        />

        <link
          rel="canonical"
          href="https://devzore.com/startup-solutions"
        />
      </Helmet>

      <div
        className={`min-h-screen ${
          d ? "bg-[#030303] text-white" : "bg-[#fafafa] text-gray-900"
        }`}
      >
        {/* ==================================================
            HERO
        ================================================== */}

        <section
          className={`relative overflow-hidden border-b ${
            d ? "border-white/[0.06]" : "border-gray-200"
          }`}
        >
          {/* BACKGROUND */}

          <div className="absolute inset-0 pointer-events-none">
            <div
              className={`absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] ${
                d ? "bg-purple-600/10" : "bg-purple-200/40"
              }`}
            />

            <div
              className={`absolute top-10 right-0 w-[350px] h-[350px] rounded-full blur-[120px] ${
                d ? "bg-indigo-600/[0.06]" : "bg-indigo-100/50"
              }`}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-[105px] pb-10 md:pt-[115px] md:pb-12">
            <div className="max-w-4xl mx-auto text-center">

              {/* BADGE */}

              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] ${
                  d
                    ? "bg-purple-500/[0.08] border-purple-500/20 text-purple-300"
                    : "bg-purple-50 border-purple-200 text-purple-700"
                }`}
              >
                <Rocket size={13} />
                Startup Solutions
              </div>

              {/* HEADING */}

              <h1
                className={`mt-4 text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.06] font-black tracking-[-0.04em] ${sectionTitle}`}
              >
                Turn Your Startup Idea Into a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
                  Real Digital Product
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className={`mt-4 max-w-3xl mx-auto text-[14px] sm:text-[16px] leading-7 ${mutedText}`}
              >
                From early-stage ideas and MVPs to scalable SaaS,
                web, mobile and AI-powered products, DevZore helps
                startups plan, build, launch and improve modern
                software solutions.
              </p>

              {/* CTA */}

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[12px] font-bold transition-all hover:shadow-[0_10px_35px_rgba(147,51,234,0.25)]"
                >
                  Discuss Your Startup
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/startup-mvp"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border text-[12px] font-bold transition-all ${
                    d
                      ? "border-white/[0.12] text-gray-300 hover:text-white hover:bg-white/[0.05]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Explore MVP Development
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* MINI TRUST ITEMS */}

              <div
                className={`mt-7 pt-5 border-t flex flex-wrap justify-center gap-x-6 gap-y-2 ${
                  d ? "border-white/[0.06]" : "border-gray-200"
                }`}
              >
                {[
                  "MVP Development",
                  "Scalable Architecture",
                  "Modern Technology",
                  "Launch Support",
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium ${mutedText}`}
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
            INTRO
        ================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-7 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-purple-500">
                <Target size={16} />

                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Built for Startups
                </span>
              </div>

              <h2
                className={`mt-3 text-[28px] sm:text-[34px] lg:text-[40px] leading-tight font-black tracking-tight ${sectionTitle}`}
              >
                Build the Right Product From the Start
              </h2>

              <p
                className={`mt-3 text-[13px] sm:text-[14px] leading-6 ${mutedText}`}
              >
                Early-stage products need clear priorities. Instead
                of building unnecessary features, we focus on the
                functionality required to create a useful first
                version of your product.
              </p>

              <p
                className={`mt-3 text-[13px] sm:text-[14px] leading-6 ${mutedText}`}
              >
                The goal is to create a solid technical foundation
                that can support future improvements as your users,
                requirements and business grow.
              </p>
            </div>

            {/* BENEFITS */}

            <div className="grid sm:grid-cols-2 gap-2.5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${cardStyle} transition-all`}
                >
                  <div
                    className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center ${
                      d ? "bg-purple-500/10" : "bg-purple-50"
                    }`}
                  >
                    <CheckCircle2
                      size={14}
                      className="text-purple-500"
                    />
                  </div>

                  <span
                    className={`text-[11px] sm:text-[12px] font-semibold ${
                      d ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            STARTUP SOLUTIONS
        ================================================== */}

        <section
          className={`border-y ${
            d
              ? "bg-white/[0.015] border-white/[0.06]"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500">
                What We Build
              </p>

              <h2
                className={`mt-2 text-[28px] sm:text-[34px] font-black tracking-tight ${sectionTitle}`}
              >
                Startup Development Solutions
              </h2>

              <p
                className={`mt-2 text-[13px] sm:text-[14px] leading-6 ${mutedText}`}
              >
                Flexible development solutions for startups at
                different stages of their product journey.
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className={`group p-5 rounded-2xl border transition-all duration-300 ${cardStyle}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-purple-500 transition-all group-hover:bg-purple-600 group-hover:text-white ${
                      d
                        ? "bg-purple-500/10"
                        : "bg-purple-50"
                    }`}
                  >
                    {solution.icon}
                  </div>

                  <h3
                    className={`mt-4 text-[15px] font-bold ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {solution.title}
                  </h3>

                  <p
                    className={`mt-2 text-[11px] sm:text-[12px] leading-5 ${mutedText}`}
                  >
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            DEVELOPMENT PROCESS
        ================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-purple-500">
              <Layers3 size={15} />

              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Our Process
              </span>
            </div>

            <h2
              className={`mt-2 text-[28px] sm:text-[34px] font-black tracking-tight ${sectionTitle}`}
            >
              From Idea to Product Launch
            </h2>

            <p
              className={`mt-2 text-[13px] leading-6 ${mutedText}`}
            >
              A clear development process keeps your startup focused
              on the product, priorities and launch.
            </p>
          </div>

          <div className="mt-7 grid md:grid-cols-5 gap-2.5">
            {process.map((step) => (
              <div
                key={step.number}
                className={`relative p-4 rounded-2xl border ${cardStyle} transition-all`}
              >
                <span className="text-[10px] font-black text-purple-500">
                  {step.number}
                </span>

                <h3
                  className={`mt-2 text-[13px] font-bold ${
                    d ? "text-white" : "text-gray-900"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`mt-2 text-[10px] sm:text-[11px] leading-[1.7] ${mutedText}`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            TECHNOLOGY
        ================================================== */}

        <section
          className={`border-y ${
            d
              ? "bg-white/[0.015] border-white/[0.06]"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500">
                  Technology
                </p>

                <h2
                  className={`mt-2 text-[28px] sm:text-[34px] font-black tracking-tight ${sectionTitle}`}
                >
                  Modern Technology for Modern Startups
                </h2>

                <p
                  className={`mt-3 text-[13px] leading-6 ${mutedText}`}
                >
                  We use modern development technologies to create
                  maintainable products that can evolve as your
                  startup grows.
                </p>

                <Link
                  to="/technologies"
                  className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold text-purple-500 hover:text-purple-400"
                >
                  Explore Technologies
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {technologies.map((technology) => (
                  <div
                    key={technology.title}
                    className={`p-4 rounded-xl border ${cardStyle} transition-all`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center text-purple-500 ${
                          d
                            ? "bg-purple-500/10"
                            : "bg-purple-50"
                        }`}
                      >
                        {technology.icon}
                      </div>

                      <div>
                        <h3
                          className={`text-[12px] font-bold ${
                            d
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {technology.title}
                        </h3>

                        <p
                          className={`mt-0.5 text-[10px] leading-4 ${mutedText}`}
                        >
                          {technology.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            WHY DEVZORE
        ================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500">
              Why DevZore
            </p>

            <h2
              className={`mt-2 text-[28px] sm:text-[34px] font-black tracking-tight ${sectionTitle}`}
            >
              A Development Partner for Your Startup
            </h2>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                icon: <Zap size={18} />,
                title: "Focused Development",
                text: "We prioritize the features that matter most to your product and users.",
              },
              {
                icon: <ShieldCheck size={18} />,
                title: "Reliable Foundation",
                text: "Clean architecture helps make future maintenance and development easier.",
              },
              {
                icon: <TrendingUp size={18} />,
                title: "Built to Scale",
                text: "Your product can evolve as requirements, users and business needs grow.",
              },
              {
                icon: <Users size={18} />,
                title: "Collaborative Approach",
                text: "Clear communication keeps development aligned with your startup goals.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`p-4 rounded-2xl border ${cardStyle} transition-all`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-purple-500 ${
                    d
                      ? "bg-purple-500/10"
                      : "bg-purple-50"
                  }`}
                >
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
                  className={`mt-1.5 text-[10px] sm:text-[11px] leading-5 ${mutedText}`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            STARTUP STAGES
        ================================================== */}

        <section
          className={`border-y ${
            d
              ? "border-white/[0.06] bg-white/[0.015]"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
            <div className="grid lg:grid-cols-2 gap-7 lg:gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 text-purple-500">
                  <BarChart3 size={15} />

                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                    Startup Growth
                  </span>
                </div>

                <h2
                  className={`mt-2 text-[28px] sm:text-[34px] font-black tracking-tight ${sectionTitle}`}
                >
                  Support Across Different Startup Stages
                </h2>

                <p
                  className={`mt-3 text-[13px] leading-6 ${mutedText}`}
                >
                  Whether you are validating an idea, launching your
                  first product or improving an existing platform,
                  the development approach can adapt to your current
                  stage.
                </p>
              </div>

              <div className="space-y-2">
                {[
                  {
                    icon: <Lightbulb size={15} />,
                    title: "Idea Stage",
                    text: "Define the product scope and technical direction.",
                  },
                  {
                    icon: <Rocket size={15} />,
                    title: "MVP Stage",
                    text: "Build and launch the essential product experience.",
                  },
                  {
                    icon: <TrendingUp size={15} />,
                    title: "Growth Stage",
                    text: "Improve features, performance and product capabilities.",
                  },
                  {
                    icon: <Clock3 size={15} />,
                    title: "Ongoing Development",
                    text: "Maintain, support and continuously improve your software.",
                  },
                ].map((stage) => (
                  <div
                    key={stage.title}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${cardStyle}`}
                  >
                    <div
                      className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-purple-500 ${
                        d
                          ? "bg-purple-500/10"
                          : "bg-purple-50"
                      }`}
                    >
                      {stage.icon}
                    </div>

                    <div>
                      <h3
                        className={`text-[12px] font-bold ${
                          d
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {stage.title}
                      </h3>

                      <p
                        className={`mt-0.5 text-[10px] sm:text-[11px] ${mutedText}`}
                      >
                        {stage.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            FINAL CTA
        ================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          <div
            className={`relative overflow-hidden rounded-[24px] border px-5 sm:px-8 py-8 md:py-10 text-center ${
              d
                ? "bg-gradient-to-br from-purple-600/[0.12] via-white/[0.02] to-indigo-600/[0.08] border-purple-500/20"
                : "bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-purple-200"
            }`}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[180px] bg-purple-500/10 blur-[90px] rounded-full" />
            </div>

            <div className="relative max-w-2xl mx-auto">
              <div className="w-11 h-11 mx-auto rounded-xl bg-purple-600 text-white flex items-center justify-center">
                <Rocket size={20} />
              </div>

              <h2
                className={`mt-4 text-[27px] sm:text-[35px] font-black tracking-tight ${sectionTitle}`}
              >
                Ready to Build Your Startup Product?
              </h2>

              <p
                className={`mt-3 text-[12px] sm:text-[14px] leading-6 ${mutedText}`}
              >
                Share your idea, requirements and goals with DevZore.
                We can discuss the right development approach for
                your startup.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold transition-all"
                >
                  Start Your Project
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <Link
                  to="/allservices"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border text-[11px] font-bold transition-all ${
                    d
                      ? "border-white/[0.12] text-gray-300 hover:bg-white/[0.05]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StartupSolutions;