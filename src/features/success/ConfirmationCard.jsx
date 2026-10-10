import React from 'react';

export const ConfirmationCard = ({ onGoHome }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5 flex justify-center">
        <img src="/book.png" alt="Cover" className="w-56 h-auto rounded-r-lg shadow-2xl" />
      </div>
      <div className="md:col-span-7 space-y-6">
        <span className="text-xs font-bold text-[#C85A32] uppercase">PAYMENT SUCCESSFUL</span>
        <h1 className="font-serif text-4xl font-bold text-[#1C2421]">A new story is waiting.</h1>
        <div className="flex gap-4 pt-4">
          <button onClick={onGoHome} className="btn bg-[#1C2421] text-white rounded-2xl border-none">Read Now →</button>
          <button onClick={onGoHome} className="btn bg-[#EFECE6] text-[#1C2421] rounded-2xl border-none">Go to Library</button>
        </div>
      </div>
    </div>
  );
};