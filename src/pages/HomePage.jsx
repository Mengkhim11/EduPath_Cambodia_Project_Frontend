import React from 'react';
import { useApp } from '../context/AppContext';
import { HeroDiscovery } from '../components/HeroDiscovery';
import { CardUniversity } from '../components/CardUniversity';
import { CardScholarship } from '../components/CardScholarship';
import { CardEvent } from '../components/CardEvent';
import { BannerAiGuidance } from '../components/BannerAiGuidance';
import { universitiesData, scholarshipsData, eventsData } from '../data/mockData';

export function HomePage() {
  const { navigateTo } = useApp();

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero / Discovery Section */}
      <HeroDiscovery />

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12 flex flex-col gap-14 w-full">

        {/* 2. Featured Universities Section */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-[#eaf7ff] flex items-center justify-center shrink-0">
                <img src="/assets/icon-cap.svg" alt="Cap" className="size-5" />
              </div>
              <div>
                <h2 className="text-[26px] sm:text-[30px] font-bold text-[#071b38] leading-tight">
                  Featured Universities
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#637b97] mt-0.5">
                  Explore top universities in Cambodia and around the region
                </p>
              </div>
            </div>

            <button
              onClick={() => navigateTo('universities')}
              className="text-[14px] font-semibold text-[#006cf9] hover:text-[#005ad4] flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              View all →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {universitiesData.slice(0, 4).map((uni) => (
              <CardUniversity key={uni.id} university={uni} />
            ))}
          </div>
        </section>

        {/* 3. AI Guidance Banner */}
        <BannerAiGuidance />

        {/* 4. Latest Scholarship Opportunities Section */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-[#ddf8f8] flex items-center justify-center shrink-0">
                <img src="/assets/icon-cap.svg" alt="Cap" className="size-5" />
              </div>
              <div>
                <h2 className="text-[26px] sm:text-[30px] font-bold text-[#071b38] leading-tight">
                  Latest Scholarship Opportunities
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#637b97] mt-0.5">
                  Find tuition grants and study abroad programs in Cambodia and beyond
                </p>
              </div>
            </div>

            <button
              onClick={() => navigateTo('scholarships')}
              className="text-[14px] font-semibold text-[#006cf9] hover:text-[#005ad4] flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              View all →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarshipsData.slice(0, 4).map((scholarship) => (
              <CardScholarship key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
        </section>

        {/* 5. Upcoming Educational Events Section */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-[#fef3c7] flex items-center justify-center shrink-0">
                <img src="/assets/icon-calendar.svg" alt="Calendar" className="size-5" />
              </div>
              <div>
                <h2 className="text-[26px] sm:text-[30px] font-bold text-[#071b38] leading-tight">
                  Upcoming Educational Events
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#637b97] mt-0.5">
                  Join seminars, open houses, workshops, and information sessions
                </p>
              </div>
            </div>

            <button
              onClick={() => navigateTo('events')}
              className="text-[14px] font-semibold text-[#006cf9] hover:text-[#005ad4] flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              View all →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventsData.slice(0, 4).map((event) => (
              <CardEvent key={event.id} event={event} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
