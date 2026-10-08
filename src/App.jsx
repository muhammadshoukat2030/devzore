
import React, { useEffect, lazy, Suspense } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
  Navigate,
} from "react-router-dom";

import { Helmet } from "react-helmet-async";

// ======================================================
// GLOBAL COMPONENTS
// ======================================================

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TrustBar from "./components/TrustBar";

// ======================================================
// HOME SECTIONS - KEEP NORMAL IMPORTS
// ======================================================

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Solutions from "./sections/Solutions";
import Projects from "./sections/Projects";
import WhyUs from "./sections/WhyUs";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";

// ======================================================
// PUBLIC PAGES - LAZY LOADING
// ======================================================

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

const BlogPost = lazy(() => import("./pages/BlogPost"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));

// ======================================================
// SERVICE PAGES - LAZY LOADING
// ======================================================

const AllServices = lazy(() => import("./pages/AllServices"));
const GenerativeAIDevelopment = lazy(() => import("./pages/GenerativeAIDevelopment"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const MobileApp = lazy(() => import("./pages/MobileApp"));
const ECommerce = lazy(() => import("./pages/ECommerce"));
const BackendApi = lazy(() => import("./pages/BackendApi"));
const MernStackDevelopment = lazy(() => import("./pages/MernStackDevelopment"));
const SaaSProductDevelopment = lazy(() => import("./pages/SaaSProductDevelopment"));
const ReactDevelopment = lazy(() => import("./pages/ReactDevelopment"));
const UiUxDesign = lazy(() => import("./pages/UiUxDesign"));
const Maintenance = lazy(() => import("./pages/Maintenance"));
const StartupMVP = lazy(() => import("./pages/StartupMVP"));
const SeoServices = lazy(() => import("./pages/SeoServices"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));

// ======================================================
// SOLUTION PAGES - LAZY LOADING
// ======================================================

const StartupSolutions = lazy(() => import("./pages/StartupSolutions"));
const BusinessSolutions = lazy(() => import("./pages/BusinessSolutions"));
const EcommerceSolutions = lazy(() => import("./pages/EcommerceSolutions"));
const SaaSSolutions = lazy(() => import("./pages/SaaSSolutions"));
const ManagementSystems = lazy(() => import("./pages/ManagementSystems"));
const CustomSoftwareSolutions = lazy(() => import("./pages/CustomSoftwareSolutions"));

// ======================================================
// RESOURCE PAGES - LAZY LOADING
// ======================================================

const DevelopmentGuides = lazy(() => import("./pages/DevelopmentGuides"));
const FAQs = lazy(() => import("./pages/FAQs"));
const Resources = lazy(() => import("./pages/Resources"));

// ======================================================
// COMPANY PAGES - LAZY LOADING
// ======================================================

const OurProcess = lazy(() => import("./pages/OurProcess"));
const Technologies = lazy(() => import("./pages/Technologies"));

// ======================================================
// LEGAL PAGES - LAZY LOADING
// ======================================================

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

// ======================================================
// ADMIN - LAZY LOADING
// ======================================================

const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminPosts = lazy(() => import("./pages/admin/AdminPosts"));
const AdminPostEditor = lazy(() => import("./pages/admin/AdminPostEditor"));
const AdminCategories = lazy(() => import("./pages/admin/AdminCategories"));
const AdminComments = lazy(() => import("./pages/admin/AdminComments"));

// ======================================================
// SITE CONFIG
// ======================================================

const BASE_URL = "https://devzore.com";

const DEFAULT_OG_IMAGE = `${BASE_URL}/logo.png`;

const INDEX_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

// ======================================================
// STATIC SEO DATA - ORIGINAL CONTENT PRESERVED
// ======================================================

const seoData = {
  // HOME

  "/": {
    title:
      "Software & Web Development Company for Businesses | DevZore",

    description:
      "DevZore builds professional business websites, web applications, SaaS products, mobile apps and custom software for startups and businesses worldwide.",

    keywords:
      "software development company, web development company, website development company, professional website development, business website development, custom software development, custom web development, web application development, website developer, web developer, website design company, web development agency, software development agency, digital solutions company",
  },

  // ABOUT

  "/about": {
    title:
      "About DevZore | Software Development & Digital Solutions Company",

    description:
      "Learn about DevZore, a software development company building professional websites, web applications, SaaS products, mobile apps and custom digital solutions.",

    keywords:
      "DevZore, DevZore software company, DevZore software development, DevZore web development, software development company, software engineering company, digital solutions company, technology company, software development team, web development team, digital product development company",
  },

  // CONTACT

  "/contact": {
    title:
      "Contact DevZore | Hire Web & Software Developers",

    description:
      "Contact DevZore to discuss your website, web application, SaaS, mobile app, e-commerce or custom software project and request a development quote.",

    keywords:
      "contact software development company, contact web development company, hire software development company, hire web developer, hire website developer, hire web development company, get website development quote, website development consultation, software development consultation, custom software consultation, web development quote, website development quote",
  },

  // ALL SERVICES

  "/allservices": {
    title:
      "Software Development Services | Web, Mobile & SaaS | DevZore",

    description:
      "Explore DevZore services including web development, mobile apps, generative AI, e-commerce, MERN, React, backend APIs, SaaS, UI/UX, MVP development, SEO and support.",

    keywords:
      "software development services, web development services, website development services, mobile app development services, generative AI development, custom software development, SaaS development services, ecommerce development, backend development services, API development services, MERN stack development, React development services, UI UX design services, MVP development services, website maintenance services",
  },

  // WEB DEVELOPMENT

  "/web-development": {
    title:
      "Web Development Services | Business Websites & Web Apps | DevZore",

    description:
      "Professional web development for businesses and startups. DevZore builds responsive business websites, custom web applications, e-commerce platforms and SaaS products.",

    keywords:
      "web development, web development services, web development company, web development agency, web developer, website development, website development services, website development company, website developer, custom web development, custom website development, professional web development, professional website development, business web development, business website development, business website design, corporate web development, responsive web development, modern web development, full stack web development, frontend development, backend development, dynamic website development, secure web development, scalable web development, mobile responsive web development, small business website development, startup website development, custom web application development, web application development, business web application",
  },

  // MOBILE APP DEVELOPMENT

  "/mobile-apps": {
    title:
      "Mobile App Development Services | iOS & Android | DevZore",

    description:
      "Custom mobile app development for startups and businesses, including iOS, Android and cross-platform applications built for modern digital products.",

    keywords:
      "mobile app development, mobile app development company, mobile application development, mobile application development company, app development company, app development agency, mobile app developer, mobile application developer, custom mobile app development, custom app development, Android app development, iOS app development, Android application development, iPhone app development, cross platform app development, mobile software development, business mobile app development, startup app development, enterprise mobile app development, mobile app design, mobile UI UX, app UI UX design, mobile app development services, mobile application development services, hire mobile app developer, mobile app developer for startup, mobile app development for business, custom mobile app for business, mobile app development company worldwide",
  },

  // GENERATIVE AI DEVELOPMENT

  "/generative-ai-development": {
    title:
      "Generative AI Development Services | AI Solutions | DevZore",

    description:
      "Custom generative AI development services for startups and businesses, including AI applications, AI assistants, chatbots, LLM integration and intelligent automation.",

    keywords:
      "generative AI development, generative AI development services, generative AI development company, generative AI solutions, AI development services, AI development company, artificial intelligence development, artificial intelligence development company, custom AI development, custom AI solutions, AI application development, generative AI applications, AI software development, AI chatbot development, AI assistant development, custom AI chatbot, AI agent development, AI automation, intelligent automation, LLM development, LLM integration, large language model development, large language model integration, AI API integration, OpenAI API integration, ChatGPT integration, AI powered applications, AI powered software, AI SaaS development, generative AI SaaS development, business AI solutions, AI solutions for businesses, startup AI development, enterprise AI development, AI product development, AI web application development, generative AI consulting, hire AI developer, hire generative AI developer, generative AI development company worldwide",
  },

  // E-COMMERCE

  "/ecommerce": {
    title:
      "E-Commerce Development Services | Online Stores | DevZore",

    description:
      "Build custom e-commerce websites and online stores with product management, secure checkout, payments, inventory and scalable shopping experiences.",

    keywords:
      "ecommerce development, ecommerce website development, ecommerce development company, ecommerce website developer, ecommerce website design, online store development, custom ecommerce development, ecommerce solutions, ecommerce platform development",
  },

  // BACKEND & API

  "/backend-api": {
    title:
      "Backend & API Development Services | Node.js APIs | DevZore",

    description:
      "Custom backend and API development services using Node.js, Express.js, REST APIs, GraphQL, MongoDB and PostgreSQL for web, mobile and SaaS applications.",

    keywords:
      "backend development, backend development company, backend development services, custom backend development, web backend development, application backend development, API development, API development company, API development services, custom API development, REST API development, RESTful API development, backend API development, API integration, third party API integration, database development, database integration, server side development, Node.js development, Express.js development, secure backend development, scalable backend development",
  },

  // MERN STACK

  "/mern-stack-development": {
    title:
      "MERN Stack Development Services | MongoDB, React & Node | DevZore",

    description:
      "Custom MERN stack development using MongoDB, Express, React and Node.js for scalable web applications, SaaS products, dashboards and business software.",

    keywords:
      "MERN stack development, MERN stack development company, MERN stack developer, MERN development company, MERN stack agency, MERN stack web development, MERN stack application development, MERN stack services, MERN stack development services, custom MERN application, MERN web application development, MERN software development, MongoDB React Node Express development, React Node MongoDB development, full stack MERN development, MERN stack developer for startup, MERN stack developer for business, hire MERN developer",
  },

  // SAAS PRODUCT DEVELOPMENT

  "/saas-product-development": {
    title:
      "SaaS Product Development Services | Custom SaaS Platforms | DevZore",

    description:
      "Custom SaaS product development with authentication, dashboards, subscriptions, APIs, user management and scalable web application architecture.",

    keywords:
      "SaaS development, SaaS development company, SaaS product development, SaaS application development, SaaS software development, SaaS development services, SaaS developer, SaaS product development company, custom SaaS development, SaaS platform development, SaaS application developer, B2B SaaS development, B2C SaaS development, SaaS MVP development, SaaS UI UX design, SaaS web application development, cloud software development, subscription software development",
  },

  // REACT DEVELOPMENT

  "/reactdevelopment": {
    title:
      "React Development Services | React.js Web Applications | DevZore",

    description:
      "Professional React development for websites, dashboards, SaaS platforms and custom web applications using reusable components and modern frontend architecture.",

    keywords:
      "React development, React development company, React developer, React development services, React web development, React website development, React application development, React app development, React frontend development, React.js development, React JS development, React web developer, React application developer, custom React development, React UI development, React dashboard development, React SaaS development, React ecommerce development, hire React developer, React development agency",
  },

  // UI UX

  "/ui-ux-design": {
    title:
      "UI/UX Design Services | Website, App & SaaS Design | DevZore",

    description:
      "User-focused UI/UX design for websites, mobile apps, dashboards and SaaS products including wireframes, Figma interfaces, prototypes and design systems.",

    keywords:
      "UI UX design, UI UX design company, UI UX design agency, UI UX design services, UI design, UX design, website UI UX design, web design, website design, website designer, web designer, professional website design, custom website design, business website design, modern website design, responsive website design, mobile UI UX design, app UI UX design, SaaS UI UX design, dashboard UI UX design, user experience design, user interface design, product design, digital product design, UX research, website redesign, website redesign services",
  },

  // STARTUP MVP

  "/startup-mvp": {
    title:
      "Startup MVP Development Services | Build & Launch Your MVP | DevZore",

    description:
      "MVP development for startups from product planning and prototyping to web or app development, testing, deployment and future product iteration.",

    keywords:
      "MVP development, MVP development company, MVP development services, startup MVP development, startup MVP developer, MVP software development, MVP app development, MVP web development, MVP product development, minimum viable product development, startup software development, startup web development, startup app development, startup product development, startup technology partner, startup development agency, prototype development, product prototype development, rapid MVP development, SaaS MVP development",
  },

  // MAINTENANCE

  "/maintenance": {
    title:
      "Website Maintenance & Support Services | DevZore",

    description:
      "Website and web application maintenance including bug fixes, updates, troubleshooting, performance optimization, monitoring and ongoing technical support.",

    keywords:
      "website maintenance, website maintenance services, website maintenance company, website support, website support services, website management, website management services, web maintenance, web support, technical website support, website security maintenance, website updates, website bug fixing, website troubleshooting, website performance optimization, website speed optimization, website security, website backup, website monitoring, software maintenance, software support, application maintenance, web application support",
  },

  // SEO

  "/seo-services": {
    title:
      "SEO Services | Technical SEO & Website Optimization | DevZore",

    description:
      "Improve search visibility with technical SEO, on-page optimization, crawlability, structured data, website performance and search monitoring.",

    keywords:
      "SEO services, SEO company, SEO agency, SEO consultant, SEO services company, search engine optimization services, website SEO services, technical SEO, technical SEO services, on page SEO, international SEO, ecommerce SEO, SEO for small business, SEO for startups, website optimization, Google SEO services, SEO strategy, SEO audit, SEO consulting, organic search optimization, search visibility optimization",
  },

  // DIGITAL MARKETING

  "/digital-marketing": {
    title:
      "Digital Marketing Services | Online Business Growth | DevZore",

    description:
      "Digital marketing services for businesses including strategy, social media, content marketing, campaigns, lead generation and performance reporting.",

    keywords:
      "digital marketing, digital marketing services, digital marketing company, digital marketing agency, online marketing, internet marketing, digital marketing solutions, social media marketing, content marketing, SEO marketing, search engine marketing, lead generation, online lead generation, business lead generation, digital advertising, brand marketing, performance marketing, marketing strategy, online business marketing, startup digital marketing, small business digital marketing",
  },

  // SOLUTIONS

  "/startup-solutions": {
    title:
      "Startup Software Development Solutions | DevZore",

    description:
      "Software development solutions for startups including MVPs, SaaS products, websites, mobile apps and scalable digital product development.",

    keywords:
      "startup software development, startup solutions, startup development company, startup MVP development, SaaS development for startups, startup web development, startup app development",
  },

  "/business-solutions": {
    title:
      "Business Software Development Solutions | DevZore",

    description:
      "Custom business software solutions including web applications, management systems, automation, dashboards and scalable digital platforms.",

    keywords:
      "business software solutions, custom business software, business software development, business web applications, business automation, digital business solutions",
  },

  "/ecommerce-solutions": {
    title:
      "E-Commerce Solutions for Online Businesses | DevZore",

    description:
      "Custom e-commerce solutions for businesses including online stores, product management, payments, inventory, dashboards and scalable commerce platforms.",

    keywords:
      "ecommerce solutions, ecommerce software solutions, online store solutions, ecommerce development, custom ecommerce platform, online business solutions",
  },

  "/saas-solutions": {
    title:
      "Custom SaaS Solutions for Businesses & Startups | DevZore",

    description:
      "Custom SaaS solutions including subscription platforms, dashboards, authentication, APIs, user management and scalable cloud-based software.",

    keywords:
      "SaaS solutions, custom SaaS solutions, SaaS software development, SaaS platform development, business SaaS solutions, startup SaaS solutions",
  },

  "/management-systems": {
    title:
      "Custom Management System Development | DevZore",

    description:
      "Custom management systems for businesses including inventory, sales, customers, employees, reporting, dashboards and workflow management.",

    keywords:
      "management system development, business management system, custom management software, inventory management system, sales management system, business software",
  },

  "/custom-software-solutions": {
    title:
      "Custom Software Solutions & Development | DevZore",

    description:
      "Custom software solutions designed around your business processes, workflows, customers and operational requirements.",

    keywords:
      "custom software solutions, custom software development, business software solutions, bespoke software development, custom application development",
  },

  // RESOURCES

  "/guides": {
    title:
      "Software & Web Development Guides | DevZore",

    description:
      "Explore practical DevZore guides covering web development, software development, SaaS, React, MERN, SEO, performance and digital products.",

    keywords:
      "software development guides, web development guides, React guides, MERN guides, SaaS guides, website development tutorials",
  },

  "/faqs": {
    title:
      "Software Development FAQs | DevZore",

    description:
      "Find answers to common questions about DevZore software development, websites, mobile apps, SaaS products, project timelines and development services.",

    keywords:
      "software development FAQ, web development FAQ, website development questions, SaaS development questions, DevZore FAQ",
  },

  "/resources": {
    title:
      "Software Development Resources & Insights | DevZore",

    description:
      "Explore software development resources, technical insights and practical information for businesses, startups and digital product teams.",

    keywords:
      "software development resources, web development resources, technology insights, SaaS resources, business technology resources",
  },

  // COMPANY

  "/our-process": {
    title:
      "Our Software Development Process | DevZore",

    description:
      "Learn how DevZore plans, designs, develops, tests, deploys and supports websites, applications, SaaS products and custom software.",

    keywords:
      "software development process, web development process, DevZore process, software project process, application development process",
  },

  "/technologies": {
    title:
      "Technologies & Development Tech Stack | DevZore",

    description:
      "Explore the technologies DevZore uses to build modern websites, web applications, mobile apps, SaaS products, APIs and custom software.",

    keywords:
      "software development technologies, web development technologies, technology stack, React, Node.js, MongoDB, Express, JavaScript, SaaS technology stack",
  },

  // PRIVACY

  "/privacy-policy": {
    title:
      "Privacy Policy | DevZore",

    description:
      "Read DevZore's Privacy Policy to understand how information may be collected, used, stored and protected when using our website and services.",

    keywords:
      "DevZore privacy policy, DevZore data privacy, website privacy policy",
  },

  // TERMS

  "/terms-and-conditions": {
    title:
      "Terms & Conditions | DevZore",

    description:
      "Read DevZore's Terms and Conditions covering website use, software development services, client responsibilities, payments, support and related policies.",

    keywords:
      "DevZore terms and conditions, DevZore terms of service, software development terms",
  },
};

// ======================================================
// NORMALIZE PATH
// ======================================================

const normalizePathname = (pathname = "/") => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const cleaned = pathname.replace(/\/+$/, "");

  return cleaned || "/";
};

// ======================================================
// SEO MANAGER - ORIGINAL LOGIC PRESERVED
// ======================================================

function SEOManager() {
  const { pathname } = useLocation();

  const currentPath = normalizePathname(pathname);

  // ====================================================
  // ADMIN - NOINDEX
  // ====================================================

  if (currentPath.startsWith("/admin")) {
    return (
      <Helmet>
        <html lang="en" />

        <title>DevZore Admin</title>

        <meta
          name="robots"
          content="noindex, nofollow, noarchive"
        />

        <meta
          name="googlebot"
          content="noindex, nofollow, noarchive"
        />
      </Helmet>
    );
  }

  // ====================================================
  // THANK YOU - NOINDEX
  // ====================================================

  if (currentPath === "/thank-you") {
    return (
      <Helmet>
        <html lang="en" />

        <title>Thank You | DevZore</title>

        <meta
          name="description"
          content="Thank you for contacting DevZore. Your project inquiry has been received successfully."
        />

        <meta
          name="robots"
          content="noindex, nofollow, noarchive"
        />

        <meta
          name="googlebot"
          content="noindex, nofollow, noarchive"
        />
      </Helmet>
    );
  }

  // ====================================================
  // BLOG SEO
  // BlogPost handles /blog SEO.
  // BlogDetails handles /blog/:slug SEO.
  // Prevent duplicate title/meta/canonical.
  // ====================================================

  if (
    currentPath === "/blog" ||
    currentPath.startsWith("/blog/")
  ) {
    return null;
  }

  // ====================================================
  // STATIC PAGE
  // ====================================================

  const page = seoData[currentPath];

  // ====================================================
  // UNKNOWN / 404
  // ====================================================

  if (!page) {
    return (
      <Helmet>
        <html lang="en" />

        <title>Page Not Found | DevZore</title>

        <meta
          name="description"
          content="The requested page could not be found on DevZore."
        />

        <meta
          name="robots"
          content="noindex, follow"
        />

        <meta
          name="googlebot"
          content="noindex, follow"
        />
      </Helmet>
    );
  }

  // ====================================================
  // CANONICAL
  // ====================================================

  const canonical =
    currentPath === "/"
      ? `${BASE_URL}/`
      : `${BASE_URL}${currentPath}`;

  // ====================================================
  // SOCIAL IMAGE
  // ====================================================

  const socialImage =
    page.ogImage || DEFAULT_OG_IMAGE;

  // ====================================================
  // OUTPUT
  // ====================================================

  return (
    <Helmet>
      <html lang="en" />

      <title>{page.title}</title>

      <meta
        name="description"
        content={page.description}
      />

      {page.keywords && (
        <meta
          name="keywords"
          content={page.keywords}
        />
      )}

      <meta
        name="robots"
        content={INDEX_ROBOTS}
      />

      <meta
        name="googlebot"
        content={INDEX_ROBOTS}
      />

      <link
        rel="canonical"
        href={canonical}
      />

      {/* OPEN GRAPH */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="DevZore"
      />

      <meta
        property="og:title"
        content={page.ogTitle || page.title}
      />

      <meta
        property="og:description"
        content={page.ogDescription || page.description}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      <meta
        property="og:locale"
        content="en_US"
      />

      <meta
        property="og:image"
        content={socialImage}
      />

      <meta
        property="og:image:alt"
        content={page.ogImageAlt || `${page.title} - DevZore`}
      />

      {/* TWITTER */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={page.ogTitle || page.title}
      />

      <meta
        name="twitter:description"
        content={page.ogDescription || page.description}
      />

      <meta
        name="twitter:image"
        content={socialImage}
      />

      <meta
        name="twitter:image:alt"
        content={page.ogImageAlt || `${page.title} - DevZore`}
      />
    </Helmet>
  );
}

// ======================================================
// SCROLL TO TOP
// ======================================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

// ======================================================
// 404 PAGE
// ======================================================

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-white">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0796A8]">
        Error 404
      </p>

      <h1 className="mt-3 text-5xl sm:text-7xl font-black text-[#071923]">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-lg text-slate-600">
        The page you're looking
        for doesn't exist or may
        have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#071923] px-6 py-3 font-bold text-white transition hover:bg-[#0A2430]"
      >
        Back to Home
      </Link>
    </div>
  );
}

// ======================================================
// HOME PAGE - KEEP EXISTING COMPONENTS
// ======================================================

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Solutions />
      <Projects />
      <WhyUs />
      <TechStack />
      <Testimonials />
      <FAQ />
    </>
  );
}

