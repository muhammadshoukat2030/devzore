import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Code2,
  Globe,
  HelpCircle,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
  Briefcase,
  MapPin,
} from "lucide-react";
import SEO from "../components/SEO";
import weldonPaint from "../assets/weldonpaint.webp";
import sarabFood from "../assets/sarab_website_image.webp";
import qatarTourist from "../assets/qatar_tourist_agency.webp";

const Contact = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    timeline: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // BACKGROUND GRIDS
  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  // SERVICES (20 CORE SERVICES)
  const services = [
    "Generative AI Development",
    "AI Integration & LLM Services",
    "Custom Web Development",
    "Mobile App Development",
    "MERN Stack Development",
    "Next.js Development",
    "SaaS Product Development",
    "Inventory Management Systems",
    "Distribution Management Systems",
    "Installment Management Software",
    "Tour & Safari Booking Systems",
    "Online Food Ordering Systems",
    "E-Commerce Development",
    "UI/UX Design",
    "Startup MVP Development",
    "Backend & API Development",
    "React Development",
    "Cloud & Deployment",
    "Maintenance & Support",
    "SEO Services",
    "Digital Marketing",
    "Other",
  ];

  // TIMELINES
  const timelines = [
    "As soon as possible",
    "Within 1 month",
    "1–3 months",
    "3–6 months",
    "Flexible / Exploring options",
  ];

  // RELATED SERVICES (QUICK NAVIGATION)
  const relatedServices = [
    {
      icon: <Code2 size={18} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks.",
      path: "/web-development",
    },
    {
      icon: <Smartphone size={18} />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android.",
      path: "/mobile-apps",
    },
    {
      icon: <Server size={18} />,
      title: "Backend & APIs",
      description: "Scalable backend systems, REST APIs, databases and integrations.",
      path: "/backend-api",
    },
    {
      icon: <Rocket size={18} />,
      title: "SaaS Development",
      description: "Multi-tenant SaaS products, user auth, billing and dashboards.",
      path: "/saas-product-development",
    },
  ];

  // FAQS
  const faqs = [
    {
      question: "How quickly will DevZore respond to my inquiry?",
      answer:
        "We review every inquiry as soon as it arrives and typically reply within a few hours. You are guaranteed a response within 24 business hours via WhatsApp or email.",
    },
    {
      question: "Do I need a complete technical specification before contacting you?",
      answer:
        "No. You only need an overview of your idea, business problem, or feature goals. During our initial discussion, we help clarify technical architecture, scope, and recommended tools.",
    },
    {
      question: "Can we sign a Non-Disclosure Agreement (NDA)?",
      answer:
        "Yes, absolutely. We prioritize client confidentiality. If your project involves proprietary business workflows or intellectual property, we are happy to sign an NDA before detailed discussions.",
    },
    {
      question: "How do remote delivery and client communication work?",
      answer:
        "We deliver projects remotely for clients across Pakistan, Qatar, and internationally. Communication is handled via WhatsApp, Slack, email, or Google Meet, with staging URLs and Git repository transparency throughout.",
    },
  ];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // EMAILJS SUBMISSION
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);

    const templateParams = {
      name: form.name.trim(),
      email: form.email.trim(),
      service: form.service || "Not specified",
      timeline: form.timeline || "Not specified",
      message: form.message.trim(),
    };

    try {
      await emailjs.send(
        "service_s30fvfz",
        "template_axl74r9",
        templateParams,
        {
          publicKey: "RE7HME1c0_KdvnI3c",
        }
      );

      setForm({
        name: "",
        email: "",
        service: "",
        timeline: "",
        message: "",
      });

      navigate("/thank-you");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Sorry, your inquiry could not be sent. Please contact us directly on WhatsApp (+92 334 8004300) or email hellodevzore@gmail.com."
      );
    } finally {
      setLoading(false);
    }
  };

  // STRUCTURED DATA
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://devzore.com/contact#contactpage",
    name: "Contact DevZore",
    url: "https://devzore.com/contact",
    description:
      "Contact DevZore to discuss web development, mobile applications, SaaS products, backend APIs and custom software development.",
    isPartOf: {
      "@id": "https://devzore.com/#website",
    },
    about: {
      "@id": "https://devzore.com/#organization",
    },
    mainEntity: {
      "@id": "https://devzore.com/#organization",
    },
  };

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
        name: "Contact",
        item: "https://devzore.com/contact",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Contact DevZore | Hire Web & Software Developers Today"
        description="Contact DevZore to discuss your website, web application, SaaS, mobile app, e-commerce or custom software project and request a development quote."
        canonical="/contact"
        schema={[contactSchema, breadcrumbSchema]}
      />

      <div
        className="min-h-screen bg-[#071923] text-white antialiased font-sans"
      >
        {/* ============================================================ */}
        {/* HERO + FORM SECTION (ELEVATED ABOVE-THE-FOLD ON DESKTOP & MOBILE) */}
        {/* ============================================================ */}
        <section
          aria-labelledby="contact-heading"
          className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-10 sm:pb-14"
        >
          {/* Ambient Glows & Background Grid */}
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[10%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />
          <div className="absolute top-1/4 right-[5%] w-[460px] h-[460px] rounded-full bg-[#20bdcb]/10 blur-[150px] pointer-events-none" />

          <div className="relative max-w-[1260px] mx-auto px-4 sm:px-6">
            {/* MAIN TWO-COLUMN GRID: LEFT INTRO/CONTACTS + RIGHT FORM */}
            <div className="grid lg:grid-cols-[1fr_1.12fr] gap-6 lg:gap-10 items-start">
              {/* LEFT COLUMN: PUNCHY COPY, DIRECT CHANNELS & TRUST HIGHLIGHTS */}
              <div className="space-y-4 lg:sticky lg:top-20">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#1bbac8]">
                    <Sparkles size={12} />
                    Direct Engineering Consultation
                  </div>

                  <h1
                    id="contact-heading"
                    className="mt-2 text-[24px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.035em] leading-[1.12] text-white"
                  >
                    Have a project in mind?{" "}
                    <span className="text-[#1bbac8]">Let's talk.</span>
                  </h1>

                  <p className="mt-1.5 text-[12px] sm:text-[13px] leading-relaxed text-slate-300 max-w-xl">
                    DevZore is a Pakistan-based software development company delivering web, mobile, SaaS and AI solutions to clients worldwide.
                    Speak directly with senior engineers — no sales middlemen or communication delays.
                  </p>
                </div>

                {/* FAST DIRECT CHANNELS (WHATSAPP & EMAIL) - 2 COLS ON MOBILE */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-2.5">
                  <a
                    href="https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 hover:bg-emerald-500/20 transition group min-w-0"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-[#25D366]">
                        <MessageSquare size={16} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-xs font-bold uppercase tracking-wider text-emerald-400">WhatsApp</div>
                        <div className="text-[13px] sm:text-[13px] font-bold text-white group-hover:text-emerald-300 transition truncate">+92 334 8004300</div>
                      </div>
                    </div>
                    <span className="text-[13px] font-semibold text-emerald-400 group-hover:translate-x-0.5 transition hidden sm:inline-flex items-center gap-1 shrink-0">
                      Chat <ArrowRight size={12} />
                    </span>
                  </a>

                  <a
                    href="mailto:hellodevzore@gmail.com"
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl border border-cyan-500/25 bg-cyan-500/10 hover:bg-cyan-500/20 transition group min-w-0"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-[#1BBAC8]">
                        <Mail size={16} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-xs font-bold uppercase tracking-wider text-cyan-400">Email</div>
                        <div className="text-[13px] sm:text-[13px] font-bold text-white group-hover:text-cyan-300 transition truncate">hellodevzore@gmail.com</div>
                      </div>
                    </div>
                    <span className="text-[13px] font-semibold text-cyan-400 group-hover:translate-x-0.5 transition hidden sm:inline-flex items-center gap-1 shrink-0">
                      Email <ArrowRight size={12} />
                    </span>
                  </a>
                </div>

                {/* TRUST POINTS & GUARANTEES (DESKTOP VIEW) */}
                <div className="hidden lg:block pt-3 border-t border-white/[0.08] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">What You Can Rely On</div>
                  <div className="grid grid-cols-2 gap-2.5 text-[12px] text-slate-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#1bbac8] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold">Direct Engineers</strong>
                        <span className="text-[13px] text-slate-400">Speak directly with builders.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#1bbac8] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold">100% Handover</strong>
                        <span className="text-[13px] text-slate-400">Source code & IP rights.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#1bbac8] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold">Transparent Scope</strong>
                        <span className="text-[13px] text-slate-400">Clear milestones, no surprises.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#1bbac8] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold">Post-Launch Care</strong>
                        <span className="text-[13px] text-slate-400">Ongoing warranty & scaling.</span>
                      </div>
                    </div>
                  </div>

                  {/* WORKING WITH CLIENTS WORLDWIDE PROOF */}
                  <div className="p-3.5 rounded-xl border border-cyan-500/20 bg-cyan-950/20">
                    <div className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider text-[#1BBAC8] mb-1">
                      <Globe size={13} className="text-[#1BBAC8]" />
                      <span>Working With Clients Worldwide</span>
                    </div>
                    <p className="text-[13px] text-slate-300 leading-relaxed">
                      Remote delivery across time zones via WhatsApp, Slack, Google Meet & email with private staging links and progress demos. Active systems delivered for clients in Pakistan, Qatar and internationally.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-1 text-[13px] text-slate-400">
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#1bbac8]" /> &lt; 24h Response</span>
                    <span className="flex items-center gap-1.5"><Globe size={12} className="text-[#1bbac8]" /> PK, Qatar & Worldwide</span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: THE CONTACT FORM (PROMINENT & ELEVATED) */}
              <div id="project-form" className="scroll-mt-20">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-white/[0.1] bg-[#081d28]/95 p-4 sm:p-5 lg:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-md"
                >
                  <div className="pb-2.5 sm:pb-3 border-b border-white/[0.08]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">Project Inquiry Form</div>
                    <h2 className="mt-0.5 text-[17px] sm:text-[20px] font-bold text-white tracking-tight">
                      Share Your Requirements
                    </h2>
                    <p className="mt-0.5 text-[13px] text-slate-400">
                      Fill out the fields below — we typically reply within a few hours.
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4">
                    {/* NAME & EMAIL */}
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-3.5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block mb-1 text-xs font-bold uppercase tracking-wider text-slate-300"
                        >
                          Your Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Ali Khan"
                          className="w-full min-h-[40px] sm:min-h-[44px] rounded-lg border border-white/[0.1] bg-white/[0.05] px-3.5 py-2 text-[13px] text-white placeholder:text-slate-500 outline-none transition hover:border-white/[0.2] focus:border-[#1bbac8] focus:ring-2 focus:ring-[#1bbac8]/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block mb-1 text-xs font-bold uppercase tracking-wider text-slate-300"
                        >
                          Email Address <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full min-h-[40px] sm:min-h-[44px] rounded-lg border border-white/[0.1] bg-white/[0.05] px-3.5 py-2 text-[13px] text-white placeholder:text-slate-500 outline-none transition hover:border-white/[0.2] focus:border-[#1bbac8] focus:ring-2 focus:ring-[#1bbac8]/20"
                        />
                      </div>
                    </div>

                    {/* SERVICE & TIMELINE */}
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-3.5">
                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block mb-1 text-xs font-bold uppercase tracking-wider text-slate-300"
                        >
                          Service Needed
                        </label>
                        <div className="relative">
                          <select
                            id="contact-service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full min-h-[40px] sm:min-h-[44px] appearance-none cursor-pointer rounded-lg border border-white/[0.1] bg-[#0c2432] px-3.5 py-2 pr-9 text-[13px] text-white outline-none transition hover:border-white/[0.2] focus:border-[#1bbac8] focus:ring-2 focus:ring-[#1bbac8]/20"
                          >
                            <option value="">Select a service...</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={14}
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-timeline"
                          className="block mb-1 text-xs font-bold uppercase tracking-wider text-slate-300"
                        >
                          Target Timeline
                        </label>
                        <div className="relative">
                          <select
                            id="contact-timeline"
                            name="timeline"
                            value={form.timeline}
                            onChange={handleChange}
                            className="w-full min-h-[40px] sm:min-h-[44px] appearance-none cursor-pointer rounded-lg border border-white/[0.1] bg-[#0c2432] px-3.5 py-2 pr-9 text-[13px] text-white outline-none transition hover:border-white/[0.2] focus:border-[#1bbac8] focus:ring-2 focus:ring-[#1bbac8]/20"
                          >
                            <option value="">Select timeline...</option>
                            {timelines.map((timeline) => (
                              <option key={timeline} value={timeline}>
                                {timeline}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={14}
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block mb-1 text-xs font-bold uppercase tracking-wider text-slate-300"
                      >
                        Project Details <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your product idea, existing application, key features, target users, or technical challenges..."
                        className="w-full min-h-[96px] sm:min-h-[110px] resize-none rounded-lg border border-white/[0.1] bg-white/[0.05] px-3.5 py-2.5 text-[13px] leading-relaxed text-white placeholder:text-slate-500 outline-none transition hover:border-white/[0.2] focus:border-[#1bbac8] focus:ring-2 focus:ring-[#1bbac8]/20"
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full min-h-[44px] sm:min-h-[48px] inline-flex items-center justify-center gap-2 rounded-lg px-6 text-[13px] font-bold transition-all ${
                        loading
                          ? "bg-[#0796A8]/70 text-white/70 cursor-not-allowed"
                          : "bg-[#0796A8] hover:bg-[#1bbac8] text-white shadow-[0_10px_30px_rgba(7,150,168,0.3)] hover:shadow-[0_12px_35px_rgba(27,186,200,0.4)] cursor-pointer"
                      }`}
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Sending Your Inquiry...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Project Inquiry
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>

                    {/* CONFIDENTIALITY GUARANTEE */}
                    <div className="pt-1 flex items-center justify-center gap-2 text-center text-slate-400 text-[13px]">
                      <ShieldCheck size={14} className="text-[#1bbac8] shrink-0" />
                      <span>100% Confidential. NDA signed upon request. Zero spam guarantee.</span>
                    </div>
                  </div>
                </form>

                {/* TRUST POINTS & GUARANTEES (MOBILE VIEW ONLY - SHOWN UNDER FORM) */}
                <div className="lg:hidden mt-6 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">Why Clients Trust DevZore</div>
                  <div className="grid grid-cols-2 gap-2.5 text-[13px] text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#1bbac8] shrink-0" />
                      <span>Direct Engineers</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#1bbac8] shrink-0" />
                      <span>100% Code Handover</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#1bbac8] shrink-0" />
                      <span>Transparent Milestones</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#1bbac8] shrink-0" />
                      <span>Post-Launch Support</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Clock size={11} className="text-[#1bbac8]" /> &lt; 24h Response</span>
                    <span className="flex items-center gap-1"><Globe size={11} className="text-[#1bbac8]" /> PK, Qatar & Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* STATS BAND (ITEM 4: BIG-COMPANY PROOF BAND) */}
        {/* ============================================================ */}
        <section aria-label="DevZore Track Record" className="border-y border-white/[0.08] bg-[#05141c] py-6 sm:py-7">
          <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20">
                  <Rocket size={20} />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">120+</div>
                  <div className="text-[13px] font-bold text-[#1bbac8] uppercase tracking-wider">Projects Completed</div>
                  <div className="text-xs text-slate-400">Web, mobile & SaaS platforms</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">20</div>
                  <div className="text-[13px] font-bold text-[#1bbac8] uppercase tracking-wider">Core Services</div>
                  <div className="text-xs text-slate-400">Full-stack engineering & AI</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">&lt; 24h</div>
                  <div className="text-[13px] font-bold text-[#1bbac8] uppercase tracking-wider">Response Time</div>
                  <div className="text-xs text-slate-400">Direct senior engineers</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20">
                  <Globe size={20} />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">PK & Qatar</div>
                  <div className="text-[13px] font-bold text-[#1bbac8] uppercase tracking-wider">Regional & Global</div>
                  <div className="text-xs text-slate-400">Remote delivery worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SELECTED WORK STRIP (ITEM 4: 3 FEATURED CASE STUDIES) */}
        {/* ============================================================ */}
        <section aria-labelledby="selected-work-heading" className="py-14 sm:py-16 bg-[#061923] border-b border-white/[0.08]">
          <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                  <Sparkles size={12} />
                  Verified Production Delivery
                </div>
                <h2 id="selected-work-heading" className="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Selected Client Case Studies
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Inspect real software systems engineered by DevZore before submitting your project scope:
                </p>
              </div>
              <Link
                to="/projects"
                onClick={scrollTop}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition shrink-0"
              >
                <span>View all 6 case studies</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  title: "Weldon Paints",
                  type: "Inventory & POS System",
                  industry: "Manufacturing & Retail",
                  teaser: "Centralized warehouse stock, formula cataloging and counter billing into a unified MERN operational platform.",
                  image: weldonPaint,
                  slug: "weldon-paints",
                },
                {
                  title: "Desert Safari Qatar",
                  type: "Tourism Booking Platform",
                  industry: "Travel & Hospitality",
                  teaser: "High-performance Qatar desert tourism platform engineered for international tourists with instant WhatsApp booking pathways.",
                  image: qatarTourist,
                  slug: "desert-safari-qatar",
                },
                {
                  title: "Sarab Express",
                  type: "Food Ordering Platform",
                  industry: "Food & Beverage",
                  teaser: "Direct digital ordering platform with meal customizers, live carts and kitchen ticket routing eliminating aggregator commissions.",
                  image: sarabFood,
                  slug: "sarab-express",
                },
              ].map((item) => (
                <article
                  key={item.slug}
                  className="group rounded-xl border border-white/[0.08] bg-[#071d29] overflow-hidden hover:border-cyan-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <Link to={`/projects/${item.slug}`} onClick={scrollTop} className="block aspect-[16/10] overflow-hidden bg-[#04111a]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                        loading="lazy"
                        width="400"
                        height="250"
                      />
                    </Link>
                    <div className="p-4 sm:p-5">
                      <div className="text-xs font-bold text-[#1bbac8] uppercase tracking-wider mb-1">
                        {item.industry}
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#1bbac8] transition">
                        <Link to={`/projects/${item.slug}`} onClick={scrollTop}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-[13px] font-semibold text-slate-400 mb-2">{item.type}</p>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {item.teaser}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 pt-0">
                    <Link
                      to={`/projects/${item.slug}`}
                      onClick={scrollTop}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] group-hover:text-white transition"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: WHAT HAPPENS NEXT (ELEVATED PREMIUM STYLING) */}
        {/* ============================================================ */}
        <section
          aria-labelledby="process-heading"
          className="py-14 sm:py-16 bg-[#071923] border-b border-white/[0.08]"
          style={darkGrid}
        >
          <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
            <div className="max-w-[700px] mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                <span className="w-4 h-[2px] bg-[#1bbac8]" />
                What Happens Next
              </div>
              <h2
                id="process-heading"
                className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white"
              >
                A clear, simple path from inquiry to kickoff.
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
                Here is what you can expect after reaching out to DevZore:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  title: "Review & Triage",
                  desc: "We analyze your project requirements, target platform, and timeline goals within hours.",
                },
                {
                  step: "02",
                  title: "Discovery Discussion",
                  desc: "Connect directly with senior engineers over WhatsApp, Google Meet, or email.",
                },
                {
                  step: "03",
                  title: "Detailed Estimate",
                  desc: "Receive clear technical scoping, milestone timelines, and fixed or milestone pricing.",
                },
                {
                  step: "04",
                  title: "Sprint Kickoff",
                  desc: "Engineering begins with staging demo URLs, regular code updates, and 100% handover.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-xl border border-white/[0.08] bg-[#071d29] hover:border-cyan-500/40 transition group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#1bbac8] px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {item.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1bbac8]/40 group-hover:bg-[#1bbac8] transition" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-white group-hover:text-[#1bbac8] transition">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* WHERE WE WORK: GLOBAL DELIVERY FOOTPRINT (ITEM 6) */}
        {/* ============================================================ */}
        <section
          id="where-we-work"
          aria-labelledby="where-we-work-heading"
          className="py-14 sm:py-16 bg-[#061923] border-b border-white/[0.08]"
          style={darkGrid}
        >
          <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
            <div className="max-w-[760px] mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                <Globe size={14} className="text-[#1bbac8]" />
                Global Presence & Delivery
              </div>
              <h2
                id="where-we-work-heading"
                className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white"
              >
                Where We Work — Engineering Hub & Worldwide Remote Delivery
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                DevZore operates an engineering hub in Pakistan with proven delivery across Pakistan, Qatar and international clients worldwide. Here is how our cross-border remote model works:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#071d29] hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center mb-4">
                  <MapPin size={20} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">Engineering Hub</div>
                <h3 className="mt-1 text-base font-bold text-white">Pakistan Base & Operations</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Central architecture, core full-stack engineering, and product operations. Highly skilled engineers building robust web, mobile, SaaS, and AI systems with cost-efficient execution.
                </p>
                <div className="mt-4 pt-3 border-t border-white/[0.06] text-[13px] text-slate-400">
                  <span className="font-semibold text-slate-200">Key hubs:</span> Lahore, Karachi, Rawalpindi / Islamabad
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#071d29] hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Globe size={20} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">Regional Delivery</div>
                <h3 className="mt-1 text-base font-bold text-white">Qatar & GCC Footprint</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Delivered real production systems in Doha and the Gulf, including tourism booking systems, distribution management software, and consumer-facing food ordering platforms.
                </p>
                <div className="mt-4 pt-3 border-t border-white/[0.06] text-[13px] text-slate-400">
                  <span className="font-semibold text-slate-200">Active regional systems:</span> Doha, GCC enterprise clients
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#071d29] hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Clock size={20} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">Remote Operating Model</div>
                <h3 className="mt-1 text-base font-bold text-white">Worldwide Collaboration</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Async updates via Git, Slack and WhatsApp. Live staging preview links for every milestone. Daily or weekly progress calls scheduled across your local time zone with 100% code handover.
                </p>
                <div className="mt-4 pt-3 border-t border-white/[0.06] text-[13px] text-slate-400">
                  <span className="font-semibold text-slate-200">Time zone overlap:</span> US, UK, Europe, GCC & Asia-Pacific
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: FREQUENTLY ASKED QUESTIONS (ELEVATED DARK LUXURY) */}
        {/* ============================================================ */}
        <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-[#05141c] border-b border-white/[0.08]">
          <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
            <div className="max-w-[700px] mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                <HelpCircle size={14} className="text-[#1bbac8]" />
                Common Questions
              </div>
              <h2
                id="faq-heading"
                className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white"
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
                Everything you need to know before initiating a project with DevZore:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-5 rounded-xl border border-white/[0.08] bg-[#071d29] hover:border-white/[0.18] transition"
                >
                  <h3 className="text-sm font-bold text-white flex items-start gap-2">
                    <span className="text-[#1bbac8] font-bold">Q.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 pl-4 border-l border-white/[0.08]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: RELATED SERVICES (BRAND-TINTED DARK THEME) */}
        {/* ============================================================ */}
        <section
          aria-labelledby="services-heading"
          className="py-12 sm:py-14 bg-[#061923] border-b border-white/[0.08]"
          style={darkGrid}
        >
          <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                  <span className="w-4 h-[2px] bg-[#1bbac8]" />
                  Explore Capabilities
                </div>
                <h2
                  id="services-heading"
                  className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white"
                >
                  Core Development Services
                </h2>
              </div>
              <Link
                to="/allservices"
                onClick={scrollTop}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition"
              >
                <span>View all 20 services</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {relatedServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={scrollTop}
                  className="p-4 rounded-xl border border-white/[0.08] bg-[#071d29] hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all shadow-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center group-hover:bg-[#0796A8] group-hover:text-white transition">
                    {service.icon}
                  </div>
                  <h3 className="mt-3 text-xs font-bold text-white group-hover:text-[#1bbac8] transition">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* BOTTOM NAVIGATION LINKS */}
        {/* ============================================================ */}
        <section className="bg-[#05141d] py-6">
          <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
            <nav
              aria-label="DevZore contact related pages"
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400"
            >
              {[
                ["Web Development", "/web-development"],
                ["Mobile Apps", "/mobile-apps"],
                ["Backend & API", "/backend-api"],
                ["MERN Stack", "/mern-stack-development"],
                ["SaaS Development", "/saas-product-development"],
                ["Startup MVP", "/startup-mvp"],
                ["All Services", "/allservices"],
                ["Case Studies", "/projects"],
                ["About DevZore", "/about"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={scrollTop}
                  className="hover:text-[#1bbac8] transition"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
