import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Smartphone, ShoppingCart, Server,
  Layers, Package, Monitor, Palette,
  Wrench, Rocket, Search, TrendingUp,
  ArrowRight, ExternalLink
} from 'lucide-react';

const Services = ({ isDark }) => {
  const d = isDark;
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Development', 'Design', 'Marketing', 'Support'];

  const services = [
    {
      icon: <Code2 size={22}/>,
      color: 'purple',
      title: 'Web Development',
      desc: 'Custom web applications built with React, Next.js and Node.js — fast, SEO-optimised and built to scale from day one.',
      path: '/web-development',
      filter: 'Development',
      tags: ['React', 'Next.js', 'Node.js'],
      popular: true,
    },
    {
      icon: <Layers size={22}/>,
      color: 'blue',
      title: 'MERN Stack Development',
      desc: 'Full-stack JavaScript applications using MongoDB, Express, React and Node.js — end-to-end development under one roof.',
      path: '/mern-stack-development',
      filter: 'Development',
      tags: ['MongoDB', 'Express', 'React', 'Node'],
      popular: true,
    },
    {
      icon: <Package size={22}/>,
      color: 'indigo',
      title: 'SaaS Development',
      desc: 'Multi-tenant SaaS platforms with Stripe billing, user authentication, admin dashboards and scalable cloud infrastructure.',
      path: '/saas-product-development',
      filter: 'Development',
      tags: ['SaaS', 'Stripe', 'AWS'],
    },
    {
      icon: <Rocket size={22}/>,
      color: 'amber',
      title: 'Startup MVP Development',
      desc: 'Investor-ready MVPs in 8 to 14 weeks — product strategy, design, development and launch with full code ownership.',
      path: '/startup-mvp',
      filter: 'Development',
      tags: ['MVP', 'React', 'Node.js'],
      popular: true,
    },
    {
      icon: <Smartphone size={22}/>,
      color: 'green',
      title: 'Mobile App Development',
      desc: 'Cross-platform iOS and Android apps with React Native — one codebase, native performance, App Store ready.',
      path: '/mobile-apps',
      filter: 'Development',
      tags: ['React Native', 'iOS', 'Android'],
    },
    {
      icon: <ShoppingCart size={22}/>,
      color: 'orange',
      title: 'E-Commerce Development',
      desc: 'High-converting online stores with Stripe, JazzCash and Easypaisa integration — built for sales, not just looks.',
      path: '/ecommerce',
      filter: 'Development',
      tags: ['Stripe', 'Custom', 'React'],
    },
    {
      icon: <Monitor size={22}/>,
      color: 'cyan',
      title: 'React Development',
      desc: 'Expert React 19 development with TypeScript, TanStack Query and Tailwind CSS — Lighthouse 95+ on every delivery.',
      path: '/reactdevelopment',
      filter: 'Development',
      tags: ['React 19', 'TypeScript', 'Tailwind'],
    },
    {
      icon: <Server size={22}/>,
      color: 'violet',
      title: 'Backend & API Development',
      desc: 'Scalable REST and GraphQL APIs with Node.js, Express and MongoDB — secure, documented and production-ready.',
      path: '/backend-api',
      filter: 'Development',
      tags: ['REST', 'GraphQL', 'Node.js'],
    },
    {
      icon: <Palette size={22}/>,
      color: 'pink',
      title: 'UI/UX Design',
      desc: 'Figma wireframes, high-fidelity UI design, interactive prototypes and design systems — WCAG 2.1 AA accessible.',
      path: '/ui-ux-design',
      filter: 'Design',
      tags: ['Figma', 'Prototype', 'Design System'],
    },
    {
      icon: <Search size={22}/>,
      color: 'emerald',
      title: 'SEO Services',
      desc: 'Technical SEO, on-page optimisation, keyword research, link building and monthly reporting — white-hat only.',
      path: '/seo-services',
      filter: 'Marketing',
      tags: ['Technical SEO', 'Link Building', 'GSC'],
    },
    {
      icon: <TrendingUp size={22}/>,
      color: 'rose',
      title: 'Digital Marketing',
      desc: 'Social media management, Meta Ads, Google Ads, lead generation, email marketing and content creation worldwide.',
      path: '/digital-marketing',
      filter: 'Marketing',
      tags: ['Meta Ads', 'Google Ads', 'Social Media'],
    },
    {
      icon: <Wrench size={22}/>,
      color: 'slate',
      title: 'Maintenance & Support',
      desc: 'Security updates, uptime monitoring, bug fixing, performance optimisation and monthly reports — month-to-month.',
      path: '/maintenance',
      filter: 'Support',
      tags: ['Security', 'Monitoring', 'Bug Fixes'],
    },
  ];

  const colorMap = {
    purple:  d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'   : 'bg-purple-50 border-purple-100 text-purple-600',
    blue:    d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'         : 'bg-blue-50 border-blue-100 text-blue-600',
    indigo:  d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'   : 'bg-indigo-50 border-indigo-100 text-indigo-600',
    amber:   d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'      : 'bg-amber-50 border-amber-100 text-amber-600',
    green:   d ? 'bg-green-500/10 border-green-500/20 text-green-400'      : 'bg-green-50 border-green-100 text-green-600',
    orange:  d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400'   : 'bg-orange-50 border-orange-100 text-orange-600',
    cyan:    d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'         : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    violet:  d ? 'bg-violet-500/10 border-violet-500/20 text-violet-400'   : 'bg-violet-50 border-violet-100 text-violet-600',
    pink:    d ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'         : 'bg-pink-50 border-pink-100 text-pink-600',
    emerald: d ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400': 'bg-emerald-50 border-emerald-100 text-emerald-600',
    rose:    d ? 'bg-rose-500/10 border-rose-500/20 text-rose-400'         : 'bg-rose-50 border-rose-100 text-rose-600',
    slate:   d ? 'bg-slate-500/10 border-slate-500/20 text-slate-400'      : 'bg-slate-50 border-slate-100 text-slate-600',
  };

  const filtered = activeFilter === 'All'
    ? services
    : services.filter(s => s.filter === activeFilter);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`py-16 sm:py-20 transition-colors duration-300 ${
        d ? 'bg-[#030303]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-4 ${
            d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"/>
            What We Build
          </div>
          <h2 id="services-heading" className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${
            d ? 'text-white' : 'text-slate-950'
          }`}>
            Software Development Services{' '}
            <span className="text-purple-600">for Every Need</span>
          </h2>
          <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>
            From web and mobile development to SaaS platforms, UI/UX design, SEO and digital marketing —
            DevZore is the only development partner you need. All services delivered with full
            code ownership and fixed pricing.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-lg text-[12px] font-semibold border transition-all duration-200 ${
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
                  activeFilter === 'All' ? 'bg-white/20' : d ? 'bg-white/[0.08] text-gray-600' : 'bg-slate-100 text-slate-400'
                }`}>
                  {services.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Services Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {filtered.map((svc, i) => (
            <Link
              key={i}
              to={svc.path}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`group relative flex flex-col p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                d
                  ? 'bg-white/[0.02] border-white/[0.06] hover:border-purple-500/30 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(124,58,237,0.1)]'
                  : 'bg-white border-slate-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50'
              }`}
              aria-label={`${svc.title} — DevZore service`}
            >
              {/* Popular badge */}
              {svc.popular && (
                <span className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-purple-600 text-white">
                  Popular
                </span>
              )}

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${colorMap[svc.color]}`}>
                {svc.icon}
              </div>

              {/* Title */}
              <h3 className={`text-[14px] font-bold mb-2 group-hover:text-purple-500 transition-colors ${
                d ? 'text-white' : 'text-slate-900'
              }`}>
                {svc.title}
              </h3>

              {/* Description */}
              <p className={`text-[12px] leading-relaxed mb-4 flex-grow ${
                d ? 'text-gray-400' : 'text-slate-600'
              }`}>
                {svc.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {svc.tags.map((tag, j) => (
                  <span key={j} className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${
                    d ? 'bg-white/[0.04] border-white/[0.08] text-gray-500' : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Learn more */}
              <div className={`flex items-center gap-1.5 text-[12px] font-bold pt-3 border-t transition-colors group-hover:text-purple-500 ${
                d ? 'border-white/[0.06] text-gray-500' : 'border-slate-100 text-slate-400'
              }`}>
                Learn More
                <ArrowRight size={12} className="ml-auto group-hover:translate-x-1 transition-transform"/>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-8 rounded-2xl border ${
          d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'
        }`}>
          <div>
            <h3 className={`text-lg font-black mb-1 ${d ? 'text-white' : 'text-slate-900'}`}>
              Not sure which service you need?
            </h3>
            <p className={`text-sm ${d ? 'text-gray-400' : 'text-slate-600'}`}>
              Book a free consultation — we will help you choose the right solution for your project.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              Free Consultation <ArrowRight size={14}/>
            </Link>
            <Link
              to="/allservices"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm border transition-all ${
                d ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]' : 'border-slate-200 text-slate-700 hover:bg-white'
              }`}
            >
              View All Services <ExternalLink size={13}/>
            </Link>
          </div>
        </div>

        {/* ── SEO Hidden ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Software Development Services — DevZore</h2>
          <p>DevZore offers 12 professional software development services: web development with React and Next.js, MERN stack development, SaaS product development, startup MVP development, mobile app development with React Native, e-commerce development, React development, backend and API development with Node.js and GraphQL, UI/UX design with Figma, SEO services, digital marketing including Meta Ads and Google Ads, and website maintenance and support. All services include fixed pricing, full code ownership and free consultation.</p>
          {services.map((s, i) => (
            <div key={i}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;