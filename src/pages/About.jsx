import React from 'react';
import {Helmet} from 'react-helmet-async';
import { Link } from "react-router-dom";
import {
  User, Code2, Rocket, Globe2,
  Terminal, Cpu, Coffee, CheckCircle2,
  Github, Linkedin, Mail, ArrowRight
} from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About DevZore | Software Agency Founded by Shoukat — Islamabad</title>
        <meta name="description" content="Learn about DevZore, a software development agency founded by Shoukat in Islamabad, Pakistan. We help startups and businesses worldwide build scalable web apps, mobile apps and SaaS products." />
        <link rel="canonical" href="https://devzore.com/about" />
        <meta property="og:title" content="About DevZore | Software Agency Founded by Shoukat" />
        <meta property="og:description" content="DevZore is a software agency in Islamabad helping businesses build web apps, mobile apps and SaaS products worldwide." />
        <meta property="og:url" content="https://devzore.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-0.1">

        {/* --- TOP HEADER --- */}
        <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
            The Mind Behind DevZore
          </div>

          <div className="flex gap-4">
            <Github size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Linkedin size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        {/* --- HERO / INTRO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-3 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Engineering <br />
              <span className="text-purple-500">Digital Solutions</span> <br />
              With Precision.
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
              M-Shoukat here—a Full-Stack Engineer dedicated to building scalable, high-performance web applications. I turn complex logic into elegant, user-centric experiences.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-purple-500" />
                <span className="text-sm font-bold text-gray-300 tracking-wide">International Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-purple-500" />
                <span className="text-sm font-bold text-gray-300 tracking-wide">Scalable Architecture</span>
              </div>
            </div>
          </div>

          {/* Profile Image / Abstract Element */}
          <div className="relative lg:justify-self-end">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 blur-2xl opacity-20 rounded-full"></div>
            <div className="relative w-full max-w-[400px] aspect-square rounded-2xl border border-gray-800 bg-[#080808] overflow-hidden flex items-center justify-center group">
              <Terminal size={350} className="text-purple-500/20 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-6 left-6 right-4 p-4 bg-[#0c0c0c]/80 backdrop-blur-md border border-white/5 rounded-xl text-center">
                <p className="text-xs font-mono text-purple-400">root@m-shoukat-engineer:~#</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- VALUES / PHILOSOPHY --- */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              Core <span className="text-purple-500">Philosophy</span>
            </h2>
            <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <AboutCard
              icon={<Cpu className="text-purple-500" size={22} />}
              title="Clean Architecture"
              desc="I believe in code that is not only functional but maintainable. Clean folder structures and scalable logic are my top priorities."
              borderColor="border-l-purple-600"
            />
            <AboutCard
              icon={<Globe2 className="text-green-500" size={22} />}
              title="Global Footprint"
              desc="Having worked with clients from Qatar, Dubai, and Pakistan, I bring an international perspective to every digital product."
              borderColor="border-l-green-500"
            />
            <AboutCard
              icon={<Coffee className="text-purple-500" size={22} />}
              title="Client Focused"
              desc="My engineering leads with empathy. I focus on solving business problems, not just writing lines of code."
              borderColor="border-l-purple-600"
            />
          </div>
        </section>

        {/* --- TECH STACK SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="bg-[#080808] border border-gray-900 rounded-[2rem] p-10 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 italic">The MERN Specialist.</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  From MongoDB's flexible schemas to React's dynamic interfaces, I leverage the full power of JavaScript to build modern SaaS products and enterprise-grade applications.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Vercel'].map((tech) => (
                    <div key={tech} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-400">
                      <span className="w-1 h-1 bg-purple-500 rounded-full"></span> {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <StatBox number="45+" label="Projects Completed" />
                <StatBox number="30+" label="Global Clients" />
                <StatBox number="100%" label="Code Quality" />
                <StatBox number="24/7" label="Support" />
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <section className="max-w-7xl mx-auto px-6 py-10 pb-10">
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10 rounded-[2rem] p-10 md:p-12 text-center relative overflow-hidden group">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10 tracking-tight leading-tight">
              Let's Collaborate.
            </h2>
            <p className="text-gray-400 mb-8 relative z-10 max-w-lg mx-auto font-medium text-sm">
              Ready to bring your architectural vision to life? Let's discuss your next big project and how DevZore can help you scale.
            </p>

            <div className="flex justify-center gap-4 relative z-10">
              {/* 🟢 YAHAN PASTE KAREIN (Purana button hata kar) */}
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 px-8 py-3.5 rounded-xl font-bold transition-all text-sm shadow-xl flex items-center gap-2"
              >
                Send Message <Mail size={16} />
              </Link>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

/* --- HELPER COMPONENTS --- */
const AboutCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-6 rounded-xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const StatBox = ({ number, label }) => (
  <div className="bg-[#0c0c0c] border border-gray-900 p-6 rounded-2xl text-center hover:border-purple-500/30 transition-colors">
    <h4 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tighter">{number}</h4>
    <p className="text-[9px] uppercase font-bold text-purple-500 tracking-[0.2em]">{label}</p>
  </div>
);

export default AboutPage;