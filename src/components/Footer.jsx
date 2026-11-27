import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Button } from './Button';

export function Footer() {
  const { navigateTo, showToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    showToast('Thank you for subscribing to EduPath Cambodia updates!');
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-r from-[#0d2b46] to-[#0a2138] text-white py-14 px-6 sm:px-12 lg:px-16 border-t border-[#13385c]">
      <div className="max-w-[1312px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start pb-12 border-b border-[#1b4369]">
          
          {/* Col 1: About EduPath */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div 
              onClick={() => navigateTo('home')} 
              className="cursor-pointer"
            >
              <img 
                src="/assets/edupath-footer-logo.png" 
                alt="EduPath Cambodia" 
                className="h-[48px] w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-[14px] leading-[22px] text-[#c2d1e0] max-w-[340px]">
              Empowering Cambodian students with accurate information, scholarship opportunities, and AI guidance for a brighter future.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: 'Facebook', symbol: 'f', url: 'https://facebook.com' },
                { name: 'Instagram', symbol: '◎', url: 'https://instagram.com' },
                { name: 'YouTube', symbol: '▶', url: 'https://youtube.com' },
                { name: 'LinkedIn', symbol: 'in', url: 'https://linkedin.com' }
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  title={s.name}
                  className="size-8 rounded-full bg-[#173e63] hover:bg-[#006cf9] transition-colors flex items-center justify-center text-[13px] font-bold text-white shadow-sm"
                >
                  {s.symbol}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-[15px] font-semibold text-white tracking-tight">Quick links</h4>
            <ul className="flex flex-col gap-2.5 text-[13.5px] text-[#c2d1e0]">
              <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => navigateTo('universities')} className="hover:text-white transition-colors">Universities</button></li>
              <li><button onClick={() => navigateTo('majors')} className="hover:text-white transition-colors">Majors</button></li>
              <li><button onClick={() => navigateTo('scholarships')} className="hover:text-white transition-colors">Scholarships</button></li>
              <li><button onClick={() => navigateTo('events')} className="hover:text-white transition-colors">Events</button></li>
            </ul>
          </div>

          {/* Col 3: Support & AI */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-[15px] font-semibold text-white tracking-tight">Support & Tools</h4>
            <ul className="flex flex-col gap-2.5 text-[13.5px] text-[#c2d1e0]">
              <li><button onClick={() => navigateTo('guidance')} className="hover:text-white transition-colors text-cyan-300">AI Career Guidance</button></li>
              <li><button onClick={() => navigateTo('favorites')} className="hover:text-white transition-colors">Saved Favorites</button></li>
              <li><button onClick={() => navigateTo('admin')} className="hover:text-white transition-colors">Admin Portal</button></li>
              <li><span className="text-slate-400">About EduPath Cambodia</span></li>
              <li><span className="text-slate-400">MoEYS Partnership</span></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <h4 className="text-[15px] font-semibold text-white tracking-tight">Subscribe to our newsletter</h4>
            <p className="text-[13px] leading-[20px] text-[#c2d1e0]">
              Get weekly updates on national university admissions, scholarship deadlines, and upcoming student seminars.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-[#071b38] px-4 py-2.5 rounded-10 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#006cf9] flex-1 min-w-0"
              />
              <Button
                type="submit"
                label="Subscribe"
                style="Primary"
                className="py-2.5 px-5 text-[14px] bg-[#006cf9] hover:bg-[#005ad4]"
              />
            </form>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[13px] text-[#c2d1e0] gap-4">
          <p>© 2026 EduPath Cambodia. All rights reserved.</p>
          <div className="flex gap-6 text-[12.5px]">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact Admissions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
