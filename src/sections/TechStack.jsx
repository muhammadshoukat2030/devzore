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
  ArrowRight,
  Braces,
  ShieldCheck,
  MonitorSmartphone,
  Workflow,
  CheckCircle2,
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
      icon: Code2,
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
          desc: "Modern React web platforms",
        },
        {
          name: "JavaScript",
          short: "JS",
          desc: "Modern browser development",
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
          desc: "Semantic responsive interfaces",
        },
      ],
    },

    {
      name: "Backend",
      icon: Server,
      description:
        "Backend technologies for APIs, authentication, business logic and application services.",
      technologies: [
        {
          name: "Node.js",
          short: "Node",
          desc: "Server-side JavaScript",
        },
        {
          name: "Express.js",
          short: "EX",
          desc: "REST API development",
        },
        {
          name: "REST APIs",
          short: "API",
          desc: "Application communication",
        },
        {
          name: "GraphQL",
          short: "GQL",
          desc: "Flexible API architecture",
        },
        {
          name: "JWT",
          short: "JWT",
          desc: "Token-based authentication",
        },
        {
          name: "WebSockets",
          short: "WS",
          desc: "Real-time communication",
        },
      ],
    },

    {
      name: "Database",
      icon: Database,
      description:
        "Database technologies selected around application structure, relationships and project requirements.",
      technologies: [
        {
          name: "MongoDB",
          short: "MDB",
          desc: "Document-oriented database",
        },
        {
          name: "PostgreSQL",
          short: "PG",
          desc: "Relational databases",
        },
        {
          name: "MySQL",
          short: "SQL",
          desc: "Relational data solutions",
        },
        {
          name: "Mongoose",
          short: "MG",
          desc: "MongoDB modelling",
        },
        {
          name: "Redis",
          short: "RDS",
          desc: "Caching and data workflows",
        },
        {
          name: "Database Design",
          short: "DB",
          desc: "Schemas and data modelling",
        },
      ],
    },

    {
      name: "Mobile",
      icon: Smartphone,
      description:
        "Technologies for responsive and cross-platform mobile application experiences.",
      technologies: [
        {
          name: "React Native",
          short: "RN",
          desc: "Cross-platform mobile apps",
        },
        {
          name: "Expo",
          short: "EXPO",
          desc: "React Native workflows",
        },
        {
          name: "Mobile APIs",
          short: "API",
          desc: "Backend services for apps",
        },
        {
          name: "Push Notifications",
          short: "PN",
          desc: "Notification workflows",
        },
        {
          name: "Responsive UI",
          short: "UI",
          desc: "Mobile-focused interfaces",
        },
        {
          name: "App Integration",
          short: "INT",
          desc: "External service integration",
        },
      ],
    },

    {
      name: "UI/UX",
      icon: Palette,
      description:
        "Design tools and interface practices for usable, consistent and responsive digital products.",
      technologies: [
        {
          name: "Figma",
          short: "FIG",
          desc: "Interface design",
        },
        {
          name: "Wireframing",
          short: "WF",
          desc: "Page structure planning",
        },
        {
          name: "Prototyping",
          short: "PRO",
          desc: "Interactive concepts",
        },
        {
          name: "Design Systems",
          short: "DS",
          desc: "Reusable UI components",
        },
        {
          name: "Responsive Design",
          short: "RWD",
          desc: "Multi-device layouts",
        },
        {
          name: "Accessibility",
          short: "A11Y",
          desc: "Accessible interfaces",
        },
      ],
    },

    {
      name: "Cloud & Deploy",
      icon: Cloud,
      description:
        "Hosting and deployment technologies selected according to production requirements.",
      technologies: [
        {
          name: "Vercel",
          short: "VER",
          desc: "Frontend & serverless deployment",
        },
        {
          name: "Render",
          short: "RND",
          desc: "Application hosting",
        },
        {
          name: "Railway",
          short: "RW",
          desc: "Deployment workflows",
        },
        {
          name: "Firebase",
          short: "FB",
          desc: "Application services",
        },
        {
          name: "AWS",
          short: "AWS",
          desc: "Cloud infrastructure",
        },
        {
          name: "Cloudflare",
          short: "CF",
          desc: "DNS & web infrastructure",
        },
      ],
    },

    {
      name: "Tools",
      icon: GitBranch,
      description:
        "Development tools supporting source control, collaboration, testing and production workflows.",
      technologies: [
        {
          name: "Git",
          short: "GIT",
          desc: "Version control",
        },
        {
          name: "GitHub",
          short: "GH",
          desc: "Repository collaboration",
        },
        {
          name: "GitHub Actions",
          short: "CI",
          desc: "Automated workflows",
        },
        {
          name: "Postman",
          short: "POST",
          desc: "API testing",
        },
        {
          name: "VS Code",
          short: "VS",
          desc: "Development environment",
        },
        {
          name: "npm",
          short: "NPM",
          desc: "Package management",
        },
      ],
    },
  ];

  // ======================================================
  // DEVELOPMENT APPROACH
  // ======================================================

  const approach = [
    {
      icon: Layers,
      title: "Project-Based Stack",
      text: "Selected for project requirements",
    },
    {
      icon: Braces,
      title: "Maintainable Code",
      text: "Reusable & organised structure",
    },
    {
      icon: ShieldCheck,
      title: "Security-Conscious",
      text: "Secure development practices",
    },
    {
      icon: MonitorSmartphone,
      title: "Responsive Products",
      text: "Desktop & mobile experiences",
    },
  ];

  const currentCategory =
    categories.find((item) => item.name === activeCategory) ||
    categories[0];

  const CurrentIcon = currentCategory.icon;

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
        d ? "bg-[#050505]" : "bg-slate-50"
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
              Technology Stack
            </div>

            <h2
              id="tech-stack-heading"
              className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3 ${
                d ? "text-white" : "text-slate-950"
              }`}
            >
              Technologies Behind{" "}
              <span className="text-purple-600">
                Modern Digital Products
              </span>
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              We work across frontend, backend, databases, mobile,
              design and cloud technologies, selecting the stack according
              to each project's requirements.
            </p>
          </div>

          <Link
            to="/mern-stack-development"
            onClick={scrollTop}
            className={`hidden lg:inline-flex items-center gap-2 text-xs font-bold transition-colors ${
              d
                ? "text-purple-400 hover:text-purple-300"
                : "text-purple-600 hover:text-purple-700"
            }`}
          >
            MERN Development
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* ==================================================
            APPROACH
        ================================================== */}

        <div
          className={`grid grid-cols-2 lg:grid-cols-4 rounded-xl border overflow-hidden mb-5 ${
            d
              ? "bg-white/[0.02] border-white/[0.07]"
              : "bg-white border-slate-200"
          }`}
        >
          {approach.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-2.5 px-3 sm:px-4 py-3 ${
                  index !== approach.length - 1
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

                <div className="min-w-0">
                  <p
                    className={`text-[10px] sm:text-[11px] font-bold ${
                      d ? "text-gray-200" : "text-slate-800"
                    }`}
                  >
                    {item.title}
                  </p>

                  <p
                    className={`hidden sm:block text-[9px] mt-0.5 ${
                      d ? "text-gray-600" : "text-slate-400"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================================================
            CATEGORY TABS
        ================================================== */}

        <div
          className="flex gap-2 overflow-x-auto pb-1 mb-4 scrollbar-hide"
          role="tablist"
          aria-label="Technology categories"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const selected = activeCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveCategory(category.name)}
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border text-[10px] sm:text-[11px] font-bold transition-all duration-200 ${
                  selected
                    ? "bg-purple-600 border-purple-600 text-white shadow-[0_0_14px_rgba(124,58,237,0.18)]"
                    : d
                    ? "bg-white/[0.025] border-white/[0.07] text-gray-400 hover:text-white hover:bg-white/[0.05]"
                    : "bg-white border-slate-200 text-slate-500 hover:text-slate-900"
                }`}
              >
                <Icon size={13} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* ==================================================
            ACTIVE TECHNOLOGY CATEGORY
        ================================================== */}

        <div
          role="tabpanel"
          className={`relative overflow-hidden rounded-xl border mb-4 ${
            d
              ? "bg-white/[0.02] border-white/[0.07]"
              : "bg-white border-slate-200"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute -top-28 right-0 w-72 h-72 bg-purple-600/[0.05] blur-[90px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 grid lg:grid-cols-[0.34fr_0.66fr]">

            {/* CATEGORY INFO */}

            <div
              className={`p-4 sm:p-5 ${
                d
                  ? "lg:border-r border-white/[0.07]"
                  : "lg:border-r border-slate-200"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  d
                    ? "bg-purple-500/10 text-purple-400"
                    : "bg-purple-50 text-purple-600"
                }`}
              >
                <CurrentIcon size={18} />
              </div>

              <span
                className={`text-[9px] font-black uppercase tracking-[0.18em] ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                {currentCategory.name}
              </span>

              <h3
                className={`text-base sm:text-lg font-black mt-1 mb-2 ${
                  d ? "text-white" : "text-slate-900"
                }`}
              >
                {currentCategory.name} Technologies
              </h3>

              <p
                className={`text-[10px] sm:text-[11px] leading-relaxed ${
                  d ? "text-gray-500" : "text-slate-500"
                }`}
              >
                {currentCategory.description}
              </p>
            </div>

            {/* TECHNOLOGIES */}

            <div className="p-4 sm:p-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {currentCategory.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className={`group flex items-center gap-2.5 p-2.5 sm:p-3 rounded-lg border transition-all duration-200 ${
                      d
                        ? "bg-white/[0.025] border-white/[0.055] hover:bg-white/[0.05] hover:border-purple-500/20"
                        : "bg-slate-50 border-slate-100 hover:bg-white hover:border-purple-200"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[8px] sm:text-[9px] font-black ${
                        d
                          ? "bg-purple-500/10 text-purple-400"
                          : "bg-purple-50 text-purple-600"
                      }`}
                    >
                      {tech.short}
                    </div>

                    <div className="min-w-0">
                      <h4
                        className={`text-[10px] sm:text-[11px] font-bold truncate ${
                          d ? "text-gray-200" : "text-slate-800"
                        }`}
                      >
                        {tech.name}
                      </h4>

                      <p
                        className={`hidden sm:block text-[8px] sm:text-[9px] leading-relaxed mt-0.5 ${
                          d ? "text-gray-600" : "text-slate-400"
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
        </div>

        {/* ==================================================
            MERN FEATURE
        ================================================== */}

        <div
          className={`grid lg:grid-cols-[1fr_auto] lg:items-center gap-4 px-4 sm:px-5 py-4 rounded-xl border mb-4 ${
            d
              ? "bg-white/[0.02] border-white/[0.06]"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                d
                  ? "bg-green-500/10 text-green-400"
                  : "bg-green-50 text-green-600"
              }`}
            >
              <Workflow size={16} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3
                  className={`text-[12px] sm:text-[13px] font-bold ${
                    d ? "text-white" : "text-slate-900"
                  }`}
                >
                  MERN Stack Development
                </h3>

                <span
                  className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    d
                      ? "bg-green-500/10 text-green-400"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  Full Stack
                </span>
              </div>

              <p
                className={`text-[9px] sm:text-[10px] leading-relaxed ${
                  d ? "text-gray-500" : "text-slate-500"
                }`}
              >
                MongoDB + Express.js + React + Node.js for full-stack
                applications where MERN fits the project architecture.
              </p>
            </div>
          </div>

          {/* MERN STACK */}

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { letter: "M", name: "MongoDB" },
              { letter: "E", name: "Express" },
              { letter: "R", name: "React" },
              { letter: "N", name: "Node.js" },
            ].map((tech) => (
              <div
                key={tech.name}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border ${
                  d
                    ? "bg-white/[0.03] border-white/[0.07]"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-purple-600 text-white flex items-center justify-center text-[8px] font-black">
                  {tech.letter}
                </span>

                <span
                  className={`text-[9px] font-bold ${
                    d ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  {tech.name}
                </span>
              </div>
            ))}

            <Link
              to="/mern-stack-development"
              onClick={scrollTop}
              aria-label="Explore MERN Stack Development"
              className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                d
                  ? "border-purple-500/20 text-purple-400 hover:bg-purple-500/10"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50"
              }`}
            >
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* ==================================================
            TECHNOLOGY NOTE
        ================================================== */}

        <div
          className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 rounded-xl border ${
            d
              ? "bg-purple-500/[0.035] border-purple-500/10"
              : "bg-purple-50/60 border-purple-100"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <CheckCircle2
              size={13}
              className="text-purple-500 shrink-0 mt-0.5"
            />

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
                Technology follows the project.
              </strong>{" "}
              We select technologies according to product requirements,
              integrations, infrastructure and maintainability.
            </p>
          </div>

          <Link
            to="/contact"
            onClick={scrollTop}
            className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold shrink-0 ${
              d
                ? "text-purple-400 hover:text-purple-300"
                : "text-purple-600 hover:text-purple-700"
            }`}
          >
            Discuss Your Stack
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechStack;