import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
  Navigate,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TrustBar from "./components/TrustBar";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import WhyUs from "./sections/WhyUs";
import Process from "./sections/Process";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";

import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";
import BlogDetails from "./pages/BlogDetails";

import AllServices from "./pages/AllServices";
import WebDevelopment from "./pages/WebDevelopment";
import MobileApp from "./pages/MobileApp";
import ECommerce from "./pages/ECommerce";
import BackendApi from "./pages/BackendApi";
import MernStackDevelopment from "./pages/MernStackDevelopment";
import SaaSProductDevelopment from "./pages/SaaSProductDevelopment";
import ReactDevelopment from "./pages/ReactDevelopment";
import UiUxDesign from "./pages/UiUxDesign";
import Maintenance from "./pages/Maintenance";
import StartupMVP from "./pages/StartupMVP";
import SeoServices from "./pages/SeoServices";
import DigitalMarketing from "./pages/DigitalMarketing";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminPostEditor from "./pages/admin/AdminPostEditor";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminComments from "./pages/admin/AdminComments";

const BASE_URL = "https://devzore.com";

const seoData = {
  "/": {
    title:
      "DevZore | Software Development, Web, SaaS & Mobile App Agency",
    description:
      "DevZore builds high-performance websites, SaaS platforms, mobile apps and custom software solutions for startups and businesses worldwide.",
  },

  "/allservices": {
    title:
      "Software Development Services | Web, Mobile & SaaS | DevZore",
    description:
      "Explore DevZore software development services including web applications, MERN development, mobile apps, SaaS, UI/UX, SEO and digital solutions.",
  },

  "/web-development": {
    title:
      "Web Development Services | Custom Websites & Web Apps | DevZore",
    description:
      "DevZore builds fast, secure and scalable websites and web applications using modern technologies for startups and businesses worldwide.",
  },

  "/mobile-apps": {
    title:
      "Mobile App Development Services | iOS & Android | DevZore",
    description:
      "Build modern iOS, Android and cross-platform mobile applications with DevZore for startups, businesses and digital products.",
  },

  "/ecommerce": {
    title:
      "E-Commerce Development Services | Online Stores | DevZore",
    description:
      "Build scalable e-commerce websites with secure checkout, product management, inventory and modern shopping experiences.",
  },

  "/backend-api": {
    title:
      "Backend & API Development | Node.js & Express | DevZore",
    description:
      "Secure and scalable backend development using Node.js, Express, REST APIs and modern server-side technologies.",
  },

  "/mern-stack-development": {
    title:
      "MERN Stack Development Services | React & Node.js | DevZore",
    description:
      "DevZore builds scalable MERN applications using MongoDB, Express, React and Node.js for businesses and SaaS products.",
  },

  "/saas-product-development": {
    title:
      "SaaS Product Development Company | DevZore",
    description:
      "Build scalable SaaS products with modern architecture, dashboards, authentication, APIs, subscriptions and cloud-ready infrastructure.",
  },

  "/reactdevelopment": {
    title:
      "React Development Services | React.js Development | DevZore",
    description:
      "Professional React development for fast, scalable web applications, dashboards and modern digital products.",
  },

  "/ui-ux-design": {
    title:
      "UI/UX Design Services | Figma & Product Design | DevZore",
    description:
      "UI/UX design services for web and mobile products including research, wireframes, Figma interfaces, prototypes and design systems.",
  },

  "/maintenance": {
    title:
      "Website Maintenance & Support Services | DevZore",
    description:
      "Website maintenance and technical support including bug fixes, security updates, performance improvements and ongoing management.",
  },

  "/startup-mvp": {
    title:
      "Startup MVP Development | Build & Launch Your MVP | DevZore",
    description:
      "Turn your startup idea into a production-ready MVP with modern UI, scalable architecture, APIs and reliable technology.",
  },

  "/seo-services": {
    title:
      "SEO Services | Technical SEO & Organic Growth | DevZore",
    description:
      "Improve search visibility with technical SEO, on-page optimization, content strategy and performance-focused SEO services.",
  },

  "/digital-marketing": {
    title:
      "Digital Marketing Services | Growth Marketing | DevZore",
    description:
      "Grow your business with digital marketing, social media, Google Ads, Meta Ads and performance-focused campaign strategies.",
  },

  "/about": {
    title:
      "About DevZore | Software Development Agency",
    description:
      "Learn about DevZore, a software development agency building modern websites, SaaS products, mobile apps and digital solutions.",
  },

  "/contact": {
    title:
      "Contact DevZore | Start Your Software Project",
    description:
      "Contact DevZore to discuss your website, SaaS platform, mobile app, UI/UX or custom software development project.",
  },

  "/blog": {
    title:
      "DevZore Blog | Software, Web Development & SEO",
    description:
      "Read practical insights about software development, React, MERN, SaaS, web development, SEO and digital technology.",
  },

  "/privacy-policy": {
    title: "Privacy Policy | DevZore",
    description:
      "Read the DevZore privacy policy and learn how information is collected, used and protected.",
  },

  "/terms-and-conditions": {
    title: "Terms & Conditions | DevZore",
    description:
      "Read the DevZore terms and conditions for software development, digital services and support.",
  },
};

