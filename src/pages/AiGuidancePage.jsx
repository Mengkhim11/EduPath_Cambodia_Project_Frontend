import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/Button';
import { BadgeTeal, BadgeInfo } from '../components/Badge';
import { aiGuidanceQuestions, majorsData, universitiesData, scholarshipsData } from '../data/mockData';

export function AiGuidancePage() {
  const { navigateTo, openModal } = useApp();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const question = aiGuidanceQuestions[currentStep - 1];

  const handleSelectOption = (optionId) => {
    setAnswers({ ...answers, [currentStep]: optionId });
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(1);
    setIsCompleted(false);
  };

  return (
    <div className="flex flex-col w-full min-h-[80vh]">
      {/* Intro */}
      <section className="bg-[#eaf7ff] border-b border-[#e2ebf3] py-10 px-6 sm:px-12 lg:px-16">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-3">
          <BadgeTeal label="PERSONALIZED CAREER ADVISOR" />
          <h1 className="text-[34px] sm:text-[44px] font-bold text-[#071b38] leading-tight">
            EduPath AI Guidance
          </h1>
          <p className="text-[16px] text-[#071b38]/80 max-w-[700px]">
            Answer 5 quick questions about your strengths, learning preferences, and career ambitions to get AI-generated university and major recommendations.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1000px] mx-auto px-6 sm:px-12 py-10 flex flex-col gap-8 w-full flex-1">
        
        {!isCompleted ? (
          /* Step-by-Step Wizard */
          <div className="bg-white rounded-20 p-6 sm:p-10 border border-[#e2ebf3] shadow-card flex flex-col gap-8">
            
            {/* Step Progress Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((stepNum) => (
                  <div
                    key={stepNum}
                    className={`size-8 rounded-full flex items-center justify-center font-bold text-[13px] transition-all ${
                      currentStep === stepNum
                        ? 'bg-[#006cf9] text-white shadow'
                        : currentStep > stepNum
                        ? 'bg-[#ddf8f8] text-[#00a3b3]'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {stepNum}
                  </div>
                ))}
              </div>
              <span className="text-[13px] font-semibold text-[#637b97]">
                Step {currentStep} of 5
              </span>
            </div>

            {/* Question Heading */}
            <div className="flex flex-col gap-1.5">
              <h2 className="text-[24px] sm:text-[28px] font-bold text-[#071b38]">
                {question.title}
              </h2>
              <p className="text-[15px] text-[#637b97]">
                {question.subtitle}
              </p>
            </div>

            {/* Answer Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {question.options.map((opt) => {
                const isSelected = answers[currentStep] === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`p-5 rounded-16 border-2 transition-all cursor-pointer flex flex-col gap-1.5 ${
                      isSelected
                        ? 'border-[#006cf9] bg-[#eaf7ff]/60 shadow-sm'
                        : 'border-[#e2ebf3] hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-[16px] font-bold text-[#071b38]">
                        {opt.label}
                      </h4>
                      <div className={`size-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-[#006cf9] bg-[#006cf9]' : 'border-slate-300'
                      }`}>
                        {isSelected && <div className="size-2 rounded-full bg-white" />}
                      </div>
                    </div>
                    <p className="text-[13px] text-[#637b97] leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <Button
                label="← Back"
                style="Secondary"
                disabled={currentStep === 1}
                onClick={handlePrev}
                className="px-6 py-2.5 text-[14px]"
              />

              <Button
                label={currentStep === 5 ? "Generate My Results  ✨" : "Next Step  →"}
                style="Primary"
                disabled={!answers[currentStep]}
                onClick={handleNext}
                className="px-8 py-3 text-[15px]"
              />
            </div>

          </div>
        ) : (
          /* Results View (AI Guidance · Results) */
          <div className="flex flex-col gap-8 animate-fadeIn">
            
            {/* Recommendation Match Summary */}
            <div className="bg-gradient-to-r from-[#006cf9] to-[#00a9b6] rounded-20 p-8 text-white shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <span className="bg-white/20 text-white px-3 py-1 rounded-8 text-[12px] font-bold tracking-wider uppercase w-fit">
                  AI MATCH SCORE: 96%
                </span>
                <h2 className="text-[28px] sm:text-[34px] font-bold leading-tight">
                  Your Ideal Path: Computer Science & Digital Tech
                </h2>
                <p className="text-white/90 text-[15px] max-w-[620px] leading-relaxed">
                  Based on your affinity for logic, desire for high-growth tech careers, and practical hands-on laboratories, software and digital engineering represent your strongest trajectory in Cambodia.
                </p>
              </div>
              <Button
                label="Retake Guidance"
                style="Secondary"
                className="bg-white text-[#006cf9] hover:bg-slate-100 px-6 py-3 text-[14px] shrink-0"
                onClick={handleRestart}
              />
            </div>

            {/* Recommended Majors */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[22px] font-bold text-[#071b38]">
                Recommended Majors for You
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {majorsData.slice(0, 3).map((m) => (
                  <div key={m.id} className="bg-white rounded-16 p-5 border border-[#e2ebf3] shadow-card flex flex-col justify-between">
                    <div>
                      <BadgeTeal label="Top Match" className="mb-2" />
                      <h4 className="text-[17px] font-bold text-[#071b38] mb-1">{m.name}</h4>
                      <p className="text-[13px] text-[#006cf9] font-semibold mb-2">{m.degree}</p>
                      <p className="text-[13px] text-[#637b97] line-clamp-3">{m.description}</p>
                    </div>
                    <Button
                      label="View Curriculum"
                      style="Secondary"
                      className="mt-4 py-2 text-[13px] rounded-10"
                      onClick={() => openModal('major-detail', m)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Matched Universities */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[22px] font-bold text-[#071b38]">
                Best-Fitting Universities in Cambodia
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {universitiesData.slice(0, 2).map((u) => (
                  <div key={u.id} className="bg-white rounded-16 p-5 border border-[#e2ebf3] shadow-card flex gap-4 items-center">
                    <img src={u.image} alt={u.name} className="size-20 rounded-12 object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <BadgeInfo label={u.ranking} className="mb-1" />
                      <h4 className="text-[16px] font-bold text-[#071b38] truncate">{u.name}</h4>
                      <p className="text-[13px] text-[#637b97] truncate">{u.location}</p>
                      <button
                        onClick={() => navigateTo('university-detail', u.id)}
                        className="text-[13px] font-bold text-[#006cf9] hover:underline mt-1 block"
                      >
                        Explore Campus →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applicable Scholarships */}
            <div className="bg-[#f8fbfe] rounded-20 p-6 border border-[#e2ebf3] flex flex-col gap-4">
              <h3 className="text-[20px] font-bold text-[#071b38]">
                Relevant Scholarships You Qualify For
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scholarshipsData.slice(0, 2).map((s) => (
                  <div key={s.id} className="bg-white p-4 rounded-14 border border-[#e2ebf3] flex items-center justify-between">
                    <div>
                      <h5 className="text-[15px] font-bold text-[#071b38]">{s.title}</h5>
                      <p className="text-[12.5px] text-[#00a3b3]">{s.coverage}</p>
                    </div>
                    <Button
                      label="View"
                      style="Secondary"
                      className="py-1.5 px-3 text-[13px]"
                      onClick={() => openModal('scholarship-detail', s)}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
