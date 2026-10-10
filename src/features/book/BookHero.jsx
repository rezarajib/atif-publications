import React from 'react';
import { Button } from '../../components/UI/Button';
import { mainBook } from '../../data/booksData';

export const BookHero = ({ onBuyNow }) => {
  return (
    <section className="bg-[#FAF8F5] py-12 border-b border-[#EAE5DF]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <div className="bg-[#EFECE6] p-10 rounded-3xl w-full max-w-md shadow-inner flex flex-col items-center">
            <img src={mainBook.coverImage} alt="Cover" className="w-60 h-auto rounded-r-lg shadow-2xl" />
            <p className="mt-6 text-xs italic text-[#8C857B] text-center">International bestseller<br />Translated into 53 languages</p>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <div className="flex gap-2">
            {mainBook.tags.map((t) => (
              <span key={t} className="badge badge-outline border-[#DCD5CB] text-[#C85A32] font-bold text-[10px] p-3">{t}</span>
            ))}
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1C2421] leading-tight">{mainBook.title}</h1>
          <p className="text-lg font-serif italic text-[#5A5854]">by <span className="underline decoration-[#C85A32]">{mainBook.author}</span></p>
          <p className="text-base text-[#5A5854] leading-relaxed">{mainBook.description}</p>
          <div className="flex gap-4 pt-2">
            <Button variant="primary">📖 Read Now</Button>
            <Button variant="outline" onClick={onBuyNow}>Buy Book • ৳{mainBook.price}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};