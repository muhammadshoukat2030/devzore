import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { featuredInsights } from "../data/featuredInsights";

const FeaturedInsights = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="featured-insights-heading"
      className="py-12 sm:py-16 bg-[#061923] text-white border-y border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1bbac8]">
              <Sparkles size={12} className="text-[#1bbac8]" />
              <span>DevZore Engineering Knowledge</span>
            </div>
            <h2
              id="featured-insights-heading"
              className="mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-white"
            >
              Featured Insights & Architecture Guides
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Practical guides written by senior engineers on scaling web products, SaaS platforms, and AI integrations:
            </p>
          </div>
          <Link
            to="/blog"
            onClick={scrollTop}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition shrink-0"
          >
            <span>Explore all articles</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 3 INSIGHT CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredInsights.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-[13px] text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-[#1bbac8] font-bold text-xs uppercase tracking-wider border border-cyan-500/20">
                    {item.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock size={11} />
                    {item.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#1bbac8] transition tracking-tight">
                  <Link to={item.slug} onClick={scrollTop}>
                    {item.title}
                  </Link>
                </h3>

                <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-300 line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <Link
                  to={item.slug}
                  onClick={scrollTop}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] group-hover:text-white transition"
                >
                  <span>Read Guide</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
