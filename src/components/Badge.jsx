import React from 'react';

export function BadgeTeal({ label = "Tuition support", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1 bg-[#ddf8f8] text-[#00a3b3] px-[10px] py-[3px] rounded-8 font-semibold text-[13px] tracking-tight whitespace-nowrap shrink-0 ${className}`}>
      {label}
    </span>
  );
}

export function BadgeInfo({ label = "Public university", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1 bg-[#eaf7ff] text-[#006cf9] px-[10px] py-[3px] rounded-8 font-semibold text-[13px] tracking-tight whitespace-nowrap shrink-0 ${className}`}>
      {label}
    </span>
  );
}

export function BadgeAmber({ label = "Featured", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1 bg-[#fef3c7] text-[#d97706] px-[10px] py-[3px] rounded-8 font-semibold text-[13px] tracking-tight whitespace-nowrap shrink-0 ${className}`}>
      {label}
    </span>
  );
}
