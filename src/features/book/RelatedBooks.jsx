import React from 'react';
import { relatedBooksData } from '../../data/booksData';

export const RelatedBooks = () => {
  return (
    <section className="bg-[#FAF8F5] py-16 border-t border-[#EAE5DF]">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <h2 className="font-serif text-3xl font-bold text-[#1C2421]">Related books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedBooksData.map((b) => (
            <div key={b.id} className={`${b.bg} h-80 rounded-2xl p-6 text-white flex flex-col justify-between shadow-md`}>
              <h3 className="font-serif text-2xl font-bold">{b.title}</h3>
              <p className="text-xs opacity-90">{b.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};