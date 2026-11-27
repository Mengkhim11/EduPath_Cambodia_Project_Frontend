import React from 'react';
import { useApp } from '../context/AppContext';
import { BadgeTeal } from './Badge';
import { Button } from './Button';

export function BannerAiGuidance({ className = "" }) {
  const { navigateTo } = useApp();

  const examplePrompts = [
    "Which majors suit my interests?",
    "What are the admission requirements for ITC?",
    "Show me scholarships for computer science"
  ];

  return (
    <div className={`bg-gradient-to-r from-[#f1faff] via-[#edf7ff] to-[#e4f6ff] rounded-20 p-6 sm:p-8 border border-blue-100 shadow-card flex flex-col lg:flex-row items-center justify-between gap-8 ${className}`}>
      
      {/* Left: AI Illustration */}
      <div className="size-[220px] sm:size-[240px] shrink-0 bg-white rounded-16 p-2 shadow-sm border border-blue-50 overflow-hidden flex items-center justify-center">
        <img
          src="/assets/ai-assistant.png"
          alt="EduPath AI Assistant"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Center: Copy & Action buttons */}
      <div className="flex-1 flex flex-col items-start gap-4 max-w-[620px]">
        <BadgeTeal label="AI-Powered Guidance" />
        
        <h2 className="text-[26px] sm:text-[30px] font-bold text-[#071b38] leading-[1.25]">
          Not sure which major is right for you?
        </h2>

        <p className="text-[15px] sm:text-[16px] text-[#071b38]/85 leading-[24px]">
          Chat with our AI assistant, take a personalized 5-step quiz, or explore your interests to get recommendations based on your skills and goals.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button
            label="Start AI Guidance  →"
            style="Primary"
            className="px-6 py-3 text-[15px]"
            onClick={() => navigateTo('guidance')}
          />
          <Button
            label="Try a Quick Quiz"
            style="Secondary"
            className="px-6 py-3 text-[15px]"
            onClick={() => navigateTo('guidance')}
          />
        </div>
      </div>

      {/* Right: Conversation examples card */}
      <div className="bg-white rounded-16 p-5 border border-[#e2ebf3] shadow-sm w-full lg:w-[290px] shrink-0 flex flex-col gap-3">
        <p className="text-[14px] font-semibold text-[#071b38]">
          You can ask things like:
        </p>
        
        {examplePrompts.map((prompt, idx) => (
          <div
            key={idx}
            onClick={() => navigateTo('guidance')}
            className="bg-[#eaf7ff] hover:bg-blue-100/70 cursor-pointer transition-colors rounded-12 p-2.5 flex items-start gap-2.5 text-left group"
          >
            <div className="size-[18px] shrink-0 mt-0.5">
              <img src="/assets/icon-book.svg" alt="Book" className="w-full h-full" />
            </div>
            <span className="text-[13px] text-[#071b38] leading-tight font-medium group-hover:text-[#006cf9]">
              {prompt}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
