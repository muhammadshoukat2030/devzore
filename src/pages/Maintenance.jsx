import React from 'react';

const Maintenance = () => (
  <div className="min-h-screen bg-[#030303] text-white pt-32 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-2xl">🛠️</div>
        <h1 className="text-4xl font-bold tracking-tight">Website Maintenance</h1>
      </div>
      <p className="text-gray-400 text-xl leading-relaxed mb-10">Keep your site running at 100%. We handle security patches, content updates, and performance tuning so you can focus on business.</p>
      <div className="bg-white/5 p-8 rounded-2xl border border-dashed border-white/20 text-center">
        <p className="font-bold text-purple-500 tracking-[0.3em] uppercase">Status: Always Optimized</p>
      </div>
    </div>
  </div>
);

export default Maintenance;