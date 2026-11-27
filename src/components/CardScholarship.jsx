import React from 'react';
import { useApp } from '../context/AppContext';
import { BadgeTeal } from './Badge';
import { Button } from './Button';

export function CardScholarship({ scholarship }) {
  const { openModal, isFavorite, toggleFavorite } = useApp();
  const saved = isFavorite('scholarships', scholarship.id);

  return (
    <div className="bg-white rounded-16 border border-[#e2ebf3] shadow-card hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Scholarship Image */}
      <div className="relative h-[148px] w-full overflow-hidden bg-slate-100">
        <img
          src={scholarship.image}
          alt={scholarship.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Tuition Support Badge */}
        <div className="absolute top-3 left-3">
          <BadgeTeal label={scholarship.badge || "Tuition support"} />
        </div>

        {/* Favorite Bookmark */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite('scholarships', scholarship.id, scholarship.title);
          }}
          title={saved ? "Remove from saved" : "Save scholarship"}
          className="absolute top-3 right-3 size-8 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <svg 
            className={`w-4 h-4 ${saved ? 'text-[#006cf9] fill-[#006cf9]' : 'text-slate-600'}`} 
            fill={saved ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      {/* Scholarship Content */}
      <div className="p-4 sm:p-5 flex flex-col gap-2 flex-1">
        <h3 
          onClick={() => openModal('scholarship-detail', scholarship)}
          className="text-[15px] font-semibold text-[#071b38] leading-[22px] hover:text-[#006cf9] cursor-pointer line-clamp-1"
        >
          {scholarship.title}
        </h3>

        <p className="text-[13px] leading-[19px] text-[#637b97] line-clamp-2">
          {scholarship.description}
        </p>

        <p className="text-[13px] font-medium text-[#637b97]">
          {scholarship.meta}
        </p>

        <p className="text-[13px] font-semibold text-[#00a3b3] mb-2">
          {scholarship.date}
        </p>

        <Button
          label="View scholarship"
          style="Secondary"
          className="w-full py-2.5 text-[14px] rounded-12 mt-auto"
          onClick={() => openModal('scholarship-detail', scholarship)}
        />
      </div>
    </div>
  );
}
