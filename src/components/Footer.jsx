import React, { useEffect, useRef, useState } from "react";
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

  const footerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);

  // ======================================================
  // SCROLL TO TOP
  // ======================================================

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // ======================================================
  // HIDE MOBILE CTA WHEN FOOTER ENTERS VIEW
  // ======================================================

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  // ======================================================
  // SERVICES
  // ======================================================

  const services = [
    {
      label: "Generative AI Development",
      path: "/generative-ai-development",
    },
    {
      label: "Web Development",
      path: "/web-development",
    },
    {
      label: "Mobile App Development",
      path: "/mobile-apps",
    },
    {
      label: "SaaS Product Development",
      path: "/saas-product-development",
    },
    {
      label: "MERN Stack Development",
      path: "/mern-stack-development",
    },
    {
      label: "E-Commerce Development",
      path: "/ecommerce",
    },
    {
      label: "Backend & API Development",
      path: "/backend-api",
    },
    {
      label: "React Development",
      path: "/reactdevelopment",
    },
    {
      label: "UI/UX Design",
      path: "/ui-ux-design",
    },
    {
      label: "Startup MVP Development",
      path: "/startup-mvp",
    },
    {
      label: "SEO Services",
      path: "/seo-services",
    },
    {
      label: "Digital Marketing",
      path: "/digital-marketing",
    },
    {
      label: "Maintenance & Support",
      path: "/maintenance",
    },
  ];

  // ======================================================
  // SOLUTIONS
  // ======================================================

  const solutions = [
    {
      label: "Startup Solutions",
      path: "/startup-solutions",
    },
    {
      label: "Business Solutions",
      path: "/business-solutions",
    },
    {
      label: "E-Commerce Solutions",
      path: "/ecommerce-solutions",
    },
    {
      label: "SaaS Solutions",
      path: "/saas-solutions",
    },
    {
      label: "Management Systems",
      path: "/management-systems",
    },
    {
      label: "Custom Software Solutions",
      path: "/custom-software-solutions",
    },
  ];

  // ======================================================
  // COMPANY
  // ======================================================

  const company = [
    {
      label: "About DevZore",
      path: "/about",
    },
    {
      label: "Our Process",
      path: "/our-process",
    },
    {
      label: "Technologies",
      path: "/technologies",
    },
    {
      label: "Our Projects",
      path: "/#projects",
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
  ];

  // ======================================================
  // RESOURCES
  // ======================================================

  const resources = [
    {
      label: "Resources",
      path: "/resources",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Development Guides",
      path: "/development-guides",
    },
    {
      label: "FAQs",
      path: "/faq",
    },
  ];

  // ======================================================
  // LEGAL
  // ======================================================

  const legal = [
    {
      label: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      label: "Terms & Conditions",
      path: "/terms-and-conditions",
    },
  ];

  // ======================================================
  // SOCIAL LINKS
  // ======================================================

  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61591616471858",
      icon: <Facebook size={16} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dev-zore-833893418/",
      icon: <Linkedin size={16} />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/devz.ore/",
      icon: <Instagram size={16} />,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@dev_zore",
      icon: (
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
        </svg>
      ),
    },
    // {
    //   label: "Fiverr",
    //   href: "https://www.fiverr.com/sellers/devzore/",
    //   icon: (
    //     <span className="text-[10px] font-black">
    //       fi
    //     </span>
    //   ),
    // },
    // {
    //   label: "Upwork",
    //   href: "https://www.upwork.com/freelancers/~012e5cc1a7d6ceb834",
    //   icon: (
    //     <span className="text-[9px] font-black">
    //       up
    //     </span>
    //   ),
    // },
  ];

  // ======================================================
  // REUSABLE STYLES
  // ======================================================

  const headingClass = `
    text-[11px]
    font-bold
    text-white
    mb-4
  `;

  const linkClass = `
    inline-flex
    text-[11px]
    sm:text-[12px]
    leading-relaxed
    text-[#8BA7B5]
    hover:text-[#20C7C7]
    transition-colors
    duration-200
  `;

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <>
      <footer
        ref={footerRef}
        aria-label="DevZore website footer"
        className="relative bg-[#02090D] text-white mt-6"
      >
        {/* ==================================================
            PROJECT CTA
        ================================================== */}

        {/* <section className="bg-[#061923] border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="py-10 sm:py-12 lg:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#20C7C7] mb-3">
                  Start a project
                </p>

                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight leading-tight text-white">
                  Have an idea? We&apos;re here to build it.
                </h2>

                <p className="mt-3 max-w-xl text-sm sm:text-[15px] leading-6 text-[#8BA7B5]">
                  From websites and mobile apps to SaaS, AI and
                  custom software — tell us what you want to build.
                </p>
              </div>

              <Link
                to="/contact"
                onClick={scrollTop}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  w-fit
                  px-6
                  py-3.5
                  rounded-xl
                  bg-white
                  text-[#061923]
                  text-sm
                  font-bold
                  border
                  border-white
                  hover:bg-[#20C7C7]
                  hover:border-[#20C7C7]
                  transition-all
                  duration-300
                "
              >
                Discuss Your Project

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section> */}

        {/* ==================================================
            MAIN FOOTER
        ================================================== */}

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid lg:grid-cols-[1.15fr_2fr] gap-10 lg:gap-14">

            {/* ==================================================
                BRAND
            ================================================== */}

            <div>
              <Link
                to="/"
                onClick={scrollTop}
                aria-label="DevZore home"
                className="inline-flex items-center"
              >
                <img
                  src="/logo.png"
                  alt="DevZore Software Agency"
                  width="55"
                  height="55"
                  loading="lazy"
                  className="h-[55px] w-[55px] object-contain"
                />

                <div className="-ml-2">
                  <div className="text-xl font-black text-white">
                    Dev
                    <span className="text-[#20C7C7]">
                      Zore
                    </span>
                  </div>

                  <div className="text-[8px] uppercase tracking-[0.18em] mt-0.5 text-[#6F8A98]">
                    Software Agency
                  </div>
                </div>
              </Link>

              <p className="mt-4 max-w-[360px] text-xs sm:text-[13px] leading-6 text-[#8BA7B5]">
                DevZore designs and develops modern websites,
                web applications, mobile products, SaaS platforms,
                AI-enabled solutions and custom software for
                startups and businesses.
              </p>

              {/* CONTACT */}

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:hellodevzore@gmail.com"
                  className="flex items-center gap-2.5 w-fit text-xs text-[#8BA7B5] hover:text-[#20C7C7] transition-colors"
                >
                  <Mail size={14} />

                  hellodevzore@gmail.com
                </a>

                <a
                  href="https://wa.me/923348004300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 w-fit text-xs text-[#8BA7B5] hover:text-[#20C7C7] transition-colors"
                >
                  <Phone size={14} />

                  +92 334 8004300
                </a>
              </div>

              {/* SOCIAL */}

              <div className="mt-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#607B88] mb-3">
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
                      className="
                        w-8
                        h-8
                        rounded-lg
                        border
                        border-white/[0.09]
                        bg-white/[0.03]
                        text-[#8BA7B5]
                        flex
                        items-center
                        justify-center
                        hover:bg-[#20C7C7]
                        hover:border-[#20C7C7]
                        hover:text-[#061923]
                        transition-all
                        duration-200
                      "
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ==================================================
                FOOTER NAVIGATION
            ================================================== */}

            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                lg:grid-cols-4
                gap-x-6
                gap-y-9
              "
            >
              {/* SERVICES */}

              <div className="col-span-2 sm:col-span-3 lg:col-span-2">
                <h3 className={headingClass}>
                  Services
                </h3>

                <ul className="grid grid-cols-2 gap-x-5 gap-y-2.5">
                  {services.map((service) => (
                    <li key={service.path}>
                      <Link
                        to={service.path}
                        onClick={scrollTop}
                        className={linkClass}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOLUTIONS */}

              <div>
                <h3 className={headingClass}>
                  Solutions
                </h3>

                <ul className="space-y-2.5">
                  {solutions.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={scrollTop}
                        className={linkClass}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COMPANY */}

              <div>
                <h3 className={headingClass}>
                  Company
                </h3>

                <ul className="space-y-2.5">
                  {company.map((item) => (
                    <li key={item.path}>
                      {item.path.startsWith("/#") ? (
                        <a
                          href={item.path}
                          className={linkClass}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={scrollTop}
                          className={linkClass}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RESOURCES */}

              <div>
                <h3 className={headingClass}>
                  Resources
                </h3>

                <ul className="space-y-2.5">
                  {resources.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={scrollTop}
                        className={linkClass}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LEGAL */}

              <div>
                <h3 className={headingClass}>
                  Legal
                </h3>

                <ul className="space-y-2.5">
                  {legal.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={scrollTop}
                        className={linkClass}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}

                  <li>
                    <a
                      href="/sitemap.xml"
                      className={linkClass}
                    >
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>

              {/* ALL SERVICES CTA */}

              <div className="col-span-2">
                <Link
                  to="/allservices"
                  onClick={scrollTop}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    text-[#20C7C7]
                    hover:text-white
                    transition-colors
                  "
                >
                  View all services

                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* ==================================================
              BOTTOM
          ================================================== */}

          <div className="mt-10 pt-5 border-t border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-[10px] sm:text-[11px] text-[#607B88]">
                © {year}{" "}
                <span className="text-[#8BA7B5] font-semibold">
                  DevZore
                </span>
                . All Rights Reserved.
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link
                  to="/privacy-policy"
                  onClick={scrollTop}
                  className="text-[10px] sm:text-[11px] text-[#607B88] hover:text-[#20C7C7] transition-colors"
                >
                  Privacy
                </Link>

                <Link
                  to="/terms-and-conditions"
                  onClick={scrollTop}
                  className="text-[10px] sm:text-[11px] text-[#607B88] hover:text-[#20C7C7] transition-colors"
                >
                  Terms
                </Link>

                <a
                  href="/sitemap.xml"
                  className="text-[10px] sm:text-[11px] text-[#607B88] hover:text-[#20C7C7] transition-colors"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ==================================================
          MOBILE STICKY CONTACT BUTTON
          ONLY MOBILE
          HIDES WHEN FOOTER IS VISIBLE
      ================================================== */}

      <div
        className={`
          md:hidden
          fixed
          left-3
          right-3
          bottom-3
          z-[60]
          transition-all
          duration-300
          ${
            footerVisible
              ? "opacity-0 translate-y-6 pointer-events-none"
              : "opacity-100 translate-y-0"
          }
        `}
      >
        <Link
          to="/contact"
          onClick={scrollTop}
          className="
            group
            flex
            items-center
            justify-center
            gap-2
            w-full
            h-12
            rounded-xl
            bg-[#20C7C7]
            text-[#061923]
            text-[13px]
            font-bold
            shadow-[0_10px_35px_rgba(0,0,0,0.28)]
            border
            border-[#36D5D5]
            transition-all
            active:scale-[0.98]
          "
        >
          Contact Us

          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* ==================================================
          DESKTOP BACK TO TOP
      ================================================== */}

      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        title="Back to top"
        className="
          hidden
          md:flex
          fixed
          z-50
          right-5
          bottom-5
          w-10
          h-10
          rounded-full
          items-center
          justify-center
          border
          border-white/10
          bg-[#061923]/95
          text-[#A9BBC4]
          shadow-lg
          backdrop-blur-md
          hover:bg-[#20C7C7]
          hover:text-[#061923]
          hover:border-[#20C7C7]
          transition-all
          duration-300
          hover:-translate-y-1
        "
      >
        <ArrowUp size={17} />
      </button>
    </>
  );
};

export default Footer;