import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Button } from './Button';

export function Navigation() {
  const { currentPage, navigateTo, totalFavoritesCount, openModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'universities', label: 'Universities' },
    { id: 'majors', label: 'Majors' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'events', label: 'Events' },
    { id: 'guidance', label: 'AI Guidance' },
    { id: 'admin', label: 'Admin' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2ebf3] shadow-hero transition-all">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 h-[72px] flex items-center justify-between gap-6">
        {/* Brand */}
        <div 
          onClick={() => navigateTo('home')} 
          className="cursor-pointer flex items-center gap-3 shrink-0"
        >
          <img 
            src="/assets/edupath-logo.png" 
            alt="EduPath Cambodia Logo" 
            className="h-[46px] w-auto object-contain"
          />
        </div>

        {/* Desktop Primary Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id || (link.id === 'universities' && currentPage === 'university-detail');
            return (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`text-[14px] font-semibold transition-colors duration-150 relative py-1 cursor-pointer ${
                  isActive 
                    ? 'text-[#006cf9]' 
                    : 'text-[#637b97] hover:text-[#071b38]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-[-14px] left-0 right-0 h-[2.5px] bg-[#006cf9] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Account actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Favorites Button */}
          <button
            onClick={() => navigateTo('favorites')}
            title="Saved Favorites"
            className="relative p-2.5 rounded-full hover:bg-slate-100 transition-colors text-[#071b38] flex items-center justify-center cursor-pointer"
          >
            <img src="/assets/nav-favorites.svg" alt="Favorites" className="size-5" />
            {totalFavoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#006cf9] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {totalFavoritesCount}
              </span>
            )}
          </button>

          {/* Search Trigger */}
          <button
            onClick={() => openModal('search-modal')}
            title="Search"
            className="p-2.5 rounded-full border border-[#e2ebf3] hover:bg-slate-50 transition-colors text-[#637b97] flex items-center justify-center cursor-pointer"
          >
            <img src="/assets/icon-search.svg" alt="Search" className="size-4" />
          </button>

          {/* Auth buttons */}
          <Button 
            label="Log in" 
            style="Secondary" 
            className="h-[40px] px-4 text-[14px]"
            onClick={() => openModal('auth-modal', { mode: 'login' })}
          />
          <Button 
            label="Sign Up" 
            style="Primary" 
            className="h-[40px] px-4 text-[14px]"
            onClick={() => openModal('auth-modal', { mode: 'signup' })}
          />
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => navigateTo('favorites')}
            className="relative p-2 rounded-full text-[#071b38]"
          >
            <img src="/assets/nav-favorites.svg" alt="Favorites" className="size-5" />
            {totalFavoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#006cf9] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalFavoritesCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#071b38] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#e2ebf3] bg-white px-6 py-4 flex flex-col gap-3 shadow-dropdown animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                navigateTo(link.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left py-2 font-semibold text-[15px] ${
                currentPage === link.id ? 'text-[#006cf9]' : 'text-[#637b97]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <Button 
              label="Log in" 
              style="Secondary" 
              className="flex-1 py-2 text-[14px]"
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('auth-modal', { mode: 'login' });
              }}
            />
            <Button 
              label="Sign Up" 
              style="Primary" 
              className="flex-1 py-2 text-[14px]"
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('auth-modal', { mode: 'signup' });
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
}
