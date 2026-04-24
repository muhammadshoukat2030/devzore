
import React from 'react';
import {
  ShoppingBag, CreditCard, Box, BarChart3,
  ArrowRight, ShieldCheck, Zap, Globe,
  Truck, Search, MousePointer2
} from 'lucide-react';

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-10">

      {/* --- 1. TOP NAVIGATION AREA --- */}
      <div className="max-w-7xl mx-auto px-6 pt-16 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          Next-Gen Commerce
        </div>

        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          Free Audit
        </button>
      </div>

      {/* --- 2. HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Scale Your Sales <br />
            With <span className="text-purple-500">Premium</span> E-commerce <br />
            <span className="text-purple-500">Architecture</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
            We build high-conversion online stores that combine aesthetic design with
            powerful backend logic to drive global revenue.
          </p>

          <div className="flex flex-nowrap gap-3 pt-2">
            <button className="flex-1 md:flex-none bg-purple-600 hover:bg-purple-700 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base flex items-center justify-center gap-2 group transition-all">
              Launch Store <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex-1 md:flex-none bg-[#111111] border border-gray-800 hover:bg-gray-800 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base transition-all">
              Live Demo
            </button>
          </div>
        </div>

        <div className="relative group lg:justify-self-end hidden md:block">
          <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="relative bg-[#111111] border border-gray-800/50 rounded-[2.5rem] overflow-hidden shadow-2xl max-w-[500px]">
            <img
              src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000"
              alt="E-commerce Dashboard"
              className="w-full h-auto opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* --- 3. E-COMMERCE CAPABILITIES --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Core Tech</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">Commerce <span className="text-purple-500">Engines</span></h2>
          <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<ShoppingBag className="text-purple-500" size={24} />}
            title="Multi-Vendor Systems"
            desc="Robust marketplace solutions like Amazon or Etsy, featuring complex vendor dashboards and automated commission splitting."
            borderColor="border-l-purple-600"
          />
          <FeatureCard
            icon={<CreditCard className="text-green-500" size={24} />}
            title="Secure Payments"
            desc="Integration with Stripe, PayPal, and Crypto gateways with PCI-DSS compliance ensuring safe transactions globally."
            borderColor="border-l-green-500"
          />
          <FeatureCard
            icon={<Box className="text-purple-500" size={24} />}
            title="Inventory Sync"
            desc="Real-time stock management across multiple channels with automated low-stock alerts and supplier integrations."
            borderColor="border-l-purple-600"
          />
        </div>
      </section>

      {/* --- 4. 4-IMAGE VISUAL GALLERY --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Modern <span className="text-purple-500">Storefronts</span></h2>
          <p className="text-gray-500 text-sm mt-2">Mobile-first designs for maximum conversion rates</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <GalleryItem
            img="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600"
            label="Fashion Store"
          />
          <GalleryItem
            img="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600"
            label="Gadget Hub"
          />
          <GalleryItem
            img="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=600"
            label="Luxury Brands"
          />
          <GalleryItem
            img="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=600"
            label="Home Decor"
          />
        </div>
      </section>

      {/* --- 5. ANALYTICS & TOOLS --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#080808] border border-gray-900 rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px]"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Data-Driven <br /><span className="text-purple-500">Growth</span></h2>
              <ul className="space-y-4">
                <ListItem icon={<BarChart3 size={18} />} text="Advanced Sales Analytics & Reporting" />
                <ListItem icon={<Search size={18} />} text="AI-Powered Product Recommendations" />
                <ListItem icon={<Zap size={18} />} text="One-Click Checkout Optimization" />
                <ListItem icon={<Truck size={18} />} text="Automated Logistics & Tracking" />
              </ul>
            </div>
            <div className="bg-[#0c0c0c] border border-gray-800 p-4 rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop"
                alt="Analytics Dashboard"
                className="rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. FOOTER CTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-20">
        <div className="bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Build Your <span className="text-purple-500">Retail</span> Empire
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-base">
            From single-product landing pages to massive global marketplaces—we provide the tools you need to dominate the digital shelf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-purple-900/20">
              Get Started Now
            </button>
            <button className="bg-transparent border border-gray-800 hover:bg-gray-900 px-10 py-4 rounded-2xl font-bold transition-all">
              Talk to Expert
            </button>
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

const GalleryItem = ({ img, label }) => (
  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-gray-800 group cursor-pointer shadow-2xl">
    <img
      src={img}
      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
      alt={label}
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
      <p className="text-xs font-black uppercase tracking-widest text-purple-400 mb-1">Concept</p>
      <h4 className="font-bold text-lg">{label}</h4>
    </div>
  </div>
);

const ListItem = ({ icon, text }) => (
  <li className="flex items-center gap-3 text-gray-300 font-medium">
    <span className="text-purple-500 bg-purple-500/10 p-1.5 rounded-lg">{icon}</span>
    {text}
  </li>
);

export default Ecommerce;