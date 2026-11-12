import React from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  ShieldCheck,
  ArrowUp,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/websiteData';

interface FooterProps {
  onOpenCertificate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCertificate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Choose Us', href: '#advantage' },
    { name: 'How We Work', href: '#process' },
    { name: 'Corporate Credibility', href: '#credibility' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#04081B] text-slate-300 border-t border-white/10 pt-12 sm:pt-16 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-14 border-b border-white/10">
          
          {/* Brand & Legal Info */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#080F35] p-1.5 flex items-center justify-center border border-[#E9B52E]/40 shadow-md shrink-0">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Daqen Construction Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white block">
                  DAQEN <span className="text-[#E9B52E]">CONSTRUCTION</span>
                </span>
                <span className="text-xs text-slate-400">
                  Building Your Vision. Engineering Your Future.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Daqen Construction is the building and civil engineering brand of <strong className="text-white">DAQEN LIMITED</strong>. We deliver building construction, structural drawings, technical MEP documentation, and infrastructure development across Nigeria.
            </p>

            {/* Incorporation Tag */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
              <div className="flex items-center space-x-1.5 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#E9B52E] shrink-0" />
                <span>{COMPANY_INFO.legalName}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span className="font-mono">RC {COMPANY_INFO.registrationNumber}</span>
                <button
                  type="button"
                  onClick={onOpenCertificate}
                  className="text-[#E9B52E] hover:underline cursor-pointer min-h-[36px] flex items-center"
                >
                  Verify CAC Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-heading">
              Company
            </h4>
            <ul className="space-y-1 text-xs">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#E9B52E] transition-colors flex items-center py-1.5 min-h-[36px] group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600 group-hover:text-[#E9B52E] transition-colors shrink-0" />
                    <span className="whitespace-nowrap">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-heading">
              Capabilities
            </h4>
            <ul className="space-y-1 text-xs">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-[#E9B52E] transition-colors flex items-center py-1.5 min-h-[36px] group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600 group-hover:text-[#E9B52E] transition-colors shrink-0" />
                    <span className="truncate">{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts & Presence */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-heading">
              Contact Desk
            </h4>
            
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="flex items-center space-x-2 text-slate-300 hover:text-[#E9B52E] transition-colors min-h-[36px]"
              >
                <Phone className="w-4 h-4 text-[#E9B52E] shrink-0" />
                <span className="font-mono">{COMPANY_INFO.phones[0].number}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsApps[0].raw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors min-h-[36px]"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span className="font-mono">WhatsApp: {COMPANY_INFO.whatsApps[0].number}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center space-x-2 text-slate-300 hover:text-[#E9B52E] transition-colors min-h-[36px]"
              >
                <Mail className="w-4 h-4 text-[#E9B52E] shrink-0" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>

              <div className="pt-2 flex items-center space-x-3 text-slate-400 text-xs">
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center min-h-[36px]"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={COMPANY_INFO.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center min-h-[36px]"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-6 sm:pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left space-y-1">
            <p>© 2026 Daqen Construction. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-600">
              Registered Nigerian Company: {COMPANY_INFO.legalName} (RC {COMPANY_INFO.registrationNumber}).
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#E9B52E] transition-colors cursor-pointer min-h-[40px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
