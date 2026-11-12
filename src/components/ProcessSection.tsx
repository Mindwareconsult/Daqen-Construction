import React, { useState } from 'react';
import { PROCESS_STAGES } from '../data/websiteData';
import { ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onStartProject: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="relative py-14 sm:py-20 lg:py-28 bg-[#060B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E9B52E]">
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
            <span>HOW WE WORK</span>
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading [text-wrap:balance]">
            From Your Idea to a Built Reality.
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our step-by-step engagement workflow provides clarity, structural accountability, and disciplined coordination from preliminary discussions through final handover.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Timeline */}
        <div className="hidden lg:block space-y-12">
          {/* Step Track */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-[#E9B52E] -translate-y-1/2 transition-all duration-500"
              style={{ width: `${(activeStep / (PROCESS_STAGES.length - 1)) * 100}%` }}
            />

            <div className="relative z-10 flex justify-between items-center">
              {PROCESS_STAGES.map((stage, idx) => {
                const isActive = idx === activeStep;
                const isPassed = idx <= activeStep;
                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-black text-sm transition-all duration-300 ${
                        isActive
                          ? 'bg-[#E9B52E] text-[#080F35] ring-4 ring-[#E9B52E]/30 scale-110 shadow-lg'
                          : isPassed
                          ? 'bg-[#101F79] text-white border-2 border-[#E9B52E]'
                          : 'bg-[#080F35] text-slate-400 border border-white/20 group-hover:border-white/50'
                      }`}
                    >
                      {stage.step}
                    </div>
                    <span
                      className={`text-xs font-semibold mt-3 transition-colors ${
                        isActive ? 'text-[#E9B52E] font-bold' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Showcase Card */}
          <div className="p-8 rounded-3xl glass-card border border-[#E9B52E]/30 shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#E9B52E]">
                  <span>STAGE {PROCESS_STAGES[activeStep].step}</span>
                  <span className="text-slate-500" aria-hidden="true">·</span>
                  <span>{PROCESS_STAGES[activeStep].subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {PROCESS_STAGES[activeStep].title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                  {PROCESS_STAGES[activeStep].description}
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col justify-center items-end space-y-3">
                <button
                  onClick={onStartProject}
                  className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#E9B52E] hover:bg-[#D6A122] text-[#080F35] shadow-lg flex items-center space-x-2 transition-all cursor-pointer whitespace-nowrap min-h-[44px]"
                >
                  <span>Begin at Stage 01</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] text-slate-400">
                  Select any stage above to preview scope
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-4 sm:space-y-6">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="p-5 sm:p-6 rounded-2xl bg-[#080F35] border border-white/10 space-y-2.5 sm:space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-heading text-[#E9B52E]">
                  {stage.step}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {stage.subtitle}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                {stage.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}

          <div className="pt-3 text-center">
            <button
              onClick={onStartProject}
              className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#E9B52E] text-[#080F35] flex items-center justify-center space-x-2 shadow-lg min-h-[48px] active:scale-98 transition-transform cursor-pointer"
            >
              <span>Schedule Initial Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
