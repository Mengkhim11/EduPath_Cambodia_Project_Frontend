import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CardMajor } from '../components/CardMajor';
import { BannerAiGuidance } from '../components/BannerAiGuidance';
import { majorsData } from '../data/mockData';

export function MajorsPage() {
  const { searchQuery, setSearchQuery } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'IT & Computer Science',
    'Medicine & Health',
    'Engineering & Tech',
    'Law & Policy',
    'Business & Finance',
    'Agriculture & Sciences',
    'Architecture & Design',
    'Tourism & Hospitality'
  ];

  const filteredMajors = majorsData.filter((m) => {
    const matchesSearch = searchQuery === '' || 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCat = selectedCategory === 'All' || m.category === selectedCategory;

    return matchesSearch && matchesCat;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Introduction */}
      <section className="bg-[#eaf7ff] border-b border-[#e2ebf3] py-12 px-6 sm:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-4">
          <span className="text-[13px] font-bold uppercase tracking-wider text-[#00a3b3]">
            FIND YOUR DIRECTION
          </span>
          <h1 className="text-[36px] sm:text-[46px] font-bold text-[#071b38] leading-tight">
            Big futures start with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#006cf9] to-[#00a9b6] bg-clip-text text-transparent">
              the right major.
            </span>
          </h1>
          <p className="text-[16px] text-[#071b38]/80 max-w-[760px]">
            Explore subjects that match your curiosity, skills, and long-term ambitions across Cambodian higher education.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-16 p-3 shadow-card border border-[#e2ebf3] flex items-center gap-3 max-w-[760px] mt-2">
            <img src="/assets/icon-search.svg" alt="Search" className="size-5 opacity-70 ml-2" />
            <input
              type="text"
              placeholder="Search majors e.g. Computer Science, Architecture, Business..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-[15px] text-[#071b38] w-full focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-10 flex flex-col gap-10 w-full">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-12 text-[14px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#006cf9] text-white shadow-sm'
                  : 'bg-white text-[#637b97] hover:text-[#071b38] border border-[#e2ebf3]'
              }`}
            >
              {cat === 'All' ? 'All fields' : cat}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-medium text-[#637b97]">
            Showing {filteredMajors.length} academic programs
          </p>
        </div>

        {/* Grid of Majors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMajors.map((m) => (
            <CardMajor key={m.id} major={m} />
          ))}
        </div>

        {/* AI Banner */}
        <BannerAiGuidance className="mt-4" />

      </div>
    </div>
  );
}
