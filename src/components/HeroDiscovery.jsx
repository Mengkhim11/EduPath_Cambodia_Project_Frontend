import React from 'react';
import { useApp } from '../context/AppContext';
import { BadgeTeal } from './Badge';
import { Button } from './Button';

export function HeroDiscovery({ 
  title = "Discover Your Path", 
  accent = "to a Brighter Future",
  subtitle = "Explore universities, find the right major, discover scholarships and events — all in one place. With AI guidance, EduPath Cambodia helps you make confident decisions about your education journey."
}) {
  const { searchQuery, setSearchQuery, selectedLocation, setSelectedLocation, navigateTo } = useApp();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigateTo('universities');
  };

  const popularTags = [
    { label: "IT & Computer Science", filter: "IT & Computer Science", page: "majors" },
    { label: "Business", filter: "Business", page: "majors" },
    { label: "Engineering", filter: "Engineering", page: "majors" },
    { label: "Medicine", filter: "Medicine", page: "majors" },
    { label: "Scholarships", filter: "all", page: "scholarships" },
    { label: "Phnom Penh", filter: "Phnom Penh", page: "universities" }
  ];

  return (
    <section className="relative bg-[#eaf7ff] overflow-hidden border-b border-[#e2ebf3]">
      {/* Background Skyline Image with smooth gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[54%] hidden md:block pointer-events-none">
        <img
          src="/assets/cambodia-skyline.png"
          alt="Cambodia Skyline"
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#eaf7ff] via-[#eaf7ff]/70 to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 lg:py-16 relative z-10 flex flex-col gap-8">
        
        {/* Top Content Row: Hero Copy + At a Glance Stats Card */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          
          {/* Hero Copy */}
          <div className="flex flex-col items-start gap-4 max-w-[820px]">
            <BadgeTeal label="Your Future Starts Here" className="mb-1" />
            
            <h1 className="text-[38px] sm:text-[50px] lg:text-[60px] font-bold text-[#071b38] leading-[1.12] tracking-tight">
              {title} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#006cf9] to-[#00a9b6] bg-clip-text text-transparent">
                {accent}
              </span>
            </h1>

            <p className="text-[16px] sm:text-[17px] text-[#071b38]/85 leading-[26px] max-w-[720px] pt-1">
              {subtitle}
            </p>
          </div>

          {/* At a glance stats card */}
          <div className="bg-white/95 backdrop-blur-md rounded-16 p-5 shadow-card border border-[#e2ebf3] w-full sm:w-[320px] shrink-0">
            <h3 className="text-[14px] font-semibold text-[#637b97] uppercase tracking-wider mb-3">
              National Education Portal
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div 
                onClick={() => navigateTo('universities')} 
                className="bg-[#f8fbfe] hover:bg-[#eaf7ff] cursor-pointer rounded-12 p-3.5 flex flex-col items-center text-center transition-all group"
              >
                <div className="size-8 rounded-full bg-blue-100/60 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <img src="/assets/icon-cap.svg" alt="Cap" className="size-5" />
                </div>
                <span className="text-[26px] font-bold text-[#071b38] leading-none">14+</span>
                <span className="text-[12px] font-medium text-[#637b97] mt-1">Universities</span>
              </div>

              <div 
                onClick={() => navigateTo('majors')} 
                className="bg-[#f8fbfe] hover:bg-[#eaf7ff] cursor-pointer rounded-12 p-3.5 flex flex-col items-center text-center transition-all group"
              >
                <div className="size-8 rounded-full bg-teal-100/60 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <img src="/assets/icon-book.svg" alt="Book" className="size-5" />
                </div>
                <span className="text-[26px] font-bold text-[#071b38] leading-none">150+</span>
                <span className="text-[12px] font-medium text-[#637b97] mt-1">Majors</span>
              </div>

              <div 
                onClick={() => navigateTo('scholarships')} 
                className="bg-[#f8fbfe] hover:bg-[#eaf7ff] cursor-pointer rounded-12 p-3.5 flex flex-col items-center text-center transition-all group"
              >
                <div className="size-8 rounded-full bg-amber-100/60 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <img src="/assets/icon-cap.svg" alt="Cap" className="size-5" />
                </div>
                <span className="text-[26px] font-bold text-[#071b38] leading-none">50+</span>
                <span className="text-[12px] font-medium text-[#637b97] mt-1">Scholarships</span>
              </div>

              <div 
                onClick={() => navigateTo('events')} 
                className="bg-[#f8fbfe] hover:bg-[#eaf7ff] cursor-pointer rounded-12 p-3.5 flex flex-col items-center text-center transition-all group"
              >
                <div className="size-8 rounded-full bg-indigo-100/60 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <img src="/assets/icon-calendar.svg" alt="Calendar" className="size-5" />
                </div>
                <span className="text-[26px] font-bold text-[#071b38] leading-none">30+</span>
                <span className="text-[12px] font-medium text-[#637b97] mt-1">Events</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Search Panel */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="bg-white rounded-16 p-3 shadow-card border border-[#e2ebf3] flex flex-col md:flex-row items-center gap-3 w-full"
        >
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 py-2.5 bg-[#f8fbfe] md:bg-transparent rounded-12 flex-1 w-full">
            <img src="/assets/icon-search.svg" alt="Search" className="size-5 shrink-0 opacity-70" />
            <input
              type="text"
              placeholder="Search universities, majors, or keywords…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-[16px] text-[#071b38] placeholder-[#637b97] w-full focus:outline-none"
            />
          </div>

          <div className="hidden md:block w-px h-8 bg-[#e2ebf3]" />

          {/* Location Select */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f8fbfe] md:bg-transparent rounded-12 w-full md:w-[240px]">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-transparent text-[15px] font-medium text-[#071b38] w-full focus:outline-none cursor-pointer"
            >
              <option value="All locations">All locations</option>
              <option value="Phnom Penh">Phnom Penh</option>
              <option value="Siem Reap">Siem Reap</option>
              <option value="Battambang">Battambang</option>
              <option value="Kandal">Kandal</option>
            </select>
            <img src="/assets/icon-chevron.svg" alt="Dropdown" className="size-4 shrink-0 opacity-60" />
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            label="Search  →"
            style="Primary"
            className="w-full md:w-auto px-7 py-3 text-[15px]"
          />
        </form>

        {/* Popular Tags Row */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <span className="text-[14px] font-semibold text-[#071b38] mr-1">Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag.label}
              onClick={() => {
                if (tag.page === 'majors') {
                  setSearchQuery(tag.filter);
                  navigateTo('majors');
                } else if (tag.page === 'universities') {
                  setSelectedLocation(tag.filter);
                  navigateTo('universities');
                } else {
                  navigateTo(tag.page);
                }
              }}
              className="bg-white hover:bg-[#006cf9] hover:text-white text-[#071b38] border border-[#e2ebf3] px-3.5 py-1.5 rounded-20 text-[13px] font-medium transition-all shadow-sm cursor-pointer"
            >
              {tag.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
