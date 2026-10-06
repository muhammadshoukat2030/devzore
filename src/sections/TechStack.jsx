import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Server,
  Database,
  Smartphone,
  Cloud,
  Palette,
  CheckCircle2,
} from "lucide-react";

const TechStack = ({ isDark = false }) => {
  const d = isDark;

  // ======================================================
  // TECHNOLOGY GROUPS
  // Homepage preview only.
  // Full technology details remain on /technologies
  // ======================================================

  const technologyGroups = [
    {
      icon: Code2,
      label: "Frontend",
      technologies: ["React", "Next.js", "TypeScript"],
    },
    {
      icon: Server,
      label: "Backend",
      technologies: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      icon: Database,
      label: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      icon: Smartphone,
      label: "Mobile",
      technologies: ["React Native", "Expo", "Mobile APIs"],
    },
    {
      icon: Cloud,
      label: "Cloud & Deploy",
      technologies: ["Vercel", "AWS", "Cloudflare"],
    },
    {
      icon: Palette,
      label: "UI / UX",
      technologies: ["Figma", "Prototyping", "Design Systems"],
    },
  ];

  // ======================================================
  // FEATURED TECHNOLOGIES
  // ======================================================

  const featuredTechnologies = [
    { short: "Re", name: "React" },
    { short: "N", name: "Next.js" },
    { short: "JS", name: "JavaScript" },
    { short: "TS", name: "TypeScript" },
    { short: "No", name: "Node.js" },
    { short: "Ex", name: "Express.js" },
    { short: "M", name: "MongoDB" },
    { short: "PG", name: "PostgreSQL" },
    { short: "RN", name: "React Native" },
    { short: "TW", name: "Tailwind CSS" },
    { short: "AWS", name: "AWS" },
    { short: "V", name: "Vercel" },
  ];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className={`relative overflow-hidden py-12 sm:py-14 lg:py-16 transition-colors duration-300 ${
        d ? "bg-[#061923]" : "bg-[#f7f8f8]"
      }`}
    >
      {/* ==================================================
          SUBTLE BACKGROUND
      ================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className={`absolute
            top-[-180px]
            right-[-100px]
            w-[450px]
            h-[450px]
            rounded-full
            blur-[150px]
            ${
              d
                ? "bg-cyan-400/[0.035]"
                : "bg-cyan-100/40"
            }
          `}
        />

        <div
          className={`absolute
            bottom-[-200px]
            left-[-150px]
            w-[450px]
            h-[450px]
            rounded-full
            blur-[160px]
            ${
              d
                ? "bg-cyan-400/[0.02]"
                : "bg-slate-200/50"
            }
          `}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            grid
            lg:grid-cols-[1fr_auto]
            lg:items-end
            gap-6 lg:gap-10
            mb-8 sm:mb-10
          "
        >
          <div className="max-w-3xl">

            {/* LABEL */}

            <div
              className={`inline-flex items-center gap-2
                text-[9px] sm:text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                mb-3
                ${
                  d
                    ? "text-cyan-400"
                    : "text-[#08788c]"
                }
              `}
            >
              <span
                className={`w-6 h-[2px] ${
                  d ? "bg-cyan-400" : "bg-[#08788c]"
                }`}
              />

              Technology Stack
            </div>

            {/* TITLE */}

            <h2
              id="tech-stack-heading"
              className={`text-[28px]
                sm:text-[36px]
                lg:text-[42px]
                leading-[1.08]
                tracking-[-0.035em]
                font-black
                ${
                  d ? "text-white" : "text-[#061923]"
                }
              `}
            >
              The technologies behind
              <span
                className={
                  d
                    ? "text-cyan-400"
                    : "text-[#08788c]"
                }
              >
                {" "}
                what we build.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className={`mt-4
                max-w-2xl
                text-[12px]
                sm:text-[14px]
                lg:text-[15px]
                leading-6 sm:leading-7
                ${
                  d
                    ? "text-slate-400"
                    : "text-slate-600"
                }
              `}
            >
              We select technologies around the product — balancing
              performance, scalability, maintainability and the actual
              requirements of each project.
            </p>
          </div>

          {/* DESKTOP LINK */}

          <Link
            to="/technologies"
            onClick={scrollTop}
            className={`hidden lg:inline-flex
              items-center
              gap-2
              text-[11px]
              font-bold
              transition-colors
              ${
                d
                  ? "text-cyan-400 hover:text-cyan-300"
                  : "text-[#08788c] hover:text-[#061923]"
              }
            `}
          >
            Explore All Technologies
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* ==================================================
            MAIN TECHNOLOGY PREVIEW
        ================================================== */}

        <div
          className={`overflow-hidden rounded-2xl border ${
            d
              ? "bg-white/[0.025] border-white/[0.08]"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="grid lg:grid-cols-[0.34fr_0.66fr]">

            {/* ==============================================
                LEFT SIDE
            ============================================== */}

            <div
              className={`p-5 sm:p-7 lg:p-8 ${
                d
                  ? "lg:border-r border-white/[0.08]"
                  : "lg:border-r border-slate-200"
              }`}
            >
              <div
                className={`w-11 h-11
                  rounded-xl
                  flex items-center
                  justify-center
                  mb-5
                  ${
                    d
                      ? "bg-cyan-400/[0.08] text-cyan-400"
                      : "bg-[#08788c]/[0.07] text-[#08788c]"
                  }
                `}
              >
                <Code2 size={20} />
              </div>

              <span
                className={`text-[9px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  ${
                    d
                      ? "text-cyan-400"
                      : "text-[#08788c]"
                  }
                `}
              >
                Our Development Stack
              </span>

              <h3
                className={`mt-2
                  text-xl
                  sm:text-2xl
                  font-black
                  tracking-tight
                  ${
                    d
                      ? "text-white"
                      : "text-[#061923]"
                  }
                `}
              >
                Modern tools.
                <br />
                Project-first decisions.
              </h3>

              <p
                className={`mt-3
                  text-[11px]
                  sm:text-[12px]
                  leading-6
                  ${
                    d
                      ? "text-slate-500"
                      : "text-slate-500"
                  }
                `}
              >
                We don't force every project into the same stack.
                Technologies are selected according to the product,
                integrations, infrastructure and long-term requirements.
              </p>

              {/* SMALL POINTS */}

              <div className="mt-6 space-y-2.5">
                {[
                  "Frontend & full-stack development",
                  "APIs, databases & integrations",
                  "Mobile & responsive products",
                  "Cloud deployment & infrastructure",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2
                      size={13}
                      className={
                        d
                          ? "text-cyan-400 shrink-0"
                          : "text-[#08788c] shrink-0"
                      }
                    />

                    <span
                      className={`text-[9px] sm:text-[10px] font-medium ${
                        d
                          ? "text-slate-400"
                          : "text-slate-600"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ==============================================
                RIGHT SIDE
            ============================================== */}

            <div className="p-4 sm:p-6 lg:p-7">

              {/* SECTION LABEL */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  mb-4
                "
              >
                <p
                  className={`text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.18em]
                    font-black
                    ${
                      d
                        ? "text-slate-500"
                        : "text-slate-400"
                    }
                  `}
                >
                  Core Technologies
                </p>

                <span
                  className={`h-px flex-1 ${
                    d
                      ? "bg-white/[0.07]"
                      : "bg-slate-200"
                  }`}
                />
              </div>

              {/* TECHNOLOGY GRID */}

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {featuredTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex
                      items-center
                      gap-2.5
                      min-w-0
                      p-2.5
                      sm:p-3
                      rounded-lg
                      border
                      transition-colors
                      ${
                        d
                          ? "bg-white/[0.025] border-white/[0.065] hover:bg-white/[0.045]"
                          : "bg-[#f8fafb] border-slate-100 hover:bg-white hover:border-slate-300"
                      }
                    `}
                  >
                    <div
                      className={`w-8 h-8
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        shrink-0
                        text-[8px]
                        sm:text-[9px]
                        font-black
                        ${
                          d
                            ? "bg-cyan-400/[0.08] text-cyan-400"
                            : "bg-[#08788c]/[0.07] text-[#08788c]"
                        }
                      `}
                    >
                      {tech.short}
                    </div>

                    <span
                      className={`truncate
                        text-[10px]
                        sm:text-[11px]
                        font-bold
                        ${
                          d
                            ? "text-slate-300"
                            : "text-[#061923]"
                        }
                      `}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* VIEW FULL STACK */}

              <div
                className={`mt-5
                  pt-4
                  border-t
                  flex
                  items-center
                  justify-between
                  gap-4
                  ${
                    d
                      ? "border-white/[0.07]"
                      : "border-slate-100"
                  }
                `}
              >
                <p
                  className={`hidden sm:block
                    text-[9px]
                    sm:text-[10px]
                    ${
                      d
                        ? "text-slate-600"
                        : "text-slate-400"
                    }
                  `}
                >
                  Frontend · Backend · Database · Mobile · Cloud · UI/UX
                </p>

                <Link
                  to="/technologies"
                  onClick={scrollTop}
                  className={`inline-flex
                    items-center
                    gap-2
                    ml-auto
                    text-[10px]
                    sm:text-[11px]
                    font-bold
                    transition-colors
                    ${
                      d
                        ? "text-cyan-400 hover:text-cyan-300"
                        : "text-[#08788c] hover:text-[#061923]"
                    }
                  `}
                >
                  View Full Stack
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            TECHNOLOGY GROUPS
        ================================================== */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-2
            mt-3
          "
        >
          {technologyGroups.map((group) => {
            const Icon = group.icon;

            return (
              <Link
                key={group.label}
                to="/technologies"
                onClick={scrollTop}
                className={`group
                  min-w-0
                  p-3
                  sm:p-4
                  rounded-xl
                  border
                  transition-colors
                  ${
                    d
                      ? "bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.04]"
                      : "bg-white border-slate-200 hover:border-[#08788c]/40"
                  }
                `}
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-2
                    mb-3
                  "
                >
                  <div
                    className={`w-8 h-8
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      ${
                        d
                          ? "bg-white/[0.05] text-cyan-400"
                          : "bg-[#061923]/[0.05] text-[#061923]"
                      }
                    `}
                  >
                    <Icon size={14} />
                  </div>

                  <ArrowRight
                    size={12}
                    className={`transition-transform group-hover:translate-x-0.5 ${
                      d
                        ? "text-slate-600"
                        : "text-slate-300"
                    }`}
                  />
                </div>

                <h3
                  className={`text-[10px]
                    sm:text-[11px]
                    font-black
                    ${
                      d
                        ? "text-white"
                        : "text-[#061923]"
                    }
                  `}
                >
                  {group.label}
                </h3>

                <p
                  className={`mt-1.5
                    text-[8px]
                    sm:text-[9px]
                    leading-[1.6]
                    ${
                      d
                        ? "text-slate-600"
                        : "text-slate-400"
                    }
                  `}
                >
                  {group.technologies.join(" · ")}
                </p>
              </Link>
            );
          })}
        </div>

        {/* ==================================================
            BOTTOM CTA
        ================================================== */}

        <div
          className={`mt-3
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
            px-4 sm:px-5
            py-3.5
            rounded-xl
            border
            ${
              d
                ? "bg-white/[0.02] border-white/[0.07]"
                : "bg-white border-slate-200"
            }
          `}
        >
          <div className="flex items-start gap-2.5">
            <CheckCircle2
              size={14}
              className={
                d
                  ? "text-cyan-400 shrink-0 mt-0.5"
                  : "text-[#08788c] shrink-0 mt-0.5"
              }
            />

            <p
              className={`text-[9px]
                sm:text-[10px]
                leading-relaxed
                ${
                  d
                    ? "text-slate-500"
                    : "text-slate-500"
                }
              `}
            >
              <strong
                className={
                  d
                    ? "text-slate-300"
                    : "text-[#061923]"
                }
              >
                Technology follows the project.
              </strong>{" "}
              Explore our complete development stack, tools and
              capabilities on the technologies page.
            </p>
          </div>

          <Link
            to="/technologies"
            onClick={scrollTop}
            className={`inline-flex
              items-center
              gap-2
              shrink-0
              text-[10px]
              sm:text-[11px]
              font-black
              ${
                d
                  ? "text-cyan-400 hover:text-cyan-300"
                  : "text-[#08788c] hover:text-[#061923]"
              }
            `}
          >
            Explore Technologies
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* ==================================================
            MOBILE MAIN CTA
        ================================================== */}

        <Link
          to="/technologies"
          onClick={scrollTop}
          className={`lg:hidden
            mt-4
            w-full
            inline-flex
            items-center
            justify-center
            gap-2
            py-3
            rounded-lg
            text-[10px]
            font-bold
            border
            transition-colors
            ${
              d
                ? "bg-white/[0.035] border-white/[0.08] text-white"
                : "bg-[#061923] border-[#061923] text-white"
            }
          `}
        >
          View All Technologies
          <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
};

export default TechStack;