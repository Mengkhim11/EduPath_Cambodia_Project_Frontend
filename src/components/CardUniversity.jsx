import React from 'react';
import { useApp } from '../context/AppContext';
import { BadgeTeal, BadgeInfo } from './Badge';
import { Button } from './Button';

export function CardUniversity({ university }) {
  const { navigateTo, isFavorite, toggleFavorite } = useApp();
  const saved = isFavorite('universities', university.id);

  return (
    <div className="bg-white rounded-16 border border-[#e2ebf3] shadow-card hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Campus Image Header */}
      <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
        <img
          src={university.image}
          alt={university.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Bookmark/Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite('universities', university.id, university.name);
          }}
          title={saved ? "Remove from saved" : "Save university"}
          className="absolute top-3 right-3 size-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <svg 
            className={`w-5 h-5 ${saved ? 'text-[#006cf9] fill-[#006cf9]' : 'text-slate-600'}`} 
            fill={saved ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col gap-2.5 flex-1">
        {/* University Identity */}
        <div className="flex items-start gap-2.5">
          <div className="size-10 rounded-full bg-[#eaf7ff] flex items-center justify-center shrink-0">
            <img src="/assets/icon-cap.svg" alt="Cap" className="size-5" />
          </div>
          <h3 
            onClick={() => navigateTo('university-detail', university.id)}
            className="text-[15px] font-semibold text-[#071b38] leading-[22px] hover:text-[#006cf9] cursor-pointer line-clamp-2"
          >
            {university.name}
          </h3>
        </div>

        {/* Location */}
        <p className="text-[13px] text-[#637b97] flex items-center gap-1.5">
          <span>{university.location}</span>
        </p>

        {/* Tags */}
        <div className="flex items-center gap-1.5 pt-0.5">
          <BadgeTeal label={university.type} />
          <BadgeInfo label={university.ranking} />
        </div>

        {/* Description */}
        <p className="text-[13px] leading-[20px] text-[#637b97] line-clamp-2 flex-1">
          {university.description}
        </p>

        {/* Card Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <button 
            onClick={() => navigateTo('university-detail', university.id)}
            className="text-[13px] font-medium text-[#071b38] hover:text-[#006cf9] flex items-center gap-1.5 cursor-pointer"
          >
            <img src="/assets/icon-cap.svg" alt="Cap" className="size-4 opacity-75" />
            <span>Explore programs</span>
          </button>

          <Button
            label="View university"
            style="Secondary"
            className="py-2 px-3 text-[13px] rounded-10"
            onClick={() => navigateTo('university-detail', university.id)}
          />
        </div>
      </div>
    </div>
  );
}
