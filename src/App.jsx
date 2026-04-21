import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrustBar from './components/TrustBar';

// Sections (Home Page Components)
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import WhyUs from "./sections/WhyUs";
import Process from './sections/Process';
import TechStack from './sections/TechStack';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';

// Pages (Separate Routes)
import Contact from './pages/Contact'; 
import Blogs from './pages/BlogPost'; // Blogs page import yahan add kiya gaya hai

function App() {
  return (
    <Router>
      <div className="bg-[#000000b5] min-h-screen text-white selection:bg-purple-500/30 font-sans">
        <Navbar />
        <main>
          <Routes>
            {/* --- Home Page Route --- */}
            <Route path="/" element={
              <>
                <Hero />
                <TrustBar />
                <Services />
                <Projects />
                <WhyUs />
                <Process />
                <TechStack />
                <Pricing />
                <Testimonials />
                <FAQ />
              </>
            } />
            
            {/* --- Contact Page Route --- */}
            <Route path="/contact" element={<Contact />} />

            {/* --- Blogs Page Route (SEO Optimized) --- */}
            <Route path="/BlogPost" element={<Blogs />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;