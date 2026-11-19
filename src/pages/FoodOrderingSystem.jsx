import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  Layers3,
  Lock,
  MapPin,
  MessageSquare,
  Plus,
  RefreshCw,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  TrendingUp,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";
import sarabFoodImg from "../assets/sarab_website_image.webp";

export default function FoodOrderingSystem() {
  const [activeFaq, setActiveFaq] = useState(null);

  const darkGrid = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "52px 52px",
  };

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

      <div className="min-h-screen bg-[#061923] text-white antialiased">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[82px] sm:pt-[84px] lg:pt-[86px] pb-10 sm:pb-12 border-b border-white/[0.08]">
          <div className="absolute inset-0 pointer-events-none" style={darkGrid} />
          <div className="absolute -top-32 left-[10%] w-[520px] h-[520px] rounded-full bg-[#0796A8]/15 blur-[160px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[13px] font-bold tracking-wider uppercase text-[#1bbac8] mb-5">
                <UtensilsCrossed size={13} />
                Restaurant Ordering Software
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
                Custom <span className="text-[#1bbac8]">Online Food Ordering System</span> Development
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

        {/* AEO ANSWER BLOCK */}
        <section className="py-14 sm:py-18 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#08222f] to-[#061923] p-6 sm:p-9">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3">
              <Sparkles size={14} className="text-[#1bbac8]" />
              Clear Answer for Restaurant Owners
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Is an Online Food Ordering System and Why Own One?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                An <strong>Online Food Ordering System</strong> is an owned digital storefront allowing diners to view structured visual menus, select meal add-ons, add items to a real-time cart, and submit pickup or delivery orders directly to your restaurant kitchen.
              </p>
              <p>
                <strong>Why Own One:</strong> Food delivery aggregators (Foodpanda, UberEats, Deliveroo, Talabat) charge 25% to 35% commission on every order and conceal customer contact data. An owned system lets you retain 100% of the sale, build direct customer loyalty, and route orders directly to your kitchen and WhatsApp without fees.
              </p>
            </div>
          </div>
        </section>

        {/* TARGET INDUSTRIES */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Food Businesses Served</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Built for Restaurants, Cafes & Cloud Kitchens</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => (
              <div key={i} className="p-5 rounded-2xl border border-white/[0.08] bg-[#071923]">
                <h3 className="text-base font-bold text-white mb-2">{ind.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SYSTEM MODULES */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">System Architecture</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              End-to-End Capabilities Engineered for Food Orders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#071923] hover:border-cyan-500/30 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-[#1bbac8] border border-cyan-500/20">
                      {m.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">{m.number}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">{m.desc}</p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-white/[0.06] text-[13px] text-slate-300">
                  {m.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={12} className="text-[#1bbac8] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROOF BLOCK: SARAB EXPRESS CASE STUDY */}
        <section className="py-14 sm:py-18 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="p-6 sm:p-10 rounded-3xl border border-white/[0.1] bg-[#071923] shadow-2xl">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-3">
                  <CheckCircle2 size={14} className="text-[#1bbac8]" />
                  Verified Case Study Proof
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Sarab Express: Commission-Free Food Ordering Platform
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Sarab Express shifted customers away from costly third-party aggregators into an owned, high-speed digital ordering storefront. Diners enjoy a rapid mobile ordering experience with exact item customization, while kitchen staff receive structured, error-free order tickets directly in the preparation queue.
                </p>
                <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-[#1bbac8] font-bold">✓</span>
                    <span>Categorized visual menu with portion sizing and meal modifiers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1bbac8] font-bold">✓</span>
                    <span>Real-time cart and delivery address capture with instant order totals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1bbac8] font-bold">✓</span>
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

              <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#04111a]">
                <img
                  src={sarabFoodImg}
                  alt="Sarab Express digital food ordering web application preview"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">Implementation</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How We Build Your Ordering Platform</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/[0.08] bg-[#071923]">
                <div className="text-2xl font-black text-cyan-400/40 font-mono mb-3">{p.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BUYER FAQ */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/[0.08]">
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1bbac8] mb-2">FAQ</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-white/[0.08] bg-[#071923] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-white hover:text-[#1bbac8] transition"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp size={18} className="text-[#1bbac8] shrink-0 ml-3" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0 ml-3" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA FORM */}
        <section id="system-form" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/[0.08]">
          <div className="p-6 sm:p-10 rounded-3xl border border-cyan-500/20 bg-[#081d28] shadow-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to Stop Paying Delivery Aggregator Commissions?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-8">
              Discuss your menu structure, delivery zones, and kitchen workflow with our restaurant software engineers.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061923] text-sm font-bold transition shadow-lg shadow-[#25D366]/20"
            >
              <span>Discuss on WhatsApp (+92 334 8004300)</span>
              <ArrowRight size={15} />
            </a>

            <div className="mt-6 text-xs text-slate-400">
              Or submit a scope inquiry via our{" "}
              <Link to="/contact" className="text-[#1bbac8] underline font-bold hover:text-white">
                Contact Page
              </Link>
              .
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
