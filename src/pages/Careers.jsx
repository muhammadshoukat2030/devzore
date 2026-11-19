import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Globe,
  Mail,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";
import { careers } from "../data/careers";

const Careers = () => {
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
        name: "Careers",
        item: "https://devzore.com/careers",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Careers at DevZore | Engineering & Technology Roles"
        description="Explore engineering careers at DevZore. Build modern web applications, SaaS platforms, and operational systems for clients in Pakistan, Qatar and worldwide."
        canonical="/careers"
        schema={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-[#071923] text-white antialiased">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-23 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 border-b border-white/[0.08]">
          <div className="absolute -top-32 left-[10%] w-[500px] h-[500px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />

          <div className="relative max-w-[1260px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[13px] font-bold tracking-wider uppercase text-[#1bbac8]">
                <Sparkles size={12} />
                <span>Join Our Engineering Team</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Build production software with{" "}
                <span className="text-[#1bbac8]">DevZore</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                We are an engineering-driven software development company building full-stack web applications, SaaS products, and custom operational platforms for businesses in Pakistan, Qatar, and internationally.
              </p>
            </div>
          </div>
        </section>

        {/* OPEN ROLES OR HONEST EMPTY STATE */}
        <section className="py-14 sm:py-18 max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Open Positions
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Current opportunities to build software with DevZore:
            </p>
          </div>

          {careers && careers.length > 0 ? (
            <div className="grid gap-4">
              {careers.map((role) => (
                <article
                  key={role.id || role.title}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/40 transition flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-cyan-500/15 text-[#1bbac8] border border-cyan-500/30">
                        {role.type}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Globe size={12} /> {role.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {role.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                      {role.description}
                    </p>

                    {role.stack && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {role.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs font-semibold bg-white/[0.05] text-slate-300 border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href={`mailto:${role.applyEmail || "hellodevzore@gmail.com"}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white text-xs font-bold transition shadow-lg shrink-0"
                  >
                    <span>Apply via Email</span>
                    <Send size={13} />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12 text-center max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">
                No Open Roles Right Now
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                We are not actively hiring for specific open positions at this moment. However, if you are a skilled React, Node.js, or full-stack software engineer who takes pride in clean code, we would love to review your portfolio.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:hellodevzore@gmail.com?subject=General%20Application%20-%20Software%20Engineer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white text-xs font-bold transition shadow-md"
                >
                  <Mail size={14} />
                  <span>Send Your CV to hellodevzore@gmail.com</span>
                </a>
              </div>
            </div>
          )}
        </section>

        {/* WORKING AT DEVZORE (FACT-BASED REAL CULTURE) */}
        <section className="py-14 sm:py-18 bg-[#05141c] border-t border-white/[0.08]">
          <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-10">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Engineering Culture
              </div>
              <h2 className="mt-1.5 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Working at DevZore
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                What daily engineering collaboration looks like on our team:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Code2 size={20} />
                </div>
                <h3 className="text-base font-bold text-white">Engineering-First Environment</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Work directly under founder and senior lead engineering without bureaucratic layers, non-technical project managers, or arbitrary deadlines.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Users size={20} />
                </div>
                <h3 className="text-base font-bold text-white">Real Production Software</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Build systems deployed for real operational companies across retail, logistics, tourism, and consumer finance in Pakistan, Qatar, and international markets.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Globe size={20} />
                </div>
                <h3 className="text-base font-bold text-white">Remote-Friendly Autonomy</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Clear asynchronous communication over Slack, GitHub, and WhatsApp. Focus on clean code, testable APIs, and measurable milestone delivery.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
