import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Mail, Sparkles, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      aria-label="Start Your Project With DevZore"
      className="relative overflow-hidden py-16 sm:py-20 bg-[#040e14] border-t border-white/[0.08]"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/[0.07] rounded-full blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[13px] font-bold tracking-wider uppercase text-[#1bbac8]">
            <Sparkles size={12} />
            <span>Ready to Build or Scale?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Have a project in mind?{" "}
            <span className="text-[#1bbac8]">Let&apos;s talk.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            DevZore is a Pakistan-based software development company delivering custom web apps, mobile applications, SaaS platforms and AI solutions to clients worldwide. Speak directly with senior engineers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/923348004300?text=Hi%20DevZore,%20I%20would%20like%20to%20get%20a%20free%20consultation%20on%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#06101a] font-bold text-sm sm:text-base shadow-[0_10px_35px_rgba(37,211,102,0.25)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageSquare size={18} />
              <span>Free Consultation on WhatsApp</span>
            </a>

            <Link
              to="/contact"
              onClick={scrollTop}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:border-cyan-400/60 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <Mail size={18} className="text-[#1bbac8]" />
              <span>Send Project Inquiry</span>
              <ArrowRight size={16} className="text-[#1bbac8] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick trust highlights */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#1bbac8]" /> Direct Engineering Team
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#1bbac8]" /> 100% Source Code Handover
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#1bbac8]" /> Delivery Worldwide (PK, QA & Global)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
