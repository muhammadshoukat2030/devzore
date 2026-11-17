import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  FiCheckCircle,
  FiExternalLink,
  FiArrowRight,
  FiArrowLeft,
  FiCode,
  FiLayers,
  FiClock,
  FiMapPin,
  FiMessageSquare,
  FiMail,
  FiBox,
  FiShield,
} from "react-icons/fi";
import { projectsData } from "../data/projectsData";
import SEO from "../components/SEO";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projectsData
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const projectShortTitles = {
    "weldon-paints": "Weldon Paints Case Study | POS & Stock System | DevZore",
    "sarab-express": "Sarab Express Case Study | Delivery & Logistics | DevZore",
    "desert-safari-qatar": "Desert Safari Qatar Case Study | Tourism Booking | DevZore",
    "gulf-dunes-tourism": "Gulf Dunes Tourism Case Study | Excursion Portal | DevZore",
    frostyops: "FrostyOps Case Study | Route Logistics ERP | DevZore",
    "installment-management": "Installment Management Case Study | Credit System | DevZore",
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
    <div className="bg-[#071923] text-white min-h-screen">
      <SEO
        title={title}
        description={description}
        canonical={`https://devzore.com/projects/${project.slug}`}
        schema={[articleSchema, breadcrumbSchema]}
      />

      {/* HEADER HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20 border-b border-white/[0.08]">
        {/* Ambient glows */}
        <div className="absolute -top-32 left-[10%] w-[500px] h-[500px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
          {/* Back link & Breadcrumb */}
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

          {/* ITEM 3: HEADER FACTS LINE */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[13px] font-semibold tracking-wide bg-cyan-950/80 text-[#1BBAC8] border border-cyan-700/40 mb-4">
            <FiLayers className="w-3.5 h-3.5" />
            <span>{project.headerFacts}</span>
          </div>

          {/* EXACTLY ONE H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-[1.12]">
            {project.title} — {project.systemType}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            {project.description}
          </p>

          {/* AT A GLANCE (DEVSINC BLUEPRINT: 6-FIELD PROJECT PROFILE) */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm p-5 sm:p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1BBAC8] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1BBAC8]" />
              Project Profile at a Glance
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Client</p>
                <p className="text-xs sm:text-sm font-semibold text-white mt-1 truncate">{project.client || project.title}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Industry</p>
                <p className="text-xs sm:text-sm font-semibold text-cyan-300 mt-1 truncate">{project.industry}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</p>
                <p className="text-xs sm:text-sm font-semibold text-white mt-1 flex items-center gap-1">
                  <FiMapPin className="w-3 h-3 text-[#1BBAC8]" /> {project.location}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Services Delivered</p>
                <Link
                  to={project.serviceSlug}
                  className="text-xs sm:text-sm font-semibold text-[#1BBAC8] hover:underline mt-1 block truncate"
                >
                  {project.serviceName}
                </Link>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Tech Stack</p>
                <p className="text-xs font-semibold text-slate-200 mt-1 truncate">
                  {project.technologies.slice(0, 3).join(", ")}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Delivery Model</p>
                <p className="text-xs font-semibold text-white mt-1 truncate">
                  {project.deliveryType || "Full-source handover"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-14 sm:py-18 px-5 sm:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Main Body (2 cols) */}
          <div className="lg:col-span-2 space-y-12">
            {/* HERO IMAGE */}
            {project.image && (
              <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#04111a] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src={project.image}
                  alt={`${project.title} interface preview - ${project.systemType}`}
                  className="w-full h-auto object-cover object-top"
                  loading="eager"
                  width="1200"
                  height="750"
                />
              </div>
            )}

            {/* ITEM 3: THE CHALLENGE (2-4 SPECIFIC PROBLEMS) */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1BBAC8] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#1BBAC8]" />
                The Business Challenge
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Operational Roadblocks Faced by the Business
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {project.problem}
              </p>

              {/* Specific Bullet Points */}
              <div className="space-y-3 pt-2 border-t border-white/[0.06]">
                {project.challenges && project.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 font-bold text-xs mt-0.5">
                      ✕
                    </span>
                    <span className="leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ITEM 3: WHAT WE BUILT (MODULE-BY-MODULE FEATURE BREAKDOWN) */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1BBAC8]">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                What DevZore Built
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Module-by-Module System Architecture
              </h2>
              <p className="text-sm text-slate-300">
                A purpose-built full-stack solution replacing ad-hoc workarounds with centralized, verified business modules:
              </p>

              <div className="space-y-3.5 mt-4">
                {project.modules && project.modules.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-[#061923] hover:border-cyan-500/30 transition"
                  >
                    <div className="flex items-start gap-3">
                      <FiBox className="w-5 h-5 text-[#1BBAC8] shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {m.name}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ITEM 3: THE OUTCOME (QUALITATIVE BEFORE/AFTER + HIDDEN SLOTS) */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                The Business Outcome
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Measurable Operational Transformation
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {project.outcomeNarrative}
              </p>

              {/* HIDDEN OWNER INPUT NEEDED SLOT (Strictly no invented numbers) */}
              {/* {project.resultsPlaceholder} */}

              {/* LIVE PLATFORM LINK (WHERE IT EXISTS) */}
              {project.liveUrl && (
                <div className="mt-6 pt-5 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-[13px] font-bold uppercase tracking-wider text-emerald-400">Live Production Deployment</div>
                    <div className="text-xs text-slate-300">Explore the verified active software instance.</div>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#071923] text-xs font-bold transition shadow-lg shadow-emerald-500/20"
                  >
                    <span>Visit Live Platform</span>
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* CONDITIONAL TESTIMONIAL SLOT (100% HIDDEN UNLESS REAL QUOTE SUPPLIED) */}
            {project.clientQuote && (
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1BBAC8] mb-2">
                  Client Feedback
                </div>
                <blockquote className="text-sm sm:text-base italic text-slate-200 leading-relaxed">
                  "{project.clientQuote.quote}"
                </blockquote>
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{project.clientQuote.author}</div>
                    <div className="text-slate-400">{project.clientQuote.role}, {project.client}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR (1 col) */}
          <div className="space-y-6">
            {/* TECH STACK & DELIVERABLES */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#061923]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1BBAC8] mb-4 flex items-center gap-2">
                <FiCode className="w-4 h-4" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/[0.05] border border-white/[0.08] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <FiShield className="w-3.5 h-3.5 text-cyan-400" />
                Engineering Deliverables
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.deliverables && project.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#1BBAC8] font-bold">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICE CROSS-LINK & CTA CARD */}
            <div className="p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#08222f] to-[#061923] relative overflow-hidden">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1BBAC8] mb-1">
                Matching Service
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Build a Similar Platform</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Want a {project.industry} system like this? Talk to the lead engineer on WhatsApp.
              </p>
              <Link
                to={project.serviceSlug}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#0796A8] hover:bg-[#1BBAC8] text-white font-bold text-xs transition mb-2.5 shadow-md shadow-[#0796A8]/30"
              >
                <span>Explore {project.serviceName}</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 text-white font-bold text-xs transition"
              >
                <FiMessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>

            {/* DIRECT CONTACT */}
            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <h4 className="text-xs font-bold text-white mb-1.5">Direct Engineering Delivery</h4>
              <p className="text-[13px] text-slate-400 mb-3 leading-relaxed">
                We partner with founders in Pakistan, Qatar and worldwide with 100% source code handover and post-launch support.
              </p>
              <div className="space-y-1.5 text-xs">
                <a
                  href="mailto:hellodevzore@gmail.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#1BBAC8] transition font-medium"
                >
                  <FiMail className="w-3.5 h-3.5 text-[#1BBAC8]" />
                  <span>hellodevzore@gmail.com</span>
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-1.5 text-[#1BBAC8] hover:underline font-bold pt-1"
                >
                  <span>Submit Project Scope Form</span>
                  <FiArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED CASE STUDIES */}
        <div className="mt-16 pt-10 border-t border-white/[0.08]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">
              More Software Case Studies
            </h2>
            <Link
              to="/projects"
              className="text-xs font-bold text-[#1BBAC8] hover:text-white transition flex items-center gap-1"
            >
              View all 6 case studies <FiArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                to={`/projects/${rel.slug}`}
                className="group p-5 rounded-xl border border-white/[0.08] bg-[#061923] hover:border-cyan-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1BBAC8] mb-1">
                    {rel.category}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#1BBAC8] transition">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {rel.teaser || rel.description}
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold text-[#1BBAC8] mt-4 pt-3 border-t border-white/[0.04]">
                  <span>Read Case Study</span>
                  <FiArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
