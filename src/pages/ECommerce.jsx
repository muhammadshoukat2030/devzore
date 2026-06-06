import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import ServiceGalleryTemplate from '../components/ServiceGalleryTemplate';

import {
  ShoppingBag, CreditCard, Box, BarChart3,
  ArrowRight, ShieldCheck, Zap, Globe,
  Truck, Search, MousePointer2, Settings, Code, Layers, CheckCircle, HelpCircle, Laptop, Database, Activity
} from 'lucide-react';

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-10">

      {/* --- SEO & HELMET --- */}
      <Helmet>
        <title>E-Commerce Development Services | DevZore</title>
        <meta
          name="description"
          content="DevZore builds fast, scalable custom e-commerce platforms using MERN stack. From product catalog to checkout, we deliver full-stack online store solutions for startups and growing businesses."
        />
        <link
          rel="canonical"
          href="https://devzore.com/ecommerce"
        />
        {/* Open Graph */}
        <meta property="og:title" content="E-Commerce Development Services | DevZore" />
        <meta
          property="og:description"
          content="Custom e-commerce development using MERN stack. Fast, scalable online stores built for conversions and growth."
        />
        <meta property="og:url" content="https://devzore.com/ecommerce" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevZore" />

        {/* Social Image (important) */}
        <meta property="og:image" content="https://devzore.com/og/ecommerce.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-Commerce Development Services | DevZore" />
        <meta
          name="twitter:description"
          content="We build scalable e-commerce platforms using MERN stack with high conversion-focused design."
        />
        <meta name="twitter:image" content="https://devzore.com/og/ecommerce.jpg" />
      </Helmet>

      {/* --- 1. TOP NAVIGATION AREA --- */}
      <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between relative z-20">

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          Next-Gen Commerce
        </div>

        <Link
          to="/contact"
          className="bg-purple-600 hover:bg-purple-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] active:scale-95 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 inline-block"
        >
          Free Quote
        </Link>

      </div>

      {/* --- 2. HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py- grid lg:grid-cols-2 gap-2 items-center">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Custom E-Commerce <br />
            Development That <span className="text-purple-500">Sells</span> — Not Just Looks Good
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
            At DevZore, we build custom platforms from the ground up using the MERN stack.
            Not a Shopify theme someone else is already using—a platform built to work the way your business actually works.
          </p>

          <div className="flex flex-nowrap gap-3 pt-2">
            <Link to="/contact">
              <button className="flex-1 md:flex-none bg-purple-600 hover:bg-purple-700 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base flex items-center justify-center gap-2 group transition-all">
                Launch Store <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button></Link>

            <button className="flex-1 md:flex-none bg-[#111111] border border-gray-800 hover:bg-gray-800 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base transition-all">
              Live Demo
            </button>
          </div>
        </div>

        <div className="relative group lg:justify-self-end hidden md:block">
          <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>

          {/* Container ki max-width ko none kar diya taake image khul kar bada ho sake */}
          <div className="relative bg-[#111111] border border-gray-800/50 rounded-[2.5rem] overflow-hidden shadow-2xl max-w-none">
            <img
              src={assets.ecom2}
              alt="DevZore Custom E-commerce Dashboard"
              className="opacity-80 group-hover:scale-105 transition-transform duration-800"

              style={{
                width: '500px',  // Jitni width chahiye pixels me likh dein
                height: '430px', // Agar aspect ratio kharab ho toh height auto rakh sakte hain ('auto')
                objectFit: 'cover' // Is se image stretch (khinch) nahi hogi balki perfectly fit hogi
              }}
            />
          </div>
        </div>
      </section>

      {/* --- 3. CORE VALUE PROP (INTRO CONTENT) --- */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Custom Development Matters?</h2>
        <p className="text-gray-400 leading-relaxed">
          In 2026, e-commerce competition is more intense than ever. Page speed is a direct ranking factor.
          Checkout friction directly reduces revenue. A custom-built platform lets you optimize every variable—fast by default,
          SEO-ready from day one, and architected to scale whether you have 20 products or 20,000.
        </p>
      </section>

      {/* --- 4. SERVICES GRID (FULL CONTENT) --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">E-Commerce <span className="text-purple-500">Solutions</span> We Offer</h2>
          <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<ShoppingBag className="text-purple-500" size={24} />}
            title="Custom Storefronts"
            desc="Built from scratch with React & Next.js. Every pixel is optimized for conversion rates and brand identity."
            borderColor="border-l-purple-600"
          />
          <FeatureCard
            icon={<CreditCard className="text-green-500" size={24} />}
            title="Payment Gateways"
            desc="Seamless integration of Stripe, PayPal, JazzCash, and Easypaisa with robust webhook and refund management."
            borderColor="border-l-green-500"
          />
          <FeatureCard
            icon={<Box className="text-blue-500" size={24} />}
            title="Inventory Management"
            desc="Handle complex product variants, bulk uploads, and real-time stock sync with multi-warehouse logic."
            borderColor="border-l-blue-500"
          />
          <FeatureCard
            icon={<Truck className="text-orange-500" size={24} />}
            title="Order Fulfillment"
            desc="Automated status updates, shipping provider integrations, and customer tracking dashboards."
            borderColor="border-l-orange-500"
          />
          <FeatureCard
            icon={<Code className="text-purple-500" size={24} />}
            title="E-Commerce APIs"
            desc="Headless architecture with Node.js and Express—clean, versioned APIs connecting to any 3rd party tool."
            borderColor="border-l-purple-600"
          />
          <FeatureCard
            icon={<Activity className="text-red-500" size={24} />}
            title="Performance Audits"
            desc="Targeting sub-2-second load times and strong Core Web Vitals to boost SEO and sales simultaneously."
            borderColor="border-l-red-500"
          />
        </div>
      </section>

      <div className="bg-black min-h-screen">
        {/* Baki sections yahan aayenge */}
        <ServiceGalleryTemplate pageKey="ECommerce" />
      </div>

      {/* --- 6. DEVELOPMENT PROCESS (NEW CARDS) --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Our <span className="text-purple-500">6-Step</span> Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProcessCard step="01" title="Discovery" desc="Mapping product catalog structure, customer journey, and payment requirements before code." />
          <ProcessCard step="02" title="UI/UX Prototyping" desc="Designing Homepage, Cart, and Checkout in Figma—reviewed on real devices before build." />
          <ProcessCard step="03" title="Backend/API" content="Node.js & Express.js backend first. Every endpoint is typed with TypeScript and documented." />
          <ProcessCard step="04" title="React Storefront" desc="Building component by component. Bimonthly staging deployments for real progress review." />
          <ProcessCard step="05" title="Testing & QA" desc="Cross-browser/device testing, load testing APIs, and auditing security vulnerabilities." />
          <ProcessCard step="06" title="Launch & Support" desc="Deployment, DNS setup, and 30 days of post-launch bug-fix support at no cost." />
        </div>
      </section>

      {/* --- 7. TECH STACK & ANALYTICS --- */}
      <section className="max-w-7xl mx-auto px-6 py-2">
        <div className="bg-[#080808] border border-gray-900 rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px]"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Tech Stack & <br /><span className="text-purple-500">Analytics</span></h2>
              <p className="text-gray-400 mb-6 text-sm">We use React 19, Next.js 15, Node.js 22 LTS, and MongoDB Atlas for high-performance scale.</p>
              <ul className="space-y-4">
                <ListItem icon={<BarChart3 size={18} />} text="Advanced Sales Analytics & Reporting" />
                <ListItem icon={<Search size={18} />} text="AI-Powered Product Recommendations" />
                <ListItem icon={<Zap size={18} />} text="One-Click Checkout Optimization" />
                <ListItem icon={<Globe size={18} />} text="Headless E-commerce Architecture" />
              </ul>
            </div>
            <div className="bg-[#0c0c0c] border border-gray-800 p-4 rounded-3xl">
              <img
                src={assets.ecommeranalytic}
                alt="Analytics Dashboard"
                className="rounded-2xl opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. FAQ SECTION (NEW) --- */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked <span className="text-purple-500">Questions</span></h2>
        <div className="space-y-4">
          <FAQItem q="How long does a custom store take to build?" a="Standard stores take 8-12 weeks. Complex marketplaces or custom inventory logic can take 4-6 months." />
          <FAQItem q="Is custom-built better than Shopify?" a="Yes, for businesses needing complex logic, better performance, and zero monthly per-transaction fees." />
          <FAQItem q="Can you integrate existing systems?" a="Absolutely. We integrate with ERPs, accounting software, CRMs, and regional shipping providers." />
        </div>
      </section>

      {/* --- 9. FOOTER CTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-1 pb-2 relative z-10">
        <div className="bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/10 rounded-[3rem] p-12 md:p-10 text-center relative overflow-hidden group">

          {/* Background Hover Effect */}
          <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter relative z-10">
            Build Your <span className="text-purple-500">Retail</span> Empire
          </h2>

          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-base relative z-10">
            From single-product landing pages to massive global marketplaces—we provide the tools you need to dominate the digital shelf.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">

            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 hover:scale-105 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] active:scale-95 px-10 py-4 rounded-2xl font-bold transition-all duration-300 text-center inline-block"
            >
              Get Started Now
            </Link>

            <Link
              to="/contact"
              className="bg-transparent border border-gray-800 hover:bg-gray-900 hover:border-purple-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] active:scale-95 px-10 py-4 rounded-2xl font-bold transition-all duration-300 text-center inline-block"
            >
              Talk to Expert
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};

/* --- MINI COMPONENTS --- */

const FeatureCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-8 rounded-2xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all group`}>
    <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const ProcessCard = ({ step, title, desc }) => (
  <div className="bg-[#080808] p-8 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-all">
    <span className="text-purple-500 text-xs font-bold font-mono bg-purple-500/10 px-3 py-1 rounded-full">{step}</span>
    <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

const GalleryItem = ({ img, label }) => (
  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-gray-800 group cursor-pointer shadow-2xl">
    <img src={img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={label} />
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
      <p className="text-xs font-black uppercase tracking-widest text-purple-400 mb-1">Concept</p>
      <h4 className="font-bold text-lg">{label}</h4>
    </div>
  </div>
);

const FAQItem = ({ q, a }) => (
  <div className="p-6 rounded-2xl bg-[#080808] border border-gray-900">
    <h4 className="text-lg font-bold text-purple-400 mb-2">{q}</h4>
    <p className="text-gray-500 text-sm">{a}</p>
  </div>
);

const ListItem = ({ icon, text }) => (
  <li className="flex items-center gap-3 text-gray-300 font-medium">
    <span className="text-purple-500 bg-purple-500/10 p-1.5 rounded-lg">{icon}</span>
    {text}
  </li>
);

export default Ecommerce;