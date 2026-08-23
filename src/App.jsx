import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
  Navigate,
} from "react-router-dom";

import AuthContextProvider from "./context/AuthContext";

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

const baseUrl = "https://devzore.com";

const defaultGeo = {
  region: "PK-IS",
  placename: "Islamabad, Pakistan",
  position: "33.6844;73.0479",
};

const SEOManager = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    const routeSeoData = {
      "/": {
        title:
          "DevZore International | Web Development, SaaS & Software Engineering",
        desc:
          "DevZore is a software engineering agency serving clients worldwide with custom web development, MERN stack applications, SaaS products, mobile apps, UI/UX design, SEO and digital solutions.",
        keywords:
          "software development company, web development agency, web development company, MERN stack development, React development, Node.js development, SaaS development, mobile app development, software engineering agency, custom software development, digital solutions, Pakistan software company, global software agency",
      },

      "/allservices": {
        title:
          "Software Development Services | Web, Mobile, SaaS & Digital Solutions | DevZore",
        desc:
          "Explore DevZore's software development services including custom web applications, MERN stack development, mobile apps, SaaS products, UI/UX design, SEO and digital marketing for businesses worldwide.",
        keywords:
          "software development services, web development services, mobile app development, SaaS development, MERN development, UI UX design, SEO services, digital marketing, custom software solutions",
      },

      "/web-development": {
        title:
          "Custom Web Development Services | React, Next.js & Full-Stack | DevZore",
        desc:
          "Custom web development services for startups and businesses worldwide. DevZore builds fast, scalable and secure React, Next.js and full-stack web applications.",
        keywords:
          "web development company, custom web development, web development services, React web development, Next.js development, full stack development, responsive web development, business website development",
      },

      "/mobile-apps": {
        title:
          "Mobile App Development Services | iOS & Android | DevZore",
        desc:
          "Build scalable iOS and Android mobile applications with DevZore. We develop modern cross-platform mobile apps for startups and businesses worldwide.",
        keywords:
          "mobile app development, mobile application development, iOS app development, Android app development, React Native development, cross platform app development",
      },

      "/ecommerce": {
        title:
          "E-Commerce Development Services | Custom Online Stores | DevZore",
        desc:
          "Custom e-commerce development for businesses worldwide with modern storefronts, secure checkout, product management, inventory and scalable backend systems.",
        keywords:
          "ecommerce development, ecommerce website development, online store development, custom ecommerce website, ecommerce software development, MERN ecommerce",
      },

      "/backend-api": {
        title:
          "Backend & API Development Services | Node.js & Express | DevZore",
        desc:
          "Secure and scalable backend and API development using Node.js, Express, REST APIs and modern server-side technologies for web and mobile applications.",
        keywords:
          "backend development, API development, Node.js development, Express.js development, REST API development, scalable backend development, custom API development",
      },

      "/mern-stack-development": {
        title:
          "MERN Stack Development Company | MongoDB, Express, React & Node.js | DevZore",
        desc:
          "DevZore provides full-stack MERN development for scalable web applications, SaaS platforms, dashboards and custom business software for clients worldwide.",
        keywords:
          "MERN stack development, MERN development company, MERN stack developer, MongoDB Express React Node, full stack JavaScript development, MERN web development",
      },

      "/saas-product-development": {
        title:
          "SaaS Product Development Company | Custom SaaS Solutions | DevZore",
        desc:
          "End-to-end SaaS product development including architecture, authentication, dashboards, subscriptions, APIs, multi-tenant systems and cloud-ready applications.",
        keywords:
          "SaaS development company, SaaS product development, SaaS application development, custom SaaS development, SaaS software development, startup SaaS development",
      },

      "/reactdevelopment": {
        title:
          "React.js Development Services | React Development Company | DevZore",
        desc:
          "Professional React.js development for fast, scalable and maintainable web applications, dashboards and business platforms.",
        keywords:
          "React development, React.js development company, React developer, React web development, frontend development, React application development",
      },

      "/ui-ux-design": {
        title:
          "UI/UX Design Services | Web & App Product Design | DevZore",
        desc:
          "User-focused UI/UX design services including wireframes, user flows, prototypes and modern interfaces designed for web and mobile products.",
        keywords:
          "UI UX design services, UI design agency, UX design agency, Figma design, website UI design, mobile app UI UX, product design",
      },

      "/maintenance": {
        title:
          "Website Maintenance & Support Services | DevZore",
        desc:
          "Reliable website maintenance and technical support including bug fixes, security updates, performance improvements and ongoing website management.",
        keywords:
          "website maintenance, website support, web maintenance services, website security updates, website bug fixing, technical support",
      },

      "/startup-mvp": {
        title:
          "Startup MVP Development Company | Build & Launch Your MVP | DevZore",
        desc:
          "Turn your startup idea into a working MVP with scalable architecture, modern UI, backend APIs and production-ready technology.",
        keywords:
          "MVP development company, startup MVP development, MVP software development, startup app development, SaaS MVP development, product development",
      },

      "/seo-services": {
        title:
          "SEO Services | Technical SEO & Organic Growth Agency | DevZore",
        desc:
          "Professional SEO services covering technical SEO, on-page optimization, content strategy, website performance, search visibility and long-term organic growth.",
        keywords:
          "SEO services, SEO agency, search engine optimization, technical SEO, on page SEO, SEO company, organic growth, website SEO services",
      },

      "/digital-marketing": {
        title:
          "Digital Marketing Services | Performance & Growth Marketing | DevZore",
        desc:
          "Data-driven digital marketing services including social media marketing, paid advertising, Google Ads, Meta Ads, campaign strategy and performance optimization.",
        keywords:
          "digital marketing services, digital marketing agency, performance marketing, social media marketing, Meta Ads, Google Ads, online marketing",
      },

      "/about": {
        title:
          "About DevZore | Software Development & Digital Solutions Agency",
        desc:
          "Learn about DevZore, a software development and digital solutions agency building scalable websites, web applications, SaaS products and mobile applications for clients worldwide.",
        keywords:
          "about DevZore, DevZore software agency, software development agency, web development agency, software company Pakistan, global software agency",
      },

      "/contact": {
        title:
          "Contact DevZore | Hire a Software Development Agency",
        desc:
          "Contact DevZore for custom web development, mobile apps, SaaS products, UI/UX design, SEO and digital solutions. Start your project with our software engineering team.",
        keywords:
          "contact software company, hire web developer, hire software development agency, web development company contact, software development services",
      },

      "/blog": {
        title:
          "DevZore Blog | Web Development, SaaS, SEO & Technology Insights",
        desc:
          "Explore DevZore's technology blog covering web development, MERN stack, React, Node.js, SaaS, SEO, digital marketing and software engineering insights.",
        keywords:
          "web development blog, software development blog, MERN blog, React blog, Node.js blog, SaaS blog, SEO blog, technology insights",
      },

      "/privacy-policy": {
        title: "Privacy Policy | DevZore",
        desc:
          "Read DevZore's privacy policy covering how information is collected, used and protected.",
      },

      "/terms-and-conditions": {
        title: "Terms & Conditions | DevZore",
        desc:
          "Read DevZore's terms and conditions for software development, digital services, projects and support.",
      },
    };

    const adminSeoData = {
      "/admin/login": {
        title: "Admin Login | DevZore",
      },
      "/admin": {
        title: "Admin Dashboard | DevZore",
      },
      "/admin/dashboard": {
        title: "Admin Dashboard | DevZore",
      },
      "/admin/posts": {
        title: "Manage Posts | DevZore Admin",
      },
      "/admin/posts/new": {
        title: "Create Post | DevZore Admin",
      },
      "/admin/categories": {
        title: "Manage Categories | DevZore Admin",
      },
      "/admin/comments": {
        title: "Manage Comments | DevZore Admin",
      },
    };

    if (currentPath.startsWith("/admin")) {
      const adminData =
        adminSeoData[currentPath] || {
          title: "Admin | DevZore",
        };

      document.title = adminData.title;

      let robots = document.querySelector('meta[name="robots"]');

      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }

      robots.content = "noindex, nofollow";

      return;
    }

    const isBlogPost =
      currentPath.startsWith("/blog/") &&
      currentPath !== "/blog/";

    const currentData =
      routeSeoData[currentPath] || {
        title: "Page Not Found | DevZore",
        desc:
          "The requested page could not be found. Visit DevZore to explore our software development and digital solutions.",
        keywords:
          "DevZore, software development, web development, digital solutions",
      };

    const geo = {
      ...defaultGeo,
      ...(currentData.geo || {}),
    };

    const pageUrl =
      currentPath === "/"
        ? baseUrl
        : `${baseUrl}${currentPath}`;

    const title = isBlogPost
      ? "DevZore Blog Article | Web Development & Technology Insights"
      : currentData.title;

    const description = isBlogPost
      ? "Read this DevZore technology article for practical insights into web development, software engineering, SaaS and digital technology."
      : currentData.desc;

    document.title = title;

    const setMeta = (selector, attributes, content) => {
      let tag = document.head.querySelector(selector);

      if (!tag) {
        tag = document.createElement("meta");

        Object.entries(attributes).forEach(([key, value]) => {
          tag.setAttribute(key, value);
        });

        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    const setLink = (selector, attributes) => {
      let tag = document.head.querySelector(selector);

      if (!tag) {
        tag = document.createElement("link");

        Object.entries(attributes).forEach(([key, value]) => {
          tag.setAttribute(key, value);
        });

        document.head.appendChild(tag);
      } else {
        Object.entries(attributes).forEach(([key, value]) => {
          tag.setAttribute(key, value);
        });
      }
    };

    setMeta(
      'meta[name="description"]',
      { name: "description" },
      description
    );

    setMeta(
      'meta[name="keywords"]',
      { name: "keywords" },
      currentData.keywords ||
        "DevZore, software development, web development, software engineering"
    );

    setMeta(
      'meta[name="author"]',
      { name: "author" },
      "DevZore"
    );

    setMeta(
      'meta[name="robots"]',
      { name: "robots" },
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    setMeta(
      'meta[name="googlebot"]',
      { name: "googlebot" },
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    setMeta(
      'meta[name="geo.region"]',
      { name: "geo.region" },
      geo.region
    );

    setMeta(
      'meta[name="geo.placename"]',
      { name: "geo.placename" },
      geo.placename
    );

    setMeta(
      'meta[name="geo.position"]',
      { name: "geo.position" },
      geo.position
    );

    setMeta(
      'meta[name="ICBM"]',
      { name: "ICBM" },
      geo.position.replace(";", ", ")
    );

    setMeta(
      'meta[property="og:title"]',
      { property: "og:title" },
      title
    );

    setMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      description
    );

    setMeta(
      'meta[property="og:url"]',
      { property: "og:url" },
      pageUrl
    );

    setMeta(
      'meta[property="og:type"]',
      { property: "og:type" },
      isBlogPost ? "article" : "website"
    );

    setMeta(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      "DevZore"
    );

    setMeta(
      'meta[property="og:locale"]',
      { property: "og:locale" },
      "en_US"
    );

    setMeta(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image"
    );

    setMeta(
      'meta[name="twitter:title"]',
      { name: "twitter:title" },
      title
    );

    setMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      description
    );

    setLink('link[rel="canonical"]', {
      rel: "canonical",
      href: pageUrl,
    });

    let structuredData = document.getElementById(
      "devzore-structured-data"
    );

    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "devzore-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          name: "DevZore",
          url: baseUrl,
          description:
            "Software development and digital solutions agency serving clients worldwide.",
          areaServed: "Worldwide",
          knowsAbout: [
            "Web Development",
            "MERN Stack Development",
            "React Development",
            "Node.js Development",
            "SaaS Product Development",
            "Mobile App Development",
            "E-Commerce Development",
            "UI/UX Design",
            "SEO",
            "Digital Marketing",
            "Software Engineering",
          ],
        },
        {
          "@type": "ProfessionalService",
          "@id": `${baseUrl}/#business`,
          name: "DevZore",
          url: baseUrl,
          description:
            "Custom software development, web development, SaaS, mobile app, SEO and digital solutions for businesses worldwide.",
          areaServed: [
            {
              "@type": "GeoShape",
              name: "Worldwide",
            },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Islamabad",
            addressCountry: "PK",
          },
          knowsAbout: [
            "Custom Software Development",
            "Web Development",
            "MERN Stack",
            "React",
            "Node.js",
            "SaaS",
            "Mobile App Development",
            "E-Commerce",
            "UI/UX Design",
            "SEO",
            "Digital Marketing",
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          url: baseUrl,
          name: "DevZore",
          description:
            "Software engineering and digital solutions for businesses worldwide.",
          publisher: {
            "@id": `${baseUrl}/#organization`,
          },
          inLanguage: "en-US",
        },
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: title,
          description,
          isPartOf: {
            "@id": `${baseUrl}/#website`,
          },
          about: {
            "@id": `${baseUrl}/#organization`,
          },
          inLanguage: "en-US",
        },
      ],
    };

    structuredData.textContent = JSON.stringify(schema);
  }, [location.pathname]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[var(--bg-primary)]">
      <h1 className="text-9xl font-black text-purple-600">
        404
      </h1>

      <p className="text-2xl font-bold mt-4 text-[var(--text-primary)]">
        Page Not Found
      </p>

      <p className="text-[var(--text-muted)] mt-2 mb-8">
        The page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("devzore-theme");

    if (saved) {
      return saved === "dark";
    }

    return false;
  });

  useEffect(() => {
    const html = document.documentElement;

    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("devzore-theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("devzore-theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Router>
      <ScrollToTop />
      <SEOManager />

      <AppContent
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
    </Router>
  );
}

const AppContent = ({
  isDark,
  toggleTheme,
}) => {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith("/admin");

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
            element={
              <MernStackDevelopment isDark={isDark} />
            }
          />

          <Route
            path="/saas-product-development"
            element={
              <SaaSProductDevelopment isDark={isDark} />
            }
          />

          <Route
            path="/reactdevelopment"
            element={
              <ReactDevelopment isDark={isDark} />
            }
          />

          <Route
            path="/ui-ux-design"
            element={
              <UiUxDesign isDark={isDark} />
            }
          />

          <Route
            path="/maintenance"
            element={
              <Maintenance isDark={isDark} />
            }
          />

          <Route
            path="/startup-mvp"
            element={
              <StartupMVP isDark={isDark} />
            }
          />

          <Route
            path="/seo-services"
            element={
              <SeoServices isDark={isDark} />
            }
          />

          <Route
            path="/digital-marketing"
            element={
              <DigitalMarketing isDark={isDark} />
            }
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
            element={
              <BlogDetails isDark={isDark} />
            }
          />

          <Route
            path="/privacy-policy"
            element={
              <PrivacyPolicy isDark={isDark} />
            }
          />

          <Route
            path="/terms-and-conditions"
            element={
              <Terms isDark={isDark} />
            }
          />

          <Route
            path="/admin/login"
            element={
              <AdminLogin isDark={isDark} />
            }
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
              element={
                <Navigate
                  to="dashboard"
                  replace
                />
              }
            />

            <Route
              path="dashboard"
              element={
                <AdminDashboard
                  isDark={isDark}
                />
              }
            />

            <Route
              path="posts"
              element={
                <AdminPosts
                  isDark={isDark}
                />
              }
            />

            <Route
              path="posts/new"
              element={
                <AdminPostEditor
                  isDark={isDark}
                />
              }
            />

            <Route
              path="posts/edit/:id"
              element={
                <AdminPostEditor
                  isDark={isDark}
                />
              }
            />

            <Route
              path="categories"
              element={
                <AdminCategories
                  isDark={isDark}
                />
              }
            />

            <Route
              path="comments"
              element={
                <AdminComments
                  isDark={isDark}
                />
              }
            />
          </Route>

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      {!isAdminRoute && (
        <Footer isDark={isDark} />
      )}
    </div>
  );
};

export default function RootApp() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}