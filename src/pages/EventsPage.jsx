import React, { useState } from 'react';
import { CardEvent } from '../components/CardEvent';
import { BannerAiGuidance } from '../components/BannerAiGuidance';
import { eventsData } from '../data/mockData';

export function EventsPage() {
  const [filterType, setFilterType] = useState('All');

  const filterTabs = ['All', 'In person', 'Seminars', 'Open house'];

  const filtered = eventsData.filter((e) => {
    if (filterType === 'All') return true;
    if (filterType === 'In person') return e.type.toLowerCase().includes('in person');
    if (filterType === 'Seminars') return e.type.toLowerCase().includes('seminar');
    if (filterType === 'Open house') return e.type.toLowerCase().includes('open house');
    return true;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Intro */}
      <section className="bg-[#eaf7ff] border-b border-[#e2ebf3] py-12 px-6 sm:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-4">
          <span className="text-[13px] font-bold uppercase tracking-wider text-[#00a3b3]">
            CAMPUS DISCOVERY & WORKSHOPS
          </span>
          <h1 className="text-[36px] sm:text-[46px] font-bold text-[#071b38] leading-tight">
            Connect directly at <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#006cf9] to-[#00a9b6] bg-clip-text text-transparent">
              upcoming educational events.
            </span>
          </h1>
          <p className="text-[16px] text-[#071b38]/80 max-w-[760px]">
            Tour state-of-the-art laboratories, meet student ambassadors, and participate in free application preparation clinics.
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
              {tab === 'All' ? 'All events' : tab}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((e) => (
            <CardEvent key={e.id} event={e} />
          ))}
        </div>

        <BannerAiGuidance className="mt-6" />
      </div>
    </div>
  );
}
