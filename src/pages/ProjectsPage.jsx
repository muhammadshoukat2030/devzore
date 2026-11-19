import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  ExternalLink,
  Layers3,
  MapPin,
} from "lucide-react";
import SEO from "../components/SEO";
import StatsStrip from "../components/StatsStrip";
import { projectsData } from "../data/projectsData";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Management Systems", "E-Commerce", "Travel & Tourism", "Financial Systems"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DevZore Software Development Projects & Case Studies",
    description:
      "Explore real-world software engineering case studies from DevZore: inventory management, food ordering, tourism portals, and business dashboards.",
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

  return (
    <>
      <SEO
        title="Completed Projects & Case Studies | DevZore Portfolio"
        description="Explore real-world software engineering case studies from DevZore: inventory management, food ordering, tourism portals, and business dashboards."
        canonical="/projects"
        schema={[itemListSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-[#061923] text-white">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-23 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 border-b border-white/[0.08]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1 text-[13px] font-semibold text-[#1BBAC8] mb-6">
              <Briefcase size={14} /> Proven Engineering Track Record
            </div>

            <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Completed Projects & Software Case Studies
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore 6 real-world systems engineered by DevZore. From full-stack MERN business software and distribution logistics to digital food ordering platforms and international tourism portals.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0796A8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1BBAC8]"
              >
                Discuss Your Project on WhatsApp
                <ArrowRight size={14} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* FACTUAL STATS STRIP */}
        <StatsStrip />

        {/* PROJECTS GRID SECTION */}
        <section className="py-20 bg-[#071923]/40">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
            {/* FILTERS */}
            <div className="flex flex-wrap items-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                    activeFilter === cat
                      ? "bg-[#0796A8] text-white shadow-lg shadow-[#0796A8]/20"
                      : "border border-white/[0.08] bg-[#061923] text-slate-300 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#061923] overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  <div>
                    {project.image ? (
                      <Link to={`/projects/${project.slug}`} className="block aspect-[16/10] overflow-hidden bg-[#04111a]">
                        <img
                          src={project.image}
                          alt={`${project.title} - ${project.systemType}`}
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </Link>
                    ) : (
                      <Link to={`/projects/${project.slug}`} className="aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-[#071923] to-[#04111a] border-b border-white/[0.06] p-6 text-center block">
                        <div>
                          <Layers3 size={32} className="mx-auto text-[#1BBAC8] mb-2 opacity-80" />
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Enterprise Business System
                          </span>
                        </div>
                      </Link>
                    )}

                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span className="font-semibold text-[#1BBAC8]">{project.industry || project.category}</span>
                        <span className="flex items-center gap-1 text-[13px]">
                          <MapPin size={11} /> {project.location}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-white group-hover:text-[#1BBAC8] transition">
                        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                      </h2>
                      <p className="text-xs font-medium text-slate-400 mb-2">{project.systemType}</p>

                      {/* ITEM 3: ONE-LINE OUTCOME TEASER */}
                      <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                        {project.teaser || project.problem}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-white/[0.04] px-2 py-0.5 text-xs text-slate-400 border border-white/[0.04]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-white/[0.04] flex items-center justify-between mt-4">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1BBAC8] hover:text-white transition"
                    >
                      Read Case Study <ArrowRight size={13} />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[13px] text-slate-400 hover:text-white transition"
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

        {/* CTA BOTTOM */}
        <section className="py-20 bg-[#061923] border-t border-white/[0.08] text-center">
          <div className="max-w-[700px] mx-auto px-5 sm:px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1BBAC8]">
              Ready to Build?
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white">
              Let&apos;s Build Your Next Software Solution
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              We partner with founders and business owners from technical planning and prototype development to full production launch with 100% source code handover.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0796A8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1BBAC8]"
              >
                Discuss on WhatsApp
                <ArrowRight size={14} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Submit Project Details
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
