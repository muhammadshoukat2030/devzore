import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Code2,
  Globe,
  Layers,
  Quote,
  ShieldCheck,
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
      icon: <Layers size={20} />,
      text:
        "Our business software work includes inventory tracking, sales workflows, user access, reporting and operational management features designed around day-to-day business requirements.",
      project: "Weldon Paints",
      tags: ["Inventory", "Business Systems", "MERN Stack"],
    },
    {
      title: "Food Ordering Platforms",
      category: "Food & E-Commerce",
      location: "Pakistan",
      icon: <Code2 size={20} />,
      text:
        "We have worked on responsive food ordering experiences that combine menu discovery, product browsing, cart functionality and customer-facing ordering workflows.",
      project: "Sarab Express",
      tags: ["React", "Node.js", "Ordering"],
    },
    {
      title: "Healthcare Websites",
      category: "Healthcare",
      location: "Pakistan",
      icon: <ShieldCheck size={20} />,
      text:
        "Our healthcare website work focuses on clear service presentation, responsive interfaces and accessible ways for visitors to explore treatments and appointment options.",
      project: "Prime Dental Care",
      tags: ["Healthcare", "Responsive UI", "Web Development"],
    },
    {
      title: "Tourism Experiences",
      category: "Travel & Tourism",
      location: "UAE",
      icon: <Globe size={20} />,
      text:
        "Tourism projects are designed around destination discovery, tour packages and customer inquiries, with responsive layouts for visitors using mobile and desktop devices.",
      project: "Gulf Dunes Tourism",
      tags: ["Tourism", "React", "UI/UX"],
    },
    {
      title: "Food Delivery Interfaces",
      category: "Food Technology",
      location: "Pakistan",
      icon: <Code2 size={20} />,
      text:
        "We build mobile-friendly food delivery interfaces focused on straightforward product discovery, menu browsing, search and ordering experiences.",
      project: "QuickBite",
      tags: ["Food Tech", "Responsive", "MERN Stack"],
    },
    {
      title: "Tour & Safari Websites",
      category: "Travel & Tourism",
      location: "Qatar",
      icon: <Globe size={20} />,
      text:
        "Our travel-focused website work includes safari and tour discovery, package presentation and booking inquiry experiences supported by search-friendly website structure.",
      project: "Best Desert Safari Qatar",
      tags: ["Travel", "SEO Structure", "Web Development"],
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

  const prev = () => {
    setActive(
      (current) =>
        (current - 1 + experiences.length) % experiences.length
    );
    setPaused(true);
  };

  const next = () => {
    setActive(
      (current) =>
        (current + 1) % experiences.length
    );
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

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
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
            Project Experience
          </div>

          <h2
            id="testimonials-heading"
            className={`text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight mb-3 ${
              d ? "text-white" : "text-slate-950"
            }`}
          >
            Experience Across{" "}
            <span className="text-purple-600">
              Different Business Projects
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              d ? "text-gray-400" : "text-slate-600"
            }`}
          >
            From business management systems and food ordering applications
            to healthcare and tourism websites, DevZore works on digital
            products designed around practical business requirements.
          </p>
        </div>

        {/* ==================================================
            TOP HIGHLIGHTS
        ================================================== */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-7">
          {[
            {
              title: "Web Applications",
              text: "Custom business workflows",
              icon: <Code2 size={15} />,
            },
            {
              title: "Business Systems",
              text: "Operational software",
              icon: <Layers size={15} />,
            },
            {
              title: "Responsive Design",
              text: "Desktop and mobile",
              icon: <CheckCircle size={15} />,
            },
            {
              title: "Remote Collaboration",
              text: "Project communication online",
              icon: <Globe size={15} />,
            },
          ].map((item) => (
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

              <div>
                <p
                  className={`text-[11px] sm:text-xs font-bold ${
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
            FEATURED EXPERIENCE
        ================================================== */}

        <div
          className={`relative p-5 sm:p-6 lg:p-8 rounded-2xl border mb-4 transition-all duration-500 ${
            d
              ? "bg-white/[0.02] border-white/[0.08]"
              : "bg-white border-slate-200 shadow-sm"
          }`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Decorative Quote */}

          <div
            aria-hidden="true"
            className={`absolute top-5 right-5 sm:top-6 sm:right-6 ${
              d ? "text-purple-500/10" : "text-purple-100"
            }`}
          >
            <Quote size={42} />
          </div>

          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-6 lg:gap-10">

            {/* LEFT */}

            <div>
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                  d
                    ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    : "bg-purple-50 text-purple-600 border border-purple-100"
                }`}
              >
                {current.icon}
              </div>

              <p
                className={`text-[10px] uppercase tracking-[0.18em] font-black mb-1.5 ${
                  d ? "text-gray-500" : "text-slate-400"
                }`}
              >
                Selected Project Experience
              </p>

              <h3
                className={`text-xl sm:text-2xl font-black mb-2 ${
                  d ? "text-white" : "text-slate-900"
                }`}
              >
                {current.title}
              </h3>

              <p className="text-purple-500 text-xs font-semibold mb-4">
                {current.category}
              </p>

              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[11px] ${
                  d
                    ? "bg-white/[0.03] border-white/[0.07] text-gray-400"
                    : "bg-slate-50 border-slate-200 text-slate-600"
                }`}
              >
                <Globe size={11} className="text-purple-500" />
                {current.location}
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-between">
              <div>
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-5 ${
                    d ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  {current.text}
                </p>

                <div
                  className={`flex items-start gap-2.5 p-3 rounded-xl border mb-4 ${
                    d
                      ? "bg-purple-500/[0.05] border-purple-500/15"
                      : "bg-purple-50 border-purple-100"
                  }`}
                >
                  <CheckCircle
                    size={14}
                    className="text-purple-500 shrink-0 mt-0.5"
                  />

                  <div>
                    <p
                      className={`text-[10px] uppercase tracking-wider font-bold mb-0.5 ${
                        d ? "text-gray-500" : "text-slate-400"
                      }`}
                    >
                      Related Project
                    </p>

                    <p
                      className={`text-[12px] font-bold ${
                        d ? "text-gray-200" : "text-slate-800"
                      }`}
                    >
                      {current.project}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {current.tags.map((tag) => (
                  <span
                    key={`${current.project}-${tag}`}
                    className={`text-[10px] font-semibold px-2 py-1 rounded-md border ${
                      d
                        ? "bg-white/[0.04] border-white/[0.08] text-gray-400"
                        : "bg-slate-50 border-slate-200 text-slate-500"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================
              CONTROLS
          ================================================== */}

          <div
            className={`flex items-center justify-between gap-4 mt-6 pt-4 border-t ${
              d
                ? "border-white/[0.06]"
                : "border-slate-100"
            }`}
          >
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous project experience"
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                  d
                    ? "border-white/[0.08] text-gray-500 hover:text-white hover:bg-white/[0.06]"
                    : "border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                <ArrowLeft size={14} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next project experience"
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                  d
                    ? "border-white/[0.08] text-gray-500 hover:text-white hover:bg-white/[0.06]"
                    : "border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                <ArrowRight size={14} />
              </button>
            </div>

            {/* DOTS */}

            <div className="flex items-center gap-1.5">
              {experiences.map((item, index) => (
                <button
                  key={item.project}
                  type="button"
                  onClick={() => selectExperience(index)}
                  aria-label={`Show ${item.project}`}
                  aria-current={active === index ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-6 bg-purple-600"
                      : d
                      ? "w-1.5 bg-white/[0.15] hover:bg-white/[0.25]"
                      : "w-1.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <span
              className={`text-[10px] ${
                d ? "text-gray-600" : "text-slate-400"
              }`}
            >
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(experiences.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ==================================================
            PROJECT CARDS
        ================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          {experiences.map((item, index) => (
            <button
              key={item.project}
              type="button"
              onClick={() => selectExperience(index)}
              className={`group text-left p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                active === index
                  ? d
                    ? "border-purple-500/35 bg-purple-600/[0.05]"
                    : "border-purple-200 bg-purple-50"
                  : d
                  ? "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.10]"
                  : "bg-white border-slate-200 hover:border-purple-200 hover:shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    active === index
                      ? "bg-purple-600 text-white"
                      : d
                      ? "bg-white/[0.05] text-purple-400"
                      : "bg-purple-50 text-purple-600"
                  }`}
                >
                  {React.cloneElement(item.icon, {
                    size: 14,
                  })}
                </div>

                <ArrowRight
                  size={13}
                  className={`transition-transform group-hover:translate-x-0.5 ${
                    active === index
                      ? "text-purple-500"
                      : d
                      ? "text-gray-700"
                      : "text-slate-300"
                  }`}
                />
              </div>

              <h3
                className={`text-[12px] sm:text-[13px] font-bold mb-1 ${
                  active === index
                    ? "text-purple-500"
                    : d
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`text-[10px] mb-2 ${
                  d ? "text-gray-500" : "text-slate-500"
                }`}
              >
                {item.project}
              </p>

              <div className="flex items-center gap-1">
                <Globe
                  size={9}
                  className={
                    d ? "text-gray-600" : "text-slate-400"
                  }
                />

                <span
                  className={`text-[9px] ${
                    d ? "text-gray-600" : "text-slate-400"
                  }`}
                >
                  {item.location}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* ==================================================
            CTA
        ================================================== */}

        <div
          className={`relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-5 p-5 sm:p-6 rounded-2xl border ${
            d
              ? "bg-purple-600/[0.05] border-purple-500/15"
              : "bg-purple-50 border-purple-100"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute -left-24 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 blur-[90px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 text-center lg:text-left">
            <h3
              className={`text-lg sm:text-xl font-black mb-1 ${
                d ? "text-white" : "text-slate-900"
              }`}
            >
              Have a Project With Similar Requirements?
            </h3>

            <p
              className={`text-xs sm:text-[13px] leading-relaxed max-w-2xl ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Tell DevZore what you want to build and discuss the technology,
              features and development approach that fit your project.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-2.5 shrink-0">
            <Link
              to="/contact"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
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
    </section>
  );
};

export default Testimonials;