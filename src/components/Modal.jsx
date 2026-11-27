import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Button } from './Button';
import { BadgeTeal, BadgeInfo } from './Badge';

export function Modal() {
  const { activeModal, modalData, closeModal, navigateTo, showToast } = useApp();
  const [authMode, setAuthMode] = useState(modalData?.mode || 'login');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  if (!activeModal) return null;

  const handleRegisterEvent = (e) => {
    e.preventDefault();
    closeModal();
    showToast(`Registration confirmed for ${modalData?.title}! Check your email.`);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    closeModal();
    showToast(authMode === 'login' ? 'Successfully logged in to EduPath!' : 'Account created successfully!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071b38]/60 backdrop-blur-sm animate-fadeIn">
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={closeModal} />

      <div className="relative bg-white rounded-20 shadow-2xl border border-[#e2ebf3] max-w-[620px] w-full max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-8 animate-scaleUp">
        
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 size-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
        >
          ✕
        </button>

        {/* 1. MAJOR DETAIL MODAL */}
        {activeModal === 'major-detail' && modalData && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <BadgeTeal label={modalData.category} />
              <BadgeInfo label={`${modalData.duration} Degree`} />
            </div>

            <div>
              <h2 className="text-[24px] font-bold text-[#071b38] leading-tight">
                {modalData.name}
              </h2>
              <p className="text-[14px] text-[#006cf9] font-medium mt-1">
                {modalData.degree}
              </p>
            </div>

            <div className="bg-[#f8fbfe] rounded-12 p-4 border border-[#e2ebf3]">
              <h4 className="text-[13px] font-bold text-[#637b97] uppercase tracking-wider mb-1.5">
                Overview & Career Impact
              </h4>
              <p className="text-[14px] text-[#071b38] leading-[22px]">
                {modalData.overview || modalData.description}
              </p>
            </div>

            <div>
              <h4 className="text-[14px] font-bold text-[#071b38] mb-2">
                Typical Career Outcomes
              </h4>
              <div className="flex flex-wrap gap-2">
                {(modalData.careers || []).map((c) => (
                  <span key={c} className="bg-[#ddf8f8] text-[#008a99] px-3 py-1 rounded-8 text-[13px] font-semibold">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[14px] font-bold text-[#071b38] mb-1.5">
                Core Competencies & Skills
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(modalData.skills || []).map((s) => (
                  <span key={s} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded text-[12px] font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#eaf7ff] rounded-12 p-3.5 flex items-center justify-between">
              <div>
                <span className="text-[12px] text-[#637b97] block">Estimated Salary Range (Cambodia)</span>
                <span className="text-[14px] font-bold text-[#006cf9]">{modalData.salaryRange}</span>
              </div>
              <Button
                label="Find Universities"
                style="Primary"
                className="py-2 px-4 text-[13px]"
                onClick={() => {
                  closeModal();
                  navigateTo('universities');
                }}
              />
            </div>
          </div>
        )}

        {/* 2. SCHOLARSHIP DETAIL MODAL */}
        {activeModal === 'scholarship-detail' && modalData && (
          <div className="flex flex-col gap-5">
            <div className="relative h-[160px] rounded-14 overflow-hidden -mt-2">
              <img src={modalData.image} alt={modalData.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3">
                <BadgeTeal label={modalData.badge} />
              </div>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-[#071b38]">
                {modalData.title}
              </h2>
              <p className="text-[14px] text-[#00a3b3] font-semibold mt-1">
                {modalData.meta} · {modalData.date}
              </p>
            </div>

            <div className="bg-[#f8fbfe] rounded-12 p-4 border border-[#e2ebf3]">
              <span className="text-[12px] font-bold text-[#637b97] uppercase tracking-wider block mb-1">
                Funding Coverage
              </span>
              <p className="text-[15px] font-bold text-[#006cf9]">
                {modalData.coverage}
              </p>
              <p className="text-[13px] text-slate-600 mt-2">
                <strong>Administering Body:</strong> {modalData.organization}
              </p>
              <p className="text-[13px] text-slate-600 mt-1">
                <strong>Eligibility:</strong> {modalData.eligibility}
              </p>
            </div>

            <div>
              <h4 className="text-[14px] font-bold text-[#071b38] mb-2">
                Application Checklist
              </h4>
              <ul className="flex flex-col gap-2">
                {(modalData.applicationProcess || []).map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-slate-700">
                    <span className="size-5 rounded-full bg-[#006cf9] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                label="Apply Official Portal"
                style="Primary"
                className="flex-1 py-3 text-[14px]"
                onClick={() => {
                  closeModal();
                  showToast('Redirecting to official scholarship portal...');
                }}
              />
              <Button
                label="Close"
                style="Secondary"
                className="py-3 px-5 text-[14px]"
                onClick={closeModal}
              />
            </div>
          </div>
        )}

        {/* 3. EVENT DETAIL & REGISTRATION MODAL */}
        {activeModal === 'event-detail' && modalData && (
          <div className="flex flex-col gap-5">
            <div className="relative h-[150px] rounded-14 overflow-hidden -mt-2">
              <img src={modalData.image} alt={modalData.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-[#006cf9] text-white px-3 py-1 rounded-8 font-bold text-[13px]">
                {modalData.day} {modalData.month}
              </div>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-[#071b38]">
                {modalData.title}
              </h2>
              <p className="text-[14px] text-[#00a3b3] font-medium mt-1">
                {modalData.type} · {modalData.venue} ({modalData.time})
              </p>
            </div>

            <p className="text-[14px] text-slate-700 leading-relaxed">
              {modalData.description}
            </p>

            {modalData.agenda && (
              <div className="bg-[#f8fbfe] rounded-12 p-4 border border-[#e2ebf3]">
                <h4 className="text-[13px] font-bold text-[#637b97] uppercase tracking-wider mb-2">
                  Session Schedule
                </h4>
                <ul className="flex flex-col gap-1.5 text-[13px] text-[#071b38]">
                  {modalData.agenda.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#006cf9]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <form onSubmit={handleRegisterEvent} className="flex flex-col gap-3 pt-2 border-t border-slate-100">
              <h4 className="text-[14px] font-bold text-[#071b38]">
                Reserve Your Free Seat ({modalData.seatsRemaining} spots left)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border border-[#e2ebf3] rounded-10 px-3.5 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#006cf9]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border border-[#e2ebf3] rounded-10 px-3.5 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#006cf9]"
                />
              </div>
              <Button
                type="submit"
                label="Confirm Free Registration  →"
                style="Primary"
                className="w-full py-3 text-[14px] mt-1"
              />
            </form>
          </div>
        )}

        {/* 4. QUICK SEARCH MODAL */}
        {activeModal === 'search-modal' && (
          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] font-bold text-[#071b38]">
              Quick Search EduPath
            </h3>
            <div className="flex items-center gap-3 px-4 py-3 bg-[#f8fbfe] rounded-12 border border-[#e2ebf3]">
              <img src="/assets/icon-search.svg" alt="Search" className="size-5 opacity-70" />
              <input
                type="text"
                autoFocus
                placeholder="Search majors, universities, scholarships..."
                className="bg-transparent text-[16px] text-[#071b38] w-full focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    closeModal();
                    navigateTo('universities');
                  }
                }}
              />
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[12px] font-bold text-[#637b97] uppercase">Quick Shortcuts</span>
              <div className="flex flex-wrap gap-2">
                {['Computer Science', 'RUPP Phnom Penh', 'STEM Scholarships', 'ITC Open House', 'AUPP Dual Degree'].map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      closeModal();
                      navigateTo('universities');
                    }}
                    className="bg-slate-100 hover:bg-[#006cf9] hover:text-white px-3 py-1.5 rounded-8 text-[13px] font-medium transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. AUTH MODAL (LOGIN / SIGN UP) */}
        {activeModal === 'auth-modal' && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-[22px] font-bold text-[#071b38]">
                {authMode === 'login' ? 'Log in to EduPath' : 'Create an Account'}
              </h2>
              <div className="flex gap-2 text-[13px]">
                <button
                  onClick={() => setAuthMode('login')}
                  className={`font-semibold ${authMode === 'login' ? 'text-[#006cf9]' : 'text-slate-400'}`}
                >
                  Log In
                </button>
                <span className="text-slate-300">·</span>
                <button
                  onClick={() => setAuthMode('signup')}
                  className={`font-semibold ${authMode === 'signup' ? 'text-[#006cf9]' : 'text-slate-400'}`}
                >
                  Sign Up
                </button>
              </div>
            </div>

            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-3.5">
              {authMode === 'signup' && (
                <div>
                  <label className="text-[13px] font-semibold text-[#071b38] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sothea Chan"
                    className="w-full border border-[#e2ebf3] rounded-10 px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#006cf9]"
                  />
                </div>
              )}

              <div>
                <label className="text-[13px] font-semibold text-[#071b38] block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="yourname@domain.com"
                  className="w-full border border-[#e2ebf3] rounded-10 px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#006cf9]"
                />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#071b38] block mb-1">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full border border-[#e2ebf3] rounded-10 px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#006cf9]"
                />
              </div>

              <Button
                type="submit"
                label={authMode === 'login' ? 'Log In' : 'Sign Up for Free'}
                style="Primary"
                className="w-full py-3 text-[15px] mt-2"
              />
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
