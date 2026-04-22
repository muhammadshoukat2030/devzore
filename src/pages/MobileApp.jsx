import React from 'react';

const MobileApp = () => (
  <div className="min-h-screen bg-[#030303] text-white pt-32 px-6">
    <div className="max-w-4xl mx-auto">
      <span className="text-purple-500 font-bold tracking-widest text-sm">SERVICE 02</span>
      <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tighter">MOBILE<br/><span className="text-purple-600">APPS</span></h1>
      <p className="text-gray-400 text-lg leading-relaxed mb-10">
        Creating seamless iOS and Android experiences. We specialize in cross-platform development that feels native and performs perfectly on all devices.
      </p>
      <div className="p-8 border-l-4 border-purple-600 bg-white/5">
        <h3 className="text-xl font-bold mb-4">Native Experience</h3>
        <ul className="space-y-2 text-gray-400">
          <li>• React Native & Flutter Expertise</li>
          <li>• Smooth Animations</li>
          <li>• Offline Functionality</li>
        </ul>
      </div>
    </div>
  </div>
);

export default MobileApp;