import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BadgeInfo, BadgeTeal } from '../components/Badge';
import { Button } from '../components/Button';
import { BannerAiGuidance } from '../components/BannerAiGuidance';
import { CardMajor } from '../components/CardMajor';
import { universitiesData, majorsData } from '../data/mockData';

export function UniversityDetailPage() {
  const { selectedUniversityId, navigateTo, isFavorite, toggleFavorite, openModal, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('Overview');

  const university = universitiesData.find((u) => u.id === selectedUniversityId) || universitiesData[0];
  const saved = isFavorite('universities', university.id);

  // Filter majors offered at this university
  const universityMajors = majorsData.filter((m) => 
    m.universitiesOffering.includes(university.shortName) || m.universitiesOffering.includes(university.name)
  );

  const tabs = [
    'Overview',
    'Programs',
    'Admissions',
    'Scholarships',
    'Campus life'
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Introduction / Breadcrumbs */}
      <section className="bg-[#eaf7ff] border-b border-[#e2ebf3] py-8 px-6 sm:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[12px] font-bold text-[#00a3b3] tracking-wider uppercase">
            <button onClick={() => navigateTo('universities')} className="hover:underline">
              UNIVERSITIES
            </button>
            <span>/</span>
            <span>{university.location.toUpperCase()}</span>
          </div>

          <h1 className="text-[32px] sm:text-[44px] font-bold text-[#071b38] leading-tight">
            {university.name}
          </h1>

          <p className="text-[16px] text-[#071b38]/80 max-w-[840px]">
            Explore an accredited higher education institution in Cambodia’s capital, empowering the next generation of leaders.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 py-8 flex flex-col gap-8 w-full">
        
        {/* 2. Campus Panorama Image Banner */}
        <div className="relative h-[280px] sm:h-[340px] w-full rounded-20 overflow-hidden shadow-card border border-[#e2ebf3]">
          <img
            src={university.image}
            alt={university.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 text-white text-[13px] font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-8">
            Main Campus Grounds · {university.location}
          </div>
        </div>

        {/* 3. University Identity & Actions */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 pb-4 border-b border-[#e2ebf3]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <BadgeInfo label={university.type} />
              <BadgeTeal label={university.ranking} />
              <span className="text-[13px] text-[#637b97]">Est. {university.established}</span>
            </div>
            <h2 className="text-[26px] sm:text-[30px] font-bold text-[#071b38]">
              {university.name}
            </h2>
            <p className="text-[14px] text-[#637b97]">
              {university.address}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Button
              label={saved ? "Saved to Favorites" : "Save university"}
              style={saved ? "Primary" : "Secondary"}
              className="w-full sm:w-auto px-6 py-3 text-[14px]"
              onClick={() => toggleFavorite('universities', university.id, university.name)}
            />
            <a
              href={university.website}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-14 font-semibold text-[14px] bg-[#006cf9] text-white hover:bg-[#005ad4] transition-colors text-center"
            >
              <span>Visit Official Website ↗</span>
            </a>
          </div>
        </div>

        {/* 4. Interactive Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-[#e2ebf3] pb-1 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-12 text-[14px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-[#006cf9] text-white shadow-sm'
                  : 'text-[#637b97] hover:text-[#071b38] hover:bg-slate-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 5. Tab Content: Overview with Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Left Column */}
          <div className="lg:col-span-8 flex flex-col gap-10">

            {/* Overview / Introduction */}
            {activeTab === 'Overview' && (
              <>
                <section className="flex flex-col gap-3">
                  <h3 className="text-[22px] font-bold text-[#071b38]">
                    A place to explore your potential
                  </h3>
                  <p className="text-[15px] leading-[26px] text-[#071b38]/85">
                    {university.overviewText}
                  </p>
                </section>

                {/* Featured Programs Section */}
                <section className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] font-bold text-[#071b38]">
                      Featured Academic Programs
                    </h3>
                    <button 
                      onClick={() => setActiveTab('Programs')}
                      className="text-[13px] font-semibold text-[#006cf9] hover:underline"
                    >
                      View all programs →
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {university.programs.map((prog) => (
                      <div key={prog.id} className="bg-white rounded-16 p-5 border border-[#e2ebf3] shadow-card flex flex-col justify-between">
                        <div>
                          <BadgeTeal label={prog.degree} className="mb-2" />
                          <h4 className="text-[16px] font-bold text-[#071b38] mb-1">
                            {prog.name}
                          </h4>
                          <p className="text-[12.5px] text-[#006cf9] font-medium mb-2">
                            {prog.faculty} · {prog.duration} ({prog.credits} credits)
                          </p>
                          <p className="text-[13px] leading-[20px] text-[#637b97] line-clamp-2">
                            {prog.description}
                          </p>
                        </div>
                        <Button
                          label="Program Details"
                          style="Secondary"
                          className="mt-4 py-2 px-3 text-[13px] rounded-10"
                          onClick={() => openModal('major-detail', prog)}
                        />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Admission Steps Section */}
                <section className="flex flex-col gap-4">
                  <h3 className="text-[22px] font-bold text-[#071b38]">
                    Your application, one step at a time
                  </h3>
                  <div className="flex flex-col gap-3">
                    {university.admissionSteps.map((step) => (
                      <div key={step.step} className="bg-[#f8fbfe] border border-[#e2ebf3] rounded-14 p-4 flex items-start gap-4">
                        <span className="size-8 rounded-full bg-[#006cf9] text-white flex items-center justify-center font-bold text-[13px] shrink-0 mt-0.5">
                          {step.step}
                        </span>
                        <div>
                          <h5 className="text-[15px] font-semibold text-[#071b38]">
                            {step.title}
                          </h5>
                          <p className="text-[13px] text-[#637b97] mt-0.5">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* Programs Tab */}
            {activeTab === 'Programs' && (
              <div className="flex flex-col gap-4">
                <h3 className="text-[22px] font-bold text-[#071b38]">
                  All Available Programs & Faculties
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {university.programs.map((prog) => (
                    <div key={prog.id} className="bg-white rounded-16 p-5 border border-[#e2ebf3] shadow-card flex flex-col justify-between">
                      <div>
                        <BadgeTeal label={prog.degree} className="mb-2" />
                        <h4 className="text-[16px] font-bold text-[#071b38] mb-1">{prog.name}</h4>
                        <p className="text-[12.5px] text-[#006cf9] font-medium mb-2">{prog.faculty} · {prog.duration}</p>
                        <p className="text-[13px] text-[#637b97]">{prog.description}</p>
                      </div>
                      <Button
                        label="View Details"
                        style="Secondary"
                        className="mt-4 py-2 px-3 text-[13px]"
                        onClick={() => openModal('major-detail', prog)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Admissions Tab */}
            {activeTab === 'Admissions' && (
              <div className="flex flex-col gap-6">
                <h3 className="text-[22px] font-bold text-[#071b38]">Admissions Guide & Requirements</h3>
                <div className="bg-[#f8fbfe] rounded-16 p-6 border border-[#e2ebf3] flex flex-col gap-4">
                  <h4 className="text-[16px] font-bold text-[#071b38]">Undergraduate Admission Window</h4>
                  <p className="text-[14px] text-[#637b97] leading-relaxed">
                    Applications open following the release of the national high school examination (BacII) results by the Ministry of Education, Youth and Sport (MoEYS).
                  </p>
                  <div className="flex flex-col gap-3 pt-2">
                    {university.admissionSteps.map(s => (
                      <div key={s.step} className="flex gap-3">
                        <span className="font-bold text-[#006cf9]">{s.step}.</span>
                        <div>
                          <strong className="text-[14px] text-[#071b38] block">{s.title}</strong>
                          <span className="text-[13px] text-[#637b97]">{s.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Scholarships Tab */}
            {activeTab === 'Scholarships' && (
              <div className="flex flex-col gap-4">
                <h3 className="text-[22px] font-bold text-[#071b38]">Scholarships & Financial Aid</h3>
                <div className="grid grid-cols-1 gap-3">
                  {university.scholarshipsAvailable.map((sch, i) => (
                    <div key={i} className="bg-white rounded-14 p-4 border border-[#e2ebf3] shadow-sm flex items-center justify-between">
                      <div>
                        <BadgeTeal label="Tuition Support" className="mb-1" />
                        <h4 className="text-[15px] font-bold text-[#071b38]">{sch}</h4>
                        <p className="text-[13px] text-[#637b97]">Inquire directly with the Academic Affairs office or MoEYS portal.</p>
                      </div>
                      <Button
                        label="Learn More"
                        style="Secondary"
                        className="py-2 px-3 text-[13px]"
                        onClick={() => showToast('Opening scholarship guidelines...')}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Campus Life Tab */}
            {activeTab === 'Campus life' && (
              <div className="flex flex-col gap-4">
                <h3 className="text-[22px] font-bold text-[#071b38]">Student Life & Facilities</h3>
                <p className="text-[14px] leading-relaxed text-[#637b97]">
                  Enjoy vibrant student associations, language exchange clubs, sports tournaments, high-speed campus Wi-Fi, modern library study carrels, and research maker spaces.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {['Central Library', 'Robotics & STEM Labs', 'Student Cafeterias', 'Basketball & Futsal Courts', 'Language Resource Centers', 'Innovation Hub'].map(f => (
                    <div key={f} className="bg-[#f8fbfe] border border-[#e2ebf3] rounded-12 p-3 text-[13px] font-semibold text-[#071b38] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#006cf9]" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sidebar: Plan your next step */}
          <div className="lg:col-span-4 bg-white rounded-20 p-6 border border-[#e2ebf3] shadow-card flex flex-col gap-5 sticky top-24">
            <h4 className="text-[18px] font-bold text-[#071b38] pb-3 border-b border-slate-100">
              Plan your next step
            </h4>

            <div>
              <span className="text-[12px] font-bold text-[#637b97] uppercase tracking-wider block">Location</span>
              <p className="text-[14px] font-semibold text-[#071b38] mt-0.5">{university.location}</p>
            </div>

            <div>
              <span className="text-[12px] font-bold text-[#637b97] uppercase tracking-wider block">Study options</span>
              <p className="text-[14px] font-semibold text-[#071b38] mt-0.5">Undergraduate & postgraduate</p>
            </div>

            <div>
              <span className="text-[12px] font-bold text-[#637b97] uppercase tracking-wider block">Admissions</span>
              <p className="text-[14px] font-semibold text-[#071b38] mt-0.5">Confirm with university intake</p>
            </div>

            <div>
              <span className="text-[12px] font-bold text-[#637b97] uppercase tracking-wider block">Funding & Grants</span>
              <p className="text-[14px] font-semibold text-[#071b38] mt-0.5">Explore available support</p>
            </div>

            <Button
              label="Explore Scholarships  →"
              style="Primary"
              className="w-full py-3 text-[14px]"
              onClick={() => navigateTo('scholarships')}
            />

            <p className="text-[12px] text-[#637b97] leading-relaxed italic text-center">
              Program and admission details are updated from official public catalogs.
            </p>
          </div>

        </div>

        {/* 6. AI Guidance Banner */}
        <BannerAiGuidance className="mt-6" />

      </div>
    </div>
  );
}
