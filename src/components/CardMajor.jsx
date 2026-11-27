import React from 'react';
import { useApp } from '../context/AppContext';
import { BadgeInfo, BadgeTeal } from './Badge';
import { Button } from './Button';

export function CardMajor({ major }) {
  const { openModal, isFavorite, toggleFavorite } = useApp();
  const saved = isFavorite('majors', major.id);

  return (
    <div className="bg-white rounded-16 border border-[#e2ebf3] shadow-card hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between group">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <BadgeTeal label={major.category} />
          <button
            onClick={() => toggleFavorite('majors', major.id, major.name)}
            title={saved ? "Remove from saved" : "Save major"}
            className="size-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer"
          >
            <svg 
              className={`w-4 h-4 ${saved ? 'text-[#006cf9] fill-[#006cf9]' : 'text-slate-500'}`} 
              fill={saved ? "currentColor" : "none"} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        <h3 
          onClick={() => openModal('major-detail', major)}
          className="text-[17px] font-bold text-[#071b38] leading-snug hover:text-[#006cf9] cursor-pointer mb-1.5"
        >
          {major.name}
        </h3>

        <p className="text-[13px] font-medium text-[#006cf9] mb-2.5">
          {major.degree} · {major.duration}
        </p>

        <p className="text-[13.5px] leading-[21px] text-[#637b97] line-clamp-3 mb-4">
          {major.description}
        </p>

        {/* Offered at universities */}
        <div className="flex items-center gap-1.5 flex-wrap mb-4">
          <span className="text-[12px] text-[#637b97]">Offered at:</span>
          {major.universitiesOffering.map((uni) => (
            <span key={uni} className="bg-slate-100 text-[#071b38] px-2 py-0.5 rounded text-[11px] font-semibold">
              {uni}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="text-[12px] text-[#637b97] font-medium">
          Top Career Track
        </span>
        <Button
          label="View major"
          style="Secondary"
          className="py-2 px-4 text-[13px] rounded-10"
          onClick={() => openModal('major-detail', major)}
        />
      </div>
    </div>
  );
}
