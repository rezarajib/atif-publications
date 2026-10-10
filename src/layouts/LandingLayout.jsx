import React from 'react';

export const LandingLayout = ({ children, onNavigate, onOpenAuth }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C2421] flex flex-col justify-between">
      <header className="border-b border-[#EAE5DF] bg-[#FAF8F5] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div onClick={() => onNavigate('home')} className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-[#C85A32] rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl italic">A</div>
            <span className="font-serif text-2xl font-bold">Atif Publications LLC</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onOpenAuth} className="text-sm font-medium text-[#1C2421]">Log in</button>
            <button onClick={() => onNavigate('checkout')} className="btn bg-[#1C2421] text-white rounded-full border-none">Get Started</button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-[#1C2421] text-white py-12 text-center text-xs text-[#8C857B]">
        © 2025 Lumina Books. All rights reserved.
      </footer>
    </div>
  );
};