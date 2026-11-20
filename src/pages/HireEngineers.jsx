import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  FileCheck,
  Globe,
  Layers,
  Lock,
  MessageSquare,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  Check,
  ChevronRight,
  RefreshCw,
  Terminal,
} from "lucide-react";
import SEO from "../components/SEO";

export default function HireEngineers() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    roles: ["MERN Stack"],
    seniority: "Senior",
    engagementModel: "Dedicated Full-Time",
    timeline: "Immediately",
    description: "",
    website_hp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleRoleToggle = (role) => {
    setFormData((prev) => {
      const exists = prev.roles.includes(role);
      const updated = exists
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role];
      return { ...prev, roles: updated.length ? updated : [role] };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (formData.website_hp) {
      setIsSubmitted(true);
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitError("Please fill in your name, work email, and contact number.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "hire_engineers_request", {
          company: formData.company,
          roles: formData.roles.join(", "),
          seniority: formData.seniority,
          model: formData.engagementModel,
        });
      }

      // Emulate API / WhatsApp dispatch
      await new Promise((resolve) => setTimeout(resolve, 600));
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError("An error occurred. Please message us directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi DevZore, I'm looking to hire engineers for my team. Roles: ${formData.roles.join(", ")}, Seniority: ${formData.seniority}, Model: ${formData.engagementModel}.`
  );
  const whatsappUrl = `https://wa.me/923348004300?text=${whatsappMessage}`;

  const engagementModels = [
    {
      title: "Dedicated Full-Time",
      tag: "Most Popular",
      desc: "A full-time senior engineer (160 hrs/month) integrated 100% into your team, code repositories, and daily standups.",
      features: [
        "40 hours/week dedicated focus",
        "Direct Slack, Teams & GitHub access",
        "Full timezone overlap with GCC & UK",
        "100% IP & code ownership from day one",
      ],
    },
    {
      title: "Team Augmentation",
      tag: "High Velocity",
      desc: "Plug 2 or more specialized developers into your existing sprints to clear backlogs or accelerate feature releases.",
      features: [
        "Rapid onboarding within 48 hours",
        "Zero recruitment or HR overhead",
        "Works with your Jira/Linear workflows",
        "Scale team up or down with 2 weeks notice",
      ],
    },
    {
      title: "Part-Time / Fractional",
      tag: "Flexible",
      desc: "Dedicated senior engineering capacity (20 hrs/week) ideal for early-stage MVPs, audits, and ongoing feature iterations.",
      features: [
        "80 hours/month senior development",
        "Architectural guidance & code reviews",
        "Cost-effective for seed startups",
        "Seamless upgrade to full-time",
      ],
    },
    {
      title: "Project-Based Delivery",
      tag: "Fixed Scope",
      desc: "Milestone-driven engineering with agreed specifications, guaranteed deliverables, and milestone payment terms.",
      features: [
        "Defined architecture & deliverables",
        "Fixed milestone pricing structure",
        "Weekly staging demos & QA testing",
        "30-day post-launch warranty support",
      ],
    },
    {
      title: "Risk-Free Trial Period",
      tag: "Zero Risk [OWNER TO CONFIRM]",
      desc: "Evaluate an engineer on real sprint tasks for 1–2 weeks before finalizing a long-term engagement.",
      features: [
        "Test code quality & communication",
        "Verify technical depth in your stack",
        "Easy replacement if not 100% matched",
        "Transparent trial agreement",
      ],
    },
  ];

  const availableRoles = [
    {
      title: "MERN Stack Developers",
      desc: "Full-stack architects building scalable MongoDB, Express, React, and Node.js business applications.",
      link: "/hire-mern-stack-developers",
      skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      title: "React Frontend Developers",
      desc: "Specialists in responsive single-page apps, complex dashboards, Tailwind CSS, and performance optimization.",
      link: "/hire-react-developers",
      skills: ["React 18", "Tailwind CSS", "Redux/Zustand", "Vite", "Web Vitals"],
    },
    {
      title: "Next.js Engineers",
      desc: "Experts in Next.js App Router, Server Components, SSR, static generation, and edge-rendered platforms.",
      link: "/hire-nextjs-developers",
      skills: ["Next.js", "App Router", "SSR / SSG", "Core Web Vitals", "SEO"],
    },
    {
      title: "Node.js Backend Engineers",
      desc: "Backend architects designing high-throughput REST APIs, database schemas, microservices, and payment pipelines.",
      link: "/hire-nodejs-developers",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    },
    {
      title: "Full-Stack AI Engineers",
      desc: "Engineers integrating OpenAI, Claude, Gemini, RAG vector retrieval, and custom intelligent agent workflows.",
      link: "/ai-integration-services",
      skills: ["OpenAI API", "Claude API", "RAG / Embeddings", "LangChain", "Vector DBs"],
    },
    {
      title: "UI/UX & Product Designers",
      desc: "Product designers crafting design systems, responsive web interfaces, and interactive Figma prototypes.",
      link: "/ui-ux-design",
      skills: ["Figma", "Design Systems", "User Research", "Wireframing", "Prototypes"],
    },
    {
      title: "Mobile App Developers",
      desc: "Cross-platform mobile specialists building iOS and Android applications with React Native.",
      link: "/mobile-apps",
      skills: ["React Native", "iOS / Android", "Push Notifications", "Offline Sync"],
    },
    {
      title: "QA & Automation Engineers",
      desc: "Test engineers ensuring regression testing, API automation, performance benchmarks, and zero regressions.",
      link: "/our-process",
      skills: ["Jest", "Playwright", "Postman", "CI/CD Testing", "Security Audits"],
    },
    {
      title: "DevOps & Cloud Engineers",
      desc: "Cloud specialists configuring Vercel, AWS, Cloudflare CDN, Docker containers, and high-availability setups.",
      link: "/cloud-deployment",
      skills: ["Vercel", "Cloudflare", "Docker", "AWS", "CI/CD Pipelines"],
    },
  ];

  const faqs = [
    {
      q: "How quickly can DevZore engineers join our team?",
      a: "We typically match and introduce vetted senior engineer profiles within 24 to 48 hours. Once you interview and approve the developer, onboarding and repository access can begin immediately.",
    },
    {
      q: "How do you handle time zone differences?",
      a: "Pakistan is at UTC+5. This provides complete or substantial business day overlap with Qatar & Saudi Arabia (UTC+3, just 2 hours difference), UAE (UTC+4, 1 hour difference), the UK & Europe (4–5 hours overlap), and morning hours in North America.",
    },
    {
      q: "Who owns the code and intellectual property (IP)?",
      a: "You retain 100% ownership of all source code, architecture documentation, design assets, and database schemas from day one. All work is committed directly to your private GitHub/GitLab repositories.",
    },
    {
      q: "What is your pricing and billing structure?",
      a: "We offer transparent monthly developer rates or milestone-based project billing. Pricing is tailored to developer seniority (Mid, Senior, Lead Architect) and engagement model without hidden agency retainers. Request a quote to receive exact rates.",
    },
    {
      q: "What if an engineer is not a good fit for our project?",
      a: "We offer a 1–2 week evaluation period [OWNER TO CONFIRM]. If an engineer does not meet your technical or communication standards, we provide an immediate replacement or credit with zero friction.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
        name: "Hire Engineers",
        item: "https://devzore.com/hire-engineers",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Hire Dedicated Software Engineers | DevZore Talent"
        description="Hire vetted senior MERN, React, Next.js, and Node.js developers. Dedicated monthly talent, team augmentation, timezone overlap, and 100% IP ownership."
        canonical="/hire-engineers"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <div className="min-h-screen bg-[#061923] text-white antialiased">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-16 sm:pb-20 border-b border-white/[0.08] bg-gradient-to-b from-[#030d14] to-[#061923]">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[400px] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none" />

          <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                  <Sparkles size={13} />
                  <span>Dedicated Tech Talent & Staff Augmentation</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                  Hire Dedicated Senior Software Engineers
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Scale your product engineering with vetted full-stack MERN, React, Next.js, and Node.js developers. Dedicated monthly talent, seamless timezone overlap across the GCC, UK, and US, and 100% code ownership.
                </p>

                {/* Key Proof Strip */}
                <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#1bbac8]" />
                    <span>180+ Delivered Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#1bbac8]" />
                    <span>Direct Slack / Teams Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#1bbac8]" />
                    <span>Mutual NDA & 100% IP Handover</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#hire-form"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white font-bold text-sm transition shadow-lg shadow-[#0796A8]/20"
                  >
                    <Users size={15} />
                    <span>Request Engineers Now</span>
                    <ArrowRight size={14} />
                  </a>

                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:border-cyan-400/40 hover:bg-white/[0.04] text-slate-200 font-semibold text-sm transition"
                  >
                    <span>Looking for Open Jobs? Visit Careers</span>
                    <ChevronRight size={14} className="text-[#1bbac8]" />
                  </Link>
                </div>
              </div>

              {/* HERO SIDE STATS CARD */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#05141c]/90 backdrop-blur-md shadow-2xl space-y-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] border-b border-white/[0.08] pb-3">
                    DevZore Talent Bench
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-2xl font-black text-white">48h</div>
                      <div className="text-xs text-slate-400 mt-1">Profile Shortlist Time</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-2xl font-black text-[#1bbac8]">100%</div>
                      <div className="text-xs text-slate-400 mt-1">Client IP Ownership</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-2xl font-black text-white">180+</div>
                      <div className="text-xs text-slate-400 mt-1">Projects Delivered</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-2xl font-black text-[#1bbac8]">UTC+5</div>
                      <div className="text-xs text-slate-400 mt-1">GCC & UK Timezone Overlap</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md"
                    >
                      <MessageSquare size={14} />
                      <span>Chat with Lead Architect on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: ENGAGEMENT MODELS */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#05141c]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Flexibility
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Flexible Engagement Models
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Choose the staffing structure that best fits your product roadmap and engineering velocity:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engagementModels.map((model, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/30 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-cyan-500/15 text-[#1bbac8] border border-cyan-500/30">
                        {model.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{model.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {model.desc}
                    </p>

                    <ul className="space-y-2.5 text-xs text-slate-300 border-t border-white/[0.08] pt-4">
                      {model.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check size={13} className="text-[#1bbac8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08]">
                    <a
                      href="#hire-form"
                      onClick={() => setFormData((prev) => ({ ...prev, engagementModel: model.title }))}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition"
                    >
                      <span>Select this model</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: ROLES AVAILABLE (WITH 4 DEDICATED SUB-PAGE LINKS) */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#061923]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Capabilities
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Engineering Roles Available
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Vetted senior engineers ready to deploy on your software stack:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-[#030d14] hover:border-cyan-500/40 transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      <Link to={role.link} className="hover:text-[#1bbac8] transition">
                        {role.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {role.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {role.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded text-[11px] font-semibold bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between">
                    <Link
                      to={role.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1bbac8] hover:text-white transition"
                    >
                      <span>Explore {role.title.split(" ")[0]} Talent</span>
                      <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: HIRING PROCESS (5 STEPS) */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#05141c]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Streamlined Staffing
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                How Our Talent Matching Works
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                From requirements to your first code commit in 5 transparent steps:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "01",
                  title: "Share Requirements",
                  desc: "Tell us the tech stack, seniority, required timezone overlap, and timeline.",
                },
                {
                  step: "02",
                  title: "Review Candidate Profiles",
                  desc: "We shortlist matching senior profiles with real code portfolios within 24–48h.",
                },
                {
                  step: "03",
                  title: "Interview Engineers",
                  desc: "Conduct 1-on-1 technical interviews and inspect their previous architectures.",
                },
                {
                  step: "04",
                  title: "Risk-Free Trial",
                  desc: "Evaluate the engineer on real sprint tasks for 1–2 weeks [OWNER TO CONFIRM].",
                },
                {
                  step: "05",
                  title: "Direct Onboarding",
                  desc: "Immediate Slack/Teams access, GitHub repository onboarding, and daily standups.",
                },
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
                >
                  <div className="text-xl font-black font-mono text-[#1bbac8] mb-3">
                    {s.step}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY DEVZORE TALENT */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#061923]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Client Advantage
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Companies Choose DevZore Talent
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Proven technical standards that protect your engineering velocity and code quality:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <CheckCircle2 size={20} className="text-[#1bbac8]" />,
                  title: "180+ Delivered Projects",
                  desc: "Our engineers have built mission-critical production platforms across retail, cold-chain logistics, tourism booking, and consumer finance.",
                },
                {
                  icon: <MessageSquare size={20} className="text-[#1bbac8]" />,
                  title: "Direct Engineer Communication",
                  desc: "No middlemen or non-technical account managers. You communicate directly with your developers on Slack, Teams, WhatsApp, or Google Meet.",
                },
                {
                  icon: <Globe size={20} className="text-[#1bbac8]" />,
                  title: "GCC, UK & US Timezone Overlap",
                  desc: "Pakistan (UTC+5) is only 2 hours ahead of Doha/Riyadh, 1 hour ahead of Dubai, and shares 4–5 core working hours with London and Europe.",
                },
                {
                  icon: <ShieldCheck size={20} className="text-[#1bbac8]" />,
                  title: "100% IP & Source Code Handover",
                  desc: "All code is authored directly in your private GitHub repositories with clean commit messages and zero vendor lock-in.",
                },
                {
                  icon: <RefreshCw size={20} className="text-[#1bbac8]" />,
                  title: "Replacement Guarantee [OWNER TO CONFIRM]",
                  desc: "If any engineer does not meet your expectations, we provide an immediate replacement with smooth handover.",
                },
                {
                  icon: <Cpu size={20} className="text-[#1bbac8]" />,
                  title: "Modern Tools & Agile Sprints",
                  desc: "Experienced with Jira, Linear, GitHub CI/CD, Docker, and 2-week agile sprint rhythms from day one.",
                },
              ].map((adv, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-[#030d14]"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                    {adv.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{adv.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: REQUEST ENGINEERS FORM */}
        <section id="hire-form" className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#05141c]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                  Get In Touch
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Request Dedicated Engineers
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tell us about your project requirements and the roles you need to hire. We will review your scope and provide candidate profiles within 24–48 hours.
                </p>

                <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#030d14] space-y-3">
                  <div className="text-xs font-bold uppercase text-[#1bbac8] tracking-wider">
                    Transparent Pricing Approach
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tailored to seniority (Mid, Senior, Lead Architect) and engagement model. We do not charge hidden recruitment fees.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition pt-1"
                  >
                    <MessageSquare size={14} />
                    <span>Or chat instantly on WhatsApp (+92 334 8004300)</span>
                  </a>
                </div>

                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#1bbac8]" />
                    <span>Mutual NDA available upon request [OWNER TO CONFIRM]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock size={14} className="text-[#1bbac8]" />
                    <span>100% Confidential. Zero spam policy.</span>
                  </div>
                </div>
              </div>

              {/* REQUEST FORM */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#030d14] shadow-2xl">
                  {isSubmitted ? (
                    <div className="py-8 text-center space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                        <CheckCircle2 size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Request Received!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                        Thank you for reaching out to DevZore. Our engineering lead will review your requirements and follow up with candidate profiles within 24–48 hours.
                      </p>
                      <div className="pt-4">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md"
                        >
                          <MessageSquare size={14} />
                          <span>Discuss Instantly on WhatsApp</span>
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
                            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Company / Organization
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Acme Corp / Agency"
                            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
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
                            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
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
                            placeholder="+44 20 1234 5678"
                            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
                          />
                        </div>
                      </div>

                      {/* ROLES NEEDED CHECKBOXES */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Roles Needed (Select all that apply)
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {[
                            "MERN Stack",
                            "React.js",
                            "Next.js",
                            "Node.js",
                            "AI Integration",
                            "UI/UX Design",
                          ].map((role) => (
                            <button
                              key={role}
                              type="button"
                              onClick={() => handleRoleToggle(role)}
                              className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition border ${
                                formData.roles.includes(role)
                                  ? "bg-cyan-500/20 text-[#1bbac8] border-cyan-500/40"
                                  : "bg-white/[0.02] text-slate-300 border-white/10 hover:bg-white/[0.05]"
                              }`}
                            >
                              {role}
                            </button>
                          ))}
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
                            Engagement
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
                            Start Date
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
                          Project Description / Requirements
                        </label>
                        <textarea
                          rows={3}
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Briefly describe your product, technical stack, or specific challenges..."
                          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#1bbac8] focus:outline-none focus:ring-1 focus:ring-[#1bbac8]"
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
                            <span>Submit Engineer Request</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="py-16 sm:py-20 bg-[#061923]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Common Inquiries
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-[#030d14]"
                >
                  <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
