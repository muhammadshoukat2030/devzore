import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare, Search, Palette, Code2,
  TestTube, Rocket, RefreshCw, ArrowRight,
  CheckCircle, Clock, Users, Shield
} from 'lucide-react';

const Process = ({ isDark }) => {
  const d = isDark;
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      n: '01',
      icon: <MessageSquare size={22}/>,
      color: 'purple',
      title: 'Discovery & Free Consultation',
      short: 'Discovery',
      duration: 'Day 1–2',
      desc: 'Every project begins with a free, no-commitment discovery call. We listen to your goals, constraints and vision — then ask the right questions to understand what success actually looks like for your business.',
      details: [
        'Free 30-minute strategy consultation call',
        'Business goals and target audience analysis',
        'Technical requirements and constraint mapping',
        'Competitor and market landscape review',
        'Budget and timeline expectation alignment',
        'Technology stack recommendation based on your needs',
      ],
      outcome: 'A shared understanding of your project — and an honest assessment of what it will take to build it right.',
    },
    {
      n: '02',
      icon: <Search size={22}/>,
      color: 'blue',
      title: 'Scope, Proposal & Fixed Pricing',
      short: 'Proposal',
      duration: 'Day 3–5',
      desc: 'We produce a detailed written proposal with a fixed price, milestone-based payment structure, delivery timeline and the full feature scope — everything in writing before a single line of code is written.',
      details: [
        'Detailed feature specification document',
        'Fixed milestone-based pricing — no hourly billing',
        'Phased delivery timeline with staging builds',
        'Technology stack and architecture decision record',
        'Project agreement and intellectual property terms',
        'Kick-off date confirmation and team assignment',
      ],
      outcome: 'A written proposal with fixed pricing, clear deliverables and a milestone timeline — no vague estimates.',
    },
    {
      n: '03',
      icon: <Palette size={22}/>,
      color: 'pink',
      title: 'UI/UX Design & Prototype',
      short: 'Design',
      duration: 'Week 1–2',
      desc: 'Our designers produce wireframes and high-fidelity Figma designs for every screen before development begins. You interact with a clickable prototype — clicking through the full product experience before we write any production code.',
      details: [
        'Information architecture and user flow mapping',
        'Low-fidelity wireframes for every screen',
        'High-fidelity Figma UI designs with your branding',
        'Interactive clickable prototype for stakeholder review',
        'Mobile-responsive designs for all breakpoints',
        'Design system with components, tokens and documentation',
      ],
      outcome: 'A pixel-perfect Figma prototype that clicks, feels and behaves like the real product — approved before development.',
    },
    {
      n: '04',
      icon: <Code2 size={22}/>,
      color: 'amber',
      title: 'Agile Development in Sprints',
      short: 'Development',
      duration: 'Weeks 2–10',
      desc: 'Development runs in two-week sprints with a deployed staging build at the end of every sprint. You interact with the live application — not mockups — and provide feedback that shapes the next sprint.',
      details: [
        'React or React Native frontend with TypeScript',
        'Node.js and Express backend with REST or GraphQL API',
        'MongoDB or PostgreSQL database with proper indexing',
        'Authentication system with JWT and OAuth integration',
        'Third-party API integrations (Stripe, Twilio, AWS)',
        'Fortnightly staging builds you can access and test',
      ],
      outcome: 'A production-quality codebase delivered in transparent two-week cycles — reviewed and approved by you throughout.',
    },
    {
      n: '05',
      icon: <TestTube size={22}/>,
      color: 'green',
      title: 'Testing, QA & Performance',
      short: 'QA & Testing',
      duration: 'Week 9–11',
      desc: 'Before any code reaches production, it passes through automated testing, manual QA, performance auditing and accessibility compliance checks — so what launches is production-ready from day one.',
      details: [
        'Vitest unit tests on all business-critical functions',
        'React Testing Library component tests',
        'Playwright end-to-end tests on all core user flows',
        'Lighthouse performance audit — 95+ score target',
        'Core Web Vitals check (LCP, CLS, INP)',
        'WCAG 2.1 AA accessibility compliance review',
        'Cross-browser and cross-device testing',
        'Security vulnerability scan with npm audit',
      ],
      outcome: 'A tested, performant, accessible and secure product — measured against real standards before it reaches your users.',
    },
    {
      n: '06',
      icon: <Rocket size={22}/>,
      color: 'indigo',
      title: 'Launch & Production Deployment',
      short: 'Launch',
      duration: 'Week 11–12',
      desc: 'Production deployment to Vercel, AWS or your preferred cloud provider — with CI/CD pipeline, domain setup, SSL, monitoring, database backups and analytics instrumentation all configured before go-live.',
      details: [
        'Production environment setup on Vercel or AWS',
        'CI/CD pipeline with GitHub Actions',
        'Custom domain setup and SSL certificate configuration',
        'Database backup and disaster recovery setup',
        'Uptime monitoring and error alerting with Sentry',
        'Google Analytics 4 and Search Console configuration',
        'Full code and deployment handover to your accounts',
        'Go-live checklist completed and signed off',
      ],
      outcome: 'A live, monitored, backed-up production application — fully transferred to your ownership and ready for users.',
    },
    {
      n: '07',
      icon: <RefreshCw size={22}/>,
      color: 'teal',
      title: 'Post-Launch Support & Growth',
      short: 'Support',
      duration: 'Ongoing',
      desc: 'The launch is the beginning, not the end. DevZore provides 30 days post-launch support on every project, followed by optional maintenance plans and sprint-based feature development to keep your product growing.',
      details: [
        '30 days post-launch bug fix support included',
        'Monthly maintenance retainer plans available',
        'Performance monitoring and optimisation',
        'Feature development in sprint-based engagements',
        'SEO ongoing optimisation and content support',
        'Database and infrastructure scaling support',
        'Team knowledge transfer and documentation',
        'Priority support for production incidents',
      ],
      outcome: 'An ongoing partnership that keeps your product secure, fast and growing — long after the initial launch.',
    },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    blue:   d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'      : 'bg-blue-50 border-blue-100 text-blue-600',
    pink:   d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'      : 'bg-pink-50 border-pink-100 text-pink-600',
    amber:  d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'   : 'bg-amber-50 border-amber-100 text-amber-600',
    green:  d ? 'bg-green-500/10 border-green-500/20 text-green-400'   : 'bg-green-50 border-green-100 text-green-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400': 'bg-indigo-50 border-indigo-100 text-indigo-600',
    teal:   d ? 'bg-teal-500/10 border-teal-500/20 text-teal-400'      : 'bg-teal-50 border-teal-100 text-teal-600',
  };

  const activeData = steps[activeStep];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className={`py-16 sm:py-20 transition-colors duration-300 ${
        d ? 'bg-[#030303]' : 'bg-white'
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
            Our Software Development Process —{' '}
            <span className="text-purple-600">7 Steps to Launch</span>
          </h2>
          <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>
            From free consultation to post-launch support — a transparent, milestone-driven
            development process where you know exactly what is happening at every stage.
            No black boxes, no surprises, no excuses.
          </p>
        </div>

        {/* ── Step Tabs (mobile scroll + desktop wrap) ── */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-bold border transition-all duration-200 ${
                activeStep === i
                  ? 'bg-purple-600 text-white border-purple-600 shadow-[0_0_16px_rgba(124,58,237,0.25)]'
                  : d
                    ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                    : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <span className={`text-[10px] font-black ${activeStep === i ? 'text-purple-200' : 'text-purple-500'}`}>
                {step.n}
              </span>
              {step.short}
            </button>
          ))}
        </div>

        {/* ── Active Step Detail ── */}
        <div className={`rounded-2xl border p-6 sm:p-8 mb-10 transition-all duration-300 ${
          d ? 'bg-white/[0.02] border-white/[0.08]' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Left */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${colorMap[activeData.color]}`}>
                  {activeData.icon}
                </div>
                <div>
                  <div className={`text-[11px] font-black uppercase tracking-widest mb-0.5 ${
                    d ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    Step {activeData.n} · {activeData.duration}
                  </div>
                  <h3 className={`text-xl font-black ${d ? 'text-white' : 'text-slate-900'}`}>
                    {activeData.title}
                  </h3>
                </div>
              </div>

              <p className={`text-[14px] leading-relaxed mb-6 ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                {activeData.desc}
              </p>

              {/* Outcome */}
              <div className={`p-4 rounded-xl border ${
                d ? 'bg-purple-600/5 border-purple-500/20' : 'bg-purple-50 border-purple-100'
              }`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-1.5 text-purple-500`}>
                  What You Get
                </p>
                <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-300' : 'text-slate-700'}`}>
                  {activeData.outcome}
                </p>
              </div>
            </div>

            {/* Right — Details */}
            <div>
              <p className={`text-[11px] font-black uppercase tracking-widest mb-4 ${
                d ? 'text-gray-500' : 'text-slate-500'
              }`}>
                What Happens in This Step
              </p>
              <ul className="space-y-3">
                {activeData.details.map((detail, i) => (
                  <li key={i} className={`flex items-start gap-3 text-[13px] leading-relaxed ${
                    d ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    <CheckCircle size={15} className="text-purple-500 flex-shrink-0 mt-0.5"/>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── All Steps Overview ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {[
            { icon: <Clock size={16}/>,   label: '8–14 Weeks',    sub: 'Average delivery time' },
            { icon: <Users size={16}/>,   label: 'Senior Only',   sub: 'Engineers on every project' },
            { icon: <Shield size={16}/>,  label: 'Fixed Price',   sub: 'No surprise invoices' },
            { icon: <CheckCircle size={16}/>, label: 'Code Yours', sub: '100% ownership on delivery' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border ${
              d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-slate-200'
            }`}>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                d ? 'bg-purple-500/10 border border-purple-500/20 text-purple-400' : 'bg-purple-50 border border-purple-100 text-purple-600'
              }`}>
                {item.icon}
              </div>
              <div>
                <p className={`text-[13px] font-black ${d ? 'text-white' : 'text-slate-900'}`}>{item.label}</p>
                <p className={`text-[11px] ${d ? 'text-gray-500' : 'text-slate-500'}`}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className={`p-6 sm:p-8 rounded-2xl border text-center ${
          d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'
        }`}>
          <h3 className={`text-xl font-black mb-2 ${d ? 'text-white' : 'text-slate-900'}`}>
            Ready to start your project?
          </h3>
          <p className={`text-sm mb-6 max-w-lg mx-auto ${d ? 'text-gray-400' : 'text-slate-600'}`}>
            Book a free discovery call — we will walk you through our process, answer every question
            and give you an honest assessment before any commitment.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              Book Free Discovery Call <ArrowRight size={14}/>
            </Link>
            <a href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20want%20to%20know%20more%20about%20your%20development%20process."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── SEO Hidden ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>DevZore Software Development Process</h2>
          <p>DevZore follows a transparent 7-step software development process: free discovery consultation, written proposal with fixed pricing, UI/UX design and Figma prototype, agile development in two-week sprints with staging builds, comprehensive testing including Vitest unit tests and Playwright end-to-end tests, production deployment with CI/CD pipeline and 30 days post-launch support. Average project delivery time is 8 to 14 weeks. We serve clients across USA, UK, UAE, Canada, Australia, Saudi Arabia, Qatar and Pakistan.</p>
          {steps.map((s, i) => (
            <div key={i}>
              <h3>Step {s.n}: {s.title} — {s.duration}</h3>
              <p>{s.desc}</p>
              <p>Deliverables: {s.details.join(', ')}</p>
            </div>
          ))}
          <p>Keywords: software development process, agile development agency, how to hire a web development company, custom software development process, MERN stack development process, SaaS development timeline, startup MVP development timeline, web application development process, mobile app development process, React development agency process.</p>
        </div>

      </div>
    </section>
  );
};

export default Process;
