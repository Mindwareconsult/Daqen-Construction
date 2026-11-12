import React from 'react';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import { SERVICE_AREAS } from '../data/websiteData';

interface ServiceAreasSectionProps {
  onSelectArea: (areaName: string) => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({ onSelectArea }) => {
  return (
    <section id="service-areas" className="relative py-14 sm:py-20 lg:py-28 bg-[#060B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E9B52E]">
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
            <span>WHERE WE WORK</span>
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading [text-wrap:balance]">
            Serving Clients Across South-Eastern &amp; South-South Nigeria.
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Daqen Construction provides building development and civil engineering services across key regional centres, supporting clients with dependable site mobilization and engineering oversight.
          </p>
        </div>

        {/* 6 Regional Coverage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.state}
              className="p-5 sm:p-7 rounded-2xl bg-[#080F35] border border-white/10 hover:border-[#E9B52E]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group flex flex-col justify-between"
            >
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#101F79] flex items-center justify-center text-[#E9B52E] border border-white/10 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#E9B52E] transition-colors font-heading">
                        {area.state}
                      </h3>
                      <span className="text-xs text-[#E9B52E] font-medium block">
                        {area.hub}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">
                    {area.tag}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-5 mt-3 sm:mt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => onSelectArea(`${area.state} (${area.hub})`)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-[#E9B52E] transition-colors cursor-pointer py-1.5 min-h-[44px]"
                >
                  <span className="truncate mr-2">Inquire For Works in {area.state}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Mobility Notice */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-[#080F35]/70 border border-white/10 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <Compass className="w-5 h-5 text-[#E9B52E] shrink-0" />
            <span>
              <strong>Regional Mobilization:</strong> Our supervisory engineers, technical drawing consultants, and specialized construction crews mobilize across states with unified structural standards.
            </span>
          </div>

          <a
            href="https://www.google.com/maps/place/DAQEN+CONSTRUCTION/@5.5531148,7.3082623,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-semibold text-[#E9B52E] hover:underline flex items-center whitespace-nowrap min-h-[44px]"
          >
            <span>View Verified Google Map Location</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
