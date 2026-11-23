import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CreditCard,
  ExternalLink,
  Globe2,
  Navigation,
  Compass,
  Sparkles,
  Ticket,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";
import ProjectBriefCTA from "../components/ProjectBriefCTA";
import qatarTouristImg from "../assets/qatar_tourist_agency.webp";
import gulfDunesImg from "../assets/gulf-dunes.webp";

export default function TourBookingSystem() {
  const [activeFaq, setActiveFaq] = useState(null);

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

  const whatsappUrl =
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20tour%20booking%20system%20development.";

  const modules = [
    {
      icon: <Compass size={20} />,
      number: "01",
      title: "Interactive Tour Catalog & Rich Itineraries",
      desc: "Showcase desert safaris, city tours, private dhow cruises, and multi-day packages with high-resolution photography, detailed inclusions, schedules, and transparent pricing.",
      points: [
        "Rich package landing pages & galleries",
        "Clear inclusions, exclusions & safety rules",
        "Multi-currency pricing (USD, QAR, AED, EUR)",
      ],
    },
    {
      icon: <Calendar size={20} />,
      number: "02",
      title: "Live Date, Slot & Seat Availability Calendar",
      desc: "Real-time reservation calendar tracking available passenger seats per time slot (morning, sunset, overnight) preventing double-bookings during peak tourist seasons.",
      points: [
        "Live seat & vehicle capacity limits",
        "Morning, evening & private departure slots",
        "Seasonal surge & peak-rate calendar rules",
      ],
    },
    {
      icon: <CreditCard size={20} />,
      number: "03",
      title: "Online Payment Gateways & WhatsApp Concierge",
      desc: "Accept international credit/debit cards seamlessly (Stripe, PayPal, regional gateways) alongside instant WhatsApp booking pre-fill for personalized concierge reservations.",
      points: [
        "Global card checkout with 3D Secure",
        "Instant pre-populated WhatsApp reservation links",
        "Zero OTA middleman commission deductions",
      ],
    },
    {
      icon: <Navigation size={20} />,
      number: "04",
      title: "Driver, Safari Guide & Fleet Dispatch",
      desc: "Automated daily trip manifests for 4x4 drivers, cruise captains, and tour guides with hotel guest pick-up locations and passenger count verification.",
      points: [
        "Hotel pick-up & meeting point schedules",
        "Driver daily passenger manifests",
        "Vehicle fleet allocation & availability",
      ],
    },
    {
      icon: <Ticket size={20} />,
      number: "05",
      title: "Automated Vouchers & Booking Confirmations",
      desc: "Automated booking confirmation dispatches via WhatsApp and email with branded PDF reservation vouchers, QR codes, and Google Maps meeting locations.",
      points: [
        "Printable & mobile PDF booking vouchers",
        "Automated confirmation emails & WhatsApp alerts",
        "Configurable cancellation & refund policies",
      ],
    },
    {
      icon: <Globe2 size={20} />,
      number: "06",
      title: "Destination SEO & Schema.org Architecture",
      desc: "Built-in TouristTrip, TravelAgency, and FAQPage structured data to rank your tour packages at the top of Google search results for international travelers.",
      points: [
        "Schema.org TouristTrip structured markup",
        "Fast mobile WebP gallery optimization",
        "Geo-targeted international landing pages",
      ],
    },
  ];

  const industries = [
    {
      title: "Desert Safari & Adventure Operators",
      desc: "4x4 dune bashing, quad biking, camel treks, and desert bedouin camp excursions across Qatar and GCC deserts.",
    },
    {
      title: "Boat, Yacht & Dhow Cruise Charters",
      desc: "Private island charters, sunset dinner cruises, and coastal sightseeing voyages with live slot booking.",
    },
    {
      title: "City Sightseeing & Cultural Tours",
      desc: "Museum expeditions, heritage walks, guided architecture bus tours, and VIP private airport transfers.",
    },
    {
      title: "Inbound Destination Travel Agencies",
      desc: "Multi-day travel packages, corporate group excursions, and hotel concierge booking desks with zero commission.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Tour & Booking Flow Discovery",
      desc: "We analyze your excursion packages, departure slots, vehicle capacities, payment gateways, and guest concierge workflows.",
    },
    {
      step: "02",
      title: "Design & High-Speed Architecture",
      desc: "We engineer lightweight, mobile-first booking funnels that load in under 1.5s for international tourists browsing on roaming mobile connections.",
    },
    {
      step: "03",
      title: "Payment & Calendar Integration",
      desc: "We connect real-time availability engines, international payment processing, WhatsApp concierge routing, and automated PDF voucher generators.",
    },
    {
      step: "04",
      title: "SEO Optimization & Launch",
      desc: "We implement destination Schema.org data, test booking flows end-to-end, deploy on edge infrastructure, and provide complete source code handover.",
    },
  ];

  const faqs = [
    {
      q: "What is a custom tour booking system?",
      a: "A custom tour booking system is dedicated software tailored to your travel or excursion business. Unlike generic platforms that charge 15% to 25% commissions (like TripAdvisor or GetYourGuide), an owned system lets tourists book directly with zero commissions, automated payment processing, and direct WhatsApp concierge integration.",
    },
    {
      q: "Can the system accept international credit cards and multi-currency payments?",
      a: "Yes. We integrate global payment gateways such as Stripe, PayPal, and regional Gulf gateways that accept international Visa, Mastercard, and American Express with automated currency conversion into USD, QAR, AED, EUR, or GBP.",
    },
    {
      q: "Can guests book directly through WhatsApp instead of paying online?",
      a: "Yes. We implement hybrid booking flows where guests can choose between immediate card payment or one-tap WhatsApp concierge booking with pre-filled package, date, and guest count details.",
    },
    {
      q: "How does the platform prevent overbooking during high seasons?",
      a: "The central availability engine enforces maximum passenger capacity per vehicle and departure slot. As soon as a slot reaches capacity, it automatically closes online or requires administrative approval.",
    },
    {
      q: "Do you provide source code handover and ongoing support?",
      a: "Yes. DevZore provides 100% source code handover upon deployment with full intellectual property rights, plus dedicated post-launch support and warranty maintenance.",
    },
  ];

  const pageTitle = "Tour Booking System & Safari Software | DevZore";
  const pageDescription =
    "Custom tour booking systems, safari reservation portals, excursion catalogs, live calendars, and payment gateways for tour operators and agencies.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tour Booking System Development",
    serviceType: "Travel & Tourism Booking Platform Development",
    provider: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    areaServed: "Worldwide",
    description: pageDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tour Booking Capabilities",
      itemListElement: [
        { "@type": "Offer", name: "Interactive Tour Catalog & Excursion Pages" },
        { "@type": "Offer", name: "Live Availability Calendar & Slot Booking" },
        { "@type": "Offer", name: "Online Payment Gateways & WhatsApp Concierge" },
        { "@type": "Offer", name: "Driver & Fleet Dispatch Manifests" },
      ],
    },
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://devzore.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://devzore.com/allservices" },
      { "@type": "ListItem", position: 3, name: "Tour Booking System", item: "https://devzore.com/tour-booking-system" },
    ],
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical="/tour-booking-system"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0796A8]/20 selection:text-[#071923]">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-12 sm:pb-16 bg-[#04111a] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[10%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 right-[5%] w-[420px] h-[420px] rounded-full bg-[#20bdcb]/8 blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[13px] font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <Compass size={13} />
                Travel & Tourism Software
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                Custom <span className="text-[#22bdca]">Tour Booking System</span> & Safari Software Development
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Stop losing 20% commission to third-party travel aggregators. We engineer custom tour booking systems, safari reservation portals, live seat calendars, and automated voucher dispatch tailored for excursion operators in Qatar, the GCC, and worldwide.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] text-xs sm:text-sm font-bold transition shadow-lg shadow-[#25D366]/20"
                >
                  <span>Discuss Your Booking System on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="#system-form"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] text-white text-xs sm:text-sm font-semibold transition"
                >
                  Request Technical Scope
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">0% Commission</div>
                  <div className="text-xs text-slate-400 mt-0.5">Direct client reservations</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">Live Calendars</div>
                  <div className="text-xs text-slate-400 mt-0.5">Real-time seat capacity</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">WhatsApp & Card</div>
                  <div className="text-xs text-slate-400 mt-0.5">Dual payment pathways</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: AEO ANSWER BLOCK (LIGHT SLATE WITH SUBTLE GRID) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#f8fafb] border-b border-slate-200" style={lightGrid}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />
              <SectionLabel>Clear Answer for Tour Operators</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] mb-4 tracking-tight">
                What Is a Tour Booking System and <span className="text-[#0796A8]">Why Build a Custom One?</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  A <strong className="text-slate-900">Tour Booking System</strong> is an interactive web portal that allows international travelers to discover excursion packages, check departure slot availability, make upfront online payments, and receive automated booking vouchers and meeting details.
                </p>
                <p>
                  <strong className="text-slate-900">Why Build Custom:</strong> Third-party platforms (TripAdvisor, Viator, GetYourGuide) take large commission cuts (15%–25%) and control your customer relationship. A custom-built booking system gives you 100% of the booking revenue, direct customer WhatsApp/email data, and custom pickup scheduling for your vehicles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: SYSTEM MODULES (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel>System Architecture</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                Core Capabilities Engineered for <span className="text-[#0796A8]">Tour Operators</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600">
                End-to-end features designed to maximize online reservations, eliminate commissions, and automate daily trip dispatches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((m, idx) => (
                <article
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-[0_18px_50px_rgba(7,25,35,0.08)] hover:border-[#0796A8]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#071923] to-[#18bdcb]" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf4f5] text-[#07899a] group-hover:bg-[#071923] group-hover:text-[#28c5d4] transition-colors">
                        {m.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">{m.number}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#071923] mb-2">{m.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">{m.desc}</p>
                  </div>
                  <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                    {m.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={13} className="text-[#07899a] shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: PROOF BLOCK (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative py-14 sm:py-18 bg-[#071923] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#0796A8]/10 blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel light>Verified Track Record</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Proven Platforms in the <span className="text-[#25bfce]">Qatar Tourism Market</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Explore real tour platforms we engineered that process high-season tourist traffic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#092230] hover:border-cyan-500/30 transition flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 mb-5 shadow-inner">
                    <img
                      src={qatarTouristImg}
                      alt="Desert Safari Qatar booking portal preview"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="600"
                      height="380"
                    />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#22bdca] mb-1">Live Case Study</div>
                  <h3 className="text-xl font-bold text-white mb-2">Desert Safari Qatar</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Engineered high-performance tourism web portal featuring morning safaris, sunset dune bashing, and overnight camps with instant WhatsApp reservation pathways for international travelers.
                  </p>
                </div>
                <Link
                  to="/projects/desert-safari-qatar"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22bdca] hover:text-white transition pt-4 border-t border-white/[0.08]"
                >
                  <span>Read Full Desert Safari Qatar Case Study</span>
                  <ExternalLink size={13} />
                </Link>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#092230] hover:border-cyan-500/30 transition flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 mb-5 shadow-inner">
                    <img
                      src={gulfDunesImg}
                      alt="Gulf Dunes Tourism excursion portal preview"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="600"
                      height="380"
                    />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#22bdca] mb-1">Live Case Study</div>
                  <h3 className="text-xl font-bold text-white mb-2">Gulf Dunes Tourism</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Multi-excursion booking platform categorizing desert expeditions, traditional dhow sea cruises, and Doha city cultural tours with structured booking funnels.
                  </p>
                </div>
                <Link
                  to="/projects/gulf-dunes-tourism"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22bdca] hover:text-white transition pt-4 border-t border-white/[0.08]"
                >
                  <span>Read Full Gulf Dunes Tourism Case Study</span>
                  <ExternalLink size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: OPERATORS SERVED (LIGHT SLATE WITH SUBTLE GRID) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#f7f9fa] border-b border-slate-200" style={lightGrid}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel>Operators Served</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                Tailored for <span className="text-[#0796A8]">Excursion & Activity Providers</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Custom reservation logic adapted to your unique fleet size, slot timings, and guest experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#0796A8]/50 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <h3 className="text-base font-bold text-[#071923] mb-2">{ind.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: IMPLEMENTATION PROCESS (HIGH-IMPACT DARK NAVY) */}
        {/* ========================================================================= */}
        <section className="relative py-12 sm:py-16 bg-[#071923] text-white border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel light>Implementation</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                How We Build Your <span className="text-[#25bfce]">Booking Platform</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                A structured engineering approach from excursion inventory mapping to production launch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
              {processSteps.map((p, idx) => (
                <article
                  key={idx}
                  className="p-6 bg-[#071923] hover:bg-[#0a202a] transition-colors flex flex-col justify-between min-h-[180px]"
                >
                  <div>
                    <div className="text-2xl font-black text-[#20becd]/60 font-mono mb-3">{p.step}</div>
                    <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: FAQ (CRISP CLEAN WHITE) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                Frequently Asked <span className="text-[#0796A8]">Questions</span>
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 bg-[#f8fafb] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-[#071923] hover:text-[#0796A8] transition"
                  >
                    <span>{faq.q}</span>
                    {activeFaq === idx ? (
                      <ChevronUp size={18} className="text-[#0796A8] shrink-0 ml-3" />
                    ) : (
                      <ChevronDown size={18} className="text-slate-400 shrink-0 ml-3" />
                    )}
                  </button>
                  {activeFaq === idx && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: CTA FORM (DARK NAVY ANCHOR) */}
        {/* ========================================================================= */}
        <section id="system-form" className="py-16 px-4 sm:px-6 bg-[#06151d] text-white">
          <div className="max-w-5xl mx-auto">
            <ProjectBriefCTA
              serviceContext="Tour & Safari Booking System"
              title="Ready to Launch Your Direct Tour Booking Portal?"
              subtitle="Discuss your excursion packages, departure schedules, payment gateways, and WhatsApp workflows with our travel engineering team."
            />
          </div>
        </section>
      </div>
    </>
  );
}
