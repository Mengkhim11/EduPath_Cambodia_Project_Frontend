import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CardUniversity } from '../components/CardUniversity';
import { BannerAiGuidance } from '../components/BannerAiGuidance';
import { Button } from '../components/Button';
import { universitiesData } from '../data/mockData';

export function UniversitiesPage() {
  const { searchQuery, setSearchQuery, selectedLocation, setSelectedLocation, navigateTo } = useApp();
  const [selectedType, setSelectedType] = useState('All');
  const [selectedFaculty, setSelectedFaculty] = useState('All');

  // Filter logic
  const filteredUniversities = universitiesData.filter((uni) => {
    const matchesSearch = searchQuery === '' || 
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation = selectedLocation === 'All locations' || uni.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesType = selectedType === 'All' || uni.type.toLowerCase().includes(selectedType.toLowerCase());

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Page Header Introduction */}
      <section className="bg-[#eaf7ff] border-b border-[#e2ebf3] py-12 px-6 sm:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-4">
          <span className="text-[13px] font-bold uppercase tracking-wider text-[#00a3b3]">
            CAMBODIA HIGHER EDUCATION DIRECTORY
          </span>
          <h1 className="text-[36px] sm:text-[46px] font-bold text-[#071b38] leading-tight">
            Find your university. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#006cf9] to-[#00a9b6] bg-clip-text text-transparent">
              Build your brighter future.
            </span>
          </h1>
          <p className="text-[16px] text-[#071b38]/80 max-w-[760px]">
            Explore inspiring campuses, compare academic programs, and discover universities across Phnom Penh and Cambodian provinces.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-10 flex flex-col gap-12 w-full">
        
        {/* University filter toolbar */}
        <div className="bg-white rounded-16 p-4 shadow-card border border-[#e2ebf3] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-[240px]">
            <img src="/assets/icon-search.svg" alt="Search" className="size-5 opacity-70" />
            <input
              type="text"
              placeholder="Search university name or degree..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-[15px] text-[#071b38] focus:outline-none w-full"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-[#f8fbfe] border border-[#e2ebf3] rounded-12 px-3 py-2 text-[14px] text-[#071b38] font-medium focus:outline-none cursor-pointer"
            >
              <option value="All locations">All locations</option>
              <option value="Phnom Penh">Phnom Penh</option>
              <option value="Siem Reap">Siem Reap</option>
              <option value="Battambang">Battambang</option>
            </select>

            {/* University Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-[#f8fbfe] border border-[#e2ebf3] rounded-12 px-3 py-2 text-[14px] text-[#071b38] font-medium focus:outline-none cursor-pointer"
            >
              <option value="All">All Institution Types</option>
              <option value="Public">Public Universities</option>
              <option value="Private">Private / International</option>
            </select>

            {/* Clear Filters */}
            {(searchQuery || selectedLocation !== 'All locations' || selectedType !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLocation('All locations');
                  setSelectedType('All');
                }}
                className="text-[13px] text-[#006cf9] hover:underline font-semibold"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Section title & count */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5">
            <img src="/assets/icon-cap.svg" alt="Cap" className="size-6 text-[#006cf9]" />
            <h2 className="text-[24px] sm:text-[28px] font-bold text-[#071b38]">
              Find your future campus.
            </h2>
          </div>
          <p className="text-[14px] text-[#637b97]">
            Showing {filteredUniversities.length} {filteredUniversities.length === 1 ? 'university' : 'universities'} matching your criteria
          </p>
        </div>

        {/* Directory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredUniversities.map((uni) => (
            <CardUniversity key={uni.id} university={uni} />
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12 bg-white rounded-16 border border-[#e2ebf3] p-8">
            <h3 className="text-[18px] font-bold text-[#071b38] mb-1">No universities found</h3>
            <p className="text-[14px] text-[#637b97] mb-4">Try clearing your search query or filters.</p>
            <Button
              label="Reset Filters"
              style="Primary"
              onClick={() => {
                setSearchQuery('');
                setSelectedLocation('All locations');
                setSelectedType('All');
              }}
            />
          </div>
        )}

        {/* AI Guidance Banner */}
        <BannerAiGuidance />

        {/* Choose with confidence Section */}
        <section className="bg-white rounded-20 p-6 sm:p-8 border border-[#e2ebf3] shadow-card flex flex-col gap-6">
          <h2 className="text-[24px] sm:text-[28px] font-bold text-[#071b38]">
            A clearer path starts with a little exploration.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f8fbfe] rounded-16 p-6 border border-[#e2ebf3] flex flex-col gap-3">
              <div className="size-8 rounded-full bg-blue-100/70 flex items-center justify-center">
                <img src="/assets/icon-check.svg" alt="Check" className="size-4" />
              </div>
              <h3 className="text-[18px] font-bold text-[#071b38]">Compare your options</h3>
              <p className="text-[14px] leading-[22px] text-[#637b97]">
                Look at programs, laboratories, learning environments, and faculty specializations to find what matches you best.
              </p>
            </div>

            <div className="bg-[#f8fbfe] rounded-16 p-6 border border-[#e2ebf3] flex flex-col gap-3">
              <div className="size-8 rounded-full bg-teal-100/70 flex items-center justify-center">
                <img src="/assets/icon-check.svg" alt="Check" className="size-4" />
              </div>
              <h3 className="text-[18px] font-bold text-[#071b38]">Explore the details</h3>
              <p className="text-[14px] leading-[22px] text-[#637b97]">
                Understand admissions requirements, tuition fees, and confirm official intake dates with the university.
              </p>
            </div>

            <div className="bg-[#f8fbfe] rounded-16 p-6 border border-[#e2ebf3] flex flex-col gap-3">
              <div className="size-8 rounded-full bg-amber-100/70 flex items-center justify-center">
                <img src="/assets/icon-check.svg" alt="Check" className="size-4" />
              </div>
              <h3 className="text-[18px] font-bold text-[#071b38]">Keep a shortlist</h3>
              <p className="text-[14px] leading-[22px] text-[#637b97]">
                Save the universities and majors you want to come back to, and share them with your family and academic counselors.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
