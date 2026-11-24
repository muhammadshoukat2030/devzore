import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  Eye,
  FileCheck2,
  FileText,
  Fingerprint,
  Languages,
  Printer,
  Receipt,
  ScanFace,
  Shield,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";
import ProjectBriefCTA from "../components/ProjectBriefCTA";
import taekwondoManagement from "../assets/taekwondo_management.webp";

export default function TaekwondoAcademyManagementSystem() {
  const [openFaq, setOpenFaq] = useState(0);

  // Background grids for rhythmic section alternating
  const lightGrid = {
    backgroundImage:
      "linear-gradient(rgba(7,25,35,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(7,25,35,0.045) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

  const SectionLabel = ({ children, light = false }) => (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
        light
          ? "bg-white/[0.08] text-[#22bdca] border border-white/[0.12]"
          : "bg-[#071923]/5 text-[#0796A8] border border-[#0796A8]/20"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#18bdcb]" />
      {children}
    </div>
  );

  const modules = [
    {
      number: "01",
      icon: <ScanFace size={22} />,
      title: "Smart Biometric & Digital Attendance Terminal",
      desc: "Hardware-ready attendance engine supporting facial recognition, digital fingerprint scanners, and rapid numeric roll check-ins. Logs 281+ synchronized check-ins with Present, Absent, Late, and Official Leave statuses.",
      points: [
        "Facial identification and fingerprint hardware integration",
        "Morning, evening, and weekend training batch rosters",
        "Automated attendance percentage tracking for belt exam eligibility",
        "Daily attendance SMS and WhatsApp notifications for guardians",
      ],
    },
    {
      number: "02",
      icon: <Languages size={22} />,
      title: "Official Bilingual Urdu/English Admission Desk",
      desc: "Comprehensive 4-stage admission desk with simultaneous English and Nastaliq Urdu labels (المرتضیٰ شاہ تائیکوانڈو اکیڈمی داخله فارم), capturing complete athlete dossiers from day one.",
      points: [
        "CNIC / B-Form verification with automatic age calculation",
        "Guardian WhatsApp and emergency contact routing",
        "Sports experience history & chronic medical illness disclosures",
        "Instant AMS-2026 serial generation & auto-initialized fee ledger",
      ],
    },
    {
      number: "03",
      icon: <Receipt size={22} />,
      title: "Fee Desk, Baqaya Arrears & Dual-Part Receipts",
      desc: "Automated monthly fee collection with baqaya (arrears) carry-forward, defaulters recovery desk, and perforated dual-slip receipt printing for tamper-proof accounting.",
      points: [
        "Dual-part perforated receipts: Academy Record Copy + Student Copy",
        "Automatic carry-forward of unpaid balances into subsequent months",
        "Defaulters desk with overdue days and remaining balance alerts",
        "One-click automated WhatsApp payment reminder template",
      ],
    },
    {
      number: "04",
      icon: <Award size={22} />,
      title: "Official PTF & KPTA Belt Promotion Certificate Engine",
      desc: "Exact 1:1 physical replica of official Pakistan Taekwondo Federation (PTF) and KPK Taekwondo Association (KPTA) belt certificates with strict A4 zero-margin print CSS.",
      points: [
        "Dynamic belt color schemes (Yellow, Green, Blue, Red, Black/Dan)",
        "Authentic Korean Hangul watermarks (跆, 拳, 道) and 32-point gold seal",
        "Cursive digital signature of Grand Master Murtaza Hassan Bangash",
        "Zero-margin 210mm x 297mm A4 portrait print CSS eliminating cutoffs",
      ],
    },
    {
      number: "05",
      icon: <Trophy size={22} />,
      title: "Student Registry & Tournament Medals Dossier",
      desc: "Comprehensive athlete profiles tracking belt promotions, National/Provincial championship medals, attendance history, and full financial ledger records in a single modal.",
      points: [
        "Belt rank filter: White (25%), Yellow, Green, Blue, Red, and Black Dan",
        "Tournament medal archives and athlete sports distinctions",
        "Complete payment history with instant receipt re-printing",
        "Medical safety notes, emergency contacts, and blood group records",
      ],
    },
    {
      number: "06",
      icon: <FileCheck2 size={22} />,
      title: "Executive Analytics & Financial Audit Dashboard",
      desc: "Real-time master control dashboard displaying active enrolled rosters, daily attendance trends, 6-month fee recovery charts, and belt distribution analytics.",
      points: [
        "Live KPI counters: Active Enrolled Roster, Today's Attendance, Cash Recovered",
        "Fee Collection Revenue vs Pending Baqaya 6-month cash chart",
        "Interactive belt distribution donut chart (White to Black/Dan)",
        "Month-end financial audit reports with exportable Excel/PDF sheets",
      ],
    },
  ];

  const sportsTypes = [
    {
      icon: <Trophy size={22} className="text-[#0796A8]" />,
      title: "Taekwondo Dojangs (WTF / PTF / Kukkiwon)",
      desc: "Designed specifically for official federations tracking Dan ranks, Poomsae belt tests, sparring sparring camps, and Kukkiwon standards.",
    },
    {
      icon: <Shield size={22} className="text-[#0796A8]" />,
      title: "Karate & Traditional Martial Arts Dojos",
      desc: "Managing Kata gradings, Kumite equipment fees, student Gi inventory, and Kyu belt examinations with official certificate printing.",
    },
    {
      icon: <ScanFace size={22} className="text-[#0796A8]" />,
      title: "Boxing, MMA & Combat Training Gyms",
      desc: "Shift-based fighter attendance, coach private lesson bookings, competition weight class records, and automated membership renewals.",
    },
    {
      icon: <Users size={22} className="text-[#0796A8]" />,
      title: "Gymnastics, Judo & Multi-Sport Academies",
      desc: "Multi-batch scheduling, child safety medical disclosures, dual-slip guardian fee collection, and tournament medal archives.",
    },
  ];

  const faqs = [
    {
      q: "How does the smart biometric and facial attendance terminal work?",
      a: "The attendance terminal runs on any web browser connected to USB or network biometric hardware, digital card scanners, or facial recognition webcams. Instructors can also mark attendance with one-touch numeric roll numbers. The system synchronizes status (Present, Absent, Late, Official Leave) with exact timestamps and calculates exam attendance eligibility automatically.",
    },
    {
      q: "What is a dual-part perforated fee receipt?",
      a: "A dual-part perforated receipt prints both an 'Academy Record Copy' (for the academy's audited cash ledger) and a 'Student / Guardian Copy' (stamped for the parent) on a single sheet or 80mm slip with a visible cut/tear line. This guarantees 100% transparent fee reconciliation and eliminates missing payment disputes.",
    },
    {
      q: "Can the certificate engine print official Pakistan Taekwondo Federation (PTF) belt certificates?",
      a: "Yes. The certificate engine was engineered as an exact 1:1 replica of official Pakistan Taekwondo Federation (PTF) and KPK Taekwondo Association (KPTA) belt certificates. It renders dynamic belt color themes (Yellow, Green, Blue, Red, Black), Korean martial arts calligraphy watermarks (跆, 拳, 道), a 32-point gold scalloped seal with Hangul (태권도), and strict 210mm x 297mm A4 zero-margin CSS to ensure clean edge-to-edge printing without headers or blank second pages.",
    },
    {
      q: "Does the system support Urdu language for Pakistani academies?",
      a: "Yes. The admission desk features simultaneous English and Nastaliq Urdu labels (المرتضیٰ شاہ تائیکوانڈو اکیڈمی داخله فارم) so administrative staff, students, and guardians can easily fill out personal information, medical disclosures, and guardian contact details without language friction.",
    },
    {
      q: "How does the automated Baqaya (Arrears) engine manage unpaid fees?",
      a: "When a new billing cycle generates, any unpaid fees from the previous month automatically carry forward as Baqaya. The Defaulters Desk calculates the exact days overdue, logs pending amounts, and generates pre-filled WhatsApp payment reminders with one click.",
    },
    {
      q: "Do we receive full source code and database ownership upon handover?",
      a: "Yes. DevZore delivers 100% full source code handover with complete intellectual property rights, zero recurring user licenses, MongoDB schema documentation, and deployment on your private Vercel or cloud server environment.",
    },
  ];

  const pageTitle = "Taekwondo Academy Management System Development | DevZore";
  const pageDescription =
    "Custom martial arts & taekwondo academy management software. Biometric attendance, bilingual Urdu admissions, baqaya fee ledgers, and PTF belt certificates.";

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Taekwondo Academy Management System Development",
      serviceType: "Martial Arts Academy ERP & Automation Software",
      provider: {
        "@type": "Organization",
        name: "DevZore",
        url: "https://devzore.com",
      },
      areaServed: "Worldwide",
      description: pageDescription,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://devzore.com/" },
        { "@type": "ListItem", position: 2, name: "Management Systems", item: "https://devzore.com/management-systems" },
        { "@type": "ListItem", position: 3, name: "Taekwondo Academy Management System", item: "https://devzore.com/taekwondo-academy-management-system" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20am%20interested%20in%20a%20Custom%20Taekwondo%20or%20Martial%20Arts%20Academy%20Management%20System.";

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical="/taekwondo-academy-management-system"
        schema={schema}
        keywords="taekwondo academy management system, martial arts software, biometric attendance martial arts, student belt certificate generator, academy fee management, dojang management software, ptf belt certificates"
      />

      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0796A8]/20 selection:text-[#071923]">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SECTION (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-14 sm:pb-20 bg-[#04111a] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          {/* Ambient Lighting Gradients */}
          <div className="absolute -top-32 left-[10%] w-[550px] h-[550px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 right-[5%] w-[420px] h-[420px] rounded-full bg-[#3b82f6]/10 blur-[150px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-3xl">
              <SectionLabel light>Martial Arts & Sports Academy ERP · PTF & KPTA Accredited Automation</SectionLabel>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-5">
                Taekwondo & Martial Arts{" "}
                <span className="text-[#22bdca]">Academy Management System</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                Bespoke academy automation software engineered for martial arts dojangs, combat training centers, and sports academies. Features smart biometric and facial attendance terminals, bilingual Urdu/English admissions, automated monthly fee ledgers with perforated dual-part receipts, and authentic Pakistan Taekwondo Federation (PTF) belt promotion certificates.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0796A8] hover:bg-[#18bdcb] px-6 py-3.5 text-sm font-bold text-white transition shadow-lg shadow-[#0796A8]/25"
                >
                  Discuss Academy Software on WhatsApp
                  <ArrowRight size={15} />
                </a>

                <a
                  href="https://taekwondo-academy-management-571x.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition backdrop-blur-sm"
                >
                  <span>Launch Live System Demo</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* QUICK FACTS STRIP */}
              <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl font-extrabold text-[#22bdca]">Biometric</div>
                  <div className="text-xs text-slate-400 mt-1">Facial &amp; Fingerprint Terminal</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">Dual-Slip</div>
                  <div className="text-xs text-slate-400 mt-1">Perforated Fee Receipts</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#22bdca]">PTF 1:1</div>
                  <div className="text-xs text-slate-400 mt-1">Official Belt Certificates</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">Bilingual</div>
                  <div className="text-xs text-slate-400 mt-1">English &amp; Nastaliq Urdu</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: AEO DIRECT ANSWER BLOCK (LIGHT SLATE) */}
        {/* ========================================================================= */}
        <section className="relative py-14 sm:py-18 bg-[#f8fafb] border-b border-slate-200">
          <div className="absolute inset-0 pointer-events-none" style={lightGrid} />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-8">
              <SectionLabel>AEO Direct Overview · Martial Arts Academy Automation</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071923] tracking-tight">
                What Is a Modern <span className="text-[#0796A8]">Martial Arts Academy Management System?</span>
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-medium">
                A <strong>Taekwondo & Martial Arts Academy Management System</strong> is specialized enterprise software engineered for combat sports dojangs, karate dojos, and fitness academies. It replaces scattered paper admission registers, unrecorded student medical health disclosures, manual attendance roll calls, and disputed fee collection ledgers with a unified, high-availability web platform. Instructors manage student belt rank progressions from White to Black Dan, track biometric attendance, issue perforated dual-part fee receipts, and print officially accredited federation promotion certificates with zero margins.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0796A8] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#071923]">Biometric &amp; Facial Check-In</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Instant check-in terminal logging attendance status, timestamps, and belt examination qualification ratios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0796A8] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#071923]">Dual-Part Perforated Receipts</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Academy Record Copy and Student Copy printed side-by-side with automated carry-forward of unpaid Baqaya.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0796A8] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#071923]">Official Belt Certificate Engine</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      1:1 replica of official Pakistan Taekwondo Federation certificates with Hangul watermarks and A4 print CSS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: 6 CORE ACADEMY MODULES (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-12">
              <SectionLabel>Core System Architecture</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071923] tracking-tight">
                Engineered Modules for <span className="text-[#0796A8]">Academy Excellence</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Every component is purpose-built to eliminate academy paperwork, enforce belt qualification standards, and accelerate cash recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((m, idx) => (
                <article
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-[#fcfdfe] hover:bg-white p-6 transition-all duration-300 hover:border-[#0796A8]/50 hover:shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#071923] text-[#22bdca] flex items-center justify-center shadow-sm">
                        {m.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">{m.number}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#071923] group-hover:text-[#0796A8] transition">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {m.desc}
                    </p>

                    <ul className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      {m.points.map((p, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <Check size={13} className="text-[#0796A8] shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: VERIFIED PRODUCTION SHOWCASE (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative py-14 sm:py-20 bg-[#071923] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute top-0 right-0 w-[550px] h-[450px] bg-[#0796A8]/12 blur-[150px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionLabel light>Verified Live Production Software</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Production System: <span className="text-[#25bfce]">Al Murtaza Shah Taekwondo Academy</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Deployed and verified on MongoDB production clusters for Grand Master Murtaza Hassan Bangash (7th Dan PTF / Kukkiwon Korea) in Kohat, accredited under the Pakistan Taekwondo Federation (PTF) and Khyber Pakhtunkhwa Taekwondo Association (KPTA).
              </p>
            </div>

            {/* MOCKUP CONTAINER */}
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0a2332] to-[#04121a] p-4 sm:p-7 shadow-2xl backdrop-blur-sm">
              {/* Window Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-300 hidden sm:inline">
                    AMOT Taekwondo Academy Management System — Multi-Device Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-semibold border border-emerald-500/20">
                    Live System: Verified 0 Errors
                  </span>
                  <span className="text-slate-400 hidden sm:inline">PTF &amp; KPTA Recognized</span>
                </div>
              </div>

              {/* Elevated Mockup Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#020b10] shadow-inner group">
                <img
                  src={taekwondoManagement}
                  alt="Al Murtaza Shah Taekwondo Academy Management System on Laptop, Tablet and Mobile"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* LIVE DATABASE METRICS */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Fee Collected</div>
                  <div className="text-lg sm:text-xl font-black text-emerald-400 mt-1">PKR 43,500</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">74% monthly recovery</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Attendance Events</div>
                  <div className="text-lg sm:text-xl font-black text-white mt-1">281 Logs</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Biometric sync verified</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Certificates Issued</div>
                  <div className="text-lg sm:text-xl font-black text-[#22bdca] mt-1">21 Archived</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">PTF / KPTA serials</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Roster</div>
                  <div className="text-lg sm:text-xl font-black text-white mt-1">100% Active</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">White to Black Dan</div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={15} className="text-[#20bdcb]" />
                  <span>Belt ranks: White (25%), Yellow (16.7%), Green (8.3%), Blue (16.7%), Red (16.7%), Black Dan (16.7%)</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/projects/taekwondo-academy-management"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0796A8] hover:bg-[#18bdcb] px-5 py-2.5 text-xs font-bold text-white transition shadow-lg shadow-[#0796A8]/20"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={14} />
                  </Link>

                  <a
                    href="https://taekwondo-academy-management-571x.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 hover:bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition"
                  >
                    <span>Launch Live System</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: TARGET ACADEMY VERTICALS (LIGHT SLATE) */}
        {/* ========================================================================= */}
        <section className="relative py-14 sm:py-18 bg-[#f7f9fa] border-b border-slate-200">
          <div className="absolute inset-0 pointer-events-none" style={lightGrid} />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-12">
              <SectionLabel>Academy &amp; Sports Verticals</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071923] tracking-tight">
                Software Tailored for <span className="text-[#0796A8]">Combat &amp; Sports Academies</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Whether you operate a single martial arts dojang or a multi-branch athletic training academy, our platform adapts to your grading criteria.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {sportsTypes.map((s, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#0796A8]/40 hover:shadow-md transition duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#edf4f5] text-[#07899a] flex items-center justify-center mb-4 border border-slate-200/80">
                    {s.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#071923] mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: ZERO-MARGIN PRINT ENGINE & ARCHITECTURE (DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative py-14 sm:py-20 bg-[#071923] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mb-12">
              <SectionLabel light>Engineering Standards &amp; Hardware</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Zero-Margin Print CSS &amp; <span className="text-[#22bdca]">Hardware Integration</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                Rigorous full-stack engineering ensuring physical certificates print with millimetric precision and biometric scanners sync in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#09202c]/80 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#22bdca] flex items-center justify-center mb-4">
                  <Printer size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">A4 Zero-Margin Print CSS</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Strict 210mm x 297mm portrait print styling. Automatically suppresses browser headers and footers, eliminating blank second pages and certificate clipping across Chrome, Edge, and Safari.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#09202c]/80 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#22bdca] flex items-center justify-center mb-4">
                  <Fingerprint size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Biometric Terminal Drivers</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Plug-and-play drivers supporting USB fingerprint readers, TCP/IP biometric gate terminals, and browser-based facial recognition check-in streams.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#09202c]/80 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#22bdca] flex items-center justify-center mb-4">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">JWT Security &amp; Audit Logs</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Role-based access protection (Master Admin, Head Instructor, Cashier) secured with encrypted JWT cookie middleware and tamper-proof financial transaction logs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: TECHNICAL FAQS (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-5 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>Academy System FAQs</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071923] tracking-tight">
                Frequently Asked <span className="text-[#0796A8]">Questions</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Clear answers regarding biometric attendance, dual-slip receipts, PTF certificates, and code ownership.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-[#fbfcfc] overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-[#071923] pr-2">
                        {faq.q}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-[#0796A8] text-white" : ""
                        }`}
                      >
                        <ChevronDown size={16} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: CONVERSION PROJECT BRIEF CTA (DARK NAVY ANCHOR) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-[#06151d] text-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <ProjectBriefCTA
              title="Modernize Your Martial Arts Academy with Custom Software"
              subtitle="Tell us about your academy setup, student volume, and biometric requirements. Our senior engineers will prepare a technical plan and live demo."
              serviceContext="Taekwondo Academy Management System"
            />
          </div>
        </section>
      </div>
    </>
  );
}
