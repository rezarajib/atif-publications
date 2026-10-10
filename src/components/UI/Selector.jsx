import React from 'react';

export const Selector = ({ options, selected, onSelect }) => {
  return (
    <div className="space-y-3">
      {options.map((item) => (
        <label
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition ${
            selected === item.id ? 'border-[#C85A32] bg-white ring-1 ring-[#C85A32]' : 'border-[#EAE5DF] bg-white'
          }`}
        >
          <div className="flex items-center gap-4">
            <input type="radio" checked={selected === item.id} readOnly className="radio radio-error radio-sm" />
            <div className={`w-8 h-8 rounded-lg ${item.logoBg} text-white flex items-center justify-center font-bold text-xs`}>
              {item.name[0]}
            </div>
            <div>
              <p className="text-sm font-bold text-[#1C2421]">{item.name}</p>
              <p className="text-xs text-[#8C857B]">{item.subtext}</p>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
};