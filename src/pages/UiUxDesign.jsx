import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import { assets } from '../assets/assets';
import ServiceGalleryTemplate from '../components/ServiceGalleryTemplate';
import {
  Palette, MousePointer2, Layers, Layout,
  Figma, PenTool, Eye, Zap, ArrowRight,
  Maximize2, Component, Smartphone, CheckCircle,
  HelpCircle, ChevronDown, Monitor, Sparkles, Shield, Compass, Code
} from 'lucide-react';

const UIUXDesign = () => {
  return (
    <>

      <Helmet>
        <title>User-Centric UI/UX Prototyping & Digital Interaction Design | DevZore</title>
        <meta name="description" content="Elevate digital experiences with advanced Figma design systems, interactive web wireframes, and scientific user journeys built for conversion." />
        <link rel="canonical" href="https://devzore.com/ui-ux-design" />
        <meta property="og:title" content="User-Centric UI/UX Prototyping & Digital Interaction Design | DevZore" />
        <meta property="og:description" content="High-fidelity interface prototypes and streamlined wireframes designed for global brand success." />
        <meta property="og:url" content="https://devzore.com/ui-ux-design" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-20 overflow-x-hidden">

        {/* --- 1. TOP NAVIGATION / BADGE AREA --- */}
        <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between relative z-50">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping"></span>
            Visual Strategy & Experience
          </div>
          <Link to="/contact">
            <button className="cursor-pointer bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              Design Audit
            </button>
          </Link>
        </div>

        {/* --- 2. HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-1 grid lg:grid-cols-2 gap-12 items-center">
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="space-y-1">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              UI/UX Design Services Built Around Real Users — <span className="text-purple-500">Not Designer Preferences</span>
            </h1>
            <p className="text-gray-400 text-base md:text-mxl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Most products do not fail because of bad engineering. They fail because users open the app, cannot figure out what to do, and close it. Good UI/UX design is not about making things look attractive — it is about making the right action obvious, the next step clear, and the overall experience so natural that users do not think about the interface at all.
            </p>
            <p className="text-gray-500 text-sm max-w-xl mx-auto lg:mx-0">
              At DevZore, we design digital products from the user's perspective first, the business objective second, and the aesthetic last — in that order, every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="cursor-pointer w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-3 transition-all group shadow-xl">
                  Start Designing <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
              <a href="#process" className="w-full sm:w-auto">
                <button className="cursor-pointer w-full sm:w-auto bg-[#111111] border border-white/10 hover:bg-white/5 px-8 py-4 rounded-xl font-bold text-sm md:text-base transition-all text-gray-300">
                  Our Process
                </button>
              </a>
            </div>
          </div>

          <div className="relative group lg:justify-self-end hidden md:block">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-1 max-w-[550px]">
              <img
                src={assets.uiux_Process}
                alt="UI/UX Design Process Ecosystem"
                className="w-full h-auto opacity-90 rounded-xl group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* --- 3. PHILOSOPHY SECTION (What Is UI/UX & Why Products Fail) --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-3">Product Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                What Is UI/UX Design and Why Do Products <span className="text-purple-500">Fail Without It?</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-white">UI — user interface — is what your users see. UX — user experience — is what they feel</strong> and whether they can accomplish what they came to do. The two are inseparable. A beautiful interface with a confusing flow is a beautiful product that does not convert. A functional product with no visual hierarchy is a working product that users do not trust.
              </p>
              <p>
                In 2026, users make decisions about whether to trust a digital product within seconds of their first interaction. Poor onboarding kills activation. Confusing navigation increases support tickets. Inconsistent design patterns create friction that compounds across every session. Every one of these problems has a design solution — and <span className="text-white font-medium">every one of them costs significantly more to fix after development than before it.</span>
              </p>
              <p className="text-gray-500 text-sm bg-white/5 border border-white/5 p-5 rounded-2xl">
                At DevZore, we integrate design into the development process from the start. By the time your development team writes a line of production code, your users' entire journey has been mapped, prototyped, tested, and refined.
              </p>
            </div>
          </div>
        </section>

        {/* --- 4. SERVICES BENTO GRID (UI/UX Design Services We Offer) --- */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-black">UI/UX Design <span className="text-purple-500">Services We Offer</span></h2>
            <div className="w-16 h-1 bg-purple-600 mt-3 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DesignCard
              icon={<Compass size={24} />}
              title="UX Research and User Journey Mapping"
              desc="Before any design work begins, we study your users. Competitive analysis, user persona development, job-to-be-done mapping, and information architecture. We identify what your users are trying to accomplish, where existing products fail them, and how your product can genuinely serve them better. This work is what separates design that performs from design that simply exists"
              accentColor="purple"
            />
            <DesignCard
              icon={<Layers size={24} />}
              title="Wireframes and Information Architecture"
              desc="Low-fidelity wireframes that map the structure of every screen and the logic of every user flow. Wireframes move fast, cost little to change, and force every stakeholder to agree on what the product actually does before anyone invests in making it look good."
              accentColor="green"
            />
            <DesignCard
              icon={<Maximize2 size={24} />}
              title="Interactive Prototyping"
              desc="Clickable Figma prototypes that simulate the real product experience. You can navigate through your application, test the onboarding flow, and review every state of every screen — before development begins. We use prototypes to validate assumptions, catch problems, and align your entire team on the final product direction."
              accentColor="purple"
            />
            <DesignCard
              icon={<Palette size={24} />}
              title="High-Fidelity UI Design"
              desc="Production-ready screens with your brand system applied — typography, color, spacing, iconography, component states, loading states, error states, and empty states. Every screen your users will encounter is designed and reviewed before it is built."
              accentColor="blue"
            />
            <DesignCard
              icon={<Component size={24} />}
              title="Design System & Component Library"
              desc="A documented design system in Figma — reusable components, color tokens, typography scales, and spacing rules — that your development team can build from efficiently and your design team can extend consistently. Design systems eliminate the inconsistency that appears when a product grows without shared standards."
              accentColor="orange"
            />
            <DesignCard
              icon={<Smartphone size={24} />}
              title="Mobile App UI Design"
              desc="iOS and Android interface design that respects platform conventions while expressing your brand identity. We design for the interaction patterns real mobile users expect — thumb zones, gesture navigation, native component behavior — not desktop layouts ported to smaller screens."
              accentColor="pink"
            />
          </div>
        </section>

        {/* Dynamic Gallery Embed Template */}
        <div className="bg-black/40 py-4 my-10 border-y border-white/5">
          <ServiceGalleryTemplate pageKey="UiUxDesign" />
        </div>

        {/* --- 5. PORTFOLIO CASE STUDIES --- */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Showcase</span>
              <h2 className="text-3xl md:text-5xl font-black">Design <span className="text-purple-500">Case Studies</span></h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              image={assets.uiux_saas_sashboard}
              title="SaaS Dashboard Design"
              subtitle="Analytics & Data Visualization"
            />
            <ProjectCard
              image={assets.uiux_fintech_mobile}
              title="Fintech Mobile Experience"
              subtitle="Digital Wallet Interface"
            />
          </div>
        </section>

        {/* --- 6. DETAILED PROCESS SECTION --- */}
        <section id="process" className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5 scroll-mt-20">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Execution Strategy</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Our UI/UX <span className="text-purple-500">Design Process</span></h2>
            <p className="text-gray-500 max-w-md mx-auto mt-4 text-sm md:text-base">A disciplined blueprint engineered to eliminate design uncertainty and development bottlenecks.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DetailedProcessCard
              step="01"
              title="Discovery and Research"
              desc="We begin with a structured discovery session covering your business goals, your target users, your existing product if one exists, and your competitive landscape. This session produces the brief that drives every design decision that follows."
            />
            <DetailedProcessCard
              step="02"
              title="User Flows & IA"
              desc="We map every path a user can take through your product. From first landing to core action to return visit. Every screen, every decision point, every error state. This map becomes the specification for your wireframes."
            />
            <DetailedProcessCard
              step="03"
              title="Wireframes & Review"
              desc="Low-fidelity wireframes for every primary screen are designed and reviewed with your team. We present the reasoning behind every structural decision — not just the output. Feedback is collected, changes are made, and the wireframe set is signed off before we move to visual design."
            />
            <DetailedProcessCard
              step="04"
              title="Visual Design & Branding"
              desc="High-fidelity UI design built from your brand guidelines or developed as part of this engagement if starting from scratch. Color, typography, iconography, illustrations, and motion principles are defined here and applied consistently across the entire product."
            />
            <DetailedProcessCard
              step="05"
              title="Prototype, Test & Refine"
              desc="An interactive prototype is built in Figma and tested against real user behavior where possible. We review edge cases, stress-test the flow with realistic data, and refine the design based on what we find. The goal is to answer every open design question before development begins."
            />
            <DetailedProcessCard
              step="06"
              title="Developer Handoff"
              desc="Final Figma files are organized with developer annotations, component documentation, spacing specifications, and exported assets. We conduct a handoff session with your development team to walk through the design system and answer implementation questions."
            />
          </div>
        </section>

        {/* --- 7. DESIGN TOOLS & WORKFLOW GRID --- */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-[#080808] border border-white/5 rounded-[3rem] p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block">Ecosystem</span>
                <h2 className="text-3xl md:text-5xl font-black leading-tight">Design Tools & <br /><span className="text-purple-500">Workflow</span></h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We use industries' finest cloud tooling ecosystems to keep synchronization flawless, components tokenized, and exports asset-ready for swift deployment loops.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
                <ToolBadge name="Figma" usage="UI Design, Wireframes, Prototyping & Handoff" icon={<Figma size={18} className="text-purple-400" />} />
                <ToolBadge name="FigJam" usage="User Flow Mapping & Workshops" icon={<Layers size={18} className="text-green-400" />} />
                <ToolBadge name="Figma Smart Animate" usage="Micro-interactions & State Transitions" icon={<Zap size={18} className="text-yellow-400" />} />
                <ToolBadge name="Maze / UserTesting" usage="Data-driven Usability Testing" icon={<Eye size={18} className="text-blue-400" />} />
                <ToolBadge name="Lottie Files" usage="Lightweight Component Animation Assets" icon={<Sparkles size={18} className="text-pink-400" />} />
                <ToolBadge name="Design Tokens" usage="Ready for React, Tailwind, & Custom CSS" icon={<Code size={18} className="text-orange-400" />} />
              </div>
            </div>
          </div>
        </section>

        {/* --- 8. INDUSTRIES AND PRODUCT TYPES MATRIX --- */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Scope Matrix</span>
            <h2 className="text-3xl md:text-5xl font-black">Products & Industries <span className="text-purple-500">We Design For</span></h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {["SaaS Dashboards & Admin Panels", "Mobile Apps (iOS & Android)", "E-Commerce Storefronts & Checkouts", "Fintech Platforms & Wallets", "Healthcare Portals & Patient Tools", "EdTech & Learning Ecosystems", "Multi-vendor Marketplaces", "B2B Software & Internal Tools", "Startup MVPs (Zero to Investor-Ready)"].map((ind, i) => (
              <span key={i} className="px-5 py-3 rounded-xl bg-[#0d0d0d] border border-white/5 text-gray-300 font-medium text-xs md:text-sm hover:border-purple-500/30 transition-all cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </section>

        {/* --- 9. VALUE PROP (Why Choose DevZore?) --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block">The Edge</span>
              <h2 className="text-3xl md:text-4xl font-black">Why Choose DevZore <br />for <span className="text-purple-500">UI/UX Design?</span></h2>
              <p className="text-gray-500 text-sm">We clear out product design friction so you scale smoothly.</p>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <ValueCard
                title="Design & Development in One Place"
                desc="Our designers and developers work together from the start of every project. No handoff friction. No designs that look right in Figma but break in the browser. The design you see in prototype is the product you get in production."
              />
              <ValueCard
                title="Research Before Pixels"
                desc="We do not start designing until we understand who we are designing for. User research and information architecture always precede visual design. This is what separates design that converts from design that decorates."
              />
              <ValueCard
                title="You Keep Everything Complete"
                desc="All Figma source files, design system documentation, and exported assets belong to you. If you ever need to take the work elsewhere, you have everything required to do so seamlessly."
              />
              <ValueCard
                title="Honest Timelines & Scope"
                desc="A UI/UX engagement for a focused product scope typically runs 3 to 6 weeks. Complex platforms with multiple user roles take longer. We scope honestly and deliver exactly what we promise."
              />
            </div>
          </div>
        </section>

        {/* --- 10. ACCORDION FAQ SECTION --- */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Knowledge Base</span>
            <h2 className="text-3xl md:text-5xl font-black">Frequently Asked <span className="text-purple-500">Questions</span></h2>
          </div>

          <div className="space-y-4">
            <FAQAccordionItem
              q="What is the difference between UI design and UX design?"
              a="UX design is concerned with the logic, structure, and flow of a product — how users navigate it, what they can do, and how easy those tasks are to complete. UI design is concerned with the visual layer — what the product looks like, how it uses color and typography, and how interface elements communicate their function. Good digital products require both. We deliver both in every engagement."
            />
            <FAQAccordionItem
              q="Do you design mobile apps as well as web products?"
              a="Yes. We design for web applications, iOS apps, Android apps, and cross-platform mobile products. Mobile design work follows platform conventions for iOS (Human Interface Guidelines) and Android (Material Design) while applying your brand identity consistently across both platforms."
            />
            <FAQAccordionItem
              q="Can you redesign an existing product?"
              a="Yes. Redesign projects begin with a design audit of your existing product — we review user flows, identify usability problems, audit the visual consistency, and produce a findings report before proposing any changes. Most redesign clients come to us because their product has grown faster than their design has kept up."
            />
            <FAQAccordionItem
              q="Do I need to provide brand guidelines?"
              a="No. If your brand guidelines exist, we work within them. If they do not, we develop the visual identity as part of the design engagement — color palette, typography, component style — and deliver it as part of the design system handoff. Starting without brand guidelines does not slow the project down."
            />
            <FAQAccordionItem
              q="Will my developers be able to build from your Figma files?"
              a="Yes. Our developer handoff process includes annotated Figma files, a component library with documented states, spacing specifications, and a handoff session with your development team. We have built from our own Figma files many times — we know exactly what developers need to implement a design accurately."
            />
          </div>
        </section>

        {/* --- 11. DYNAMIC FOOTER CTA --- */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-br from-[#0c0c0c] via-[#070707] to-[#050505] border border-white/10 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-6xl font-black tracking-tight leading-tight">
                Ready to design a product your users will <span className="text-purple-500">actually enjoy?</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-medium max-w-lg mx-auto">
                Talk to our team — we respond within 24 hours with a clear plan and honest pricing. Let's transform your vision into an conversion-driven workspace.
              </p>
              <div className="pt-4">
                <Link to="/contact">
                  <button className="cursor-pointer bg-purple-600 hover:bg-purple-500 text-white px-10 py-4 rounded-xl font-bold text-sm shadow-xl hover:shadow-purple-600/20 transition-all">
                    Book a Strategy Session →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- 12. INTERNAL RELATED CROSS-LINKS MATRIX --- */}
        <footer className="max-w-7xl mx-auto px-6 pt-8 pb-12 border-t border-white/5">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs md:text-sm text-gray-500 font-medium">
            <span className="text-gray-600 uppercase tracking-widest text-[10px] font-bold">Internal Ecosystem:</span>
            <Link to="/web-development" className="hover:text-purple-400 transition-colors">Web App Development</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/mern-stack-development" className="hover:text-purple-400 transition-colors">MERN Stack Development</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/startup-mvp" className="hover:text-purple-400 transition-colors">Startup MVP</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/ecommerce" className="hover:text-purple-400 transition-colors">E-Commerce Development</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/mobile-apps" className="hover:text-purple-400 transition-colors">Mobile App Development</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/" className="hover:text-purple-400 transition-colors">Back to Home</Link>
          </div>
        </footer>

      </div>
    </>
  );
};

/* --- PREMIUM UI/UX HELPER COMPONENTS --- */

const DesignCard = ({ icon, title, desc, accentColor }) => {
  const accents = {
    purple: "border-l-purple-600 bg-purple-500/5 group-hover:border-l-purple-400",
    green: "border-l-green-600 bg-green-500/5 group-hover:border-l-green-400",
    blue: "border-l-blue-600 bg-blue-500/5 group-hover:border-l-blue-400",
    orange: "border-l-orange-600 bg-orange-500/5 group-hover:border-l-orange-400",
    pink: "border-l-pink-600 bg-pink-500/5 group-hover:border-l-pink-400",
  };

  return (
    <div className={`group p-8 rounded-2xl bg-[#080808] border border-white/5 border-l-4 ${accents[accentColor]} hover:bg-[#0c0c0c] hover:border-white/10 transition-all duration-300 flex flex-col justify-between`}>
      <div>
        <div className="mb-6 text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed font-normal">{desc}</p>
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    <div className="bg-[#0c0c0c] rounded-2xl overflow-hidden mb-4 border border-white/5 shadow-xl group-hover:border-purple-500/30 transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] md:h-[340px] object-cover opacity-75 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
      />
    </div>
    <div className="flex items-center justify-between px-2">
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{subtitle}</p>
      </div>
      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300">
        <ArrowRight size={16} />
      </div>
    </div>
  </div>
);

const DetailedProcessCard = ({ step, title, desc }) => (
  <div className="bg-[#080808] border border-white/5 p-8 rounded-[2rem] hover:border-purple-500/20 hover:bg-[#0b0b0b] transition-all duration-300 group">
    <div className="flex items-center justify-between mb-4">
      <span className="text-xs font-mono font-bold text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">{step}</span>
      <CheckCircle size={16} className="text-gray-700 group-hover:text-purple-500 transition-colors" />
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const ToolBadge = ({ name, usage, icon }) => (
  <div className="p-4 rounded-2xl bg-black border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
    <div className="mb-2">{icon}</div>
    <div>
      <h4 className="text-sm font-bold text-white">{name}</h4>
      <p className="text-gray-500 text-[10px] mt-1 leading-tight">{usage}</p>
    </div>
  </div>
);

const ValueCard = ({ title, desc }) => (
  <div className="p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-purple-500/10 transition-colors">
    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
      <Shield size={16} className="text-purple-500" />
      {title}
    </h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const FAQAccordionItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-[#080808] border border-white/5 overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-white/[0.01] transition-colors"
      >
        <h4 className="text-base md:text-lg font-bold text-white pr-2">{q}</h4>
        <ChevronDown
          size={20}
          className={`text-purple-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] border-t border-white/5' : 'max-h-0'}`}>
        <p className="p-6 md:p-8 text-gray-400 text-sm md:text-base leading-relaxed bg-[#060606]">
          {a}
        </p>
      </div>
    </div>
  );
};

export default UIUXDesign;