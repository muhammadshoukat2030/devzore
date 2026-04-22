import React from 'react';

const BackendApi = () => (
  <div className="min-h-screen bg-[#030303] text-white pt-32 px-6">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-mono text-purple-500 mb-4">{`// Backend & APIs`}</h1>
      <h2 className="text-6xl font-black mb-10 tracking-tighter uppercase">Powering your<br/>Frontend.</h2>
      <div className="grid grid-cols-1 gap-4 text-gray-400 font-mono">
        <div className="p-4 bg-white/5 border border-white/10">{`> Robust Node.js Architectures`}</div>
        <div className="p-4 bg-white/5 border border-white/10">{`> Secure MongoDB Integration`}</div>
        <div className="p-4 bg-white/5 border border-white/10">{`> Custom REST & GraphQL APIs`}</div>
      </div>
    </div>
  </div>
);

export default BackendApi;