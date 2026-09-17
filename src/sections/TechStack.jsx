import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare, Search, Palette, Code2,
  TestTube, Rocket, ArrowRight, CheckCircle,
  Clock, Users, Shield, Zap
} from 'lucide-react';

const Process = ({ isDark }) => {
  const d = isDark;
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      n: '01',
      icon: <MessageSquare size={22}/>,
      color: 'purple',
      title: 'Free Discovery Call',
      subtitle: 'Understanding your vision and goals',
      duration: '1–2 days',
      desc: 'Every project starts with a free 30-minute discovery call where we listen — not pitch. We ask the right questions about your business goals, target users, technical constraints, timeline and budget. By the end, we have everything we need to produce a precise, fixed-price proposal.',
      delivers: [
        'Project requirements documented',
        'Technical feasibility assessed',
        'Fixed-price proposal prepared',
        'Milestone timeline defined',
        'Technology stack recommended',
      ],
      keywords: 'free consultation, project discovery, software requirements',
    },
    {
      n: '02',
      icon: <Search size={22}/>,
      color: 'blue',
      title: 'Strategy & Architecture',
      subtitle: 'Planning the technical foundation',
      duration: '3–5 days',
      desc: 'Before a single line of code is written, we design the full system architecture — database schema, API structure, component hierarchy, state management strategy, authentication flow and deployment pipeline. This planning phase prevents expensive rework and ensures the codebase scales with your business.',
      delivers: [
        'System architecture document',
        'Database schema design',
        'API endpoint specification',
        'Component and state design',
        'CI/CD pipeline setup',
        'GitHub repository structure',
      ],
      keywords: 'software architecture, system design, technical planning',
    },
    {
      n: '03',
      icon: <Palette size={22}/>,
      color: 'pink',
      title: 'UI/UX Design in Figma',
      subtitle: 'Designing before building',
      duration: '1–2 weeks',
      desc: 'We design every screen in Figma before development begins — wireframes first, then high-fidelity pixel-perfect designs with interactive prototype. You click through the entire product and approve it before a single line of code is written. This eliminates costly mid-development design changes.',
      delivers: [
        'Wireframes for all screens',
        'High-fidelity Figma designs',
        'Interactive clickable prototype',
        'Design system and component library',
        'Mobile-responsive breakpoints',
        'WCAG 2.1 AA accessibility compliance',
      ],
      keywords: 'Figma design, UI UX design, prototype, wireframe, design system',
    },
    {
      n: '04',
      icon: <Code2 size={22}/>,
      color: 'green',
      title: 'Agile Development Sprints',
      subtitle: 'Building with transparency',
      duration: '4–12 weeks',
      desc: 'Development happens in two-week sprints with a deployed staging environment updated after every sprint. You interact with the real, working application — not mockups or progress reports. TypeScript throughout, comprehensive error handling, optimistic UI updates and full accessibility compliance built in from the first sprint.',
      delivers: [
        'TypeScript React or Next.js frontend',
        'Node.js Express or GraphQL backend',
        'MongoDB or PostgreSQL database',
        'JWT authentication system',
        'Stripe or payment integration',
        'Staging deployment after every sprint',
        'Weekly progress video updates',
      ],
      keywords: 'agile development, sprint development, TypeScript, React, Node.js, full stack development',
    },
    {
      n: '05',
      icon: <TestTube size={22}/>,
      color: 'amber',
      title: 'Testing & Quality Assurance',
      subtitle: 'Shipping with confidence',
      duration: '1–2 weeks',
      desc: 'Before every production deployment, we run a full quality assurance pass — Vitest unit tests, Playwright end-to-end tests, React Testing Library component tests, cross-browser compatibility testing, mobile responsiveness review, Lighthouse performance audit targeting 95+ and security vulnerability scanning.',
      delivers: [
        'Vitest unit test suite',
        'Playwright end-to-end tests',
        'Cross-browser and device testing',
        'Lighthouse performance audit 95+',
        'Core Web Vitals compliance check',
        'Security vulnerability scan',
        'Accessibility audit WCAG 2.1 AA',
      ],
      keywords: 'software testing, QA testing, Playwright, Lighthouse, performance testing, security testing',
    },
    {
      n: '06',
      icon: <Rocket size={22}/>,
      color: 'cyan',
      title: 'Launch & Ongoing Support',
      subtitle: 'Delivering and growing together',
      duration: 'Ongoing',
      desc: 'Production deployment to Vercel, AWS or your chosen infrastructure — with DNS configuration, SSL setup, monitoring, automated backups and analytics instrumentation. Post-launch, we offer 30 days of included bug-fix support followed by flexible monthly maintenance plans that keep your product secure, fast and growing.',
      delivers: [
        'Production deployment on Vercel or AWS',
        'Domain, DNS and SSL configuration',
        'Uptime monitoring setup',
        'Google Analytics 4 and SEO setup',
        '30 days post-launch support included',
        'Full code handover to your GitHub',
        'Optional monthly maintenance plan',
      ],
      keywords: 'software deployment, Vercel deployment, AWS, production launch, maintenance support',
    },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    blue:   d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'      : 'bg-blue-50 border-blue-100 text-blue-600',
    pink:   d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'      : 'bg-pink-50 border-pink-100 text-pink-600',
    green:  d ? 'bg-green-500/10 border-green-500/20 text-green-400'   : 'bg-green-50 border-green-100 text-green-600',
    amber:  d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'   : 'bg-amber-50 border-amber-100 text-amber-600',
    cyan:   d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
  };

  const activeColorBorder = {
    purple: 'border-purple-500/40',
    blue:   'border-blue-500/40',
    pink:   'border-pink-500/40',
    green:  'border-green-500/40',
    amber:  'border-amber-500/40',
    cyan:   'border-cyan-500/40',
  };

  const guarantees = [
    { icon: <Clock size={16}/>,  label: '24hr Response',       sub: 'Every query acknowledged' },
    { icon: <Shield size={16}/>, label: 'Fixed Price',          sub: 'No surprise invoices' },
    { icon: <Users size={16}/>, label: 'Direct Access',         sub: 'Talk to your engineer' },
    { icon: <Zap size={16}/>,   label: 'Fortnightly Builds',    sub: 'See progress every 2 weeks' },
  ];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className={`py-16 sm:py-20 transition-colors duration-300 ${
        d ? 'bg-[#050505]' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-4 ${
            d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"/>
            How We Work
          </div>
          <h2 id="process-heading" className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${
            d ? 'text-white' : 'text-slate-950'
          }`}>
            Our Software Development{' '}
            <span className="text-purple-600">Process — Step by Step</span>
          </h2>
          <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>
            A transparent, structured six-step process from discovery to production launch —
            designed to deliver high-quality software on time, within budget and with zero
            surprises for clients across USA, UK, UAE, Canada, Australia and Pakistan.
          </p>
        </div>

        {/* ── Guarantees Strip ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 sm:mb-14">
          {guarantees.map((g, i) => (
            <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border ${
              d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-slate-200'
            }`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                d ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'
              }`}>
                {g.icon}
              </div>
              <div>
                <p className={`text-[12px] font-bold ${d ? 'text-white' : 'text-slate-900'}`}>{g.label}</p>
                <p className={`text-[10px] ${d ? 'text-gray-500' : 'text-slate-500'}`}>{g.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Step Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-6">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12px] font-bold border transition-all duration-200 ${
                activeStep === i
                  ? 'bg-purple-600 text-white border-purple-600 shadow-[0_0_16px_rgba(124,58,237,0.25)]'
                  : d
                    ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                    : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <span className="text-[11px] font-black opacity-70">{s.n}</span>
              <span className="hidden sm:inline">{s.title}</span>
            </button>
          ))}
        </div>

        {/* ── Active Step Detail ── */}
        <div className={`rounded-2xl border p-6 sm:p-8 lg:p-10 mb-10 transition-all duration-300 ${
          d
            ? `bg-white/[0.02] ${activeColorBorder[steps[activeStep].color]}`
            : `bg-white ${activeColorBorder[steps[activeStep].color]} border`
        }`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${colorMap[steps[activeStep].color]}`}>
                  {steps[activeStep].icon}
                </div>
                <div>
                  <p className={`text-[11px] font-black uppercase tracking-widest ${d ? 'text-gray-500' : 'text-slate-400'}`}>
                    Step {steps[activeStep].n}
                  </p>
                  <h3 className={`text-xl font-black ${d ? 'text-white' : 'text-slate-900'}`}>
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold mb-4 ${
                d ? 'bg-white/[0.04] border border-white/[0.08] text-gray-400' : 'bg-slate-50 border border-slate-200 text-slate-600'
              }`}>
                <Clock size={11} className="text-purple-500"/>
                Duration: {steps[activeStep].duration}
              </div>

              <p className={`text-[13px] sm:text-[14px] leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                {steps[activeStep].desc}
              </p>

              <p className={`text-[12px] italic ${d ? 'text-gray-600' : 'text-slate-400'}`}>
                Keywords: {steps[activeStep].keywords}
              </p>
            </div>

            {/* Right — Deliverables */}
            <div>
              <p className={`text-[11px] font-black uppercase tracking-widest mb-4 ${d ? 'text-gray-500' : 'text-slate-400'}`}>
                What You Receive
              </p>
              <div className="space-y-3">
                {steps[activeStep].delivers.map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border ${
                    d ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-slate-50 border-slate-100'
                  }`}>
                    <CheckCircle size={14} className="text-purple-500 flex-shrink-0 mt-0.5"/>
                    <span className={`text-[13px] font-medium ${d ? 'text-gray-300' : 'text-slate-700'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── All Steps Summary ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`text-left p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                activeStep === i
                  ? d
                    ? 'border-purple-500/40 bg-purple-600/5'
                    : 'border-purple-200 bg-purple-50'
                  : d
                    ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.10]'
                    : 'bg-white border-slate-200 hover:shadow-sm hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[11px] font-black px-2 py-0.5 rounded-md ${
                  activeStep === i
                    ? 'bg-purple-600 text-white'
                    : d ? 'bg-white/[0.06] text-gray-500' : 'bg-slate-100 text-slate-500'
                }`}>{step.n}</span>
                <div className={`w-7 h-7 rounded-lg border flex items-center justify-center ${colorMap[step.color]}`}>
                  {React.cloneElement(step.icon, { size: 14 })}
                </div>
              </div>
              <h3 className={`text-[13px] font-bold mb-1 ${
                activeStep === i ? 'text-purple-500' : d ? 'text-white' : 'text-slate-900'
              }`}>
                {step.title}
              </h3>
              <p className={`text-[11px] mb-2 ${d ? 'text-gray-500' : 'text-slate-500'}`}>{step.subtitle}</p>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                d ? 'bg-white/[0.05] text-gray-500' : 'bg-slate-100 text-slate-500'
              }`}>
                {step.duration}
              </span>
            </button>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className={`p-6 sm:p-8 rounded-2xl border text-center ${
          d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'
        }`}>
          <h3 className={`text-xl font-black mb-2 ${d ? 'text-white' : 'text-slate-900'}`}>
            Ready to start your project?
          </h3>
          <p className={`text-[13px] mb-5 max-w-lg mx-auto ${d ? 'text-gray-400' : 'text-slate-600'}`}>
            Free discovery call, no commitment required. We will walk you through the full
            process and answer every question before you decide.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              Book Free Discovery Call <ArrowRight size={14}/>
            </Link>
            <a
              href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20want%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── SEO Hidden ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Software Development Process — DevZore</h2>
          <p>DevZore follows a transparent 6-step software development process: free discovery call and project requirements gathering, system architecture and technical planning, UI/UX design in Figma with interactive prototype, agile development in 2-week sprints with TypeScript React and Node.js, comprehensive testing with Vitest and Playwright achieving Lighthouse 95+ scores, and production deployment to Vercel or AWS with 30 days post-launch support. We serve clients across USA, UK, UAE, Canada, Australia, Saudi Arabia, Qatar and Pakistan with fixed pricing and full code ownership.</p>
          {steps.map((s, i) => (
            <div key={i}>
              <h3>Step {s.n}: {s.title}</h3>
              <p>{s.desc}</p>
              <ul>{s.delivers.map((d, j) => <li key={j}>{d}</li>)}</ul>
            </div>
          ))}
          <p>Keywords: software development process, agile development, web application development process, how to hire a web developer, software development agency process, TypeScript development, React development process, Node.js development, custom software development workflow, full stack development company process, web development timeline, software project planning, MVP development process, SaaS development process.</p>
        </div>

      </div>
    </section>
  );
};

export default Process;