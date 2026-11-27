import React from 'react';

export function Button({ 
  label = "Continue", 
  style = "Primary", 
  disabled = false, 
  onClick, 
  className = "",
  type = "button",
  icon = null
}) {
  const isPrimary = style === "Primary";
  const isSecondary = style === "Secondary";

  const baseClasses = "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-14 font-semibold text-[15px] cursor-pointer select-none transition-all duration-200 shrink-0";
  
  const variantClasses = isPrimary
    ? "bg-[#006cf9] text-white hover:bg-[#005ad4] active:scale-[0.98] shadow-sm disabled:bg-slate-300 disabled:cursor-not-allowed"
    : "bg-white text-[#006cf9] border border-[#e2ebf3] hover:bg-slate-50 hover:border-blue-200 active:scale-[0.98] shadow-sm disabled:text-slate-400 disabled:border-slate-200 disabled:cursor-not-allowed";

  return (
    <button 
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <span>{label}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
