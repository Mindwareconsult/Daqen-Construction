import React from 'react';
import { ShieldCheck, Compass, CheckCircle2, ArrowRight, Award, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface AboutSectionProps {
  onLearnApproach: () => void;
  onOpenCertificate: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnApproach,
  onOpenCertificate,
}) => {
  return (
    <section id="about" className="relative py-14 sm:py-20 lg:py-28 bg-[#060B24] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Project Image & CAC Integration */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Image Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-900">
                <img
                  src="/daqen/projects/project-09.jpg"
                  alt="Daqen Construction Residential Building Development"
                  className="w-full h-[320px] sm:h-[440px] md:h-[480px] object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F35] via-transparent to-transparent opacity-75" />

                {/* Metadata Tag */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[11px] sm:text-xs font-semibold text-white/90 bg-[#080F35]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center space-x-2 max-w-[90%]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E9B52E] shrink-0" />
                  <span className="truncate">Two-Storey Residential Construction</span>
                </div>
              </div>

              {/* Overlapping Corporate Registration Glass Badge */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 w-full sm:max-w-[320px] rounded-2xl p-4 sm:p-5 glass-panel border border-[#E9B52E]/30 shadow-2xl backdrop-blur-xl">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-[#E9B52E] text-[#080F35] font-bold shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#E9B52E] block">
                      REGISTERED IN NIGERIA
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {COMPANY_INFO.legalName}
                    </h4>
                    <p className="text-xs text-slate-300 font-mono">
                      RC {COMPANY_INFO.registrationNumber}
                    </p>
                    <button
                      type="button"
                      onClick={onOpenCertificate}
                      className="inline-flex items-center text-xs font-semibold text-[#E9B52E] hover:underline pt-1 cursor-pointer min-h-[36px]"
                    >
                      <FileText className="w-3.5 h-3.5 mr-1" />
                      <span>Inspect CAC Certificate</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 pt-2 sm:pt-4 lg:pt-0">
            
            {/* Section Eyebrow */}
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E9B52E]">
              <span className="w-6 h-0.5 bg-[#E9B52E]" />
              <span>WHO WE ARE</span>
            </div>

            {/* Section Main Heading */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading [text-wrap:balance]">
              Building with Purpose.{' '}
              <span className="text-[#E9B52E] block">Creating Lasting Value.</span>
            </h2>

            {/* Authoritative Copy */}
            <div className="space-y-3.5 sm:space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white font-medium">Daqen Construction</strong> is a Nigerian construction and civil engineering company committed to providing building development, technical drawing, structural consultation, and related construction solutions.
              </p>
              <p>
                We work with individuals, homeowners, businesses, and property developers to transform construction ideas into practical and functional structures.
              </p>
              <p>
                With services extending across South-Eastern and South-South Nigeria, we are focused on quality workmanship, professional service, and building solutions that create lasting value.
              </p>
            </div>

            {/* Credibility Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center space-x-2 text-white font-semibold text-sm">
                  <Compass className="w-4 h-4 text-[#E9B52E] shrink-0" />
                  <span>Engineering Competence</span>
                </div>
                <p className="text-xs text-slate-400">
                  Disciplined structural calculations, detailed reinforcement schedules, and practical site solutions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center space-x-2 text-white font-semibold text-sm">
                  <Award className="w-4 h-4 text-[#E9B52E] shrink-0" />
                  <span>Registered &amp; Accountable</span>
                </div>
                <p className="text-xs text-slate-400">
                  Incorporated under the Companies and Allied Matters Act 2020 as DAQEN LIMITED.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
              <button
                onClick={onLearnApproach}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#101F79] hover:bg-[#152796] border border-[#E9B52E]/40 text-white transition-all shadow-md cursor-pointer group min-h-[44px]"
              >
                <span>Learn More About Our Approach</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCertificate}
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer min-h-[44px]"
              >
                <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400 shrink-0" />
                <span>Verify CAC Registration</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
