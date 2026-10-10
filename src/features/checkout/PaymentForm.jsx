import React from 'react';
import { Selector } from '../../components/UI/Selector';
import { paymentMethodsData } from '../../data/paymentMethods';

export const PaymentForm = ({ selectedMethod, setSelectedMethod, onPay }) => {
  return (
    <div className="space-y-6 pt-6 border-t border-[#EAE5DF]">
      <div className="flex items-center gap-3">
        <span className="font-serif italic text-[#C85A32]">02</span>
        <h3 className="font-serif text-xl font-bold text-[#1C2421]">Payment Method</h3>
      </div>
      <Selector options={paymentMethodsData} selected={selectedMethod} onSelect={setSelectedMethod} />
      <button onClick={onPay} className="btn bg-[#1C2421] text-white w-full rounded-2xl py-4 font-bold border-none">
        Pay ৳499 →
      </button>
    </div>
  );
};