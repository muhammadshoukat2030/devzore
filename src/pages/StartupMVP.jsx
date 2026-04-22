import React from 'react';

const StartupMVP = () => (
  <div className="min-h-screen bg-[#030303] text-white pt-32 px-6">
    <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/20 to-transparent p-12 rounded-3xl border border-white/5">
      <h1 className="text-6xl font-black mb-6 uppercase">🚀 Startup<br/>MVP Build</h1>
      <p className="text-gray-400 text-xl mb-10 max-w-2xl">Validate your idea in weeks, not months. We build the core features needed to launch and get your first 1000 users.</p>
      <div className="flex flex-wrap gap-4">
        <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Rapid Build</span>
        <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Scalable Tech</span>
        <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Launch Ready</span>
      </div>
    </div>
  </div>
);

export default StartupMVP;