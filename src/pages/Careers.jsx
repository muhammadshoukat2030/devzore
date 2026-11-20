import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  HeartHandshake,
  Layers,
  Mail,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  Check,
  ChevronRight,
  Clock,
  Terminal,
} from "lucide-react";
import SEO from "../components/SEO";
import { jobs } from "../data/jobs";

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState("All");

  const departments = ["All", "Engineering", "Frontend", "Backend", "Design"];

  const filteredJobs =
    selectedDept === "All"
      ? jobs
      : jobs.filter((job) => job.department.toLowerCase() === selectedDept.toLowerCase());

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
        name: "Careers",
        item: "https://devzore.com/careers",
      },
    ],
  };

  const cultureValues = [
    {
      icon: <Code2 size={20} className="text-[#1bbac8]" />,
      title: "Engineering Excellence",
      desc: "We write clean, modular, production-ready code. We build real business software that powers active commercial operations, not throwaway prototypes.",
    },
    {
      icon: <Users size={20} className="text-[#1bbac8]" />,
      title: "Direct Founder & Lead Collaboration",
      desc: "Work directly with lead engineer Muhammad Shoukat and experienced peers without layers of middle managers, bureaucratic tickets, or office politics.",
    },
    {
      icon: <Rocket size={20} className="text-[#1bbac8]" />,
      title: "Autonomy & Full Ownership",
      desc: "Engineers at DevZore own features end-to-end: from MongoDB schema design and RESTful endpoints to responsive React UI components.",
    },
    {
      icon: <HeartHandshake size={20} className="text-[#1bbac8]" />,
      title: "Respectful Work Rhythms",
      desc: "We prioritize deep focus over constant interruptions. With asynchronous-first communication, our calendar stays clear of unnecessary meetings.",
    },
  ];

  const howWeWork = [
    {
      title: "Remote-First Flexibility",
      desc: "Collaborate seamlessly from anywhere in Pakistan, the GCC, or internationally. As long as you have stable internet and overlap for daily syncs, your location is flexible.",
    },
    {
      title: "Git-Driven Development",
      desc: "Every feature goes through clean GitHub Pull Requests with thorough code reviews, automated CI checks, and staging deployment previews before production release.",
    },
    {
      title: "Focus on Real Business Impact",
      desc: "You will engineer mission-critical systems: warehouse inventory ERPs, logistics dispatch engines, and multi-currency international reservation portals.",
    },
  ];

  const hiringSteps = [
    {
      step: "01",
      title: "Application Review",
      desc: "Submit your GitHub profile, portfolio, and CV. We review your actual code and architecture within 5 business days [OWNER TO CONFIRM].",
    },
    {
      step: "02",
      title: "Technical Conversation",
      desc: "A 30–45 minute technical conversation discussing past production systems you have built, architecture trade-offs, and design thinking.",
    },
    {
      step: "03",
      title: "Practical Code Challenge",
      desc: "A focused, realistic code assignment or paid trial task simulating a real DevZore sprint module. Zero algorithmic trick questions.",
    },
    {
      step: "04",
      title: "Culture & Expectation Alignment",
      desc: "A brief alignment chat to discuss working rhythms, communication standards, career goals, and compensation packages.",
    },
    {
      step: "05",
      title: "Offer & Smooth Onboarding",
      desc: "Clear written agreement, immediate repository and tool access, and pairing with our lead engineer on your first active project sprint.",
    },
  ];

  const benefits = [
    {
      title: "100% Remote Flexibility",
      desc: "Work comfortably from your home office or preferred co-working space with flexible core working hours.",
    },
    {
      title: "Competitive Compensation [OWNER TO CONFIRM]",
      desc: "Performance-aligned compensation reviewed regularly against international market standards.",
    },
    {
      title: "Paid Time Off & Holidays [OWNER TO CONFIRM]",
      desc: "Generous annual leave and observance of official national and religious holidays.",
    },
    {
      title: "Continuous Learning Support [OWNER TO CONFIRM]",
      desc: "Access to engineering courses, technical books, and mentorship to stay at the cutting edge of tech.",
    },
    {
      title: "Delivery Milestone Bonuses [OWNER TO CONFIRM]",
      desc: "Direct financial recognition for delivering client software milestones ahead of schedule.",
    },
    {
      title: "Modern Tech Tooling",
      desc: "Work with modern development environments, AI-assisted coding tools, and cloud infrastructure.",
    },
  ];

  return (
    <>
      <SEO
        title="Careers at DevZore | Software Engineering Roles"
        description="Join DevZore's engineering team. Build production MERN, Next.js, and AI software for verified clients across Pakistan, Qatar, and worldwide."
        canonical="/careers"
        schema={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-[#061923] text-white antialiased">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-14 sm:pb-20 border-b border-white/[0.08] bg-gradient-to-b from-[#030d14] to-[#061923]">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none" />

          <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xs font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <Sparkles size={13} />
                <span>Join Our Engineering Team</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                Build Production Software with{" "}
                <span className="text-[#1bbac8]">DevZore</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                We are a software engineering agency building mission-critical web applications, SaaS platforms, and enterprise software for clients in Pakistan, Qatar, and worldwide. Work with senior engineers on real production code.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white font-bold text-sm transition shadow-lg shadow-[#0796A8]/20"
                >
                  <Briefcase size={15} />
                  <span>View Open Roles</span>
                  <ArrowRight size={14} />
                </a>

                <Link
                  to="/hire-engineers"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:border-cyan-400/40 hover:bg-white/[0.04] text-slate-200 font-semibold text-sm transition"
                >
                  <span>Need to Hire Engineers Instead?</span>
                  <ChevronRight size={14} className="text-[#1bbac8]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: CULTURE & VALUES */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#05141c]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Why DevZore
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Engineering Culture & Values
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                We are developers who take craftsmanship seriously. Here is what you can count on when you build software with us:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cultureValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/30 transition duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                    {val.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: HOW WE WORK */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#061923]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Work Environment
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                How We Collaborate Every Day
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                High autonomy, clean workflows, and direct communication:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {howWeWork.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-[#030d14] relative overflow-hidden"
                >
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center text-xs font-bold font-mono mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: REAL PRODUCTION TECH STACK */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#05141c]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Technical Stack
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Technologies You Will Use
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Our core stack is modern, battle-tested, and built for performance:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <div className="text-xs font-mono font-bold uppercase text-[#1bbac8] mb-3">
                  Frontend
                </div>
                <div className="space-y-2">
                  {["React 18", "Next.js App Router", "Tailwind CSS", "Vite", "HTML5 & Modern CSS"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1bbac8]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <div className="text-xs font-mono font-bold uppercase text-[#1bbac8] mb-3">
                  Backend & APIs
                </div>
                <div className="space-y-2">
                  {["Node.js", "Express.js", "RESTful Architecture", "JWT Authentication", "WebSockets"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1bbac8]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <div className="text-xs font-mono font-bold uppercase text-[#1bbac8] mb-3">
                  Databases
                </div>
                <div className="space-y-2">
                  {["MongoDB Atlas", "Mongoose ODM", "Aggregation Pipelines", "Redis Caching", "PostgreSQL"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1bbac8]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <div className="text-xs font-mono font-bold uppercase text-[#1bbac8] mb-3">
                  DevOps & Cloud
                </div>
                <div className="space-y-2">
                  {["Vercel Edge Platform", "Cloudflare CDN / DNS", "Docker Containers", "Git & GitHub PRs", "AI APIs (OpenAI/Claude)"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1bbac8]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: OPEN POSITIONS LIST */}
        <section id="open-roles" className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#061923]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                  Open Opportunities
                </div>
                <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Available Roles at DevZore
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  Select a role below to review responsibilities and submit your application:
                </p>
              </div>

              {/* Department Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => setSelectedDept(dept)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                      selectedDept === dept
                        ? "bg-[#0796A8] text-white shadow-md shadow-[#0796A8]/20"
                        : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* UPCOMING ROLES / SAMPLE NOTICE BANNER */}
            <div className="mb-8 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-200 text-xs leading-relaxed flex items-start gap-3">
              <Sparkles size={16} className="text-[#1bbac8] shrink-0 mt-0.5" />
              <div>
                <strong>Hiring Roadmap Note:</strong> The roles below illustrate our core engineering profiles. While specific full-time positions are periodically opened as client sprints scale, we review all developer applications on a rolling basis.
              </div>
            </div>

            {/* JOBS GRID */}
            <div className="grid gap-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/30 transition duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-cyan-500/15 text-[#1bbac8] border border-cyan-500/30">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                        {job.type}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Globe size={12} className="text-[#1bbac8]" /> {job.location}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock size={12} className="text-[#1bbac8]" /> Exp: {job.experience}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      <Link
                        to={`/careers/${job.slug}`}
                        className="hover:text-[#1bbac8] transition"
                      >
                        {job.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                      {job.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-semibold bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      to={`/careers/${job.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white text-xs font-bold transition shadow-md"
                    >
                      <span>View Role & Apply</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: HIRING PROCESS TIMELINE */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#05141c]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Transparency
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our 5-Step Hiring Process
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                We respect your time. Our hiring steps are fast, objective, and centered around real engineering capabilities:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {hiringSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xl font-black font-mono text-[#1bbac8] mb-3">
                      {step.step}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: PERKS & BENEFITS */}
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#061923]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8]">
                Perks & Benefits
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                What We Offer Our Engineers
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Empowering developers with the tools, flexibility, and rewards they need to do their best work:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-[#030d14]"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1bbac8] mb-2">
                    <Check size={14} className="text-[#1bbac8]" />
                    <span>{b.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: GENERAL TALENT POOL / OPEN APPLICATION */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#05141c] to-[#030d14]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20 flex items-center justify-center mx-auto mb-5">
              <Mail size={24} />
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Don't See Your Specific Role?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              We are constantly seeking ambitious React, Node.js, and Full-Stack engineers with a bias for shipping clean production software. Submit an open application and we will keep you in our direct talent bench.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@devzore.com?subject=Open%20Engineering%20Application%20-%20DevZore"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0796A8] hover:bg-[#1bbac8] text-white font-bold text-sm transition shadow-lg shadow-[#0796A8]/20"
              >
                <Send size={15} />
                <span>Send Open Application (hello@devzore.com)</span>
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/[0.05] text-slate-200 font-semibold text-sm transition"
              >
                <span>Explore Our Software Case Studies</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
