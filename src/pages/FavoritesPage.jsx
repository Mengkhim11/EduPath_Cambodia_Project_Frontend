import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CardUniversity } from '../components/CardUniversity';
import { CardMajor } from '../components/CardMajor';
import { CardScholarship } from '../components/CardScholarship';
import { CardEvent } from '../components/CardEvent';
import { Button } from '../components/Button';
import { universitiesData, majorsData, scholarshipsData, eventsData } from '../data/mockData';

export function FavoritesPage() {
  const { favorites, navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('all');

  const savedUniversities = universitiesData.filter(u => (favorites.universities || []).includes(u.id));
  const savedMajors = majorsData.filter(m => (favorites.majors || []).includes(m.id));
  const savedScholarships = scholarshipsData.filter(s => (favorites.scholarships || []).includes(s.id));
  const savedEvents = eventsData.filter(e => (favorites.events || []).includes(e.id));

  const totalCount = savedUniversities.length + savedMajors.length + savedScholarships.length + savedEvents.length;

  return (
    <div className="flex flex-col w-full min-h-[80vh]">
      {/* Intro */}
      <section className="bg-[#eaf7ff] border-b border-[#e2ebf3] py-12 px-6 sm:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-4">
          <span className="text-[13px] font-bold uppercase tracking-wider text-[#00a3b3]">
            SAVED SHORTLIST
          </span>
          <h1 className="text-[36px] sm:text-[46px] font-bold text-[#071b38] leading-tight">
            Your Education Shortlist
          </h1>
          <p className="text-[16px] text-[#071b38]/80 max-w-[760px]">
            Keep track of universities you love, prospective majors, upcoming admission deadlines, and scholarship opportunities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-10 flex flex-col gap-8 w-full flex-1">
        
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-[#e2ebf3]">
          {[
            { id: 'all', label: `All Items (${totalCount})` },
            { id: 'universities', label: `Universities (${savedUniversities.length})` },
            { id: 'majors', label: `Majors (${savedMajors.length})` },
            { id: 'scholarships', label: `Scholarships (${savedScholarships.length})` },
            { id: 'events', label: `Events (${savedEvents.length})` }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-12 text-[14px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#006cf9] text-white shadow-sm'
                  : 'text-[#637b97] hover:text-[#071b38] hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {totalCount === 0 ? (
          <div className="bg-white rounded-20 p-12 border border-[#e2ebf3] text-center flex flex-col items-center justify-center gap-4 my-8">
            <div className="size-16 rounded-full bg-[#eaf7ff] flex items-center justify-center">
              <img src="/assets/nav-favorites.svg" alt="Favorites" className="size-8 opacity-60" />
            </div>
            <h3 className="text-[20px] font-bold text-[#071b38]">Your shortlist is empty</h3>
            <p className="text-[14px] text-[#637b97] max-w-[400px]">
              Explore universities, majors, or scholarships and click the bookmark icon to save them here.
            </p>
            <Button
              label="Explore Universities"
              style="Primary"
              className="mt-2"
              onClick={() => navigateTo('universities')}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {/* Universities */}
            {(activeTab === 'all' || activeTab === 'universities') && savedUniversities.length > 0 && (
              <section className="flex flex-col gap-4">
                <h3 className="text-[20px] font-bold text-[#071b38]">Universities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {savedUniversities.map(u => (
                    <CardUniversity key={u.id} university={u} />
                  ))}
                </div>
              </section>
            )}

            {/* Majors */}
            {(activeTab === 'all' || activeTab === 'majors') && savedMajors.length > 0 && (
              <section className="flex flex-col gap-4">
                <h3 className="text-[20px] font-bold text-[#071b38]">Majors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {savedMajors.map(m => (
                    <CardMajor key={m.id} major={m} />
                  ))}
                </div>
              </section>
            )}

            {/* Scholarships */}
            {(activeTab === 'all' || activeTab === 'scholarships') && savedScholarships.length > 0 && (
              <section className="flex flex-col gap-4">
                <h3 className="text-[20px] font-bold text-[#071b38]">Scholarships</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {savedScholarships.map(s => (
                    <CardScholarship key={s.id} scholarship={s} />
                  ))}
                </div>
              </section>
            )}

            {/* Events */}
            {(activeTab === 'all' || activeTab === 'events') && savedEvents.length > 0 && (
              <section className="flex flex-col gap-4">
                <h3 className="text-[20px] font-bold text-[#071b38]">Events</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {savedEvents.map(e => (
                    <CardEvent key={e.id} event={e} />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
