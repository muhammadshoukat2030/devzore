import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Globe2,
  Code2,
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
  Layers3,
} from "lucide-react";

// ======================================================
// PROJECT IMAGES
// ======================================================

import weldonPaint from "../assets/weldonpaint.webp";
import sarabFood from "../assets/sarab_website_image.webp";
import dentalWebsite from "../assets/Dental_website.webp";
import gulfDunes from "../assets/gulf-dunes.webp";
import quickBite from "../assets/food.webp";
import qatarTourist from "../assets/qatar_tourist_agency.webp";

// ======================================================
// OPTIONAL NEW PROJECT IMAGES
// ======================================================
//
// Agar ye images assets folder mein hain to uncomment kar dena:
//
// import frostyOps from "../assets/frostyops-dashboard.webp";
// import installmentSystem from "../assets/installment-system.webp";
// import dubaiExpo from "../assets/dubai-expo-booking.webp";
//
// Aur neeche relevant project mein:
//
// image: null
//
// ko:
//
// image: frostyOps
// image: installmentSystem
// image: dubaiExpo
//
// se replace kar dena.
//
// ======================================================

const Projects = ({ isDark = true }) => {
  const d = isDark;

  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // ======================================================
  // PROJECT DATA
  // ======================================================

  const projects = [
    // ====================================================
    // WELDON PAINTS
    // ====================================================

    {
      id: "weldon-paints",

      title: "Weldon Paints",

      subtitle: "Inventory Management System",

      description:
        "Custom inventory, sales and business management software built for day-to-day store operations.",

      image: weldonPaint,

      liveUrl: "https://hamzapaints.vercel.app/",

      location: "Pakistan",

      category: "Business System",

      filter: "Business Systems",

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },

    // ====================================================
    // INSTALLMENT MANAGEMENT SYSTEM
    // ====================================================

    {
      id: "installment-management-system",

      title: "Installment Management",

      subtitle: "Sales & Installment Management System",

      description:
        "Business software for customers, installment plans, payments, investors, collections and financial reporting.",

      image: null,

      liveUrl:
        "https://installment-system-two.vercel.app",

      location: "Pakistan",

      category: "Business System",

      filter: "Business Systems",

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },

    // ====================================================
    // FROSTYOPS
    // ====================================================

    {
      id: "frostyops",

      title: "FrostyOps",

      subtitle: "Ice Cream Distribution System",

      description:
        "Distribution software for products, stock, salesmen, suppliers, invoices, expenses and business analytics.",

      image: null,

      liveUrl: "",

      location: "Pakistan",

      category: "Distribution",

      filter: "Business Systems",

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },

    // ====================================================
    // GULF DUNES TOURISM
    // ====================================================

    {
      id: "gulf-dunes-tourism",

      title: "Gulf Dunes Tourism",

      subtitle: "Dubai Tourism Platform",

      description:
        "Responsive tourism platform for desert safari packages, tour discovery and customer inquiries.",

      image: gulfDunes,

      liveUrl:
        "https://www.gulfdunestourism.com/",

      location: "Dubai, UAE",

      category: "Travel",

      filter: "Travel",

      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "SEO",
      ],
    },

    // ====================================================
    // SARAB EXPRESS
    // ====================================================

    {
      id: "sarab-express",

      title: "Sarab Express",

      subtitle: "Food Ordering Platform",

      description:
        "Responsive food ordering experience with menus, product discovery, cart and ordering workflows.",

      image: sarabFood,

      liveUrl:
        "https://sarab-food-delivery.vercel.app/",

      location: "Pakistan",

      category: "E-Commerce",

      filter: "E-Commerce",

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },

    // ====================================================
    // PRIME DENTAL CARE
    // ====================================================

    {
      id: "prime-dental-care",

      title: "Prime Dental Care",

      subtitle: "Healthcare Website",

      description:
        "Modern responsive dental website for treatments, clinic information and appointment inquiries.",

      image: dentalWebsite,

      liveUrl:
        "https://prime-dental-react.vercel.app/",

      location: "Pakistan",

      category: "Healthcare",

      filter: "Healthcare",

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },

    // ====================================================
    // BEST DESERT SAFARI QATAR
    // ====================================================

    {
      id: "best-desert-safari-qatar",

      title: "Desert Safari Qatar",

      subtitle: "Tourism & Safari Website",

      description:
        "Tourism website for discovering desert safari experiences, tour packages and booking inquiries.",

      image: qatarTourist,

      liveUrl:
        "https://www.bestdesertsafariqatar.com/",

      location: "Qatar",

      category: "Travel",

      filter: "Travel",

      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "SEO",
      ],
    },

    // ====================================================
    // QUICKBITE
    // ====================================================

    {
      id: "quickbite",

      title: "QuickBite",

      subtitle: "Food Delivery Application",

      description:
        "Mobile-friendly food delivery interface for menu browsing, search and digital ordering workflows.",

      image: quickBite,

      liveUrl:
        "https://food-nine-ashy.vercel.app/",

      location: "Pakistan",

      category: "Food Tech",

      filter: "E-Commerce",

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },

    // ====================================================
    // DUBAI EXPO BOOKING
    // ====================================================

    {
      id: "dubai-expo-booking",

      title: "Dubai Expo Booking",

      subtitle: "Expo & Event Booking Platform",

      description:
        "Booking-focused web platform designed for expo discovery, customer inquiries and event booking workflows.",

      image: null,

      liveUrl: "",

      location: "Dubai, UAE",

      category: "Booking",

      filter: "Booking",

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },
  ];

  // ======================================================
  // FILTERS
  // ======================================================

  const filters = [
    "All",
    "Business Systems",
    "E-Commerce",
    "Travel",
    "Healthcare",
    "Booking",
  ];

  // ======================================================
  // FILTER PROJECTS
  // ======================================================

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.filter === activeFilter
    );
  }, [activeFilter]);

  // ======================================================
  // DISPLAY PROJECTS
  // ======================================================

  // Homepage ko short rakhne ke liye:
  // All filter mein pehle 6 projects.
  // Kisi specific filter mein saare relevant projects.

  const visibleProjects =
    activeFilter === "All" && !showAll
      ? filteredProjects.slice(0, 6)
      : filteredProjects;

  // ======================================================
  // CHANGE FILTER
  // ======================================================

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

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
      className={`relative overflow-hidden transition-colors duration-300 ${
        d ? "bg-[#030303]" : "bg-[#fafafa]"
      }`}
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className={`absolute top-0 right-0 w-[350px] h-[350px] rounded-full blur-[130px] opacity-[0.06] ${
            d ? "bg-purple-600" : "bg-purple-300"
          }`}
        />
      </div>

      {/* ==================================================
          CONTAINER
      ================================================== */}

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-10 sm:py-12 lg:py-14
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-5
            mb-6 sm:mb-8
          "
        >
          <div className="max-w-3xl">
            {/* BADGE */}

            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[9px] sm:text-[10px] font-black uppercase tracking-[0.18em] mb-3 ${
                d
                  ? "bg-purple-600/10 border-purple-500/20 text-purple-400"
                  : "bg-purple-50 border-purple-200 text-purple-700"
              }`}
            >
              <BriefcaseBusiness size={11} />

              Selected Work
            </div>

            {/* HEADING */}

            <h2
              id="projects-heading"
              className={`text-[27px] sm:text-3xl lg:text-[38px] font-black tracking-tight leading-[1.1] ${
                d ? "text-white" : "text-slate-950"
              }`}
            >
              Projects Built for{" "}

              <span className="text-purple-600">
                Real Businesses
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className={`mt-3 max-w-2xl text-[12px] sm:text-[13px] leading-6 ${
                d ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Selected business systems, web applications,
              e-commerce platforms, healthcare websites and
              tourism solutions developed by DevZore.
            </p>
          </div>

          {/* COUNT */}

          <div
            className={`hidden lg:flex items-center gap-3 px-4 py-3 rounded-xl border ${
              d
                ? "bg-white/[0.02] border-white/[0.07]"
                : "bg-white border-slate-200"
            }`}
          >
            <span
              className={`text-2xl font-black ${
                d ? "text-white" : "text-slate-950"
              }`}
            >
              {projects.length}
            </span>

            <div>
              <p
                className={`text-[8px] uppercase tracking-wider font-black ${
                  d ? "text-gray-600" : "text-slate-400"
                }`}
              >
                Selected
              </p>

              <p
                className={`text-[10px] font-semibold ${
                  d ? "text-gray-400" : "text-slate-600"
                }`}
              >
                Projects
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================
            FILTERS
        ================================================== */}

        <div
          className="
            flex
            overflow-x-auto
            sm:flex-wrap
            gap-1.5
            pb-2
            mb-5 sm:mb-6
          "
        >
          {filters.map((filter) => {
            const isActive =
              activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() =>
                  handleFilter(filter)
                }
                aria-pressed={isActive}
                className={`shrink-0 px-3 py-1.5 rounded-lg border text-[9px] sm:text-[10px] font-bold transition-all ${
                  isActive
                    ? "bg-purple-600 border-purple-600 text-white"
                    : d
                    ? "bg-white/[0.025] border-white/[0.07] text-gray-500 hover:text-white hover:border-purple-500/25"
                    : "bg-white border-slate-200 text-slate-600 hover:border-purple-200"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-3 sm:gap-4
          "
        >
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className={`group flex flex-col rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-0.5 ${
                d
                  ? "bg-white/[0.02] border-white/[0.07] hover:border-purple-500/30 hover:bg-white/[0.035]"
                  : "bg-white border-slate-200 hover:border-purple-200 hover:shadow-lg"
              }`}
            >
              {/* ============================================
                  IMAGE
              ============================================ */}

              <div
                className={`relative h-[145px] sm:h-[150px] lg:h-[155px] overflow-hidden ${
                  d
                    ? "bg-[#090909]"
                    : "bg-slate-100"
                }`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="300"
                    className="
                      w-full h-full
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />
                ) : (
                  /* ========================================
                     PLACEHOLDER
                  ======================================== */

                  <div
                    className={`w-full h-full flex flex-col items-center justify-center text-center p-5 ${
                      d
                        ? "bg-gradient-to-br from-purple-950/25 via-[#090909] to-[#050505]"
                        : "bg-gradient-to-br from-purple-50 via-white to-slate-50"
                    }`}
                  >
                    <div
                      className="
                        w-9 h-9
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        bg-purple-600
                        text-white
                        mb-2
                      "
                    >
                      <Layers3 size={17} />
                    </div>

                    <p
                      className={`text-[12px] font-black ${
                        d
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      {project.title}
                    </p>

                    <p
                      className={`mt-1 text-[8px] ${
                        d
                          ? "text-gray-600"
                          : "text-slate-500"
                      }`}
                    >
                      Software Project
                    </p>
                  </div>
                )}

                {/* OVERLAY */}

                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

                {/* LOCATION */}

                <span
                  className="
                    absolute
                    top-2 left-2
                    inline-flex
                    items-center
                    gap-1
                    px-2 py-1
                    rounded-md
                    bg-black/65
                    backdrop-blur-md
                    border border-white/10
                    text-white
                    text-[8px]
                    font-bold
                  "
                >
                  <Globe2 size={8} />

                  {project.location}
                </span>

                {/* CATEGORY */}

                <span
                  className="
                    absolute
                    top-2 right-2
                    px-2 py-1
                    rounded-md
                    bg-purple-600/90
                    text-white
                    text-[8px]
                    font-bold
                  "
                >
                  {project.category}
                </span>
              </div>

              {/* ============================================
                  CONTENT
              ============================================ */}

              <div className="flex flex-col flex-grow p-4">
                {/* TITLE */}

                <h3
                  className={`text-[14px] sm:text-[15px] font-black leading-tight transition-colors group-hover:text-purple-500 ${
                    d
                      ? "text-white"
                      : "text-slate-950"
                  }`}
                >
                  {project.title}
                </h3>

                {/* SUBTITLE */}

                <p
                  className="
                    mt-1
                    text-[9px]
                    font-bold
                    text-purple-500
                  "
                >
                  {project.subtitle}
                </p>

                {/* DESCRIPTION */}

                <p
                  className={`mt-2 text-[10px] sm:text-[10.5px] leading-[1.55] line-clamp-3 ${
                    d
                      ? "text-gray-500"
                      : "text-slate-500"
                  }`}
                >
                  {project.description}
                </p>

                {/* ==========================================
                    TECHNOLOGIES
                ========================================== */}

                <div className="mt-3">
                  <div
                    className={`flex items-center gap-1 text-[7px] uppercase tracking-wider font-black mb-1.5 ${
                      d
                        ? "text-gray-600"
                        : "text-slate-400"
                    }`}
                  >
                    <Code2 size={8} />

                    Technology
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies
                      .slice(0, 4)
                      .map((technology) => (
                        <span
                          key={`${project.id}-${technology}`}
                          className={`px-1.5 py-0.5 rounded border text-[7.5px] font-bold ${
                            d
                              ? "bg-white/[0.03] border-white/[0.07] text-gray-500"
                              : "bg-slate-50 border-slate-200 text-slate-500"
                          }`}
                        >
                          {technology}
                        </span>
                      ))}
                  </div>
                </div>

                {/* ==========================================
                    CTA
                ========================================== */}

                <div className="mt-auto pt-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                      className={`group/button w-full inline-flex items-center justify-between px-3 py-2 rounded-lg border text-[9px] font-bold transition-all ${
                        d
                          ? "border-white/[0.08] text-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                          : "border-slate-200 text-slate-700 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                      }`}
                    >
                      View Live Project

                      <ExternalLink
                        size={10}
                        className="
                          transition-transform
                          group-hover/button:translate-x-0.5
                        "
                      />
                    </a>
                  ) : (
                    <div
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-[9px] font-bold ${
                        d
                          ? "border-white/[0.06] text-gray-600"
                          : "border-slate-200 text-slate-400"
                      }`}
                    >
                      Project Showcase

                      <ArrowRight size={10} />
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ==================================================
            SHOW MORE / SHOW LESS
        ================================================== */}

        {activeFilter === "All" &&
          projects.length > 6 && (
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={() =>
                  setShowAll((prev) => !prev)
                }
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border text-[10px] sm:text-[11px] font-bold transition-all ${
                  d
                    ? "bg-white/[0.025] border-white/[0.08] text-gray-300 hover:bg-white/[0.05] hover:border-purple-500/30"
                    : "bg-white border-slate-200 text-slate-700 hover:border-purple-200 hover:shadow-sm"
                }`}
              >
                {showAll ? (
                  <>
                    Show Less
                    <ChevronUp size={13} />
                  </>
                ) : (
                  <>
                    View More Projects
                    <ChevronDown size={13} />
                  </>
                )}
              </button>
            </div>
          )}

        {/* ==================================================
            COMPACT PROJECT CTA
        ================================================== */}

        <div
          className={`mt-7 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 rounded-xl border ${
            d
              ? "bg-purple-600/[0.05] border-purple-500/15"
              : "bg-purple-50 border-purple-100"
          }`}
        >
          <div>
            <h3
              className={`text-[15px] sm:text-[17px] font-black ${
                d
                  ? "text-white"
                  : "text-slate-950"
              }`}
            >
              Have a project in mind?
            </h3>

            <p
              className={`mt-1 text-[9px] sm:text-[10px] ${
                d
                  ? "text-gray-500"
                  : "text-slate-600"
              }`}
            >
              Tell us what you want to build and
              we’ll discuss the right technical approach.
            </p>
          </div>

          <Link
            to="/contact"
            onClick={scrollTop}
            className="
              shrink-0
              inline-flex
              items-center
              justify-center
              gap-2
              px-5 py-2.5
              rounded-lg
              bg-purple-600
              hover:bg-purple-700
              text-white
              text-[10px]
              font-bold
              transition-all
            "
          >
            Discuss Your Project

            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;