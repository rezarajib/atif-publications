import React from 'react';

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl space-y-4">
        <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 text-gray-500">✕</button>
        {title && <h3 className="text-2xl font-serif font-bold text-[#1C2421]">{title}</h3>}
        {children}
      </div>
    </div>
  );
};