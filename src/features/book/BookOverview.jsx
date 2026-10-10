import React from 'react';

export const BookOverview = () => {
  return (
    <div className="bg-[#FAF8F5] py-12 space-y-12">
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-6">
          <p className="text-xs font-bold text-[#C85A32] uppercase">ABOUT THE BOOK</p>
          <h2 className="font-serif text-3xl font-bold text-[#1C2421]">Doing well with money isn't necessarily about what you know.</h2>
          <p className="text-[#5A5854]">It's about how you behave. And behavior is hard to teach, even to really smart people.</p>
          <blockquote className="border-l-2 border-[#C85A32] pl-6 py-2 italic font-serif text-lg text-[#1C2421]">
            “Financial success is not a hard science. It’s a soft skill, where how you behave is more important than what you know.”
          </blockquote>
        </div>
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-3xl border border-[#EAE5DF] shadow-sm space-y-3">
            <span className="text-xs font-bold text-[#C85A32] uppercase">READ WITH LUMINA</span>
            <h3 className="font-serif text-xl font-bold text-[#1C2421]">AI can help you understand this book.</h3>
            <button className="btn btn-link px-0 text-xs text-[#1C2421] font-bold no-underline">Ask about this book →</button>
          </div>
        </div>
      </section>
    </div>
  );
};