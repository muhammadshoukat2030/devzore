import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TrustBar from './components/TrustBar'

// Sections
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import WhyUs from "./sections/WhyUs"
import Process from './sections/Process'
import TechStack from './sections/TechStack'
// import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'

// Pages
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/BlogPost'

// Service Pages
import AllServices from './pages/AllServices'
import WebDevelopment from './pages/WebDevelopment'
import MobileApp from './pages/MobileApp'
import ECommerce from './pages/ECommerce'
import BackendApi from './pages/BackendApi'
import MernStackDevelopment from './pages/MernStackDevelopment'
import SaaSProductDevelopment from './pages/SaaSProductDevelopment'
import ReactDevelopment from './pages/ReactDevelopment'
import UiUxDesign from './pages/UiUxDesign'
import Maintenance from './pages/Maintenance'
import StartupMVP from './pages/StartupMVP'

// Extra Pages
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

// ✅ SUPERCHARGED SEO & SOCIAL GRAPH ENGINE: Fixes missing Open Graph & Twitter Card warnings instantly.
const SEOManager = () => {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = "https://devzore.com";
    const defaultImage = `${baseUrl}/logo1.png`;
    
    // Exact mapping tracking all custom production routes
    const routeSeoData = {
      "/": {
        title: "DevZore International | MERN Stack & Software Engineering Agency",
        desc: "Premium Software Engineering Agency specializing in high-performance web development, scalable SaaS engines, and enterprise software solutions."
      },
      "/allservices": {
        title: "Our Services | Software Architecture & Product Engineering | DevZore",
        desc: "Explore our full suite of digital solutions, from MERN stack engineering to modern UI/UX workflows designed for global performance."
      },
      "/web-development": {
        title: "Custom Web Development Services | Next.js & React | DevZore",
        desc: "High-speed, scalable, and secure custom web applications engineered with precision to drive operational business metrics."
      },
      "/mobile-apps": {
        title: "Cross-Platform Mobile App Development | iOS & Android | DevZore",
        desc: "Native-grade hybrid mobile application ecosystems built using React Native and secure optimized mobile microservices architectures."
      },
      "/ecommerce": {
        title: "Enterprise E-Commerce Platforms & Digital Scale | DevZore",
        desc: "High-conversion architecture engineered with advanced payment gateways, fluid responsive funnels, and real-time analytical capabilities."
      },
      "/backend-api": {
        title: "Robust Backend Engineering & Scalable API Systems | DevZore",
        desc: "Secure RESTful and GraphQL API layers built on Node.js microservices with bulletproof multi-layer token security."
      },
      "/mern-stack-development": {
        title: "Full-Stack MERN Stack Engineering Specialists | DevZore",
        desc: "Production-grade single page architectures deployed natively on MongoDB, Express.js, React.js, and Node.js infrastructure."
      },
      "/saas-product-development": {
        title: "SaaS Product Development & Cloud Architecture Engines | DevZore",
        desc: "End-to-end multi-tenant SaaS application development featuring scalable subscription engines, modular dashboards, and cloud scaling."
      },
      "/reactdevelopment": {
        title: "Advanced React.js & Next.js Performance Optimization | DevZore",
        desc: "Component-driven development prioritizing optimized bundle assets, modern custom hooks, and state trees."
      },
      "/ui-ux-design": {
        title: "Premium User Experience UI/UX & Interaction Design | DevZore",
        desc: "Strategic conversion-oriented UI layouts built on comprehensive wireframing paradigms and interactive high-fidelity wireframes."
      },
      "/maintenance": {
        title: "24/7 Software Maintenance & Technical Infrastructure DevOps | DevZore",
        desc: "Continuous deployment optimization, security profiling adjustments, cloud environment health tracking, and codebase scaling."
      },
      "/startup-mvp": {
        title: "Rapid Startup MVP Development & Scalable Verification | DevZore",
        desc: "Accelerated development execution delivering core high-value features built cleanly for continuous enterprise scaling."
      },
      "/about": {
        title: "About Us | DevZore International Team & Core Mission",
        desc: "Discover the elite product engineering principles guiding our core team across international delivery nodes."
      },
      "/contact": {
        title: "Contact Our Engineering Specialists | Project Estimates | DevZore",
        desc: "Initiate project discovery phases. Connect with our principal cloud architects to secure specialized technical estimations."
      },
      "/blog": {
        title: "Chronicle Global Tech Insights | Official Development Blog | DevZore",
        desc: "In-depth modern technical assessments evaluating structural software strategies, scalable engineering practices, and framework variations."
      },
      "/privacy-policy": {
        title: "Privacy Policy | Legal Data Protocols | DevZore International",
        desc: "Official processing documentation governing secure analytical metrics, storage provisions, and regulatory international frameworks."
      },
      "/terms-and-conditions": {
        title: "Terms and Conditions | Software Provision Agreements | DevZore",
        desc: "Contractual compliance outlines governing delivered source code ownership, intellectual protections, and support agreements."
      }
    };

    const currentPath = location.pathname;
    const currentData = routeSeoData[currentPath] || {
      title: "404 Page Not Found | DevZore International",
      desc: "Requested software pipeline resource cannot be correctly resolved within our primary architectural server mapping."
    };

    // 1. Title Tag Update
    document.title = currentData.title;

    // 2. Meta Description Injection
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = currentData.desc;

    // 3. Canonical Tag Injection
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `${baseUrl}${currentPath}`;

    // Helper function to set or create meta tags dynamically
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // 4. Dynamic Open Graph (OG) Social Tags Injection
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', `${baseUrl}${currentPath}`);
    setMetaTag('property', 'og:title', currentData.title);
    setMetaTag('property', 'og:description', currentData.desc);
    setMetaTag('property', 'og:image', defaultImage);

    // 5. Dynamic X / Twitter Cards Tags Injection
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:url', `${baseUrl}${currentPath}`);
    setMetaTag('name', 'twitter:title', currentData.title);
    setMetaTag('name', 'twitter:description', currentData.desc);
    setMetaTag('name', 'twitter:image', defaultImage);

  }, [location]);

  return null;
};

// Scroll To Top Actions
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// 404 Page Component
const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-9xl font-black text-purple-600">404</h1>
    <p className="text-2xl font-bold mt-4">Page Not Found</p>
    <Link to="/" className="mt-8 px-6 py-3 bg-purple-600 rounded-lg font-bold hover:bg-purple-700 transition">
      Back to Home
    </Link>
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEOManager />

      <div className="bg-[#030303] min-h-screen text-white selection:bg-purple-500/30 font-sans flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* HOME */}
            <Route path="/" element={
              <>
                <Hero />
                <TrustBar />
                <Services />
                <Projects />
                <WhyUs />
                <Process />
                <TechStack />
                {/* <Pricing /> */}
                <Testimonials />
                <FAQ />
              </>
            } />

            {/* SERVICES */}
            <Route path="/allservices" element={<AllServices />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/mobile-apps" element={<MobileApp />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/backend-api" element={<BackendApi />} />
            <Route path="/mern-stack-development" element={<MernStackDevelopment />} />
            <Route path="/saas-product-development" element={<SaaSProductDevelopment />} />
            <Route path="/reactdevelopment" element={<ReactDevelopment />} />
            <Route path="/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/startup-mvp" element={<StartupMVP />} />

            {/* OTHER PAGES */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blogs />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App;