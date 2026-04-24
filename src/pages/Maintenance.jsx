
import React from 'react';
import { 
  Settings, ShieldCheck, Activity, PenTool, 
  Clock, LifeBuoy, Zap, Database, 
  ArrowRight, HardDrive, RefreshCcw
} from 'lucide-react';

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 pb-0.1">
      
      {/* --- 1. TOP HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 pt-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          24/7 System Reliability
        </div>
        
        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          Support Portal
        </button>
      </div>

      {/* --- 2. HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Seamless <span className="text-purple-500">Support</span> <br />
            & Scalable <br />
            <span className="text-purple-500">Maintenance</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
            We ensure your digital assets stay updated, secure, and lightning-fast. From server patching to performance tuning, we handle the technical debt.
          </p>
          
          <div className="flex flex-nowrap gap-3 pt-2">
            <button className="flex-1 md:flex-none bg-purple-600 hover:bg-purple-700 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base flex items-center justify-center gap-2 group transition-all">
              Choose a Plan <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex-1 md:flex-none bg-[#111111] border border-gray-800 hover:bg-gray-800 px-4 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-base transition-all">
              SLA Details
            </button>
          </div>
        </div>
        
        <div className="relative group lg:justify-self-end hidden md:block">
          <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="relative bg-[#111111] border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl max-w-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="System Maintenance" 
              className="w-full h-auto opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* --- 3. CORE SERVICES --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            Core <span className="text-purple-500">Maintenance</span>
          </h2>
          <div className="w-12 h-1 bg-purple-600 mt-2 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          <MaintenanceCard 
            icon={<ShieldCheck className="text-purple-500" size={22} />}
            title="Security Patching"
            desc="Continuous monitoring and patching of vulnerabilities to protect your system from evolving cyber threats and data breaches."
            borderColor="border-l-purple-600"
          />
          <MaintenanceCard 
            icon={<Activity className="text-blue-500" size={22} />}
            title="Performance Tuning"
            desc="Regular code audits and database optimization to ensure sub-second load times and high-performance user experiences."
            borderColor="border-l-blue-500"
          />
          <MaintenanceCard 
            icon={<RefreshCcw className="text-purple-500" size={22} />}
            title="Cloud Updates"
            desc="Managing version upgrades for React, Node.js, and cloud dependencies with zero downtime and regression testing."
            borderColor="border-l-purple-600"
          />
        </div>
      </section>

      {/* --- 4. STATUS & MONITORING --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">Infrastructure</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">Operational <span className="text-purple-500">Insights</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <StatusItem 
            image="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop"
            title="Database Health Checks"
            subtitle="Automated Backups & Integrity"
          />
          <StatusItem 
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            title="Server Load Balancers"
            subtitle="Uptime & Traffic Management"
          />
        </div>
      </section>

      {/* --- 5. SUPPORT METRICS --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#080808] border border-gray-900 rounded-[2rem] p-10 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px]"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
            <div>
              <Clock className="mx-auto mb-3 text-purple-500" size={24} />
              <h4 className="text-2xl font-bold">15min</h4>
              <p className="text-gray-500 text-[10px] uppercase">Response Time</p>
            </div>
            <div>
              <Zap className="mx-auto mb-3 text-blue-500" size={24} />
              <h4 className="text-2xl font-bold">99.9%</h4>
              <p className="text-gray-500 text-[10px] uppercase">Uptime SLA</p>
            </div>
            <div>
              <HardDrive className="mx-auto mb-3 text-purple-500" size={24} />
              <h4 className="text-2xl font-bold">24/7</h4>
              <p className="text-gray-500 text-[10px] uppercase">Monitoring</p>
            </div>
            <div>
              <LifeBuoy className="mx-auto mb-3 text-blue-500" size={24} />
              <h4 className="text-2xl font-bold">Expert</h4>
              <p className="text-gray-500 text-[10px] uppercase">On-call Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. FOOTER CTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-10 pb-10">
        <div className="bg-gradient-to-tr from-[#0a0a0a] to-[#050505] border border-white/10 rounded-[2rem] p-10 md:p-12 text-center relative overflow-hidden group">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10 tracking-tight leading-tight">
            Stop Worrying About Crashes.
          </h2>
          <p className="text-gray-400 mb-8 relative z-10 max-w-lg mx-auto font-medium text-sm">
            Focus on growing your business while we handle the servers. Let’s set up a managed service plan for your digital ecosystem.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3.5 rounded-xl font-bold transition-all relative z-10 text-sm shadow-xl">
            Request Managed Support →
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- HELPER COMPONENTS --- */
const MaintenanceCard = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-[#080808] p-6 rounded-xl border border-gray-900 border-l-4 ${borderColor} hover:bg-[#0c0c0c] transition-all duration-300`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const StatusItem = ({ image, title, subtitle }) => (
  <div className="group cursor-pointer">
    <div className="bg-[#0c0c0c] rounded-2xl overflow-hidden mb-3 border border-gray-900 shadow-xl group-hover:border-purple-500/50 transition-all">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[250px] md:h-[300px] object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
      />
    </div>
    <h3 className="text-lg font-bold mb-1 group-hover:text-purple-500 transition-colors">{title}</h3>
    <p className="text-gray-500 text-[10px] uppercase tracking-wide">{subtitle}</p>
  </div>
);

export default Maintenance;