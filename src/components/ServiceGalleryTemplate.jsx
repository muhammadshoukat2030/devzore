cat > /mnt/user-data/outputs/Services.jsx << 'SVCEOF'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code2, Smartphone, ShoppingCart,
  Server, Layers, Rocket, Monitor, Palette,
  Wrench, Search, TrendingUp, CheckCircle
} from 'lucide-react';

const Services = ({ isDark }) => {
  const d = isDark;
  const [activeFilter, setActiveFilter] = useState('All');

  const services = [
    {
      icon: <Code2 size={22}/>,
      color: 'purple',
      title: 'Web Development',
      desc: 'Custom, high-performance web applications built with React.js, Next.js and Node.js. SEO-optimised, mobile-first and engineered to scale — from simple business websites to complex enterprise platforms.',
      path: '/web-development',
      tags: ['React.js', 'Next.js', 'Node.js'],
      category: 'Development',
      popular: true,
    },
    {
      icon: <Smartphone size={22}/>,
      color: 'blue',
      title: 'Mobile App Development',
      desc: 'Cross-platform iOS and Android applications built with React Native. Native performance, push notifications, offline support and App Store submission handled end-to-end.',
      path: '/mobile-apps',
      tags: ['React Native', 'iOS', 'Android'],
      category: 'Development',
    },
    {
      icon: <ShoppingCart size={22}/>,
      color: 'green',
      title: 'E-Commerce Development',
      desc: 'High-converting custom online stores with Stripe, PayPal and local payment gateway integration. Product management, inventory, cart, checkout and order tracking built to drive revenue.',
      path: '/ecommerce',
      tags: ['Stripe', 'React', 'Node.js'],
      category: 'Development',
    },
    {
      icon: <Server size={22}/>,
      color: 'orange',
      title: 'Backend & API Development',
      desc: 'Scalable REST and GraphQL APIs built with Node.js and Express. Authentication, database design, third-party integrations, webhook handling and production-grade security from day one.',
      path: '/backend-api',
      tags: ['Node.js', 'REST', 'GraphQL'],
      category: 'Development',
    },
    {
      icon: <Layers size={22}/>,
      color: 'indigo',
      title: 'MERN Stack Development',
      desc: 'Full-stack JavaScript applications using MongoDB, Express.js, React and Node.js. A single technology stack from database to UI — faster development, easier maintenance and lower cost.',
      path: '/mern-stack-development',
      tags: ['MongoDB', 'Express', 'React'],
      category: 'Development',
      popular: true,
    },
    {
      icon: <Monitor size={22}/>,
      color: 'cyan',
      title: 'SaaS Product Development',
      desc: 'Multi-tenant SaaS platforms with Stripe subscription billing, user authentication, role management, analytics dashboards and the architecture to scale from 100 to 100,000 users.',
      path: '/saas-product-development',
      tags: ['SaaS', 'Stripe', 'Multi-tenant'],
      category: 'Development',
    },
    {
      icon: <Code2 size={22}/>,
      color: 'pink',
      title: 'React.js Development',
      desc: 'Expert React 19 development with TypeScript, TanStack Query, Zustand and Tailwind CSS. SPAs, dashboards, SaaS frontends and component libraries with Lighthouse 95+ performance.',
      path: '/reactdevelopment',
      tags: ['React 19', 'TypeScript', 'Tailwind'],
      category: 'Development',
    },
    {
      icon: <Palette size={22}/>,
      color: 'amber',
      title: 'UI/UX Design',
      desc: 'Figma wireframes, high-fidelity UI design, interactive prototypes, usability testing and design systems. WCAG 2.1 AA accessible. Developer handoff included with every project.',
      path: '/ui-ux-design',
      tags: ['Figma', 'Prototyping', 'Design Systems'],
      category: 'Design',
    },
    {
      icon: <Rocket size={22}/>,
      color: 'red',
      title: 'Startup MVP Development',
      desc: 'Investor-ready MVPs in 8 to 14 weeks. Product strategy, Figma design, full-stack development, Stripe billing, analytics and 30 days post-launch support — all included.',
      path: '/startup-mvp',
      tags: ['MVP', 'Stripe', 'Launch Ready'],
      category: 'Development',
      popular: true,
    },
    {
      icon: <Wrench size={22}/>,
      color: 'slate',
      title: 'Maintenance & Support',
      desc: 'Monthly maintenance plans covering security updates, uptime monitoring, bug fixing, performance optimisation, database backups and detailed monthly health reports.',
      path: '/maintenance',
      tags: ['Security', 'Monitoring', 'Reports'],
      category: 'Support',
    },
    {
      icon: <Search size={22}/>,
      color: 'violet',
      title: 'SEO Services',
      desc: 'Technical SEO audits, on-page optimisation, keyword research, white-hat link building, local SEO, Core Web Vitals fixes and monthly ranking reports. White-hat only.',
      path: '/seo-services',
      tags: ['Technical SEO', 'Link Building', 'Analytics'],
      category: 'Marketing',
    },
    {
      icon: <TrendingUp size={22}/>,
      color: 'teal',
      title: 'Digital Marketing',
      desc: 'Social media management, Meta Ads, Google Ads, lead generation, email marketing and content creation. Month-to-month plans. Average 3.2x ROAS across campaigns.',
      path: '/digital-marketing',
      tags: ['Meta Ads', 'Google Ads', 'Social Media'],
      category: 'Marketing',
    },
    
  ];

  const filters = ['All', 'Development', 'Design', 'Support', 'Marketing'];

  const filtered = activeFilter === 'All'
    ? services
    : services.filter(s => s.category === activeFilter);

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    blue:   d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'      : 'bg-blue-50 border-blue-100 text-blue-600',
    green:  d ? 'bg-green-500/10 border-green-500/20 text-green-400'   : 'bg-green-50 border-green-100 text-green-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400': 'bg-orange-50 border-orange-100 text-orange-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400': 'bg-indigo-50 border-indigo-100 text-indigo-600',
    cyan:   d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    pink:   d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'      : 'bg-pink-50 border-pink-100 text-pink-600',
    amber:  d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'   : 'bg-amber-50 border-amber-100 text-amber-600',
    red:    d ? 'bg-red-500/10 border-red-500/20 text-red-400'         : 'bg-red-50 border-red-100 text-red-600',
    slate:  d ? 'bg-slate-500/10 border-slate-500/20 text-slate-400'   : 'bg-slate-50 border-slate-100 text-slate-600',
    violet: d ? 'bg-violet-500/10 border-violet-500/20 text-violet-400': 'bg-violet-50 border-violet-100 text-violet-600',
    teal:   d ? 'bg-teal-500/10 border-teal-500/20 text-teal-400'      : 'bg-teal-50 border-teal-100 text-teal-600',
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`py-20 transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-4 ${
            d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"/>
            What We Build
          </div>
          <h2 id="services-heading" className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${d ? 'text-white' : 'text-slate-900'}`}>
            Software Development Services
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${d ? 'text-gray-400' : 'text-slate-600'}`}>
            From web applications and mobile apps to SaaS platforms, SEO and digital marketing —
            everything your business needs to grow online, delivered by one team.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-lg text-[12px] font-semibold transition-all border ${
                activeFilter === f
                  ? 'bg-purple-600 text-white border-purple-600 shadow-[0_0_16px_rgba(124,58,237,0.25)]'
                  : d
                    ? 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                    : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {f}
              {f === 'All' && (
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeFilter === 'All' ? 'bg-white/20' : d ? 'bg-white/[0.08] text-gray-500' : 'bg-slate-100 text-slate-400'
                }`}>
                  {services.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Services Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filtered.map((svc, i) => (
            <Link
              key={i}
              to={svc.path}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label={`${svc.title} services`}
              className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                d
                  ? 'bg-white/[0.02] border-white/[0.06] hover:border-purple-500/30 hover:bg-white/[0.04] hover:shadow-[0_8px_32px_rgba(124,58,237,0.1)]'
                  : 'bg-white border-slate-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50'
              }`}
            >
              {/* Popular badge */}
              {svc.popular && (
                <div className="absolute top-4 right-4">
                  <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-purple-600 text-white">
                    Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 flex-shrink-0 ${colorMap[svc.color]}`}>
                {svc.icon}
              </div>

              {/* Content */}
              <h3 className={`text-[15px] font-bold mb-2 group-hover:text-purple-500 transition-colors ${d ? 'text-white' : 'text-slate-900'}`}>
                {svc.title}
              </h3>
              <p className={`text-[13px] leading-relaxed mb-4 flex-grow ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                {svc.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {svc.tags.map((tag, j) => (
                  <span key={j} className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${
                    d ? 'bg-white/[0.04] border-white/[0.08] text-gray-400' : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className={`flex items-center gap-1.5 text-[12px] font-bold pt-3 border-t transition-colors group-hover:text-purple-500 ${
                d ? 'border-white/[0.06] text-gray-500' : 'border-slate-100 text-slate-400'
              }`}>
                Learn More
                <ArrowRight size={13} className="ml-auto group-hover:translate-x-0.5 transition-transform"/>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Process strip ── */}
        <div className={`rounded-2xl border p-6 sm:p-8 mb-12 ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'}`}>
          <p className={`text-[11px] font-black uppercase tracking-widest mb-5 text-center ${d ? 'text-gray-500' : 'text-slate-400'}`}>
            How We Work — Every Project
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { n: '01', label: 'Free Consultation', sub: 'Understand your goals' },
              { n: '02', label: 'Fixed Quote',        sub: 'No surprise invoices' },
              { n: '03', label: 'Sprint Delivery',    sub: 'Fortnightly builds' },
              { n: '04', label: 'Launch & Support',   sub: '30 days post-launch' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className={`text-2xl font-black text-purple-500 mb-1`}>{step.n}</div>
                <p className={`text-[12px] font-bold mb-0.5 ${d ? 'text-white' : 'text-slate-900'}`}>{step.label}</p>
                <p className={`text-[10px] ${d ? 'text-gray-500' : 'text-slate-500'}`}>{step.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className={`p-8 rounded-2xl border text-center ${d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'}`}>
          <h2 className={`text-xl font-black mb-2 ${d ? 'text-white' : 'text-slate-900'}`}>
            Not sure which service you need?
          </h2>
          <p className={`text-sm mb-5 ${d ? 'text-gray-400' : 'text-slate-600'}`}>
            Book a free 30-minute consultation — we will help you figure out exactly what to build and how.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              Get Free Consultation <ArrowRight size={14}/>
            </Link>
            <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${
                d ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]' : 'border-slate-200 text-slate-700 hover:bg-white'
              }`}>
              View All Services <ArrowRight size={14}/>
            </Link>
          </div>
        </div>

        {/* ── SEO Hidden ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Software Development Services — DevZore</h2>
          {services.map((s, i) => (
            <div key={i}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
          <p>DevZore offers web development, mobile app development, e-commerce development, backend API development, MERN stack development, SaaS product development, React.js development, UI/UX design, startup MVP development, website maintenance, SEO services and digital marketing for clients worldwide.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;