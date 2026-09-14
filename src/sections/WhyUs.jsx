import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Zap, Code2, Users, Clock, Award,
  CheckCircle, ArrowRight, Star, Lock,
  TrendingUp, HeartHandshake
} from 'lucide-react';

const WhyUs = ({ isDark }) => {
  const d = isDark;

  const reasons = [
    {
      icon: <Code2 size={20}/>,
      color: 'purple',
      title: 'Senior Engineers Only',
      desc: 'Every DevZore project is handled by senior full-stack engineers — no juniors, no outsourcing, no handoffs. You work directly with the people building your product.',
    },
    {
      icon: <Shield size={20}/>,
      color: 'blue',
      title: 'Production-Ready Code',
      desc: 'TypeScript, comprehensive testing, CI/CD pipelines, security best practices and documentation — delivered as standard on every project, not as add-ons.',
    },
    {
      icon: <Zap size={20}/>,
      color: 'amber',
      title: 'Fast, Predictable Delivery',
      desc: 'Milestone-based timelines with fortnightly staging builds. You interact with the actual product every two weeks — not slide decks or wireframes.',
    },
    {
      icon: <Lock size={20}/>,
      color: 'green',
      title: '100% Code Ownership',
      desc: 'All source code, design files and assets are transferred to your GitHub and cloud accounts on final payment. No licensing fees, no vendor lock-in.',
    },
    {
      icon: <Award size={20}/>,
      color: 'indigo',
      title: 'Fixed Pricing — No Surprises',
      desc: 'Written proposals with fixed milestone-based pricing before work begins. No hourly billing, no surprise invoices and no scope creep without your written approval.',
    },
    {
      icon: <Users size={20}/>,
      color: 'cyan',
      title: 'Direct Communication',
      desc: 'One point of contact throughout your project. WhatsApp, email and video calls — no ticket systems, no account managers between you and the engineers.',
    },
    {
      icon: <TrendingUp size={20}/>,
      color: 'rose',
      title: 'SEO & Performance Built In',
      desc: 'Every website DevZore builds achieves Lighthouse 95+ performance scores, proper semantic HTML structure, schema markup and Core Web Vitals compliance from day one.',
    },
    {
      icon: <HeartHandshake size={20}/>,
      color: 'orange',
      title: 'Long-Term Partnership',
      desc: 'We do not disappear after launch. Maintenance plans, feature development and ongoing support keep your product growing after delivery.',
    },
    {
      icon: <Clock size={20}/>,
      color: 'teal',
      title: '24-Hour Response Guarantee',
      desc: 'Every query, bug report or change request acknowledged within 24 hours — and critical issues resolved faster. You are never left waiting or wondering.',
    },
  ];

  const colorMap = {
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600',
    blue:   d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'      : 'bg-blue-50 border-blue-100 text-blue-600',
    amber:  d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'   : 'bg-amber-50 border-amber-100 text-amber-600',
    green:  d ? 'bg-green-500/10 border-green-500/20 text-green-400'   : 'bg-green-50 border-green-100 text-green-600',
    indigo: d ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400': 'bg-indigo-50 border-indigo-100 text-indigo-600',
    cyan:   d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'      : 'bg-cyan-50 border-cyan-100 text-cyan-600',
    rose:   d ? 'bg-rose-500/10 border-rose-500/20 text-rose-400'      : 'bg-rose-50 border-rose-100 text-rose-600',
    orange: d ? 'bg-orange-500/10 border-orange-500/20 text-orange-400': 'bg-orange-50 border-orange-100 text-orange-600',
    teal:   d ? 'bg-teal-500/10 border-teal-500/20 text-teal-400'      : 'bg-teal-50 border-teal-100 text-teal-600',
  };

  const compare = [
    { aspect: 'Senior engineers on every project', devzore: true,  others: false },
    { aspect: 'Fixed pricing — no hourly billing',  devzore: true,  others: false },
    { aspect: '100% code ownership on delivery',    devzore: true,  others: false },
    { aspect: 'TypeScript + testing as standard',   devzore: true,  others: false },
    { aspect: 'Lighthouse 95+ performance scores',  devzore: true,  others: false },
    { aspect: 'Direct WhatsApp communication',      devzore: true,  others: false },
    { aspect: 'No outsourcing or subcontracting',   devzore: true,  others: false },
    { aspect: '24-hour response guarantee',         devzore: true,  others: false },
  ];

  return (
    <section
      id="why-us"
      aria-labelledby="whyus-heading"
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
            Why DevZore
          </div>
          <h2 id="whyus-heading" className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${
            d ? 'text-white' : 'text-slate-950'
          }`}>
            Why Clients Choose DevZore Over{' '}
            <span className="text-purple-600">Other Agencies</span>
          </h2>
          <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>
            Senior engineers, fixed pricing, full code ownership and direct communication —
            DevZore gives you everything a premium agency offers at a price that makes sense
            for startups and growing businesses worldwide.
          </p>
        </div>

        {/* ── Reasons Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 sm:mb-16">
          {reasons.map((item, i) => (
            <div
              key={i}
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:border-purple-500/25 hover:-translate-y-0.5 ${
                d
                  ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                  : 'bg-white border-slate-200 hover:shadow-md'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${colorMap[item.color]}`}>
                {item.icon}
              </div>
              <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-slate-900'}`}>
                {item.title}
              </h3>
              <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Comparison Table ── */}
        <div className={`rounded-2xl border overflow-hidden mb-10 ${
          d ? 'border-white/[0.08]' : 'border-slate-200'
        }`}>
          {/* Table header */}
          <div className={`grid grid-cols-3 px-4 sm:px-6 py-4 border-b ${
            d ? 'bg-white/[0.03] border-white/[0.08]' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className={`text-[11px] font-black uppercase tracking-widest ${d ? 'text-gray-500' : 'text-slate-500'}`}>
              What You Get
            </div>
            <div className="text-center text-[11px] font-black uppercase tracking-widest text-purple-500">
              DevZore ✓
            </div>
            <div className={`text-center text-[11px] font-black uppercase tracking-widest ${d ? 'text-gray-600' : 'text-slate-400'}`}>
              Other Agencies
            </div>
          </div>

          {/* Table rows */}
          {compare.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 px-4 sm:px-6 py-3.5 border-b last:border-0 transition-colors ${
                d
                  ? 'border-white/[0.05] hover:bg-white/[0.02]'
                  : 'border-slate-100 hover:bg-slate-50/50'
              }`}
            >
              <span className={`text-[13px] font-medium ${d ? 'text-gray-300' : 'text-slate-700'}`}>
                {row.aspect}
              </span>
              <div className="flex justify-center">
                <CheckCircle size={16} className="text-purple-500"/>
              </div>
              <div className="flex justify-center">
                <span className={`text-[18px] leading-none ${d ? 'text-gray-600' : 'text-slate-300'}`}>✗</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Rating + CTA Row ── */}
        <div className="grid sm:grid-cols-2 gap-4">

          {/* Rating card */}
          <div className={`flex items-center gap-5 p-5 sm:p-6 rounded-2xl border ${
            d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-slate-200'
          }`}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
              d ? 'bg-yellow-500/10' : 'bg-yellow-50'
            }`}>
              <Star size={24} className="fill-yellow-400 text-yellow-400"/>
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-yellow-400 text-yellow-400"/>
                ))}
              </div>
              <p className={`text-xl font-black ${d ? 'text-white' : 'text-slate-900'}`}>5.0 / 5.0</p>
              <p className={`text-[12px] ${d ? 'text-gray-500' : 'text-slate-500'}`}>
                Verified rating from 30+ clients worldwide
              </p>
            </div>
          </div>

          {/* CTA card */}
          <div className={`flex flex-col justify-center p-5 sm:p-6 rounded-2xl border ${
            d ? 'bg-purple-600/5 border-purple-500/20' : 'bg-purple-50 border-purple-100'
          }`}>
            <h3 className={`text-base font-black mb-1.5 ${d ? 'text-white' : 'text-slate-900'}`}>
              Ready to work with a team you can trust?
            </h3>
            <p className={`text-[13px] mb-4 ${d ? 'text-gray-400' : 'text-slate-600'}`}>
              Free consultation · Fixed pricing · Senior engineers · 24hr response
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_16px_rgba(124,58,237,0.3)]"
              >
                Get Free Consultation <ArrowRight size={14}/>
              </Link>
              <a
                href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* ── SEO Hidden ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>Why Choose DevZore Software Development Agency</h2>
          <p>DevZore is trusted by clients worldwide because we provide senior engineers on every project, fixed pricing with no hourly billing surprises, 100% code ownership transferred on delivery, TypeScript and comprehensive testing as standard, Lighthouse 95+ performance scores, direct WhatsApp communication, no outsourcing or subcontracting, 24-hour response guarantee and a 5.0 rating from 30+ verified clients across USA, UK, UAE, Canada, Australia and Pakistan.</p>
          {reasons.map((r, i) => <div key={i}><h3>{r.title}</h3><p>{r.desc}</p></div>)}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;