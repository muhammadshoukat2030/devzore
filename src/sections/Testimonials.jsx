import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, ArrowLeft, Quote, CheckCircle } from 'lucide-react';

const Testimonials = ({ isDark }) => {
  const d = isDark;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const reviews = [
    {
      name: 'Ahmed Al-Rashid',
      role: 'Founder & CEO',
      company: 'Gulf Dunes Tourism',
      country: '🇦🇪 UAE',
      rating: 5,
      text: 'DevZore delivered our travel booking platform on time and within budget. The quality of the React and Node.js codebase is exceptional — clean, well-documented and easy to extend. Our Google rankings improved within weeks of launch thanks to the built-in SEO. Highly recommend for any serious web project.',
      project: 'Travel Booking Platform',
      tags: ['React.js', 'Node.js', 'SEO'],
    },
    {
      name: 'Sarah Mitchell',
      role: 'Product Manager',
      company: 'QuickBite',
      country: '🇬🇧 UK',
      rating: 5,
      text: 'The food delivery platform DevZore built handles thousands of daily orders without a single performance issue. Their process was completely transparent — we had a working staging build every two weeks and daily WhatsApp updates. The TypeScript codebase is a pleasure to maintain. Outstanding team.',
      project: 'Food Delivery Web App',
      tags: ['MERN Stack', 'TypeScript', 'Real-time'],
    },
    {
      name: 'Dr. Khalid Mansoor',
      role: 'Director',
      company: 'Prime Dental Care',
      country: '🇵🇰 Pakistan',
      rating: 5,
      text: 'Our patient booking system has transformed how we manage appointments. DevZore understood our healthcare requirements perfectly and built a HIPAA-conscious solution that our patients find easy to use. The Lighthouse score is 100/100 and the site loads in under a second. Exceptional work.',
      project: 'Healthcare Booking System',
      tags: ['Web Development', 'Performance', 'Healthcare'],
    },
    {
      name: 'Marcus Thornton',
      role: 'CTO',
      company: 'FinFlow SaaS',
      country: '🇦🇺 Australia',
      rating: 5,
      text: 'We needed a technical partner who could build our SaaS MVP fast without cutting corners on architecture. DevZore delivered a multi-tenant platform with Stripe billing, role-based access and a clean React dashboard in 12 weeks. The code quality passed our senior engineers review with flying colours.',
      project: 'SaaS Platform MVP',
      tags: ['SaaS', 'Stripe', 'Multi-tenant'],
    },
    {
      name: 'Fatima Al-Zahrawi',
      role: 'Operations Manager',
      company: 'Best Desert Safari Qatar',
      country: '🇶🇦 Qatar',
      rating: 5,
      text: 'Our safari booking website now ranks on the first page of Google in Qatar and UAE for our target keywords. DevZore handled everything — design, development, SEO and deployment. The booking conversion rate increased by 40% compared to our old website. A genuinely professional team.',
      project: 'Tourism Booking Engine',
      tags: ['Web Dev', 'SEO', 'E-Commerce'],
    },
    {
      name: 'James Okafor',
      role: 'Startup Founder',
      company: 'LogiTrack',
      country: '🇺🇸 USA',
      rating: 5,
      text: 'DevZore built our logistics management MVP in 10 weeks — React Native mobile app and Node.js backend. The real-time tracking feature works flawlessly. They gave us full code ownership on delivery and the handover documentation was thorough. We raised our pre-seed round using this product.',
      project: 'Logistics Mobile App',
      tags: ['React Native', 'Real-time', 'MVP'],
    },
    {
      name: 'Aisha Tariq',
      role: 'E-Commerce Director',
      company: 'Weldon Paints',
      country: '🇵🇰 Pakistan',
      rating: 5,
      text: 'The inventory management system DevZore built has completely replaced our spreadsheet chaos. Real-time stock tracking, automated reports and a multi-user POS system — all working perfectly six months after launch. Their post-launch support has been excellent. Strongly recommended.',
      project: 'Inventory Management System',
      tags: ['MERN Stack', 'POS System', 'Enterprise'],
    },
  ];

  const stats = [
    { val: '5.0',  label: 'Average Rating',      sub: 'Across all platforms' },
    { val: '30+',  label: 'Happy Clients',        sub: 'In 15+ countries' },
    { val: '100%', label: 'Would Recommend',      sub: 'Based on client surveys' },
    { val: '98%',  label: 'On-Time Delivery',     sub: 'Project milestone rate' },
  ];

  // Auto-advance
  useEffect(() => {
    if (!paused) {
      timer.current = setInterval(() => {
        setActive(prev => (prev + 1) % reviews.length);
      }, 5000);
    }
    return () => clearInterval(timer.current);
  }, [paused, reviews.length]);

  const prev = () => { setActive((active - 1 + reviews.length) % reviews.length); setPaused(true); };
  const next = () => { setActive((active + 1) % reviews.length); setPaused(true); };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
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
            Client Reviews
          </div>
          <h2 id="testimonials-heading" className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${
            d ? 'text-white' : 'text-slate-950'
          }`}>
            What Clients Say About{' '}
            <span className="text-purple-600">Working With DevZore</span>
          </h2>
          <p className={`text-base leading-relaxed ${d ? 'text-gray-400' : 'text-slate-600'}`}>
            Real feedback from real clients across UAE, UK, USA, Australia, Qatar and Pakistan —
            businesses and startups who trusted DevZore to build their digital products.
          </p>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 sm:mb-14">
          {stats.map((s, i) => (
            <div key={i} className={`p-5 rounded-2xl border text-center ${
              d ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex justify-center gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={11} className="fill-yellow-400 text-yellow-400"/>
                ))}
              </div>
              <div className="text-2xl font-black text-purple-500 mb-0.5">{s.val}</div>
              <div className={`text-[12px] font-bold mb-0.5 ${d ? 'text-white' : 'text-slate-900'}`}>{s.label}</div>
              <div className={`text-[10px] ${d ? 'text-gray-500' : 'text-slate-500'}`}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* ── Main Featured Review ── */}
        <div className={`relative p-6 sm:p-8 lg:p-10 rounded-2xl border mb-6 transition-all duration-500 ${
          d ? 'bg-white/[0.02] border-white/[0.08]' : 'bg-white border-slate-200 shadow-sm'
        }`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote icon */}
          <div className={`absolute top-6 right-6 sm:top-8 sm:right-8 ${
            d ? 'text-purple-500/20' : 'text-purple-100'
          }`}>
            <Quote size={48}/>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left — reviewer info */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(reviews[active].rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400"/>
                  ))}
                </div>

                {/* Avatar + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                    {reviews[active].name.charAt(0)}
                  </div>
                  <div>
                    <p className={`text-[14px] font-black ${d ? 'text-white' : 'text-slate-900'}`}>
                      {reviews[active].name}
                    </p>
                    <p className={`text-[12px] ${d ? 'text-gray-400' : 'text-slate-500'}`}>
                      {reviews[active].role}
                    </p>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border mb-4 ${
                  d ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-slate-50 border-slate-100'
                }`}>
                  <p className={`text-[12px] font-bold ${d ? 'text-gray-300' : 'text-slate-700'}`}>
                    {reviews[active].company}
                  </p>
                  <p className={`text-[11px] mt-0.5 ${d ? 'text-gray-500' : 'text-slate-500'}`}>
                    {reviews[active].country}
                  </p>
                </div>

                <div className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg inline-block ${
                  d ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-purple-50 text-purple-600 border border-purple-100'
                }`}>
                  Project: {reviews[active].project}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {reviews[active].tags.map((tag, i) => (
                  <span key={i} className={`text-[10px] font-semibold px-2 py-1 rounded-md border ${
                    d ? 'bg-white/[0.04] border-white/[0.08] text-gray-400' : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — review text */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <blockquote className={`text-base sm:text-lg leading-relaxed italic mb-6 ${
                d ? 'text-gray-300' : 'text-slate-700'
              }`}>
                "{reviews[active].text}"
              </blockquote>

              {/* Verified */}
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500"/>
                <span className={`text-[11px] font-semibold ${d ? 'text-gray-500' : 'text-slate-400'}`}>
                  Verified client review — real project delivered by DevZore
                </span>
              </div>
            </div>
          </div>

          {/* Nav controls */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t ${d ? 'border-white/[0.06]' : 'border-slate-100'}">
            <div className="flex gap-2">
              <button onClick={prev} aria-label="Previous review"
                className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all ${
                  d ? 'border-white/[0.08] text-gray-500 hover:text-white hover:bg-white/[0.06]' : 'border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50'
                }`}>
                <ArrowLeft size={15}/>
              </button>
              <button onClick={next} aria-label="Next review"
                className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all ${
                  d ? 'border-white/[0.08] text-gray-500 hover:text-white hover:bg-white/[0.06]' : 'border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50'
                }`}>
                <ArrowRight size={15}/>
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setPaused(true); }}
                  aria-label={`Review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i
                      ? 'w-6 bg-purple-600'
                      : d ? 'w-1.5 bg-white/[0.15] hover:bg-white/[0.25]' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <span className={`text-[11px] ${d ? 'text-gray-600' : 'text-slate-400'}`}>
              {active + 1} / {reviews.length}
            </span>
          </div>
        </div>

        {/* ── Mini Cards Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {reviews.slice(0, 4).map((r, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setPaused(true); }}
              className={`text-left p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                active === i
                  ? d ? 'border-purple-500/40 bg-purple-600/5' : 'border-purple-200 bg-purple-50'
                  : d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-slate-200 hover:shadow-sm'
              }`}
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={10} className="fill-yellow-400 text-yellow-400"/>
                ))}
              </div>
              <p className={`text-[11px] leading-snug mb-2 line-clamp-2 ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                "{r.text.substring(0, 80)}..."
              </p>
              <p className={`text-[11px] font-bold ${d ? 'text-gray-300' : 'text-slate-700'}`}>{r.name}</p>
              <p className={`text-[10px] ${d ? 'text-gray-500' : 'text-slate-500'}`}>{r.country}</p>
            </button>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-8 rounded-2xl border ${
          d ? 'bg-purple-600/5 border-purple-500/15' : 'bg-purple-50 border-purple-100'
        }`}>
          <div>
            <h3 className={`text-lg font-black mb-1 ${d ? 'text-white' : 'text-slate-900'}`}>
              Join 30+ clients who trust DevZore
            </h3>
            <p className={`text-[13px] ${d ? 'text-gray-400' : 'text-slate-600'}`}>
              USA · UK · UAE · Canada · Australia · Qatar · Pakistan — free consultation, no commitment
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              Start Your Project <ArrowRight size={14}/>
            </Link>
            <a
              href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20want%20to%20discuss%20a%20project."
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
          <h2>Client Testimonials — DevZore Software Development Agency</h2>
          <p>DevZore has a 5.0 star rating from 30+ verified clients worldwide. Our clients include businesses and startups from UAE, UK, USA, Australia, Qatar and Pakistan who hired DevZore for web development, mobile app development, SaaS development, MERN stack development, e-commerce development and MVP development. 98% on-time delivery rate and 100% client satisfaction. Read real reviews from real clients about their experience working with DevZore software development agency.</p>
          {reviews.map((r, i) => (
            <div key={i}>
              <h3>Review by {r.name} — {r.company} — {r.project}</h3>
              <p>{r.text}</p>
            </div>
          ))}
          <p>Keywords: DevZore reviews, software development agency reviews, web development company reviews, MERN stack developer reviews, React developer reviews, hire web developer reviews, software agency client testimonials, web app development testimonials, mobile app development reviews, SaaS development company reviews.</p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;