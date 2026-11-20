import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Globe,
  Layers,
  Lock,
  MessageSquare,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  ChevronRight,
  Zap,
  Gauge,
  Server,
} from "lucide-react";
import SEO from "../components/SEO";

export default function HireNextjsDevelopers() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    seniority: "Senior",
    engagementModel: "Dedicated Full-Time",
    timeline: "Immediately",
    description: "",
    website_hp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website_hp) {
      setIsSubmitted(true);
      return;
    }
    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitError("Please fill in your name, work email, and phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "hire_engineers_request", {
          role: "Next.js Engineers",
          seniority: formData.seniority,
          model: formData.engagementModel,
        });
      }
      await new Promise((res) => setTimeout(res, 500));
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError("An error occurred. Please contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/923348004300?text=${encodeURIComponent(
    `Hi DevZore, I'm looking to hire dedicated Next.js Developers (${formData.seniority}, ${formData.engagementModel}).`
  )}`;

  const vettingPoints = [
    {
      title: "App Router & React Server Components",
      desc: "Deep mastery of modern Next.js App Router, server-rendered components, nested layouts, parallel routes, and route handlers.",
    },
    {
      title: "Edge Runtime & Hybrid Caching",
      desc: "Static site generation (SSG), Incremental Static Regeneration (ISR), dynamic server-side rendering, and Vercel edge caching.",
    },
    {
      title: "Technical SEO & Schema Markup",
      desc: "Built-in Open Graph metadata generation, dynamic sitemaps, JSON-LD structured schemas, and Core Web Vitals optimization.",
    },
    {
      title: "Secure Backend & Database Integrations",
      desc: "Server actions, API route middleware, database connection pooling (MongoDB/PostgreSQL), and ironclad authentication.",
    },
  ];

  const caseStudies = [
    {
      title: "Desert Safari Qatar",
      tag: "High-Traffic Tourism",
      desc: "Engineered with pre-rendered excursion landing pages, real-time availability locking, multi-currency checkout, and direct WhatsApp booking.",
      link: "/projects/desert-safari-qatar",
    },
    {
      title: "Gulf Dunes Tourism",
      tag: "Travel Discovery Engine",
      desc: "High-speed excursion portal with sub-second page loads, automated JSON-LD schema, and localized Qatar booking workflows.",
      link: "/projects/gulf-dunes-tourism",
    },
    {
      title: "DevZore Web Infrastructure",
      tag: "Static Pre-Rendering",
      desc: "Our own production website: 67+ pre-rendered routes, zero render-blocking assets, sub-second LCP, and perfect canonical hygiene.",
      link: "/our-process",
    },
  ];

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
        name: "Hire Engineers",
        item: "https://devzore.com/hire-engineers",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hire Next.js Developers",
        item: "https://devzore.com/hire-nextjs-developers",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Hire Next.js Developers | Dedicated Next.js Engineers"
        description="Hire dedicated Next.js developers. Specialists in App Router, Server Components, SSR/SSG, and Core Web Vitals. 100% IP ownership, timezone overlap."
        canonical="/hire-nextjs-developers"
        schema={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-[#061923] text-white antialiased">
        {/* BREADCRUMB */}
        <div className="border-b border-white/[0.08] bg-[#030d14] pt-[82px] sm:pt-[84px] pb-3">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link to="/hire-engineers" className="hover:text-white transition">Hire Engineers</Link>
            <span>/</span>
            <span className="text-[#1bbac8]">Hire Next.js Developers</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-14 sm:py-20 border-b border-white/[0.08] bg-gradient-to-b from-[#030d14] to-[#061923]">
          <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <Zap size={13} />
                <span>Next.js Architecture Experts</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
                Hire Dedicated Next.js Developers
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Build fast, indexable, and scalable web applications with senior Next.js engineers. App Router, Server Components, hybrid edge caching, and Core Web Vitals optimization.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#hire-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white font-bold text-sm transition shadow-lg shadow-[#0796A8]/20"
                >
                  <Users size={15} />
                  <span>Request Next.js Developers</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 font-semibold text-sm transition"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp Lead Engineer</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: VETTING CRITERIA */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#05141c]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Full Technical Vetting
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Next.js Technical Standards
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                We ensure every Next.js developer masters modern rendering and edge performance:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {vettingPoints.map((v, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-[#1bbac8]">
                    <CheckCircle2 size={18} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: PROVEN NEXT.JS CASE STUDIES */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#061923]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Proven Deliveries
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Production Systems Engineered with Next.js
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Explore real software architectures built by DevZore:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((cs, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#030d14] flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-cyan-500/15 text-[#1bbac8] border border-cyan-500/30">
                      {cs.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-2">{cs.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {cs.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/[0.08]">
                    <Link
                      to={cs.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition"
                    >
                      <span>Read Technical Details</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: REQUEST FORM */}
        <section id="hire-form" className="py-16 sm:py-20 bg-[#05141c]">
          <div className="max-w-[850px] mx-auto px-4 sm:px-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#030d14] shadow-2xl">
              <div className="mb-6 pb-4 border-b border-white/[0.08]">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Hire Vetted Next.js Developers
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Share your requirements. We provide candidate profiles within 24–48 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Request Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Our lead engineer will review your project needs and send Next.js developer profiles within 24–48 hours.
                  </p>
                  <div className="pt-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md"
                    >
                      <MessageSquare size={14} />
                      <span>Chat Instantly on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="website_hp"
                    value={formData.website_hp}
                    onChange={handleInputChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {submitError && (
                    <div className="p-3 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company / Project Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Corp"
                        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Work Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        WhatsApp / Phone <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+92 334 8004300"
                        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Seniority
                      </label>
                      <select
                        name="seniority"
                        value={formData.seniority}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-white/10 bg-[#071923] px-3 py-2 text-xs text-white focus:border-[#1bbac8] focus:outline-none"
                      >
                        <option value="Mid-Level">Mid-Level (2–4 yrs)</option>
                        <option value="Senior">Senior (4–7 yrs)</option>
                        <option value="Lead Architect">Lead Architect (7+ yrs)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Engagement Model
                      </label>
                      <select
                        name="engagementModel"
                        value={formData.engagementModel}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-white/10 bg-[#071923] px-3 py-2 text-xs text-white focus:border-[#1bbac8] focus:outline-none"
                      >
                        <option value="Dedicated Full-Time">Dedicated Full-Time</option>
                        <option value="Team Augmentation">Team Augmentation</option>
                        <option value="Part-Time">Part-Time (20h/wk)</option>
                        <option value="Project-Based">Project-Based</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Start Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-white/10 bg-[#071923] px-3 py-2 text-xs text-white focus:border-[#1bbac8] focus:outline-none"
                      >
                        <option value="Immediately">Immediately</option>
                        <option value="Within 2 Weeks">Within 2 Weeks</option>
                        <option value="Within 1 Month">Within 1 Month</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Next.js Project Description
                    </label>
                    <textarea
                      rows={3}
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your App Router requirements, headless CMS integrations, or speed goals..."
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] px-5 py-3 text-xs font-bold text-white transition shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Request Next.js Developer Profiles</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