// ======================================================
// APP CONTENT
// ======================================================

function AppContent() {
  const { pathname } = useLocation();

  const isAdminRoute =
    pathname.startsWith("/admin");

  return (
    <div className="min-h-screen font-sans flex flex-col bg-white text-[#071923] selection:bg-cyan-100">

      {/* ================================================
          PUBLIC NAVBAR
          ================================================ */}

      {!isAdminRoute && (
        <Navbar />
      )}

      {/* ================================================
          ROUTES WITH LAZY LOADING
          ================================================ */}

      <main className="flex-grow">
        <Suspense fallback={null}>
          <Routes>

            {/* HOME */}

            <Route
              path="/"
              element={<HomePage />}
            />

            {/* ============================================
                SERVICES
                ============================================ */}

            <Route
              path="/allservices"
              element={<AllServices />}
            />

            <Route
              path="/web-development"
              element={<WebDevelopment />}
            />

            <Route
              path="/mobile-apps"
              element={<MobileApp />}
            />

            <Route
              path="/generative-ai-development"
              element={<GenerativeAIDevelopment />}
            />

            <Route
              path="/ecommerce"
              element={<ECommerce />}
            />

            <Route
              path="/mern-stack-development"
              element={<MernStackDevelopment />}
            />

            <Route
              path="/reactdevelopment"
              element={<ReactDevelopment />}
            />

            <Route
              path="/backend-api"
              element={<BackendApi />}
            />

            <Route
              path="/saas-product-development"
              element={<SaaSProductDevelopment />}
            />

            <Route
              path="/ui-ux-design"
              element={<UiUxDesign />}
            />

            <Route
              path="/startup-mvp"
              element={<StartupMVP />}
            />

            <Route
              path="/seo-services"
              element={<SeoServices />}
            />

            <Route
              path="/digital-marketing"
              element={<DigitalMarketing />}
            />

            <Route
              path="/maintenance"
              element={<Maintenance />}
            />

            {/* ============================================
                SOLUTIONS
                ============================================ */}

            <Route
              path="/startup-solutions"
              element={<StartupSolutions />}
            />

            <Route
              path="/business-solutions"
              element={<BusinessSolutions />}
            />

            <Route
              path="/ecommerce-solutions"
              element={<EcommerceSolutions />}
            />

            <Route
              path="/saas-solutions"
              element={<SaaSSolutions />}
            />

            <Route
              path="/management-systems"
              element={<ManagementSystems />}
            />

            <Route
              path="/custom-software-solutions"
              element={<CustomSoftwareSolutions />}
            />

            {/* ============================================
                RESOURCES
                ============================================ */}

            <Route
              path="/guides"
              element={<DevelopmentGuides />}
            />

            <Route
              path="/faqs"
              element={<FAQs />}
            />

            <Route
              path="/resources"
              element={<Resources />}
            />

            {/* ============================================
                COMPANY
                ============================================ */}

            <Route
              path="/our-process"
              element={<OurProcess />}
            />

            <Route
              path="/technologies"
              element={<Technologies />}
            />

            {/* ============================================
                PUBLIC
                ============================================ */}

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/thank-you"
              element={<ThankYou />}
            />

            {/* ============================================
                BLOG
                ============================================ */}

            <Route
              path="/blog"
              element={<BlogPost />}
            />

            <Route
              path="/blog/:slug"
              element={<BlogDetails />}
            />

            {/* ============================================
                LEGAL
                ============================================ */}

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />

            <Route
              path="/terms-and-conditions"
              element={<Terms />}
            />

            {/* ============================================
                ADMIN LOGIN
                ============================================ */}

            <Route
              path="/admin/login"
              element={<AdminLogin />}
            />

            {/* ============================================
                ADMIN AREA
                ============================================ */}

            <Route
              path="/admin"
              element={<AdminLayout />}
            >
              <Route
                index
                element={
                  <Navigate
                    to="dashboard"
                    replace
                  />
                }
              />

              <Route
                path="dashboard"
                element={<AdminDashboard />}
              />

              <Route
                path="posts"
                element={<AdminPosts />}
              />

              <Route
                path="posts/new"
                element={<AdminPostEditor />}
              />

              <Route
                path="posts/edit/:id"
                element={<AdminPostEditor />}
              />

              <Route
                path="categories"
                element={<AdminCategories />}
              />

              <Route
                path="comments"
                element={<AdminComments />}
              />
            </Route>

            {/* ============================================
                404 - ALWAYS LAST
                ============================================ */}

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>
        </Suspense>
      </main>

      {/* ================================================
          PUBLIC FOOTER
          ================================================ */}

      {!isAdminRoute && (
        <Footer />
      )}
    </div>
  );
}

// ======================================================
// ROOT APP
// ======================================================

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEOManager />
      <AppContent />
    </BrowserRouter>
  );
}

// ======================================================
// EXPORT
// ======================================================

export default App;
