import React from 'react';

const WebDevelopment = () => (
  <div className="min-h-screen bg-[#030303] text-white pt-32 px-6">
    <div className="max-w-4xl mx-auto">
      <span className="text-purple-500 font-bold tracking-widest text-sm">SERVICE 01</span>
      <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tighter">WEB<br/><span className="text-purple-600">DEVELOPMENT</span></h1>
      <p className="text-gray-400 text-lg leading-relaxed mb-10">
        We build high-performance, SEO-friendly websites using the MERN stack. From corporate sites to complex web apps, we ensure scalability and speed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="font-bold mb-2">Tech Stack</h3>
          <p className="text-sm text-gray-500">React.js, Next.js, Node.js, Tailwind CSS</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="font-bold mb-2">Focus</h3>
          <p className="text-sm text-gray-500">Performance, Speed, and Global Standards</p>
        </div>
      </div>
    </div>
  </div>
);

export default WebDevelopment;