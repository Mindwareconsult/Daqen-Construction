import React from 'react';
import {
  Building2,
  Compass,
  Layers,
  ClipboardCheck,
  HardHat,
  Home,
  Palette,
  SunMedium,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../data/websiteData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onContactClick,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9B52E]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9B52E]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9B52E]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9B52E]" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9B52E]" />;
      case 'Home':
        return <Home className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9B52E]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9B52E]" />;
      case 'SunMedium':
        return <SunMedium className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9B52E]" />;
      default:
        return <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9B52E]" />;
    }
  };

  return (
    <section id="services" className="relative py-14 sm:py-20 lg:py-28 bg-[#080F35] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E9B52E]">
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
            <span>WHAT WE DO</span>
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading [text-wrap:balance]">
            Comprehensive Construction &amp; Engineering Solutions
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From technical drawings and engineering consultation to construction and building development, we provide services designed around your project requirements.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl p-5 sm:p-7 bg-[#050A24]/90 border border-white/10 hover:border-[#E9B52E]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#101F79]/30 flex flex-col justify-between"
            >
              <div className="space-y-3.5 sm:space-y-4">
                {/* Header Icon & Index */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#101F79] p-2.5 sm:p-3 flex items-center justify-center border border-[#E9B52E]/30 group-hover:scale-105 group-hover:border-[#E9B52E] transition-all shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E9B52E] transition-colors font-heading leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Clean Unboxed Metadata */}
                <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400">
                  {service.tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {i < service.tags.length - 1 && (
                        <span className="text-slate-600" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Functional Enquiry CTA Button */}
              <div className="pt-4 sm:pt-6 mt-3 sm:mt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-slate-200 group-hover:text-[#E9B52E] transition-colors cursor-pointer py-2 min-h-[44px]"
                >
                  <span className="whitespace-nowrap">Enquire For This Service</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Conversion Card */}
        <div className="mt-10 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel border border-[#E9B52E]/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-2xl">
          <div className="space-y-1.5 sm:space-y-2 text-center sm:text-left">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E9B52E] block">
              READY TO DISCUSS SPECIFIC REQUIREMENTS?
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-white font-heading">
              Need Help With a Project? Let's Talk.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Speak directly with our team to evaluate your architectural plans, structural needs, or construction timeline.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto shrink-0 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#E9B52E] hover:bg-[#D6A122] text-[#080F35] shadow-xl shadow-[#E9B52E]/20 transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap min-h-[48px]"
          >
            Request Project Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
