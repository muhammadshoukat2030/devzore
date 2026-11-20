import React, { useRef, useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck, Globe, Code2, Headphones } from "lucide-react";

/**
 * Animated Stat with requestAnimationFrame & IntersectionObserver.
 * SSR-safe: renders target value statically in pre-rendered HTML for search engines.
 * Runs once on scroll, respects prefers-reduced-motion.
 */
function CountUpStat({ value, numeric, suffix = "" }) {
  const ref = useRef(null);
  // Default to final value so SSR / static prerender always contains the full text (e.g. "180+")
  const [displayValue, setDisplayValue] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!numeric || hasAnimated.current) return;
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) return;

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            observer.disconnect();

            const duration = 1400; // ms
            const startTime = performance.now();

            const step = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(easeProgress * numeric);
              setDisplayValue(`${current}${suffix}`);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue(`${numeric}${suffix}`);
              }
            };

            setDisplayValue(`0${suffix}`);
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numeric, suffix, value]);

  return (
    <div ref={ref} className="text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
      {displayValue}
    </div>
  );
}

/**
 * Factual Stats Strip for DevZore
 * Uses verified business facts:
 * - 180+ Projects Delivered (Owner-confirmed)
 * - 20 Core Services
 * - Clients in Pakistan & Qatar (Remote Delivery)
 * - 100% source code handover
 * - Post-Launch Support
 */
export default function StatsStrip({ className = "" }) {
  const stats = [
    {
      icon: <Code2 size={20} className="text-[#1BBAC8]" />,
      value: "180+",
      numeric: 180,
      suffix: "+",
      label: "Projects Delivered",
      detail: "Web, mobile & SaaS systems",
    },
    {
      icon: <CheckCircle2 size={20} className="text-[#1BBAC8]" />,
      value: "20",
      numeric: 20,
      suffix: "",
      label: "Core Services",
      detail: "Full-stack engineering & AI",
    },
    {
      icon: <Globe size={20} className="text-[#1BBAC8]" />,
      value: "Pakistan & Qatar",
      label: "Active Client Base",
      detail: "Remote delivery worldwide",
    },
    {
      icon: <ShieldCheck size={20} className="text-[#1BBAC8]" />,
      value: "100%",
      numeric: 100,
      suffix: "%",
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
                <CountUpStat
                  value={stat.value}
                  numeric={stat.numeric}
                  suffix={stat.suffix}
                />
                <div className="text-xs sm:text-sm font-bold text-slate-200 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[13px] text-slate-400 mt-0.5">
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
