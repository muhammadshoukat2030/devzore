import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

const TrustBar = ({ isDark }) => {
  const d = isDark;

  const tech = [
    'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB',
    'PostgreSQL', 'TypeScript', 'React Native', 'Tailwind CSS',
    'AWS', 'Vercel', 'Stripe', 'GraphQL', 'Docker', 'Redis',
    'Firebase', 'Figma', 'Socket.io', 'Prisma', 'TanStack Query',
  ];

  const features = [
    { icon: '🚀', label: 'Fast Delivery',       sub: 'On-time every time' },
    { icon: '🔒', label: 'Secure Code',          sub: 'OWASP best practices' },
    { icon: '📱', label: 'Mobile-First',          sub: 'Responsive by default' },
    { icon: '⚡', label: 'Performance',           sub: 'Lighthouse 95+ scores' },
    { icon: '🎨', label: 'Clean UI/UX',           sub: 'Figma to pixel-perfect' },
    { icon: '♾️', label: 'Scalable Architecture', sub: 'Built to grow with you' },
  ];

  return (
    <section
      aria-label="DevZore trust signals and technology stack"
      className={`border-y transition-colors duration-300 ${
        d ? 'bg-[#050505] border-white/[0.06]' : 'bg-slate-50 border-slate-200'
      }`}
    >
      {/* ── Features Strip ── */}
      <div className={`border-b ${d ? 'border-white/[0.06]' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((f, i) => (
              <div key={i} className={`flex flex-col items-center text-center p-4 rounded-xl border transition-all hover:border-purple-500/25 ${
                d ? 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]' : 'bg-white border-slate-200 hover:shadow-sm'
              }`}>
                <span className="text-2xl mb-2" aria-hidden="true">{f.icon}</span>
                <p className={`text-[12px] font-bold mb-0.5 ${d ? 'text-white' : 'text-slate-900'}`}>{f.label}</p>
                <p className={`text-[10px] ${d ? 'text-gray-500' : 'text-slate-500'}`}>{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tech Marquee ── */}
      <div className="py-6 overflow-hidden">
        <p className={`text-center text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${d ? 'text-gray-600' : 'text-slate-400'}`}>
          Technologies We Work With
        </p>
        <div className="relative flex">
          {/* Fade edges */}
          <div className={`absolute left-0 top-0 h-full w-16 z-10 pointer-events-none ${
            d ? 'bg-gradient-to-r from-[#050505]' : 'bg-gradient-to-r from-slate-50'
          }`}/>
          <div className={`absolute right-0 top-0 h-full w-16 z-10 pointer-events-none ${
            d ? 'bg-gradient-to-l from-[#050505]' : 'bg-gradient-to-l from-slate-50'
          }`}/>

          {/* Scrolling track */}
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {[...tech, ...tech].map((t, i) => (
              <span key={i} className={`inline-flex items-center gap-1.5 mx-3 px-3 py-1.5 rounded-lg border text-[11px] font-semibold flex-shrink-0 ${
                d ? 'bg-white/[0.04] border-white/[0.08] text-gray-400' : 'bg-white border-slate-200 text-slate-600'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"/>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Rating Bar ── */}
      <div className={`border-t ${d ? 'border-white/[0.06]' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Stars + Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-yellow-400 text-yellow-400"/>
                ))}
              </div>
              <p className={`text-[13px] font-bold ${d ? 'text-white' : 'text-slate-900'}`}>
                5.0 / 5.0
              </p>
              <span className={`text-[11px] ${d ? 'text-gray-500' : 'text-slate-500'}`}>
                from 30+ verified clients
              </span>
            </div>

            {/* Trust items */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-center">
              {[
                '50+ Projects Delivered',
                'Free Consultation',
                '100% Code Ownership',
                'No Long-term Contracts',
              ].map((item, i) => (
                <span key={i} className={`inline-flex items-center gap-1.5 text-[12px] font-medium ${
                  d ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  <CheckCircle size={12} className="text-purple-500 flex-shrink-0"/>
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-[12px] font-bold rounded-lg transition-all hover:shadow-[0_0_16px_rgba(124,58,237,0.3)]"
            >
              Start Project <ArrowRight size={12}/>
            </Link>
          </div>
        </div>
      </div>

      {/* ── SEO Hidden ── */}
      <div className="sr-only" aria-hidden="false">
        <p>DevZore uses industry-leading technologies including React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, React Native, Tailwind CSS, AWS, Vercel, Stripe, GraphQL and Docker. We deliver fast, secure, mobile-first and scalable software solutions with Lighthouse performance scores of 95 and above. Serving clients in USA, UK, UAE, Canada, Australia, Saudi Arabia, Qatar and Pakistan.</p>
      </div>
    </section>
  );
};

export default TrustBar;