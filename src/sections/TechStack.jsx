import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Palette,
  Cloud,
  GitBranch,
  Layers,
  CheckCircle,
  ArrowRight,
  Braces,
  Workflow,
  ShieldCheck,
  MonitorSmartphone,
} from "lucide-react";

const TechStack = ({ isDark = true }) => {
  const d = isDark;
  const [activeCategory, setActiveCategory] = useState("Frontend");

  // ======================================================
  // TECHNOLOGY CATEGORIES
  // ======================================================

  const categories = [
    {
      name: "Frontend",
      icon: <Code2 size={17} />,
      color: "purple",
      description:
        "Modern frontend technologies for responsive websites, dashboards and interactive web applications.",
      technologies: [
        {
          name: "React",
          short: "React",
          desc: "Component-based web applications",
        },
        {
          name: "Next.js",
          short: "Next",
          desc: "React applications and web platforms",
        },
        {
          name: "JavaScript",
          short: "JS",
          desc: "Modern browser application development",
        },
        {
          name: "TypeScript",
          short: "TS",
          desc: "Typed JavaScript development",
        },
        {
          name: "Tailwind CSS",
          short: "TW",
          desc: "Responsive interface styling",
        },
        {
          name: "HTML & CSS",
          short: "HTML",
          desc: "Semantic and responsive interfaces",
        },
      ],
    },

    {
      name: "Backend",
      icon: <Server size={17} />,
      color: "blue",
      description:
        "Backend technologies for APIs, authentication, business logic and application services.",
      technologies: [
        {
          name: "Node.js",
          short: "Node",
          desc: "Server-side JavaScript applications",
        },
        {
          name: "Express.js",
          short: "EX",
          desc: "REST API and backend development",
        },
        {
          name: "REST APIs",
          short: "API",
          desc: "Frontend and backend communication",
        },
        {
          name: "GraphQL",
          short: "GQL",
          desc: "Flexible API architecture when suitable",
        },
        {
          name: "JWT",
          short: "JWT",
          desc: "Token-based authentication",
        },
        {
          name: "WebSockets",
          short: "WS",
          desc: "Real-time application communication",
        },
      ],
    },

    {
      name: "Database",
      icon: <Database size={17} />,
      color: "green",
      description:
        "Database technologies selected around application structure, data relationships and project requirements.",
      technologies: [
        {
          name: "MongoDB",
          short: "MDB",
          desc: "Document-oriented application data",
        },
        {
          name: "PostgreSQL",
          short: "PG",
          desc: "Relational application databases",
        },
        {
          name: "MySQL",
          short: "SQL",
          desc: "Relational database solutions",
        },
        {
          name: "Mongoose",
          short: "MG",
          desc: "MongoDB modelling for Node.js",
        },
        {
          name: "Redis",
          short: "RDS",
          desc: "Caching and application data workflows",
        },
        {
          name: "Database Design",
          short: "DB",
          desc: "Schemas, relationships and data modelling",
        },
      ],
    },

    {
      name: "Mobile",
      icon: <Smartphone size={17} />,
      color: "cyan",
      description:
        "Technologies and practices for responsive and cross-platform mobile application experiences.",
      technologies: [
        {
          name: "React Native",
          short: "RN",
          desc: "Cross-platform mobile applications",
        },
        {
          name: "Expo",
          short: "EXPO",
          desc: "React Native application workflows",
        },
        {
          name: "Mobile APIs",
          short: "API",
          desc: "Backend services for mobile apps",
        },
        {
          name: "Push Notifications",
          short: "PN",
          desc: "Application notification workflows",
        },
        {
          name: "Responsive UI",
          short: "UI",
          desc: "Interfaces designed for mobile screens",
        },
        {
          name: "App Integration",
          short: "INT",
          desc: "External services and application APIs",
        },
      ],
    },

    {
      name: "UI/UX",
      icon: <Palette size={17} />,
      color: "pink",
      description:
        "Design tools and interface practices for usable, consistent and responsive digital products.",
      technologies: [
        {
          name: "Figma",
          short: "FIG",
          desc: "Interface design and prototyping",
        },
        {
          name: "Wireframing",
          short: "WF",
          desc: "Page and application structure",
        },
        {
          name: "Prototyping",
          short: "PRO",
          desc: "Interactive design concepts",
        },
        {
          name: "Design Systems",
          short: "DS",
          desc: "Reusable interface components",
        },
        {
          name: "Responsive Design",
          short: "RWD",
          desc: "Layouts across screen sizes",
        },
        {
          name: "Accessibility",
          short: "A11Y",
          desc: "Accessibility-conscious interface design",
        },
      ],
    },

    {
      name: "Cloud & Deploy",
      icon: <Cloud size={17} />,
      color: "amber",
      description:
        "Hosting and deployment technologies used according to project infrastructure and production requirements.",
      technologies: [
        {
          name: "Vercel",
          short: "VER",
          desc: "Frontend and serverless deployments",
        },
        {
          name: "Render",
          short: "RND",
          desc: "Application and backend hosting",
        },
        {
          name: "Railway",
          short: "RW",
          desc: "Application deployment workflows",
        },
        {
          name: "Firebase",
          short: "FB",
          desc: "Application services and hosting",
        },
        {
          name: "AWS",
          short: "AWS",
          desc: "Cloud infrastructure when required",
        },
        {
          name: "Cloudflare",
          short: "CF",
          desc: "DNS, delivery and web infrastructure",
        },
      ],
    },

    {
      name: "Tools",
      icon: <GitBranch size={17} />,
      color: "orange",
      description:
        "Development tools that support source control, collaboration, testing and production workflows.",
      technologies: [
        {
          name: "Git",
          short: "GIT",
          desc: "Source code version control",
        },
        {
          name: "GitHub",
          short: "GH",
          desc: "Repository and development collaboration",
        },
        {
          name: "GitHub Actions",
          short: "CI",
          desc: "Automated development workflows",
        },
        {
          name: "Postman",
          short: "POST",
          desc: "API development and testing",
        },
        {
          name: "VS Code",
          short: "VS",
          desc: "Development environment",
        },
        {
          name: "npm",
          short: "NPM",
          desc: "JavaScript package management",
        },
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

    green: d
      ? "bg-green-500/10 border-green-500/20 text-green-400"
      : "bg-green-50 border-green-100 text-green-600",

    cyan: d
      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
      : "bg-cyan-50 border-cyan-100 text-cyan-600",

    pink: d
      ? "bg-pink-500/10 border-pink-500/20 text-pink-400"
      : "bg-pink-50 border-pink-100 text-pink-600",

    amber: d
      ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
      : "bg-amber-50 border-amber-100 text-amber-600",

    orange: d
      ? "bg-orange-500/10 border-orange-500/20 text-orange-400"
      : "bg-orange-50 border-orange-100 text-orange-600",
  };

  // ======================================================
  // DEVELOPMENT APPROACH
  // ======================================================

  const approach = [
    {
      icon: <Layers size={16} />,
      title: "Project-Based Stack",
      text: "Technologies selected around actual project requirements",
    },
    {
      icon: <Braces size={16} />,
      title: "Maintainable Code",
      text: "Reusable structure and organised development",
    },
    {
      icon: <ShieldCheck size={16} />,
      title: "Security-Conscious",
      text: "Authentication, validation and secure development practices",
    },
    {
      icon: <MonitorSmartphone size={16} />,
      title: "Responsive Products",
      text: "Interfaces built for modern desktop and mobile experiences",
    },
  ];

  const currentCategory =
    categories.find((item) => item.name === activeCategory) || categories[0];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className={`py-10 sm:py-12 transition-colors duration-300 ${
        d ? "bg-[#030303]" : "bg-white"
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
            Technology Stack
          </div>

          <h2
            id="tech-stack-heading"
            className={`text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight mb-3 ${
              d ? "text-white" : "text-slate-950"
            }`}
          >
            Technologies We Use to{" "}
            <span className="text-purple-600">
              Build Digital Products
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              d ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Our development team works across frontend, backend, databases,
            mobile applications, UI/UX and deployment technologies. The stack
            is selected according to the requirements and architecture of each
            project.
          </p>
        </div>

        {/* ==================================================
            APPROACH CARDS
        ================================================== */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-7">
          {approach.map((item) => (
            <div
              key={item.title}
              className={`flex items-center gap-3 p-3 rounded-xl border ${
                d
                  ? "bg-white/[0.02] border-white/[0.06]"
                  : "bg-slate-50 border-slate-200"
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
                  className={`hidden sm:block text-[9px] sm:text-[10px] leading-relaxed mt-0.5 ${
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
            CATEGORY NAVIGATION
        ================================================== */}

        <div
          className="flex flex-wrap gap-2 mb-5"
          role="tablist"
          aria-label="Technology categories"
        >
          {categories.map((category) => {
            const selected = activeCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveCategory(category.name)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border text-[11px] font-bold transition-all duration-200 ${
                  selected
                    ? "bg-purple-600 border-purple-600 text-white shadow-[0_0_14px_rgba(124,58,237,0.20)]"
                    : d
                    ? "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]"
                    : "bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                {React.cloneElement(category.icon, {
                  size: 14,
                })}

                {category.name}
              </button>
            );
          })}
        </div>

        {/* ==================================================
            ACTIVE CATEGORY
        ================================================== */}

        <div
          role="tabpanel"
          className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 lg:p-7 mb-5 ${
            d
              ? "bg-white/[0.02] border-white/[0.07]"
              : "bg-white border-slate-200"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute -top-32 right-0 w-80 h-80 bg-purple-600/[0.06] blur-[100px] rounded-full pointer-events-none"
          />

          <div className="relative z-10">

            {/* CATEGORY HEADER */}

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5">
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${
                  colorMap[currentCategory.color]
                }`}
              >
                {React.cloneElement(currentCategory.icon, {
                  size: 20,
                })}
              </div>

              <div>
                <h3
                  className={`text-lg sm:text-xl font-black ${
                    d ? "text-white" : "text-slate-900"
                  }`}
                >
                  {currentCategory.name} Technologies
                </h3>

                <p
                  className={`text-[11px] sm:text-xs leading-relaxed mt-1 max-w-3xl ${
                    d ? "text-gray-500" : "text-slate-500"
                  }`}
                >
                  {currentCategory.description}
                </p>
              </div>
            </div>

            {/* TECHNOLOGY GRID */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {currentCategory.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className={`group flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
                    d
                      ? "bg-white/[0.025] border-white/[0.06] hover:bg-white/[0.05] hover:border-purple-500/20"
                      : "bg-slate-50 border-slate-100 hover:bg-white hover:border-purple-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-[10px] font-black tracking-tight transition-colors ${
                      d
                        ? "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/15"
                        : "bg-purple-50 text-purple-600 group-hover:bg-purple-100"
                    }`}
                  >
                    {tech.short}
                  </div>

                  <div className="min-w-0">
                    <h4
                      className={`text-[12px] sm:text-[13px] font-bold mb-0.5 ${
                        d ? "text-gray-200" : "text-slate-800"
                      }`}
                    >
                      {tech.name}
                    </h4>

                    <p
                      className={`text-[9px] sm:text-[10px] leading-relaxed ${
                        d ? "text-gray-500" : "text-slate-500"
                      }`}
                    >
                      {tech.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================================================
            ALL TECHNOLOGY CATEGORIES
        ================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {categories.map((category) => {
            const selected = activeCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(category.name)}
                className={`group text-left p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  selected
                    ? d
                      ? "border-purple-500/35 bg-purple-600/[0.06]"
                      : "border-purple-200 bg-purple-50"
                    : d
                    ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.10]"
                    : "bg-white border-slate-200 hover:border-purple-200 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                      colorMap[category.color]
                    }`}
                  >
                    {React.cloneElement(category.icon, {
                      size: 14,
                    })}
                  </div>

                  <ArrowRight
                    size={13}
                    className={`transition-transform group-hover:translate-x-0.5 ${
                      selected
                        ? "text-purple-500"
                        : d
                        ? "text-gray-700"
                        : "text-slate-300"
                    }`}
                  />
                </div>

                <h3
                  className={`text-[12px] sm:text-[13px] font-bold mb-1 ${
                    selected
                      ? "text-purple-500"
                      : d
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {category.name}
                </h3>

                <p
                  className={`text-[9px] sm:text-[10px] ${
                    d ? "text-gray-500" : "text-slate-500"
                  }`}
                >
                  {category.technologies.length} technologies & capabilities
                </p>
              </button>
            );
          })}
        </div>

        {/* ==================================================
            MERN STACK FEATURE
        ================================================== */}

        <div
          className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 mb-5 ${
            d
              ? "bg-white/[0.02] border-white/[0.06]"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-10 lg:items-center">

            {/* LEFT */}

            <div>
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  d
                    ? "bg-green-500/10 text-green-400"
                    : "bg-green-50 text-green-600"
                }`}
              >
                <Workflow size={19} />
              </div>

              <span
                className={`text-[9px] font-black uppercase tracking-[0.18em] ${
                  d ? "text-green-400" : "text-green-600"
                }`}
              >
                Full-Stack Development
              </span>

              <h3
                className={`text-lg sm:text-xl font-black mt-1.5 mb-2 ${
                  d ? "text-white" : "text-slate-900"
                }`}
              >
                MERN Stack Development
              </h3>

              <p
                className={`text-[11px] sm:text-xs leading-relaxed mb-4 ${
                  d ? "text-gray-500" : "text-slate-500"
                }`}
              >
                DevZore works with MongoDB, Express.js, React and Node.js for
                full-stack web applications where the MERN architecture fits
                the project requirements.
              </p>

              <Link
                to="/mern-stack-development"
                onClick={scrollTop}
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-purple-500 hover:text-purple-400 transition-colors"
              >
                Explore MERN Stack Development
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                {
                  name: "MongoDB",
                  letter: "M",
                  desc: "Database",
                },
                {
                  name: "Express.js",
                  letter: "E",
                  desc: "Backend",
                },
                {
                  name: "React",
                  letter: "R",
                  desc: "Frontend",
                },
                {
                  name: "Node.js",
                  letter: "N",
                  desc: "Runtime",
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`flex flex-col items-center justify-center text-center min-h-[100px] p-3 rounded-xl border ${
                    d
                      ? "bg-white/[0.03] border-white/[0.06]"
                      : "bg-slate-50 border-slate-100"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm mb-2 ${
                      d
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    {tech.letter}
                  </div>

                  <span
                    className={`text-[11px] font-bold ${
                      d ? "text-gray-200" : "text-slate-800"
                    }`}
                  >
                    {tech.name}
                  </span>

                  <span
                    className={`text-[9px] mt-0.5 ${
                      d ? "text-gray-600" : "text-slate-400"
                    }`}
                  >
                    {tech.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================================================
            TECHNOLOGY NOTE
        ================================================== */}

        <div
          className={`flex items-start gap-3 p-4 rounded-xl border mb-5 ${
            d
              ? "bg-purple-500/[0.04] border-purple-500/10"
              : "bg-purple-50/70 border-purple-100"
          }`}
        >
          <CheckCircle
            size={15}
            className="text-purple-500 shrink-0 mt-0.5"
          />

          <p
            className={`text-[11px] sm:text-xs leading-relaxed ${
              d ? "text-gray-400" : "text-slate-600"
            }`}
          >
            <strong className={d ? "text-gray-200" : "text-slate-800"}>
              Technology follows the project.
            </strong>{" "}
            We do not force every application into the same stack. Technology
            choices depend on product requirements, existing infrastructure,
            integrations, maintainability and the type of application being
            developed.
          </p>
        </div>

        {/* ==================================================
            CTA
        ================================================== */}

        <div
          className={`relative overflow-hidden p-6 sm:p-7 rounded-2xl border ${
            d
              ? "bg-purple-600/[0.05] border-purple-500/15"
              : "bg-purple-50 border-purple-100"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute -top-28 right-0 w-72 h-72 bg-purple-600/10 blur-[90px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            {/* CTA TEXT */}

            <div className="max-w-2xl">
              <span
                className={`text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Technology Consultation
              </span>

              <h3
                className={`text-xl sm:text-2xl font-black mt-2 mb-2 ${
                  d ? "text-white" : "text-slate-900"
                }`}
              >
                Not Sure Which Technology Your Project Needs?
              </h3>

              <p
                className={`text-xs sm:text-[13px] leading-relaxed ${
                  d ? "text-gray-400" : "text-slate-600"
                }`}
              >
                Share your project requirements with the DevZore team. We can
                discuss the frontend, backend, database and deployment approach
                suitable for your application.
              </p>
            </div>

            {/* CTA BUTTONS */}

            <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:-translate-y-0.5"
              >
                Discuss Your Project
                <ArrowRight size={14} />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20the%20technology%20stack%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-xs sm:text-sm hover:bg-[#25D366]/20 transition-all hover:-translate-y-0.5"
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

export default TechStack;