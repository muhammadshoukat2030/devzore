import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  FiCheckCircle,
  FiExternalLink,
  FiArrowRight,
  FiArrowLeft,
  FiCode,
  FiLayers,
  FiMapPin,
  FiMessageSquare,
  FiMail,
  FiBox,
  FiShield,
} from "react-icons/fi";
import { projectsData } from "../data/projectsData";
import SEO from "../components/SEO";
import ProjectBriefCTA from "../components/ProjectBriefCTA";

export default function ProjectDetail() {
  const { slug } = useParams();
  const effectiveSlug = slug;
  const project = projectsData.find((p) => p.slug === effectiveSlug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Background grids for rhythmic section alternating
  const lightGrid = {
    backgroundImage:
      "linear-gradient(rgba(7,25,35,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(7,25,35,0.045) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
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

  const relatedProjects = projectsData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const projectShortTitles = {
    "weldon-paints": "Weldon Paints Case Study | POS & Stock System | DevZore",
    "sarab-express": "Sarab Express Case Study | Delivery & Logistics | DevZore",
    "desert-safari-qatar": "Desert Safari Qatar Case Study | Tourism Booking | DevZore",
    "gulf-dunes-tourism": "Gulf Dunes Tourism Case Study | Excursion Portal | DevZore",
    frostyops: "FrostyOps Case Study | Route Logistics ERP | DevZore",
    "prime-dental": "Prime Dental Case Study | Dental Clinic Web Platform | DevZore",
    "installment-management": "Installment Management Platform Case Study | DevZore",
  };

  const title = projectShortTitles[project.slug] || `${project.title} Case Study | DevZore`;
  const description = `Read how DevZore built ${project.title}, a ${project.systemType} using ${project.technologies.slice(0, 3).join(", ")} for clients in ${project.location}.`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: `https://devzore.com/projects/${project.slug}`,
    image: "https://devzore.com/logo.png",
    author: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    publisher: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
      logo: {
        "@type": "ImageObject",
        url: "https://devzore.com/logo.png",
      },
    },
    datePublished: "2026-01-15T00:00:00Z",
    dateModified: "2026-03-20T00:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://devzore.com/projects/${project.slug}`,
    },
    about: {
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: project.category,
      operatingSystem: "Web",
    },
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
        name: "Case Studies",
        item: "https://devzore.com/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://devzore.com/projects/${project.slug}`,
      },
    ],
  };

  const whatsappUrl = `https://wa.me/923348004300?text=Hi%20DevZore,%20I%20reviewed%20your%20${encodeURIComponent(project.title)}%20case%20study%20and%20want%20to%20discuss%20a%20similar%20project.`;

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={`https://devzore.com/projects/${project.slug}`}
        schema={[articleSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0796A8]/20 selection:text-[#071923]">
        {/* ========================================================================= */}
        {/* SECTION 1: HEADER HERO (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-12 sm:pb-16 bg-[#04111a] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[10%] w-[500px] h-[500px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 right-[5%] w-[420px] h-[420px] rounded-full bg-[#20bdcb]/8 blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            {/* Back link & Breadcrumbs */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1BBAC8] hover:text-white transition"
              >
                <FiArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Case Studies</span>
              </Link>

              <nav aria-label="Breadcrumb" className="flex items-center text-xs text-slate-400 space-x-2">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <Link to="/projects" className="hover:text-white transition">Case Studies</Link>
                <span>/</span>
                <span className="text-slate-200 truncate max-w-[200px]">{project.title}</span>
              </nav>
            </div>

            {/* Header facts pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[13px] font-semibold tracking-wide bg-white/[0.08] text-[#22bdca] border border-white/[0.12] mb-4">
              <FiLayers className="w-3.5 h-3.5" />
              <span>{project.headerFacts}</span>
            </div>

            {/* EXACTLY ONE H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-[1.12]">
              {project.title} — <span className="text-[#22bdca]">{project.systemType}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
              {project.description}
            </p>

            {/* PROJECT PROFILE AT A GLANCE (6-FIELD GRID) */}
            <div className="rounded-2xl bg-[#09202c]/90 border border-white/10 backdrop-blur-sm p-5 sm:p-6 shadow-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-[#22bdca] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1BBAC8]" />
                Project Profile at a Glance
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Client</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-1 truncate">{project.client || project.title}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Industry</p>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-300 mt-1 truncate">{project.industry}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-1 flex items-center gap-1">
                    <FiMapPin className="w-3 h-3 text-[#1BBAC8]" /> {project.location}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Services Delivered</p>
                  <Link
                    to={project.serviceSlug}
                    className="text-xs sm:text-sm font-semibold text-[#1BBAC8] hover:underline mt-1 block truncate"
                  >
                    {project.serviceName}
                  </Link>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Tech Stack</p>
                  <p className="text-xs font-semibold text-slate-200 mt-1 truncate">
                    {project.technologies.slice(0, 3).join(", ")}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Delivery Model</p>
                  <p className="text-xs font-semibold text-white mt-1 truncate">
                    {project.deliveryType || "Full-source handover"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: VISUAL PREVIEW & THE BUSINESS CHALLENGE (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
              {/* HERO IMAGE */}
              {project.image && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#04111a] shadow-[0_20px_50px_rgba(7,25,35,0.08)]">
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview - ${project.systemType}`}
                    className="w-full h-auto object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    width="1200"
                    height="750"
                  />
                </div>
              )}

              {/* THE CHALLENGE */}
              <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-6 sm:p-8">
                <SectionLabel>The Business Challenge</SectionLabel>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] mb-4 tracking-tight">
                  Operational Roadblocks Faced by the Business
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {project.problem}
                </p>

                {/* Specific Challenges */}
                <div className="space-y-3 pt-4 border-t border-slate-200/60">
                  {project.challenges &&
                    project.challenges.map((c, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-xs mt-0.5">
                          ✕
                        </span>
                        <span className="leading-relaxed">{c}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: SYSTEM ARCHITECTURE & MODULES (LIGHT SLATE WITH SUBTLE GRID) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#f7f9fa] border-b border-slate-200" style={lightGrid}>
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionLabel>What DevZore Built</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                Module-by-Module <span className="text-[#0796A8]">System Architecture</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                A purpose-built full-stack solution replacing ad-hoc workarounds with centralized, verified business modules:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.modules &&
                project.modules.map((m, idx) => (
                  <article
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)] hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf4f5] text-[#07899a] group-hover:bg-[#071923] group-hover:text-[#28c5d4] transition-colors mb-4">
                        <FiBox className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-[#071923] mb-2">{m.name}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.description}</p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: THE BUSINESS OUTCOME (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative py-14 sm:py-18 bg-[#071923] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
            <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-[#072421] to-[#071923] p-7 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                The Business Outcome
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Measurable <span className="text-emerald-400">Operational Transformation</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {project.outcomeNarrative}
              </p>

              {/* LIVE PLATFORM LINK (IF ACTIVE) */}
              {project.liveUrl && (
                <div className="mt-8 pt-6 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-[13px] font-bold uppercase tracking-wider text-emerald-400">
                      Live Production Deployment
                    </div>
                    <div className="text-xs text-slate-300">Explore the verified active software instance.</div>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#071923] text-xs font-bold transition shadow-lg shadow-emerald-500/20"
                  >
                    <span>Visit Live Platform</span>
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: TECH STACK & DELIVERABLES (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Technology Stack & Deliverables */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-[#f8fafb]">
                <SectionLabel>Technology Architecture</SectionLabel>
                <h3 className="text-lg font-bold text-[#071923] mb-4 flex items-center gap-2">
                  <FiCode className="w-4 h-4 text-[#0796A8]" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                  <FiShield className="w-4 h-4 text-[#0796A8]" />
                  Engineering Deliverables
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {project.deliverables &&
                    project.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#0796A8] font-bold mt-0.5">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Service Cross-Link & Consultation */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between h-full">
                <div>
                  <SectionLabel>Matching Service</SectionLabel>
                  <h3 className="text-xl font-bold text-[#071923] mb-3">Build a Similar Platform</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Want an operational {project.industry} system tailored around your exact warehouse, billing, or reservation workflow? Speak directly with our lead software engineers.
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <Link
                    to={project.serviceSlug}
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-[#0796A8] hover:bg-[#1BBAC8] text-white font-bold text-xs sm:text-sm transition shadow-md shadow-[#0796A8]/20"
                  >
                    <span>Explore {project.serviceName}</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] font-bold text-xs sm:text-sm transition shadow-md shadow-[#25D366]/20"
                  >
                    <FiMessageSquare className="w-4 h-4" />
                    <span>Discuss Similar System on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: MORE SOFTWARE CASE STUDIES (LIGHT SLATE WITH SUBTLE GRID) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#f7f9fa] border-b border-slate-200" style={lightGrid}>
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <SectionLabel>Portfolio</SectionLabel>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                  More Software <span className="text-[#0796A8]">Case Studies</span>
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-xs sm:text-sm font-bold text-[#0796A8] hover:text-[#071923] transition flex items-center gap-1.5"
              >
                <span>View all verified case studies</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/projects/${rel.slug}`}
                  className="group p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#0796A8] mb-1.5">
                      {rel.category}
                    </div>
                    <h3 className="text-base font-bold text-[#071923] group-hover:text-[#0796A8] transition">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {rel.teaser || rel.description}
                    </p>
                  </div>
                  <div className="flex items-center text-xs font-bold text-[#0796A8] mt-5 pt-3 border-t border-slate-100">
                    <span>Read Case Study</span>
                    <FiArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: PROJECT BRIEF CTA (DARK NAVY ANCHOR) */}
        {/* ========================================================================= */}
        <section id="system-form" className="py-16 px-4 sm:px-6 bg-[#06151d] text-white">
          <div className="max-w-5xl mx-auto">
            <ProjectBriefCTA
              serviceContext={`${project.title} (${project.serviceName})`}
              title={`Ready to Build a System Like ${project.title}?`}
              subtitle="Discuss your business requirements, architecture, and milestone delivery timeline with our senior engineering team."
            />
          </div>
        </section>
      </div>
    </>
  );
}
