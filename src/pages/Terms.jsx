import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Scale, CreditCard, Lock, Share2, 
  FileCheck, AlertCircle, ShieldAlert, Zap 
} from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service | DevZore - Global Software Operations";
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: "services", title: "Development Services", icon: <Zap size={18} /> },
    { id: "payments", title: "Financial Protocol", icon: <CreditCard size={18} /> },
    { id: "nda", title: "Confidentiality & NDA", icon: <Lock size={18} /> },
    { id: "ip", title: "Intellectual Property", icon: <FileCheck size={18} /> },
    { id: "liability", title: "Limitation of Liability", icon: <ShieldAlert size={18} /> },
  ];

  return (
    <article className="min-h-screen bg-[#030303] text-gray-400 font-sans selection:bg-purple-500/30">
      {/* Premium Background Ambient Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row gap-16">
        
        {/* LEFT SIDEBAR: FIXED/STICKY NAVIGATION */}
        <aside className="hidden lg:block w-full lg:w-1/4">
          <div className="sticky top-32 self-start space-y-6">
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-6 opacity-40">
              Legal Framework
            </h3>
            <nav className="space-y-1">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-white/5 text-sm font-medium transition-all duration-300 group border border-transparent hover:border-white/10 hover:text-purple-400"
                >
                  <span className="text-gray-600 group-hover:text-purple-500 transition-colors">
                    {item.icon}
                  </span>
                  {item.title}
                </a>
              ))}
            </nav>
            
            {/* Status Badge in Sidebar */}
            <div className="mt-8 p-4 bg-purple-500/5 border border-purple-500/10 rounded-2xl">
              <div className="flex items-center gap-2 text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping" />
                Live Protection
              </div>
              <p className="text-[11px] mt-2 leading-relaxed text-gray-500">
                Encrypted with DevZore Secure Protocol.
              </p>
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <div className="w-full lg:w-3/4">
          <header className="mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 mb-8">
              <ShieldCheck size={12} /> Standard Operating Procedure 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
              Terms of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600">
                Service.
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
              These terms define the engineering standards and legal boundaries for **DevZore** partners worldwide.
            </p>
          </header>

          <main className="space-y-24">
            
            {/* 1. Development Services */}
            <section id="services" className="scroll-mt-32 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-purple-500 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                  <Zap size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">01. Technical Scope</h2>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-sm">
                <p className="leading-relaxed">
                  DevZore provides high-tier software services including **MERN stack development**, **API engineering**, and **Mobile App development**. We operate under a "Scope of Work" (SOW) model where technical requirements are frozen after the discovery phase to ensure architectural integrity and timely delivery for clients in Qatar, Dubai, and beyond.
                </p>
              </div>
            </section>

            {/* 2. Confidentiality & NDA */}
            <section id="nda" className="scroll-mt-32 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-purple-500 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                  <Lock size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">02. Confidentiality & NDA</h2>
              </div>
              <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 p-10 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-purple-500">
                  <Lock size={120} />
                </div>
                <div className="space-y-4">
                  <p className="leading-relaxed font-medium text-gray-300">
                    Proprietary Information Protection Clause.
                  </p>
                  <p className="leading-relaxed text-sm">
                    DevZore agrees to hold all "Confidential Information" in the strictest confidence. This includes business logic, database architectures, and sensitive user data. Our internal protocol ensures that your project assets are only accessible to cleared engineering staff. We commit to a non-disclosure period of 5 years following project completion.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Intellectual Property */}
            <section id="ip" className="scroll-mt-32 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-purple-500 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                  <FileCheck size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">03. Ownership of Assets</h2>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-sm">
                <p className="leading-relaxed">
                  Upon full payment, all custom source code, design assets, and documentation belong 100% to the Client. DevZore retains only the right to display the project in our portfolio for marketing and agency growth purposes.
                </p>
              </div>
            </section>

            {/* 4. Limitation of Liability */}
            <section id="liability" className="scroll-mt-32 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-red-500 border border-white/10 group-hover:border-red-500/30 transition-colors">
                  <ShieldAlert size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">04. Limitation of Liability</h2>
              </div>
              <div className="bg-red-500/[0.02] border border-red-500/10 p-10 rounded-[2.5rem]">
                <div className="flex items-start gap-4 text-sm leading-relaxed opacity-80">
                  <AlertCircle className="shrink-0 text-red-400" size={20} />
                  <div className="space-y-4">
                    <p>
                      DevZore's liability for any claim arising from our services shall be limited to the amount paid for the specific project milestone. We are not liable for losses caused by third-party infrastructure (AWS, Vercel, MongoDB) or data breaches resulting from client-side mismanagement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/10 p-12 rounded-[3.5rem] text-center">
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Launch Your Next Innovation</h3>
              <p className="max-w-xl mx-auto mb-10 opacity-70 leading-relaxed">
                Experience high-performance software engineering with DevZore. Our legal framework is built for your peace of mind.
              </p>
              <Link to="/contact" className="px-10 py-4 bg-white text-black rounded-full font-black hover:bg-purple-500 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 inline-block">
                Start Project →
              </Link>
            </section>

          </main>

          <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
             <Link to="/" className="group flex items-center gap-4 text-white font-bold transition-all">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                  <Zap size={16} />
                </div>
                <span>DevZore HQ</span>
             </Link>
             <p className="text-[10px] uppercase tracking-[0.3em] text-gray-700 font-bold">
               © 2026 Global Software Operations | DevZore Engine v3.0
             </p>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Terms;