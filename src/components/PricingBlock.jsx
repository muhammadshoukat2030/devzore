import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Clock } from "lucide-react";

/**
 * Service Page Pricing Block
 * Hard Rule 2 Compliant:
 * - Never fabricates fake prices.
 * - Exact amounts are hidden behind [OWNER INPUT NEEDED] placeholders until real pricing tiers are set.
 * - Focuses on transparent milestone-based scoping and custom quote requests.
 */

// =========================================================================
// [OWNER INPUT NEEDED: Set SHOW_PRICING_AMOUNTS = true and set real rates]
// e.g. starter: "$1,500+", professional: "$3,500+", enterprise: "Custom"
// =========================================================================
const SHOW_PRICING_AMOUNTS = false;

export default function PricingBlock({
  serviceName = "Software Development",
  tiers = [
    {
      name: "Starter / MVP",
      scope: "Essential core features, rapid market validation, and lean architecture.",
      startingFromPlaceholder: "[OWNER INPUT NEEDED: e.g. $1,500+]",
      timeline: "2–4 Weeks",
      deliverables: [
        "Core feature implementation",
        "Clean, responsive UI/UX",
        "Secure database & authentication",
        "Full source code handover",
        "30-day post-launch warranty",
      ],
      recommended: false,
    },
    {
      name: "Business Core",
      scope: "Full-scale business web app, custom portal, or integrated SaaS product.",
      startingFromPlaceholder: "[OWNER INPUT NEEDED: e.g. $3,500+]",
      timeline: "4–8 Weeks",
      deliverables: [
        "Advanced workflows & business logic",
        "Third-party API & payment integrations",
        "Role-based access & admin dashboard",
        "Automated CI/CD cloud deployment",
        "60-day post-launch warranty & support",
      ],
      recommended: true,
    },
    {
      name: "Enterprise / Custom",
      scope: "Complex multi-tenant platforms, high-volume systems, or custom integrations.",
      startingFromPlaceholder: "[OWNER INPUT NEEDED: e.g. $7,000+ / Custom]",
      timeline: "8–12+ Weeks",
      deliverables: [
        "High-availability architecture",
        "Custom database schema & indexing",
        "Enterprise security & data encryption",
        "Dedicated DevOps & monitoring setup",
        "Ongoing maintenance SLA available",
      ],
      recommended: false,
    },
  ],
}) {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="py-14 sm:py-20 bg-[#071923] text-white border-y border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0796A8]/10 blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#1bbac8]">
            <ShieldCheck size={13} />
            Transparent Project Scoping
          </div>
          <h2
            id="pricing-heading"
            className="mt-3 text-[28px] sm:text-[36px] font-bold text-white tracking-tight leading-tight"
          >
            {serviceName} Pricing & Scope
          </h2>
          <p className="mt-3 text-[13px] sm:text-[14px] text-slate-300 leading-relaxed">
            Every project has unique requirements. We scope deliverables with transparent milestones and zero hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                tier.recommended
                  ? "bg-[#0c2635] border-2 border-[#1bbac8] shadow-[0_20px_50px_rgba(7,150,168,0.25)] relative"
                  : "bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15]"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#1bbac8] text-[#061923] text-xs font-extrabold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{tier.name}</h3>
                <p className="mt-2 text-[12px] text-slate-400 leading-relaxed min-h-[40px]">
                  {tier.scope}
                </p>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-white/[0.08]">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Investment Scope
                  </div>
                  {SHOW_PRICING_AMOUNTS ? (
                    <div className="mt-1 text-2xl font-black text-white">
                      {tier.startingFromPlaceholder}
                    </div>
                  ) : (
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-extrabold text-[#1bbac8]">
                        Custom Estimate
                      </span>
                      <span className="text-[13px] text-slate-400">/ milestone based</span>
                    </div>
                  )}

                  <div className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-slate-300">
                    <Clock size={13} className="text-[#1bbac8]" />
                    <span>Typical delivery: {tier.timeline}</span>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="mt-5 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    What's Included:
                  </div>
                  {tier.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[12px] text-slate-200">
                      <CheckCircle2 size={14} className="text-[#1bbac8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-white/[0.08] space-y-2.5">
                <a
                  href={`https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20pricing%20and%20scope%20for%20${encodeURIComponent(
                    serviceName + " (" + tier.name + ")"
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-4 rounded-lg font-bold text-[12px] inline-flex items-center justify-center gap-2 transition ${
                    tier.recommended
                      ? "bg-[#1bbac8] hover:bg-[#159da9] text-[#061923]"
                      : "bg-white/[0.08] hover:bg-white/[0.15] text-white"
                  }`}
                >
                  <MessageSquare size={14} />
                  Discuss on WhatsApp
                </a>

                <Link
                  to="/contact"
                  className="w-full py-2 px-4 rounded-lg text-slate-400 hover:text-white text-[13px] font-medium inline-flex items-center justify-center gap-1.5 transition"
                >
                  <span>Request Written Proposal</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-12 text-center text-slate-400 text-[12px] flex items-center justify-center gap-2">
          <ShieldCheck size={16} className="text-[#1bbac8]" />
          <span>All proposals include 100% source code handover, zero vendor lock-in, and warranty support.</span>
        </div>
      </div>
    </section>
  );
}
