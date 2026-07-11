import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Eye, ShieldCheck, Database, Fingerprint, Globe, ArrowLeft, Cookie } from 'lucide-react';


// Jahan icon use ho raha hai wahan bhi singular karein

const PrivacyPolicy = () => {
  // SEO & Page Title
  useEffect(() => {
    document.title = "Privacy Policy | DevZore - Secure Software Development";
    window.scrollTo(0, 0);
  }, []);

  const navItems = [
    { id: "collection", title: "Data Collection", icon: <Database size={18} /> },
    { id: "usage", title: "Usage Policy", icon: <Eye size={18} /> },
    { id: "security", title: "Data Security", icon: <ShieldCheck size={18} /> },
    { id: "cookies", title: "Cookie Protocol", icon: <Cookie size={18} /> },
    { id: "rights", title: "User Rights", icon: <Globe size={18} /> },
  ];

  return (
    <>


      <Helmet>
        <title>Privacy Policy | Global Data Protection Compliance | DevZore</title>
        <meta name="description" content="Review DevZore's transparent user privacy indicators, international cookies governance, and standard data integrity metrics." />
        <link rel="canonical" href="https://devzore.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Global Data Protection Compliance | DevZore" />
        <meta property="og:description" content="Our official regulatory statement explaining global user data safety matrices." />
        <meta property="og:url" content="https://devzore.com/privacy-policy" />
        <meta property="og:type" content="website" />
      </Helmet>
      <article className="min-h-screen bg-[#030303] text-gray-400 font-sans selection:bg-purple-500/30">

        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-[20%] w-[600px] h-[600px] bg-purple-600/5 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-[20%] w-[600px] h-[600px] bg-indigo-600/5 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-4 gap-16">

          {/* SIDEBAR NAVIGATION */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8 opacity-50">
                Privacy Framework
              </h3>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 hover:text-purple-400 transition-all duration-300 group"
                  >
                    <span className="text-gray-500 group-hover:text-purple-500 transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-sm font-semibold">{item.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-3">
            <header className="mb-20">
              <div className="flex items-center gap-2 text-purple-500 font-bold text-xs uppercase tracking-widest mb-4">
                <ShieldCheck size={16} />
                <span>Data Protection Protocol</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Policy</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                At **DevZore**, we uphold the highest international standards of data integrity. This policy outlines how we safeguard your digital assets and personal information.
              </p>
              <div className="mt-8 py-2 px-4 bg-white/5 border border-white/10 rounded-lg inline-block text-xs text-gray-500">
                Last Protocol Update: <span className="text-white">April 24, 2026</span>
              </div>
            </header>

            <div className="space-y-20">
              {/* 1. Data Collection */}
              <section id="collection" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-500">
                    <Database size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Information Collection</h2>
                </div>
                <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
                  <p>
                    We collect information that is strictly necessary for project execution. This includes:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-colors">
                      <h4 className="text-white font-bold mb-2">Direct Interaction</h4>
                      <p className="text-sm italic">Name, email, and project requirements shared via our secure portals.</p>
                    </div>
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-colors">
                      <h4 className="text-white font-bold mb-2">Technical Metadata</h4>
                      <p className="text-sm italic">IP addresses and browser telemetry used to optimize our SaaS dashboard performance.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. Usage Policy */}
              <section id="usage" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-500">
                    <Eye size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Utilization of Data</h2>
                </div>
                <div className="bg-gradient-to-b from-white/[0.03] to-transparent border-l-2 border-purple-500 p-8 rounded-r-3xl">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-500 mt-1">▹</span>
                      To architect and scale custom **MERN stack** and **mobile application** solutions.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-500 mt-1">▹</span>
                      To facilitate secure project communication and milestone updates for our global clients.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-500 mt-1">▹</span>
                      To prevent fraudulent activities and ensure high-tier cybersecurity across our platforms.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 3. Security Protocol */}
              <section id="security" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-500">
                    <ShieldCheck size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">International Security Standards</h2>
                </div>
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] backdrop-blur-md">
                  <p className="leading-relaxed mb-6">
                    DevZore employs **AES-256 encryption** and **Secure Socket Layer (SSL)** technology to ensure that client data remains encrypted during transit and at rest. Our servers are monitored 24/7 for potential vulnerabilities.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Encryption: Active & Verified
                  </div>
                </div>
              </section>

              {/* 4. Cookie Protocol (NEW) */}
              <section id="cookies" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-500">
                    <Cookie size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Cookie Protocol</h2>
                </div>
                <div className="prose prose-invert max-w-none text-gray-400 space-y-6">
                  <p>We use cookies to enhance your experience on the DevZore ecosystem. These small files help us analyze traffic and remember your preferences.</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.01]">
                      <h4 className="text-white font-bold mb-2">Essential Cookies</h4>
                      <p className="text-sm">Necessary for the dashboard to function, such as maintaining your secure session.</p>
                    </div>
                    <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.01]">
                      <h4 className="text-white font-bold mb-2">Analytics Cookies</h4>
                      <p className="text-sm">Help us understand how users interact with our UI, allowing us to optimize design flow.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. User Rights (NEW) */}
              <section id="rights" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-500">
                    <Globe size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Global User Rights</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "Right to Access", desc: "Request a copy of your personal data stored in our vault." },
                    { title: "Right to Erasure", desc: "Ask for complete deletion of your data once projects conclude." },
                    { title: "Data Portability", desc: "Request your data in a structured, machine-readable format." }
                  ].map((right, idx) => (
                    <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                      <h4 className="text-purple-400 font-bold mb-2 text-sm">{right.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact CTA */}
              <section className="mt-20 p-10 rounded-[40px] bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10 border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Have questions about your data?</h3>
                <p className="mb-8 text-gray-500">Our Data Protection Officer is ready to assist you with any privacy concerns.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-black hover:bg-purple-600 hover:text-white transition-all transform active:scale-95 shadow-2xl shadow-purple-500/20"
                >
                  Inquire Now
                </Link>
              </section>

              {/* Bottom Footer */}
              <footer className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <Link to="/" className="group flex items-center gap-3 text-sm font-bold text-white hover:text-purple-500 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                    <ArrowLeft size={14} />
                  </div>
                  Return to Headquarters
                </Link>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gray-700 font-bold">
                  © 2026 DevZore Global Operations | All Rights Reserved
                </div>
              </footer>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PrivacyPolicy;