import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageSquare,
  Send,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Globe2,
  Lock,
  ArrowRight,
} from "lucide-react";
import { trackWhatsAppClick, trackLeadSubmission } from "../utils/analytics";

export default function ProjectBriefCTA({
  title = "Ready to Build or Modernize Your Software?",
  subtitle = "Discuss your project scope, technical approach, and pricing with our senior engineers.",
  serviceContext = "General",
  className = "",
}) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    country: "Qatar",
    budget: "$3k - $10k",
    timeline: "1 - 2 Months",
    brief: "",
  });

  const whatsappMessage = encodeURIComponent(
    `Hi DevZore, I would like to discuss a ${serviceContext} software project for my business.`
  );
  const whatsappUrl = `https://wa.me/923348004300?text=${whatsappMessage}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    trackLeadSubmission("project_brief_form", {
      service: serviceContext,
      country: formData.country,
      budget: formData.budget,
      timeline: formData.timeline,
    });

    // Save lead details to localStorage so Contact/ThankYou can reference it if needed
    try {
      localStorage.setItem("lastLeadSubmission", JSON.stringify({ ...formData, serviceContext, date: new Date().toISOString() }));
    } catch {}

    setTimeout(() => {
      setSubmitting(false);
      navigate("/thank-you");
    }, 400);
  };

  return (
    <section
      aria-labelledby="brief-cta-heading"
      className={`relative overflow-hidden py-16 sm:py-20 bg-[#030d14] text-white border-t border-white/[0.08] ${className}`}
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/[0.06] rounded-full blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Value Proposition & Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
              <Clock size={12} />
              <span>Response within 2–4 hours</span>
            </div>

            <h2
              id="brief-cta-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug"
            >
              {title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {subtitle}
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`brief_cta_${serviceContext}`)}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#06101a] font-bold text-sm shadow-[0_10px_30px_rgba(37,211,102,0.22)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageSquare size={18} />
                <span>Quick Discussion on WhatsApp</span>
              </a>

              <p className="text-center text-xs text-slate-400">
                Direct engineer chat • +92 334 8004300 • Qatar & International
              </p>
            </div>

            {/* Factual Commitments */}
            <div className="pt-6 border-t border-white/[0.08] space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#1bbac8] shrink-0" />
                <span>100% full source code ownership & repository transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#1bbac8] shrink-0" />
                <span>Mutual Non-Disclosure Agreement (NDA) on request</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 size={14} className="text-[#1bbac8] shrink-0" />
                <span>Seamless remote delivery across GCC, UK, North America & PK</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Request an Engineering Consultation
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Share high-level details. We will review and provide a structured scope outline.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                  <Lock size={12} className="text-emerald-400" />
                  <span>Confidential</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name or Company <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan / Al-Noor Logistics"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email or WhatsApp Number <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. alex@company.com or +974 ..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Target Market / Country
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-white/10 bg-[#081b26] text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition"
                    >
                      <option value="Qatar">Qatar (GCC)</option>
                      <option value="UAE / Saudi / GCC">UAE / Saudi / GCC</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Other International">Other International</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-white/10 bg-[#081b26] text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition"
                    >
                      <option value="$1.5k - $3k">$1,500 – $3,000</option>
                      <option value="$3k - $10k">$3,000 – $10,000</option>
                      <option value="$10k - $25k">$10,000 – $25,000</option>
                      <option value="$25k+">$25,000+</option>
                      <option value="Flexible / Exploring">Flexible / Exploring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-white/10 bg-[#081b26] text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition"
                    >
                      <option value="Urgent (2-4 weeks)">Urgent (2–4 weeks)</option>
                      <option value="1 - 2 Months">1 – 2 Months</option>
                      <option value="3 - 6 Months">3 – 6 Months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Requirements / Summary
                  </label>
                  <textarea
                    rows={3}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder="Describe what you want to build (e.g. multi-tenant SaaS, inventory ERP, mobile app, API integration)..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0d6e82] via-[#0796A8] to-[#1bbac8] hover:brightness-110 text-white font-bold text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50"
                >
                  <Send size={15} />
                  <span>{submitting ? "Submitting..." : "Send Project Brief"}</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
