import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Store,
  Smartphone,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react";
import SEO from "../components/SEO";
import ProjectBriefCTA from "../components/ProjectBriefCTA";
import sarabFoodImg from "../assets/sarab_website_image.webp";

export default function FoodOrderingSystem() {
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
    "https://wa.me/923348004300?text=Hi%20DevZore,%20I%20want%20to%20discuss%20online%20food%20ordering%20system%20development.";

  const modules = [
    {
      icon: <UtensilsCrossed size={20} />,
      number: "01",
      title: "Interactive Digital Menu & Visual Catalog",
      desc: "Categorized food presentation with high-resolution food photography, dietary tags (Halal, Vegan, Gluten-Free), portion pricing, and instant out-of-stock toggles.",
      points: [
        "Rich visual food galleries with dietary tags",
        "Multiple portion sizes (Regular, Large, Family)",
        "One-click out-of-stock item toggling",
      ],
    },
    {
      icon: <Sparkles size={20} />,
      number: "02",
      title: "Meal Customization & Modifier Engine",
      desc: "Step-by-step modifier selection allowing diners to choose portion sizes, spice levels, sides, extra toppings, beverage pairings, and custom preparation notes.",
      points: [
        "Required vs optional meal modifier rules",
        "Add-on pricing logic with instant subtotal sync",
        "Special chef preparation notes input",
      ],
    },
    {
      icon: <Smartphone size={20} />,
      number: "03",
      title: "Real-Time Cart & Delivery Zone Checkout",
      desc: "Instant subtotal calculation, delivery zone radius fees, delivery address validation with Google Maps geolocation, and scheduled delivery time slots.",
      points: [
        "Kilometer-based delivery radius fee logic",
        "Google Maps pin-drop delivery address capture",
        "Immediate takeaway or scheduled delivery time",
      ],
    },
    {
      icon: <Store size={20} />,
      number: "04",
      title: "Kitchen Display System (KDS) & Order Queue",
      desc: "Real-time kitchen order screen showing active orders categorized by status (New, Preparing, Dispatched, Delivered) with audible chime alerts upon new order arrivals.",
      points: [
        "Audible alert on incoming kitchen tickets",
        "Color-coded prep timer & status advancement",
        "Direct thermal receipt printing in kitchen",
      ],
    },
    {
      icon: <MessageSquare size={20} />,
      number: "05",
      title: "Direct WhatsApp & SMS Order Routing",
      desc: "Automated instant customer order receipt dispatch via WhatsApp and SMS confirmation without middleman commission fees or delivery aggregator interference.",
      points: [
        "Instant WhatsApp customer order confirmation",
        "Automated rider dispatch notification",
        "Zero aggregator commission deductions",
      ],
    },
    {
      icon: <TrendingUp size={20} />,
      number: "06",
      title: "Customer Retention & Sales Analytics",
      desc: "Capture direct customer phone numbers, ordering histories, peak ordering hours, and favorite menu items to drive targeted re-ordering promotions.",
      points: [
        "100% direct customer data ownership",
        "Peak kitchen order hour analytics",
        "Menu item profitability & reorder rates",
      ],
    },
  ];

  const industries = [
    { title: "Standalone Restaurants & Bistros", desc: "Dine-in QR menus, takeaway pre-ordering, and local neighborhood delivery." },
    { title: "Fast-Food & Burger Chains", desc: "High-speed combo modifiers, portion customization, and rapid kitchen queue printing." },
    { title: "Cloud Kitchens & Dark Kitchens", desc: "Multi-brand centralized kitchen display, multi-zone delivery, and WhatsApp order routing." },
    { title: "Bakeries, Cafes & Dessert Bars", desc: "Cake customizations, scheduled pickup slots, and seasonal holiday catering orders." },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Menu & Kitchen Workflow Discovery",
      desc: "We analyze your menu categories, meal modifiers, delivery radius boundaries, and kitchen ticket handling procedures.",
    },
    {
      step: "02",
      title: "Mobile-First Storefront Engineering",
      desc: "We build ultra-fast, mobile-optimized digital menus that let smartphone diners browse, customize, and checkout in under 60 seconds.",
    },
    {
      step: "03",
      title: "Kitchen Queue & Notification Setup",
      desc: "We configure the real-time Kitchen Display System (KDS), thermal receipt printer drivers, and automated WhatsApp/SMS dispatch alerts.",
    },
    {
      step: "04",
      title: "Staff Onboarding & Production Launch",
      desc: "We train your cashier and kitchen staff, deploy on high-availability cloud servers, and provide post-launch support.",
    },
  ];

  const faqs = [
    {
      q: "What is a custom online food ordering system?",
      a: "A custom online food ordering system is an owned web platform where diners browse your digital menu, customize meals, and submit orders directly to your kitchen. Unlike third-party apps that charge 25% to 35% commission on every order, an owned system gives you 100% of the sale and direct customer contact data.",
    },
    {
      q: "Can diners order without creating an account or downloading an app?",
      a: "Yes. Our systems are engineered as lightweight, web-first progressive platforms accessible directly via URL or QR code on any smartphone browser. Diners can checkout in under a minute without forced app downloads or tedious password registrations.",
    },
    {
      q: "How does the kitchen receive incoming orders?",
      a: "Orders appear instantly on a tablet or desktop Kitchen Display System (KDS) with an audible chime alert. In addition, orders can automatically trigger a physical thermal printer at the kitchen station and dispatch a WhatsApp receipt to the restaurant manager.",
    },
    {
      q: "Can we restrict delivery to specific areas or kilometers?",
      a: "Yes. You can configure custom delivery zones based on kilometer radius from your restaurant branch, set minimum order values per zone, and charge tier-based delivery fees.",
    },
    {
      q: "Do you provide source code handover and ongoing support?",
      a: "Yes. DevZore provides 100% source code handover upon deployment with full intellectual property rights, plus dedicated post-launch support and warranty maintenance.",
    },
  ];

  const pageTitle = "Online Food Ordering System Development | DevZore";
  const pageDescription =
    "Custom online food ordering system development for restaurants, cafes, and chains. Commission-free visual menus, kitchen displays, and instant checkout.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online Food Ordering System Development",
    serviceType: "Restaurant Digital Ordering Software Development",
    provider: {
      "@type": "Organization",
      name: "DevZore",
      url: "https://devzore.com",
    },
    areaServed: "Worldwide",
    description: pageDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Food Ordering System Capabilities",
      itemListElement: [
        { "@type": "Offer", name: "Interactive Visual Digital Menu" },
        { "@type": "Offer", name: "Meal Customization & Modifier Engine" },
        { "@type": "Offer", name: "Kitchen Display System (KDS)" },
        { "@type": "Offer", name: "Direct WhatsApp & SMS Order Routing" },
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
      { "@type": "ListItem", position: 3, name: "Food Ordering System", item: "https://devzore.com/food-ordering-system" },
    ],
  };

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical="/food-ordering-system"
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
                <UtensilsCrossed size={13} />
                Restaurant Ordering Software
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                Custom <span className="text-[#22bdca]">Online Food Ordering System</span> Development
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Eliminate 30% third-party aggregator fees. We engineer custom digital ordering platforms with visual menus, meal customization engines, real-time kitchen displays, and automated WhatsApp order tickets for restaurants and food brands.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] text-xs sm:text-sm font-bold transition shadow-lg shadow-[#25D366]/20"
                >
                  <span>Discuss Your Restaurant System on WhatsApp</span>
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
                  <div className="text-xl sm:text-2xl font-bold text-white">0% Fees</div>
                  <div className="text-xs text-slate-400 mt-0.5">Keep 100% of order revenue</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#1bbac8]">Mobile First</div>
                  <div className="text-xs text-slate-400 mt-0.5">Sub-60s smartphone ordering</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Kitchen Display</div>
                  <div className="text-xs text-slate-400 mt-0.5">Real-time prep tickets</div>
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
              <SectionLabel>Clear Answer for Restaurant Owners</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] mb-4 tracking-tight">
                What Is an Online Food Ordering System and <span className="text-[#0796A8]">Why Own One?</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  An <strong className="text-slate-900">Online Food Ordering System</strong> is an owned digital storefront allowing diners to view structured visual menus, select meal add-ons, add items to a real-time cart, and submit pickup or delivery orders directly to your restaurant kitchen.
                </p>
                <p>
                  <strong className="text-slate-900">Why Own One:</strong> Food delivery aggregators (Foodpanda, UberEats, Deliveroo, Talabat) charge 25% to 35% commission on every order and conceal customer contact data. An owned system lets you retain 100% of the sale, build direct customer loyalty, and route orders directly to your kitchen and WhatsApp without fees.
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
                End-to-End Capabilities Engineered for <span className="text-[#0796A8]">Food Orders</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600">
                Direct ordering modules that eliminate aggregators, connect kitchen screens, and capture customer loyalty.
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
            <div className="p-6 sm:p-10 rounded-3xl border border-white/10 bg-[#092230] shadow-2xl">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <div>
                  <SectionLabel light>Verified Case Study Proof</SectionLabel>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                    Sarab Express: <span className="text-[#25bfce]">Commission-Free Food Ordering</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    Sarab Express shifted customers away from costly third-party aggregators into an owned, high-speed digital ordering storefront. Diners enjoy a rapid mobile ordering experience with exact item customization, while kitchen staff receive structured, error-free order tickets directly in the preparation queue.
                  </p>
                  <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#22bdca]" />
                      <span>Categorized visual menu with portion sizing and meal modifiers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#22bdca]" />
                      <span>Real-time cart and delivery address capture with instant order totals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#22bdca]" />
                      <span>Direct kitchen ticket routing with automated customer confirmation</span>
                    </div>
                  </div>
                  <Link
                    to="/projects/sarab-express"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0796A8] hover:bg-[#1BBAC8] text-white text-xs font-bold transition shadow-md shadow-[#0796A8]/30"
                  >
                    <span>Read Full Sarab Express Case Study</span>
                    <ExternalLink size={13} />
                  </Link>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#04111a] shadow-inner">
                  <img
                    src={sarabFoodImg}
                    alt="Sarab Express digital food ordering web application preview"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: FOOD BUSINESSES SERVED (LIGHT SLATE WITH SUBTLE GRID) */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#f7f9fa] border-b border-slate-200" style={lightGrid}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel>Food Businesses Served</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#071923] tracking-tight">
                Built for <span className="text-[#0796A8]">Restaurants, Cafes & Cloud Kitchens</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Scalable ordering flows tailored to standalone eateries, fast-food franchises, and ghost kitchens.
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
                How We Build Your <span className="text-[#25bfce]">Ordering Platform</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                From menu architecture and modifier setup to kitchen tablet integration and staff training.
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
              serviceContext="Online Food Ordering System"
              title="Ready to Stop Paying Delivery Aggregator Commissions?"
              subtitle="Discuss your menu structure, delivery zones, and kitchen workflow with our restaurant software engineers."
            />
          </div>
        </section>
      </div>
    </>
  );
}
