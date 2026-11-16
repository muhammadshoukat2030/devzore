import React from "react";
import { CheckCircle2, ShieldCheck, Globe, Code2, Headphones } from "lucide-react";

/**
 * Factual Stats Strip for DevZore
 * Uses ONLY verified business facts:
 * - 120+ Projects Completed
 * - 20 Core Services
 * - Clients in Pakistan & Qatar (Remote Delivery)
 * - 100% source code handover
 * - Post-Launch Support
 */
export default function StatsStrip({ className = "" }) {
  const stats = [
    {
      icon: <Code2 size={20} className="text-[#1BBAC8]" />,
      value: "120+",
      label: "Projects Completed",
      detail: "Web, mobile & SaaS platforms",
    },
    {
      icon: <CheckCircle2 size={20} className="text-[#1BBAC8]" />,
      value: "20",
      label: "Core Services",
      detail: "Full-stack engineering & AI",
    },
    {
      icon: <Globe size={20} className="text-[#1BBAC8]" />,
      value: "PK & QA",
      label: "Regional Clients",
      detail: "Remote delivery worldwide",
    },
    {
      icon: <ShieldCheck size={20} className="text-[#1BBAC8]" />,
      value: "100%",
      label: "Code Handover",
      detail: "Zero vendor lock-in",
    },
    {
      icon: <Headphones size={20} className="text-[#1BBAC8]" />,
      value: "Reliable",
      label: "Post-Launch Support",
      detail: "Warranty & maintenance",
    },
  ];

  return (
    <section
      aria-label="DevZore Key Statistics"
      className={`border-y border-white/[0.08] bg-[#05141c]/90 py-8 backdrop-blur-sm ${className}`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.03]"
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#071923] border border-cyan-500/20 shadow-inner">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
