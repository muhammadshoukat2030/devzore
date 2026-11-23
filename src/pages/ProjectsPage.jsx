import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  ExternalLink,
  Layers3,
  MapPin,
  CheckCircle,
  ShieldCheck,
  Code2,
  Cpu,
  Clock,
} from "lucide-react";
import SEO from "../components/SEO";
import StatsStrip from "../components/StatsStrip";
import ProjectBriefCTA from "../components/ProjectBriefCTA";
import { projectsData } from "../data/projectsData";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Management Systems",
    "E-Commerce",
    "Travel & Tourism",
    "Healthcare Systems",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DevZore Software Development Projects & Case Studies",
    description:
      "Explore real-world software engineering case studies from DevZore: inventory management, food ordering, tourism portals, healthcare, and logistics ERP.",
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${project.title} — ${project.systemType}`,
      url: `https://devzore.com/projects/${project.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://devzore.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://devzore.com/projects",
      },
    ],
  };

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20reviewed%20your%20projects%20and%20want%20to%20discuss%20a%20new%20project.";

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  const lightGrid = {
    backgroundImage:
      "linear-gradient(rgba(7,25,35,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,25,35,0.04) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  const SectionLabel = ({ children, light = false }) => (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
        light
          ? "bg-white/[0.08] text-[#22bdca] border border-white/[0.12]"
          : "bg-[#071923]/5 text-[#0796A8] border border-[#0796A8]/20"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#18bdcb]" />
      {children}
    </div>
  );

  return (
    <>
      <SEO
        title="Software Development Projects & Case Studies | DevZore"
        description="Explore real-world software engineering case studies from DevZore: inventory management, food ordering, tourism portals, healthcare, and logistics ERP."
        canonical="/projects"
        schema={[itemListSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0796A8]/20 selection:text-[#071923]">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-12 sm:pb-16 bg-[#04111a] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[15%] w-[500px] h-[500px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 right-[5%] w-[420px] h-[420px] rounded-full bg-[#20bdcb]/8 blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <SectionLabel light>Proven Engineering Track Record</SectionLabel>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] max-w-4xl">
              Completed Projects &{" "}
              <span className="text-[#22bdca]">Software Case Studies</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore selected real-world software engineering case studies from 180+ delivered client solutions worldwide. From custom MERN business platforms and route distribution ERPs to digital food ordering, healthcare clinical systems, and international tourism portals.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0796A8] hover:bg-[#18bdcb] px-6 py-3.5 text-sm font-bold text-white transition shadow-lg shadow-[#0796A8]/25"
              >
                Discuss Your Project on WhatsApp
                <ArrowRight size={15} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition backdrop-blur-sm"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: STATS STRIP */}
        {/* ========================================================================= */}
        <StatsStrip />

        {/* ========================================================================= */}
        {/* SECTION 3: PROJECTS PORTFOLIO GRID (LIGHT SLATE) */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-20 bg-[#f8fafb] border-b border-slate-200">
          <div className="absolute inset-0 pointer-events-none" style={lightGrid} />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <SectionLabel>Client Case Studies</SectionLabel>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071923] tracking-tight">
                  Engineered Software for <span className="text-[#0796A8]">Growing Enterprises</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                  Filter by system architecture or industry domain to inspect real challenges, engineered modules, and production delivery outcomes.
                </p>
              </div>

              {/* FILTER BUTTONS */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveFilter(cat)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition shadow-sm ${
                      activeFilter === cat
                        ? "bg-[#0796A8] text-white shadow-[#0796A8]/30"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-300 hover:border-[#0796A8]/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(7,25,35,0.08)] shadow-sm"
                >
                  <div>
                    {project.image ? (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="block aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100"
                      >
                        <img
                          src={project.image}
                          alt={`${project.title} - ${project.systemType}`}
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </Link>
                    ) : (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 border-b border-slate-200 p-6 text-center block"
                      >
                        <div>
                          <Layers3 size={32} className="mx-auto text-[#0796A8] mb-2 opacity-80" />
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Enterprise Business System
                          </span>
                        </div>
                      </Link>
                    )}

                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <span className="font-bold text-[#0796A8]">
                          {project.industry || project.category}
                        </span>
                        <span className="flex items-center gap-1 text-[13px] text-slate-600 font-medium">
                          <MapPin size={12} className="text-[#0796A8]" /> {project.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#071923] group-hover:text-[#0796A8] transition">
                        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                      </h3>
                      <p className="text-xs font-bold text-[#079ea5] mt-0.5 mb-2.5">
                        {project.systemType}
                      </p>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {project.teaser || project.problem}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                        {project.technologies.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border border-slate-200/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0796A8] hover:text-[#071923] transition"
                    >
                      Read Case Study <ArrowRight size={13} />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[12px] font-semibold text-slate-500 hover:text-slate-900 transition"
                      >
                        Live Site <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: ENGINEERING STANDARDS (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel>Quality Assured</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071923] tracking-tight">
                Our Engineering Commitments to Every Client
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                We design and build bespoke software with rigorous quality control, modern frameworks, and full intellectual property transfer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "100% IP Ownership",
                  desc: "Complete Git source code, environment configs, and database schemas handed over without licensing or vendor lock-in.",
                },
                {
                  icon: Code2,
                  title: "Modern Tech Stacks",
                  desc: "Built with production-grade React, Node.js, Next.js, and MongoDB for high performance, maintainability, and scale.",
                },
                {
                  icon: Cpu,
                  title: "Direct Engineer Comms",
                  desc: "Work directly with full-stack engineers and technical project leads with weekly sprints and transparent demos.",
                },
                {
                  icon: Clock,
                  title: "Post-Launch Warranty",
                  desc: "Comprehensive 30-day post-deployment bug-fixing warranty and zero-downtime server migration support included.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-slate-200 bg-[#fbfcfc] hover:bg-white hover:border-[#0796A8]/40 hover:shadow-md transition duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#071923] text-[#22bdca] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#071923] mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: CTA PROJECT BRIEF (DARK NAVY ANCHOR) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-[#06151d] text-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <ProjectBriefCTA />
          </div>
        </section>
      </div>
    </>
  );
}
