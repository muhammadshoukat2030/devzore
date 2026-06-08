import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router-dom";
import ServiceGalleryTemplate from '../components/ServiceGalleryTemplate';
import {
  Rocket, Layers, ShieldCheck, ArrowRight,
  Target, Zap, Flame, Code2, Cpu, 
  ChevronDown, CheckCircle, HelpCircle, Shield, Sparkles
} from 'lucide-react';

const StartupMVP = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-20 overflow-x-hidden">
        
        {/* --- SEO & HELMET MANAGEMENT --- */}
        <Helmet>
          <title>Startup MVP Development Company | DevZore</title>
          <meta name="description" content="DevZore builds investor-ready MVPs for startups in 8 to 14 weeks using MERN stack. Validate your idea, reach early users, and attract funding — without burning through your runway. Free consultation." />
          <link rel="canonical" href="https://devzore.com/startup-mvp" />
          <meta property="og:title" content="Startup MVP Development Company | DevZore" />
          <meta property="og:description" content="Investor-ready MVPs built in 8–14 weeks using MERN stack. From idea to launch — DevZore is your startup development partner." />
          <meta property="og:url" content="https://devzore.com/startup-mvp" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="DevZore" />
          <meta property="og:image" content="https://devzore.com/og/startup-mvp.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Startup MVP Development Company | DevZore" />
          <meta name="twitter:description" content="Fast MVP development for startups to validate ideas and launch quickly with scalable architecture." />
          <meta name="twitter:image" content="https://devzore.com/og/startup-mvp.jpg" />
        </Helmet>

        {/* --- 1. TOP HEADER NAVIGATION --- */}
        <div className="max-w-7xl mx-auto px-6 pt-16 flex items-center justify-between relative z-50">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
            Rapid Launch Protocol
          </div>
          <Link to="/contact">
            <button className="cursor-pointer bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              Pitch Your Idea
            </button>
          </Link>
        </div>

        {/* --- 2. HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>
          
          <div className="space-y-6 relative z-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-[4.2rem] font-black leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
              Startup MVP Development Company — <span className="text-purple-500">From Idea to Launch in 8 to 14 Weeks</span>
            </h1>
            <p className="text-gray-400 text-base md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Most startup ideas do not fail because of the idea. They fail because the team spends six months and their entire pre-seed budget building a product that turns out to solve a problem nobody has — or that real users interact with in ways nobody predicted. 
            </p>
            <p className="text-gray-500 text-sm md:text-base max-w-sm md:max-w-xl mx-auto lg:mx-0 leading-relaxed">
              An MVP changes that equation. A Minimum Viable Product is not a half-finished application — it is the leanest version of your product that delivers genuine value to real users, fast enough to learn from before your runway runs out. At DevZore, we build MVPs that are production-ready, technically sound, and designed to tell you something true about your market — in 8 to 14 weeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="cursor-pointer w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-3 transition-all group shadow-xl">
                  Launch MVP <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
              <a href="#pricing-models" className="w-full sm:w-auto">
                <button className="cursor-pointer w-full sm:w-auto bg-[#111111] border border-white/10 hover:bg-white/5 px-8 py-4 rounded-xl font-bold text-sm md:text-base transition-all text-gray-300">
                  Pricing Models
                </button>
              </a>
            </div>
          </div>

          <div className="relative group lg:justify-self-end hidden md:block">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2 max-w-[500px]">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
                alt="Startup Scale Infrastructure Ecosystem"
                className="w-full h-auto opacity-80 rounded-xl group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* --- 3. PHILOSOPHY / VALUE DISCOVERY SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-orange-500 font-mono text-xs tracking-[0.4em] uppercase block mb-3">Core Premise</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                What Makes a Good MVP and <span className="text-purple-500">Why Most Get It Wrong?</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                A good MVP is defined by what it leaves out as much as what it includes. The goal is not to build a small version of your final vision. The goal is to <strong className="text-white">identify the single core assumption your business depends on</strong> — that users will pay for this, that this workflow saves them time, that this integration is worth building — and build the minimum product required to test that assumption with real people.
              </p>
              <p>
                Most MVP projects fail because teams include too many features, spend too long on polish that does not affect the core experience, and launch so late that the budget is exhausted before they have learned anything useful. The startups that win ship early, observe real user behavior, and iterate based on evidence rather than assumptions.
              </p>
              <p className="text-gray-500 text-sm bg-white/5 border border-white/5 p-6 rounded-2xl">
                At DevZore, we challenge feature lists constantly. We ask what each feature is designed to prove, and we push back when a feature adds time and cost without adding learning. Our job is to get you to your first real user signal as quickly as possible — with engineering quality that allows the product to scale when traction arrives.
              </p>
            </div>
          </div>
        </section>

        {/* --- 4. MVP CORE SERVICES MATRIX --- */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-black">MVP Development <span className="text-purple-500">Services We Offer</span></h2>
            <div className="w-16 h-1 bg-purple-600 mt-3 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StrategyCard
              icon={<Target size={24} />}
              title="Product Discovery and MVP Scoping"
              desc="A structured two-week engagement where we work with your founding team to define your core user, the single workflow your MVP must nail, and the feature set required to test it. We produce a product specification, user flow map, and development estimate that your entire team agrees on before a line of code is written."
              borderColor="border-l-purple-600"
            />
            <StrategyCard
              icon={<Code2 size={24} />}
              title="Full-Stack MERN MVP Development"
              desc="End-to-end development of your MVP using MongoDB, Express.js, React, and Node.js — the same technology stack used by successful SaaS companies from pre-seed through Series B. We own the entire stack, which means no handoff delays and no integration problems between front and back end."
              borderColor="border-l-orange-500"
            />
            <StrategyCard
              icon={<Layers size={24} />}
              title="SaaS MVP Development"
              desc="Subscription-based web applications with user authentication, role-based access, billing integration via Stripe, and the dashboard infrastructure your early users need to get value from your product quickly."
              borderColor="border-l-purple-600"
            />
            <StrategyCard
              icon={<Sparkles size={24} />}
              title="Marketplace MVP Development"
              desc="Two-sided platforms connecting buyers and sellers, service providers and clients, or any two user types with different needs. Marketplace MVPs require careful architecture for permission systems, transaction logic, and review mechanisms — we have built them before and scope them accurately."
              borderColor="border-l-blue-600"
            />
            <StrategyCard
              icon={<Cpu size={24} />}
              title="Mobile MVP Development"
              desc="Cross-platform mobile MVPs built with React Native — one codebase, both iOS and Android. For founders who need to validate a mobile-first concept without the cost and timeline of separate native builds."
              borderColor="border-l-pink-600"
            />
            <StrategyCard
              icon={<Rocket size={24} />}
              title="Post-MVP Iteration and Scaling"
              desc="After launch, we stay with you. Whether that means fixing what real users found broken, adding the features your earliest users are asking for, or preparing your architecture for the traffic that comes after a successful fundraise — we are the same team that built your MVP and already understands your codebase."
              borderColor="border-l-yellow-600"
            />
          </div>
        </section>

        {/* Dynamic Embedded Gallery View */}
        <div className="bg-black/40 py-4 my-10 border-y border-white/5">
          <ServiceGalleryTemplate pageKey="StartupMVP" />
        </div>

        {/* --- 5. CASE STUDIES MATRIX --- */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Case Studies</span>
              <h2 className="text-3xl md:text-5xl font-black">Market <span className="text-purple-500">Disruptors</span></h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <LaunchCard
              image="https://images.unsplash.com/photo-1551288049-bbbda536ad39?auto=format&fit=crop&q=80&w=800"
              title="Fintech Dashboard MVP"
              subtitle="Raised $1.2M in Seed Round"
            />
            <LaunchCard
              image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              title="SaaS Collaboration Tool"
              subtitle="Zero to 10k Active Users"
            />
          </div>
        </section>

        {/* --- 6. DEVELOPMENT WORKFLOW TIMELINE --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Engineering Roadmap</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Our MVP <span className="text-purple-500">Development Process</span></h2>
            <p className="text-gray-500 max-w-md mx-auto mt-4 text-sm">A tactical milestone breakdown geared for velocity, stability, and fast functional iteration loops.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProcessMilestoneCard step="01" span="Weeks 1 to 2" title="Discovery and Scoping" desc="We start with your business goals, your target user, and your core hypothesis. We map user flows, identify integration requirements, define the feature set for launch, and produce a technical specification with a milestone-based delivery timeline. This phase exists specifically to prevent the expensive surprises that happen when teams build without a clear plan." />
            <ProcessMilestoneCard step="02" span="Weeks 2 to 3" title="UI/UX Design & Prototyping" desc="Wireframes and interactive Figma prototypes covering every primary user flow. You experience the product on your device before any production code is written. Investors and early users can be shown the prototype during fundraising before development completes. Design changes at this stage are fast and cheap." />
            <ProcessMilestoneCard step="03" span="Weeks 3 to 6" title="Backend API Development" desc="The Node.js and Express.js API is built first — authentication, core business logic, database models, and external integrations. TypeScript throughout. Full test coverage on critical paths. A stable backend that the frontend can build against without waiting." />
            <ProcessMilestoneCard step="04" span="Weeks 5 to 8" title="React Frontend Engineering" desc="Component-driven React development with two-week sprint reviews on a live staging environment. You see real working software, not status updates. Routing, state management, API integration, and UI component implementation — built to be maintainable as the product grows beyond the MVP." />
            <ProcessMilestoneCard step="05" span="Weeks 8 to 9" title="Testing & Pre-Launch Hardening" desc="Functional testing across browsers and devices, security review of authentication and data access patterns, performance testing of key API endpoints, and Core Web Vitals optimization. We do not hand over a product we would not stake our own reputation on." />
            <ProcessMilestoneCard step="06" span="Month 1 Post-Launch" title="Launch & Active Support" desc="Deployment to production, monitoring setup with Sentry and Datadog, and a 30-day post-launch support period included in every MVP engagement. Your first real users will surface things no amount of internal testing finds — we are available to address them immediately." />
          </div>
        </section>

        {/* --- 7. COMPLETE TECHNICAL ECOSYSTEM TOKENS --- */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="bg-[#080808] border border-white/5 rounded-[3rem] p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="text-center max-w-3xl mx-auto space-y-6 relative z-10">
              <span className="text-purple-400 font-mono text-xs tracking-[0.4em] uppercase block">Stack Architecture</span>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white">Technologies We Use for MVP Development</h3>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                We select highly scalable stack parameters to ensure your minimal system converts perfectly into robust enterprise-grade foundations as traction builds.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {["MongoDB & Atlas", "Express.js", "React 19", "Next.js 15", "Node.js 22 LTS", "TypeScript 5", "Stripe Core Payments", "JWT & OAuth 2.0", "TanStack Query", "Zustand State", "Tailwind CSS", "shadcn/ui", "Socket.io Realtime", "React Native Mobile", "Docker Containers", "GitHub Actions CI/CD", "AWS Cloud Infrastructure", "Vercel Systems", "Sentry Monitoring", "Datadog Diagnostics"].map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold tracking-wide text-gray-300 hover:border-purple-500/30 hover:text-white transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- 8. TARGET INDUSTRY SEGMENTS MATRIX --- */}
        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="text-center mb-10">
            <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Domain Focus</span>
            <h2 className="text-3xl md:text-5xl font-black">Types of Startups We Build MVPs For</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {["SaaS Tools & Subscription Platforms", "B2B Workflow & Productivity Software", "Marketplace & On-Demand Systems", "Fintech Tools & Payments Apps", "EdTech & E-Learning Frameworks", "Healthtech Patient & Provider Portals", "Logistics & Delivery Operations Platforms", "AI-Powered Advanced Web Apps", "High-Performance Consumer Mobile Apps"].map((type, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-[#0b0b0b] border border-white/5 hover:border-white/10 transition-colors">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></span>
                <span className="text-sm font-medium text-gray-300">{type}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- 9. WHY DEVZORE PARTNERSHIP MATRIX --- */}
        <section id="pricing-models" className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5 scroll-mt-20">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className="text-orange-500 font-mono text-xs tracking-[0.4em] uppercase block">The Edge</span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight">Why Choose DevZore <br />for Startup <span className="text-purple-500">MVP Development?</span></h2>
              <p className="text-gray-500 text-sm leading-relaxed">We optimize code clarity and trim feature over-engineering to secure maximum product runway efficiency.</p>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <ValuePropCard 
                title="We Have Shipped Real MVPs" 
                desc="We understand the difference between a prototype that impresses at demo day and a product that holds up when real users interact with it under real conditions. Every MVP we build is production-ready — not a proof of concept that needs to be rebuilt before it can handle growth." 
              />
              <ValuePropCard 
                title="We Challenge Scope Constantly" 
                desc="Every feature you add to an MVP is a week you are not in front of real users. We push back on features that do not test your core hypothesis, and we help you prioritize what ships in the MVP against what waits for version two." 
              />
              <ValuePropCard 
                title="Founders Talk Directly to Engineers" 
                desc="No account managers relaying information between you and the people writing your code. You have direct communication with the team building your product, which means faster decisions and fewer misunderstandings." 
              />
              <ValuePropCard 
                title="Your Code Is Yours From Day One" 
                desc="Source code lives in your GitHub organization. Infrastructure runs in your cloud accounts. When you hire your first in-house engineers, they inherit a well-documented codebase — not a black box." 
              />
            </div>
          </div>
        </section>

        {/* --- 10. DETAILED RETRIEVAL FAQ ACCORDION --- */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">FAQ Hub</span>
            <h2 className="text-3xl md:text-5xl font-black">Frequently Asked <span className="text-purple-500">Questions</span></h2>
          </div>

          <div className="space-y-4">
            <MVPAccordionItem 
              q="How long does MVP development take with DevZore?" 
              a="A focused MVP — one core user flow, a defined feature set, and no external dependencies we cannot control — typically takes 8 to 14 weeks from the start of development. The discovery and scoping phase adds 1 to 2 weeks before development begins. Complex MVPs with marketplace logic, third-party integrations, or mobile and web platforms in parallel take longer. After discovery, we give you a milestone-based timeline with a clear scope attached to every delivery date." 
            />
            <MVPAccordionItem 
              q="How do you decide what goes into the MVP and what does not?" 
              a="We ask one question for every proposed feature: what does this feature prove that we cannot prove without it? If a feature does not test a core assumption and does not enable the core workflow, it goes on the version-two backlog. This is the hardest conversation in every MVP engagement — and the most valuable one." 
            />
            <MVPAccordionItem 
              q="Can you build our MVP if we only have an idea and no technical specification?" 
              a="Yes. The discovery and scoping phase is designed exactly for this situation. Many of our best MVP engagements started with a founding team that had a clear problem to solve and a target user in mind but had not yet produced a technical document. Discovery is where that document gets created." 
            />
            <MVPAccordionItem 
              q="What happens after the MVP launches?" 
              a="Every engagement includes 30 days of post-launch support. After that, we offer monthly retainer plans for iteration, feature development, and maintenance. Most MVP clients continue working with DevZore after launch because we already know the codebase and can move faster than a new team could." 
            />
            <MVPAccordionItem 
              q="Do you help with investor pitch preparation?" 
              a="Indirectly, yes. The interactive Figma prototype we produce before development begins can be shown to investors during fundraising. Many clients use their working MVP or prototype in pitch decks and demo days. We do not produce pitch decks directly, but the technical artifacts we deliver — a working product, clean architecture, documented codebase — are exactly what technical due diligence requires." 
            />
          </div>
        </section>

        {/* --- 11. HIGH INTENT FOOTER CTA CONTAINER --- */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-br from-[#0a0a0a] via-[#070707] to-[#050505] border border-white/10 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-6xl font-black tracking-tight leading-tight">
                Stop Dreaming, <span className="text-purple-500">Start Shipping.</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-medium max-w-lg mx-auto">
                The market waits for no one. Ready to validate your startup idea with a product that real users can use? Talk to our team — we respond within 24 hours with a clear plan and honest pricing.
              </p>
              <div className="pt-4">
                <Link to="/contact">
                  <button className="cursor-pointer bg-purple-600 hover:bg-purple-500 text-white px-10 py-4 rounded-xl font-bold text-sm shadow-xl hover:shadow-purple-600/20 transition-all">
                    Get Started in 4 Weeks →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- 12. ARCHITECTURE ECOSYSTEM OVERLAY FOOTER LINKS --- */}
        <footer className="max-w-7xl mx-auto px-6 pt-8 pb-12 border-t border-white/5">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs md:text-sm text-gray-500 font-medium">
            <span className="text-gray-600 uppercase tracking-widest text-[10px] font-bold">Related Ecosystem Architecture:</span>
            <Link to="/mern-stack" className="hover:text-purple-400 transition-colors">MERN Stack Development</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/saas-development" className="hover:text-purple-400 transition-colors">SaaS Development</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/ui-ux-design" className="hover:text-purple-400 transition-colors">UI/UX Design</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/mobile-development" className="hover:text-purple-400 transition-colors">Mobile App Development</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/web-app-development" className="hover:text-purple-400 transition-colors">Web App Development</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/" className="hover:text-purple-400 transition-colors">Back to Home</Link>
          </div>
        </footer>

      </div>
    </HelmetProvider>
  );
};

/* --- HIGH PERFORMANCE STRUCTURE COMPONENTS --- */

const StrategyCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-8 rounded-2xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all duration-300 flex flex-col justify-start`}>
    <div className="mb-5 bg-white/5 border border-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-purple-400">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const LaunchCard = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    <div className="bg-[#0c0c0c] rounded-2xl overflow-hidden mb-4 border border-white/5 shadow-xl group-hover:border-purple-500/30 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-[250px] md:h-[320px] object-cover opacity-75 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500" />
    </div>
    <div className="flex items-center justify-between px-2">
      <div>
        <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mt-0.5">{subtitle}</p>
      </div>
      <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
        <ArrowRight size={14} />
      </div>
    </div>
  </div>
);

const ProcessMilestoneCard = ({ step, span, title, desc }) => (
  <div className="bg-[#080808] border border-white/5 p-8 rounded-[2rem] hover:border-purple-500/20 hover:bg-[#0b0b0b] transition-all duration-300 group">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{span}</span>
      <span className="text-xs font-mono font-bold text-gray-600 group-hover:text-purple-500 transition-colors">Phase {step}</span>
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const ValuePropCard = ({ title, desc }) => (
  <div className="p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-purple-500/10 transition-colors">
    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
      <CheckCircle size={16} className="text-purple-500 shrink-0" />
      {title}
    </h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const MVPAccordionItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-[#080808] border border-white/5 overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-white/[0.01] transition-colors"
      >
        <h4 className="text-base md:text-lg font-bold text-white">{q}</h4>
        <ChevronDown 
          size={18} 
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

export default StartupMVP;