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
// PROJECTS
// ======================================================

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // ======================================================
  // PROJECT DATA
  // ======================================================

  const projects = [
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
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },

    {
      id: "sarab-express",
      title: "Sarab Express",
      subtitle: "Food Ordering Platform",
      description:
        "Responsive food ordering experience with menus, product discovery, cart and ordering workflows.",
      image: sarabFood,
      liveUrl: "https://sarab-food-delivery.vercel.app/",
      location: "Pakistan",
      category: "E-Commerce",
      filter: "E-Commerce",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },

    {
      id: "best-desert-safari-qatar",
      title: "Desert Safari Qatar",
      subtitle: "Tourism & Safari Website",
      description:
        "Tourism website for discovering desert safari experiences, tour packages and booking inquiries.",
      image: qatarTourist,
      liveUrl: "https://www.bestdesertsafariqatar.com/",
      location: "Qatar",
      category: "Travel",
      filter: "Travel",
      technologies: ["React", "Node.js", "MongoDB", "SEO"],
    },

    {
      id: "installment-management-system",
      title: "Installment Management",
      subtitle: "Sales & Installment Management System",
      description:
        "Business software for customers, installment plans, payments, investors, collections and financial reporting.",
      image: null,
      liveUrl: "https://installment-system-two.vercel.app",
      location: "Pakistan",
      category: "Business System",
      filter: "Business Systems",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },

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
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },

    {
      id: "gulf-dunes-tourism",
      title: "Gulf Dunes Tourism",
      subtitle: "Qatar Tourism Platform",
      description:
        "Responsive tourism platform for desert safari packages, tour discovery and customer inquiries.",
      image: gulfDunes,
      liveUrl: "https://www.gulfdunestourism.com/",
      location: "Qatar",
      category: "Travel",
      filter: "Travel",
      technologies: ["React", "Node.js", "MongoDB", "SEO"],
    },

    {
      id: "prime-dental-care",
      title: "Prime Dental Care",
      subtitle: "Healthcare Website",
      description:
        "Modern responsive dental website for treatments, clinic information and appointment inquiries.",
      image: dentalWebsite,
      liveUrl: "https://prime-dental-react.vercel.app/",
      location: "Pakistan",
      category: "Healthcare",
      filter: "Healthcare",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },

    {
      id: "quickbite",
      title: "QuickBite",
      subtitle: "Food Delivery Application",
      description:
        "Mobile-friendly food delivery interface for menu browsing, search and digital ordering workflows.",
      image: quickBite,
      liveUrl: "https://food-nine-ashy.vercel.app/",
      location: "Pakistan",
      category: "Food Tech",
      filter: "E-Commerce",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },

    {
      id: "dubai-expo-booking",
      title: "Dubai Expo Booking",
      subtitle: "Expo & Event Booking Platform",
      description:
        "Booking-focused web platform designed for expo discovery, customer inquiries and event booking workflows.",
      image: null,
      liveUrl: "",
      location: "Qatar",
      category: "Booking",
      filter: "Booking",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
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
  // FILTERED PROJECTS
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
  // VISIBLE PROJECTS
  // ======================================================

  const visibleProjects =
    activeFilter === "All" && !showAll
      ? filteredProjects.slice(0, 6)
      : filteredProjects;

  // ======================================================
  // HELPERS
  // ======================================================

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
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
      className="
        relative
        overflow-hidden
        bg-[#f6f7f7]
        border-y
        border-slate-200
      "
    >
      {/* ==================================================
          BACKGROUND GRID
      ================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[linear-gradient(rgba(6,25,35,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(6,25,35,0.025)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* ==================================================
          CONTAINER
      ================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-12
          sm:py-14
          lg:py-16
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
            mb-7
            sm:mb-8
          "
        >
          <div className="max-w-3xl">

            {/* LABEL */}

            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-[2px] bg-[#17bebb]" />

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#061923]/60
                "
              >
                Selected Work
              </span>
            </div>

            {/* HEADING */}

            <h2
              id="projects-heading"
              className="
                text-[28px]
                sm:text-[36px]
                lg:text-[44px]
                leading-[1.08]
                font-semibold
                tracking-[-0.035em]
                text-[#061923]
              "
            >
              Projects Built for{" "}
              <span className="text-[#0b9faa]">
                Real Businesses
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4
                max-w-2xl
                text-[12px]
                sm:text-[14px]
                leading-6
                sm:leading-7
                text-slate-600
              "
            >
              Selected business systems, web applications,
              e-commerce platforms, healthcare websites and tourism
              solutions developed by DevZore.
            </p>
          </div>

          {/* COUNT */}

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              bg-white
              border
              border-slate-200
              shadow-[0_3px_10px_rgba(6,25,35,0.05)]
            "
          >
            <span className="text-2xl font-black text-[#061923]">
              {projects.length}
            </span>

            <div>
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-wider
                  font-black
                  text-slate-400
                "
              >
                Selected
              </p>

              <p className="text-[10px] font-semibold text-slate-600">
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
            mb-5
            sm:mb-6
          "
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilter(filter)}
                aria-pressed={isActive}
                className={`
                  shrink-0
                  px-3
                  sm:px-4
                  py-2
                  rounded-lg
                  border
                  text-[9px]
                  sm:text-[10px]
                  font-bold
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-[#061923] border-[#061923] text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:border-[#061923]/30 hover:text-[#061923]"
                  }
                `}
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
            gap-4
          "
        >
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-xl
                bg-white
                border
                border-slate-200
                shadow-[0_4px_16px_rgba(6,25,35,0.045)]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:shadow-[0_8px_22px_rgba(6,25,35,0.07)]
              "
            >
              {/* ==================================================
                  TOP ACCENT LINE
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  z-30
                  h-[2px]
                  bg-gradient-to-r
                  from-[#0d5066]
                  via-[#118da0]
                  to-[#17bebb]
                "
              />

              {/* ==================================================
                  PROJECT IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  h-[185px]
                  sm:h-[195px]
                  lg:h-[205px]
                  xl:h-[215px]
                  overflow-hidden
                  bg-slate-100
                  border-b
                  border-slate-200
                "
              >
                {project.image ? (
                  project.liveUrl ? (
                    /* ==========================================
                        CLICKABLE PROJECT IMAGE
                    ========================================== */

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live project`}
                      className="block w-full h-full"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.subtitle}`}
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="340"
                        className="
                          w-full
                          h-full
                          object-cover
                          object-top
                          cursor-pointer
                          transition-transform
                          duration-500
                          group-hover:scale-[1.015]
                        "
                      />
                    </a>
                  ) : (
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.subtitle}`}
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="340"
                      className="
                        w-full
                        h-full
                        object-cover
                        object-top
                      "
                    />
                  )
                ) : (
                  /* ==========================================
                      PLACEHOLDER
                  ========================================== */

                  <div
                    className="
                      w-full
                      h-full
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center
                      p-5
                      bg-gradient-to-br
                      from-[#eef3f4]
                      via-white
                      to-[#e9f3f4]
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        bg-[#061923]
                        text-white
                        mb-2
                      "
                    >
                      <Layers3 size={17} />
                    </div>

                    <p className="text-[12px] font-black text-[#061923]">
                      {project.title}
                    </p>

                    <p className="mt-1 text-[8px] text-slate-500">
                      Software Project
                    </p>
                  </div>
                )}

                {/* ==================================================
                    BOTTOM IMAGE GRADIENT
                ================================================== */}

                {project.image && (
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-12
                      bg-gradient-to-t
                      from-black/20
                      to-transparent
                      pointer-events-none
                    "
                  />
                )}

                {/* ==================================================
                    LOCATION
                ================================================== */}

                <span
                  className="
                    absolute
                    z-20
                    top-3
                    left-3
                    inline-flex
                    items-center
                    gap-1
                    px-2
                    py-1
                    rounded-md
                    bg-[#061923]/90
                    backdrop-blur-md
                    border
                    border-white/10
                    text-white
                    text-[8px]
                    font-bold
                    pointer-events-none
                  "
                >
                  <Globe2 size={8} />

                  {project.location}
                </span>

                {/* ==================================================
                    CATEGORY
                ================================================== */}

                <span
                  className="
                    absolute
                    z-20
                    top-3
                    right-3
                    px-2
                    py-1
                    rounded-md
                    bg-[#17bebb]
                    text-[#061923]
                    text-[8px]
                    font-black
                    pointer-events-none
                  "
                >
                  {project.category}
                </span>
              </div>

              {/* ==================================================
                  CONTENT
              ================================================== */}

              <div className="flex flex-col flex-grow p-4">

                {/* TITLE */}

                <h3
                  className="
                    text-[14px]
                    sm:text-[15px]
                    font-black
                    leading-tight
                    text-[#061923]
                  "
                >
                  {project.title}
                </h3>

                {/* SUBTITLE */}

                <p
                  className="
                    mt-1
                    text-[9px]
                    font-bold
                    text-[#0b9faa]
                  "
                >
                  {project.subtitle}
                </p>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-2
                    text-[10px]
                    sm:text-[10.5px]
                    leading-[1.55]
                    line-clamp-3
                    text-slate-500
                  "
                >
                  {project.description}
                </p>

                {/* ==================================================
                    TECHNOLOGY
                ================================================== */}

                <div className="mt-3">
                  <div
                    className="
                      flex
                      items-center
                      gap-1
                      text-[7px]
                      uppercase
                      tracking-wider
                      font-black
                      mb-1.5
                      text-slate-400
                    "
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
                          className="
                            px-1.5
                            py-0.5
                            rounded
                            border
                            bg-slate-50
                            border-slate-200
                            text-slate-500
                            text-[7.5px]
                            font-bold
                          "
                        >
                          {technology}
                        </span>
                      ))}
                  </div>
                </div>

                {/* ==================================================
                    LIVE PROJECT BUTTON
                ================================================== */}

                <div className="mt-auto pt-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                      className="
                        group/button
                        w-full
                        inline-flex
                        items-center
                        justify-between
                        px-3
                        py-2
                        rounded-lg
                        border
                        border-slate-200
                        text-[#061923]
                        text-[9px]
                        font-bold
                        transition-all
                        duration-200
                        hover:bg-[#061923]
                        hover:border-[#061923]
                        hover:text-white
                      "
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
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        px-3
                        py-2
                        rounded-lg
                        border
                        border-slate-200
                        bg-slate-50
                        text-slate-400
                        text-[9px]
                        font-bold
                      "
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
            SHOW MORE / LESS
        ================================================== */}

        {activeFilter === "All" && projects.length > 6 && (
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-2.5
                rounded-lg
                border
                bg-white
                border-slate-200
                text-[#061923]
                text-[10px]
                sm:text-[11px]
                font-bold
                transition-all
                hover:border-[#061923]/30
              "
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
            PROJECT CTA
        ================================================== */}

        <div
          className="
            relative
            overflow-hidden
            mt-7
            sm:mt-8
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-4
            px-5
            py-4
            sm:px-6
            sm:py-5
            rounded-xl
            bg-white
            border
            border-slate-200
            shadow-[0_4px_16px_rgba(6,25,35,0.045)]
          "
        >
          {/* LEFT ACCENT */}

          <span
            aria-hidden="true"
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-[3px]
              bg-[#17bebb]
            "
          />

          <div>
            <h3
              className="
                text-[15px]
                sm:text-[17px]
                font-black
                text-[#061923]
              "
            >
              Have a project in mind?
            </h3>

            <p
              className="
                mt-1
                text-[9px]
                sm:text-[10px]
                text-slate-500
              "
            >
              Tell us what you want to build and we’ll discuss
              the right technical approach.
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
              w-full
              sm:w-auto
              px-5
              py-2.5
              rounded-lg
              bg-[#061923]
              border
              border-[#061923]
              text-white
              text-[10px]
              font-bold
              transition-all
              duration-200
              hover:shadow-[0_6px_16px_rgba(6,25,35,0.15)]
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