import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layers3,
  Lock,
  Mail,
  Minus,
  Plus,
  RefreshCw,
  Rocket,
  Send,
  Server,
  Shield,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import SEO from "../components/SEO";

export default function CloudDeployment() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Cloud & Deployment",
    timeline: "",
    message: "",
  });

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20Cloud%20&%20Deployment%20services.";

  const services = [
    {
      icon: <Rocket size={20} />,
      number: "01",
      title: "Vercel Production Hosting",
      desc: "Fast, globally distributed edge deployments for frontend applications, single-page apps, and serverless APIs with instant preview URLs and zero downtime.",
      points: [
        "Edge CDN distribution",
        "Automated Git releases",
        "Serverless functions setup",
      ],
    },
    {
      icon: <Shield size={20} />,
      number: "02",
      title: "Cloudflare DNS & CDN Setup",
      desc: "Complete DNS configuration, global caching, DDoS mitigation, and enterprise-grade SSL/TLS certificate management to protect your digital assets.",
      points: [
        "Global edge caching",
        "DDoS & bot protection",
        "Custom domain SSL setup",
      ],
    },
    {
      icon: <Database size={20} />,
      number: "03",
      title: "MongoDB Atlas Cloud Clusters",
      desc: "Production database cluster provisioning on MongoDB Atlas with IP whitelisting, connection pooling, automated backups, and performance indexing.",
      points: [
        "Cloud database clustering",
        "Automated daily backups",
        "Secure connection pooling",
      ],
    },
    {
      icon: <Terminal size={20} />,
      number: "04",
      title: "Environment & Secrets Management",
      desc: "Secure separation of development, staging, and production environments with encrypted environment variable vaults and zero leaked credentials.",
      points: [
        "Production environment vaults",
        "Zero credential leakage",
        "Multi-environment workflows",
      ],
    },
    {
      icon: <RefreshCw size={20} />,
      number: "05",
      title: "Automated CI/CD Pipelines",
      desc: "GitHub Actions and automated release pipelines that run linting, tests, build checks, and automatic deployments on every approved commit.",
      points: [
        "Continuous integration (CI)",
        "Zero-downtime releases",
        "Branch preview environments",
      ],
    },
    {
      icon: <Zap size={20} />,
      number: "06",
      title: "Performance & Uptime Monitoring",
      desc: "Continuous application health monitoring, TTFB latency optimization, error tracking, and automated alerts to catch issues before users do.",
      points: [
        "Sub-200ms TTFB tuning",
        "24/7 uptime health checks",
        "Performance log analysis",
      ],
    },
  ];

  const faqs = [
    {
      q: "What cloud platforms does DevZore use for client deployments?",
      a: "DevZore primarily leverages Vercel for high-performance frontend and serverless delivery, Cloudflare for global DNS, caching, and security, and MongoDB Atlas for managed cloud database clusters. This modern serverless stack eliminates traditional server maintenance costs while providing 99.9% uptime.",
    },
    {
      q: "How long does a typical production cloud deployment take?",
      a: "Standard deployment setup for existing applications typically takes 2 to 5 business days, including DNS propagation, SSL verification, environment configuration, database migration, and comprehensive smoke testing.",
    },
    {
      q: "Do I own my cloud accounts and hosting infrastructure?",
      a: "Yes, 100%. We configure everything inside your own Vercel, Cloudflare, and MongoDB Atlas accounts or transfer ownership completely upon project completion. You retain full administrative access, billing control, and intellectual property.",
    },
    {
      q: "What is your post-launch support for cloud infrastructure?",
      a: "Every deployment includes our post-launch warranty period covering configuration adjustments, domain re-pointing, and initial performance verification. We also provide ongoing maintenance plans for continuous updates, backup validation, and monitoring.",
    },
    {
      q: "Can you configure custom domain SSL and automated staging branch previews?",
      a: "Yes. Every cloud setup includes enterprise-grade SSL/TLS certificates via Cloudflare, automated DNS record verification, and ephemeral branch preview deployments so your team can test every pull request on a live URL before merging to production.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Infrastructure Audit & Scoping",
      desc: "We analyze your repository, dependencies, database load, and traffic demands to map the optimal cloud topology.",
    },
    {
      step: "02",
      title: "Environment Provisioning & CI/CD",
      desc: "We set up isolated staging and production environments, configure secrets vaults, and connect automated Git deployment hooks.",
    },
    {
      step: "03",
      title: "DNS, CDN & Security Hardening",
      desc: "We route domains through Cloudflare, configure DDoS mitigation, enforce SSL/TLS, and establish database connection pooling.",
    },
    {
      step: "04",
      title: "Production Cutover & Verification",
      desc: "We execute zero-downtime cutover, verify core workflows under live load, and hand over 100% credential control.",
    },
  ];

  const buyerChallenges = [
    {
      title: "Deployment Downtime & Broken Builds",
      desc: "Manual FTP uploads or fragile servers cause downtime and regressions with every code release.",
    },
    {
      title: "Slow Page Speeds & High TTFB",
      desc: "Un-cached origin servers in distant continents lead to high latency and poor Core Web Vitals.",
    },
    {
      title: "Security & Leaked Secrets",
      desc: "Hardcoded API keys and exposed database ports leave applications vulnerable to scraping and breaches.",
    },
    {
      title: "Vendor Lock-In & Bloated Bills",
      desc: "Over-engineered cloud instances that cost hundreds of dollars monthly with difficult maintenance overhead.",
    },
  ];

  const whoThisIsFor = [
    "Founders launching web or mobile applications who need zero-maintenance serverless infrastructure",
    "Growing businesses migrating away from legacy, slow shared hosting or outdated VPS servers",
    "Development teams needing automated GitHub Actions CI/CD pipelines and instant PR preview links",
    "Enterprises requiring multi-region edge caching, DDoS protection, and managed MongoDB clusters",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:hellodevzore@gmail.com?subject=Cloud Deployment Inquiry: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0AService: ${formData.service}%0D%0ATimeline: ${formData.timeline}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailto;
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://devzore.com/cloud-deployment#service",
    name: "Cloud & Deployment Services",
    serviceType: "Cloud Deployment & DevOps",
    provider: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    areaServed: ["Pakistan", "Qatar", "Worldwide"],
    description:
      "Production cloud deployment services covering Vercel edge hosting, Cloudflare CDN/DNS security, MongoDB Atlas database clustering, CI/CD automated releases, and 24/7 monitoring.",
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
        name: "Services",
        item: "https://devzore.com/allservices",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cloud & Deployment",
        item: "https://devzore.com/cloud-deployment",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Cloud & Deployment Services | DevOps & Hosting | DevZore"
        description="Expert cloud deployment and DevOps services using Vercel, Cloudflare, and MongoDB Atlas with automated CI/CD pipelines, SSL, and production monitoring."
        canonical="/cloud-deployment"
        schema={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      <div className="min-h-screen bg-[#061923] text-white">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24" style={darkGrid}>
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1 text-[13px] font-semibold text-[#1BBAC8] mb-6">
              <Cloud size={14} /> Production Infrastructure & Cloud Engineering
            </div>

            <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Cloud & Deployment Services
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
              We deploy, configure, and scale production web applications using modern cloud platforms: Vercel edge infrastructure, Cloudflare enterprise CDN, and MongoDB Atlas clusters.
            </p>

            {/* D1 ANSWER BLOCK */}
            <div className="mt-8 max-w-3xl rounded-xl border border-cyan-500/30 bg-[#071923]/90 p-5 text-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-[#1BBAC8] mb-1.5">
                What is Cloud & Deployment and Who Is It For?
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                DevZore&apos;s cloud deployment services configure, deploy, and maintain web applications, APIs, and databases on modern cloud infrastructure (Vercel, Cloudflare, and MongoDB Atlas). Engineered for startups and growing businesses requiring reliable uptime, automated CI/CD releases, SSL security, and zero server management headaches.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0796A8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1BBAC8]"
              >
                Get Free Cloud Consultation
                <ArrowRight size={14} />
              </a>
              <a
                href="#deployment-services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Cloud Services
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES BREAKDOWN */}
        <section id="deployment-services" className="py-20 bg-[#071923]/60 border-t border-white/[0.08]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1BBAC8]">
                Capabilities
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                Complete Production Cloud Stack
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                From initial DNS configuration to automated testing and continuous monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#061923] p-6 transition-all duration-300 hover:border-cyan-500/30 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-[#1BBAC8] border border-cyan-500/20">
                      {s.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {s.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5 border-t border-white/[0.06] pt-4 text-xs text-slate-400">
                    {s.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <Check size={12} className="text-[#1BBAC8]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED PROJECT PROOF (F4) */}
        <section className="py-16 bg-[#061923] border-t border-white/[0.08]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
            <div className="rounded-2xl border border-cyan-500/20 bg-[#071923] p-8 sm:p-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1BBAC8]">
                    Real Project Architecture
                  </span>
                  <h2 className="mt-1 text-2xl font-bold text-white">
                    FrostyOps & Weldon Paints Production Infrastructure
                  </h2>
                  <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Deployed on Vercel with Cloudflare SSL and MongoDB Atlas database clusters, providing sub-200ms TTFB response times and 99.9% uptime for multi-user inventory and distribution operations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/projects/frostyops"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#0796A8] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#1BBAC8] transition"
                  >
                    View FrostyOps Case Study <ArrowRight size={12} />
                  </Link>
                  <Link
                    to="/projects/weldon-paints"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
                  >
                    View Weldon Paints Case Study <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUYER CHALLENGES & SOLUTIONS */}
        <section className="py-16 bg-[#05141c] border-t border-white/[0.08]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1BBAC8]">
                Infrastructure Challenges
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                Critical Cloud Roadblocks DevZore Solves
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {buyerChallenges.map((c, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/[0.08] bg-[#071d29]">
                  <h3 className="text-sm font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="py-16 bg-[#061923] border-t border-white/[0.08]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1BBAC8]">
                Target Audience
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                Who Our Cloud & Deployment Services Are For
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {whoThisIsFor.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <CheckCircle2 size={16} className="text-[#1bbac8] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-STEP DELIVERY PROCESS */}
        <section className="py-16 bg-[#05141c] border-t border-white/[0.08]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1BBAC8]">
                Deployment Workflow
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                4-Step Production Cloud Delivery
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((st) => (
                <div key={st.step} className="p-5 rounded-xl border border-white/[0.08] bg-[#071d29]">
                  <div className="text-xl font-black text-[#1bbac8] mb-2">{st.step}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className="py-20 bg-[#071923]/40 border-t border-white/[0.08]">
          <div className="max-w-[800px] mx-auto px-5 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1BBAC8]">
                Common Questions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.08] bg-[#061923] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-[#1BBAC8] transition"
                  >
                    <span>{faq.q}</span>
                    {activeFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {activeFaq === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENQUIRY FORM */}
        <section className="py-20 bg-[#061923] border-t border-white/[0.08]">
          <div className="max-w-[700px] mx-auto px-5 sm:px-6">
            <div className="rounded-2xl border border-white/[0.1] bg-[#071923] p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-white mb-2">
                Deploy Your Project with DevZore
              </h2>
              <p className="text-xs text-slate-300 mb-6">
                Tell us about your application stack and hosting requirements. We will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#061923] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#1BBAC8] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#061923] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#1BBAC8] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Project</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Inc."
                      className="w-full rounded-lg border border-white/[0.1] bg-[#061923] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#1BBAC8] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.1] bg-[#061923] px-3.5 py-2.5 text-xs text-white focus:border-[#1BBAC8] outline-none"
                    >
                      <option>Cloud & Deployment</option>
                      <option>Vercel Hosting</option>
                      <option>Cloudflare Setup</option>
                      <option>MongoDB Atlas</option>
                      <option>CI/CD Pipelines</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your current tech stack, hosting needs, or timeline..."
                    className="w-full rounded-lg border border-white/[0.1] bg-[#061923] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#1BBAC8] outline-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#0796A8] px-6 py-3 text-xs font-semibold text-white hover:bg-[#1BBAC8] transition"
                  >
                    Submit Deployment Request <Send size={12} />
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-xs font-semibold text-white hover:bg-white/10 transition"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
