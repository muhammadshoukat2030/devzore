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
  Layout,
  Gauge,
} from "lucide-react";
import SEO from "../components/SEO";

export default function HireReactDevelopers() {
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
          role: "React Developers",
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
    `Hi DevZore, I'm looking to hire dedicated React.js Developers (${formData.seniority}, ${formData.engagementModel}).`
  )}`;

  const vettingPoints = [
    {
      title: "React 18 & Modern Component Architecture",
      desc: "Deep knowledge of custom hooks, component composition, state management (Zustand, Redux Toolkit), and clean props contracts.",
    },
    {
      title: "Core Web Vitals & Sub-Second Speeds",
      desc: "Expertise in code splitting, dynamic imports, image WebP optimization, lazy loading, and sub-second First Contentful Paint.",
    },
    {
      title: "Responsive & Accessible UI (Tailwind CSS)",
      desc: "Translating complex Figma mockups into accessible (W3C / ARIA), responsive interfaces across mobile, tablet, and desktop.",
    },
    {
      title: "Resilient API & State Synchronization",
      desc: "Handling asynchronous REST/GraphQL states, optimistic updates, offline caching, and graceful error boundary fallbacks.",
    },
  ];

  const caseStudies = [
    {
      title: "Desert Safari Qatar",
      tag: "Tourism Portal",
      desc: "High-conversion safari reservation platform featuring real-time vehicle capacity allocation, multi-currency checkout, and direct WhatsApp pathways.",
      link: "/projects/desert-safari-qatar",
    },
    {
      title: "Weldon Paints POS",
      tag: "Business Software",
      desc: "High-speed counter checkout interface with instant formula search, keyboard shortcuts, and automated customer credit lookups.",
      link: "/projects/weldon-paints",
    },
    {
      title: "Sarab Express",
      tag: "Digital Food Platform",
      desc: "Interactive restaurant digital menu and ordering frontend with real-time cart calculation and kitchen dispatch updates.",
      link: "/projects/sarab-express",
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
        name: "Hire React Developers",
        item: "https://devzore.com/hire-react-developers",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Hire React Developers | Dedicated React.js Engineers"
        description="Hire dedicated React.js developers. Specialists in React 18, Tailwind CSS, high-speed single-page apps, and complex UI dashboards. 100% IP ownership."
        canonical="/hire-react-developers"
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
            <span className="text-[#1bbac8]">Hire React Developers</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-14 sm:py-20 border-b border-white/[0.08] bg-gradient-to-b from-[#030d14] to-[#061923]">
          <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <Layout size={13} />
                <span>Frontend Engineering Specialists</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
                Hire Dedicated React.js Developers
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Deploy vetted senior React developers to build high-performance web applications, SaaS dashboards, and consumer-facing digital portals. Complete timezone alignment across the GCC, UK, and US.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#hire-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white font-bold text-sm transition shadow-lg shadow-[#0796A8]/20"
                >
                  <Users size={15} />
                  <span>Request React Developers</span>
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
                Frontend Standards
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our React Developer Technical Standards
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                We evaluate real-world web performance, clean state management, and modern styling:
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

        {/* SECTION 2: PROVEN REACT CASE STUDIES */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#061923]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Real Deployments
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Production Systems Engineered in React
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Selected case studies from 180+ delivered software systems worldwide:
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
                      <span>Read Technical Case Study</span>
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
                  Hire Vetted React Developers
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Share your project needs. We provide candidate profiles within 24–48 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Request Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Our lead engineer will review your frontend requirements and follow up with shortlisted profiles within 24–48 hours.
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
                      Frontend Requirements
                    </label>
                    <textarea
                      rows={3}
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe the UI/UX components, Figma designs, or dashboard requirements..."
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
                        <span>Request React Developer Profiles</span>
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
