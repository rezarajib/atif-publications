import { useState } from 'react';

export const useCheckout = () => {
  const [selectedPayment, setSelectedPayment] = useState('bkash');
  return { selectedPayment, setSelectedPayment };
};