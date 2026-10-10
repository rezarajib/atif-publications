import React from 'react';
import { mainBook } from '../../data/booksData';

export const OrderSummary = () => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-[#EAE5DF] shadow-sm space-y-6">
      <p className="text-xs font-bold text-[#C85A32] uppercase">YOUR ORDER</p>
      <div className="flex gap-4 items-center">
        <img src={mainBook.coverImage} alt="Cover" className="w-16 h-auto rounded-lg" />
        <div>
          <h4 className="font-serif font-bold text-[#1C2421]">{mainBook.title}</h4>
          <p className="text-lg font-bold text-[#1C2421]">৳{mainBook.price}</p>
        </div>
      </div>
      <div className="border-t border-[#EAE5DF] pt-4 flex justify-between font-serif font-bold text-xl text-[#1C2421]">
        <span>Total</span>
        <span>৳{mainBook.price}</span>
      </div>
    </div>
  );
};