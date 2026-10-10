import React from 'react';
import { CustomerInfoForm } from '../features/checkout/CustomerInfoForm';
import { PaymentForm } from '../features/checkout/PaymentForm';
import { OrderSummary } from '../features/checkout/OrderSummary';
import { useCheckout } from '../hooks/useCheckout';

export const CheckoutPage = ({ onSuccess, onBack }) => {
  const { selectedPayment, setSelectedPayment } = useCheckout();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      <button onClick={onBack} className="text-xs text-[#8C857B]">‹ Back to book</button>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <CustomerInfoForm />
          <PaymentForm selectedMethod={selectedPayment} setSelectedMethod={setSelectedPayment} onPay={onSuccess} />
        </div>
        <div className="lg:col-span-5"><OrderSummary /></div>
      </div>
    </div>
  );
};