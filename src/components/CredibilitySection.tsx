import React from 'react';
import { ShieldCheck, Eye, CheckCircle2, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface CredibilitySectionProps {
  onOpenCertificate: () => void;
}

export const CredibilitySection: React.FC<CredibilitySectionProps> = ({ onOpenCertificate }) => {
  return (
    <section id="credibility" className="relative py-20 lg:py-28 bg-[#080F35] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E9B52E]">
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
            <span>CORPORATE CREDIBILITY</span>
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading [text-wrap:balance]">
            Registered. Accountable. Professionally Positioned.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Daqen Construction operates under a verified legal corporate identity registered with the Corporate Affairs Commission (CAC) of the Federal Republic of Nigeria.
          </p>
        </div>

        {/* Credibility Presentation Split Card */}
        <div className="rounded-3xl bg-[#050A24] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Legal Entity Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9B52E] flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-1.5" />
                  OFFICIAL CORPORATE REGISTRATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {COMPANY_INFO.legalName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Trading as <strong className="text-white">{COMPANY_INFO.brandName}</strong>
                </p>
              </div>

              {/* Verified Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Registration Number
                  </span>
                  <span className="text-lg font-bold text-[#E9B52E] font-mono block mt-0.5">
                    RC {COMPANY_INFO.registrationNumber}
                  </span>
                  <span className="text-[11px] text-slate-400">Corporate Affairs Commission</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Legal Entity Type
                  </span>
                  <span className="text-sm font-bold text-white block mt-0.5">
                    Private Company Limited by Shares
                  </span>
                  <span className="text-[11px] text-slate-400">Companies &amp; Allied Matters Act 2020</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Federal Jurisdiction
                  </span>
                  <span className="text-sm font-bold text-white block mt-0.5">
                    Federal Republic of Nigeria
                  </span>
                  <span className="text-[11px] text-slate-400">Incorporation Registry, Abuja</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Operating Sectors
                  </span>
                  <span className="text-sm font-bold text-white block mt-0.5">
                    Building, Civil &amp; Engineering
                  </span>
                  <span className="text-[11px] text-slate-400">Commercial &amp; Residential Scope</span>
                </div>
              </div>

              {/* Trust statement */}
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-start space-x-3 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Our corporate registration ensures legal accountability, verified commercial contractual capacity, and peace of mind for residential homeowners and institutional developers alike.
                </span>
              </div>

            </div>

            {/* Certificate Preview Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                onClick={onOpenCertificate}
                className="group relative max-w-sm w-full rounded-2xl overflow-hidden bg-slate-900 border-2 border-[#E9B52E]/40 hover:border-[#E9B52E] shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                {/* Certificate Thumbnail */}
                <div className="relative aspect-[3/4] w-full bg-slate-800 overflow-hidden">
                  <img
                    src={COMPANY_INFO.cacCertificateUrl}
                    alt="CAC Incorporation Certificate Thumbnail"
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A24] via-transparent to-transparent opacity-60" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#080F35]/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#E9B52E] text-[#080F35] flex items-center justify-center shadow-lg mb-2">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Click to View High-Resolution Certificate
                    </span>
                  </div>
                </div>

                {/* Button Banner Below Image */}
                <div className="p-4 bg-[#080F35] border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-[#E9B52E]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      CAC CERTIFICATE
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCertificate();
                    }}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#E9B52E] hover:bg-[#D6A122] text-[#080F35] uppercase transition-colors"
                  >
                    VIEW CERTIFICATE
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
