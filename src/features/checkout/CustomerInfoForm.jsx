import React from 'react';

export const CustomerInfoForm = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="font-serif italic text-[#C85A32]">01</span>
        <h3 className="font-serif text-xl font-bold text-[#1C2421]">Customer Information</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="Your full name" className="input input-bordered bg-white border-[#EAE5DF] rounded-xl" />
        <input type="email" placeholder="you@example.com" className="input input-bordered bg-white border-[#EAE5DF] rounded-xl" />
      </div>
    </div>
  );
};