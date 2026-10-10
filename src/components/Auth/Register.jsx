import React from 'react';

export const Register = ({ onSuccess, onSwitchToLogin }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSuccess(); }} className="space-y-4">
      <div className="form-control">
        <label className="label text-xs font-semibold text-[#5A5854]">Full Name</label>
        <input type="text" required placeholder="Your Name" className="input input-bordered bg-[#FAF8F5] border-[#EAE5DF] rounded-xl" />
      </div>
      <button type="submit" className="btn bg-[#C85A32] text-white w-full rounded-xl border-none">Register</button>
      <p className="text-xs text-center text-[#8C857B]">
        Already registered? <span onClick={onSwitchToLogin} className="text-[#1C2421] font-bold cursor-pointer">Log In</span>
      </p>
    </form>
  );
};