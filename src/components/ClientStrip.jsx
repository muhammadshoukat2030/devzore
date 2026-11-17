import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { clients } from "../data/clients";

const ClientStrip = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      aria-label="Systems Engineered for Real Businesses"
      className="bg-[#05141c] text-white py-10 sm:py-12 border-y border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1bbac8]">
              <CheckCircle2 size={13} className="text-[#1bbac8]" />
              <span>Production Proven Systems</span>
            </div>
            <h2 className="mt-1.5 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
              Systems Engineered for Real Businesses
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Active platforms delivered and running for retail, logistics, tourism, and credit operations:
            </p>
          </div>
          <Link
            to="/projects"
            onClick={scrollTop}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition shrink-0"
          >
            <span>Explore all case studies</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* CLIENT BADGES / LOGOS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {clients.map((client) => {
            const hasLogo = client.logoFile && client.logoApproved;

            return (
              <Link
                key={client.name}
                to={client.caseStudyUrl}
                onClick={scrollTop}
                className="group flex flex-col items-center justify-center p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#1bbac8]/40 transition-all duration-300 min-h-[92px] text-center"
              >
                {hasLogo ? (
                  <img
                    src={client.logoFile}
                    alt={`${client.name} logo`}
                    className="max-h-8 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition duration-300"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#1bbac8] transition tracking-tight">
                      {client.name}
                    </div>
                    <div className="mt-1 text-xs text-slate-400 font-medium line-clamp-1">
                      {client.industry}
                    </div>
                  </>
                )}
                <span className="mt-2 text-xs font-semibold text-[#1bbac8]/70 group-hover:text-[#1bbac8] transition flex items-center gap-0.5 opacity-0 group-hover:opacity-100">
                  <span>View Case Study</span>
                  <ArrowRight size={10} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientStrip;
