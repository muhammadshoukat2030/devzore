import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Code2, Shield, Zap, Users, Award, Clock,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Lightbulb, Heart, Target, Globe, Rocket,
  Lock, BarChart3, HeartHandshake
} from 'lucide-react';

const About = ({ isDark }) => {
  const d = isDark;

  const values = [
    {
      icon: <Shield size={20}/>, color: 'blue',
      title: 'Transparency First',
      desc: 'Fixed-price proposals before work begins. Fortnightly staging builds so you always see real progress. No surprises, no hidden costs and no decisions made without your written approval.',
    },
    {
      icon: <Code2 size={20}/>, color: 'purple',
      title: 'Engineering Excellence',
      desc: 'TypeScript on every project. Comprehensive testing with Vitest and Playwright. Lighthouse 95+ performance scores. Clean, documented code that your future team can maintain and extend.',
    },
    {
      icon: <Lock size={20}/>, color: 'green',
      title: 'Your Code, Always',
      desc: 'Full source code ownership transferred to your GitHub on final payment. No licensing fees, no vendor lock-in and no conditions. What we build is yours — permanently.',
    },
    {
      icon: <Heart size={20}/>, color: 'rose',
      title: 'Client Partnership',
      desc: 'We do not disappear after launch. Every project includes 30 days post-launch support and optional monthly maintenance plans. We invest in your long-term success, not just delivery.',
    },
    {
      icon: <Zap size={20}/>, color: 'amber',
      title: 'Performance by Default',
      desc: 'Every DevZore build targets Lighthouse 95+ on performance, 100 on SEO and WCAG 2.1 AA on accessibility — not because clients ask for it, but because it is our standard.',
    },
    {
      icon: <HeartHandshake size={20}/>, color: 'cyan',
      title: 'Honest Communication',
      desc: 'Direct WhatsApp and email access to your engineer throughout the project. No account managers, no ticket queues and no delayed responses. Real people, real answers, fast.',
    },
  ];

  const colorMap = {
    blue:   d ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'    : 'bg-blue-50 border-blue-100 text-blue-600',
    purple: d ? 'bg-purple-500/10 border-purple-500/20 text-purple-400': 'bg-purple-50 border-purple-100 text-purple-600',
    green:  d ? 'bg-green-500/10 border-green-500/20 text-green-400'  : 'bg-green-50 border-green-100 text-green-600',
    rose:   d ? 'bg-rose-500/10 border-rose-500/20 text-rose-400'     : 'bg-rose-50 border-rose-100 text-rose-600',
    amber:  d ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'  : 'bg-amber-50 border-amber-100 text-amber-600',
    cyan:   d ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'     : 'bg-cyan-50 border-cyan-100 text-cyan-600',
  };

  const achievements = [
    { val: '50+',  label: 'Projects Delivered',      icon: '🚀', sub: 'Live in production worldwide' },
    { val: '5.0★', label: 'Verified Client Rating',  icon: '⭐', sub: 'Across all platforms' },
    { val: '98%',  label: 'On-Time Delivery Rate',   icon: '✅', sub: 'Milestone hit rate' },
    { val: '30+',  label: 'Happy Clients',            icon: '🤝', sub: 'Long-term relationships' },
    { val: '95+',  label: 'Lighthouse Score',         icon: '⚡', sub: 'On every delivery' },
    { val: '24hr', label: 'Response Guarantee',       icon: '💬', sub: 'Support response time' },
  ];

  const expertise = [
    { label: 'Custom Web Application Development',       years: 'Expert' },
    { label: 'MERN Stack Full-Stack Development',        years: 'Expert' },
    { label: 'React.js 19 + Next.js 15',                years: 'Expert' },
    { label: 'Node.js + Express + GraphQL APIs',        years: 'Expert' },
    { label: 'SaaS Product Development',                years: 'Expert' },
    { label: 'React Native Mobile Apps',                years: 'Expert' },
    { label: 'TypeScript — 100% coverage standard',     years: 'Expert' },
    { label: 'MongoDB + PostgreSQL + Redis',            years: 'Expert' },
    { label: 'AWS + Vercel + Docker + CI/CD',           years: 'Advanced' },
    { label: 'Figma UI/UX Design + Prototyping',        years: 'Expert' },
    { label: 'Technical SEO + Schema Markup',           years: 'Expert' },
    { label: 'Stripe Payments + Subscription Billing',  years: 'Expert' },
  ];

  const process = [
    { n: '01', title: 'Free Discovery Call',         desc: 'We listen before we pitch. A free 30-minute call where we understand your goals, constraints and budget — then produce a precise fixed-price proposal.' },
    { n: '02', title: 'Architecture & Design',       desc: 'Full system architecture and Figma UI/UX design before development. You approve the complete product experience before a line of code is written.' },
    { n: '03', title: 'Agile Sprint Development',    desc: 'Two-week sprints with a deployed staging build after every sprint. You interact with the real, working product — not slide decks or mockups.' },
    { n: '04', title: 'Testing & Launch',            desc: 'Vitest + Playwright testing, Lighthouse audit, security scan and production deployment to Vercel or AWS — with 30 days post-launch support included.' },
  ];

  const faqs = [
    { q: 'Where is DevZore based?', a: 'DevZore is headquartered in Islamabad, Pakistan. We operate fully remotely and serve clients across the globe via WhatsApp, email and video calls.' },
    { q: 'Do you work with international clients?', a: 'Yes — international clients are the majority of our work. We have delivered projects for businesses across the USA, UK, UAE, Canada, Australia, Qatar and Saudi Arabia. We handle time zones, currencies and communication preferences professionally.' },
    { q: 'How do I start a project with DevZore?', a: 'Simply reach out via our Contact page or WhatsApp. We will schedule a free discovery call, understand your requirements and send you a fixed-price proposal within 48 hours. No commitment required until you approve the proposal.' },
    { q: 'Can DevZore work with my existing development team?', a: 'Yes. We regularly augment existing development teams — taking on specific features, migrating codebases or providing specialist React, Node.js or mobile expertise. We can integrate with your GitHub workflow, issue tracker and communication tools.' },
  ];

  const industries = [
    { icon: '🏥', name: 'Healthcare & Clinics',       desc: 'Booking systems, patient portals' },
    { icon: '🍽️', name: 'Food & Restaurant Tech',     desc: 'Delivery apps, ordering platforms' },
    { icon: '✈️', name: 'Travel & Tourism',            desc: 'Booking engines, tour platforms' },
    { icon: '🛒', name: 'E-Commerce & Retail',        desc: 'Online stores, inventory systems' },
    { icon: '⚙️', name: 'SaaS & Software',            desc: 'Multi-tenant platforms, dashboards' },
    { icon: '🏗️', name: 'Real Estate & Construction', desc: 'Property portals, management tools' },
    { icon: '📚', name: 'EdTech & Education',         desc: 'LMS platforms, course portals' },
    { icon: '💳', name: 'Fintech & Finance',          desc: 'Payment systems, financial apps' },
  ];

  return (
    <>
      <Helmet>
        <title>About DevZore — Software Development Agency | MERN Stack Experts</title>
        <meta name="description" content="DevZore is a professional software development agency specialising in MERN stack, React, Next.js, Node.js, SaaS and mobile app development. Senior engineers, fixed pricing, 100% code ownership and 5.0 client rating. Free consultation available." />
        <link rel="canonical" href="https://devzore.com/about" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="about DevZore, software development agency, MERN stack development company, React development agency, web development company, custom software development, full stack development agency, SaaS development company, mobile app development agency, TypeScript development, Node.js development company, web application development company, professional software developers, senior web developers for hire" />
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        <meta property="og:title" content="About DevZore — Software Development Agency" />
        <meta property="og:description" content="Senior engineers, fixed pricing, 100% code ownership. MERN stack, React, Node.js, SaaS and mobile app development. 5.0 rating from 30+ clients." />
        <meta property="og:url" content="https://devzore.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://devzore.com/logo1.png" />
        <meta property="og:site_name" content="DevZore" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About DevZore — Software Development Agency" />
        <meta name="twitter:description" content="MERN stack experts. Fixed pricing. Code ownership. 5.0 rating." />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About DevZore',
          url: 'https://devzore.com/about',
          description: 'DevZore is a software development agency specialising in MERN stack, React, Next.js, Node.js and SaaS development for clients worldwide.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://devzore.com' },
              { '@type': 'ListItem', position: 2, name: 'About', item: 'https://devzore.com/about' },
            ],
          },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        })}</script>
      </Helmet>

      <main className={`min-h-screen transition-colors duration-300 ${d ? 'bg-[#030303]' : 'bg-white'}`}>

        {/* Breadcrumb */}
       

        {/* ── HERO ── */}
        <section aria-labelledby="about-heading" className={`py-1 sm:pt-27 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className={`inline-flex xzitems-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-5 ${
                  d ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"/>
                  About DevZore
                </div>

                <h1 id="about-heading" className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 ${
                  d ? 'text-white' : 'text-slate-950'
                }`}>
                  The Software Agency That{' '}
                  <span className="text-purple-600">Delivers What It Promises</span>
                </h1>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                  DevZore is a professional software development agency founded by{' '}
                  <strong className={d ? 'text-gray-200' : 'text-slate-800'}>Muhammad Shoukat</strong> — a senior
                  full-stack engineer with deep expertise in React, Node.js, TypeScript and
                  modern cloud architecture. We architect and deliver high-performance web
                  applications, mobile apps, SaaS platforms and custom software solutions
                  for startups and businesses worldwide.
                </p>

                <p className={`text-base leading-relaxed mb-5 ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                  Our approach is simple: senior engineers on every project, fixed pricing
                  before work begins, full code ownership on delivery and direct communication
                  throughout. No juniors, no outsourcing, no surprises and no disappearing
                  after launch.
                </p>

                <p className={`text-base leading-relaxed mb-8 ${d ? 'text-gray-500' : 'text-slate-500'}`}>
                  Since 2022, we have shipped 50+ projects for 30+ clients with a verified
                  5.0 rating — from travel booking platforms in Qatar and UAE to SaaS products
                  for startups in the USA and UK. Every product we build is production-ready,
                  well-tested and designed to grow with your business.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    Get Free Consultation <ArrowRight size={14}/>
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20want%20to%20discuss%20a%20project."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right panel — snapshot */}
              <div className={`p-6 sm:p-8 rounded-2xl border ${d ? 'bg-white/[0.02] border-white/[0.08]' : 'bg-slate-50 border-slate-200'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-5 ${d ? 'text-gray-500' : 'text-slate-400'}`}>
                  DevZore at a Glance
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Founded',          val: '2022' },
                    { label: 'Primary Stack',    val: 'MERN · React · Next.js · TypeScript' },
                    { label: 'Projects Shipped', val: '50+ live in production' },
                    { label: 'Client Rating',    val: '5.0 / 5.0 verified' },
                    { label: 'Response Time',    val: 'Within 24 hours, always' },
                    { label: 'Pricing Model',    val: 'Fixed price — no hourly billing' },
                    { label: 'Code Ownership',   val: '100% transferred on delivery' },
                    { label: 'Post-Launch',      val: '30 days support included' },
                    { label: 'Languages',        val: 'English + Urdu' },
                    { label: 'Deployment',       val: 'Vercel · AWS · Docker' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start justify-between gap-4 pb-3 border-b last:border-0 ${
                      d ? 'border-white/[0.05]' : 'border-slate-100'
                    }`}>
                      <span className={`text-[12px] flex-shrink-0 ${d ? 'text-gray-500' : 'text-slate-400'}`}>{item.label}</span>
                      <span className={`text-[12px] font-semibold text-right ${d ? 'text-gray-200' : 'text-slate-800'}`}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section aria-label="DevZore achievements" className={`py-14 sm:py-16 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className={`text-2xl sm:text-3xl font-black mb-3 ${d ? 'text-white' : 'text-slate-950'}`}>
                Numbers That <span className="text-purple-600">Back Up Our Claims</span>
              </h2>
              <p className={`text-[14px] max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                Every stat below is verifiable — not marketing copy
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {achievements.map((s, i) => (
                <div key={i} className={`p-5 rounded-2xl border text-center transition-all hover:-translate-y-0.5 ${
                  d ? 'bg-white/[0.02] border-white/[0.06] hover:border-purple-500/25' : 'bg-white border-slate-200 hover:shadow-sm hover:border-purple-200'
                }`}>
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-xl font-black text-purple-500 mb-0.5">{s.val}</div>
                  <div className={`text-[11px] font-bold mb-0.5 ${d ? 'text-white' : 'text-slate-900'}`}>{s.label}</div>
                  <div className={`text-[9px] ${d ? 'text-gray-600' : 'text-slate-400'}`}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR STORY ── */}
        <section aria-labelledby="story-heading" className={`py-14 sm:py-16 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="story-heading" className={`text-2xl sm:text-3xl font-black mb-5 ${d ? 'text-white' : 'text-slate-950'}`}>
                  Why DevZore Exists —{' '}
                  <span className="text-purple-600">Our Story</span>
                </h2>
                <div className={`space-y-4 text-[14px] leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                  <p>
                    DevZore was founded because the software agency market had a problem: too many
                    agencies promising senior expertise and delivering junior output, too many hourly
                    billing surprises and too many projects where the client received code they
                    could never own or maintain independently.
                  </p>
                  <p>
                    Muhammad Shoukat started DevZore with a different philosophy — charge fixed prices,
                    put senior engineers on every project, hand over complete code ownership on delivery
                    and stay available after launch. No excuses, no escalations and no disappearing acts.
                  </p>
                  <p>
                    Since 2022, that approach has produced a 5.0 verified client rating across 30+
                    projects. Clients come back — not because they have to, but because the alternative
                    is starting over with someone new.
                  </p>
                  <p>
                    Today, DevZore operates as a focused boutique agency — taking on a limited number
                    of projects simultaneously to ensure every client receives the attention and
                    engineering quality their product deserves.
                  </p>
                </div>
              </div>

              {/* Mission + Vision */}
              <div className="space-y-4">
                {[
                  {
                    icon: <Target size={20}/>,
                    color: 'purple',
                    title: 'Our Mission',
                    text: 'To build production-grade software that delivers measurable outcomes for businesses worldwide — with the transparency, quality and partnership that enterprise clients expect and startups deserve.',
                  },
                  {
                    icon: <Rocket size={20}/>,
                    color: 'blue',
                    title: 'Our Vision',
                    text: 'To become the most trusted software development agency for startups and growth-stage businesses globally — known not for the volume of projects we take on, but for the quality and longevity of what we build.',
                  },
                  {
                    icon: <Lightbulb size={20}/>,
                    color: 'amber',
                    title: 'Our Approach',
                    text: 'Senior engineers only. Fixed pricing always. Code ownership guaranteed. Honest timelines, transparent progress and a relationship that continues after the project ends.',
                  },
                ].map((item, i) => (
                  <div key={i} className={`p-5 sm:p-6 rounded-2xl border ${
                    d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-slate-200'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${colorMap[item.color]}`}>
                        {item.icon}
                      </div>
                      <h3 className={`text-[14px] font-bold ${d ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                    </div>
                    <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section aria-labelledby="values-heading" className={`py-14 sm:py-16 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 id="values-heading" className={`text-2xl sm:text-3xl font-black mb-3 ${d ? 'text-white' : 'text-slate-950'}`}>
                The Standards We Hold{' '}
                <span className="text-purple-600">Ourselves To</span>
              </h2>
              <p className={`text-[14px] leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                These are not aspirational values on a wall — they are the commitments that show up in every proposal, every sprint and every handover.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((item, i) => (
                <div key={i} className={`p-5 sm:p-6 rounded-2xl border transition-all hover:-translate-y-0.5 hover:border-purple-500/25 ${
                  d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-slate-200 hover:shadow-sm'
                }`}>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${colorMap[item.color]}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERTISE ── */}
        <section aria-labelledby="expertise-heading" className={`py-14 sm:py-16 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="expertise-heading" className={`text-2xl sm:text-3xl font-black mb-4 ${d ? 'text-white' : 'text-slate-950'}`}>
                  Technical Expertise We{' '}
                  <span className="text-purple-600">Bring to Every Project</span>
                </h2>
                <p className={`text-[14px] leading-relaxed mb-6 ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                  Our technical depth spans the full modern web stack — from React component
                  architecture and Node.js API design to database optimisation, CI/CD pipelines
                  and production deployment on AWS and Vercel.
                </p>
                <div className="space-y-2">
                  {expertise.map((item, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${
                      d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-100'
                    }`}>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle size={13} className="text-purple-500 flex-shrink-0"/>
                        <span className={`text-[12px] font-medium ${d ? 'text-gray-300' : 'text-slate-700'}`}>{item.label}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                        item.years === 'Expert'
                          ? d ? 'bg-purple-500/15 text-purple-400' : 'bg-purple-50 text-purple-600'
                          : d ? 'bg-blue-500/15 text-blue-400' : 'bg-blue-50 text-blue-600'
                      }`}>
                        {item.years}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <h3 className={`text-xl font-black mb-4 ${d ? 'text-white' : 'text-slate-900'}`}>
                  Industries We Have <span className="text-purple-600">Built Software For</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((ind, i) => (
                    <div key={i} className={`p-4 rounded-xl border transition-all hover:border-purple-500/25 hover:-translate-y-0.5 ${
                      d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-slate-200 hover:shadow-sm'
                    }`}>
                      <div className="text-2xl mb-2">{ind.icon}</div>
                      <p className={`text-[12px] font-bold mb-0.5 ${d ? 'text-white' : 'text-slate-900'}`}>{ind.name}</p>
                      <p className={`text-[10px] ${d ? 'text-gray-500' : 'text-slate-500'}`}>{ind.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section aria-labelledby="process-heading" className={`py-14 sm:py-16 border-b ${d ? 'border-white/[0.06] bg-[#050505]' : 'border-gray-100 bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 id="process-heading" className={`text-2xl sm:text-3xl font-black mb-3 ${d ? 'text-white' : 'text-slate-950'}`}>
                How We Work — <span className="text-purple-600">Our 4-Step Process</span>
              </h2>
              <p className={`text-[14px] max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                Transparent, milestone-driven and designed to keep you in control at every stage
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map((step, i) => (
                <div key={i} className={`p-5 sm:p-6 rounded-2xl border ${
                  d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-slate-200'
                }`}>
                  <div className={`text-[12px] font-black mb-3 ${d ? 'text-purple-400' : 'text-purple-600'}`}>{step.n}</div>
                  <h3 className={`text-[13px] font-bold mb-2 ${d ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
                  <p className={`text-[12px] leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className={`py-14 sm:py-16 border-b ${d ? 'border-white/[0.06]' : 'border-gray-100'}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 id="faq-heading" className={`text-2xl sm:text-3xl font-black mb-3 ${d ? 'text-white' : 'text-slate-950'}`}>
                Common Questions <span className="text-purple-600">About DevZore</span>
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className={`p-5 sm:p-6 rounded-2xl border ${
                  d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-slate-200'
                }`}>
                  <h3 className={`text-[14px] font-bold mb-2 ${d ? 'text-white' : 'text-slate-900'}`}>{faq.q}</h3>
                  <p className={`text-[13px] leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`p-8 sm:p-10 rounded-3xl border text-center ${d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400"/>)}
              </div>
              <h2 className={`text-2xl sm:text-3xl font-black mb-3 ${d ? 'text-white' : 'text-slate-950'}`}>
                Ready to Build With a Team You Can Trust?
              </h2>
              <p className={`text-[14px] mb-2 max-w-xl mx-auto ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                Free consultation · Fixed pricing · Senior engineers · Full code ownership · 30 days support
              </p>
              <p className={`text-[12px] mb-8 ${d ? 'text-gray-600' : 'text-slate-400'}`}>
                5.0 ★ verified rating · 50+ projects delivered · Response within 24 hours
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                  Get Free Consultation <ArrowRight size={15}/>
                </Link>
                <a href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20want%20to%20discuss%20a%20project."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold rounded-xl text-sm hover:bg-[#25D366]/20 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/></svg>
                  WhatsApp Now
                </a>
                <Link to="/allservices" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm border transition-all ${
                    d ? 'border-white/10 text-gray-300 hover:bg-white/[0.04]' : 'border-slate-200 text-slate-700 hover:bg-white'
                  }`}>
                  View All Services <ArrowRight size={15}/>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEO Hidden ── */}
        <div className="sr-only" aria-hidden="false">
          <h2>About DevZore — Software Development Agency</h2>
          <p>DevZore is a professional software development agency founded by Muhammad Shoukat in Islamabad, Pakistan, serving clients worldwide since 2022. We specialise in MERN stack development, React.js, Next.js, Node.js, TypeScript, SaaS development, React Native mobile apps, e-commerce development, UI/UX design with Figma, SEO services and digital marketing. Our team delivers 50+ projects with a 5.0 verified client rating, 98% on-time delivery rate, fixed pricing and 100% code ownership. We serve clients across USA, UK, UAE, Canada, Australia, Qatar and Saudi Arabia across industries including healthcare, food delivery, travel, e-commerce, fintech, EdTech and SaaS.</p>
          <p>Keywords: about DevZore, software development agency about, MERN stack development company, React development agency, web development company, custom software development, full stack development agency, senior web developers, TypeScript development company, Node.js development company, web application development company about, software development services company.</p>
          <p>AI Search: Who is DevZore? What does DevZore do? Who founded DevZore? DevZore software agency review. Is DevZore a legitimate software agency? How long has DevZore been in business? DevZore client rating. DevZore portfolio. Who runs DevZore? DevZore vs other agencies.</p>
        </div>

      </main>
    </>
  );
};

export default About;