import React from 'react';

export const Login = ({ onSuccess, onSwitchToRegister }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSuccess(); }} className="space-y-4">
      <div className="form-control">
        <label className="label text-xs font-semibold text-[#5A5854]">Email</label>
        <input type="email" required placeholder="you@example.com" className="input input-bordered bg-[#FAF8F5] border-[#EAE5DF] rounded-xl" />
      </div>
      <button type="submit" className="btn bg-[#1C2421] text-white w-full rounded-xl border-none">Log In</button>
      <p className="text-xs text-center text-[#8C857B]">
        Don't have an account? <span onClick={onSwitchToRegister} className="text-[#C85A32] font-bold cursor-pointer">Register</span>
      </p>
    </form>
  );
};