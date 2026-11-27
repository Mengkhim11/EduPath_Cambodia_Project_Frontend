import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CardScholarship } from '../components/CardScholarship';
import { BannerAiGuidance } from '../components/BannerAiGuidance';
import { scholarshipsData } from '../data/mockData';

export function ScholarshipsPage() {
  const [filterType, setFilterType] = useState('All');

  const filterTabs = ['All', 'Undergraduate', 'Graduate', 'International'];

  const filtered = scholarshipsData.filter((s) => {
    if (filterType === 'All') return true;
    if (filterType === 'Undergraduate') return s.meta.toLowerCase().includes('undergraduate');
    if (filterType === 'Graduate') return s.meta.toLowerCase().includes('graduate');
    if (filterType === 'International') return !s.meta.toLowerCase().includes('cambodia') || s.meta.toLowerCase().includes('france') || s.meta.toLowerCase().includes('japan');
    return true;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Intro */}
      <section className="bg-[#eaf7ff] border-b border-[#e2ebf3] py-12 px-6 sm:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-4">
          <span className="text-[13px] font-bold uppercase tracking-wider text-[#00a3b3]">
            FINANCIAL AID & OPPORTUNITIES
          </span>
          <h1 className="text-[36px] sm:text-[46px] font-bold text-[#071b38] leading-tight">
            Unlock your potential with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#006cf9] to-[#00a9b6] bg-clip-text text-transparent">
              scholarship support.
            </span>
          </h1>
          <p className="text-[16px] text-[#071b38]/80 max-w-[760px]">
            Discover competitive grants, full tuition waivers, and bilateral exchange opportunities in Cambodia and abroad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-10 flex flex-col gap-8 w-full">
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterType(tab)}
              className={`px-5 py-2.5 rounded-12 text-[14px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filterType === tab
                  ? 'bg-[#006cf9] text-white shadow-sm'
                  : 'bg-white text-[#637b97] hover:text-[#071b38] border border-[#e2ebf3]'
              }`}
            >
              {tab === 'All' ? 'All scholarships' : tab}
            </button>
          ))}
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((s) => (
            <CardScholarship key={s.id} scholarship={s} />
          ))}
        </div>

        <BannerAiGuidance className="mt-6" />
      </div>
    </div>
  );
}
