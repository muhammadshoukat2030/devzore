import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

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

// Scroll To Top
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// 404 Page
const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-9xl font-black text-purple-600">404</h1>
    <p className="text-2xl font-bold mt-4">Page Not Found</p>
    <a href="/" className="mt-8 px-6 py-3 bg-purple-600 rounded-lg font-bold hover:bg-purple-700 transition">
      Back to Home
    </a>
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />

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

            {/* SERVICES (ALL LOWERCASE SEO FRIENDLY) */}
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

export default App