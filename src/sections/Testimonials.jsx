import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote, Star, ExternalLink } from "lucide-react";
import { testimonials, GOOGLE_REVIEW_LINK } from "../data/testimonials";

// ======================================================
// REVIEWS & TESTIMONIALS PIPELINE (WORKSTREAM ITEM 3)
// Driven strictly from src/data/testimonials.js.
// Stays completely hidden when testimonials array is empty.
//
// NOTE: Do NOT add Schema.org Review or AggregateRating structured data
// until real reviews are actively displayed on the site.
// ======================================================

const TestimonialsContent = () => {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const currentTestimonials = testimonials.slice(
    page * perPage,
    page * perPage + perPage
  );

  useEffect(() => {
    if (paused || totalPages <= 1) return;

    timerRef.current = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(timerRef.current);
  }, [paused, totalPages]);

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-16 sm:py-20 bg-[#061923] text-white relative overflow-hidden border-t border-white/[0.08]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1bbac8]">
              <Star size={12} className="text-[#1bbac8] fill-[#1bbac8]" />
              <span>Verified Client Feedback</span>
            </div>
            <h2
              id="testimonials-heading"
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
            >
              Client Reviews & Feedback
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-xl">
              Real feedback from founders, product teams, and businesses we have engineered software for:
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* OPTIONAL GOOGLE REVIEW BUTTON */}
            {GOOGLE_REVIEW_LINK && (
              <a
                href={GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-[13px] font-bold text-[#1bbac8] hover:bg-cyan-400/20 transition"
              >
                <span>Review DevZore on Google</span>
                <ExternalLink size={12} />
              </a>
            )}

            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous reviews"
                  className="p-2 rounded-lg border border-white/[0.1] bg-white/[0.03] text-slate-300 hover:text-white hover:border-[#1bbac8] transition"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next reviews"
                  className="p-2 rounded-lg border border-white/[0.1] bg-white/[0.03] text-slate-300 hover:text-white hover:border-[#1bbac8] transition"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentTestimonials.map((item, index) => (
            <article
              key={index}
              className="flex flex-col justify-between p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating || 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                  {item.source && (
                    <span className="text-xs font-semibold text-slate-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                      {item.source} Review
                    </span>
                  )}
                </div>

                <Quote size={24} className="text-[#1bbac8]/40 mb-3" />

                <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">
                    {item.personName}
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role ? `${item.role}, ` : ""}{item.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-white/[0.03] to-cyan-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-white">
              Have a project you would like to discuss?
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Tell us what you need and our senior engineers will map out the solution.
            </p>
          </div>
          <Link
            to="/contact"
            onClick={scrollTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white text-xs font-bold transition shadow-lg shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  // Stays completely hidden when testimonials data is empty
  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  return <TestimonialsContent />;
};

export default Testimonials;
