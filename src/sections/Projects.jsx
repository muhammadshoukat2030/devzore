import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  ArrowRight,
  Globe,
  CheckCircle,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

// Project images
import weldonPaint from "../assets/weldonpaint.webp";
import sarabFood from "../assets/sarab_website_image.webp";
import dentalWebsite from "../assets/Dental_website.webp";
import gulfDunes from "../assets/gulf-dunes.webp";
import quickBite from "../assets/food.webp";
import qatarTourist from "../assets/qatar_tourist_agency.webp";

const Projects = ({ isDark = true }) => {
  const d = isDark;

  const [activeFilter, setActiveFilter] = useState("All");

  // ======================================================
  // PROJECTS
  // ======================================================

  const projects = [
    {
      title: "Weldon Paints",
      subtitle: "Store & Inventory Management System",
      desc: "A custom inventory and business management application designed to support stock tracking, sales workflows, user access and day-to-day operational management.",
      image: weldonPaint,
      liveUrl: "https://hamzapaints.vercel.app/",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      filter: "Web App",
      category: "Inventory & POS",
      location: "Pakistan",
      highlight: "Custom inventory and business workflow solution",
    },

    {
      title: "Sarab Express",
      subtitle: "Food Ordering & Delivery Platform",
      desc: "A responsive food ordering platform with restaurant listings, interactive menus, cart functionality, ordering workflows and management features.",
      image: sarabFood,
      liveUrl: "https://sarab-food-delivery.vercel.app/",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      filter: "E-Commerce",
      category: "Food Delivery",
      location: "Pakistan",
      highlight: "Responsive ordering experience with management features",
    },

    {
      title: "Prime Dental Care",
      subtitle: "Dental & Healthcare Website",
      desc: "A modern dental website designed to present treatments, clinic information and appointment options through a clean, responsive and trust-focused interface.",
      image: dentalWebsite,
      liveUrl: "https://prime-dental-react.vercel.app/",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      filter: "Healthcare",
      category: "Healthcare",
      location: "Pakistan",
      highlight: "Responsive healthcare experience with appointment features",
    },

    {
      title: "Gulf Dunes Tourism",
      subtitle: "Travel & Tourism Platform",
      desc: "A tourism website created to present desert safari experiences, tour packages and customer inquiry options through a responsive experience for international visitors.",
      image: gulfDunes,
      liveUrl: "https://www.gulfdunestourism.com/",
      tags: ["React", "Node.js", "Express", "MongoDB", "UI/UX"],
      filter: "Travel",
      category: "Travel & Tourism",
      location: "UAE",
      highlight: "Tour package discovery and customer inquiry experience",
    },

    {
      title: "QuickBite",
      subtitle: "Food Delivery Web Application",
      desc: "A mobile-friendly food delivery interface designed around product discovery, menu browsing, search and ordering workflows for restaurants and food businesses.",
      image: quickBite,
      liveUrl: "https://food-nine-ashy.vercel.app/",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      filter: "E-Commerce",
      category: "Food Tech",
      location: "Pakistan",
      highlight: "Mobile-first food ordering interface",
    },

    {
      title: "Best Desert Safari Qatar",
      subtitle: "Tourism & Safari Website",
      desc: "A tourism-focused website for discovering safari experiences, viewing packages and sending booking inquiries, with responsive layouts for desktop and mobile visitors.",
      image: qatarTourist,
      liveUrl: "https://www.bestdesertsafariqatar.com/",
      tags: ["React", "Node.js", "Express", "MongoDB", "SEO"],
      filter: "Travel",
      category: "Travel & Tourism",
      location: "Qatar",
      highlight: "Search-friendly tourism website with booking inquiries",
    },
  ];

  // ======================================================
  // FILTERS
  // ======================================================

  const filters = [
    "All",
    "Web App",
    "E-Commerce",
    "Healthcare",
    "Travel",
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.filter === activeFilter
    );
  }, [activeFilter]);

  // ======================================================
  // SCROLL TOP
  // ======================================================

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={`py-20 sm:py-24 transition-colors duration-300 ${
        d ? "bg-[#050505]" : "bg-[#fafafa]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end mb-12 sm:mb-14">

          <div className="max-w-3xl">

            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${
                d
                  ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                  : "bg-purple-50 border-purple-200 text-purple-700"
              }`}
            >
              <Globe size={12} />
              Selected Work
            </div>

            <h2
              id="projects-heading"
              className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                d ? "text-white" : "text-gray-900"
              }`}
            >
              Software Projects{" "}
              <span className="text-purple-600">
                Built for Real Businesses
              </span>
            </h2>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Explore selected web applications, business systems,
              e-commerce experiences, healthcare websites and tourism
              platforms developed by DevZore.
            </p>

            <p
              className={`text-sm sm:text-base leading-relaxed mt-4 ${
                d ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Each project reflects a different business requirement,
              from inventory management and food ordering to healthcare
              services and travel experiences.
            </p>

          </div>

          {/* PROJECT COUNT */}

          <div
            className={`inline-flex lg:flex-col items-center lg:items-start gap-3 lg:gap-1 px-5 py-4 rounded-2xl border ${
              d
                ? "bg-white/[0.02] border-white/[0.07]"
                : "bg-white border-gray-200"
            }`}
          >
            <span
              className={`text-3xl font-black ${
                d ? "text-white" : "text-gray-900"
              }`}
            >
              {projects.length}
            </span>

            <span
              className={`text-xs font-semibold ${
                d ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Selected projects showcased
            </span>
          </div>

        </div>

        {/* ==================================================
            FILTERS
        ================================================== */}

        <div
          className="flex flex-wrap gap-2 mb-9 sm:mb-10"
          aria-label="Project filters"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            const count =
              filter === "All"
                ? projects.length
                : projects.filter(
                    (project) => project.filter === filter
                  ).length;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-purple-600 text-white border-purple-600 shadow-[0_0_16px_rgba(124,58,237,0.20)]"
                    : d
                    ? "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]"
                    : "bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {filter}

                <span
                  className={`text-[9px] min-w-5 h-5 px-1.5 rounded-full flex items-center justify-center ${
                    isActive
                      ? "bg-white/15 text-white"
                      : d
                      ? "bg-white/[0.06] text-gray-500"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
                d
                  ? "bg-white/[0.02] border-white/[0.06] hover:border-purple-500/30 hover:bg-white/[0.03] hover:shadow-[0_12px_40px_rgba(124,58,237,0.08)]"
                  : "bg-white border-gray-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/40"
              }`}
            >

              {/* ==============================================
                  IMAGE
              ============================================== */}

              <div className="relative overflow-hidden aspect-[16/10] bg-gray-900">

                <img
                  src={project.image}
                  alt={`${project.title} ${project.subtitle}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="375"
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center">

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live website`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-bold rounded-xl text-xs hover:bg-purple-50 transition-colors"
                  >
                    <ExternalLink size={14} />
                    View Live Project
                  </a>

                </div>

                {/* LOCATION */}

                <div className="absolute top-3 left-3">

                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${
                      d
                        ? "bg-black/60 border-white/10 text-white"
                        : "bg-white/90 border-gray-200 text-gray-700"
                    }`}
                  >
                    <Globe size={10} />
                    {project.location}
                  </span>

                </div>

                {/* CATEGORY */}

                <div className="absolute top-3 right-3">

                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${
                      d
                        ? "bg-black/60 border-white/10 text-white"
                        : "bg-white/90 border-gray-200 text-gray-700"
                    }`}
                  >
                    {project.category}
                  </span>

                </div>

              </div>

              {/* ==============================================
                  CONTENT
              ============================================== */}

              <div className="flex flex-col flex-grow p-5 sm:p-6">

                {/* TITLE */}

                <div className="mb-4">

                  <h3
                    className={`text-lg font-black leading-tight mb-1 ${
                      d ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-purple-500 text-xs font-semibold leading-relaxed">
                    {project.subtitle}
                  </p>

                </div>

                {/* DESCRIPTION */}

                <p
                  className={`text-[13px] leading-relaxed mb-5 flex-grow ${
                    d ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.desc}
                </p>

                {/* PROJECT HIGHLIGHT */}

                <div
                  className={`flex items-start gap-2.5 p-3 rounded-xl border mb-5 ${
                    d
                      ? "bg-purple-500/[0.05] border-purple-500/15"
                      : "bg-purple-50 border-purple-100"
                  }`}
                >
                  <CheckCircle
                    size={14}
                    className="text-purple-500 shrink-0 mt-0.5"
                  />

                  <p
                    className={`text-[11px] leading-relaxed font-medium ${
                      d ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {project.highlight}
                  </p>
                </div>

                {/* TECH STACK */}

                <div className="mb-5">

                  <div
                    className={`flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold mb-2 ${
                      d ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    <Code2 size={11} />
                    Technologies
                  </div>

                  <div className="flex flex-wrap gap-1.5">

                    {project.tags.map((tag) => (
                      <span
                        key={`${project.title}-${tag}`}
                        className={`text-[10px] font-bold px-2 py-1 rounded-md border ${
                          d
                            ? "bg-white/[0.04] border-white/[0.08] text-gray-400"
                            : "bg-gray-50 border-gray-200 text-gray-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

                {/* LIVE PROJECT CTA */}

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} live website`}
                  className={`group/button inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold border transition-all ${
                    d
                      ? "border-purple-500/25 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600"
                      : "border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600"
                  }`}
                >
                  Visit Live Project

                  <ExternalLink
                    size={13}
                    className="group-hover/button:translate-x-0.5 transition-transform"
                  />
                </a>

              </div>

            </article>
          ))}

        </div>

        {/* ==================================================
            EMPTY FILTER
        ================================================== */}

        {filteredProjects.length === 0 && (
          <div
            className={`py-16 px-6 text-center rounded-2xl border border-dashed ${
              d
                ? "border-white/10 bg-white/[0.02]"
                : "border-gray-300 bg-white"
            }`}
          >
            <BriefcaseBusiness
              size={34}
              className="mx-auto text-purple-500 mb-4"
            />

            <h3
              className={`text-lg font-bold mb-2 ${
                d ? "text-white" : "text-gray-900"
              }`}
            >
              No projects in this category yet
            </h3>

            <p
              className={`text-sm ${
                d ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Explore another category to view our selected work.
            </p>
          </div>
        )}

        {/* ==================================================
            CAPABILITIES / INDUSTRIES
        ================================================== */}

        <div
          className={`mt-14 sm:mt-16 p-7 sm:p-9 lg:p-10 rounded-3xl border ${
            d
              ? "bg-white/[0.02] border-white/[0.06]"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div>

              <span
                className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                  d ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Project Experience
              </span>

              <h2
                className={`text-2xl sm:text-3xl font-black mt-3 mb-4 ${
                  d ? "text-white" : "text-gray-900"
                }`}
              >
                Software for Different Business Requirements
              </h2>

              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  d ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Our showcased work includes business management systems,
                food and ordering applications, healthcare websites,
                tourism platforms and customer-facing digital experiences.
              </p>

            </div>

            <div className="flex flex-wrap gap-2">

              {[
                "Inventory & POS",
                "Food & Delivery",
                "Healthcare",
                "Travel & Tourism",
                "E-Commerce",
                "Business Systems",
                "Booking Experiences",
                "Admin Dashboards",
                "Responsive Websites",
                "API Integrations",
              ].map((industry) => (
                <span
                  key={industry}
                  className={`text-[11px] font-semibold px-3 py-2 rounded-lg border ${
                    d
                      ? "bg-white/[0.03] border-white/[0.08] text-gray-400"
                      : "bg-gray-50 border-gray-200 text-gray-600"
                  }`}
                >
                  {industry}
                </span>
              ))}

            </div>

          </div>
        </div>

        {/* ==================================================
            CTA
        ================================================== */}

        <div
          className={`mt-6 sm:mt-8 p-8 sm:p-10 lg:p-12 rounded-3xl border text-center relative overflow-hidden ${
            d
              ? "bg-purple-600/[0.06] border-purple-500/15"
              : "bg-purple-50 border-purple-100"
          }`}
        >

          {/* BACKGROUND */}

          <div
            aria-hidden="true"
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 blur-[110px] rounded-full pointer-events-none"
          />

          <div className="relative z-10">

            <span
              className={`inline-block text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] mb-4 ${
                d ? "text-purple-400" : "text-purple-600"
              }`}
            >
              Build With DevZore
            </span>

            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-4 ${
                d ? "text-white" : "text-gray-900"
              }`}
            >
              Have a Software Project in Mind?
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto ${
                d ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Tell us what you want to build. We can discuss your
              requirements, technical approach and the development services
              that fit your project.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">

              <Link
                to="/contact"
                onClick={scrollTop}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)] hover:-translate-y-0.5"
              >
                Discuss Your Project
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20saw%20your%20projects%20and%20want%20to%20discuss%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/15 transition-all hover:-translate-y-0.5"
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

              <Link
                to="/allservices"
                onClick={scrollTop}
                className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold rounded-xl text-sm border transition-all hover:-translate-y-0.5 ${
                  d
                    ? "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]"
                    : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-white"
                }`}
              >
                Explore Services
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;