import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // ======================================================
  // SERVICES
  // ======================================================

  const services = [
    { label: "Web Development", path: "/web-development" },
    { label: "Mobile App Development", path: "/mobile-apps" },
    { label: "MERN Stack Development", path: "/mern-stack-development" },
    { label: "SaaS Development", path: "/saas-product-development" },
    { label: "E-Commerce Development", path: "/ecommerce" },
    { label: "React Development", path: "/reactdevelopment" },
    { label: "Backend & API", path: "/backend-api" },
    { label: "UI/UX Design", path: "/ui-ux-design" },
    { label: "Startup MVP", path: "/startup-mvp" },
    { label: "Maintenance & Support", path: "/maintenance" },
    { label: "SEO Services", path: "/seo-services" },
    { label: "Digital Marketing", path: "/digital-marketing" },
  ];

  // ======================================================
  // COMPANY
  // ======================================================

  const company = [
    { label: "About DevZore", path: "/about" },
    { label: "All Services", path: "/allservices" },
    { label: "Our Projects", path: "/#projects" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-and-conditions" },
  ];

  // ======================================================
  // SOCIAL LINKS
  // ======================================================

  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61591616471858",
      icon: <Facebook size={17} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dev-zore-833893418/",
      icon: <Linkedin size={17} />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/devz.ore/",
      icon: <Instagram size={17} />,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@dev_zore",
      icon: (
        <svg
          className="w-[17px] h-[17px] fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
        </svg>
      ),
    },
    {
      label: "Fiverr",
      href: "https://www.fiverr.com/sellers/devzore/",
      icon: (
        <svg
          className="w-[17px] h-[17px] fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23.004 15.588a.995.995 0 10-1.99 0 .995.995 0 001.99 0zm-2.987-1.99h-.995v3.98h.995v-3.98zm-1.99 2.985a1.99 1.99 0 01-1.99 1.99V14.6a1.99 1.99 0 011.99 1.99v-.007zm-1.99 1.99a1.99 1.99 0 01-1.99-1.99 1.99 1.99 0 011.99-1.99v3.98zm-2.987-3.98H8.013v.995h2.987v2.985h.995v-2.985h.995v-.995h-.96zm-4.98.995H6.023a.995.995 0 000 1.99h.995v.995H6.023a1.99 1.99 0 010-3.98H7.07v.995zm-2.987-.995H0V24h6.017v-.995H.995v-6.012h5.022v-.995H6.017v-.995zM3.032 6.02a1.99 1.99 0 100 3.98 1.99 1.99 0 000-3.98zm0 2.985a.995.995 0 110-1.99.995.995 0 010 1.99z" />
        </svg>
      ),
    },
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~012e5cc1a7d6ceb834",
      icon: (
        <svg
          className="w-[17px] h-[17px] fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
        </svg>
      ),
    },
  ];

  // ======================================================
  // FIXED DARK FOOTER STYLES
  // ======================================================

  const headingClass = `
    text-[10px] sm:text-[11px]
    font-black uppercase tracking-[0.18em]
    text-gray-300 mb-4
  `;

  const linkClass = `
    inline-flex items-start
    text-[11px] sm:text-[12px]
    leading-[1.45]
    text-gray-400
    hover:text-purple-400
    transition-colors duration-200
  `;

  return (
    <footer
      aria-label="DevZore website footer"
      className="relative bg-[#070B14] border-t border-white/[0.07] text-white"
    >
      {/* ==================================================
          CTA
      ================================================== */}

      <section
        aria-labelledby="footer-cta-heading"
        className="border-b border-white/[0.07]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-10">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-7 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-10">
              <div className="max-w-2xl">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.18em] text-purple-400 mb-2">
                  Start Your Project
                </p>

                <h2
                  id="footer-cta-heading"
                  className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight text-white"
                >
                  Have a digital product in mind?
                </h2>

                <p className="mt-2 max-w-xl text-xs sm:text-sm leading-6 text-gray-400">
                  Tell us about your website, mobile app, SaaS,
                  e-commerce or custom software requirements.
                </p>
              </div>

              <div className="flex flex-row flex-wrap gap-2.5 shrink-0">
                <Link
                  to="/contact"
                  onClick={scrollTop}
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold transition-colors"
                >
                  Discuss Your Project
                  <ArrowRight size={14} />
                </Link>

                <a
                  href="https://wa.me/923348004300?text=Hi%20DevZore%21%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 text-xs sm:text-sm font-bold transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          MAIN FOOTER
      ================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-11 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* ==================================================
              BRAND
          ================================================== */}

          <div className="lg:col-span-4">
            <Link
              to="/"
              onClick={scrollTop}
              aria-label="DevZore home"
              className="inline-flex items-center"
            >
              <img
                src="/logo.png"
                alt="DevZore"
                width="58"
                height="58"
                loading="lazy"
                className="h-[58px] w-[58px] object-contain"
              />

              <div className="-ml-2">
                <div className="text-lg sm:text-xl font-black text-white">
                  Dev<span className="text-purple-500">Zore</span>
                </div>

                <div className="text-[8px] uppercase tracking-[0.18em] mt-0.5 text-gray-500">
                  Software Agency
                </div>
              </div>
            </Link>

            {/* Desktop / Tablet Description */}

            <p className="hidden sm:block mt-4 max-w-sm text-xs sm:text-sm leading-6 text-gray-400">
              DevZore helps startups and businesses build modern
              websites, web applications, mobile apps, SaaS products
              and digital solutions.
            </p>

            {/* Desktop / Tablet Business Card */}

            <div className="hidden sm:flex mt-5 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 max-w-sm">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-[10px] text-white font-black shrink-0">
                DZ
              </div>

              <div>
                <p className="text-xs font-bold text-gray-200">
                  Digital solutions for modern businesses
                </p>

                <p className="text-[10px] mt-0.5 text-gray-500">
                  Available for international projects
                </p>
              </div>
            </div>

            {/* Contact */}

            <div className="mt-4 sm:mt-5 flex flex-col gap-2.5">
              <a
                href="mailto:hellodevzore@gmail.com"
                className="inline-flex items-center gap-2.5 text-xs text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail size={14} />
                hellodevzore@gmail.com
              </a>

              <a
                href="https://wa.me/923348004300"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Phone size={14} />
                +92 334 8004300
              </a>
            </div>

            {/* Socials */}

            <div className="mt-5">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-gray-500 mb-2.5">
                Follow DevZore
              </p>

              <div className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`DevZore on ${social.label}`}
                    title={social.label}
                    className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.025] text-gray-400 flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================
              SERVICES
          ================================================== */}

          <div className="lg:col-span-5">
            <h3 className={headingClass}>Services</h3>

            {/* Mobile + Desktop: 2 columns */}

            <ul className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3">
              {services.map((service) => (
                <li key={service.path} className="min-w-0">
                  <Link
                    to={service.path}
                    onClick={scrollTop}
                    className={linkClass}
                  >
                    <span className="break-words">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================================================
              COMPANY
          ================================================== */}

          <div className="lg:col-span-3">
            <h3 className={headingClass}>Company</h3>

            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3">
              {company.map((item) => (
                <li key={item.path} className="min-w-0">
                  <Link
                    to={item.path}
                    onClick={scrollTop}
                    className={linkClass}
                  >
                    <span className="break-words">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ==================================================
            BOTTOM
        ================================================== */}

        <div className="mt-8 sm:mt-10 pt-5 border-t border-white/[0.07]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-[10px] sm:text-[11px] text-gray-500">
              © {year}{" "}
              <span className="font-semibold text-gray-400">
                DevZore
              </span>
              . All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                to="/privacy-policy"
                onClick={scrollTop}
                className="text-[10px] sm:text-[11px] text-gray-500 hover:text-purple-400 transition-colors"
              >
                Privacy
              </Link>

              <Link
                to="/terms-and-conditions"
                onClick={scrollTop}
                className="text-[10px] sm:text-[11px] text-gray-500 hover:text-purple-400 transition-colors"
              >
                Terms
              </Link>

              <a
                href="/sitemap.xml"
                className="text-[10px] sm:text-[11px] text-gray-500 hover:text-purple-400 transition-colors"
              >
                Sitemap
              </a>

              <span className="hidden sm:inline text-[10px] sm:text-[11px] font-semibold text-purple-500">
                ⚡ Engineered with precision
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          BACK TO TOP
      ================================================== */}

      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        title="Back to top"
        className="group fixed z-50 right-3 sm:right-5 bottom-4 sm:bottom-5 w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-[#111827]/95 text-gray-300 shadow-lg backdrop-blur-md hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 hover:-translate-y-1"
      >
        <ArrowUp
          size={17}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </button>
    </footer>
  );
};

export default Footer;