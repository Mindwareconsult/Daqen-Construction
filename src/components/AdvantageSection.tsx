import React from 'react';
import { ADVANTAGES } from '../data/websiteData';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AdvantageSection: React.FC = () => {
  return (
    <section id="advantage" className="relative py-14 sm:py-20 lg:py-28 bg-[#080F35] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E9B52E]">
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
            <span>THE DAQEN ADVANTAGE</span>
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading [text-wrap:balance]">
            Your Construction Project Deserves a Dependable Partner.
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We combine rigorous technical discipline with responsive customer service to deliver structures that stand the test of time, weather, and usage.
          </p>
        </div>

        {/* 6 Advantages Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.number}
              className="relative p-5 sm:p-8 rounded-2xl bg-[#050A24]/90 border border-white/10 hover:border-[#E9B52E]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group flex flex-col justify-between"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-heading text-[#E9B52E] tracking-tight">
                    {adv.number}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#E9B52E]/40 transition-colors shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#E9B52E]" />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E9B52E] transition-colors font-heading leading-snug">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 sm:pt-5 mt-3 sm:mt-4 border-t border-white/5 flex items-center space-x-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E9B52E] shrink-0" />
                <span>Verified Standard of Execution</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
