import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from 'lucide-react';

const Footer = ({ isDark }) => {
  const d = isDark;
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { label: 'Web Development',        path: '/web-development' },
    { label: 'Mobile App Development', path: '/mobile-apps' },
    { label: 'MERN Stack Development', path: '/mern-stack-development' },
    { label: 'SaaS Development',       path: '/saas-product-development' },
    { label: 'E-Commerce Development', path: '/ecommerce' },
    { label: 'React Development',      path: '/reactdevelopment' },
    { label: 'Backend & API',          path: '/backend-api' },
    { label: 'UI/UX Design',           path: '/ui-ux-design' },
    { label: 'Startup MVP',            path: '/startup-mvp' },
    { label: 'Maintenance & Support',  path: '/maintenance' },
    { label: 'SEO Services',           path: '/seo-services' },
    { label: 'Digital Marketing',      path: '/digital-marketing' },
  ];

  const company = [
    { label: 'About DevZore',   path: '/about' },
    { label: 'All Services',    path: '/allservices' },
    { label: 'Our Projects',    path: '/#projects' },
    { label: 'Blog',            path: '/blog' },
    { label: 'Contact Us',      path: '/contact' },
    { label: 'Privacy Policy',  path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms-and-conditions' },
  ];

  const socials = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61591616471858',
      icon: <Facebook size={17} />,
      hover: 'hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-500',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dev-zore-833893418/',
      icon: <Linkedin size={17} />,
      hover: 'hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-500',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/devz.ore/',
      icon: <Instagram size={17} />,
      hover: 'hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-500',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@dev_zore',
      icon: (
        <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
        </svg>
      ),
      hover: 'hover:bg-white/10 hover:border-white/20 hover:text-white',
    },
    {
      label: 'Fiverr',
      href: 'https://www.fiverr.com/sellers/devzore/',
      icon: (
        <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.004 15.588a.995.995 0 10-1.99 0 .995.995 0 001.99 0zm-2.987-1.99h-.995v3.98h.995v-3.98zm-1.99 2.985a1.99 1.99 0 01-1.99 1.99V14.6a1.99 1.99 0 011.99 1.99v-.007zm-1.99 1.99a1.99 1.99 0 01-1.99-1.99 1.99 1.99 0 011.99-1.99v3.98zm-2.987-3.98H8.013v.995h2.987v2.985h.995v-2.985h.995v-.995h-.96zm-4.98.995H6.023a.995.995 0 000 1.99h.995v.995H6.023a1.99 1.99 0 010-3.98H7.07v.995zm-2.987-.995H0V24h6.017v-.995H.995v-6.012h5.022v-.995H6.017v-.995zM3.032 6.02a1.99 1.99 0 100 3.98 1.99 1.99 0 000-3.98zm0 2.985a.995.995 0 110-1.99.995.995 0 010 1.99z" />
        </svg>
      ),
      hover: 'hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-500',
    },
    {
      label: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~012e5cc1a7d6ceb834',
      icon: (
        <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
        </svg>
      ),
      hover: 'hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-500',
    },
  ];

  // ── FIX 1: Default dark blue color, light mode = white ──
  const footerBg = d
    ? 'bg-[#070b14] border-white/[0.07] text-white'
    : 'bg-white border-slate-200 text-slate-900';

  const linkClass = `
    group inline-flex items-center text-[13px] leading-5 transition-all duration-200
    ${d ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-950'}
  `;

  const headingClass = `
    text-[11px] font-extrabold uppercase tracking-[0.18em] mb-5
    ${d ? 'text-gray-300' : 'text-gray-900'}
  `;

  return (
    <>
      <footer
        aria-label="DevZore website footer"
        className={`relative overflow-hidden border-t transition-colors duration-300 ${footerBg}`}
      >
        {/* Decorative Background Glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] sm:w-[650px] lg:w-[850px] h-[260px] sm:h-[360px] rounded-full blur-[100px] opacity-20 ${d ? 'bg-purple-700' : 'bg-purple-100'}`}/>
          <div className={`absolute right-[-150px] bottom-[-150px] w-[350px] h-[350px] rounded-full blur-[100px] opacity-10 ${d ? 'bg-blue-600' : 'bg-blue-100'}`}/>
        </div>

        {/* ── CTA SECTION ── */}
        <section aria-label="Start your project" className={`relative border-b ${d ? 'border-white/[0.07]' : 'border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
            <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border p-6 sm:p-8 lg:p-10 ${d ? 'bg-white/[0.035] border-white/[0.08]' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
              {/* Glow */}
              <div aria-hidden="true" className={`absolute -right-20 -top-20 w-56 h-56 rounded-full blur-3xl opacity-20 ${d ? 'bg-purple-600' : 'bg-purple-300'}`}/>

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 lg:gap-10">
                <div className="max-w-2xl">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-4 ${d ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' : 'bg-purple-50 text-purple-700 border border-purple-100'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"/>
                    Let's build something great
                  </div>
                  <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight ${d ? 'text-white' : 'text-slate-950'}`}>
                    Ready to turn your idea into a
                    <span className="text-purple-600"> digital product?</span>
                  </h2>
                  <p className={`mt-3 max-w-xl text-sm sm:text-[15px] leading-6 ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                    Tell us what you are building. Our team can help you plan, design and develop a reliable digital solution for your business.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Link to="/contact" onClick={scrollTop}
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold shadow-lg shadow-purple-600/20 transition-all duration-200 hover:-translate-y-0.5">
                    Get Free Consultation <ArrowRight size={15}/>
                  </Link>
                  <a href="https://wa.me/923348004300?text=Hi%20DevZore!%20I%20want%20to%20discuss%20a%20project."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-sm font-bold hover:bg-[#25D366]/15 transition-all duration-200">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.229 1.715zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAIN FOOTER GRID ── */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">

            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-4">
              <Link to="/" onClick={scrollTop} aria-label="DevZore home" className="inline-flex">
                <img src="/logo1.png" alt="DevZore - Software Development Agency"
                  className="h-9 sm:h-10 w-auto object-contain" width="auto" height="40" loading="lazy"/>
              </Link>

              <p className={`mt-5 max-w-md text-sm leading-6 ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                DevZore is a software development agency helping startups, businesses and organizations
                build modern websites, web applications, mobile apps and scalable digital products.
              </p>

              {/* Trust Badge */}
              <div className={`mt-6 inline-flex items-center gap-3 rounded-xl border px-4 py-3 ${d ? 'border-white/[0.08] bg-white/[0.025]' : 'border-slate-200 bg-white'}`}>
                <div className="flex -space-x-1">
                  <span className="w-7 h-7 rounded-full bg-purple-600 border-2 border-white/10 flex items-center justify-center text-[10px] text-white font-bold">D</span>
                  <span className="w-7 h-7 rounded-full bg-slate-700 border-2 border-white/10 flex items-center justify-center text-[10px] text-white font-bold">Z</span>
                </div>
                <div>
                  <p className={`text-xs font-bold ${d ? 'text-gray-200' : 'text-slate-800'}`}>Digital solutions for modern businesses</p>
                  <p className={`text-[10px] mt-0.5 ${d ? 'text-gray-500' : 'text-slate-500'}`}>Serving clients worldwide</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <a href="mailto:hellodevzore@gmail.com"
                  className={`flex items-start gap-3 text-[13px] transition-colors ${d ? 'text-gray-400 hover:text-purple-400' : 'text-slate-600 hover:text-purple-600'}`}>
                  <Mail size={15} className="mt-0.5 shrink-0"/> hellodevzore@gmail.com
                </a>
                <a href="https://wa.me/923348004300" target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-[13px] transition-colors ${d ? 'text-gray-400 hover:text-green-400' : 'text-slate-600 hover:text-green-600'}`}>
                  <Phone size={15} className="shrink-0"/> +92 334 8004300
                </a>
                <div className={`flex items-start gap-3 text-[13px] ${d ? 'text-gray-400' : 'text-slate-600'}`}>
                  <MapPin size={15} className="mt-0.5 shrink-0"/>
                  <span>Islamabad, Pakistan
                    <br/><span className={`text-[11px] ${d ? 'text-gray-500' : 'text-slate-500'}`}>Serving clients worldwide</span>
                  </span>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-7">
                <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${d ? 'text-gray-500' : 'text-slate-500'}`}>
                  Follow DevZore
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      aria-label={`DevZore on ${s.label}`} title={s.label}
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 ${
                        d ? 'bg-white/[0.035] border-white/[0.08] text-gray-500' : 'bg-white border-slate-200 text-slate-500'
                      } ${s.hover}`}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Col */}
            <div className="lg:col-span-3">
              <h3 className={headingClass}>Services</h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {services.slice(0, 6).map((s) => (
                  <li key={s.path}>
                    <Link to={s.path} onClick={scrollTop} className={linkClass}>
                      <span className="mr-2 w-0 h-px bg-purple-500 transition-all duration-200 group-hover:w-3"/>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Services Col */}
            <div className="lg:col-span-2">
              <h3 className={headingClass}>More Services</h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {services.slice(6).map((s) => (
                  <li key={s.path}>
                    <Link to={s.path} onClick={scrollTop} className={linkClass}>
                      <span className="mr-2 w-0 h-px bg-purple-500 transition-all duration-200 group-hover:w-3"/>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company + Contact Col */}
            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className={headingClass}>Company</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-x-5 gap-y-2.5">
                {company.map((c) => (
                  <li key={c.path}>
                    <Link to={c.path} onClick={scrollTop} className={linkClass}>
                      <span className="mr-2 w-0 h-px bg-purple-500 transition-all duration-200 group-hover:w-3"/>
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── BOTTOM BAR ── */}
          <div className={`mt-12 pt-6 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${d ? 'border-white/[0.07]' : 'border-slate-200'}`}>
            <p className={`text-[11px] sm:text-xs leading-5 ${d ? 'text-gray-500' : 'text-slate-500'}`}>
              © {year} <span className="font-semibold">DevZore</span>. All Rights Reserved. · Islamabad, Pakistan
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {[
                { label: 'Privacy Policy',   path: '/privacy-policy' },
                { label: 'Terms of Service', path: '/terms-and-conditions' },
                { label: 'Sitemap',          path: '/sitemap.xml' },
              ].map((item, i) => (
                <Link key={i} to={item.path} onClick={scrollTop}
                  className={`text-[11px] sm:text-xs transition-colors ${d ? 'text-gray-500 hover:text-purple-400' : 'text-slate-500 hover:text-purple-600'}`}>
                  {item.label}
                </Link>
              ))}
              <span className={`text-[11px] font-semibold text-purple-500`}>⚡ Engineered with precision</span>
            </div>
          </div>
        </div>

        {/* ── SCROLL TO TOP BUTTON ── */}
        <button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          title="Back to top"
          className={`group fixed z-50 right-3 sm:right-5 lg:right-6 bottom-4 sm:bottom-5 lg:bottom-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
            d
              ? 'bg-[#111827]/90 border-white/10 text-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-500'
              : 'bg-white/95 border-slate-200 text-slate-600 hover:bg-purple-600 hover:text-white hover:border-purple-600'
          }`}
        >
          <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5"/>
        </button>

        {/* ── SEO HIDDEN ── */}
        <div className="sr-only" aria-hidden="false">
          <address>
            <p>DevZore — Software Development Agency, Islamabad, Pakistan</p>
            <p>Email: hellodevzore@gmail.com | Phone: +92 334 8004300</p>
            <p>Serving clients worldwide: USA, UK, UAE, Canada, Australia, Saudi Arabia, Qatar</p>
          </address>
        </div>

        {/* ── ORGANIZATION SCHEMA ── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'DevZore',
          url: 'https://devzore.com',
          logo: 'https://devzore.com/logo1.png',
          email: 'hellodevzore@gmail.com',
          telephone: '+92-334-8004300',
          address: { '@type': 'PostalAddress', addressLocality: 'Islamabad', addressCountry: 'PK' },
          areaServed: 'Worldwide',
          description: 'DevZore is a software development agency providing web development, mobile app development, SaaS, UI/UX design, SEO and digital marketing services for businesses worldwide.',
          sameAs: [
            'https://www.facebook.com/profile.php?id=61591616471858',
            'https://www.linkedin.com/in/dev-zore-833893418/',
            'https://www.instagram.com/devz.ore/',
            'https://www.tiktok.com/@dev_zore',
            'https://www.fiverr.com/sellers/devzore/',
            'https://www.upwork.com/freelancers/~012e5cc1a7d6ceb834',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+92-334-8004300',
            contactType: 'customer service',
            areaServed: 'Worldwide',
            availableLanguage: ['English', 'Urdu'],
          },
        })}}/>
      </footer>
    </>
  );
};

export default Footer;
