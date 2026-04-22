import React from 'react';

const UiUxDesign = () => (
  <div className="min-h-screen bg-[#030303] text-white pt-32 px-6 flex items-center justify-center">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-7xl font-black tracking-tighter mb-6">UI/UX<br/><span className="text-purple-600">DESIGN</span></h1>
        <p className="text-gray-400 text-lg">We don't just design screens; we design experiences that drive conversions and keep users coming back.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-40 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-4xl">🎨</div>
        <div className="h-40 bg-purple-600 rounded-2xl flex items-center justify-center text-4xl">✨</div>
      </div>
    </div>
  </div>
);

export default UiUxDesign;