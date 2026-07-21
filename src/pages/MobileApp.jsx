import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { assets } from '../assets/assets';
import ServiceGalleryTemplate from '../components/ServiceGalleryTemplate';

import {
  Smartphone,
  Layers,
  Zap,
  ArrowRight,
  ChevronLeft,
  Database,
  Layout,
  ShieldCheck,
  Code2,
  Plus,
  ExternalLink,
  Settings,
  Cpu,
  Rocket,
  TrendingUp,
  AppWindow,
  Users
} from 'lucide-react';

const MobileApp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How much does mobile app development cost?",
      answer: "A simple MVP with core features built in React Native typically costs between $20,000 and $50,000. A feature-rich consumer app with a custom backend, complex UI, and third-party integrations can range from $60,000 to $150,000 or more."
    },
    {
      question: "How long does it take to build a mobile app?",
      answer: "An MVP with focused features typically takes 12 to 16 weeks from kickoff to App Store submission. More complex apps with custom backends can take 5 to 9 months."
    },
    {
      question: "Does DevZore build the backend as well as the app?",
      answer: "Yes. Most mobile apps need a server-side API for data storage, authentication, push notifications, and business logic. We build and maintain the full backend as part of the mobile app engagement."
    },
    {
      question: "Can you update an app that another team built?",
      answer: "Yes. We review the existing codebase, provide an honest assessment of its quality and maintainability, and take over development."
    }
  ];

  return (
    <>
    
      <Helmet>
        <title>Cross-Platform Mobile App Development | iOS & Android | DevZore</title>
        <meta name="description" content="High-end React Native engineering delivering pixel-perfect UI/UX, fast performance, and robust hardware integration on both iOS and Android." />
        <link rel="canonical" href="https://devzore.com/mobile-apps" />
        <meta property="og:title" content="Cross-Platform Mobile App Development | iOS & Android | DevZore" />
        <meta property="og:description" content="Seamless native-grade applications with secure backends deployed globally on App Stores." />
        <meta property="og:url" content="https://devzore.com/mobile-apps" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-10 overflow-x-hidden">

        {/* --- NAVIGATION --- */}
        <div className="max-w-7xl mx-auto px-6 pt-30 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <Link to="/contact">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
              Next-Gen Mobility
            </div>
          </Link>
        </div>

        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-1 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Mobile App <br /> Development <span className="text-purple-500">for iOS & Android </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-300 italic">
              Experiences That Users Actually Love
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed font-medium">
              A great mobile app is more than a small-screen version of your website. It is a product that feels right in someone's hand — fast, intuitive, and built specifically for the way people interact with a phone. DevZore builds mobile applications that users return to because the experience is genuinely good.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold text-sm flex items-center gap-2 group transition-all shadow-xl shadow-purple-500/20 active:scale-95">
                  Start Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">iOS • Android • Cross-Platform</span>
              </div>
            </div>
          </div>

          <div className="relative group lg:justify-self-end hidden lg:block">
            <div className="absolute -inset-10 bg-purple-500/10 blur-[120px] rounded-full"></div>
            <div className="relative bg-[#0c0c0c] border border-gray-800/50 rounded-[3rem] p-4 shadow-2xl">
              <img
                src={assets.mobile_dev_ios}
                alt="Mobile Development"
                className="rounded-[2.5rem] opacity-80 group-hover:opacity-100 transition-opacity duration-500 w-[500px]"
              />
              <div className="absolute top-20 -right-12 bg-[#111] border border-white/10 p-5 rounded-2xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg"><Smartphone size={20} className="text-purple-500" /></div>
                  <div>
                    <div className="text-xs font-bold">Native Performance</div>
                    <div className="text-[10px] text-gray-500">60FPS Animations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- STRATEGY SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">Native vs. Cross-Platform <span className="text-purple-500 font-normal">— We Help You Choose Correctly</span></h2>
            <p className="text-gray-400 max-w-3xl text-sm md:text-base leading-relaxed">
              The most important mobile development decision you will make is the platform strategy. The wrong choice costs you either money or performance — sometimes both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <ExpertiseCard
              icon={<Code2 className="text-blue-400" size={24} />}
              title="React Native — One Codebase, Both Platforms"
              desc="React Native lets a single development team ship an iOS and Android app from one shared JavaScript codebase. For most businesses, this means roughly 60 to 80 percent cost reduction compared to building two separate native apps."
              borderColor="border-l-blue-400"
            />
            <ExpertiseCard
              icon={<Zap className="text-orange-400" size={24} />}
              title="Native iOS Development with Swift"
              desc="When your app genuinely requires deep Apple platform integration — HealthKit, ARKit, CoreML, Face ID, CarPlay, or complex custom animations — native Swift development is worth the investment."
              borderColor="border-l-orange-400"
            />
            <ExpertiseCard
              icon={<Cpu className="text-green-400" size={24} />}
              title="Native Android Development with Kotlin"
              desc="Full access to the Android ecosystem with Kotlin: background services, complex device integrations, Google Play compliance, material design, and the kind of reliability that enterprise Android users expect."
              borderColor="border-l-green-400"
            />
            <ExpertiseCard
              icon={<Layers className="text-purple-500" size={24} />}
              title="Flutter for Performance-Critical Cross-Platform Apps"
              desc="Flutter produces genuinely beautiful cross-platform UIs with native-level performance for complex animations and rendering. We use it when React Native's JavaScript bridge becomes a limitation."
              borderColor="border-l-purple-500"
            />
          </div>
        </section>

        <div className="bg-black">
          <ServiceGalleryTemplate pageKey="MobileApp" />
        </div>

        {/* --- SERVICES SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Our Mobile App Development <span className="text-purple-500 font-normal">Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">Everything you need to go from an idea to the top of the App Store charts.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<Layout />} title="Product Strategy and UX Research" desc="Before design, we research your users. Competitive analysis, user interviews, journey mapping, and information architecture review." />
            <ServiceCard icon={<Database />} title="Mobile UI/UX Design" desc="High-fidelity Figma prototypes with real interactions that you can test on your actual phone before development begins. We follow platform guidelines." />
            <ServiceCard icon={<TrendingUp />} title="Backend API and Infrastructure" desc="Most mobile apps need a server. We build the Node.js or Python backend, REST or GraphQL API, push notification infrastructure, and database." />
            <ServiceCard icon={<ShieldCheck />} title="App Store Submission and ASO" desc="We handle the App Store and Play Store submission process — compliance review, screenshot preparation, metadata optimization, and the back-and-forth." />
            <ServiceCard icon={<Settings />} title="Post-Launch Support and Updates" desc="Mobile apps require ongoing maintenance: OS updates break things, user feedback reveals missing features, and analytics expose drop-off flows." />
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 bg-white/[0.01] rounded-[3rem] border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Mobile App Development <span className="text-purple-500 font-normal">Process</span></h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProcessCard step="Step 1" title="Discovery & Platform Decision" desc="We analyze your target audience, feature requirements, budget, and timeline to recommend the right platform strategy." />
            <ProcessCard step="Step 2" title="Design Sprints and User Testing" desc="Wireframes first, then high-fidelity prototypes, then user testing with real people from your target audience. Design changes are cheaper now." />
            <ProcessCard step="Step 3" title="Development with Regular Builds" desc="Two-week development sprints with TestFlight (iOS) and Play Console internal testing (Android) builds at the end of every cycle." />
            <ProcessCard step="Step 4" title="Device and OS Testing" desc="We test on a matrix of real devices across iOS versions, Android versions, screen sizes, and network conditions." />
            <ProcessCard step="Step 5" title="Launch and Growth Support" desc="App Store and Play Store launch, monitoring setup, crash reporting configuration, and analytics review to address early real-world issues." />
            <div className="p-8 bg-purple-600 rounded-3xl flex flex-col justify-center items-center text-center">
              <Rocket className="mb-4 animate-bounce" size={40} />
              <h3 className="text-xl font-bold mb-2">Build Your Vision</h3>
              <Link to="/contact">
                <button className="cursor-pointer bg-white text-purple-600 px-6 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-transform hover:scale-105 active:scale-95">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* --- SELECTED WORK SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Selected <span className="text-purple-500 font-normal">Projects</span></h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Take a look at some of the high-performance mobile applications we've built for our global clients.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#050505] bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                    <Users size={16} className="text-purple-500" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-[#050505] bg-purple-600 flex items-center justify-center text-[10px] font-bold">
                  +12
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#0c0c0c] border border-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={assets.mobile_dev_crossplatform}
                  alt="E-commerce App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Modern Commerce App</h3>
                    <p className="text-gray-500 text-sm">Full-scale React Native retail platform with real-time tracking.</p>
                  </div>
                  <div className="p-3 bg-purple-500/10 rounded-full text-purple-500">
                    <AppWindow size={20} />
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">React Native</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Node.js</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#0c0c0c] border border-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={assets.mobile_Fintech_App}
                  alt="Fintech App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Fintech Dashboard</h3>
                    <p className="text-gray-500 text-sm">Ultra-secure banking application with biometric authentication.</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
                    <ShieldCheck size={20} />
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Swift</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-10 w-1 bg-purple-600 rounded-full"></div>
            <h2 className="text-3xl font-bold italic">Mobile App <span className="text-purple-500 font-normal">Frequently Asked Questions</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`border rounded-2xl transition-all duration-300 ${activeIndex === i ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/5 bg-[#0A0A0A]'}`}>
                <button onClick={() => setActiveIndex(activeIndex === i ? null : i)} className="w-full p-6 text-left flex justify-between items-center group">
                  <span className="font-bold text-sm md:text-base pr-4">{faq.question}</span>
                  <div className={`p-1 rounded-full border transition-all ${activeIndex === i ? 'rotate-45 border-purple-500 text-purple-500' : 'border-gray-700 text-gray-700'}`}>
                    <Plus size={18} />
                  </div>
                </button>
                {activeIndex === i && (
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-6 animate-in fade-in slide-in-from-top-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <section className="max-w-7xl mx-auto px-6 py-1">
          <div className="bg-gradient-to-br from-[#0c0c0c] to-[#161616] border border-white/10 rounded-[3rem] p-12 md:p-8 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Tell us about your app idea.</h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto text-sm md:text-base leading-relaxed font-medium">
              We will tell you honestly what it takes to build it, what it will cost, and how long it will take.
            </p>

            <Link to="/contact">
              <button className="bg-purple-600 hover:bg-purple-700 px-12 py-5 rounded-2xl font-bold text-base transition-all shadow-2xl shadow-purple-500/30 active:scale-95 flex items-center gap-2 mx-auto">
                Free Consultation <ArrowRight size={20} />
              </button>
            </Link>

            <div className="mt-10 pt-10 border-t border-white/5">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <FooterLink to="/mern-stack-development" label="MERN Stack Development" />
                <FooterLink to="/mobile-apps" label="React Native" />
                <FooterLink to="/saas-product-development" label="SaaS Development" />
                <FooterLink to="/web-development" label="Web App Development" />
                <FooterLink to="/" label="Back to Home" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

/* --- SUB-COMPONENTS --- */
const ExpertiseCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-8 rounded-2xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all group hover:-translate-y-1`}>
    <div className="mb-6 p-3 bg-white/5 inline-block rounded-xl group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-lg font-bold mb-4 text-gray-100 italic">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-[#080808] p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all group">
    <div className="mb-4 text-purple-500 group-hover:scale-110 transition-transform duration-300">{React.cloneElement(icon, { size: 32 })}</div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
  </div>
);

const ProcessCard = ({ step, title, desc }) => (
  <div className="p-8 bg-[#0c0c0c] border border-white/5 rounded-3xl relative group hover:border-purple-500/30 transition-all">
    <div className="text-[10px] font-black text-purple-500 mb-4 uppercase tracking-[0.3em]">{step}</div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const FooterLink = ({ to, label }) => (
  <Link to={to} className="text-gray-500 hover:text-purple-400 text-[10px] font-bold transition-colors flex items-center gap-1 group uppercase tracking-widest">
    {label} <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </Link>
);

export default MobileApp;