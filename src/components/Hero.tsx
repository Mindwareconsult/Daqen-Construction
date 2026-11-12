import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, MapPin, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface HeroProps {
  onDiscussProject: () => void;
  onExploreWork: () => void;
  onOpenCertificate: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onDiscussProject,
  onExploreWork,
  onOpenCertificate,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] sm:min-h-[92vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#080F35]"
    >
      {/* Background Project Image with High-Contrast Navy Gradient Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src="/daqen/projects/project-01.jpg"
          alt="Daqen Construction Active Building Project"
          className="w-full h-full object-cover object-center filter brightness-[0.40] contrast-[1.08] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrims Ensuring WCAG AAA Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A24] via-[#080F35]/85 to-[#080F35]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080F35] via-transparent to-[#080F35]/80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 xl:col-span-8 text-left space-y-4 sm:space-y-6 lg:space-y-8">
            
            {/* Clean Unboxed Eyebrow Kicker */}
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase text-[#E9B52E]">
              <span className="w-5 sm:w-8 h-0.5 bg-[#E9B52E] shrink-0" />
              <span className="truncate">CONSTRUCTION · CIVIL ENGINEERING · BUILDING</span>
            </div>

            {/* Contemporary Architectural Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.08] font-heading [text-wrap:balance]">
              Building Your Vision.{' '}
              <span className="text-[#E9B52E] block sm:inline">
                Engineering Your Future.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              From structural drawings and engineering consultation to building construction and property development, 
              <strong className="text-white font-medium"> Daqen Construction</strong> delivers practical, durable solutions that turn your ideas into lasting structures.
            </p>

            {/* Unboxed Metadata & Credibility Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-4 text-xs text-slate-300 pt-1">
              <button
                type="button"
                onClick={onOpenCertificate}
                className="flex items-center space-x-1.5 text-white hover:text-[#E9B52E] transition-colors cursor-pointer min-h-[36px]"
              >
                <ShieldCheck className="w-4 h-4 text-[#E9B52E] shrink-0" />
                <span className="font-semibold">{COMPANY_INFO.legalName}</span>
                <span className="text-slate-400 font-mono">({COMPANY_INFO.registrationNumber})</span>
              </button>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
              <span className="flex items-center space-x-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#E9B52E] shrink-0" />
                <span>Port Harcourt &amp; South-Eastern Nigeria</span>
              </span>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
              <span className="flex items-center space-x-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Verified On-Site Execution</span>
              </span>
            </div>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={onDiscussProject}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#E9B52E] hover:bg-[#D6A122] text-[#080F35] shadow-xl shadow-[#E9B52E]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap min-h-[48px]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer whitespace-nowrap min-h-[48px]"
              >
                <Building2 className="w-4 h-4 mr-2 text-slate-300" />
                <span>Explore Our Work</span>
              </button>
            </div>

          </div>

          {/* Right Floating Glass Card */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-end pt-2 lg:pt-0">
            <div className="rounded-3xl p-5 sm:p-7 glass-card border border-white/15 shadow-2xl space-y-4 sm:space-y-5 backdrop-blur-xl">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#080F35] p-1.5 flex items-center justify-center border border-[#E9B52E]/40 shrink-0">
                    <img
                      src={COMPANY_INFO.logoUrl}
                      alt="Daqen Emblem"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xs sm:text-sm font-bold text-white tracking-wide">
                      DAQEN CONSTRUCTION
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">RC 9397794 • Registered Contractor</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-semibold text-[#E9B52E] bg-white/5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-white/10 shrink-0">
                  Verified
                </span>
              </div>

              {/* Core Commitment Quote */}
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#E9B52E] block">
                  BRAND POSITIONING
                </span>
                <h4 className="font-heading text-base sm:text-xl font-bold text-white leading-snug">
                  “Your Vision. Our Expertise. Lasting Structures.”
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Translating architectural drawings and structural engineering calculations into durable, professionally managed physical builds.
                </p>
              </div>

              {/* Unboxed Metadata Metrics */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Registration</span>
                  <span className="text-xs font-bold text-white mt-0.5 block font-mono">RC 9397794</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Coverage</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">7 States S.E / S.S</span>
                </div>
              </div>

              {/* Direct WhatsApp Consultation Button */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsApps[0].raw}?text=${encodeURIComponent('Hello Daqen Construction, I would like to consult on a building project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-emerald-950/40 min-h-[44px]"
              >
                <span>Instant Consultation on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center text-slate-400 hover:text-[#E9B52E] transition-colors z-20 group"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold group-hover:text-white mb-1">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#E9B52E]" />
      </a>
    </section>
  );
};
