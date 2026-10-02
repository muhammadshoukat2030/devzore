import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  ShieldCheck,
  Utensils,
  Plane,
  ExternalLink,
} from "lucide-react";

const Testimonials = ({ isDark = true }) => {
  const d = isDark;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  // ======================================================
  // PROJECT EXPERIENCE
  // ======================================================

  const experiences = [
    {
      title: "Business Management Systems",
      category: "Business Software",
      location: "Pakistan",
      icon: Layers3,
      text:
        "Our business software work includes inventory tracking, sales workflows, user access, reporting and operational management features designed around day-to-day business requirements.",
      project: "Weldon Paints",
      tags: ["Inventory", "Business Systems", "MERN Stack"],
    },

    {
      title: "Food Ordering Platforms",
      category: "Food & E-Commerce",
      location: "Pakistan",
      icon: Utensils,
      text:
        "We have worked on responsive food ordering experiences that combine menu discovery, product browsing, cart functionality and customer-facing ordering workflows.",
      project: "Sarab Express",
      tags: ["React", "Node.js", "Ordering"],
    },

    {
      title: "Healthcare Websites",
      category: "Healthcare",
      location: "Pakistan",
      icon: ShieldCheck,
      text:
        "Our healthcare website work focuses on clear service presentation, responsive interfaces and accessible ways for visitors to explore treatments and appointment options.",
      project: "Prime Dental Care",
      tags: ["Healthcare", "Responsive UI", "Web Development"],
    },

    {
      title: "Tourism Experiences",
      category: "Travel & Tourism",
      location: "UAE",
      icon: Plane,
      text:
        "Tourism projects are designed around destination discovery, tour packages and customer inquiries, with responsive layouts for visitors using mobile and desktop devices.",
      project: "Gulf Dunes Tourism",
      tags: ["Tourism", "React", "UI/UX"],
    },

    {
      title: "Food Delivery Interfaces",
      category: "Food Technology",
      location: "Pakistan",
      icon: Code2,
      text:
        "We build mobile-friendly food delivery interfaces focused on straightforward product discovery, menu browsing, search and ordering experiences.",
      project: "QuickBite",
      tags: ["Food Tech", "Responsive", "MERN Stack"],
    },

    {
      title: "Tour & Safari Websites",
      category: "Travel & Tourism",
      location: "Qatar",
      icon: Globe2,
      text:
        "Our travel-focused website work includes safari and tour discovery, package presentation and booking inquiry experiences supported by search-friendly website structure.",
      project: "Best Desert Safari Qatar",
      tags: ["Travel", "SEO Structure", "Web Development"],
    },
  ];

  // ======================================================
  // HIGHLIGHTS
  // ======================================================

  const highlights = [
    {
      icon: Code2,
      title: "Web Applications",
      text: "Custom business workflows",
    },
    {
      icon: Layers3,
      title: "Business Systems",
      text: "Operational software",
    },
    {
      icon: CheckCircle2,
      title: "Responsive Design",
      text: "Desktop & mobile",
    },
    {
      icon: Globe2,
      title: "Remote Projects",
      text: "Online collaboration",
    },
  ];

  // ======================================================
  // AUTO SLIDER
  // ======================================================

  useEffect(() => {
    if (!paused) {
      timer.current = setInterval(() => {
        setActive((prev) => (prev + 1) % experiences.length);
      }, 5500);
    }

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [paused, experiences.length]);

  const previousExperience = () => {
    setActive(
      (current) =>
        (current - 1 + experiences.length) % experiences.length
    );
    setPaused(true);
  };

  const nextExperience = () => {
    setActive((current) => (current + 1) % experiences.length);
    setPaused(true);
  };

  const selectExperience = (index) => {
    setActive(index);
    setPaused(true);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const current = experiences[active];
  const CurrentIcon = current.icon;

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section
      id="project-experience"
      aria-labelledby="project-experience-heading"
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
              Project Experience
            </div>

            <h2
              id="project-experience-heading"
              className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3 ${
                d ? "text-white" : "text-slate-950"
              }`}
            >
              Experience Across{" "}
              <span className="text-purple-600">
                Different Business Projects
              </span>
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              From management systems and ordering applications to healthcare
              and tourism websites, our project experience covers different
              digital business requirements.
            </p>
          </div>

          <Link
            to="/projects"
            onClick={scrollTop}
            className={`hidden lg:inline-flex items-center gap-2 text-xs font-bold transition-colors ${
              d
                ? "text-purple-400 hover:text-purple-300"
                : "text-purple-600 hover:text-purple-700"
            }`}
          >
            View Projects
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* ==================================================
            COMPACT HIGHLIGHTS
        ================================================== */}

        <div
          className={`grid grid-cols-2 lg:grid-cols-4 rounded-xl border overflow-hidden mb-5 ${
            d
              ? "bg-white/[0.02] border-white/[0.07]"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-2.5 px-3 sm:px-4 py-3 ${
                  index !== highlights.length - 1
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
            PROJECT SELECTOR
        ================================================== */}

        <div
          className="flex gap-2 overflow-x-auto pb-1 mb-4 scrollbar-hide"
          role="tablist"
          aria-label="Project experience"
        >
          {experiences.map((item, index) => {
            const selected = active === index;
            const Icon = item.icon;

            return (
              <button
                key={item.project}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => selectExperience(index)}
                className={`shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 ${
                  selected
                    ? "bg-purple-600 border-purple-600 text-white shadow-[0_0_14px_rgba(124,58,237,0.18)]"
                    : d
                    ? "bg-white/[0.025] border-white/[0.07] text-gray-400 hover:text-white hover:bg-white/[0.05]"
                    : "bg-white border-slate-200 text-slate-500 hover:text-slate-900"
                }`}
              >
                <Icon size={12} />

                <span className="text-[10px] sm:text-[11px] font-bold">
                  {item.project}
                </span>
              </button>
            );
          })}
        </div>

        {/* ==================================================
            FEATURED EXPERIENCE
        ================================================== */}

        <div
          role="tabpanel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={`relative overflow-hidden rounded-xl border mb-4 ${
            d
              ? "bg-white/[0.02] border-white/[0.07]"
              : "bg-white border-slate-200"
          }`}
        >
          {/* BACKGROUND GLOW */}

          <div
            aria-hidden="true"
            className="absolute -top-28 right-0 w-72 h-72 bg-purple-600/[0.06] blur-[90px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 grid lg:grid-cols-[0.36fr_0.64fr]">

            {/* LEFT */}

            <div
              className={`p-4 sm:p-5 lg:p-6 ${
                d
                  ? "lg:border-r border-white/[0.07]"
                  : "lg:border-r border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    d
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/15"
                      : "bg-purple-50 text-purple-600 border border-purple-100"
                  }`}
                >
                  <CurrentIcon size={17} />
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[9px] font-semibold ${
                    d
                      ? "bg-white/[0.03] border-white/[0.07] text-gray-500"
                      : "bg-slate-50 border-slate-200 text-slate-500"
                  }`}
                >
                  <Globe2 size={9} />
                  {current.location}
                </span>
              </div>

              <span
                className={`text-[9px] font-black uppercase tracking-[0.18em] ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                {current.category}
              </span>

              <h3
                className={`text-lg sm:text-xl font-black mt-1.5 mb-2 ${
                  d ? "text-white" : "text-slate-900"
                }`}
              >
                {current.title}
              </h3>

              <p
                className={`text-[10px] sm:text-[11px] ${
                  d ? "text-gray-500" : "text-slate-500"
                }`}
              >
                Related project:{" "}
                <strong
                  className={
                    d ? "text-gray-300" : "text-slate-700"
                  }
                >
                  {current.project}
                </strong>
              </p>
            </div>

            {/* RIGHT */}

            <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between">
              <div>
                <p
                  className={`text-[12px] sm:text-[13px] leading-relaxed mb-4 ${
                    d ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  {current.text}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {current.tags.map((tag) => (
                    <span
                      key={`${current.project}-${tag}`}
                      className={`inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold px-2 py-1 rounded-md border ${
                        d
                          ? "bg-white/[0.03] border-white/[0.07] text-gray-500"
                          : "bg-slate-50 border-slate-200 text-slate-500"
                      }`}
                    >
                      <CheckCircle2
                        size={8}
                        className="text-purple-500"
                      />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CONTROLS */}

              <div
                className={`flex items-center justify-between gap-4 mt-5 pt-4 border-t ${
                  d
                    ? "border-white/[0.06]"
                    : "border-slate-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previousExperience}
                    aria-label="Previous project experience"
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                      d
                        ? "border-white/[0.08] text-gray-500 hover:text-white hover:bg-white/[0.06]"
                        : "border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <ArrowLeft size={13} />
                  </button>

                  <button
                    type="button"
                    onClick={nextExperience}
                    aria-label="Next project experience"
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                      d
                        ? "border-white/[0.08] text-gray-500 hover:text-white hover:bg-white/[0.06]"
                        : "border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <ArrowRight size={13} />
                  </button>
                </div>

                {/* DOTS */}

                <div className="hidden sm:flex items-center gap-1.5">
                  {experiences.map((item, index) => (
                    <button
                      key={item.project}
                      type="button"
                      onClick={() => selectExperience(index)}
                      aria-label={`Show ${item.project}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        active === index
                          ? "w-5 bg-purple-600"
                          : d
                          ? "w-1.5 bg-white/[0.15] hover:bg-white/[0.25]"
                          : "w-1.5 bg-slate-200 hover:bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                <span
                  className={`text-[9px] font-bold ${
                    d ? "text-gray-600" : "text-slate-400"
                  }`}
                >
                  {String(active + 1).padStart(2, "0")}
                  <span className="mx-1">/</span>
                  {String(experiences.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            BOTTOM BAR
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
                Different industries, project-specific solutions.
              </strong>{" "}
              Features and technology are selected according to the actual
              requirements of each project.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/projects"
              onClick={scrollTop}
              className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold ${
                d
                  ? "text-gray-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              View Projects
              <ExternalLink size={10} />
            </Link>

            <Link
              to="/contact"
              onClick={scrollTop}
              className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold ${
                d
                  ? "text-purple-400 hover:text-purple-300"
                  : "text-purple-600 hover:text-purple-700"
              }`}
            >
              Discuss a Project
              <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;