function SEOManager() {
  const { pathname } = useLocation();

  if (pathname.startsWith("/admin")) {
    return (
      <Helmet>
        <title>DevZore Admin</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Helmet>
    );
  }

  // BlogDetails should eventually provide its own dynamic SEO.
  if (pathname.startsWith("/blog/")) {
    return null;
  }

  const page = seoData[pathname];

  if (!page) {
    return (
      <Helmet>
        <title>Page Not Found | DevZore</title>
        <meta
          name="description"
          content="The requested page could not be found on DevZore."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
    );
  }

  const canonical =
    pathname === "/" ? BASE_URL : `${BASE_URL}${pathname}`;

  return (
    <Helmet>
      <html lang="en" />

      <title>{page.title}</title>

      <meta
        name="description"
        content={page.description}
      />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <link
        rel="canonical"
        href={canonical}
      />

      <meta
        property="og:title"
        content={page.title}
      />

      <meta
        property="og:description"
        content={page.description}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="DevZore"
      />

      <meta
        property="og:locale"
        content="en_US"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={page.title}
      />

      <meta
        name="twitter:description"
        content={page.description}
      />
    </Helmet>
  );
}

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

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">
        Error 404
      </p>

      <h1 className="mt-3 text-5xl sm:text-7xl font-black">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-lg text-[var(--text-muted)]">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700"
      >
        Back to Home
      </Link>
    </div>
  );
}

function AppContent({ isDark, toggleTheme }) {
  const { pathname } = useLocation();

  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <div
      className={`
        min-h-screen
        font-sans
        flex
        flex-col
        transition-colors
        duration-300
        ${
          isDark
            ? "bg-[#030303] text-white selection:bg-purple-500/30"
            : "bg-[#fafafa] text-[#111827] selection:bg-purple-200"
        }
      `}
    >
      {!isAdminRoute && (
        <Navbar
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
      )}

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero isDark={isDark} />
                <TrustBar isDark={isDark} />
                <Services isDark={isDark} />
                <Projects isDark={isDark} />
                <WhyUs isDark={isDark} />
                <Process isDark={isDark} />
                <TechStack isDark={isDark} />
                <Testimonials isDark={isDark} />
                <FAQ isDark={isDark} />
              </>
            }
          />

          <Route
            path="/allservices"
            element={<AllServices isDark={isDark} />}
          />

          <Route
            path="/web-development"
            element={<WebDevelopment isDark={isDark} />}
          />

          <Route
            path="/mobile-apps"
            element={<MobileApp isDark={isDark} />}
          />

          <Route
            path="/ecommerce"
            element={<ECommerce isDark={isDark} />}
          />

          <Route
            path="/backend-api"
            element={<BackendApi isDark={isDark} />}
          />

          <Route
            path="/mern-stack-development"
            element={<MernStackDevelopment isDark={isDark} />}
          />

          <Route
            path="/saas-product-development"
            element={<SaaSProductDevelopment isDark={isDark} />}
          />

          <Route
            path="/reactdevelopment"
            element={<ReactDevelopment isDark={isDark} />}
          />

          <Route
            path="/ui-ux-design"
            element={<UiUxDesign isDark={isDark} />}
          />

          <Route
            path="/maintenance"
            element={<Maintenance isDark={isDark} />}
          />

          <Route
            path="/startup-mvp"
            element={<StartupMVP isDark={isDark} />}
          />

          <Route
            path="/seo-services"
            element={<SeoServices isDark={isDark} />}
          />

          <Route
            path="/digital-marketing"
            element={<DigitalMarketing isDark={isDark} />}
          />

          <Route
            path="/about"
            element={<About isDark={isDark} />}
          />

          <Route
            path="/contact"
            element={<Contact isDark={isDark} />}
          />

          <Route
            path="/blog"
            element={<BlogPost isDark={isDark} />}
          />

          <Route
            path="/blog/:slug"
            element={<BlogDetails isDark={isDark} />}
          />

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy isDark={isDark} />}
          />

          <Route
            path="/terms-and-conditions"
            element={<Terms isDark={isDark} />}
          />

          <Route
            path="/admin/login"
            element={<AdminLogin isDark={isDark} />}
          />

          <Route
            path="/admin"
            element={
              <AdminLayout
                isDark={isDark}
                toggleTheme={toggleTheme}
              />
            }
          >
            <Route
              index
              element={<Navigate to="dashboard" replace />}
            />

            <Route
              path="dashboard"
              element={<AdminDashboard isDark={isDark} />}
            />

            <Route
              path="posts"
              element={<AdminPosts isDark={isDark} />}
            />

            <Route
              path="posts/new"
              element={<AdminPostEditor isDark={isDark} />}
            />

            <Route
              path="posts/edit/:id"
              element={<AdminPostEditor isDark={isDark} />}
            />

            <Route
              path="categories"
              element={<AdminCategories isDark={isDark} />}
            />

            <Route
              path="comments"
              element={<AdminComments isDark={isDark} />}
            />
          </Route>

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      {!isAdminRoute && <Footer isDark={isDark} />}
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return localStorage.getItem("devzore-theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;

    html.classList.toggle("dark", isDark);

    localStorage.setItem(
      "devzore-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />

      <SEOManager />

      <AppContent
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
    </BrowserRouter>
  );
}

export default App;