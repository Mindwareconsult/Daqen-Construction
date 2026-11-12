import React, { useEffect } from 'react';
import { X, ShieldCheck, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[94vh] flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-[#080F35] border border-[#E9B52E]/40 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-3.5 sm:p-5 bg-[#050A24] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#E9B52E] text-[#080F35] flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-base font-bold text-white font-heading truncate max-w-[200px] sm:max-w-none">
                CAC Certificate of Incorporation
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400">
                {COMPANY_INFO.legalName} • RC {COMPANY_INFO.registrationNumber}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Certificate Modal"
            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="relative flex-1 bg-slate-900/60 overflow-y-auto p-3 sm:p-4 flex items-center justify-center">
          <img
            src={COMPANY_INFO.cacCertificateUrl}
            alt="Corporate Affairs Commission Certificate of Incorporation for DAQEN LIMITED (RC 9397794)"
            className="max-h-[58vh] sm:max-h-[68vh] w-auto object-contain rounded-lg shadow-xl border border-white/10"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-5 bg-[#050A24] border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
          <div className="text-slate-300 text-[11px] sm:text-xs text-center sm:text-left">
            <span className="font-semibold text-white">Status:</span> Incorporated under the Companies &amp; Allied Matters Act 2020
          </div>

          <div className="flex items-center justify-end space-x-2">
            <a
              href={COMPANY_INFO.cacCertificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors min-h-[40px]"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              <span>Full Image</span>
            </a>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2 rounded-lg bg-[#E9B52E] hover:bg-[#D6A122] text-[#080F35] font-bold cursor-pointer min-h-[40px]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
