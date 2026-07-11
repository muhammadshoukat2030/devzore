import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import ServiceGalleryTemplate from '../components/ServiceGalleryTemplate';
import {
  Settings, ShieldCheck, Activity, PenTool,
  Clock, LifeBuoy, Zap, Database, CheckCircle2,
  ArrowRight, HardDrive, RefreshCcw, ChevronDown,
  HelpCircle, Server, Code, FileText, AlertTriangle
} from 'lucide-react';
import { assets } from '../assets/assets';

const Maintenance = () => {
  return (
    <>

      <Helmet>
        <title>Enterprise Website Maintenance & Technical Support Services | DevZore</title>
        <meta name="description" content="DevZore provides professional website maintenance and continuous technical support—including cloud bug fixes, hot patches, security compliance monitoring, and performance scaling." />
        <link rel="canonical" href="https://devzore.com/maintenance" />
        <meta property="og:title" content="Enterprise Website Maintenance & Technical Support Services | DevZore" />
        <meta property="og:description" content="Keep your applications fast, secure, and resilient. Continuous uptime monitoring, optimization, and expert code auditing by global engineers." />
        <meta property="og:url" content="https://devzore.com/maintenance" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-20 overflow-x-hidden">

        {/* --- 1. TOP NAVBAR BRAND STRIP --- */}
        <div className="max-w-7xl mx-auto px-6 pt-16 flex items-center justify-between relative z-50">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            24/7 System Reliability Protocol Active
          </div>
          <Link to="/contact">
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(147,51,234,0.3)] cursor-pointer">
              Support Portal
            </button>
          </Link>
        </div>

        {/* --- 2. HERO HEADER VIEW --- */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-purple-600/5 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="space-y-6 relative z-10 text-left">
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">
              Website Maintenance and Support Services — <span className="text-purple-500">So Your Site Never Costs You a Customer</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
              A website is not finished when it launches. It is finished when it stops needing attention — which, for any site generating real business, is never.
            </p>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              Dependencies become outdated and introduce security vulnerabilities. Performance degrades as traffic grows and content accumulates. Features that worked perfectly on launch day break when a browser update or third-party API changes without warning. At DevZore, we provide ongoing website maintenance and support that keeps your site fast, secure, and functioning exactly as it should — so a technical problem never becomes the reason a potential customer goes to your competitor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="cursor-pointer w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-all group shadow-xl">
                  Choose a Plan <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
              <a href="#plans-matrix" className="w-full sm:w-auto">
                <button className="cursor-pointer w-full sm:w-auto bg-[#111111] border border-white/10 hover:bg-white/5 px-8 py-4 rounded-xl font-bold text-sm transition-all text-gray-300">
                  SLA Details
                </button>
              </a>
            </div>
          </div>

          <div className="relative group lg:justify-self-end hidden md:block">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2 max-w-[500px]">
              <div className="bg-black/80 px-4 py-2 border-b border-white/5 flex items-center gap-2 font-mono text-[11px] text-gray-500">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40"></span>
                <span className="ml-2 text-gray-400">infrastructure-telemetry.log</span>
              </div>
              <img
                src={assets.maintenance_system}
                alt="System Engineering and Optimization Panel"
                className="w-full h-auto opacity-75 rounded-b-xl group-hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* --- 3. RISK ANALYSIS INTRO STRIP --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-3">System Degradation Study</span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
                Why Websites Need Ongoing Maintenance — <span className="text-purple-500">and What Happens Without It</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                The most common mistake businesses make after launching a website is assuming that once it is live, the technical work is done. In reality, the technical environment a website depends on changes continuously. JavaScript package vulnerabilities are disclosed weekly. Browser engines update their rendering behavior. Third-party payment and map APIs deprecate endpoints without long notice periods. Hosting environments change configurations.
              </p>
              <p>
                A site without active maintenance is not a site that stays the same — it is a site that gradually deteriorates. Security vulnerabilities accumulate. Performance scores drop. Features start behaving unexpectedly. And because none of this is dramatic, it often goes unnoticed until a real problem occurs: a security breach, a checkout that stops working, or a Google ranking drop caused by Core Web Vitals scores that slipped below threshold.
              </p>
              <p className="text-purple-400 text-xs md:text-sm bg-purple-500/5 border border-purple-500/10 p-5 rounded-xl flex items-start gap-4">
                <AlertTriangle className="shrink-0 mt-0.5" size={18} />
                <span>
                  <strong>Core Reality:</strong> Maintenance is not a cost on top of your website investment. It is the ongoing protection of that investment.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* --- 4. EXHAUSTIVE MAINTENANCE SERVICES OFFERED --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
          <div className="mb-12">
            <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-black">Core Website Maintenance <span className="text-purple-500">Services We Offer</span></h2>
            <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MaintenanceCard
              icon={<Code className="text-purple-500" size={22} />}
              title="Bug Fixes and Error Resolution"
              desc="When something breaks — a broken form, a failed API call, a layout that breaks on a specific device — we fix it fast. Critical issues are triaged within 4 hours. Most bugs are resolved within 24 hours. You do not need to describe the problem to a helpdesk, wait for a ticket queue, or manage a back-and-forth with a developer who has never seen your codebase. We know your site."
              borderColor="border-l-purple-600"
            />
            <MaintenanceCard
              icon={<ShieldCheck className="text-blue-500" size={22} />}
              title="Security Patches and Vulnerability Management"
              desc="We monitor your dependencies for disclosed vulnerabilities using automated scanning tools, apply patches in a staging environment first, test for regressions, and deploy to production only when the fix is confirmed safe. We also review authentication flows, access control logic, and API exposure on a quarterly basis."
              borderColor="border-l-blue-500"
            />
            <MaintenanceCard
              icon={<Activity className="text-purple-500" size={22} />}
              title="Performance Monitoring and Optimization"
              desc="We track your Core Web Vitals scores, page load times, and server response times on an ongoing basis. When scores drift below threshold — from content additions, new features, or infrastructure changes — we identify the cause and resolve it before it affects your Google rankings or your users' experience."
              borderColor="border-l-purple-600"
            />
            <MaintenanceCard
              icon={<RefreshCcw className="text-blue-500" size={22} />}
              title="Dependency Updates and Package Management"
              desc="Outdated npm packages and library versions are one of the most common sources of both security vulnerabilities and unexpected bugs. We manage dependency updates on a structured schedule, testing each update against your application before it reaches production."
              borderColor="border-l-blue-500"
            />
            <MaintenanceCard
              icon={<Settings className="text-purple-500" size={22} />}
              title="Content and Feature Updates"
              desc="Updating a team page, adding a new service, adjusting pricing, or making a layout change should not require a separate project and a separate quote for every request. Maintenance plans include a monthly hours allocation for small updates and feature additions so your site stays current without the overhead of project management for every small change."
              borderColor="border-l-purple-600"
            />
            <MaintenanceCard
              icon={<FileText className="text-blue-500" size={22} />}
              title="Monthly Maintenance Reports"
              desc="Every month, you receive a clear report covering what we did, what we found and fixed, your current performance scores, your security status, and what we are monitoring going into the next period. No technical jargon. No padding. A factual summary of the value delivered."
              borderColor="border-l-blue-500"
            />
          </div>
        </section>

        {/* --- 5. INNER DYNAMIC SYSTEM WRAPPER --- */}
        <div className="bg-black py-4 border-y border-white/5">
          <ServiceGalleryTemplate pageKey="Maintenance" />
        </div>

        {/* --- 6. OPERATIONAL SYSTEM PROCESS CYCLES --- */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Methodology</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Our Maintenance <span className="text-purple-500">Process</span></h2>
            <p className="text-gray-500 max-w-sm mx-auto mt-3 text-xs md:text-sm">Four clear deployment steps used by DevZore to maintain total operational control.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessStepCard step="01" title="Step 1 — Onboarding and Site Audit" desc="When a new maintenance client joins DevZore, we start with a complete technical audit of your site — dependency health, security posture, performance baseline, error logs, and any existing known issues. This audit produces a findings report and a prioritized fix list that we work through in the first month." />
            <ProcessStepCard step="02" title="Step 2 — Access and Monitoring Setup" desc="We request access to your repository, hosting environment, and analytics platform. We configure uptime monitoring, error tracking with Sentry, and performance tracking with Google Search Console and Lighthouse. You will know about problems before your users do." />
            <ProcessStepCard step="03" title="Step 3 — Ongoing Maintenance Cycles" desc="On a monthly basis: dependency review and updates, security scan and patch application, performance score review, and resolution of any bugs or errors that surfaced during the period. Any planned updates or feature additions are scheduled and delivered within the monthly hours allocation." />
            <ProcessStepCard step="04" title="Step 4 — Monthly Report and Review" desc="At the end of each month, you receive your maintenance report. For Growth and Premium plan clients, we schedule a brief review call to discuss any open questions, upcoming changes, or strategic improvements worth addressing in the coming period." />
          </div>
        </section>

        {/* --- 7. DETAILED PRICING MATRIX PLANS --- */}
        <section id="plans-matrix" className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5 scroll-mt-24">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase block mb-2">Service Levels</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Maintenance <span className="text-purple-500">Plans</span></h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">

            {/* Basic Plan */}
            <div className="bg-[#080808] border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-white/10 transition-colors">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Basic Plan — For Small Business Websites and Portfolios</h3>
                <div className="text-2xl font-black text-purple-500">Up to 4 Hours <span className="text-xs text-gray-500 font-normal">/ month allocation</span></div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Includes bug fixes and error resolution, monthly security scan and dependency review, performance monitoring, monthly report, and email support with a 48-hour response time. Suitable for marketing websites, portfolio sites, and informational pages that do not change frequently.
                </p>
              </div>
              <div className="pt-6">
                <Link to="/contact" className="block">
                  <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-4 rounded-xl text-xs border border-white/5 cursor-pointer transition-colors">Select Basic Plan</button>
                </Link>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="bg-[#090909] border-2 border-purple-600 rounded-2xl p-8 flex flex-col justify-between relative shadow-xl shadow-purple-600/5">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-purple-600 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">Recommended</div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Growth Plan — For Business Websites, E-Commerce, and Web Apps</h3>
                <div className="text-2xl font-black text-purple-500">Up to 10 Hours <span className="text-xs text-gray-500 font-normal">/ month allocation</span></div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  Everything in the Basic plan plus content and feature updates, priority bug resolution with 24-hour response, dependency updates and regression testing, a monthly review call, and direct email support. The right plan for any site where downtime or degraded performance has a direct business cost.
                </p>
              </div>
              <div className="pt-6">
                <Link to="/contact" className="block">
                  <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-4 rounded-xl text-xs cursor-pointer shadow-md transition-all">Select Growth Plan</button>
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-[#080808] border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-white/10 transition-colors">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Premium Plan — For SaaS Platforms, E-Commerce at Scale</h3>
                <div className="text-2xl font-black text-purple-500">Unlimited Hours <span className="text-xs text-gray-500 font-normal">(Fair-Use Basis)</span></div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Everything in the Growth plan plus 24/7 emergency response for critical failures, a dedicated developer assigned to your account who knows your codebase in depth, direct Slack or WhatsApp communication, and weekly check-in calls. The right plan for any product where hours of downtime translate directly to revenue loss.
                </p>
              </div>
              <div className="pt-6">
                <Link to="/contact" className="block">
                  <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-4 rounded-xl text-xs border border-white/5 cursor-pointer transition-colors">Select Premium Plan</button>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* --- 8. TECHNICAL STACK MATRIX BRICK --- */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="bg-[#080808] border border-white/5 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-4">
            <span className="text-purple-400 font-mono text-xs uppercase tracking-[0.3em]">Coverage</span>
            <h2 className="text-2xl md:text-3xl font-black">Technologies We Maintain</h2>
            <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
              React and Next.js applications, Node.js and Express.js backends, MongoDB and PostgreSQL databases, REST and GraphQL APIs, AWS and Vercel deployments, Docker containers and CI/CD pipelines, e-commerce platforms with Stripe integration, React Native mobile applications, and full MERN stack applications of any complexity.
            </p>
          </div>
        </section>

        {/* --- 9. OPERATIONAL DATA INSIGHTS & PARTNER DIFFERENTIATORS --- */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="space-y-2">
              <span className="text-purple-500 font-mono text-xs uppercase tracking-[0.3em]">Differentiators</span>
              <h2 className="text-2xl md:text-4xl font-black leading-tight">Why Choose DevZore for Website Maintenance?</h2>
              <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <DifferentiatorCard title="We Already Know Your Codebase" desc="The most expensive part of any maintenance relationship is the onboarding period where a new developer learns how your system is built. When DevZore built your site, there is no onboarding period. When we inherit a site from another team, our onboarding audit means we understand the system thoroughly before we touch it." />
              <DifferentiatorCard title="Fast Response Times Backed by Real Process" desc="Critical issues are triaged within 4 hours, not 4 business days. Our response commitments are part of your plan terms — not marketing language." />
              <DifferentiatorCard title="No Long-Term Contracts" desc="Our maintenance relationships are month-to-month. We keep clients because the work is worth keeping, not because a contract prevents them from leaving." />
              <DifferentiatorCard title="Transparent Billing" desc="Your monthly hours allocation is tracked and reported. You know exactly what was done and how long it took. Unused hours do not roll over, which is why we scope plans to match actual site needs rather than upselling hours that will never be consumed." />
            </div>
          </div>
        </section>

        {/* --- 10. STATUS TELEMETRY GLANCE PANEL --- */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <StatusTelemetryItem
              image={assets.maintenance_server_health}
              title="Database Health Checks"
              subtitle="Automated Backups & Integrity"
            />
            <StatusTelemetryItem
              image={assets.maintenance_server_load}
              title="Server Load Balancers"
              subtitle="Uptime & Traffic Management"
            />
          </div>
        </section>

        {/* --- 11. CORE SYSTEM TELEMETRY METRICS BAR --- */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-[#080808] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
              <div>
                <Clock className="mx-auto mb-2 text-purple-500" size={22} />
                <h4 className="text-xl font-bold">15min</h4>
                <p className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">Response Time</p>
              </div>
              <div>
                <Zap className="mx-auto mb-2 text-blue-500" size={22} />
                <h4 className="text-xl font-bold">99.9%</h4>
                <p className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">Uptime SLA</p>
              </div>
              <div>
                <HardDrive className="mx-auto mb-2 text-purple-500" size={22} />
                <h4 className="text-xl font-bold">24/7</h4>
                <p className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">Monitoring</p>
              </div>
              <div>
                <LifeBuoy className="mx-auto mb-2 text-blue-500" size={22} />
                <h4 className="text-xl font-bold">Expert</h4>
                <p className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">On-call Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 12. RETRIEVAL ACCORDION SYSTEM (FAQ) --- */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <span className="text-purple-500 font-mono text-xs uppercase tracking-[0.3em]">Knowledge Hub</span>
            <h2 className="text-2xl md:text-4xl font-black mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <FAQAccordionBlock q="What if I need more hours than my plan includes in a given month?" a="Additional hours beyond your plan allocation are billed at our standard hourly rate, which is shared with you at the start of the engagement. We notify you before using hours beyond your plan and never exceed your allocation without approval." />
            <FAQAccordionBlock q="Can DevZore maintain a site that another team built?" a="Yes. We take on inherited maintenance clients regularly. The process begins with a technical audit that gives us a thorough understanding of how your site is built, what its current health status is, and what issues need addressing. Most inherited site audits are completed within one week of onboarding." />
            <FAQAccordionBlock q="What is included in the emergency support on the Premium plan?" a="Emergency support covers critical failures — a site that is completely down, a checkout that has stopped processing payments, a data breach or security incident, or a deployment that has caused major functionality to break. For these events, a DevZore engineer is reachable and actively working on resolution within two hours, any time of day." />
            <FAQAccordionBlock q="Do you offer maintenance for mobile apps as well as websites?" a="Yes. React Native mobile app maintenance is available on Growth and Premium plans. Mobile app maintenance follows a similar structure — dependency updates, bug fixes, API compatibility monitoring, and app store submission support when updates require a new release." />
            <FAQAccordionBlock q="How do I know my maintenance hours are being used effectively?" a="Your monthly report includes a detailed breakdown of every hour used during the period — what was done, how long it took, and what the outcome was. If a month passes with nothing significant to address, we tell you that rather than inventing work to justify the invoice." />
          </div>
        </section>

        {/* --- 13. CONVERSION CONTEXT FOOTER --- */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="bg-gradient-to-tr from-[#0a0a0a] to-[#050505] border border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-purple-600/[0.02] pointer-events-none"></div>
            <h2 className="text-2xl md:text-5xl font-bold mb-4 tracking-tight">
              Ready to stop worrying about your website and start trusting it?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto font-medium text-xs md:text-sm">
              Talk to our team — we respond within 24 hours with a recommended plan and honest pricing.
            </p>
            <Link to="/contact">
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all cursor-pointer">
                Talk to Our Team
              </button>
            </Link>
          </div>
        </section>

        {/* --- 14. INTERNAL REFERENCE MATRIX --- */}
        <footer className="max-w-7xl mx-auto px-6 pt-6 pb-12 border-t border-white/5">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs text-gray-500 font-medium">
            <Link to="/web-app-development" className="hover:text-purple-400 transition-colors">Web App Development</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/mern-stack" className="hover:text-purple-400 transition-colors">MERN Stack Development</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/ecommerce-development" className="hover:text-purple-400 transition-colors">E-Commerce Development</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/startup-mvp" className="hover:text-purple-400 transition-colors">Startup MVP</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/ui-ux-design" className="hover:text-purple-400 transition-colors">UI/UX Design</Link>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <Link to="/" className="hover:text-purple-400 transition-colors">Back to Home</Link>
          </div>
        </footer>

      </div>
    </>
  );
};

/* --- DOM HELPER COMPONENT BLOCKS --- */

const MaintenanceCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-6 rounded-xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all duration-300`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const ProcessStepCard = ({ step, title, desc }) => (
  <div className="bg-[#080808] border border-white/5 p-6 rounded-xl relative group hover:border-white/10 transition-colors">
    <div className="text-2xl font-mono font-black text-white/5 absolute top-4 right-5 group-hover:text-purple-500/10 transition-colors">
      {step}
    </div>
    <h3 className="text-base font-bold text-white mb-2 pr-6">{title}</h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const DifferentiatorCard = ({ title, desc }) => (
  <div className="p-6 rounded-xl bg-[#080808] border border-white/5 hover:border-purple-500/10 transition-all">
    <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
      <CheckCircle2 size={15} className="text-purple-500 shrink-0" />
      {title}
    </h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const StatusTelemetryItem = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    <div className="bg-[#0c0c0c] rounded-2xl overflow-hidden mb-3 border border-gray-900 shadow-xl group-hover:border-purple-500/30 transition-all">
      <img
        src={image}
        alt={title}
        className="w-full h-[220px] md:h-[260px] object-cover opacity-60 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-500"
      />
    </div>
    <h3 className="text-base font-bold mb-0.5 group-hover:text-purple-500 transition-colors">{title}</h3>
    <p className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">{subtitle}</p>
  </div>
);

const FAQAccordionBlock = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl bg-[#080808] border border-white/5 overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-white/[0.01]"
      >
        <h4 className="text-sm md:text-base font-bold text-white">{q}</h4>
        <ChevronDown size={16} className={`text-purple-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-white/5' : 'max-h-0'}`}>
        <p className="p-6 text-gray-400 text-xs md:text-sm leading-relaxed bg-[#060606]">
          {a}
        </p>
      </div>
    </div>
  );
};

export default Maintenance;