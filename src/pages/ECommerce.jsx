import React from 'react';

const ECommerce = () => (
  <div className="min-h-screen bg-[#030303] text-white pt-32 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <span className="text-purple-500 font-bold tracking-widest text-sm uppercase">Service 03</span>
      <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tighter italic">E-COMMERCE<br/>STORES</h1>
      <div className="bg-purple-600/10 p-10 rounded-3xl border border-purple-600/20">
        <p className="text-gray-300 text-xl mb-8">Transforming your retail business into a 24/7 selling machine with secure payments and inventory automation.</p>
        <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition">Explore Solutions</button>
      </div>
    </div>
  </div>
);

export default ECommerce;