import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Globe2,
  Code2,
  ChevronDown,
  ChevronUp,
  Layers3,
  Briefcase,
} from "lucide-react";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // FILTERS
  const filters = [
    "All",
    "Management Systems",
    "E-Commerce",
    "Travel & Tourism",
    "Healthcare Systems",
  ];

  // FILTERED PROJECTS
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projectsData;
    }
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const visibleProjects =
    activeFilter === "All" && !showAll
      ? filteredProjects.slice(0, 6)
      : filteredProjects;

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

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden bg-[#f6f7f7] border-y border-slate-200"
    >
      {/* BACKGROUND GRID */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(6,25,35,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(6,25,35,0.025)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            {/* LABEL */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-[2px] bg-[#17bebb]" />
              <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.2em] text-[#061923]/70">
                Selected Work & Case Studies
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="projects-heading"
              className="text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.08] font-bold tracking-[-0.035em] text-[#061923]"
            >
              Software Engineered for{" "}
              <span className="text-[#0b9faa]">Real Businesses</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-2xl text-[13px] sm:text-[14px] leading-relaxed text-slate-600">
              Explore 6 selected case studies from 180+ delivered projects worldwide. Read full technical case studies, system challenges, and module architectures.
            </p>
          </div>

          {/* ALL PROJECTS CTA BUTTON */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/projects"
              onClick={scrollTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#061923] hover:bg-[#0796A8] text-white text-xs font-bold transition shadow-sm"
            >
              <Briefcase size={14} />
              <span>Browse All Case Studies</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex overflow-x-auto sm:flex-wrap gap-2 pb-2 mb-6 sm:mb-8">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilter(filter)}
                aria-pressed={isActive}
                className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-lg border text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#061923] border-[#061923] text-white shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:border-[#061923]/30 hover:text-[#061923]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <article
              key={project.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-[0_4px_16px_rgba(6,25,35,0.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(6,25,35,0.08)]"
            >
              {/* TOP ACCENT LINE */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 z-30 h-[2.5px] bg-gradient-to-r from-[#0d5066] via-[#118da0] to-[#17bebb]"
              />

              <div>
                {/* PROJECT IMAGE */}
                <div className="relative h-[230px] sm:h-[250px] overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e8edf2] border-b border-slate-200 flex items-center justify-center p-2.5">
                  {project.image ? (
                    <Link
                      to={`/projects/${project.slug}`}
                      onClick={scrollTop}
                      aria-label={`Read ${project.title} case study`}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.systemType}`}
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="375"
                        className="w-full h-full object-contain object-center cursor-pointer transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </Link>
                  ) : (
                    <Link
                      to={`/projects/${project.slug}`}
                      onClick={scrollTop}
                      className="w-full h-full flex flex-col items-center justify-center text-center p-5 bg-gradient-to-br from-[#eef3f4] via-white to-[#e9f3f4]"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#061923] text-white mb-2">
                        <Layers3 size={18} />
                      </div>
                      <p className="text-[13px] font-black text-[#061923]">
                        {project.title}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500 font-semibold">
                        Enterprise Software System
                      </p>
                    </Link>
                  )}

                  {/* LOCATION BADGE */}
                  <span className="absolute z-20 top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#061923]/90 backdrop-blur-md border border-white/10 text-white text-xs font-bold pointer-events-none">
                    <Globe2 size={10} />
                    {project.location}
                  </span>

                  {/* CATEGORY BADGE */}
                  <span className="absolute z-20 top-3 right-3 px-2.5 py-1 rounded-md bg-[#17bebb] text-[#061923] text-xs font-black pointer-events-none">
                    {project.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-[18px] sm:text-[19px] font-bold leading-snug text-[#061923] group-hover:text-[#0796A8] transition">
                    <Link to={`/projects/${project.slug}`} onClick={scrollTop}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="mt-1 text-[13px] sm:text-sm font-semibold text-[#079ea5]">
                    {project.systemType}
                  </p>

                  <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed line-clamp-3 text-[#374151]">
                    {project.teaser || project.description}
                  </p>

                  {/* TECHNOLOGY */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-xs uppercase tracking-wider font-black mb-1.5 text-slate-400">
                      <Code2 size={10} />
                      <span>Technologies</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={`${project.slug}-${tech}`}
                          className="px-2 py-0.5 rounded border bg-slate-50 border-slate-200 text-slate-600 text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS (IMPOSSIBLE TO MISS CASE STUDY LINK) */}
              <div className="p-5 pt-0 mt-auto flex items-center gap-2">
                <Link
                  to={`/projects/${project.slug}`}
                  onClick={scrollTop}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#061923] hover:bg-[#0796A8] text-white text-[13px] font-bold transition shadow-sm"
                >
                  <span>Read Case Study</span>
                  <ArrowRight size={12} />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live platform`}
                    className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-slate-200 hover:border-slate-400 text-slate-700 text-[13px] font-semibold transition"
                  >
                    <span>Live</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* SHOW MORE / LESS */}
        {activeFilter === "All" && projectsData.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border bg-white border-slate-200 text-[#061923] text-xs font-bold transition hover:border-[#061923]/30"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={14} />
                </>
              ) : (
                <>
                  View More Projects <ChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        )}

        {/* BOTTOM SECTION CTA */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-[#061923] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-5 border border-white/[0.08] shadow-lg">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#1BBAC8] mb-1">
              Engineering Transparency
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Want to see how we build software?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
              Inspect our full portfolio of case studies with real feature breakdowns, database structures, and architecture approaches.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/projects"
              onClick={scrollTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0796A8] hover:bg-[#1BBAC8] text-white text-xs font-bold transition shadow-md shadow-[#0796A8]/30"
            >
              <span>Explore All 6 Case Studies</span>
              <ArrowRight size={13} />
            </Link>
            <Link
              to="/contact"
              onClick={scrollTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-white text-xs font-bold transition"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
